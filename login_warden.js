function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
var usernamec, workc = "warden",
    passwordc, rollnov = document.getElementById("name").value;

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function check() {
    usernamec = document.getElementById("name").value;
    passwordc = document.getElementById("pas").value;
    fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rollno: usernamec,
                password: passwordc
            })
        })
        .then(result => {
            return result.json();
        })
        .then(user => {
            console.log(user);
            if (!user) {
                alert("unsuccessfull login credentials")
            }
            //storing token in localstorage.
            localStorage.setItem('token', user.token);
            localStorage.setItem('id', user.userId);
            window.open("warden/homepagestaff.html", "_self");
        })
        .catch(err => {
            console.log(err);
        });
    // var database = firebase.database();
    // var ref = database.ref('student/' + rollnov);
    // ref.on("value", gotdata, errordata);
}
var k;

function gotdata(data) {
    //console.log(data.val());
    var dat = data.val();
    var keys = Object.keys(dat);
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] == usernamec) {
            k = keys[i];
            if (dat[k].pasword == passwordc && dat[k].Work == workc) {
                window.location.href = "warden/homepagestaff.html";
            }
        }
    }
}

function errordata(err) {
    console.log("error");
}