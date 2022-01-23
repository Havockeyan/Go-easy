var rollnov, namev, sectionv, genderv, unknownv, passwordv;


function pre() {
    rollnoV = document.getElementById("rollno").value;
    namev = document.getElementById("name").value;
    sectionv = document.getElementById("section").value;
    unknownv = document.getElementById("unknown").value;
    passwordv = document.getElementById("pass").value;
    s1 = document.getElementById('subject1').value;
    s2 = document.getElementById('subject2').value;
    s3 = document.getElementById('subject3').value;
    s4 = document.getElementById('subject4').value;
    m1 = document.getElementById('subject1at').value;
    m2 = document.getElementById('subject2at').value;
    m3 = document.getElementById('subject3at').value;
    m4 = document.getElementById('subject4at').value;
    var ele = document.getElementsByName('gender');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            genderv = ele[i].id;
        }
    }
    console.log('pre');
}

function insert() {
    pre();
    var database = firebase.database();
    var ref = database.ref('student/' + rollnoV);
    ref.set({
        Nameofthestudent: namev,
        roll_no: rollnoV,
        section: sectionv,
        gender: genderv,
        pasword: passwordv,
        Work: unknownv,
        subject_1: s1,
        subject_2: s2,
        subject_3: s3,
        subject_4: s4,
        at_1: m1,
        at_2: m2,
        at_3: m3,
        at_4: m4
    });
    console.log('insert');


}