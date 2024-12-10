import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";

// NextAuth 설정
const handler = NextAuth({
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // URL 검증 및 리디렉션 로직
      if (url.startsWith(baseUrl)) {
        return url;
      }
      return baseUrl;
    },
  },
});

// GET, POST 메서드로 핸들러 내보내기
export { handler as GET, handler as POST };
