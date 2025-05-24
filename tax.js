function addTaxRecord() {
  const table = document.getElementById("taxTable").getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td contenteditable="true">New ID</td>
    <td contenteditable="true">New Name</td>
    <td contenteditable="true">₱0.00</td>
    <td contenteditable="true">10%</td>
    <td contenteditable="true">₱0.00</td>
    <td>
      <button class="edit" onclick="editRow(this)">EDIT</button><br>
      <button class="delete" onclick="deleteRow(this)">DELETE</button>
    </td>
  `;
}

function editRow(button) {
  const cells = button.parentElement.parentElement.cells;
  for (let i = 0; i < cells.length - 1; i++) {
    cells[i].contentEditable = true;
  }
}

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}