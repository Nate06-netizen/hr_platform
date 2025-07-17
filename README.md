# HireHub – HR Platform Frontend

HireHub is a modern frontend HR web platform built with **Next.js** and **Tailwind CSS**. It allows users to browse job listings, filter them by category, and view detailed job descriptions. The project simulates real-world HR workflows using mock data and `localStorage`.

---

##  Features

-  Job listings powered by mock data
-  Category-based filtering (`/categories/[slug]`)
-  Detailed job views (`/jobs/[id]`)
-  Fully responsive UI
-  Fast and professional frontend experience
-  LocalStorage support for persistence

---

## Tech Stack

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

##  Getting Started

First, install the dependencies:

```bash
npm install
npm run dev

.
├── app/
│   ├── layout.js
│   ├── page.jsx        # Home page
│   └── jobs/[id].jsx   # Job detail pages
│   └── categories/[slug].jsx  # Category-based listings
├── components/
│   ├── BackButton.jsx
│   ├── Footer.jsx
│   └── JobCard.jsx
└──     Navbar.jsx
   
├── data/
│   └── jobs.js         # All job listings
├── public/
├── tailwind.config.js
└── README.md
