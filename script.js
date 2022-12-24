function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

    let image = document.getElementById("cd");
    let changeText = document.getElementById("breakfst");

    let changeText1 = document.getElementById("text");

    if (hrs >= 12 && hrs <= 15) {
        image.src ="img/Component 31 – 1.jpg";
        changeText.innerHTML = "LET'S HAVE SOME LUNCH !!"
        changeText1.innerHTML ="GOOD AFTERNOON ";
    }

    else if (hrs >= 16 && hrs <= 19) {
        image.src = "img/even_time.jpg";
        changeText.innerHTML ="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        changeText1.innerHTML = "GOOD EVENING !!";
    }

    else if (hrs >= 20 && hrs <= 23) {
        image.src = "img/Component 32 – 1.jpg";
        changeText.innerHTML ="CLOSE YOUR EYES AND GO TO SLEEP"
        changeText1.innerHTML = "GOOD NIGHT !!";
    }

    else if (hrs >= 1 && hrs <= 11){
        image.src = "img/Component 30 – 1.jpg";
        changeText.innerHTML ="GRAB SOME HEALTHY BREAKFAST!!!"
        changeText1.innerHTML = "GOOD MORNING!! WAKE UP !!";
    }

    else{
        alert("Error!!")
    }


    /*adding 0 in time */
    if (hrs <= 9) {
        hrs = "0" + hrs;
    }

    if (min <= 9) {
        min = "0" + min;
    }

    if (sec <= 9) {
        sec = "0" + sec;
    }



    /* running condition for am and pm */
    if (hrs >= 12) {
        session.innerHTML = "PM";
    }
    else {
        session.innerHTML = "AM";
    }
    /* changing time from 24hrs to 12 */
    if (hrs > 12) {
        hrs = hrs - 12;
    }


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;


}




setInterval(displayTime, 1000);


function dataShow() {
    let tim = document.getElementById("tim")
    let tim1 = document.getElementById("tim1")
    let tim2 = document.getElementById("tim2")
    let tim3 = document.getElementById("tim3")


    let tim4 = document.getElementById("tim4")
    let tim5 = document.getElementById("tim5")
    let tim6 = document.getElementById("tim6")
    let tim7 = document.getElementById("tim7")



    tim4.innerHTML = tim.value;
    tim5.innerHTML = tim1.value;
    tim6.innerHTML = tim2.value;
    tim7.innerHTML = tim3.value;
}


document.getElementById("btn").addEventListener("click", dataShow)

