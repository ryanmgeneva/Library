// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let result = authors.find((author) => author.id === id);
  return result;
}

function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  let arrayFalse = []
  let arrayTrue = []
  let masterArray = [arrayFalse, arrayTrue]
  let result = books.forEach((book) => book.borrows.some((borrower) => borrower.returned === false) ? arrayFalse.push(book) : arrayTrue.push(book))
  return masterArray
}

function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map((borrower) => {
    let account = accounts.find((account) => account.id === borrower.id)
  
    return {...borrower, ...account}
})
  return result.slice(0,10)
  }


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
