// ============================================================
//  PEDALPULSE — EmailJS Configuration
//
//  SETUP INSTRUCTIONS — see README_EMAILJS.md for full guide
//
//  1. Create account at https://www.emailjs.com (free)
//  2. Add Gmail service → connect pedalpulse.com@gmail.com
//  3. Create two email templates (copy from README_EMAILJS.md)
//  4. Replace the placeholder values below with your real IDs
// ============================================================

window.EMAILJS_CONFIG = {
  publicKey:        "1hHEiw6-1DeAIyk-Z",
  serviceId:        "service_21051wn",         // e.g. "service_abc123"
  adminTemplateId:  "template_83qjd9w",  // e.g. "template_newbooking"
  riderTemplateId:  "template_ket4ln9",  // e.g. "template_confirmed"
  adminEmail:       "pedalpulse.com@gmail.com",
};

// Initialise EmailJS with your public key
if (window.EMAILJS_CONFIG.publicKey !== "1hHEiw6-1DeAIyk-Z") {
  emailjs.init({ publicKey: window.EMAILJS_CONFIG.publicKey });
} else {
  console.warn("EmailJS not configured — email notifications are disabled.");
}
