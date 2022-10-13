/* <li class="item">
    <p>Dog Food</p>
    <button class="delete-btn">Delete</button>
</li> */

const listContent = document.querySelector(".content");
const itemName = document.querySelector("#item-name");
const addBtn = document.querySelector(".add-btn")

console.log(listContent);
console.log(itemName);
console.log(addBtn);

function deleteBtnFn(e){
    console.log(e.target);

    e.target.parentElement.remove();
}

function addBtnFn() {
    const itemNameValue = itemName.value;
    itemName.value = "";

    const liItem = document.createElement("li");  // <li></li>
    liItem.className = "item";

    const pItem = document.createElement("p");  //  <p></p>
    const pText = document.createTextNode(itemNameValue);
    pItem.appendChild(pText);

    const deleteBtnItem = document.createElement("button");
    deleteBtnItem.className = "delete-btn";
    const deleteBtnText = document.createTextNode("Delete");
    deleteBtnItem.appendChild(deleteBtnText);

    liItem.appendChild(pItem);
    liItem.appendChild(deleteBtnItem);

    console.log(liItem);

    listContent.appendChild(liItem)



    deleteBtnItem.addEventListener('click', deleteBtnFn)
}
addBtn.addEventListener("click", addBtnFn);

