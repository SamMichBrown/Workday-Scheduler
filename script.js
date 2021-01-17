var now = Date.now();
var date = new Date(now);
var currentTime = moment(date).format('dddd, MMMM Do');

var currentDate = document.getElementById("currentDay");
currentDay.innerHTML = currentTime;

var data = localStorage.getItem('events');
if (!data) {
    console.log('localStorage is empty');
}


var events = JSON.parse(data);
console.log('tasks', events);


function renderEvents(events){
    if(localStorage.getItem('events')){
        for (const event of events) {
            var time = event.time
            var row = $(`#${time} textarea`)[0];
            row.innerHTML = event.text
        }
    }
}

renderEvents(events);

$(".saveBtn").click(function(){
 // console.log($(this).prev().val());
 var newEvent = {
     text:$.trim($(this).prev().val()), 
     time:$(this).parent().attr("id")
 }
console.log(newEvent);
if(localStorage.getItem('events')){
    var savedEvents = JSON.parse(localStorage.getItem('events'));
    savedEvents.push(newEvent);
    localStorage.setItem('events', JSON.stringify(savedEvents));
}else{
    var savedEvent = [newEvent]
    localStorage.setItem('events', JSON.stringify(savedEvent));
}
});

// $('#ParentDiv input');
// $("p").click(function(){
//alert("The paragraph was clicked.");
//});
//$( "li.third-item" ).prev()
