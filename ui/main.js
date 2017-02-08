console.log('Loaded!');

// modifying value using id
var element= document.getElementById('main-text');

element.innerHTML="The power of positive thinking";

//move the image by id
var img=document.getElementById('image');
var marginLeft = 0 ;
function moveRight(){
    marginLeft =  marginLeft + 1 ;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function (){
    var interval= setInterval(moveRight, 50);
    
    };


var button= document.getElementById('counter');
var counter=0;
button.onclick = function(){
    
    // make a request to counter end point
    
    //capture the response and store in variable
    
    // render the response in the span variable
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML= counter.toString();
};
