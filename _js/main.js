$(document).ready(() => {

    $('#header-btn').on('click', function(e) {
        $('#MENU_ID_HERE').toggleClass('active');
        $('.nav-btn').toggleClass('active');
    });
    
    // Hide menu after clicking menu item
    $('.dropdown-menu li').on('click', function(e) {
        $('#MENU_ID_HERE').removeClass('active');
        $('.nav-btn').removeClass('active');
    });
    
});


const hamburgerIconBox = $(".hamburger-icon-cont");
const hamburgerIcon = $(".hamburger-icon");
const hamburgerMenu = $(".top-navigation");
let menuOpen = false;

// HAMBURGER BUTTON
$(document).ready(() => {
  $(hamburgerIconBox).on("click", () => {
    if (!menuOpen) {
      $(hamburgerIconBox).addClass("open");
      $('.site-brand').addClass("open");
      $('.overlay').show();
      $('.page').css("overflow", "hidden");
      $(hamburgerMenu).slideDown(600);
      // $(hamburgerIcon).css('background', 'white');
      // $('.logo-text').addClass('white');
      // $('.logo-text').addClass('green-outline');
      menuOpen = true;
    } else {
      $(hamburgerIconBox).removeClass("open");
      $('.site-brand').removeClass("open");
      $(hamburgerMenu).slideUp(600);
      $('.page').css("overflow-x", "hidden");
      $('.page').css("overflow-y", "auto");
      setTimeout(function() {
        $('.overlay').hide();
      }, 550);
      // $(hamburgerIcon).css('background', 'black');
      // $('.logo-text').removeClass('white');
      // $('.logo-text').removeClass('green-outline');
      menuOpen = false;
    }
  });
});

$(document).ready(() => {
  $('html').click(function() {
    $(hamburgerMenu).slideUp(600);
    $(hamburgerIconBox).removeClass("open");
    $('.site-brand').removeClass("open");
    $('body').css("overflow-x", "hidden");
    $('body').css("overflow-y", "auto");
    setTimeout(function() {
      $('.overlay').hide();
    }, 550);
    menuOpen = false;
  });

  $(hamburgerIconBox).click(function(event){
      event.stopPropagation();
  });

  $(hamburgerMenu).click(function(event){
    event.stopPropagation();
});
  
});
