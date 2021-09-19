const dropdownButton = document.querySelectorAll('.nav-item ');

dropdownButton.forEach(el => {
    el.addEventListener('mouseover', (e) => {
        e.preventDefault();
        const list = el.querySelector('.list-lab');
        list.classList.add('hidden');
    })
})

dropdownButton.forEach(el => {
    el.addEventListener('mouseout', (e) => {
        e.preventDefault();
        const list = el.querySelector('.list-lab');
        list.classList.remove('hidden');
    })
})