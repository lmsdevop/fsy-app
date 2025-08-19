import { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Meu PWA em React + TS</h1>
      <p>Esse app funciona offline e pode ser instalado no celular!</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Cliquei {count} vezes
      </button>
    </div>
  );
}
