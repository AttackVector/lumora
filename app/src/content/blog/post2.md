---
title: 'Testing the Astro Layout System'
pubDate: 2026-10-29
description: 'A mock article to verify our content collections layout.'
author: 'Vin'
tags: ["astro", "markdown", "web-dev"]
---

Welcome to the test environment! 🚀

This file is located at `src/content/blog/test-post.md`. Since it matches your configuration rules, Astro uses your single routing template file to process this content.

### What should be working right now:
1. **The Title:** The layout wrapper should read the title from the frontmatter block above and insert it inside your main document headers.
2. **The Tags Loop:** Your split tags array `["astro", "markdown", "web-dev"]` should output cleanly as separate list elements.
3. **The Navigation Footer:** 
   * If this is your **only** file inside the folder, both side containers will fall back to their alternative placeholder strings (*First Post* and *Newest Post*).
   * Once you drop a second markdown file inside the directory, Astro will automatically calculate the dates and attach matching chronological page links.

Feel free to copy this file, rename it to `second-post.md`, change the date string, and watch the relative links connect automatically!
