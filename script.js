const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
// const middleContent = document.querySelector(".middle-content");
const newsFeed = document.querySelector(".news-feed");
// const btnTop = document.querySelector(".btn-top");
const loginModal = document.querySelector(".login-modal");
const loginModalX = document.querySelector(".fa-times");
const loginPageBtn = document.querySelector(".login-page-btn");
const postModalX = document.querySelector(".modal i");
const postModal = document.querySelector(".modal");
const postModalWrapper = document.querySelector(".post-modal-wrapper");
const postModalBtn = document.querySelector(".post-btn");
const postModalInput = document.querySelector(".post-modal-input");
const postModalHeaderBtn = document.querySelector(".modal-header-button");
const postModalPlus = document.querySelector(".modal-footer span");
const user = document.querySelector(".user");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const sidebar = document.querySelector(".sidebar");
const sidebarX = document.querySelector(".sidebar-header i");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");
const darkmodeText = document.querySelector(".darkmode-text");

const gotoLoginPage = () => {
  mainPage.style.display = "none";
  loginPage.style.display = "grid";
};

// middleContent.addEventListener("click", (e) => {
//   console.log(e.target.classList[1]);
//   if (e.target.classList[1] === "middle-content-btn") {
//     gotoLoginPage();
//   }
// });

// btnTop.addEventListener("click", () => {
//   const userInfoInput = document.querySelector(".user-info");
//   const userPasswornInput = document.querySelector(".password");

//   if (userInfoInput.value === "" && userPasswornInput.value === "") {
//     gotoLoginPage();
//     loginModal.style.display = "flex";
//   } else {
//     mainPage.style.display = "none";
//     newsFeed.style.display = "block";
//   }
// });

loginModalX.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// loginPageBtn.addEventListener("click", () => {
//   const loginUserInfoInput = document.querySelector(".login-user-info");
//   const loginUserPasswordInput = document.querySelector(".login-user-password");

//   if (loginUserInfoInput.value === "" && loginUserPasswordInput.value === "") {
//     loginModal.style.display = "flex";
//   }
// });

postModalX.addEventListener("click", () => {
  postModal.style.display = "none";
  postModalWrapper.style.display = "none";
  postModalInput.value = "";
});

postModalBtn.addEventListener("click", () => {
  postModalWrapper.style.display = "block";
  postModal.style.display = "block";
});

const changeOpacity = (x) => {
  postModalHeaderBtn.style.opacity = x;
  postModalPlus.style.opacity = x;
};
postModalInput.addEventListener("keyup", () => {
  if (postModalInput.value !== "") {
    changeOpacity(1);
  } else {
    changeOpacity(0.7);
  }
});

user.addEventListener("click", () => {
  sidebarWrapper.classList.add("display-sidebar-wrapper");
  sidebar.classList.add("display-sidebar");
});

sidebarX.addEventListener("click", () => {
  sidebarWrapper.classList.remove("display-sidebar-wrapper");
  sidebar.classList.remove("display-sidebar");
});

const darmodeElements1 = document.querySelectorAll(".dark-mode-1");
const darmodeElements2 = document.querySelectorAll(".dark-mode-2");
const lightText = document.querySelectorAll(".light-text");
const borderItems = document.querySelectorAll(".border");

toggle.addEventListener("click", () => {
  circle.classList.toggle("move");
  Array.from(darmodeElements1).map((el) => el.classList.toggle("dark1"));
  Array.from(darmodeElements2).map((el) => el.classList.toggle("dark2"));
  Array.from(lightText).map((el) => el.classList.toggle("light"));
  Array.from(borderItems).map((el) => el.classList.toggle("border-color"));
  if (circle.classList.contains("move")) {
    darkmodeText.textContent = "Dark Mode";
  } else {
    darkmodeText.textContent = "Light Mode";
  }
});
