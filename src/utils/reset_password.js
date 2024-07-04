import { swal } from "@/utils/sweet_alert_two";

export const handleResetPasswordSubmit = async (e, form, email, setIsOtp) => {
  e.preventDefault();
  const { password, confirm_password } = form;
  let validationError = "";
  let errorMessage = "";
  if (!password) {
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
      const response = await fetch(process.env.NEXT_PUBLIC_RESETPASSWORD_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        swal(result.message);
        setIsOtp(false);
      }
    } catch (error) {
      swal("Something went wrong.");
    }
  }
};
