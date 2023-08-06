const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navmenu.classList.toggle("open");
};
var typed = new Typed(".auto-input", {
  strings: ["Aditya", "a Student", "a Developer", "Batman"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// skills
async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills.json"))
    : (response = await fetch("./projects/projects.json"));
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach((skill) => {
    skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}
fetchData().then((data) => {
  showSkills(data);
});
