import Image from "next/image";
import { getMessageCount, getAllMessages } from "@/lib/data";

export default function Home() {
  const msgCount = getMessageCount();
  const recentMessages = getAllMessages().slice(0, 4);

  // Calculate D-Day for the view
  const enlistDate = new Date('2026-08-22');
  const dischargeDate = new Date('2028-02-21');
  const today = new Date();
  const remain = Math.max(0, Math.ceil((dischargeDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));

  return (
    <div>
      {/* Updated News */}
      <div style={{ display: 'flex', borderTop: '1px solid #ccc', paddingTop: '10px', marginBottom: '15px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ color: 'var(--cyworld-blue)', fontWeight: 'bold', fontSize: '12px', marginBottom: '5px' }}>Updated news</div>
          <div style={{ fontSize: '11px', color: '#333', lineHeight: '1.6' }}>
            · 무사히 훈련소 수료 완료!<br />
            · 롤링페이퍼에 <span style={{ color: '#e74c3c' }}>{msgCount}개</span>의 메시지 도착<br />
            · 전역까지 D-{remain}일<br />
            · 눈 내리는 부대 풍경...
          </div>
        </div>
        <div style={{ flex: 1, borderLeft: '1px dashed #ccc', paddingLeft: '10px' }}>
          <div style={{ fontSize: '11px', color: '#333', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
            <div>다이어리 <span style={{ color: 'red' }}>0</span>/<span style={{ color: '#777' }}>42</span></div>
            <div>쥬크박스 <span style={{ color: 'red' }}>0</span>/<span style={{ color: '#777' }}>12</span></div>
            <div>사진첩 <span style={{ color: 'red' }}>0</span>/<span style={{ color: '#777' }}>108</span></div>
            <div>게시판 <span style={{ color: 'red' }}>0</span>/<span style={{ color: '#777' }}>5</span></div>
            <div>방명록 <span style={{ color: 'red' }}>0</span>/<span style={{ color: '#777' }}>{msgCount}</span></div>
          </div>
        </div>
      </div>

      {/* Mini Room */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5px' }}>
        <span style={{ color: 'var(--cyworld-blue)', fontWeight: 'bold', fontSize: '12px' }}>Mini Room</span>
        <span style={{ fontSize: '11px', color: 'var(--cyworld-blue)' }}>Cyworld 5th</span>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '3px', background: '#fff', marginBottom: '15px' }}>
        <div style={{ position: 'relative', width: '100%', height: '240px', backgroundColor: '#f0f8fc', borderRadius: '10px', overflow: 'hidden' }}>
          <Image 
            src="/miniroom.png" 
            alt="미니룸"
            fill
            style={{ objectFit: 'cover' }}
            unoptimized
          />
        </div>
      </div>
      
      {/* 일촌평 스타일 미리보기 */}
      <div style={{ color: 'var(--cyworld-blue)', fontWeight: 'bold', fontSize: '12px', marginBottom: '5px' }}>What friends say</div>
      
      {recentMessages.length === 0 ? (
        <div style={{ fontSize: '11px', color: '#777' }}>아직 일촌평이 없습니다.</div>
      ) : (
        recentMessages.map((msg) => {
          let content = msg.content.replace(/\n/g, " ");
          const display = content.length > 40 ? content.slice(0, 40) + "..." : content;
          return (
            <div key={msg.id} style={{ fontSize: '11px', padding: '3px 0', borderBottom: '1px dashed #eee' }}>
              <span style={{ color: '#333' }}>{display}</span>
              <span style={{ color: 'var(--cyworld-blue)', marginLeft: '5px' }}>- {msg.author}</span>
            </div>
          );
        })
      )}
    </div>
  );
}
