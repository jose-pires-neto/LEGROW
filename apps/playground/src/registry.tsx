import React from "react";
import {
  Header,
  Hero,
  Features,
  Pricing,
  Testimonials,
  Footer
} from "legrow";

export interface ComponentItem {
  name: string;
  preview: React.ReactNode;
  code: string;
}

export interface CategoryItem {
  slug: string;
  name: string;
  description: string;
  components: ComponentItem[];
}

export const registry: CategoryItem[] = [
  {
    slug: "heroes",
    name: "Heroes",
    description: "Seções principais e de impacto inicial para o topo da sua página.",
    components: [
      {
        name: "Hero Startup",
        preview: <Hero variant="startup" />,
        code: `import { Hero } from "legrow";\n\nexport default function App() {\n  return (\n    <Hero \n      variant="startup"\n      title="Escalando empresas com sites rápidos"\n      subtitle="Construa interfaces modernas em minutos."\n      primaryButton="Começar Agora"\n      secondaryButton="Ver GitHub"\n    />\n  );\n}`
      },
      {
        name: "Hero SaaS",
        preview: <Hero variant="saas" />,
        code: `import { Hero } from "legrow";\n\nexport default function App() {\n  return (\n    <Hero \n      variant="saas"\n      badge="Novidade: Versão 2.0"\n      title="A plataforma definitiva"\n      subtitle="Tudo que você precisa em um único lugar."\n      primaryButton="Começar Gratuitamente"\n    />\n  );\n}`
      }
    ]
  },
  {
    slug: "headers",
    name: "Headers",
    description: "Cabeçalhos de navegação para o seu site.",
    components: [
      {
        name: "Header Glass",
        preview: (
          <div className="relative h-[200px] bg-gradient-to-br from-legrow-50 to-legrow-100 dark:from-legrow-900 dark:to-legrow-950 rounded-xl overflow-hidden">
            <Header variant="glass" className="absolute" />
          </div>
        ),
        code: `import { Header } from "legrow";\n\nexport default function App() {\n  return <Header variant="glass" />;\n}`
      },
      {
        name: "Header Minimal",
        preview: <Header variant="minimal" />,
        code: `import { Header } from "legrow";\n\nexport default function App() {\n  return <Header variant="minimal" />;\n}`
      }
    ]
  },
  {
    slug: "features",
    name: "Features",
    description: "Destaque as funcionalidades do seu produto.",
    components: [
      {
        name: "Features Grid",
        preview: <Features variant="grid" />,
        code: `import { Features } from "legrow";\n\nexport default function App() {\n  return <Features variant="grid" />;\n}`
      },
      {
        name: "Features Cards",
        preview: <Features variant="cards" />,
        code: `import { Features } from "legrow";\n\nexport default function App() {\n  return <Features variant="cards" />;\n}`
      }
    ]
  },
  {
    slug: "pricing",
    name: "Pricing",
    description: "Tabelas de preços para conversão.",
    components: [
      {
        name: "Pricing Modern",
        preview: <Pricing variant="modern" />,
        code: `import { Pricing } from "legrow";\n\nexport default function App() {\n  return <Pricing variant="modern" />;\n}`
      }
    ]
  },
  {
    slug: "testimonials",
    name: "Testimonials",
    description: "Prova social e depoimentos de clientes.",
    components: [
      {
        name: "Testimonials Carousel",
        preview: <Testimonials variant="carousel" />,
        code: `import { Testimonials } from "legrow";\n\nexport default function App() {\n  return <Testimonials variant="carousel" />;\n}`
      }
    ]
  },
  {
    slug: "footers",
    name: "Footers",
    description: "Rodapés para o fim da sua página.",
    components: [
      {
        name: "Footer Minimal",
        preview: <Footer variant="minimal" />,
        code: `import { Footer } from "legrow";\n\nexport default function App() {\n  return <Footer variant="minimal" />;\n}`
      }
    ]
  }
];
