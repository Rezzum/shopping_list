const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("ul");
const input = document.querySelector("input");

addBtn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");

    delBtn.textContent = "Delete";
    span.textContent = input.value;

    listItem.appendChild(span);
    listItem.appendChild(delBtn);

    list.appendChild(listItem);

    input.value = "";
    input.focus();

    delBtn.addEventListener("click", () => {
        listItem.remove();
    });
});
