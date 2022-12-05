// const axios = require('axios');

const loginDetails = {};

console.log("I am working");

document
  ?.querySelector("#login-form")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();
    //send data to database
    let path = window.location.pathname;
    let response = await fetch(path, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });

    const { message, code } = await response.json();
    if (code === 201) {
      alert(message);
      window.location.replace("/user/dashboard");
    } else {
      alert("Invalid credentials")
    }
  });

async function saveInput(e) {
  loginDetails[`${e.name}`] = e.value;
}
