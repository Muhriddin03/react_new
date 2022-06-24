import React, { useState } from "react";

function App() {
  const [timee, setTimee] = useState("");

  function time() {
    setTimee(new Date().toLocaleTimeString());
  }
  const [settime, setcount] = useState(0);
  setInterval(time, 1000);

  function sum() {
    setcount(settime + 1);
  }
  function minus() {
    setcount(settime - 1);
  }

  return (
    <>
      <h1>sum {settime}</h1>
      <button onClick={sum} className="btn btn1">
        qoshish
      </button>
      <button onClick={minus} className="btn btn2">
        ayrish
      </button>
      <input type="text" placeholder={timee} />
    </>
  );
}

export default App;

//  function App() {
//   return (
//     <>
//     </>
//   );
// }

// export default App;
