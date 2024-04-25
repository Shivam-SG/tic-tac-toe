import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">Tic Tac Toe</h1>
        <div className="space-y-4 grid text-b">
          <Link href="/practice">Practice Mode</Link>
          <Link href="/multiplayer">Multiplayer</Link>
          <Link href="/online">Online Mode</Link>
        </div>
      </div>
    </div>
  );
}
