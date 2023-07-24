
let btn = document.getElementById('toggleBtn');
let bulb = document.getElementById('bulb');


btn.addEventListener('click', toggleBulb)
  
function toggleBulb(e) {
    if(btn.textContent.includes('On')) {
        bulb.src = "./img/bulb-on.jpg";
        btn.textContent = "Trun Off";
    }else {
        bulb.src = "./img/bulb-off.jpg";
        btn.textContent = "Trun On"
    }
}