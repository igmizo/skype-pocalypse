"use client";

import React, { useState } from "react";

interface InteractiveButtonsProps {
  onPanicClick: () => void;
  onStopShaking: () => void;
}

export default function InteractiveButtons({
  onPanicClick,
  onStopShaking,
}: InteractiveButtonsProps) {
  const [showEmojis, setShowEmojis] = useState(false);
  const [showError, setShowError] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(false);

  const handlePanicClick = () => {
    onPanicClick();
    setShowEmojis(true);
    setShowError(true);

    setTimeout(() => {
      setShowEmojis(false);
      onStopShaking();
    }, 3000);

    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };

  const playSkypeSounds = () => {
    if (soundPlaying) return;

    setSoundPlaying(true);

    const sounds = ["/audio/skype-call.mp3", "/audio/skype-message.mp3"];

    let currentSound = 0;
    const playNextSound = () => {
      if (currentSound >= sounds.length) {
        // End with a "Connection Lost" message
        setTimeout(() => {
          setSoundPlaying(false);
          alert("CONNECTION LOST!");
        }, 1000);
        return;
      }

      const audio = new Audio(sounds[currentSound]);
      audio.volume = 0.5;
      audio.onended = () => {
        currentSound++;
        setTimeout(playNextSound, 1000);
      };
      audio.play().catch(() => console.log("Audio autoplay blocked"));
    };

    playNextSound();
  };

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-6 font-papyrus animate-pulse">
        Interactive Grief Stations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Panic Button */}
        <div className="p-6 bg-white border-4 border-red-500 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-4 font-impact text-red-600">
            PANIC BUTTON
          </h3>
          <p className="mb-4 font-comic-sans">
            Hit this when you realize you can&apos;t chat with your BFF anymore!
          </p>
          <button
            onClick={handlePanicClick}
            className="retro-button bg-red-500 text-white py-4 px-8 rounded-full text-2xl hover:bg-red-600 font-bold animate-pulse"
          >
            SAVE OUR CHATS!
          </button>

          {/* Emojis that shower down when panic button is clicked */}
          {showEmojis && (
            <div className="fixed inset-0 pointer-events-none z-40">
              {[...Array(20)].map((_, i) => {
                const emoji = ["😭", "😢", "💔", "😱", "😰", "🤯"];
                const randomEmoji =
                  emoji[Math.floor(Math.random() * emoji.length)];
                const left = `${Math.random() * 100}%`;
                const animationDuration = `${1 + Math.random() * 2}s`;

                return (
                  <div
                    key={i}
                    className="absolute text-4xl"
                    style={{
                      left,
                      top: "-20px",
                      animation: `fall ${animationDuration} forwards`,
                    }}
                  >
                    {randomEmoji}
                  </div>
                );
              })}
            </div>
          )}

          {/* Error popup when panic button is clicked */}
          {showError && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <div className="error-window w-80">
                <div className="error-title flex justify-between items-center px-2">
                  <span>Microsoft Error</span>
                  <button onClick={() => setShowError(false)}>X</button>
                </div>
                <div className="error-content">
                  <span className="text-red-600 mr-3 text-4xl">✖</span>
                  <div>
                    <p className="mb-1 font-bold">Access Denied</p>
                    <p className="text-sm">
                      Microsoft says NO FRIENDS ALLOWED.
                    </p>
                  </div>
                </div>
                <div className="p-2 text-right bg-gray-200">
                  <button
                    className="px-4 py-1 bg-gray-300 border-2 border-gray-400"
                    onClick={() => setShowError(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Relive the Pain button */}
        <div className="p-6 bg-white border-4 border-blue-500 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-4 font-times-new-roman text-blue-600">
            RELIVE THE PAIN
          </h3>
          <p className="mb-4 font-comic-sans">
            Remember those sweet Skype sounds before Microsoft crushed our
            dreams?
          </p>
          <button
            onClick={playSkypeSounds}
            disabled={soundPlaying}
            className={`retro-button bg-skype-blue text-white py-4 px-8 rounded-lg text-xl hover:bg-blue-600 font-bold ${
              soundPlaying ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {soundPlaying ? "Playing..." : "Play Skype Sounds"}
          </button>
          <p className="mt-2 text-xs text-gray-500">
            (Warning: Will end in sadness)
          </p>
        </div>

        {/* Blame Bill Gates button */}
        <div className="p-6 bg-white border-4 border-green-500 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-4 font-courier-new text-green-600">
            BLAME BILL
          </h3>
          <p className="mb-4 font-comic-sans">
            Click to send your complaints to Bill Gates*
          </p>
          <button
            onClick={() =>
              alert(
                "Your complaint has been forwarded to Bill Gates's spam folder!"
              )
            }
            className="retro-button bg-green-600 text-white py-4 px-8 rounded-lg text-xl hover:bg-green-700 font-bold"
          >
            It&apos;s All Your Fault, Bill!
          </button>
          <p className="mt-2 text-xs text-gray-500">
            *Not actually sent to Bill Gates. He doesn&apos;t care about your
            friendship.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
