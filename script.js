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
// === Translations ===
const translations = {
  ka: {
    projects: "პროექტები",
    contact: "კონტაქტი",
    skills: "ენები და ტექნოლოგიები",
    heroTitle: "გამარჯობა, მე ვარ <span>luchi</span> 👋",
    heroText:
      "Front-end დეველოპერი და UI/UX დიზაინერი. მიყვარს თანამედროვე, დინამიკური და მომხმარებელზე ორიენტირებული ინტერფეისების შექმნა. ვცდილობ ყოველი პროექტი იყოს გამართული, ფუნქციური და ესთეტიკურად დახვეწილი 💡",
    skillsList: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
    projectsList: [
      {
        title: "Portfolio Website (Responsive Design)",
        text: "👉 სრულად რეზპონსიული ვებსაიტი შენს შესახებ. აწყობილია HTML, CSS, JS-ზე 🌙 დამატებულია dark/light რეჟიმი.🖌️ UI/UX დიზაინი სრულად შენ მიერ შექმნილი."
      },
      {
        title: "Task Manager App (Vanilla JS + LocalStorage)",
        text: "✅ ამოცანების მენეჯმენტი, შენახვა და რედაქტირება.💾 მონაცემები ინახება ბრაუზერის მეხსიერებაში."
      },
      {
        title: "Weather Dashboard (API Integration)",
        text: "☀️ აჩვენებს ამინდის პროგნოზს OpenWeather API-დან.📍 მოიცავს ქალაქის ძებნის ფუნქციას და ავტომატურ ლოკაციას."
      },
      {
        title: "Logo Design Collection",
        text: "🎨 შექმნილი ბრენდული ლოგოების გალერეა (Figma / Illustrator).💼 სხვადასხვა სტილი — მინიმალისტური, 3D, მოდერნი."
      },
      {
        title: "UI/UX Design System",
        text: "📱 დიზაინის სისტემის პროტოტიპი (Figma-ში შექმნილი).💡 მოიცავს კომპონენტებს, ფერთა პალიტრას და ტიპოგრაფიას."
      },
      {
        title: "Full-Stack Platform",
        text: "⚙️ Node.js + Express.js + MongoDB აპლიკაცია.🧾 ავტორიზაცია, CRUD ფუნქციები, კომენტარები"
      },
      {
        title: "Task Manager App",
        text: "მარტივი, მაგრამ ეფექტური აპლიკაცია სამუშაოების სამართავად. აშენებულია Vanilla JS და LocalStorage-ზე."
      },
      {
        title: "E-Commerce Storefront",
        text: "🛒 პროდუქციის კატალოგი, კალათა და შეკვეთის სისტემა.💳 ინტერაქტიული Checkout UI და რეალური API ინტეგრაცია."
      },
      {
        title: "Landing Page",
        text: "🚀 მოდერნული ლენდინგი ანიმაციებითა და call-to-action ელემენტებით.🎯 SEO-ოპტიმიზაცია და სწრაფი ჩატვირთვა."
      }
    ],
    contactTitle: "დამიკავშირდი",
    contactName: "შენი სახელი",
    contactEmail: "ელ. ფოსტა",
    contactMsg: "შეტყობინება...",
    contactSend: "გაგზავნა",
    formSuccessTitle: "შეტყობინება წარმატებით გაიგზავნა 🚀",
    formSuccessText: "გმადლობ, რომ დამიკავშირდი. მალე გიპასუხებ 💬",
    footer: "© 2025 luchi.dev🚀"
  },
  en: {
    projects: "Projects",
    contact: "Contact",
    skills: "Languages & Technologies",
    heroTitle: "Hi, I'm <span>luchi</span> 👋",
    heroText:
      "Front-end Developer and UI/UX Designer. I love creating modern, dynamic, and user-centered interfaces. I aim for every project to be well-crafted, functional, and aesthetically refined 💡",
    contactBtn: "Contact Me",
    skillsList: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
    projectsList: [
      {
        title: "Portfolio Website (Responsive Design)",
        text: "👉 Fully responsive personal website built with HTML, CSS, and JS.🌙 Includes dark/light mode.🖌️ UI/UX design fully created by you."
      },
      {
        title: "Task Manager App (Vanilla JS + LocalStorage)",
        text: "✅ Manage, save, and edit your daily tasks.💾 Data is stored locally in the browser."
      },
      {
        title: "Weather Dashboard (API Integration)",
        text: "☀️ Displays live weather data from OpenWeather API.📍 Includes city search and automatic location detection."
      },
      {
        title: "Logo Design Collection",
        text: "🎨 Gallery of original logo designs (Figma / Illustrator).💼 Various styles — minimalist, 3D, and modern."
      },
      {
        title: "UI/UX Design System",
        text: "📱 Prototype of a design system created in Figma.💡 Includes components, color palette, and typography setup."
      },
      {
        title: "Full-Stack Platform",
        text: "⚙️ Built with Node.js, Express.js, and MongoDB.🧾 Features authentication, CRUD operations, and comments."
      },
      {
        title: "E-Commerce Storefront",
        text: "🛒 Product catalog, shopping cart, and order system.💳 Interactive checkout UI with real API integration."
      },
      {
        title: "Landing Page",
        text: "🚀 Modern landing page with animations and call-to-action elements.🎯 SEO optimized and lightning-fast loading speed."
      }
    ],
    contactTitle: "Get in Touch",
    contactName: "Your Name",
    contactEmail: "Email",
    contactMsg: "Message...",
    contactSend: "Send",
    formSuccessTitle: "Message Sent Successfully 🚀",
    formSuccessText: "Thanks for reaching out! I’ll get back to you soon 💬",
    footer: "© 2025 luchi.dev🚀"
  },
  ru: {
    projects: "Проекты",
    contact: "Контакты",
    skills: "Языки и технологии",
    heroTitle: "Привет, я <span>luchi</span> 👋",
    heroText:
      "Front-end разработчик и UI/UX дизайнер. Мне нравится создавать современные, динамичные и ориентированные на пользователя интерфейсы. Стремлюсь к тому, чтобы каждый проект был продуманным, функциональным и эстетически совершенным 💡",
    contactBtn: "Связаться со мной",
    skillsList: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
    projectsList: [
     {
        title: "Portfolio Website (Responsive Design)",
        text: "👉 Полностью адаптивный персональный сайт, созданный с использованием HTML, CSS и JS.🌙 Включает тёмный и светлый режимы.🖌️ UI/UX дизайн полностью выполнен вами."
      },
      {
        title: "Task Manager App (Vanilla JS + LocalStorage)",
        text: "✅ Управляйте своими задачами, сохраняйте и редактируйте их.💾 Данные сохраняются локально в браузере."
      },
      {
        title: "Weather Dashboard (API Integration)",
        text: "☀️ Отображает прогноз погоды через OpenWeather API.📍 Есть поиск города и автоматическое определение местоположения."
      },
      {
        title: "Logo Design Collection",
        text: "🎨 Галерея оригинальных логотипов (Figma / Illustrator).💼 Разные стили — минимализм, 3D и современный дизайн."
      },
      {
        title: "UI/UX Design System",
        text: "📱 Прототип дизайн-системы, созданный в Figma.💡 Включает компоненты, цветовую палитру и типографику."
      },
      {
        title: "Full-Stack Platform",
        text: "⚙️ Приложение на Node.js, Express.js и MongoDB.🧾 Авторизация, CRUD-функции и комментарии."
      },
      {
        title: "E-Commerce Storefront",
        text: "🛒 Каталог товаров, корзина и система заказов.💳 Интерактивный Checkout UI и реальная API-интеграция."
      },
      {
        title: "Landing Page",
        text: "🚀 Современный лендинг с анимациями и call-to-action элементами.🎯 SEO-оптимизация и высокая скорость загрузки."
      }
    ],
    contactTitle: "Связаться со мной",
    contactName: "Ваше имя",
    contactEmail: "Эл. почта",
    contactMsg: "Сообщение...",
    contactSend: "Отправить",
    formSuccessTitle: "Сообщение успешно отправлено 🚀",
    formSuccessText: "Спасибо за обращение! Я скоро свяжусь с вами 💬",
    footer: "© 2025 luchi.dev🚀"
  }
};

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

  
  document.querySelector('a[href="#projects"]').textContent = t.projects;
  document.querySelector('a[href="#contact"]').textContent = t.contact;

  document.querySelector("#hero h2").innerHTML = t.heroTitle;
  document.querySelector("#hero p").textContent = t.heroText;
 
  
  document.querySelector("#skills h2").textContent = t.skills;

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
  document.querySelector("footer p").textContent = t.footer;
}

// Floating Contact Card Logic
const floatBtn = document.getElementById('floating-contact-btn');
const floatCard = document.getElementById('floating-contact-card');
const closeFloatCard = document.getElementById('close-contact-card');

// გახსნა
floatBtn.addEventListener('click', (event) => {
  event.stopPropagation(); // რომ body-ზე დაჭერამ მაშინვე არ დახუროს
  floatCard.style.display = 'block';
});

// დახურვა ღილაკით
if (closeFloatCard) {
  closeFloatCard.addEventListener('click', (event) => {
    event.stopPropagation();
    floatCard.style.display = 'none';
  });
}

// ეკრანის ნებისმიერ ადგილას დაჭერისას დახურვა
document.addEventListener('click', (event) => {
  const isClickInside = floatCard.contains(event.target) || floatBtn.contains(event.target);
  if (!isClickInside) {
    floatCard.style.display = 'none';
  }
});
