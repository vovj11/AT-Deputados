(function () {
  var menu = document.getElementById("menu-inicio"); // colocar em cache
  window.addEventListener("scroll", function () {
    if (window.scrollY > 780)
      menu.classList.add("menu-ativo"); // > 0 ou outro valor desejado
    else menu.classList.remove("menu-ativo");
  });
})();
