![Desktop - 5](https://github.com/rbpolim/senac-dev-health/assets/66570560/a75bc7e9-be8d-42ed-a8da-04fd5ab477c0)

# Projeto Integrador (Parte 2)
Aplicação web responsiva (mobile) para cadastro de pacientes e cálculo de IMC.

## Techs

- TypeScript
- NextJS
- TailwindCSS
- Prisma ORM
- Shadcn/ui 
- React Hook Form
- Sooner Toast
- Zod Validation

## Features

- Padronização de commits (feat/fix/chore/style/docs);
- Poder cadastrar um usuário
- Poder criar o cálculo de IMC
- Poder editar o cálculo de IMC
- Validação de formulários com React Hook Form e Zod;

## Docs:

- [Protótipo](https://www.figma.com/file/QIkKb0uRnEQMdcEXdGWjAE/senac-projeto-integrador-2024?type=design&mode=design&t=iiDIwjh5oaYedaNs-0) 

- [Documentação da APIs de autenticação]() 

## Getting Started

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente conforme o arquivo `.env.example`

Primeiro, clone o repositório:

```bash
git clone
```

Instale as dependências:

```bash
npm install
```

Execute o Docker para rodar o banco de dados:

```bash
docker-compose up
```

Execute as migrations:

```bash 
npx prisma generate
npx prisma db push 
```

Execute o projeto:

```bash
npm run dev
```