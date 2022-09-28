import Accordion from "../vendor/accordion.js";

export const accordion = () => {
  if (document.documentElement.clientWidth <= 576) {
    const accordionNav = new Accordion('nav-accordion');
  }
}
