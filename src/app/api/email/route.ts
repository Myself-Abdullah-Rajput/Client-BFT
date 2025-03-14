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
    text: `
        Email Address: ${email}
        Phone: ${phone}
        Departure Destination: ${depDest}
        Arrival Destination: ${arrDest}
        Departure Date: ${depDate}
        Return Date: ${retDate}
    `,
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