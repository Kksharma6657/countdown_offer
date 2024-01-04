const months = [
    "January",
    "february1",
    "march",
    "april",
    "may",
    "june",
    "juluy",
    'august',
    'september',
    "october",
    'november',
    "december"

];
const weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "firday",
    "saturady"
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
console.log(items)

let offerDate = new Date(2024,0,15,11,59,12);
console.log(offerDate);
const year = offerDate.getFullYear();
let month = offerDate.getMonth();
month = months[month]
const hours = offerDate.getHours();
const minu = offerDate.getMinutes();
const date = offerDate.getDate()

giveaway.innerHTML = `Giveaway ends on ${date} ${month} ${year} ${hours}:${minu}am `

const furturTime = offerDate.getTime(); 

function getRemainingTime(){
    const today = new Date().getTime();
    const t = furturTime - today;
    // console.log(t)

    const oneDay = 24*60*60*1000;
    const oneHours = 60*60*1000;
    const oneMinute = 60*1000;

     //calculating time
     let days = t/oneDay;
     days = Math.floor(days);
     let hours = Math.floor((t% oneDay) / oneHours);
     let minutes = Math.floor((t%oneHours) / oneMinute);
     let seconds = Math.floor((t%oneMinute) / 1000);


     //set values array
     const values = [days,hours,minutes,seconds];
     items.forEach(function(item,index){
    item.innerHTML = values[index]
     })

     if(t<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired </h4>`
     }

}
//countdown settimeinterval
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();