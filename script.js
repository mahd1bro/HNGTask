// Display current timestamp
const timeElement = document.querySelector('[data-testid="test-user-time"]');
if (timeElement) {
  timeElement.textContent = Date.now().toLocaleString();
}

// Verify avatar attributes 
const avatar = document.querySelector('[data-testid="test-user-avatar"]');
if (avatar) {
  console.log("Avatar found with alt:", avatar.alt);
}

// Ensure all social links exist and have href attributes
const socialLinks = document.querySelector('[data-testid="test-user-social-links"]');
if (socialLinks) {
  const links = socialLinks.querySelectorAll('a');
  links.forEach(link => {
    if (!link.hasAttribute('href')) {
      console.warn("Missing href in social link:", link);
    }
  });
}

// Keyboard responsiveness
links.forEach((link, index) =>{

    link.setAttribute("tabindex", "0")

    link.addEventListener("focus", (e) => {
        e.target.classList.add("Key-board-focused")
        console.log(`Focus on social link: ${e.target.getAttribute("data-testid")}`)
    })

    link.addEventListener("keydown", (e) => {
        if (e.key == "Enter" || e.key == " ") {
            e.preventDefault()
            link.click()
        }
    })
})

// Distinct hobby and dislike lists
const hobbiesList = document.querySelector('[data-testid="test-user-hobbies"]');
const dislikesList = document.querySelector('[data-testid="test-user-dislikes"]');
if (hobbiesList && dislikesList) {
  console.log("Both hobbies and dislikes lists are present.");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const confirmation = document.getElementById("confirmation-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    
    document.querySelectorAll("error-message").forEach(msg => msg.textContent = "");

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

  
    if (!name.value.trim()) {
      document.getElementById("name-error").textContent = "Please enter your full name.";
      name.focus();
      valid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      document.getElementById("email-error").textContent = "Please enter a valid email (name@example.com).";
      email.focus();
      valid = false;
    } else if (!subject.value.trim()) {
      document.getElementById("subject-error").textContent = "Subject is required.";
      subject.focus();
      valid = false;
    } else if (!message.value.trim()) {
      document.getElementById("message-error").textContent = "Message cannot be empty.";
      message.focus();
      valid = false;
    }

    // If valid, show success message
    if (valid) {
      confirmation.style.display = "block";
      confirmation.style.color = "green";
      confirmation.textContent = "Thank you! Your message has been sent successfully.";
      form.reset();
    }
  });
});


