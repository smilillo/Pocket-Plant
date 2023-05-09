const searchResults = async (event) => {
    event.preventDefault();
    const plant = document.querySelector('#search').value.trim();
    // console.log('plant in search.js: ', plant)
    document.location.replace(`/search?plant=${plant}`)
}

document.querySelector('.searchBTN').addEventListener('click', searchResults);