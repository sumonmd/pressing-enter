var inp = document.querySelector(".text");
var text = document.querySelector(".textlist");
var tasklist = [];
function render(elements) {
  text.innerHTML = "";
  elements.forEach(e => {
    let newE = document.createElement("li");
    newE.innerHTML = e;
    text.appendChild(newE);
  });
}

inp.addEventListener("keyup", e => {
  if (e.which === 13 && inp.value !== "") {
    tasklist.push(inp.value);
    inp.value = "";
    render(tasklist);
  }
});
