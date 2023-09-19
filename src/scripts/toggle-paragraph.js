function toggleParagraph(numberId) {
  const paragraph = document.getElementById('paragraph' + numberId);
  const h2 = document.getElementById('tip' + numberId);
  const selected = document.querySelectorAll("h2.selected");
  const allParagraphs = document.querySelectorAll("p.tip");

  selected.forEach(element => {
   element.className = "tip";
  });

  if (paragraph.style.display === "none") {
    allParagraphs.forEach(element => {
      element.style.display = "none"; 
    });
    paragraph.style.display = "block";
    h2.className = "selected";
  } else {
    paragraph.style.display = "none";
  }
}
