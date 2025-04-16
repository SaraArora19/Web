function run() {
    document.getElementById("t").textContent = "Updated Title";
  
    document.getElementsByName("u")[0].value = "John Doe";
  
    let r = document.getElementsByName("g");
    for (let x of r) {
      if (x.checked) console.log("Selected:", x.value);
    }
  
    let p = document.getElementsByTagName("p");
    console.log("Total <p>:", p.length);
  
    let l = document.getElementsByTagName("li");
    for (let x of l) console.log("List:", x.textContent);
  
    let f = document.getElementsByClassName("f");
    for (let x of f) x.style.backgroundColor = "lightblue";
  
    document.querySelector(".i").textContent = "This is the first info paragraph";
    document.querySelector("input[name='g']").checked = true;
  
    let i = document.querySelectorAll(".i");
    i.forEach(x => console.log("Info:", x.textContent));
  
    let h = document.querySelectorAll(".h");
    h.forEach(x => {
      x.checked = true;
      console.log("Checked:", x.value);
    });
  }
  