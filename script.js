const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");

const input = document.querySelector("input");

const colors = ["#970C10", "#BFCAD0", "#474440", "#004369"];

let squares = 500;

let hoverColor = "white";

input.addEventListener("change", (e) => {
  squares = e.target.value;
  createSqures();
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.innerText === "Color 1") {
      hoverColor = colors[0];
    } else if (button.innerText === "Color 2") {
      hoverColor = colors[1];
    } else if (button.innerText === "Color 3") {
      hoverColor = colors[2];
    } else if (button.innerText === "Color 4") {
      hoverColor = colors[3];
    } else {
      alert("wtf");
    }
  });
});

const setColor = (e) => {
  e.style.backgroundColor = hoverColor;
};

const removeColor = (e) => {
  e.style.backgroundColor = "orange";
};

let createSqures = () => {
  for (i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
  }
};
