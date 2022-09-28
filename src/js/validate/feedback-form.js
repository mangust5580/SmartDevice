import JustValidate from "just-validate";

export const feedbackForm = (formClassName) => {
  if (document.querySelector('.feedback-form')) {
    const form = document.querySelector(formClassName,);
    const telSelector = form.querySelector('input[type="tel"]');

    const validation = new JustValidate(form, {
      errorLabelStyle: {
        errorFieldCssClass: "is-invalid",
        errorLabelCssClass: "is-label-invalid",
        color: "#a80000",
      },
    });

    validation
      .addField(".js-input-name", [
        {
          rule: "minLength",
          value: 3,
          errorMessage: "Не менее 3 символов",
        },
        {
          rule: "maxLength",
          value: 30,
          errorMessage: "Не более 30 символов",
        },
        {
          rule: "required",
          value: true,
          errorMessage: "Введите имя",
        },
      ])
      .addField(".js-input-question", [
        {
          rule: "minLength",
          value: 10,
          errorMessage: "Не менее 10 символов",
        },
        {
          rule: "maxLength",
          value: 200,
          errorMessage: "Не более 200 символов",
        },
        {
          rule: "required",
          value: true,
          errorMessage: "Введите вопрос",
        },
      ])
      .addField(".js-checkbox-agreement", [
        {
          rule: "required",
          value: true,
          errorMessage: "Примите соглашение",
        },
      ])
      .addField(".js-input-tel", [
        {
          rule: "required",
          value: true,
          errorMessage: "Телефон обязателен",
        },
        {
          validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Boolean(+phone) && phone.length === 10;
          },
          errorMessage: "Введите корректный телефон",
        },
      ])
      .onSuccess((event) => {
        console.log("Validation passes and form submitted", event);

        let formData = new FormData(event.target);

        console.log(...formData);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log("Отправлено");
            }
          }
        };

        xhr.open("POST", "mail.php", true);
        xhr.send(formData);

        event.target.reset();
      });
  }
};