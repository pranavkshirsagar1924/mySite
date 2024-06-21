import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, note } = req.body;
        
        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "euphony.mails@gmail.com",
                pass: "xnwo nvvz jkva ikrl"
            }
        });

        try {
            // Send email using the transporter
            const info = await transporter.sendMail({
                from: email, // Sender's email address from the form input
                to: "pranavkshirsagar321@gmail.com", // Your email address for receiving emails
                subject: "Connection from your site!",
                text: note + "\n\tSender: " + email, // Body of the email (assuming 'note' contains the message)
            });

            console.log("Email sent:", info.response);
            res.status(200).json({ success: true, message: "Email sent successfully!" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ success: false, message: "Failed to send email." });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
