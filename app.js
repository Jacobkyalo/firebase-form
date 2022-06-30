const form = document.getElementById("form");

form.addEventListener("submit", handleSubmitForm);

//handle form submit
function handleSubmitForm(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message").value;

  //creating an input object
  const formData = {
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Password: password,
    Message: message,
  };

  fetch("link", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  console.log(formData);
}
