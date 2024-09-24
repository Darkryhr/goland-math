import './style.scss';

let currentIndex = 0; // To track the current element

const quotes = document.querySelectorAll<HTMLElement>('.quote');

function updateTestimonials() {
  quotes.forEach((quote, idx) => {
    quote.style.display = idx === currentIndex ? 'flex' : 'none';
  });
}
// Event listeners for buttons
document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % quotes.length; // Loop back to the start
  updateTestimonials();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + quotes.length) % quotes.length; // Loop back to the end
  updateTestimonials();
});

// add blur and effect on top of background
// make arrow button functional
// animations:
// - buttons
// - on scroll
// - on start
// hover on my logo
// testimonials transition js
// links to all buttons
