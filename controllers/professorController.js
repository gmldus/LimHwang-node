const Professor = require('../models').Professor;
const Teach = require('../models').Teach;

const doLogins = async(req, res) => {
    try {
        const body = req.body;
        const login_id = body.login_id;
        const login_password = body.login_password;
        
        const professorInfo = await Professor.findOne({  // 교수정보
            where: {
                id_professors: login_id,
                birth: login_password,
            }
        });
        
        const professorLectureInfo = await Teach.findAll({  //교수가 가르치는 강의들의 강의번호(들)
            attributes: [ 'id_lectures' ],
            where: {
                id_professors: login_id,
            }
        });

        if(professorInfo){
            res.status(200).json({ professorInfo: professorInfo, professorLectureInfo: professorLectureInfo });
        }
        else res.status(401).json({ errorMessage: '잘못된 회원정보입니다' });

    } catch(error) {
        console.log(error);
        res.status(401).json({ errorMessage: '로그인 실패' })
    }
}

module.exports = { 
    doLogins,
};