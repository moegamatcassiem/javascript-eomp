fetch("https://flaskeomp.herokuapp.com/user-registration/", {
  method: "POST",
  body: JSON.stringify({
    email: ,
    username: ,
    password: ,
    
  }),

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
