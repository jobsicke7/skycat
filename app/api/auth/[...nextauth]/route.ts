import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";

export const authOptions = {
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
