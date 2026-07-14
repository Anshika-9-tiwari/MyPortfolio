import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request

    const validatedData = contactSchema.parse(body);

    // Save Lead

    const lead = await prisma.lead.create({
      data: {
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        services: validatedData.services,
        budget: validatedData.budget,
        timeline: validatedData.timeline,
        message: validatedData.message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully.",
        data: lead,
      },
      { status: 201 }
    );
  } catch (error: any) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.errors?.[0]?.message ||
          "Something went wrong.",
      },
      { status: 400 }
    );
  }
}