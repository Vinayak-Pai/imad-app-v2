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
    
//submit username/password
var submit = document.getElementById("submit_button");
submit.onclick=function(){
    //make a request to server and send name
     var request = new XMLHttpRequest();
    
    //capture the response and store in variable
    request.onreadystatechange = function(){
        if (request.readyState=== XMLHttpRequest.DONE){
           if (request.status===200)
           {
           console.log("user logged in");
           alert("logged in successfully");
           }else if (request.status===403){
               alert("username/password is invalid");
           } else if (request.status===500){
               alert("something went wrong on server");
           }
        }
    };
        //make a request
        var username= document.getElementById("username").value;
        var password= document.getElementById("password").value;
        console.log(username);
        console.log(password);
        request.open('POST','http://vinayak-pai.imad.hasura-app.io/login', true);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify({username: username, password: password}));
        
        
    
   
};





var button= document.getElementById('counter');

button.onclick = function(){
    
    // create a request object to counter end point
    var request = new XMLHttpRequest();
    
    //capture the response and store in variable
    request.onreadystatechange = function(){
        if (request.readyState=== XMLHttpRequest.DONE){
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
        


var submit = document.getElementById("submit_btn");
submit.onclick=function(){
    //make a request to server and send name
     var request = new XMLHttpRequest();
    
    //capture the response and store in variable
    request.onreadystatechange = function(){
        if (request.readyState=== XMLHttpRequest.DONE){
          if (request.status===200)
          {
            var names = request.responseText;
            names= JSON.parse(names);
            var list='';
            for (var i=0; i < names.length; i++){
            list +='<li>'+ names[i]+ '</li>';
            }
            var ul =document.getElementById("namelist");
            ul.innerHTML=list;
               
          }
        }
    };
        //make a request
        var nameInput= document.getElementById("name");
        var name= nameInput.value;
        request.open('GET','http://vinayak-pai.imad.hasura-app.io/submit-name?name='+ name, true);
        request.send(null);
        
        
    // capture it as list
   
};
    
    



