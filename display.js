function displayFileInput() {
  document.querySelector("#home").style.display = "None"
  document.querySelector("#file-input").style.display = "Block"
  document.querySelector("#report").style.display = "None"
  enableButton()
}

function displayReport() {
  document.querySelector("#file-input").style.display = "None"
  document.querySelector("#report").style.display = "Block"
}
  
function displayHome() {
  location.reload()
}

function enableButton() {
  if (fileContentsA.length == 2 && fileContentsB.length == 2) {
    document.querySelector("#results").disabled = false;
    } else {
    document.querySelector("#results").disabled = true;
    }
}
