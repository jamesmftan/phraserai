import connectMongoDB from "@/libs/mongodb";
import Interactions from "@/models/interactions";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { interaction_id } = await req.json();
    await connectMongoDB();
    const interaction = await Interactions.find({ interaction_id });
    if (interaction) {
      await Interactions.deleteOne({ interaction_id });
      return NextResponse.json({
        message: "Successfully Deleted.",
        status: 201,
      });
    }
    return NextResponse.json({
      message: "Failed to load interactions.",
      status: 400,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong.", status: 500 });
  }
}
