const Attendance = require('../models').Attendance;

const getAttendances = async(req, res) => {
    try {
        const body = req.body;
        const studentId = body.id_students;
        const LectureId = body.id_lectures;

        const result = await Attendance.findAll({
            where: {
                id_students: studentId,
                id_lectures: LectureId,
            }
        });
        
        if(result.length!==0) res.status(200).json({ data: result });
        else res.status(401).json({ errorMessage: '일치하는 정보가 존재하지 않습니다' })

    } catch(error) {
        console.log(error);
        res.status(401).json({ errorMessage: '출결정보 불러오기 실패' })
    }
}

module.exports = {
    getAttendances,
}