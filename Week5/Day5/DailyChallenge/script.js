// Retrieve elements from the  DOM
const currency2_one = document.getElementById('currency-one');
const currency2_two = document.getElementById('currency-two');
const amount2_one = document.getElementById('amount-one');
const amount2_two = document.getElementById('amount-two');
const switcher = document.getElementById('switcher');
const switcher2 = document.getElementById('switch');

async function convert() {
  const currency_one = currency2_one.value;
  const currency_two = currency2_two.value;

  await fetch(`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currency_two];
      rate.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amount2_two.value = (amount2_one.value * rate).toFixed(2);
    });
}

// Event Listeners
amount2_two.addEventListener('input', convert);
amount2_one.addEventListener('input', convert);
currency2_two.addEventListener('change', convert);
currency2_one.addEventListener('change', convert);
switcher2.addEventListener('click', () => {
  const hi = currency2_one.value;
  currency2_one.value = currency2_two.value;
  currency2_two.value = hi;
  convert();
});

convert();