const form_submit = document.querySelector("#RegistrationSubmit");

const fullName = document.getElementById("FullName");
const contact = document.getElementById("Contact");
const email = document.getElementById("Email");
const createPassword = document.getElementById("Create_Password");
const confirmPassword = document.getElementById("Confirm_Password");

contact.oninput = (e) => {
  // *********** Validation For Contact ***********
  if (contact.length != 10) {
    contact.style.border = "1px solid red";
    // alert("Phone number must have 10 digits");
  }
  else {
    contact.style.border = "none";
  }
}

// form_submit.onclick = (e) => {
//   e.preventDefault();
// }






