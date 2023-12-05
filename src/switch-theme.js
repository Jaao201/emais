const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switchTheme')

$checkbox.addEventListener('change', function () {
    $html.classList.toggle('switchTheme')
})