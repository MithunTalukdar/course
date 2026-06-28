import { motion } from 'framer-motion';
import { FiZap } from 'react-icons/fi';

function StickyMobileCTA() {
  return (
    <motion.a
      className="mobile-cta"
      href="#pricing"
      initial={{ y: 90 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <FiZap aria-hidden="true" />
      <span>Enroll Now</span>
      <strong>Save 40%</strong>
    </motion.a>
  );
}

export default StickyMobileCTA;
