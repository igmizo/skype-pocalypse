import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ivars & Andrew: Skype-pocalypse 2025",
  description:
    "A gloriously terrible tribute to a friendship doomed by Microsoft's greedy claws",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Load some genuinely awful fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Papyrus&family=Impact&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-b from-blue-400 to-purple-500 text-black cursor-crosshair">
        {/* Background images with low opacity */}
        <div
          className="fixed inset-0 bg-repeat bg-contain opacity-10 pointer-events-none"
          style={{ backgroundImage: 'url("/images/skype.svg")' }}
        ></div>

        {/* Old school cursor trail effect */}
        <div id="cursor-trail"></div>

        {children}

        {/* Script for cursor trails and other awful effects */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Cursor trail effect
            document.addEventListener('mousemove', function(e) {
              const trail = document.createElement('div');
              trail.className = 'cursor-trail';
              trail.style.left = (e.pageX - 5) + 'px';
              trail.style.top = (e.pageY - 5) + 'px';
              document.body.appendChild(trail);
              
              setTimeout(() => {
                trail.remove();
              }, 1000);
            });
            
            // Random dial-up sounds
            setTimeout(() => {
              const audio = new Audio('/audio/dialup.mp3');
              audio.volume = 0.2;
              audio.loop = true;
              audio.play().catch(e => console.log('Audio autoplay blocked'));
            }, 5000);
          `,
          }}
        />
      </body>
    </html>
  );
}
