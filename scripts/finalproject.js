document.getElementById('searchButton').addEventListener('click', function() {
    const searchText = document.getElementById('searchInput').value;
    fetchBooks(searchText);
});

function fetchBooks(query) {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayBooks(data))
        .catch(error => console.error('Error:', error));
}

function displayBooks(data) {
    const results = document.getElementById('results');
    results.innerHTML = ''; 
    data.items.forEach(book => {
        const title = book.volumeInfo.title;
        const authors = book.volumeInfo.authors.join(', ');
        const description = book.volumeInfo.description;
        const bookHtml = `<div class="book">
            <h3>${title}</h3>
            <p>${authors}</p>
            <p>${description}</p>
        </div>`;
        results.innerHTML += bookHtml;
    });
}
