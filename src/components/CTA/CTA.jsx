import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../Shared/Button';

function CTA() {
  return (
    <section className="final-cta">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <span className="eyebrow">Next cohort</span>
        <h2>Draft the kind of contracts that make clients trust you faster.</h2>
        <p>Join a premium cohort, complete guided projects, and leave with reusable legal drafting assets.</p>
        <Button icon={FiArrowRight}>Start Learning Today</Button>
      </motion.div>
    </section>
  );
}

export default CTA;
