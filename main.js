const authorShareIcon = document.querySelector(".shareicon");
const authorIcon = document.querySelector(".author-section");
const socialShareIcon = document.querySelector(".social-share-icon");
const socialIcon = document.querySelector(".social-icon");

authorShareIcon.addEventListener("click", function (e) {
  e.preventDefault();
  e.target.parentElement.parentElement.classList.add("mode-off");
  e.target.parentElement.parentElement.classList.remove("mode-on");
  socialIcon.classList.remove("mode-off");
  socialIcon.classList.add("mode-on");
});
socialShareIcon.addEventListener("click", function (e) {
  e.preventDefault();
  e.target.parentElement.parentElement.classList.remove("mode-on");
  e.target.parentElement.parentElement.classList.add("mode-off");
  authorIcon.classList.remove("mode-off");
  authorIcon.classList.add("mode-on");
});
