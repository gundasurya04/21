# OmniFood Landing Page

A simple responsive landing page for a food delivery service called OmniFood.

## What this project includes

- `index.html`: the page structure using semantic HTML elements like `<header>`, `<main>`, `<section>`, `<article>`, and `<figure>`.
- `style.css`: the visual design, layout, and responsive breakpoints.
- `script.js`: hamburger menu JavaScript logic for mobile navigation.
- `assets/`: image assets used in the page.

## How to run it

1. Open the project folder in a code editor or file browser.
2. Open `index.html` in your browser.

No build tools or server are required. If you want to preview it using a local server, you can use an editor extension or a quick server command like:

- VS Code Live Server extension
- `npx http-server` from the project folder

## Breakpoints and responsive behavior

The CSS includes two main responsive breakpoints:

- `max-width: 834px`
  - Switches the navigation menu to a mobile dropdown.
  - Shows the hamburger button.
  - Converts the two-column `how-it-works` section into a single-column layout.
  - Changes the city cards from 4 columns to 2 columns.
  - Changes testimonials from 3 columns to 2 columns.
  - Changes pricing cards from 3 columns to 2 columns.

- `max-width: 400px`
  - Reduces base font sizing for better readability on small phones.
  - Adds more vertical spacing and simplifies the hero buttons.
  - Changes city cards, testimonial cards, and pricing cards to a single-column layout.
  - Reduces the padding and font sizes for mobile comfort.

## Viewing on desktop, tablet, and mobile

You can test the responsive views in your browser:

1. Open `index.html` in your browser.
2. Open developer tools (usually `F12` or `Ctrl+Shift+I`).
3. Enable device emulation / responsive mode.
4. Choose or enter viewport widths for:
   - Desktop: `1200px`
   - Tablet: `834px`
   - Phone: `390px`

This will show how the layout adjusts for each device size without horizontal scrolling.

## Notes

- The page layout is intentionally simple and built incrementally.
- Semantic HTML and accessible navigation were added to make the page easier to maintain and understand.
