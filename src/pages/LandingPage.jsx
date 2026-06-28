import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Stats from '../components/Stats/Stats.jsx';
import TrustLogos from '../components/TrustLogos/TrustLogos.jsx';
import CourseHighlights from '../components/CourseHighlights/CourseHighlights.jsx';
import Benefits from '../components/Benefits/Benefits.jsx';
import LearningOutcomes from '../components/LearningOutcomes/LearningOutcomes.jsx';
import Curriculum from '../components/Curriculum/Curriculum.jsx';
import Instructor from '../components/Instructor/Instructor.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Pricing from '../components/Pricing/Pricing.jsx';
import FAQ from '../components/FAQ/FAQ.jsx';
import CTA from '../components/CTA/CTA.jsx';
import Footer from '../components/Footer/Footer.jsx';

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TrustLogos />
        <CourseHighlights />
        <Benefits />
        <LearningOutcomes />
        <Curriculum />
        <Instructor />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
