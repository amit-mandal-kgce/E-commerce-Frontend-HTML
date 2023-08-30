// Images Sliding auto
let image = document.querySelector(".slider_image");
let translate = 0;

setInterval(()=>{
    if(translate >= 0 && translate < 100){
        translate+=100
    }
    else{
        translate = 0
    }
    image.style.transition = "1s";
    image.style.transform = `translateX(${-translate}%)`
},5000)

function right(){
    if(translate < 100){
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


// Most loved this week
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="black";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#ffffff');



// SHOP THE CELEBRITY LOOK
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



// Blog
var button = document.getElementById('righta');
button.onclick = function () {
    var container = document.getElementById('containerX-blog');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('lefta');
back.onclick = function () {
    var container = document.getElementById('containerX-blog');
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
// var button = document.getElementById('righta');
// button.onclick = function () {
//     var container = document.getElementById('container-itema');
//     sideScroll(container,'right',25,100,10);
// };

// var back = document.getElementById('lefta');
// back.onclick = function () {
//     var container = document.getElementById('container-itema');
//     sideScroll(container,'left',25,100,10);
// };

// function sideScroll(element,direction,speed,distance,step){
//     scrollAmount = 0;
//     var slideTimer = setInterval(function(){
//         if(direction == 'left'){
//             element.scrollLeft -= step;
//         } else {
//             element.scrollLeft += step;
//         }
//         scrollAmount += step;
//         if(scrollAmount >= distance){
//             window.clearInterval(slideTimer);
//         }
//     }, speed);
// }
// Your Laptop, Your Use
// var button = document.getElementById('rightb');
// button.onclick = function () {
//     var container = document.getElementById('container-bx');
//     sideScroll(container,'right',25,100,10);
// };

// var back = document.getElementById('leftb');
// back.onclick = function () {
//     var container = document.getElementById('container-bx');
//     sideScroll(container,'left',25,100,10);
// };

// function sideScroll(element,direction,speed,distance,step){
//     scrollAmount = 0;
//     var slideTimer = setInterval(function(){
//         if(direction == 'left'){
//             element.scrollLeft -= step;
//         } else {
//             element.scrollLeft += step;
//         }
//         scrollAmount += step;
//         if(scrollAmount >= distance){
//             window.clearInterval(slideTimer);
//         }
//     }, speed);
// }
// For Your Budget
// var button = document.getElementById('rightc');
// button.onclick = function () {
//     var container = document.getElementById('container-bxa');
//     sideScroll(container,'right',25,100,10);
// };

// var back = document.getElementById('leftc');
// back.onclick = function () {
//     var container = document.getElementById('container-bxa');
//     sideScroll(container,'left',25,100,10);
// };

// function sideScroll(element,direction,speed,distance,step){
//     scrollAmount = 0;
//     var slideTimer = setInterval(function(){
//         if(direction == 'left'){
//             element.scrollLeft -= step;
//         } else {
//             element.scrollLeft += step;
//         }
//         scrollAmount += step;
//         if(scrollAmount >= distance){
//             window.clearInterval(slideTimer);
//         }
//     }, speed);
// }