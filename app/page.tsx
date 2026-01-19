"use client";

import { useRef, useState } from "react";

const RUN_URL = "https://YOUR-CLOUD-RUN-URL/run";

export default function Page() {
  const termRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("Idle");
  const esRef = useRef<EventSource | null>(null);

  const append = (txt: string) => {
    const el = termRef.current;
    if (!el) return;
    el.textContent += txt;
    el.scrollTop = el.scrollHeight;
  };

  const run = () => {
    if (esRef.current) esRef.current.close();

    if (termRef.current) termRef.current.textContent = "";
    setStatus("Running...");

    const es = new EventSource(RUN_URL);
    esRef.current = es;

    es.onmessage = (ev) => append(ev.data + "\n");
    es.onerror = () => {
      setStatus("Disconnected");
      es.close();
      esRef.current = null;
    };
  };

  const clear = () => {
    if (termRef.current) termRef.current.textContent = "";
  };

  return (
    <>
      <div style={barStyle}>
        <button onClick={run}>Run</button>
        <button onClick={clear}>Clear</button>
        <span>{status}</span>
      </div>

      <div ref={termRef} style={termStyle} />
    </>
  );
}

const barStyle: React.CSSProperties = {
  padding: 10,
  background: "#111",
  color: "#eee",
  display: "flex",
  gap: 10,
  alignItems: "center",
};

const termStyle: React.CSSProperties = {
  height: "calc(100vh - 44px)",
  background: "#000",
  color: "#0f0",
  padding: 12,
  overflow: "auto",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  fontSize: 14,
  lineHeight: 1.35,
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};
