const fag=document.querySelectorAll(".fag")
fag.forEach(element => {
    element.addEventListener("click", ()=>{
 element.classList.toggle('active')
    })
    
});