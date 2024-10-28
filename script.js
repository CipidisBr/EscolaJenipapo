document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const occupation = document.getElementById('occupation').value;

    addEmployee(name, phone, email, occupation);

    this.reset(); // Limpa o formulário
});

function addEmployee(name, phone, email, occupation) {
    const tableBody = document.getElementById('employeeTable').querySelector('tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${phone}</td>
        <td>${email}</td>
        <td>${occupation}</td>
        <td class="actions"><button onclick="removeEmployee(this)">Remover</button></td>
    `;

    tableBody.appendChild(row);
}

function removeEmployee(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
