// Counter App (index.html)
if (document.getElementById("counter")) {
    let counter = document.getElementById("counter");
    
    let count = 0;

    document.getElementById("increment").addEventListener("click", function () {
        count++; 
        
        counter.textContent = count;
    });

    document.getElementById("decrement").addEventListener("click", function () {
        count--;
        
        counter.textContent = count;
    });

    document.getElementById("reset").addEventListener("click", function () {
        count = 0;
        
        counter.textContent = count;
    });
}

// Dynamic List (page2.html)

if (document.getElementById("itemList")) {
    
    
    let input = document.getElementById("itemInput");
    let addItemBtn = document.getElementById("addItem");
    let itemList = document.getElementById("itemList");
    

    addItemBtn.addEventListener("click", function () {
        let itemText = input.value.trim();
        if (itemText !== "") {
            let li = document.createElement("li");
            li.textContent = itemText;

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "❌";
            deleteBtn.style.marginLeft = "10px";

            deleteBtn.addEventListener("click", function () {
                li.remove();
            });

            li.appendChild(deleteBtn);
            itemList.appendChild(li);
            input.value = "";
        }
    });
}
