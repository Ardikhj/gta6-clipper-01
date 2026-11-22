# CREATIVE.md — gta6-clipper-01 round 2: Windah reaction cut

## Why a second clip

Round 1 (official Trailer 2, 08.0–38.0s, hook "VICE CITY IS BACK") was
submitted 2026-11-21 and scored, but it is one of 2,094 entries and its
footage is the same trailer every other entrant is cutting. A reaction cut
gives the Short a face, a voice and a local hook: Windah Basudara is the
biggest Indonesian gaming creator (20.8M subscribers), and his Trailer 2
reaction video has 932K views on its own. Indonesian viewers already know
his laugh and his "peganh kepala" disbelief — the Short borrows that
recognition instead of competing on trailer footage alone.

## The source

- Windah Basudara, "GILA TRAILER KE DUA RILIS DADAKAN! React GTA VI
  TRAILER 2", https://www.youtube.com/watch?v=Hqk9SBl3stI
  (18:26, 932,676 views at build time, downloaded 1080p60 with yt-dlp).
- The video is a screen recording: Windah watches Trailer 2 fullscreen
  with his facecam in the bottom-right corner. The trailer itself plays
  straight through, 05:30–08:16 in the reaction video (166 seconds,
  matching Trailer 2's own 166.8s runtime), so the footage in the clip
  is Rockstar's official trailer, with Windah reacting to it.
- The loudest 30-second window in the whole reaction (per-second RMS
  audio analysis) is 07:56–08:26 — the trailer's ending plus Windah's
  peak reaction. The window right after it is unusable: YouTube serves
  a Kinder Creamy ad the moment the trailer ends (~08:19).

## The chosen 30 seconds: 07:46–08:16 (466–496s)

The trailer's final 30 seconds, in order:

1. 07:46 — Lucia and Jason on the couch (Lucia in the LDC vest).
2. 07:58 — dirt-bike chase past the "Vice-Dale County" sign.
3. 08:04 — Vice City sunset aerial, palm trees; Windah laughs ("Hahaha!").
4. 08:12 — GTA VI logo card, "MAY 26, 2026"; Windah's mouth open.
5. 08:15 — Rockstar "R*" logo on black; Windah holds his head, laughing.

The arc is story beat → action → beauty shot → logo payoff → peak
reaction, and it ends exactly where the trailer ends, so no ad, no YouTube
end screen and no player UI leaks into the clip.

## Layout (ffmpeg, single render)

- Canvas 1080×1920, 30 fps, h264 + aac, loudness-normalised audio
  (the reaction's own audio: trailer sound plus Windah's voice/laughs).
- Top 1080×1080: the trailer, centre-cropped from the reaction frame
  (x 400–1400, y 110–970 — the right edge stops short of Windah's facecam
  so no sliver of him leaks into the trailer pane), blur-filled inside
  the pane.
- Bottom 1080×840: Windah's facecam, cropped from the reaction frame's
  bottom-right corner (x 1420–1920, y 710–1065 — the crop stops above the
  YouTube progress bar), scaled to cover, lightly sharpened.
- White 6px divider between the panes; a name tag on the facecam pane:
  "WINDAH BASUDARA - REACT GTA VI TRAILER 2".
- Hook, 0–3.5s, big yellow DejaVu Sans Bold with black outline over the
  trailer pane: "WINDAH SAMPE / PEGANG KEPALA!" — the thing he literally
  does at the end of the clip.
- Pitch, 18–30s, dark bar across the bottom of the canvas:
  "BUAT KLIP GINI, CUAN DI make.fun" + "Play code:
  makefun-tricycle-motel-gumdrop".

## Verification

- ffprobe: h264 + aac, 1080×1920, 30 fps, 30.000s.
- Frame at 1s: hook text fully visible, couch scene, Windah's face big.
- Frame at 15s: trailer scene (Brian's garage) top, Windah mid-sentence.
- Frame at 29s: Rockstar logo top, Windah hands-on-head laughing, pitch
  bar fully inside the frame (first render's pitch line overflowed the
  frame at fontsize 56 and was re-rendered at 48).

## Upload

- Title: "Windah Sampe Pegang Kepala Liat GTA 6!"
- Description (bounty line verbatim + play code + hashtags) is in the
  submission notes; the Short goes up on Ardikhj Studio as a public
  video, watchers Everyone, no YouTube-editor edits.
- The round 1 Short stays public; the bounty ranks the LAST submission's
  video, so this round 2 replaces it as the entry.
