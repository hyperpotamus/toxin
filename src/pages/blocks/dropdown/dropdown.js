export class Dropdown {
  constructor(node) {
    // this.values = values;
    this.node = node;
    // console.log(typeof node);
    const items = node.querySelectorAll(".dropdown__menu-option-controls");
    for (const item of items) {
      // for (let i = 0, len = items.length; i < len; i++) {
      //   let item = items[i];
      const buttons = item.querySelectorAll(".dropdown__button");
      const field = item.querySelector("h3");
      const value = parseInt(field.textContent);
      for (const button of buttons) {
        const sign = button.querySelector("p").textContent;
        if (sign == "+") {
          button.onclick = () => {
            const myField = field;
            let value = parseInt(myField.textContent);
            value++;
            myField.textContent = value;
          };
        } else {
          button.onclick = () => {
            const myField = field;
            let value = parseInt(myField.textContent);
            value--;
            myField.textContent = value;
          };
        }
      }
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
