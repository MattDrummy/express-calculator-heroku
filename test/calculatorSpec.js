'use strict'
var expect = require('chai').expect;
var server = require('../app');
var request = require('supertest');


describe("GET /add", () => {
  it('correctly adds 9 and 3 to get 12', (done) => {
    request(server.app)
      .get("/add/9/3")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain('12');
        done();
      })
  })
  it('correctly adds any two integers to get the proper result', (done) => {
    var randomInt1 = Math.floor(Math.random() * (100 - 1)) + 1;
    var randomInt2 = Math.floor(Math.random() * (100 - 1)) + 1;
    request(server.app)
      .get("/add/"+randomInt1+"/"+randomInt2)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain(randomInt1 + randomInt2);
        done();
      })
  })

  it('correctly adds any two numbers to get the proper result', (done) => {
    var randomNum1 = Math.random() * 5;
    var randomNum2 = Math.random() * 7;
    request(server.app)
      .get("/add/"+randomNum1+"/"+randomNum2)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain(randomNum1 + randomNum2);
        done();
      })
  })

  it('rejects non-numerical input, and returns a 400', (done) => {
    request(server.app)
      .get("/add/cats/dogs")
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      })
  })
})

describe("GET /sub", () => {
  it('correctly subtracts 9 and 3 to get 6', (done) => {
    request(server.app)
      .get("/sub/9/3")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain('6');
        done();
      })
  })
  it('correctly subtracts any two integers to get the proper result', (done) => {
    var randomInt1 = Math.floor(Math.random() * (100 - 1)) + 1;
    var randomInt2 = Math.floor(Math.random() * (100 - 1)) + 1;
    request(server.app)
      .get("/sub/"+randomInt1+"/"+randomInt2)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain(randomInt1 - randomInt2);
        done();
      })
  })

  it('correctly subtracts any two numbers to get the proper result', (done) => {
    var randomNum1 = Math.random() * 5;
    var randomNum2 = Math.random() * 7;
    request(server.app)
      .get("/sub/"+randomNum1+"/"+randomNum2)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain(randomNum1 - randomNum2);
        done();
      })
  })

  it('rejects non-numerical input, and returns a 400', (done) => {
    request(server.app)
      .get("/sub/cats/dogs")
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      })
  })
})

describe("GET /mult", () => {
  it('correctly multiplies 9 and 3 to get 27', (done) => {
    request(server.app)
      .get("/mult/9/3")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain('27');
        done();
      })
  })
  it('correctly multiplies any two integers to get the proper result', (done) => {
    var randomInt1 = Math.floor(Math.random() * (100 - 1)) + 1;
    var randomInt2 = Math.floor(Math.random() * (100 - 1)) + 1;
    request(server.app)
      .get("/mult/"+randomInt1+"/"+randomInt2)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain(randomInt1 * randomInt2);
        done();
      })
  })

  it('correctly multiplies any two numbers to get the proper result', (done) => {
    var randomNum1 = Math.random() * 5;
    var randomNum2 = Math.random() * 7;
    request(server.app)
      .get("/mult/"+randomNum1+"/"+randomNum2)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain(randomNum1 * randomNum2);
        done();
      })
  })

  it('rejects non-numerical input, and returns a 400', (done) => {
    request(server.app)
      .get("/mult/cats/dogs")
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      })
  })
})

describe("GET /div", () => {
  it('correctly divides 9 and 3 to get 3', (done) => {
    request(server.app)
      .get("/div/9/3")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain('3');
        done();
      })
  })
  it('correctly divides any two integers to get the proper result', (done) => {
    var randomInt1 = Math.floor(Math.random() * (100 - 1)) + 1;
    var randomInt2 = Math.floor(Math.random() * (100 - 1)) + 1;
    request(server.app)
      .get("/div/"+randomInt1+"/"+randomInt2)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain(randomInt1 / randomInt2);
        done();
      })
  })

  it('correctly divides any two numbers to get the proper result', (done) => {
    var randomNum1 = Math.random() * 5;
    var randomNum2 = Math.random() * 7;
    request(server.app)
      .get("/div/"+randomNum1+"/"+randomNum2)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain(randomNum1 / randomNum2);
        done();
      })
  })

  it('rejects non-numerical input, and returns a 400', (done) => {
    request(server.app)
      .get("/div/cats/dogs")
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      })
  })
})
