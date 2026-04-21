<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Cybersecurity Information</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
    crossorigin="anonymous"></script>
  <link href="CSS/style.css" rel="stylesheet" />
</head>

<body>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <img src="images/Logo.svg" alt="Logo" style="max-width:50px;width:100%"
        class="d-inline-block align-text-top navbar-brand">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="quiz.html">Quiz</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="slides.html">Slides</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="login.html" class="nav-link">Login</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <main>
    <div class="container-fluid">
      <h1 class="text-center mt-4 mb-4">Example Header</h1>
      <p class="text-center mb-5">Example Paragraph</p>
    </div>
  </main>

  <footer class="bg-dark">
    <div class="container-fluid text-white">
      <div class="row px-5 py-3">
        <div class="col-lg-5 pb-4 text-center">
          <h1 class="mb-3 mt-0 text-white">Example Label</h1>
          <small class="text-white-50">&copy; Copyright by.</small>
        </div>
        <div class="col-6 col-lg-3 offset-lg-1">
          <h4>Contact Us</h4>
          <ul class="list-unstyled ps-2">
            <li class="mb-2"><a href="mailto:example@email.com">Email: example@email.com</a></li>
            <li class="mb-2"><a href="tel:+11111111111">Phone: (111-111-1111)</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
          <h4>About Us</h4>
          <ul class="list-unstyled ps-2">
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="mb-2"><a href="#">Link 1</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="mb-2"><a href="#">Link 2</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="mb-2"><a href="#">Link 3</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="mb-2"><a href="#">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</body>

</html>