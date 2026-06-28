import { motion } from 'framer-motion';
import SectionHeader from '../Shared/SectionHeader';
import { benefits } from '../../utils/courseData';
import { fadeUp, staggerContainer, viewport } from '../../utils/animation';

function Benefits() {
  return (
    <section className="section benefits-section">
      <div className="benefits-shell">
        <SectionHeader
          eyebrow="Why Learn Contract Drafting"
          title="Because the best legal careers are built on practical judgment."
          text="Clients do not pay for copied clauses. They pay for clarity, leverage, risk control, and documents that make deals move."
        />
        <motion.div
          className="benefit-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className="benefit-card"
                key={item.title}
                variants={fadeUp}
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 0.4 : -0.4 }}
              >
                <Icon />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Benefits;
