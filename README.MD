# 💼 Portfólio Simples utilizando com JSON

Este projeto é um **portfólio simples** desenvolvido para apresentar minhas informações e projetos pessoais, consumindo dados de um **arquivo JSON** para preencher dinamicamente as seções da página.  

---

## 📌 Funcionalidades

- 👤 Exibição de informações pessoais (nome, bio, contatos) a partir de um arquivo `data.json`  
- 📂 Listagem de projetos com título, descrição e links  
- 🔗 Links para redes sociais e portfólio  
- 🎨 Layout responsivo e estilizado com CSS  

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** → Estrutura da aplicação  
- **CSS3** → Estilização e responsividade  
- **JavaScript (ES6)** → Consumo de JSON e manipulação do DOM  
- **JSON** → Armazenamento de informações do portfólio  

---

## 📂 Estrutura de Pastas

    portfolio.json/
    ├── index.html
    ├── assets/
    │   ├── css/
    │   │   └── style.css
    │   ├── fonts/
    │   ├── imgs/
    │   └── js/
    │       ├── main.js
    │       └── api.js
    ├── data/
    │   └── data.json
    └── README.m



        
---

## 🗂️ Exemplo do JSON

```json
{
  "name": "FaeL",
  "role": "Desenvolvedor Front-End",
  "about": "Estudante de programação focado em HTML, CSS, JavaScript e React.",
  "socials": {
    "github": "https://github.com/seuusuario",
    "linkedin": "https://linkedin.com/in/seulinkedin"
  },
  "projects": [
    {
      "title": "Travelgram",
      "description": "Site de viagens com galeria de fotos e animações CSS.",
      "link": "https://github.com/seuusuario/travelgram"
    },
    {
      "title": "YouTube Clone",
      "description": "Clone da interface do YouTube utilizando Flexbox.",
      "link": "https://github.com/seuusuario/youtube-clone"
    }
  ]
}
