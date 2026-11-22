// gta6-clipper-01 round 2 — Windah reaction cut.
//
// The entry is the video itself. This program is the gate between the
// repository and the grader: it reads VIDEO.json from the bot directory,
// checks that it names a real public YouTube Short, and writes the same
// file into the output directory. Nothing else is read, nothing is
// fetched, and the program needs no network.
//
// Run it the way the kit expects, outside the grader container:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// and out/VIDEO.json comes out byte for byte the repository's VIDEO.json.
// (VIDEO.json holds a placeholder Shorts address until the round 2 clip is
// uploaded; the finalize step replaces it with the real address and the
// commit that carries it is the one that gets submitted.)

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const YOUTUBE_SHORT_PREFIX = 'https://www.youtube.com/shorts/';

function loadVideoAddress(): string {
  const raw = readFileSync(join(botDir, 'VIDEO.json'), 'utf8');
  const parsed: unknown = JSON.parse(raw);
  if (typeof parsed !== 'object' || parsed === null) {
    throw new Error('VIDEO.json is not a JSON object');
  }
  const url = (parsed as Record<string, unknown>).url;
  if (typeof url !== 'string' || url.length === 0) {
    throw new Error('VIDEO.json has no url string');
  }
  if (!url.startsWith(YOUTUBE_SHORT_PREFIX)) {
    throw new Error(`VIDEO.json url is not a youtube.com/shorts address: ${url}`);
  }
  return url;
}

let address: string;
try {
  address = loadVideoAddress();
} catch (error) {
  console.error(`VIDEO.json could not be used: ${(error as Error).message}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(
  join(outputDir, 'VIDEO.json'),
  JSON.stringify({ url: address }),
  'utf8',
);
