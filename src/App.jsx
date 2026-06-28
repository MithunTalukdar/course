import { Suspense, lazy } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.jsx';
import ScrollProgress from './components/Shared/ScrollProgress.jsx';
import CursorGlow from './components/Shared/CursorGlow.jsx';
import BackToTop from './components/BackToTop/BackToTop.jsx';
import StickyMobileCTA from './components/StickyMobileCTA/StickyMobileCTA.jsx';

const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ScrollProgress />
      <CursorGlow />
      <LandingPage />
      <BackToTop />
      <StickyMobileCTA />
    </Suspense>
  );
}

export default App;
