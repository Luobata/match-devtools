export function installHook (window) {
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
