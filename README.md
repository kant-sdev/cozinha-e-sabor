# Cozinha & Sabor

Cuisine & Flavor é uma aplicação web moderna desenvolvida com React e Next.js, destinada a entusiastas da culinária que desejam explorar, favoritar e preparar receitas de diversas culturas e tipos de refeições. A plataforma oferece uma experiência intuitiva, com uma landing page atrativa para engajar usuários e um sistema acessível após login ou cadastro. O design prioriza a usabilidade mobile-first, atendendo a usuários que buscam facilitar sua jornada na cozinha. 

## 🚀 Features

- **Exploração de Receitas:** Busca de receitas por tipo de culinária (ex.: italiana, asiática) ou tipo de refeição (ex.: café da manhã, jantar), com informações detalhadas.
- **Favoritação:** Possibilidade de salvar receitas favoritas para acesso posterior.
- **Autenticação Segura:** Sistema de login e registro utilizando JWT e criptografia de senhas com bcrypt, funcionando localmente no navegador.
- **Interface Responsiva:** Design otimizado para dispositivos móveis, utilizando Tailwind CSS e breakpoints adaptativos.
- **Visualização Dinâmica:** Integração de Shadcn UI com D3.js e Recharts para visualizações de dados, se aplicável a futuras expansões.
- **Formulários Eficientes:** Gerenciamento de formulários com React Hook Form para cadastro e login.

## 🛠️ Tech Stack
**Core Frameworks**

- `Next.js 14 (App Router)` - Para renderização híbrida e roteamento
- `TypeScript` - Tipagem estática para maior segurança no código

**UI & Styling**
- `Tailwind CSS` - Framework CSS utility-first com:
  - Plugins para forms, typography e aspect-ratio
  - Design responsivo com breakpoints mobile-first
- `Shadcn UI` - Componentes UI acessíveis e customizáveis

**Backend & Database**
- `Next.js API Routes` - Criação de endpoints backend
- `SQLite3` - Banco de dados relacional embutido

**Security**
- `jsonwebtoken` - Autenticação via JWT
- `bcryptjs` - Hash seguro para senhas

**Quality Assurance**
- `ESLint` - Linter para padrões de código
- `Prettier` - Formatação consistente

## 📋 Prerequisites

- Node.js (v14.x ou mais)
- npm ou yarn

## 🛠️ Installation

1. Clone o repositório:
  ```
    git clone https://github.com/seu-usuario/cozinha-e-sabor.git
  ```
2. Instale dependências:
   ```
    npm install
    # or
    yarn install
   ```
   
3. Start the development server:
   ```
    npm start
    # or
    yarn start
   ```

## 📁 Project Structure

```
cozinha-e-sabor/
├── public/               # Arquivos estáticos (ex.: favicon.ico, globals.css)
├── src/
│   ├── app/              # Componentes de páginas e rotas (App Router)
│     ├── api/            # Rotas de API (ex.: auth/login, auth/register)
│   ├── components/       # Componentes reutilizáveis de UI
│   ├── data/             # Dados estáticos ou mockados
│   ├── lib/              # Configurações (ex.: conexão com banco de dados)
│   └── types/            # Definições de tipos TypeScript
├── .env.local            # Variáveis de ambiente
├── database.db           # Banco de dados SQLite local
├── eslint.config.mjs     # Configuração do ESLint
├── next.config.ts        # Configuração do Next.js
├── tsconfig.json         # Configuração do TypeScript
├── package.json          # Dependências e scripts do projeto
└── README.md             # Documentação do projeto
```

## 🖥️ Frontend

  O frontend foi desenvolvido com foco em mobile-first e princípios de UI/UX, garantindo uma experiência acessível e visualmente atraente. A landing page destaca receitas simples e convida os usuários a explorar o conteúdo, enquanto o sistema pós-login oferece funcionalidades como busca e favoritação.

## 🛠️ Backend Local

  A aplicação implementa um backend leve utilizando as capacidades de servidor do Next.js, rodando localmente no navegador do usuário como um exercício de boas práticas. O banco de dados SQLite (versão 5.1.7) é configurado no arquivo _/lib/db.js_, com uma tabela users para armazenamento de credenciais. As rotas de autenticação, localizadas em _/api/auth_, incluem:

  _/api/auth/login:_ Validação de credenciais com bcrypt (versão 3.0.2) e geração de token JWT (versão 9.0.2).
  _/api/auth/register:_ Registro de novos usuários com hash de senhas e validação de unicidade.

  O backend utiliza variáveis de ambiente (ex.: JWT_SECRET) para segurança e é projetado para operar sem dependências externas.

## 🧩 Routes

  As rotas da aplicação são gerenciadas pelo App Router do Next.js, localizadas na pasta /app. As rotas de API para autenticação estão em /api/auth, enquanto as páginas do sistema (ex.: busca de receitas) são definidas na estrutura de arquivos da pasta /app.

## 👐 Contributions

Se você quer colaborar com o Cuisine & Flavor, siga estes passos:

  1. Dê um fork no projeto

  2. Crie uma branch (git checkout -b feature/nova-funcionalidade)

  3. Faça commit das mudanças (git commit -m 'Adiciona nova funcionalidade')

  4. Dê um push para a branch (git push origin feature/nova-funcionalidade)

  5. Abra um Pull Request