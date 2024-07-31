# Portfolio de Développeur FullStack JavaScript et TypeScript
FR: Bienvenue sur le portfolio réalisé par le développeur FullStack MarVik ! Ce projet est conçu pour présenter mes compétences en développement web, en utilisant JavaScript (surveillé par TypeScript) comme principal langage de programmation.
---
EN: Welcome to the portfolio created by the FullStack developer MarVik! This project is designed to showcase my web development skills, using JavaScript (monitored by TypeScript) as the main programming language.


## Table des Matières

- [Introduction](#introduction)
- [Technologies Utilisées / Technologies Used](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation / Usage](#utilisation)
- [Structure du Projet / Project Structure](#structure-du-projet)
- [Contribution](#contribution)
- [Licence](#licence)
- [Contact](#contact)

## Introduction

FR:
L'avantage d'un portfolio, c'est qu'il en dit déjà beaucoup sur vous !
Vous souhaitez un résumé ? (c'est probablement pour cela que vous avez ouvert ce fichier 🙂)
En quelques mots, je suis quelqu'un qui aime comprendre, qui cherche l'optimisation et le plus important, le partager!

Mon expérience récente en tant que développeur FullStack m'a permis de maîtriser le langage JavaScript et d'exploiter pleinement tout l'écosystème qui s'est développé autour.

Ma vision se résume en quatre points : Problématique => Imagination => Création => Solution.

Dans une perspective d'évolution, j'ai créé ce portfolio non seulement pour pratiquer, pour exposer mes compétences, mais surtout dans un esprit de partage (ce qui explique aussi pourquoi vous lisez ces quelques lignes). Raison donc pour laquelle je mets ce projet en libre utilisation. 
---
EN:
The advantage of a portfolio is that it already says a lot about you!
Do you want a summary? (that's probably why you opened this file 🙂)
In a few words, I am someone who loves to understand, seeks optimization, and most importantly, shares it!

My recent experience as a FullStack developer has allowed me to master the JavaScript language and fully exploit the entire ecosystem that has developed around it.

My vision can be summarized in four points: Problem => Imagination => Creation => Solution.

In a perspective of evolution, I created this portfolio not only to practice, to expose my skills, but above all in a spirit of sharing (which also explains why you are reading these few lines). Hence why I am making this project freely available.


## Technologies Utilisées / Technologies Used

FR: Ce projet utilise les technologies et bibliothèques suivantes:
---
EN: This project uses the following technologies and libraries:

- **Frontend**:
  - React
  - Next.js
  - Tailwind CSS
  - Shadcn UI
  - Framer Motion
  - Tabler Icons
  - Lucide React
  - React Icons
  - Embla Carousel

- **Outils / Tools**:
  - TypeScript
  - Sharp
  - Mini SVG Data URI
  - Three.js
  - Three Globe

## Installation /Setup

FR: Pour installer et exécuter ce projet localement, suivez ces étapes:
EN: To install and run this project locally, follow these steps:

1. Clonez le dépôt / Clone the repository :

   ```bash
   git clone https://github.com/MarVik-Dev/marvik-portfolio.git
   ```

2. Renommé puis accédez au répertoire du projet / Rename and access the project directory:
   cd votre-portfolio

3. Installez les dépendances (à votre convenance) / Install the dependencies (at your convenience):
   npm install
   ou / or
   pnpm install

4. Lancez le projet / Run the project:
   npm run dev
   ou / or
   pnpm dev

5. Ouvrez votre navigateur / Open your browser:
   FR: Accédez à http://localhost:3000 pour voir votre nouveau portfolio en action.
   EN: Access http://localhost:3000 to see your new portfolio in action.

## Utilisation / Usage

FR:
Ce portfolio est conçu pour être facilement navigable et interactif. Comme stipulé dans l'arborescence (ci-dessous), à la racine dans le dossier "app" vous avez un autre dossier nommé "data". Ce 
dossier est découpé en plusieurs fichiers explicitement nommés en reprenant chacune des sections du portfolio. C'est là que l'aventure commence pour vous !
---
EN: This portfolio is designed to be easily navigable and interactive. As stipulated in the directory structure (below), at the root in the "app" folder, you have another folder named "data". This folder is divided into several explicitly named files, each corresponding to a section of the portfolio. This is where the adventure begins for you!

## Structure du Projet / Project Structure

FR: Le projet est structuré de la manière suivante:
EN: The project is structured as follows:

```plaintext
.
├── app
│   ├── components
│   │   ├── layout
│   │   │   ├── About.tsx
│   │   │   ├── Communication.tsx
│   │   │   ├── FAQs.tsx
│   │   │   ├── Feature.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── NavBar.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Reviews.tsx
│   │   │   └── Skills.tsx
│   │   ├── ui
│   │   │   ├── Accordion.tsx
│   │   │   ├── AnimateTooltip.tsx
│   │   │   ├── BentoGrid.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Globe.tsx
│   │   │   ├── GridGlobe.tsx
│   │   │   ├── MagicButton.tsx
│   │   │   ├── MovingBorders.tsx
│   │   │   ├── Pin.tsx
│   │   │   └── StickyScroll.tsx
│   │   │   └── Tooltip.tsx
│   │   └── utils
│   │       ├── Logo.tsx
│   │       ├── Slider.tsx
│   │       ├── ThemeProvider.tsx
│   │       └── ThemeToggler.tsx
│   ├── data
│   │   ├── personal (dossier ayant les fichiers à compléter)
│   │   │   ├── PersonalData.tsx
│   │   │   ├── aboutItems.tsx
│   │   │   ├── faqItems.tsx
│   │   │   ├── navItems.tsx
│   │   │   ├── projectItems.tsx
│   │   │   ├── reviewItems.tsx
│   │   │   ├── specialityItems.tsx
│   │   │   └── workToolItems.tsx
│   │   ├── confetti.json
│   │   └── globe.json
│   ├── hooks
│   │   └── useScrollProgress.tsx
│   ├── lib
│   │   └── utils.ts
│   ├── types
│   │   └── useProps.ts ---- > (global props file)
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── provider.tsx
│   └── template.tsx
├── public
│   └── images
│       ├── about ---- > (images folder)
│       ├── backgrounds ---- > (images folder)
│       ├── footer ---- > (images folder)
│       ├── hero ---- > (images folder)
│       ├── icons ---- > (images folder)
│       ├── reviews ---- > (images folder)
│       ├── skills ---- > (images folder)
│       ├── social ---- > (images folder)
│       ├── tools ---- > (images folder)
│       ├── work ---- > (images folder)
│       └── logo.png
├── .eslintrc.json
├── .gitignore
├── components.json
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Contribution

FR: Les contributions et 🌟 sur le repo Github sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :
EN: Contributions and 🌟 on the GitHub repo are welcome! If you wish to contribute to this project, please follow these steps:


1. Fork le dépôt. 
   / Fork the repository.
2. Créez une branche pour votre fonctionnalité (git checkout -b feature/votre-fonctionnalite). 
   / Create a branch for your feature (git checkout -b feature/your-feature).
3. Committez vos modifications (git commit -m 'Ajout de la fonctionnalité X'). 
   / Commit your changes (git commit -m 'Add feature X').
4. Poussez la branche (git push origin feature/votre-fonctionnalite). 
   / Push the branch (git push origin feature/your-feature).
5. Ouvrez une Pull Request. 
   / Open a Pull Request.

## Licence

FR: Ce projet est sous licence MIT. Voir ci-dessous pour plus de détails.
EN: This project is licensed under the MIT License. See below for more details.

## Contact

FR: Pour toute question ou suggestion, n'hésitez pas à me contacter via mon email ou sur LinkedIn.
EN: For any questions or suggestions, feel free to contact me via email or on LinkedIn.



MIT License

Copyright (c) 2024 MarVik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
