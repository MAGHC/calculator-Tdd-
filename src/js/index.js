const $ = (selector) => document.querySelector(selector);

function App() {
  const $digits = $('.digits');
  const $total = $('#total');
  const $operations = $('.operations');

  const handleClick = (e, contains) => {
    if (!e.target.classList.contains('digit')) {
      return;
    }
  };

  const handleDigitClick = (e, contains) => {
    handleClick(e, contains);

    const currentTotal = $total.innerText;
    const newDigit = e.target.innerText;

    currentTotal === '0' ? ($total.innerText = newDigit) : ($total.innerText += newDigit);
  };

  const handleOperationClick = (e, contains) => {
    handleClick(e, contains);

    const newOperator = e.target.innerText;

    $total.innerText += newOperator;
  };

  $digits.addEventListener('click', (e) => handleDigitClick(e, 'digit'));
  $operations.addEventListener('click', (e) => handleOperationClick(e, 'operation'));
}

App();
