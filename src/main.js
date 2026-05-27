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
/*
Challenge:
1. Take control of the "modal-text" element. 
2. Make it so that when a user clicks on 
   the accept button, the HTML string below
   is inserted into the modal-text div.

<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>
*/ 
})