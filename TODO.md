# TODO — RBAC in Vanilla TypeScript

## Setup
- [x] Install TypeScript (`npm install -g typescript` or as a dev dependency)
- [x] Confirm `tsc` compiles the empty `src/` files with no errors (`tsc`)
- [x] Open `dist/index.html` in a browser once `main.js` exists, to sanity-check the module loads

## `src/types.ts` — model the domain
- [ ] Define a `Role` union type (e.g. `"admin" | "editor" | "viewer"`)
- [ ] Define a `Permission` union type (e.g. `"posts:create" | "posts:read" | ...`)
- [ ] Define a `User` interface (`id`, `username`, `roles: Role[]`)
- [ ] Define a `Session` interface (`user`, `issuedAt`) — this is what gets persisted

## `src/rbac.ts` — the engine
- [ ] Define a role → permissions map (`Record<Role, Permission[]>`)
- [ ] Write `hasRole(user, role): boolean`
- [ ] Write `hasPermission(user, permission): boolean`
- [ ] Write `hasAllPermissions(user, permissions): boolean`
- [ ] Write `hasAnyPermission(user, permissions): boolean`
- [ ] Write `permissionsFor(user): Permission[]` (all permissions across a user's roles, de-duplicated)

## `src/auth.ts` — session persistence
- [ ] Pick a localStorage key (e.g. `"rbac-demo:session"`)
- [ ] Create a small fake user list to log in as (no real backend needed)
- [ ] Write `login(username): Session | null`
- [ ] Write `logout(): void`
- [ ] Write `getSession(): Session | null` — handle corrupted/missing JSON safely
- [ ] Write `getCurrentUser(): User | null`

## `src/main.ts` — wire it to the DOM
- [ ] Render current login status on the page
- [ ] Add login buttons (one per fake user) and a logout button
- [ ] Add a few permission-gated action buttons (disable if user lacks the permission)
- [ ] Re-render whenever login/logout happens

## `dist/index.html`
- [ ] Add DOM elements for status, permissions list, login buttons, action buttons
- [ ] Confirm `<script type="module" src="./main.js">` loads after compiling

## Stretch goals (once the basics work)
- [ ] Add a role hierarchy (e.g. admin inherits editor's permissions)
- [ ] Add session expiry (check `issuedAt` against a max age)
- [ ] Validate the parsed localStorage JSON shape at runtime instead of trusting `as Session`
- [ ] Add a resource-level check (e.g. can this user edit *this specific* post, not just posts in general)
- [ ] Try tampering with localStorage by hand in devtools and see how the app reacts — this is a good way to internalize why client-side RBAC isn't real security
