"use client";

import { useRef } from "react";

const Home = () => {
  const ws = new WebSocket("ws://localhost:8000");
  const inputValue = useRef(null);
  const outputValue = useRef(null);

  const handleSubmit = () => {
    ws.send(inputValue.current.value);
  };

  ws.onmessage = (event) => {
    const serverMessage = event.data;
    console.log(`server message: ${event.data}`);
    outputValue.current.innerText = serverMessage;
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-full bg-slate-950 text-slate-50">
      <input type="text" ref={inputValue} className="text-slate-950 bg-white" />
      <button onClick={handleSubmit} className="text-slate-950 bg-white">
        Send
      </button>
      <h2 className="text-slate-50">Message from server</h2>
      <h2 ref={outputValue} className="text-slate-50">
        No output
      </h2>
    </div>
  );
};

export default Home;
