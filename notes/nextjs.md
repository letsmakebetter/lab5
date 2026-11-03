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

The detail page logs the id. It is a string. The log should appear in the dev-server terminal because the page is a Server Component. I have not checked it in a running browser.

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

`/tasks` has a title, description and canonical link. `sponsored` marks the paid link; `ugc` marks the user-submitted link. `/tasks` is set to render on every request. The build route table and its legend are not recorded because the build could not run.

## Checks left

- Compare Link with `<a>` in Network; check `/nope` returns 404.
- Check page source and Elements for metadata, `lang` and footer links.
- Compare view-source with the Lab 4 Vite app; that project was not in this folder.
- Run lint and build and copy the route table here.
- Compare with the temporary CSR page using View Source and Lighthouse, then delete that page.

The dependencies are listed in `package.json` and `package-lock.json`, but I could not install them or run the checks. Tasks added in the page are lost on refresh because the API is a mock.
