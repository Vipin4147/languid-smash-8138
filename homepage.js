
let input =document.querySelector("input")
input.addEventListener("click",function(){
    this.placeholder="";
});

let modal=document.querySelector(".modal-container");
let modal_makeup=document.querySelector(".modal-makeup")




let makeup=document.querySelector("#makeup")
makeup.addEventListener("mouseover",function(){
   
modal.style.opacity=1;

       })
    

 makeup.addEventListener("mouseout",function(){
     modal.style.opacity=0;
   
 })



let modal2=document.querySelector(".modal-container2");

let hair=document.querySelector("#hair")
hair.addEventListener("mouseover",function(){
   
modal2.style.opacity=1;
    
})
hair.addEventListener("mouseout",function(){
    modal2.style.opacity=0;
})

let modal3=document.querySelector(".modal-container3");

let skin=document.querySelector("#skin")
skin.addEventListener("mouseover",function(){
   
modal3.style.opacity=1;
    
})
skin.addEventListener("mouseout",function(){
    modal3.style.opacity=0;
})

let modal4=document.querySelector(".modal-container4");

let sanitize=document.querySelector("#sanitize")
sanitize.addEventListener("mouseover",function(){
   
modal4.style.opacity=1;
    
})
sanitize.addEventListener("mouseout",function(){
    modal4.style.opacity=0;
})

let modal5=document.querySelector(".modal-container5");

let collection=document.querySelector("#collection")
collection.addEventListener("mouseover",function(){
   
modal5.style.opacity=1;
    
})
collection.addEventListener("mouseout",function(){
    modal5.style.opacity=0;
})

let modal6=document.querySelector(".modal-container6");

let studio=document.querySelector("#studio")
studio.addEventListener("mouseover",function(){
   
modal6.style.opacity=1;
    
})
studio.addEventListener("mouseout",function(){
    modal6.style.opacity=0;
})

let modal7=document.querySelector(".modal-container7");

let rewards=document.querySelector("#rewards")
rewards.addEventListener("mouseover",function(){
   
modal7.style.opacity=1;
    
})
rewards.addEventListener("mouseout",function(){
    modal7.style.opacity=0;
})

