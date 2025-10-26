type Currency = "USD"|"EUR"|"UAH"

type Convert = {
   amount: number,
    currency: Currency,
}

function convertCurrency({amount, currency}:Convert): void {
  console.log(`Converting ${amount} to ${currency}`);
}

