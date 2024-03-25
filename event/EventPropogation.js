/**
 * Event Propogation
 * Event Bubbling
 * event.target, event.currentTarget, this.target
 * Event Capturing and Trickling
 * Event Delegation.
 */

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  alert(event.currentTarget);
});
