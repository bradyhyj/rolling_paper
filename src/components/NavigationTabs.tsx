'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationTabs() {
  const pathname = usePathname();

  const tabs = [
    { name: "홈", path: "/" },
    { name: "프로필", path: "/profile" },
    { name: "롤링페이퍼", path: "/board" },
    { name: "게시판", path: "/bulletin" },
    { name: "사진첩", path: "/photos" },
  ];

  return (
    <div className="cyworld-tabs">
      {tabs.map((tab) => {
        const isActive = pathname === tab.path || (tab.path === "/board" && pathname === "/write");
        return (
          <Link
            key={tab.path}
            href={tab.path}
            className={`cyworld-tab ${isActive ? "active" : ""}`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}
