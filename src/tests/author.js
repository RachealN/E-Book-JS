const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../server');

const should = chai.should();
const { expect } = chai.expect;

chai.use(chaiHttp);



describe(' get all authors', () => {
	it('should return all authors', () => {
	  chai.request(server)
		.get('/api/v1/authors')
		.end((err, res) => {
		  chai.expect(res.body).to.be.a('object');
		});
	});
  });


  describe(' create new author', () => {
	it('new author should be created', () => {
	  chai.request(server)
		.post('/api/v1/authors')
		.end((err, res) => {
		  chai.expect(res.body).to.be.a('object');
		});
	});
  });

  describe(' get one specific authors', () => {
	it('one author retrieved ', () => {
	  chai.request(server)
		.get('/api/v1/authors/:id')
		.end((err, res) => {
		  chai.expect(res.body).to.be.a('object');
		});
	});
  });
  describe('if author not found', () => {
	it('should return error', () => {
	  chai.request(server)
		.get('/api/v1/authors/:id')
		.end((err, res) => {
		  chai.expect(res.statusCode).to.be.equal(200);
		});
	});
  });
  describe('delete author', () => {
	it('author will be deleted', () => {
	  chai.request(server)
		.delete('/api/v1/authors/:id')
		.end((err, res) => {
		  chai.expect(res.statusCode).to.be.equal(200);
		});
	});
  });
  
  
  



 