const blagueHeader = document.getElementById("b_header");
const blagueContent = document.getElementById("b_content");
const blagueBtn = document.getElementById("b_btn");

function getBlague() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const content = data.data.content;

      blagueHeader.textContent = content.text_head;
      blagueContent.textContent =
        content.text !== "" ? content.text : content.text_hidden;
    });
}

getBlague();

blagueBtn.addEventListener("click", getBlague);