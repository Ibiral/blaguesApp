const blagueHeader = document.getElementById("b_header");
const blagueContent = document.getElementById("b_content");

function getBlague() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const content = data.data.content;
      console.log(content);

      blagueHeader.textContent = content.text_head;
      blagueContent.textContent =
        content.text !== "" ? content.text : content.text_hidden;
    });
}

getBlague();

document.body.addEventListener("click", getBlague);