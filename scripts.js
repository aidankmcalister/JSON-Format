const input = document.querySelector("#input-text");
const output = document.querySelector("#output-text");
const errorMsgElement = document.querySelector("#errorMsg");
let part1 = null;
let part2 = null;
let isOn;

function toggleMultipleClasses(element, ...classNames) {
  classNames.forEach((className) => {
    element.classList.toggle(className);
  });
}

function appearanceMode() {
  isOn = !isOn;
  console.log(isOn);
  if (!part1 || !part2) {
    part1 = document.querySelector("#part1");
    part2 = document.querySelector("#part2");
  }

  toggleMultipleClasses(document.body, "dark-mode");
  toggleMultipleClasses(input, "input-dark", "textbox-dark");
  toggleMultipleClasses(output, "output-dark", "textbox-dark");

  if (part1 || part2) {
    toggleMultipleClasses(part1, "part1-text-dark");
    toggleMultipleClasses(part2, "part2-text-dark");
  }
}

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
        const key = parts[0].trim();
        const value = parts[1].trim();
        const formattedValue = !isNaN(value) ? value : `"${value}"`;
        return `<span id="part1" class="cyan-text">"${key}"</span>: <span id="part2" class="orange-text">${formattedValue}</span>`;

        if (!part1 || !part2) {
          part1 = document.querySelector("#part1");
          part2 = document.querySelector("#part2");
          console.log("part1:", part1);
          console.log("part2:", part2);
        }

        console.log(part1);
        toggleMultipleClasses(part1, "part1-text-dark");
        toggleMultipleClasses(part2, "part2-text-dark");
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
  input.value = "";
}
