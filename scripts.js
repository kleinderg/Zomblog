function openMenu() {
  var x = document.getElementById("nav-links").getElementsByClassName("nav-link");
  Array.from(x).forEach(element => {
    if (element.className === "nav-link") {
      element.classList.add("responsive");
    } else {
      element.classList.remove("responsive")
    }
  });
} 