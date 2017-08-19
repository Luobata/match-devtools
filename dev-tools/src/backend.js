// this is injected to the app page when the panel is activated.

import { initBackend } from 'SRC/backend';
import Bridge from 'SRC/bridge';

window.addEventListener('message', handshake);

function handshake (e) {
    if (e.data.source === 'match-devtools-proxy' && e.data.payload === 'init') {
        window.removeEventListener('message', handshake);

        let listeners = [];
        const bridge = new Bridge({
            listen (fn) {
                var listener = evt => {
                    if (evt.data.source === 'match-devtools-proxy' && evt.data.payload) {
                        fn(evt.data.payload);
                    }
                }
                window.addEventListener('message', listener);
                listeners.push(listener);
            },
            send (data) {
                window.postMessage({
                    source: 'match-devtools-backend',
                    payload: data
                }, '*');
            }
        });

        bridge.on('shutdown', () => {
            listeners.forEach(l => {
                window.removeEventListener('message', l);
            })
            listeners = [];
        });

        initBackend(bridge);
    }
}
