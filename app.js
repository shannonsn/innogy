var output = document.querySelector('.output').innerHTML;
var outputs = Handlebars.compile(output);

// gets all the plumbers in the database
$.ajax({
    type: "GET",
    url: "https://innogy-api.herokuapp.com/api/plumber"
}).then(function(result) {
    console.log(result);
    document.querySelector(".display").innerHTML = outputs({
        plumber: result
    })
});

// adds a new plumber to the database
$('.submit').on('click', () => {
    var plumber = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value,
        contactDetails: document.querySelector('#contactDetails').value,
        email: document.querySelector('#email').value,
    }
    $.ajax({
        type: "POST",
        url: "https://innogy-api.herokuapp.com/api/plumber",
        data: plumber,
        success: function(forceGet) {
            location.reload(forceGet);
        },
    })
    firstName.value = " ";
    lastName.value = " ";
    contactDetails.value = " ";
    email.value = " ";
    alert("A new Plumber has been added")
})

var plumberID = null;

$(".display").on("click", (event) => {
    plumberID = event.target.value;
})


$(".schedule").on("click", (event) => {
    // var days = document.getElementsByClassName("day").value
    // var selectedDay = [];
    //
// var days = document.querySelectorAll('.days')
//     for (var i = 0; i < days.length; i++) {
//         days[i]
//         if (days[i].checked == true){
//             selectedDay.push(days[0])
//         }
//     }


    // days.forEach(function(day){
    //     if (day.checked == true) {
    //         selectedDay = day.value;
    //     }
    // });


    var employee = {
        day: document.querySelector('.day').value,
        slot: document.querySelector(".slot").value,
        jobDescription: document.querySelector("#jobDescription").value,
        employerName: document.querySelector("#employerName").value,
        employerContact: document.querySelector("#employerContact").value
    }
    // console.log(employee.day)


    $.ajax({
        type: "POST",
        url: "https://innogy-api.herokuapp.com/api/" + plumberID + "/booking",
        data: employee,
        success: function(forceGet) {
            location.reload(forceGet);
        },
    })

    // console.log(employee.day);
    alert("your plumber is on their way")
})
