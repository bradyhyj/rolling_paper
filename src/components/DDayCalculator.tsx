'use client';

import { useEffect, useState } from 'react';

export default function DDayCalculator() {
  const [timeLeftDischarge, setTimeLeftDischarge] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);
  const [timeLeftEnlist, setTimeLeftEnlist] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);
  const [percent, setPercent] = useState<number>(0);
  const [hasEnlisted, setHasEnlisted] = useState<boolean>(false);

  useEffect(() => {
    // 입대일: 2026년 8월 24일
    const enlistDate = new Date('2026-08-24T00:00:00').getTime();
    // 전역일: 2028년 3월 31일 (18개월)
    const dischargeDate = new Date('2028-03-31T00:00:00').getTime();
    const totalTime = dischargeDate - enlistDate;

    const timer = setInterval(() => {
      const now = new Date().getTime();

      // 전역까지 남은 시간
      const distanceDischarge = dischargeDate - now;
      if (distanceDischarge < 0) {
        setTimeLeftDischarge({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setPercent(100);
      } else {
        const days = Math.floor(distanceDischarge / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceDischarge % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distanceDischarge % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distanceDischarge % (1000 * 60)) / 1000);
        setTimeLeftDischarge({ days, hours, minutes, seconds });
      }

      // 입대 여부 및 입대까지 남은 시간
      const distanceEnlist = enlistDate - now;
      if (distanceEnlist > 0) {
        setHasEnlisted(false);
        const days = Math.floor(distanceEnlist / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceEnlist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distanceEnlist % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distanceEnlist % (1000 * 60)) / 1000);
        setTimeLeftEnlist({ days, hours, minutes, seconds });
        setPercent(0); // 입대 전이므로 복무율 0%
      } else {
        setHasEnlisted(true);
        setTimeLeftEnlist(null);
        // 입대 후 복무율 계산
        const served = now - enlistDate;
        const currentPercent = Math.min(100, Math.max(0, (served / totalTime) * 100));
        setPercent(currentPercent);
      }

    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeftDischarge) {
    return <div style={{ fontSize: '11px', color: '#777' }}>계산 중...</div>;
  }

  return (
    <div style={{ padding: '10px 15px', borderBottom: '1px dashed #ccc' }}>

      {!hasEnlisted && timeLeftEnlist && (
        <div style={{ marginBottom: '15px' }}>
          <div style={{ fontWeight: 'bold', color: '#e74c3c', marginBottom: '5px', fontSize: '12px' }}>
            ▶ 입대까지 남은 시간
          </div>
          <div style={{ fontSize: '11px', color: '#333', marginBottom: '5px' }}>
            D-{timeLeftEnlist.days}일 {timeLeftEnlist.hours}시간 {timeLeftEnlist.minutes}분 {timeLeftEnlist.seconds}초
          </div>
        </div>
      )}

      <div>
        <div style={{ fontWeight: 'bold', color: 'var(--cyworld-blue)', marginBottom: '5px', fontSize: '12px' }}>
          ▶ 전역까지 남은 시간
        </div>
        <div style={{ fontSize: '11px', color: '#333', marginBottom: '5px' }}>
          D-{timeLeftDischarge.days}일 {timeLeftDischarge.hours}시간 {timeLeftDischarge.minutes}분 {timeLeftDischarge.seconds}초
        </div>
        <div style={{ width: '100%', height: '10px', background: '#ddd', borderRadius: '5px', overflow: 'hidden' }}>
          <div style={{ width: `${percent}%`, height: '100%', background: '#27ae60' }}></div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '9px', color: '#777', marginTop: '2px' }}>
          복무율: {percent.toFixed(2)}%
        </div>
      </div>
    </div>
  );
}
