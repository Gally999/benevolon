# Bénévolon Design System Monorepo

Ce projet est un monorepo (dépôt unique) pour le développement d'un système de design réutilisable et d'une application web qui l'utilise. Il est organisé avec [pnpm workspaces](https://pnpm.io/workspaces) pour gérer les dépendances partagées entre les packages.

## Description

Le monorepo contient :
- Un **design system** (`@benevolon/design-system`) : Une bibliothèque de composants React réutilisables (Badge, Button, Card, etc.), avec des styles CSS et des stories pour Storybook.
- Une **application web** (`web-app`) : Une application React qui consomme le design system pour afficher des événements bénévoles.

Le design system est construit comme une bibliothèque indépendante, permettant sa réutilisation dans d'autres projets.

## Structure du projet

```
design-system-monorepo/
├── package.json                 # Configuration racine du monorepo
├── pnpm-lock.yaml               # Lockfile de pnpm
├── pnpm-workspace.yaml          # Configuration des workspaces pnpm
├── tsconfig.json                # Configuration TypeScript racine
├── apps/
│   └── web-app/                 # Application web React
│       ├── package.json
│       ├── src/
│       │   ├── App.tsx
│       │   ├── main.tsx         # Point d'entrée avec import du CSS du design system
│       │   ├── components/
│       │   │   └── EventsPage.tsx
│       │   └── data/
│       │       └── events.json
│       └── index.html
└── packages/
    └── design-system/           # Bibliothèque du design system
        ├── package.json
        ├── src/
        │   ├── index.ts         # Point d'entrée exportant tous les composants
        │   ├── tokens.css       # Variables CSS (couleurs, espacements, etc.)
        │   └── components/      # Composants individuels (Badge, Button, Card, etc.)
        │           ├── Badge/
        │           ├── Button/
        │           └── ...
        ├── stories/             # Stories pour Storybook
        ├── dist/                # Sortie de build (générée)
        ├── tsconfig.json        # Configuration TypeScript spécifique
        └── vite.config.mjs      # Configuration Vite pour le build de la lib
```

- **`apps/web-app`** : L'application finale. Elle importe les composants du design system via `"@benevolon/design-system": "workspace:*"`.
- **`packages/design-system`** : La bibliothèque. Elle exporte les composants React et le CSS. Le build génère des fichiers `.d.ts` pour TypeScript et un bundle JS/CSS.
- **Workspaces pnpm** : Permet de partager les dépendances et de lier les packages localement sans publication npm.

## Technologies utilisées

- **Gestion de paquets** : [pnpm](https://pnpm.io/) avec workspaces pour le monorepo.
- **Langages** : TypeScript pour le typage statique.
- **Framework** : React pour les composants.
- **Build/Outil** : 
  - [Vite](https://vitejs.dev/) pour le développement rapide et le build (lib pour le design system, app pour la web-app).
  - [Storybook](https://storybook.js.org/) pour documenter et tester les composants du design system.
- **Styles** : CSS pur avec variables CSS (tokens) pour la cohérence.
- **Icônes** : [Lucide React](https://lucide.dev/) pour les icônes.
- **Dates** : [date-fns](https://date-fns.org/) pour la manipulation des dates.
- **Versionnement** : Git pour le contrôle de version.

## Installation

1. **Prérequis** :
   - Node.js (version 18+ recommandée).
   - pnpm installé globalement : `npm install -g pnpm`.

2. **Cloner et installer** :
   ```bash
   git clone https://github.com/Gally999/benevolon.git
   cd design-system-monorepo
   pnpm install  # Installe les dépendances pour tous les workspaces
   ```

   Cela installe les dépendances partagées et lie les packages localement.

## Utilisation

### Lancer l'application web

**Important** : Le design system doit être construit avant de lancer la web-app, car elle dépend des types TypeScript et des assets (CSS/JS) générés.

1. **Builder le design system** :
   ```bash
   cd packages/design-system
   pnpm build  # Génère dist/index.js, dist/index.d.ts et dist/style.css
   ```

2. **Lancer la web-app** :
   ```bash
   cd apps/web-app
   pnpm dev  # Lance le serveur de développement Vite (par défaut sur http://localhost:5173)
   ```

   La web-app importe automatiquement le CSS du design system via `main.tsx`.

### Lancer Storybook pour le design system

Pour développer et tester les composants isolément :
```bash
cd packages/design-system
pnpm storybook  # Lance Storybook (par défaut sur http://localhost:6006)
```

### Autres commandes

- **Build complet du monorepo** : `pnpm build` à la racine (build tous les packages).
- **Lint/Tests** : Non configurés pour le moment, mais vous pouvez ajouter ESLint/Prettier et des tests (Jest/Vitest).
- **Publication** : Pour publier le design system sur npm, utilisez `pnpm publish` dans `packages/design-system` après un build.

## Développement

- **Ajouter un nouveau composant** : Créez un dossier dans `packages/design-system/src/components/`, exportez-le dans `index.ts`, et ajoutez une story dans `stories/`.
- **Modifier les tokens CSS** : Éditez `tokens.css` pour les couleurs, espacements, etc.
- **Workspaces** : Les changements dans le design system sont automatiquement reflétés dans la web-app grâce aux liens symboliques de pnpm (pas besoin de rebuild à chaque modif en dev).
- **TypeScript** : Redémarrez le serveur TS dans VS Code si les types ne se mettent pas à jour (`Ctrl+Shift+P` > "TypeScript: Restart TS Server").
- **CSS** : Les styles sont extraits dans `dist/style.css` lors du build – importez ce fichier dans les apps consommatrices.

## Références

- [Documentation pnpm Workspaces](https://pnpm.io/workspaces) : Pour comprendre la gestion des monorepos.
- [Guide Vite pour les bibliothèques](https://vitejs.dev/guide/build.html#library-mode) : Configuration du build pour le design system.
- [Storybook pour React](https://storybook.js.org/docs/react/get-started/introduction) : Documentation des composants.
- [React avec TypeScript](https://react-typescript-cheatsheet.netlify.app/) : Bonnes pratiques pour les composants typés.
- [CSS Variables (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) : Pour les tokens CSS.

Projet pédagogique par Cécile DAGUIN