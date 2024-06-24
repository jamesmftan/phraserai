//Prompt.jsx
export const dropdownBehaviorClick = (
  e,
  isDropdownBehavior,
  setIsDropdownBehavior,
  setIsDropdownMood,
  setIsDropdownLanguage
) => {
  e.preventDefault();
  setIsDropdownBehavior(!isDropdownBehavior);
  setIsDropdownMood(false);
  setIsDropdownLanguage(false);
};

export const dropdownMoodClick = (
  e,
  isDropdownMood,
  setIsDropdownMood,
  setIsDropdownBehavior,
  setIsDropdownLanguage
) => {
  e.preventDefault();
  setIsDropdownMood(!isDropdownMood);
  setIsDropdownBehavior(false);
  setIsDropdownLanguage(false);
};

export const dropdownLanguageClick = (
  e,
  isDropdownLanguage,
  setIsDropdownLanguage,
  setIsDropdownBehavior,
  setIsDropdownMood
) => {
  e.preventDefault();
  setIsDropdownLanguage(!isDropdownLanguage);
  setIsDropdownBehavior(false);
  setIsDropdownMood(false);
};

export const behaviorSelectClick = (
  e,
  behavior,
  isDropdownBehavior,
  setBehavior,
  setIsDropdownBehavior
) => {
  e.preventDefault();
  setBehavior(behavior);
  setIsDropdownBehavior(!isDropdownBehavior);
};

export const moodSelectClick = (
  e,
  mood,
  isDropdownMood,
  setMood,
  setIsDropdownMood
) => {
  e.preventDefault();
  setMood(mood);
  setIsDropdownMood(!isDropdownMood);
};

export const languageSelectClick = (
  e,
  language,
  isDropdownLanguage,
  setLanguage,
  setIsDropdownLanguage
) => {
  e.preventDefault();
  setLanguage(language);
  setIsDropdownLanguage(!isDropdownLanguage);
};

//Sidebar.jsx
export const sideBarClick = (isSideBarOpen, setIsSideBarOpen) => {
  setIsSideBarOpen(!isSideBarOpen);
};

export const addInteractionClick = (
  uuidv4,
  setInteractionID,
  setInput,
  setContent
) => {
  setInteractionID(uuidv4);
  setInput("");
  setContent("");
};

export const selectInteractionClick = (
  interaction,
  setInteractionID,
  isLargeScreen,
  setInput,
  setContent,
  setIsSideBarOpen
) => {
  setInteractionID(interaction.interaction_id);
  setInput(interaction.raw_prompt);
  setContent("");
  if (!isLargeScreen) {
    setIsSideBarOpen(false);
  }
};
