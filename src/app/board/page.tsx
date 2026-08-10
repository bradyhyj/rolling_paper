import { getAllMessages } from "@/lib/data";

export default function Board() {
  const messages = getAllMessages();

  return (
    <div>
      <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'var(--cyworld-blue)', fontWeight: 'bold', fontSize: '14px' }}>방명록 (롤링페이퍼)</span>
        <span style={{ fontSize: '11px', color: '#555' }}>Total {messages.length}</span>
      </div>

      {messages.length === 0 ? (
        <div style={{ fontSize: '12px', color: '#777', textAlign: 'center', padding: '50px' }}>
          작성된 방명록이 없습니다.
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {messages.map((msg) => {
            const content = msg.content;
            const display = content.length > 100 ? content.slice(0, 100) + "..." : content;
            const bg = msg.color || "#fffde7";

            return (
              <div key={msg.id} style={{
                background: bg, 
                border: '1px solid #ddd', 
                padding: '10px', 
                fontFamily: "'Nanum Gothic', sans-serif", 
                fontSize: '11px', 
                color: '#333', 
                boxShadow: '1px 1px 3px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontWeight: 'bold', color: 'var(--cyworld-blue)', marginBottom: '5px' }}>
                  NO.{msg.id} {msg.author}
                </div>
                <div style={{ lineHeight: '1.5', whiteSpace: 'pre-wrap', wordBreak: 'break-word', minHeight: '50px' }}>
                  {display}
                </div>
                <div style={{ textAlign: 'right', color: '#999', fontSize: '9px', marginTop: '5px' }}>
                  {msg.created_at}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
