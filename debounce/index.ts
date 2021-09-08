declare global {
  interface Window {
    debounce?: (fn: Function, wait?: number, operate?: boolean) => {};
  }
}
/**
 *
 * @param fn 需要执行的函数
 * @param wait 防抖的计算时间,default = 200
 * @param operate 是否取消防抖,default = false
 * @returns 返回传入函数执行后的返回数据
 */
export default function debounce(
  fn: Function,
  wait: number = 200,
  operate = false
) {
  var timer: NodeJS.Timeout, result: any;
  var flag = false;

  return function () {
    var args = Array.prototype.slice.call(arguments);
    if (timer) {
      clearTimeout(timer);
    }
    if (!flag || operate) {
      flag = true;
      // 先执行
      result = fn.call(this, args);
    } else {
      // 再判断执行后n秒内有没有再触发，再触发重新计算时间
      timer = setTimeout(() => {
        flag = false;
      }, wait);
    }
    return result;
  };
}
// 个人test 时候使用 默认挂载到window上
// window.debounce = debounce;
