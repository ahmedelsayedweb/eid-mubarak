const captureButton = document.getElementById('capture-button');
const inputField = document.getElementById('inputField');
const elementToCapture = document.getElementById('element-to-capture');
let name = 'untitled.png'
inputField.addEventListener('input', (e) => {
  // console.log(e.target.value);
  name = `${e.target.value}.png`
  document.getElementById('innerValue').innerHTML = e.target.value
});
captureButton.addEventListener('click', () => {
  document.getElementById('contentGroupId').style.display = 'none';
  html2canvas(elementToCapture)
    .then(canvas => {
      const image = canvas.toDataURL('image/png'); // Convert canvas to image data URL
      const link = document.createElement('a');
      link.href = image;
      link.download = name;
      link.click();
    });
});