let show_modal=document.getElementById("show_modal");
let modal=document.getElementById("modal");
let regester=document.getElementById("regester");
let close_modal=document.getElementById("close_modal");
show_modal.style.transition="all 180ms linear"
show_modal.addEventListener("mouseenter",function(){
    this.style.backgroundColor="darkgreen"
    this.style.boxShadow="5px 5px 5px gray"
})
show_modal.addEventListener("mouseleave",function(){
    this.style.backgroundColor="green"
    this.style.boxShadow="none"
})
regester.addEventListener("mouseenter",function(){
    this.style.backgroundColor="darkgreen"
})
regester.addEventListener("mouseleave",function(){
    this.style.backgroundColor="green"
})
close_modal.addEventListener("click",function(){
    modal.style.display="none"
})
show_modal.addEventListener("click",function(){
    modal.style.display="block"
})