//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//let mongoose = require("mongoose");

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
const _ = require("underscore");
const forEach = require("mocha-each");
let server = require("./server");
let should = chai.should();
const assert = chai.assert;
const expect = chai.expect;
let Book = require("./models/booksModel");
chai.use(chaiHttp);
//Our parent block
describe("Books", () => {
  before(done => {
    //Before each test we empty the database
    Book.remove({}, err => {
      done();
    });
  });

  describe("/POST book", () => {
    let allBooks = [
      {
        title: "The Lord of the Rings",
        year: 1954,
        author: "J.R.R. Tolkien"
      },
      {
        title: "Three Mistakes of My Life",
        year: 2008,
        author: "Chetan Bhagat"
      },
      {
        title: "Harry Potter",
        year: 1997,
        author: "J. K. Rowling"
      },
      {
        title: "The Hunger Games",
        year: 2008,
        author: "Suzanne Collins"
      },
      {
        title: "Two States",
        year: 2009,
        author: "Chetan Bhagat"
      }
    ];
    function insertfunciton(onebook) {
      it("it should not POST a book without book details", done => {
        chai
          .request(server)
          .post("/books")
          .send(onebook)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a("object");
            done();
          });
      });
    }
    _.each(allBooks, onebook => {
      insertfunciton(onebook);
    });
  });
  /*
  * Test the /GET route
  */
  describe("/GET book", () => {
    it("it should GET all the books", done => {
      chai
        .request(server)
        .get("/books")
        .end((err, res) => {



          expect(res.status).to.equal(200);
          expect(res.body).to.be.a("array");
          expect(res.body).to.have.lengthOf(5);

          assert.equal(res.status, "200", "Status code should be 200");
          assert.typeOf(res.body, "array");
          assert.lengthOf(res.body, 5);

          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(5);

          done();
        });
    });
  });
});
//  Expect It works on node.js and in all browsers.

// should not support in IE

// Assert and Expect allows to append custom meesate with error  message
