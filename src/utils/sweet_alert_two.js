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
