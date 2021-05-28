const $contactsBtn = document.querySelector(".page-header__contacts-btn");
const $modal = document.querySelector(".modal");
const $modalCloseBtn = document.querySelector(".modal__header-btn-close");
const $modalName = document.querySelector(".modal__value--name");
const $modalTel = document.querySelector(".modal__value--tel");
const $modalQuestion = document.querySelector(".modal__question");
const $phoneMask = document.querySelector("#phone-mask");
const $modalPhoneMask = document.querySelector("#modal-phone-mask");
const $modalOverlay = document.querySelector(".modal__overlay");

const storageName = localStorage.getItem("name");
const storageTel = localStorage.getItem("tel");
const storageQuestion = localStorage.getItem("question ");

const modalShowFunction = (event) => {
  event.preventDefault();
  $modal.classList.toggle("modal-show");
  $modalOverlay.classList.toggle("modal__overlay-show");
  $modalName.focus();
  if (storageName) {
    $modalName.value = storageName;
  }
  else if (storageTel) {
    $modalTel.value = storageTel;
  }
  else if (storageQuestion) {
    $modalQuestion.value = storageQuestion;
  }
}

const modalCloseFunction = () => {
  $modal.classList.contains("modal-show");
  $modal.classList.remove("modal-show");
  $modalOverlay.classList.remove("modal__overlay-show");
}

const modalCloseEscFunction = (event) => {
  if (event.keyCode === 27) {
    if ($modal.classList.contains("modal-show")) {
      event.preventDefault();
      $modal.classList.remove("modal-show");
      $modalOverlay.classList.remove("modal__overlay-show");
    }
  }
}

const modalRemoveFunction = () => {
  $modal.classList.remove("modal-show");
  $modalOverlay.classList.remove("modal__overlay-show");
}

$contactsBtn.addEventListener("click", modalShowFunction);
$modalCloseBtn.addEventListener("click", modalCloseFunction);
window.addEventListener("keydown", modalCloseEscFunction);
$modalOverlay.addEventListener("click", modalRemoveFunction);

const phoneMask = IMask(
  $phoneMask, {
    mask: "+{7}(000)000-00-00"
  });

const modalPhoneMask = IMask(
  $modalPhoneMask, {
    mask: "+{7}(000)000-00-00"
  });
