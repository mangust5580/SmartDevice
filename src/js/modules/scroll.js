import { scrollTo } from '../functions/scrollTo.js';

export const scroll = () => {
  const promoBtnScroll = document.querySelector('.promo__btn-scroll');
  const scrollDownAnchor = document.querySelector('[data-scroll-down]');

  promoBtnScroll.addEventListener('click', () => {
    scrollTo(scrollDownAnchor);
  });
}

