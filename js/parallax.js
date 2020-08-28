window.addEventListener("scroll", () => {
  const diamondLeft = document.getElementById("heroDiamondLeft");
  const diamondRight = document.getElementById("heroDiamondRight");

  var scrolled = window.pageYOffset;
  var rateLeft = scrolled * -0.5;
  var rateRight = scrolled * 0.4;

  diamondLeft.style.transform = `translate3d(0px, ${rateLeft}px, 0px)`;
  diamondRight.style.transform = `translate3d(0px, ${rateRight}px, 0px)`;
});
