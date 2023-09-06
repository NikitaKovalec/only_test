document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button')

    function toggleButton(button) {
        const isOpen = button.classList.toggle('open')
        button.querySelector('.icon').textContent = isOpen ? '-' : '+'
    }

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            buttons.forEach(function(btn) {
                if (btn !== button) {
                    btn.classList.remove('open')
                    btn.querySelector('.icon').textContent = '+'
                }
            })
            toggleButton(button)
            event.stopPropagation()
        })
    })

    document.addEventListener('click', function() {
        buttons.forEach(function(button) {
            button.classList.remove('open')
            button.querySelector('.icon').textContent = '+'
        })
    })
})