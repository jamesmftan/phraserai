import { CREATEACCOUNT_URL } from "@/configuration/index.js";
import { swal } from "@/utils/sweet_alert_two";

export const createAccountSubmit = async (e, form, setForm) => {
  e.preventDefault();
  const { first_name, last_name, email, password, confirm_password } = form;
  let validationError = "";
  let errorMessage = "";
  if (!first_name) {
    validationError = "missingFirstName";
    errorMessage = "Please provide your first name.";
  } else if (!last_name) {
    validationError = "missingLastName";
    errorMessage = "Please provide your last name.";
  } else if (!email) {
    validationError = "missingEmail";
    errorMessage = "Please provide your email address.";
  } else if (!password) {
    validationError = "missingPassword";
    errorMessage = "Please provide your password.";
  } else if (password !== confirm_password) {
    validationError = "passwordMismatch";
    errorMessage = "Please match your password.";
  }
  if (validationError) {
    swal(errorMessage);
  } else {
    try {
      const response = await fetch(CREATEACCOUNT_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        swal(result.message);
      }
    } catch (error) {
      swal("Something went wrong.");
    }
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  }
};
