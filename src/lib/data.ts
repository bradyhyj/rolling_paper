import fs from 'fs';
import path from 'path';

const dataPath = path.resolve(process.cwd(), 'messages.json');
const bulletinPath = path.resolve(process.cwd(), 'bulletin.json');

export interface Message {
  id: number;
  author: string;
  content: string;
  color: string;
  created_at: string;
}

export function getAllMessages(): Message[] {
  try {
    if (!fs.existsSync(dataPath)) {
      return [];
    }
    const data = fs.readFileSync(dataPath, 'utf-8');
    const messages = JSON.parse(data) as Message[];
    return messages.sort((a, b) => b.id - a.id);
  } catch (error) {
    console.error("Error reading messages.json", error);
    return [];
  }
}

export function getMessageCount(): number {
  const messages = getAllMessages();
  return messages.length;
}

export function addMessage(author: string, content: string, color: string) {
  try {
    const messages = getAllMessages();
    const newId = messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1;

    const newMessage: Message = {
      id: newId,
      author,
      content,
      color,
      created_at: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };

    messages.push(newMessage);
    fs.writeFileSync(dataPath, JSON.stringify(messages, null, 2), 'utf-8');
  } catch (error) {
    console.error("Error writing to messages.json", error);
  }
}

export interface BulletinPost {
  id: number;
  author: string;
  title: string;
  date: string;
  content: string;
}

export function getAllBulletinPosts(): BulletinPost[] {
  try {
    if (!fs.existsSync(bulletinPath)) return [];
    const data = fs.readFileSync(bulletinPath, 'utf-8');
    return JSON.parse(data) as BulletinPost[];
  } catch (error) {
    console.error("Error reading bulletin.json", error);
    return [];
  }
}

export function getBulletinCount(): number {
  return getAllBulletinPosts().length;
}
