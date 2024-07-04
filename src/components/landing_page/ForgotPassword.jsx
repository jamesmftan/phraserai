import { useState } from "react";
import { handleResetPasswordSubmit } from "@/utils/reset_password";
import { handleFormChange } from "@/utils/login";

const ForgotPassword = ({ email, setIsOtp }) => {
  const [form, setForm] = useState({
    password: "",
    confirm_password: "",
  });

  return (
    <div className="justify-center flex items-center h-screen">
      <form
        className="justify-center flex flex-col items-center gap-3 w-full"
        onSubmit={(e) => handleResetPasswordSubmit(e, form, email, setIsOtp)}
      >
        <input
          type="password"
          className="rounded-md outline-none w-3/4 lg:w-[30%] p-2"
          placeholder="New Password"
          onChange={(e) => handleFormChange(e, "password", form, setForm)}
        />
        <input
          type="password"
          className="rounded-md outline-none w-3/4 lg:w-[30%] p-2"
          placeholder="Confirm Password"
          onChange={(e) =>
            handleFormChange(e, "confirm_password", form, setForm)
          }
        />
        <button
          className="text-white hover:text-black bg-black hover:bg-white shadow-lg rounded-md duration-300 w-3/4 lg:w-[30%] p-2"
          type="submit"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
