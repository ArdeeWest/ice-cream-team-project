(() => {
  {
  const refs = {
    IceCreamBtn: document.querySelector('[overlay-ice-cream-btn]'),
    IceCream: document.querySelector('[ice-cream]'),
  };

  refs.IceCreamBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.IceCream.classList.toggle('overlay-shown');
    }
  }

  {
    const refs = {
      IceCoffeBtn: document.querySelector('[overlay-ice-coffe-btn]'),
      iceCream: document.querySelector('[ice-coffe]'),
    };

    refs.IceCoffeBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
      refs.iceCream.classList.toggle('overlay-shown');
    }
  }

  {
    const refs = {
      MilkshakeBtn: document.querySelector('[overlay-milkshake-btn]'),
      Milkshake: document.querySelector('[milkshake]'),
    };

    refs.MilkshakeBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
      refs.Milkshake.classList.toggle('overlay-shown');
    }
  }
}
)();