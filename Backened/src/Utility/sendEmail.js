const nodemailer = require("nodemailer");

const sendEmail = async (to, otp) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `"CampusBaazar" <${process.env.EMAIL_USER}>`,
            to: to,
            subject: "Email Verification - CampusBaazar",
            text: `Your OTP is ${otp}. Valid for 5 minutes. Do not share it with anyone.`,
            html: `<h3>Welcome to CampusBaazar!</h3>
                   <p>Your verification code is: <b style="font-size:24px;">${otp}</b></p>
                   <p>This OTP is valid for <b>5 minutes</b>.</p>`
        });

        console.log("OTP email sent to:", to);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Email service failed");
    }
};

module.exports = sendEmail;