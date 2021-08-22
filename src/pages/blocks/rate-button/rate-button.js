export class RateButton {
  set rate(n) {
    this.value=n;
    let i=0;
    // console.log(n,this.items);
    while (i<n) {
      this.items[i].classList.remove(this.items[i].classList.item(0));
      this.items[i].classList.add("icon-star");
      // console.log(i,this.items[i].classList);
      i++;
    }
    while (i<5) {
      this.items[i].classList.remove(this.items[i].classList.item(0));
      this.items[i].classList.add("icon-star_border");
      // console.log(i,this.items[i].classList);
      i++;
    }
  }
  constructor(node) {
    // this.value = value;
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
          // console.log(i,index,obj);
          obj.rate=index+1;
        }
      })();
      i++;
    }
    this.value=currentRate;
  }

}
