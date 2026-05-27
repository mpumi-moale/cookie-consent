const modal = document.getElementById('modal')
const modalCloseBtnEl = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')


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
    console.log('form submitted')
})