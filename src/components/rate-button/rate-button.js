export class RateButton {
  set rate(n) {
    this.value=n;
    let i=0;
    while (i<n) {
      this.items[i].classList.remove(this.items[i].classList.item(0));
      this.items[i].classList.add("icon-star");
      i++;
    }
    while (i<5) {
      this.items[i].classList.remove(this.items[i].classList.item(0));
      this.items[i].classList.add("icon-star_border");
      i++;
    }
  }
  constructor(node) {
    this.node = node;
    const items = node.querySelectorAll("span");
    this.items = items;
    let currentRate = 0;
    let i=0;
    for (const item of items) {
      if (item.classList.contains("icon-star")) {
        currentRate++;
      }
      item.onclick = (() => {
        const index=i;
        const obj=this;
        return () => {
          obj.rate=index+1;
        }
      })();
      i++;
    }
    this.value=currentRate;
  }
}

document.querySelectorAll(".rate-button").forEach ( (node)=>{
  new RateButton(node);
} );

