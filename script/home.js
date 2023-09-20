document
  .querySelector(".prodact_measure")
  .addEventListener("click", function () {
    var elpi = document.querySelector(".elpi");
    var elpiRect = elpi.getBoundingClientRect();
    var elpiCenter = elpiRect.top + elpiRect.height / 2;
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY + elpiCenter - windowHeight / 2;
    window.scrollTo({ top: scrollY, behavior: "smooth" });
  });
document.querySelector(".prodact_eco").addEventListener("click", function () {
  var economy = document.querySelector(".economy");
  var economyRect = economy.getBoundingClientRect();
  var economyCenter = economyRect.top + economyRect.height / 2;
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY + economyCenter - windowHeight / 2;
  window.scrollTo({ top: scrollY, behavior: "smooth" });
});
document
  .querySelector(".prodact_diagnostic")
  .addEventListener("click", function () {
    var diagnostik = document.querySelector(".diagnostik");
    var diagnostikRect = diagnostik.getBoundingClientRect();
    var diagnostikCenter = diagnostikRect.top + diagnostikRect.height / 2;
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY + diagnostikCenter - windowHeight / 2;
    window.scrollTo({ top: scrollY, behavior: "smooth" });
  });
