import nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fordburgess1@gmail.com",
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS
  }
})

export const mailOptions = {
  from: "fordburgess1@noreply.com",
  to: "fordburgess1@gmail.com",
}
