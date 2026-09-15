# Personal Website

The code for my personal website, hosted on GitHub Pages at
[neerajsamtani.me](https://neerajsamtani.me).

The homepage (`index.html`) is plain static HTML. The blog is built by Jekyll,
which GitHub Pages runs automatically — there's no build step to run and nothing
to install.

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

## Layout

| Path                   | What it is                                     |
| ---------------------- | ---------------------------------------------- |
| `index.html`           | Homepage — static HTML, untouched by Jekyll    |
| `_posts/`              | Blog posts, one Markdown file each             |
| `blog/index.html`      | The blog index page                            |
| `_layouts/default.html`| Shared page chrome (header, nav, analytics)    |
| `_layouts/post.html`   | Wrapper around a single post                   |
| `stylesheets/main.css` | Site styles, including the blog styles         |
| `_config.yml`          | Jekyll configuration                           |
