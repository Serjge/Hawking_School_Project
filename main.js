const textArea = document.querySelector(".js-textarea");
const body = document.querySelector(".js-body");

const localStorageKey = {
  text: 'text',
  backgroundColor: 'backgroundColor'
}

const setValue = (event) => {
  const {value} = event.currentTarget

  localStorage.setItem(localStorageKey.text, value)
}

const onClearValueClick = () => {
  localStorage.removeItem(localStorageKey.text)
  textArea.value = ''
}

const onSaveBackgroundColorClick = (color) => {
  body.style.backgroundColor = color
  localStorage.setItem(localStorageKey.backgroundColor, color)
}

textArea.addEventListener('input', setValue)
textArea.value = localStorage.getItem(localStorageKey.text) || ''

body.style.backgroundColor = localStorage.getItem(localStorageKey.backgroundColor) || ''

