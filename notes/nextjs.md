# Lab 5 notes

## Strand 1: Routes

- `app/tasks/page.tsx` answers at `/tasks`.
- `/task` is not a route, so it shows the not-found page.
- `/tasks/[id]` shows a task. The id is a string and is checked with Zod.
- Invalid or missing task ids use `notFound()`.

| Route | Short and readable | Lowercase | Hyphens | Few query params | HTTPS |
|---|---|---|---|---|---|
| `/` | Yes | Yes | n/a | Yes | At deployment |
| `/tasks` | Yes | Yes | n/a | Yes | At deployment |
| `/tasks/[id]` | Yes | Yes | n/a | Yes | At deployment |

The root layout and tasks layout wrap `/tasks/1`. The tasks layout stays when moving from `/tasks` to `/tasks/1`. `lang="en"` tells screen readers which language rules to use.

I checked `/tasks/1`: the dev-server terminal logs `id is a string` with value `1`.

## Strand 2: Components

| File | Type | Reason |
|---|---|---|
| `app/layout.tsx` | Server | No state or browser events. |
| `app/tasks/page.tsx` | Server | Fetches and validates tasks. |
| `TaskBoard.tsx` | Client | Uses state and event handlers. |
| `TaskList.tsx` and `TaskCard.tsx` | Client through parent | Imported by the client board. |
| `FilterBar.tsx` and `NewTaskForm.tsx` | Client through parent | Imported by the client board. |

Only `TaskBoard.tsx` and `error.tsx` need `"use client"`. The first boundary mistake should fail because the board uses state and event handlers. I did not capture the exact error text.

## Strand 3: Rendering

| Page | Search engines? | Private or highly interactive? | Choice |
|---|---|---|---|
| Public shared task | Yes | No | Server |
| Drag-and-drop board | Not the main need | Yes | Browser interaction |
| About page | Yes | No | Ahead of time |

`/tasks` has a title, description and canonical link. `sponsored` marks the paid link; `ugc` marks the user-submitted link. `/tasks` is set to render on every request. Build routes: `○ /`, `○ /_not-found`, `ƒ /tasks`, `ƒ /tasks/[id]`. `○` is static; `ƒ` is dynamic.

## Checks

`npm run lint` and `npm run build` pass. `/`, `/tasks`, and `/tasks/1` return 200; `/nope` returns 404. `/tasks/abc` shows the not-found page but streams with status 200 because the tasks loading boundary starts the response first.

Still to check in a browser: Link versus `<a>` in Network, page source/Elements, the Lab 4 Vite comparison, and the temporary CSR/Lighthouse comparison. Added tasks are lost on refresh because the API is a mock.
