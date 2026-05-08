"use client";

import { Header, Hero, Features, Pricing, Testimonials, Footer } from "legrow";
import { ThemeToggle } from "@/components/ThemeToggle"; // We'll create this or ignore for now

export default function Home() {
  return (
    <main className="min-h-screen relative font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-[#0a0a0a] overflow-hidden">
      {/* Gradients de Fundo (Decoração) */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-legrow-50/50 to-transparent dark:from-legrow-950/20 -z-10" />

      <Header variant="glass" />

      <div className="pt-24 pb-20">
        <Hero
          variant="startup"
          title="LEGROW Framework"
          subtitle="A biblioteca definitiva para construir landing pages premium em minutos no React."
          primaryButton={
            <a href="#install" className="px-8 py-4 text-base font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-colors shadow-lg shadow-accent/25">
              Começar Agora
            </a>
          }
          secondaryButton={
            <a href="https://github.com/jose-pires-neto/LEGROW" target="_blank" rel="noreferrer" className="px-8 py-4 text-base font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors">
              Ver no GitHub
            </a>
          }
        />

        <div id="install" className="max-w-4xl mx-auto px-6 mb-20 space-y-8">
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold font-heading mb-4">1. Instalação</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Instale o pacote principal e suas dependências diretamente via NPM.</p>
            <pre className="bg-gray-950 text-gray-300 p-4 rounded-xl overflow-x-auto">
              <code>npm install legrow framer-motion lucide-react</code>
            </pre>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold font-heading mb-4">2. Como Usar</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Importe as seções desejadas e utilize o sistema de variantes para alterar os estilos instantaneamente.</p>
            <pre className="bg-gray-950 text-gray-300 p-4 rounded-xl overflow-x-auto">
              <code>{`import { Header, Hero, Features, Pricing } from "legrow";

export default function App() {
  return (
    <main>
      <Header variant="glass" />
      <Hero variant="startup" title="Meu Site Rápido" />
      <Features variant="grid" />
      <Pricing variant="modern" />
    </main>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <Features variant="grid" />

        <Hero
          variant="saas"
          title="Tudo em um só lugar"
          subtitle="Gerencie seus componentes, temas e layouts de forma visual ou via código."
        />

        <Features variant="cards" />

        <Testimonials variant="carousel" />

        <Pricing variant="modern" />
      </div>

      <Footer variant="minimal" />
    </main>
  );
}
