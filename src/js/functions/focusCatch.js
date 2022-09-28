import vars from '../_variables.js';

export const focusCatch = (e, el) => {
  const focusElements = vars.focusElements;

  const focusable = el.querySelectorAll(focusElements);
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