// Adding CSS file to the Extension
var link = document.createElement("link");
link.href = chrome.extension.getURL("toggle.css");
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

// Injecting Buttons
function injectButtons() {
  if (document.URL === "https://github.com/" || document.URL === "https://www.github.com/") {
    nav = document.getElementsByClassName('pl-2')[0];
    let db = document.createElement('li');
        db.innerHTML = `<label class="switch">
        <input type="checkbox" id="toggle-btn">
        <span class="slider round"></span>
        </label>`;
    
    // Appending switch button if none exist already.
    if (nav.querySelectorAll('label').length < 1) {
      nav.appendChild(db);
    }
    
    document.getElementById("toggle-btn").addEventListener("change", changeSide);
    //changeSide();
  }  
}

// Flipping Dashboard Sides
function changeSide() {
  const toggleBtn = document.getElementById('toggle-btn');
  let side = document.getElementsByClassName('dashboard-sidebar')[0].style.float;
  if (toggleBtn.checked) {
    document.getElementsByClassName('dashboard-sidebar')[0].style.float = "right";
  }
  else {
    document.getElementsByClassName('dashboard-sidebar')[0].style.float = "left";
  }
  console.log(side);  
}

injectButtons();
