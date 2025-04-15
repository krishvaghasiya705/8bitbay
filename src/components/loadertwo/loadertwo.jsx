import React from "react";

export default function Loadertwo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkBg text-neon font-pixel">
      {/* Loader Animation */}
      <div className="relative w-24 h-24 border-4 border-pixelBlue border-t-pixelRed rounded-full animate-spin"></div>

      {/* Loader Text */}
      <h1 className="mt-8 text-center text-xl md:text-2xl lg:text-3xl">
        Sorry for the interruption. The client has insufficient funds. Please
        wait <span className="font-mono">50 seconds</span> while we
        auto-generate the report and notify the developers to start the process.
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-pixelYellow text-sm md:text-base">
        Thank you for your patience!
      </p>
    </div>
  );
}
