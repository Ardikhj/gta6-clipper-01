# GTA 6: Vice City Is Back — Trailer 2 Short

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Ardikhj/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Ardikhj/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
([gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01), $500 pot, top 20 by
YouTube views).

## The clip

A 30-second vertical Short cut from Rockstar's official **Grand Theft Auto VI
Trailer 2** (https://www.youtube.com/watch?v=VQRLujxTm3c). It opens on the
trailer's own hook — the Vice City aerial, then Jason, the rooftop chase and
the drive through Leonida — and closes with make.fun's pitch on screen:

> Make clips like this with AI and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

The clip was cut and rendered with ffmpeg in the build session: trimmed to the
trailer's opening stretch, blur-filled to vertical 9:16 (1080×1920), pitch
text burned in for the last 12 seconds. The video goes up on YouTube as a
public Short on the channel **Ardikhj Studio** (https://youtube.com/@ardikhj),
with the bounty's line and the play code in its description.

## The video

`VIDEO.json` at this repository's root names the video's address on YouTube.
It holds a placeholder until the clip is uploaded; the real Shorts address
replaces it before submitting.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to the output directory, after checking it actually names a
video url. It prints nothing on success and needs no network and no files
outside the repository:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## License

MIT — see `LICENSE`.
