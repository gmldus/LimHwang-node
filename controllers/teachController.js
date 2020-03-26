const Attendance = require('../models').Attendance;
const sequelize = require('../models').sequelize;

const getStudentList = async(req, res) => {  // 해당 수업을 듣는 학생들의 학번 목록
    try {
        const body = req.body;
        const LectureID = body.LectureID;
        
        const studentList = await Attendance.findAll({

            attributes: [sequelize.literal('DISTINCT `id_students`') ,'id_students'],

            where: {
                id_lectures: LectureID,
            }
        });
        
        if(studentList.length!==0){
            res.status(200).json({ studentList: studentList });
            console.log(studentList);
        }
          
        else res.status(401).json({ errorMessage: '해당 정보가 존재하지 않습니다.' });

    } catch(error) {
        console.log(error);
        res.status(401).json({ errorMessage: '학생들 정보 불러오기 실패' })
    }
}

module.exports = { 
    getStudentList,
};