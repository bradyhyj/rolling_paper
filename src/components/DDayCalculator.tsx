'use client';

import { useEffect, useState } from 'react';

export default function DDayCalculator() {
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    const enlistDate = new Date('2026-08-04T00:00:00').getTime();
    const dischargeDate = new Date('2028-02-03T00:00:00').getTime();
    const totalTime = dischargeDate - enlistDate;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = dischargeDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setPercent(100);
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const served = now - enlistDate;
      const currentPercent = Math.min(100, Math.max(0, (served / totalTime) * 100));

      setTimeLeft({ days, hours, minutes, seconds });
      setPercent(currentPercent);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <div style={{ fontSize: '11px', color: '#777' }}>계산 중...</div>;
  }

  return (
    <div style={{ padding: '10px 15px', borderBottom: '1px dashed #ccc' }}>
      <div style={{ fontWeight: 'bold', color: 'var(--cyworld-blue)', marginBottom: '5px', fontSize: '12px' }}>
        ▶ 전역까지 남은 시간
      </div>
      <div style={{ fontSize: '11px', color: '#333', marginBottom: '5px' }}>
        D-{timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초
      </div>
      <div style={{ width: '100%', height: '10px', background: '#ddd', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={{ width: `${percent}%`, height: '100%', background: '#27ae60' }}></div>
      </div>
      <div style={{ textAlign: 'right', fontSize: '9px', color: '#777', marginTop: '2px' }}>
        복무율: {percent.toFixed(2)}%
      </div>
    </div>
  );
}
