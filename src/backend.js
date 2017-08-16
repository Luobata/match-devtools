/**
 * @description 创建面板时触发 绑定hook的刷新事件
 */

const hook = window.__MATCH_DEVTOOLS_GLOBAL_HOOK__;

export function initBackend (bridge) {
    hook.on('flush', (stack) => {
        flush(stack);
    });
    bridge.on('flush', function (data) {
        console.log(data);
        console.log(window.MATCH_STACK);
        console.log('flush!!');
    });
};

function flush () {
    console.log(stack);
}
