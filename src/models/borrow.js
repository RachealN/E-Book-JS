const borrowArray= [
    {
        borrowingId:1,
        date_issued:"9/6/2018",
        date_due_for_return:"8/12/2018",
        date_returned:"2/1/2019",
        amount_of_fine:"$100"
        
        
            
    },
    
    {
        borrowingId:3,
        date_issued:"9/6/2018",
        date_due_for_return:"8/12/2018",
        date_returned:"2/1/2019",
        amount_of_fine:"$200"
    },
    
    {
        borrowingId:3,
        date_issued:"9/6/2018",
        date_due_for_return:"8/12/2018",
        date_returned:"2/1/2019",
        amount_of_fine:"$150"
    }
    ]
    
    class Borrowers{
        constructor({
            borrowingId,
            date_issued,
            date_due_for_return,
            date_returned,
            amount_of_fine
            
    
        }){
            this.borrowingId = borrowingId;
            this.date_issued = date_issued;
            this.date_due_for_return = date_due_for_return;
            this.date_returned = date_returned;
            this.address = address;
            this.phoneNumber = phoneNumber,
            this.amount_of_fine = amount_of_fine

        }
    
        
    }
    

module.exports = {Borrowers,borrowArray};

    
    
    