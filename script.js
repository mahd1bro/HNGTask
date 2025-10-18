// Display current timestamp
const timeElement = document.querySelector('[data-testid="test-user-time"]');
if (timeElement) {
  timeElement.textContent = Date.now().toLocaleString();
}

// Verify avatar attributes (optional test logging)
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



