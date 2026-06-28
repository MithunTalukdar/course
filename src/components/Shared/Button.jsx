import { motion } from 'framer-motion';

function Button({ children, href = '#pricing', variant = 'primary', className = '', icon: Icon, ...props }) {
  return (
    <motion.a
      href={href}
      className={`btn btn--${variant} ${className}`}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="btn__ripple" aria-hidden="true" />
      {Icon && <Icon aria-hidden="true" />}
      <span>{children}</span>
    </motion.a>
  );
}

export default Button;
