/*const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function whenBroken (){
    return lamp.src.indexOf('quebrada') > -1
}

/////turn on /////
function lampOn(){
    if(!whenBroken()){
        lamp.src = './img/ligada.jpg'
    }
    
}

turnOn.addEventListener('click', lampOn)

////turn off////
function lampOff(){ 
    if(!whenBroken()){
        lamp.src = './img/desligada.jpg'
    }
    
}
   
turnOff.addEventListener('click', lampOff);

//////broken/////
function lampBroken(){
    lamp.src = 'img/quebrada.jpg'
}
lamp.addEventListener('dblclick', lampBroken)

/////mose events/////
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave' , lampOff)*/


const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function whenBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

////lampOn////
function lampOn(){
    if(!whenBroken()){
        lamp.src = './img/ligada.jpg'
    }   
}
turnOn.addEventListener('click', lampOn)

/////lamp off/////
function lampOff(){
    if(!whenBroken()){
        lamp.src = './img/desligada.jpg'
    }       
}
turnOff.addEventListener('click', lampOff)

/////brokenLamp/////
function brokenLamp(){
    lamp.src = './img/quebrada.jpg'
}
lamp.addEventListener('dblclick', brokenLamp)

/////mouse events/////
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)






