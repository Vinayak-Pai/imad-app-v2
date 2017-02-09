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

button.onclick = function(){
    
    // create a request to counter end point
    var Request = new XMLHttpRequest();
    
    //capture the response and store in variable
    request.onreadystatechange = function(){
        if (request.readystate=== XMLHttpRequest.DONE){
           if (request.status===200)
           {
               var counter=request.responseText;
               var span=document.getElementById('count');
               span.innerHTML= counter.toString();
           }
        }
    };
        //make a request
        request.open('GET','http://vinayak-pai.imad.hasura-app.io/counter',true);
        request.send(null);
    };
    
    



