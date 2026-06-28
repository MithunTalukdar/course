import { motion } from 'framer-motion';
import SectionHeader from '../Shared/SectionHeader';
import { highlights } from '../../utils/courseData';
import { fadeUp, staggerContainer, viewport } from '../../utils/animation';

function CourseHighlights() {
  return (
    <section className="section" id="course">
      <SectionHeader
        eyebrow="Course Highlights"
        title="Everything serious contract drafters expect in one polished program."
        text="The learning path combines live teaching, drafting reps, templates, feedback, and portfolio proof."
      />
      <motion.div
        className="highlight-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article className="premium-card highlight-card" key={item.title} variants={fadeUp} whileHover={{ y: -8 }}>
              <div className="card-icon">
                <Icon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default CourseHighlights;
