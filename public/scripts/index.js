// const axios = require('axios');
const signUpDetails = {};

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
