# <img src='./frontend/public/podcast_white.svg'>  Vartalaap - Language Learning Platform


![Production Grade](https://img.shields.io/badge/Production-Grade-critical)

## 🔍 Overview

**Varta** is a language learning platform where users can learn new languages by directly interacting with native speakers via video calls or real-time chat. Instead of traditional learning through courses, Varta emphasizes real-world practice and conversation.

<table width="1000" align="center">
<tr align="center">
<td> Streak <img src="./assets/varta1.png" width="500"> </td>
<td> Chats <img src="./assets/varta2.png" width ="440"> </td>
</tr>
</table>

## ✨ Features

- 🤖 AI Powered Interaction
- 💬 Real-Time Chat
- 📹 Video Calling with Friends
- 🎨 32+ Customizable Themes
- 🔥 Daily Streak Check-In System
- 🔐 JWT Authentication

## 🛠️ Tech Stack

- [Stream](https://getstream.io/) - Video Calling and Chat Integration
- [MongoDB](https://www.mongodb.com/) - NoSQL Database
- [Express.js](https://expressjs.com/) - Backend Framework
- [React.js](https://react.dev/) - Frontend Library
- [Node.js](https://nodejs.org/en) - Runtime Environment
- [Zustand](https://zustand-demo.pmnd.rs/) - State Management
- [TanStack Query](https://tanstack.com/query/latest) - Data Fetching and Caching
- [Vite](https://vite.dev/) - Frontend Build Tool
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [DaisyUI](https://daisyui.com/) - TailwindCSS Components
- [Embla Carousel](https://www.embla-carousel.com/) - Carousel for UI
- [React Hot Toast](https://react-hot-toast.com/) - Toast Notifications
- [StorySet](https://storyset.com/) - Illustrations
- [Avatar Placeholder](https://avatar-placeholder.iran.liara.run/) - Random Avatars
- [Flagcdn](https://flagpedia.net/download/api) - All country flags

## ⚙️Installation & Setup

### Step 1: Clone the Repository

```bash
  git clone https://github.com/harshitsoni341/Vartalaap-Platform.git
```

### Step 2: Install Required Dependencies

```bash
#Frontend
cd frontend
npm install

#Backend
cd backend
npm install
```

### Step 3: Environment Variables
To run this project, you will need to add the following environment variables to your `.env` file

**Frontend `.env`:**

```env
VITE_STREAM_API_KEY= your_api_key
VITE_GEMINI_API_KEY= your_api_key
```
**Backend `.env`:**
```env
PORT=5001
MONGO_URI = Your_MongoDB_Atlas_Key

STREAM_API_KEY= your_api_key
STREAM_API_SECRET= Your_api_key

JWT_SECRET_KEY=Your_secret_key 

NODE_ENV=production
```

>[!TIP]
>JWT Secret Key can be generated using [OpenSSL](https://www.openssl.org/)
>```bash
> openssl rand -base64 32
># something like this will be generated: J4dmpcXQSPCE73+hPaxeOT2ekP6mpAALam8NWv/MS0A=
>``` 

### 4. Run Development Servers

```bash
# Frontend
cd frontend
npm run dev  # runs on port 5173

# Backend
cd backend
npm run dev  # runs on port 5001
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 Themes

Varta offers these 32 themes:

<div align="center">
  <table><tr><td>

![Light](https://img.shields.io/badge/Light-%23ffffff?style=for-the-badge)
![Dark](https://img.shields.io/badge/Dark-%231f2937?style=for-the-badge)
![Cupcake](https://img.shields.io/badge/Cupcake-%23ef9fbc?style=for-the-badge)
![Forest](https://img.shields.io/badge/Forest-%2370c217?style=for-the-badge)
![Bumblebee](https://img.shields.io/badge/Bumblebee-%23f0d50c?style=for-the-badge)
![Emerald](https://img.shields.io/badge/Emerald-%233b82f6?style=for-the-badge)
![Corporate](https://img.shields.io/badge/Corporate-%237b92b2?style=for-the-badge)
![Synthwave](https://img.shields.io/badge/Synthwave-%232d1b69?style=for-the-badge)
![Retro](https://img.shields.io/badge/Retro-%23e4d8b4?style=for-the-badge)
![Cyberpunk](https://img.shields.io/badge/Cyberpunk-%2375d1f0?style=for-the-badge)
![Valentine](https://img.shields.io/badge/Valentine-%23e96d7b?style=for-the-badge)
![Halloween](https://img.shields.io/badge/Halloween-%230d0d0d?style=for-the-badge)
![Garden](https://img.shields.io/badge/Garden-%2316a34a7?style=for-the-badge)
![Aqua](https://img.shields.io/badge/Aqua-%23193549?style=for-the-badge)
![Lofi](https://img.shields.io/badge/Lofi-%230f0f0f?style=for-the-badge)
![Pastel](https://img.shields.io/badge/Pastel-%23f7f3f5?style=for-the-badge)
![Fantasy](https://img.shields.io/badge/Fantasy-%23a21caf?style=for-the-badge)
![Wireframe](https://img.shields.io/badge/Wireframe-%23b3b3b3?style=for-the-badge)
![Black](https://img.shields.io/badge/Black-%23000000?style=for-the-badge)
![Luxury](https://img.shields.io/badge/Luxury-%23d4a85a?style=for-the-badge)
![Dracula](https://img.shields.io/badge/Dracula-%23282a36?style=for-the-badge)
![CMYK](https://img.shields.io/badge/CMYK-%23ec4899?style=for-the-badge)
![Autumn](https://img.shields.io/badge/Autumn-%23f28c18?style=for-the-badge)
![Business](https://img.shields.io/badge/Business-%231e40af?style=for-the-badge)
![Acid](https://img.shields.io/badge/Acid-%2399ff01?style=for-the-badge)
![Lemonade](https://img.shields.io/badge/Lemonade-%23f5d742?style=for-the-badge)
![Night](https://img.shields.io/badge/Night-%2338bdf8?style=for-the-badge)
![Coffee](https://img.shields.io/badge/Coffee-%23dd9866?style=for-the-badge)
![Winter](https://img.shields.io/badge/Winter-%230284c7?style=for-the-badge)
![Dim](https://img.shields.io/badge/Dim-%2310b981?style=for-the-badge)
![Nord](https://img.shields.io/badge/Nord-%235e81ac?style=for-the-badge)
![Sunset](https://img.shields.io/badge/Sunset-%23f5734c?style=for-the-badge)

  </td></tr></table>
</div>



## 🌍 Supported Languages

Learn and interact in a wide variety of languages!


![English](https://flagcdn.com/24x18/gb.png) English  
![Spanish](https://flagcdn.com/24x18/es.png) Spanish  
![French](https://flagcdn.com/24x18/fr.png) French  
![German](https://flagcdn.com/24x18/de.png) German  
![Mandarin](https://flagcdn.com/24x18/cn.png) Mandarin  
![Japanese](https://flagcdn.com/24x18/jp.png) Japanese  
![Korean](https://flagcdn.com/24x18/kr.png) Korean  
![Hindi](https://flagcdn.com/24x18/in.png) Hindi  
![Russian](https://flagcdn.com/24x18/ru.png) Russian  
![Portuguese](https://flagcdn.com/24x18/pt.png) Portuguese  
![Arabic](https://flagcdn.com/24x18/sa.png) Arabic  
![Italian](https://flagcdn.com/24x18/it.png) Italian  
![Turkish](https://flagcdn.com/24x18/tr.png) Turkish  
![Dutch](https://flagcdn.com/24x18/nl.png) Dutch  

## 🚀 Future Improvements

- Add a responsive streak graph to track daily activity.
- Introduce quizzes tailored to the user's chosen language.
- Add forget password option.
- Better UI/UX.



