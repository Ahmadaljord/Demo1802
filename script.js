// Creating Time & Date Function//
    function showTime(){
    var date = new Date();
    var y = date.getFullYear();
    var d = date.getDay();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Satuerday"];
    var session = "AM";
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    ;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session +"   "+day[d]+" "+ y;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);  
}
showTime();

// Creating Random Select Function//
let btnRandom =document.querySelector('button');
let result = document.querySelector('a');
var student = ["https://github.com/Ahmadaljord", "https://github.com/ayatnasri","https://github.com/PriyaT21","https://github.com/SerzatDemirer","https://github.com/safaatib01", "https://github.com/PatricAngly","https://github.com/Norriene","https://github.com/blazter99","https://github.com/Zhelle10","https://github.com/mayte2020","https://github.com/87DL","https://github.com/Zarser","https://github.com/Kamaranjro","https://github.com/johljohl","https://github.com/jasmeen14","https://github.com/Hariskonjic","https://github.com/Fx860","https://github.com/FabianBengtsson","https://github.com/EmmieMampel","https://github.com/kedimonmuo","https://github.com/DavidRadu2","https://github.com/ciccilette" ];
// Creating Function//
function getRandomNumber(min,max){
    let step1 = max -min +1;
    let step2 = Math.random()*step1;
    let result = Math.floor(step2) + min;
    return result
}
btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0,student.length-1);
    result.innerText =student[index]; 
    //window.location.href =student[index]; 
    let a= document.createElement('a');
    a.target= '_blank';
    a.href= student[index];
    a.click();
});




