import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/create_account";
import GoogleUsers from "@/models/google_account";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { first_name, last_name, email, password } = await req.json();
    await connectMongoDB();
    const user = await Users.findOne({ email });
    const googleUser = await GoogleUsers.findOne({ email });
    if (user) {
      return NextResponse.json({
        message: "Your account already exists.",
        status: 409,
      });
    }
    if (googleUser) {
      return NextResponse.json({
        message:
          "Google account already exist. Please login with your google account.",
        status: 409,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);
    await Users.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hashed_password,
    });
    return NextResponse.json({
      message: "Your account is successfully created.",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong.",
      status: 500,
    });
  }
}
