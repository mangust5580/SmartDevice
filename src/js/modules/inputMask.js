export const inputMask = () => {
  let inputsTel = document.querySelectorAll('input[type="tel"]');
  let inputMaskTel = new Inputmask('+7 (999) 999-99-99');

	inputMaskTel.mask(inputsTel);
};
