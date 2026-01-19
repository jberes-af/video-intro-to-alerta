"use client";

import MuxPlayer from "@mux/mux-player-react";

const PLAYBACK_ID = process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID ?? "";

export default function Page() {
  if (!PLAYBACK_ID) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        Missing <code>NEXT_PUBLIC_MUX_PLAYBACK_ID</code>
      </main>
    );
  }

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        background: "black",
      }}
    >
      <MuxPlayer
        playbackId={PLAYBACK_ID}
        autoPlay="muted"
        muted
        playsInline
        loop={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </main>
  );
}
