import React from "react";
import { cn } from "@legrow/core";
import { motion } from "framer-motion";

export interface HeaderMinimalProps {
  logo?: React.ReactNode;
  links?: { label: string; href: string }[];
  action?: React.ReactNode;
  className?: string;
}

export function HeaderMinimal({
  logo = <span className="text-xl font-bold font-heading">LEGROW</span>,
  links = [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" },
  ],
  action = <button className="px-4 py-2 text-sm font-medium text-white bg-accent rounded-md hover:bg-accent-hover transition-colors">Get Started</button>,
  className
}: HeaderMinimalProps) {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn("w-full py-4 px-6 md:px-12 flex items-center justify-between bg-surface-light dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800", className)}
    >
      <div className="flex items-center gap-8">
        {logo}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link, i) => (
            <a key={i} href={link.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {action}
      </div>
    </motion.header>
  );
}
