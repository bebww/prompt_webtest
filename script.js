// slider

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};



// header

const navLinks = document.querySelector('.nav-links')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('top-[9%]')
        }


//countdown

 // Set the date we're counting down to
 var countDownDate = new Date("Aug 3, 2024 00:00:00").getTime();
 var countDownDate2 = new Date("July 23, 2024 00:00:00").getTime();
 var countDownDate3 = new Date("Oct 10, 2024 00:00:00").getTime();

 // Update the countdown every 1 second
 var x = setInterval(function() {

     // Get today's date and time
     var now = new Date().getTime();

     // Find the distance between now and the count down date
     var distance = countDownDate - now;
     var distance2 = countDownDate2 - now;
     var distance3 = countDownDate3 - now;

     // Time calculations for days, hours, minutes and seconds
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

     var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    //  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\

     var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
    //  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

     // Display the result in the corresponding elements
     document.getElementById("days").textContent = days + " " + "days";
    //  document.getElementById("hours").textContent = hours + " " + "h";
     
     document.getElementById("days2").textContent = days2 + " " + "days";
    //  document.getElementById("hours2").textContent = hours2 + " " + "h";

     document.getElementById("days3").textContent = days3 + " " + "days";
    //  document.getElementById("hours3").textContent = hours3 + " " + "h";


     // If the count down is over, write some text 
     if (distance < 0) {
         clearInterval(x);
         document.getElementById("countdown").innerHTML = "EXPIRED";
     }
     else if (distance2 < 0) {
        clearInterval(x);
         document.getElementById("countdown").innerHTML = "EXPIRED";
     }
     else if (distance3 < 0) {
        clearInterval(x);
         document.getElementById("countdown").innerHTML = "EXPIRED";
     }
     
 }, 1000);

    