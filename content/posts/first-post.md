---
title: First post
description: The first post is the most memorable one.
date: 2020-7-26
published: true
writtenBy: Touko Peltomaa
---

<p class="lead">Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p>

By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.

It adds a new `prose` class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:
```
<article class="prose">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  <!-- ... -->
</article>
```
The @tailwindcss/typography plugin is our attempt to give you what you actually want, without any of the downsides of doing something stupid like disabling our base styles.

> Why is Tailwind removing the default styles on my h1 elements? How do I disable this? What do you mean I lose all the other base styles too?

## What to expect from here on out
What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like bold text, unordered lists, ordered lists, `code` blocks, block quotes, and even italics.

It's important to cover all of these use cases for a few reasons:

* We want everything to look good out of the box.
* Really just the first reason, that's the whole point of the plugin.
* Here's a third pretend reason though a list with three items looks more realistic than a list with two items.
