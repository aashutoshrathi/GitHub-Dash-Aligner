var link = document.createElement("link");
link.href = chrome.extension.getURL("toggle.css");
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

function injectButtons() {
  nav = document.getElementsByClassName('pl-2')[0];
  let db = document.createElement('li');
      db.innerHTML = `<label class="switch">
      <input type="checkbox" id="toggle-btn">
      <span class="slider round"></span>
      </label>`;
  if(nav.querySelectorAll('label').length < 1 && (document.URL === "https://github.com/" || document.URL === "https://www.github.com/")) {
    nav.appendChild(db);
  }
  document.getElementById("toggle-btn").addEventListener("click", changeSide);  
}

function changeSide() {
  let side = document.getElementsByClassName('dashboard-sidebar')[0].style.float;
  if(side === "left") {
    document.getElementsByClassName('dashboard-sidebar')[0].style.float = 'right';
  }
  else {
    document.getElementsByClassName('dashboard-sidebar')[0].style.float = 'left';
  }
}

injectButtons();