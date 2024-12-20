import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET() {
  try {
    const employees = await prisma.tbemployees.findMany();
    return NextResponse.json(employees);
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