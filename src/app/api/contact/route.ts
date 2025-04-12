import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Email to you (the website owner)
        const emailToOwner = {
            to: 'contact@paulabassaganas.com', // Your email address
            from: 'contact@paulabassaganas.com', // Your verified SendGrid sender
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // Confirmation email to the sender
        const confirmationEmail = {
            to: email,
            from: 'contact@paulabassaganas.com', // Your verified SendGrid sender
            subject: 'Thank you for contacting Paula Bassagañas',
            html: `
                <h3>Thank you for reaching out!</h3>
                <p>Dear ${name},</p>
                <p>I have received your message and will get back to you as soon as possible. Here's a copy of your message:</p>
                <p><em>${message}</em></p>
                <br>
                <p>Best regards,</p>
                <p>Paula Bassagañas</p>
            `,
        };

        // Send both emails
        await Promise.all([
            sgMail.send(emailToOwner),
            sgMail.send(confirmationEmail)
        ]);

        return NextResponse.json({
            success: true,
            message: 'Emails sent successfully'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to send email'
            },
            { status: 500 }
        );
    }
} 