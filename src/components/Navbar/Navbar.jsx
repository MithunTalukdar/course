import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiMenu, FiMoon, FiSun, FiX, FiZap } from 'react-icons/fi';
import { navLinks } from '../../utils/courseData';
import { useDarkMode } from '../../hooks/useDarkMode';

// Custom hook for active section, now with improved rootMargin
function useActiveSection(links) {
  const [activeSection, setActiveSection] = useState(links[0]?.href ?? '#top');

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.replace('#', '')).filter(Boolean);
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      { rootMargin: '-30% 0px -70% 0px', threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [links]);

  return activeSection;
}

const navItemVariants = {
  closed: { opacity: 0, x: 28 },
  open: (index) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.12 + index * 0.045, duration: 0.32, ease: 'easeOut' },
  }),
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();
  const activeSection = useActiveSection(navLinks);
  const menuId = useId();
  const closeButtonRef = useRef(null);

  // --- Effects ---

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    if (open) {
      setTimeout(() => closeButtonRef.current?.focus(), 120);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // --- Handlers ---

  const closeMenu = () => setOpen(false);

  const scrollToSection = useCallback((event, href) => {
    if (!href?.startsWith('#')) return;
    event.preventDefault();
    
    const target = document.querySelector(href);
    if (!target) return;
    
    const navbarHeight = 80;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    
    window.history.pushState(null, '', href);
    setOpen(false);
  }, []);

  // --- Render ---

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out`}
      style={{
        backgroundColor: scrolled ? (darkMode ? 'rgba(6, 9, 20, 0.7)' : 'rgba(255, 255, 255, 0.7)') : 'transparent',
        backdropFilter: scrolled ? 'blur(16px) saturate(150%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(150%)' : 'none',
        borderBottomWidth: scrolled ? '1px' : '0px',
        borderColor: scrolled ? (darkMode ? 'rgba(148, 163, 184, 0.2)' : 'rgba(226, 232, 240, 1)') : 'transparent',
        boxShadow: scrolled ? (darkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.04)') : 'none',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 transition-all duration-300 ease-out"
        style={{
            minHeight: scrolled ? '64px' : '80px',
        }}
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, '#top')}
          className="flex items-center gap-2.5 transition-transform duration-200 hover:-translate-y-0.5"
          aria-label="Contract Drafting Pro home"
        >
          <motion.div
            className={`grid flex-shrink-0 place-items-center rounded-md bg-gradient-to-br from-blue-500 to-violet-500 font-black text-white shadow-md shadow-blue-500/30 transition-all duration-300 ease-out`}
            style={{
              width: scrolled ? '36px' : '40px',
              height: scrolled ? '36px' : '40px',
            }}
          >
            CD
          </motion.div>
          <span className="hidden text-lg font-black tracking-tight text-slate-800 dark:text-slate-100 sm:inline">
            Contract Drafting Pro
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1.5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative rounded-md px-3 py-2 text-sm font-bold text-slate-600 transition-colors duration-200 hover:bg-slate-200/60 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-blue-400"
              aria-current={activeSection === link.href ? 'page' : undefined}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div
                  layoutId="active-nav-link"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <button
            className="grid size-10 place-items-center rounded-lg border border-slate-300/50 bg-white/80 text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-slate-600"
            type="button"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setDarkMode(!darkMode)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={darkMode ? 'sun' : 'moon'}
                initial={{ opacity: 0, rotate: -30, y: 5 }}
                animate={{ opacity: 1, rotate: 0, y: 0 }}
                exit={{ opacity: 0, rotate: 30, y: 5 }}
                transition={{ duration: 0.2 }}
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href="#pricing"
            onClick={(e) => scrollToSection(e, '#pricing')}
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:saturate-150 dark:shadow-blue-500/10 sm:inline-flex"
          >
            <FiZap aria-hidden="true" />
            <span>Enroll Now</span>
          </a>

          <button
            className="grid size-10 place-items-center rounded-lg border border-slate-300/50 bg-white/80 text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-slate-600 lg:hidden"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-controls={menuId}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -20, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 20, scale: 0.9 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                {open ? <FiX size={20} /> : <FiMenu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Panel */}
            <motion.div
              className="absolute top-0 right-0 grid h-full w-full max-w-sm grid-rows-[auto_1fr_auto] gap-8 bg-white p-6 shadow-2xl dark:bg-slate-900"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            >
              <div className="flex items-center justify-between">
                <a
                  href="#top"
                  onClick={(e) => scrollToSection(e, '#top')}
                  className="flex items-center gap-2.5"
                  aria-label="Contract Drafting Pro home"
                >
                  <div className="grid size-9 flex-shrink-0 place-items-center rounded-md bg-gradient-to-br from-blue-500 to-violet-500 font-black text-white">
                    CD
                  </div>
                  <span className="text-lg font-black tracking-tight text-slate-800 dark:text-slate-100">
                    Contract Drafting Pro
                  </span>
                </a>
                <button
                  ref={closeButtonRef}
                  className="grid size-10 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  <FiX size={20} />
                </button>
              </div>

              <nav className="flex flex-col justify-center">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="group flex items-center justify-between rounded-md p-4 text-2xl font-black text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
                    aria-current={activeSection === link.href ? 'page' : undefined}
                    custom={index}
                    variants={navItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <span>{link.label}</span>
                    <FiArrowRight
                      aria-hidden="true"
                      className="text-blue-500 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </motion.a>
                ))}
              </nav>

              <div className="flex flex-col gap-3">
                 <a
                    href="#pricing"
                    onClick={(e) => scrollToSection(e, '#pricing')}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-3 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:saturate-150 dark:shadow-blue-500/10"
                  >
                    <FiZap aria-hidden="true" />
                    <span>Enroll Now</span>
                  </a>
                 <button
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg border border-slate-300/70 bg-white/80 py-3 text-base font-bold text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600"
                    type="button"
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    {darkMode ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
                    <span>{darkMode ? 'Light mode' : 'Dark mode'}</span>
                  </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
