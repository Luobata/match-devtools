import { initDevTools } from 'SRC/index';
import Bridge from 'SRC/bridge';

/*
 * Inject backend.js connec to background, and send back the bridge.
 *
 * @param {Function} cb
 */

initDevTools({
    connect (cb) {
        // inject backend.js
        injectScript(chrome.runtime.getURL('build/backend.js'), () => {
            // connect to background
            const port = chrome.runtime.connect({
                name: '' + chrome.devtools.inspectedWindow.tabId
            });
            let disconnected = false;
            port.onDisconnect.addListener(() => {
                console.log('disconnected');
                disconnected = true
            });

            const bridge = new Bridge({
                listen (fn) {
                    port.onMessage.addListener(fn);
                },
                send (data) {
                    if (!disconnected) {
                        port.postMessage(data);
                    }
                }
            });

            // send back bridge
            cb(bridge);
        });
    }
});

function injectScript (scriptName, cb) {
  const src = `
        var script = document.constructor.prototype.createElement.call(document, 'script');
        script.src = "${scriptName}";
        document.documentElement.appendChild(script);
        script.parentNode.removeChild(script);
  `;

  chrome.devtools.inspectedWindow.eval(src, function (res, err) {
      if (err) {
          console.log(err);
      }
      cb();
  });
};
