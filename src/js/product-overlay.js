(() => {
  {
  const refs = {
    IceCreamBtn: document.querySelector('[ice-cream-btn]'),
    IceCreamOverlay: document.querySelector('[ice-cream-overlay]'),
    IceCreamBtnRotate: document.querySelector('[ice-cream-btn-rotate]'),
  };

  refs.IceCreamBtn.addEventListener('click', toggleOverlay);

  function toggleOverlay() {
    refs.IceCreamOverlay.classList.toggle('overlay-shown');
    refs.IceCreamBtnRotate.classList.toggle('btn-icon-rotetion');
    }
  }

  {
    const refs = {
      IceCoffeBtn: document.querySelector('[ice-coffe-btn]'),
      IceCoffeeOverlay: document.querySelector('[ice-coffe-overlay]'),
      IceCoffeeBtnRotate: document.querySelector('[ice-coffe-btn-rotate]'),
    };

    refs.IceCoffeBtn.addEventListener('click', toggleOverlay);

    function toggleOverlay() {
      refs.IceCoffeeOverlay.classList.toggle('overlay-shown');
      refs.IceCoffeeBtnRotate.classList.toggle('btn-icon-rotetion');
    }
  }

  {
    const refs = {
      MilkshakeBtn: document.querySelector('[milkshake-btn]'),
      MilkshakeOverlay: document.querySelector('[milkshake-overlay]'),
      MilkshakeBtnRotate: document.querySelector('[milkshake-btn-rotate]'),
    };

    refs.MilkshakeBtn.addEventListener('click', toggleOverlay);

    function toggleOverlay() {
      refs.MilkshakeOverlay.classList.toggle('overlay-shown');
      refs.MilkshakeBtnRotate.classList.toggle('btn-icon-rotetion');
    }
  }
}
)();