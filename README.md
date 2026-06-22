# Imuni - Caderneta de Vacinação Inteligente (Região de Campinas) 🚀

O **Imuni** é um aplicativo mobile e web focado na gestão e acompanhamento da carteira de vacinação infantil, projetado especificamente para atender à realidade vacinal da região de Campinas/SP. O app transforma a caderneta de papel tradicional em um ecossistema digital inteligente em tempo real, notificando os pais sobre prazos, campanhas locais vigentes e facilitando o acesso à rede municipal de saúde.

---

## 🌐 Acesse o Aplicativo

O projeto está publicado e pronto para uso através do Firebase Hosting. Você pode acessar e testar todas as funcionalidades diretamente pelo navegador do seu celular ou computador através do link abaixo:

👉 **[Acessar o Imuni App (imuni-2ded8.web.app)](https://imuni-2ded8.web.app)**

---

## 📱 Funcionalidades Principais

* **Gestão de Múltiplos Perfis (Crianças):** Cadastro simplificado de dependentes na conta do usuário.
* **Carteira de Vacinação Automática:** Geração instantânea da grade vacinal completa com base no Calendário Nacional de Vacinação ao cadastrar uma criança.
* **Sincronização em Tempo Real (Real-time):** Listagem e atualização instantânea de doses aplicadas, pendentes ou atrasadas através de subcoleções do Firestore.
* **Cálculo Dinâmico de Status (On-the-fly):** O front-end processa dinamicamente quais vacinas estão atrasadas com base na data prevista e na data atual do sistema, otimizando custos de leitura no banco de dados.
* **Módulo de Campanhas Regionais (Foco Campinas):** Exibição de um carrossel horizontal de campanhas de vacinação ativas na cidade (ex: Influenza, Multivacinação) com locais específicos (UBSs/Shoppings).
* **Localizador de Unidades de Saúde (Intent Nativa):** Integração com o Google Maps para guiar o usuário via GPS até o Centro de Saúde (CS/UBS) mais próximo com apenas um clique.

---

## 🛠️ Stack Tecnológica & Arquitetura

O projeto foi desenvolvido utilizando as práticas mais modernas de engenharia de software para web e mobile:

* **Framework Mobile:** [Ionic Framework v7+](https://ionicframework.com/) com componentes nativos otimizados para iOS e Android.
* **Framework Web/Lógica:** [Angular v17+](https://angular.dev/) utilizando arquitetura de **Componentes Standalone**.
* **Gerenciamento de Estado:** [Angular Signals](https://angular.dev/guide/signals) para reatividade granular e performance ultra-otimizada.
* **Backend as a Service (BaaS):** [Firebase](https://firebase.google.com/)
    * **Firestore Database:** Banco de dados NoSQL estruturado de forma hierárquica (`criancas/{idCrianca}/vacinas/{idVacina}`) aproveitando o poder do **Firebase SDK Modular (v10+)**.
    * **Firebase Hosting:** Distribuição global rápida e segura via CDN com suporte a HTTPS nativo e reescrita de rotas para Single Page Application (SPA).

---

## 🎨 Paleta de Cores & Design System

O app adota uma identidade visual acolhedora, orgânica e altamente escaneável pelos pais, utilizando cores estratégicas para a leitura de status:

| Cor | Hex | 
| :--- | :--- | 
| **Café Escuro** | `#473C33` | 
| **Verde Oliva** | `#ABC270` |
| **Laranja Suave** | `#FDA769` |
| **Mostarda Pastel** | `#FEC868` |

---


## Desenvolvido com ❤️ focado na saúde infantil da Região Metropolitana de Campinas.

