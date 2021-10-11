(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-shop-open]'),
    closeModalBtn: document.querySelector('[data-modal-shop-close]'),
    modal: document.querySelector('[data-modal-shop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
