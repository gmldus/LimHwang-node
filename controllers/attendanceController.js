const Attendance = require('../models').Attendance;

const getAttendances = async(req, res) => {
    try {
        const body = req.body;
        const StudentId = body.id_students;
        const LectureId = body.id_lectures;

        const result = await Attendance.findAll({
            where: {
                id_students: StudentId,
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

const updateAttendances = async(req, res) => {
    try {
        const body = req.body;
        const StudentId = body.id_students;
        const LectureId = body.id_lectures;
        const date = body.date;
        const State = body.state;
        const checkTime = body.check_time;
        
        const result = await Attendance.update(
            { state: State, check_time: checkTime },
            {
                where: {
                    id_students: StudentId,
                    id_lectures: LectureId,
                    date: new Date(date).toISOString(),
                }
            }
        );
        
        if(result!=0) res.status(200).json({ data: result });
        else if(result==0) res.status(401).json({ errorMessage: '일치하는 정보가 존재하지 않습니다' })

    } catch(error) {
        console.log(error);
        res.status(401).json({ errorMessage: '출결정보 바꾸기 실패' })
    }
}

module.exports = {
    getAttendances,
    updateAttendances,
}