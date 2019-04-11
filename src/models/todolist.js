const todolistArray= [
    {
        id:1,
        createdOn:"jan/4/2019",
        newtodo:"learning js",
        // parentTodolistId:"1234",
        status:"pending"
    },
    
    {
        id:1,
        createdOn:"jan/5/2019",
        newtodo:"cooking",
        // parentTodolistId:"1235",
        status:"done"
    }
    ]
    
    class Todolist{
        constructor({
            id,
            createdOn,
            newtodo,
            // parentTodolistId,
            status,
            
    
        }){
            this.id = id;
            this.createdOn=createdOn;
            this.newtodo = newtodo;
            // this.parentTodolistId = parentTodolistId;
            this.status=status
        }
    
        
    }
    
    export {Todolist,todolistArray};
    
    
    