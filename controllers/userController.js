const User = require('../models').User;

const getUsers = async(req, res) => {
    try {
        const result = await User.findAll({});
        console.log(result);
        res.json({ data: result });

    } catch(error) {
        console.log(error);
        res.send(error);
    }
}

module.exports = { 
    getUsers,
};