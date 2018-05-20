chrome.tabs.insertCSS(null, {file: "toggle.css"});

chrome.tabs.onUpdated.addListener(function() {
  chrome.tabs.executeScript(null, { file: "switch.js" });
});