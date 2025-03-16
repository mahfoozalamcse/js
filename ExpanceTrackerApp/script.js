document.addEventListener('DOMContentLoaded', () =>{
    

    const expanseForm = document.getElementById("expence-form");
    const expanseNameInput = document.getElementById("expence-name");
    const expanseAmountInput = document.getElementById("expence-amount");
    const expanseList = document.getElementById("expence-list");
    const totalAmountDisplay = document.getElementById("total-amount");

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];    
    let totalAmount  = calculateTotal();

    renderExpenses();

    expanseForm.addEventListener('submit', (e) =>{ 
        e.preventDefault();
        const name = expanseNameInput.value.trim();
        const amount = parseFloat(expanseAmountInput.value.trim());

        if(name !== "" && !isNaN(amount) && amount > 0){
            const newExpenses = {
                id : Date.now(),
                name : name,
                amount : amount,
            }
            
            expenses.push(newExpenses)
            saveExpensesToLocal();
            renderExpenses();
            updateTotal();

            // clear input
            expanseNameInput.value = "";
            expanseAmountInput.value = "";
        }
        
    } );

    function renderExpenses() {
        expanseList.innerHTML = "";
        expenses.forEach(expense =>{
          const li =   document.createElement('li')
          li.innerHTML = `
          ${expense.name} - $${expense.amount}
          <button data-id="${expense.id}">Delete</button>`
          expanseList.appendChild(li)
        })
    }

    function calculateTotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0)
    }

    function saveExpensesToLocal() {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }
    

    function updateTotal() {
        totalAmount = calculateTotal();
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }
    

    expanseList.addEventListener('click', (e) =>{
        
        if(e.target.tagName === "BUTTON"){
         const expenceId = parseInt(e.target.getAttribute('data-id'))
         expenses = expenses.filter(expense => expense.id !== expenceId)
         saveExpensesToLocal()
         renderExpenses()
         updateTotal()
        }
    })

})
