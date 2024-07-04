import { swal } from "@/utils/sweet_alert_two";

export const deleteInteraction = async (
  i,
  getInteractions,
  session,
  setInteractions,
  addInteractionClick,
  uuidv4,
  setInteractionID,
  setInput,
  setContent
) => {
  try {
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
    const result = await response.json();
    if (response.ok) {
      swal(result.message);
      getInteractions(session, setInteractions);
      addInteractionClick(uuidv4, setInteractionID, setInput, setContent);
    } else {
      swal(result.message);
    }
  } catch (error) {
    console.log("Something went wrong.");
  }
};
