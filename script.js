const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", (event) => {
  event.stopPropagation();
  wrapper.classList.toggle("open");
});


document.addEventListener("click", () => {
  wrapper.classList.remove("open");
});

