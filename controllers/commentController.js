const Comment = require('../models').Comment;

const getComments = async(req, res) => {
    try {
        const result = await Comment.findAll({});
        console.log(result);
        res.json({ data: result });

    } catch(error) {
        console.log(error);
        res.send(error);
    }
}

module.exports = { 
    getComments,
};