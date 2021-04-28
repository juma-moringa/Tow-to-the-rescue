// $(document).ready(function(){
//   $("#road rescue-image").click(function(){
//     $("#road rescue-image").slideDown('1500').hide('1000');
//     $("#road rescue").show('1500');
//   });
//   $("#road rescue").click(function(){
//     $("#road rescue").slideUp('1500');
//     $("#road rescue-image").slideDown('1500');
//   });
// });

// $(document).ready(function(){
//   $("#towing & breakdown-image").click(function(){
//     $("#towing & breakdown-image").slideDown('1500').hide('1000');
//     $("#breakdown").show('1500');
//   });
//   $("#breakdown").click(function(){
//     $("#breakdown").slideUp('1500');
//     $("#towing & breakdown-image").slideDown('1500');
//   });
// });

// $(document).ready(function(){
//   $("#forklift & crane image").click(function(){
//     $("#forklift & crane image").slideDown('1500').hide('1000');
//     $("#forklift").show('1500');
//   });
//   $("#forklift").click(function(){
//     $("#forklift").slideUp('1500');
//     $("#forklift & crane image").slideDown('1500');
//   });
// });

// $(document).ready(function(){
//   $("#mobile car wash image").click(function(){
//     $("#mobile car wash image").slideDown('1500').hide('1000');
//     $("#mobile car wash").show('1500');
//   });
//   $("#mobile car wash").click(function(){
//     $("#mobile car wash").slideUp('1500');
//     $("#mobile car wash image").slideDown('1500');
//   });
// });
// toggle effect
$(document).ready(function(){
  $("#design1").click(function(){
    $("#road-rescue-image").toggle();
    $("#road-rescue").toggle();
  });
});
$(document).ready(function(){
  $("#design2").click(function(){
    $("#towing-breakdown-image").toggle();
    $("#towing-breakdown").toggle();
  });
});
$(document).ready(function(){
  $("#design3").click(function(){
    $("#forklift-crane-image").toggle();
    $("#forklift-crane-hire").toggle();
  });
}); 
$(document).ready(function(){
  $("#design4").click(function(){
    $("#mobile-car-wash-image").toggle();
    $("#mobile-car-wash").toggle();
  });
}); 