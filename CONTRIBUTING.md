# Contribuindo com o LEGROW

Obrigado por querer contribuir com o **LEGROW**! Nossa biblioteca de componentes foi desenhada para ser extremamente modular. Adicionar um novo template (Hero, Feature, Header, etc.) é muito fácil.

## Como criar o seu próprio Template/Componente

Siga este passo a passo para criar o componente, adicioná-lo ao framework e exibi-lo no nosso site de documentação (Marketplace):

### 1. Crie o componente bruto em `@legrow/sections`

Vá até a pasta `packages/sections/src/[categoria]/` (ex: `heroes`, `features`, `pricing`). 
Crie um arquivo para o seu componente. Por exemplo, `HeroVideoBackground.tsx`.

**Regras do Componente:**
- Ele deve ser um "Client Component", então a build já insere isso por padrão, mas é recomendado ter `"use client";` caso utilize hooks do React ou o `framer-motion`.
- Ele deve importar e estender a interface `BaseSectionProps` do `@legrow/core` para receber suporte padronizado as propriedades `className` e `children`.
- Faça o export da função e da interface de props.
- O HTML do componente deve utilizar TailwindCSS e ter um visual *premium*.

**Exemplo (`HeroVideoBackground.tsx`):**
```tsx
import React from "react";
import { cn, BaseSectionProps } from "@legrow/core";
// import { motion } from "framer-motion"; // Se precisar de animação

export interface HeroVideoBackgroundProps extends BaseSectionProps {
  title?: string;
  videoUrl?: string;
}

export function HeroVideoBackground({ 
  title = "Meu Hero Novo", 
  className,
  children 
}: HeroVideoBackgroundProps) {
  return (
    <section className={cn("w-full py-section-xl px-4 flex flex-col items-center", className)}>
      <h1 className="text-5xl font-bold font-heading">{title}</h1>
      {/* Todo o seu layout incrível usando Tailwind aqui */}
      {children}
    </section>
  );
}
```

### 2. Exporte o componente em `packages/sections/src/index.ts`

Abra `packages/sections/src/index.ts` e adicione o seu export para torná-lo público no pacote interno:
```typescript
// ...outros exports
export * from "./heroes/HeroVideoBackground";
```

### 3. Crie a Variante no pacote principal (`@legrow`)

Agora vamos amarrar o seu componente à estrutura pública do framework (o pacote que os usuários instalam). Vá para `packages/legrow/src/`.
Encontre o arquivo que agrupa a sua categoria (ex: `Hero.tsx`, `Header.tsx`).

Adicione a tipagem da nova variante e a lógica condicional para renderizar o seu componente se a variante for escolhida pelo usuário final:

**Exemplo (`Hero.tsx`):**
```tsx
import { 
  HeroStartup, type HeroStartupProps,
  HeroSaaS, type HeroSaaSProps,
  HeroVideoBackground, type HeroVideoBackgroundProps // 1. Importe o seu componente recém criado
} from "@legrow/sections";

export type HeroProps = 
  | ({ variant: "startup" } & HeroStartupProps)
  | ({ variant: "saas" } & HeroSaaSProps)
  | ({ variant: "video" } & HeroVideoBackgroundProps); // 2. Adicione a sua nova variante de uso

export function Hero(props: HeroProps) {
  // 3. Adicione a condição que renderiza o seu componente
  if (props.variant === "video") {
    const { variant, ...rest } = props;
    return <HeroVideoBackground {...rest} />;
  }

  // ...resto do código (outros ifs)
}
```

### 4. Adicione ao Marketplace (Documentação)

Para que todos vejam o seu componente no nosso site da comunidade (Playground), adicione-o no arquivo de catálogo estático para ele aparecer nos Cards.

Abra `apps/playground/src/registry.tsx`.
Encontre a categoria correta (ex: `slug: "heroes"`) e adicione um novo objeto na array `components`:

```tsx
    components: [
      // ... componentes existentes
      {
        name: "Hero Video Background",
        preview: <Hero variant="video" />,
        code: `import { Hero } from "legrow";\n\nexport default function App() {\n  return <Hero variant="video" title="Seu Título Aqui" />;\n}`
      }
    ]
```

### 5. Teste tudo localmente

Na raiz do projeto, rode o comando de build para certificar de que as tipagens e os pacotes foram compilados sem erros, e depois suba o servidor de desenvolvimento:
```bash
npm run build
npm run dev
```

Acesse no seu navegador a rota de componentes (`http://localhost:3000/LEGROW` ou `http://IP:3000/LEGROW`). O seu novo Card de componente deve aparecer lá na listagem da categoria, com a aba "Preview" e "Código" funcionando!

### 6. Abra um Pull Request (PR)

1. Faça o commit das suas alterações (`git commit -m "feat(heroes): adiciona HeroVideoBackground"`).
2. Dê push para a sua branch forkada ou branch de feature no repositório.
3. Vá no Github e clique em **"New Pull Request"**.
4. Descreva brevemente o que o seu componente faz.
5. Nossa equipe avaliará a qualidade do código (clean code, padrões do framework e design aesthetic) e, se aprovado, seu componente fará parte oficial do **LEGROW** para milhares de desenvolvedores usarem!
