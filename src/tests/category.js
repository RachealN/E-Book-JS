const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../server');

const should = chai.should();
const { expect } = chai.expect;

chai.use(chaiHttp);



describe(' get all categories', () => {
	it('should return all categories', () => {
	  chai.request(server)
		.get('/api/v1/categories')
		.end((err, res) => {
		  chai.expect(res.body).to.be.a('object');
		});
	});
  });


  describe(' create new category', () => {
	it('new category should be created', () => {
	  chai.request(server)
		.post('/api/v1/categories')
		.end((err, res) => {
		  chai.expect(res.body).to.be.a('object');
		});
	});
  });

  describe(' get one specific categories', () => {
	it('one categories retrieved ', () => {
	  chai.request(server)
		.get('/api/v1/categories/:id')
		.end((err, res) => {
		  chai.expect(res.body).to.be.a('object');
		});
	});
  });
	
	describe('if category not found', () => {
	it('should return error', () => {
	  chai.request(server)
		.get('/api/v1/categories/:id')
		.end((err, res) => {
		  chai.expect(res.statusCode).to.be.equal(404);
		});
	});
  });
	
	describe('delete category', () => {
	it('category will be deleted', () => {
	  chai.request(server)
		.delete('/api/v1/categories/:id')
		.end((err, res) => {
		  chai.expect(res.statusCode).to.be.equal(200);
		});
	});
  });
  
  
  



 