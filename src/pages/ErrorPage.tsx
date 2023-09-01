import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();
  const navToList = () => navigate('/');

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold p-1">Not found!</h1>
      <button onClick={navToList}>리스트로 돌아가기</button>
    </section>
  );
}
