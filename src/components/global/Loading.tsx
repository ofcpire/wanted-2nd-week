import React from 'react';

export default function Loading() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <img src={`${process.env.PUBLIC_URL}/90-ring.svg`} alt="loading-ring"></img>
    </section>
  );
}
