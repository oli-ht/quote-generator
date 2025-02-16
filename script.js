// Array of background image URLs
const images = [
  'images/ales-krivec-Uszp5Gkg0AI-unsplash.jpg',
  'images/anton-darius-xYIuqpHD2oQ-unsplash.jpg',
  'images/artem-sapegin-8c6eS43iq1o-unsplash.jpg',
  'images/austin-crow-31anFzCzS58-unsplash.jpg',
  'images/azzedine-rouichi-gmrFgAwglqI-unsplash.jpg',
  'images/bailey-zindel-NRQV-hBF10M-unsplash.jpg',
  'images/cristina-gottardi-wndpWTiDuT0-unsplash.jpg',
  'images/daniela-cuevas-t7YycgAoVSw-unsplash.jpg',
  'images/dave-hoefler-lsoogGC_5dg-unsplash.jpg',
  'images/dawid-zawila--G3rw6Y02D0-unsplash.jpg',
  'images/garrett-parker-DlkF4-dbCOU-unsplash.jpg',
  'images/james-wheeler-ZOA-cqKuJAA-unsplash.jpg',
  'images/ken-cheung-KonWFWUaAuk-unsplash.jpg',
  'images/koukichi-takahashi-fZdX9BW8WDs-unsplash.jpg',
  'images/leo-rivas-OR_3rbIv5yI-unsplash.jpg',
  'images/mark-harpur-K2s_YE031CA-unsplash.jpg',
  'images/nakaharu-line-xpeVxaHVjgY-unsplash.jpg',
  'images/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg',
  'images/pine-watt-2Hzmz15wGik-unsplash.jpg',
  'images/ryan-schroeder-Gg7uKdHFb_c-unsplash.jpg',
  'images/tanja-cotoaga-G99nahxKY0c-unsplash.jpg',
  'images/tony-reid-UMJUr3st0AE-unsplash.jpg',
  'images/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg'
];

// Array of quotes
const quotes = [
  "The best way to predict the future is to create it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Do what you can, with what you have, where you are.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "It always seems impossible until it's done.",
  "Happiness is not something ready-made. It comes from your own actions.",
];

// Function to get a random item from an array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to update the background and quote
function updateQuoteAndBackground() {
  const randomImage = getRandomItem(images);
  const randomQuote = getRandomItem(quotes);

  document.body.style.backgroundImage = `url('${randomImage}')`;
  document.getElementById('quote').textContent = randomQuote;
}

// Set initial quote and background
updateQuoteAndBackground();

// Add click event listener to the body
document.body.addEventListener('click', updateQuoteAndBackground);