function chan() {

    var database = firebase.database();
    var ref = database.ref('student/');
    ref.on("value", gotdata, errordata)
}

function gotdata(data) {
    var dat = data.val();
    var keys = Object.keys(dat);
    //console.log(keys);
    const r = document.getElementById("rollnumber").value;
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] == r) {
            var k = keys[i];
            if (dat[k].pasword == document.getElementById("cpassword").value) {
                // console.log(dat[k].pasword);
                paschan();
            }
        }
    }
}

function paschan() {
    r = document.getElementById("rollnumber").value;
    const a = document.getElementById("npassword").value;
    const fb = firebase.database().ref();
    pasword = a;
    data = { pasword }
    fb.child('student/' + r).update(data);
}

function errordata(err) {
    console.log(err);
}