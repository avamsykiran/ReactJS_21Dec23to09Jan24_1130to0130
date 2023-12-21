
const addFriend = event => {
    let fnmTextBox=document.querySelector("#fnm");

    if(fnmTextBox.value.trim().length>0){
        let friendsOrderedList = document.querySelector("#friendsList");
        let fnmListItem = document.createElement("li");
        fnmListItem.innerText = fnmTextBox.value;
        fnmTextBox.value="";
        friendsOrderedList.append(fnmListItem);
    }
}