import connectMongoDB from "@/libs/mongodb";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { StreamingTextResponse, GoogleGenerativeAIStream } from "ai";
import Interactions from "@/models/interactions";

const generationConfig = {
  stopSequences: ["red"],
  temperature: 1,
  topP: 0.6,
  topK: 16,
  maxOutputTokens: 1000,
};

export async function POST(req) {
  try {
    const { messages, data } = await req.json();
    const message = `Write an email reply to the sender that appears ${
      data.behavior
    } and conveys ${data.mood} in ${
      data.language
    }. This is the sender's message: ${
      messages[messages.length - 1].content
    }. Lastly, enclose the reply with double quotation mark.`;
    const raw_prompt = messages[messages.length - 1].content;
    const prompt = message;
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig,
    });
    const streamingResponse = await model.generateContentStream(prompt);
    await connectMongoDB();
    const interaction = await Interactions.findOne({
      interaction_id: data.interaction_id,
    });
    if (interaction) {
      await Interactions.updateOne(
        { interaction_id: data.interaction_id },
        { $set: { raw_prompt: raw_prompt, prompt: prompt } }
      );
    } else {
      await Interactions.create({
        interaction_id: data.interaction_id,
        email: data.email,
        raw_prompt: raw_prompt,
        prompt: prompt,
      });
    }
    return new StreamingTextResponse(
      GoogleGenerativeAIStream(streamingResponse)
    );
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong.",
      status: 500,
    });
  }
}

/**
const { GoogleGenerativeAI } = require("@google/generative-ai");
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
}
**/
