// .range-slider
const noUiSlider=require('nouislider');
// const slider = document.querySelector(".range-slider");
document.querySelectorAll(".range-slider").forEach((slider) => {
  // console.log(slider);
  const body=slider.querySelector(".range-slider__body");
  // console.log(body);
  const valuesDivs = [
    slider.querySelector(".range-slider__result-from"),
    slider.querySelector(".range-slider__result-to")
  ];
  const values = valuesDivs.map(el=>el.textContent.replace(/\s+/g, ''));
  // console.log(values);
  noUiSlider.create(body, {

    range: {
        'min': 0,
        'max': 16000
    },
  
    step: 500,

    // Handles start at ...
    // start: [5000, 10000],
    start: values,
  
    // ... must be at least 300 apart
    margin: 500,
  
    // ... but no more than 600
    // limit: 600,
  
    // Display colored bars between handles
    connect: true,
  
    // Put '0' at the bottom of the slider
    // direction: 'rtl',
    // orientation: 'vertical',
  
    // Move handle on tap, bars are draggable
    // behaviour: 'tap-drag',
    // tooltips: true,
    // format: wNumb({
    //     decimals: 0
    // }),
  
    // Show a scale with the slider
    // pips: {
    //     mode: 'steps',
    //     stepped: true,
    //     density: 4
    // }
  });

  // console.log(valuesDivs);
  body.noUiSlider.on('update', function (values, handle) {
    // console.log(typeof values[handle],values[handle] );
    valuesDivs[handle].innerHTML = values[handle].split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  });
});
