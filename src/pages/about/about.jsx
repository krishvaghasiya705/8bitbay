import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaGamepad, FaPalette, FaRocket, FaLaptopCode, FaServer, FaDatabase, FaGlobe, FaChartLine } from "react-icons/fa";
import { GiGamepad, GiSkills, GiBrain, GiPencilBrush, GiProcessor, GiPistolGun } from "react-icons/gi";
import { BsTwitterX } from "react-icons/bs";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-darkBg text-white py-12 px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-pixelRed/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pixelBlue/20 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pixelRed/20 to-pixelBlue/20 blur-3xl -z-10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAzOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4UzI5Ljk0MSAyIDIwIDIgMiAxMC4wNTkgMiAyMHMyMC4wNTkgMTggMTggMTh6bTAtMkMxMC4wNTkgMzYgMiAyNy45NDEgMiAyMHM4LjA1OS0xNiAxOC0xNiAxOCA4LjA1OSAxOCAxNi04LjA1OSAxNi0xOCAxNnoiIGZpbGw9IiMxZjFmMWYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-10 -z-10"></div>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-pixelRed to-pixelBlue rounded-lg blur opacity-30"></div>
            <h1 className="text-6xl md:text-8xl font-pixel text-neon mb-6 animate-pulse relative">
              KRISH VAGHASIYA
            </h1>
          </div>
          
          <div className="w-32 h-32 mx-auto bg-pixelBlue rounded-full flex items-center justify-center border-4 border-pixelRed shadow-pixel mb-8 hover:rotate-12 transition-transform duration-300 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pixelRed/20 to-pixelBlue/20 rounded-full"></div>
            <GiGamepad className="text-5xl text-white relative z-10" />
          </div>
          
          <p className="font-pixel text-xl text-pixelYellow max-w-2xl mx-auto mb-4">
            Full-stack dev by day, gamer by night. Building the future of digital experiences.
          </p>
          <p className="font-pixel text-lg text-gray-400 max-w-3xl mx-auto mb-6">
            Passionate about creating immersive digital experiences that blend cutting-edge technology with creative design.
          </p>
          
          <div className="flex justify-center space-x-4">
            <div className="bg-cardGrey/50 p-3 rounded-lg border-2 border-pixelRed hover:border-neon transition-colors">
              <FaCode className="text-2xl text-pixelRed hover:text-neon transition-colors" />
            </div>
            <div className="bg-cardGrey/50 p-3 rounded-lg border-2 border-pixelBlue hover:border-neon transition-colors">
              <GiPencilBrush className="text-2xl text-pixelBlue hover:text-neon transition-colors" />
            </div>
            <div className="bg-cardGrey/50 p-3 rounded-lg border-2 border-pixelYellow hover:border-neon transition-colors">
              <FaGamepad className="text-2xl text-pixelYellow hover:text-neon transition-colors" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-cardGrey p-8 rounded-lg border-4 border-pixelBlue shadow-pixel transform transition-transform group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pixelBlue/20 rounded-full blur-3xl -z-10"></div>
            <div className="flex items-center mb-6">
              <GiSkills className="text-4xl text-pixelBlue mr-4" />
              <h2 className="font-pixel text-3xl text-pixelBlue">Technical Expertise</h2>
            </div>
            <div className="space-y-6">
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="flex items-center mb-2">
                  <FaLaptopCode className="text-2xl text-pixelRed mr-4" />
                  <span className="font-pixel text-lg">Frontend Development</span>
                </div>
                <div className="ml-12">
                  <div className="flex items-center mb-2">
                    <div className="w-full bg-darkBg rounded-full h-2.5">
                      <div className="bg-pixelRed h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <span className="ml-2 text-sm text-pixelRed">90%</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">React, Next.js, TypeScript, Tailwind CSS</p>
                  <p className="text-sm">Creating responsive, performant, and accessible user interfaces that deliver exceptional user experiences.</p>
                </div>
              </div>
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="flex items-center mb-2">
                  <FaServer className="text-2xl text-pixelBlue mr-4" />
                  <span className="font-pixel text-lg">Backend Development</span>
                </div>
                <p className="text-sm text-gray-400 ml-12 mb-2">Node.js, Express, Python, Django</p>
                <p className="text-sm ml-12">Building scalable and secure server-side applications with robust API architectures. Expertise in microservices, RESTful APIs, and real-time communication systems.</p>
              </div>
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="flex items-center mb-2">
                  <FaDatabase className="text-2xl text-pixelYellow mr-4" />
                  <span className="font-pixel text-lg">Database Management</span>
                </div>
                <p className="text-sm text-gray-400 ml-12 mb-2">MongoDB, PostgreSQL, Redis</p>
                <p className="text-sm ml-12">Designing efficient database schemas and optimizing query performance for high-traffic applications. Experience with both SQL and NoSQL solutions.</p>
              </div>
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="flex items-center mb-2">
                  <GiProcessor className="text-2xl text-neon mr-4" />
                  <span className="font-pixel text-lg">DevOps & Cloud</span>
                </div>
                <p className="text-sm text-gray-400 ml-12 mb-2">Docker, AWS, CI/CD, Git</p>
                <p className="text-sm ml-12">Implementing automated deployment pipelines and managing cloud infrastructure for optimal performance. Focus on scalability, security, and cost optimization.</p>
              </div>
            </div>
          </div>
          <div className="bg-cardGrey p-8 rounded-lg border-4 border-pixelRed shadow-pixel transform transition-transform group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pixelRed/20 rounded-full blur-3xl -z-10"></div>
            <div className="flex items-center mb-6">
              <FaRocket className="text-4xl text-pixelRed mr-4" />
              <h2 className="font-pixel text-3xl text-pixelRed">Professional Journey</h2>
            </div>
            <div className="space-y-6">
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-pixel text-xl text-pixelYellow">Level 16+</h3>
                  <span className="text-sm text-gray-400">Tech Industry Experience</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-full bg-darkBg rounded-full h-2.5">
                    <div className="bg-pixelYellow h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <span className="ml-2 text-sm text-pixelYellow">95%</span>
                </div>
                <p className="text-sm">Leading teams and delivering complex projects across various domains.</p>
              </div>
              <div className="group-hover:translate-x-2 transition-transform">
                <h3 className="font-pixel text-xl text-pixelBlue mb-2">50+ Projects</h3>
                <p className="text-sm text-gray-400 mb-2">Built and Deployed</p>
                <p className="text-sm">Each project has been a unique challenge, pushing me to innovate and find creative solutions. From single-page applications to complex microservices architectures, I've delivered solutions that drive business growth. My portfolio includes everything from mobile apps to enterprise systems.</p>
              </div>
              <div className="group-hover:translate-x-2 transition-transform">
                <h3 className="font-pixel text-xl text-neon mb-2">Open Source</h3>
                <p className="text-sm text-gray-400 mb-2">Active Contributor</p>
                <p className="text-sm">I believe in giving back to the community. I actively contribute to open-source projects and maintain several popular libraries that help developers build better applications. My contributions range from bug fixes to major feature implementations.</p>
              </div>
            </div>
          </div>
          <div className="bg-cardGrey p-8 rounded-lg border-4 border-pixelYellow shadow-pixel transform transition-transform group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pixelYellow/20 rounded-full blur-3xl -z-10"></div>
            <div className="flex items-center mb-6">
              <GiBrain className="text-4xl text-pixelYellow mr-4" />
              <h2 className="font-pixel text-3xl text-pixelYellow">Character Stats</h2>
            </div>
            <div className="space-y-6">
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-pixel">Intelligence</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-darkBg rounded-full h-2.5">
                      <div className="bg-pixelBlue h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="ml-2 text-sm text-pixelBlue">85%</span>
                  </div>
                </div>
              </div>
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-pixel">Strength</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-darkBg rounded-full h-2.5">
                      <div className="bg-pixelRed h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="ml-2 text-sm text-pixelRed">75%</span>
                  </div>
                </div>
              </div>
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-pixel">Agility</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-darkBg rounded-full h-2.5">
                      <div className="bg-pixelGreen h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <span className="ml-2 text-sm text-pixelGreen">80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cardGrey p-8 rounded-lg border-4 border-neon shadow-pixel transform transition-transform group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon/20 rounded-full blur-3xl -z-10"></div>
            <div className="flex items-center mb-6">
              <FaGamepad className="text-4xl text-neon mr-4" />
              <h2 className="font-pixel text-3xl text-neon">Quest Log</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="flex items-center mb-2">
                  <GiPistolGun className="text-2xl text-pixelRed mr-4" />
                  <span className="font-pixel">Gaming</span>
                </div>
                <div className="ml-8">
                  <div className="flex items-center mb-2">
                    <div className="w-full bg-darkBg rounded-full h-2.5">
                      <div className="bg-pixelRed h-2.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="ml-2 text-sm text-pixelRed">100%</span>
                  </div>
                  <p className="text-sm text-gray-400">RPGs, FPS, Strategy Games</p>
                  <p className="text-sm mt-2">Mastering different gaming worlds and mechanics.</p>
                </div>
              </div>
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="flex items-center mb-2">
                  <FaPalette className="text-2xl text-pixelBlue mr-4" />
                  <span className="font-pixel">Music</span>
                </div>
                <p className="text-sm text-gray-400 ml-8">Lo-fi Production, Guitar</p>
                <p className="text-sm ml-8 mt-2">Creating ambient lo-fi beats and playing guitar helps me unwind and find creative inspiration. I enjoy experimenting with different musical styles and production techniques.</p>
              </div>
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="flex items-center mb-2">
                  <FaGlobe className="text-2xl text-pixelYellow mr-4" />
                  <span className="font-pixel">Photography</span>
                </div>
                <p className="text-sm text-gray-400 ml-8">Landscape, Street Photography</p>
                <p className="text-sm ml-8 mt-2">Capturing moments and telling stories through the lens, focusing on urban landscapes and natural beauty. I love exploring different perspectives and lighting conditions.</p>
              </div>
              <div className="group-hover:translate-x-2 transition-transform">
                <div className="flex items-center mb-2">
                  <FaChartLine className="text-2xl text-neon mr-4" />
                  <span className="font-pixel">Travel</span>
                </div>
                <p className="text-sm text-gray-400 ml-8">Exploring New Cultures</p>
                <p className="text-sm ml-8 mt-2">Experiencing different cultures and cuisines, always seeking new perspectives and inspiration. I believe travel is one of the best ways to broaden one's horizons and gain new insights.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-8 mb-12">
          <a href="https://github.com/krishvaghasiya705" target="_blank" rel="noopener noreferrer" className="transform hover:scale-125 transition-transform">
            <FaGithub size={40} className="text-pixelRed hover:text-neon" />
          </a>
          <a href="https://www.linkedin.com/in/krish-vaghasiya-272531358/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-125 transition-transform">
            <FaLinkedin size={40} className="text-pixelBlue hover:text-neon" />
          </a>
          <a href="https://www.threads.net/@krish_vaghasiya1205?xmt=AQGz3TVXrBSXODQMiTBIB8cN_jMzW7SLc18n714f7_vZlXU" target="_blank" rel="noopener noreferrer" className="transform hover:scale-125 transition-transform">
            <BsTwitterX size={35} className="text-pixelYellow hover:text-neon" />
          </a>
          <a href="https://www.instagram.com/krish_vaghasiya1205/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-125 transition-transform">
            <FaInstagram size={40} className="text-neon hover:text-pixelRed" />
          </a>
        </div>
        <footer className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pixelRed/20 to-pixelBlue/20 blur-3xl -z-10"></div>
          <p className="font-pixel text-pixelBlue">
            🚀 Level Up! Let's break codes and conquer the digital world! 🎮
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
