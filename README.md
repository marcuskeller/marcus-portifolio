# Marcus Dev — Portfólio Pessoal

Portfólio pessoal de **Marcus Dev**, Full Stack Developer, construído com Angular 22 e Tailwind CSS 4. Apresenta projetos, experiência profissional, formação acadêmica e formas de contato.

🔗 GitHub: [github.com/marcuskeller](https://github.com/marcuskeller) · LinkedIn: [linkedin.com/in/keller-marcus](https://linkedin.com/in/keller-marcus)

## Stack

- **Angular 22** — standalone components, signals (`signal`, `computed`, `inject`)
- **Tailwind CSS 4** — CSS-first config, sem `tailwind.config.js`
- **TypeScript**
- **lucide-angular** — ícones
- **Vitest** — testes unitários
- **ESLint + Prettier** — lint e formatação

## Funcionalidades

- Tema claro/escuro com persistência em `localStorage`
- Tradução PT/EN completa (conteúdo e `<html lang>` dinâmico)
- Seções: Hero, Sobre, Skills, Projetos, Experiência, Formação, Contato
- Preview de imagens dos projetos com lightbox (clique para expandir)
- Scroll-spy na navbar (destaca a seção atual)
- Animações: contagem numérica no Hero, tilt 3D nos cards de projeto, glow no cursor, reveal ao rolar a página, título de seção com barra animada
- Navegação por âncora sem alterar a URL (`scrollIntoView` interceptado por diretiva)
- Imagens otimizadas com `NgOptimizedImage` (lazy-loading e `priority` na imagem do Hero)
- SEO: meta tags, Open Graph, Twitter Card, JSON-LD (`Person`), `robots.txt`
- Responsivo (mobile-first)

## Estrutura

Cada seção vive em sua própria pasta feature (`src/app/components/<secao>/`), com `.ts`, `.html` e `.data.ts` (conteúdo + tipos) colocados juntos. `src/app/shared/` reúne apenas código usado por 2+ features: serviços (tema, idioma, seção ativa, lightbox), diretivas e componentes genéricos (ícones de marca, menu de configurações).

## Rodando o projeto

Instalar dependências:

```bash
npm install
```

Servidor de desenvolvimento (`http://localhost:4200`):

```bash
npm start
```

Build de produção (saída em `dist/`):

```bash
npm run build
```

Testes unitários (Vitest):

```bash
npm run test
```

Lint:

```bash
npm run lint
```
