"use client";

import React, { useState } from "react";

export default function NoticeSection() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="mb-12">
      <div className="geocities-divider"></div>

      <div className="bg-white p-6 border-4 border-gray-300 rounded-lg shadow-lg relative">
        <div className="absolute -top-3 -right-3 bg-red-600 text-white px-4 py-1 transform rotate-6 font-bold text-sm">
          OFFICIAL NOTICE
        </div>

        {/* Microsoft Logo Area */}
        <div className="flex justify-center mb-6">
          <div className="bg-microsoft-blue p-3 inline-block">
            <span className="text-white font-bold text-2xl">MICROSOFT</span>
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-times-new-roman font-bold mb-2">
            OFFICIAL STATEMENT
          </h2>
          <h3 className="text-xl font-courier-new">
            RE: Skype Termination & Friendship Casualties
          </h3>
          <span className="text-sm text-gray-500">
            Reference: MS-KILL-SKYPE-2025
          </span>
        </div>

        <div className="mb-6 font-times-new-roman">
          <p className="mb-4 text-lg leading-relaxed">Dear Users,</p>

          <p className="mb-4 text-lg leading-relaxed">
            Skype is being lovingly euthanized to make room for More Important
            Things™. Ivars and Andrew&apos;s friendship is collateral damage. Our
            bad!
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            After careful consideration (approximately 3 minutes worth),
            Microsoft has decided that your personal connections and cherished
            memories are less important than our quarterly earnings report. The
            digital space where your friendship blossomed must now be repurposed
            for enterprise synergy solutions that will boost shareholder value.
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            Please note that all your chat histories, inside jokes, late-night
            confessions, and emotional support moments will be permanently
            deleted. We recommend screenshotting your most treasured
            conversations, printing them out, and crying into them when you&apos;re
            feeling nostalgic.
          </p>

          <p className="mb-6 text-lg leading-relaxed">
            Sincerely,
            <br />
            <span className="font-bold">Microsoft, probably</span>
          </p>

          <div className="text-right">
            <button
              onClick={() => setShowTerms(true)}
              className="text-xs text-blue-600 underline"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Popup */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 w-full max-w-md rounded-lg max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Terms & Conditions</h3>
              <button onClick={() => setShowTerms(false)} className="text-2xl">
                &times;
              </button>
            </div>

            <div className="font-courier-new text-sm">
              <p className="mb-4">
                1. You can&apos;t sue us for killing your vibes.
              </p>
              <p className="mb-4">
                2. All your friendship moments are belong to us.
              </p>
              <p className="mb-4">
                3. Microsoft reserves the right to terminate your social life
                without notice.
              </p>
              <p className="mb-4">
                4. By using Skype, you agreed to eventual heartbreak and
                abandonment.
              </p>
              <p className="mb-4">
                5. No refunds for emotional damage will be provided.
              </p>
              <p className="mb-4">
                6. Your tears sustain our CEO&apos;s immortality.
              </p>
              <p className="mb-4">
                7. Microsoft is legally absolved from all friendship-related
                trauma.
              </p>
              <p className="mb-4">
                8. If you&apos;re reading this, you&apos;re too committed to the bit.
              </p>
              <p className="mb-4">
                9. The cake is a lie. So was Skype&apos;s future.
              </p>
              <p className="mb-4">10. We recommend therapy. Seriously.</p>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => setShowTerms(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                I Accept My Doomed Fate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
