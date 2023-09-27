import { Request, Response } from "express";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = (req: Request, res: Response, values: ContactFormValues): Response<any, Record<string, any>> => {
  if (req.method === "POST") {
    // Validate the values
    if (!values.name || !values.email || !values.subject || !values.message) {
      return res.status(400).json({ message: "Bad Request" });
    }

    // Send the message
    // ...
  }
  return res.status(200).json({ message: "Message sent successfully" });
};
