"use client";

import "./globals.css";
import GNB from "../components/GNB";
import FNB from "../components/FNB";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { SessionProvider } from "next-auth/react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <head>
          <title>잡식이라네</title>
          <meta name="description" content="잡식이라네" />
        </head>
        <body>
          <GNB />
          <main>{children}</main>
          <FNB />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </SessionProvider>
  );
}
