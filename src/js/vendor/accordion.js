class Accordion {
  constructor(selector, options) {
    let defaultOptions = {
      isOpen: () => { },
      isClose: () => { },
    };
    this.options = Object.assign(defaultOptions, options);
    this.selector = selector;
    this.accordion = document.querySelector(`[data-accordion=${selector}]`);
    if (this.accordion) {
      this.items = this.accordion.querySelectorAll('.accordion__item');
      this.controls = this.accordion.querySelectorAll('.accordion__control');
      this.contents = this.accordion.querySelectorAll('.accordion__content');
      this.speed = false;
    } else {
      console.error('Селектор data-accordion не существует');
      return;
    }

    this.init();
    this.events();
  }

  init() {
    this.items[0].classList.add('is-open');

    this.items.forEach((item, i) => {
      if (item.classList.contains('is-open')) {
        this.contents[i].style.maxHeight = this.contents[i].scrollHeight + 'px';
        this.controls[i].setAttribute('aria-expanded', 'true');
        this.contents[i].setAttribute('aria-hidden', 'false');
      } else {
        this.controls[i].setAttribute('aria-expanded', 'false');
        this.contents[i].setAttribute('aria-hidden', 'true');
        this.contents[i].style.maxHeight = null;
      }
    });
  }

  events() {
    this.items.forEach((item, i) => {
      item.addEventListener('click', () => {
        if (item.classList.contains('is-open')) {
          this.close();
        } else {
          this.change();
          let speed = this.accordion.dataset.accordionSpeed;

          this.speed = speed ? +speed : 400;

          this.open(i);
        }
      });
    });
  }

  open(i) {
    this.accordion.style.setProperty('--transition-time', `${this.speed / 1000}s`);
    this.items[i].classList.add('is-open');
    this.contents[i].setAttribute('aria-hidden', 'false');
    this.controls[i].setAttribute('aria-expanded', 'true');
  }

  change() {
    this.items.forEach((item) => {
      item.classList.remove('is-open');
      this.contents.forEach((content) => {
        content.style.maxHeight = null;
        content.setAttribute('aria-hidden', 'true');
      });
      this.controls.forEach((control) => {
        control.setAttribute('aria-expanded', 'false');
      });
    });
  }

  close() {
    this.items.forEach((item, i) => {
      item.classList.remove('is-open');
      this.contents[i].style.maxHeight = null;
      this.contents[i].setAttribute('aria-hidden', 'true');
      this.controls[i].setAttribute('aria-expanded', 'false');
    });
  }
}

export default Accordion;