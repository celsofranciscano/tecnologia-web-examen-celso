import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET() {
  try {
    const carsales = await prisma.tbcarsales.findMany();
    return NextResponse.json(carsales);
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