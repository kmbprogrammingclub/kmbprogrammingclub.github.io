const toggleButton = document.getElementsByClassName("toggle-Button")[0];


let isToggleButton = true;
toggleButton.innerHTML = '<i class="fa-solid fa-bars"></i>' 

toggleButton.addEventListener("click",() =>{
    isToggleButton ? isToggleButton = false : isToggleButton = true;
    toggleButton.innerHTML = isToggleButton ? '<i class="fa-solid fa-bars"></i>' : '<i class="fa-solid fa-x"></i>'
})