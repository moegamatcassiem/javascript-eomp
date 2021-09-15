fetch("https://flaskeomp.herokuapp.com/auth/", {
  method: "post",
  body: JSON.stringify({
    username: "Cassiem",
    password: "12345",
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => {
    (storage = window.localStorage),
      console.log(json["access_token"]),
      storage.setItem("jwt-token", json["access_token"]);
  });