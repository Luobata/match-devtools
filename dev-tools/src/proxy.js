// This is a content-script that is injected only when the devtools are
// activated. Because it is not injected using eval, it has full privilege
// to the chrome runtime API. It serves as a proxy between the injected
// backend and the Vue devtools panel.

const port = chrome.runtime.connect({
  name: 'content-script'
})

port.onMessage.addListener(sendMessageToBackend)
window.addEventListener('message', sendMessageToDevtools)
port.onDisconnect.addListener(handleDisconnect)

sendMessageToBackend('init')

function sendMessageToBackend (payload) {
  window.postMessage({
    source: 'match-devtools-proxy',
    payload: payload
  }, '*')
}

function sendMessageToDevtools (e) {
    console.log(e);
  if (e.data && e.data.source === 'match-devtools-backend') {
    port.postMessage(e.data.payload)
  }
}

function handleDisconnect () {
  window.removeEventListener('message', sendMessageToDevtools)
  sendMessageToBackend('shutdown')
}

