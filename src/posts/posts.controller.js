const postService = require('./posts.service');

module.exports.createPosts = async function (req, res) {
  const bank = req.body;
  const createdBank = await postService.createPost(bank);
  return res.json(createdBank);
};

module.exports.getPosts = async function (req, res) {
  const posts = await postService.getPosts();
  return res.status(200).json(posts);
};

module.exports.getPostById = async function (req, res) {
  const postId = req.params.id;
  const post = await postService.getPostById(postId);
  return res.json(post);
};

module.exports.updatePostById = async function (req, res) {
  const postId = req.params.id;
  const update = req.body;
  const post = await postService.updatePostById(postId, update);
  return res.json(post);
};
module.exports.deletePostById = async function (req, res) {
  const postId = req.params.id;
  const post = await postService.deletePostById(postId);
  return res.json(post);
};


