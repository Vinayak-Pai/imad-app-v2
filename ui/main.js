console.log('Loaded!');

// modifying value using id
var element= document.getElementById('main-text');

element.innerHTML="The power of positive thinking";

//move the image by id
var img=document.getElementById('image');
img.onclick = function (){
    img.style.marginLeft = '100px';
    };