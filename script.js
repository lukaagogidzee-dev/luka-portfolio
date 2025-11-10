<!DOCTYPE html>
<html lang="ka">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Luka | Front-end Developer</title>
  <link rel="stylesheet" href="style.css">
  
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <header class="fade-in">
    

    <nav>
       <div class="lang-switcher">
  <img src="https://flagcdn.com/w20/ge.png" alt="ქართული" data-lang="ka">
  <img src="https://flagcdn.com/w20/gb.png" alt="English" data-lang="en">
  <img src="https://flagcdn.com/w20/ru.png" alt="Русский" data-lang="ru">
</div>
      <h1 class="logo">luchi<span>.dev</span></h1>
      <ul class="nav-links">
        <li><a href="#about">ჩემს შესახებ</a></li>
        <li><a href="#projects">პროექტები</a></li>
        <li><a href="#contact">კონტაქტი</a></li>
      </ul>
    </nav>
  </header>

  <section id="hero" class="fade-in">
    <div class="hero-text">
      <h2>გამარჯობა, მე ვარ <span>luchi</span> 👋</h2>
      <p>Front-end დეველოპერი, რომელიც სწავლობს Back-end მიმართულებასაც.  
      მიყვარს ინტერაქტიული ინტერფეისების შექმნა, სუფთა კოდი და მომხმარებლისთვის სასიამოვნო გამოცდილება 💻</p>
      <button id="contact-btn">დამიკავშირდი</button>
    </div>
    <img src="me.jpg" alt="Luka profile photo" class="profile-img">

  </section>

  <section id="about" class="fade-in">
    <h2>ჩემს შესახებ</h2>
    <p>
      მე ვარ ვებდეველოპერი, რომელიც ფოკუსირებულია Front-end ტექნოლოგიებზე,  
      თუმცა აქტიურად ვსწავლობ Back-end ნაწილსაც.  
      შემიძლია როგორც დიზაინის აწყობა, ასევე ფუნქციონალური კოდის წერა.  
      ვმუშაობ <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,  
      და მალე <strong>Node.js</strong> & <strong>Express</strong>-ზეც.
    </p>
  </section>
<!-- === SKILLS SECTION === -->
<section id="skills" class="fade-in">
  <h2>ენები და ტექნოლოგიები</h2>
  <div class="skills-grid">
    <div class="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML">
      <p>HTML</p>
    </div>
    <div class="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS">
      <p>CSS</p>
    </div>
    <div class="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript">
      <p>JavaScript</p>
    </div>
    <div class="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React">
      <p>React</p>
    </div>
    <div class="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js">
      <p>Node.js</p>
    </div>
    <div class="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git">
      <p>Git</p>
    </div>
  </div>
</section>

  <section id="projects" class="fade-in">
    <h2>პროექტები</h2>
    <div class="project-grid">
      <div class="project-card">
        <h3>Task Manager App</h3>
        <p>მარტივი, მაგრამ ეფექტური აპლიკაცია სამუშაოების სამართავად.  
        აშენებულია Vanilla JS და LocalStorage-ზე.</p>
      </div>
      <div class="project-card">
        <h3>Weather Dashboard</h3>
        <p>დინამიური ამინდის აპი OpenWeather API-ის გამოყენებით 🌤️</p>
      </div>
      <div class="project-card">
        <h3>Responsive Portfolio</h3>
        <p>მიმზიდველი პორტფოლიო, რომელიც აჩვენებს შენს უნარებსა და პროექტებს 💼</p>
      </div>
    </div>
  </section>

  <section id="contact" class="fade-in">
   
<section id="contact" class="fade-in">
  <h2>დამიკავშირდი</h2>
  <form action="https://formspree.io/f/movyaoqg" method="POST" id="contact-form">
    <input type="text" name="name" placeholder="შენი სახელი" required>
    <input type="email" name="email" placeholder="ელ. ფოსტა" required>
    <textarea name="message" placeholder="შეტყობინება..." required></textarea>
    <button type="submit">გაგზავნა</button>
  </form>

  <!-- ✅ დადასტურების შეტყობინება -->
  <div id="form-success" class="hidden">
    <h3>შეტყობინება წარმატებით გაიგზავნა 🚀</h3>
    <p>გმადლობ, რომ დამიკავშირდი. მალე გიპასუხებ 💬</p>
  </div>
</section>

  </section>

  <footer class="fade-in">
    <p>© 2025 luchi.dev | ვებდეველოპერი, რომელიც ქმნის შთამბეჭდავ გამოცდილებას 🚀</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
