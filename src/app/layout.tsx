import type { Metadata } from "next";
import "./globals.css";
import NavigationTabs from "@/components/NavigationTabs";
import DDayCalculator from "@/components/DDayCalculator";

export const metadata: Metadata = {
  title: "진도현님의 미니홈피",
  description: "경북대학교 컴퓨터학부 25학번 진도현 군대 롤링페이퍼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="cyworld-container">
          {/* ━━━ Left Page (Profile) ━━━ */}
          <div className="cyworld-left">
            <div style={{ textAlign: 'center', fontSize: '11px', marginBottom: '15px', marginTop: '5px' }}>
              TODAY <span style={{ color: 'red' }}>34</span> | TOTAL 10842
            </div>

            <div style={{ padding: '0 15px', marginBottom: '5px' }}>
              <div style={{
                width: '100%', aspectRatio: '1/1', backgroundColor: '#e0e0e0',
                border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Nanum Gothic', sans-serif", fontSize: '40px', fontWeight: '800', color: '#fff'
              }}>
                진
              </div>
            </div>

            <div style={{
              margin: '0 15px 15px', border: '1px solid #ccc', padding: '2px 5px',
              fontSize: '11px', display: 'flex', justifyContent: 'space-between',
              background: '#fff', cursor: 'pointer'
            }}>
              <span style={{ color: 'var(--cyworld-blue)' }}>TODAY IS...</span>
              <span>☀️ 즐거움</span>
            </div>

            <div style={{ padding: '0 15px', fontSize: '12px', lineHeight: '1.6', color: 'var(--cyworld-blue)', marginBottom: '10px' }}>
              경북대학교<br />컴퓨터학부 25학번<br />진도현입니다.<br />
            </div>

            <DDayCalculator />

            <div style={{ padding: '15px 15px 0', fontSize: '11px', color: '#555' }}>
              <div style={{ fontWeight: 'bold', color: 'var(--cyworld-blue)', marginBottom: '5px' }}>▶ HISTORY</div>
              <div>싸이월드 ⓟ <span style={{ color: 'var(--cyworld-blue)' }}>2026.08.24</span></div>
            </div>

            <div style={{ position: 'absolute', bottom: '20px', left: '15px', right: '15px' }}>
              <select style={{ width: '100%', padding: '3px', fontFamily: "'DotGothic16', sans-serif", fontSize: '11px', border: '1px solid #ccc' }}>
                <option>★ 일촌 파도타기</option>
                <option>김고은</option>
                <option>김동후</option>
                <option>김민우</option>
                <option>김유정</option>
                <option>황영종</option>
              </select>
            </div>
          </div>

          {/* ━━━ Right Page (Content) ━━━ */}
          <div className="cyworld-right">
            <div className="content-header">
              <span className="content-title">진도현님의 미니홈피</span>
              <span className="content-url">http://www.cyworld.com/jindohyeon</span>
            </div>

            <div className="content-body">
              {children}
            </div>
          </div>

          {/* ━━━ Right Tabs ━━━ */}
          <NavigationTabs />

        </div>
      </body>
    </html>
  );
}
