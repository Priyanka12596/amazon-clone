let buttonElement=document.querySelector('button');
let h5Element=document.querySelector('h5');
var check=0;
buttonElement.addEventListener("click",function(){
   if(check==0)   { 
    h5Element.innerHTML="Friends";
    h5Element.style.color="green"
    buttonElement.innerHTML="Remove friend";
     buttonElement.style.background="gray";
     console.log("hiiiiiiiiii");
     check=1
   }
    else {
        h5Element.innerHTML="stranger";
    h5Element.style.color="red"
    buttonElement.innerHTML="Add friend";
     buttonElement.style.background="aqua";
          check=0
          console.log("helooo")
     } 


   
   
    
});