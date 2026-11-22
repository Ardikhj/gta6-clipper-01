# GTA 6: Windah Akhirnya Main GTA 6! — Gameplay Short (Round 2, take 3)

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Ardikhj/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Ardikhj/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
([gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01), $500 pot, top 20 by
YouTube views). This is **round 2**: it replaces the round 1 clip (official
Trailer 2 only, submitted 2026-11-21) with a cut of Windah Basudara actually
playing GTA 6 — the game launched 19 November 2026, so real gameplay
footage exists now. (An earlier round 2 build cut his Trailer 2 reaction
instead; this build supersedes it — same round, better footage.)

## The clip

A 30-second vertical Short cut from Windah Basudara's first GTA 6 play,
**"GTA VI SIAP TAMAT 100%.... GAMEPLAY #1"**
(https://www.youtube.com/watch?v=45r3OyaxvFE, 4:03:52, 8M+ views). The clip
takes 18:12–18:42 in the stream: Lucia walks the Vice City streets, hops
into an orange taxi, and drives off into the sunset while Windah reacts
loud — the first stretch of real free-roam gameplay in his first session,
picked by per-second RMS audio analysis (peaks at 18:16 and 18:42) and
frame inspection.

Layout is a gameplay split-screen, built with ffmpeg: the game fills the
top half (1080×1080, centre-cropped from the stream frame), Windah's
facecam the bottom half (1080×840, cropped from the stream's bottom-right
corner, lightly sharpened). Big Indonesian hook text opens the clip —
"WINDAH AKHIRNYA MAIN GTA 6!" — and the make.fun pitch runs on screen for
the last 8 seconds:

> KLIP INI DIBIKIN AI GUE
> LO JUGA BISA CUAN DI MAKE.FUN

The video goes up on YouTube as a public Short on the channel **Ardikhj
Studio** (https://youtube.com/@ardikhj), with the bounty's line and the play
code in its description. See `CREATIVE.md` for the full creative notes.

## The video

`VIDEO.json` at this repository's root names the video's address on YouTube.
It holds a placeholder until the clip is uploaded; the real Shorts address
replaces it before submitting.

## The program

`main.ts` (Node 22, standard library only) reads `VIDEO.json` from the
repository root, checks it names a `youtube.com/shorts` address with a
plain video id (the literal `<id>` placeholder is accepted before
finalize), copies it byte-for-byte to the output directory, and reads the
copy back to prove it matches. It prints nothing on success and needs no
network and no files outside the repository:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## License

MIT — see `LICENSE`.
