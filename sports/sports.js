// ------Slider image function--------------

// Access the Images
let slideImages = document.querySelectorAll('#images');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Code for next button
next.addEventListener('click', slideNext);
function slideNext(){
slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
if(counter >= slideImages.length-1){
    counter = 0;
}
else{
    counter++;
}
slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
indicators();
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
if(counter == 0){
    counter = slideImages.length-1;
}
else{
    counter--;
}
slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
indicators();
}

// Auto slideing
function autoSliding(){
    deletInterval = setInterval(timer, 3000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from the indicators
function indicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

// Add click event to the indicator
function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter){
        return;
    }
    else{
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
    }
    indicators();
}
// ------------xxxx-------------------
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
// ------------xxxx-------------------
// SHOP THE CELEBRITY LOOK
var button = document.getElementById('righta');
button.onclick = function () {
    var container = document.getElementById('container-item-a');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('lefta');
back.onclick = function () {
    var container = document.getElementById('container-item-a');
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
// ------------xxxx-------------------
// SHOP THE CELEBRITY LOOK
var button = document.getElementById('rightb');
button.onclick = function () {
    var container = document.getElementById('container-item-b');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('leftb');
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
// ------------xxxx-------------------
// SHOP THE CELEBRITY LOOK
var button = document.getElementById('rightc');
button.onclick = function () {
    var container = document.getElementById('container-item-c');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('leftc');
back.onclick = function () {
    var container = document.getElementById('container-item-c');
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
// ------------xxxx-------------------
// SHOP THE CELEBRITY LOOK
var button = document.getElementById('rightd');
button.onclick = function () {
    var container = document.getElementById('container-item-d');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('leftd');
back.onclick = function () {
    var container = document.getElementById('container-item-d');
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
// ------------xxxx-------------------
// SHOP THE CELEBRITY LOOK
var button = document.getElementById('righte');
button.onclick = function () {
    var container = document.getElementById('container-item-e');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('lefte');
back.onclick = function () {
    var container = document.getElementById('container-item-e');
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
// ------------xxxx-------------------
// SHOP THE CELEBRITY LOOK
var button = document.getElementById('rightf');
button.onclick = function () {
    var container = document.getElementById('container-item-f');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('leftf');
back.onclick = function () {
    var container = document.getElementById('container-item-f');
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
// ------------xxxx-------------------
// SHOP THE CELEBRITY LOOK
var button = document.getElementById('rightg');
button.onclick = function () {
    var container = document.getElementById('container-item-g');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('leftg');
back.onclick = function () {
    var container = document.getElementById('container-item-g');
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
// ------------xxxx-------------------
// SHOP THE CELEBRITY LOOK
var button = document.getElementById('righth');
button.onclick = function () {
    var container = document.getElementById('container-item-h');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('lefth');
back.onclick = function () {
    var container = document.getElementById('container-item-h');
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
// ------------xxxx-------------------
// SHOP THE CELEBRITY LOOK
var button = document.getElementById('righti');
button.onclick = function () {
    var container = document.getElementById('container-item-i');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('lefti');
back.onclick = function () {
    var container = document.getElementById('container-item-i');
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
// ------------xxxx-------------------
// SHOP THE CELEBRITY LOOK
var button = document.getElementById('rightj');
button.onclick = function () {
    var container = document.getElementById('container-item-j');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('leftj');
back.onclick = function () {
    var container = document.getElementById('container-item-j');
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
// -----------------XXXXXX-----------------------------
function myfunction(smallimg){
    var fullimg = document.getElementById("bigImageA");
    fullimg.src = smallimg.src;
}
function myfunction(smallimg){
    var fullimg = document.getElementById("bigImageB");
    fullimg.src = smallimg.src;
}
function myfunction(smallimg){
    var fullimg = document.getElementById("bigImageC");
    fullimg.src = smallimg.src;
}
function myfunction(smallimg){
    var fullimg = document.getElementById("bigImageD");
    fullimg.src = smallimg.src;
}
function myfunction(smallimg){
    var fullimg = document.getElementById("bigImageE");
    fullimg.src = smallimg.src;
}
function myfunction(smallimg){
    var fullimg = document.getElementById("bigImageF");
    fullimg.src = smallimg.src;
}
function myfunction(smallimg){
    var fullimg = document.getElementById("bigImageG");
    fullimg.src = smallimg.src;
}
function myfunction(smallimg){
    var fullimg = document.getElementById("bigImageH");
    fullimg.src = smallimg.src;
}