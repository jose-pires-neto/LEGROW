<div align="center">
  <h1 align="center">🧱 LEGROW</h1>
  <p align="center"><strong>Um LEGO de websites modernos. Construa interfaces React/Next.js em minutos.</strong></p>
</div>

O **LEGROW** é um framework e biblioteca de componentes ultra-rápidos focados em produtividade extrema. Com ele, você consegue montar Landing Pages, Portfólios e Sites Institucionais instantaneamente, utilizando blocos (seções) pré-construídos de alto nível visual.

Não é um construtor arrastar e soltar (como o Wix), mas sim uma ferramenta de Desenvolvedor (Developer Experience). Você importa o componente e ele já vem pronto e incrivelmente estiloso.

---

## 🚀 Como usar no seu projeto

O LEGROW não cria um projeto Next.js do zero para você. **Você deve instalá-lo em um projeto React ou Next.js já existente** (como um projeto que já tenha o TailwindCSS rodando).

### 1. Pré-requisitos
O seu projeto precisa estar usando:
- React (18 ou 19)
- TailwindCSS (v4 ou v3)
- Framer Motion
- Lucide React (para os ícones)

### 2. Instalação

Abra o terminal do seu projeto e rode:

```bash
npm install legrow framer-motion lucide-react clsx tailwind-merge
```

### 3. Configuração do Tailwind

Para que o LEGROW consiga aplicar o Design System (cores, sombras, botões premium) e os estilos corretos no seu site, adicione nossa configuração no seu CSS global.

Se você estiver usando o **Tailwind v4** (padrão em novos projetos Next.js), abra seu arquivo `globals.css` ou `app.css` e adicione as variáveis e a fonte (usada como base):

```css
@import "tailwindcss";

@theme {
  /* Cores base do LEGROW */
  --color-legrow-50: #f5f7fa;
  --color-legrow-100: #e4e8f1;
  --color-legrow-900: #29334d;
  --color-legrow-950: #1b2132;
  
  /* Cor Principal (Mude para a cor da sua marca!) */
  --color-accent: #3b82f6; 
  --color-accent-hover: #2563eb;
  
  /* Espaçamentos padronizados para as seções respirarem */
  --spacing-section-sm: 4rem;
  --spacing-section-md: 6rem;
  --spacing-section-xl: 12rem;
}
```

*Nota: Não se esqueça de avisar o Tailwind para compilar os componentes de dentro do pacote adicionando uma regra no Tailwind, ou deixando as classes serem resolvidas nativamente dependendo da sua stack.*

### 4. Chamando os Componentes

No seu código React/Next.js, é só importar a seção e usar o sistema de "variantes". As Variantes mudam completamente o visual e o layout de cada componente para se adaptar à sua necessidade.

```tsx
import { Header, Hero, Features, Pricing, Footer } from "legrow";

export default function Home() {
  return (
    <main>
      {/* Um Header com aspecto de vidro flutuante */}
      <Header variant="glass" />
      
      {/* Uma seção principal com impacto de Startup focada no centro */}
      <Hero 
        variant="startup"
        title="Escalando empresas com LEGROW"
        subtitle="Sua nova forma de programar."
        primaryButton="Começar Grátis"
        secondaryButton="Falar com Vendas"
      />

      {/* Grid de features */}
      <Features variant="grid" />

      {/* Tabela de Preços moderna */}
      <Pricing variant="modern" />

      {/* Footer minimalista ao fim da página */}
      <Footer variant="minimal" />
    </main>
  );
}
```

---

## 🛠️ Arquitetura (Para quem quer Contribuir)

O repositório oficial é construído em formato **Monorepo** (NPM Workspaces). Tudo vive na mesma pasta, mas isolado:

- `packages/core`: Utilitários básicos (ex: `cn` helper).
- `packages/themes`: Design System Tokens.
- `packages/animations`: Variantes do Framer Motion para reuso.
- `packages/sections`: Os códigos brutos dos componentes de tela.
- `packages/legrow`: O empacotador final. Esse é o pacote que vai pro NPM para os usuários.
- `apps/playground`: Aplicação Next.js feita exclusivamente para **testar e servir de Site de Documentação**.

### Como criar novos Componentes e Abrir PRs?
Deseja contribuir com a comunidade e publicar seus próprios blocos e templates no nosso Marketplace? 
👉 **Leia nosso [Guia Completo de Contribuição (CONTRIBUTING.md)](CONTRIBUTING.md)** para o passo a passo de como estruturar, plugar e documentar seu código!

---

## ☁️ Deploy da Documentação

O site de documentação/playground está programado para o Github Pages (`.github/workflows/deploy-pages.yml`). 
Se você hospedar em outro lugar, como a **Vercel** ou **Cloudflare Pages**:
- A Vercel vai identificar nativamente o Next.js e compilar tudo perfeitamente. Nenhuma configuração extra é necessária.
- O script base na nuvem que compila toda as libs em conjunto é sempre: `npm run build` na pasta raiz.
