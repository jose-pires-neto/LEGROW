import React from "react";
import { cn } from "@legrow/core";
import { motion } from "framer-motion";
import { slideUpVariants, staggerContainer } from "@legrow/animations";
import { Check } from "lucide-react";

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}

export interface PricingModernProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  plans?: PricingPlan[];
  className?: string;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Grátis",
    description: "Para projetos pessoais e testes.",
    features: ["Componentes básicos", "Suporte da comunidade", "Updates limitados"],
    buttonText: "Começar Grátis"
  },
  {
    name: "Pro",
    price: "$49",
    description: "Para profissionais e startups.",
    features: ["Todos os componentes", "Suporte prioritário", "Acesso ao código fonte", "Uso comercial livre"],
    isPopular: true,
    buttonText: "Assinar Pro"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Para grandes equipes.",
    features: ["Tudo do Pro", "Componentes customizados", "Treinamento dedicado", "SLA garantido"],
    buttonText: "Falar com Vendas"
  }
];

export function PricingModern({
  title = "Preços simples e transparentes",
  subtitle = "Escolha o plano perfeito para sua necessidade.",
  plans = defaultPlans,
  className
}: PricingModernProps) {
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
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {plans.map((plan, i) => (
          <motion.div 
            key={i} 
            variants={slideUpVariants} 
            className={cn(
              "relative p-8 rounded-3xl border transition-all duration-300 flex flex-col",
              plan.isPopular 
                ? "bg-gray-900 text-white border-gray-900 shadow-xl dark:bg-gray-800 dark:border-gray-700" 
                : "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Mais Popular
                </span>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className={cn("text-sm", plan.isPopular ? "text-gray-300" : "text-gray-500 dark:text-gray-400")}>
                {plan.description}
              </p>
            </div>
            
            <div className="mb-8">
              <span className="text-4xl font-black font-heading">{plan.price}</span>
              {plan.price !== "Custom" && <span className={cn("text-sm ml-2", plan.isPopular ? "text-gray-300" : "text-gray-500 dark:text-gray-400")}>/mês</span>}
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-3">
                  <Check className={cn("w-5 h-5", plan.isPopular ? "text-accent" : "text-gray-900 dark:text-white")} />
                  <span className={cn("text-sm font-medium", plan.isPopular ? "text-gray-200" : "text-gray-700 dark:text-gray-300")}>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={cn(
              "w-full py-4 rounded-xl text-sm font-bold transition-colors",
              plan.isPopular 
                ? "bg-accent text-white hover:bg-accent-hover" 
                : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            )}>
              {plan.buttonText || "Assinar"}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
