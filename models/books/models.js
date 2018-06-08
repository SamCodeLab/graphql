const books = [
  {
    title: "FlatLand, a romance of many dimensions",
    author: "Edwin Abbott Abbott",
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
  }
]

class Books{ 
  get({id}){
    if(!id)
      throw "Id was not provided";
    return books[id];
  }

  getAll(){
    return books;
  }

  create({title, author}){
    books.push({
      title, author
    })
    return{
      title,
      author
    }
  }
}

module.exports = new Books();
