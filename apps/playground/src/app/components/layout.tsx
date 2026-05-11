import React from "react";
import { Sidebar } from "../../components/Sidebar";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50/30 dark:bg-[#0a0a0a]">
      <Sidebar />
      <main className="flex-1 w-full max-w-full min-w-0 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
