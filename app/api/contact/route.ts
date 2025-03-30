import { NextResponse } from 'next/server';

// Zoho CRM API configuration
const ZOHO_CRM_DOMAIN = 'https://www.zohoapis.com';
const ZOHO_CRM_VERSION = 'v2';
const ZOHO_MODULE = 'Leads';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, email, subject, message } = data;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, message: 'All fields are required' },
                { status: 400 },
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Invalid email address' },
                { status: 400 },
            );
        }

        // Get Zoho access token - in production, you should implement proper OAuth flow
        // and token refresh mechanism. This is a simplified example.
        const accessToken = process.env.ZOHO_ACCESS_TOKEN;

        if (!accessToken) {
            console.error('Zoho access token not found');
            return NextResponse.json(
                { success: false, message: 'Configuration error' },
                { status: 500 },
            );
        }

        // Prepare data for Zoho CRM
        const zohoData = {
            data: [
                {
                    Last_Name: name,
                    Email: email,
                    Company: 'Website Lead',
                    Description: `Subject: ${subject}\n\nMessage: ${message}`,
                    Lead_Source: 'Website Contact Form',
                },
            ],
        };

        // Send data to Zoho CRM
        const zohoResponse = await fetch(
            `${ZOHO_CRM_DOMAIN}/crm/${ZOHO_CRM_VERSION}/${ZOHO_MODULE}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Zoho-oauthtoken ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(zohoData),
            },
        );

        const zohoResult = await zohoResponse.json();

        if (!zohoResponse.ok) {
            console.error('Zoho CRM API error:', zohoResult);
            return NextResponse.json(
                { success: false, message: 'Failed to submit to CRM' },
                { status: 500 },
            );
        }

        // Return success response
        return NextResponse.json({
            success: true,
            message: 'Your message has been sent successfully!',
        });
    } catch (error) {
        console.error('Contact form submission error:', error);
        return NextResponse.json(
            { success: false, message: 'An unexpected error occurred' },
            { status: 500 },
        );
    }
}
