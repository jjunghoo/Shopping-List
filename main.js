const main = document.querySelector('.main');
const input = document.querySelector('input');
const button = document.querySelector('button');
let id = 0;

function enter() {
    if (window.event.keyCode == 13) {
        if (input.value === '') {
            alert('Shoopping List를 입력해주세요!');
            input.focus();
            return;
        }

        const list = document.createElement('div');
        list.setAttribute('class', 'list');
        list.setAttribute('data-id', `${id}`);
        list.innerHTML = `
            <div class="list__name">${input.value}</div>
            <button class="list__delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        `;
        id++;
        main.appendChild(list);
        list.scrollIntoView({ block: 'center' });
        input.value = '';
        input.focus();
    }
};

main.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if(id&&event.target.className!=='list') {
        const toBeDeleted = document.querySelector(`.list[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});

button.addEventListener('click', () => {
    if (input.value === '') {
        alert('Shoopping List를 입력해주세요!');
        input.focus();
        return;
    }
    const list = document.createElement('div');
    list.setAttribute('class', 'list');
    list.setAttribute('data-id', `${id}`);
    list.innerHTML = `
        <div class="list__name">${input.value}</div>
        <button class="list__delete">
            <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>
    `;
    id++;
    main.appendChild(list);
    list.scrollIntoView({ block: 'center' });
    input.value = '';
    input.focus();
});