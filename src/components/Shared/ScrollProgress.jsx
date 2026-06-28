import { useScrollProgress } from '../../hooks/useScrollProgress';

function ScrollProgress() {
  const progress = useScrollProgress();

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />;
}

export default ScrollProgress;
