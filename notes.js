// const fetch = require('node-fetch');
const api_key_trefile = 'cbwakGNwU0TEpsliY_x3nHAE00zbMxyRrjI6WEupJ_M';
const fetch = require('node-fetch');
// const plantName = "rose";

const url = `https://perenual.com/api/species-list?page=1&key=sk-o6oE64544d003e774763`
// console.log(url)

// fetch(url,{
//   'headers':{
//     "Access-Control-Allow-Origin": "*",
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     }
// })
// .then(response => {
//   console.log(response)
//   response.json()
// })
//   .then(data => {
//     console.log(data)
//     console.log("Scientific Name: ", data[0].scientific_name);
//     console.log("Common Name: ", data[0].common_name);
//     console.log("Growth Requirements: ", data[0].growth_habit);
//   })
// .catch(error => console.error(error));
//   // cors installed 

// (async () => {
//   const response = await fetch(url);
//   const json = await response.json();
//   console.log(json);
// })();
// import fetch from 'node-fetch';

(async () => {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
})();
