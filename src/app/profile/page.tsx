export default function Profile() {
  return (
    <div>
      <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '15px' }}>
        <span style={{ color: 'var(--cyworld-blue)', fontWeight: 'bold', fontSize: '14px' }}>프로필</span>
      </div>
      <div style={{ padding: '20px', fontSize: '12px', lineHeight: '1.8' }}>
        { }
        <p><strong>이름:</strong> 진도현</p>
        <p><strong>소속:</strong> 경북대학교 컴퓨터학부 25학번</p>
        <p><strong>입대일:</strong> 2026년 8월 24일</p>
        <p><strong>전역예정일:</strong> 2028년 3월 31일</p>
        <br />
        <p>건강하게 잘 다녀오겠습니다! 휴가 나오면 연락할게요.</p>
      </div>
    </div>
  );
}
