const input = document.getElementById('input')
const listBlockinput = document.getElementById('listBlock')
const leftBox = document.getElementById('leftBox')
const inputBlock = document.getElementById('inputBlock')


input.addEventListener('click', () => {
    input.classList.remove('inputGrey')
    input.classList.add('inputWhite')
    listBlock.classList.add('opacity')
    leftBox.classList.add('opacity')
    
    input.addEventListener('keydown', function (evt) {
        var value = evt.target.value;
        console.dir(value)
        if (value == '//') {
            input.style.color = 'red'
        }
    })
})

