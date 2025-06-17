// import emailjs from "emailjs-com";

// const SERVICE_ID = "service_3ulxod5"; // Replace with EmailJS Service ID
// const TEMPLATE_ID = "template_6lot4he"; // Replace with EmailJS Template ID
// const USER_ID = "6dynyltSEqhkmLhKi"; // Replace with EmailJS User ID

// export const sendEmail = async ({ to, subject, message }) => {
//   try {
//     const templateParams = {
//       to_email: to,
//       subject: subject,
//       message: message,
//     };

//     await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
//     console.log("Email sent successfully!");
//   } catch (error) {
//     console.error("Email sending failed:", error);
//   }
// };
import emailjs from "emailjs-com";

const SERVICE_ID = "service_3ulxod5"; // Replace with your EmailJS Service ID
const TEMPLATE_ID = "template_6lot4he"; // Replace with your EmailJS Template ID
const PUBLIC_KEY = "6dynyltSEqhkmLhKi"; // Replace with your EmailJS Public Key (not User ID)

export const sendEmail = async ({ to, subject, message }) => {
  try {
    const templateParams = {
      to_email: to,  // Dynamically setting recipient email
      from_name: "Groomify", // Your app name or sender name
      subject: subject,
      message: message,
      reply_to: "yourreply@email.com", // Optional: Set a reply email
    };

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    
    console.log("Email sent successfully!", response.status, response.text);
    return { success: true, message: "Email sent successfully!" };

  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, message: "Failed to send email!" };
  }
};
