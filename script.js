let hour = 0;
let ap = "";

function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    hour = hrs
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

    
    let changeText = document.getElementById("breakfst");



    if (hrs >= 12 && hrs <= 15) {

        changeText.innerHTML = "LET'S HAVE SOME LUNCH !!"

    }

    else if (hrs >= 16 && hrs <= 19) {
        changeText.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"

    }

    else if (hrs >= 20 && hrs <= 23) {

        changeText.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"

    }

    else if (hrs >= 1 && hrs <= 11) {
        changeText.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!"
    }

    else {
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
        session.innerHTML, ap = "PM";
    }
    else {
        session.innerHTML, ap = "AM";
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


    let tim_0 = tim.value.split(' ');
    let tim_1 = tim1.value.split(' ');
    let tim_2 = tim2.value.split(' ');
    let tim_3 = tim3.value.split(' ');
    console.log(tim_0);
    console.log(tim_1);
    console.log(tim_2);
    console.log(tim_3);
    console.log(ap);
    console.log(hour)


    let changeText1 = document.getElementById("text");
    let image = document.getElementById("cd");

    if (tim.value != "null") {
        changeText1.innerHTML = "GOOD MORNING!! WAKE UP !!";
        if (hour == tim_0[0] && ap == tim_0[1]) {
            image.src = "img/Component 30 – 1.jpg";
        }
        else {
            image.src = "https://live.staticflickr.com/4190/34501106431_ab8bce08ee_h.jpg";
        }

    }

    else if (tim1.value != "null") {
        changeText1.innerHTML = "GOOD AFTERNOON!! HAVE SOME FOOD ";
        if (hour == tim_1[0] && ap == tim_1[1]) {
            image.src = "img/Component 31 – 1.jpg";
        }
        else {
            image.src = "https://live.staticflickr.com/4190/34501106431_ab8bce08ee_h.jpg";
        }

    }

    else if (tim2.value != "null") {

        changeText1.innerHTML = "GOOD EVENING !!";
        if (hour == tim_2[0] && ap == tim_2[1]) {
            image.src = "img/even_time.jpg";
        }
        else {
            image.src = "https://live.staticflickr.com/4190/34501106431_ab8bce08ee_h.jpg";
        }

    }



    else if (tim3.value != "null") {
        changeText1.innerHTML = "GOOD NIGHT !! TAKE SOME SLEEP";
        if (hour == tim_3[0] && ap == tim_3[1]) {
            image.src = "img/Component 32 – 1.jpg";
        }
        else {
            image.src = "https://live.staticflickr.com/4190/34501106431_ab8bce08ee_h.jpg";
        }

    }


    else {

        changeText1.innerHTML = "Set Time!!";
        image.src = "https://live.staticflickr.com/4190/34501106431_ab8bce08ee_h.jpg";
    }



}


document.getElementById("btn").addEventListener("click", dataShow)

