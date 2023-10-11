function limitTextArea(element, maxCharPerRow) {
  const lines = element.value.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length > maxCharPerRow) {
      lines[i] = lines[i].substring(0, maxCharPerRow);
    }
  }
  element.value = lines.slice(0, 11).join("\n");
}
