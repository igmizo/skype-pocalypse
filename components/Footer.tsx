"use client";

import React, { useState } from "react";

export default function Footer() {
  const [isHeartBroken, setIsHeartBroken] = useState(false);

  return (
    <footer className="mt-16 mb-8">
      <div className="geocities-divider"></div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 font-comic-sans animate-pulse">
          Ivars & Andrew, disconnected but not forgotten.
        </h2>

        <div className="flex flex-col items-center mb-8">
          <div
            className={`w-16 h-16 mb-2 cursor-pointer transition-all duration-500 ${
              isHeartBroken
                ? "animate-heartbreak"
                : "text-red-500 animate-pulse"
            }`}
            onMouseEnter={() => setIsHeartBroken(true)}
            onMouseLeave={() => setIsHeartBroken(false)}
          >
            {isHeartBroken ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-red-500"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                <path fill="white" d="M12 4 L10 8 L14 12 L10 16 L12 20" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-red-500"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            )}
          </div>
          <p className="text-sm text-gray-600">
            (Hover to break our hearts even more)
          </p>
        </div>

        <div className="bg-black text-white p-6 rounded-lg max-w-2xl mx-auto border-4 border-yellow-300">
          <p className="mb-4 font-bold">Find us on:</p>
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <span>Carrier Pigeons</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.73 2s.87.878 1.27 2.269c.358 1.323.79 3.542.79 6.101A12 12 0 1 1 7.87 1.313c2.597 0 4.858.403 6.202.754C15.613 2.407 16.656 3 17.73 3Z" />
                <path d="m11.213 8.188-3.69 3.689a1 1 0 1 0 1.414 1.414l3.689-3.69a1 1 0 1 0-1.414-1.413Z" />
                <circle cx="14.5" cy="6.5" r="1.5" />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <span>Tin Cans & String</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 2h8" />
                <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
                <path d="M7 15a6.472 6.472 0 0 1-3-5.5 3.5 3.5 0 0 1 3.5-3.5" />
                <path d="M17 15a6.472 6.472 0 0 0 3-5.5 3.5 3.5 0 0 0-3.5-3.5" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-gray-400">
            (None of these links work because Microsoft killed our friendship)
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500">
        <p>© 2025 Ivars & Andrew&apos;s Digital Memorial</p>
        <p className="mt-1">This site intentionally made to look terrible.</p>
        <p className="mt-1">
          No Bills Gates were harmed in the making of this website.
        </p>
        <p className="mt-1 text-[8px]">
          This site is best viewed with Internet Explorer 6 on a Windows XP
          machine at 800x600 resolution.
        </p>
      </div>
    </footer>
  );
}
