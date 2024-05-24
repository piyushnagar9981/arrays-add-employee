
let employees = [
    { name: 'Omprakash', salary: 8000 },
    { name: 'Lalit', salary: 12000 },
    { name: 'Rajesh', salary: 12000 },
    { name: 'Hira', salary: 15000 },
    { name: 'Sunil', salary: 12000 },
    { name: 'Hariom', salary: 10000 },
    { name: 'Pawan', salary: 12000 }
  ];
  
 
  function renderEmployeeList() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';
    employees.forEach(employee => {
      const li = document.createElement('li');
      li.textContent = `${employee.name} - ${employee.salary}/-`;
      employeeList.appendChild(li);
    });
  }
  
  // Add a new employee
  function addEmployee() {
    const nameInput = document.getElementById('name-input');
    const salaryInput = document.getElementById('salary-input');
    const name = nameInput.value.trim();
    const salary = parseInt(salaryInput.value.trim());
    if (name !== '' && !isNaN(salary)) {
      employees.push({ name, salary });
      renderEmployeeList();
      nameInput.value = '';
      salaryInput.value = '';
    } else {
      alert('Please enter valid name and salary.');
    }
  }
  
  // Initial render
  renderEmployeeList();
  