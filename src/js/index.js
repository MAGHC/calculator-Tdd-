const $ = (selector) => document.querySelector(selector);

function App() {
  const $digits = $('.digits');
  const $total = $('#total');

  const handleDigitClick = (e) => {
    if (!e.target.classList.contains('digit')) {
      return;
    }

    const currentTotal = $total.innerText;
    const newDigit = e.target.innerText;

    currentTotal === '0' ? ($total.innerText = newDigit) : ($total.innerText += newDigit);
  };

  $digits.addEventListener('click', handleDigitClick);
}

App();
