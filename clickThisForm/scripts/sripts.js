let selectedColor = 'red'; // По умолчанию выбран красный
  

const container = document.querySelector(".container")
container.addEventListener("click", function(ev){
  const dataColor = ev.target.getAttribute("data-color")
  if(dataColor){
    selectedColor = dataColor
  } else if (ev.target.classList.contains("EmptyBox")) {
    ev.target.style.background = selectedColor
  }
})