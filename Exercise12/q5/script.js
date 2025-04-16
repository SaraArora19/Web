function changeZIndex() {
    let selectedElement = document.getElementById(document.getElementById("elementSelect").value);
    let newZIndex = document.getElementById("zIndexValue").value;
  
    selectedElement.style.zIndex = newZIndex;
    updateStatus();
  }
  
  function updateStatus() {
    let box1Z = document.getElementById("box1").style.zIndex;
    let box2Z = document.getElementById("box2").style.zIndex;
    let box3Z = document.getElementById("box3").style.zIndex;
  
    document.getElementById("status").innerHTML = 
      `Box 1 Z-Index: ${box1Z} | Box 2 Z-Index: ${box2Z} | Box 3 Z-Index: ${box3Z}`;
  }
  
  window.onload = updateStatus;
  