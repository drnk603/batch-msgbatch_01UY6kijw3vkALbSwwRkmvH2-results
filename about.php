<!--?php
$page_title = 'О компании';
$page_description = 'Узнайте больше о нашей компании, нашей команде и нашей миссии. Мы вдохновляем перемены через инновационные решения.';
$current_page = 'about';
?-->
<!doctype html>
<html lang="ru">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="&lt;?php echo htmlspecialchars($page_description); ?&gt;">
  <meta property="og:title" content="&lt;?php echo htmlspecialchars($page_title); ?&gt;">
  <meta property="og:description" content="&lt;?php echo htmlspecialchars($page_description); ?&gt;">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://domain.com/about.php">
  <meta property="og:image" content="https://domain.com/og-image.jpg">
  <link rel="canonical" href="https://domain.com/about.php">
  <title>&lt;?php echo htmlspecialchars($page_title); ?&gt; | Horizons &amp; Beyond</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
 </head>
 <body>
  <header class="navbar navbar-expand-md sticky-top bg-white border-bottom" role="banner">
   <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="/" aria-label="Mindscape - главная страница"> 
     <svg class="d-inline-block align-text-top" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#E07856" /> <path d="M8 16h16M12 12h8m-4 8h4" stroke="white" stroke-width="2" stroke-linecap="round" />
     </svg> 
     <span class="ms-2">Mindscape</span> 
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Открыть навигацию"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarNav">
     <nav class="navbar-nav ms-auto" role="navigation">
      <a class="nav-link" href="/" aria-current="page">Главная</a> <a class="nav-link" href="/about.php">О нас</a> <a class="nav-link" href="/services.php">Услуги</a> <a class="nav-link" href="/team.php">Команда</a> <a class="nav-link" href="/privacy.php">Приватность</a>
     </nav>
     <a href="#contact-section" class="btn btn-brand ms-md-3 mt-3 mt-md-0">Связаться</a>
    </div>
   </div>
  </header>
  <main>
   <div class="container py-4 py-md-5">
    <nav aria-label="Хлебные крошки" class="mb-4">
     <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/index.php">Главная</a></li>
      <li class="breadcrumb-item active" aria-current="page">О компании</li>
     </ol>
    </nav>
   </div>
   <section class="py-4 py-md-5 border-bottom" data-aos="fade-up">
    <div class="container">
     <div class="row align-items-center gy-4 gy-lg-0">
      <div class="col-lg-6">
       <h1 class="display-5 fw-bold mb-4">Наша история</h1>
       <p class="lead mb-3">Horizons &amp; Beyond была основана с простой, но мощной миссией: помочь организациям трансформировать свои видения в реальность через инновационные решения и стратегическое руководство.</p>
       <p class="mb-3">За более чем десятилетие мы помогли сотням компаний во всем мире достичь их целей и преодолеть самые сложные вызовы. Наш подход основан на глубоком понимании рынка, креативности и неизменной приверженности совершенству.</p>
       <p>Мы верим, что истинный успех приходит не только от стратегии, но и от построения долгосрочных партнерских отношений, основанных на доверии и взаимном уважении.</p>
      </div>
      <div class="col-lg-6">
       <div class="ratio" style="--bs-aspect-ratio: 100%;">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&amp;h=600&amp;fit=crop" alt="Офис компании Horizons &amp; Beyond" class="img-fluid" loading="lazy">
       </div>
      </div>
     </div>
    </div>
   </section>
   <section class="py-4 py-md-5 border-bottom" data-aos="fade-up" data-aos-delay="150">
    <div class="container">
     <h2 class="display-6 fw-bold mb-5 text-center">Наши ценности</h2>
     <div class="row gy-4">
      <div class="col-md-6 col-lg-3">
       <div class="card h-100 d-flex flex-column border-0 shadow-sm">
        <div class="card-body">
         <h3 class="card-title h5 mb-3">Инновация</h3>
         <p class="card-text">Мы постоянно исследуем новые подходы и технологии, чтобы предоставить нашим клиентам передовые решения, которые выделяют их на рынке.</p>
        </div>
       </div>
      </div>
      <div class="col-md-6 col-lg-3">
       <div class="card h-100 d-flex flex-column border-0 shadow-sm">
        <div class="card-body">
         <h3 class="card-title h5 mb-3">Прозрачность</h3>
         <p class="card-text">Честное общение и открытость — основа наших отношений с клиентами. Мы верим в полную прозрачность во всех деловых взаимодействиях.</p>
        </div>
       </div>
      </div>
      <div class="col-md-6 col-lg-3">
       <div class="card h-100 d-flex flex-column border-0 shadow-sm">
        <div class="card-body">
         <h3 class="card-title h5 mb-3">Совершенство</h3>
         <p class="card-text">Мы стремимся к совершенству во всем, что делаем, от качества нашей работы до обслуживания клиентов и внутренней культуры.</p>
        </div>
       </div>
      </div>
      <div class="col-md-6 col-lg-3">
       <div class="card h-100 d-flex flex-column border-0 shadow-sm">
        <div class="card-body">
         <h3 class="card-title h5 mb-3">Партнерство</h3>
         <p class="card-text">Мы рассматриваем наших клиентов как партнеров. Их успех — это наш успех, и мы готовы инвестировать в долгосрочные отношения.</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
   <section class="py-4 py-md-5 border-bottom" data-aos="fade-up" data-aos-delay="300">
    <div class="container">
     <h2 class="display-6 fw-bold mb-5 text-center">Наша команда</h2>
     <div class="row gy-4 justify-content-center">
      <div class="col-md-6 col-lg-4">
       <div class="card h-100 d-flex flex-column border-0 shadow-sm">
        <div class="ratio" style="--bs-aspect-ratio: 100%;">
         <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;h=400&amp;fit=crop" alt="Портрет генерального директора" class="card-img-top img-fluid" loading="lazy">
        </div>
        <div class="card-body d-flex flex-column">
         <h3 class="card-title h5">Александр Морозов</h3>
         <p class="card-text text-muted mb-3">Генеральный директор</p>
         <p class="card-text">Опытный лидер с 20-летним стажем в развитии бизнеса и стратегическом управлении. Вдохновляет команду своим видением и преданностью качеству.</p>
         <a href="/#contact" class="btn btn-sm btn-outline-primary mt-auto">Свяжитесь с ним</a>
        </div>
       </div>
      </div>
      <div class="col-md-6 col-lg-4">
       <div class="card h-100 d-flex flex-column border-0 shadow-sm">
        <div class="ratio" style="--bs-aspect-ratio: 100%;">
         <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&amp;h=400&amp;fit=crop" alt="Портрет руководителя стратегии" class="card-img-top img-fluid" loading="lazy">
        </div>
        <div class="card-body d-flex flex-column">
         <h3 class="card-title h5">Елена Петрова</h3>
         <p class="card-text text-muted mb-3">Директор по стратегии</p>
         <p class="card-text">Стратег с глубокими знаниями в области цифровой трансформации. Помогает клиентам разработать инновационные решения для сложных проблем.</p>
         <a href="/#contact" class="btn btn-sm btn-outline-primary mt-auto">Свяжитесь с ней</a>
        </div>
       </div>
      </div>
      <div class="col-md-6 col-lg-4">
       <div class="card h-100 d-flex flex-column border-0 shadow-sm">
        <div class="ratio" style="--bs-aspect-ratio: 100%;">
         <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&amp;h=400&amp;fit=crop" alt="Портрет главного творческого директора" class="card-img-top img-fluid" loading="lazy">
        </div>
        <div class="card-body d-flex flex-column">
         <h3 class="card-title h5">Дмитрий Сафин</h3>
         <p class="card-text text-muted mb-3">Главный творческий директор</p>
         <p class="card-text">Креативный гений, который превращает идеи в визуальные шедевры. Его инновационный подход помогает брендам выделиться на рынке.</p>
         <a href="/#contact" class="btn btn-sm btn-outline-primary mt-auto">Свяжитесь с ним</a>
        </div>
       </div>
      </div>
     </div>
     <div class="text-center mt-5">
      <a href="/team.php" class="btn btn-lg btn-primary">Посмотреть всю команду</a>
     </div>
    </div>
   </section>
   <section class="py-4 py-md-5 border-bottom" data-aos="fade-up" data-aos-delay="450">
    <div class="container">
     <h2 class="display-6 fw-bold mb-5">Наши достижения</h2>
     <div class="row gy-4">
      <div class="col-md-6 col-lg-3">
       <div class="text-center">
        <p class="display-4 fw-bold text-primary">500+</p>
        <p class="h6 text-muted">Успешных проектов</p>
       </div>
      </div>
      <div class="col-md-6 col-lg-3">
       <div class="text-center">
        <p class="display-4 fw-bold text-primary">150+</p>
        <p class="h6 text-muted">Партнеров по всему миру</p>
       </div>
      </div>
      <div class="col-md-6 col-lg-3">
       <div class="text-center">
        <p class="display-4 fw-bold text-primary">25+</p>
        <p class="h6 text-muted">Лет опыта в индустрии</p>
       </div>
      </div>
      <div class="col-md-6 col-lg-3">
       <div class="text-center">
        <p class="display-4 fw-bold text-primary">99%</p>
        <p class="h6 text-muted">Удовлетворенных клиентов</p>
       </div>
      </div>
     </div>
    </div>
   </section>
   <section class="py-4 py-md-5 border-bottom" id="contact" data-aos="fade-up" data-aos-delay="600">
    <div class="container">
     <h2 class="display-6 fw-bold mb-5 text-center">Свяжитесь с нами</h2>
     <div class="row gy-4">
      <div class="col-lg-6">
       <div class="row gy-4">
        <div class="col-12">
         <h3 class="h6 text-uppercase text-muted mb-2">Адрес</h3>
         <p class="mb-0">ул. Инновационная, 42
          <br>
          Санкт-Петербург, 190000
          <br>
          Россия</p>
        </div>
        <div class="col-12">
         <h3 class="h6 text-uppercase text-muted mb-2">Телефон</h3>
         <p class="mb-0"><a href="tel:+78125551234" class="text-decoration-none">+7 (812) 555-1234</a></p>
        </div>
        <div class="col-12">
         <h3 class="h6 text-uppercase text-muted mb-2">Email</h3>
         <p class="mb-0"><a href="mailto:info@domain.com" class="text-decoration-none">info@domain.com</a></p>
        </div>
       </div>
      </div>
      <div class="col-lg-6">
       <form method="POST" action="#" novalidate>
        <div class="mb-3">
         <label for="contact-name" class="form-label">Ваше имя</label> <input type="text" class="form-control" id="contact-name" name="name" required>
         <div class="invalid-feedback">Пожалуйста, укажите ваше имя.</div>
        </div>
        <div class="mb-3">
         <label for="contact-email" class="form-label">Email</label> <input type="email" class="form-control" id="contact-email" name="email" required>
         <div class="invalid-feedback">Пожалуйста, укажите корректный email.</div>
        </div>
        <div class="mb-3">
         <label for="contact-message" class="form-label">Сообщение</label> <textarea class="form-control" id="contact-message" name="message" rows="4" required></textarea>
         <div class="invalid-feedback">Пожалуйста, напишите ваше сообщение.</div>
        </div>
        <div class="d-flex align-items-center gap-2">
         <button type="submit" class="btn btn-primary">Отправить</button>
         <div class="form-check">
          <input class="form-check-input" type="checkbox" id="consent" name="consent" required> <label class="form-check-label" for="consent">Я согласен с <a href="/privacy.php" class="text-decoration-none">политикой конфиденциальности</a></label>
         </div>
        </div>
       </form>
      </div>
     </div>
    </div>
   </section>
  </main>
  <footer class="bg-dark text-white py-5 py-lg-6">
   <div class="container">
    <div class="row g-5 mb-5">
     <div class="col-12 col-md-4">
      <h3 class="fw-bold mb-3">Mindscape</h3>
      <p class="text-white-50 small">Консультационное агентство, специализирующееся на бизнес-стратегии и трансформации. Помогаем компаниям раскрыть свой потенциал через инновационные решения.</p>
     </div>
     <div class="col-12 col-md-4">
      <h4 class="h6 fw-bold mb-3">Быстрые ссылки</h4>
      <nav aria-label="Footer navigation">
       <ul class="list-unstyled small">
        <li class="mb-2"><a href="/" class="text-white-50 text-decoration-none">Главная</a></li>
        <li class="mb-2"><a href="/about.php" class="text-white-50 text-decoration-none">О нас</a></li>
        <li class="mb-2"><a href="/services.php" class="text-white-50 text-decoration-none">Услуги</a></li>
        <li class="mb-2"><a href="/team.php" class="text-white-50 text-decoration-none">Команда</a></li>
        <li class="mb-2"><a href="/privacy.php" class="text-white-50 text-decoration-none">Приватность</a></li>
       </ul>
      </nav>
     </div>
     <div class="col-12 col-md-4">
      <h4 class="h6 fw-bold mb-3">Контакты</h4>
      <p class="small text-white-50 mb-2"><strong>Адрес:</strong>
       <br>
       ул. Третьякова, 4, офис 520
       <br>
       Москва, 119034, Россия</p>
      <p class="small text-white-50 mb-2"><strong>Телефон:</strong>
       <br>
       <a href="tel:+74955550123" class="text-white-50 text-decoration-none">+7 (495) 555-0123</a></p>
      <p class="small text-white-50"><strong>Email:</strong>
       <br>
       <a href="mailto:info@domain.com" class="text-white-50 text-decoration-none">info@domain.com</a></p>
     </div>
    </div>
    <hr class="border-white-10">
    <div class="row align-items-center">
     <div class="col-12 col-md-6">
      <p class="small text-white-50 mb-0">© 2025 Mindscape. Все права защищены.</p>
     </div>
     <div class="col-12 col-md-6 text-md-end mt-3 mt-md-0">
      <nav aria-label="Footer legal links">
       <ul class="list-unstyled small">
        <li class="d-inline me-3"><a href="/privacy.php" class="text-white-50 text-decoration-none">Политика конфиденциальности</a></li>
       </ul>
      </nav>
     </div>
    </div>
   </div>
  </footer>
  <script src="script.js" defer></script>
 </body>
</html>