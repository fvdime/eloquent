import prisma from "@/libs/prisma"
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  try {
    return new NextResponse(JSON.stringify({ message: "POST PAGE" }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
}
