import express from 'express';

import { getPosts, createPosts} from '../controllers/posts.js'

const router = express.Router();

//only reached by localhost:5000/posts
//request, response
router.get('/', getPosts);
router.post('/', createPosts);

export default router;