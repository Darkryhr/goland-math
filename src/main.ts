import './style.scss';

let currentIndex = 0;

const quotes = document.querySelectorAll<HTMLElement>('.quote');

function updateTestimonials(index) {
  quotes.forEach((quote, idx) => {
    quote.classList.toggle('active', idx === index);
  });
}

// Event listeners for buttons
document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % quotes.length; // Loop back to the start
  updateTestimonials(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + quotes.length) % quotes.length; // Loop back to the end
  updateTestimonials(currentIndex);
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
