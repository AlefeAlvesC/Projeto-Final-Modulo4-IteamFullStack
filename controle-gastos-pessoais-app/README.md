# 💰 Controle de Gastos Pessoais | Grupo 3

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-green)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)

> **"Quanto sobrou do mês?"**
> Uma aplicação web desenvolvida em React para gerenciamento financeiro pessoal. O usuário cadastra gastos por categoria (alimentação, transporte, lazer), define um orçamento mensal e acompanha o saldo em tempo real.

---

## 📋 Índice
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Conceitos Técnicos Aplicados](#-conceitos-técnicos-aplicados)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Equipe](#-equipe)

---

## 📖 Sobre o Projeto

Este repositório contém o código-fonte do Projeto Final do Módulo 4 do treinamento iTeam FullStack. O projeto consiste em um **Controle de Gastos Pessoais**. 

**Diferencial do Projeto:** O saldo em tempo real usa `.reduce()` para somar os gastos, forçando a equipe a trabalhar com agregação de dados dentro do estado React.

---

## ✨ Funcionalidades

- [x] Cadastro de gastos por categoria (alimentação, transporte, lazer).
- [x] Definição de orçamento mensal.
- [x] Acompanhamento do saldo disponível em tempo real.
- [x] Saldo com cor dinâmica (verde se positivo, vermelho se negativo).
- [x] Persistência de dados utilizando localStorage.

---

## 💻 Conceitos Técnicos Aplicados

O desenvolvimento deste projeto consolida os seguintes conceitos:

* **`useState` + `useEffect`:** Lista de gastos e persistência no localStorage.
* **Context API:** Orçamento e gastos acessíveis em qualquer página.
* **React Router:** Roteamento cobrindo as páginas `/resumo`, `/gastos lista` e `/gasto/:id detalhes`.
* **Estado Derivado:** O saldo do orçamento é calculado a partir da soma dos gastos.
* **Inline style dinâmico:** Saldo fica verde se for positivo e vermelho se for negativo.

---

## 📂 Estrutura do Projeto

A arquitetura de pastas segue o padrão definido no escopo do projeto:

    src/
    ├── components/
    │   ├── GastoCard.jsx
    │   ├── FormNovoGasto.jsx
    │   └── ResumoMensal.jsx
    ├── contexts/
    │   └── GastosContext.jsx
    ├── pages/
    │   ├── PaginaInicio.jsx
    │   ├── PaginaGastos.jsx
    │   ├── PaginaDetalhes.jsx
    │   └── PaginaNaoEncontrada.jsx
    ├── App.jsx        (Routes)
    └── main.jsx       (BrowserRouter + GastosProvider)

---

## 🚀 Como Executar

Para rodar esta aplicação na sua máquina local, siga os passos abaixo:

### Pré-requisitos
* [Node.js](https://nodejs.org/)
* [Git](https://git-scm.com/)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/AlefeAlvesC/Projeto-Final-Modulo4-IteamFullStack.git](https://github.com/AlefeAlvesC/Projeto-Final-Modulo4-IteamFullStack.git)
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd Projeto-Final-Modulo4-IteamFullStack
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

---

## 👥 Equipe (Grupo 3)

* **Alefe** (Líder) - [GitHub](https://github.com/AlefeAlvesC)
* **Amanda** - [GitHub](https://github.com/amandaabarbosa98)
* **Paulo** - [GitHub](https://github.com/p-a1-a2-a3)
* **Cauê** - [GitHub](https://github.com/cauesoares721-oss)
* **Luciano** - [GitHub](https://github.com/luciano-cc-dev)