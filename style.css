let pages = [];

function addPage() {
    const pageName = prompt("Enter the name of the new page:");
    if (pageName) {
        pages.unshift({ name: pageName, content: "" });
        renderPageList();
    }
}

function removePage(index) {
    if (confirm(`Are you sure you want to delete "${pages[index].name}"?`)) {
        pages.splice(index, 1);
        document.getElementById('page-content').value = '';
        renderPageList();
    }
}

function editPageName(index) {
    const newName = prompt("Enter the new name for this page:", pages[index].name);
    if (newName) {
        pages[index].name = newName;
        renderPageList();
    }
}

function duplicatePage(index) {
    const newName = prompt("Enter the name for the duplicate page:", `${pages[index].name} (Copy)`);
    if (newName) {
        pages.splice(index, 0, { name: newName, content: pages[index].content });
        renderPageList();
    }
}

function openPage(index) {
    const contentArea = document.getElementById('page-content');
    contentArea.value = pages[index].content;
    contentArea.placeholder = `Editing ${pages[index].name}...`;
    contentArea.oninput = () => {
        pages[index].content = contentArea.value;
    };
}

function renderPageList() {
    const pageList = document.getElementById('page-list');
    pageList.innerHTML = '';

    pages.forEach((page, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="page-title">${page.name}</div>
            <div class="menu">
                <span>...</span>
                <div class="dropdown">
                    <button onclick="duplicatePage(${index})">Duplicate</button>
                    <button onclick="editPageName(${index})">Rename</button>
                    <button onclick="removePage(${index})">Delete</button>
                </div>
            </div>
        `;
        pageList.appendChild(listItem);
    });
}
