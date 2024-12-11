interface ErrorPageProps {
    searchParams?: { error?: string }; // searchParams는 선택적 속성
  }
  
  export default function ErrorPage({ searchParams }: ErrorPageProps) {
    const errorMessages: Record<string, string> = {
      Unauthorized: "로그인이 필요합니다.",
      Forbidden: "접근 권한이 없습니다.",
      default: "알 수 없는 오류가 발생했습니다.",
    };
  
    const error = searchParams?.error || "default";
  
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>오류</h1>
        <p>{errorMessages[error] || errorMessages.default}</p>
        <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
          홈으로 돌아가기
        </a>
      </div>
    );
  }
  