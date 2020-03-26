const Student = require('../models').Student;
const Attendance = require('../models').Attendance;
const sequelize = require('../models').sequelize;

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
        
        const studentInfo = await Student.findOne({  // 학생정보
            where: {
                id_students: login_id,
                birth: login_password,
            }
        });
        
        const lectureNum = await Attendance.findAll({  // 학생이 듣는 강의번호(들)

            attributes: [sequelize.literal('DISTINCT `id_students`') ,'id_lectures'],
            
            where: {
                id_students: login_id,
            }
        });

        if(studentInfo) res.status(200).json({ studentInfo: studentInfo, lectureNum: lectureNum });
        else res.status(401).json({ errorMessage: '잘못된 회원정보입니다' });

    } catch(error) {
        console.log(error);
        res.status(401).json({ errorMessage: '로그인 실패' })
    }
}

module.exports = { 
    getStudents,
    doLogins,
};