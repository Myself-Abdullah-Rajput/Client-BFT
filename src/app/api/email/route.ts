import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, phone, depDate, retDate, depDest, arrDest } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.NEXT_EMAIL_ADDRESS,
      pass: process.env.NEXT_EMAIL_PASSWORD,
    },
  });

const mailOptions: Mail.Options = {
    from: process.env.NEXT_EMAIL_ADDRESS,
    to: process.env.NEXT_EMAIL_ADDRESS,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `New Query from (${email})`,
    html: `
        <div style="width: 100%; display: flex; align-items: center; justify-content: center; padding: 20px 20px; background-color: #f8f9fa;">
            <div style="border: 1px solid #dee2e6; border-radius: 8px; padding: 24px; text-align: center; max-width: 600px; width:90%; background-color: #ffffff; font-family: 'Arial', sans-serif;">
                <div style="font-size: 28px; font-weight: 600; color: #343a40; margin-bottom: 12px;">
                    From ${depDest} To ${arrDest}
                </div>
                <p style="color: #495057; font-size: 16px; margin-bottom: 16px;">${depDate}</p>
                <div style="text-align: left; margin-bottom: 16px;">
                    <label style="color: #212529; font-weight: 600; font-size: 16px; display: block; margin-bottom: 4px;">Return Date:</label>
                    <p style="color: #495057; font-size: 16px; margin: 0;">${retDate}</p>
                </div>
                <div style="text-align: left; margin-bottom: 16px;">
                    <label style="color: #212529; font-weight: 600; font-size: 16px; display: block; margin-bottom: 4px;">Phone:</label>
                    <p style="color: #495057; font-size: 16px; margin: 0;">${phone}</p>
                </div>
                <div style="text-align: left; margin-bottom: 16px;">
                    <label style="color: #212529; font-weight: 600; font-size: 16px; display: block; margin-bottom: 4px;">Email:</label>
                    <p style="color: #495057; font-size: 16px; margin: 0;">${email}</p>
                </div>
            </div>
        </div>
    `
};

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}