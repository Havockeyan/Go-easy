function check() {
    var r = document.getElementById("rollno").value;
    fetch('http://localhost:8080/leave', {
            method: 'GET',
            headers: {
                'Authorization': 'Barer ' + localStorage.getItem('token').toString()
            }
        })
        .then(result => {
            return result.json();
        })
        .then(user => {
            console.log(user);
            document.getElementById("rollno1").innerHTML = user.result.rollno;
            document.getElementById("puropse").innerHTML = user.result.purpose;
            document.getElementById("frdate").innerHTML = user.result.frDate;
            document.getElementById("todate").innerHTML = user.result.toDate;
            document.getElementById("staccept").innerHTML = user.result.staffStatus;
            document.getElementById("waaccept").innerHTML = user.result.wardernStatus;
        })
        .catch(err => {
            console.log(err)
        });
    // var database = firebase.database();
    // var ref = database.ref('leave/');
    // ref.on("value", gotdata, errordata);

    // function gotdata(data) {
    //     var dat = data.val();
    //     var keys = Object.keys(dat);
    //     //console.log(r);
    //     for (var i = 0; i < keys.length; i++) {
    //         console.log(keys);
    //         if (keys[i] == r) {
    //             k = keys[i];
    //             //console.log("ok");
    //             document.getElementById("rollno1").innerHTML = dat[k].Roll_no;
    //             document.getElementById("puropse").innerHTML = dat[k].purpose;
    //             document.getElementById("frdate").innerHTML = dat[k].frdate;
    //             document.getElementById("todate").innerHTML = dat[k].todate;
    //             document.getElementById("staccept").innerHTML = dat[k].Staff_status;
    //             document.getElementById("waaccept").innerHTML = dat[k].Warden_status;
    //         }
    //     }
    // }

    function errordata(err) {

    }
}