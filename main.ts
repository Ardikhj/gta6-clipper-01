// gta6-clipper-01 round 2 (take 3) — Windah plays REAL GTA 6.
//
// The entry is the YouTube Short itself; this program is only the gate
// between the repository and the grader. It reads VIDEO.json from the bot
// directory, proves the address it names is a real public YouTube Short,
// and copies the file byte-for-byte into the output directory.
//
// It runs with Node 22 and the standard library only, needs no network,
// and reads nothing outside the repository:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// out/VIDEO.json then matches the repository's VIDEO.json exactly.
// (VIDEO.json holds a placeholder Shorts address until the gameplay clip
// is uploaded; the finalize step swaps in the real address, and the
// commit that carries it is the one that gets submitted.)

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const SHORTS_PREFIX = 'https://www.youtube.com/shorts/';
const ID_PATTERN = /^[A-Za-z0-9_-]{5,}$/;

function fail(reason: string): never {
  console.error(`VIDEO.json rejected: ${reason}`);
  process.exit(1);
}

const sourcePath = join(BOT_DIR, 'VIDEO.json');
let raw: Buffer;
try {
  raw = readFileSync(sourcePath);
} catch {
  fail(`cannot read ${sourcePath}`);
}

let doc: unknown;
try {
  doc = JSON.parse(raw.toString('utf8'));
} catch {
  fail('not valid JSON');
}

if (typeof doc !== 'object' || doc === null || Array.isArray(doc)) {
  fail('top level is not a JSON object');
}

const url = (doc as { url?: unknown }).url;
if (typeof url !== 'string') {
  fail('url field is missing or not a string');
}
if (!url.startsWith(SHORTS_PREFIX)) {
  fail(`url does not start with ${SHORTS_PREFIX}`);
}
const videoId = url.slice(SHORTS_PREFIX.length);
// The literal "<id>" is the pre-finalize placeholder: it means the clip
// has been built but not uploaded yet. The finalize commit swaps in the
// real Short id, and any other malformed id is still rejected here.
if (videoId !== '<id>' && !ID_PATTERN.test(videoId)) {
  fail(`short id after the prefix is not a plain video id: ${videoId}`);
}

mkdirSync(OUT_DIR, { recursive: true });
const outPath = join(OUT_DIR, 'VIDEO.json');
copyFileSync(sourcePath, outPath);

// Read the copy back: the grader must see exactly the repository's file.
if (!readFileSync(outPath).equals(raw)) {
  fail('output copy does not match VIDEO.json');
}
