import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isEditPage = req.nextUrl.pathname === "/edit";

  if (isEditPage) {
    if (!token) {
      // 로그인하지 않은 경우 권한 없음 페이지로 이동
      return NextResponse.redirect(new URL("/auth/error?error=Unauthorized", req.url));
    }

    // 네이버 ID가 "jslearn"이 아니면 권한 없음
    if (token.sub !== "jslearn") {
      return NextResponse.redirect(new URL("/auth/error?error=Forbidden", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/edit"], // 보호할 경로
};
