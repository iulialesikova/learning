function changeColor() {
  let selectedColor;
  switch (document.getElementById('thema').value) {
    case "green": {
      selectedColor = "#57e389";
      break;
    }
    case "violet": {
      selectedColor = "#8a2be2";
      break;
    }
    case "pink": {
      selectedColor = "#c061cb";
      break;
    }
    default: {
      selectedColor = "#ffffff";
      break;
    }
  }

  document.body.style.backgroundColor = selectedColor;
}