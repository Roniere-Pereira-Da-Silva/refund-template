
# 📋 Aplicação de Solicitação de Reembolso



[Gravação de tela de 2025-04-29 21-28-15.webm](https://github.com/user-attachments/assets/55331ada-4d61-4fbc-aca7-125a85115171)


## 🚀 Visão Geral
Aplicação web para gerenciamento de solicitações de reembolso de despesas, desenvolvida com tecnologias front-end básicas.

## 🛠 Tecnologias
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Funcionalidades
- ✅ Cadastro de despesas
- 📂 Categorização automática
- 💰 Cálculo de valores totais
- 📋 Histórico de solicitações
- ⏳ Processamento em até 30 dias

## 🖥 Estrutura de Arquivos
```bash
reembolso-app/
├── index.html          # Interface principal
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
└── assets/             # Pasta para recursos
    └── images/         # Imagens do projeto

🧩 Componentes Principais

// script.js
class ReembolsoApp {
  constructor() {
    this.despesas = [];
    this.total = 0;
  }

  adicionarDespesa(nome, categoria, valor) {
    // Lógica para adicionar nova despesa
  }

  calcularTotal() {
    // Atualiza o valor total
  }
}
🎨 Estilos CSS
/* style.css */
body {
  font-family: 'Segoe UI', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.card-despesa {
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
}
🚧 Pré-requisitos

    Navegador atualizado (Chrome 90+, Firefox 88+)
    Node.js (opcional para desenvolvimento)

📦 Instalação
git clone https://github.com/Roniere-Pereira-Da-Silva/refund-template.git
cd refund-template
# Abra o index.html no navegador
🌟 Roadmap
Dashboard administrativo


