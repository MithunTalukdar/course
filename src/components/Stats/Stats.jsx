import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../../utils/courseData';
import { fadeUp, staggerContainer, viewport } from '../../utils/animation';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame;
    const start = performance.now();
    const duration = 1200;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(value * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  const display = value % 1 === 0 ? Math.round(count).toLocaleString() : count.toFixed(1);

  return (
    <strong ref={ref}>
      {display}
      {suffix}
    </strong>
  );
}

function Stats() {
  return (
    <motion.section
      className="stats-section"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      aria-label="Course statistics"
    >
      {stats.map((stat) => (
        <motion.div className="stat-card" key={stat.label} variants={fadeUp}>
          <Counter value={stat.value} suffix={stat.suffix} />
          <span>{stat.label}</span>
        </motion.div>
      ))}
    </motion.section>
  );
}

export default Stats;
