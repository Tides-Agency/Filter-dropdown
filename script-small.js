const container = document.querySelector(".custom-t_cms-list");

function filterDd() {
  const dropdowns = document.querySelectorAll(".filter-dropdown");

  dropdowns.forEach((dd) => {
    const reset = dd.closest(".filter_wrapper").querySelector(".filter_reset");
    const ddLabel = dd.querySelector(".filter-dropdown_label");
    const initialLabelText = ddLabel.textContent;

    let checkedFilters = [
      ...dd.querySelectorAll(".filter-checkbox_button.w--redirected-checked"),
    ];

    // Setup text of DD on initial load of 1 item selected
    if (checkedFilters.length === 1) {
      let parent = checkedFilters[0].closest(".filter-checkbox_field");
      let labelText = parent.querySelector(
        ".filter-checkbox_label"
      ).textContent;
      ddLabel.textContent = labelText;
      reset.classList.add("is-active");
    } else if (checkedFilters.length > 1) {
      ddLabel.textContent = `${checkedFilters.length} filters`;
      reset.classList.add("is-active");
    }
    reset.addEventListener("click", () => {
      ddLabel.textContent = initialLabelText;
      reset.classList.remove("is-active");
    });
    dd.addEventListener("click", (e) => {
      if (e.target.tagName === "LABEL") {
        // Use requestAnimationFrame to ensure the code runs after rendering
        requestAnimationFrame(() => {
          checkedFilters = [
            ...dd.querySelectorAll(
              ".filter-checkbox_button.w--redirected-checked"
            ),
          ];
          let parent = checkedFilters[0]?.closest(".filter-checkbox_field");
          let labelText = parent?.querySelector(
            ".filter-checkbox_label"
          ).textContent;

          if (checkedFilters.length === 1) {
            ddLabel.textContent = labelText;
            reset.classList.add("is-active");
          }

          if (checkedFilters.length > 1) {
            ddLabel.textContent = `${checkedFilters.length} filters`;
            reset.classList.add("is-active");
          }

          if (checkedFilters.length === 0) {
            ddLabel.textContent = initialLabelText;
            reset.classList.remove("is-active");
          }
        });
      }
    });
  });
}

const observer = new MutationObserver((mutations) => {
  // Check if Jetboost.initComplete and disconnect observer as needed
  if (Jetboost.initComplete) {
    observer.disconnect();
    filterDd(); // Call filterDd after disconnecting
  }
});

observer.observe(container, { childList: true });
