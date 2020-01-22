const Attendance = require('../models').Attendance;

const getAttendances = async(req, res) => {
    try {
        const result = await Attendance.findAll({});
        res.json({ data: result });

    } catch(error) {
        res.send(error);
    }
}

module.exports = {
    getAttendances,
}