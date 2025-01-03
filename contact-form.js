document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector(".signup-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
      let formData = new FormData(form);
      let formObject = {};

      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      console.log("Form data submitted:", formObject);
    } else {
      alert("Please fill out all required fields.");
    }
  });
});
