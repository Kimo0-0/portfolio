let selectors = document.querySelectorAll(".selector > h3");
let selectedSection = document.querySelectorAll(".sections > section");
selectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    selectors.forEach((select) => {
      select.classList.remove("selected");
    });
    selectedSection.forEach((select) => {
      select.classList.remove("selected");
    });
    let Section = document.querySelector(
      ".sections > section." + selector.classList[0]
    );
    Section.classList.add("selected");
    selector.classList.add("selected");
  });
});
