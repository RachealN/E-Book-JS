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
    res.json(RulesController.getRule(req));
});


// router.get('/api/rules/:id',(req,res)=>{
//     console.log('rulesId' + req.query.id);
//         res.json(RulesController.getRule(req,res));
// });


router.post('/api/rules',(req,res)=>{
    res.json(RulesController.createRules(req));
});

router.put('/api/rules/:id',(req,res)=>{
    res.json(RulesController.updateRules(req));
});

router.delete('/api/rules/:id',(req,res)=>{
    res.json(RulesController.deleteRule(req));
});

router.patch('/api/rules/:id',(req,res)=>{
    res.json(RulesController.patchRule(req));
});



//Routes for categories
router.get('/api/categories',(req,res)=>{
    res.json(CategoryController.getCategories(req));
}); 

router.get('/api/categories/:id',(req,res)=>{
    res.json(CategoryController.getCategory(req));
});

router.post('/api/categories',(req,res)=>{
    res.json(CategoryController.createCategory(req));
});

router.put('/api/categories/:id',(req,res)=>{
    res.json(CategoryController.updateCategory(req));
});

router.delete('/api/categories/:id',(req,res)=>{
    res.json(CategoryController.deleteCategory(req));
});

router.patch('/api/categories/:id',(req,res)=>{
    res.json(CategoryController.patchCategory(req));
});




//Routes for borrowers
router.get('/api/borrowers',(req,res)=>{
    res.json(BorrowingController.getBorrowers(req));
}); 

router.get('/api/borrowers/:id',(req,res)=>{
    res.json(BorrowingController.getBorrower(req));
});

router.post('/api/borrowers',(req,res)=>{
    res.json(BorrowingController.createBorrower(req));
});

router.put('/api/borrowers/:id',(req,res)=>{
    res.json(BorrowingController.updateBorrow(req));
});

router.delete('/api/borrowers/:id',(req,res)=>{
    res.json(BorrowingController.deleteBorrow(req));
});

router.patch('/api/borrowers/:id',(req,res)=>{
    res.json(BorrowingController.patchBorrower(req));
});




//Routes for users
router.get('/api/users',(req,res)=>{
    res.json(UserController.getUsers(req));
});

router.get('/api/users/:id',(req,res)=>{
    res.json(UserController.getUser(req));
});

router.post('/api/users',(req,res)=>{
    res.json(UserController.createUser(req));
});

router.put('/api/users/:id',(req,res)=>{
    res.json(UserController.updateUser(req));
});

router.delete('/api/users/:id',(req,res)=>{
    res.json(UserController.deleteUser(req));
});

router.patch('/api/users/:id',(req,res)=>{
    res.json(UserController.patchUser(req));
});


//Routes for Authors
router.get('/api/authors',(req,res)=>{
    res.json(AuthorController.getAuthors())
});

router.get('/api/authors/:id',(req,res)=>{
    res.json(AuthorController.getAuthor(req))
});

router.post('/api/authors',(req,res)=>{
    res.json(AuthorController.createAuthor(req))
});

router.put('/api/authors/:id',(req,res)=>{
    res.json(AuthorController.updateAuthor(req))
});

router.delete('/api/authors/:id',(req,res)=>{
    res.json(AuthorController.deleteAuthor(req))
});

router.patch('/api/authors/:id',(req,res)=>{
    res.json(AuthorController.patchAuthor(req))
});



//Routes for Books
router.get('/api/books',(req,res)=>{
    res.json(BookController.getBooks())
});

router.get('/api/books/:id',(req,res)=>{
    res.json(BookController.getBook(req))
});

// router.get('/api/rules/:id',(req,res)=>{
//     console.log('rulesId' + req.query.rulesId);
//     res.json(RulesController.getRule(req,res));
//     });



router.post('/api/books',(req,res)=>{
    res.json(BookController.createBook(req))
});

router.put('/api/books/:id',(req,res) =>{
    res.json(BookController.updateBook(req))
});

router.delete('/api/books/:id',(req,res) =>{
    res.json(BookController.deleteBook(req))
});

router.patch('/api/books/:id',(req,res) =>{
    res.json(BookController.patchBook(req))
});









module.exports= router;



