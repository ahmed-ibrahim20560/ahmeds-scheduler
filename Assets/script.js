$(document).ready(function() {

  function displayTime() {
    $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY, HH:mm:ss')) 
  }

  setInterval(displayTime, 1000)



    
  }
)