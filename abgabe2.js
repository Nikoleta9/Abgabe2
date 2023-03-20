
function currentDay(){
    const months = [
        "Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
    ];
    const weekday = [
        "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
    ];

    current = new Date();
    return weekday[current.getDay()] + ", " + months[current.getMonth()] + " " + current.getDate() + ", " + current.getFullYear();
}

function currentTime() {
    current = new Date();
    return current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
}

function addLeadingZero(value){
    if (value.length < 2) {
        value = "0" + value;
    }
    if (value.length > 2) {
        throw "Value to big!";
    }
    return value;
}

function timeOnPage(){

    hours = currentTime().substring(0,2) - timer_start.substring(0,2); // momentane Zeit - verbrauchte Zeit
    minutes = currentTime().substring(3,5) - timer_start.substring(3,5);
    seconds = currentTime().substring(6,8) - timer_start.substring(6,8);

    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }

    hours = addLeadingZero(hours);
    minutes = addLeadingZero(minutes);
    seconds = addLeadingZero(seconds);

    alert("Time spent on page: " + hours + ":" + minutes + ":" + seconds);

    date = document.getElementById("date");
    date.innerText = currentDay();

    time = document.getElementById("time");
    time.innerText = currentTime();

    output = document.getElementById("output");
    output.style.visibility = "visible";
}

function refresh(){
    location.reload(true);
}

timer_start = currentTime();