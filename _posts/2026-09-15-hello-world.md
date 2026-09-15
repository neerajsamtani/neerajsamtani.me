---
title: "Hello, World"
date: 2026-09-15
description: "Why I finally added a blog to this site, and how it works."
tags: [meta]
---

I've had this website for years without a place to write anything longer than a
project caption. That changes now.

## How this works

Every post is one Markdown file in `_posts/`, named `YYYY-MM-DD-some-title.md`.
GitHub Pages builds it into a page automatically when I push — there's no build
step to run and nothing to install.

The front matter at the top of each file is all the configuration a post needs:

```yaml
---
title: "Hello, World"
date: 2026-09-15
description: "A one-line summary for the blog index."
tags: [meta]
---
```

Everything below it is plain Markdown: **bold text**, [links](https://neerajsamtani.me),
lists, images, and code blocks with syntax highlighting.

```python
def hello(name: str) -> str:
    return f"Hello, {name}!"
```

> Blockquotes work too, which is handy for quoting things I've read.

That's the whole system. Delete this post whenever you'd like — it's just here
as a template.
