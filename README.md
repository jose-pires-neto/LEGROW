# LEGROW

O **LEGROW** é um framework/biblioteca focado em produtividade extrema para construção de websites modernos.

> "Um LEGO de websites modernos."

Ele permite montar Landing Pages, Portfólios e Sites Institucionais em minutos, utilizando componentes pré-construídos, modernos, responsivos e acessíveis.

## Arquitetura

O projeto é um Monorepo gerenciado via **npm workspaces**:

- `packages/core`: Utilitários (como `cn` para Tailwind).
- `packages/themes`: Tokens e variáveis de design system.
- `packages/animations`: Variantes do Framer Motion.
- `packages/sections`: Componentes de seções independentes.
- `packages/legrow`: O pacote principal exportado.
- `apps/playground`: Aplicação Next.js de demonstração e teste.

## Instalação (Simulada)

Normalmente, o usuário faria:

```bash
npm install legrow
```

## Como Usar

O uso é extremamente simples. Importe as seções desejadas e chame-as no seu JSX:

```tsx
import { Header, Hero, Features, Pricing, Footer } from "legrow";

export default function App() {
  return (
    <main>
      <Header variant="glass" />
      
      <Hero 
        variant="startup"
        title="Meu Novo Produto"
        subtitle="Incrível e rápido de fazer."
      />

      <Features variant="grid" />
      <Pricing variant="modern" />
      <Footer variant="minimal" />
    </main>
  );
}
```

## Sistema de Variantes

Cada componente base tem suporte a `variant`.

Exemplo:
- `<Hero variant="startup" />`
- `<Hero variant="saas" />`

As variantes alteram profundamente o visual da seção sem perder a API amigável.

## Personalização de Temas (Tailwind)

Se estiver usando TailwindCSS v4, basta importar ou definir as variáveis CSS:

```css
@theme {
  --color-legrow-500: #5570a2;
  --color-accent: #3b82f6; /* Defina a cor principal aqui */
}
```

Para Next.js 15+ (com App Router) o playground já inclui isso nativamente no `globals.css`.

## Scripts

Para iniciar o desenvolvimento do Playground:

```bash
npm run dev
```

(Isto rodará o Next.js dentro de `apps/playground`).

Para rodar os testes e build dos pacotes:

```bash
npm run build
```
