import React, { useEffect, useState } from "react";

const TimerComponent = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log("⏰ Timer started");
    const timer = setInterval(() => {
      setSecond((prev) => prev + 1);
      console.log(`Seconds : ${second}s`);
    }, 1000);


    //To prevent from the memory leak / sideEffect.
    return ()=>{      
        clearInterval(timer)
        console.log("🔴 Timer Stopped !!")
    }
  }, []);

  return (
    <>
      <h1>Timer: {second}s</h1>
    </>
  );
};

export default TimerComponent;
