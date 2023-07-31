let slider = tns({
  "container": ".my-slider",
  "items": 3,
  "controlsContainer": false,
  "navContainer": false,
  "navAsThumbnails": false,
  "autoplay": true,
  "autoplayTimeout": 3000,
  "autoplayButtonOutput": false,
  "controls": false,
  "swipeAngle": false,
  "speed": 400,
  "mouseDrag": true,
});

var designButton = document.getElementById("design-button")
var desenvolvimentoButton = document.getElementById("desenvolvimento-button")

var designImg = document.querySelectorAll(".design-project")
var desenvolvimentoImg = document.querySelectorAll(".desenvolvimento-project")

var projCard = document.querySelectorAll(".proj-card")

designButton.addEventListener('click', showDesign)
desenvolvimentoButton.addEventListener('click', showDesenvolvimento)

function showDesign() {
  designImg.forEach(function(img) {
    img.style.display = 'inline-block';
  });

  desenvolvimentoImg.forEach(function(img) {
    img.style.display = 'none';
  })
}

function showDesenvolvimento() {
  desenvolvimentoImg.forEach(function(img) {
    img.style.display = 'inline-block';
  });

  designImg.forEach(function(img) {
    img.style.display = 'none';
  })
}





