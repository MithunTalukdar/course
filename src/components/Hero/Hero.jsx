import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiFileText, FiPlay, FiShield, FiStar, FiUsers, FiVideo } from 'react-icons/fi';
import Button from '../Shared/Button';
import { fadeUp, staggerContainer } from '../../utils/animation';
import dashboardArt from '../../assets/contract-dashboard.svg';

const floatingCards = [
  { icon: FiFileText, title: 'Redline Lab', text: 'Live clause reviews' },
  { icon: FiShield, title: 'Risk Matrix', text: 'Map liability fast' },
  { icon: FiVideo, title: 'Office Hours', text: 'Mentor-led sessions' }
];

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__mesh" aria-hidden="true" />
      <motion.div
        className="hero__content"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero__copy" variants={fadeUp}>
          <motion.span
            className="live-badge"
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
          >
            <span />
            Live cohort enrolling now
          </motion.span>
          <h1>Master contract drafting and build a premium legal career.</h1>
          <p className="hero__subheading">
            A project-based expert program for lawyers, law students, and consultants who want to draft sharper contracts,
            review risk confidently, and package legal services for high-trust clients.
          </p>
          <div className="hero__actions">
            <Button icon={FiArrowRight}>Reserve Your Seat</Button>
            <Button variant="secondary" icon={FiPlay} href="#curriculum">
              View Curriculum
            </Button>
          </div>
          <div className="hero__trust" aria-label="Course trust indicators">
            <span>
              <FiStar /> 4.9 cohort rating
            </span>
            <span>
              <FiUsers /> 5,400+ learners
            </span>
            <span>
              <FiCheckCircle /> Certificate included
            </span>
          </div>
        </motion.div>

        <motion.div className="hero__visual" variants={fadeUp}>
          <motion.div
            className="preview-card"
            initial={{ rotateX: 10, rotateY: -10 }}
            animate={{ rotateX: [8, 0, 8], rotateY: [-8, 2, -8] }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
          >
            <div className="preview-card__top">
              <span>Contract Review Dashboard</span>
              <strong>92%</strong>
            </div>
            <img
              className="dashboard-art"
              src={dashboardArt}
              alt="Contract review dashboard with drafting progress and risk panels"
              width="960"
              height="620"
              loading="eager"
              decoding="async"
            />
            <div className="doc-lines">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="risk-panel">
              <div>
                <span>Liability Cap</span>
                <strong>Negotiable</strong>
              </div>
              <div>
                <span>IP Assignment</span>
                <strong>Revise</strong>
              </div>
              <div>
                <span>Payment Terms</span>
                <strong>Approved</strong>
              </div>
            </div>
            <div className="preview-card__footer">
              <span>24 portfolio drafts</span>
              <span>54 live rooms</span>
            </div>
          </motion.div>

          {floatingCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                className={`float-card float-card--${index + 1}`}
                key={card.title}
                animate={{ y: [0, index % 2 ? 12 : -12, 0], rotate: [0, index % 2 ? -2 : 2, 0] }}
                transition={{ repeat: Infinity, duration: 4 + index, ease: 'easeInOut' }}
              >
                <Icon />
                <div>
                  <strong>{card.title}</strong>
                  <span>{card.text}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
