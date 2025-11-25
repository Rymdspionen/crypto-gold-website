
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, inquiryType, message } = body

    // Validate required fields
    if (!name || !email || !inquiryType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Determine recipient email based on inquiry type
    const recipientEmail = inquiryType === 'investor' 
      ? 'investor@cryptogold.cloud' 
      : 'info@cryptogold.cloud'

    // Determine inquiry type label
    const inquiryTypeLabels: Record<string, string> = {
      investor: 'Investment Inquiry',
      general: 'General Inquiry',
      partnership: 'Partnership Opportunity',
      media: 'Media / Press'
    }

    const inquiryLabel = inquiryTypeLabels[inquiryType] || 'General Inquiry'

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Crypto Gold Website <noreply@cryptogold.cloud>',
      to: [recipientEmail],
      replyTo: email,
      subject: `New ${inquiryLabel} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #d4af37 0%, #f4e5b5 100%);
                color: #000;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border: 1px solid #ddd;
                border-top: none;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #d4af37;
                margin-bottom: 5px;
              }
              .value {
                background: white;
                padding: 10px;
                border-radius: 4px;
                border: 1px solid #ddd;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🏆 New Prospectus Request</h1>
                <p style="margin: 5px 0 0 0;">${inquiryLabel}</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Full Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email Address:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                ${company ? `
                  <div class="field">
                    <div class="label">Company / Organization:</div>
                    <div class="value">${company}</div>
                  </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">Inquiry Type:</div>
                  <div class="value">${inquiryLabel}</div>
                </div>
                
                ${message ? `
                  <div class="field">
                    <div class="label">Message:</div>
                    <div class="value">${message}</div>
                  </div>
                ` : ''}
              </div>
              <div class="footer">
                <p>This inquiry was submitted via the Crypto Gold website contact form.</p>
                <p>Please respond directly to: <a href="mailto:${email}">${email}</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend API Error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your request has been sent successfully!',
        emailId: data?.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
