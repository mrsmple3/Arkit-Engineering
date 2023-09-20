document
  .querySelector(".prodact_diagnostic")
  .addEventListener("click", function () {
    location.assign("Diagnostic.html");
  });
// !Hover Prodact Menu
document.querySelector(".nav_prodact").addEventListener("click", function () {
  var prodacts = document.querySelector(".prodacts");
  if (prodacts.classList.contains("prodacts_active")) {
    prodacts.classList.remove("prodacts_active");
  } else {
    prodacts.classList.add("prodacts_active");
  }
});

let navProdact = document.querySelector(".nav_prodact");
let prodacts = document.querySelector(".prodacts");

let prodactMeasure = document.querySelector(".prodact_measure");
let measuring = document.querySelector(".measuring");

prodactMeasure.addEventListener("mouseover", function () {
  measuring.classList.add("prodacts_active");
});

prodactMeasure.addEventListener("mouseout", function () {
  if (!measuring.matches(":hover")) {
    measuring.classList.remove("prodacts_active");
  }
});

measuring.addEventListener("mouseover", function () {
  prodacts.classList.add("prodacts_active");
});

measuring.addEventListener("mouseout", function () {
  if (!prodactMeasure.matches(":hover")) {
    measuring.classList.remove("prodacts_active");
  }
});

// *economy
let prodactEconomy = document.querySelector(".prodact_eco");
let economy = document.querySelector(".economy_menu");

prodactEconomy.addEventListener("mouseover", function () {
  economy.classList.add("prodacts_active");
});

prodactEconomy.addEventListener("mouseout", function () {
  if (!measuring.matches(":hover")) {
    economy.classList.remove("prodacts_active");
  }
});

economy.addEventListener("mouseover", function () {
  prodacts.classList.add("prodacts_active");
});

economy.addEventListener("mouseout", function () {
  if (!prodactMeasure.matches(":hover")) {
    economy.classList.remove("prodacts_active");
  }
});
// ! popup
let emailInput = document.getElementById("email_input");
let phoneInput = document.getElementById("phone_input");
let errorElementEmail = document.getElementById("error_e");
let errorElementPhone = document.getElementById("error_p");
let labelTitle9 = document.querySelector(".email_title");
let labelTitle10 = document.querySelector(".phone_title");
let popupBtn = document.getElementById("ok");

function activateInputs9() {
  emailInput.classList.add("active");
  labelTitle9.classList.add("active_e_p");
  emailInput.placeholder = "";
}

function deactivateInputs9() {
  emailInput.classList.remove("active");
  if (emailInput.value == "") {
    labelTitle9.classList.remove("active_e_p");
  }
  emailInput.placeholder = "Email address";
}

function activateInputs10() {
  phoneInput.classList.add("active");
  labelTitle10.classList.add("active_e_p");
  phoneInput.placeholder.value = "";
}

function deactivateInputs10() {
  phoneInput.classList.remove("active");
  if (phoneInput.value == "") {
    labelTitle10.classList.remove("active_e_p");
  }
}

popupBtn.addEventListener("click", function (event) {
  if (
    !(
      checkInput(emailInput, errorElementEmail, "Please enter your email.") &&
      checkInput(phoneInput, errorElementPhone, "Please enter your phone.")
    )
  ) {
    event.preventDefault();
  }
});

function checkInput(inputElement, errorElement, errorMessage) {
  if (inputElement.value === "") {
    errorElement.textContent = errorMessage;
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}

// !Popup function
const popupLinks = document.querySelectorAll(".popup_link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock_padding");

let unclock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".close_popup");
if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const el = popupCloseIcon[i];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unclock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add("open");
    currentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup_content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnclock = true) {
  if (unclock) {
    popupActive.classList.remove("open");
    if (doUnclock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unclock = false;
  setTimeout(function () {
    unclock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function () {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = "0px";
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unclock = false;
  setTimeout(function () {
    unclock = true;
  }, timeout);
}

document.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});

// !Burger
function toggleBurgerMenu() {
  var burgerMenu = document.getElementById("burger-menu");
  burgerMenu.classList.toggle("active");
}
