import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure email transporter
// For production, use your actual SMTP settings
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.example.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@example.com',
        pass: process.env.EMAIL_PASSWORD || 'your-password',
    },
});

export async function POST(request: Request) {
    try {
        // Get form data from request
        const formData = await request.json();
        const { name, email, subject, message } = formData;

        // Validate form data
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields' },
                { status: 400 },
            );
        }

        // Email content
        const emailContent = `
      New Contact Form Submission:
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `;

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_FROM || 'website@bithive.in',
            to: process.env.EMAIL_TO || 'buzz@bithive.in',
            subject: `New Contact Form: ${subject}`,
            text: emailContent,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">This email was sent from the BitHive Technologies website contact form.</p>
        </div>
      `,
        };

        try {
            // Send email
            await transporter.sendMail(mailOptions);

            return NextResponse.json(
                { success: true, message: 'Form submitted successfully' },
                { status: 200 },
            );
        } catch (emailError) {
            console.error('Error sending email:', emailError);

            // For development purposes, still return success even if email fails
            // In production, you might want to handle this differently
            if (process.env.NODE_ENV === 'development') {
                console.log('Email would be sent with content:', emailContent);
                return NextResponse.json(
                    {
                        success: true,
                        message: 'Form submitted successfully (email not sent in development)',
                    },
                    { status: 200 },
                );
            }

            throw emailError;
        }
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json({ error: 'Failed to process your request' }, { status: 500 });
    }
}
