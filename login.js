/*
* Login page javascript functionalities
* Ville Ilkka, 2017
*/

'use strick';

$(function() {
    $(".login-button").click(function() 
        {
            var elem = document.getElementById("main-response");
            elem.style.color = "red";
            elem.innerHTML = "Käyttäjää ei löytynyt.";
        }
    );
});
