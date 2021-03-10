// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = 0;
  let result = books.forEach((book) => {
    if (book.borrows.some((borrower) => borrower.returned === false)) {
      borrowedBooks ++
      }
    })
  return borrowedBooks
}

function getMostCommonGenres(books) {
  let map = {};
  books.forEach(num => { if (map[num.genre]) { map[num.genre]++; } else { map[num.genre] = 1; } });
  return Object.entries(map).map(([name, count]) => { return { name, count } }).sort((a,b)=> b.count - a.count).slice(0, 5) 
}

function getMostPopularBooks(books) {
  let map = {};
  books.forEach(book => {
    map[book.title] = book.borrows.length
  })
  return Object.entries(map).map(([name, count]) => {return { name, count} }).sort((a,b) => b.count - a.count).slice(0,5)
}

  function getMostPopularAuthors(books, authors) {
    let returnArr = [];
     authors.forEach(author => {
       returnArr.push({name: author.name.first + " " + author.name.last, count : 0 , id: author.id})
     })
     
     books.forEach((book) => {
       let foundAuthor = returnArr.find((author) => {return author.id === book.authorId} );
       foundAuthor.count += book.borrows.length;
     })
   
   return returnArr.sort((authorA, authorB) => authorB.count - authorA.count).slice(0,5).map(({id, ...rest}) => rest)
   }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
