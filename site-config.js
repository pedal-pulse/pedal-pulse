// ============================================================
//  PEDALPULSE — Site settings you can edit
//  Upload this file to GitHub after changing it.
// ============================================================

window.SITE_CONFIG = {
  // M-Pesa deposit taken when a rider books
  deposit: {
    enabled: true,          // false = hide the deposit step completely
    required: true,         // true = riders must enter an M-Pesa code to book
    amountKES: 500,         // deposit amount in Kenya shillings
    method: "M-Pesa Send Money",
    number: "0737 672 504", // the M-Pesa number riders pay to (CHECK THIS IS CORRECT)
    policy: "Your deposit is deducted from the session price. Cancel at least 24 hours before and we'll move you to another date or refund it."
  }
};
