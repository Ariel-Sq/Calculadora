const display = document.getElementById("pantalla-input");

const buttons = [
  {
    id: "boton-1",
    label: "1",
    value: 1,
  },
  {
    id: "boton-2",
    label: "2",
    value: 2,
  },
  {
    id: "boton-3",
    label: "3",
    value: 3,
  },
  {
    id: "boton-4",
    label: "4",
    value: 4,
  },
  {
    id: "boton-5",
    label: "5",
    value: 5,
  },
  {
    id: "boton-6",
    label: "6",
    value: 6,
  },
  {
    id: "boton-7",
    label: "7",
    value: 7,
  },
  {
    id: "boton-8",
    label: "8",
    value: 8,
  },
  {
    id: "boton-9",
    label: "9",
    value: 9,
  },
  {
    id: "boton-0",
    label: "0",
    value: 0,
  },
  {
    id: "boton-suma",
    label: "+",
    value: "+",
  },
  {
    id: "boton-resta",
    label: "-",
    value: "-",
  },
  {
    id: "boton-divicion",
    label: "/",
    value: "/",
  },
  {
    id: "boton-multiplicacion",
    label: "X",
    value: "*",
  },
  {
    id: "boton-igual",
    label: "=",
    value: "=",
  },
  {
    id: "boton-punto",
    label: ".",
    value: ".",
  },
  {
    id: "boton-clear",
    label: "C",
    value: "c",
  },
];

// buttons.forEach((button) =)

const btn1 = document.getElementById("boton-1");
console.log(display);
btn1.addEventListener("click", () => {
  display.value += 1;
});
