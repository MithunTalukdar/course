import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../../utils/animation';

function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <motion.div
      className={`section-header ${align === 'left' ? 'section-header--left' : ''}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

export default SectionHeader;
