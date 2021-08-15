import "../index.js";
import { Dropdown } from "./blocks/dropdown/dropdown.js";

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
