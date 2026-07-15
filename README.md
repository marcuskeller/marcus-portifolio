# Marcus Dev — Portfólio Pessoal

Portfólio pessoal de **Marcus Dev**, Full Stack Developer, construído com Angular 22 e Tailwind CSS 4. Apresenta projetos, experiência profissional, formação acadêmica e formas de contato.

🔗 GitHub: [github.com/marcuskeller](https://github.com/marcuskeller) · LinkedIn: [linkedin.com/in/keller-marcus](https://linkedin.com/in/keller-marcus)

## Stack

- **Angular 22** — standalone components, signals (`signal`, `computed`, `input`, `inject`)
- **Angular i18n oficial** (`@angular/localize`) — tradução PT/EN em tempo de build
- **Tailwind CSS 4** — CSS-first config, sem `tailwind.config.js`
- **TypeScript**
- **lucide-angular** — ícones
- **Vitest** — testes unitários
- **ESLint + Prettier** — lint e formatação

## Funcionalidades

- Tema claro/escuro com persistência em `localStorage`
- Tradução PT/EN completa via Angular i18n oficial — cada idioma vira uma build separada (`dist/.../pt/`, `dist/.../en/`); o menu de configurações troca de idioma navegando pra build correta
- Seções: Hero, Sobre, Skills, Projetos, Experiência, Formação, Contato
- Preview de imagens dos projetos com lightbox (clique para expandir)
- Scroll-spy na navbar (destaca a seção atual, inclusive no fim da página)
- Animações: contagem numérica no Hero, tilt 3D nos cards de projeto, glow no cursor (claro e escuro), reveal ao rolar a página, título de seção com barra animada
- Navegação por âncora sem alterar a URL (`scrollIntoView` interceptado por diretiva)
- Imagens otimizadas com `NgOptimizedImage` (lazy-loading e `priority` na imagem do Hero)
- SEO: meta tags, Open Graph, Twitter Card, JSON-LD (`Person`), `robots.txt`
- Responsivo (mobile-first)

## Estrutura

Cada seção vive em sua própria pasta feature (`src/app/components/<secao>/`), com `.ts`, `.html` e, quando necessário, `.data.ts`. `src/app/shared/` reúne apenas código usado por 2+ features: serviços (tema, seção ativa, lightbox), diretivas e componentes genéricos (ícones de marca, menu de configurações).

Texto traduzível não fica espalhado em dicionários — vive direto no ponto de uso:

- Texto fixo (títulos, botões, labels) → atributo `i18n="@@id"` no `.html`
- Texto de listas/dados dinâmicos (projetos, experiência, formação) → `` $localize`:@@id:texto` `` dentro do `.data.ts`/`.ts`
- `.data.ts` guarda só o que **não muda por idioma** (imagens, URLs, tech stack, chaves) — nunca texto solto

## Internacionalização (i18n)

- Idioma fonte: `pt`. Idioma traduzido: `en` (arquivo `src/locale/messages.en.xlf`).
- Depois de mudar algum texto marcado com `i18n`/`$localize`, reextrai as mensagens:
  ```bash
  npx ng extract-i18n --output-path src/locale
  ```
  Isso atualiza `src/locale/messages.xlf` — qualquer texto novo aparece lá sem tradução; adiciona a tradução manualmente em `src/locale/messages.en.xlf`, no mesmo `id`.
- `npm run build` gera as duas builds de uma vez (`dist/marcus-portifolio/browser/pt/` e `/en/`) — precisam ser publicadas juntas no mesmo host pra o seletor de idioma funcionar (ele navega de `/pt/` pra `/en/` e vice-versa).
- **`ng serve` só serve 1 locale por vez** — o seletor de idioma clica mas não muda de conteúdo de verdade nesse modo (não tem `/en/` disponível ali). Pra testar a troca de idioma de verdade, precisa das duas builds servidas juntas:
  ```bash
  npm run build
  npm run serve:dist
  ```
  Abre `http://localhost:8080/pt/` (ou `/en/`) — aí sim o seletor troca de idioma normalmente, recarregando a página.

### Deploy na Vercel

`vercel.json` já configura tudo que a build com 2 locales precisa:

- `outputDirectory: dist/marcus-portifolio/browser` — onde `npm run build` deixa as pastas `pt/` e `en/`.
- Acessar a raiz (`/`) redireciona pra `/pt/` (idioma fonte) — sem isso a raiz não bate com nenhuma das 2 pastas geradas.
- `/pt` e `/en` (sem barra no final) servem o `index.html` certo.

Não precisa de mais nada além de importar o repo na Vercel — ela já lê o `vercel.json` sozinha.

## Rodando o projeto

Instalar dependências:

```bash
npm install
```

Servidor de desenvolvimento, locale `pt` (`http://localhost:4200`):

```bash
npm start
```

Build de produção — gera `pt` e `en` juntos (saída em `dist/`):

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
