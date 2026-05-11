import React from "react";
import { cn, BaseSectionProps } from "@legrow/core";
import { motion } from "framer-motion";
import { slideUpVariants, staggerContainer } from "@legrow/animations";
import { Zap, Shield, Smartphone } from "lucide-react";
import type { Feature } from "./FeaturesGrid";

export interface FeaturesCardsProps extends BaseSectionProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  { title: "Rápido", description: "Arquitetura otimizada para máxima velocidade.", icon: <Zap className="w-6 h-6" /> },
  { title: "Seguro", description: "Padrões de segurança modernos implementados.", icon: <Shield className="w-6 h-6" /> },
  { title: "Mobile First", description: "Experiência perfeita em qualquer dispositivo.", icon: <Smartphone className="w-6 h-6" /> },
];

export function FeaturesCards({
  title = "Por que escolher LEGROW?",
  subtitle = "A fundação perfeita para seu próximo projeto.",
  features = defaultFeatures,
  className,
  children
}: FeaturesCardsProps) {
  return (
    <section className={cn("w-full py-section-md px-6 md:px-12 max-w-7xl mx-auto", className)}>
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-heading">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, i) => (
          <motion.div 
            key={i} 
            variants={slideUpVariants} 
            className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
      {children}
    </section>
  );
}
