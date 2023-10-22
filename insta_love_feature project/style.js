var  container=document.querySelector("#container");
var like=document.querySelector("i");
var like2=document.querySelector(".ri-heart-line");
let flag=true;

container.addEventListener("dblclick",function(){
    like.style.transform="translate(-50%,-50%) scale(1)";
    like.style.opacity=0.8;

    setTimeout(function(){
        like.style.opacity=0;
    },1000);
    setTimeout(function(){
        like.style.transform="translate(-50%,-50%) scale(0)";
    },2000);
});

like2.addEventListener("click",function(){
      if(flag){
        like2.style.color="red";
        flag=false;
      }
      else{
        like2.style.color="black";
        flag=true;
      }
})