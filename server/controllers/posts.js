import postMessage from "../models/model.js"



export const getPosts = (req, res) => {
    try {
       const postMessages = postMessage.find();
       console.log(postMessages);
       res.status(200).json(postMessages);
    }catch (error) {
       res.status(404).json({ message:error.message });
    }
}

export const createPost = (req, res) => {
    res.send("Post Creations done")
}