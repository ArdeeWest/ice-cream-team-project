(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modalka-open]'),
    closeModalBtn: document.querySelector('[data-modalka-close]'),
    modal: document.querySelector('[data-modalka]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();