const navbarItems = document.querySelectorAll(".navbar p");
const contents = document.querySelectorAll(".content");

navbarItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    navbarItems.forEach((navItem) => navItem.classList.remove("active"));
    item.classList.add("active");

    contents.forEach((content) => content.classList.remove("active"));
    const contentId = item.id + "-content";
    document.getElementById(contentId).classList.add("active");
  });
});

