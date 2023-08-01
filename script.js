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
  responsive: {
    360: {
      items: 1
    },
    400: {
      items: 2
    },
    900: {
      items: 3
    }
  },
});




