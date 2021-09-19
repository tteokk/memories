//time to implement real logic to get posts and creating posts



//handles for our routes
//saving logic of routes here so code in ./routes/posts.js doesn't get long

//export to be able to use it in posts.js
export const getPosts = (req, res) => {
    res.send('This works');
}

export const createPosts = (req, res) => {
    res.send('Post creation');
}