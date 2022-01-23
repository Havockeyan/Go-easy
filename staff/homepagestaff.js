function generate() {
    var s1, s2, s3, s4;
    var a1, a2, a3, a4, rollno;
    console.log("gen");

    rollno = document.getElementById("roll").value;
    console.log(rollno);

    fetch('http://localhost:8080/auth/attendencestaff/' + rollno, {
            method: 'GET',
            headers: {
                'Authorization': 'Barer ' + localStorage.getItem('token').toString(),
                'Content-Type': 'application/json'
            }
        })
        .then(result => {
            return result.json();
        })
        .then(response => {
            console.log(response.attendence);
            document.getElementById("ss1").innerHTML = "Subject1";
            document.getElementById("att1").innerHTML = response.attendence[0];
            document.getElementById("ss2").innerHTML = "Subject2";
            document.getElementById("att2").innerHTML = response.attendence[1];
            document.getElementById("ss3").innerHTML = "Subject3";
            document.getElementById("att3").innerHTML = response.attendence[2];
            document.getElementById("ss4").innerHTML = "Subject4";
            document.getElementById("att4").innerHTML = response.attendence[3];
        })
        .catch(err => {
            console.log(err);
        });
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
    //             console.log(typeof(a1));
    //         }
    //     }
    //     fun();
}

function errordata(err) {
    console.log("error");
}

function fun() {
    document.getElementById("ss1").innerHTML = s1;
    document.getElementById("att1").innerHTML = a1;
    document.getElementById("ss2").innerHTML = s2;
    document.getElementById("att2").innerHTML = a2;
    document.getElementById("ss3").innerHTML = s3;
    document.getElementById("att3").innerHTML = a3;
    document.getElementById("ss4").innerHTML = s4;
    document.getElementById("att4").innerHTML = a4;
}