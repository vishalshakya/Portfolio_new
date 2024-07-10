// ---------------dark mode-------------
let dark = document.querySelectorAll("#dark");
let body = document.querySelector("body");
let darkfont = document.querySelectorAll(".darktext");

dark.forEach((dark) => {
  dark.addEventListener("click", function () {
    if (body.style.backgroundColor === "white") {
      // console.log("black");
      darkbackground();
      darkbutoon();
      darktext();
    } else {
      lightbackground();
      lightbutton();
      let darktext = document.querySelectorAll(".darktext");

      darktext.forEach((darktext) => {
        darktext.style.color = "black";
      });
      // dark.style.color = "white";
    }
    function darkbackground() {
      body.style.backgroundColor = "black";
    }
    function lightbackground() {
      body.style.backgroundColor = "white";
    }
    function darkbutoon() {
      dark.style.backgroundColor = "white";
      dark.style.color = "black";
    }
    function lightbutton() {
      dark.style.color = "white";
      dark.style.backgroundColor = "black";
    }
    function darktext() {
      darkfont.forEach((darkfont) => {
        darkfont.style.color = "white";
      });
    }
  });
});
// ---------------mobile navbar-------------

const mobile_click = document.querySelector(".mob-img");
const mob_dropdown = document.querySelector(".mob-dropdown");

mobile_click.addEventListener("click", function () {
  // Toggle visibility and opacity
  if (
    mob_dropdown.style.visibility === "hidden" ||
    mob_dropdown.style.opacity === "0"
  ) {
    mob_dropdown.style.visibility = "visible";
    mob_dropdown.style.opacity = "1";
  } else {
    mob_dropdown.style.visibility = "hidden";
    mob_dropdown.style.opacity = "0";
  }
});
const cv = document.getElementById("cv");
cv.addEventListener("click", function (a) {
  a = window.confirm("are you sure");
  if (a === true) {
    window.open(
      "https://drive.google.com/file/d/1yPw83nc-1AMYMJVjRDlWdTxoFzpB1nct/view?usp=drive_link"
    );
  } else {
    console.log("no");
  }
});
/* ----------------------------------------- SKILL SECTION ---------------------------------------------------- */

function card(src, head, def) {
  let cards = `<div class="card"  >
            <img src="${src}" alt="" />
            <h3>${head}</h3>
            <p>${def}</p>
          </div>`;
  document.querySelector(".skills").innerHTML =
    document.querySelector(".skills").innerHTML + cards;
}
card("./image/html.png", "HTML", "Intermediate");
card("./image/css.png", "CSS", "Intermediate");
card("./image/js.png", "JavaScript", "Beginner");
card("./image/bootstrap.png", "Bootstrap", "Intermediate");
card("./image/web-design.png", "Web Designer", "Intermediate");
card("./image/microsoft.png", "MSOffice", "Beginner");
/* ----------------------------------------- PROJECT SECTION ---------------------------------------------------- */

function project(title, des, link) {
  let skills = `<div class="pro-list">
            <h3>${title}</h3>
            <p class="des">
              ${des}
            </p>
            <button>
              <a href="${link}" target="_blank">Click Me</a>
            </button>
          </div>`;
  document.querySelector(".project").innerHTML =
    document.querySelector(".project").innerHTML + skills;
}
project(
  "Maurya Institute(Front-End)",
  "Developed a site using the HTML, CSS, BootStrap, and some internet sources for client.",
  "http://mivps.in/"
);
project(
  "Adhisha Faculty(Front-End)",
  "Developed a site using the HTML, CSS, BootStrap, and some internet sources for client.",
  "https://adfms.in/"
);
project(
  "Portfolio ",
  "Making Portfolio for internship Project by using HTML, CSS, JavaScript",
  "https://vishalshakya.github.io/Portfolio//"
);
project(
  "Weather app",
  "Making Weather app for internship Project by using HTML, CSS, JavaScript",
  "https://vishalshakya.github.io/weather/"
);
