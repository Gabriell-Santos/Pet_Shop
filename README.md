# 🐾 Pet Shop Online - Projeto Faculdade

![Pet Shop - Demonstração](https://raw.githubusercontent.com/Gabriell-Santos/Pet_Shop/master/Captura%20de%20tela%202026-06-01%20124728.png)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como parte de um trabalho semestral da faculdade de uns amigos... e eu acabei entrando na causa! 😄

A proposta era criar um **pet shop online** onde o usuário pudesse visualizar brinquedos e rações com informações vindas de uma API local. Os requisitos incluíam:

- ✅ Design responsivo (mobile e desktop)
- ✅ Listagem de produtos
- ✅ Carrinho de compras
- ✅ Página de detalhes do produto

**Observação:** A parte de finalização da compra ficou com meus amigos, que quiseram desenvolver sozinhos para treinar o front-end. Todo o restante da infraestrutura foi construído por mim.

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática e maior segurança no código
- **Tailwind CSS** - Estilização rápida e responsiva
- **React Router DOM** - Navegação entre páginas
- **React Icons** - Ícones para uma interface mais bonita
- **Context API** - Gerenciamento de estado global (carrinho)
- **json-server** - Simulação de API REST com arquivo db.json

## 📦 Funcionalidades

- Consumo de API local (json-server) para listar produtos
- Layout responsivo para diferentes tamanhos de tela
- Adicionar/remover itens do carrinho
- Visualizar detalhes de cada produto
- Interface limpa e intuitiva

## 🖥️ Como executar o projeto

```bash
# Clone este repositório
git clone https://github.com/seu-usuario/pet-shop-project.git

# Acesse a pasta do projeto
cd pet-shop-project

# Instale as dependências
npm install

# Execute a API fake com json-server (em um terminal)
npx json-server --watch db.json

# Em outro terminal, execute a aplicação React
npm run dev
