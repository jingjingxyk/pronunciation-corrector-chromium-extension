(async () => {
  let { init } = await import(
    chrome.runtime.getURL("js/content-script/corrector/init.js")
  );
  init();
})();
