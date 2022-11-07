const container = document.querySelector(".container");

const colors = ["#970C10", "#BFCAD0", "#474440", "#738580"];

const squares = 500;

const setColor = (e) => {
  e.style.backgroundColor = "black";
};

const removeColor = (e) => {
  e.style.backgroundColor = "white";
};

for (i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}
