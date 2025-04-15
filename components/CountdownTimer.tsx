"use client";

import React, { useState, useEffect } from "react";

// The targeted date: May 1, 2025
const targetDate = new Date("2025-05-01T00:00:00");

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setIsExpired(true);
        // Play explosion sound effect
        const audio = new Audio("/audio/waaah.mp3");
        audio.volume = 0.7;
        audio.play().catch(() => console.log("Audio autoplay blocked"));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-impact text-center mb-4 text-error-red animate-pulse">
        COUNTDOWN TO MICROSOFT DESTROYING OUR FRIENDSHIP
      </h2>

      {!isExpired ? (
        <div className="flex justify-center items-center gap-4 bg-black p-6 rounded-lg border-4 border-error-red">
          <TimeUnit
            value={timeLeft.days}
            label="DAYS"
            fontClass="font-impact"
          />
          <div className="text-4xl text-white animate-blink">:</div>
          <TimeUnit
            value={timeLeft.hours}
            label="HOURS"
            fontClass="font-comic-sans"
          />
          <div className="text-4xl text-white animate-blink">:</div>
          <TimeUnit
            value={timeLeft.minutes}
            label="MINUTES"
            fontClass="font-papyrus"
          />
          <div className="text-4xl text-white animate-blink">:</div>
          <TimeUnit
            value={timeLeft.seconds}
            label="SECONDS"
            fontClass="font-times-new-roman"
          />
        </div>
      ) : (
        <div className="relative text-center">
          <div className="text-5xl font-bold text-error-red mb-6 animate-shake">
            FRIENDSHIP TERMINATED!
          </div>
          <img
            src="/images/skype-explosion.gif"
            alt="Skype Exploding"
            className="w-64 h-64 mx-auto"
          />
          <div className="text-2xl mt-4 font-bold text-error-red">
            WAAAAAAAAAAH! MICROSOFT KILLED OUR CHATS!
          </div>
        </div>
      )}
    </div>
  );
}

function TimeUnit({
  value,
  label,
  fontClass,
}: {
  value: number;
  label: string;
  fontClass: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`text-5xl font-bold bg-gradient-to-b from-red-500 to-yellow-500 text-transparent bg-clip-text ${fontClass}`}
      >
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm text-white mt-1 font-courier-new">{label}</div>
    </div>
  );
}
