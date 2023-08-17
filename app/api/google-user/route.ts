import { connectMongoDB } from "@/lib/mongodb";
import GoogleAuthUser from "@/models/googleAuthUser";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { name, email } = await request.json();

  await connectMongoDB();
  await GoogleAuthUser.create({ name, email });
  return NextResponse.json({ message: "User registered"}, { status: 201 })
}