# Portfolio de Développeur FullStack JavaScript et TypeScript

Bienvenue sur le portfolio réalisé par le développeur FullStack MarVik ! Ce projet est conçu pour présenter mes compétences en développement web, en utilisant JavaScript (surveillé par TypeScript) comme principal langage de programmation.

## Table des Matières

- [Introduction](#introduction)
- [Technologies Utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)
- [Contribution](#contribution)
- [Licence](#licence)
- [Contact](#contact)

## Introduction

L'avantage d'un portfolio, c'est qu'il en dit déjà beaucoup sur vous !
Vous souhaitez un résumé ? (c'est probablement pour cela que vous avez ouvert ce fichier 🙂)
En quelques mots, je suis quelqu'un qui aime comprendre et chercher à optimiser.

Mon expérience récente en tant que développeur FullStack m'a permis de maîtriser le langage JavaScript et d'exploiter pleinement tout l'écosystème qui s'est développé autour.

Ma vision se résume en quatre points : Problématique => Imagination => Réalisation => Solution.

Dans une perspective d'évolution, j'ai créé ce portfolio non seulement pour pratiquer, pour exposer mes compétences, mais surtout dans un esprit de partage (ce qui explique aussi pourquoi vous lisez ces quelques lignes). Raison donc pour laquelle je mets ce projet en libre utilisation. 

## Technologies Utilisées

Ce projet utilise les technologies et bibliothèques suivantes :

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

- **Outils**:
  - TypeScript
  - Sharp
  - Mini SVG Data URI
  - Three.js
  - Three Globe

## Installation

Pour installer et exécuter ce projet localement, suivez ces étapes :

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/MarVik-Dev/marvik-portfolio.git
   ```

2. Renommé puis accédez au répertoire du projet :
   cd votre-portfolio

3. Installez les dépendances (à votre convenance) :
   npm install
   ou
   pnpm install

4. Lancez le projet :
   npm run dev
   ou
   pnpm dev

5. Ouvrez votre navigateur :
   Accédez à http://localhost:3000 pour voir votre nouveau portfolio en action.

## Utilisation

Ce portfolio est conçu pour être facilement navigable et interactif. Comme stipulé dans l'arborescence (ci-dessous), à la racine dans le dossier "app" vous avez un autre dossier nommé "data". Ce dossier est découpé en plusieurs fichiers explicitement nommés en reprenant chacune des sections du portfolio. C'est là que l'aventure commence pour vous !

## Structure du Projet

Le projet est structuré de la manière suivante :

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

## Contribution

Les contributions et 🌟 sur le repo Github sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

1. Fork le dépôt.
2. Créez une branche pour votre fonctionnalité (git checkout -b feature/votre-fonctionnalite).
3. Committez vos modifications (git commit -m 'Ajout de la fonctionnalité X').
4. Poussez la branche (git push origin feature/votre-fonctionnalite).
5. Ouvrez une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir ci-dessous pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter via mon email ou sur LinkedIn.



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
