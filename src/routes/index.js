const express = require('express');
const router = express.Router();
const postController = require('../posts/posts.controller');
const userController = require('../user/user.controller');


router.get('/', function(req, res) { 
  return res.json({ message: 'Welcome to the blood-donation hospital. Do you want to donate your blood? Tell us yourblood group'});
});
router.post('/posts', userController.isAuthenticated, postController.createPosts);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePostById);
router.delete('/posts/:id', postController.deletePostById);


module.exports = router;
