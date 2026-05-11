import React from "react";
import { cn, BaseSectionProps } from "@legrow/core";
import { motion } from "framer-motion";
import { slideUpVariants, staggerContainer } from "@legrow/animations";

export interface Testimonial {
  content: string;
  author: string;
  role: string;
}

export interface TestimonialsCarouselProps extends BaseSectionProps {
  title?: React.ReactNode;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  { content: "LEGROW mudou a forma como entregamos sites para nossos clientes. A velocidade de desenvolvimento aumentou em 300%.", author: "Maria Silva", role: "CTO, Agência Web" },
  { content: "A melhor biblioteca de componentes que já usei. O design system é impecável e muito fácil de customizar.", author: "João Santos", role: "Tech Lead, Startup X" },
  { content: "Construir landing pages agora leva minutos, não dias. O código gerado é extremamente limpo e performático.", author: "Ana Costa", role: "Frontend Engineer" },
];

export function TestimonialsCarousel({
  title = "O que dizem sobre nós",
  testimonials = defaultTestimonials,
  className,
  children
}: TestimonialsCarouselProps) {
  return (
    <section className={cn("w-full py-section-md px-6 md:px-12 bg-gray-50 dark:bg-gray-900/50", className)}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-16">{title}</h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              variants={slideUpVariants} 
              className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 italic">"{t.content}"</p>
              <div>
                <p className="font-bold">{t.author}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
