const Login = require('../models').Login;

const getLogins = async(req, res) => {
    try {
        const result = await Login.findAll({});
        console.log(result);
        res.json({ data: result });

    } catch(error) {
        console.log(error);
        res.send(error);
    }
}

const createLogins = async(req, res) => {
    try {
        const body = req.body;
        const record = {
            login_id: body.login_id,
            login_password: body.login_password,
        }
        console.log(record);
        const result = await Login.create(record);
        res.status(200).json({ data: result });

    } catch(error) {
        res.status(401).json({ errorMessage: '유저정보 입력 실패' })
    }
}

module.exports = { 
    getLogins,
    createLogins,
};