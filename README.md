# Guillaume Gabriel — Portfolio

Portfolio personnel de [Guillaume Gabriel](https://ggabriel-portfolio-nextjs.vercel.app), développeur Fullstack & DevOps.

Basé sur le template : [minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio)

---

## Stack

- **Framework** : [Next.js 14](https://nextjs.org/) (App Router)
- **Langage** : TypeScript
- **Style** : Tailwind CSS + [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Animations** : Framer Motion
- **i18n** : next-international (Français / Anglais)
- **Emails** : SendGrid (formulaire de contact)
- **Analytics** : Vercel Analytics
- **Thème** : Dark / Light (next-themes)
- **Déploiement** : Vercel

## Pages

| Route | Description |
|---|---|
| `/` | Accueil — présentation, aperçu des compétences et projets |
| `/skills` | Compétences techniques |
| `/projects` | Projets (Bali Jewelry, Dashboard, Andromeda, Swan Lessons…) |
| `/experience` | Parcours professionnel |
| `/resume` | CV téléchargeable |

## Lancer en local

```bash
pnpm install
pnpm dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).

## Personnalisation

Le contenu est centralisé dans le dossier [`config/`](./config/) :

| Fichier | Contenu |
|---|---|
| `site.ts` | Nom, description, URL, mots-clés |
| `projects.ts` | Projets (images, descriptions, technologies) |
| `experience.ts` | Expériences professionnelles |
| `skills.ts` | Compétences |
| `socials.ts` | Liens sociaux |

Les traductions se trouvent dans [`locales/en.ts`](./locales/en.ts) et [`locales/fr.ts`](./locales/fr.ts).
