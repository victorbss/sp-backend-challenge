let request = require("request");
let chai = require("chai");
let should = require("should");
let expect = chai.expect;
let urlBase = "https://sp-backend-challenge.herokuapp.com";

describe("Test Requests to GitHub API",function(){

  it("Receive users", function(done){
    request.get(
      {
        url : urlBase + "/api/users"
      },
      function(error, response, body){
        expect(response.statusCode).to.equal(200);

        let _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        expect(_body).to.be.an('array')

        done(); 
      }
    );
  });

  it("Receive user details", function(done){
    request.get(
      {
        url : urlBase + "/api/users/victorbzk/details"
      },
      function(error, response, body){
        expect(response.statusCode).to.equal(200);

        let _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        _body.should.have.property('login');
        _body.should.have.property('id');
        _body.should.have.property('name');
        _body.should.have.property('html_url');
        _body.should.have.property('created_at');
        _body.should.not.have.property('message');
        _body.should.not.have.property('documentation_url');
        
        done(); 
      }
    );
  });

  it("Receive user repos", function(done){
    request.get(
      {
        url : urlBase + "/api/users/victorbzk/repos"
      },
      function(error, response, body){
        expect(response.statusCode).to.equal(200);

        let _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        expect(_body).to.be.an('array')
        
        done(); 
      }
    );
  });

});
