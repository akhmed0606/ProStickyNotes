const addButton = document.querySelector(".button-32");

const night = document.querySelector(".night");
const draw = document.querySelector(".draw");
const hide = document.querySelector(".hide");
const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEL = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

//Notes app

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addButton.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const myNote = document.createElement("div");
  myNote.classList.add("note");

  myNote.innerHTML = `
    <div class="tools">
    <button class="color"><i class="fas fa-palette"></i></button>
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
     
    `;

  const main = myNote.querySelector(".main");
  const textArea = myNote.querySelector("textarea");
  const buttonEdit = myNote.querySelector(".edit");
  const buttonRemove = myNote.querySelector(".delete");
  const colorful = myNote.querySelector(".color");

  colorful.addEventListener("click", () => {
    makeRandom();

    const textColor = myNote.querySelector("textarea");
    textColor.style.color = makeRandom();
  });

  textArea.value = text;
  main.innerHTML = marked(text);

  buttonRemove.addEventListener("click", () => {
    myNote.remove();

    update();
  });

  buttonEdit.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);

    update();
  });
  document.body.appendChild(myNote);
}

//Note Update
function update() {
  const textNote = document.querySelectorAll("textarea");

  const notes = [];

  textNote.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}

//Night Mode
night.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//Random-Color Function
const makeRandom = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  sum = r + g + b;
  return `rgb(${r},${g},${b})`;
};

//Draw appear
draw.addEventListener("click", () => {
  hide.classList.toggle("draw-hide");
});

//Draw app start here
const ctx = canvas.getContext("2d");
let size = 5;
let isPressed = false;
colorEl.value = "black";
let color = colorEl.value;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
  saveCanvas();
}

function updateSizeOnScreen() {
  sizeEL.innerText = size;
}

increaseBtn.addEventListener("click", () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

function saveCanvas() {
  localStorage.setItem("myCanvas", canvas.toDataURL());
}

function loadCanvas() {
  const dataURL = localStorage.getItem("myCanvas");
  const img = new Image();

  img.src = dataURL;
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  };
}

loadCanvas();

colorEl.addEventListener("change", (e) => (color = e.target.value));

//Clear and save to local storage
clearEl.addEventListener("click", (e) => {
  localStorage.setItem("myCanvas", null);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
