import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

let timerInterval;
export const swal = (message) =>
  withReactContent(Swal).fire({
    title: [message],
    background: "#ffffff",
    color: "#000000",
    confirmButtonText: "Okay",
    confirmButtonColor: "#000000",
    position: "top",
    toast: true,
    timer: 1500,
    timerProgressBar: true,
    willClose: () => {
      clearInterval(timerInterval);
    },
  });

export const swalOtpCode = (e, setEmail, setIsOtp) => {
  e.preventDefault();
  Swal.fire({
    title: "Forgot Your Password?",
    input: "email",
    inputAttributes: {
      autocapitalize: "off",
      placeholder: "Enter Email",
    },
    confirmButtonText: "Submit",
    confirmButtonColor: "#000000",
    showCancelButton: true,
    showLoaderOnConfirm: true,
    preConfirm: async (email) => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_EMAIL_URL, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            email: email,
          }),
        });
        const result = await response.json();
        if (result.status === 201) {
          Swal.fire({
            title: "OTP",
            text: "Please check your email.",
            input: "text",
            inputAttributes: {
              autocapitalize: "off",
              placeholder: "Enter OTP",
            },
            confirmButtonText: "Submit",
            confirmButtonColor: "#000000",
            showCancelButton: true,
            showLoaderOnConfirm: true,
            preConfirm: async (otpCode) => {
              if (otpCode === result.otpCode) {
                setEmail(email);
                setIsOtp(true);
              } else {
                Swal.fire({
                  title: "You have entered an invalid OTP.",
                  confirmButtonText: "Okay",
                  confirmButtonColor: "#000000",
                });
              }
            },
          });
        } else {
          Swal.fire({
            title: result.message,
            confirmButtonText: "Okay",
            confirmButtonColor: "#000000",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Something went wrong.",
          confirmButtonText: "Okay",
          confirmButtonColor: "#000000",
        });
      }
    },
  });
};

/**
    const response = await fetch(
      process.env.NEXT_PUBLIC_DELETEINTERACTIONS_URL,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          interaction_id: i.interaction_id,
        }),
      }
    );
**/
