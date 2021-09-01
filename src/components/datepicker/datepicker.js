import $ from "jquery";
globalThis.$ = $;

//air-datepicker

require('air-datepicker');
// import "air-datepicker/dist/js/datepicker.js"

const $dates = $(".two-elements-box .date-dropdown__input");
// const $dateArrows = $(".two-elements-box .date-dropdown__selection_arrow");
const $dateArrows = $(".two-elements-box .date-dropdown__selection");
const $altDates = $(".element-box-266px .date-dropdown__selection input");

// console.log($dates.length);

const $dateFrom = $dates.eq(0);
const $dateTo = $dates.eq(1);
const setArrows = () => {
  const $navBack=$(".datepickers-container .datepicker--nav-action[data-action='prev']");
  const $navFwd=$(".datepickers-container .datepicker--nav-action[data-action='next']");
  // console.log($navBack.html(),$navFwd.html());
  $navBack.html('<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/></svg>');
  $navFwd.html('<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z" fill="#BC9CFF"/></svg>');
};
const myDatepicker = $dateFrom.datepicker({
  navTitles: {
    days: 'MM yyyy',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
},
  // todayButton: new Date(),
  // minDate: new Date(),
  onSelect: function (fd, d, picker) { 
    $dateFrom.val(fd.split(" - ")[0]);
    $dateTo.val(fd.split(" - " )[1]);
  },
  onShow(inst, animationCompleted) {
    const $buttons=$(".datepickers-container .datepicker--buttons");
    let $apply=$buttons.find(".datepicker--button_submit");
    // console.log($apply,$apply.length);
    if ($apply.length==0){
      $buttons.append('<span class="datepicker--button_submit" >Применить</span>');
      $apply=$buttons.find(".datepicker--button_submit");
      // console.log($apply.length);
      $apply.on("click",()=>{myDatepicker.hide();});
    }
    setArrows();

    // $buttons.append('<span class="datepicker--button_submit" >Применить</span>');
    // $buttons.eq(1).on("click",this.hide());
  },
  onChangeMonth(month, year) {
    setArrows();
  },
  onChangeView(view) {
    setArrows();
  },
  onHide(inst, animationCompleted){},
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
