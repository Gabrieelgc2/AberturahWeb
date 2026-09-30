# ABERTURAh! Website

Website institucional da ABERTURAh!, empresa brasileira que atua com chapas ACM e  projetos arquitetônicos. O site apresenta a empresa, seus produtos, projetos realizados e canais de contato.

Este repositório contém a aplicação web desenvolvida com React e TypeScript. A interface está disponível em português e inglês.

## Conteúdo

- [Português](#português)
- [English](#english)

## Português

### Funcionalidades

- Página inicial com apresentação da empresa, produtos, diferenciais, depoimentos, processo de trabalho, perguntas frequentes e chamadas para contato.
- Catálogo de acabamentos e chapas ACM, com opções para explorar os produtos.
- Galeria de obras com filtros por categoria e visualização ampliada das imagens.
- Páginas institucionais sobre a empresa e sua história, missão e diferenciais.
- Página de contato com informações de atendimento e acesso ao WhatsApp.
- Interface traduzida para português e inglês.
- Layout responsivo para diferentes tamanhos de tela.

### Tecnologias

- React 19 e TypeScript
- Vite
- TanStack Router e TanStack Start
- Tailwind CSS 4
- i18next e react-i18next
- Framer Motion e Anime.js
- Componentes de interface baseados em Radix UI

### Requisitos

- Node.js e npm instalados.

### Como executar localmente

1. Clone o repositório e abra a pasta do projeto:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd Aberturah-website
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço local exibido pelo Vite no terminal.

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento. |
| `npm run build` | Gera a versão de produção na pasta `dist/`. |
| `npm run build:dev` | Gera o build usando o modo `development`. |
| `npm run preview` | Pré-visualiza localmente o build gerado. |
| `npm run lint` | Executa o ESLint no projeto. |
| `npm run format` | Formata os arquivos com Prettier. |

### Estrutura principal

```text
src/
├── components/   # Componentes e seções da interface
├── config/       # Configurações do site, incluindo informações de contato
├── i18n/         # Configuração e traduções em português e inglês
├── routes/       # Páginas e rotas da aplicação
├── assets/       # Imagens e vídeos usados pelo site
├── hooks/        # Hooks React reutilizáveis
├── lib/          # Funções utilitárias
├── main.tsx      # Entrada da aplicação
└── router.tsx    # Configuração do roteador
public/           # Arquivos estáticos, como fontes
```

As rotas principais são `/`, `/acabamentos`, `/obras`, `/sobre` e `/contato`. Os arquivos de tradução ficam em `src/i18n/locales/`.

### Desenvolvimento

- Ao adicionar textos à interface, mantenha as traduções correspondentes em português e inglês.
- Imagens, fontes e demais recursos devem seguir a organização existente em `src/assets/` e `public/`.
- Antes de enviar alterações, execute `npm run lint` e `npm run build`.

## English

### Overview

The ABERTURAh! website is the company’s institutional website. ABERTURAh! is a Brazilian company working with ACM panels and fabrication for architectural projects. The website introduces the company, showcases its products and completed projects, and provides contact information.

This repository contains the web application built with React and TypeScript. The interface is available in Portuguese and English.

### Features

- Home page introducing the company, products, differentiators, testimonials, work process, frequently asked questions, and contact calls to action.
- Catalog of ACM panels and finishes, with options to explore the products.
- Project gallery with category filters and an enlarged image viewer.
- Company pages covering its background, mission, and differentiators.
- Contact page with service information and WhatsApp access.
- Portuguese and English translations.
- Responsive layout for different screen sizes.

### Technology stack

- React 19 and TypeScript
- Vite
- TanStack Router and TanStack Start
- Tailwind CSS 4
- i18next and react-i18next
- Framer Motion and Anime.js
- Radix UI-based interface components

### Requirements

- Node.js and npm installed.

### Run locally

1. Clone the repository and open the project folder:

   ```bash
   git clone <REPOSITORY_URL>
   cd Aberturah-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local address printed by Vite in the terminal.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server. |
| `npm run build` | Creates the production build in the `dist/` directory. |
| `npm run build:dev` | Creates a build using `development` mode. |
| `npm run preview` | Locally previews the generated build. |
| `npm run lint` | Runs ESLint across the project. |
| `npm run format` | Formats files with Prettier. |

### Main structure

```text
src/
├── components/   # UI components and page sections
├── config/       # Site configuration, including contact information
├── i18n/         # Internationalization setup and Portuguese/English translations
├── routes/       # Application pages and routes
├── assets/       # Images and videos used by the website
├── hooks/        # Reusable React hooks
├── lib/          # Utility functions
├── main.tsx      # Application entry point
└── router.tsx    # Router configuration
public/           # Static files, such as fonts
```

The main routes are `/`, `/acabamentos`, `/obras`, `/sobre`, and `/contato`. Translation files are located in `src/i18n/locales/`.

### Development notes

- When adding interface text, keep the Portuguese and English translations in sync.
- Place images, fonts, and other resources in the existing `src/assets/` and `public/` structure.
- Before submitting changes, run `npm run lint` and `npm run build`.
