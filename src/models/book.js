const bookArray= [
    {
        bookId:1,
        title:"Node js",
        isbn:" 978-1-5138-2707-6",
        description:"Introduction to Node Js",
        date_of_publication:"1/8/2008",
        edition:"5th edition",
        author:"Racheal",
        price:"$500",
        status:"available"
        
    },
    
    {
        bookId:2,
        title:"React Js",
        isbn:" 978-1-6879-2707-6",
        description:"Introduction to React js",
        date_of_publication:"20/3/2006",
        edition:"10th edition",
        author:"Racheal",
        price:"$400",
        status:" Not available"
    },
    {
        bookId:3,
        title:"Angular",
        isbn:" 978-1-3421-2707-6",
        description:"Introduction to Angular Js",
        date_of_publication:"9/5/2010",
        edition:"7th edition",
        author:"Racheal",
        price:"$900",
        status:"available"
    }
    ]
    
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

    
    
    