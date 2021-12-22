//https://www.cbr-xml-daily.ru/

//получить данные с сервера
async function getCurrencies() {
   const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
   const data = await response.json();

   const usdRate = data.Valute.USD.Value.toFixed(2);
   const eurRate = data.Valute.EUR.Value.toFixed(2);

   //показать на странице
   const usdEl = document.querySelector('#usd');
   const eurEl = document.querySelector('#eur');

   usdEl.innerText = usdRate;
   eurEl.innerText = eurRate;
}

getCurrencies();