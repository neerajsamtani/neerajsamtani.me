# Personal Website

The code for my personal website, hosted on GitHub Pages at
[neerajsamtani.me](https://neerajsamtani.me).

Every page is built by Jekyll, which GitHub Pages runs automatically on push —
there's no build step to run and nothing to install.

Each section of the site has its own URL (`/`, `/projects/film/`, `/work/`,
`/writing/`, `/blog/`), so pages can be linked to and shared directly. They all
share one layout, and the navbar is generated from `_data/nav.yml`.

## Writing a blog post

1. Create a file in `_posts/` named `YYYY-MM-DD-some-title.md`.
2. Start it with front matter, then write Markdown:

   ```markdown
   ---
   title: "My Post Title"
   date: 2026-09-15
   description: "A one-line summary shown on the blog index."
   tags: [coffee, film]
   ---

   Your post goes here. **Markdown** works, along with links, lists,
   images, tables, blockquotes, and fenced code blocks.
   ```

   Only `title` and `date` are required. `description` and `tags` are optional.

3. Commit and push to `master`. GitHub Pages rebuilds in a minute or so and the
   post appears at `neerajsamtani.me/blog/my-post-title/` and in the list at
   `/blog/`.

That's it — no other file needs to be edited. The blog index, the RSS feed at
`/blog/feed.xml`, and the page metadata are all generated from the posts.

### Images in posts

Put the image in `assets/images/` and reference it with an absolute path:

```markdown
![Alt text](/assets/images/my-picture.jpg)
```

### Drafts

Put unfinished posts in a `_drafts/` folder with no date in the filename
(`_drafts/my-idea.md`). They're skipped on the live site, and you can preview
them locally with `bundle exec jekyll serve --drafts`.

## Previewing locally (optional)

Not required to publish, but useful for checking a post before pushing:

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Adding a page

1. Create `some-page/index.html` with front matter:

   ```html
   ---
   layout: default
   title: Some Page
   active_nav: some-page
   body_class: some-page
   ---
   <p>Your content.</p>
   ```

   `active_nav` decides which navbar item is highlighted; `body_class` is the
   CSS class put on the content wrapper.

2. Add it to `_data/nav.yml` so it shows up in the navbar:

   ```yaml
   - id: some-page
     title: Some Page
     url: /some-page/
   ```

   An entry can also have a `subnav:` list, like Projects does. The subnav only
   appears on pages belonging to that section.

## Layout

| Path                    | What it is                                    |
| ----------------------- | --------------------------------------------- |
| `index.html`            | About Me — the homepage                       |
| `projects/film/`, `projects/code/` | Projects pages                     |
| `work/`, `writing/`     | Work Experience and Writing pages             |
| `blog/index.html`       | The blog index page                           |
| `_posts/`               | Blog posts, one Markdown file each            |
| `_data/nav.yml`         | The navbar — one entry per page               |
| `_layouts/default.html` | Shared page chrome (header, nav, analytics)   |
| `_layouts/post.html`    | Wrapper around a single post                  |
| `stylesheets/main.css`  | Site styles                                   |
| `_config.yml`           | Jekyll configuration                          |

Links to the old single-page URLs (`/#writing`, `/#projects-code`, and so on)
redirect to the corresponding page.
