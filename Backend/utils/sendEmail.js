import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_MAIL,   // Your email address (sender)
      to: process.env.SMTP_MAIL,     // Recipient email address (you, the admin)
      subject: options.subject,      // Email subject
      text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`,  // Email body message
      replyTo: options.userEmail,    // Reply-to field set to the user's email
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully! Message ID: " + info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;  // Rethrow error to be handled by the calling function
  }
};
