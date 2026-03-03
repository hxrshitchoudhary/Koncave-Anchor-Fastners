# 🏗️ Koncave Anchor Fastners - Corporate Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Web3Forms](https://img.shields.io/badge/Web3Forms-000000?style=for-the-badge&logo=minutemailer&logoColor=white)

The official corporate catalog and lead-generation website for **Koncave Anchor Fastners Pvt Ltd.** This project is a modern, high-performance React application designed to showcase technical anchoring products, provide downloadable test reports, and seamlessly collect client inquiries.

## ✨ Key Features

* **📖 Dynamic Product Catalog:** A centralized data architecture (`data.js`) powers the entire product portfolio, rendering technical tables, variants, and applications automatically.
* **🧱 Modular Architecture:** Built with a clean, scalable component and page structure for easy future development.
* **📱 Fully Responsive Design:** Custom-built CSS media queries ensure the site looks flawless on desktops, tablets, and mobile devices—including mobile-friendly horizontal scrollable data tables.
* **✉️ Integrated Bulk Inquiry System:** Uses **Web3Forms** for a completely backend-free, secure quote request and contact modal.
* **⚡ Blazing Fast Builds:** Powered by Vite for instant Hot Module Replacement (HMR) and heavily optimized production builds.

## 🛠️ Tech Stack

* **Frontend:** React.js (v18+)
* **Build Tool:** Vite
* **Routing:** React Router v6
* **Styling:** Pure CSS3 (Custom Properties, Flexbox, CSS Grid)
* **Form Handling:** Web3Forms API
* **Icons:** Pure Native Inline SVGs (Zero external library dependencies)

## 📂 Project Structure

This project uses a modern modular architecture for optimal organization:

```text
├── public/                  # Static assets folder (served at root)
│   ├── catalogue/           # PDF catalogs (e.g., catalogue.pdf)
│   ├── images/              # All website product & hero images
│   ├── reports/             # Downloadable PDF technical test reports
│   └── logo.svg             # Main vector logo
├── src/                     # React source code
│   ├── components/          # Reusable UI elements
│   │   ├── Footer.jsx       # Global footer
│   │   ├── Icons.jsx        # Centralized SVG icon library
│   │   ├── Navbar.jsx       # Main navigation header
│   │   ├── QuoteModal.jsx   # Web3Forms inquiry modal
│   │   └── ScrollToTop.jsx  # Router scroll-reset utility
│   ├── pages/               # Main route views
│   │   ├── AboutPage.jsx
│   │   ├── CatalogPage.jsx
│   │   ├── HomePage.jsx
│   │   └── ProductDetailPage.jsx
│   ├── App.css              # Global styles & responsive media queries
│   ├── App.jsx              # Main routing configuration
│   ├── data.js              # Central database for all text/products
│   └── main.jsx             # React entry point
├── .gitignore               
├── eslint.config.js         # Linter configuration
├── index.html               # Main HTML Template (Vite entry point)
├── package.json             # Project metadata and scripts
├── package-lock.json        
├── vite.config.js           # Vite build configuration
└── README.md                # This file