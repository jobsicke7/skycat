"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const LoginPage = () => {
  const { data: session } = useSession();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {!session ? (
        <>
          <h1>로그인</h1>
          <button
            onClick={() => signIn("naver")}
            style={{
              padding: "10px 20px",
              background: "#03C75A",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            네이버로 로그인
          </button>
        </>
      ) : (
        <>
          <h1>환영합니다, {session.user?.name}님!</h1>
          <button
            onClick={() => signOut()}
            style={{
              padding: "10px 20px",
              background: "#FF6B6B",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            로그아웃
          </button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
