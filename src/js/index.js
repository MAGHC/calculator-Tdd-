const $ = (selector) => document.querySelector(selector);

function App() {
  const $digits = $('.digits');
  const $total = $('#total');

  const handleDigitClick = (e) => {
    if (e.target.classList.contains('digit')) {
      $total.innerText = e.target.innerText;
    }
  };

  $digits.addEventListener('click', handleDigitClick);
}

App();
