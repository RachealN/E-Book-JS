const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../server');

const should = chai.should();
const { expect } = chai.expect;

chai.use(chaiHttp);


describe(' get all borrowers', () => {
	it('should return all borrowers', () => {
	  chai.request(server)
		.get('/api/v1/borrowers')
		.end((err, res) => {
		  chai.expect(res.body).to.be.a('object');
		});
	});
  });


  describe(' create new borrower', () => {
	it('new borrower should be created', () => {
	  chai.request(server)
		.post('/api/v1/borrowers')
		.end((err, res) => {
		  chai.expect(res.body).to.be.a('object');
		});
	});
  });

  describe(' get one specific borrower', () => {
	it('one borrower retrieved ', () => {
	  chai.request(server)
		.get('/api/v1/borrowers/:id')
		.end((err, res) => {
		  chai.expect(res.body).to.be.a('object');
		});
	});
  });
	
	describe('if borrower not found', () => {
	it('should return error', () => {
	  chai.request(server)
		.get('/api/v1/borrowers/:id')
		.end((err, res) => {
		  chai.expect(res.statusCode).to.be.equal(404);
		});
	});
  });
	
	describe('delete borrowers', () => {
	it('borrowers will be deleted', () => {
	  chai.request(server)
		.delete('/api/v1/borrowers/:id')
		.end((err, res) => {
		  chai.expect(res.statusCode).to.be.equal(200);
		});
	});
  });
  
  
  
