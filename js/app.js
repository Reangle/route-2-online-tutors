const input = document.querySelector('input')

input.addEventListener('input', updateValue)

function updateValue(e) {
    if (e.target.value === 'success') {
        console.log('SUCCESS !!!')
    }
}
