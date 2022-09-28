import { feedbackForm } from "../validate/feedback-form.js";

export const validate = () => {
  feedbackForm(".js-form");
  feedbackForm(".js-form-modal");
};