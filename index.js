function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => getPosts(json));
}

function renderBooks(json) {
  const main = document.querySelector('.main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

function getPosts(json) {
  renderBooks(json)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
