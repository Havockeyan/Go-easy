function generate() {
    var database = firebase.database();
    var r = document.getElementById("rollno").value;
    console.log(r);
    fetch('http://localhost:8080/leavestaff/' + r, {
            method: 'GET',
            headers: {
                'Authorization': 'Barer ' + localStorage.getItem('token').toString(),
                'Content-Type': 'application/json'
            }
        })
        .then(result => {
            return result.json();
        })
        .then(leave => {
            console.log(leave.result);
            document.getElementById("purpose").innerHTML = leave.result.purpose;
            document.getElementById("name").innerHTML = leave.result.name;
            document.getElementById("roll").innerHTML = leave.result.rollno;
            document.getElementById("fr").innerHTML = leave.result.frDate;
            document.getElementById("to").innerHTML = leave.result.toDate;
        })
        .catch(err => {
            console.log(err);
        })
        // var ref = database.ref('leave/');
        // ref.on("value", gotdata, errordata);

    // function gotdata(data) {
    //     var dat = data.val();
    //     //console.log(dat);
    //     var keys = Object.keys(dat);
    //     //console.log(keys);
    //     for (var i = 0; i < keys.length; i++) {
    //         if (keys[i] == r) {
    //             //console.log(r);
    //             k = keys[i];
    //             document.getElementById("purpose").innerHTML = leave.result.purpose;
    //             document.getElementById("name").innerHTML = leave.result.name;
    //             document.getElementById("roll").innerHTML = leave.result.Roll_no;
    //             document.getElementById("fr").innerHTML = leave.result.frdate;
    //             document.getElementById("to").innerHTML = leave.result.todate;
    //         }
    //     }
    // }

    function errordata(err) {
        console.log(err);
    }

}

function accept() {
    r = document.getElementById("rollno").value;
    fetch('http://localhost:8080/leave/accetp', {
            method: 'POST',
            headers: {
                'Authorization': 'Barer ' + localStorage.getItem('token').toString(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rollno: r,
                type: 'warden'
            })
        })
        .then(response => {
            return response.json();
        })
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err)
        })
        // const a = "yes";
        // const fb = firebase.database().ref();
        // Staff_status = a;
        // data = { Staff_status }
        // fb.child('leave/' + r).update(data);
}