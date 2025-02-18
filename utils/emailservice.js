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
export const sendEmail = async ({ to, subject, message }) => {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: "service_3ulxod5", // Replace with your EmailJS service ID
          template_id: "template_6lot4he", // Replace with your EmailJS template ID
          user_id: "6dynyltSEqhkmLhKi", // Replace with your EmailJS user ID
          template_params: {
            to_email: to,
            subject: subject,
            message: message,
          },
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Email sent successfully!", data);
      } else {
        console.error("Email sending failed:", data);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  