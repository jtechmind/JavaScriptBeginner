/**
 * Event Propogation
 * Event Bubbling
 * event.target, event.currentTarget, this.target
 * Event Capturing and Trickling
 * Event Delegation.
 */

const div = document.querySelector("div");
const button = document.querySelector("button");
const form = document.querySelector("form");

div.addEventListener("click", clickEv);

form.addEventListener("click", clickEv);

button.addEventListener("click", clickEv);

function clickEv(event) {
  alert(
    "CurrentTarget: " +
      event.currentTarget.tagName +
      " " +
      "Target: " +
      event.target.tagName +
      " " +
      "this.target" +
      this.tagName
  );
}
