import "../index.js";
import $ from "jquery";
globalThis.jQuery = $;
// var $ = require("jquery");
// var jQuery = require("jquery");
// import jQuery from "jquery";
// import { $, jQuery } from "jquery";
// window.$ = $;
// window.jQuery = jQuery;
// import * as jQuery from "jquery";
// import "./test.js";
// import "../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js";
// require("item-quantity-dropdown");
// var itemQuantityDropdown = require("item-quantity-dropdown");
// $.getScript(
//   "../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js"
// );
require("../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js");
$(document).ready(() => {
  $(".iqdropdown").iqDropdown();
  console.log("document ready");
  // $(".iqdropdown").iqDropdown();
  $(".no-config").iqDropdown();
});
