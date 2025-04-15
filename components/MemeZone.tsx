"use client";

import React, { useState } from "react";

const memes = [
  {
    title: "Blue Screen of YEET",
    content: (
      <div className="bg-blue-600 p-6 text-white font-mono">
        <div className="text-4xl mb-4">😵 *CRASH*</div>
        <div className="mb-3">
          Your Skype call got yeeted into the multiverse of sadness.
        </div>
        <div className="mb-4">
          We’re zipping your chat history into a cursed NFT and selling it for 0.0001 ETH.
        </div>
        <div className="mb-3">Error: MICROSOFT_SNIPED_YOUR_HOMIES_69420</div>
        <div className="mb-4">Technical Info: 0xGONEGONE</div>
        <div>
          Wanna complain? Microsoft&apos;s support is just a Teams bot saying “Skill issue.” 💀
        </div>
      </div>
    ),
  },
  {
    title: "Friendship Graveyard",
    content: (
      <div className="bg-gray-900 p-8 text-center">
        <div className="bg-stone-800 p-8 border-8 border-stone-600 rounded-t-2xl">
          <div className="text-gray-100 font-serif">
            <div className="text-3xl mb-3">R.I.P. 🪦</div>
            <div className="text-2xl mb-4">Ivars & Andrew&apos;s Epic Skype Saga</div>
            <div className="text-lg mb-2">2003 - 2025</div>
            <div className="italic mb-4">&ldquo;Big Tech ratio&apos;d our vibes 😭&ldquo;</div>
            <div className="flex justify-center my-4">
              <span className="text-5xl animate-bounce">☠️</span>
            </div>
            <div className="text-sm">
              Deader than your Club Penguin account. F in the chat. 🐧
            </div>
          </div>
        </div>
        <div className="h-20 bg-gradient-to-b from-stone-800 to-green-900"></div>
      </div>
    ),
  },
  {
    title: "Skype Chat Ragnarök",
    content: (
      <div className="bg-gray-200 p-6 rounded-xl border-4 border-gray-500">
        <div className="flex items-start mb-4">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
            I
          </div>
          <div className="bg-purple-100 p-4 rounded-lg max-w-sm">
            <div className="font-semibold mb-1">Ivars</div>
            <div>Andrew, they’re speedrunning the end of our chats!</div>
            <div className="text-xs text-gray-600 mt-1">13:37</div>
          </div>
        </div>

        <div className="flex items-start mb-4 justify-end">
          <div className="bg-green-100 p-4 rounded-lg max-w-sm">
            <div className="font-semibold mb-1">Andrew</div>
            <div>Microsoft just hit our soul with a /ban hammer 😭</div>
            <div className="text-xs text-gray-600 mt-1">13:38</div>
          </div>
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold ml-4">
            A
          </div>
        </div>

        <div className="text-center text-gray-700 p-4 border-t-4 border-red-700 mt-4">
          <div className="animate-blink text-red-600 font-bold text-lg">
            SERVER NUKED
          </div>
          <div className="text-sm">
            Microsoft whispers: “Use Teams or get clowned.” 🤡
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Skype Logo Dumpster Fire",
    content: (
      <div className="relative p-6 flex justify-center items-center bg-gray-100 rounded-lg">
        <img
          src="/images/skype.svg"
          alt="Skype Logo"
          className="w-64 h-64 animate-spin-slow opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600 text-white font-impact text-5xl p-4 transform rotate-12 border-8 border-yellow-500">
            DELETED!
          </div>
        </div>
        <div className="absolute bottom-0 w-full text-center font-comic-sans text-lg text-gray-800">
          Skype got sent to the Shadow Realm. GG no re. 🎮
        </div>
      </div>
    ),
  },
  {
    title: "Error 404: Vibes Missing",
    content: (
      <div className="bg-black p-8 text-green-400 font-mono text-center">
        <div className="text-4xl mb-4">404 - CHAT NOT FOUND</div>
        <div className="mb-4">
          Skype.exe has left the server and joined the witness protection program.
        </div>
        <div className="mb-4">
          <span className="animate-pulse">█</span> Reconnecting... PSYCH! It’s over.
        </div>
        <div className="mb-4">
          Microsoft’s advice: “Bro, just vibe in Teams. Or cry.” 😢
        </div>
        <div className="text-3xl animate-pulse">💾💥</div>
      </div>
    ),
  },
];

export default function MemeZone() {
  const [currentMeme, setCurrentMeme] = useState(0);

  const handlePrevMeme = () => {
    setCurrentMeme((prev) => (prev === 0 ? memes.length - 1 : prev - 1));
  };

  const handleNextMeme = () => {
    setCurrentMeme((prev) => (prev === memes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-12 bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl">
      <h2 className="text-4xl font-extrabold text-center mb-8 font-impact">
        <span className="bg-yellow-400 text-black px-6 py-3 inline-block transform -rotate-2 border-8 border-red-600 shadow-2xl">
          SKYPE APOCALYPSE MEME ZONE
        </span>
      </h2>

      <div className="bg-gray-300 border-12 border-blue-600 p-8 rounded-xl relative shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-bold font-comic-sans text-yellow-400 drop-shadow-lg">
            {memes[currentMeme].title}
          </h3>
          <div className="flex gap-4">
            <button
              onClick={handlePrevMeme}
              className="retro-button px-4 py-2 text-lg hover:animate-pulse"
            >
              ⬅️ Rewind!
            </button>
            <button
              onClick={handleNextMeme}
              className="retro-button px-4 py-2 text-lg hover:animate-pulse"
            >
              Fast Forward ➡️
            </button>
          </div>
        </div>

        <div className="bg-white p-6 border-8 border-gray-500 rounded-lg">
          {memes[currentMeme].content}
        </div>

        <div className="text-center mt-6 font-comic-sans text-lg text-pink-500">
          Meme {currentMeme + 1} of {memes.length} | Yo, screenshot this for the
          Discord memorial! 🖼️
        </div>
      </div>
    </div>
  );
}