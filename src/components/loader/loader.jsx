import React, { useState, useEffect } from "react";

export default function Loader() {
  const [loadingText, setLoadingText] = useState("Loading... Please Wait");
  const [progress, setProgress] = useState(0);
  const loadingMessages = [
    "Loading... Please Wait",
    "Preparing Your Adventure...",
    "Leveling Up Pixels...",
    "Generating Retro Vibes...",
    "Almost There...",
  ];

  useEffect(() => {
    // Cycle through loading messages
    const messageInterval = setInterval(() => {
      setLoadingText((prev) => {
        const currentIndex = loadingMessages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 2000);

    // Simulate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 500);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50">
      <div className="flex flex-col items-center justify-center min-h-screen bg-darkBg text-center relative overflow-hidden">
        {/* Animated Starfield Background */}
        <div className="absolute inset-0 bg-black overflow-hidden">
          <div className="absolute inset-0 bg-stars animate-starfield"></div>
        </div>

        {/* Retro Game Logo */}
        <h1 className="text-pixelYellow font-pixel text-4xl mb-8">8BitBay</h1>

        {/* Pixelated Progress Bar */}
        <div className="w-64 h-6 bg-cardGrey border-4 border-pixelBlue shadow-pixel relative overflow-hidden mb-6">
          <div
            className="h-full bg-pixelYellow animate-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="text-pixelYellow font-pixel text-xl animate-pulse mb-4">
          {loadingText}
        </p>

        {/* Pixel Art Character */}
        <div className="mt-8">
          <img
            src="/assets/pixel-character-running.gif"
            alt="Pixel Character"
            className="w-24 h-24 animate-run"
          />
        </div>
      </div>
    </div>
  );
}
