import React from 'react';

export default function LoadPageIndicator() {
  return (
    <div className="flex flex-col items-center justify-center h-[84px]">
      <img src={`${process.env.PUBLIC_URL}/90-ring.svg`} alt="loading-ring"></img>
    </div>
  );
}
