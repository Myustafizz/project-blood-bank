process.env.NODE_ENV = 'test';
const chai = require('chai');
const{assert} = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/app');
const Post = require('../src/posts/posts.model');
let should = chai.should();

//to run this code, we need to install mocha using npm install -D mocha
// need to install chai using npm install -D chai
// need to install chai-http using npm install -D chai-http
// to run this code, we need to delete userController.isAuthenticated from router.post('/posts', userController.isAuthenticated, postController.createPosts) in index.js

chai.use(chaiHttp);

describe('post test suit', () => {
    before(async () => {
        await Promise.all([Post.deleteMany({})]);
    });
    let post = null;
    it('should create a post', async() => {
        const res = await
        chai
            .request(server)
            .post('/posts')
            .send({Hospital_name: 'Yasin', Hospital_Location: 'B+', blood_stock: 'B+', Hospital_contact_number: '01713479389', Hospital_Branch: '21', Hospital_fee: 'Central road'});

            console.log(res.body);
            post = res.body._id;
            assert.equal(res.status, 200, 'http status should be 200');
            assert.exists(res.body._id, 'post id should exist');
    });
   

    after(async  ()=> {
        await  Post.deleteMany({})
     });
});
