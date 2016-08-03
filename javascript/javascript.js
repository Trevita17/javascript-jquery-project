$(function() {
  var input = prompt('Choose "thick" or "thin". Refresh the page to start again.')
  if (input === "thick") {
    for (var x = 0; x < 16; x++) {
      for (var y = 0; y < 16; y++) {
        $("<div>").addClass("unit1").appendTo("#container");
        $('.unit1').mouseenter(function() {
          $(this).addClass('highlight');
          $('#button1').click('input', function() {
            $('.unit1').removeClass('highlight');
          });
        });
      }
    }
  } else if (input === "thin") {
    for (var x = 0; x < 32; x++) {
      for (var y = 0; y < 32; y++) {
        $("<div>").addClass("unit2").appendTo("#container");
        $('.unit2').mouseenter(function() {
          $(this).addClass('highlight');
          $('#button1').click('input', function() {
            $('.unit2').removeClass('highlight');
          });
        });
      }
    }
  } else if (input === "64") {
    for (var x = 0; x < 64; x++) {
      for (var y = 0; y < 64; y++) {
        $("<div>").addClass("unit3").appendTo("#container");
        $('.unit3').mouseenter(function() {
          $(this).addClass('highlight');
          $('#button1').click('input', function() {
            $('.unit3').removeClass('highlight');
          });
        });
      }
    }
  }
});

