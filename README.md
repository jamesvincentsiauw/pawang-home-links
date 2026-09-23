# pawang-home-links

Reproduction of one finding from an audit of [pawang.io](https://pawang.io/) (23 September 2026), and the fix for it.

**Finding:** the homepage's main buttons ("Belajar Sekarang", "Lihat Semua Kelas", "Lihat Semua Jalur") are `<button>` elements that navigate through JavaScript. The course and track lists on the homepage are also fetched on the client after mount, so the server-rendered HTML contains only grey skeleton boxes.

**Why it matters:**

- On a slow connection the buttons do nothing until the JavaScript bundle (about 300 KB compressed on the real site) has loaded and run.
- The buttons cannot be opened in a new tab, middle-clicked, or copied as a link.
- Crawlers see no link from the homepage to `/courses` or `/tracks`, and no course names in the homepage HTML.

This repository is a small Nuxt 4 app. `main` reproduces the pattern found on pawang.io. The fix is on a separate branch and pull request so the diff is easy to read.

## Run

```sh
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## See the problem

With the dev server running:

```sh
# The hero CTA is a button, not a link.
curl -s http://localhost:3000/ | grep -o '<button[^>]*> Belajar Sekarang'

# No course name in the server HTML.
curl -s http://localhost:3000/ | grep -c 'ChatGPT buat Semua Orang'
```

In the browser: right-click "Belajar Sekarang" and note there is no "Open link in new tab". Set DevTools network throttling to "Slow 3G", reload, and click the button before the page finishes loading.

The catalog data in `server/data/catalog.ts` is copied from the public listing on pawang.io. Everything else (styling, layout) is a simplified stand-in for the real site.
