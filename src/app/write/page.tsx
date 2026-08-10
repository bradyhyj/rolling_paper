import { addMessage } from "@/lib/data";
import { redirect } from "next/navigation";

export default function Write() {
  async function submitMessage(formData: FormData) {
    "use server";
    
    const author = formData.get("author") as string;
    const content = formData.get("content") as string;
    const color = formData.get("color") as string;
    
    if (!content.trim()) return;

    addMessage(author.trim() || "익명", content.trim(), color);
    redirect("/board");
  }

  return (
    <div>
      <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '15px' }}>
        <span style={{ color: 'var(--cyworld-blue)', fontWeight: 'bold', fontSize: '14px' }}>방명록 쓰기</span>
      </div>

      <form action={submitMessage} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" 
          name="author" 
          placeholder="이름 (일촌명)" 
          className="input" 
          maxLength={20}
        />
        
        <textarea 
          name="content" 
          placeholder="내용" 
          className="textarea" 
          rows={5}
          required
        ></textarea>
        
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <label style={{ fontSize: '12px' }}>배경색:</label>
          <select name="color" className="input" style={{ width: '100px' }}>
            <option value="#fffde7">연노랑</option>
            <option value="#e1f3fb">연하늘</option>
            <option value="#eafaf1">연초록</option>
            <option value="#fce8ef">연분홍</option>
            <option value="#f0eafb">연보라</option>
            <option value="#ffffff">흰색</option>
          </select>
        </div>

        <button type="submit" className="btn" style={{ marginTop: '10px', alignSelf: 'flex-start' }}>
          확인
        </button>
      </form>
    </div>
  );
}
