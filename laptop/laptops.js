let image = document.querySelector(".slider_image");
let translate = 0;

setInterval(()=>{
    if(translate >= 0 && translate < 500){
        translate+=100
    }
    else{
        translate = 0
    }
    image.style.transition = "1s";
    image.style.transform = `translateX(${-translate}%)`
},3000)

function right(){
    if(translate < 500){
        translate+=100
    image.style.transition = "1s";
    image.style.transform = `translatex(${-translate}%)`
    }
}
function left(){
    if(translate > 0){
        translate-=100
    image.style.transition = "1s";
    image.style.transform = `translatex(${-translate}%)`
    }
    console.log("Hi")
}
// Top Pick for Professionals/creators in you
var button = document.getElementById('right');
button.onclick = function () {
    var container = document.getElementById('container-item');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('left');
back.onclick = function () {
    var container = document.getElementById('container-item');
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
// Top Trending Deals
var button = document.getElementById('rightf');
button.onclick = function () {
    var container = document.getElementById('container-Trend');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('leftf');
back.onclick = function () {
    var container = document.getElementById('container-Trend');
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
// Your Laptop, Your Use
var button = document.getElementById('righta');
button.onclick = function () {
    var container = document.getElementById('container-itema');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('lefta');
back.onclick = function () {
    var container = document.getElementById('container-itema');
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
// Your Laptop, Your Use
var button = document.getElementById('rightb');
button.onclick = function () {
    var container = document.getElementById('container-bx');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('leftb');
back.onclick = function () {
    var container = document.getElementById('container-bx');
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
// For Your Budget
var button = document.getElementById('rightc');
button.onclick = function () {
    var container = document.getElementById('container-bxa');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('leftc');
back.onclick = function () {
    var container = document.getElementById('container-bxa');
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}