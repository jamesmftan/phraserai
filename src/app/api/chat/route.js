/**const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const generationConfig = {
  stopSequences: ["red"],
  maxOutputTokens: 500,
  temperature: 0.7,
  topP: 0.6,
  topK: 16,
};

const model = genAI.getGenerativeModel({
  model: "gemini-pro",
  generationConfig,
});

export async function POST(request) {
  const { messages } = await request.json();
  const prompt = messages[messages.length - 1].content;
  const result = await model.generateContent(prompt);
  const response = JSON.stringify(result.response.text());
  console.log(response);

  return new Response({ response: response, status: 200 });
}**/

import { GoogleGenerativeAI } from "@google/generative-ai";
import { StreamingTextResponse, GoogleGenerativeAIStream } from "ai";

const generationConfig = {
  stopSequences: ["red"],
  temperature: 1,
  topP: 0.6,
  topK: 16,
  maxOutputTokens: 1000,
};

export async function POST(request) {
  const { messages, data } = await request.json();
  const message = `Write an email reply to the sender that appears ${
    data.behavior
  } and conveys ${data.mood} in ${
    data.language
  }. This is the sender's message: ${
    messages[messages.length - 1].content
  }. Lastly, enclose the reply with double quotation mark.`;
  const prompt = message;
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    generationConfig,
  });
  const streamingResponse = await model.generateContentStream(prompt);
  return new StreamingTextResponse(GoogleGenerativeAIStream(streamingResponse));
}
