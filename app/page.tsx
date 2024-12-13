// app/page.tsx
"use client";

import { useEffect, useState } from "react";

const TrafficLightColor = () => {
  const [color, setColor] = useState<string>("loading....");

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const response = await fetch("https://api.jobsicke.xyz/traffic-light");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);  // 응답 데이터 로그
        setColor(data.color);
      } catch (error) {
        console.error("Failed to fetch traffic light color:", error);
        setColor("Error fetching color");
      }
    };

    fetchColor();
    const interval = setInterval(fetchColor, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "2rem",
        fontWeight: "bold",
        color: color === "red" ? "red" : color === "yellow" ? "goldenrod" : "green",
      }}
    >
      {color}
    </div>
  );
};

export default TrafficLightColor;