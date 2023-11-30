const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];

const itemsPerPage = 3;
let currentPage = 1;

function displayContent() {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < data.length; i++) {
        const item = data[i];
        const itemElement = document.createElement("div");
        itemElement.textContent = item;
        contentContainer.appendChild(itemElement);
    }

    document.getElementById("currentPage").textContent = currentPage;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayContent();
    }
}

function nextPage() {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayContent();
    }
}

displayContent();