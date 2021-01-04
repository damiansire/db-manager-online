const tableContainer = document.getElementsByClassName("tableContainer")[0];

let req = new XMLHttpRequest();
req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let allTable = JSON.parse(req.responseText);
        allTable.forEach(table => render_table(table))
    }
};

let bdApiEndpoint = "http://127.0.0.1:5555/api/v1/getAllTables/"
req.open("GET", bdApiEndpoint, true);
req.send();


function render_table(table) {
    let tableElement = create_table(table[0]);
    tableContainer.appendChild(tableElement);
    //Problemas con la captura. Revisar
    tableElement.addEventListener("click", click_in_table)
}

function create_table(tableName) {
    let tableElement = document.createElement("div");
    tableElement.className = "tableElement";
    tableElement.setAttribute('table-name', tableName);
    let tableNameH1 = document.createElement("h1");
    tableNameH1.textContent = tableName;
    tableNameH1.setAttribute('table-name', tableName);
    tableElement.appendChild(tableNameH1);
    return tableElement;
}

function click_in_table(event) {
    let tableName = event.target.getAttribute("table-name");
    show_columns_data_table(tableName)
    document.getElementById("tableName").textContent = tableName;
}


function show_columns_data_table(tableName) {

    req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let columnsData = JSON.parse(req.responseText);
            reder_columns_data(columnsData)
        }
    };
    bdApiEndpoint = "http://127.0.0.1:5555/api/v1/getTableColumn/" + tableName
    req.open("GET", bdApiEndpoint, true);
    req.send();

}

function reder_columns_data(columnsData) {
    for (let columnData of columnsData) {
        render_column_data(columnData)
    }
}

function render_column_data(columnData) {
    let dataColumnTr = document.createElement("tr");
    for (let column of columnData) {
        console.log(column)
        addNormalTd(dataColumnTr, column);
    }
    document.getElementsByClassName("columnDataTbody")[0].appendChild(dataColumnTr);
}

function addNormalTd(dataColumnTr, dato) {
    let tdElement = document.createElement("td");
    let text = document.createTextNode(dato); // Create a text node
    tdElement.appendChild(text);
    dataColumnTr.appendChild(tdElement)
}