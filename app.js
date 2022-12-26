let toggleBtn = document.querySelector(".toggle");
let toggleArea = document.querySelector("nav");
let togglePre = document.querySelector("body");

toggleBtn.addEventListener("click", function () {
  toggleArea.classList.toggle("active");
  togglePre.classList.remove("preload");

  let check;

  if (toggleArea.classList.contains("active")) {
    console.log("active");
    check = "active";
  } else {
    console.log("none");
    check = "none";
  }
  localStorage.setItem("키", JSON.stringify(check));
});

let getCheck = JSON.parse(localStorage.getItem("키"));
if (getCheck === "active") {
  toggleArea.classList.add(getCheck);
}
