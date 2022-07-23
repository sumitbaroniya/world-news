const hamburger = document.getElementById('hamburger');
const logo = document.getElementById('world-news');
const navigation = document.querySelector('.nav');
const navLink = document.querySelectorAll('.mobile-nav-link');
const mobileNav = document.querySelector('#mobile-menu');
const main = document.querySelector('.main');
const mobileBG = document.querySelector('.mobile-background');
const footer = document.querySelector('.footer');


const showMobile = () => {
    hamburger.addEventListener('click', () => {
      logo.classList.toggle('rotate');
      mobileNav.classList.add('active');
      main.classList.add('active');
      footer.classList.add('active');
      mobileBG.classList.add('active');
    });
  };
  
  const hideMobile = () => {
    for (let i = 0; i < navLink.length; i += 1) {
      navLink[i].addEventListener('click', () => {
      navigation.classList.remove('active');
      mobileNav.classList.remove('active');
      main.classList.remove('active');
      footer.classList.remove('active');
      mobileBG.classList.remove('active');
      });
    }
  };

  showMobile();
  hideMobile();