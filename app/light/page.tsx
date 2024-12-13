'use client';

import { useEffect, useState } from 'react';
import styles from '../../styles/traffic-light.module.css';

// API에서 반환될 데이터의 타입 정의
type TrafficLightColor = 'red' | 'orange' | 'green';

const TrafficLight: React.FC = () => {
  const [color, setColor] = useState<TrafficLightColor | ''>(''); // 현재 신호등 색상

  // API에서 색상 값을 가져오는 함수
  const fetchTrafficLightColor = async () => {
    try {
      const response = await fetch('http://160.22.155.156:5000/api/traffic-light');
      if (!response.ok) throw new Error('Failed to fetch');
      const data: { color: TrafficLightColor } = await response.json();
      setColor(data.color); // API로부터 가져온 색상을 상태에 반영
      console.log(`Initial traffic light color: ${data.color}`); // 초기 색상 로그 출력
    } catch (error) {
      console.error('Failed to fetch traffic light color:', error);
    }
  };

  // 주기적으로 API 호출
  useEffect(() => {
    fetchTrafficLightColor(); // 초기 데이터 가져오기
    const interval = setInterval(fetchTrafficLightColor, 2000); // 2초 간격으로 데이터 업데이트
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

  // 색상이 변경될 때마다 콘솔에 로그 출력
  useEffect(() => {
    if (color) {
      console.log(`Traffic light color changed to: ${color}`);
    }
  }, [color]);

  return (
    <div className={styles.trafficLight}>
      <div className={`${styles.light} ${color === 'red' ? styles.red : ''}`}></div>
      <div className={`${styles.light} ${color === 'orange' ? styles.orange : ''}`}></div>
      <div className={`${styles.light} ${color === 'green' ? styles.green : ''}`}></div>
    </div>
  );
};

export default TrafficLight;
