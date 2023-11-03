const rangeInput = document.getElementById('r');
        const rangeValue = document.getElementById('rangevalue');

        rangeInput.addEventListener('input', () => {
            rangeValue.textContent = rangeInput.value
        });