document.querySelector("button").addEventListener("click", signUp)
var usersData = JSON.parse(localStorage.getItem("userDataBase")) || []

function signUp(event) {
    event.preventDefault()
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var reapeatpassword = document.querySelector("#reapeatpassword").value;
    var name = document.querySelector("#name").value;
    var pin = document.querySelector("#pin").value;
   
    var address = document.querySelector("#address").value;
    var optional = document.querySelector("#optional").value;
    var locality = document.querySelector("#locality").value;
    var city = document.querySelector("#city").value;
    var state = document.querySelector("#state").value;
    var stateR = document.querySelector("#stateR").value;
    var mobile = document.querySelector("#mobile").value;
    var tel = document.querySelector("#tel").value;
    var checkBox = document.getElementById("checkmark").checked
    var checkBox1 = document.getElementById("checkmark1").checked;
    if (name == "" || pin == "" || email == "" || password == "" || reapeatpassword == "" || address== "" || optional == "" ||
     locality == "" || city == "" || state == "" || stateR == "" || mobile == "" || tel == "" || checkBox == false ||checkBox1 == false) {
        alert("Please enter all data")
    } else {
        var obj = {
            name: name,
            pin: pin,
            email: email,
           
            password: password,
            reapeatpassword:reapeatpassword,
            address:address,
            optional:optional,
            locality :locality ,
            city: city,
            state:state,
            stateR: stateR,
            tel:tel,






        }
        // console.log(obj)
        usersData.push(obj);
        
        window.location.href = "login.html";
    }

    localStorage.setItem("userDataBase", JSON.stringify(usersData))

}