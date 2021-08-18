import "../index.js";
import { Dropdown } from "./blocks/dropdown/dropdown.js";
import $ from "jquery";
// globalThis.jQuery = $;
globalThis.$ = $;
// window.$ = window.jQuery = $;
// window.$ = $;
require('air-datepicker');
// import "air-datepicker/dist/js/datepicker.js"

const $dates = $(".two-elements-box .date-dropdown__input");
// const $dateArrows = $(".two-elements-box .date-dropdown__selection_arrow");
const $dateArrows = $(".two-elements-box .date-dropdown__selection");
const $altDates = $(".element-box-266px .date-dropdown__selection input");

// console.log($dates.length);

const $dateFrom = $dates.eq(0);
const $dateTo = $dates.eq(1);
const myDatepicker = $dateFrom.datepicker({
  // todayButton: new Date(),
  minDate: new Date(),
  onSelect: function (fd, d, picker) { 
    $dateFrom.val(fd.split(" - ")[0]);
    $dateTo.val(fd.split(" - " )[1]);
  },
  dateFormat: "dd-mm-yyyy",
  altFieldDateFormat: "dd M",
  altField: $altDates,
  clearButton: true,
  range: true,
  multipleDatesSeparator: " - "
}).data('datepicker');

$dateArrows.each(function( index, element ) {
  $( this ).on("click",function() { myDatepicker.show();});
}); 

// myDatepicker.show();

// $( function() {
//   $dateFrom.datepicker();
// } );

// console.log("Hello from module");
const node = document.querySelector(".dropdown");
// console.log(node);
let myDropdown = new Dropdown(node);

document.addEventListener("DOMContentLoaded", function () {
  // Аналог $(document).ready(function(){
  console.log("document ready");
  // const node = document.querySelector(".dropdown");
  // let myDropdown = new Dropdown(node);
});

// import $ from "jquery";
// globalThis.jQuery = $;

// require("../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js");
// $(document).ready(() => {
//   $(".iqdropdown").iqDropdown();
//   console.log("document ready");
//   $(".no-config").iqDropdown();
// });
