"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { registry } from "../registry";
import { Blocks, ArrowLeft } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen sticky top-0 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] flex flex-col hidden md:flex">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Voltar para Home
        </Link>
        <div className="flex items-center gap-3 text-xl font-bold font-heading mb-8">
          <Blocks className="w-6 h-6 text-accent" />
          <span>Catálogo</span>
        </div>
        
        <nav className="space-y-1">
          {registry.map((category) => {
            const isActive = pathname === `/components/${category.slug}`;
            return (
              <Link
                key={category.slug}
                href={`/components/${category.slug}`}
                className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-accent/10 text-accent" 
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
              >
                {category.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
