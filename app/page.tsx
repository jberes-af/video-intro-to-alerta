"use client";

import MuxPlayer from "@mux/mux-player-react";

const PLAYBACK_ID = process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID ?? "";

export default function Page() {
  if (!PLAYBACK_ID) return <main style={{ padding: 24 }}>Missing NEXT_PUBLIC_MUX_PLAYBACK_ID</main>;

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        background: "black",
        display: "grid",
        placeItems: "center",
        padding: 12,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "min(100%, 1100px)",
          aspectRatio: "16 / 9",
          maxHeight: "100%",
        }}
      >
        <MuxPlayer
          playbackId={PLAYBACK_ID}
          autoPlay="muted"
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </main>
  );
}
