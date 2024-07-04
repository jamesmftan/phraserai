import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/create_account.js";
import { Resend } from "resend";
import { Email } from "../../../../emails/index.jsx";
import { generateOtpCode } from "@/utils/generate_otp_code.js";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email } = await req.json();
    const otpCode = generateOtpCode();
    await connectMongoDB();
    const user = await Users.findOne({ email });
    if (user) {
      const { data, error } = await resend.emails.send({
        from: "PhraserAI <onboarding@resend.dev>",
        to: [email],
        subject: "PHRASERAI: OTP RESET PASSWORD",
        react: Email({ otpCode: otpCode }),
      });
      return NextResponse.json({
        message: "Successfully sent. Please check your email.",
        status: 201,
        otpCode: otpCode,
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
