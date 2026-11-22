# GTA 6: Windah Sampe Pegang Kepala! — Reaction Short (Round 2)

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Ardikhj/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Ardikhj/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
([gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01), $500 pot, top 20 by
YouTube views). This is **round 2**: it replaces the round 1 clip (official
Trailer 2 only, submitted 2026-11-21) with a reaction cut built to pull more
views from an Indonesian audience.

## The clip

A 30-second vertical Short cut from Windah Basudara's reaction to Rockstar's
**Grand Theft Auto VI Trailer 2** — "GILA TRAILER KE DUA RILIS DADAKAN! React
GTA VI TRAILER 2" (https://www.youtube.com/watch?v=Hqk9SBl3stI, 932K views).
The clip takes the loudest stretch of the reaction, the trailer's final
30 seconds (07:46–08:16 in the reaction video): Lucia and Jason on the couch,
the dirt-bike chase, the Vice City sunset aerial, the GTA VI logo card
("MAY 26, 2026") and the Rockstar logo — with Windah laughing, then holding
his head in disbelief at the end.

Layout is a reaction split-screen, built with ffmpeg: the trailer fills the
top half (blur-filled to 1080×1080), Windah's facecam the bottom half
(1080×840), a white divider between them. Big Indonesian hook text opens the
clip — "WINDAH SAMPE PEGANG KEPALA!" — and the make.fun pitch runs on screen
for the last 12 seconds:

> BUAT KLIP GINI, CUAN DI make.fun
> Play code: makefun-tricycle-motel-gumdrop

The video goes up on YouTube as a public Short on the channel **Ardikhj
Studio** (https://youtube.com/@ardikhj), with the bounty's line and the play
code in its description. See `CREATIVE.md` for the full creative notes.

## The video

`VIDEO.json` at this repository's root names the video's address on YouTube.
It holds a placeholder until the clip is uploaded; the real Shorts address
replaces it before submitting.

## The program

`main.ts` (Node 22, standard library only) reads `VIDEO.json` from the
repository root, checks it names a `youtube.com/shorts` address, and writes
it to the output directory. It prints nothing on success and needs no
network and no files outside the repository:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## License

MIT — see `LICENSE`.
