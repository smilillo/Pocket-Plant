// const fetch = require('node-fetch');
const api_key_trefile = 'cbwakGNwU0TEpsliY_x3nHAE00zbMxyRrjI6WEupJ_M';
const fetch = require('node-fetch');
// const plantName = "rose";

const url = `https://perenual.com/api/species-list?page=1&key=sk-o6oE64544d003e774763`
// console.log(url)

(async () => {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
})();
