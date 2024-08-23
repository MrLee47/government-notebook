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
        listItem.innerHTML = `<a href="#" onclick="openPage(${index})">${page.name}</a>
                              <button onclick="removePage(${index})">X</button>`;
        pageList.appendChild(listItem);
    });
}
