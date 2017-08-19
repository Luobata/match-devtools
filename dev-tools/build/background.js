/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

// the background script runs all the time and serves as a central message
// hub for each vue devtools (panel + proxy + backend) instance.

const ports = {}

chrome.runtime.onConnect.addListener(port => {
  let tab
  let name
  if (isNumeric(port.name)) {
    tab = port.name
    name = 'devtools'
    installProxy(+port.name)
  } else {
    tab = port.sender.tab.id
    name = 'backend'
  }

  if (!ports[tab]) {
    ports[tab] = {
      devtools: null,
      backend: null
    }
  }
  ports[tab][name] = port

  if (ports[tab].devtools && ports[tab].backend) {
    doublePipe(tab, ports[tab].devtools, ports[tab].backend)
  }
})

function isNumeric (str) {
  return +str + '' === str
}

function installProxy (tabId) {
  chrome.tabs.executeScript(tabId, {
    file: '/build/proxy.js'
  }, function (res) {
        debugger;
    if (!res) {
        ports[tabId].devtools.postMessage('proxy-fail')
    } else {
      console.log('injected proxy to tab ' + tabId)
    }
  })
}

function doublePipe (id, one, two) {
  one.onMessage.addListener(lOne)
  function lOne (message) {
    if (message.event === 'log') {
      return console.log('tab ' + id, message.payload)
    }
    console.log('devtools -> backend', message)
    two.postMessage(message)
  }
  two.onMessage.addListener(lTwo)
  function lTwo (message) {
    if (message.event === 'log') {
      return console.log('tab ' + id, message.payload)
    }
    console.log('backend -> devtools', message)
    one.postMessage(message)
  }
  function shutdown () {
    console.log('tab ' + id + ' disconnected.')
    one.onMessage.removeListener(lOne)
    two.onMessage.removeListener(lTwo)
    one.disconnect()
    two.disconnect()
    ports[id] = null
  }
  one.onDisconnect.addListener(shutdown)
  two.onDisconnect.addListener(shutdown)
  console.log('tab ' + id + ' connected.')
}

chrome.runtime.onMessage.addListener((req, sender) => {
  if (sender.tab && req.vueDetected) {
    chrome.browserAction.setIcon({
      tabId: sender.tab.id,
      path: {
        16: 'icons/16.png',
        48: 'icons/48.png',
        128: 'icons/128.png'
      }
    })
    chrome.browserAction.setPopup({
      tabId: sender.tab.id,
      popup: req.devtoolsEnabled ? 'popups/enabled.html' : 'popups/disabled.html'
    })
  }
})



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGE3MTNmZWQ2N2MwMmE2Yjk2ZmY/NDFhZSoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ2hFQTs7O0FBR0EsTUFBTSxLQUFLLEdBQUcsRUFBRTs7QUFFaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSTtFQUMzQyxJQUFJLEdBQUc7RUFDUCxJQUFJLElBQUk7RUFDUixJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDeEIsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJO0lBQ2YsSUFBSSxHQUFHLFVBQVU7SUFDakIsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztHQUN6QixNQUFNO0lBQ0wsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDeEIsSUFBSSxHQUFHLFNBQVM7R0FDakI7O0VBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNmLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FB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LEdBQUcsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFO0lBQ2pDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO01BQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDcEIsSUFBSSxFQUFFO1FBQ0osRUFBRSxFQUFFLGNBQWM7UUFDbEIsRUFBRSxFQUFFLGNBQWM7UUFDbEIsR0FBRyxFQUFFLGVBQWU7T0FDckI7S0FDRixDQUFDO0lBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDNUIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtNQUNwQixLQUFLLEVBQUUsR0FBRyxDQUFDLGVBQWUsR0FBRyxxQkFBcUIsR0FBRyxzQkFBc0I7S0FDNUUsQ0FBQztHQUNIO0NBQ0YsQ0FBQyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGE3MTNmZWQ2N2MwMmE2Yjk2ZmYiLCIvLyB0aGUgYmFja2dyb3VuZCBzY3JpcHQgcnVucyBhbGwgdGhlIHRpbWUgYW5kIHNlcnZlcyBhcyBhIGNlbnRyYWwgbWVzc2FnZVxuLy8gaHViIGZvciBlYWNoIHZ1ZSBkZXZ0b29scyAocGFuZWwgKyBwcm94eSArIGJhY2tlbmQpIGluc3RhbmNlLlxuXG5jb25zdCBwb3J0cyA9IHt9XG5cbmNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihwb3J0ID0+IHtcbiAgbGV0IHRhYlxuICBsZXQgbmFtZVxuICBpZiAoaXNOdW1lcmljKHBvcnQubmFtZSkpIHtcbiAgICB0YWIgPSBwb3J0Lm5hbWVcbiAgICBuYW1lID0gJ2RldnRvb2xzJ1xuICAgIGluc3RhbGxQcm94eSgrcG9ydC5uYW1lKVxuICB9IGVsc2Uge1xuICAgIHRhYiA9IHBvcnQuc2VuZGVyLnRhYi5pZFxuICAgIG5hbWUgPSAnYmFja2VuZCdcbiAgfVxuXG4gIGlmICghcG9ydHNbdGFiXSkge1xuICAgIHBvcnRzW3RhYl0gPSB7XG4gICAgICBkZXZ0b29sczogbnVsbCxcbiAgICAgIGJhY2tlbmQ6IG51bGxcbiAgICB9XG4gIH1cbiAgcG9ydHNbdGFiXVtuYW1lXSA9IHBvcnRcblxuICBpZiAocG9ydHNbdGFiXS5kZXZ0b29scyAmJiBwb3J0c1t0YWJdLmJhY2tlbmQpIHtcbiAgICBkb3VibGVQaXBlKHRhYiwgcG9ydHNbdGFiXS5kZXZ0b29scywgcG9ydHNbdGFiXS5iYWNrZW5kKVxuICB9XG59KVxuXG5mdW5jdGlvbiBpc051bWVyaWMgKHN0cikge1xuICByZXR1cm4gK3N0ciArICcnID09PSBzdHJcbn1cblxuZnVuY3Rpb24gaW5zdGFsbFByb3h5ICh0YWJJZCkge1xuICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYklkLCB7XG4gICAgZmlsZTogJy9idWlsZC9wcm94eS5qcydcbiAgfSwgZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICBpZiAoIXJlcykge1xuICAgICAgICBwb3J0c1t0YWJJZF0uZGV2dG9vbHMucG9zdE1lc3NhZ2UoJ3Byb3h5LWZhaWwnKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnaW5qZWN0ZWQgcHJveHkgdG8gdGFiICcgKyB0YWJJZClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRvdWJsZVBpcGUgKGlkLCBvbmUsIHR3bykge1xuICBvbmUub25NZXNzYWdlLmFkZExpc3RlbmVyKGxPbmUpXG4gIGZ1bmN0aW9uIGxPbmUgKG1lc3NhZ2UpIHtcbiAgICBpZiAobWVzc2FnZS5ldmVudCA9PT0gJ2xvZycpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygndGFiICcgKyBpZCwgbWVzc2FnZS5wYXlsb2FkKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZGV2dG9vbHMgLT4gYmFja2VuZCcsIG1lc3NhZ2UpXG4gICAgdHdvLnBvc3RNZXNzYWdlKG1lc3NhZ2UpXG4gIH1cbiAgdHdvLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihsVHdvKVxuICBmdW5jdGlvbiBsVHdvIChtZXNzYWdlKSB7XG4gICAgaWYgKG1lc3NhZ2UuZXZlbnQgPT09ICdsb2cnKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJ3RhYiAnICsgaWQsIG1lc3NhZ2UucGF5bG9hZClcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2JhY2tlbmQgLT4gZGV2dG9vbHMnLCBtZXNzYWdlKVxuICAgIG9uZS5wb3N0TWVzc2FnZShtZXNzYWdlKVxuICB9XG4gIGZ1bmN0aW9uIHNodXRkb3duICgpIHtcbiAgICBjb25zb2xlLmxvZygndGFiICcgKyBpZCArICcgZGlzY29ubmVjdGVkLicpXG4gICAgb25lLm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihsT25lKVxuICAgIHR3by5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIobFR3bylcbiAgICBvbmUuZGlzY29ubmVjdCgpXG4gICAgdHdvLmRpc2Nvbm5lY3QoKVxuICAgIHBvcnRzW2lkXSA9IG51bGxcbiAgfVxuICBvbmUub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKHNodXRkb3duKVxuICB0d28ub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKHNodXRkb3duKVxuICBjb25zb2xlLmxvZygndGFiICcgKyBpZCArICcgY29ubmVjdGVkLicpXG59XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxLCBzZW5kZXIpID0+IHtcbiAgaWYgKHNlbmRlci50YWIgJiYgcmVxLnZ1ZURldGVjdGVkKSB7XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0SWNvbih7XG4gICAgICB0YWJJZDogc2VuZGVyLnRhYi5pZCxcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgMTY6ICdpY29ucy8xNi5wbmcnLFxuICAgICAgICA0ODogJ2ljb25zLzQ4LnBuZycsXG4gICAgICAgIDEyODogJ2ljb25zLzEyOC5wbmcnXG4gICAgICB9XG4gICAgfSlcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRQb3B1cCh7XG4gICAgICB0YWJJZDogc2VuZGVyLnRhYi5pZCxcbiAgICAgIHBvcHVwOiByZXEuZGV2dG9vbHNFbmFibGVkID8gJ3BvcHVwcy9lbmFibGVkLmh0bWwnIDogJ3BvcHVwcy9kaXNhYmxlZC5odG1sJ1xuICAgIH0pXG4gIH1cbn0pXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==