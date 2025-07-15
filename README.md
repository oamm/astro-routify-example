# Astro Routify Example

This project is a reference implementation of [astro-routify](https://github.com/oamm/astro-routify), a lightweight, Trie-based router built to **extend** Astro's native API route system — not replace it.

It showcases how to:

- Organize your API endpoints semantically using `defineRoute` and `defineRouter`
- Avoid deeply nested folder structures while maintaining route clarity
- Maintain full control over Astro's `APIContext` (cookies, sessions, headers, etc.)
- Enable expressive route definitions with minimal boilerplate

---

## 📁 Route Definitions

All routes are defined programmatically inside the `routes/` folder.  
This project uses a central file — `CatalogsRoutes.ts` — to group and export multiple endpoints in a clean and declarative way.

Here’s a simplified example:

```ts
import { defineHandler, defineRoute, HttpMethod, type Route, ok } from "astro-routify";

const EntryEndpoint: Route = defineRoute(
  HttpMethod.GET,
  '/',
  defineHandler(async () => ok({ message: "This is the API :D" }))
);

const ParamEndpoint: Route = defineRoute(
  HttpMethod.GET,
  '/:param',
  defineHandler(async ({ params }) => ok({ "the param is": params.param }))
);

const GendersEndpoint: Route = defineRoute(
  HttpMethod.GET,
  '/catalogs/genders',
  defineHandler(async () =>
    ok([
      { value: 'Male', label: 'Male' },
      { value: 'Female', label: 'Female' },
    ])
  )
);

// ... other endpoints omitted for brevity

const CatalogsRoutes: Route[] = [
  EntryEndpoint,
  ParamEndpoint,
  GendersEndpoint,
  // ... other routes
];

export default CatalogsRoutes;
```

---

## 🚦 API Entrypoint

All API routes are connected to Astro via a single dynamic entrypoint in:

```
/src/pages/api/[...path].ts
```

This file uses `RouterBuilder` from `astro-routify` to register and expose all defined routes:

```ts
import { RouterBuilder } from "astro-routify";
import CatalogsRoutes from "../../routes/CatalogsRoutes";
import type { APIRoute } from "astro";

const router = new RouterBuilder();
router.register(CatalogsRoutes);

export const ALL: APIRoute = router.build();
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:4321/api/`  
Try `http://localhost:4321/api/catalogs/genders` or `http://localhost:4321/api/some-value`

---

## 📦 Tech Stack

- [`Astro`](https://astro.build)
- [`astro-routify`](https://github.com/oamm/astro-routify)

---

## 📂 Project Structure

```
/src
  /routes
    CatalogsRoutes.ts     ← Route definitions
  /pages/api
    [...path].ts          ← Astro API entrypoint
```

---

## 📝 License

MIT

---

Built with ❤️ using [astro-routify](https://github.com/oamm/astro-routify)
