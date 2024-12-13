// app/page.tsx
'use client';

import { useEffect, useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState<string>('');

  // Fetch color from API
  useEffect(() => {
    const fetchColor = async () => {
      try {
        const response = await fetch('http://160.22.155.156:5000/api/traffic-light');
        const data = await response.json();
        setColor(data.color);
      } catch (error) {
        console.error('Error fetching traffic light color:', error);
      }
    };

    const interval = setInterval(fetchColor, 2000); // Poll every 2 seconds
    fetchColor(); // Initial fetch

    return () => clearInterval(interval); // Clean up interval
  }, []);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.light,
          backgroundColor: color === 'red' ? 'red' : 'gray',
        }}
      ></div>
      <div
        style={{
          ...styles.light,
          backgroundColor: color === 'orange' ? 'orange' : 'gray',
        }}
      ></div>
      <div
        style={{
          ...styles.light,
          backgroundColor: color === 'green' ? 'green' : 'gray',
        }}
      ></div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  light: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '10px',
    backgroundColor: 'gray',
    transition: 'background-color 0.5s ease',
  },
};

export default TrafficLight;