let selectedColor = 'red';
const colorBoxes = document.querySelectorAll('.color-option');
colorBoxes.forEach(function (colorBox) {
  colorBox.addEventListener('click', function () {
    selectedColor = getComputedStyle(this).background;
  });
});
const coloringBoxes = document.querySelectorAll('.EmptyBox');
coloringBoxes.forEach(function (emptyBox) {
  emptyBox.addEventListener('click', function () {
    if (selectedColor) {
      this.style.background = selectedColor;
    }
  });
});

// const resetButton = document.querySelector('.button');
// let resetBoxes = getComputedStyle.background
// resetButton.addEventListener('click', function () {
//   resetBoxes.forEach(resetBox => {
//     resetBox.style.backgroundColor = 'grey'
//   });
//   })





// const container = document.querySelector(".container")
// container.addEventListener("click", function(ev){
//   const dataColor = ev.target.getAttribute("data-color")
//   if(dataColor){
//     selectedColor = dataColor
//   } else if (ev.target.classList.contains("EmptyBox")) {
//     ev.target.style.background = selectedColor
//   }
// })