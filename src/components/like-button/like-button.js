export class LikeButton {
  constructor(node) {
    // this.values = values;
    this.node = node;
    this.valueField = node.querySelector(".like-label-content");
    this.value = parseInt(this.valueField.textContent);
    this.button = node.querySelector(".input-like");
    this.button.onclick = () => {
      if (this.button.hasAttribute("checked")) {
        // console.log("checked->unchecked");
        this.button.removeAttribute("checked");
        this.value--;
        this.valueField.textContent=this.value;
      }
      else {
        // console.log("unchecked->checked");
        this.button.setAttribute("checked",'');
        this.value++;
        this.valueField.textContent=this.value;
      }
    };
  }
}
document.querySelectorAll(".like-label").forEach ( (node)=>{
  new LikeButton(node);
} );
