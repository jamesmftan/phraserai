import connectMongoDB from "@/libs/mongodb";
import GoogleUsers from "@/models/google_account";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { image, name, email } = await req.json();
    await connectMongoDB();
    const user = await GoogleUsers.findOne({ email });
    if (!user) {
      await GoogleUsers.create({
        image: image,
        name: name,
        email: email,
      });
      return NextResponse.json({
        message: "Your account is successfully created.",
        status: 201,
      });
    }
    return NextResponse.json({
      message: "Your account already exist.",
      status: 409,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong.",
      status: 500,
    });
  }
}
