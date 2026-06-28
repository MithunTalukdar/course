import { motion } from 'framer-motion';

function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <motion.div
        className="loader-mark"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{ rotate: { repeat: Infinity, duration: 1.4, ease: 'linear' }, scale: { repeat: Infinity, duration: 1.4 } }}
      />
      <div className="skeleton skeleton--wide" />
      <div className="skeleton skeleton--short" />
      <span className="sr-only">Loading course page</span>
    </div>
  );
}

export default LoadingScreen;
