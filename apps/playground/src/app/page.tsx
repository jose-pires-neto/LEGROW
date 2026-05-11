"use client";

import Link from "next/link";
import { HeaderMinimal, FooterMinimal } from "legrow";
import { Blocks, Zap, Palette, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-[#0a0a0a] overflow-hidden flex flex-col">
      {/* Gradients de Fundo */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-accent/10 to-transparent dark:from-accent/5 -z-10" />

      <HeaderMinimal 
        logo={
          <div className="flex items-center gap-2">
            <Blocks className="w-6 h-6 text-accent" />
            <span className="text-xl font-bold font-heading tracking-tight">LEGROW</span>
          </div>
        }
        links={[
          { label: "Catálogo", href: "/components/heroes" },
          { label: "Documentação", href: "https://github.com/jose-pires-neto/LEGROW" },
          { label: "Github", href: "https://github.com/jose-pires-neto/LEGROW" },
        ]}
        action={
          <Link href="/components/heroes" className="px-5 py-2.5 text-sm font-bold text-white bg-accent rounded-full hover:bg-accent-hover transition-colors shadow-sm">
            Ver Componentes
          </Link>
        }
      />

      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
          <Zap className="w-4 h-4" />
          <span>O Marketplace de Componentes Definitivo</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight leading-[1.1] max-w-4xl mx-auto mb-8">
          Construa landing pages <br className="hidden md:block" />
          em <span className="text-accent">minutos</span>, não dias.
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          O LEGROW é um catálogo de componentes React/Next.js de altíssimo nível. 
          Copie, cole e adapte blocos pré-construídos com design premium para o seu projeto instantaneamente.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link 
            href="/components/heroes" 
            className="flex items-center gap-2 px-8 py-4 text-lg font-bold text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-full hover:scale-105 transition-transform shadow-xl"
          >
            Explorar Catálogo
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a 
            href="https://github.com/jose-pires-neto/LEGROW"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 text-lg font-bold text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            Código Fonte
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Blocks className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-heading">Blocos Modulares</h3>
          <p className="text-gray-600 dark:text-gray-400">Não lute com layouts complexos. Cada componente foi pensado como uma seção inteira da sua página.</p>
        </div>
        
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <Palette className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-heading">Design Premium</h3>
          <p className="text-gray-600 dark:text-gray-400">Estilos baseados nas melhores práticas de SaaS e Startups. Espaçamentos, sombras e tipografia perfeitos.</p>
        </div>
        
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-heading">Developer Experience</h3>
          <p className="text-gray-600 dark:text-gray-400">Copie o código limpo, em TypeScript, com Tailwind CSS nativo, sem bibliotecas pesadas e desnecessárias.</p>
        </div>
      </div>

      <FooterMinimal />
    </main>
  );
}
