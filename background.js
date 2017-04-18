// 768 is the height of the whole display
// the chrome window is typically fullscreen
// but subtract the black application bar at the bottom which is ~48px
chrome.browserAction.onClicked.addListener(function() {
    chrome.windows.getCurrent(function(win) {
        chrome.windows.update(win.id, { width: 1366, height: 768 - 48 });
    });
});
