(function () {
  var menu = document.getElementById("menu-inicio"); // colocar em cache
  var inicio = document.getElementById("inicio");
  var tamInicio = inicio.scrollHeight;
  window.addEventListener("scroll", function () {
    if (window.scrollY > tamInicio)
      menu.classList.add("menu-ativo"); // > 0 ou outro valor desejado
    else menu.classList.remove("menu-ativo");
  });
})();
