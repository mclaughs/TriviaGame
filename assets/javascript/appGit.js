$(document).ready(function() {

  function wrapup() {

    counter = 0;
    $('.card-text').fadeOut();
    var ans1 = $('input[name=1]:checked').val()
    var ans2 = $('input[name=2]:checked').val()
    var ans3 = $('input[name=3]:checked').val()
    var ans4 = $('input[name=4]:checked').val()
    var ans5 = $('input[name=5]:checked').val()
    var ans6 = $('input[name=6]:checked').val()
    var ans7 = $('input[name=7]:checked').val()
    var ans8 = $('input[name=8]:checked').val()
    var ans9 = $('input[name=9]:checked').val()
    var ans10 = $('input[name=10]:checked').val()

    if (ans1 === 'New York Mets') {
      right++
    } else {
      wrong++
    }
    if (ans2 === 'Tom Seaver') {
      right++
    } else {
      wrong++
    }
    if (ans3 === 'all of these') {
      right++
    } else {
      wrong++
    }
    if (ans4 === 'New York Jets') {
      right++
    } else {
      wrong++
    }
    if (ans5 === 'Joe Namath') {
      right++
    } else {
      wrong++
    }
    if (ans6 === 'New York Knicks') {
      right++
    } else {
      wrong++
    }
    if (ans7 === 'Baltimore') {
      right++
    } else {
      wrong++
    }
    if (ans8 === 'July') {
      right++
    } else {
      wrong++
    }
    if (ans9 === 'Neil Armstrong') {
      right++
    } else {
      wrong++
    }
    if (ans10 === 'Richard Nixon') {
      right++
    } else {
      wrong++
    }

    $('#score').text("Correct: " + right + " Incorrect: " + wrong);
    // console.log(ans1, ans2)
  }
  
  var counter = 30;
  $('.card-text').hide();

  $('#start').on('click', function() {
    $('.card-text').fadeIn();
    $('#timer').empty();
    $('#timer').text('time: ' + counter + ' sec')

    setTimeout(countDown, 1000);

    function countDown() {
      if (counter > 0) {
        counter--;
        setTimeout(countDown, 1000);
      } else if (counter == 0) {

        $('#score').text("Correct: " + right + " Incorrect: " + wrong);

      }
      $('#timer').text('time: ' + counter + ' sec')
    }
  })
  var right = 0
  var wrong = 0

  $('#submit').on('click',

  })


});
