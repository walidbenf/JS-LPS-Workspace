(function() {
    var toggle = document.querySelector('.c-hamburger'),
      menu = document.querySelector('#menu-panel');


    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('is-active');

      (this.classList.contains('is-active') === true) ? menu.classList.toggle('show') : menu.classList.remove('show');
  });
})();
