import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations";
import { transporter } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate form data
    const validatedData = contactSchema.parse(body);

    // Save contact inquiry
    const contact = await prisma.lead.create({
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

    // Send email notification
   await transporter.sendMail({
      from: `"UMAKAN Technologies" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      replyTo: validatedData.email,

      subject: `New Project Inquiry - ${validatedData.fullName}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; background: #f8f9fa; padding: 30px;">

          <div style="background: #0B0F19; padding: 25px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #ff7900; margin: 0;">
              New Project Inquiry
            </h2>

            <p style="color: #d1d5db; margin-bottom: 0;">
              A new inquiry has been submitted through the UMAKAN Technologies website.
            </p>
          </div>

          <div style="background: #ffffff; padding: 30px;">

            <p>
              <strong>Name:</strong><br />
              ${validatedData.fullName}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${validatedData.email}
            </p>

            <p>
              <strong>Phone:</strong><br />
              ${validatedData.phone || "Not provided"}
            </p>

            <p>
              <strong>Company:</strong><br />
              ${validatedData.company || "Not provided"}
            </p>

            <p>
              <strong>Service:</strong><br />
              ${validatedData.services || "Not selected"}
            </p>

            <p>
              <strong>Budget:</strong><br />
              ${validatedData.budget || "Not selected"}
            </p>

            <p>
              <strong>Timeline:</strong><br />
              ${validatedData.timeline || "Not selected"}
            </p>

            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 25px 0;" />

            <p>
              <strong>Project Details</strong>
            </p>

            <p style="line-height: 1.7; color: #4b5563;">
              ${validatedData.message}
            </p>

          </div>

          <div style="background: #111827; padding: 18px; text-align: center; border-radius: 0 0 12px 12px;">
            <p style="color: #ff7900; margin: 0; font-size: 13px;">
              UMAKAN Technologies Website Contact Form
            </p>
          </div>

        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your project inquiry has been submitted successfully.",
        contactId: contact.id,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the information you entered.",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}