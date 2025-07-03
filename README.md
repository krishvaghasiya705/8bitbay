🎮 8bitBay — Free Games Downloader Platform

Welcome to 8bitBay — your nostalgic gateway to the retro and indie gaming universe! This open-source platform lets you download and explore free PC games with style and speed. Built with React + Vite, it's blazing fast, lightweight, and easy to customize.

🌐 Live site: https://8bitbay.netlify.app

⚙️ Tech Stack
Frontend: React (with JSX)

Bundler: Vite — ultra-fast, modern, and optimized for performance

Styling: Tailwind CSS (optional, if used)

State Management: useState, useEffect (can easily integrate Redux/Zustand/etc.)

Icons & UI: MUI / Lucide / Custom SVG (optional)

Deployment: Netlify (CI/CD ready)

🔌 Vite Plugin Options
We currently support two official Vite plugins for React:

@vitejs/plugin-react – Uses Babel for React Fast Refresh

@vitejs/plugin-react-swc – Uses SWC, a super-fast compiler written in Rust

Both support Hot Module Replacement (HMR) and JSX/TSX out of the box.

To install:

bash
Copy
Edit
# Babel (default)
npm i -D @vitejs/plugin-react

# OR SWC (for better speed in dev mode)
npm i -D @vitejs/plugin-react-swc
In your vite.config.js:

js
Copy
Edit
// With Babel
import react from '@vitejs/plugin-react'
// OR
// import react from '@vitejs/plugin-react-swc'

export default {
  plugins: [react()],
}
🚀 Features
🎮 Explore and download free PC games

⚡ Instant load with Vite’s HMR

🔍 Game detail previews

📁 Open-source & extendable

💅 Easy to theme and style

🖱️ Responsive and mobile-friendly

🛠️ Getting Started
bash
Copy
Edit
# Clone the repo
git clone https://github.com/krishvaghasiya705/8bitbay.git

# Navigate into the directory
cd 8bitbay

# Install dependencies
npm install

# Run the dev server
npm run dev
Your app will be running at: http://localhost:5173

🧠 Why Vite?
Vite offers:

⚡ Lightning-fast dev server

🧩 Easy plugin integration

🎯 First-class JSX/TSX support

🚀 Optimized builds for production

🧑‍💻 Contributions Welcome!
This is an open-source initiative — feel free to fork, raise issues, submit PRs, or just play around!
Let’s bring back the golden age of gaming together.

“Built by gamers. For gamers.”

📜 License
MIT — Free to use, remix, and contribute.

Want to improve or fork the project?
Check the code here 👉 GitHub Repo

Let me know if you want a Markdown file or want to embed badges, screenshots, or contributor sections too — I got you 😎
