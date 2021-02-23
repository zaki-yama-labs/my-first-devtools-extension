chrome.devtools.panels.create(
  "My Panel", // title
  "icon.png", // icon
  "panel.html", // content
  cb => {
    // newPanel.onShown.addListener(initialisePanel);
    // newPanel.onHidden.addListener(unInitialisePanel);
  }
);
