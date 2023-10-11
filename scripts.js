const input = document.querySelector("#input-text");
const output = document.querySelector("#output-text");

function getInfo() {
  const lines = input.value.split("\n");
  const formattedLines = lines
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const parts = line.split(":");
      return `  "${parts[0]}": "${parts[1]}"`;
    });
  const textFormatted = `{\n${formattedLines.join("\n")}\n}`;
  console.log(textFormatted);
  output.textContent = textFormatted;
}
