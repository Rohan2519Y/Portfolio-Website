import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

// Email validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Sanitize input to prevent injection
function sanitizeInput(input: string): string {
  return input.trim().slice(0, 500)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedSubject = sanitizeInput(subject)
    const sanitizedMessage = sanitizeInput(message)

    // Configure your email service
    // For Gmail: Enable 2FA and create an App Password, then use it here
    // For other services: Update the transporter configuration accordingly

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to Rohan (notification)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'rohankumar17645@gmail.com',
      subject: `New Portfolio Contact: ${sanitizedSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Message from Your Portfolio</h2>
          <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
            <p><strong>Subject:</strong> ${sanitizedSubject}</p>
            <hr style="border: none; border-top: 1px solid #d1d5db; margin: 16px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; word-break: break-word;">${sanitizedMessage}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This is an automated notification from your portfolio website.
          </p>
        </div>
      `,
      replyTo: sanitizedEmail,
    }

    // Send email to Rohan
    await transporter.sendMail(mailOptions)

    // Optional: Send confirmation email to the user
    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: sanitizedEmail,
      subject: 'Thank you for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Thank You!</h2>
          <p>Hi ${sanitizedName},</p>
          <p>I received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p><strong>Your Message:</strong></p>
            <p style="white-space: pre-wrap; word-break: break-word;">${sanitizedMessage}</p>
          </div>
          <p>Best regards,<br />Rohan Kumar</p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 24px;">
            © 2024 Rohan Kumar. All rights reserved.
          </p>
        </div>
      `,
    }

    // Send confirmation email
    await transporter.sendMail(confirmationEmail)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)

    // Don't expose internal error details to the client
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
