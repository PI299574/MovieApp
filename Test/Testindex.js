var should=require("chai").should(),
expect=require("chai").expect,
assert=require("chai").assert;
supertest=require("supertest"),
app=require("../bin/www");
var url=supertest("http://localhost:8080");
describe("Testing with first route",function(err){
  it("should handle request",function(done){
    url
    .get("/movies/findAll")
    .set('accept','appliction/json')
    .expect(200)
    .end(function(err,res){
      if(err){throw err}
      done();
    });
  });
});
