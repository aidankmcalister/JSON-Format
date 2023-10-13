const input = document.querySelector("#input-text");
const output = document.querySelector("#output-text");
const errorMsgElement = document.querySelector("#errorMsg");

function getInfo() {
  if (input.value.trim() === "") {
    console.log("empty");
    errorMsgElement.style.display = "block";
  } else {
    errorMsgElement.style.display = "none";
    const lines = input.value.split("\n");
    const formattedLines = lines
      .filter((line) => line.trim() !== "")
      .map((line) => {
        const parts = line.split(/[:|]/);
        return `<span class="cyan-text">"${parts[0]}"</span>: <span class="orange-text">"${parts[1]}"</span>`;
      });

    formattedLines.forEach((line, index) => {
      formattedLines[index] = `  ${line}`;
    });

    const textFormatted = `{<br>${formattedLines.join(",<br>")}<br>}`;
    output.innerHTML = textFormatted;
  }
}

function copyText() {
  const formattedText = `{${output.textContent.trim()}}`;
  const textToCopy = formattedText.slice(1, -1);
  const textarea = document.createElement("textarea");
  textarea.id = "temp-element";
  textarea.style.height = 0;
  document.body.appendChild(textarea);
  textarea.value = textToCopy;
  const selector = textarea;
  selector.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function eraseText() {
  input.textContent = "";
}
