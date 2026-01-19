"use client";

import MuxPlayer from "@mux/mux-player-react";

const PLAYBACK_ID = process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID ?? "";

export default function Page() {
  if (!PLAYBACK_ID) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1 style={{ margin: 0, fontSize: 18 }}>Configuration required</h1>
        <p style={{ marginTop: 8 }}>
          Missing <code>NEXT_PUBLIC_MUX_PLAYBACK_ID</code>. Set it in Vercel →
          Project → Settings → Environment Variables, then redeploy.
        </p>
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
        // Autoplay reliably on mobile requires muted autoplay.
        autoPlay="muted"
        muted
        playsInline
        // Show controls so users can unmute / scrub.
        controls
        // Set to true if you want the QR page to loop continuously.
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
