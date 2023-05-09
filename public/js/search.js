const searchResults = async (event) => {
    event.preventDefault();
    const plant = document.querySelector('#search').value.trim();
    document.location.replace(`/search?plant=${plant}`)
}

document.querySelector('.searchBTN').addEventListener('click', searchResults);