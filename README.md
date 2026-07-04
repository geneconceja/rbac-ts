# RBAC in Vanilla TypeScript

A small, dependency-free project for learning TypeScript fundamentals and
role-based access control (RBAC) concepts — no frameworks, just the
TypeScript compiler and the browser's `localStorage`.

> **Note:** RBAC enforced entirely in `localStorage` is a UI-level access
> control pattern (hide/disable things a user shouldn't see), not a real
> security boundary — anyone can edit their own `localStorage`. It's great
> for learning and for small client-only demos, but a production app would
> need the same checks re-enforced server-side.

## Project structure

```
rbac-scaffold/
├── TODO.md              # step-by-step checklist for building this out
├── tsconfig.json         # compiler config (src/ → dist/)
├── src/
│   ├── types.ts          # Role, Permission, User, Session type definitions
│   ├── rbac.ts            # role -> permission map + permission checks
│   ├── auth.ts            # login/logout, localStorage session persistence
│   └── main.ts            # DOM wiring (buttons, rendering)
└── dist/
    └── index.html         # loads dist/main.js once compiled
```

## Prerequisites

- [Node.js](https://nodejs.org/) (for `npm`/`npx`)
- TypeScript, installed globally or as a dev dependency:
  ```bash
  npm install -g typescript
  ```

## Running it

1. Compile the TypeScript:
   ```bash
   tsc
   ```
   This reads `tsconfig.json` and outputs matching `.js` files from `src/`
   into `dist/`, right next to `index.html`.

2. Open `dist/index.html` in a browser (double-click it, or drag it into a
   tab). If your browser blocks ES modules over `file://`, serve the
   folder instead:
   ```bash
   npx serve dist
   ```
   and open the printed `localhost` URL.

3. Re-run `tsc` after any edit to `src/`, then refresh the page. For
   automatic recompilation on save:
   ```bash
   tsc --watch
   ```

## Status / roadmap

This project is being built incrementally — see [`TODO.md`](./TODO.md) for
the full checklist, roughly in this order:

1. Model the domain in `types.ts` (roles, permissions, user, session)
2. Build the RBAC engine in `rbac.ts` (permission checks)
3. Add session persistence in `auth.ts` (login/logout via `localStorage`)
4. Wire it all to the DOM in `main.ts`

## Learning goals

- TypeScript: string literal unions as a type-safe alternative to enums,
  `Record<K, V>` for exhaustive mappings, safely typing data coming out of
  `JSON.parse`
- RBAC: roles vs. permissions, the "guard" pattern (check before
  render/enable), and where client-side checks stop being real security