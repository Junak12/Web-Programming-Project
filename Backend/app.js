import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

// Root Route
router.get("/", (req, res) => {
  res.send("Welcome to the Gym Website Backend!");
});

// Email Route
router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;

  // Validate if name, email, and message are provided
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    // Send email to the admin with the user's message
    await sendEmail({
      email: process.env.SMTP_MAIL,  // Admin email address
      subject: "GYM WEBSITE CONTACT",
      message,  // User's message
      userEmail: email,  // User's email for the reply
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    // Handle internal server errors
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
