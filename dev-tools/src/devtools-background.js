let created = false;
let checkCount = 0;

chrome.devtools.network.onNavigated.addListener(createPanelHasMatch);
const checkVueInterval = setInterval(createPanelHasMatch, 1000);

createPanelHasMatch();

function createPanelHasMatch () {
    if (created || checkCount++ > 10) {
        return;
    }

    chrome.devtools.inspectedWindow.eval(
        '!!(true)',
        function (hasVue) {
            if (!hasVue || created) {
                return
            }
            clearInterval(checkVueInterval);
            created = true;
            chrome.devtools.panels.create(
                'Match',
                'images/back.jpg',
                'devtools.html',
                function (panel) {
                // panel loaded
                }
            )
        }
    );
};
