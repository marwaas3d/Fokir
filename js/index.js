let header = document.getElementById("header");
let navListItems = document.querySelectorAll(".nav-list-item");
let burgerBtn = document.getElementById("burgerBtn");
let burgerMenu = document.getElementById("burgerMenu");

let form = document.querySelector("form");
let firstName = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let meassage = document.getElementById("meassage");

let nameP = document.getElementById("nameP");
let emailP = document.getElementById("emailP");
let subjectP = document.getElementById("subjectP");
let textareaP = document.getElementById("textareaP");
let paragraph = document.querySelectorAll(".paragraph");
let sendBtn = document.getElementById("sendBtn");

let firstBtn = document.getElementById("firstBtn");
let secondBtn = document.getElementById("secondBtn");
let reviewOne = document.getElementById("reviewOne");
let reviewTwo = document.getElementById("reviewTwo");

let team = document.getElementById("team");
let complete = document.getElementById("complete");
let files = document.getElementById("files");
let lines = document.getElementById("lines");

let btnFilter = document.querySelectorAll(".btnFilter");
let all = document.getElementById("all");
let graphics = document.getElementById("graphics");
let webDesign = document.getElementById("webDesign");
let branding = document.getElementById("branding");

let portfollioItems = document.querySelectorAll(".portfollio-item");
let wallClock = document.getElementById("wallClock");
let watch = document.getElementById("watch");
let cooo = document.getElementById("cooo");
let shoes = document.getElementById("shoes");
let MILLER = document.getElementById("MILLER");
let router = document.getElementById("router");

/*****************************display product************************ */
let viewOnlyItems = document.querySelectorAll(".viewOnly");
let viewOnlyItemsTwo = document.querySelectorAll(".viewOnlyTwo");
let displayProductOverlay = document.getElementById("displayProductOverlay");
let displayProductOverlayTwo = document.getElementById(
  "displayProductOverlayTwo",
);
let imgView = document.getElementById("imgView");
let imgViewTwo = document.getElementById("imgViewTwo");
let x = document.getElementById("x");
let x2 = document.getElementById("x2");
let productWindow = document.getElementById("product-window");

let leftArrow = document.querySelector(".fa-caret-left");
let rightArrow = document.querySelector(".fa-caret-right");
let productNumber = document.getElementById("productNumber");

/*****************************navbar************************ */

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 10) {
    header.style.backgroundColor = "#333333";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown") {
    header.classList.remove("show-nav");
    header.classList.add("hide-nav");
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    header.classList.remove("hide-nav");
    header.classList.add("show-nav");
  }
});

navListItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navListItems.forEach(function (el) {
      el.classList.remove("active");
    });

    item.classList.add("active");
  });
});

burgerBtn.onclick = function () {
  if (burgerMenu.classList.contains("open")) {
    burgerMenu.classList.remove("open");
    burgerMenu.classList.add("close");
  } else {
    burgerMenu.style.display = "block";
    burgerMenu.classList.remove("close");
    burgerMenu.classList.add("open");
  }
};

burgerMenu.addEventListener("animationend", function () {
  if (burgerMenu.classList.contains("close")) {
    burgerMenu.style.display = "none";
  }
});
/**********************************form********************************* */
firstName.onblur = function () {
  if (firstName.value.length < 1) {
    nameP.style.display = "block";
  }
};

firstName.oninput = function () {
  if ((nameP.style.display = "block")) {
    nameP.style.display = "none";
  }
};
email.onblur = function () {
  if (email.value.length < 1 || !email.value.includes("@")) {
    emailP.style.display = "block";
  }
};

email.oninput = function () {
  if ((emailP.style.display = "block")) {
    emailP.style.display = "none";
  }
};

subject.onblur = function () {
  if (subject.value.length < 1) {
    subjectP.style.display = "block";
  }
};

subject.oninput = function () {
  if ((subjectP.style.display = "block")) {
    subjectP.style.display = "none";
  }
};

meassage.onblur = function () {
  if (meassage.value.length < 1) {
    textareaP.style.display = "block";
  }
};

meassage.oninput = function () {
  if ((textareaP.style.display = "block")) {
    textareaP.style.display = "none";
  }
};

sendBtn.addEventListener("mouseenter", function () {
  let allHidden = true;

  paragraph.forEach((p) => {
    if (p.style.display !== "none") {
      allHidden = false;
    }
  });

  if (allHidden) {
    sendBtn.classList.remove("disabled");
  } else {
    sendBtn.classList.add("disabled");
  }
});
/*****************************Slider  btn************************ */

firstBtn.addEventListener("click", function () {
  reviewTwo.style.left = "200%";
  reviewOne.style.right = "0";

  firstBtn.style.cssText = `border-radius: 10px;
        width: 60%;
        background-color: var(--main-color);`;
  secondBtn.style.cssText = `        border-radius: 50%;
        width: 20%;
        border: 1px solid var(--main-color);`;
});

secondBtn.addEventListener("click", function () {
  reviewTwo.style.left = "0";
  reviewOne.style.right = "200%";

  secondBtn.style.cssText = `border-radius: 10px;
        width: 60%;
        background-color: var(--main-color);`;
  firstBtn.style.cssText = `        border-radius: 50%;
        width: 20%;
        border: 1px solid var(--main-color);
        background-color: transparent`;
});

/****************************numbers appear during scroll************************ */

let started = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= 1673 && !started) {
    started = true;

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    let interval1 = setInterval(() => {
      team.innerHTML = count1;
      count1 += 20;

      if (count1 > 200) {
        clearInterval(interval1);
      }
    }, 70);

    let interval2 = setInterval(() => {
      complete.innerHTML = count2;
      count2 += 15;

      if (count2 > 345) {
        clearInterval(interval2);
      }
    }, 50);

    let interval3 = setInterval(() => {
      files.innerHTML = count3;
      count3 += 30;

      if (count3 > 1800) {
        clearInterval(interval3);
      }
    }, 20);

    let interval4 = setInterval(() => {
      lines.innerHTML = count4;
      count4 += 30;

      if (count4 > 1200) {
        clearInterval(interval4);
      }
    }, 20);
  }

  if (window.scrollY < 1673) {
    started = false;
  }
});

btnFilter.forEach((btn) => {
  btn.addEventListener("click", function () {
    btnFilter.forEach((ele) => {
      ele.classList.remove("activeFilter");
    });

    btn.classList.add("activeFilter");
  });
});
/*****************************filter products************************ */
all.addEventListener("click", function () {
  portfollioItems.forEach((item) => {
    item.style.display = "block";
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "scale(1)";
    }, 300);
  });
});

graphics.addEventListener("click", function () {
  portfollioItems.forEach((item) => {
    item.style.opacity = "1";
    item.style.transform = "scale(1)";
  });

  wallClock.style.opacity = "0";
  wallClock.style.transform = "scale(0.8)";

  setTimeout(() => {
    wallClock.style.display = "none";
  }, 500);
});

webDesign.addEventListener("click", function () {
  portfollioItems.forEach((item) => {
    item.style.display = "block";
    item.style.opacity = "1";
    item.style.transform = "scale(1)";
  });

  watch.style.opacity = "0";
  watch.style.transform = "scale(0.8)";
  cooo.style.opacity = "0";
  cooo.style.transform = "scale(0.8)";
  router.style.opacity = "0";
  router.style.transform = "scale(0.8)";

  setTimeout(() => {
    watch.style.display = "none";
    cooo.style.display = "none";
    router.style.display = "none";
  }, 500);
});

branding.addEventListener("click", function () {
  portfollioItems.forEach((item) => {
    item.style.display = "block";
    item.style.opacity = "1";
    item.style.transform = "scale(1)";
  });

  wallClock.style.opacity = "0";
  wallClock.style.transform = "scale(0.8)";
  cooo.style.opacity = "0";
  cooo.style.transform = "scale(0.8)";
  shoes.style.opacity = "0";
  shoes.style.transform = "scale(0.8)";
  MILLER.style.opacity = "0";
  MILLER.style.transform = "scale(0.8)";

  setTimeout(() => {
    wallClock.style.display = "none";
    cooo.style.display = "none";
    shoes.style.display = "none";
    MILLER.style.display = "none";
  }, 500);
});

/*****************************display product************************ */
isOpend = false;
isOpend2 = false;

function openOverlay(item) {
  displayProductOverlay.style.display = "flex";
  let img = item.querySelector("img");
  let displayimg = displayProductOverlay.querySelector("img");

  imgView.src = img.src;
  isOpend = true;
  index = viewOnlyItems.indexOf(item);
  productNumber.innerHTML = index + 1;
}

wallClock.addEventListener("click", () => openOverlay(wallClock));
shoes.addEventListener("click", () => openOverlay(shoes));
router.addEventListener("click", () => openOverlay(router));

function openOverlayTwo(item) {
  displayProductOverlayTwo.style.display = "flex";
  let img = item.querySelector("img");
  let displayimg = displayProductOverlayTwo.querySelector("img");

  imgViewTwo.src = img.src;
  isOpend = true;
  index = viewOnlyItemsTwo.indexOf(item);
}
watch.addEventListener("click", () => openOverlayTwo(watch));
cooo.addEventListener("click", () => openOverlayTwo(cooo));
MILLER.addEventListener("click", () => openOverlayTwo(MILLER));

displayProductOverlay.addEventListener("click", (e) => {
  if (
    !imgView.contains(e.target) &&
    !leftArrow.contains(e.target) &&
    !rightArrow.contains(e.target) &&
    !x.contains(e.target)
  ) {
    displayProductOverlay.style.display = "none";
    isOpend = false;
    productNumber.innerHTML = 1;
  }
});

displayProductOverlayTwo.addEventListener("click", (e) => {
  if (!productWindow.contains(e.target)) {
    displayProductOverlayTwo.style.display = "none";
    isOpend2 = false;
  }
});

x.addEventListener("click", () => {
  displayProductOverlay.style.display = "none";
  isOpend = false;
  productNumber.innerHTML = 1;
});
x2.addEventListener("click", () => {
  displayProductOverlayTwo.style.display = "none";
  isOpend = false;
});

let index = 0;

rightArrow.addEventListener("click", function () {
  index++;
  if (index >= viewOnlyItems.length) {
    index = 0;
  }
  const img = viewOnlyItems[index].querySelector("img");
  imgView.src = img.src;
  productNumber.innerHTML = index + 1;
});

leftArrow.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = viewOnlyItems.length - 1;
  }
  const img = viewOnlyItems[index].querySelector("img");
  imgView.src = img.src;
  productNumber.innerHTML = index + 1;
});

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    index++;
    if (index >= viewOnlyItems.length) {
      index = 0;
    }
    const img = viewOnlyItems[index].querySelector("img");
    imgView.src = img.src;
    productNumber.innerHTML = index + 1;
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    index--;
    if (index < 0) {
      index = viewOnlyItems.length - 1;
    }
    const img = viewOnlyItems[index].querySelector("img");
    imgView.src = img.src;
    productNumber.innerHTML = index + 1;
  }
});
