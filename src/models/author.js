const authorArray= [
    {
        authorId:1,
        firstName:"Namara",
        lastName:" Racheal",
        address:"Kampala",
        phoneNumber:"0774625424"
            
    },
    
    {
        authorId:2,
        firstName:"Ayebare",
        lastName:" Amos",
        address:"Jinja",
        phoneNumber:"0774625424"
    },
    {
        authorId:3,
        firstName:"Ampaire",
        lastName:" Effie",
        address:"Mbarara",
        phoneNumber:"0774625424"
    }
    ]
    
    class Authors{
        constructor({
            authorId,
            firstName,
            lastName,
            address,
            phoneNumber
            
    
        }){
            this.authorId = authorId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.address = address;
            this.phoneNumber = phoneNumber

        }
    
        
    }
    

module.exports = {Authors,authorArray};

    
    
    