import React from "react";
import { cn } from "@legrow/core";
import { motion } from "framer-motion";
import { slideUpVariants, staggerContainer } from "@legrow/animations";

export interface HeroSaaSProps {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryButton?: React.ReactNode;
  image?: React.ReactNode;
  className?: string;
}

export function HeroSaaS({
  badge = "Novidade: Versão 2.0 disponível 🎉",
  title = "A plataforma definitiva para suas ideias",
  subtitle = "Tudo que você precisa para criar, gerenciar e escalar seus projetos digitais em um único lugar.",
  primaryButton = "Começar Gratuitamente",
  image = <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-premium flex items-center justify-center text-gray-400">Dashboard Preview</div>,
  className
}: HeroSaaSProps) {
  return (
    <section className={cn(
      "w-full py-section-xl px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto",
      className
    )}>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-8 text-center lg:text-left"
      >
        {badge && (
          <motion.div variants={slideUpVariants}>
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full">
              {badge}
            </span>
          </motion.div>
        )}
        
        <motion.h1 
          variants={slideUpVariants}
          className="text-4xl md:text-6xl font-bold font-heading tracking-tight leading-[1.1]"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          variants={slideUpVariants}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0"
        >
          {subtitle}
        </motion.p>
        
        <motion.div variants={slideUpVariants}>
          {typeof primaryButton === "string" ? (
            <button className="px-8 py-4 text-base font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:opacity-90 transition-opacity">
              {primaryButton}
            </button>
          ) : primaryButton}
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex-1 w-full"
      >
        {image}
      </motion.div>
    </section>
  );
}
