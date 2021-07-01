var form1 = $('#form1');
var form2= $('#form2');
var form3= $('#form3');
var form4= $('#form4');
var form5= $('#form5');
var form6= $('#form6');
var form7= $('#form7');
var form8= $('#form8');
var form9= $('#form9');

var headerDate = moment();
$("#currentDay").text(headerDate.format("dddd MMMM Do"));

var hour9 = moment("9 AM", "h A").format("h A")
$('label[for="time9"]').text(hour9);

var hour10 = moment("10 AM", "h A").format("h A")
$('label[for="time10"]').text(hour10);

var hour11 = moment("11 AM", "h A").format("h A")
$('label[for="time11"]').text(hour11);

var hour12 = moment("12 PM", "h A").format("h A")
$('label[for="time12"]').text(hour12);

var hour1 = moment("1 PM", "h A").format("h A")
$('label[for="time1"]').text(hour1);

var hour2 = moment("2 PM", "h A").format("h A")
$('label[for="time2"]').text(hour2);

var hour3 = moment("3 PM", "h A").format("h A")
$('label[for="time3"]').text(hour3);

var hour4 = moment("4 PM", "h A").format("h A")
$('label[for="time4"]').text(hour4);

var hour5 = moment("5 PM", "h A").format("h A")
$('label[for="time5"]').text(hour5);

var input9 = $('input[name="time9"]');
var input10 = $('input[name="time10"]');
var input11 = $('input[name="time11"]');
var input12 = $('input[name="time12"]');
var input1 = $('input[name="time1"]');
var input2 = $('input[name="time2"]');
var input3 = $('input[name="time3"]');
var input4 = $('input[name="time4"]');
var input5 = $('input[name="time5"]');


function handleFormSubmit(event) {
    // Prevent the default behavior
    event.preventDefault();
  
    console.log('9AM:', input9.val());
    
}
form1.on('submit', handleFormSubmit);

function handleFormSubmit2(event) {
    // Prevent the default behavior
    event.preventDefault();
  
    console.log('10AM:', input10.val());
    
}
form2.on('submit', handleFormSubmit2);

function handleFormSubmit3(event) {
    // Prevent the default behavior
    event.preventDefault();
  
    console.log('11AM:', input11.val());
    
}
form3.on('submit', handleFormSubmit3);

function handleFormSubmit4(event) {
    // Prevent the default behavior
    event.preventDefault();
  
    console.log('12PM:', input12.val());
    
}
form4.on('submit', handleFormSubmit4);

function handleFormSubmit5(event) {
    // Prevent the default behavior
    event.preventDefault();
  
    console.log('1PM:', input1.val());
    
}
form5.on('submit', handleFormSubmit5);

function handleFormSubmit6(event) {
    // Prevent the default behavior
    event.preventDefault();
  
    console.log('2PM:', input2.val());
    
}
form6.on('submit', handleFormSubmit6);

function handleFormSubmit7(event) {
    // Prevent the default behavior
    event.preventDefault();
  
    console.log('3PM:', input3.val());
    
}
form7.on('submit', handleFormSubmit7);

function handleFormSubmit8(event) {
    // Prevent the default behavior
    event.preventDefault();
  
    console.log('4PM:', input4.val());
    
}
form8.on('submit', handleFormSubmit8);

function handleFormSubmit9(event) {
    // Prevent the default behavior
    event.preventDefault();
  
    console.log('5PM:', input5.val());
    
}
form9.on('submit', handleFormSubmit9);



// console.log('10AM:', input10.val());
//     console.log('11AM:', input11.val());
//     console.log('12PM:', input12.val());
//     console.log('1PM:', input1.val());
//     console.log('2PM:', input2.val());
//     console.log('3PM:', input3.val());
//     console.log('4PM:', input4.val());
//     console.log('5PM:', input5.val());



localStorage.setItem("inputTime9" , input9.val());
var userInput9 = localStorage.getItem("inputTime9")
console.log(userInput9)