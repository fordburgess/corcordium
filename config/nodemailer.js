import nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "leeloureboh.corcordium@gmail.com",
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS
  }
})

export const mailOptions = {
  from: "leeloureboh.corcordium@gmail.com",
  to: "leeloureboh.corcordium@gmail.com",
}
