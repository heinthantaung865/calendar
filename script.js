var holidays = [];
var holidaysCount = 0;
var yearOfHoliday;
var monthOfHoliday;
var dayOfHoliday;
var currentPage = true;
var chosenMonth;
var chosenYear;
function calendarShow(){
    if(currentPage){
        var date = new Date();
        var first = 1;
        var last = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        var startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        var currentYear = Number(date.getFullYear()) ;
        var currentMonth = Number(date.getMonth());
        for (let index = 0; index < 35; index++) {
            document.getElementsByClassName("day")[index].innerHTML = "";  
            document.getElementsByClassName("day")[index].style.background = "white";  
        }
        for(let i = first; i <= last; i++){
            document.getElementsByClassName("day")[startDay].innerHTML = i  + "";
            for(let j = 0; j < holidays.length; j++){
                if( holidays[j][0] === currentYear && holidays[j][1] === currentMonth && holidays[j][2] === i){
                    document.getElementsByClassName("day")[startDay].style.background = "teal";
                }
            }
            startDay++;
        }
    }
}
function backToCurrent(){
    currentPage = true;
    var date = new Date();
    var first = 1;
    var last = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    var startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    var currentYear = Number(date.getFullYear()) ;
    var currentMonth = Number(date.getMonth());
    for (let index = 0; index < 35; index++) {
        document.getElementsByClassName("day")[index].innerHTML = "";  
        document.getElementsByClassName("day")[index].style.background = "white";  
    }
    for(let i = first; i <= last; i++){
        document.getElementsByClassName("day")[startDay].innerHTML = i  + "";
        for(let j = 0; j < holidays.length; j++){
            if( holidays[j][0] === currentYear && holidays[j][1] === currentMonth && holidays[j][2] === i){
            document.getElementsByClassName("day")[startDay].style.background = "teal";
            }
        }
        startDay++;
    }
}
function showChosenMonth(){
    currentPage = false;
    // Check if there are inputs in year and month boxes
    if(document.getElementById("year").value == "" || document.getElementById("month").value == ""){
        calendarShow();
        alert("Enter year and month that you want to search")
    } else {
        chosenYear = Number(document.getElementById("year").value) ;
        chosenMonth = Number(document.getElementById("month").value) ;
        var date = new Date(chosenYear,chosenMonth);
        var first = 1;
        var last = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        var startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

        //clear calendar
        for (let index = 0; index < 35; index++) {
            document.getElementsByClassName("day")[index].innerHTML = "";  
            document.getElementsByClassName("day")[index].style.background = "white";  
        }

        // Show Chosen Month with holidays marked
        for(let i = first; i <= last; i++){
            document.getElementsByClassName("day")[startDay].innerHTML = i  + "";
            for(let j = 0; j < holidays.length; j++){
                if( holidays[j][0] === chosenYear && holidays[j][1] === chosenMonth && holidays[j][2] === i){
                document.getElementsByClassName("day")[startDay].style.background = "teal";
                }
            }
        startDay++;
        }
    }  
}
function addHoliday(){  
    var holiday = document.getElementById("date").value.split("-");
    yearOfHoliday = Number(holiday[0]);    
    monthOfHoliday = Number(holiday[1]-1);   
    dayOfHoliday = Number(holiday[2]);
    holidays[holidaysCount] = [yearOfHoliday,monthOfHoliday,dayOfHoliday];
    holidaysCount++; 
    if (chosenMonth == monthOfHoliday && chosenYear == yearOfHoliday){
        showChosenMonth();
    } 
    calendarShow();
}