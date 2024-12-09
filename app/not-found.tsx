"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={navigateToHome}>
        Go to Home
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column" as const, // 수정된 부분
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
