import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const smoothX = useSpring(x, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const onMove = (event) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      className="cursor-glow"
      style={{ x: smoothX, y: smoothY, opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  );
}

export default CursorGlow;
