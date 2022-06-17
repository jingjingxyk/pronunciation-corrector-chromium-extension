//subframe 嵌入样式
// 注入CSS样式
console.log("subframe 嵌入样式 for youdao");
let css = document.createElement("link");
css.setAttribute("rel", "stylesheet");
css.setAttribute("type", "text/css");
css.setAttribute("href", chrome.runtime.getURL("css/youdao.css"));
//document.head.appendChild(css);
/*
  //实现 有道 自动读音
  document.querySelector('#search_input')
   chrome.runtime.sendMessage(JSON.stringify({
     "id":"youdao",
      "url":location.href
   }),(response)=>{
     console.log(response)
   })
*/
let trans_container = document.querySelector(".trans-container");
if (trans_container) {
  //英
  // trans_container.querySelector(".phone_con .per-phone:nth-child(1) a").click()
  //美
  //trans_container.querySelector(".phone_con .per-phone:nth-child(2) a").click()
}

/*
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // chrome.tabs.sendMessage(sender.tab.id, request);
    console.log(sender,request);
    sendResponse({});
  });

*/
