document.addEventListener('DOMContentLoaded', function() {

  // burger ----------

  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.burger__nav').classList.add('burger__is-active')
  })

  document.querySelector('.burger__close').addEventListener('click', function() {
    document.querySelector('.burger__nav').classList.remove('burger__is-active')
  })

  // search ---------------

  document.querySelector('.header__btn').addEventListener('click', function() {
    document.querySelector('.header__search').classList.add('header__search-active')
  })

  document.querySelector('.search-form__close-btn').addEventListener('click', function() {
    document.querySelector('.header__search').classList.remove('header__search-active')
  })

  // hero-slider --------------

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
  });

  // tabs -----------

  document.querySelectorAll('.stages__list-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.stages__list-btn').forEach(function(btn) {
        btn.classList.remove('stages__list-btn-active')});
      e.currentTarget.classList.add('stages__list-btn-active');

      document.querySelectorAll('.stages__tab').forEach(function(tabsContent) {
        tabsContent.classList.remove('stages__tab-active')});

      document.querySelector(`[data-target="${path}"]`).classList.add('stages__tab-active');
    });
  });

  // accordion ------------

  $(function() {
    $("#accordion").accordion({
      heightStyle: 'content',
      header: '.faq__list-item-title',
      active: true,
      collapsible: true,
    });
  });


})
