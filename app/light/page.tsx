// app/traffic-light/page.tsx
"use client";

import { useEffect, useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState<string>("red");

  useEffect(() => {
    const fetchTrafficLight = async () => {
      try {
        const response = await fetch("https://api.jobsicke.xyz/traffic-light");
        const data = await response.json();
        if (data?.color) {
          setColor(data.color);
        }
      } catch (error) {
        console.error("Failed to fetch traffic light data:", error);
      }
    };

    fetchTrafficLight();
    const interval = setInterval(fetchTrafficLight, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px", padding: "20px" }}>
      <div style={{ width: "100px", height: "300px", backgroundColor: "#333", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: color === "red" ? "red" : "#555",
          }}
        ></div>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: color === "orange" ? "orange" : "#555",
          }}
        ></div>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: color === "green" ? "green" : "#555",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
