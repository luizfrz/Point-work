# Point Work

Sistema web simples para cadastro de colaboradores e registro de ponto eletrônico. Tudo roda no navegador e os dados ficam salvos localmente, sem necessidade de backend.

## Funcionalidades

* Cadastro de colaboradores (nome, cargo e e-mail opcional) com remoção
* Registro de ponto por colaborador: Entrada, Pausa e Saída
* Painel com contadores e gráfico dos pontos batidos no dia
* Lista dos últimos registros, com o nome do colaborador
* Limpeza do histórico de registros
* Layout responsivo, com navegação entre as telas

## Tecnologias

<p>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
  <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" /></a>
  <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://www.chartjs.org/"><img src="https://img.shields.io/badge/Chart.js-4-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Chart.js" /></a>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <a href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" /></a>
</p>

## Requisitos

* Node.js 20.19+ ou 22.12+ (exigência do Vite 8)
* npm ou Yarn

## Instalação

```bash
git clone https://github.com/seu-usuario/point-work.git
cd point-work
npm install
```

## Executando

```bash
npm run dev
```

A aplicação fica disponível em `http://localhost:5173/`.

| Comando           | Descrição                          |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento        |
| `npm run build`   | Gera a versão de produção em `dist`|
| `npm run preview` | Serve a versão de produção         |
| `npm run lint`    | Executa o ESLint                   |

## Armazenamento de dados

Os dados são guardados no `localStorage` do navegador:

| Chave          | Conteúdo                         |
| -------------- | -------------------------------- |
| `pw:employees` | Colaboradores cadastrados        |
| `pw:records`   | Registros de ponto               |

Os dados valem apenas para o navegador e o computador em uso. Limpar os dados do site apaga tudo. Remover um colaborador também apaga os pontos dele.

## Estrutura do projeto

```
src/
├── components/   # Layout (barra de navegação) e Clock
├── hooks/        # useLocalStorage
├── pages/        # Home, Point e Register
├── styles/       # app.css
├── App.jsx       # Rotas e estado global
└── main.jsx
```

## Telas

* **Início (`/`):** contadores, gráfico do dia e últimos registros.
* **Registrar ponto (`/point`):** escolha o colaborador e registre Entrada, Pausa ou Saída.
* **Colaboradores (`/register`):** cadastro e lista de colaboradores.

## Objetivo

Facilitar o controle de jornada de trabalho, permitindo registrar horários e acompanhar os apontamentos de forma simples e organizada.
