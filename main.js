const main = document.querySelector('.main');
const input = document.querySelector('input');
const button = document.querySelector('button');
const trash = document.querySelector('#trash');

function enter() {
    if (window.event.keyCode == 13) {
        if (input.value === '') {
            alert('Shoopping List를 입력해주세요!');
            input.focus();
            return;
        }

        const list = document.createElement('div');
        list.setAttribute('class', 'list');

        const text = document.createElement('div');
        text.setAttribute('class', 'list__name');
        text.textContent = input.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'list__delete');
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.addEventListener('click', () => {
            main.removeChild(list);
        });

        list.appendChild(text);
        list.appendChild(deleteBtn);

        main.appendChild(list);

        list.scrollIntoView({
            block: 'center'
        });
        input.value = '';
        input.focus();
    }
};

button.addEventListener('click', () => {
    if (input.value === '') {
        alert('Shoopping List를 입력해주세요!');
        input.focus();
        return;
    }

    const list = document.createElement('div');
    list.setAttribute('class', 'list');

    const text = document.createElement('div');
    text.setAttribute('class', 'list__name');
    text.textContent = input.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'list__delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', () => {
        main.removeChild(list);
    });

    list.appendChild(text);
    list.appendChild(deleteBtn);

    main.appendChild(list);

    input.value = '';
    input.focus();

});