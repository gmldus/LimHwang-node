const Attendance = require('../models').Attendance;
const Student = require('../models').Student;
const sequelize = require('../models').sequelize;

const getStudentList = async(req, res) => {
    try {
        const body = req.body;
        const LectureID = body.LectureID;
        
        const studentList = await Attendance.findAll({  // 해당 수업을 듣는 학생들의 학번 목록

            attributes: [sequelize.literal('DISTINCT `id_students`') ,'id_students'],
            where: {
                id_lectures: LectureID,
            }
        });
        
        const name = [];
        for(let i=0;i<studentList.length;i++){

            const studentName = await Student.findOne({  // 해당 학생들의 이름까지 함께

                attributes: ['name_students'],
                where: {
                    id_students: studentList[i].id_students,
                }
            });
            const obj = {
                id: studentList[i].id_students,
                name: studentName.name_students,
            }
            name.push(obj);
        }

        if(studentList.length!==0){
            res.status(200).json({ studentInfo: name });
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