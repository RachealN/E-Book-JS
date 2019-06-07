const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../server');

const should = chai.should();
const { expect } = chai.expect;

chai.use(chaiHttp);


const userCredentials = {
	email:'racheal@gmail.com',
	password:'admin'
}

const authToken = 'dcgcajhacsah'


describe('verifyToken',() =>{
    it('should authorize the user', () =>{
        chai.request(server)
        .get('')
        .send(authToken)
        .end((err,res) =>{
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body).to.be.an('object')
            
        });
    });
});



describe('login user', () =>{
	it('it should login  a user', () =>{
		chai.request(server)
		.post('/api/auth/login')
		.send(userCredentials)
		.end((err,res) =>{
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body).to.be.an('object');
		});
		
	});
});

describe('register a user',() =>{
	it('should sign up user with valid credentials',() =>{
		chai.request(server)
		.post('/api/auth/register')
		.send({
			firstName:"Namaara",
			lastName:"Racheal",
			email:"racheal@gmail.com",
			password:"admin",
			username:"RachealN",
			address:"Kampala",
			phoneNumber:"0777534463"


		})
		.end((err,res) =>{
			chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.body).to.have.an('array');
           
			
		});
	});
});

describe(' get all user', () => {
    	it('should return all users', () => {
    	  chai.request(server)
    		.get('/api/users')
    		.end((err, res) => {
              chai.expect(res.body).to.be.a('object');
              chai.expect(res.statusCode).to.be.equal(200);
    		});
    	});
      });

describe(' get a single user', () => {
    	it('should return a single user', () => {
    	  chai.request(server)
    		.get('/api/users/:id')
    		.end((err, res) => {
              chai.expect(res.body).to.be.a('object');
              chai.expect(res.statusCode).to.be.equal(200);
    		});
    	});
      });


describe(' create a new user', () => {
    	it('should return new user created', () => {
    	  chai.request(server)
    		.post('/api/users')
    		.end((err, res) => {
              chai.expect(res.body).to.be.a('object');
              chai.expect(res.statusCode).to.be.equal(201);
    		});
    	});
      });


describe(' delete a user', () => {
    	it('should return deleted user', () => {
    	  chai.request(server)
    		.get('/api/users:/id')
    		.end((err, res) => {
              chai.expect(res.body).to.be.a('object');
            //   chai.expect(res.statusCode).to.be.equal(200);
    		});
    	});
      });

describe(' update a user', () => {
    	it('should return updated user', () => {
    	  chai.request(server)
    		.get('/api/users/:id')
    		.end((err, res) => {
              chai.expect(res.body).to.be.a('object');
            //   chai.expect(res.statusCode).to.be.equal(201);
    		});
    	});
      });

