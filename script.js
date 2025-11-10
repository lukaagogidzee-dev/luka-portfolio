// === Smooth scroll ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// === Scroll reveal ===
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
faders.forEach(fade => observer.observe(fade));

// === Formspree success handler ===
const contactForm = document.getElementById("contact-form");
const successMsg = document.getElementById("form-success");

contactForm.addEventListener("submit", async e => {
  e.preventDefault();
  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: contactForm.method,
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      contactForm.reset();
      contactForm.style.display = "none";
      successMsg.style.display = "block";
    } else {
      alert("დაფიქსირდა შეცდომა. სცადე მოგვიანებით ❗");
    }
  } catch {
    alert("ქსელის შეცდომა ❗ შეამოწმე ინტერნეტი.");
  }
});

// === Translations ===
const translations = {
  ka: {
    about: "ჩემს შესახებ",
    projects: "პროექტები",
    contact: "კონტაქტი",
    skills: "ენები და ტექნოლოგიები",
    heroTitle: "გამარჯობა, მე ვარ <span>luchi</span> 👋",
    heroText:
      "Front-end დეველოპერი, რომელიც სწავლობს Back-end მიმართულებასაც. მიყვარს ინტერაქტიური ინტერფეისების შექმნა, სუფთა კოდი და მომხმარებლისთვის სასიამოვნო გამოცდილება 💻",
    contactBtn: "დამიკავშირდი",
    aboutText:
      "მე ვარ ვებდეველოპერი, რომელიც ფოკუსირებულია Front-end ტექნოლოგიებზე, თუმცა აქტიურად ვსწავლობ Back-end ნაწილსაც. შემიძლია როგორც დიზაინის აწყობა, ასევე ფუნქციონალური კოდის წერა. ვმუშაობ HTML, CSS, JavaScript და მალე Node.js & Express-ზე.",
    skillsList: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
    projectsList: [
      {
        title: "Task Manager App",
        text: "მარტივი, მაგრამ ეფექტური აპლიკაცია სამუშაოების სამართავად. აშენებულია Vanilla JS და LocalStorage-ზე."
      },
      {
        title: "Weather Dashboard",
        text: "დინამიური ამინდის აპი OpenWeather API-ის გამოყენებით 🌤️"
      },
      {
        title: "Responsive Portfolio",
        text: "მიმზიდველი პორტფოლიო, რომელიც აჩვენებს შენს უნარებსა და პროექტებს 💼"
      }
    ],
    contactTitle: "დამიკავშირდი",
    contactName: "შენი სახელი",
    contactEmail: "ელ. ფოსტა",
    contactMsg: "შეტყობინება...",
    contactSend: "გაგზავნა",
    formSuccessTitle: "შეტყობინება წარმატებით გაიგზავნა 🚀",
    formSuccessText: "გმადლობ, რომ დამიკავშირდი. მალე გიპასუხებ 💬",
    footer: "© 2025 luchi.dev | ვებდეველოპერი, რომელიც ქმნის შთამბეჭდავ გამოცდილებას 🚀"
  },
  en: {
    about: "About Me",
    projects: "Projects",
    contact: "Contact",
    skills: "Languages & Technologies",
    heroTitle: "Hi, I'm <span>luchi</span> 👋",
    heroText:
      "Front-end developer learning Back-end as well. I love building interactive interfaces, clean code, and user-friendly experiences 💻",
    contactBtn: "Contact Me",
    aboutText:
      "I'm a web developer focused on front-end technologies, actively learning the back-end as well. I can handle both design and coding using HTML, CSS, JavaScript, and soon Node.js & Express.",
    skillsList: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
    projectsList: [
      {
        title: "Task Manager App",
        text: "A simple but effective app to manage tasks. Built using Vanilla JS and LocalStorage."
      },
      {
        title: "Weather Dashboard",
        text: "Dynamic weather dashboard powered by OpenWeather API 🌤️"
      },
      {
        title: "Responsive Portfolio",
        text: "A modern responsive portfolio showcasing skills and projects 💼"
      }
    ],
    contactTitle: "Get in Touch",
    contactName: "Your Name",
    contactEmail: "Email",
    contactMsg: "Message...",
    contactSend: "Send",
    formSuccessTitle: "Message Sent Successfully 🚀",
    formSuccessText: "Thanks for reaching out! I’ll get back to you soon 💬",
    footer: "© 2025 luchi.dev | Web developer crafting stunning experiences 🚀"
  },
  ru: {
    about: "Обо мне",
    projects: "Проекты",
    contact: "Контакты",
    skills: "Языки и технологии",
    heroTitle: "Привет, я <span>luchi</span> 👋",
    heroText:
      "Front-end разработчик, изучающий Back-end. Люблю создавать интерактивные интерфейсы, писать чистый код и делать удобные приложения 💻",
    contactBtn: "Связаться со мной",
    aboutText:
      "Я веб-разработчик, специализирующийся на Front-end, но также активно изучаю Back-end. Умею верстать дизайн и писать функциональный код. Работаю с HTML, CSS, JavaScript и скоро с Node.js & Express.",
    skillsList: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
    projectsList: [
      {
        title: "Task Manager App",
        text: "Простое, но эффективное приложение для управления задачами. Построено на Vanilla JS и LocalStorage."
      },
      {
        title: "Weather Dashboard",
        text: "Динамическое погодное приложение с использованием OpenWeather API 🌤️"
      },
      {
        title: "Responsive Portfolio",
        text: "Современное адаптивное портфолио, показывающее навыки и проекты 💼"
      }
    ],
    contactTitle: "Связаться со мной",
    contactName: "Ваше имя",
    contactEmail: "Эл. почта",
    contactMsg: "Сообщение...",
    contactSend: "Отправить",
    formSuccessTitle: "Сообщение успешно отправлено 🚀",
    formSuccessText: "Спасибо за обращение! Я скоро свяжусь с вами 💬",
    footer: "© 2025 luchi.dev | Веб-разработчик, создающий впечатляющие проекты 🚀"
  }
};

// === Language switcher ===
const langButtons = document.querySelectorAll(".lang-switcher img");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    changeLanguage(lang);
  });
});

function changeLanguage(lang) {
  const t = translations[lang];

  document.querySelector('a[href="#about"]').textContent = t.about;
  document.querySelector('a[href="#projects"]').textContent = t.projects;
  document.querySelector('a[href="#contact"]').textContent = t.contact;

  document.querySelector("#hero h2").innerHTML = t.heroTitle;
  document.querySelector("#hero p").textContent = t.heroText;
  document.querySelector("#contact-btn").textContent = t.contactBtn;

  document.querySelector("#about h2").textContent = t.about;
  document.querySelector("#about p").textContent = t.aboutText;

  document.querySelector("#skills h2").textContent = t.skills;
  const skillNames = document.querySelectorAll("#skills .skill-card p");
  skillNames.forEach((el, i) => (el.textContent = t.skillsList[i]));

  document.querySelector("#projects h2").textContent = t.projects;
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, i) => {
    card.querySelector("h3").textContent = t.projectsList[i].title;
    card.querySelector("p").textContent = t.projectsList[i].text;
  });

  document.querySelector("#contact h2").textContent = t.contactTitle;
  document.querySelector('input[name="name"]').placeholder = t.contactName;
  document.querySelector('input[name="email"]').placeholder = t.contactEmail;
  document.querySelector('textarea[name="message"]').placeholder = t.contactMsg;
  document.querySelector('#contact button[type="submit"]').textContent = t.contactSend;

  document.querySelector("#form-success h3").textContent = t.formSuccessTitle;
  document.querySelector("#form-success p").textContent = t.formSuccessText;

  document.querySelector("footer p").textContent = t.footer;
}
