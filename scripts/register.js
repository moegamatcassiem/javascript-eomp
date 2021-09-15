function registerUser() {
  let Email = document.getElementById("email").value;
  let Username = document.getElementById("username")
  let Password = document.getElementById("password").value;
  console.log(Email,Username ,Password);
  fetch("https://flaskeomp.herokuapp.com/user-registration/", {
    method: "POST",
    body: JSON.stringify({
      email: Email,
      username: Username,
      password: Password
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
   .then((response) => response.json())
    .then((json) => {
      console.log(json);
      window.location = "./login.html";
    });
}