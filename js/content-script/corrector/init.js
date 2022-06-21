let styleConfig = () => {
  let css = document.createElement("link");
  css.setAttribute("rel", "stylesheet");
  css.setAttribute("type", "text/css");
  css.setAttribute("href", chrome.runtime.getURL("css/app.css"));
  document.head.appendChild(css);
};

let getAndSetIframe = () => {
  let box = document.querySelector("#custom-iframe-box");
  let iframe = null;
  if (!box) {
    let aside = document.createElement("aside");
    aside.setAttribute("id", "custom-iframe-box");

    iframe = document.createElement("iframe");
    iframe.setAttribute("id", "custom-iframe-box-iframe");
    aside.appendChild(iframe);
    document.body.appendChild(aside);
  } else {
    iframe = box.querySelector("#custom-iframe-box-iframe");
    iframe.setAttribute("src", "about:blank");
    //iframe.contentDocument.close()
    iframe.parentNode.removeChild(iframe);
    iframe = document.createElement("iframe");
    iframe.setAttribute("id", "custom-iframe-box-iframe");
    box.appendChild(iframe);
  }
  return iframe;
};

let init = () => {
  console.log(new URL(location.href));
  let iframe = getAndSetIframe();
  styleConfig();
  console.log(iframe);
  iframe.style.width = document.querySelector(".normal-container").clientWidth;

  let audio_player = document.getElementById("player");
  audio_player.addEventListener("loadedmetadata", (event) => {
    //console.log(event)
    let currentWord = document.querySelector("#currentWord").innerText;
    console.log(currentWord);
    /*
     // 用于请求API 接口
    chrome.runtime.sendMessage(
      JSON.stringify({ word: currentWord, from: "pronunciation-corrector" }),
      (response) => {
        console.log(response);
      }
    );

     */
    currentWord = currentWord.toLowerCase();
    iframe.src = `https://www.youdao.com/result?word=${currentWord}&lang=en`;
  });
};
export { init };
