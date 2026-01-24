"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const email = formData.get("email") as string;
    const inquiry = formData.get("inquiry") as string;

    if (!email || !inquiry) {
        return { success: false, message: "Please fill out all fields." };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact Form <onboarding@resend.dev>", // Default Resend test domain
            to: "christopherbuhendwa2000@gmail.com",
            subject: `New Inquiry from ${email}`,
            text: `Sender: ${email}\n\nMessage:\n${inquiry}`,
            replyTo: email,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, message: "Failed to send email. Please try again." };
        }

        return { success: true, message: "Message sent! I'll get back to you soon." };
    } catch (err) {
        console.error("Server Error:", err);
        return { success: false, message: "Something went wrong. Please try again later." };
    }
}
