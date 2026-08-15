export default function Photos() {
  const photos = [
    { type: 'image', src: '/photos/KakaoTalk_20260815_162845868.jpg', title: 'with 세현' },
    { type: 'image', src: '/photos/KakaoTalk_20260815_162845868_01.jpg', title: '띨빵쓰' },
    { type: 'image', src: '/photos/KakaoTalk_20260815_162845868_02.jpg', title: '던킨에 온 도현' },
    { type: 'image', src: '/photos/KakaoTalk_20260815_162845868_03.jpg', title: '가챠하는 도현' },
    { type: 'image', src: '/photos/KakaoTalk_20260815_162845868_04.jpg', title: '과방도현' },
    { type: 'image', src: '/photos/KakaoTalk_20260815_162908428.gif', title: '작년띠' }
  ];

  return (
    <div>
      <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: 'var(--cyworld-blue)', fontWeight: 'bold', fontSize: '14px' }}>사진첩</span>
        <span style={{ fontSize: '11px', color: '#555' }}>Total {photos.length}</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {photos.map((media, idx) => (
          <div key={idx} style={{ border: '1px solid #ddd', padding: '10px', background: '#f9f9f9', borderRadius: '5px' }}>
            <div style={{ fontWeight: 'bold', color: 'var(--cyworld-blue)', marginBottom: '10px', fontSize: '12px' }}>
              {media.title}
            </div>
            <div style={{ textAlign: 'center', background: '#fff', border: '1px solid #eee', padding: '10px' }}>
              {media.type === 'image' ? (
                <img src={media.src} alt={media.title} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
              ) : (
                <video controls autoPlay muted loop playsInline style={{ maxWidth: '100%', maxHeight: '400px' }}>
                  <source src={media.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div style={{ marginTop: '10px', fontSize: '11px', color: '#666' }}>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
