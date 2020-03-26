const Lecture = require('../models').Lecture;
const sequelize = require('../models').sequelize;
const { Op } = require("sequelize");

const getLectures = async(req, res) => {  // 강의번호들로 강의정보 불러옴
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

const getTimes = async(req, res) => {
    try {
        const body = req.body;
        const uuid = body.id_beacon;
        
        const timeList = await Lecture.findAll({
            where: {
                id_beacon: uuid,
            },
        });
        
        res.status(200).json({ timeList: timeList });

    } catch(error) {
        console.log(error);
        res.status(401).json({ errorMessage: '수업 시작/종료시간 불러오기 실패' })
    }
}

module.exports = {
    getLectures,
    getTimes,
}