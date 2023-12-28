
let items = [
    { id: 1, name: 'A4 Sheets', unit: 'Bundle', rate: 560 },
    { id: 2, name: 'Ink Jet Catridge Color', unit: 'Piece', rate: 1560 },
    { id: 3, name: 'Laser Catridge BW', unit: 'Piece', rate: 860 },
    { id: 4, name: 'Laser Catridge Color', unit: 'Piece', rate: 1560 },
    { id: 5, name: 'Board Pins', unit: 'Pack Of 50', rate: 160 },
    { id: 6, name: 'Staples', unit: 'Box of 1000', rate: 60 },
    { id: 7, name: 'Pen Holder', unit: 'Piece', rate: 360 },
    { id: 8, name: 'Pen', unit: 'Pack Of 10', rate: 2060 },
    { id: 9, name: 'Writing Pad', unit: 'Piece', rate: 340 }
];

const displayItems = () => {
    console.log("Page load invoked");

    let dataTable = document.querySelector("#content>table");

    let dataTableBody = document.querySelector("#content>table>tbody");
    if (dataTableBody) {
        dataTable.removeChild(dataTableBody);
    }

    dataTableBody = document.createElement("tbody");

    items.forEach(item => {
        let tr = document.createElement("tr");
        let tds = [];
        for (let i = 0; i < 5; i++) {
            tds.push(document.createElement("td"));
            tr.appendChild(tds[i]);
        }

        tds[0].textContent = item.id;
        tds[1].textContent = item.name;
        tds[2].textContent = item.unit;
        tds[3].textContent = item.rate;

        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.addEventListener('click',event => {
            if (confirm(`Are you sure to delete item#${item.id}?`)) {
                let index = items.findIndex(i => i.id == item.id);
                if (index > -1) {
                    items.splice(index, 1);
                    displayItems();
                }
            }
        });

        tds[4].appendChild(btn);

        dataTableBody.appendChild(tr);
    });

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.textContent = `Total ${items.length} Item(s) in stock`;
    td.colSpan = 4;

    tr.appendChild(td);
    dataTableBody.appendChild(tr);

    dataTable.appendChild(dataTableBody);
}

const addItem = event => {

    let txt1 = document.querySelector("#itemId");
    let txt2 = document.querySelector("#itemName");
    let txt3 = document.querySelector("#itemUnit");
    let txt4 = document.querySelector("#itemRate");

    let id = parseInt(txt1.value);
    let name = txt2.value;
    let unit = txt3.value;
    let rate = parseFloat(txt4.value);

    items.push({ id, name, unit, rate });

    displayItems();
    txt1.value = "";
    txt2.value = "";
    txt3.value = "";
    txt4.value = "";
};
