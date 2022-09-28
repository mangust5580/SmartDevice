export const promo = () => {
  if (document.querySelector('.promo')) {
    const promo = document.querySelector('.promo');
    const promoBtn = promo.querySelector('.promo__btn');

    if (document.documentElement.clientWidth <= 340) {
      promoBtn.textContent = 'Бесплатная консультация';
    }
  }
};
