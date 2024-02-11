import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const userId = req.headers.get("X-USER-ID");

  if (!userId) {
    return new NextResponse(JSON.stringify({ message: "You are not logged in, please provide token to gain access" }), { status: 401 })
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });

  return NextResponse.json({
    status: "success",
    data: { user: { ...user, password: undefined } },
  });
}