// post data method handling 
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const errorMsg = document.querySelector(".errorMsg");
const submitButton = document.querySelector("#submitButton");
const cancelButton = document.querySelector("#cancelButton");
let editingId = null;
let notesById = {};
async function AddData() {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    if (!title || !description) {
        errorMsg.textContent = "Input fields can not be empty";
        errorMessage();
        return;
    }
    try {
        const url = editingId ? `http://localhost:7000/api/${editingId}` : "http://localhost:7000/api";
        const res = await fetch(url, {
            method: editingId ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        });
        if (res.ok) {
            errorMsg.textContent = editingId ? "Note updated successfully" : "Note added successfully";
            resetForm();
        }
        else {
            errorMsg.textContent = "Server error"
        }
        errorMessage()
    } catch (error) {
        errorMsg.textContent = `${error}`
        errorMessage();
    }
    ShowData();
}
// error message handling 
function errorMessage() {  
    setTimeout(() => {
        errorMsg.textContent = "";
    }, 2000)
};
function resetForm() {
    editingId = null;
    titleInput.value = "";
    descriptionInput.value = "";
    submitButton.innerHTML = 'Add note <span aria-hidden="true">+</span>';
    cancelButton.hidden = true;
}
function CancelEdit() {
    resetForm();
}
// get method handling 
async function ShowData() {
    try {
        const res = await fetch("http://localhost:7000/api");
        if (res.ok) {
            errorMessage();
        }
        else {
            errorMsg.textContent = "Server error";
            errorMessage();
        }
        let html = "";
        const data = await res.json();
        const dataList = document.querySelector(".dataList");
        notesById = {};
        data.data.forEach((element) => {
            notesById[element._id] = element;
            html += `
            <div class="dataCon">
                <div class="dataElements">
                    <h3>${element.title}</h3>
                    <p>${element.description}</p>
                </div>
                <div class="button-group">
                    <button onclick="DeleteData('${element._id}')">Delete</button>
                    <button onclick="UpdateData('${element._id}')">Update</button>
                </div>
            </div>`;
        });
        dataList.innerHTML = html;
    }
    catch (error) {
        errorMsg.textContent = `${error}`;
    }
}

// delete method handling
async function DeleteData(id) {
    try {
        const res = await fetch(`http://localhost:7000/api/${id}`, {
            method: "DELETE"
        });
        if (res.ok) {
            if (editingId === id) {
                resetForm();
            }
            errorMsg.textContent = "Note deleted successfully";
            errorMessage();
            ShowData();
        }
        else {
            errorMsg.textContent = "Server error";
            errorMessage();
        }
    }
    catch (error) {
        errorMsg.textContent = `${error}`;
        errorMessage();
    }

}
// Update method handling 
async function UpdateData(id) {
    const note = notesById[id];
    if (!note) return;
    editingId = id;
    titleInput.value = note.title;
    descriptionInput.value = note.description;
    submitButton.innerHTML = 'Update note <span aria-hidden="true">&#10003;</span>';
    cancelButton.hidden = false;
    titleInput.focus();
}




