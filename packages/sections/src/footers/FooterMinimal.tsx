import React from "react";
import { cn } from "@legrow/core";

export interface FooterMinimalProps {
  logo?: React.ReactNode;
  copyright?: string;
  links?: { label: string; href: string }[];
  className?: string;
}

export function FooterMinimal({
  logo = <span className="text-xl font-bold font-heading">LEGROW</span>,
  copyright = "© 2026 LEGROW Inc. Todos os direitos reservados.",
  links = [
    { label: "Privacidade", href: "#" },
    { label: "Termos", href: "#" },
    { label: "Contato", href: "#" },
  ],
  className
}: FooterMinimalProps) {
  return (
    <footer className={cn("w-full py-12 px-6 md:px-12 border-t border-gray-100 dark:border-gray-800", className)}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>{logo}</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{copyright}</p>
        <nav className="flex items-center gap-6">
          {links.map((link, i) => (
            <a key={i} href={link.href} className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
