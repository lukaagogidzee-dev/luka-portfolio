// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll reveal animations
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
faders.forEach(fade => observer.observe(fade));

// ✅ Formspree success handler
const contactForm = document.getElementById("contact-form");
const successMsg = document.getElementById("form-success");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  
  try {
    const response = await fetch(contactForm.action, {
      method: contactForm.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      contactForm.reset();
      contactForm.style.display = "none";
      successMsg.style.display = "block";
    } else {
      alert("დაფიქსირდა შეცდომა. სცადე მოგვიანებით ❗");
    }
  } catch (error) {
    alert("ქსელის შეცდომა ❗ შეამოწმე ინტერნეტ კავშირი.");
  }
});
