let time = 25 * 60;

let countdownEl = document.getElementById('countdown');
setInterval(updateCountdown, 1000);


function updateCountdown() {
    
    if(time>=0){
        document.getElementById('yes').style.opacity = 0.0;
        document.getElementById('no').style.opacity = 0.0;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
    
        seconds = seconds < 10 ? '0' + seconds : seconds; 
    
        countdownEl.innerHTML = `${minutes} : ${seconds}`;
        time--;
        
    }
    else {
        
        stopStudy();
    }
     
}


// }
 function stopStudy() {
    time = 5 * 60;
//     //switch elementbyid countdown to different screen
    //    countdownEl.innerHTML = "this session is over! wanna study again?";
    //    document.getElementById('yes').style.opacity = 1.0;
    //    document.getElementById('no').style.opacity = 1.0;
    //    document.getElementById('yes').innerHTML = "yes!";
    //    document.getElementById('no').innerHTML = "no thanks :)";
    
}

function yes() {
    countdownEl.innerHTML = "yay!";
    window.location.href='../screenselection.html'

}

function no() {
    countdownEl.innerHTML = "ok! redirecting you to the home page :)";
    window.location.href='../index.html'
}
