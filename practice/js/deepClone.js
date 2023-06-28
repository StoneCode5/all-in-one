/**
 * 自己实现的版本
 * 缺陷1:未考虑数组
 * 缺陷2: 未考虑循环引用
 * 缺陷3: 未考虑其他类型
 */

// function deepClone(obj) {
//   let result;
//   if (typeof obj === "object") {
//     result = {};
//     Object.entries(obj).forEach(([key, value]) => {
//       if (typeof value === "object") {
//         result[key] = deepClone(value);
//       } else {
//         result[key] = value;
//       }
//     });
//   } else {
//     result = obj;
//   }
//   return result;
// }

// const a = {
//   b: 1,
//   c: "1",
//   d: true,
//   e: {
//     f: 1,
//     g: {
//       h: 2,
//     },
//   },
//   m: undefined,
// };

// const b = deepClone(a);
// console.log("b", b);

// function deepClone2(obj) {
//   let result;
//   if (typeof obj === "object") {
//     result = Array.isArray;
//     Object.entries(obj).forEach(([key, value]) => {
//       if (typeof value === "object") {
//         result[key] = deepClone(value);
//       } else {
//         result[key] = value;
//       }
//     });
//   } else {
//     result = obj;
//   }
//   return result;
// }

// function clone(target, map = {}) {
//   if (typeof target === "object") {
//     let cloneTarget = Array.isArray(target) ? [] : {};
//     if (map[target]) {
//       return map[target];
//     }
//     map[target] = cloneTarget;
//     for (const key in target) {
//       cloneTarget[key] = clone(target[key], map);
//     }
//     return cloneTarget;
//   } else {
//     return target;
//   }
// }

// 测试用例

const map = new Map();
map.set("key", "value");
map.set("ConardLi", "code秘密花园");

const set = new Set();
set.add("ConardLi");
set.add("code秘密花园");

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
  empty: null,
  map,
  set,
  bool1: false,
  bool: new Boolean(true),
  num: new Number(2),
  str: new String(2),
  str1: "2",
  symbol: Object(Symbol(1)),
  symbol2: Symbol(2),
  date: new Date(),
  reg: /\d+/,
  error: new Error(),
  func1: () => {
    console.log("code秘密花园");
  },
  func2: function (a, b) {
    return a + b;
  },
};
target.target = target;

var deepclone2 = (target, map = new Map()) => {
  // 如果是基本类型，直接返回
  if (typeof target !== "object" || target === null) {
    return target;
  }
  const type = Object.prototype.toString.call(target);

  let cloneTarget;
  if (type === "[object Map]") {
    cloneTarget = new Map();
  } else if (type === "[object Set]") {
    cloneTarget = new Set();
  } else if (type === "[object Object]" || type === "[object Array]") {
    cloneTarget = Array.isArray(target) ? [] : {};
  }

  console.log("map", map);
  if (map.get(target)) {
    return target
  }

  map.set(target, true);


  if (type === "[object Map]") {
    target.forEach((key) => {
      cloneTarget.set(key, deepclone2(key, map));
    });
    return cloneTarget;
  } else if (type === "[object Set]") {
    target.forEach((value) => {
      cloneTarget.add(deepclone2(value, map));
    });
    return cloneTarget;
  } else if (type === "[object RegExp]") {
    return target;
  } else if (type === "[object Object]" || type === "[object Array]") {
    for (const key in target) {
      cloneTarget[key] = deepclone2(target[key], map);
    }
    return cloneTarget;
  } else if (type === "[object Function]" || type === "[object Symbol]") {
    return target;
  } else {
    return new target.constructor(target);
  }
};

const result = deepclone2(target);
console.log("result", result);
