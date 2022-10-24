import './styles/index.scss'
import $ from "jquery";

$(document).ready(function () {
  $('.burger').click(function () {
    $('.burger__line,.menu__container').toggleClass('active');
    $('body').toggleClass('lock');
  });
});