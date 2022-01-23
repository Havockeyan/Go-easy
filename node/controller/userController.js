const bcrypt = require('bcrypt');
const jswt = require('jsonwebtoken');

const User = require('./../model/user');

exports.login = (req, res, next) => {
    const userName = req.body.rollno;
    const password = req.body.password;
    let loadeduser;
    User.find({ rollno: userName })
        .then(user => {
            loadeduser = user[0];
            if (!user) {
                res.status(400).json({
                    message: 'User not found',
                });
            }
            // console.log(userName, password, loadeduser[0].password);
            return bcrypt.compare(password, loadeduser.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                res.status(402).json({
                    message: 'The user details is not correct'
                });
            }
            const token = jswt.sign({
                userName: loadeduser.rollno,
                userId: loadeduser._id.toString()
            }, 'secreate', { expiresIn: '8h' });
            res.status(200).json({
                message: 'success',
                token: token,
                userId: loadeduser._id.toString()
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.createUser = (req, res, next) => {
    // const userName = req.body.userName;
    const password = req.body.password;
    const type = req.body.type;
    const rollno = req.body.rollno;
    const leaveId = req.body.leaveId;
    const attendence = req.body.attendence;
    bcrypt.hash(password, 12)
        .then(hashedPassword => {
            const user = new User({
                rollno: rollno,
                password: hashedPassword,
                leaveId: leaveId,
                type: type,
                attendence: attendence
            });
            return user.save();
        })
        .then(result => {
            res.status(200).json({
                message: 'user created',
                result: result
            });
        })
        .catch(err => {
            console.log(err);
        });

};

exports.getAttendence = (req, res, next) => {
    const userId = req.userId;
    // console.log(req.userId, "[from here]");
    User.findById(userId)
        .then(user => {
            res.status(200).json({
                message: 'attendence',
                attendence: user.attendence
            });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getUser = (req, res, next) => {
    const userId = req.userId;
    User.findById(userId)
        .then(user => {
            res.status(200).json({
                message: 'user found',
                attendence: user
            });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getAttendencestaff = (req, res, next) => {
    const rollno = req.params.rollno;
    console.log(rollno);
    User.find({ rollno: rollno })
        .then(user => {
            res.status(200).json({
                message: 'attendence',
                attendence: user[0].attendence
            });
        })
        .catch(err => {
            console.log(err);
        })
};