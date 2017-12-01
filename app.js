// adds a new plumber to the database
$('.submit').on('click', function() {
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


$(".schedule").on("click", ()=>{
    //     var employee = {
    //     day: employeeData.day,
    //     slot: employeeData.slot,
    //     jobDescription: document.querySelector("#jobDescription").value,
    //     employerName: document.querySelector("#employerName").value,
    //     employerContact: document.querySelector("#employerContact").value
    // }
    // $.ajax({
    //     type: "POST",
    //     url: "https://innogy-api.herokuapp.com/api/",
    //     data: employee
    // })
alert("help")

})
