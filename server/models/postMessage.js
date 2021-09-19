//utilize possibilities of mongoose

import mongoose from 'mongoose';

//create mongoose schema const
//schema: uniformity to our documents
//each post has to have these things
const postSchema = mongoose.Schema ({
    title: String,
    message: String,
    creator: String,
    tags: [String], //array of strings
    selectedFile: String, //convert image into a string using base64
    likeCount: { //create an object
        type: Number,
        default: 0 //set likes to 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//turn schema into model
const PostMessage = mongoose.model('PostMessage', postSchema);

//exporting a mongoose model from the post message file
//later on run commands such as find, create, delete, update (CRUD)
export default PostMessage;