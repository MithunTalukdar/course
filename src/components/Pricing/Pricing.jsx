import { motion } from 'framer-motion';
import { FiCheck, FiCreditCard, FiLock, FiShield, FiZap } from 'react-icons/fi';
import SectionHeader from '../Shared/SectionHeader';
import Button from '../Shared/Button';
import { useCountdown } from '../../hooks/useCountdown';
import { pricingFeatures } from '../../utils/courseData';

function Pricing() {
  const remaining = useCountdown(4);
  const countdown = [
    ['Days', remaining.days],
    ['Hours', remaining.hours],
    ['Min', remaining.minutes],
    ['Sec', remaining.seconds]
  ];

  return (
    <section className="section pricing-section" id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        title="Enroll once. Build assets you can reuse for years."
        text="A premium cohort experience with templates, live feedback, portfolio projects, and lifetime resource access."
      />
      <motion.div
        className="pricing-card"
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="offer-badge">Limited cohort offer</div>
        <div className="pricing-main">
          <div>
            <span className="eyebrow">Expert Cohort</span>
            <h3>Contract Drafting + Freelancing Mastery</h3>
            <p>Includes live classes, mentor feedback, templates, assignments, and certificate.</p>
          </div>
          <div className="price-block" aria-label="Course price">
            <span className="old-price">₹39,999</span>
            <strong>₹23,999</strong>
            <em>Save 40%</em>
          </div>
        </div>
        <div className="countdown" aria-label="Offer countdown timer">
          {countdown.map(([label, value]) => (
            <div key={label}>
              <strong>{String(value).padStart(2, '0')}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <ul className="pricing-features">
          {pricingFeatures.map((feature) => (
            <li key={feature}>
              <FiCheck />
              {feature}
            </li>
          ))}
        </ul>
        <Button className="pricing-button" icon={FiZap}>
          Enroll Now
        </Button>
        <div className="payment-row">
          <span>
            <FiShield /> 7-day satisfaction guarantee
          </span>
          <span>
            <FiLock /> Secure checkout
          </span>
          <span>
            <FiCreditCard /> Cards, UPI, NetBanking
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default Pricing;
