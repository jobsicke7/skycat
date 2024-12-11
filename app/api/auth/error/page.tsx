"use client"; // 클라이언트 컴포넌트임을 명시

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams?.get("error") || "default";

  const errorMessages: Record<string, string> = {
    Unauthorized: "로그인이 필요합니다.",
    Forbidden: "접근 권한이 없습니다.",
    default: "알 수 없는 오류가 발생했습니다.",
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>오류</h1>
      <p>{errorMessages[error] || errorMessages.default}</p>
      <Link
        href="/"
        style={{ color: "blue", textDecoration: "underline", fontSize: "16px" }}
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
