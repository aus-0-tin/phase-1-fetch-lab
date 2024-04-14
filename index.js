// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
//     fetch("https://anapioficeandfire.com/api/books")
//     .then(res => {
//       return res.json();
//     })
//     .then(json => renderBooks(json));
// }

// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// });


function fetchBooks() {
  // Return the fetch promise
  return fetch("https://anapioficeandfire.com/api/books")
    .then(res => {
      // Check if the response status is OK (200-299 range)
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(json => renderBooks(json))
    .catch(error => {
      console.error('Error fetching books:', error);
      // Handle error or display a user-friendly message
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
