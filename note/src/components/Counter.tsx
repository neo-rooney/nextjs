"use client";
import React, { useState } from "react";

export default function Counter() {
  console.log("안녕 - 클라이언트");

  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>+</button>
      <button>-</button>
    </div>
  );
}
