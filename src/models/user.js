const userArray= []
    
    class Users{
        constructor({
            userId,
            firstName,
            lastName,
            userName,
            address,
            phoneNumber,
            email,
            password,
            isAdmin
            
    
        }){
            this.userId = userId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.userName = userName;
            this.address = address;
            this.phoneNumber = phoneNumber,
            this.email = email,
            this.password = password,
            this.isAdmin = isAdmin

        }
    
        
    }
    

module.exports = {Users,userArray};

    
    
    