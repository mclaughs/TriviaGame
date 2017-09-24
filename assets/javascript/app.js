$(document).ready(function(){

var counter = 30;
$('.card-text').hide();

$('#start').on('click', function(){
   $('.card-text').fadeIn();
   $('#timer').empty();
   $('#timer').text('time: ' + counter + ' sec')

   setTimeout(countDown,1000);
        function countDown(){
           if (counter > 0){
            counter--;
            setTimeout(countDown,1000);
          }else if (counter == 0) {
          //here goes what you want to do after counter reaches 0
         }
        $('#timer').text('time: ' + counter + ' sec')
       }
})
  var score = 0

$('#submit').on('click', function(){
  counter = 0;
$('.card-text').fadeOut();
  var ans1 = $('input[name=1]:checked').val()
  var ans2 = $('input[name=2]:checked').val()
  console.log(ans1)
  if (ans1 === 'New York Mets'){
    score++
    console.log('correct')
  }else{ console.log('wrong')}
  $('#score').text(score)
  // console.log(ans1, ans2)
})


});
