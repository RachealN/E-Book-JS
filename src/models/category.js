const categoryArray= [
    {
        categoryId:1,
        categoryName:"Science and Technology"   
            
    },
    
    {
        categoryId:2,
        categoryName:"Programming"  
    },
    
    {
        categoryId:3,
        categoryName:"Art"  
    }
    ]
    
    class Categories{
        constructor({
            categoryId,
            categoryName
            
    
        }){
            this.categoryId = categoryId;
            this.categoryName = categoryName;

        }
    
        
    }
    

module.exports = {Categories,categoryArray};

    
    
    