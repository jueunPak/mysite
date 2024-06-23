// Get all slider items
const sliderItems = document.querySelectorAll('.slider-item');

// Get navigation buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Get dots
const dots = document.querySelectorAll('.dot');

// Set current slide index
let currentSlide = 0;

// Function to show current slide
const showSlide = (slideIndex) => {
    // Hide all slides
    sliderItems.forEach(slide => {
        slide.style.display = 'none';
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current slide
    sliderItems[slideIndex].style.display = 'block';
    
    // Add active class to current dot
    dots[slideIndex].classList.add('active');
};

// Function to change slide by index
const changeSlide = (slideIndex) => {
    currentSlide = slideIndex;
    showSlide(currentSlide);
};

// Function to go to next slide
const nextSlide = () => {
    currentSlide = (currentSlide + 1) % sliderItems.length;
    showSlide(currentSlide);
};

// Function to go to previous slide
const prevSlide = () => {
    currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentSlide);
};

// Function to handle dot click
const dotClick = (dotIndex) => {
    changeSlide(dotIndex);
};

// Show initial slide
showSlide(currentSlide);

// Add event listeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dotClick(index);
    });
});

// Automatic slide change
setInterval(nextSlide, 5000); // Change slide every 5 seconds


window.addEventListener('scroll', function() {
    var header = document.querySelector('header');

    if (window.scrollY > 0) { // 스크롤이 발생한 경우
        header.classList.add('scrolled');
    } else { // 스크롤이 맨 위로 이동한 경우
        header.classList.remove('scrolled');
    }
});
