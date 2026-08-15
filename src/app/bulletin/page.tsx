import { getAllBulletinPosts } from "@/lib/data";

export default function Bulletin() {
  const posts = getAllBulletinPosts();

  return (
    <div>
      <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: 'var(--cyworld-blue)', fontWeight: 'bold', fontSize: '14px' }}>게시판</span>
        <span style={{ fontSize: '11px', color: '#555' }}>Total {posts.length}</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {posts.map(post => (
          <div key={post.id} style={{ border: '1px solid #eee', borderRadius: '5px', overflow: 'hidden' }}>
            <div style={{ background: '#f5f5f5', padding: '8px 12px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--cyworld-blue)', fontSize: '12px' }}>{post.title}</span>
              <span style={{ fontSize: '10px', color: '#888' }}>{post.date}</span>
            </div>
            <div style={{ padding: '15px 12px', fontSize: '12px', lineHeight: '1.6', background: '#fff' }}>
              {post.content}
            </div>
            <div style={{ background: '#fafafa', padding: '5px 12px', borderTop: '1px dashed #eee', fontSize: '11px', color: '#555' }}>
              작성자: <strong>{post.author}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
