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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hook__ = __webpack_require__(6);


// inject the hook
const script = document.createElement('script');
script.textContent = ';(' + __WEBPACK_IMPORTED_MODULE_0__hook__["a" /* installHook */].toString() + ')(window)';
document.documentElement.appendChild(script);
script.parentNode.removeChild(script);


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = installHook;
function installHook (window) {
    let listeners = {};

    const hook = {
        Vue: null,

        on (event, fn) {
            event = '$' + event;
            (listeners[event] || (listeners[event] = [])).push(fn);
        },

        once (event, fn) {
            event = '$' + event;
            function on () {
                this.off(event, on);
                fn.apply(this, arguments);
            }
            (listeners[event] || (listeners[event] = [])).push(on);
        },

        off (event, fn) {
            event = '$' + event;
            if (!arguments.length) {
                listeners = {};
            } else {
                const cbs = listeners[event];
                if (cbs) {
                    if (!fn) {
                        listeners[event] = null;
                    } else {
                        for (let i = 0, l = cbs.length; i < l; i++) {
                            const cb = cbs[i];
                            if (cb === fn || cb.fn === fn) {
                                cbs.splice(i, 1);
                                break;
                            }
                        }
                    }
                }
            }
        },

        emit (event) {
            event = '$' + event;
            let cbs = listeners[event];
            if (cbs) {
                const args = [].slice.call(arguments, 1);
                cbs = cbs.slice();
                for (let i = 0, l = cbs.length; i < l; i++) {
                    cbs[i].apply(this, args);
                }
            }
        }
    };

    hook.once('init', Vue => {
        hook.Vue = Vue
    });

    Object.defineProperty(window, '__MATCH_DEVTOOLS_GLOBAL_HOOK__', {
        get () {
            return hook
        }
    });
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjE4MzIzM2Y5MTdhMjEyM2FlZjU/Y2UwMyoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdEhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ2hFcUM7OztBQUdyQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxHQUFHLDBEQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsV0FBVyxDQUFDO0FBQ2pFLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDTi9CLFNBQVMsV0FBVyxFQUFFLE1BQU0sRUFBRTtJQUNqQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7O0lBRW5CLE1BQU0sSUFBSSxHQUFHO1FBQ1QsR0FBRyxFQUFFLElBQUk7O1FBRVQsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNYLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzFEOztRQUVELElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDYixLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUNwQixTQUFTLEVBQUUsSUFBSTtnQkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDcEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDN0I7WUFDRCxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxRDs7UUFFRCxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ1osS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDbEIsTUFBTTtnQkFDSCxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLElBQUksR0FBRyxFQUFFO29CQUNMLElBQUksQ0FBQyxFQUFFLEVBQUU7d0JBQ0wsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztxQkFDM0IsTUFBTTt3QkFDSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUN4QyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2xCLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQ0FDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQ2pCLE1BQU07NkJBQ1Q7eUJBQ0o7cUJBQ0o7aUJBQ0o7YUFDSjtTQUNKOztRQUVELElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNULEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixJQUFJLEdBQUcsRUFBRTtnQkFDTCxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3hDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUM1QjthQUNKO1NBQ0o7S0FDSixDQUFDOztJQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSTtRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7S0FDakIsQ0FBQyxDQUFDOztJQUVILE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGdDQUFnQyxFQUFFO1FBQzVELEdBQUcsQ0FBQyxHQUFHO1lBQ0gsT0FBTyxJQUFJO1NBQ2Q7S0FDSixDQUFDLENBQUM7Q0FDTixDQUFDIiwiZmlsZSI6Imhvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMTgzMjMzZjkxN2EyMTIzYWVmNSIsImltcG9ydCB7IGluc3RhbGxIb29rIH0gZnJvbSAnLi9ob29rJztcblxuLy8gaW5qZWN0IHRoZSBob29rXG5jb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbnNjcmlwdC50ZXh0Q29udGVudCA9ICc7KCcgKyBpbnN0YWxsSG9vay50b1N0cmluZygpICsgJykod2luZG93KSc7XG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5qZWN0SG9vay5qcyIsImV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsSG9vayAod2luZG93KSB7XG4gICAgbGV0IGxpc3RlbmVycyA9IHt9O1xuXG4gICAgY29uc3QgaG9vayA9IHtcbiAgICAgICAgVnVlOiBudWxsLFxuXG4gICAgICAgIG9uIChldmVudCwgZm4pIHtcbiAgICAgICAgICAgIGV2ZW50ID0gJyQnICsgZXZlbnQ7XG4gICAgICAgICAgICAobGlzdGVuZXJzW2V2ZW50XSB8fCAobGlzdGVuZXJzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25jZSAoZXZlbnQsIGZuKSB7XG4gICAgICAgICAgICBldmVudCA9ICckJyArIGV2ZW50O1xuICAgICAgICAgICAgZnVuY3Rpb24gb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChsaXN0ZW5lcnNbZXZlbnRdIHx8IChsaXN0ZW5lcnNbZXZlbnRdID0gW10pKS5wdXNoKG9uKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvZmYgKGV2ZW50LCBmbikge1xuICAgICAgICAgICAgZXZlbnQgPSAnJCcgKyBldmVudDtcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IHt9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYnMgPSBsaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgICAgICAgICAgIGlmIChjYnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzW2V2ZW50XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYiA9IGNic1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW1pdCAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50ID0gJyQnICsgZXZlbnQ7XG4gICAgICAgICAgICBsZXQgY2JzID0gbGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgICAgIGlmIChjYnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgIGNicyA9IGNicy5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjYnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGhvb2sub25jZSgnaW5pdCcsIFZ1ZSA9PiB7XG4gICAgICAgIGhvb2suVnVlID0gVnVlXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnX19NQVRDSF9ERVZUT09MU19HTE9CQUxfSE9PS19fJywge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvb2tcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ob29rLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==