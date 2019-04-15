const express = require('express');
const router = express.Router();


const app = express()

const BookController = require('../controllers/book')
const AuthorController = require('../controllers/author')
const  UserController = require('../controllers/user')
const BorrowingController = require('../controllers/borrow')
const CategoryController = require('../controllers/category')
const RulesController = require('../controllers/rules')

//Routes for Rules
router.get('/api/rules',(req,res)=>{
    res.json(RulesController.getRules());
}); 

router.get('/api/rules/:id',(req,res)=>{
    res.json(RulesController.getRule());
});

router.post('/api/rules',(req,res)=>{
    res.json(RulesController.createRules());
});

router.put('/api/rules/:id',(req,res)=>{
    res.json(RulesController.updateRules());
});

router.delete('/api/rules/:id',(req,res)=>{
    res.json(RulesController.deleteRule());
});

router.patch('/api/rules/:id',(req,res)=>{
    res.json(RulesController.patchRule());
});



//Routes for categories
router.get('/api/categories',(req,res)=>{
    res.json(CategoryController.getCategories());
}); 

router.get('/api/categories/:id',(req,res)=>{
    res.json(CategoryController.getCategory());
});

router.post('/api/categories',(req,res)=>{
    res.json(CategoryController.createCategory());
});

router.put('/api/categories/:id',(req,res)=>{
    res.json(CategoryController.updateCategory());
});

router.delete('/api/categories/:id',(req,res)=>{
    res.json(CategoryController.deleteCategory());
});

router.patch('/api/categories/:id',(req,res)=>{
    res.json(CategoryController.patchCategory());
});




//Routes for borrowers
router.get('/api/borrowers',(req,res)=>{
    res.json(BorrowingController.getBorrowers());
}); 

router.get('/api/borrowers/:id',(req,res)=>{
    res.json(BorrowingController.getBorrower());
});

router.post('/api/borrowers',(req,res)=>{
    res.json(BorrowingController.createBorrower());
});

router.put('/api/borrowers/:id',(req,res)=>{
    res.json(BorrowingController.updateBorrow());
});

router.delete('/api/borrowers/:id',(req,res)=>{
    res.json(BorrowingController.deleteBorrow());
});

router.patch('/api/borrowers/:id',(req,res)=>{
    res.json(BorrowingController.patchBorrower());
});




//Routes for users
router.get('/api/users',(req,res)=>{
    res.json(UserController.getUsers());
});

router.get('/api/users/:id',(req,res)=>{
    res.json(UserController.getUser());
});

router.post('/api/users',(req,res)=>{
    res.json(UserController.createUser());
});

router.put('/api/users/:id',(req,res)=>{
    res.json(UserController.updateUser());
});

router.delete('/api/users/:id',(req,res)=>{
    res.json(UserController.deleteUser());
});

router.patch('/api/users/:id',(req,res)=>{
    res.json(UserController.patchUser());
});


//Routes for Authors
router.get('/api/authors',(req,res)=>{
    res.json(AuthorController.getAuthors())
});

router.get('/api/authors/:id',(req,res)=>{
    res.json(AuthorController.getAuthor())
});

router.post('/api/authors',(req,res)=>{
    res.json(AuthorController.createAuthor())
});

router.put('/api/authors/:id',(req,res)=>{
    res.json(AuthorController.updateAuthor())
});

router.delete('/api/authors/:id',(req,res)=>{
    res.json(AuthorController.deleteAuthor())
});

router.patch('/api/authors/:id',(req,res)=>{
    res.json(AuthorController.patchAuthor())
});



//Routes for Books
router.get('/api/books',(req,res)=>{
    res.json(BookController.getBooks())
});

router.get('/api/books/:id',(req,res)=>{
    res.json(BookController.getBook())
});

// router.get('/api/books/:id',(req,res) =>{
//     console.log('ID'+ req.query.id);
//     res.json(BookController.getBook())
// })

router.post('/api/books',(req,res)=>{
    res.json(BookController.createBook())
});

router.put('/api/books/:id',(req,res) =>{
    res.json(BookController.updateBook())
});

router.delete('/api/books/:id',(req,res) =>{
    res.json(BookController.deleteBook())
});

router.patch('/api/books/:id',(req,res) =>{
    res.json(BookController.patchBook())
});









module.exports= router;



