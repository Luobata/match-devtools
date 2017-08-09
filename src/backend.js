/**
 * @description 创建面板时触发 绑定hook的刷新事件
 */

const hook = window.__MATCH_DEVTOOLS_GLOBAL_HOOK__;

export function initBackend () {
    hook.on('flush', (stack) => {
        flush(stack);
    });
};

function flush () {
    console.log(stack);
}
