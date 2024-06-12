import connectMongoDB from "@/libs/mongodb";
import Interactions from "@/models/interactions";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();
  await connectMongoDB();
  const interactions = await Interactions.find({ email });
  return NextResponse.json({ interactions, status: 201 });
}
