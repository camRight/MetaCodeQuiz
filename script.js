
    // Timer



    let timerCount = 200;
    let timerEl = document.querySelector("#secondsLeft");
    let start = document.querySelector("#start")

let x = window.setInterval( function() {
            timerCount--;
            timerEl.textContent = timerCount

            if (timerCount === 0) {
                clearInterval(x)
            }
        }, 2000)
    // submit start  button
    
    
    start.addEventListener("click", x)
        // var clearDiv = document.getElementById("clearStart")

        // function Clear() {
        //     document.body.clearDiv.parentNode.removeChild(clearDiv);
        // }
  

    // display = document.querySelector("secondsLeft")
    // let timerSecondsPush = document.getElementById("secondsLeft").innerHTML = countSec
    // if finished (
        //localStorage.setItem("initials", "")
    // )


