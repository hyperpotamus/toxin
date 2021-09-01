export class Dropdown {
  constructor(node) {
    // this.values = values;
    this.node = node;
    this.fields = [];
    this.decrementButtons = [];
    // console.log(typeof node);

    const items = node.querySelectorAll(".dropdown__menu-option-controls");
    const buttonClear = node.querySelector(".dropdown__button-clear");
    const buttonApply = node.querySelector(".dropdown__button-apply");
    this.menu = node.querySelector(".dropdown__menu");
    this.selection = node.querySelector(".dropdown__selection");
    this.arrow = node.querySelector(".dropdown__selection_arrow");
    this.result = node.querySelector(".dropdown__result");
    // this.buttonClear = node.querySelector(".dropdown__button-clear");
    this.menuClear = node.querySelector(".dropdown__menu-clear");
    this.selection.onclick = () => {
      // console.log(this.menu.style.display);
      // if (this.menu.style.display == "" || this.menu.style.display == "none") {
      if (this.menu.classList.contains("dropdown__menu_hidden")) {
        this.arrow.classList.remove("icon-expand_more");
        this.arrow.classList.add("icon-expand_less");
        // this.menu.style.display = "block";
        this.menu.classList.remove("dropdown__menu_hidden")
        this.node.style.borderBottomLeftRadius = "0";
        this.node.style.borderBottomRightRadius = "0";
      } else {
        this.arrow.classList.add("icon-expand_more");
        this.arrow.classList.remove("icon-expand_less");
        this.menu.classList.add("dropdown__menu_hidden")
        // this.menu.style.display = "none";
        this.node.style.borderBottomLeftRadius = "4px";
        this.node.style.borderBottomRightRadius = "4px";
      }
    };
    for (const item of items) {
      // for (let i = 0, len = items.length; i < len; i++) {
      //   let item = items[i];
      const buttons = item.querySelectorAll(".dropdown__button");
      const field = item.querySelector("h3");
      this.fields.push(field);
      const value = parseInt(field.textContent);
      let incrementButton, decrementButton;
      for (const button of buttons) {
        const sign = button.querySelector("p").textContent;
        if (sign == "+") {
          incrementButton = button;
        } else {
          decrementButton = button;
        }
      }
      this.decrementButtons.push(decrementButton);
      incrementButton.onclick = () => {
        const myField = field;
        const decr = decrementButton;
        let value = parseInt(myField.textContent);
        value++;
        decr.removeAttribute("disabled");
        myField.textContent = value;
        this.menuClear.classList.remove("dropdown__button-clear_hidden");
      };
      decrementButton.onclick = () => {
        const me = decrementButton;
        const myField = field;
        let value = parseInt(myField.textContent);
        value--;
        if (value <= 0) {
          me.setAttribute("disabled", "");
        }
        if (value >= 0) {
          myField.textContent = value;
        }
        let sum = 0;
        for (const field of this.fields) {
          sum += parseInt(field.textContent);
        }
        if (sum==0) {
          this.menuClear.classList.add("dropdown__button-clear_hidden");
          this.result.textContent = "Сколько гостей";
        }
      };
      buttonClear.onclick = () => {
        for (const field of this.fields) {
          field.textContent = "0";
        }
        for (const button of this.decrementButtons) {
          button.setAttribute("disabled", "");
        }
        this.result.textContent = "Сколько гостей";
        this.menuClear.classList.add("dropdown__button-clear_hidden");
      };
      buttonApply.onclick = () => {
        // let sum = 0;
        // for (const field of this.fields) {
        //   sum += parseInt(field.textContent);
        // }
        const sum = parseInt(this.fields[0].textContent)+parseInt(this.fields[1].textContent);
        const infants = parseInt(this.fields[2].textContent);
        // console.log(sum);
        let str = (sum % 10 == 1 && sum != 11) ? " гость" : sum % 10 < 5 && sum % 10 > 1 && (sum > 14 || sum < 11) ? " гостя" : " гостей";
        const strInf = (infants % 10 == 1 && infants != 11) ? " младенец" : infants % 10 < 5 && infants % 10 > 1 && (infants > 14 || infants < 11)
        ? " младенца" : " младенцев";

        // console.log(str);
        if (sum==0) {
          // this.menuClear.classList.add("hidden");
          this.result.textContent = "Сколько гостей";
        }
        else {
          str = String(sum) + str;
          if (infants>0) {
            str += ", " + String(infants)+strInf;
          }
          this.result.textContent = str;
        }
      };
    }
  }
  get total() {
    let sum = 0;
    const items = this.node.querySelectorAll(".dropdown__menu-option-controls");
    for (const item of items) {
      const field = item.querySelector("h3");
      const value = parseInt(field.textContent);
      sum += value;
    }
    return sum;
  }
}
// const node = document.querySelector(".dropdown");
// // console.log(node);
// let myDropdown = new Dropdown(node);

// new Dropdown(document.querySelector(".dropdown"));
document.querySelectorAll(".dropdown").forEach ( (node)=>{
  new Dropdown(node);
} );

