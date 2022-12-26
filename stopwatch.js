var msec = 00; // variable used For mili secord
var sec = 0;   // variable used for second

// Fetching button property by id..............
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
var timeStamp; // get timestamp of interval 
var checkStart =true; // used because when we clicked start TWO times it was unable to stop and reset

//Adding Event listner to buttons...................
buttonStart.addEventListener('click', clockInterval)
buttonStop.addEventListener('click',stopTime);
buttonReset.addEventListener('click', resetTime);

// Function called when click on start button and used for set interval use...........
function clockInterval(){
    if(checkStart==true)
    {
        checkStart=false; // puting condition false when pressed start button ONCE

        timeStamp=setInterval(startTime,10); // interval set for calling at Every 10 ms......
    }
    else{ // if Checksum False then else will run so no impact on clicking start many times
        return;
    }

}

// Function to start time when click on Start button and then set interval called it at 10ms interval.......
function startTime(){
    msec=msec+1; // increase time on every call........

    // for single digit push data in html............
    if(msec<=9) 
    {
        document.getElementById("millisec").innerHTML = "0"+ msec; // setting html for single digit output
    }

    // for Two digit number in milisecond then display data in html......
    if(msec>9 && msec<=99) 
    {
        document.getElementById("millisec").innerHTML = msec;
    }

    // Push millisec tens digit to second , when millisecond cross 99 count
    if(msec>99)
    {
        msec=0; // now start millisec count to 0
        sec=sec+1; // increase now second count
        document.getElementById("sec").innerHTML = "0"+sec;
        document.getElementById("millisec").innerHTML = "0"+msec;
    }

    // Here condition check so Zero should be avoided("13" , instead of "013").........
    if(sec>9)
    {
        document.getElementById("sec").innerHTML = sec;
    }
}

// function to clear interval timeStamp and stop count when stop button clicked...........
function stopTime()
{
    clearInterval(timeStamp); // clear interval method 
    checkStart=true;
}


// Function to clear interval running and reset counter to initial time of "00:00"
function resetTime()
{
    clearInterval(timeStamp); // clear interval
    checkStart=true; // true so we can click on start and counter start
    msec=0; // reset value
    sec=0; // reset value
    document.getElementById('millisec').innerHTML="00"; // setting default html to 00
    document.getElementById('sec').innerHTML="00"; // setting default html to 00
}


