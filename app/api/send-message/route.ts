import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { channelId, message } = body;
    if (!channelId || !message) {
      return NextResponse.json({ error: "Missing channelId or message" }, { status: 400 });
    }

    const res = await fetch("http://160.22.155.156:5000/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ channel_id: channelId, message }),
    });

    const data = await res.json();
    if (res.ok) {
      return NextResponse.json({ status: "success", data });
    } else {
      return NextResponse.json({ status: "error", error: data.message }, { status: res.status });
    }
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
