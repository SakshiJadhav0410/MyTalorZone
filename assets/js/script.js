'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});


document.addEventListener('DOMContentLoaded', () => {
  // Select both toasts
  const toast1 = document.querySelectorAll('.notification-toast')[0];
  const toast2 = document.querySelectorAll('.notification-toast')[1];

  // Show the first toast after 1 second
  setTimeout(() => {
    toast1.classList.add('show');
  }, 1000); // 1 second delay for the first toast
  
  // Automatically close the first toast after 5 seconds and show the second toast
  setTimeout(() => {
    toast1.classList.remove('show');
    toast2.classList.add('show'); // Show second toast after the first closes
  }, 5000); // 6 seconds (5 seconds after the first toast appears)

  // Automatically close the second toast after 5 more seconds (total 10 seconds from page load)
  setTimeout(() => {
    toast2.classList.remove('show');
  }, 10000); // 11 seconds (5 seconds after second toast appears)
});





const sliderContainer = document.querySelector('.slider-container');


sliderContainer.addEventListener('mouseleave', () => {
  sliderContainer.style.animationPlayState = 'running';
});




// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}