$(document).ready(() => {
  $("#header-btn").on("click", function (e) {
    $("#MENU_ID_HERE").toggleClass("active");
    $(".nav-btn").toggleClass("active");
  });

  // Hide menu after clicking menu item
  $(".dropdown-menu li").on("click", function (e) {
    $("#MENU_ID_HERE").removeClass("active");
    $(".nav-btn").removeClass("active");
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
      $(".site-brand").addClass("open");
      $(".overlay").show();
      $(".page").css("overflow", "hidden");
      $(hamburgerMenu).slideDown(600);
      // $(hamburgerIcon).css('background', 'white');
      // $('.logo-text').addClass('white');
      // $('.logo-text').addClass('green-outline');
      menuOpen = true;
    } else {
      $(hamburgerIconBox).removeClass("open");
      $(".site-brand").removeClass("open");
      $(hamburgerMenu).slideUp(600);
      $(".page").css("overflow-x", "hidden");
      $(".page").css("overflow-y", "auto");
      setTimeout(function () {
        $(".overlay").hide();
      }, 550);
      // $(hamburgerIcon).css('background', 'black');
      // $('.logo-text').removeClass('white');
      // $('.logo-text').removeClass('green-outline');
      menuOpen = false;
    }
  });
});

$(document).ready(() => {
  $("html").click(function () {
    $(hamburgerMenu).slideUp(600);
    $(hamburgerIconBox).removeClass("open");
    $(".site-brand").removeClass("open");
    $("body").css("overflow-x", "hidden");
    $("body").css("overflow-y", "auto");
    setTimeout(function () {
      $(".overlay").hide();
    }, 550);
    menuOpen = false;
  });

  $(hamburgerIconBox).click(function (event) {
    event.stopPropagation();
  });

  $(hamburgerMenu).click(function (event) {
    event.stopPropagation();
  });
});

// $(document).ready(() => {
//   let value = $(this).val();
//   $(".input-email").keypress(function() {
//     if($(this).val().length > 1) {
//       console.log("1");
//       $(this).addClass("text-success");
//       $(this).addClass("input-success");
//  } else {
//   $(this).removeClass("text-success");
//   $(this).removeClass("input-success");
//  }
//   })
//   if ($(".input-email").val().length > 0) {
    
//     $("input").keyup(function () {
//         var value = $(this).val();
//         $("input").text(value);
//         console.log($("input"))
//       })
//       .keyup();
//   }
// });

$(document).ready(() => {
  $(".cp-message-form").submit(function (event) {
    console.log("submit");
    if(($(".input-email").val().length > 0  && $(".input-email") != "Email") && ($(".input-phone").val().length > 0 && $(".input-phone") != "Phone") && ($(".input-name").val().length > 0 && $(".input-name") != "Name")) {

      if($(".input-email").val().length < 1 || $(".input-email") == "Email") {
        $(".input-email").addClass("text-danger");
        $(".input-email").addClass("input-error");
        // $(event).preventDefault();
        if($(".input-name").val().length < 1 || $(".input-name") == "Name") {
          $(".input-name").addClass("text-danger");
          $(".input-name").addClass("input-error");
          // $(event).preventDefault();
          if($(".input-phone").val().length < 1 || $(".input-phone") == "Phone") {
            $(".input-phone").addClass("text-danger");
            $(".input-phone").addClass("input-error");
            // $(event).preventDefault();
          }
        }
        // $(event).preventDefault();
      }
      
      $(".input-email").addClass("text-success");
      $(".input-name").addClass("text-success");
      $(".input-phone").addClass("text-success");   
}



    });
});
