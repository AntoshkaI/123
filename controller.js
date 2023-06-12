
const model = {
    title: 'оооо',
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
};


function renderView() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h1 class="title">${model.title}</h1>
        <ul>
            ${model.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <button id="addBtn">Add Item</button>
    `;
}


function addItem() {
    const newItem = `Item ${model.items.length + 1}`;
    model.items.push(newItem);
    renderView();
}


document.getElementById('addBtn').addEventListener('click', addItem);


renderView();

