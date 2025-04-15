"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import MemeZone from "@/components/MemeZone";
import NoticeSection from "@/components/NoticeSection";
import InteractiveButtons from "@/components/InteractiveButtons";
import GuestBook from "@/components/GuestBook";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";

export default function Home() {
  const [isShaking, setIsShaking] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Easter egg - randomly shake the page every 30-60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 1000);
      }
    }, 30000 + Math.random() * 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`min-h-screen ${isShaking ? "animate-shake" : ""}`}>
      {/* Background noise texture */}
      <div className="fixed inset-0 bg-repeat bg-noise opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-8 font-comic-sans">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-pink-500 animate-pulse shadow-neon mb-2">
            Ivars & Andrew: Skype-pocalypse 2025
          </h1>
          <div className="bg-yellow-300 p-2 border-4 border-blue-600 animate-marquee whitespace-nowrap overflow-hidden">
            <span className="text-red-600 text-xl">
              RIP our 3 a.m. chats... Thanks, greedy Redmond overlords... Ivars
              + Andrew 4eva... Microsoft killed our vibe... Press F to pay
              respects...
            </span>
          </div>
        </div>

        <CountdownTimer />

        <HeroSection />

        <MemeZone />

        <InteractiveButtons
          onPanicClick={() => setIsShaking(true)}
          onStopShaking={() => setIsShaking(false)}
        />

        <NoticeSection />

        <GuestBook />

        <Footer />

        <Animations />

        {/* Easter Egg - appears randomly */}
        {showEasterEgg && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={() => setShowEasterEgg(false)}
          >
            <div className="bg-white p-4 rounded animate-spin-slow">
              <img
                src="https://media.tenor.com/x8v1oNUOmg4AAAAM/rickroll-roll.gif"
                alt="Easter Egg"
                className="max-w-sm"
              />
            </div>
          </div>
        )}

        {/* Hidden easter egg trigger */}
        <div
          className="fixed bottom-0 right-0 w-4 h-4 z-40"
          onClick={() => setShowEasterEgg(true)}
        ></div>
      </div>
    </main>
  );
}
