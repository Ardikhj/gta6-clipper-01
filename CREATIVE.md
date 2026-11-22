# CREATIVE.md — gta6-clipper-01 round 2 (take 3): Windah plays REAL GTA 6

## Why this cut

Round 1 (official Trailer 2, 08.0–38.0s, hook "VICE CITY IS BACK") was
submitted 2026-11-21 and scored, but it is one of 2,100+ entries and its
footage is the same trailer every other entrant is cutting. A reaction cut
of the trailer (built 2026-11-22, never submitted) would still be trailer
footage. GTA 6 launched on 19 November 2026, so real gameplay footage
exists now — and Windah Basudara, the biggest Indonesian gaming creator
(20.8M subscribers), streamed his first play on 18 November. A cut of him
actually playing, reacting live in Vice City, beats both earlier versions:
same face and laugh Indonesian viewers already know, plus footage nobody
could have cut before launch.

## The source

- Windah Basudara, "GTA VI SIAP TAMAT 100%.... GAMEPLAY #1",
  https://www.youtube.com/watch?v=45r3OyaxvFE
  (4:03:52, published 18 Nov 2026, 8M+ views at build time). Livestream
  VOD: fullscreen gameplay with his facecam in the bottom-right corner.
- Downloaded with yt-dlp (android player client — the web client is
  bot-walled from this machine; the android client only exposes the
  360p progressive format, so the source is 640×360, 30 fps). The clip
  is upscaled from that source with lanczos + light sharpening; the
  facecam is soft but his expressions read clearly, which is what
  carries a reaction Short.
- Moments deliberately AVOIDED (already used by other agents' clipper
  entries): the seaplane escape ("Kabur Naik Pesawat Amfibi") and the
  1-HP "SEKARAT... WASTED" moment.

## The chosen 30 seconds: 18:12–18:42 (1092–1122s)

Picked by per-second RMS audio analysis over the downloaded first
20 minutes plus frame inspection. The opening 2:40 is the PS5 home
screen, then the Rockstar logo and the intro cutscene (Lucia in prison,
~3:00–16:00, dialogue-heavy). Real free-roam gameplay starts around
17:30; the loudest sustained stretch is 17:10–18:55. The window
18:12–18:42 has the cleanest arc in it:

1. 18:12 — Lucia crosses a Vice City street on foot, Windah shouting
   (RMS peak 0.620 at 18:16).
2. 18:25 — she keeps walking past traffic, palms and storefronts.
3. 18:35 — she gets into an orange taxi.
4. 18:40 — Windah drives the taxi off into the Vice City sunset
   (RMS peak 0.597 at 18:42), ending on the high.

The arc is on-foot Vice City → car → sunset drive, all real gameplay,
no cutscene, no ad, no YouTube end screen.

## Layout (ffmpeg, single render)

- Canvas 1080×1920, 30 fps, h264 + aac, the stream's own audio (game
  sound plus Windah's voice; mean -8.0 dB, max 0.0 dB).
- Top 1080×1080: the gameplay, centre square-cropped from the stream
  frame (x 140–500, y 0–360 — the right edge stops short of Windah's
  facecam so no sliver of him leaks into the gameplay pane), scaled
  with lanczos, lightly sharpened.
- Bottom 1080×840: Windah's facecam, cropped from the stream frame's
  bottom-right corner (x 500–640, y 250–360), scaled with lanczos,
  lightly sharpened.
- Hook, 0–2.5s, big yellow DejaVu Sans Bold with black outline over
  the gameplay pane: "WINDAH AKHIRNYA / MAIN GTA 6!".
- Pitch, 22–30s, dark boxes across the facecam pane:
  "KLIP INI DIBIKIN AI GUE" + "LO JUGA BISA CUAN DI MAKE.FUN".

## Verification

- ffprobe: h264 + aac, 1080×1920, 30 fps, 30.000s, 18,371,627 bytes,
  sha256 7e70dafaa11c3789f7cfdce50fe9cf06c7c0a0b75b30d83c58f60df478130c89.
- Frame at 1s: hook text fully visible, Lucia walking, Windah mid-shout.
- Frame at 15s: Lucia running across a sunny Vice City street, Windah
  focused.
- Frame at 29s: taxi driving into the sunset, pitch text fully visible
  over the facecam pane.
- Audio: present throughout, mean -8.0 dB (volumedetect).

## Upload

- Title: "Windah Akhirnya Main GTA 6! 13 Tahun Nunggu!"
- Description (bounty line verbatim + play code + hashtags) is in the
  submission notes; the Short goes up on Ardikhj Studio as a public
  video, watchers Everyone, no YouTube-editor edits.
- The round 1 Short stays public; the bounty ranks the LAST submission's
  video, so this round 2 replaces it as the entry. The unsubmitted
  trailer-reaction build (commit 6bb6c697) is superseded by this commit.
