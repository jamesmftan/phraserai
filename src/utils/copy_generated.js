export const copyGenerated = async (content, setIsCopy) => {
  if (content) {
    navigator.clipboard.writeText(content).then(() => {
      setIsCopy(true);
      setTimeout(() => setIsCopy(false), 1000);
    });
  }
};
