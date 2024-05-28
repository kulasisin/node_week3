const express = require('express');
const router = express.Router();
const  PostsControllers =require('../controllers/posts')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/posts', PostsControllers.getPosts);
router.post('/posts', PostsControllers.createdPosts);
router.delete('/posts', PostsControllers.deletePosts);
router.delete('/post/:id', PostsControllers.deletePost);
router.patch('/post/:id', PostsControllers.patchPost);
module.exports = router;
