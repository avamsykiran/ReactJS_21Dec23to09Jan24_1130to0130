
const addFriend = event => {
    let fnmTB = document.querySelector("#fnm");
    let mobTB = document.querySelector("#mob");

    if(!isEmpty(fnmTB) && !isEmpty(mobTB)){

        let friendsListTBody = document.querySelector("#friendsList>tbody");
        let tableRow = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");

        cell1.innerText=fnmTB.value;
        cell2.innerText=mobTB.value;

        tableRow.appendChild(cell1);
        tableRow.appendChild(cell2);

        friendsListTBody.appendChild(tableRow);

        fnmTB.value="";
        mobTB.value="";
    }

}

const isEmpty = tb => tb.value.trim().length===0;