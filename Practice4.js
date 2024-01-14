
/*// Consider an array of objects representing books.
const books = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 224, genre: 'Fiction' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 336, genre: 'Fiction' },
  { title: '1984', author: 'George Orwell', pages: 328, genre: 'Dystopian Fiction' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180, genre: 'Fiction' },
  { title: 'Brave New World', author: 'Aldous Huxley', pages: 288, genre: 'Dystopian Fiction' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 310, genre: 'Fantasy' },
  { title: 'The Odyssey', author: 'Homer', pages: 384, genre: 'Epic Poetry' },
];

// Your task is to perform the following operations:

// 1. Use 'filter' to create an array of books written by authors with names starting with 'J'.
const jAuthorsBooks = /* Your code here ;

 2. Use 'map' to create an array of book titles with the number of pages appended in parentheses.
const bookTitlesWithPages =  Your code here 

 3. Use 'reduce' to find the total number of pages across all books.
const totalNumberOfPages =  Your code here 

// 4. Use 'forEach' to log each book's title and author to the console.
/* Your code here ;

// Print the results
console.log('Books by authors with names starting with \'J\':', jAuthorsBooks);
console.log('Book titles with pages:', bookTitlesWithPages);
console.log('Total number of pages across all books:', totalNumberOfPages);
*/
const books = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 224, genre: 'Fiction' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 336, genre: 'Fiction' },
  { title: '1984', author: 'George Orwell', pages: 328, genre: 'Dystopian Fiction' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180, genre: 'Fiction' },
  { title: 'Brave New World', author: 'Aldous Huxley', pages: 288, genre: 'Dystopian Fiction' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 310, genre: 'Fantasy' },
  { title: 'The Odyssey', author: 'Homer', pages: 384, genre: 'Epic Poetry' },
];

// 1. Use 'filter' to create an array of books written by authors with names starting with 'J'.
const jAuthorsBooks =books.filter((e)=>{
  return e.author[0]==='J';
});



/*Use 'map' to create an array of book titles with the number of pages appended in parentheses.*/
const bookTitlesWithPages =books.map((e)=>{
  return ` title:${e.title},  pages:${e.pages}`;

});

/*Use 'reduce' to find the total number of pages across all books.*/
const totalNumberOfPages =books.reduce(function reducer (acc,current){
            return acc+current.pages;
},0);


//Use 'forEach' to log each book's title and author to the console.
books.forEach((e)=>{
  console.log("Title:"+e.title+","+"Author:"+e.author);
})

