import React from "react";
import { cn } from "@legrow/core";
import { motion } from "framer-motion";

export interface HeaderGlassProps {
  logo?: React.ReactNode;
  links?: { label: string; href: string }[];
  action?: React.ReactNode;
  className?: string;
}

export function HeaderGlass({
  logo = <span className="text-xl font-bold font-heading">LEGROW</span>,
  links = [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" },
  ],
  action = <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-full hover:opacity-90 transition-opacity">Get Started</button>,
  className
}: HeaderGlassProps) {
  return (
    <div className="w-full fixed top-4 left-0 z-50 px-4 md:px-8 flex justify-center">
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "w-full max-w-5xl py-3 px-6 rounded-full flex items-center justify-between",
          "bg-white/70 dark:bg-black/70 backdrop-blur-glass shadow-glass border border-white/20 dark:border-white/10", 
          className
        )}
      >
        <div className="flex items-center gap-8">
          {logo}
        </div>
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link, i) => (
            <a key={i} href={link.href} className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {action}
        </div>
      </motion.header>
    </div>
  );
}
