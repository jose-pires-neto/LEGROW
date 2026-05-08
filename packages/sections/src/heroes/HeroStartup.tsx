import React from "react";
import { cn } from "@legrow/core";
import { motion } from "framer-motion";
import { slideUpVariants, staggerContainer } from "@legrow/animations";

export interface HeroStartupProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryButton?: React.ReactNode;
  secondaryButton?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function HeroStartup({
  title = "Escalando empresas com sites rápidos",
  subtitle = "Construa interfaces modernas e performáticas em minutos usando componentes reutilizáveis e design system consistente.",
  primaryButton = "Começar Agora",
  secondaryButton = "Ver GitHub",
  align = "center",
  className
}: HeroStartupProps) {
  return (
    <section className={cn(
      "w-full py-section-xl px-6 md:px-12 flex flex-col justify-center",
      align === "center" ? "items-center text-center" : "items-start text-left",
      className
    )}>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className={cn("max-w-4xl space-y-8", align === "center" ? "mx-auto" : "")}
      >
        <motion.h1 
          variants={slideUpVariants}
          className="text-5xl md:text-7xl font-bold font-heading tracking-tight leading-[1.1]"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          variants={slideUpVariants}
          className={cn("text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl", align === "center" ? "mx-auto" : "")}
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          variants={slideUpVariants}
          className={cn("flex flex-col sm:flex-row gap-4 pt-4", align === "center" ? "justify-center" : "justify-start")}
        >
          {typeof primaryButton === "string" ? (
            <button className="px-8 py-4 text-base font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-colors shadow-lg shadow-accent/25">
              {primaryButton}
            </button>
          ) : primaryButton}
          
          {typeof secondaryButton === "string" ? (
            <button className="px-8 py-4 text-base font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors">
              {secondaryButton}
            </button>
          ) : secondaryButton}
        </motion.div>
      </motion.div>
    </section>
  );
}
