import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/create_account.js";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    await connectMongoDB();
    const user = await Users.findOne({ email });
    if (user) {
      const salt = await bcrypt.genSalt(10);
      const hashed_password = await bcrypt.hash(password, salt);
      await Users.updateOne(
        { email: email },
        { $set: { password: hashed_password } }
      );
      return NextResponse.json({
        message: "Your password is updated successfully.",
        status: 201,
      });
    } else {
      return NextResponse.json({
        message: "Your account does not exist.",
        status: 404,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong.",
      status: 500,
    });
  }
}
