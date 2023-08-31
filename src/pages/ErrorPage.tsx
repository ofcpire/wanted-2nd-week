import React from 'react';

export default function ErrorPage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold p-5">Not found!</h1>
      <a href="/">리스트로 돌아가기</a>
    </section>
  );
}
