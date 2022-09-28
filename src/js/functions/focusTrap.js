import vars from '../_variables.js';

export const focusTrap = (el) => {
  const focusElements = vars.focusElements;
  const focusable = el.querySelectorAll(focusElements);

  setTimeout(() => {
    focusable[0].focus();
  }, 100);


}

