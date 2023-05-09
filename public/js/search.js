const searchResults = async (event) => {
    event.preventDefault();
    const plant = document.querySelector('#search').value.trim();
    document.location.replace(`/search?plant=${plant}`)
}

// const detailsPage = async (event) => {
//     event.preventDefault();
//     const id = document.querySelector('.picRes').id;
//     document.location.replace(`/search/${id}`)
// }

document.querySelector('.searchBTN').addEventListener('click', searchResults);
// document.querySelector('.picRes').addEventListener('click', detailsPage);