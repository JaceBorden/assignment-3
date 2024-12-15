document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-button");
    const contactPage = document.getElementById("contact-page");
  
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      contactPage.innerHTML = '<p style="font-size: 24px; text-align: center;">Thank you for your message</p>';
    });
  });
  