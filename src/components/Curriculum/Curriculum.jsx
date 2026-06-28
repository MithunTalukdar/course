import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown, FiDownloadCloud } from 'react-icons/fi';
import SectionHeader from '../Shared/SectionHeader';
import Button from '../Shared/Button';
import { curriculum } from '../../utils/courseData';

function Curriculum() {
  const [active, setActive] = useState(0);

  return (
    <section className="section curriculum-section" id="curriculum">
      <SectionHeader
        eyebrow="Curriculum"
        title="A six-module path from blank page to client-ready contract."
        text="Every module ends with a real artifact you can add to your drafting portfolio."
      />
      <div className="curriculum-layout">
        <div className="curriculum-list">
          {curriculum.map((module, index) => {
            const open = active === index;
            return (
              <motion.article
                className={`accordion ${open ? 'accordion--open' : ''}`}
                key={module.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04 }}
              >
                <button type="button" onClick={() => setActive(open ? -1 : index)} aria-expanded={open}>
                  <span>{module.number}</span>
                  <strong>{module.title}</strong>
                  <em>{module.duration}</em>
                  <FiChevronDown />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className="accordion__body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <ul>
                        {module.lessons.map((lesson) => (
                          <li key={lesson}>{lesson}</li>
                        ))}
                      </ul>
                      <p>
                        <strong>Project:</strong> {module.project}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
        <motion.aside
          className="brochure-card"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">Brochure</span>
          <h3>Download the complete cohort map.</h3>
          <p>Includes module outcomes, weekly cadence, project rubrics, and template categories.</p>
          <Button icon={FiDownloadCloud} href="/contract-drafting-pro-brochure.txt" download="contract-drafting-pro-brochure.txt">
            Download Brochure
          </Button>
        </motion.aside>
      </div>
    </section>
  );
}

export default Curriculum;
