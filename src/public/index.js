// post data method handling 
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const errorMsg = document.querySelector(".errorMsg");
async function AddData() {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    if (!title || !description) {
        errorMsg.textContent = "Input fields can not be empty";
        errorMessage();
        return;
    }
    try {
        const res = await fetch("http://localhost:7000/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        });
        if (res.ok) {
            errorMsg.textContent = "Data added successfully";
            titleInput.value = "";
            descriptionInput.value = ""
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
    ;
    setTimeout(() => {
        errorMsg.textContent = "";
    }, 2000)
};
// get method handling 
async function ShowData() {
    try {
        const res = await fetch("http://localhost:7000/api");
        if (res.ok) {
            errorMsg.textContent = "Refreshed";
            errorMessage();
        }
        else {
            errorMsg.textContent = "Server error";
            errorMessage();
        }
        let html = "";
        const data = await res.json();
        const dataList = document.querySelector(".dataList");
        data.data.forEach((element) => {
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
// // defalult show data 
window.addEventListener("DOMContentLoaded", () => {
    ShowData();
})
// delete method handling
async function DeleteData(id) {
    try {
        const res = await fetch(`http://localhost:7000/api/${id}`, {
            method: "DELETE"
        });
        if (res.ok) {
            errorMsg.textContent = "Data deleted succussfully";
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
    const title = prompt("Enter new title..");
    const description = prompt("Enter new description..")
    if (!title || !description) {
        errorMsg.textContent = "Fields cannot be empty";
        return;
    }
    try {
        const res = await fetch(`http://localhost:7000/api/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        });
        if (res.ok) {
            errorMsg.textContent = "Data Updated succussfully";
            errorMessage();
            setTimeout(() => {
                ShowData();
            },1000);
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




