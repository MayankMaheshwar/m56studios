const cardname = document.getElementById('cardname')
const ccnum = document.getElementById('ccnum')
const form = document.getElementById('myform')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (cardname.value === '' || cardname.value == null) {
    messages.push('Name is required')
  }

  if (ccnum.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (ccnum.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})