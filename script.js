const dropdowns = document.querySelectorAll(".filter-dropdown");

dropdowns.forEach((dd) => {
  const ddLabel = dd.querySelector(".filter-dropdown_label");
  let checkedFilters = dd.querySelectorAll(
    ".filter-checkbox_button.w--redirected-checked"
  ).length;
  // w--redirected-checked

  dd.addEventListener("click", (e) => {
    if (e.target.tagName === "LABEL") {
      const checkBox = e.target.querySelector(".filter-checkbox_button");
      setTimeout(() => {
        checkedFilters = dd.querySelectorAll(
          ".filter-checkbox_button.w--redirected-checked"
        ).length;
        console.log(checkedFilters);
        if (
          !checkBox.classList.contains("w--redirected-checked") &&
          checkedFilters === 1
        ) {
          ddLabel.textContent = e.target.querySelector(
            ".filter-checkbox_label"
          ).textContent;
        }
      }, 0);
    }
  });
});
