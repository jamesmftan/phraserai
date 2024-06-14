import { signIn } from "next-auth/react";
import { swal } from "@/utils/sweet_alert_two";

export const handleFormChange = (e, name, form, setForm) => {
  setForm({ ...form, [name]: e.target.value });
};

export const handleLoginSubmit = async (e, form, router) => {
  e.preventDefault();
  const { email, password } = form;
  let validationError = "";
  let errorMessage = "";
  if (!email) {
    validationError = "missingEmail";
    errorMessage = "Please provide your email address.";
  } else if (!password) {
    validationError = "missingPassword";
    errorMessage = "Please provide your password.";
  }
  if (validationError) {
    swal(errorMessage);
  } else {
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (response.error) {
        swal(response.error);
      }
      router.replace("main");
    } catch (error) {
      swal(error);
    }
  }
};

export const handleGoogleLoginClick = async (e) => {
  e.preventDefault();
  try {
    const response = await signIn("google", { redirect: false });
    if (response.error) {
      swal(response.error);
    }
  } catch (error) {}
};
