# AstroNode Blog
The `AstroNode Blog` is a project to build customized blogging platform using [Headless Hashnode](https://hashnode.com/headless) and [Astro web framework](https://astro.build/).

## See Demo
You can see the demo of the working app from here:

> [The AstroNode Blog Demo](https://astronodeblog.netlify.app/)

## Run It Locally
You can fork the repository and run the application locally using the following steps:
- Install dependencies using `npm install` / `pnpm install` / `yarn` command.
- Start the development server with `npm run dev` / `pnpm dev` / `yarn dev`.
- By default, the app will run on the [http://localhost:4321/](http://localhost:4321/).

## Tech Stack
- Astro as front-end web framework.
- Tailwind CSS for styling.
- Headless Hashnode as the CMS for Blogging.
- GraphQL client.
- Netlify for hosting (with automatic build & deploy).

## Support


## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deployment Status
The app is deployed on Netlify.

[![Netlify Status](https://api.netlify.com/api/v1/badges/7e352168-2323-4cfd-8edb-035a9d41a563/deploy-status)](https://app.netlify.com/sites/astronodeblog/deploys)