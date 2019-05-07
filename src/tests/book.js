const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../server');

const should = chai.should();
const { expect } = chai.expect;

chai.use(chaiHttp);



describe(' get all books', () => {
	it('should return all books', () => {
	  chai.request(server)
		.get('/api/v1/books')
		.end((err, res) => {
		  chai.expect(res.body).to.be.a('object');
		});
	});
  });


  describe(' create new book', () => {
	it('new book should be created', () => {
	  chai.request(server)
		.post('/api/v1/books')
		.end((err, res) => {
		  chai.expect(res.body).to.be.a('object');
		});
	});
  });

  describe(' get one specific book', () => {
	it('one book retrieved ', () => {
	  chai.request(server)
		.get('/api/v1/books/:id')
		.end((err, res) => {
		  chai.expect(res.body).to.be.a('object');
		});
	});
  });
  describe('if book not found', () => {
	it('should return error', () => {
	  chai.request(server)
		.get('/api/v1/books/:id')
		.end((err, res) => {
		  chai.expect(res.statusCode).to.be.equal(200);
		});
	});
  });
  describe('delete book', () => {
	it('book will be deleted', () => {
	  chai.request(server)
		.delete('/api/v1/books/:id')
		.end((err, res) => {
		  chai.expect(res.statusCode).to.be.equal(200);
		});
	});
  });
  
  



 
