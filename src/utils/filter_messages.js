export const filterMessages = (messages) => {
  const assistantMessage = messages.filter((m) => m.role === "assistant");
  const newestMessage = assistantMessage[assistantMessage.length - 1];
  if (newestMessage) {
    const removeDoubleQuatationMark = newestMessage.content.replace(/"/g, "");
    return removeDoubleQuatationMark;
  }
};
