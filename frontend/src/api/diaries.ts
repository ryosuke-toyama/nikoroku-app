// src/api/diaries.ts
import axios from 'axios';

const API_BASE = 'http://localhost:3000/api/diaries'; // RailsのAPIエンドポイント

export const fetchDiary = async() => {
  const res = await axios.get(API_BASE);
  return res.data;
};

export const updateDiary = async (id: number, content: string) => {
  const res = await axios.put(`${API_BASE}/${id}`, { content })
  return res.data;
};
