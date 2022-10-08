function generateBanner() {
  document.getElementById("banner").src = `../../img/banner/${
    Math.floor(Math.random() * 5) + 1
  }.png`;
  setTimeout(generateBanner, 5000);
}
