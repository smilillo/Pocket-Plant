const api_key = "kMBcX5xIQqr9HRUaaYewfZWLOmkvuaFViHli9FjE";
const plantName = "rose";

const url = `https://plantsdb.xyz/search?limit=1&offset=0&common_name=${plantName}&token=${api_key}`;
console.log(url)

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Scientific Name: ", data[0].scientific_name);
    console.log("Common Name: ", data[0].common_name);
    console.log("Growth Requirements: ", data[0].growth_habit);
  })
  .catch(error => console.error(error));