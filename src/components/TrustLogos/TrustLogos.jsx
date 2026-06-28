import { motion } from 'framer-motion';
import { trustLogos } from '../../utils/courseData';

function TrustLogos() {
  return (
    <section className="trust-logos" aria-label="Companies where learners work">
      <p>Learners and alumni bring these skills into teams at</p>
      <div className="logo-marquee">
        <motion.div
          className="logo-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
        >
          {[...trustLogos, ...trustLogos].map((logo, index) => (
            <span key={`${logo}-${index}`}>{logo}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TrustLogos;
