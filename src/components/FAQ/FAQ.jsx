import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import SectionHeader from '../Shared/SectionHeader';
import { faqs } from '../../utils/courseData';

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions serious learners usually ask."
        text="Clear answers for timing, access, templates, experience level, and guarantee."
      />
      <div className="faq-list">
        {faqs.map((item, index) => {
          const open = active === index;
          return (
            <motion.article
              className="faq-item"
              key={item.question}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <button type="button" onClick={() => setActive(open ? -1 : index)} aria-expanded={open}>
                <span>{item.question}</span>
                <FiChevronDown />
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
