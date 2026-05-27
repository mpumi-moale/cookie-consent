const modal = document.getElementById('modal')
const modalCloseBtnEl = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')


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
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="./src/assets/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`
    setTimeout(function(){
        const uploadText = document.getElementById('upload-text')
        uploadText.innerHTML = `Making the sale...`
    }, 1500) 
  
/*   
Challenge: 
1. Use a setTimeout to make the phrase "Uploading
   your data to the dark web" change to "Making the 
   sale..." after 1.5 seconds.
⚠️ Do not change the loading svg!
*/   

})