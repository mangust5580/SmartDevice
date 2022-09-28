import vars from '../_variables.js';

export const enableScroll = () => {
  const fixBlocks = document.querySelectorAll('.fixed-block');
  let pagePosition = parseInt(vars.body.dataset.position, 10);

  fixBlocks.forEach((el) => {
    el.style.paddingRight = '0px';
  });
  vars.body.style.paddingRight = '0px';

  vars.body.style.top = 'auto';
  vars.body.classList.remove('disable-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  vars.body.removeAttribute('data-position');
  vars.html.style.scrollBehavior = 'smooth';
}