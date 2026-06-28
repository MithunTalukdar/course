import { FiInstagram, FiLinkedin, FiMail, FiTwitter, FiYoutube } from 'react-icons/fi';
import { navLinks } from '../../utils/courseData';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__grid">
        <div>
          <a className="logo" href="#top" aria-label="Contract Drafting Pro home">
            <span className="logo__mark">CD</span>
            <span className="logo__text">Contract Drafting Pro</span>
          </a>
          <p>Premium legal drafting education for ambitious lawyers, students, and consultants.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://x.com" aria-label="X">
              <FiTwitter />
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube">
              <FiYoutube />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <FiInstagram />
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Legal</h3>
          <a href="#top">Terms</a>
          <a href="#top">Privacy</a>
          <a href="#top">Refund Policy</a>
          <a href="#top">Contact</a>
        </div>
        <form className="newsletter" onSubmit={(event) => event.preventDefault()}>
          <h3>Newsletter</h3>
          <p>Get drafting tips, clause teardown notes, and cohort updates.</p>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div>
            <FiMail aria-hidden="true" />
            <input id="newsletter-email" type="email" placeholder="you@example.com" required />
            <button type="submit">Join</button>
          </div>
        </form>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Contract Drafting Pro. All rights reserved.</span>
        <span>Built for modern legal professionals.</span>
      </div>
    </footer>
  );
}

export default Footer;
