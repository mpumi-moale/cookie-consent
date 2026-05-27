const modal = document.getElementById('modal')
const modalCloseBtnEl = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modelText = document.getElementById('modal-text')


// modal pop up
setTimeout(function() {
  modal.style.display = 'inline'
}, 1500)


// close the modal pop up
modalCloseBtnEl.addEventListener('click', function() {
  modal.style.display = 'none'
})

// submit form
consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    modelText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="./src/assets/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`

    setTimeout(function() {
      modelText.innerHTML = `
      <div class="modal-inner-loading">
        <img src="./src/assets/loading.svg" class="loading">
        <p id="uploadText">
            Making the sale...
        </p>
    </div>
      `
    }, 1500)
})