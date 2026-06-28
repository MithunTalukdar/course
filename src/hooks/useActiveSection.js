import { useEffect, useState } from 'react';

export function useActiveSection(links) {
  const [activeSection, setActiveSection] = useState(links[0]?.href ?? '#top');

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.replace('#', '')).filter(Boolean);
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0.12, 0.28, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  return activeSection;
}
