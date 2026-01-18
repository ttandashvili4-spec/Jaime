const src1 = document.querySelector(".src1");
const src2 = document.querySelector(".src2");
const btn = document.querySelector(".btn");

const src2Image =
  "//i.pinimg.com/originals/f4/46/d0/f446d0db32d2d9ad3e2845cc4c52d95b.jpg";
const src1Image =
  "https://awoiaf.westeros.org/images/e/e1/Mathia_Arkoniel_Jaime_Lannister.jpg";

btn.addEventListener("click", () => {
  src1.src = src1Image;
});
