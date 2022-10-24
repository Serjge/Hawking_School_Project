import './styles/index.scss'
import $ from "jquery";

$(document).ready(function () {
  $('.burger').click(function () {
    $('.burger__line,.menu__container').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

function serializeForm(formNode) {
  const { elements } = formNode
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element
      return { name, value }
    })
  console.log(data)
}

function handleFormSubmit(event) {
  event.preventDefault()
  serializeForm(applicantForm)
}



const applicantForm = document.getElementById('form')
applicantForm.addEventListener('submit', handleFormSubmit)


