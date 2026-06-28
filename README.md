# Contract Drafting Pro Landing Page

A fully responsive, production-ready landing page for a premium contract drafting and freelancing course. Built with React and Vite, this project features a modern component-based architecture, smooth animations with Framer Motion, and a sleek design powered by Tailwind CSS.

## ✨ Features

- **Modern Tech Stack:** React 18, Vite, and Tailwind CSS.
- **Component-Based:** Clean and reusable component structure.
- **Animated & Interactive:** Engaging user experience with Framer Motion.
- **Responsive Design:** Professional layout on all devices, from mobile to large desktops.
- **SEO Optimized:** Best practices for search engine visibility.
- **Deployment Ready:** Pre-configured for seamless deployment on Vercel.

## Tech Stack

- React 18 with Vite
- JavaScript
- React Router for navigation
- Tailwind CSS with custom design tokens
- Framer Motion
- React Icons

## 📂 Folder Structure

The project follows a standard and scalable structure.

```text
src/
├── assets/         # Static assets like images, fonts
├── components/     # Reusable React components
├── hooks/          # Custom React hooks
├── pages/          # Page-level components
├── styles/         # Global styles and Tailwind configuration
├── utils/          # Utility functions
├── App.jsx         # Main application component with routing
└── main.jsx        # Entry point of the React application
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or newer)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MithunTalukdar/course.git
   cd course
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

This project uses environment variables for configuration. Create a `.env` file in the root of the project by copying the example file:

```bash
cp .env.example .env
```

Update the `.env` file with any necessary values (currently none are required).

### Run Locally

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

### Vercel

1. Import the repository in Vercel.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.

### Netlify

1. Connect the repository in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.

### GitHub Pages

1. Set the correct `base` in `vite.config.js` if deploying to a subpath.
2. Run `npm run build`.
3. Publish the `dist` directory using your preferred GitHub Pages workflow.

## Structure

```text
src/
  assets/
  components/
  hooks/
  pages/
  styles/
  utils/
  App.jsx
  main.jsx
```
