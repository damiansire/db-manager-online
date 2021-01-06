const createTableForm = document.getElementById("createTableForm");

createTableForm.addEventListener("submit", createTableEvent);

function createTableEvent(event) {
    event.preventDefault();
    let formData = new FormData(event.target)
    let tableName = formData.get("tableNameInput");
    guiHandler.showTable(tableName)
    sqlHandler.setTableName(tableName)
    guiHandler.setActualQuery(sqlHandler.getCreateTableQuery())
}

class guiManager {

    constructor() {
        this.tableInfoDiv = document.getElementsByClassName("tableInfo")[0];
        this.createTableForm = document.getElementById("createTableForm");
        this.createAttributeForm = document.getElementById("createAttributeForm");
        this.actualQuerySpan = document.getElementById("actualQuery")
        this.attributeTable = document.getElementsByClassName("columnDataTable")[0]
    }

    showTable(name) {
        this.tableInfoDiv.querySelector("#tableName").textContent = name;
        this.tableInfoDiv.style.display = "block"
    }

    setActualQuery(query) {
        this.actualQuerySpan.textContent = query;
    }

    addRowToTable(attributeObj) {
        // Inserta una fila en la tabla, en el índice 0
        let newRow = this.attributeTable.insertRow(-1);

        // Nombre
        let newCell = newRow.insertCell(0);
        let cellContent = document.createTextNode(attributeObj["columnName"]);
        newCell.appendChild(cellContent);

        // Numero 
        newCell = newRow.insertCell(1);
        cellContent = document.createTextNode(" ");
        newCell.appendChild(cellContent);

        // Tipo de columna
        newCell = newRow.insertCell(2);
        cellContent = document.createTextNode(attributeObj["columnType"]);
        newCell.appendChild(cellContent);

        // Permite null
        newCell = newRow.insertCell(3);
        cellContent = document.createTextNode(attributeObj["allowsNull"]);
        newCell.appendChild(cellContent);

    }
    resetAttributeForm() {
        this.createAttributeForm.reset();
    }
}

class sqlGenerator {
    constructor() {
        this.tableName = "";
        this.attribute = [];
    }

    setTableName(name) {
        this.tableName = name;
    }

    addAttribute(attribute) {
        this.attribute.push(attribute)
    }

    getCreateTableQuery() {
        let query = `CREATE TABLE ${this.tableName} ( `;
        let attributeStrArr = this.attribute.map(attribute => `${attribute['columnName']} ${attribute['columnType'] } ${ attribute["allowsNull"] ? "" : "NOT NULL"} `)
        attributeStrArr.forEach((val, index) => {
            query += attributeStrArr[index];
            query += index < attributeStrArr.length - 1 ? " , " : " )";
        })
        return query;
    }
}

function columnDataToAttribute(columnData) {
    return { "columnName": columnData.get("attributeName"), "columnType": columnData.get("columnType"), "allowsNull": columnData.get("allowsNull") == "on" }
}


const guiHandler = new guiManager();

const sqlHandler = new sqlGenerator();

const createAttributeForm = document.getElementById("createAttributeForm");

createAttributeForm.addEventListener("submit", addColumn);


function addColumn(event) {
    event.preventDefault();
    let columnData = new FormData(event.target);
    let columnObj = columnDataToAttribute(columnData);
    sqlHandler.addAttribute(columnObj);
    guiHandler.addRowToTable(columnObj);
    guiHandler.setActualQuery(sqlHandler.getCreateTableQuery())
    guiHandler.resetAttributeForm();
}