const clockTitle = document.querySelector(".js-clock");

function getDays(){
const today = new Date();
const currentYear = today.getFullYear();
const christmas = new Date(currentYear, 11, 25);


const diff = christmas - today;
const days = Math.floor(diff / (1000 * 60 * 60 *24));

//const hours =  String(Math.floor    ((diff % (1000 * 60 * 60 *24)) / (60 * 60 * 1000))).padStart(2 , "0");
const hours     =    Math.floor((diff % (1000 * 60 * 60 * 24)) / (60 * 60 * 1000));

const minutes =  String(Math.floor((diff % ( 60 * 60 * 1000)) / (60 * 1000))).padStart(2 , "0");

const seconds =  String(Math.floor((diff % (60 * 1000)) / (1000))).padStart(2 , "0");


clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

}
getDays()
setInterval(getDays,1000);