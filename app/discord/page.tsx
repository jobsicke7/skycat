"use client";

import { useState } from "react";

export default function HomePage() {
  const [channelId, setChannelId] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    // 유효성 검사: 채널 ID와 메시지가 비어 있으면 오류 메시지 표시
    if (!channelId || !message) {
      setStatus("Please provide both a channel ID and a message.");
      return;
    }

    setLoading(true); // 로딩 시작

    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ channelId, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error(error); // 콘솔에 오류 로그
      setStatus("An error occurred.");
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  return (
    <div>
      <h1>Send a Message to Discord</h1>
      <input
        type="text"
        placeholder="Channel ID"
        value={channelId}
        onChange={(e) => setChannelId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
      {status && <p>{status}</p>}
    </div>
  );
}
