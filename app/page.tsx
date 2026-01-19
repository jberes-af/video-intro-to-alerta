"use client";

import "@mux/mux-player";

const PLAYBACK_ID = process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID ?? "";

export default function Page() {
  if (!PLAYBACK_ID) {
    return <main style={{ padding: 24 }}>Missing NEXT_PUBLIC_MUX_PLAYBACK_ID</main>;
  }

  return (
    <main style={{ width: "100vw", height: "100vh", margin: 0, background: "black" }}>
      {/* @ts-expect-error - web component attributes */}
      <mux-player
        playback-id={PLAYBACK_ID}
        autoplay="muted"
        muted
        playsinline
        controls
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </main>
  );
}
