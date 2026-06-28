import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import SectionHeader from '../Shared/SectionHeader';
import { outcomes } from '../../utils/courseData';
import { fadeUp, staggerContainer, viewport } from '../../utils/animation';

function LearningOutcomes() {
  return (
    <section className="section outcomes-section">
      <div className="outcomes-layout">
        <SectionHeader
          align="left"
          eyebrow="Learning Outcomes"
          title="You leave with skill, samples, and a sharper professional voice."
          text="Each milestone moves from understanding to drafting to review to client delivery."
        />
        <motion.div
          className="timeline"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {outcomes.map((item, index) => (
            <motion.div className="timeline-item" key={item} variants={fadeUp}>
              <span className="timeline-item__number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <FiCheck aria-hidden="true" />
                <p>{item}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default LearningOutcomes;
