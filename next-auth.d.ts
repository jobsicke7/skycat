// next-auth.d.ts

import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // 사용자 ID를 명시적으로 추가
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
