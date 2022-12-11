// const axios = require('axios');
const signUpDetails = {};
const loginDetails = {};

// const signUpForm = document.getElementById("signup-form")

document
  ?.querySelector("#login-form")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();
    //send data to database
    // let user_name = document.getElementById("username").value
    // console.log(user_name)
    let path = window.location.pathname;
    let response = await fetch(path, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });

    const { code } = await response.json();
    if (code === 201) {
      // alert(message);
      window.location.replace("/user/dashboard");
    } else {
      alert("Invalid credentials");
    }
  });

async function saveInput(e) {
  loginDetails[`${e.name}`] = e.value;
}

document
  ?.querySelector("#signup-form")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();
    let path = window.location.pathname;
    let role = document.getElementById("role").value;
    let response = await fetch(path, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...signUpDetails, role }),
    });

    const { code } = await response.json();
    if (code === 201) {
      window.location.replace("/users/login");
    } else {
      alert("Invalid credentials");
    }
  });

// signUpForm.onsubmit = async (e) => {
//   e.preventDefault();
//   let path = window.location.pathname;
//   let role = document.getElementById("role").value;
//   let response = await fetch(path, {
//     method: "POST",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ ...signUpDetails, role }),
//   });

//   const { code } = await response.json();
//   if (code === 201) {
//     window.location.replace("/users/login");
//   } else {
//     alert("Invalid credentials");
//   }
// };

async function saveSignupInput(e) {
  signUpDetails[`${e.name}`] = e.value;
}
