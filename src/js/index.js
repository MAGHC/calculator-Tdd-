const $ = (selector) => document.querySelector(selector);

const OPERATORS = ['/', '+', '-', 'X', '='];

function App() {
  const $digits = $('.digits');
  const $total = $('#total');
  const $operations = $('.operations');
  const $acBtn = $('.modifier');

  const handleClick = (e, contains) => {
    if (!e.target.classList.contains(contains)) {
      return;
    }
  };

  const handleDigitClick = (e, contains) => {
    handleClick(e, contains);

    const currentTotal = $total.innerText;
    const newDigit = e.target.innerText;

    if (currentTotal.length > 3) {
      const operator = currentTotal.slice(3, 4);
      const splitedArr = currentTotal.split(operator);
      if (splitedArr[1].length < 3) {
        $total.innerText += newDigit;
      }
    }

    if (typeof +currentTotal === 'number' && currentTotal.length < 3) {
      currentTotal === '0' ? ($total.innerText = newDigit) : ($total.innerText += newDigit);
    }
  };

  const handleOperationClick = (e, contains) => {
    handleClick(e, contains);

    const newOperator = e.target.innerText;

    const currentTotalValue = $total.innerText;
    let convertedArr = currentTotalValue.split('');

    const isExistOperator = OPERATORS.some((_) => convertedArr.slice(-1).includes(_));

    const newTotal = [...(currentTotalValue.slice(0, -1) + newOperator)].join('');

    isExistOperator ? ($total.innerText = newTotal) : ($total.innerText += newOperator);

    if (newOperator === '=') {
      const operator = currentTotalValue.slice(3, 4);
      const splitedArr = currentTotalValue.split(operator);

      switch (operator) {
        case '+':
          $total.innerText = +splitedArr[0] + +splitedArr[1];
          return;
        case '-':
          $total.innerText = +splitedArr[0] - +splitedArr[1];
          return;
        case 'X':
          $total.innerText = +splitedArr[0] * +splitedArr[1];
          return;
        case '/':
          $total.innerText = Math.floor(+splitedArr[0] / +splitedArr[1]);
          return;
      }
    }
  };

  $digits.addEventListener('click', (e) => handleDigitClick(e, 'digit'));
  $operations.addEventListener('click', (e) => handleOperationClick(e, 'operation'));
  $acBtn.addEventListener('click', () => {
    $total.innerText = 0;
  });
}

App();
