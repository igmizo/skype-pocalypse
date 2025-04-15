"use client";

import React, { useState, useEffect } from "react";

interface ClippyMessage {
  id: number;
  text: string;
  position: {
    top: number;
    left: number;
  };
}

export default function Animations() {
  const [clippyMessages, setClippyMessages] = useState<ClippyMessage[]>([]);
  const [nextId, setNextId] = useState(1);

  const clippyTexts = [
    "It looks like you're trying to save a friendship! Too bad, Skype's gone!",
    "Microsoft has determined that your friendship is no longer necessary.",
    "Have you tried turning your friendship off and on again?",
    "Fun fact: Bill Gates can't hear you crying!",
    "Remember when Skype worked? Those were the days!",
    "Try Microsoft Teams! (Just kidding, it's terrible for personal use)",
    "Your friendship has been deleted to improve shareholder value.",
    "Obsolescence is part of the Microsoft experience!",
    "Did you know? Microsoft also killed Hotmail, MSN, and your dreams!",
    "Error 404: Friendship not found.",
  ];

  // Show a Clippy message every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomText =
        clippyTexts[Math.floor(Math.random() * clippyTexts.length)];
      const newMessage: ClippyMessage = {
        id: nextId,
        text: randomText,
        position: {
          top: Math.random() * 70 + 10, // 10-80% from top
          left: Math.random() * 60 + 20, // 20-80% from left
        },
      };

      setClippyMessages((prev) => [...prev, newMessage]);
      setNextId((prev) => prev + 1);

      // Remove the message after 5 seconds
      setTimeout(() => {
        setClippyMessages((prev) =>
          prev.filter((msg) => msg.id !== newMessage.id)
        );
      }, 5000);
    }, 10000);

    // Show first message after 5 seconds
    const initialTimeout = setTimeout(() => {
      const randomText =
        clippyTexts[Math.floor(Math.random() * clippyTexts.length)];
      const newMessage: ClippyMessage = {
        id: 0,
        text: randomText,
        position: {
          top: Math.random() * 70 + 10,
          left: Math.random() * 60 + 20,
        },
      };

      setClippyMessages([newMessage]);
      setNextId(1);

      setTimeout(() => {
        setClippyMessages([]);
      }, 5000);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  // Animate Skype logo "being deleted"
  const [skypeGlitching, setSkypeGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setSkypeGlitching(true);

      setTimeout(() => {
        setSkypeGlitching(false);
      }, 500);
    }, 8000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <>
      {/* Clippy messages */}
      {clippyMessages.map((message) => (
        <div
          key={message.id}
          className="fixed z-50 bg-white border-2 border-gray-400 shadow-lg rounded p-3 w-64 animate-pulse"
          style={{
            top: `${message.position.top}%`,
            left: `${message.position.left}%`,
          }}
        >
          <div className="flex items-start gap-3">
            <img src="/images/clippy.gif" alt="Clippy" className="w-12 h-12" />
            <div className="flex-1">
              <div className="text-sm font-comic-sans">{message.text}</div>
              <button
                className="text-xs text-blue-600 underline mt-2"
                onClick={() =>
                  setClippyMessages((prev) =>
                    prev.filter((msg) => msg.id !== message.id)
                  )
                }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Skype logo in the corner that glitches */}
      <div className="fixed bottom-4 right-4 w-16 h-16 z-20">
        <div
          className={`relative ${skypeGlitching ? "animate-glitch" : ""}`}
          style={{
            filter: skypeGlitching
              ? "hue-rotate(90deg) contrast(1.5) blur(2px)"
              : "none",
            transform: skypeGlitching ? "scale(1.1) translateX(5px)" : "none",
          }}
        >
          <img
            src="/images/skype.svg"
            alt="Skype Logo"
            className="w-full h-full"
          />
          {skypeGlitching && (
            <div className="absolute inset-0 bg-red-500 mix-blend-multiply opacity-50"></div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-5px, 5px);
          }
          40% {
            transform: translate(-5px, -5px);
          }
          60% {
            transform: translate(5px, 5px);
          }
          80% {
            transform: translate(5px, -5px);
          }
          100% {
            transform: translate(0);
          }
        }

        .animate-glitch {
          animation: glitch 0.5s infinite;
        }
      `}</style>
    </>
  );
}
