// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })

  // Section navigation
  const navItems = document.querySelectorAll(".nav-item")
  const sectionBtns = document.querySelectorAll(".section-btn")
  const sections = document.querySelectorAll(".section")

  // Function to show a specific section
  function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
      section.classList.remove("active")
    })
    
    // Show the selected section
    document.getElementById(sectionId).classList.add("active")
    
    // Update active nav item
    navItems.forEach(item => {
      if (item.getAttribute("data-section") === sectionId) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })
    
    // Close mobile menu if open
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // Add click event to nav items
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault()
      const sectionId = item.getAttribute("data-section")
      showSection(sectionId)
    })
  })

  // Add click event to section buttons
  sectionBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      const sectionId = btn.getAttribute("data-section")
      showSection(sectionId)
    })
  })

  // Form submission handling
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Create mailto link with form data
      const mailtoLink = `mailto:example@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
      
      // Open email client
      window.location.href = mailtoLink

      // Show success message
      alert("Opening your email client to send the message. Thank you for reaching out!")

      // Reset form
      contactForm.reset()
    })
  }

  // Add animation on scroll for elements
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".skill-card, .project-card, .about-image")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animated elements
  document.querySelectorAll(".skill-card, .project-card, .about-image").forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll)

  // Run animation on initial load
  animateOnScroll()
})