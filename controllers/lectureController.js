const Lecture = require('../models').Lecture;
const sequelize = require('../models').sequelize;
const { Op } = require("sequelize");

const getLectures = async(req, res) => {
    try {
        const body = req.body;
        const array = body.array.replace('[','').replace(']','');
        
        const realArray = array.split(", ");
        
        const lectureList = await Lecture.findAll({
            where: {
                id_lectures: {
                    [Op.or]: realArray,
                }
            },
        });
        
        res.status(200).json({ lectureList: lectureList });

    } catch(error) {
        console.log(error);
        res.status(401).json({ errorMessage: '강의정보 불러오기 실패' })
    }
}

module.exports = {
    getLectures,
}