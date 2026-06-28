import { useEffect, useMemo, useState } from 'react';

const getRemaining = (target) => {
  const total = Math.max(new Date(target).getTime() - Date.now(), 0);
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60)
  };
};

export function useCountdown(daysFromNow = 5) {
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    date.setHours(23, 59, 59, 999);
    return date;
  }, [daysFromNow]);

  const [remaining, setRemaining] = useState(() => getRemaining(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining(targetDate)), 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  return remaining;
}
