window.onload = function () {
    
    // Timer

    let timerSecondsPush = document.getElementById("secondsLeft").innerHTML = countSec

    let countSec = 200


    // submit start  button
    document.querySelector("#start").addEventListener("click", function () {
        
        
        countSec--;

        if (countSec === 0) {
            clearinterval()
        }
    
    })


    if finished (
        //localStorage.setItem("initials", "")
    )
};

document.forms['']