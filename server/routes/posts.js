import express from 'express';

const router = express.Router();

//only reached by localhost:5000/posts
//request, response
router.get('/', (req, res) => {
    res.send('This works');
});

export default router;