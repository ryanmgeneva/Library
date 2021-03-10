// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let result = accounts.find((user) => user.id === id)
  return result
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((userA, userB) => userA.name.last.toLowerCase() > userB.name.last.toLowerCase() ? 1 : -1);
  return result
}

function getTotalNumberOfBorrows(account, books) {
  let borrowedTotal = 0;
    books.forEach((book) => {
      if (book.borrows.some((borrower) => {return (borrower.id === account.id)}) ) {
        borrowedTotal ++
      }
    })
    return borrowedTotal
}

function getBooksPossessedByAccount(account, books, authors) { 
  let takenBooks = [];
  books.forEach((book) => {
    if (book.borrows.some((borrower) => {return(borrower.id === account.id && borrower.returned === false)})) {
      takenBooks.push(book)
    }
  })
  let result = takenBooks.map((book) => {
    let foundAuthor = {author: authors.find((auth) => {
      return auth.id === book.authorId
      })}
    return {...book, ...foundAuthor}
    }
  )
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
