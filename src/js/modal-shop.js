(() => {
  document.addEventListener('DOMContentLoaded', function () {
    const refs = {
      openModalBtnList: document.querySelectorAll('[data-modal-shop-open]'),
      closeModalBtn: document.querySelector('[data-modal-shop-close]'),
      modal: document.querySelector('[data-modal-shop]'),
    };

    for (i = 0; i < refs.openModalBtnList.length; i++) {
      refs.openModalBtnList[i].addEventListener('click', function () {
        document.querySelector('[data-modal-shop]').classList.toggle('is-hidden');
      });
    }

    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  });
})();
