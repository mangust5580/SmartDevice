import { nav } from "./modules/nav.js";
import { inputMask } from "./modules/inputMask.js";
import { accordion } from "./modules/accordion.js";
import { modal } from "./modules/modal.js";
import { validate } from './modules/validate.js';
import { promo } from './modules/promo.js';
import { scroll } from './modules/scroll.js';

window.addEventListener("DOMContentLoaded", () => {
  nav();
  promo();
  modal();
  inputMask();
  validate();
  accordion();
  scroll();
});