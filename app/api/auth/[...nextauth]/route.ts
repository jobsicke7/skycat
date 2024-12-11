import NextAuth, { NextAuthOptions } from "next-auth";
import NaverProvider from "next-auth/providers/naver";

const authOptions: NextAuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // 세션에 사용자 ID를 추가
      if (token) {
        session.user = session.user || {}; // user가 undefined인 경우 빈 객체로 초기화
        session.user.id = token.sub as string; // ID를 설정
      }
      return session;
    },
    async jwt({ token, account }) {
      // JWT에 사용자 ID를 추가
      if (account) {
        token.sub = account.providerAccountId; // 네이버 계정 ID
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin", // 로그인 페이지 경로
    error: "/auth/error", // 에러 페이지 경로
  },
  secret: process.env.NEXTAUTH_SECRET, // 암호화 키
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
