# Astro Routify Example

This project is a reference implementation of [astro-routify](https://github.com/oamm/astro-routify), a lightweight, Trie-based router built to **extend** Astro's native API route system — not replace it.

It showcases how to:

- Organize your API endpoints semantically using `defineGroup` and `RouterBuilder`
- Avoid deeply nested folder structures while maintaining route clarity
- Maintain full control over Astro's `APIContext` (cookies, sessions, headers, etc.)
- Enable expressive route definitions with minimal boilerplate

---

## 📁 Route Definitions

All routes are defined programmatically inside the `routes/` folder.
This project uses a central file — `CatalogsRoutes.ts` — to group and export multiple endpoints in a clean and declarative way.

Here’s a simplified example using the **group-based syntax**:


```ts
// routes/CatalogsRoutes.ts
import { defineGroup, ok } from "astro-routify";

export const CatalogsRoutes = defineGroup('/catalogs', (group) => {
  group.addGet('/genders', () =>
    ok([
      { value: 'Male', label: 'Male' },
      { value: 'Female', label: 'Female' },
    ])
  );

  group.addGet('/countries', () =>
    ok([
      { value: 'MX', label: 'Mexico' },
      { value: 'US', label: 'United States' },
    ])
  );
});

// routes/BaseRoutes.ts
import { defineGroup, ok } from "astro-routify";

export const BaseRoutes = defineGroup('/', (group) => {
    group.addGet('', () => ok({ message: "Welcome to the API :D" }));
    group.addGet('/:param', ({ params }) => ok({ received: params.param }));
});

```

---

## 🚦 API Entrypoint

All API routes are connected to Astro via a single dynamic entrypoint in:

```
/src/pages/api/[...path].ts
```

This file uses `RouterBuilder` from `astro-routify` to register and expose all defined routes:

```ts
import {RouterBuilder} from "astro-routify";
import {BaseRoutes} from "../../routes/BaseRoutes";
import {CatalogsRoutes} from "../../routes/CatalogsRoutes";
import type {APIRoute} from "astro";

const router = new RouterBuilder();

router.addGroup(BaseRoutes);
router.addGroup(CatalogsRoutes);

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
