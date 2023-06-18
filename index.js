app = () => {
  const arrow = $(".arrow");
  arrow.on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $("#aboutme").offset().top,
      },
      1000
    );
  });
};
// windows load calls function shiftname
window.onload = function () {
  shiftName();
};
// push  name in inner html using loop and DOM.
function shiftName() {
  const name = document.getElementsByClassName("subheading")[0];
  let emptyName = "";
  const string = "I'm Alexander";

  for (let i = 0; i < string.length; i++) {
    time(i);
  }

  function time(i) {
    setTimeout(() => {
      emptyName += string[i];
      name.innerHTML = emptyName;
    }, 1000 * i); // Multiply the delay by 'i' to increment the delay for each iteration
  }
}

$(window).on("scroll", function () {});
