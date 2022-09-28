import vars from '../_variables.js';

export const disableScroll = () => {
  const fixBlocks = document.querySelectorAll('.fixed-block');
  let pagePosition = window.scrollY;
  let paddingOffset = `${(window.innerWidth - vars.body.offsetWidth)}px`;

  document.documentElement.style.scrollBehavior = 'none';

  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  });

  vars.body.style.paddingRight = paddingOffset;
  vars.body.classList.add('disable-scroll');
  vars.body.dataset.position = pagePosition;
  vars.body.style.top = `-${pagePosition}px`;
}