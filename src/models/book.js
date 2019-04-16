const bookArray = []
    
    class Books{
        constructor({
            bookId,
            title,
            isbn,
            description,
            date_of_publication,
            edition,
            price,
            status
            
    
        }){
            this.bookId = bookId;
            this.title = title;
            this.isbn = isbn;
            this.description = description;
            this.date_of_publication = date_of_publication,
            this.edition = edition,
            this.price = price,
            this.status = status

        }
    
        
    }
    

module.exports = {Books,bookArray};

    
    
    