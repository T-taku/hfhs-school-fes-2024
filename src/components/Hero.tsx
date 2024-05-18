"use client"

import { useState, useEffect } from "react";

export default function Hero(){
  const calculateDaysLeft = () => {
    const currentDate = new Date();
    const targetDate = new Date('2024-06-07'); // ターゲットの日付
    const difference = targetDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return daysLeft;
  };

  const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(calculateDaysLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return(
    <>
      <div className="hero_slideshow">
        <div className="divide-y divide-blue-400">
          <span className="hero_text">
          <span className="text-3xl">東福岡学園祭まで</span><br/>
            <span className="text-3xl">あと<span className="text-5xl">{daysLeft}</span>日<br/></span>
          </span>
        </div>
      </div>
    </>
  )
}