"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div style={style.container}>
      <h1 style={style.title}>Error 404</h1>
      <h2 style={style.sub}>링크가 이전되었거나, 삭제되었을 수 있습니다.</h2>
      <button style={style.button} onClick={navigateToHome}>
        Go to Home1
      </button>
    </div>
  );
}

const style = {
  title: {
    fontSize :"30px",
  },
  sub: {
    fontSize: "10px",
    color: 'gray'
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column" as const, // 수정된 부분
  },
  button: {
    marginTop: "60px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#00BFFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
