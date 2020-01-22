const Student = require('../models').Student;

const getStudents = async(req, res) => {
    try {
        const result = await Student.findAll({});
        res.json({ data: result });

    } catch(error) {
        res.send(error);
    }
}

const doLogins = async(req, res) => {
    try {
        const body = req.body;
        const login_id = body.login_id;
        const login_password = body.login_password;
        
        const result = await Student.findOne({
            where: {
                id_students: login_id,
                birth: login_password,
            }
        });
        
        if(result) res.status(200).json({ data: result });
        else res.status(401).json({ errorMessage: '잘못된 회원정보입니다' });

    } catch(error) {
        res.status(401).json({ errorMessage: '로그인 실패' })
    }
}

module.exports = { 
    getStudents,
    doLogins,
};