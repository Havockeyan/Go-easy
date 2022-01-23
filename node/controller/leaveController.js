const Leave = require('./../model/leaveData');
const User = require('./../model/user');

exports.putLeave = (req, res, next) => {
    console.log(req.body);
    //find if there is any
    Leave.findOneAndRemove({ rollno: req.body.rollno })
        .then(result => {
            const leave = new Leave({
                rollno: req.body.rollno,
                frDate: req.body.frDate,
                toDate: req.body.toDate,
                name: req.body.name,
                purpose: req.body.purpose,
            });
            return leave.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'leave created',
                result: result
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getLeave = (req, res, next) => {
    let rollno;
    User.findById(req.userId)
        .then(result => {
            rollno = result.rollno;
            return Leave.findOne({ rollno: rollno })
        })
        .then(leave => {
            if (!leave) {
                res.status(400).json({
                    message: 'no leave find',
                });
            }
            res.status(200).json({
                message: 'leave found',
                result: leave
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getLeavestaff = (req, res, next) => {
    const rollno = req.params.rollno;
    console.log(rollno);
    Leave.find({ rollno: rollno })
        .then(leave => {
            console.log(leave);
            if (!leave) {
                res.status(400).json({
                    message: 'no leave find',
                });
            }
            res.status(200).json({
                message: 'leave found',
                result: leave[0]
            });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.updateLeave = (req, res, next) => {
    const rollno = req.body.rollno;
    const type = req.body.type;
    console.log(type);
    if (type === 'warden') {
        Leave.findOneAndUpdate({ rollno: rollno }, { wardernStatus: "yes" })
            .then(result => {
                res.status(200).json({
                    message: 'done from warden'
                });
            })
            .catch(err => {
                console.log(err);
            })
    } else {
        Leave.findOneAndUpdate({ rollno: rollno }, { staffStatus: "yes" })
            .then(result => {
                res.status(200).json({
                    message: 'done'
                });
            })
            .catch(err => {
                console.log(err);
            })
    }
};