const Lecture = require('../models').Lecture;

const getLectures = async(req, res) => {
    try {
        const result = await Lecture.findAll({});
        res.json({ data: result });

    } catch(error) {
        res.send(error);
    }
}

module.exports = {
    getLectures,
}