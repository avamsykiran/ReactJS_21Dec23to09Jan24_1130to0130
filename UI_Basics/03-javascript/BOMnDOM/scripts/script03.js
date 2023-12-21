
const addFriend = event => {

    let fnmTB = document.querySelector("#fnm");
    let mobTB = document.querySelector("#mob");
    let dobTB = document.querySelector("#dob");

    let friendsListTBody = document.querySelector("#friendsList>tbody");
    let tableRow = document.createElement("tr");
    let cells = [];
    for (let i = 0; i < 5; i++) {
        cells.push(document.createElement("td"));
    }

    cells[0].innerText = fnmTB.value;
    cells[1].innerText = mobTB.value;
    cells[2].innerText = dobTB.value;

    let today = new Date();
    let dob = new Date(dobTB.value);
    cells[3].innerText = today.getFullYear() - dob.getFullYear();

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "DELETE";
    deleteBtn.type = "button";
    
    deleteBtn.addEventListener("click", event => {
        if(confirm("Are you wure of deleting?")){
            tableRow.remove()
        }
    });
    
    cells[4].appendChild(deleteBtn);
    cells.forEach(cell => tableRow.appendChild(cell));

    friendsListTBody.appendChild(tableRow);

    fnmTB.value = "";
    mobTB.value = "";
    dobTB.value = "";
}
