const searchResults = async (event) => {
    event.preventDefault();
    const plant = document.querySelector('#search').value.trim();
    document.location.replace(`/search?plant=${plant}`)
    // fetch(`/search?plant=${plant}`,{
    //     method: 'GET'
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
}

document.querySelector('.searchBTN').addEventListener('click', searchResults);
