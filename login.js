var userData = JSON.parse(localStorage.getItem("userDataBase"));

function clickForPass() {
  var height = (document.querySelector("#inputEmail").style.height = "block");
  var passwd = (document.querySelector("#inputPasswd").style.display = "block");
}

document.querySelector("#form").addEventListener("submit", logInBtn);

function logInBtn(event) {
  event.preventDefault();

  var email = document.querySelector("#inputEmail").value;
  var password = document.querySelector("#inputPasswd").value;
  var count = 0;

  for (var i = 0; i < userData.length; i++) {
    if (userData[i].email == email && userData[i].password == password) {
      count = 1;
    }
  }
  if (count == 1) {
    alert("Login Successful");
    window.location.href = "shipping.html";
  } else {
    alert("Invalid Credentials");
  }
}