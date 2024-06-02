import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/create_account";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { first_name, last_name, email, password } = await req.json();
  await connectMongoDB();
  const user = await Users.findOne({ email });
  if (!user) {
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
  }
  return NextResponse.json({
    message: "Your account already exist.",
    status: 409,
  });
}
