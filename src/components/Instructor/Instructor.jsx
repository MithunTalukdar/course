import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiLinkedin, FiMic, FiTwitter } from 'react-icons/fi';
import SectionHeader from '../Shared/SectionHeader';
import instructorPortrait from '../../assets/instructor-portrait.svg';

function Instructor() {
  return (
    <section className="section instructor-section">
      <SectionHeader
        eyebrow="Instructor"
        title="Learn from practitioners who draft for business outcomes."
        text="The faculty profile is designed for credibility, clarity, and confidence without borrowing another brand's layout."
      />
      <motion.div
        className="instructor-card"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
      >
        <div className="instructor-portrait">
          <img
            src={instructorPortrait}
            alt="Advocate Kavya Menon, lead contract drafting faculty"
            width="720"
            height="860"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="instructor-content">
          <span className="eyebrow">Lead Faculty</span>
          <h2>Adv. Kavya Menon</h2>
          <p>
            Commercial lawyer, contract strategist, and mentor with 12+ years across technology, employment, SaaS,
            founder advisory, and cross-border service agreements.
          </p>
          <div className="achievement-grid">
            <span>
              <FiBriefcase /> 800+ contracts reviewed
            </span>
            <span>
              <FiAward /> Bar & industry speaker
            </span>
            <span>
              <FiMic /> Live drafting labs
            </span>
          </div>
          <div className="social-row">
            <a href="https://www.linkedin.com" aria-label="Instructor LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://x.com" aria-label="Instructor X profile">
              <FiTwitter />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Instructor;
