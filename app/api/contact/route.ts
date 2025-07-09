import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json()

    // Create the email content
    const emailContent = `
New contact form submission from your portfolio:

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
    `

    // In a real application, you would use a service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // For demonstration, we'll simulate sending the email
    console.log("Email would be sent to: kofiquansah1123@gmail.com")
    console.log("Email content:", emailContent)

    // Here you would integrate with your preferred email service
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'kofiquansah1123@gmail.com',
      from: 'noreply@yourportfolio.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: emailContent,
    })
    */

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
