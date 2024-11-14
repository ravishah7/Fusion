window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  