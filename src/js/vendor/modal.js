class Modal {
  constructor(options) {
    let defaultOptions = {
      isOpen: () => { },
      isClose: () => { },
      showByScroll: false,
      timer: false
    };
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.modal');
    this.speed = false;
    this.time = false;
    this.animation = false;
    this.options.isClose(this);
    this.isOpen = false;
    this.modalDialog = false;
    this.previousActiveElement = false;
    this.fixBlocks = document.querySelectorAll('.fixed-block');
    this.focusElements = ['a[href]', 'input', 'button', 'select', 'textarea', '[tabindex]'];
    this.isTimer = false;
    this.showByScroll = false;
    this.init();
    this.events();
  }

  init() {
    if (this.modal) {

      if (this.options.showByScroll) {
        this.showByScroll = true;
      }

      if (this.options.timer) {
        this.isTimer = true;
        this.timer();
      }
    }
  }

  events() {
    if (this.modal) {
      document.addEventListener(
        'click',
        function (e) {
          const clickedElement = e.target.closest('[data-modal-path]');
          if (clickedElement) {
            let target = clickedElement.dataset.modalPath;
            let animation = clickedElement.dataset.animation;
            let speed = clickedElement.dataset.modalSpeed;
            this.animation = animation ? animation : 'fade';
            this.speed = speed ? +speed : 400;
            this.modalDialog = document.querySelector(`[data-modal-target="${target}"]`);
            this.open();

            return;
          }

          if (e.target.closest('[data-modal-close')) {
            this.close();
            return;
          }
        }.bind(this),
      );

      window.addEventListener(
        'keydown',
        function (e) {
          switch (e.code) {
            case 'Escape':
              if (this.isOpen) {
                this.close();
              }
            case 'Tab':
              this.focusCatch(e);
              return;
            default:
              return;
          }
        }.bind(this),
      );

      if (this.showByScroll) {
        window.addEventListener('scroll', function () {
          this.modalDialog = document.querySelector('.js-modal-common');
          if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight && this.showByScroll) {
            this.open();
          }
        }.bind(this));
      }

      this.modal.addEventListener(
        'click',
        function (e) {
          if (!e.target.classList.contains('modal__dialog') && !e.target.closest('.modal__dialog') && this.isOpen) {
            this.close();
          }
        }.bind(this),
      );
    }
  }

  open() {
    this.previousActiveElement = document.activeElement;

    this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
    this.modal.classList.add('is-open');
    this.disableScroll();

    this.modalDialog.classList.add('modal-open');
    this.modalDialog.classList.add(this.animation);

    setTimeout(() => {
      this.modalDialog.classList.add('animate-open');
      this.options.isOpen(this);
      this.isOpen = true;
      this.focusTrap();
    }, this.speed);

    if (this.isTimer) {
      clearInterval(this.timerInterval);
    }
  }

  close() {
    if (this.modalDialog) {
      this.modalDialog.classList.remove('animate-open');
      this.modalDialog.classList.remove(this.animation);
      this.modal.classList.remove('is-open');
      this.modalDialog.classList.remove('modal-open');

      this.enableScroll();
      this.options.isClose(this);
      this.isOpen = false;
      this.showByScroll = false;
      this.focusTrap();
    }
  }

  disableScroll() {
    let pagePosition = window.scrollY;
    this.lockPadding();
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = `-${pagePosition}px`;
  }

  enableScroll() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    this.unlockPadding();
    document.body.style.top = '0';
    document.body.classList.remove('disable-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    document.body.removeAttribute('data-position');
  }

  lockPadding() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    this.fixBlocks.forEach((el) => {
      el.style.paddingRight = paddingOffset;
    });
    document.body.style.paddingRight = paddingOffset;
  }

  unlockPadding() {
    this.fixBlocks.forEach((el) => {
      el.style.paddingRight = '0';
    });
    document.body.style.paddingRight = '0';
  }

  focusCatch(e) {
    const focusable = this.modalDialog.querySelectorAll(this.focusElements);
    const focusArray = Array.prototype.slice.call(focusable);
    const focusedIndex = focusArray.indexOf(document.activeElement);

    if (e.ShiftLeft && focusedIndex === 0) {
      focusArray[focusArray.length - 1].focus();
      e.preventDefault();
    }

    if (!e.ShiftLeft && focusedIndex === focusArray.length - 1) {
      focusArray[0].focus();
      e.preventDefault();
    }
  }

  focusTrap() {
    const focusable = this.modalDialog.querySelectorAll(this.focusElements);
    if (this.isOpen) {
      if (focusable) focusable[0].focus();
    } else {
      this.previousActiveElement.focus();
    }
  }

  timer() {
    this.modalDialog = document.querySelector('.js-modal-common');

    let time = this.modalDialog.dataset.time;
    let speed = this.modalDialog.dataset.modalSpeed;

    this.time = time ? +time : 7000;
    this.speed = speed ? +speed : 300;

    this.timerInterval = setTimeout(() => {
      this.open();
    }, this.time);
  }
}

export default Modal;