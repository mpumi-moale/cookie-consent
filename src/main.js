const modal = document.getElementById('modal')
const modalCloseBtnEl = document.getElementById('modal-close-btn')


// modal pop up
setTimeout(function() {
  modal.style.display = 'inline'
}, 1500)


// close the modal pop up
modalCloseBtnEl.addEventListener('click', function() {
  modal.style.display = 'none'
})
