chrome.tabs.insertCSS(null, {file: "toggle.css"});

chrome.tabs.onUpdated.addListener(function() {
  chrome.tabs.executeScript(null, { file: "switch.js" });
});

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//      chrome.declarativeContent.onPageChanged.addRules([ {
//        conditions: 
//        [
//        new chrome.declarativeContent.PageStateMatcher({
//          pageUrl: {hostContains: 'github.com'},
//        }),
//        ],
//           actions: [new chrome.declarativeContent.ShowPageAction()]
//      }
//      ]);
//   });
//  });