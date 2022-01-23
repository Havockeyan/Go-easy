function generate() {
    // var s1, s2, s3, s4;
    // var a1, a2, a3, a4, rollno, workc;

    fetch('http://localhost:8080/auth/attendence', {
            headers: {
                'Authorization': 'Barer ' + localStorage.getItem('token').toString()
            },
        })
        .then(result => {
            return result.json();
        })
        .then(user => {
            console.log(user);
            fun(user.attendence);
        })
        .catch(err => {
            console.log(err);
        });

    // fun(attendence);

    // var temp = first;
    // console.log("temp:" + temp);

    // rollno = first;
    // console.log(rollno);
    // var database = firebase.database();
    // var ref = database.ref('student/');
    // ref.on("value", gotdata, errordata);
    // var k;

    // function gotdata(data) {
    //     //console.log(data.val());
    //     var dat = data.val();
    //     var keys = Object.keys(dat);
    //     //console.log(keys);
    //     for (var i = 0; i < keys.length; i++) {
    //         if (keys[i] == rollno) {
    //             console.log(keys[i]);
    //             k = keys[i];
    //             s1 = dat[k].subject_1;
    //             s2 = dat[k].subject_2;
    //             s3 = dat[k].subject_3;
    //             s4 = dat[k].subject_4;
    //             a1 = dat[k].at_1;
    //             a2 = dat[k].at_2;
    //             a3 = dat[k].at_3;
    //             a4 = dat[k].at_4;
    //             workc = dat[k].Work;
    //             console.log(typeof(a1));
    //         }
    //     }
    //     if (workc == "student") {
    //         fun();
    //     }
}

function errordata(err) {
    console.log("error");
}

function fun(attendence) {
    let max = 100,
        min = 35;
    document.getElementById("ss1").innerHTML = "subject1";
    document.getElementById("att1").innerHTML = attendence[0];
    document.getElementById("ss2").innerHTML = "subject2";
    document.getElementById("att2").innerHTML = attendence[1];
    document.getElementById("ss3").innerHTML = "subject3";
    document.getElementById("att3").innerHTML = attendence[2];
    document.getElementById("ss4").innerHTML = "subject4";
    document.getElementById("att4").innerHTML = attendence[3];
}