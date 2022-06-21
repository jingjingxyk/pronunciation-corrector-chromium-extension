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
