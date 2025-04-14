import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-darkBg text-white flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pixelRed to-pixelBlue opacity-70 z-0 animate-glitch-background"></div>
      <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
        <h1 className="text-8xl font-pixel text-neon mb-12 animate-glitch-title">
          **BIO HACKED**
        </h1>
        <div className="relative bg-cardGrey p-16 rounded-3xl shadow-pixel border-4 border-pixelYellow transform transition-transform z-10">
          <div className="absolute inset-0 bg-gradient-to-tl from-pixelYellow to-pixelRed opacity-30 rounded-3xl blur-xl animate-pulse"></div>
          <div className="flex justify-center mb-12">
            <div className="w-48 h-48 bg-pixelBlue rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-xl border-4 border-pixelRed">
              <GiGamepad />
            </div>
          </div>
          <p className="font-pixel text-xl mb-6 animate-slide-in-from-bottom">
            🕹️ **Krish Vaghasiya**, full-stack dev by day, gamer by night. I
            code, design, and build the future of digital experiences. I combine
            the best of both worlds — technical prowess and creative design.
          </p>
          <h2 className="font-pixel text-4xl text-pixelYellow mb-6">
            **Level-Up Skills**
          </h2>
          <ul className="font-pixel text-lg space-y-3 mb-8">
            <li>💻 **HTML, CSS, JavaScript** – Code your reality</li>
            <li>⚡ **React, Tailwind CSS** – Power up dynamic UIs</li>
            <li>🎮 **Photoshop, Illustrator** – Designing immersive worlds</li>
            <li>🚀 **Node.js, Next.js** – Full-stack superpowers</li>
            <li>⚡ **Vite.js** – Boosting performance</li>
          </ul>
          <h2 className="font-pixel text-4xl text-pixelRed mb-6">
            **Who Am I?**
          </h2>
          <p className="font-pixel text-lg mb-6">
            🎮 **A true gamer at heart**, I spend hours in front of screens,
            leveling up my skills and creating engaging experiences for users
            and players alike. With over 16+ years in tech, I’ve hacked the
            system to make coding an adventure.
          </p>
          <h2 className="font-pixel text-4xl text-pixelBlue mb-6">
            **Fun Facts**
          </h2>
          <ul className="font-pixel text-lg space-y-3 mb-8">
            <li>🔥 **16+ years** of tech experience</li>
            <li>
              🕹️ **Gamer**: From **RPGs** to **FPS**, I’ve mastered them all
            </li>
            <li>
              🔧 **Code & Design**: I build not just websites, but immersive
              worlds
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-12 space-x-8 z-10 relative animate-pop-in">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={50}
              className="text-pixelRed hover:text-neon transition-all duration-300 transform hover:scale-125"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={50}
              className="text-pixelBlue hover:text-neon transition-all duration-300 transform hover:scale-125"
            />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              size={50}
              className="text-pixelYellow hover:text-neon transition-all duration-300 transform hover:scale-125"
            />
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={50}
              className="text-pixelPink hover:text-neon transition-all duration-300 transform hover:scale-125"
            />
          </a>
        </div>
        <footer className="font-pixel text-center text-pixelBlue mt-12 z-10 relative">
          <p>
            🚀 **Level Up!** Let’s break codes and conquer the digital world! 🎮
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
