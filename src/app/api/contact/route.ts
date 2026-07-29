// import { NextResponse } from "next/server";
// import { ZodError } from "zod";

// import { prisma } from "@/lib/prisma";
// import { contactSchema } from "@/lib/validations";
// import { transporter } from "@/lib/mailer";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     // Validate form data
//     const validatedData = contactSchema.parse(body);

//     // Save contact inquiry
//     const contact = await prisma.lead.create({
//       data: {
//         fullName: validatedData.fullName,
//         email: validatedData.email,
//         phone: validatedData.phone,
//         company: validatedData.company,
//         services: validatedData.services,
//         budget: validatedData.budget,
//         timeline: validatedData.timeline,
//         message: validatedData.message,
//       },
//     });

//     // Send email notification
//    await transporter.sendMail({
//       from: `"UMAKAN Technologies" <${process.env.EMAIL_USER}>`,

//       to: process.env.EMAIL_USER,

//       replyTo: validatedData.email,

//       subject: `New Project Inquiry - ${validatedData.fullName}`,

//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; background: #f8f9fa; padding: 30px;">

//           <div style="background: #0B0F19; padding: 25px; border-radius: 12px 12px 0 0;">
//             <h2 style="color: #ff7900; margin: 0;">
//               New Project Inquiry
//             </h2>

//             <p style="color: #d1d5db; margin-bottom: 0;">
//               A new inquiry has been submitted through the UMAKAN Technologies website.
//             </p>
//           </div>

//           <div style="background: #ffffff; padding: 30px;">

//             <p>
//               <strong>Name:</strong><br />
//               ${validatedData.fullName}
//             </p>

//             <p>
//               <strong>Email:</strong><br />
//               ${validatedData.email}
//             </p>

//             <p>
//               <strong>Phone:</strong><br />
//               ${validatedData.phone || "Not provided"}
//             </p>

//             <p>
//               <strong>Company:</strong><br />
//               ${validatedData.company || "Not provided"}
//             </p>

//             <p>
//               <strong>Service:</strong><br />
//               ${validatedData.services || "Not selected"}
//             </p>

//             <p>
//               <strong>Budget:</strong><br />
//               ${validatedData.budget || "Not selected"}
//             </p>

//             <p>
//               <strong>Timeline:</strong><br />
//               ${validatedData.timeline || "Not selected"}
//             </p>

//             <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 25px 0;" />

//             <p>
//               <strong>Project Details</strong>
//             </p>

//             <p style="line-height: 1.7; color: #4b5563;">
//               ${validatedData.message}
//             </p>

//           </div>

//           <div style="background: #111827; padding: 18px; text-align: center; border-radius: 0 0 12px 12px;">
//             <p style="color: #fffff; margin: 0; font-size: 13px;">
//               UMAKAN Technologies Website Contact Form
//             </p>
//           </div>

//         </div>
//       `,
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Your project inquiry has been submitted successfully.",
//         contactId: contact.id,
//       },
//       { status: 201 }
//     );

//   } catch (error) {
//     console.error("Contact form error:", error);

//     if (error instanceof ZodError) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Please check the information you entered.",
//           errors: error.issues,
//         },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Something went wrong. Please try again.",
//       },
//       { status: 500 }
//     );
//   }
// }


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

    // ================================
    // EMAILS
    // ================================

    try {
      // 1. Notification email to UMAKAN
      await transporter.sendMail({
        from: `"UMAKAN Website" <${process.env.EMAIL_USER}>`,
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
                <strong>Project Details:</strong>
              </p>

              <p style="line-height: 1.7; color: #4b5563;">
                ${validatedData.message}
              </p>

            </div>

            <div style="background: #111827; padding: 18px; text-align: center; border-radius: 0 0 12px 12px;">
              <p style="color: #ffffff; margin: 0; font-size: 13px;">
                UMAKAN Technologies Website Contact Form
              </p>
            </div>

          </div>
        `,
      });

      // 2. Automatic confirmation email to customer
      await transporter.sendMail({
        from: `"UMAKAN Technologies" <${process.env.EMAIL_USER}>`,

        to: validatedData.email,

        replyTo: process.env.EMAIL_USER,

        subject: "We've Received Your Project Inquiry | UMAKAN Technologies",

        html: `
          <div style="font-family: Arial, Helvetica, sans-serif; max-width: 650px; margin: 0 auto; background: #f3f4f6; padding: 30px 15px;">

            <div style="background: #0B0F19; padding: 32px 30px; border-radius: 14px 14px 0 0; text-align: center;">

              <h1 style="color: #ffffff; margin: 0; font-size: 26px;">
                UMAKAN
                <span style="color: #ff7900;"> Technologies</span>
              </h1>

              <p style="color: #9ca3af; margin: 10px 0 0; font-size: 14px;">
                Building Digital Solutions That Grow Businesses
              </p>

            </div>

            <div style="background: #ffffff; padding: 35px 30px;">

              <h2 style="color: #111827; margin: 0 0 20px; font-size: 23px;">
                Thank you for contacting us!
              </h2>

              <p style="color: #4b5563; line-height: 1.7; font-size: 15px;">
                Hi <strong>${validatedData.fullName}</strong>,
              </p>

              <p style="color: #4b5563; line-height: 1.7; font-size: 15px;">
                Thank you for reaching out to UMAKAN Technologies.
                We've successfully received your project inquiry and appreciate
                your interest in working with us.
              </p>

              <p style="color: #4b5563; line-height: 1.7; font-size: 15px;">
                Our team will review your requirements and get back to you as
                soon as possible to discuss your project in more detail.
              </p>

              <div style="background: #fff7ed; border-left: 4px solid #ff7900; padding: 18px 20px; margin: 25px 0; border-radius: 6px;">

                <p style="margin: 0 0 8px; color: #111827; font-weight: bold;">
                  Your Inquiry
                </p>

                <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.7;">
                  <strong>Service:</strong>
                  ${validatedData.services || "Not specified"}
                  <br />

                  <strong>Budget:</strong>
                  ${validatedData.budget || "Not specified"}
                  <br />

                  <strong>Timeline:</strong>
                  ${validatedData.timeline || "Not specified"}
                </p>

              </div>

              <p style="color: #4b5563; line-height: 1.7; font-size: 15px;">
                If you have any additional information, simply reply to this
                email and we'll be happy to help.
              </p>

              <p style="color: #4b5563; line-height: 1.7; margin-top: 30px; font-size: 15px;">
                Regards,
                <br />
                <strong style="color: #111827;">
                  Team UMAKAN Technologies
                </strong>
              </p>

            </div>

            <div style="background: #111827; padding: 25px 20px; text-align: center; border-radius: 0 0 14px 14px;">

              <p style="color: #d1d5db; margin: 0 0 8px; font-size: 13px;">
                info@umakantechnologies.in
              </p>

              <p style="margin: 0 0 15px; font-size: 13px;">
                <a
                  href="https://www.umakantechnologies.in"
                  style="color: #ff7900; text-decoration: none;"
                >
                  www.umakantechnologies.in
                </a>
              </p>

              <p style="color: #6b7280; margin: 0; font-size: 12px;">
                © ${new Date().getFullYear()} UMAKAN Technologies. All rights reserved.
              </p>

            </div>

          </div>
        `,
      });

      console.log("Contact notification and customer confirmation emails sent.");

    } catch (emailError) {
      // Lead is already stored, so don't fail the entire request
      console.error("Contact email sending failed:", emailError);
    }

    // Successful response
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