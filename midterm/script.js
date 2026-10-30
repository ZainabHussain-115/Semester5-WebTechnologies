// Midterm - Task 3: live search, price sort, Premium label
// N = 15  ->  Premium limit = N x 100 = 1500

const N = 15;
const PREMIUM_LIMIT = N * 100;

const grid = document.getElementById("product-grid");
const cards = Array.from(grid.querySelectorAll("article"));
const searchBox = document.getElementById("search-box");
const sortBtn = document.getElementById("sort-btn");
const noResults = document.getElementById("no-results");
const categoryRadios = document.querySelectorAll('input[name="category"]');

let ascending = true; // first click = lowest to highest

// read the price from the card itself ("PKR 10,350" -> 10350)
function getPrice(card) {
  const text = card.querySelector(".product-price").textContent;
  return parseInt(text.replace(/[^0-9]/g, ""), 10);
}

// a card counts as visible if neither the category filter (CSS)
// nor the search (class) has hidden it
function updateNoResults() {
  const anyVisible = cards.some(
    (card) => getComputedStyle(card).display !== "none",
  );
  noResults.classList.toggle("is-hidden", anyVisible);
  grid.classList.toggle("is-hidden", !anyVisible);
}

// search by product name, not case-sensitive
function applySearch() {
  const term = searchBox.value.trim().toLowerCase();
  cards.forEach((card) => {
    const name = card.querySelector(".product-name").textContent.toLowerCase();
    card.classList.toggle("search-hidden", !name.includes(term));
  });
  updateNoResults();
}

searchBox.addEventListener("input", applySearch);

// category radios are pure CSS, but the message must refresh when they change
categoryRadios.forEach((radio) => {
  radio.addEventListener("change", updateNoResults);
});

// sort by price: move the existing card elements with appendChild
sortBtn.addEventListener("click", () => {
  const sorted = [...cards].sort((a, b) =>
    ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a),
  );
  sorted.forEach((card) => grid.appendChild(card));

  sortBtn.textContent = ascending
    ? "Sort by price: low to high"
    : "Sort by price: high to low";
  ascending = !ascending;
});

// Premium label, added once when the page loads
cards.forEach((card) => {
  if (getPrice(card) > PREMIUM_LIMIT) {
    const label = document.createElement("span");
    label.className = "premium-label";
    label.textContent = "Premium";
    card.querySelector(".product-price").appendChild(label);
  }
});
