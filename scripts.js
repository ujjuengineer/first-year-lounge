function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_o7krp5l", "template_pcazqis", parms).then(event.preventDefault(), alert("Email sent!!"))
}
