const borrowArray = []
    
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

    
    
    