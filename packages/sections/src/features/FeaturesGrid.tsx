import React from "react";
import { cn } from "@legrow/core";
import { motion } from "framer-motion";
import { slideUpVariants, staggerContainer } from "@legrow/animations";
import { CheckCircle2 } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface FeaturesGridProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  features?: Feature[];
  className?: string;
}

const defaultFeatures: Feature[] = [
  { title: "Performance extrema", description: "Otimizado para carregar na velocidade da luz." },
  { title: "Design System", description: "Cores, tipografia e espaçamento consistentes." },
  { title: "Totalmente Responsivo", description: "Adapta-se a qualquer tela automaticamente." },
  { title: "Acessível", description: "Construído seguindo as melhores práticas de a11y." },
  { title: "Customizável", description: "Ajuste tudo através de props simples e intuitivas." },
  { title: "Developer Experience", description: "Tipagem forte com TypeScript e autocompletar." },
];

export function FeaturesGrid({
  title = "Tudo que você precisa",
  subtitle = "Recursos construídos para escalar seu produto.",
  features = defaultFeatures,
  className
}: FeaturesGridProps) {
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, i) => (
          <motion.div key={i} variants={slideUpVariants} className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              {feature.icon || <CheckCircle2 className="w-6 h-6 text-accent" />}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
