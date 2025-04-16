document.addEventListener("DOMContentLoaded", function() {

    function createTable() {
      let table = document.createElement("table");
      for (let i = 0; i < 3; i++) {
        let row = table.insertRow();
        for (let j = 0; j < 3; j++) {
          let cell = row.insertCell();
          cell.textContent = `(${i+1},${j+1})`;
        }
      }
      document.getElementById("table-container").appendChild(table);
    }
  
    function createButton() {
      let button = document.createElement("button");
      button.textContent = "Hover me";
      button.style.backgroundColor = "red";
  
      button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "green";
      });
  
      button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "red";
      });
  
      document.getElementById("button-container").appendChild(button);
    }
    function createTextbox() {
        let textbox = document.createElement("input");
        textbox.type = "text";
        textbox.style.backgroundColor = "green";
    
        textbox.addEventListener("focus", function() {
          textbox.style.backgroundColor = "yellow";
        });
    
        textbox.addEventListener("change", function() {
          alert("Hello! You've changed the text.");
        });
    
        document.getElementById("textbox-container").appendChild(textbox);
      }
      function setupListAdder() {
        let inputField = document.getElementById("list-input");
        let button = document.getElementById("add-btn");
        let list = document.getElementById("item-list");
    
        button.addEventListener("dblclick", function() {
          if (inputField.value.trim() !== "") {
            let listItem = document.createElement("li");
            listItem.textContent = inputField.value;
            list.appendChild(listItem);
            inputField.value = "";
          }
        });
      }
    
      function setupKeyPressCounter() {
        let keyInput = document.getElementById("key-input");
        let keyCountField = document.getElementById("key-count");
        let count = 0;
    
        keyInput.addEventListener("keypress", function() {
          count++;
          keyCountField.value = count;
        });
      }
    
      createTable();
      createButton();
      createTextbox();
      setupListAdder();
      setupKeyPressCounter();
    
    });
     