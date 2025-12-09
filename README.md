# 📱 Automação de Testes Mobile — WebdriverIO + Appium

Este projeto foi desenvolvido como parte de um desafio técnico para a vaga de **QA Analyst Test**, com foco em testes automatizados em um aplicativo nativo Android, utilizando **WebdriverIO**, **Appium**, **Mocha**, **Chai** e **Allure Reports**.

O objetivo é demonstrar conhecimento em:
- Automação mobile
- Arquitetura de testes
- Boas práticas de Page Objects
- Organização de projeto
- Preparação para CI/CD
- Utilização de relatórios profissionais (Allure)

---

## 🚀 Status do Projeto

**Concluído:**
- Estrutura completa do projeto  
- Instalação e configuração das dependências  
- Criação dos Page Objects  
- Criação dos testes automatizados  
- Configuração das capabilities Android  

**Pendente / Em andamento:**
- Configuração do Allure Reports  
- Execução dos testes no dispositivo/emulador  
- Ajustes finais no Appium + SDK Android  
- Pipeline do GitHub Actions para CI/CD  
- Execução real + validação do fluxo completo  

> Toda a arquitetura está pronta; resta apenas finalizar a parte de execução e integração contínua.

---

## 🧱 Estrutura do Projeto

automacao-mobile/
├── apps/
│ └── android.wdio.native.app.v1.0.8.apk
├── configs/
│ └── capabilities-android.js
├── src/
│ ├── pages/
│ │ ├── base.page.js
│ │ ├── forms.page.js
│ │ ├── home.page.js
│ │ ├── login.page.js
│ │ └── navigation.page.js
│ ├── tests/
│ │ ├── cadastro.test.js
│ │ ├── errors.test.js
│ │ ├── form.test.js
│ │ ├── login.test.js
│ │ ├── navigation.test.js
│ └── helpers/
│ └── allure-steps.js
├── wdio.conf.js
├── wdio.android.conf.js
├── package.json
└── README.md

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Função |
|-----------|--------|
| **JavaScript** | Linguagem base |
| **WebdriverIO** | Framework de automação |
| **Appium** | Automação mobile nativa |
| **Mocha** | Test runner |
| **Chai** | Asserts |
| **Allure Reports** | Relatórios avançados |
| **GitHub Actions (Planejado)** | Pipeline CI/CD |
| **BrowserStack (Opcional)** | Execução em nuvem |

---

## 📱 Aplicativo Utilizado

O projeto utiliza o **Native Demo App**, disponível no repositório oficial do WebdriverIO:

> APK utilizado: **android.wdio.native.app.v1.0.8.apk**

Fonte:  
https://github.com/webdriverio/native-demo-app/releases

---

## 📚 Objetivo do Desafio

- Criar uma automação mobile funcional  
- Demonstrar domínio de boas práticas  
- Organizar um projeto escalável  
- Implementar pages, steps e testes reutilizáveis  
- Publicar relatórios de execução (Allure)  
- Preparar estrutura para CI/CD  

---

## 🧩 Funcionalidades Automatizadas

O conjunto de testes cobre:

- Login (válido e inválido)  
- Cadastro  
- Navegação entre telas  
- Preenchimento de formulário (simples e completo)  
- Componentes UI (switch, dropdown, modal)  
- Alertas nativos  
- Validações de erro  
- Cenário completo E2E  

---

🤝 Sobre este projeto

Projeto criado com foco em aprendizado, evolução técnica e demonstração de capacidade em:

Estruturar automação mobile profissional

Criar código limpo e escalável

Entregar documentação clara

Seguir boas práticas de QA

Mesmo com dificuldades na execução do emulador e do Appium, toda a arquitetura e estrutura do projeto já está pronta para rodar.

