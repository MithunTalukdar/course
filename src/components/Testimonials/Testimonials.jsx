import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiPlayCircle, FiStar } from 'react-icons/fi';
import SectionHeader from '../Shared/SectionHeader';
import { testimonials } from '../../utils/courseData';
import videoReviewArt from '../../assets/video-review.svg';

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, index) => (
        <FiStar key={index} />
      ))}
    </div>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % testimonials.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  const current = testimonials[active];

  return (
    <section className="section testimonials-section" id="reviews">
      <SectionHeader
        eyebrow="Student Reviews"
        title="Built for people who want proof of work, not just notes."
        text="Modern feedback cards and a video-review surface create social proof without clutter."
      />
      <div className="testimonial-layout">
        <motion.div
          className="video-review"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={videoReviewArt}
            alt="Student video review preview"
            width="920"
            height="620"
            loading="lazy"
            decoding="async"
          />
          <FiPlayCircle aria-hidden="true" />
          <span>Video review</span>
          <strong>How the drafting labs changed my interviews</strong>
        </motion.div>

        <div className="testimonial-panel">
          <AnimatePresence mode="wait">
            <motion.article
              className="testimonial-card"
              key={current.name}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.35 }}
            >
              <Stars count={current.rating} />
              <blockquote>{current.quote}</blockquote>
              <div>
                <strong>{current.name}</strong>
                <span>{current.role}</span>
              </div>
            </motion.article>
          </AnimatePresence>
          <div className="carousel-controls">
            <button type="button" aria-label="Previous testimonial" onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)}>
              <FiChevronLeft />
            </button>
            <div>
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={index === active ? 'is-active' : ''}
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
            <button type="button" aria-label="Next testimonial" onClick={() => setActive((active + 1) % testimonials.length)}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
