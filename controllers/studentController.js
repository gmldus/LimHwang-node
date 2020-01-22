const Student = require('../models').Student;

const getStudents = async(req, res) => {
    try {
        const result = await Student.findAll({});
        res.json({ data: result });

    } catch(error) {
        res.send(error);
    }
}

module.exports = { 
    getStudents,
};