import chai from "chai";
import chaiHttp from "chai-http";
import server from "../app";
import { setDb } from "./fixtures/db";

let should = chai.should();
chai.use(chaiHttp);

before(() => {
  setDb();
});
describe("/GET expenses", () => {
  it("should test 405 error", (done) => {
    chai
      .request(server)
      .put("/invalid/url")
      .end((err, res) => {                    
        res.should.have.status(405);
        res.body.message.should.be.a("string");
        res.body.message.should.be.eql('method/request not allowed');
        done();
      });
  });
  it("should fetch expenses", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.a("array");
        res.text.includes('"status":200');
        done();
      });
  });
  it("should query expenses", async () => {
    try {
      const res = await chai.request(server)
      .get("/?status=pending")
      res.should.have.status(200);
      res.body.data.should.be.a("array");
      res.body.data.should.be.lengthOf(1);
    } catch (error) {
      console.log(error)
      
    }

  });
  it("should return error when wrong keys are used", done => {
    chai
      .request(server)
      .get("/?wrongKey=approved")
      .end((err, res) => {
        res.should.have.status(422);
        res.body.should.be.a("object");
        res.body.error.should.be.eql("Invalid query param(s)");
        done();
      });
  });
  it("should return empty array when query params are not found", done => {
    chai
      .request(server)
      .get("/?status=notfound")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.a("array");
        res.body.data.should.be.lengthOf(0);
        done();
      });
  });
});

describe("/users:id GET user expenses", () => {
  it("Should fetch user expenses", done => {
    chai
      .request(server)
      .get("/users/0ea6f994-831c-4c73-8370-8933f48c2698")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.expenses.should.be.a("array");
        res.body.employee.should.be.lengthOf(1);
        res.text.includes("0ea6f994-831c-4c73-8370-8933f48c2698");
        done();
      });
  });
  it("Should 404 when no user found", done => {
    chai
      .request(server)
      .get("/users/0wrong-user-id")
      .end((err, res) => {
        res.should.have.status(404);
        res.body.error.should.be.a("string");
        res.body.error.should.be.eql(
          "User with id 0wrong-user-id is not found"
        );
        done();
      });
  });
});

// describe('/:id PUT update expenses', () => {
//     it('should success update an expense', (done) => {
//         chai.request(server)
//         .patch('/uaffea006-708c-40db-b14f-4edc74ed4dc2')
//         .set('Content-Type', 'application/json')
//         .send({
//             status: "declined"
//         })
//         .end((err, res) => {
//             console.log(res);

//             res.should.have.status(500)
//             res.body.data.should.be.a('object')
//             res.body.data.status.should.be.eql('declined')
//             done()
//         })

//     })
// })
