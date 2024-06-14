export const toggleVisibility = (e, buttonKey, setEyeStates) => {
  e.preventDefault();
  setEyeStates((prevState) => {
    const newState = !prevState[buttonKey].isEye;
    return {
      ...prevState,
      [buttonKey]: {
        isEye: newState,
        type: newState ? "text" : "password",
      },
    };
  });
};
