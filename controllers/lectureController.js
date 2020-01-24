const Student = require('../models').Student;
const Lecture = require('../models').Lecture;
const Attendance = require('../models').Attendance;
const sequelize = require('../models').sequelize;

const getLectures = async(req, res) => {
    try {
        const lectureList = await Lecture.findAll({});
        res.json({ lectureList: lectureList });

    } catch(error) {
        res.send(error);
    }
}

module.exports = {
    getLectures,
}