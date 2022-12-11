function sendEmail(){ 
    Email.send({
        Host : "smtp.gmail.com",
        Username : "muchemijames19@gmail.com",
        Password : "",
        To : 'muchemijames19@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}