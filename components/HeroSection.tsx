"use client";

import React from "react";

export default function HeroSection() {
  return (
    <div className="mb-12">
      <div className="bg-gradient-to-r from-red-500 via-yellow-300 to-red-500 p-4 border-8 border-blue-600 rounded-lg relative overflow-hidden">
        {/* Blinking effects in the background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-300 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-8 h-8 bg-pink-500 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-50"></div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-6 animate-blink font-impact text-red-700 shadow-neon">
          Microsoft Yeeted Our Friendship!
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1">
            <img
              src="/images/bill-gates.png"
              alt="Bill Gates laughing with Skype shutdown button"
              className="w-full max-w-sm mx-auto border-4 border-yellow-400 transform rotate-3 shadow-lg"
              style={{ filter: "contrast(1.2) brightness(1.1)" }}
            />
          </div>

          <div className="flex-1 text-center">
            <div className="text-2xl font-comic-sans font-bold mb-4 bg-white p-3 border-4 border-dashed border-blue-600 transform -rotate-2">
              After 15 years of friendship...
              <br />
              <span className="text-red-600">Microsoft said NO MORE!</span>
            </div>

            <div className="bg-black text-green-400 p-4 font-courier-new text-left mb-4 border-2 border-green-400">
              <div className="mb-2">C:\WINDOWS\SYSTEM32&gt; friendship.exe</div>
              <div className="mb-1">Loading Ivars & Andrew connection...</div>
              <div className="mb-1">Checking Skype servers...</div>
              <div className="mb-1">ERROR: SKYPE_SERVER_SHUTDOWN</div>
              <div className="animate-blink">
                Connection terminated by Corporate Overlords
              </div>
            </div>

            <div className="text-lg font-bold">
              First they came for MSN Messenger...
              <br />
              Then they came for Skype...
              <br />
              <span className="text-red-600">Who will they destroy next?!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee effect */}
      <div className="overflow-hidden bg-black py-2 border-t-4 border-b-4 border-yellow-300 mt-6">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-white font-bold mx-4">
            RIP our 3 a.m. chats...
          </span>
          <span className="text-toxic-green font-bold mx-4">
            Thanks, greedy Redmond overlords...
          </span>
          <span className="text-red-500 font-bold mx-4">
            Ivars + Andrew 4eva...
          </span>
          <span className="text-yellow-300 font-bold mx-4">
            Press F to pay respects...
          </span>
          <span className="text-skype-blue font-bold mx-4">
            Why, Bill Gates, why?!...
          </span>
          <span className="text-white font-bold mx-4">
            Two bros, torn apart by corporate greed...
          </span>
          <span className="text-toxic-green font-bold mx-4">
            15 years of friendship: DELETED...
          </span>
        </div>
      </div>
    </div>
  );
}
