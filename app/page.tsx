"use client";

import { useState } from "react";

export default function HomePage() {
  const [channelId, setChannelId] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const sendMessage = async () => {
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
      setStatus("An error occurred.");
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
      <button onClick={sendMessage}>Send Message</button>
      {status && <p>{status}</p>}
    </div>
  );
}
