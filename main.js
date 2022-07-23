const menuBar = document.querySelector(".sc-bottom-bar");
const menuItem = document.querySelectorAll(".sc-menu-item");
const menuIndicator = document.querySelector(".sc-nav-indicator");
const menuCurrentItem = document.querySelector(".sc-current");
let menuPosition;

menuPosition = menuCurrentItem.offsetLeft - 16;
menuIndicator.style.left = menuPosition + "px";
menuBar.style.backgroundPosition = menuPosition - 8 + "px";
menuItem.forEach(function (selectMenuItem) {
  selectMenuItem.addEventListener("click", function (e) {
    e.preventDefault();
    menuPosition = this.offsetLeft - 16;
    menuIndicator.style.left = menuPosition + "px";
    menuBar.style.backgroundPosition = menuPosition - 8 + "px";
    [...selectMenuItem.parentElement.children].forEach((sibling) => {
      sibling.classList.remove("sc-current");
    });
    selectMenuItem.classList.add("sc-current");
  });
});
