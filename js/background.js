let cache = {};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // chrome.tabs.sendMessage(sender.tab.id, request);
  console.log(sender, request);
  if (!cache[sender.origin]) {
    cache[sender.origin] = sender;
  }
  // sendResponse(JSON.stringify({"recived_result":"ok","request":request,"client_list":cache}));
  sendResponse({});
});

/*
chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
        "id": 1,
        "priority": 1,
        "action": {
            "type": "modifyHeaders",
            "requestHeaders": [
                { "header": "Referer", "operation": "set", "value": "htts://targetHost" }
            ]
        },
        "condition": {
            "urlFilter": "https://condidtionUrl",
            "resourceTypes": ["xmlhttprequest"] // see available https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#type-ResourceType
        }
    }],
})

 */
