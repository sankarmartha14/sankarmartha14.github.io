// import Swiper styles

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

function closeNavToggleSmallScreen() {
  if (navToggle) {
    nav.classList.toggle("nav--visible");
  }
}

function changeActiveTab(event) {
  let hashlink = event.target.hash;
  document.querySelector(".active").classList.remove("active");
  let link = hashlink.toString().replace("#", "");
  document.querySelector(`a[href*=${link}]`).classList.add("active");
  event.stopPropagation();
}

const spyScrolling = () => {
  const sections = document.querySelectorAll(".scroll-bg");

  window.onscroll = () => {
    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
        const id = sections[s].id;
        if (
          id === "main_features_content" ||
          id === "dowload_playstore_content"
        ) {
          document.querySelector(".header__background-color").style.background =
            "#213275";
        } else {
          document.querySelector(".header__background-color").style.background =
            "linear-gradient(#213275, #2b91bf)";
        }
        document.querySelector(".active").classList.remove("active");
        document.querySelector(`a[href*=${id}]`).classList.add("active");
      }
  };
};

spyScrolling();

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function showModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
