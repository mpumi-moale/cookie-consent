const modal = document.getElementById('modal')
const modalCloseBtnEl = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const modalInner = document.getElementById('modal-inner')


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

    // show upload image
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="./src/assets/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`

    // changed text upload
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `Making the sale...`
    }, 1500)   

    setTimeout(function(){
        modalInner.innerHTML = `
        <h2>Thanks you sucker! </h2>
          <p>We just sold the rights to your eternal soul.</p>
          <div class="idiot-gif">
              <img src="images/pirate.gif">
        </div>
        
        `
    }, 3000)


})