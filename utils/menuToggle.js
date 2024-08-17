document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.header-nav');
    nav.classList.toggle('active');
    
    if (nav.classList.contains('active')) {
      nav.style.maxHeight = nav.scrollHeight + 'px';
    } else {
      nav.style.maxHeight = null;
    }
  });
  