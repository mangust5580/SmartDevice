import { disableScroll } from '../functions/disableScroll.js';
import { enableScroll } from '../functions/enableScroll.js';
import { focusCatch } from '../functions/focusCatch.js';
import { focusTrap } from '../functions/focusTrap.js';

export const nav = () => {
  const mainNav = document.querySelector('.main-nav');
  const btnMenuOpen = mainNav.querySelector('[data-menu-open]');
  const btnMenuClose = mainNav.querySelector('[data-menu-close]');
  const mainNavWrapper = mainNav.querySelector('.main-nav__wrapper');
  const mainNavLink = mainNav.querySelectorAll('.nav-list__link');

  const openMenu = () => {
    mainNavWrapper.classList.add('is-open');
    btnMenuOpen.setAttribute('aria-expanded', 'true');
    disableScroll();

    if (mainNavWrapper.classList.contains('is-open')) {
      focusTrap(mainNavWrapper);
    }
  };

  const hideMenu = () => {
    mainNavWrapper.classList.remove('is-open');
    btnMenuOpen.setAttribute('aria-expanded', 'false');
    enableScroll();
  };

  btnMenuOpen.addEventListener('click', openMenu);
  btnMenuClose.addEventListener('click', hideMenu);

  mainNavLink.forEach((el) => {
    el.addEventListener('click', () => {
      enableScroll();
      hideMenu();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && mainNavWrapper.classList.contains('is-open')) {
      hideMenu();
    }

    if (e.code === 'Tab' && mainNavWrapper.classList.contains('is-open')) {
      focusCatch(e, mainNavWrapper);
    }
  });
};