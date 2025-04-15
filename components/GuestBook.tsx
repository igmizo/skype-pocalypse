"use client";

import React, { useState } from "react";

// Pre-filled fake entries
const fakeEntries = [
  {
    name: "TotallyRealUser69",
    message:
      "Skype was my life, Ivars! Now what am I supposed to do... use Teams?! 😭",
    date: "Apr 12, 2025",
  },
  {
    name: "SkypeSurvivor2003",
    message:
      "I met my wife on Skype. Now we're getting divorced because Microsoft killed our connection. Thanks, Bill!!",
    date: "Apr 10, 2025",
  },
  {
    name: "XxMicrosoft_HaterxX",
    message:
      "First they came for MSN Messenger, and I did not speak out. Then they came for Skype... RIP to real ones.",
    date: "Apr 8, 2025",
  },
  {
    name: "Andrew's_Mom",
    message:
      "My son hasn't left his room since he heard the news. He just keeps whispering 'Ivars' and crying.",
    date: "Apr 7, 2025",
  },
  {
    name: "BillGates",
    message: "Sorry not sorry lol",
    date: "Apr 1, 2025",
  },
];

export default function GuestBook() {
  const [entries, setEntries] = useState(fakeEntries);
  const [newEntry, setNewEntry] = useState({ name: "", message: "" });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newEntry.name.trim() === "" || newEntry.message.trim() === "") {
      alert("Please fill in all fields!");
      return;
    }

    const today = new Date();
    const formattedDate = `${today.toLocaleString("default", {
      month: "short",
    })} ${today.getDate()}, ${today.getFullYear()}`;

    setEntries([
      {
        name: newEntry.name,
        message: newEntry.message,
        date: formattedDate,
      },
      ...entries,
    ]);

    setNewEntry({ name: "", message: "" });
    setShowThankYou(true);

    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  return (
    <div className="mb-12">
      <div className="geocities-divider"></div>

      <div className="text-center mb-6">
        <h2 className="inline-block text-3xl font-bold font-papyrus bg-black text-white px-6 py-2 transform -rotate-2">
          FRIENDSHIP CONDOLENCE BOOK
        </h2>
        <p className="mt-2 font-comic-sans text-gray-700">
          Leave your thoughts and prayers for Ivars and Andrew&apos;s digital
          relationship 💐
        </p>
      </div>

      {/* Guest book form */}
      <div className="bg-gray-100 p-6 border-4 border-dashed border-purple-400 rounded-lg mb-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 font-bold font-comic-sans"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              value={newEntry.name}
              onChange={(e) =>
                setNewEntry({ ...newEntry, name: e.target.value })
              }
              className="w-full p-2 border-2 border-purple-300 rounded font-comic-sans"
              maxLength={30}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-bold font-comic-sans"
            >
              Your Condolences:
            </label>
            <textarea
              id="message"
              value={newEntry.message}
              onChange={(e) =>
                setNewEntry({ ...newEntry, message: e.target.value })
              }
              className="w-full p-2 border-2 border-purple-300 rounded font-comic-sans"
              rows={4}
              maxLength={200}
              placeholder="Express your grief here..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="retro-button bg-purple-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-purple-700 font-bold"
            >
              Sign Guestbook
            </button>
          </div>
        </form>

        {/* Thank you message */}
        {showThankYou && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded text-center">
            Thank you for your condolences in these difficult times! 😢
          </div>
        )}
      </div>

      {/* Entries list */}
      <div className="border-4 border-gray-400 rounded-lg bg-white">
        <div className="bg-gray-200 p-3 font-bold text-center border-b-2 border-gray-400">
          <h3 className="text-xl font-impact">GRIEF ENTRIES</h3>
        </div>

        <div className="p-4 max-h-96 overflow-y-auto">
          {entries.length === 0 ? (
            <p className="text-center text-gray-500 italic">
              Be the first to leave your condolences!
            </p>
          ) : (
            entries.map((entry, index) => (
              <div
                key={index}
                className={`mb-4 p-4 border-b border-gray-200 ${
                  index % 2 === 0 ? "bg-gray-50" : ""
                }`}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-blue-600">{entry.name}</span>
                  <span className="text-xs text-gray-500">{entry.date}</span>
                </div>
                <p className="text-gray-700 font-comic-sans">{entry.message}</p>
              </div>
            ))
          )}
        </div>

        <div className="bg-gray-200 p-2 text-xs text-center text-gray-600 border-t-2 border-gray-400">
          This guestbook is powered by GeoCities® technology circa 1997
        </div>
      </div>
    </div>
  );
}
