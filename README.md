# 🏗️ Koncave Anchor Fastners - Corporate Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

The official corporate catalog and lead-generation website for **Koncave Anchor Fastners Pvt Ltd.** This project is a modern, high-performance React application designed to showcase technical anchoring products, provide downloadable test reports, and seamlessly collect client inquiries.

## ✨ Key Features

* **📖 Dynamic Product Catalog:** A centralized data architecture (`data.js`) powers the entire product portfolio, rendering technical tables, variants, and applications automatically.
* **📱 Fully Responsive Design:** Custom-built CSS media queries ensure the site looks flawless on desktops, tablets, and mobile devices—including mobile-friendly horizontal scrollable data tables.
* **✉️ Integrated Bulk Inquiry System:** Uses **Web3Forms** for a completely backend-free, secure quote request and contact modal.
* **⚡ Modern UI/UX:** Features smooth CSS animations (`fade-in`, `slide-up`), premium hover-lift effects, and a CSS-variable-driven theme engine.
* **🗺️ Seamless Routing:** Built with `react-router-dom` to provide instantaneous page transitions between Home, About, Product Catalog, and Dynamic Product Detail pages.

## 🛠️ Tech Stack

* **Frontend:** React.js (v18+)
* **Build Tool:** Vite
* **Routing:** React Router v6
* **Styling:** Pure CSS3 (Custom Properties/Variables, Flexbox, CSS Grid)
* **Form Handling:** Web3Forms API
* **Icons:** Pure Native Inline SVGs (Zero external library dependencies for faster load times)

## 📂 Project Structure

This directory structure has been precisely laid out to reflect the root architecture of the project.

```text
├── public/                  # Static assets folder (served at root)
│   ├── catalogue/           # Location for PDF catalogs
│   │   └── catalogue.pdf    # Main downloadable company catalog
│   ├── images/              # All website images & logos
│   │   ├── logo.png
│   │   ├── hero-bg.jpg
│   │   ├── app-drop-in.jpg     # Product application image
│   │   ├── app-nylon-csk.jpg   # Product application image
│   │   ├── app-nylon-hex.jpg   # Product application image
│   │   └── product-wedge.jpg
│   ├── reports/             # Downloadable PDF technical reports
│   └── logo.svg             # Main vector logo
├── src/                     # React source code folder
│   ├── App.css              # Main app-level styles & animations
│   ├── App.jsx              # Main application root component
│   ├── data.js              # Centralized content/product database
│   └── main.jsx             # React entry point file
├── .gitignore               # Files ignored by git tracking
├── eslint.config.js         # Configuration for ESLint linting
├── index.html               # Main HTML Template (Vite entry point)
├── package.json             # Project metadata and dependencies list
├── package-lock.json        # Direct file for npm package locking
├── vite.config.js           # Configuration file for Vite build tool
└── README.md                # This file
