$(document).ready(function () {

  function displayTime() {
    $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY, HH:mm:ss'))
  }

  setInterval(displayTime, 1000)

  function updateHour() {
    let currentHour = dayjs().hour()
    let timeBlocks = $('.time-block')

    timeBlocks.each(function () {
      let blockHour = parseInt($(this).attr('id'))

      if (currentHour > blockHour) {
        $(this).addClass('past')
      }
      else if (currentHour === blockHour) {
        $(this).removeClass('past')
        $(this).addClass('present')
      }
      else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }


    })



  }

  $('.saveBtn').click(function () {
    let key = $(this).parent().attr("id")

    let sibling = $(this).siblings("textarea").val()
    console.log(sibling)

    localStorage.setItem(key, sibling)


  })

  $(".time-block").each(function() {
    let id = $(this).attr("id")
    $(this).children("textarea").val(localStorage.getItem(id))
  })


  $(".clearBtn").click(function() {
    localStorage.clear()
  })



  updateHour()

  setInterval(updateHour, 15000)

}
)