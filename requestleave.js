function submit() {
    var rollno = document.getElementById("rollno").value;
    var namec = document.getElementById("name").value;
    var purpose = document.getElementById("purpose").value;
    var frdate = document.getElementById("fr_date").value;
    var todate = document.getElementById("to_date").value;
    console.log(rollno, namec, purpose);
    fetch('http://localhost:8080/leave', {
            method: 'POST',
            headers: {
                'Authorization': 'Barer ' + localStorage.getItem('token').toString(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rollno: rollno,
                frDate: frdate,
                toDate: todate,
                name: namec,
                purpose: purpose
            })
        })
        .then(result => {
            console.log(result);
            alert('success');
        })
        .catch(err => {
            console.log(err)
        });
    // k = "no", q = "no", ro = getRandomArbitrary(1, 1000), r = document.getElementById("rollno").value;
    // console.log("pre");
    // var database = firebase.database();
    // var ref = database.ref('leave/' + r);
    // ref.set({
    //     Roll_no: rollno,
    //     name: namec,
    //     purpose: purpose,
    //     frdate: frdate,
    //     todate: todate,
    //     requestid: ro,
    //     Warden_status: k,
    //     Staff_status: q
    // });
    // console.log("insert");
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}