var i = 0;
var images = []; 
var time = 3000; 

images[0] = "one.jpg"; 
images[1] = "two.jpg"; 
images[2] = "three.jpg"; 


function changeImg(){
    document.show.src = images[i];
    if(i < images.length -1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeImg()" , time);

    
} 
window.onload = changeImg; 

let btn=document.querySelector("#btn"); 

btn.addEventListener("click" , () => {
    document.querySelector("#div2").style.visibility = "visible";
    
}); 
function disappear(){
    document.getElementById("div2").style.visibility = "hidden";
}
