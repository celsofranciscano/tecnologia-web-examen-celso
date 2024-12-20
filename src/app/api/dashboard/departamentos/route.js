import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET() {
  try {
    const departaments = await prisma.tbdepartaments.findMany();
    return NextResponse.json(departaments);
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}