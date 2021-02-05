var ahLink = "./assets/media/images/air-horn.svg"
var chLink = "./assets/media/images/car.svg"
var phLink = "./assets/media/images/party-horn.svg"
var imgLinks = [ahLink,chLink,phLink];

var aSoundLink = "./assets/media/audio/air-horn.mp3"
var cSoundLink = "./assets/media/audio/car-horn.mp3"
var pSoundLink = "./assets/media/audio/party-horn.mp3"
var soundLinks = [aSoundLink,cSoundLink,pSoundLink]



var radios = document.getElementById('audio-selection').elements;
var btn = document.getElementById('honk-btn');
btn.type = 'button';

var img = document.getElementById('sound-image');
var sound = document.getElementById('horn-sound'); 
const rbs = document.querySelectorAll('input[type="radio"]');
rbs[0].addEventListener("click", ()=>{img.src = imgLinks[0];sound.src = soundLinks[0];})
rbs[1].addEventListener("click", ()=>{img.src = imgLinks[1];sound.src = soundLinks[1];})
rbs[2].addEventListener("click", ()=>{img.src = imgLinks[2];sound.src = soundLinks[2];})

btn.addEventListener("click", ()=>{sound.play();});

var volImg = document.getElementById('volume-image');
var num = document.getElementById('volume-number');
var slider = document.getElementById('volume-slider');

function numChange(){
    slider.value=num.value; 
    sound.volume=(slider.value/100);
    var level=0;
    if(num.value>=1 && num.value<=33){level = 1;}
    else if(num.value>=34 && num.value<=66){level = 2;}
    else if(num.value>=67 && num.value<=100){level = 3;}
    volImg.src = "./assets/media/icons/volume-level-"+ level + ".svg";
    if(sound.volume==0){btn.disabled=true;}
    else{btn.disabled=false;}
}

function sliderChange(){
    num.value=slider.value; 
    sound.volume=(slider.value/100);
    var level=0;
    if(num.value>=1 && num.value<=33){level = 1;}
    else if(num.value>=34 && num.value<=66){level = 2;}
    else if(num.value>=67 && num.value<=100){level = 3;}
    volImg.src = "./assets/media/icons/volume-level-"+ level + ".svg"
    if(sound.volume==0){btn.disabled=true;}
    else{btn.disabled=false;}
}
num.addEventListener('change', numChange);
slider.addEventListener('change', sliderChange);







