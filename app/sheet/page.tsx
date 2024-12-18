// app/page.tsx
"use client";
import { useEffect, useState } from 'react';

const GOOGLE_SHEETS_API_KEY = 'AIzaSyA23sOk-PppnVgCMuf5xY6qrapBoGthgU8'; // Google Cloud에서 생성한 API 키
const SPREADSHEET_ID = '1H5U7lMcvCy8ZaN5XM-q8vNUqhIzIqbDttcuYarbvmA0'; // Google Sheets의 ID
const RANGE = 'A1'; // 가져올 범위

const fetchSheetData = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${GOOGLE_SHEETS_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data from Google Sheets');
  }
  const data = await response.json();
  return data.values?.[0]?.[0] || 'No data found';
};

export default function HomePage() {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSheetData()
      .then((value) => setData(value))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Google Sheets Data</h1>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : data ? (
        <p>A1 Value: {data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
