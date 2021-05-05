import { useState, useEffect } from "react";
export default function Response({ time }) {
  return (
    <div className="App">
      <h1>Success on Finding Falcone!!</h1>
      <h2>Time Taken: {time}</h2>
    </div>
  );
}
