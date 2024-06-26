import connectMongoDB from "@/libs/mongodb";
import Interactions from "@/models/interactions";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    await connectMongoDB();
    const interactions = await Interactions.find({ email });
    if (email) {
      return NextResponse.json({ interactions, status: 201 });
    }
    return NextResponse.json({
      message: "Failed to load interactions.",
      status: 400,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong.", status: 500 });
  }
}
