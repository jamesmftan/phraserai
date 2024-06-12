import { INTERACTIONS_URL } from "@/configuration/index.js";

export const getInteractions = async (session, setInteractions) => {
  try {
    const response = await fetch(INTERACTIONS_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: session?.user?.email,
      }),
    });
    const result = await response.json();
    if (response.ok) {
      result.interactions.sort((a, b) => {
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);
        return dateB - dateA;
      });
      setInteractions(result.interactions);
    }
  } catch (e) {}
};
