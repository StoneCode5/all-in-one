new Promise((resolve, reject) => {
  console.log("start");
  setTimeout(() => {
    console.log("2s end");
    resolve(2);
  }, 2000);
  console.log("2");
}).then((res) => {
  console.log("then", res);
});

class Promise_ {
  constructor(func) {
    try {
      this.thenCallbacks = [];
      let resolve = (...args) => {
        let _args = args;
        this.thenCallbacks.forEach((thenFunc) => {
          _args = thenFunc.apply(this, _args);
        });
      };
      let reject = (...args) => {
        console.log("reject");
      };
      func(resolve, reject);
    } catch (error) {
      this.finally();
    }
  }

  then(callback) {
    this.thenCallbacks.push(callback);
    return this;
  }

  catch(callback) {
    this.catchCallbacks.push(callback);
  }

  finally(callback) {
    this.finally = callback;
  }

  static all() {}
}

new Promise_((resolve, reject) => {
    console.log("start");
    setTimeout(() => {
      console.log("2s end");
      resolve(2);
    }, 2000);
    console.log("2");
  }).then((res) => {
    console.log("then", res);
  });
console.log(3)

/**
 * promise实现的难点一：
 * then的回调需要是微任务、不少promise手写是用setTimeout实现的，会出现顺序问题，需要用queueMircotask
 * 既然每一个then都返回一个新的promise
 */

 class myPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor(func) {
      this.PromiseState = myPromise.PENDING;
      this.PromiseResult = null;
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];
      try {
          func(this.resolve.bind(this), this.reject.bind(this));
      } catch (error) {
          this.reject(error)
      }
  }

  resolve(result) {
      if (this.PromiseState === myPromise.PENDING) {
          this.PromiseState = myPromise.FULFILLED;
          this.PromiseResult = result;
          console.log('onFulfilledCallbacks', this.onFulfilledCallbacks)
          this.onFulfilledCallbacks.forEach(callback => {
              callback(result)
          })
      }
  }

  reject(reason) {
      if (this.PromiseState === myPromise.PENDING) {
          this.PromiseState = myPromise.REJECTED;
          this.PromiseResult = reason;
          this.onRejectedCallbacks.forEach(callback => {
              callback(reason)
          })
      }
  }

  then(onFulfilled, onRejected) {
      let promise2 = new myPromise((resolve, reject) => {
          if (this.PromiseState === myPromise.FULFILLED) {
              setTimeout(() => {
                  try {
                      if (typeof onFulfilled !== 'function') {
                          resolve(this.PromiseResult);
                      } else {
                          let x = onFulfilled(this.PromiseResult);
                          resolvePromise(promise2, x, resolve, reject);
                      }
                  } catch (e) {
                      reject(e);
                  }
              });
          } else if (this.PromiseState === myPromise.REJECTED) {
              setTimeout(() => {
                  try {
                      if (typeof onRejected !== 'function') {
                          reject(this.PromiseResult);
                      } else {
                          let x = onRejected(this.PromiseResult);
                          resolvePromise(promise2, x, resolve, reject);
                      }
                  } catch (e) {
                      reject(e)
                  }
              });
          } else if (this.PromiseState === myPromise.PENDING) {
              this.onFulfilledCallbacks.push(() => {
                  setTimeout(() => {
                      try {
                          if (typeof onFulfilled !== 'function') {
                              resolve(this.PromiseResult);
                          } else {
                              let x = onFulfilled(this.PromiseResult);
                              resolvePromise(promise2, x, resolve, reject);
                          }
                      } catch (e) {
                          reject(e);
                      }
                  });
              });
              this.onRejectedCallbacks.push(() => {
                  setTimeout(() => {
                      try {
                          if (typeof onRejected !== 'function') {
                              reject(this.PromiseResult);
                          } else {
                              let x = onRejected(this.PromiseResult);
                              resolvePromise(promise2, x, resolve, reject);
                          }
                      } catch (e) {
                          reject(e);
                      }
                  });
              });
          }
      })

      return promise2
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
      throw new TypeError('Chaining cycle detected for promise');
  }

  if (x instanceof myPromise) {
      x.then(y => {
          resolvePromise(promise2, y, resolve, reject)
      }, reject);
  } else if (x !== null && ((typeof x === 'object' || (typeof x === 'function')))) {
      try {
          var then = x.then;
      } catch (e) {
          return reject(e);
      }

      if (typeof then === 'function') {
          let called = false;
          try {
              then.call(
                  x,
                  y => {
                      if (called) return;
                      called = true;
                      resolvePromise(promise2, y, resolve, reject);
                  },
                  r => {
                      if (called) return;
                      called = true;
                      reject(r);
                  }
              )
          } catch (e) {
              if (called) return;
              called = true;

              reject(e);
          }
      } else {
          resolve(x);
      }
  } else {
      return resolve(x);
  }
}

new myPromise((resolve) => {
  resolve(1)
}).then((val) => {
  console.log('val1', val);
  return 2
}).then((val) => {
  console.log('val1', val);
  return 3
}).then((val) => {
  console.log('val1', val);
})