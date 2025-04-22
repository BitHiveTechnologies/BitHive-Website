import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Create transporter with your email credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.PASS
      }
    });
    
    // Create a simple HTML template for the email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #f4f4f4; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .footer { background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Subject:</strong> ${body.subject || 'No subject'}</p>
            <h3>Message:</h3>
            <p>${body.message}</p>
          </div>
          <div class="footer">
            <p>This email was sent from your website contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    // Define the email options
    const mailOptions = {
      from: `Your Website <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM,
      replyTo: body.email,
      subject: `Contact Form: ${body.subject || 'New Message'}`,
      html: htmlContent
    };
    
    // Send the email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}