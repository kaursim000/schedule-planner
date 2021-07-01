
var headerDate = moment();
$("#currentDay").text(headerDate.format("dddd MMMM Do"));

var hour9 = moment().format("h A");
$('label[for="time9"]').text(hour9);

var hour10 = moment().format("h A");
$('label[for="time10"]').text(hour10);

var hour11 = moment().format("h A");
$('label[for="time11"]').text(hour11);

var hour12 = moment().format("h A");
$('label[for="time12"]').text(hour12);

var hour1 = moment().format("h A");
$('label[for="time1"]').text(hour1);

var hour2 = moment().format("h A");
$('label[for="time2"]').text(hour2);

var hour3 = moment().format("h A");
$('label[for="time3"]').text(hour3);

var hour4 = moment().format("h A");
$('label[for="time4"]').text(hour4);

var hour5 = moment().format("h A");
$('label[for="time5"]').text(hour5);




// function handleFormSubmit(event) {
//     // Prevent the default behavior
//     event.preventDefault();
  
//     console.log('First Name:', firstNameEl.val());
//     console.log('Last Name:', lastNameEl.val());
//     console.log('Email:', emailEl.val());
//     console.log('GitHub:', githubEl.val());
  
//     // Select all checked options
//     var checkedEl = $('input:checked');
//     var selected = [];
  
//     // Loop through checked options to store in array
//     $.each(checkedEl, function () {
//       selected.push($(this).val());
//     });
//     console.log('Toppings: ', selected.join(', '));
  
//     // Clear input fields
//     $('input[type="text"]').val('');
//     $('input[type="email"]').val('');
//     $('input[type="checkbox"]').prop('checked', false);
//   }
  
//   // Submit event on the form
//   formEl.on('submit', handleFormSubmit);