let container = document.querySelector("#container");
console.log(container);

for (let i = 1; i <= 100; i++) {
  let btn = document.createElement("button");
  btn.textContent = `Button ${i}`;
  container.append(btn);
}
