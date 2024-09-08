function showTime() {
    var birthday = new Date(document.getElementById('birthday').valueAsDate)
    console.log(birthday)
    var lifeExpectancy = document.getElementById('life_expectancy').valueAsNumber
    console.log(lifeExpectancy)
    birthday.setFullYear(birthday.getFullYear() + lifeExpectancy)
    console.log(birthday)
    var now = new Date();
    var timeleft = new Date(birthday - now);
    var year = timeleft.getFullYear()-1970;
    var month = timeleft.getMonth();
    var day = timeleft.getDate();
    var hour = timeleft.getHours();
    var minute = timeleft.getMinutes();
    var second = timeleft.getSeconds();
    
    document.getElementById('years').innerHTML = year;
    document.getElementById('months').innerHTML =  month;
    document.getElementById('days').innerHTML =  day;
    document.getElementById('hours').innerHTML =  hour;
    document.getElementById('minutes').innerHTML =  minute;
    document.getElementById('seconds').innerHTML =  second;
    setTimeout(showTime, 1000);
}
