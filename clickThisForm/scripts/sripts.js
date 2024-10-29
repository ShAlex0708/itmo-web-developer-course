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
