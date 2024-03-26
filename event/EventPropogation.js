/**
 * Event Propogation
 * Event Bubbling
 * event.target, event.currentTarget, this.target
 * Event Capturing and Trickling
 * Event Delegation.
 */

const div = document.querySelector(".products");

div.addEventListener("click", (event) => {
  if (event.target.tagName === "SPAN") {
    window.location.href += "/" + event.target.className;
  }
});
