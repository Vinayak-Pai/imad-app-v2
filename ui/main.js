console.log('Loaded!');

// modifying value using id
var element= document.getElementById('main-text');

element.innerHTML="The power of positive thinking";

//move the image by id
var img=document.getElementById('image');
var marginLeft = 0 ;
function moveRight(){
    marginLeft =  marginLeft + 10 ;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function (){
    var interval= setInterval(moveRight, 100);
    
    };