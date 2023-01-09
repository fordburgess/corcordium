// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transport } from "../../config/nodemailer";

export default async function handler(req, res) {

  if (req.method === "POST") {
    const data = req.body;

    try {
      await transport.sendMail({
        ...mailOptions,
        subject: "Message from CorCordium User",
        text: `${data.message} -- ${data.name} -- ${data.email}`
      })
      return res.status(200).json({ message: "Mail sent" })
    }
    catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message })
    }
  }
  else
  {
    return res.status(400).json({ message: "Bad Request" })
  }
}
