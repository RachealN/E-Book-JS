const userArray= [
    {
        userId:1,
        firstName:"Namaara",
        lastName:"Racheal",
        userName:"RachealN",
        address:" Kampala",
        phoneNumber:"0774625424",
        email:"racheal@gmail.com",
        
            
    },
    
    {
        userId:2,
        firstName:"Ayebare",
        lastName:"Amos",
        userName:"AmosK",
        address:"jinja",
        phoneNumber:"0774625424",
        email:"amos@gmail.com",
    },
    
    {
        userId:3,
        firstName:"Ampaire",
        lastName:"Effie",
        userName:"AmpEffie",
        address:" Mbarara",
        phoneNumber:"0774625424",
        email:"effie@gmail.com",
    }
    ]
    
    class Users{
        constructor({
            userId,
            firstName,
            lastName,
            userName,
            address,
            phoneNumber,
            email
            
    
        }){
            this.userId = userId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.userName = userName;
            this.address = address;
            this.phoneNumber = phoneNumber,
            this.email = email

        }
    
        
    }
    

module.exports = {Users,userArray};

    
    
    