# Web Technologies - Lab Mid Term

- **Name:** Zainab Hussain
- **Roll number:** FA24-BCS-115
- **N** = 15
- **BP** = 600 + 15 = **615px**
- **H** = (15 x 7) mod 360 = **105** -> accent colour `hsl(105, 70%, 45%)`
- **K** = (15 mod 3) + 3 = **3** categories (so 4 radio buttons: All + 3)
- Sticky offset = (15 mod 40) + 70 = **85px**
- Premium limit = N x 100 = **PKR 1,500**

Note: my project has no separate product list in index.html (it only has the Women and Juniors
category tiles). The product listing page with prices and Add to Cart buttons is
`picnicclub.html`, and the product detail page is `shortcake.html`, so Task 1 and Task 3 are done
on picnicclub.html and Task 2 on shortcake.html.

"to go to the product listing from women means picnincclub.html...click on the text of the card "picnic club" "

## Files changed

- `picnicclub.html`
- `shortcake.html`
- `script.js` (new)

`index.html` was copied unchanged.

## Task 1 - CSS-only category filter (picnicclub.html)

I gave the 8 product cards a `data-category` of embroidered, printed or solid, and added four radio
buttons (All, Embroidered, Printed, Solid) with "All" checked on load. The radios, the labels and the
grid are siblings, so a rule like `#f-printed:checked ~ #product-grid article:not([data-category="printed"])`
sets `display: none` on the other cards. `display: none` removes the card from the grid, so no gaps
are left. The checked radio's label gets the accent colour `hsl(105, 70%, 45%)`.

## Task 2 - Product page grid with sticky details (shortcake.html)

The product article is now a CSS Grid with named areas `image`, `details` and `description`. Below
615px it is one column in that order. From 615px (`@media (min-width: 615px)`) it becomes two columns
with `"image details" "description description"`. In that media query the details box gets
`position: sticky; top: 85px`. I moved the description out of the details box into its own section
and made it long so the page scrolls.

## Task 3 - Live search and price sort (script.js)

`script.js` is linked at the bottom of picnicclub.html. The search box filters on the text of each
card's name (lower case) by adding a `search-hidden` class, so it works together with the CSS
category filter: a card is visible only if neither hides it. If no card is visible, the grid is hidden
and "No products found" is shown. The sort button reads each price from the card (digits only),
sorts a copy of the card list, and moves the existing cards with `appendChild`; it flips between
low-to-high and high-to-low on every click. On load, the script adds a "Premium" label to every card
whose price is more than 1500.

## AI tools used

Claude (Anthropic)
