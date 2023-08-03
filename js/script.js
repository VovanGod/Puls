 const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    controls: false,
    navPosition: 'bottom',
    nav: true
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

$(document).ready(function() {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleClass(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    };
    toggleClass('.catalog-item__link');
    toggleClass('.catalog-item__back');

    //MODAL

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut();
    });
    $('.catalog__btn').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn();
      });
    });

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.scroll').fadeIn();
      } else {
        $('.scroll').fadeOut();
      }
    });

    new WOW().init();
});