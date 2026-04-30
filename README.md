<div align="center">

# <img src="public/favicon/favicon.svg" alt="Bingely logo" width="20" height="20"> Bingely

**_Track what you binge._**

A responsive web application for discovering movies and TV shows,  
rating titles, and managing a persistent watchlist.

Built with modern React patterns, custom hooks, and reusable UI components.  
Designed for performance, accessibility, and a smooth keyboard-first experience.

![Bingely preview](public/screenshots/bingely-hero.png)

![React](https://img.shields.io/badge/React-blue?style=for-the-badge) ![JavaScript](https://img.shields.io/badge/javascript-yellow?style=for-the-badge) ![JSX](https://img.shields.io/badge/jsx-blue?style=for-the-badge) ![HTML](https://img.shields.io/badge/html-orange?style=for-the-badge) ![CSS3](https://img.shields.io/badge/css-rebeccapurple?style=for-the-badge) ![GitHub License](https://img.shields.io/github/license/ana-vucic-dev/bingely?style=for-the-badge)

</div>

## ⫶☰ Table of Contents

- [Live Demo](#-live-demo)
- [Screenshots](#-screenshots)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation and Development](#-installation-and-development)
- [Project Structure](#-project-structure)
- [License](#-license)

## 🚀 Live Demo

[![Bingely](https://img.shields.io/badge/live%20demo-online?style=for-the-badge&logo=Vercel&logoSize=auto&label=Vercel&labelColor=black)](https://bingely-list.vercel.app/)

## 📸 Screenshots

<details>
  <summary><strong>View Screenshots</strong></summary>

<br>

### Search Results & Watchlist Overview

![Search results and watchlist overview](public/screenshots/bingely-search-and-watchlist.png)

### Rating

![Rating](public/screenshots/bingely-rating.png)

### Details View (Tablet)

<img src="public/screenshots/bingely-details-tablet.png" alt="Details view on tablet" width="550">

### Details View (Mobile)

<img src="public/screenshots/bingely-details-mobile.png" alt="Details view on mobile" width="320">

</details>

## ✨ Features

### 🔍 Search

- Fast, debounced search for movies and TV shows
- Dedicated results panel for browsing matches
- Detailed view with extended metadata

### ⭐ Rating

- Interactive star rating system

### 🎬 Watchlist

- Persistent watchlist with `localStorage`
- Watchlist statistics:
  - Total watched titles
  - Average IMDb rating
  - Average personal rating
  - Total estimated watch time

### ⌨ Keyboard-Friendly UI

- `/` focuses search
- `Esc` blurs search
- `Backspace` returns from details view
- Natural tab navigation

### 🤝 Accessibility

- Semantic HTML
- Custom focus states
- ARIA attributes
- Live region announcements

### 📱 Responsive Design

- Mobile-first interface
- Adaptive tablet and desktop layouts

## 🧰 Tech Stack

### ⚛️ Front End

- React 19
- Vite 8
- JavaScript (ES Modules)
- Modular vanilla CSS
- `localStorage` persistence
- ESLint + React Hooks rules
- Vercel deployment

### ⚡ API

- [OMDb API](https://www.omdbapi.com/) for movie and TV show data

### 🪝 Custom Hooks

- `useLocalStorageState` for persistent storage management
- `useMovieSearch` for data fetching with debounced search
- `useMovieDetails` for fetching additional information
- `useKey` for keydown event handling
- `useWindowWidth` for a dynamic search placeholder

## 🧩 Installation and Development

> [!IMPORTANT]  
> **Prerequisites:**
>
> - Node.js ≥ 18
> - npm ≥ 9

### 🖥️ Local Setup

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/ana-vucic-dev/bingely.git
cd bingely
npm install
npm run dev
```

2. Create a `.env` file in the root directory:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

### ⚙️ Production Build

```bash
npm run build
```

### 🔍 Build Preview

```bash
npm run preview
```

## 📂 Project Structure

```text
/
├── public/
│   ├── favicon/
│   └── screenshots/
├── src/
│   ├── components/     # UI components
│   ├── config/         # OMDb API configuration
│   ├── hooks/          # Custom hooks reused across UI logic
│   ├── styles/         # Modular CSS files split by feature/concern
│   ├── utils/          # Helper utilities (formatting, calculations)
│   ├── App.jsx         # App layout
│   └── main.jsx        # React entry point
├── index.html          # Vite entry file
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── README.md
└── LICENSE
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).
