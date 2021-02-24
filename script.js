$('#currentDay').text(moment().format('MMMM Do, YYYY'));

var today = moment();
var currentHour = today.format('HH');
// console.log(currentHour);
if (currentHour < 9) {
    $('.container').children('.row').addClass('future');
} else if (currentHour > 17) {
    $('.container').children('.row').addClass('past');
} else if (currentHour == 9) {
    $('.container').children().first().addClass('present');
    $('.container').children().eq(1).addClass('future');
    $('.container').children().eq(2).addClass('future');
    $('.container').children().eq(3).addClass('future');
    $('.container').children().eq(4).addClass('future');
    $('.container').children().eq(5).addClass('future');
    $('.container').children().eq(6).addClass('future');
    $('.container').children().eq(7).addClass('future');
    $('.container').children().eq(8).addClass('future');
} else if (currentHour == 10) {
    $('.container').children().first().addClass('past');
    $('.container').children().eq(1).addClass('present');
    $('.container').children().eq(2).addClass('future');
    $('.container').children().eq(3).addClass('future');
    $('.container').children().eq(4).addClass('future');
    $('.container').children().eq(5).addClass('future');
    $('.container').children().eq(6).addClass('future');
    $('.container').children().eq(7).addClass('future');
    $('.container').children().eq(8).addClass('future');
} else if (currentHour == 11) {
    $('.container').children().first().addClass('past');
    $('.container').children().eq(1).addClass('past');
    $('.container').children().eq(2).addClass('present');
    $('.container').children().eq(3).addClass('future');
    $('.container').children().eq(4).addClass('future');
    $('.container').children().eq(5).addClass('future');
    $('.container').children().eq(6).addClass('future');
    $('.container').children().eq(7).addClass('future');
    $('.container').children().eq(8).addClass('future');
} else if (currentHour == 12) {
    $('.container').children().first().addClass('past');
    $('.container').children().eq(1).addClass('past');
    $('.container').children().eq(2).addClass('past');
    $('.container').children().eq(3).addClass('present');
    $('.container').children().eq(4).addClass('future');
    $('.container').children().eq(5).addClass('future');
    $('.container').children().eq(6).addClass('future');
    $('.container').children().eq(7).addClass('future');
    $('.container').children().eq(8).addClass('future');
} else if (currentHour == 13) {
    $('.container').children().first().addClass('past');
    $('.container').children().eq(1).addClass('past');
    $('.container').children().eq(2).addClass('past');
    $('.container').children().eq(3).addClass('past');
    $('.container').children().eq(4).addClass('present');
    $('.container').children().eq(5).addClass('future');
    $('.container').children().eq(6).addClass('future');
    $('.container').children().eq(7).addClass('future');
    $('.container').children().eq(8).addClass('future');
} else if (currentHour == 14) {
    $('.container').children().first().addClass('past');
    $('.container').children().eq(1).addClass('past');
    $('.container').children().eq(2).addClass('past');
    $('.container').children().eq(3).addClass('past');
    $('.container').children().eq(4).addClass('past');
    $('.container').children().eq(5).addClass('present');
    $('.container').children().eq(6).addClass('future');
    $('.container').children().eq(7).addClass('future');
    $('.container').children().eq(8).addClass('future');
} else if (currentHour == 15) {
    $('.container').children().first().addClass('past');
    $('.container').children().eq(1).addClass('past');
    $('.container').children().eq(2).addClass('past');
    $('.container').children().eq(3).addClass('past');
    $('.container').children().eq(4).addClass('past');
    $('.container').children().eq(5).addClass('past');
    $('.container').children().eq(6).addClass('present');
    $('.container').children().eq(7).addClass('future');
    $('.container').children().eq(8).addClass('future');
} else if (currentHour == 16) {
    $('.container').children().first().addClass('past');
    $('.container').children().eq(1).addClass('past');
    $('.container').children().eq(2).addClass('past');
    $('.container').children().eq(3).addClass('past');
    $('.container').children().eq(4).addClass('past');
    $('.container').children().eq(5).addClass('past');
    $('.container').children().eq(6).addClass('past');
    $('.container').children().eq(7).addClass('present');
    $('.container').children().eq(8).addClass('future');
} else {
    $('.container').children().first().addClass('past');
    $('.container').children().eq(1).addClass('past');
    $('.container').children().eq(2).addClass('past');
    $('.container').children().eq(3).addClass('past');
    $('.container').children().eq(4).addClass('past');
    $('.container').children().eq(5).addClass('past');
    $('.container').children().eq(6).addClass('past');
    $('.container').children().eq(7).addClass('past');
    $('.container').children().eq(8).addClass('present');
};

$('.saveBtn').on('click', function() {
    var userInput = $(this).siblings('.description').val();
    var timeSlot = $(this).parent().attr('id');
    localStorage.setItem(timeSlot, userInput);
    // console.log(userInput);
    // console.log(timeSlot);
});

$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));