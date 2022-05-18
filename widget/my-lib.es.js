var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source2, exclude) => {
  var target = {};
  for (var prop in source2)
    if (__hasOwnProp.call(source2, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source2[prop];
  if (source2 != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source2)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source2, prop))
        target[prop] = source2[prop];
    }
  return target;
};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$3 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$5 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r$3 = Symbol.for("react.profiler"), t$4 = Symbol.for("react.provider"), u$3 = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$3 = Symbol.iterator;
function A$3(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = z$3 && a2[z$3] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$3 = Object.assign, D$1 = {};
function E$4(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
E$4.prototype.isReactComponent = {};
E$4.prototype.setState = function(a2, b2) {
  if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$4.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$2() {
}
F$2.prototype = E$4.prototype;
function G$1(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
var H$2 = G$1.prototype = new F$2();
H$2.constructor = G$1;
C$3(H$2, E$4.prototype);
H$2.isPureReactComponent = true;
var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$3 = { key: true, ref: true, __self: true, __source: true };
function M$2(a2, b2, e2) {
  var d, c = {}, k2 = null, h2 = null;
  if (b2 != null)
    for (d in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2)
      J$1.call(b2, d) && !L$3.hasOwnProperty(d) && (c[d] = b2[d]);
  var g = arguments.length - 2;
  if (g === 1)
    c.children = e2;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
      f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (d in g = a2.defaultProps, g)
      c[d] === void 0 && (c[d] = g[d]);
  return { $$typeof: l$3, type: a2, key: k2, ref: h2, props: c, _owner: K$1.current };
}
function N$3(a2, b2) {
  return { $$typeof: l$3, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$2(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === l$3;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$1 = /\/+/g;
function Q$2(a2, b2) {
  return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b2.toString(36);
}
function R$1(a2, b2, e2, d, c) {
  var k2 = typeof a2;
  if (k2 === "undefined" || k2 === "boolean")
    a2 = null;
  var h2 = false;
  if (a2 === null)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l$3:
          case n$2:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, c = c(h2), a2 = d === "" ? "." + Q$2(h2, 0) : d, I$2(c) ? (e2 = "", a2 != null && (e2 = a2.replace(P$1, "$&/") + "/"), R$1(c, b2, e2, "", function(a3) {
      return a3;
    })) : c != null && (O$2(c) && (c = N$3(c, e2 + (!c.key || h2 && h2.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a2)), b2.push(c)), 1;
  h2 = 0;
  d = d === "" ? "." : d + ":";
  if (I$2(a2))
    for (var g = 0; g < a2.length; g++) {
      k2 = a2[g];
      var f2 = d + Q$2(k2, g);
      h2 += R$1(k2, b2, e2, f2, c);
    }
  else if (f2 = A$3(a2), typeof f2 === "function")
    for (a2 = f2.call(a2), g = 0; !(k2 = a2.next()).done; )
      k2 = k2.value, f2 = d + Q$2(k2, g++), h2 += R$1(k2, b2, e2, f2, c);
  else if (k2 === "object")
    throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + (b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$1(a2, b2, e2) {
  if (a2 == null)
    return a2;
  var d = [], c = 0;
  R$1(a2, d, "", "", function(a3) {
    return b2.call(e2, a3, c++);
  });
  return d;
}
function T$4(a2) {
  if (a2._status === -1) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 2, a2._result = b3;
    });
    a2._status === -1 && (a2._status = 0, a2._result = b2);
  }
  if (a2._status === 1)
    return a2._result.default;
  throw a2._result;
}
var U$2 = { current: null }, V$2 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a2, b2, e2) {
  S$1(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$1(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$1(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$2(a2))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$4;
react_production_min.Fragment = p$5;
react_production_min.Profiler = r$3;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (a2 === null || a2 === void 0)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d = C$3({}, a2.props), c = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (b2 != null) {
    b2.ref !== void 0 && (k2 = b2.ref, h2 = K$1.current);
    b2.key !== void 0 && (c = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g = a2.type.defaultProps;
    for (f2 in b2)
      J$1.call(b2, f2) && !L$3.hasOwnProperty(f2) && (d[f2] = b2[f2] === void 0 && g !== void 0 ? g[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1)
    d.children = e2;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$3, type: a2.type, key: c, ref: k2, props: d, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$3, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$4, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a2) {
  var b2 = M$2.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v, render: a2 };
};
react_production_min.isValidElement = O$2;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a2 }, _init: T$4 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$1, type: a2, compare: b2 === void 0 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$2.transition;
  V$2.transition = {};
  try {
    a2();
  } finally {
    V$2.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a2, b2) {
  return U$2.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$2.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$2.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$2.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$2.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$2.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$2.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$2.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$2.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$2.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$2.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$2.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$2.current.useTransition();
};
react_production_min.version = "18.1.0";
{
  react.exports = react_production_min;
}
var React = react.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c = a2.length;
    a2.push(b2);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e2 = a2[d];
        if (0 < g(e2, b2))
          a2[d] = b2, a2[c] = e2, c = d;
        else
          break a;
      }
  }
  function h2(a2) {
    return a2.length === 0 ? null : a2[0];
  }
  function k2(a2) {
    if (a2.length === 0)
      return null;
    var b2 = a2[0], c = a2.pop();
    if (c !== b2) {
      a2[0] = c;
      a:
        for (var d = 0, e2 = a2.length, w2 = e2 >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
          if (0 > g(C2, c))
            n2 < e2 && 0 > g(x2, C2) ? (a2[d] = x2, a2[n2] = c, d = n2) : (a2[d] = C2, a2[m2] = c, d = m2);
          else if (n2 < e2 && 0 > g(x2, c))
            a2[d] = x2, a2[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g(a2, b2) {
    var c = a2.sortIndex - b2.sortIndex;
    return c !== 0 ? c : a2.id - b2.id;
  }
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B3 = false, D2 = typeof setTimeout === "function" ? setTimeout : null, E2 = typeof clearTimeout === "function" ? clearTimeout : null, F2 = typeof setImmediate !== "undefined" ? setImmediate : null;
  typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); b2 !== null; ) {
      if (b2.callback === null)
        k2(t2);
      else if (b2.startTime <= a2)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H4(a2) {
    B3 = false;
    G2(a2);
    if (!A2)
      if (h2(r2) !== null)
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        b2 !== null && K2(H4, b2.startTime - a2);
      }
  }
  function J2(a2, b2) {
    A2 = false;
    B3 && (B3 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); v2 !== null && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d = v2.callback;
        if (typeof d === "function") {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          typeof e2 === "function" ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (v2 !== null)
        var w2 = true;
      else {
        var m2 = h2(t2);
        m2 !== null && K2(H4, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (O2 !== null) {
      var a2 = exports.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if (typeof F2 === "function")
    S2 = function() {
      F2(R2);
    };
  else if (typeof MessageChannel !== "undefined") {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c) {
    var d = exports.unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c, expirationTime: e2, sortIndex: -1 };
    c > d ? (a2.sortIndex = c, f2(t2, a2), h2(r2) === null && a2 === h2(t2) && (B3 ? (E2(L2), L2 = -1) : B3 = true, K2(H4, c - d))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, ba = scheduler.exports;
function p$4(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c = 1; c < arguments.length; c++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a2, b2) {
  ha(a2, b2);
  ha(a2 + "Capture", b2);
}
function ha(a2, b2) {
  ea[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    da.add(b2[a2]);
}
var ia = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function na(a2) {
  if (ja.call(ma, a2))
    return true;
  if (ja.call(la, a2))
    return false;
  if (ka.test(a2))
    return ma[a2] = true;
  la[a2] = true;
  return false;
}
function oa(a2, b2, c, d) {
  if (c !== null && c.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c !== null)
        return !c.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function pa(a2, b2, c, d) {
  if (b2 === null || typeof b2 === "undefined" || oa(a2, b2, c, d))
    return true;
  if (d)
    return false;
  if (c !== null)
    switch (c.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function t$3(a2, b2, c, d, e2, f2, g) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d;
  this.attributeNamespace = e2;
  this.mustUseProperty = c;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z$2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$2[a2] = new t$3(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$2[b2] = new t$3(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$2[a2] = new t$3(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var qa = /[\-:]([a-z])/g;
function ra(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z$2[b2] = new t$3(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z$2[b2] = new t$3(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z$2[b2] = new t$3(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$2.xlinkHref = new t$3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function sa(a2, b2, c, d) {
  var e2 = z$2.hasOwnProperty(b2) ? z$2[b2] : null;
  if (e2 !== null ? e2.type !== 0 : d || !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N")
    pa(b2, c, e2, d) && (c = null), d || e2 === null ? na(b2) && (c === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c)) : e2.mustUseProperty ? a2[e2.propertyName] = c === null ? e2.type === 3 ? false : "" : c : (b2 = e2.attributeName, d = e2.attributeNamespace, c === null ? a2.removeAttribute(b2) : (e2 = e2.type, c = e2 === 3 || e2 === 4 && c === true ? "" : "" + c, d ? a2.setAttributeNS(d, b2, c) : a2.setAttribute(b2, c)));
}
var ta = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ua = Symbol.for("react.element"), va = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"), xa = Symbol.for("react.strict_mode"), za = Symbol.for("react.profiler"), Aa = Symbol.for("react.provider"), Ba = Symbol.for("react.context"), Ca = Symbol.for("react.forward_ref"), Da = Symbol.for("react.suspense"), Ea = Symbol.for("react.suspense_list"), Fa = Symbol.for("react.memo"), Ga = Symbol.for("react.lazy");
var Ha = Symbol.for("react.offscreen");
var Ia = Symbol.iterator;
function Ja(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ia && a2[Ia] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var A$2 = Object.assign, Ka;
function La(a2) {
  if (Ka === void 0)
    try {
      throw Error();
    } catch (c) {
      var b2 = c.stack.trim().match(/\n( *(at )?)/);
      Ka = b2 && b2[1] || "";
    }
  return "\n" + Ka + a2;
}
var Ma = false;
function Na(a2, b2) {
  if (!a2 || Ma)
    return "";
  Ma = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d = l2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d && typeof l2.stack === "string") {
      for (var e2 = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e2.length - 1, h2 = f2.length - 1; 1 <= g && 0 <= h2 && e2[g] !== f2[h2]; )
        h2--;
      for (; 1 <= g && 0 <= h2; g--, h2--)
        if (e2[g] !== f2[h2]) {
          if (g !== 1 || h2 !== 1) {
            do
              if (g--, h2--, 0 > h2 || e2[g] !== f2[h2]) {
                var k2 = "\n" + e2[g].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Ma = false, Error.prepareStackTrace = c;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? La(a2) : "";
}
function Oa(a2) {
  switch (a2.tag) {
    case 5:
      return La(a2.type);
    case 16:
      return La("Lazy");
    case 13:
      return La("Suspense");
    case 19:
      return La("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Na(a2.type, false), a2;
    case 11:
      return a2 = Na(a2.type.render, false), a2;
    case 1:
      return a2 = Na(a2.type, true), a2;
    default:
      return "";
  }
}
function Pa(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
    case wa:
      return "Fragment";
    case va:
      return "Portal";
    case za:
      return "Profiler";
    case xa:
      return "StrictMode";
    case Da:
      return "Suspense";
    case Ea:
      return "SuspenseList";
  }
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case Ba:
        return (a2.displayName || "Context") + ".Consumer";
      case Aa:
        return (a2._context.displayName || "Context") + ".Provider";
      case Ca:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Fa:
        return b2 = a2.displayName || null, b2 !== null ? b2 : Pa(a2.type) || "Memo";
      case Ga:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Pa(a2(b2));
        } catch (c) {
        }
    }
  return null;
}
function Qa(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || (a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pa(b2);
    case 8:
      return b2 === xa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof b2 === "function")
        return b2.displayName || b2.name || null;
      if (typeof b2 === "string")
        return b2;
  }
  return null;
}
function Ra(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Sa(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ta(a2) {
  var b2 = Sa(a2) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
    var e2 = c.get, f2 = c.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a3) {
      d = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Ua(a2) {
  a2._valueTracker || (a2._valueTracker = Ta(a2));
}
function Va(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c = b2.getValue();
  var d = "";
  a2 && (d = Sa(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d;
  return a2 !== c ? (b2.setValue(a2), true) : false;
}
function Wa(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Xa(a2, b2) {
  var c = b2.checked;
  return A$2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a2._wrapperState.initialChecked });
}
function Ya(a2, b2) {
  var c = b2.defaultValue == null ? "" : b2.defaultValue, d = b2.checked != null ? b2.checked : b2.defaultChecked;
  c = Ra(b2.value != null ? b2.value : c);
  a2._wrapperState = { initialChecked: d, initialValue: c, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null };
}
function Za(a2, b2) {
  b2 = b2.checked;
  b2 != null && sa(a2, "checked", b2, false);
}
function $a(a2, b2) {
  Za(a2, b2);
  var c = Ra(b2.value), d = b2.type;
  if (c != null)
    if (d === "number") {
      if (c === 0 && a2.value === "" || a2.value != c)
        a2.value = "" + c;
    } else
      a2.value !== "" + c && (a2.value = "" + c);
  else if (d === "submit" || d === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a2, b2.type, c) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Ra(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
}
function cb(a2, b2, c) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d = b2.type;
    if (!(d !== "submit" && d !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c = a2.name;
  c !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c !== "" && (a2.name = c);
}
function bb(a2, b2, c) {
  if (b2 !== "number" || Wa(a2.ownerDocument) !== a2)
    c == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c && (a2.defaultValue = "" + c);
}
var db = Array.isArray;
function eb(a2, b2, c, d) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c.length; e2++)
      b2["$" + c[e2]] = true;
    for (c = 0; c < a2.length; c++)
      e2 = b2.hasOwnProperty("$" + a2[c].value), a2[c].selected !== e2 && (a2[c].selected = e2), e2 && d && (a2[c].defaultSelected = true);
  } else {
    c = "" + Ra(c);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c) {
        a2[e2].selected = true;
        d && (a2[e2].defaultSelected = true);
        return;
      }
      b2 !== null || a2[e2].disabled || (b2 = a2[e2]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function fb(a2, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(p$4(91));
  return A$2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function gb(a2, b2) {
  var c = b2.value;
  if (c == null) {
    c = b2.children;
    b2 = b2.defaultValue;
    if (c != null) {
      if (b2 != null)
        throw Error(p$4(92));
      if (db(c)) {
        if (1 < c.length)
          throw Error(p$4(93));
        c = c[0];
      }
      b2 = c;
    }
    b2 == null && (b2 = "");
    c = b2;
  }
  a2._wrapperState = { initialValue: Ra(c) };
}
function hb(a2, b2) {
  var c = Ra(b2.value), d = Ra(b2.defaultValue);
  c != null && (c = "" + c, c !== a2.value && (a2.value = c), b2.defaultValue == null && a2.defaultValue !== c && (a2.defaultValue = c));
  d != null && (a2.defaultValue = "" + d);
}
function ib(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
}
function jb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kb(a2, b2) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? jb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var lb, mb = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c, d, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c, d, e2);
    });
  } : a2;
}(function(a2, b2) {
  if (a2.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    lb = lb || document.createElement("div");
    lb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = lb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function nb(a2, b2) {
  if (b2) {
    var c = a2.firstChild;
    if (c && c === a2.lastChild && c.nodeType === 3) {
      c.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var ob = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, pb = ["Webkit", "ms", "Moz", "O"];
Object.keys(ob).forEach(function(a2) {
  pb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    ob[b2] = ob[a2];
  });
});
function qb(a2, b2, c) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c || typeof b2 !== "number" || b2 === 0 || ob.hasOwnProperty(a2) && ob[a2] ? ("" + b2).trim() : b2 + "px";
}
function rb(a2, b2) {
  a2 = a2.style;
  for (var c in b2)
    if (b2.hasOwnProperty(c)) {
      var d = c.indexOf("--") === 0, e2 = qb(c, b2[c], d);
      c === "float" && (c = "cssFloat");
      d ? a2.setProperty(c, e2) : a2[c] = e2;
    }
}
var sb = A$2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function tb(a2, b2) {
  if (b2) {
    if (sb[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(p$4(137, a2));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(p$4(60));
      if (typeof b2.dangerouslySetInnerHTML !== "object" || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$4(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(p$4(62));
  }
}
function ub(a2, b2) {
  if (a2.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var vb = null;
function wb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var xb = null, yb = null, zb = null;
function Ab(a2) {
  if (a2 = Bb(a2)) {
    if (typeof xb !== "function")
      throw Error(p$4(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Cb(b2), xb(a2.stateNode, a2.type, b2));
  }
}
function Db(a2) {
  yb ? zb ? zb.push(a2) : zb = [a2] : yb = a2;
}
function Eb() {
  if (yb) {
    var a2 = yb, b2 = zb;
    zb = yb = null;
    Ab(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Ab(b2[a2]);
  }
}
function Fb(a2, b2) {
  return a2(b2);
}
function Gb() {
}
var Hb = false;
function Ib(a2, b2, c) {
  if (Hb)
    return a2(b2, c);
  Hb = true;
  try {
    return Fb(a2, b2, c);
  } finally {
    if (Hb = false, yb !== null || zb !== null)
      Gb(), Eb();
  }
}
function Jb(a2, b2) {
  var c = a2.stateNode;
  if (c === null)
    return null;
  var d = Cb(c);
  if (d === null)
    return null;
  c = d[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a2 = a2.type, d = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c && typeof c !== "function")
    throw Error(p$4(231, b2, typeof c));
  return c;
}
var Kb = false;
if (ia)
  try {
    var Lb = {};
    Object.defineProperty(Lb, "passive", { get: function() {
      Kb = true;
    } });
    window.addEventListener("test", Lb, Lb);
    window.removeEventListener("test", Lb, Lb);
  } catch (a2) {
    Kb = false;
  }
function Mb(a2, b2, c, d, e2, f2, g, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Nb = false, Ob = null, Pb = false, Qb = null, Rb = { onError: function(a2) {
  Nb = true;
  Ob = a2;
} };
function Sb(a2, b2, c, d, e2, f2, g, h2, k2) {
  Nb = false;
  Ob = null;
  Mb.apply(Rb, arguments);
}
function Tb(a2, b2, c, d, e2, f2, g, h2, k2) {
  Sb.apply(this, arguments);
  if (Nb) {
    if (Nb) {
      var l2 = Ob;
      Nb = false;
      Ob = null;
    } else
      throw Error(p$4(198));
    Pb || (Pb = true, Qb = l2);
  }
}
function Ub(a2) {
  var b2 = a2, c = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, (b2.flags & 4098) !== 0 && (c = b2.return), a2 = b2.return;
    while (a2);
  }
  return b2.tag === 3 ? c : null;
}
function Vb(a2) {
  if (a2.tag === 13) {
    var b2 = a2.memoizedState;
    b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function Wb(a2) {
  if (Ub(a2) !== a2)
    throw Error(p$4(188));
}
function Xb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Ub(a2);
    if (b2 === null)
      throw Error(p$4(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c = a2, d = b2; ; ) {
    var e2 = c.return;
    if (e2 === null)
      break;
    var f2 = e2.alternate;
    if (f2 === null) {
      d = e2.return;
      if (d !== null) {
        c = d;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c)
          return Wb(e2), a2;
        if (f2 === d)
          return Wb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$4(188));
    }
    if (c.return !== d.return)
      c = e2, d = f2;
    else {
      for (var g = false, h2 = e2.child; h2; ) {
        if (h2 === c) {
          g = true;
          c = e2;
          d = f2;
          break;
        }
        if (h2 === d) {
          g = true;
          d = e2;
          c = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c) {
            g = true;
            c = f2;
            d = e2;
            break;
          }
          if (h2 === d) {
            g = true;
            d = f2;
            c = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g)
          throw Error(p$4(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p$4(190));
  }
  if (c.tag !== 3)
    throw Error(p$4(188));
  return c.stateNode.current === c ? a2 : b2;
}
function Yb(a2) {
  a2 = Xb(a2);
  return a2 !== null ? Zb(a2) : null;
}
function Zb(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2;
  for (a2 = a2.child; a2 !== null; ) {
    var b2 = Zb(a2);
    if (b2 !== null)
      return b2;
    a2 = a2.sibling;
  }
  return null;
}
var $b = ba.unstable_scheduleCallback, ac = ba.unstable_cancelCallback, bc = ba.unstable_shouldYield, cc = ba.unstable_requestPaint, B = ba.unstable_now, dc = ba.unstable_getCurrentPriorityLevel, ec = ba.unstable_ImmediatePriority, fc = ba.unstable_UserBlockingPriority, gc = ba.unstable_NormalPriority, hc = ba.unstable_LowPriority, ic = ba.unstable_IdlePriority, jc = null, kc = null;
function lc(a2) {
  if (kc && typeof kc.onCommitFiberRoot === "function")
    try {
      kc.onCommitFiberRoot(jc, a2, void 0, (a2.current.flags & 128) === 128);
    } catch (b2) {
    }
}
var nc = Math.clz32 ? Math.clz32 : mc, oc = Math.log, pc = Math.LN2;
function mc(a2) {
  a2 >>>= 0;
  return a2 === 0 ? 32 : 31 - (oc(a2) / pc | 0) | 0;
}
var qc = 64, rc = 4194304;
function sc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function tc(a2, b2) {
  var c = a2.pendingLanes;
  if (c === 0)
    return 0;
  var d = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g = c & 268435455;
  if (g !== 0) {
    var h2 = g & ~e2;
    h2 !== 0 ? d = sc(h2) : (f2 &= g, f2 !== 0 && (d = sc(f2)));
  } else
    g = c & ~e2, g !== 0 ? d = sc(g) : f2 !== 0 && (d = sc(f2));
  if (d === 0)
    return 0;
  if (b2 !== 0 && b2 !== d && (b2 & e2) === 0 && (e2 = d & -d, f2 = b2 & -b2, e2 >= f2 || e2 === 16 && (f2 & 4194240) !== 0))
    return b2;
  (d & 4) !== 0 && (d |= c & 16);
  b2 = a2.entangledLanes;
  if (b2 !== 0)
    for (a2 = a2.entanglements, b2 &= d; 0 < b2; )
      c = 31 - nc(b2), e2 = 1 << c, d |= a2[c], b2 &= ~e2;
  return d;
}
function uc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vc(a2, b2) {
  for (var c = a2.suspendedLanes, d = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g = 31 - nc(f2), h2 = 1 << g, k2 = e2[g];
    if (k2 === -1) {
      if ((h2 & c) === 0 || (h2 & d) !== 0)
        e2[g] = uc(h2, b2);
    } else
      k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function wc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function xc() {
  var a2 = qc;
  qc <<= 1;
  (qc & 4194240) === 0 && (qc = 64);
  return a2;
}
function yc(a2) {
  for (var b2 = [], c = 0; 31 > c; c++)
    b2.push(a2);
  return b2;
}
function zc(a2, b2, c) {
  a2.pendingLanes |= b2;
  b2 !== 536870912 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - nc(b2);
  a2[b2] = c;
}
function Ac(a2, b2) {
  var c = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c; ) {
    var e2 = 31 - nc(c), f2 = 1 << e2;
    b2[e2] = 0;
    d[e2] = -1;
    a2[e2] = -1;
    c &= ~f2;
  }
}
function Bc(a2, b2) {
  var c = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c; ) {
    var d = 31 - nc(c), e2 = 1 << d;
    e2 & b2 | a2[d] & b2 && (a2[d] |= b2);
    c &= ~e2;
  }
}
var C$2 = 0;
function Cc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? (a2 & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Dc, Ec, Fc, Gc, Hc, Ic = false, Jc = [], Kc = null, Lc = null, Mc = null, Nc = /* @__PURE__ */ new Map(), Oc = /* @__PURE__ */ new Map(), Pc = [], Qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Rc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Kc = null;
      break;
    case "dragenter":
    case "dragleave":
      Lc = null;
      break;
    case "mouseover":
    case "mouseout":
      Mc = null;
      break;
    case "pointerover":
    case "pointerout":
      Nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Oc.delete(b2.pointerId);
  }
}
function Sc(a2, b2, c, d, e2, f2) {
  if (a2 === null || a2.nativeEvent !== f2)
    return a2 = { blockedOn: b2, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e2] }, b2 !== null && (b2 = Bb(b2), b2 !== null && Ec(b2)), a2;
  a2.eventSystemFlags |= d;
  b2 = a2.targetContainers;
  e2 !== null && b2.indexOf(e2) === -1 && b2.push(e2);
  return a2;
}
function Tc(a2, b2, c, d, e2) {
  switch (b2) {
    case "focusin":
      return Kc = Sc(Kc, a2, b2, c, d, e2), true;
    case "dragenter":
      return Lc = Sc(Lc, a2, b2, c, d, e2), true;
    case "mouseover":
      return Mc = Sc(Mc, a2, b2, c, d, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Nc.set(f2, Sc(Nc.get(f2) || null, a2, b2, c, d, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Oc.set(f2, Sc(Oc.get(f2) || null, a2, b2, c, d, e2)), true;
  }
  return false;
}
function Uc(a2) {
  var b2 = Vc(a2.target);
  if (b2 !== null) {
    var c = Ub(b2);
    if (c !== null) {
      if (b2 = c.tag, b2 === 13) {
        if (b2 = Vb(c), b2 !== null) {
          a2.blockedOn = b2;
          Hc(a2.priority, function() {
            Fc(c);
          });
          return;
        }
      } else if (b2 === 3 && c.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Wc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c = Xc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (c === null) {
      c = a2.nativeEvent;
      var d = new c.constructor(c.type, c);
      vb = d;
      c.target.dispatchEvent(d);
      vb = null;
    } else
      return b2 = Bb(c), b2 !== null && Ec(b2), a2.blockedOn = c, false;
    b2.shift();
  }
  return true;
}
function Yc(a2, b2, c) {
  Wc(a2) && c.delete(b2);
}
function Zc() {
  Ic = false;
  Kc !== null && Wc(Kc) && (Kc = null);
  Lc !== null && Wc(Lc) && (Lc = null);
  Mc !== null && Wc(Mc) && (Mc = null);
  Nc.forEach(Yc);
  Oc.forEach(Yc);
}
function $c(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Ic || (Ic = true, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, Zc)));
}
function ad(a2) {
  function b2(b3) {
    return $c(b3, a2);
  }
  if (0 < Jc.length) {
    $c(Jc[0], a2);
    for (var c = 1; c < Jc.length; c++) {
      var d = Jc[c];
      d.blockedOn === a2 && (d.blockedOn = null);
    }
  }
  Kc !== null && $c(Kc, a2);
  Lc !== null && $c(Lc, a2);
  Mc !== null && $c(Mc, a2);
  Nc.forEach(b2);
  Oc.forEach(b2);
  for (c = 0; c < Pc.length; c++)
    d = Pc[c], d.blockedOn === a2 && (d.blockedOn = null);
  for (; 0 < Pc.length && (c = Pc[0], c.blockedOn === null); )
    Uc(c), c.blockedOn === null && Pc.shift();
}
var bd = ta.ReactCurrentBatchConfig, cd = true;
function dd(a2, b2, c, d) {
  var e2 = C$2, f2 = bd.transition;
  bd.transition = null;
  try {
    C$2 = 1, ed(a2, b2, c, d);
  } finally {
    C$2 = e2, bd.transition = f2;
  }
}
function fd(a2, b2, c, d) {
  var e2 = C$2, f2 = bd.transition;
  bd.transition = null;
  try {
    C$2 = 4, ed(a2, b2, c, d);
  } finally {
    C$2 = e2, bd.transition = f2;
  }
}
function ed(a2, b2, c, d) {
  if (cd) {
    var e2 = Xc(a2, b2, c, d);
    if (e2 === null)
      gd(a2, b2, d, hd, c), Rc(a2, d);
    else if (Tc(e2, a2, b2, c, d))
      d.stopPropagation();
    else if (Rc(a2, d), b2 & 4 && -1 < Qc.indexOf(a2)) {
      for (; e2 !== null; ) {
        var f2 = Bb(e2);
        f2 !== null && Dc(f2);
        f2 = Xc(a2, b2, c, d);
        f2 === null && gd(a2, b2, d, hd, c);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      e2 !== null && d.stopPropagation();
    } else
      gd(a2, b2, d, null, c);
  }
}
var hd = null;
function Xc(a2, b2, c, d) {
  hd = null;
  a2 = wb(d);
  a2 = Vc(a2);
  if (a2 !== null)
    if (b2 = Ub(a2), b2 === null)
      a2 = null;
    else if (c = b2.tag, c === 13) {
      a2 = Vb(b2);
      if (a2 !== null)
        return a2;
      a2 = null;
    } else if (c === 3) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return b2.tag === 3 ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else
      b2 !== a2 && (a2 = null);
  hd = a2;
  return null;
}
function id(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (dc()) {
        case ec:
          return 1;
        case fc:
          return 4;
        case gc:
        case hc:
          return 16;
        case ic:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jd = null, kd = null, ld = null;
function md() {
  if (ld)
    return ld;
  var a2, b2 = kd, c = b2.length, d, e2 = "value" in jd ? jd.value : jd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c && b2[a2] === e2[a2]; a2++)
    ;
  var g = c - a2;
  for (d = 1; d <= g && b2[c - d] === e2[f2 - d]; d++)
    ;
  return ld = e2.slice(a2, 1 < d ? 1 - d : void 0);
}
function nd(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function od() {
  return true;
}
function pd() {
  return false;
}
function qd(a2) {
  function b2(b3, d, e2, f2, g) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a2)
      a2.hasOwnProperty(c) && (b3 = a2[c], this[c] = b3 ? b3(f2) : f2[c]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? od : pd;
    this.isPropagationStopped = pd;
    return this;
  }
  A$2(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = od);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = od);
  }, persist: function() {
  }, isPersistent: od });
  return b2;
}
var rd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, sd = qd(rd), td = A$2({}, rd, { view: 0, detail: 0 }), ud = qd(td), vd, wd, xd, zd = A$2({}, td, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== xd && (xd && a2.type === "mousemove" ? (vd = a2.screenX - xd.screenX, wd = a2.screenY - xd.screenY) : wd = vd = 0, xd = a2);
  return vd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : wd;
} }), Ad = qd(zd), Bd = A$2({}, zd, { dataTransfer: 0 }), Cd = qd(Bd), Dd = A$2({}, td, { relatedTarget: 0 }), Ed = qd(Dd), Fd = A$2({}, rd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gd = qd(Fd), Hd = A$2({}, rd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Id = qd(Hd), Jd = A$2({}, rd, { data: 0 }), Kd = qd(Jd), Ld = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Md = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Nd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Od(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Nd[a2]) ? !!b2[a2] : false;
}
function yd() {
  return Od;
}
var Pd = A$2({}, td, { key: function(a2) {
  if (a2.key) {
    var b2 = Ld[a2.key] || a2.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a2.type === "keypress" ? (a2 = nd(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Md[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yd, charCode: function(a2) {
  return a2.type === "keypress" ? nd(a2) : 0;
}, keyCode: function(a2) {
  return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}, which: function(a2) {
  return a2.type === "keypress" ? nd(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
} }), Qd = qd(Pd), Rd = A$2({}, zd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sd = qd(Rd), Td = A$2({}, td, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yd }), Ud = qd(Td), Vd = A$2({}, rd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wd = qd(Vd), Xd = A$2({}, zd, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Yd = qd(Xd), Zd = [9, 13, 27, 32], $d = ia && "CompositionEvent" in window, ae = null;
ia && "documentMode" in document && (ae = document.documentMode);
var be$1 = ia && "TextEvent" in window && !ae, ce$1 = ia && (!$d || ae && 8 < ae && 11 >= ae), de$1 = String.fromCharCode(32), ee = false;
function fe(a2, b2) {
  switch (a2) {
    case "keyup":
      return Zd.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function ge$1(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var he = false;
function ie(a2, b2) {
  switch (a2) {
    case "compositionend":
      return ge$1(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      ee = true;
      return de$1;
    case "textInput":
      return a2 = b2.data, a2 === de$1 && ee ? null : a2;
    default:
      return null;
  }
}
function je(a2, b2) {
  if (he)
    return a2 === "compositionend" || !$d && fe(a2, b2) ? (a2 = md(), ld = kd = jd = null, he = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return ce$1 && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var ke = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function le(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 === "input" ? !!ke[a2.type] : b2 === "textarea" ? true : false;
}
function me$1(a2, b2, c, d) {
  Db(d);
  b2 = ne(b2, "onChange");
  0 < b2.length && (c = new sd("onChange", "change", null, c, d), a2.push({ event: c, listeners: b2 }));
}
var oe$1 = null, pe = null;
function qe(a2) {
  re$1(a2, 0);
}
function se(a2) {
  var b2 = te(a2);
  if (Va(b2))
    return a2;
}
function ue(a2, b2) {
  if (a2 === "change")
    return b2;
}
var ve$1 = false;
if (ia) {
  var we;
  if (ia) {
    var xe$1 = "oninput" in document;
    if (!xe$1) {
      var ye$1 = document.createElement("div");
      ye$1.setAttribute("oninput", "return;");
      xe$1 = typeof ye$1.oninput === "function";
    }
    we = xe$1;
  } else
    we = false;
  ve$1 = we && (!document.documentMode || 9 < document.documentMode);
}
function ze() {
  oe$1 && (oe$1.detachEvent("onpropertychange", Ae$1), pe = oe$1 = null);
}
function Ae$1(a2) {
  if (a2.propertyName === "value" && se(pe)) {
    var b2 = [];
    me$1(b2, pe, a2, wb(a2));
    Ib(qe, b2);
  }
}
function Be(a2, b2, c) {
  a2 === "focusin" ? (ze(), oe$1 = b2, pe = c, oe$1.attachEvent("onpropertychange", Ae$1)) : a2 === "focusout" && ze();
}
function Ce$1(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return se(pe);
}
function De(a2, b2) {
  if (a2 === "click")
    return se(b2);
}
function Ee$1(a2, b2) {
  if (a2 === "input" || a2 === "change")
    return se(b2);
}
function Fe(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var Ge = typeof Object.is === "function" ? Object.is : Fe;
function He(a2, b2) {
  if (Ge(a2, b2))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c = Object.keys(a2), d = Object.keys(b2);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e2 = c[d];
    if (!ja.call(b2, e2) || !Ge(a2[e2], b2[e2]))
      return false;
  }
  return true;
}
function Ie$1(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Je(a2, b2) {
  var c = Ie$1(a2);
  a2 = 0;
  for (var d; c; ) {
    if (c.nodeType === 3) {
      d = a2 + c.textContent.length;
      if (a2 <= b2 && d >= b2)
        return { node: c, offset: b2 - a2 };
      a2 = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Ie$1(c);
  }
}
function Ke(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Ke(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Le$1() {
  for (var a2 = window, b2 = Wa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c = typeof b2.contentWindow.location.href === "string";
    } catch (d) {
      c = false;
    }
    if (c)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Wa(a2.document);
  }
  return b2;
}
function Me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
}
function Ne(a2) {
  var b2 = Le$1(), c = a2.focusedElem, d = a2.selectionRange;
  if (b2 !== c && c && c.ownerDocument && Ke(c.ownerDocument.documentElement, c)) {
    if (d !== null && Me(c)) {
      if (b2 = d.start, a2 = d.end, a2 === void 0 && (a2 = b2), "selectionStart" in c)
        c.selectionStart = b2, c.selectionEnd = Math.min(a2, c.value.length);
      else if (a2 = (b2 = c.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c.textContent.length, f2 = Math.min(d.start, e2);
        d = d.end === void 0 ? f2 : Math.min(d.end, e2);
        !a2.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
        e2 = Je(c, f2);
        var g = Je(c, d);
        e2 && g && (a2.rangeCount !== 1 || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g.node || a2.focusOffset !== g.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d ? (a2.addRange(b2), a2.extend(g.node, g.offset)) : (b2.setEnd(g.node, g.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c; a2 = a2.parentNode; )
      a2.nodeType === 1 && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    typeof c.focus === "function" && c.focus();
    for (c = 0; c < b2.length; c++)
      a2 = b2[c], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Oe$1 = ia && "documentMode" in document && 11 >= document.documentMode, Pe = null, Qe = null, Re$1 = null, Se$1 = false;
function Te$1(a2, b2, c) {
  var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
  Se$1 || Pe == null || Pe !== Wa(d) || (d = Pe, "selectionStart" in d && Me(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Re$1 && He(Re$1, d) || (Re$1 = d, d = ne(Qe, "onSelect"), 0 < d.length && (b2 = new sd("onSelect", "select", null, b2, c), a2.push({ event: b2, listeners: d }), b2.target = Pe)));
}
function Ue(a2, b2) {
  var c = {};
  c[a2.toLowerCase()] = b2.toLowerCase();
  c["Webkit" + a2] = "webkit" + b2;
  c["Moz" + a2] = "moz" + b2;
  return c;
}
var Ve = { animationend: Ue("Animation", "AnimationEnd"), animationiteration: Ue("Animation", "AnimationIteration"), animationstart: Ue("Animation", "AnimationStart"), transitionend: Ue("Transition", "TransitionEnd") }, We = {}, Xe = {};
ia && (Xe = document.createElement("div").style, "AnimationEvent" in window || (delete Ve.animationend.animation, delete Ve.animationiteration.animation, delete Ve.animationstart.animation), "TransitionEvent" in window || delete Ve.transitionend.transition);
function Ye(a2) {
  if (We[a2])
    return We[a2];
  if (!Ve[a2])
    return a2;
  var b2 = Ve[a2], c;
  for (c in b2)
    if (b2.hasOwnProperty(c) && c in Xe)
      return We[a2] = b2[c];
  return a2;
}
var Ze = Ye("animationend"), $e = Ye("animationiteration"), af = Ye("animationstart"), bf = Ye("transitionend"), cf = /* @__PURE__ */ new Map(), df = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ef(a2, b2) {
  cf.set(a2, b2);
  fa(b2, [a2]);
}
for (var ff = 0; ff < df.length; ff++) {
  var gf = df[ff], hf = gf.toLowerCase(), jf = gf[0].toUpperCase() + gf.slice(1);
  ef(hf, "on" + jf);
}
ef(Ze, "onAnimationEnd");
ef($e, "onAnimationIteration");
ef(af, "onAnimationStart");
ef("dblclick", "onDoubleClick");
ef("focusin", "onFocus");
ef("focusout", "onBlur");
ef(bf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kf));
function mf(a2, b2, c) {
  var d = a2.type || "unknown-event";
  a2.currentTarget = c;
  Tb(d, b2, void 0, a2);
  a2.currentTarget = null;
}
function re$1(a2, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c = 0; c < a2.length; c++) {
    var d = a2[c], e2 = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h2 = d[g], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          mf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g = 0; g < d.length; g++) {
          h2 = d[g];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          mf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Pb)
    throw a2 = Qb, Pb = false, Qb = null, a2;
}
function D(a2, b2) {
  var c = b2[nf];
  c === void 0 && (c = b2[nf] = /* @__PURE__ */ new Set());
  var d = a2 + "__bubble";
  c.has(d) || (of(b2, a2, 2, false), c.add(d));
}
function pf(a2, b2, c) {
  var d = 0;
  b2 && (d |= 4);
  of(c, a2, d, b2);
}
var qf = "_reactListening" + Math.random().toString(36).slice(2);
function rf(a2) {
  if (!a2[qf]) {
    a2[qf] = true;
    da.forEach(function(b3) {
      b3 !== "selectionchange" && (lf.has(b3) || pf(b3, false, a2), pf(b3, true, a2));
    });
    var b2 = a2.nodeType === 9 ? a2 : a2.ownerDocument;
    b2 === null || b2[qf] || (b2[qf] = true, pf("selectionchange", false, b2));
  }
}
function of(a2, b2, c, d) {
  switch (id(b2)) {
    case 1:
      var e2 = dd;
      break;
    case 4:
      e2 = fd;
      break;
    default:
      e2 = ed;
  }
  c = e2.bind(null, b2, c, a2);
  e2 = void 0;
  !Kb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e2 = true);
  d ? e2 !== void 0 ? a2.addEventListener(b2, c, { capture: true, passive: e2 }) : a2.addEventListener(b2, c, true) : e2 !== void 0 ? a2.addEventListener(b2, c, { passive: e2 }) : a2.addEventListener(b2, c, false);
}
function gd(a2, b2, c, d, e2) {
  var f2 = d;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d !== null)
    a:
      for (; ; ) {
        if (d === null)
          return;
        var g = d.tag;
        if (g === 3 || g === 4) {
          var h2 = d.stateNode.containerInfo;
          if (h2 === e2 || h2.nodeType === 8 && h2.parentNode === e2)
            break;
          if (g === 4)
            for (g = d.return; g !== null; ) {
              var k2 = g.tag;
              if (k2 === 3 || k2 === 4) {
                if (k2 = g.stateNode.containerInfo, k2 === e2 || k2.nodeType === 8 && k2.parentNode === e2)
                  return;
              }
              g = g.return;
            }
          for (; h2 !== null; ) {
            g = Vc(h2);
            if (g === null)
              return;
            k2 = g.tag;
            if (k2 === 5 || k2 === 6) {
              d = f2 = g;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d = d.return;
      }
  Ib(function() {
    var d2 = f2, e3 = wb(c), g2 = [];
    a: {
      var h3 = cf.get(a2);
      if (h3 !== void 0) {
        var k3 = sd, m2 = a2;
        switch (a2) {
          case "keypress":
            if (nd(c) === 0)
              break a;
          case "keydown":
          case "keyup":
            k3 = Qd;
            break;
          case "focusin":
            m2 = "focus";
            k3 = Ed;
            break;
          case "focusout":
            m2 = "blur";
            k3 = Ed;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Ed;
            break;
          case "click":
            if (c.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Ad;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Cd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Ud;
            break;
          case Ze:
          case $e:
          case af:
            k3 = Gd;
            break;
          case bf:
            k3 = Wd;
            break;
          case "scroll":
            k3 = ud;
            break;
          case "wheel":
            k3 = Yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Id;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Sd;
        }
        var w2 = (b2 & 4) !== 0, J2 = !w2 && a2 === "scroll", v2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var x2 = d2, r2; x2 !== null; ) {
          r2 = x2;
          var F2 = r2.stateNode;
          r2.tag === 5 && F2 !== null && (r2 = F2, v2 !== null && (F2 = Jb(x2, v2), F2 != null && w2.push(sf(x2, F2, r2))));
          if (J2)
            break;
          x2 = x2.return;
        }
        0 < w2.length && (h3 = new k3(h3, m2, null, c, e3), g2.push({ event: h3, listeners: w2 }));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a2 === "mouseover" || a2 === "pointerover";
        k3 = a2 === "mouseout" || a2 === "pointerout";
        if (h3 && c !== vb && (m2 = c.relatedTarget || c.fromElement) && (Vc(m2) || m2[tf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (m2 = c.relatedTarget || c.toElement, k3 = d2, m2 = m2 ? Vc(m2) : null, m2 !== null && (J2 = Ub(m2), m2 !== J2 || m2.tag !== 5 && m2.tag !== 6))
              m2 = null;
          } else
            k3 = null, m2 = d2;
          if (k3 !== m2) {
            w2 = Ad;
            F2 = "onMouseLeave";
            v2 = "onMouseEnter";
            x2 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              w2 = Sd, F2 = "onPointerLeave", v2 = "onPointerEnter", x2 = "pointer";
            J2 = k3 == null ? h3 : te(k3);
            r2 = m2 == null ? h3 : te(m2);
            h3 = new w2(F2, x2 + "leave", k3, c, e3);
            h3.target = J2;
            h3.relatedTarget = r2;
            F2 = null;
            Vc(e3) === d2 && (w2 = new w2(v2, x2 + "enter", m2, c, e3), w2.target = r2, w2.relatedTarget = J2, F2 = w2);
            J2 = F2;
            if (k3 && m2)
              b: {
                w2 = k3;
                v2 = m2;
                x2 = 0;
                for (r2 = w2; r2; r2 = uf(r2))
                  x2++;
                r2 = 0;
                for (F2 = v2; F2; F2 = uf(F2))
                  r2++;
                for (; 0 < x2 - r2; )
                  w2 = uf(w2), x2--;
                for (; 0 < r2 - x2; )
                  v2 = uf(v2), r2--;
                for (; x2--; ) {
                  if (w2 === v2 || v2 !== null && w2 === v2.alternate)
                    break b;
                  w2 = uf(w2);
                  v2 = uf(v2);
                }
                w2 = null;
              }
            else
              w2 = null;
            k3 !== null && vf(g2, h3, k3, w2, false);
            m2 !== null && J2 !== null && vf(g2, J2, m2, w2, true);
          }
        }
      }
      a: {
        h3 = d2 ? te(d2) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k3 === "select" || k3 === "input" && h3.type === "file")
          var Z2 = ue;
        else if (le(h3))
          if (ve$1)
            Z2 = Ee$1;
          else {
            Z2 = Ce$1;
            var ya = Be;
          }
        else
          (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (Z2 = De);
        if (Z2 && (Z2 = Z2(a2, d2))) {
          me$1(g2, Z2, c, e3);
          break a;
        }
        ya && ya(a2, h3, d2);
        a2 === "focusout" && (ya = h3._wrapperState) && ya.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      ya = d2 ? te(d2) : window;
      switch (a2) {
        case "focusin":
          if (le(ya) || ya.contentEditable === "true")
            Pe = ya, Qe = d2, Re$1 = null;
          break;
        case "focusout":
          Re$1 = Qe = Pe = null;
          break;
        case "mousedown":
          Se$1 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Se$1 = false;
          Te$1(g2, c, e3);
          break;
        case "selectionchange":
          if (Oe$1)
            break;
        case "keydown":
        case "keyup":
          Te$1(g2, c, e3);
      }
      var ab;
      if ($d)
        b: {
          switch (a2) {
            case "compositionstart":
              var ca = "onCompositionStart";
              break b;
            case "compositionend":
              ca = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ca = "onCompositionUpdate";
              break b;
          }
          ca = void 0;
        }
      else
        he ? fe(a2, c) && (ca = "onCompositionEnd") : a2 === "keydown" && c.keyCode === 229 && (ca = "onCompositionStart");
      ca && (ce$1 && c.locale !== "ko" && (he || ca !== "onCompositionStart" ? ca === "onCompositionEnd" && he && (ab = md()) : (jd = e3, kd = "value" in jd ? jd.value : jd.textContent, he = true)), ya = ne(d2, ca), 0 < ya.length && (ca = new Kd(ca, a2, null, c, e3), g2.push({ event: ca, listeners: ya }), ab ? ca.data = ab : (ab = ge$1(c), ab !== null && (ca.data = ab))));
      if (ab = be$1 ? ie(a2, c) : je(a2, c))
        d2 = ne(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Kd("onBeforeInput", "beforeinput", null, c, e3), g2.push({ event: e3, listeners: d2 }), e3.data = ab);
    }
    re$1(g2, b2);
  });
}
function sf(a2, b2, c) {
  return { instance: a2, listener: b2, currentTarget: c };
}
function ne(a2, b2) {
  for (var c = b2 + "Capture", d = []; a2 !== null; ) {
    var e2 = a2, f2 = e2.stateNode;
    e2.tag === 5 && f2 !== null && (e2 = f2, f2 = Jb(a2, c), f2 != null && d.unshift(sf(a2, f2, e2)), f2 = Jb(a2, b2), f2 != null && d.push(sf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d;
}
function uf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function vf(a2, b2, c, d, e2) {
  for (var f2 = b2._reactName, g = []; c !== null && c !== d; ) {
    var h2 = c, k2 = h2.alternate, l2 = h2.stateNode;
    if (k2 !== null && k2 === d)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e2 ? (k2 = Jb(c, f2), k2 != null && g.unshift(sf(c, k2, h2))) : e2 || (k2 = Jb(c, f2), k2 != null && g.push(sf(c, k2, h2))));
    c = c.return;
  }
  g.length !== 0 && a2.push({ event: b2, listeners: g });
}
var wf = /\r\n?/g, xf = /\u0000|\uFFFD/g;
function yf(a2) {
  return (typeof a2 === "string" ? a2 : "" + a2).replace(wf, "\n").replace(xf, "");
}
function zf(a2, b2, c) {
  b2 = yf(b2);
  if (yf(a2) !== b2 && c)
    throw Error(p$4(425));
}
function Af() {
}
var Bf = null, Cf = null;
function Df(a2, b2) {
  return a2 === "textarea" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var Ef = typeof setTimeout === "function" ? setTimeout : void 0, Ff = typeof clearTimeout === "function" ? clearTimeout : void 0, Gf = typeof Promise === "function" ? Promise : void 0, If = typeof queueMicrotask === "function" ? queueMicrotask : typeof Gf !== "undefined" ? function(a2) {
  return Gf.resolve(null).then(a2).catch(Hf);
} : Ef;
function Hf(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Jf(a2, b2) {
  var c = b2, d = 0;
  do {
    var e2 = c.nextSibling;
    a2.removeChild(c);
    if (e2 && e2.nodeType === 8)
      if (c = e2.data, c === "/$") {
        if (d === 0) {
          a2.removeChild(e2);
          ad(b2);
          return;
        }
        d--;
      } else
        c !== "$" && c !== "$?" && c !== "$!" || d++;
    c = e2;
  } while (c);
  ad(b2);
}
function Kf(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
    if (b2 === 8) {
      b2 = a2.data;
      if (b2 === "$" || b2 === "$!" || b2 === "$?")
        break;
      if (b2 === "/$")
        return null;
    }
  }
  return a2;
}
function Lf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c = a2.data;
      if (c === "$" || c === "$!" || c === "$?") {
        if (b2 === 0)
          return a2;
        b2--;
      } else
        c === "/$" && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Mf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Mf, Of = "__reactProps$" + Mf, tf = "__reactContainer$" + Mf, nf = "__reactEvents$" + Mf, Pf = "__reactListeners$" + Mf, Qf = "__reactHandles$" + Mf;
function Vc(a2) {
  var b2 = a2[Nf];
  if (b2)
    return b2;
  for (var c = a2.parentNode; c; ) {
    if (b2 = c[tf] || c[Nf]) {
      c = b2.alternate;
      if (b2.child !== null || c !== null && c.child !== null)
        for (a2 = Lf(a2); a2 !== null; ) {
          if (c = a2[Nf])
            return c;
          a2 = Lf(a2);
        }
      return b2;
    }
    a2 = c;
    c = a2.parentNode;
  }
  return null;
}
function Bb(a2) {
  a2 = a2[Nf] || a2[tf];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function te(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(p$4(33));
}
function Cb(a2) {
  return a2[Of] || null;
}
var Rf = [], Sf = -1;
function Tf(a2) {
  return { current: a2 };
}
function E$3(a2) {
  0 > Sf || (a2.current = Rf[Sf], Rf[Sf] = null, Sf--);
}
function G(a2, b2) {
  Sf++;
  Rf[Sf] = a2.current;
  a2.current = b2;
}
var Uf = {}, H$1 = Tf(Uf), Vf = Tf(false), Wf = Uf;
function Xf(a2, b2) {
  var c = a2.type.contextTypes;
  if (!c)
    return Uf;
  var d = a2.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c)
    e2[f2] = b2[f2];
  d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Yf(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function Zf() {
  E$3(Vf);
  E$3(H$1);
}
function $f(a2, b2, c) {
  if (H$1.current !== Uf)
    throw Error(p$4(168));
  G(H$1, b2);
  G(Vf, c);
}
function ag(a2, b2, c) {
  var d = a2.stateNode;
  b2 = b2.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c;
  d = d.getChildContext();
  for (var e2 in d)
    if (!(e2 in b2))
      throw Error(p$4(108, Qa(a2) || "Unknown", e2));
  return A$2({}, c, d);
}
function bg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Uf;
  Wf = H$1.current;
  G(H$1, a2);
  G(Vf, Vf.current);
  return true;
}
function cg(a2, b2, c) {
  var d = a2.stateNode;
  if (!d)
    throw Error(p$4(169));
  c ? (a2 = ag(a2, b2, Wf), d.__reactInternalMemoizedMergedChildContext = a2, E$3(Vf), E$3(H$1), G(H$1, a2)) : E$3(Vf);
  G(Vf, c);
}
var dg = null, eg = false, fg = false;
function gg(a2) {
  dg === null ? dg = [a2] : dg.push(a2);
}
function hg(a2) {
  eg = true;
  gg(a2);
}
function ig() {
  if (!fg && dg !== null) {
    fg = true;
    var a2 = 0, b2 = C$2;
    try {
      var c = dg;
      for (C$2 = 1; a2 < c.length; a2++) {
        var d = c[a2];
        do
          d = d(true);
        while (d !== null);
      }
      dg = null;
      eg = false;
    } catch (e2) {
      throw dg !== null && (dg = dg.slice(a2 + 1)), $b(ec, ig), e2;
    } finally {
      C$2 = b2, fg = false;
    }
  }
  return null;
}
var jg = ta.ReactCurrentBatchConfig;
function kg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A$2({}, b2);
    a2 = a2.defaultProps;
    for (var c in a2)
      b2[c] === void 0 && (b2[c] = a2[c]);
    return b2;
  }
  return b2;
}
var lg = Tf(null), mg = null, ng = null, og = null;
function pg() {
  og = ng = mg = null;
}
function qg(a2) {
  var b2 = lg.current;
  E$3(lg);
  a2._currentValue = b2;
}
function rg(a2, b2, c) {
  for (; a2 !== null; ) {
    var d = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, d !== null && (d.childLanes |= b2)) : d !== null && (d.childLanes & b2) !== b2 && (d.childLanes |= b2);
    if (a2 === c)
      break;
    a2 = a2.return;
  }
}
function sg(a2, b2) {
  mg = a2;
  og = ng = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (tg = true), a2.firstContext = null);
}
function ug(a2) {
  var b2 = a2._currentValue;
  if (og !== a2)
    if (a2 = { context: a2, memoizedValue: b2, next: null }, ng === null) {
      if (mg === null)
        throw Error(p$4(308));
      ng = a2;
      mg.dependencies = { lanes: 0, firstContext: a2 };
    } else
      ng = ng.next = a2;
  return b2;
}
var vg = null, wg = false;
function xg(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function yg(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function zg(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a2, b2) {
  var c = a2.updateQueue;
  c !== null && (c = c.shared, Bg(a2) ? (a2 = c.interleaved, a2 === null ? (b2.next = b2, vg === null ? vg = [c] : vg.push(c)) : (b2.next = a2.next, a2.next = b2), c.interleaved = b2) : (a2 = c.pending, a2 === null ? b2.next = b2 : (b2.next = a2.next, a2.next = b2), c.pending = b2));
}
function Cg(a2, b2, c) {
  b2 = b2.updateQueue;
  if (b2 !== null && (b2 = b2.shared, (c & 4194240) !== 0)) {
    var d = b2.lanes;
    d &= a2.pendingLanes;
    c |= d;
    b2.lanes = c;
    Bc(a2, c);
  }
}
function Dg(a2, b2) {
  var c = a2.updateQueue, d = a2.alternate;
  if (d !== null && (d = d.updateQueue, c === d)) {
    var e2 = null, f2 = null;
    c = c.firstBaseUpdate;
    if (c !== null) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        f2 === null ? e2 = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (c !== null);
      f2 === null ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c = { baseState: d.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a2.updateQueue = c;
    return;
  }
  a2 = c.lastBaseUpdate;
  a2 === null ? c.firstBaseUpdate = b2 : a2.next = b2;
  c.lastBaseUpdate = b2;
}
function Eg(a2, b2, c, d) {
  var e2 = a2.updateQueue;
  wg = false;
  var f2 = e2.firstBaseUpdate, g = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (h2 !== null) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    g === null ? f2 = l2 : g.next = l2;
    g = k2;
    var n2 = a2.alternate;
    n2 !== null && (n2 = n2.updateQueue, h2 = n2.lastBaseUpdate, h2 !== g && (h2 === null ? n2.firstBaseUpdate = l2 : h2.next = l2, n2.lastBaseUpdate = k2));
  }
  if (f2 !== null) {
    var u2 = e2.baseState;
    g = 0;
    n2 = l2 = k2 = null;
    h2 = f2;
    do {
      var q2 = h2.lane, y2 = h2.eventTime;
      if ((d & q2) === q2) {
        n2 !== null && (n2 = n2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var m2 = a2, w2 = h2;
          q2 = b2;
          y2 = c;
          switch (w2.tag) {
            case 1:
              m2 = w2.payload;
              if (typeof m2 === "function") {
                u2 = m2.call(y2, u2, q2);
                break a;
              }
              u2 = m2;
              break a;
            case 3:
              m2.flags = m2.flags & -65537 | 128;
            case 0:
              m2 = w2.payload;
              q2 = typeof m2 === "function" ? m2.call(y2, u2, q2) : m2;
              if (q2 === null || q2 === void 0)
                break a;
              u2 = A$2({}, u2, q2);
              break a;
            case 2:
              wg = true;
          }
        }
        h2.callback !== null && h2.lane !== 0 && (a2.flags |= 64, q2 = e2.effects, q2 === null ? e2.effects = [h2] : q2.push(h2));
      } else
        y2 = { eventTime: y2, lane: q2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, n2 === null ? (l2 = n2 = y2, k2 = u2) : n2 = n2.next = y2, g |= q2;
      h2 = h2.next;
      if (h2 === null)
        if (h2 = e2.shared.pending, h2 === null)
          break;
        else
          q2 = h2, h2 = q2.next, q2.next = null, e2.lastBaseUpdate = q2, e2.shared.pending = null;
    } while (1);
    n2 === null && (k2 = u2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = n2;
    b2 = e2.shared.interleaved;
    if (b2 !== null) {
      e2 = b2;
      do
        g |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      f2 === null && (e2.shared.lanes = 0);
    Fg |= g;
    a2.lanes = g;
    a2.memoizedState = u2;
  }
}
function Gg(a2, b2, c) {
  a2 = b2.effects;
  b2.effects = null;
  if (a2 !== null)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d = a2[b2], e2 = d.callback;
      if (e2 !== null) {
        d.callback = null;
        d = c;
        if (typeof e2 !== "function")
          throw Error(p$4(191, e2));
        e2.call(d);
      }
    }
}
var Hg = new aa.Component().refs;
function Ig(a2, b2, c, d) {
  b2 = a2.memoizedState;
  c = c(d, b2);
  c = c === null || c === void 0 ? b2 : A$2({}, b2, c);
  a2.memoizedState = c;
  a2.lanes === 0 && (a2.updateQueue.baseState = c);
}
var Mg = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Ub(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c) {
  a2 = a2._reactInternals;
  var d = Jg(), e2 = Kg(a2), f2 = zg(d, e2);
  f2.payload = b2;
  c !== void 0 && c !== null && (f2.callback = c);
  Ag(a2, f2);
  b2 = Lg(a2, e2, d);
  b2 !== null && Cg(b2, a2, e2);
}, enqueueReplaceState: function(a2, b2, c) {
  a2 = a2._reactInternals;
  var d = Jg(), e2 = Kg(a2), f2 = zg(d, e2);
  f2.tag = 1;
  f2.payload = b2;
  c !== void 0 && c !== null && (f2.callback = c);
  Ag(a2, f2);
  b2 = Lg(a2, e2, d);
  b2 !== null && Cg(b2, a2, e2);
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c = Jg(), d = Kg(a2), e2 = zg(c, d);
  e2.tag = 2;
  b2 !== void 0 && b2 !== null && (e2.callback = b2);
  Ag(a2, e2);
  b2 = Lg(a2, d, c);
  b2 !== null && Cg(b2, a2, d);
} };
function Ng(a2, b2, c, d, e2, f2, g) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d, f2, g) : b2.prototype && b2.prototype.isPureReactComponent ? !He(c, d) || !He(e2, f2) : true;
}
function Og(a2, b2, c) {
  var d = false, e2 = Uf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = ug(f2) : (e2 = Yf(b2) ? Wf : H$1.current, d = b2.contextTypes, f2 = (d = d !== null && d !== void 0) ? Xf(a2, e2) : Uf);
  b2 = new b2(c, f2);
  a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Mg;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Pg(a2, b2, c, d) {
  a2 = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c, d);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c, d);
  b2.state !== a2 && Mg.enqueueReplaceState(b2, b2.state, null);
}
function Qg(a2, b2, c, d) {
  var e2 = a2.stateNode;
  e2.props = c;
  e2.state = a2.memoizedState;
  e2.refs = Hg;
  xg(a2);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e2.context = ug(f2) : (f2 = Yf(b2) ? Wf : H$1.current, e2.context = Xf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Ig(a2, b2, f2, c), e2.state = a2.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b2 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Mg.enqueueReplaceState(e2, e2.state, null), Eg(a2, c, e2, d), e2.state = a2.memoizedState);
  typeof e2.componentDidMount === "function" && (a2.flags |= 4194308);
}
var Rg = [], Sg = 0, Tg = null, Ug = 0, Vg = [], Wg = 0, Xg = null, Yg = 1, Zg = "";
function $g(a2, b2) {
  Rg[Sg++] = Ug;
  Rg[Sg++] = Tg;
  Tg = a2;
  Ug = b2;
}
function ah(a2, b2, c) {
  Vg[Wg++] = Yg;
  Vg[Wg++] = Zg;
  Vg[Wg++] = Xg;
  Xg = a2;
  var d = Yg;
  a2 = Zg;
  var e2 = 32 - nc(d) - 1;
  d &= ~(1 << e2);
  c += 1;
  var f2 = 32 - nc(b2) + e2;
  if (30 < f2) {
    var g = e2 - e2 % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e2 -= g;
    Yg = 1 << 32 - nc(b2) + e2 | c << e2 | d;
    Zg = f2 + a2;
  } else
    Yg = 1 << f2 | c << e2 | d, Zg = a2;
}
function bh(a2) {
  a2.return !== null && ($g(a2, 1), ah(a2, 1, 0));
}
function ch(a2) {
  for (; a2 === Tg; )
    Tg = Rg[--Sg], Rg[Sg] = null, Ug = Rg[--Sg], Rg[Sg] = null;
  for (; a2 === Xg; )
    Xg = Vg[--Wg], Vg[Wg] = null, Zg = Vg[--Wg], Vg[Wg] = null, Yg = Vg[--Wg], Vg[Wg] = null;
}
var dh = null, eh = null, I$1 = false, fh = null;
function gh(a2, b2) {
  var c = hh(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b2;
  c.return = a2;
  b2 = a2.deletions;
  b2 === null ? (a2.deletions = [c], a2.flags |= 16) : b2.push(c);
}
function ih(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c = a2.type;
      b2 = b2.nodeType !== 1 || c.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a2.stateNode = b2, dh = a2, eh = Kf(b2.firstChild), true) : false;
    case 6:
      return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, dh = a2, eh = null, true) : false;
    case 13:
      return b2 = b2.nodeType !== 8 ? null : b2, b2 !== null ? (c = Xg !== null ? { id: Yg, overflow: Zg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c, retryLane: 1073741824 }, c = hh(18, null, null, 0), c.stateNode = b2, c.return = a2, a2.child = c, dh = a2, eh = null, true) : false;
    default:
      return false;
  }
}
function jh(a2) {
  return (a2.mode & 1) !== 0 && (a2.flags & 128) === 0;
}
function kh(a2) {
  if (I$1) {
    var b2 = eh;
    if (b2) {
      var c = b2;
      if (!ih(a2, b2)) {
        if (jh(a2))
          throw Error(p$4(418));
        b2 = Kf(c.nextSibling);
        var d = dh;
        b2 && ih(a2, b2) ? gh(d, c) : (a2.flags = a2.flags & -4097 | 2, I$1 = false, dh = a2);
      }
    } else {
      if (jh(a2))
        throw Error(p$4(418));
      a2.flags = a2.flags & -4097 | 2;
      I$1 = false;
      dh = a2;
    }
  }
}
function lh(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  dh = a2;
}
function mh(a2) {
  if (a2 !== dh)
    return false;
  if (!I$1)
    return lh(a2), I$1 = true, false;
  var b2;
  (b2 = a2.tag !== 3) && !(b2 = a2.tag !== 5) && (b2 = a2.type, b2 = b2 !== "head" && b2 !== "body" && !Df(a2.type, a2.memoizedProps));
  if (b2 && (b2 = eh)) {
    if (jh(a2)) {
      for (a2 = eh; a2; )
        a2 = Kf(a2.nextSibling);
      throw Error(p$4(418));
    }
    for (; b2; )
      gh(a2, b2), b2 = Kf(b2.nextSibling);
  }
  lh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(p$4(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c = a2.data;
          if (c === "/$") {
            if (b2 === 0) {
              eh = Kf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            c !== "$" && c !== "$!" && c !== "$?" || b2++;
        }
        a2 = a2.nextSibling;
      }
      eh = null;
    }
  } else
    eh = dh ? Kf(a2.stateNode.nextSibling) : null;
  return true;
}
function nh() {
  eh = dh = null;
  I$1 = false;
}
function oh(a2) {
  fh === null ? fh = [a2] : fh.push(a2);
}
function ph(a2, b2, c) {
  a2 = c.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (c.tag !== 1)
          throw Error(p$4(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p$4(147, a2));
      var e2 = d, f2 = "" + a2;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        b3 === Hg && (b3 = e2.refs = {});
        a3 === null ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if (typeof a2 !== "string")
      throw Error(p$4(284));
    if (!c._owner)
      throw Error(p$4(290, a2));
  }
  return a2;
}
function qh(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$4(31, a2 === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function rh(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function sh(a2) {
  function b2(b3, c2) {
    if (a2) {
      var d2 = b3.deletions;
      d2 === null ? (b3.deletions = [c2], b3.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a2)
      return null;
    for (; d2 !== null; )
      b2(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); b3 !== null; )
      b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = th(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c2, d2) {
    b3.index = d2;
    if (!a2)
      return b3.flags |= 1048576, c2;
    d2 = b3.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c2 ? (b3.flags |= 2, c2) : d2;
    b3.flags |= 2;
    return c2;
  }
  function g(b3) {
    a2 && b3.alternate === null && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c2, d2) {
    if (b3 === null || b3.tag !== 6)
      return b3 = uh(c2, a3.mode, d2), b3.return = a3, b3;
    b3 = e2(b3, c2);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c2, d2) {
    var f3 = c2.type;
    if (f3 === wa)
      return n2(a3, b3, c2.props.children, d2, c2.key);
    if (b3 !== null && (b3.elementType === f3 || typeof f3 === "object" && f3 !== null && f3.$$typeof === Ga && rh(f3) === b3.type))
      return d2 = e2(b3, c2.props), d2.ref = ph(a3, b3, c2), d2.return = a3, d2;
    d2 = vh(c2.type, c2.key, c2.props, null, a3.mode, d2);
    d2.ref = ph(a3, b3, c2);
    d2.return = a3;
    return d2;
  }
  function l2(a3, b3, c2, d2) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c2.containerInfo || b3.stateNode.implementation !== c2.implementation)
      return b3 = wh(c2, a3.mode, d2), b3.return = a3, b3;
    b3 = e2(b3, c2.children || []);
    b3.return = a3;
    return b3;
  }
  function n2(a3, b3, c2, d2, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = xh(c2, a3.mode, d2, f3), b3.return = a3, b3;
    b3 = e2(b3, c2);
    b3.return = a3;
    return b3;
  }
  function u2(a3, b3, c2) {
    if (typeof b3 === "string" && b3 !== "" || typeof b3 === "number")
      return b3 = uh("" + b3, a3.mode, c2), b3.return = a3, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case ua:
          return c2 = vh(b3.type, b3.key, b3.props, null, a3.mode, c2), c2.ref = ph(a3, null, b3), c2.return = a3, c2;
        case va:
          return b3 = wh(b3, a3.mode, c2), b3.return = a3, b3;
        case Ga:
          var d2 = b3._init;
          return u2(a3, d2(b3._payload), c2);
      }
      if (db(b3) || Ja(b3))
        return b3 = xh(b3, a3.mode, c2, null), b3.return = a3, b3;
      qh(a3, b3);
    }
    return null;
  }
  function q2(a3, b3, c2, d2) {
    var e3 = b3 !== null ? b3.key : null;
    if (typeof c2 === "string" && c2 !== "" || typeof c2 === "number")
      return e3 !== null ? null : h2(a3, b3, "" + c2, d2);
    if (typeof c2 === "object" && c2 !== null) {
      switch (c2.$$typeof) {
        case ua:
          return c2.key === e3 ? k2(a3, b3, c2, d2) : null;
        case va:
          return c2.key === e3 ? l2(a3, b3, c2, d2) : null;
        case Ga:
          return e3 = c2._init, q2(a3, b3, e3(c2._payload), d2);
      }
      if (db(c2) || Ja(c2))
        return e3 !== null ? null : n2(a3, b3, c2, d2, null);
      qh(a3, c2);
    }
    return null;
  }
  function y2(a3, b3, c2, d2, e3) {
    if (typeof d2 === "string" && d2 !== "" || typeof d2 === "number")
      return a3 = a3.get(c2) || null, h2(b3, a3, "" + d2, e3);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case ua:
          return a3 = a3.get(d2.key === null ? c2 : d2.key) || null, k2(b3, a3, d2, e3);
        case va:
          return a3 = a3.get(d2.key === null ? c2 : d2.key) || null, l2(b3, a3, d2, e3);
        case Ga:
          var f3 = d2._init;
          return y2(a3, b3, c2, f3(d2._payload), e3);
      }
      if (db(d2) || Ja(d2))
        return a3 = a3.get(c2) || null, n2(b3, a3, d2, e3, null);
      qh(b3, d2);
    }
    return null;
  }
  function m2(e3, g2, h3, k3) {
    for (var l3 = null, n3 = null, r2 = g2, m3 = g2 = 0, x2 = null; r2 !== null && m3 < h3.length; m3++) {
      r2.index > m3 ? (x2 = r2, r2 = null) : x2 = r2.sibling;
      var v2 = q2(e3, r2, h3[m3], k3);
      if (v2 === null) {
        r2 === null && (r2 = x2);
        break;
      }
      a2 && r2 && v2.alternate === null && b2(e3, r2);
      g2 = f2(v2, g2, m3);
      n3 === null ? l3 = v2 : n3.sibling = v2;
      n3 = v2;
      r2 = x2;
    }
    if (m3 === h3.length)
      return c(e3, r2), I$1 && $g(e3, m3), l3;
    if (r2 === null) {
      for (; m3 < h3.length; m3++)
        r2 = u2(e3, h3[m3], k3), r2 !== null && (g2 = f2(r2, g2, m3), n3 === null ? l3 = r2 : n3.sibling = r2, n3 = r2);
      I$1 && $g(e3, m3);
      return l3;
    }
    for (r2 = d(e3, r2); m3 < h3.length; m3++)
      x2 = y2(r2, e3, m3, h3[m3], k3), x2 !== null && (a2 && x2.alternate !== null && r2.delete(x2.key === null ? m3 : x2.key), g2 = f2(x2, g2, m3), n3 === null ? l3 = x2 : n3.sibling = x2, n3 = x2);
    a2 && r2.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$1 && $g(e3, m3);
    return l3;
  }
  function w2(e3, g2, h3, k3) {
    var l3 = Ja(h3);
    if (typeof l3 !== "function")
      throw Error(p$4(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(p$4(151));
    for (var n3 = l3 = null, m3 = g2, r2 = g2 = 0, x2 = null, v2 = h3.next(); m3 !== null && !v2.done; r2++, v2 = h3.next()) {
      m3.index > r2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var w3 = q2(e3, m3, v2.value, k3);
      if (w3 === null) {
        m3 === null && (m3 = x2);
        break;
      }
      a2 && m3 && w3.alternate === null && b2(e3, m3);
      g2 = f2(w3, g2, r2);
      n3 === null ? l3 = w3 : n3.sibling = w3;
      n3 = w3;
      m3 = x2;
    }
    if (v2.done)
      return c(e3, m3), I$1 && $g(e3, r2), l3;
    if (m3 === null) {
      for (; !v2.done; r2++, v2 = h3.next())
        v2 = u2(e3, v2.value, k3), v2 !== null && (g2 = f2(v2, g2, r2), n3 === null ? l3 = v2 : n3.sibling = v2, n3 = v2);
      I$1 && $g(e3, r2);
      return l3;
    }
    for (m3 = d(e3, m3); !v2.done; r2++, v2 = h3.next())
      v2 = y2(m3, e3, r2, v2.value, k3), v2 !== null && (a2 && v2.alternate !== null && m3.delete(v2.key === null ? r2 : v2.key), g2 = f2(v2, g2, r2), n3 === null ? l3 = v2 : n3.sibling = v2, n3 = v2);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$1 && $g(e3, r2);
    return l3;
  }
  function J2(a3, d2, f3, h3) {
    typeof f3 === "object" && f3 !== null && f3.type === wa && f3.key === null && (f3 = f3.props.children);
    if (typeof f3 === "object" && f3 !== null) {
      switch (f3.$$typeof) {
        case ua:
          a: {
            for (var k3 = f3.key, l3 = d2; l3 !== null; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === wa) {
                  if (l3.tag === 7) {
                    c(a3, l3.sibling);
                    d2 = e2(l3, f3.props.children);
                    d2.return = a3;
                    a3 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga && rh(k3) === l3.type) {
                  c(a3, l3.sibling);
                  d2 = e2(l3, f3.props);
                  d2.ref = ph(a3, l3, f3);
                  d2.return = a3;
                  a3 = d2;
                  break a;
                }
                c(a3, l3);
                break;
              } else
                b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === wa ? (d2 = xh(f3.props.children, a3.mode, h3, f3.key), d2.return = a3, a3 = d2) : (h3 = vh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = ph(a3, d2, f3), h3.return = a3, a3 = h3);
          }
          return g(a3);
        case va:
          a: {
            for (l3 = f3.key; d2 !== null; ) {
              if (d2.key === l3)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a3, d2.sibling);
                  d2 = e2(d2, f3.children || []);
                  d2.return = a3;
                  a3 = d2;
                  break a;
                } else {
                  c(a3, d2);
                  break;
                }
              else
                b2(a3, d2);
              d2 = d2.sibling;
            }
            d2 = wh(f3, a3.mode, h3);
            d2.return = a3;
            a3 = d2;
          }
          return g(a3);
        case Ga:
          return l3 = f3._init, J2(a3, d2, l3(f3._payload), h3);
      }
      if (db(f3))
        return m2(a3, d2, f3, h3);
      if (Ja(f3))
        return w2(a3, d2, f3, h3);
      qh(a3, f3);
    }
    return typeof f3 === "string" && f3 !== "" || typeof f3 === "number" ? (f3 = "" + f3, d2 !== null && d2.tag === 6 ? (c(a3, d2.sibling), d2 = e2(d2, f3), d2.return = a3, a3 = d2) : (c(a3, d2), d2 = uh(f3, a3.mode, h3), d2.return = a3, a3 = d2), g(a3)) : c(a3, d2);
  }
  return J2;
}
var yh = sh(true), zh = sh(false), Ah = {}, Bh = Tf(Ah), Ch = Tf(Ah), Dh = Tf(Ah);
function Eh(a2) {
  if (a2 === Ah)
    throw Error(p$4(174));
  return a2;
}
function Fh(a2, b2) {
  G(Dh, b2);
  G(Ch, a2);
  G(Bh, Ah);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : kb(null, "");
      break;
    default:
      a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = kb(b2, a2);
  }
  E$3(Bh);
  G(Bh, b2);
}
function Gh() {
  E$3(Bh);
  E$3(Ch);
  E$3(Dh);
}
function Hh(a2) {
  Eh(Dh.current);
  var b2 = Eh(Bh.current);
  var c = kb(b2, a2.type);
  b2 !== c && (G(Ch, a2), G(Bh, c));
}
function Ih(a2) {
  Ch.current === a2 && (E$3(Bh), E$3(Ch));
}
var K = Tf(0);
function Jh(a2) {
  for (var b2 = a2; b2 !== null; ) {
    if (b2.tag === 13) {
      var c = b2.memoizedState;
      if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 128) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Kh = [];
function Lh() {
  for (var a2 = 0; a2 < Kh.length; a2++)
    Kh[a2]._workInProgressVersionPrimary = null;
  Kh.length = 0;
}
var Mh = ta.ReactCurrentDispatcher, Nh = ta.ReactCurrentBatchConfig, Oh = 0, L$2 = null, M$1 = null, N$2 = null, Ph = false, Qh = false, Rh = 0, Sh = 0;
function O$1() {
  throw Error(p$4(321));
}
function Th(a2, b2) {
  if (b2 === null)
    return false;
  for (var c = 0; c < b2.length && c < a2.length; c++)
    if (!Ge(a2[c], b2[c]))
      return false;
  return true;
}
function Uh(a2, b2, c, d, e2, f2) {
  Oh = f2;
  L$2 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Mh.current = a2 === null || a2.memoizedState === null ? Vh : Wh;
  a2 = c(d, e2);
  if (Qh) {
    f2 = 0;
    do {
      Qh = false;
      Rh = 0;
      if (25 <= f2)
        throw Error(p$4(301));
      f2 += 1;
      N$2 = M$1 = null;
      b2.updateQueue = null;
      Mh.current = Xh;
      a2 = c(d, e2);
    } while (Qh);
  }
  Mh.current = Yh;
  b2 = M$1 !== null && M$1.next !== null;
  Oh = 0;
  N$2 = M$1 = L$2 = null;
  Ph = false;
  if (b2)
    throw Error(p$4(300));
  return a2;
}
function Zh() {
  var a2 = Rh !== 0;
  Rh = 0;
  return a2;
}
function $h() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  N$2 === null ? L$2.memoizedState = N$2 = a2 : N$2 = N$2.next = a2;
  return N$2;
}
function ai() {
  if (M$1 === null) {
    var a2 = L$2.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = M$1.next;
  var b2 = N$2 === null ? L$2.memoizedState : N$2.next;
  if (b2 !== null)
    N$2 = b2, M$1 = a2;
  else {
    if (a2 === null)
      throw Error(p$4(310));
    M$1 = a2;
    a2 = { memoizedState: M$1.memoizedState, baseState: M$1.baseState, baseQueue: M$1.baseQueue, queue: M$1.queue, next: null };
    N$2 === null ? L$2.memoizedState = N$2 = a2 : N$2 = N$2.next = a2;
  }
  return N$2;
}
function bi(a2, b2) {
  return typeof b2 === "function" ? b2(a2) : b2;
}
function ci(a2) {
  var b2 = ai(), c = b2.queue;
  if (c === null)
    throw Error(p$4(311));
  c.lastRenderedReducer = a2;
  var d = M$1, e2 = d.baseQueue, f2 = c.pending;
  if (f2 !== null) {
    if (e2 !== null) {
      var g = e2.next;
      e2.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e2 = f2;
    c.pending = null;
  }
  if (e2 !== null) {
    f2 = e2.next;
    d = d.baseState;
    var h2 = g = null, k2 = null, l2 = f2;
    do {
      var n2 = l2.lane;
      if ((Oh & n2) === n2)
        k2 !== null && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a2(d, l2.action);
      else {
        var u2 = {
          lane: n2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        k2 === null ? (h2 = k2 = u2, g = d) : k2 = k2.next = u2;
        L$2.lanes |= n2;
        Fg |= n2;
      }
      l2 = l2.next;
    } while (l2 !== null && l2 !== f2);
    k2 === null ? g = d : k2.next = h2;
    Ge(d, b2.memoizedState) || (tg = true);
    b2.memoizedState = d;
    b2.baseState = g;
    b2.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a2 = c.interleaved;
  if (a2 !== null) {
    e2 = a2;
    do
      f2 = e2.lane, L$2.lanes |= f2, Fg |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else
    e2 === null && (c.lanes = 0);
  return [b2.memoizedState, c.dispatch];
}
function di(a2) {
  var b2 = ai(), c = b2.queue;
  if (c === null)
    throw Error(p$4(311));
  c.lastRenderedReducer = a2;
  var d = c.dispatch, e2 = c.pending, f2 = b2.memoizedState;
  if (e2 !== null) {
    c.pending = null;
    var g = e2 = e2.next;
    do
      f2 = a2(f2, g.action), g = g.next;
    while (g !== e2);
    Ge(f2, b2.memoizedState) || (tg = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function ei() {
}
function fi(a2, b2) {
  var c = L$2, d = ai(), e2 = b2(), f2 = !Ge(d.memoizedState, e2);
  f2 && (d.memoizedState = e2, tg = true);
  d = d.queue;
  gi(hi.bind(null, c, d, a2), [a2]);
  if (d.getSnapshot !== b2 || f2 || N$2 !== null && N$2.memoizedState.tag & 1) {
    c.flags |= 2048;
    ii(9, ji.bind(null, c, d, e2, b2), void 0, null);
    if (P === null)
      throw Error(p$4(349));
    (Oh & 30) !== 0 || ki(c, b2, e2);
  }
  return e2;
}
function ki(a2, b2, c) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c };
  b2 = L$2.updateQueue;
  b2 === null ? (b2 = { lastEffect: null, stores: null }, L$2.updateQueue = b2, b2.stores = [a2]) : (c = b2.stores, c === null ? b2.stores = [a2] : c.push(a2));
}
function ji(a2, b2, c, d) {
  b2.value = c;
  b2.getSnapshot = d;
  li(b2) && Lg(a2, 1, -1);
}
function hi(a2, b2, c) {
  return c(function() {
    li(b2) && Lg(a2, 1, -1);
  });
}
function li(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c = b2();
    return !Ge(a2, c);
  } catch (d) {
    return true;
  }
}
function mi(a2) {
  var b2 = $h();
  typeof a2 === "function" && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ni.bind(null, L$2, a2);
  return [b2.memoizedState, a2];
}
function ii(a2, b2, c, d) {
  a2 = { tag: a2, create: b2, destroy: c, deps: d, next: null };
  b2 = L$2.updateQueue;
  b2 === null ? (b2 = { lastEffect: null, stores: null }, L$2.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c = b2.lastEffect, c === null ? b2.lastEffect = a2.next = a2 : (d = c.next, c.next = a2, a2.next = d, b2.lastEffect = a2));
  return a2;
}
function oi() {
  return ai().memoizedState;
}
function pi(a2, b2, c, d) {
  var e2 = $h();
  L$2.flags |= a2;
  e2.memoizedState = ii(1 | b2, c, void 0, d === void 0 ? null : d);
}
function qi(a2, b2, c, d) {
  var e2 = ai();
  d = d === void 0 ? null : d;
  var f2 = void 0;
  if (M$1 !== null) {
    var g = M$1.memoizedState;
    f2 = g.destroy;
    if (d !== null && Th(d, g.deps)) {
      e2.memoizedState = ii(b2, c, f2, d);
      return;
    }
  }
  L$2.flags |= a2;
  e2.memoizedState = ii(1 | b2, c, f2, d);
}
function ri(a2, b2) {
  return pi(8390656, 8, a2, b2);
}
function gi(a2, b2) {
  return qi(2048, 8, a2, b2);
}
function si(a2, b2) {
  return qi(4, 2, a2, b2);
}
function ti(a2, b2) {
  return qi(4, 4, a2, b2);
}
function ui(a2, b2) {
  if (typeof b2 === "function")
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function vi(a2, b2, c) {
  c = c !== null && c !== void 0 ? c.concat([a2]) : null;
  return qi(4, 4, ui.bind(null, b2, a2), c);
}
function wi() {
}
function xi(a2, b2) {
  var c = ai();
  b2 = b2 === void 0 ? null : b2;
  var d = c.memoizedState;
  if (d !== null && b2 !== null && Th(b2, d[1]))
    return d[0];
  c.memoizedState = [a2, b2];
  return a2;
}
function yi(a2, b2) {
  var c = ai();
  b2 = b2 === void 0 ? null : b2;
  var d = c.memoizedState;
  if (d !== null && b2 !== null && Th(b2, d[1]))
    return d[0];
  a2 = a2();
  c.memoizedState = [a2, b2];
  return a2;
}
function zi(a2, b2, c) {
  if ((Oh & 21) === 0)
    return a2.baseState && (a2.baseState = false, tg = true), a2.memoizedState = c;
  Ge(c, b2) || (c = xc(), L$2.lanes |= c, Fg |= c, a2.baseState = true);
  return b2;
}
function Ai(a2, b2) {
  var c = C$2;
  C$2 = c !== 0 && 4 > c ? c : 4;
  a2(true);
  var d = Nh.transition;
  Nh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C$2 = c, Nh.transition = d;
  }
}
function Bi() {
  return ai().memoizedState;
}
function Ci(a2, b2, c) {
  var d = Kg(a2);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  Di(a2) ? Ei(b2, c) : (Fi(a2, b2, c), c = Jg(), a2 = Lg(a2, d, c), a2 !== null && Gi(a2, b2, d));
}
function ni(a2, b2, c) {
  var d = Kg(a2), e2 = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Di(a2))
    Ei(b2, e2);
  else {
    Fi(a2, b2, e2);
    var f2 = a2.alternate;
    if (a2.lanes === 0 && (f2 === null || f2.lanes === 0) && (f2 = b2.lastRenderedReducer, f2 !== null))
      try {
        var g = b2.lastRenderedState, h2 = f2(g, c);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (Ge(h2, g))
          return;
      } catch (k2) {
      } finally {
      }
    c = Jg();
    a2 = Lg(a2, d, c);
    a2 !== null && Gi(a2, b2, d);
  }
}
function Di(a2) {
  var b2 = a2.alternate;
  return a2 === L$2 || b2 !== null && b2 === L$2;
}
function Ei(a2, b2) {
  Qh = Ph = true;
  var c = a2.pending;
  c === null ? b2.next = b2 : (b2.next = c.next, c.next = b2);
  a2.pending = b2;
}
function Fi(a2, b2, c) {
  Bg(a2) ? (a2 = b2.interleaved, a2 === null ? (c.next = c, vg === null ? vg = [b2] : vg.push(b2)) : (c.next = a2.next, a2.next = c), b2.interleaved = c) : (a2 = b2.pending, a2 === null ? c.next = c : (c.next = a2.next, a2.next = c), b2.pending = c);
}
function Gi(a2, b2, c) {
  if ((c & 4194240) !== 0) {
    var d = b2.lanes;
    d &= a2.pendingLanes;
    c |= d;
    b2.lanes = c;
    Bc(a2, c);
  }
}
var Yh = { readContext: ug, useCallback: O$1, useContext: O$1, useEffect: O$1, useImperativeHandle: O$1, useInsertionEffect: O$1, useLayoutEffect: O$1, useMemo: O$1, useReducer: O$1, useRef: O$1, useState: O$1, useDebugValue: O$1, useDeferredValue: O$1, useTransition: O$1, useMutableSource: O$1, useSyncExternalStore: O$1, useId: O$1, unstable_isNewReconciler: false }, Vh = { readContext: ug, useCallback: function(a2, b2) {
  $h().memoizedState = [a2, b2 === void 0 ? null : b2];
  return a2;
}, useContext: ug, useEffect: ri, useImperativeHandle: function(a2, b2, c) {
  c = c !== null && c !== void 0 ? c.concat([a2]) : null;
  return pi(4194308, 4, ui.bind(null, b2, a2), c);
}, useLayoutEffect: function(a2, b2) {
  return pi(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return pi(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c = $h();
  b2 = b2 === void 0 ? null : b2;
  a2 = a2();
  c.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c) {
  var d = $h();
  b2 = c !== void 0 ? c(b2) : b2;
  d.memoizedState = d.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d.queue = a2;
  a2 = a2.dispatch = Ci.bind(null, L$2, a2);
  return [d.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = $h();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: mi, useDebugValue: wi, useDeferredValue: function(a2) {
  return $h().memoizedState = a2;
}, useTransition: function() {
  var a2 = mi(false), b2 = a2[0];
  a2 = Ai.bind(null, a2[1]);
  $h().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c) {
  var d = L$2, e2 = $h();
  if (I$1) {
    if (c === void 0)
      throw Error(p$4(407));
    c = c();
  } else {
    c = b2();
    if (P === null)
      throw Error(p$4(349));
    (Oh & 30) !== 0 || ki(d, b2, c);
  }
  e2.memoizedState = c;
  var f2 = { value: c, getSnapshot: b2 };
  e2.queue = f2;
  ri(hi.bind(null, d, f2, a2), [a2]);
  d.flags |= 2048;
  ii(9, ji.bind(null, d, f2, c, b2), void 0, null);
  return c;
}, useId: function() {
  var a2 = $h(), b2 = P.identifierPrefix;
  if (I$1) {
    var c = Zg;
    var d = Yg;
    c = (d & ~(1 << 32 - nc(d) - 1)).toString(32) + c;
    b2 = ":" + b2 + "R" + c;
    c = Rh++;
    0 < c && (b2 += "H" + c.toString(32));
    b2 += ":";
  } else
    c = Sh++, b2 = ":" + b2 + "r" + c.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Wh = {
  readContext: ug,
  useCallback: xi,
  useContext: ug,
  useEffect: gi,
  useImperativeHandle: vi,
  useInsertionEffect: si,
  useLayoutEffect: ti,
  useMemo: yi,
  useReducer: ci,
  useRef: oi,
  useState: function() {
    return ci(bi);
  },
  useDebugValue: wi,
  useDeferredValue: function(a2) {
    var b2 = ai();
    return zi(b2, M$1.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = ci(bi)[0], b2 = ai().memoizedState;
    return [a2, b2];
  },
  useMutableSource: ei,
  useSyncExternalStore: fi,
  useId: Bi,
  unstable_isNewReconciler: false
}, Xh = { readContext: ug, useCallback: xi, useContext: ug, useEffect: gi, useImperativeHandle: vi, useInsertionEffect: si, useLayoutEffect: ti, useMemo: yi, useReducer: di, useRef: oi, useState: function() {
  return di(bi);
}, useDebugValue: wi, useDeferredValue: function(a2) {
  var b2 = ai();
  return M$1 === null ? b2.memoizedState = a2 : zi(b2, M$1.memoizedState, a2);
}, useTransition: function() {
  var a2 = di(bi)[0], b2 = ai().memoizedState;
  return [a2, b2];
}, useMutableSource: ei, useSyncExternalStore: fi, useId: Bi, unstable_isNewReconciler: false };
function Hi(a2, b2) {
  try {
    var c = "", d = b2;
    do
      c += Oa(d), d = d.return;
    while (d);
    var e2 = c;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2 };
}
function Ii(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ji = typeof WeakMap === "function" ? WeakMap : Map;
function Ki(a2, b2, c) {
  c = zg(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b2.value;
  c.callback = function() {
    Li || (Li = true, Mi = d);
    Ii(a2, b2);
  };
  return c;
}
function Ni(a2, b2, c) {
  c = zg(-1, c);
  c.tag = 3;
  var d = a2.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e2 = b2.value;
    c.payload = function() {
      return d(e2);
    };
    c.callback = function() {
      Ii(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c.callback = function() {
    Ii(a2, b2);
    typeof d !== "function" && (Oi === null ? Oi = /* @__PURE__ */ new Set([this]) : Oi.add(this));
    var c2 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: c2 !== null ? c2 : "" });
  });
  return c;
}
function Pi(a2, b2, c) {
  var d = a2.pingCache;
  if (d === null) {
    d = a2.pingCache = new Ji();
    var e2 = /* @__PURE__ */ new Set();
    d.set(b2, e2);
  } else
    e2 = d.get(b2), e2 === void 0 && (e2 = /* @__PURE__ */ new Set(), d.set(b2, e2));
  e2.has(c) || (e2.add(c), a2 = Qi.bind(null, a2, b2, c), b2.then(a2, a2));
}
function Ri(a2) {
  do {
    var b2;
    if (b2 = a2.tag === 13)
      b2 = a2.memoizedState, b2 = b2 !== null ? b2.dehydrated !== null ? true : false : true;
    if (b2)
      return a2;
    a2 = a2.return;
  } while (a2 !== null);
  return null;
}
function Si(a2, b2, c, d, e2) {
  if ((a2.mode & 1) === 0)
    return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (b2 = zg(-1, 1), b2.tag = 2, Ag(c, b2))), c.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Ti, Ui, Vi, Wi;
Ti = function(a2, b2) {
  for (var c = b2.child; c !== null; ) {
    if (c.tag === 5 || c.tag === 6)
      a2.appendChild(c.stateNode);
    else if (c.tag !== 4 && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b2)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b2)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Ui = function() {
};
Vi = function(a2, b2, c, d) {
  var e2 = a2.memoizedProps;
  if (e2 !== d) {
    a2 = b2.stateNode;
    Eh(Bh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e2 = Xa(a2, e2);
        d = Xa(a2, d);
        f2 = [];
        break;
      case "select":
        e2 = A$2({}, e2, { value: void 0 });
        d = A$2({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = fb(a2, e2);
        d = fb(a2, d);
        f2 = [];
        break;
      default:
        typeof e2.onClick !== "function" && typeof d.onClick === "function" && (a2.onclick = Af);
    }
    tb(c, d);
    var g;
    c = null;
    for (l2 in e2)
      if (!d.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && e2[l2] != null)
        if (l2 === "style") {
          var h2 = e2[l2];
          for (g in h2)
            h2.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h2 = e2 != null ? e2[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h2 && (k2 != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g in h2)
              !h2.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2)
              k2.hasOwnProperty(g) && h2[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else
            c || (f2 || (f2 = []), f2.push(l2, c)), c = k2;
        else
          l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ea.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && D("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Wi = function(a2, b2, c, d) {
  c !== d && (b2.flags |= 4);
};
function Xi(a2, b2) {
  if (!I$1)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c = null; b2 !== null; )
          b2.alternate !== null && (c = b2), b2 = b2.sibling;
        c === null ? a2.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a2.tail;
        for (var d = null; c !== null; )
          c.alternate !== null && (d = c), c = c.sibling;
        d === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d.sibling = null;
    }
}
function Q$1(a2) {
  var b2 = a2.alternate !== null && a2.alternate.child === a2.child, c = 0, d = 0;
  if (b2)
    for (var e2 = a2.child; e2 !== null; )
      c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags & 14680064, d |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else
    for (e2 = a2.child; e2 !== null; )
      c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags, d |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d;
  a2.childLanes = c;
  return b2;
}
function Yi(a2, b2, c) {
  var d = b2.pendingProps;
  ch(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Q$1(b2), null;
    case 1:
      return Yf(b2.type) && Zf(), Q$1(b2), null;
    case 3:
      d = b2.stateNode;
      Gh();
      E$3(Vf);
      E$3(H$1);
      Lh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (a2 === null || a2.child === null)
        mh(b2) ? b2.flags |= 4 : a2 === null || a2.memoizedState.isDehydrated && (b2.flags & 256) === 0 || (b2.flags |= 1024, fh !== null && (Zi(fh), fh = null));
      Ui(a2, b2);
      Q$1(b2);
      return null;
    case 5:
      Ih(b2);
      var e2 = Eh(Dh.current);
      c = b2.type;
      if (a2 !== null && b2.stateNode != null)
        Vi(a2, b2, c, d, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d) {
          if (b2.stateNode === null)
            throw Error(p$4(166));
          Q$1(b2);
          return null;
        }
        a2 = Eh(Bh.current);
        if (mh(b2)) {
          d = b2.stateNode;
          c = b2.type;
          var f2 = b2.memoizedProps;
          d[Nf] = b2;
          d[Of] = f2;
          a2 = (b2.mode & 1) !== 0;
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < kf.length; e2++)
                D(kf[e2], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D("error", d);
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Ya(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              gb(d, f2), D("invalid", d);
          }
          tb(c, f2);
          e2 = null;
          for (var g in f2)
            if (f2.hasOwnProperty(g)) {
              var h2 = f2[g];
              g === "children" ? typeof h2 === "string" ? d.textContent !== h2 && (f2.suppressHydrationWarning !== true && zf(d.textContent, h2, a2), e2 = ["children", h2]) : typeof h2 === "number" && d.textContent !== "" + h2 && (f2.suppressHydrationWarning !== true && zf(d.textContent, h2, a2), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g) && h2 != null && g === "onScroll" && D("scroll", d);
            }
          switch (c) {
            case "input":
              Ua(d);
              cb(d, f2, true);
              break;
            case "textarea":
              Ua(d);
              ib(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d.onclick = Af);
          }
          d = e2;
          b2.updateQueue = d;
          d !== null && (b2.flags |= 4);
        } else {
          g = e2.nodeType === 9 ? e2 : e2.ownerDocument;
          a2 === "http://www.w3.org/1999/xhtml" && (a2 = jb(c));
          a2 === "http://www.w3.org/1999/xhtml" ? c === "script" ? (a2 = g.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : typeof d.is === "string" ? a2 = g.createElement(c, { is: d.is }) : (a2 = g.createElement(c), c === "select" && (g = a2, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a2 = g.createElementNS(a2, c);
          a2[Nf] = b2;
          a2[Of] = d;
          Ti(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g = ub(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a2);
                D("close", a2);
                e2 = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a2);
                e2 = d;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < kf.length; e2++)
                  D(kf[e2], a2);
                e2 = d;
                break;
              case "source":
                D("error", a2);
                e2 = d;
                break;
              case "img":
              case "image":
              case "link":
                D("error", a2);
                D("load", a2);
                e2 = d;
                break;
              case "details":
                D("toggle", a2);
                e2 = d;
                break;
              case "input":
                Ya(a2, d);
                e2 = Xa(a2, d);
                D("invalid", a2);
                break;
              case "option":
                e2 = d;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d.multiple };
                e2 = A$2({}, d, { value: void 0 });
                D("invalid", a2);
                break;
              case "textarea":
                gb(a2, d);
                e2 = fb(a2, d);
                D("invalid", a2);
                break;
              default:
                e2 = d;
            }
            tb(c, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                f2 === "style" ? rb(a2, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && mb(a2, k2)) : f2 === "children" ? typeof k2 === "string" ? (c !== "textarea" || k2 !== "") && nb(a2, k2) : typeof k2 === "number" && nb(a2, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ea.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && D("scroll", a2) : k2 != null && sa(a2, f2, k2, g));
              }
            switch (c) {
              case "input":
                Ua(a2);
                cb(a2, d, false);
                break;
              case "textarea":
                Ua(a2);
                ib(a2);
                break;
              case "option":
                d.value != null && a2.setAttribute("value", "" + Ra(d.value));
                break;
              case "select":
                a2.multiple = !!d.multiple;
                f2 = d.value;
                f2 != null ? eb(a2, !!d.multiple, f2, false) : d.defaultValue != null && eb(a2, !!d.multiple, d.defaultValue, true);
                break;
              default:
                typeof e2.onClick === "function" && (a2.onclick = Af);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 512, b2.flags |= 2097152);
      }
      Q$1(b2);
      return null;
    case 6:
      if (a2 && b2.stateNode != null)
        Wi(a2, b2, a2.memoizedProps, d);
      else {
        if (typeof d !== "string" && b2.stateNode === null)
          throw Error(p$4(166));
        c = Eh(Dh.current);
        Eh(Bh.current);
        if (mh(b2)) {
          d = b2.stateNode;
          c = b2.memoizedProps;
          d[Nf] = b2;
          if (f2 = d.nodeValue !== c) {
            if (a2 = dh, a2 !== null)
              switch (a2.tag) {
                case 3:
                  zf(d.nodeValue, c, (a2.mode & 1) !== 0);
                  break;
                case 5:
                  a2.memoizedProps.suppressHydrationWarning !== true && zf(d.nodeValue, c, (a2.mode & 1) !== 0);
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[Nf] = b2, b2.stateNode = d;
      }
      Q$1(b2);
      return null;
    case 13:
      E$3(K);
      d = b2.memoizedState;
      if (I$1 && eh !== null && (b2.mode & 1) !== 0 && (b2.flags & 128) === 0) {
        for (d = eh; d; )
          d = Kf(d.nextSibling);
        nh();
        b2.flags |= 98560;
        return b2;
      }
      if (d !== null && d.dehydrated !== null) {
        d = mh(b2);
        if (a2 === null) {
          if (!d)
            throw Error(p$4(318));
          d = b2.memoizedState;
          d = d !== null ? d.dehydrated : null;
          if (!d)
            throw Error(p$4(317));
          d[Nf] = b2;
        } else
          nh(), (b2.flags & 128) === 0 && (b2.memoizedState = null), b2.flags |= 4;
        Q$1(b2);
        return null;
      }
      fh !== null && (Zi(fh), fh = null);
      if ((b2.flags & 128) !== 0)
        return b2.lanes = c, b2;
      d = d !== null;
      c = false;
      a2 === null ? mh(b2) : c = a2.memoizedState !== null;
      d !== c && d && (b2.child.flags |= 8192, (b2.mode & 1) !== 0 && (a2 === null || (K.current & 1) !== 0 ? R === 0 && (R = 3) : $i()));
      b2.updateQueue !== null && (b2.flags |= 4);
      Q$1(b2);
      return null;
    case 4:
      return Gh(), Ui(a2, b2), a2 === null && rf(b2.stateNode.containerInfo), Q$1(b2), null;
    case 10:
      return qg(b2.type._context), Q$1(b2), null;
    case 17:
      return Yf(b2.type) && Zf(), Q$1(b2), null;
    case 19:
      E$3(K);
      f2 = b2.memoizedState;
      if (f2 === null)
        return Q$1(b2), null;
      d = (b2.flags & 128) !== 0;
      g = f2.rendering;
      if (g === null)
        if (d)
          Xi(f2, false);
        else {
          if (R !== 0 || a2 !== null && (a2.flags & 128) !== 0)
            for (a2 = b2.child; a2 !== null; ) {
              g = Jh(a2);
              if (g !== null) {
                b2.flags |= 128;
                Xi(f2, false);
                d = g.updateQueue;
                d !== null && (b2.updateQueue = d, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d = c;
                for (c = b2.child; c !== null; )
                  f2 = c, a2 = d, f2.flags &= 14680066, g = f2.alternate, g === null ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a2 = g.dependencies, f2.dependencies = a2 === null ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c = c.sibling;
                G(K, K.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          f2.tail !== null && B() > aj && (b2.flags |= 128, d = true, Xi(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d)
          if (a2 = Jh(g), a2 !== null) {
            if (b2.flags |= 128, d = true, c = a2.updateQueue, c !== null && (b2.updateQueue = c, b2.flags |= 4), Xi(f2, true), f2.tail === null && f2.tailMode === "hidden" && !g.alternate && !I$1)
              return Q$1(b2), null;
          } else
            2 * B() - f2.renderingStartTime > aj && c !== 1073741824 && (b2.flags |= 128, d = true, Xi(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b2.child, b2.child = g) : (c = f2.last, c !== null ? c.sibling = g : b2.child = g, f2.last = g);
      }
      if (f2.tail !== null)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c = K.current, G(K, d ? c & 1 | 2 : c & 1), b2;
      Q$1(b2);
      return null;
    case 22:
    case 23:
      return bj(), d = b2.memoizedState !== null, a2 !== null && a2.memoizedState !== null !== d && (b2.flags |= 8192), d && (b2.mode & 1) !== 0 ? (cj & 1073741824) !== 0 && (Q$1(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : Q$1(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$4(156, b2.tag));
}
var dj = ta.ReactCurrentOwner, tg = false;
function ej(a2, b2, c, d) {
  b2.child = a2 === null ? zh(b2, null, c, d) : yh(b2, a2.child, c, d);
}
function fj(a2, b2, c, d, e2) {
  c = c.render;
  var f2 = b2.ref;
  sg(b2, e2);
  d = Uh(a2, b2, c, d, f2, e2);
  c = Zh();
  if (a2 !== null && !tg)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, gj(a2, b2, e2);
  I$1 && c && bh(b2);
  b2.flags |= 1;
  ej(a2, b2, d, e2);
  return b2.child;
}
function hj(a2, b2, c, d, e2) {
  if (a2 === null) {
    var f2 = c.type;
    if (typeof f2 === "function" && !ij(f2) && f2.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
      return b2.tag = 15, b2.type = f2, jj(a2, b2, f2, d, e2);
    a2 = vh(c.type, null, d, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if ((a2.lanes & e2) === 0) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = c !== null ? c : He;
    if (c(g, d) && a2.ref === b2.ref)
      return gj(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = th(f2, d);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function jj(a2, b2, c, d, e2) {
  if (a2 !== null) {
    var f2 = a2.memoizedProps;
    if (He(f2, d) && a2.ref === b2.ref)
      if (tg = false, b2.pendingProps = d = f2, (a2.lanes & e2) !== 0)
        (a2.flags & 131072) !== 0 && (tg = true);
      else
        return b2.lanes = a2.lanes, gj(a2, b2, e2);
  }
  return kj(a2, b2, c, d, e2);
}
function lj(a2, b2, c) {
  var d = b2.pendingProps, e2 = d.children, f2 = a2 !== null ? a2.memoizedState : null;
  if (d.mode === "hidden")
    if ((b2.mode & 1) === 0)
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(mj, cj), cj |= c;
    else if ((c & 1073741824) !== 0)
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, d = f2 !== null ? f2.baseLanes : c, G(mj, cj), cj |= d;
    else
      return a2 = f2 !== null ? f2.baseLanes | c : c, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G(mj, cj), cj |= a2, null;
  else
    f2 !== null ? (d = f2.baseLanes | c, b2.memoizedState = null) : d = c, G(mj, cj), cj |= d;
  ej(a2, b2, e2, c);
  return b2.child;
}
function nj(a2, b2) {
  var c = b2.ref;
  if (a2 === null && c !== null || a2 !== null && a2.ref !== c)
    b2.flags |= 512, b2.flags |= 2097152;
}
function kj(a2, b2, c, d, e2) {
  var f2 = Yf(c) ? Wf : H$1.current;
  f2 = Xf(b2, f2);
  sg(b2, e2);
  c = Uh(a2, b2, c, d, f2, e2);
  d = Zh();
  if (a2 !== null && !tg)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, gj(a2, b2, e2);
  I$1 && d && bh(b2);
  b2.flags |= 1;
  ej(a2, b2, c, e2);
  return b2.child;
}
function oj(a2, b2, c, d, e2) {
  if (Yf(c)) {
    var f2 = true;
    bg(b2);
  } else
    f2 = false;
  sg(b2, e2);
  if (b2.stateNode === null)
    a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Og(b2, c, d), Qg(b2, c, d, e2), d = true;
  else if (a2 === null) {
    var g = b2.stateNode, h2 = b2.memoizedProps;
    g.props = h2;
    var k2 = g.context, l2 = c.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = ug(l2) : (l2 = Yf(c) ? Wf : H$1.current, l2 = Xf(b2, l2));
    var n2 = c.getDerivedStateFromProps, u2 = typeof n2 === "function" || typeof g.getSnapshotBeforeUpdate === "function";
    u2 || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h2 !== d || k2 !== l2) && Pg(b2, g, d, l2);
    wg = false;
    var q2 = b2.memoizedState;
    g.state = q2;
    Eg(b2, d, g, e2);
    k2 = b2.memoizedState;
    h2 !== d || q2 !== k2 || Vf.current || wg ? (typeof n2 === "function" && (Ig(b2, c, n2, d), k2 = b2.memoizedState), (h2 = wg || Ng(b2, c, h2, d, q2, k2, l2)) ? (u2 || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b2.flags |= 4194308)) : (typeof g.componentDidMount === "function" && (b2.flags |= 4194308), b2.memoizedProps = d, b2.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h2) : (typeof g.componentDidMount === "function" && (b2.flags |= 4194308), d = false);
  } else {
    g = b2.stateNode;
    yg(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : kg(b2.type, h2);
    g.props = l2;
    u2 = b2.pendingProps;
    q2 = g.context;
    k2 = c.contextType;
    typeof k2 === "object" && k2 !== null ? k2 = ug(k2) : (k2 = Yf(c) ? Wf : H$1.current, k2 = Xf(b2, k2));
    var y2 = c.getDerivedStateFromProps;
    (n2 = typeof y2 === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h2 !== u2 || q2 !== k2) && Pg(b2, g, d, k2);
    wg = false;
    q2 = b2.memoizedState;
    g.state = q2;
    Eg(b2, d, g, e2);
    var m2 = b2.memoizedState;
    h2 !== u2 || q2 !== m2 || Vf.current || wg ? (typeof y2 === "function" && (Ig(b2, c, y2, d), m2 = b2.memoizedState), (l2 = wg || Ng(b2, c, l2, d, q2, m2, k2) || false) ? (n2 || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, m2, k2), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, m2, k2)), typeof g.componentDidUpdate === "function" && (b2.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b2.flags |= 1024)) : (typeof g.componentDidUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d, b2.memoizedState = m2), g.props = d, g.state = m2, g.context = k2, d = l2) : (typeof g.componentDidUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 1024), d = false);
  }
  return pj(a2, b2, c, d, f2, e2);
}
function pj(a2, b2, c, d, e2, f2) {
  nj(a2, b2);
  var g = (b2.flags & 128) !== 0;
  if (!d && !g)
    return e2 && cg(b2, c, false), gj(a2, b2, f2);
  d = b2.stateNode;
  dj.current = b2;
  var h2 = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
  b2.flags |= 1;
  a2 !== null && g ? (b2.child = yh(b2, a2.child, null, f2), b2.child = yh(b2, null, h2, f2)) : ej(a2, b2, h2, f2);
  b2.memoizedState = d.state;
  e2 && cg(b2, c, true);
  return b2.child;
}
function qj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? $f(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && $f(a2, b2.context, false);
  Fh(a2, b2.containerInfo);
}
function rj(a2, b2, c, d, e2) {
  nh();
  oh(e2);
  b2.flags |= 256;
  ej(a2, b2, c, d);
  return b2.child;
}
var sj = { dehydrated: null, treeContext: null, retryLane: 0 };
function tj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function uj(a2, b2) {
  return { baseLanes: a2.baseLanes | b2, cachePool: null, transitions: a2.transitions };
}
function vj(a2, b2, c) {
  var d = b2.pendingProps, e2 = K.current, f2 = false, g = (b2.flags & 128) !== 0, h2;
  (h2 = g) || (h2 = a2 !== null && a2.memoizedState === null ? false : (e2 & 2) !== 0);
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (a2 === null || a2.memoizedState !== null)
    e2 |= 1;
  G(K, e2 & 1);
  if (a2 === null) {
    kh(b2);
    a2 = b2.memoizedState;
    if (a2 !== null && (a2 = a2.dehydrated, a2 !== null))
      return (b2.mode & 1) === 0 ? b2.lanes = 1 : a2.data === "$!" ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    e2 = d.children;
    a2 = d.fallback;
    return f2 ? (d = b2.mode, f2 = b2.child, e2 = { mode: "hidden", children: e2 }, (d & 1) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = e2) : f2 = wj(e2, d, 0, null), a2 = xh(a2, d, c, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = tj(c), b2.memoizedState = sj, a2) : xj(b2, e2);
  }
  e2 = a2.memoizedState;
  if (e2 !== null) {
    h2 = e2.dehydrated;
    if (h2 !== null) {
      if (g) {
        if (b2.flags & 256)
          return b2.flags &= -257, yj(a2, b2, c, Error(p$4(422)));
        if (b2.memoizedState !== null)
          return b2.child = a2.child, b2.flags |= 128, null;
        f2 = d.fallback;
        e2 = b2.mode;
        d = wj({ mode: "visible", children: d.children }, e2, 0, null);
        f2 = xh(f2, e2, c, null);
        f2.flags |= 2;
        d.return = b2;
        f2.return = b2;
        d.sibling = f2;
        b2.child = d;
        (b2.mode & 1) !== 0 && yh(b2, a2.child, null, c);
        b2.child.memoizedState = tj(c);
        b2.memoizedState = sj;
        return f2;
      }
      if ((b2.mode & 1) === 0)
        b2 = yj(a2, b2, c, null);
      else if (h2.data === "$!")
        b2 = yj(a2, b2, c, Error(p$4(419)));
      else if (d = (c & a2.childLanes) !== 0, tg || d) {
        d = P;
        if (d !== null) {
          switch (c & -c) {
            case 4:
              f2 = 2;
              break;
            case 16:
              f2 = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              f2 = 32;
              break;
            case 536870912:
              f2 = 268435456;
              break;
            default:
              f2 = 0;
          }
          d = (f2 & (d.suspendedLanes | c)) !== 0 ? 0 : f2;
          d !== 0 && d !== e2.retryLane && (e2.retryLane = d, Lg(a2, d, -1));
        }
        $i();
        b2 = yj(a2, b2, c, Error(p$4(421)));
      } else
        h2.data === "$?" ? (b2.flags |= 128, b2.child = a2.child, b2 = zj.bind(null, a2), h2._reactRetry = b2, b2 = null) : (c = e2.treeContext, eh = Kf(h2.nextSibling), dh = b2, I$1 = true, fh = null, c !== null && (Vg[Wg++] = Yg, Vg[Wg++] = Zg, Vg[Wg++] = Xg, Yg = c.id, Zg = c.overflow, Xg = b2), b2 = xj(b2, b2.pendingProps.children), b2.flags |= 4096);
      return b2;
    }
    if (f2)
      return d = Aj(a2, b2, d.children, d.fallback, c), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? tj(c) : uj(e2, c), f2.childLanes = a2.childLanes & ~c, b2.memoizedState = sj, d;
    c = Bj(a2, b2, d.children, c);
    b2.memoizedState = null;
    return c;
  }
  if (f2)
    return d = Aj(a2, b2, d.children, d.fallback, c), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? tj(c) : uj(e2, c), f2.childLanes = a2.childLanes & ~c, b2.memoizedState = sj, d;
  c = Bj(a2, b2, d.children, c);
  b2.memoizedState = null;
  return c;
}
function xj(a2, b2) {
  b2 = wj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function Bj(a2, b2, c, d) {
  var e2 = a2.child;
  a2 = e2.sibling;
  c = th(e2, { mode: "visible", children: c });
  (b2.mode & 1) === 0 && (c.lanes = d);
  c.return = b2;
  c.sibling = null;
  a2 !== null && (d = b2.deletions, d === null ? (b2.deletions = [a2], b2.flags |= 16) : d.push(a2));
  return b2.child = c;
}
function Aj(a2, b2, c, d, e2) {
  var f2 = b2.mode;
  a2 = a2.child;
  var g = a2.sibling, h2 = { mode: "hidden", children: c };
  (f2 & 1) === 0 && b2.child !== a2 ? (c = b2.child, c.childLanes = 0, c.pendingProps = h2, b2.deletions = null) : (c = th(a2, h2), c.subtreeFlags = a2.subtreeFlags & 14680064);
  g !== null ? d = th(g, d) : (d = xh(d, f2, e2, null), d.flags |= 2);
  d.return = b2;
  c.return = b2;
  c.sibling = d;
  b2.child = c;
  return d;
}
function yj(a2, b2, c, d) {
  d !== null && oh(d);
  yh(b2, a2.child, null, c);
  a2 = xj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function Cj(a2, b2, c) {
  a2.lanes |= b2;
  var d = a2.alternate;
  d !== null && (d.lanes |= b2);
  rg(a2.return, b2, c);
}
function Dj(a2, b2, c, d, e2) {
  var f2 = a2.memoizedState;
  f2 === null ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e2);
}
function Ej(a2, b2, c) {
  var d = b2.pendingProps, e2 = d.revealOrder, f2 = d.tail;
  ej(a2, b2, d.children, c);
  d = K.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b2.flags |= 128;
  else {
    if (a2 !== null && (a2.flags & 128) !== 0)
      a:
        for (a2 = b2.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && Cj(a2, c, b2);
          else if (a2.tag === 19)
            Cj(a2, c, b2);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d &= 1;
  }
  G(K, d);
  if ((b2.mode & 1) === 0)
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c = b2.child;
        for (e2 = null; c !== null; )
          a2 = c.alternate, a2 !== null && Jh(a2) === null && (e2 = c), c = c.sibling;
        c = e2;
        c === null ? (e2 = b2.child, b2.child = null) : (e2 = c.sibling, c.sibling = null);
        Dj(b2, false, e2, c, f2);
        break;
      case "backwards":
        c = null;
        e2 = b2.child;
        for (b2.child = null; e2 !== null; ) {
          a2 = e2.alternate;
          if (a2 !== null && Jh(a2) === null) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c;
          c = e2;
          e2 = a2;
        }
        Dj(b2, true, c, null, f2);
        break;
      case "together":
        Dj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function gj(a2, b2, c) {
  a2 !== null && (b2.dependencies = a2.dependencies);
  Fg |= b2.lanes;
  if ((c & b2.childLanes) === 0)
    return null;
  if (a2 !== null && b2.child !== a2.child)
    throw Error(p$4(153));
  if (b2.child !== null) {
    a2 = b2.child;
    c = th(a2, a2.pendingProps);
    b2.child = c;
    for (c.return = b2; a2.sibling !== null; )
      a2 = a2.sibling, c = c.sibling = th(a2, a2.pendingProps), c.return = b2;
    c.sibling = null;
  }
  return b2.child;
}
function Fj(a2, b2, c) {
  switch (b2.tag) {
    case 3:
      qj(b2);
      nh();
      break;
    case 5:
      Hh(b2);
      break;
    case 1:
      Yf(b2.type) && bg(b2);
      break;
    case 4:
      Fh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d = b2.type._context, e2 = b2.memoizedProps.value;
      G(lg, d._currentValue);
      d._currentValue = e2;
      break;
    case 13:
      d = b2.memoizedState;
      if (d !== null) {
        if (d.dehydrated !== null)
          return G(K, K.current & 1), b2.flags |= 128, null;
        if ((c & b2.child.childLanes) !== 0)
          return vj(a2, b2, c);
        G(K, K.current & 1);
        a2 = gj(a2, b2, c);
        return a2 !== null ? a2.sibling : null;
      }
      G(K, K.current & 1);
      break;
    case 19:
      d = (c & b2.childLanes) !== 0;
      if ((a2.flags & 128) !== 0) {
        if (d)
          return Ej(a2, b2, c);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G(K, K.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, lj(a2, b2, c);
  }
  return gj(a2, b2, c);
}
function Gj(a2, b2) {
  ch(b2);
  switch (b2.tag) {
    case 1:
      return Yf(b2.type) && Zf(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return Gh(), E$3(Vf), E$3(H$1), Lh(), a2 = b2.flags, (a2 & 65536) !== 0 && (a2 & 128) === 0 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Ih(b2), null;
    case 13:
      E$3(K);
      a2 = b2.memoizedState;
      if (a2 !== null && a2.dehydrated !== null) {
        if (b2.alternate === null)
          throw Error(p$4(340));
        nh();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E$3(K), null;
    case 4:
      return Gh(), null;
    case 10:
      return qg(b2.type._context), null;
    case 22:
    case 23:
      return bj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hj = false, S = false, Ij = typeof WeakSet === "function" ? WeakSet : Set, T$3 = null;
function Jj(a2, b2) {
  var c = a2.ref;
  if (c !== null)
    if (typeof c === "function")
      try {
        c(null);
      } catch (d) {
        U$1(a2, b2, d);
      }
    else
      c.current = null;
}
function Kj(a2, b2, c) {
  try {
    c();
  } catch (d) {
    U$1(a2, b2, d);
  }
}
var Lj = false;
function Mj(a2, b2) {
  Bf = cd;
  a2 = Le$1();
  if (Me(a2)) {
    if ("selectionStart" in a2)
      var c = { start: a2.selectionStart, end: a2.selectionEnd };
    else
      a: {
        c = (c = a2.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && d.rangeCount !== 0) {
          c = d.anchorNode;
          var e2 = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f2.nodeType;
          } catch (Z2) {
            c = null;
            break a;
          }
          var g = 0, h2 = -1, k2 = -1, l2 = 0, n2 = 0, u2 = a2, q2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                u2 !== c || e2 !== 0 && u2.nodeType !== 3 || (h2 = g + e2);
                u2 !== f2 || d !== 0 && u2.nodeType !== 3 || (k2 = g + d);
                u2.nodeType === 3 && (g += u2.nodeValue.length);
                if ((y2 = u2.firstChild) === null)
                  break;
                q2 = u2;
                u2 = y2;
              }
              for (; ; ) {
                if (u2 === a2)
                  break b;
                q2 === c && ++l2 === e2 && (h2 = g);
                q2 === f2 && ++n2 === d && (k2 = g);
                if ((y2 = u2.nextSibling) !== null)
                  break;
                u2 = q2;
                q2 = u2.parentNode;
              }
              u2 = y2;
            }
          c = h2 === -1 || k2 === -1 ? null : { start: h2, end: k2 };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Cf = { focusedElem: a2, selectionRange: c };
  cd = false;
  for (T$3 = b2; T$3 !== null; )
    if (b2 = T$3, a2 = b2.child, (b2.subtreeFlags & 1028) !== 0 && a2 !== null)
      a2.return = b2, T$3 = a2;
    else
      for (; T$3 !== null; ) {
        b2 = T$3;
        try {
          var m2 = b2.alternate;
          if ((b2.flags & 1024) !== 0)
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m2 !== null) {
                  var w2 = m2.memoizedProps, J2 = m2.memoizedState, v2 = b2.stateNode, x2 = v2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? w2 : kg(b2.type, w2), J2);
                  v2.__reactInternalSnapshotBeforeUpdate = x2;
                }
                break;
              case 3:
                var r2 = b2.stateNode.containerInfo;
                if (r2.nodeType === 1)
                  r2.textContent = "";
                else if (r2.nodeType === 9) {
                  var F2 = r2.body;
                  F2 != null && (F2.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$4(163));
            }
        } catch (Z2) {
          U$1(b2, b2.return, Z2);
        }
        a2 = b2.sibling;
        if (a2 !== null) {
          a2.return = b2.return;
          T$3 = a2;
          break;
        }
        T$3 = b2.return;
      }
  m2 = Lj;
  Lj = false;
  return m2;
}
function Nj(a2, b2, c) {
  var d = b2.updateQueue;
  d = d !== null ? d.lastEffect : null;
  if (d !== null) {
    var e2 = d = d.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        f2 !== void 0 && Kj(b2, c, f2);
      }
      e2 = e2.next;
    } while (e2 !== d);
  }
}
function Oj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = b2 !== null ? b2.lastEffect : null;
  if (b2 !== null) {
    var c = b2 = b2.next;
    do {
      if ((c.tag & a2) === a2) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b2);
  }
}
function Pj(a2) {
  var b2 = a2.ref;
  if (b2 !== null) {
    var c = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c;
        break;
      default:
        a2 = c;
    }
    typeof b2 === "function" ? b2(a2) : b2.current = a2;
  }
}
function Qj(a2) {
  var b2 = a2.alternate;
  b2 !== null && (a2.alternate = null, Qj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  a2.tag === 5 && (b2 = a2.stateNode, b2 !== null && (delete b2[Nf], delete b2[Of], delete b2[nf], delete b2[Pf], delete b2[Qf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Rj(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function Sj(a2) {
  a:
    for (; ; ) {
      for (; a2.sibling === null; ) {
        if (a2.return === null || Rj(a2.return))
          return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 18; ) {
        if (a2.flags & 2)
          continue a;
        if (a2.child === null || a2.tag === 4)
          continue a;
        else
          a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2))
        return a2.stateNode;
    }
}
function Tj(a2, b2, c) {
  var d = a2.tag;
  if (d === 5 || d === 6)
    a2 = a2.stateNode, b2 ? c.nodeType === 8 ? c.parentNode.insertBefore(a2, b2) : c.insertBefore(a2, b2) : (c.nodeType === 8 ? (b2 = c.parentNode, b2.insertBefore(a2, c)) : (b2 = c, b2.appendChild(a2)), c = c._reactRootContainer, c !== null && c !== void 0 || b2.onclick !== null || (b2.onclick = Af));
  else if (d !== 4 && (a2 = a2.child, a2 !== null))
    for (Tj(a2, b2, c), a2 = a2.sibling; a2 !== null; )
      Tj(a2, b2, c), a2 = a2.sibling;
}
function Uj(a2, b2, c) {
  var d = a2.tag;
  if (d === 5 || d === 6)
    a2 = a2.stateNode, b2 ? c.insertBefore(a2, b2) : c.appendChild(a2);
  else if (d !== 4 && (a2 = a2.child, a2 !== null))
    for (Uj(a2, b2, c), a2 = a2.sibling; a2 !== null; )
      Uj(a2, b2, c), a2 = a2.sibling;
}
var V$1 = null, Vj = false;
function Wj(a2, b2, c) {
  for (c = c.child; c !== null; )
    Xj(a2, b2, c), c = c.sibling;
}
function Xj(a2, b2, c) {
  if (kc && typeof kc.onCommitFiberUnmount === "function")
    try {
      kc.onCommitFiberUnmount(jc, c);
    } catch (h2) {
    }
  switch (c.tag) {
    case 5:
      S || Jj(c, b2);
    case 6:
      var d = V$1, e2 = Vj;
      V$1 = null;
      Wj(a2, b2, c);
      V$1 = d;
      Vj = e2;
      V$1 !== null && (Vj ? (a2 = V$1, c = c.stateNode, a2.nodeType === 8 ? a2.parentNode.removeChild(c) : a2.removeChild(c)) : V$1.removeChild(c.stateNode));
      break;
    case 18:
      V$1 !== null && (Vj ? (a2 = V$1, c = c.stateNode, a2.nodeType === 8 ? Jf(a2.parentNode, c) : a2.nodeType === 1 && Jf(a2, c), ad(a2)) : Jf(V$1, c.stateNode));
      break;
    case 4:
      d = V$1;
      e2 = Vj;
      V$1 = c.stateNode.containerInfo;
      Vj = true;
      Wj(a2, b2, c);
      V$1 = d;
      Vj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!S && (d = c.updateQueue, d !== null && (d = d.lastEffect, d !== null))) {
        e2 = d = d.next;
        do {
          var f2 = e2, g = f2.destroy;
          f2 = f2.tag;
          g !== void 0 && ((f2 & 2) !== 0 ? Kj(c, b2, g) : (f2 & 4) !== 0 && Kj(c, b2, g));
          e2 = e2.next;
        } while (e2 !== d);
      }
      Wj(a2, b2, c);
      break;
    case 1:
      if (!S && (Jj(c, b2), d = c.stateNode, typeof d.componentWillUnmount === "function"))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h2) {
          U$1(c, b2, h2);
        }
      Wj(a2, b2, c);
      break;
    case 21:
      Wj(a2, b2, c);
      break;
    case 22:
      c.mode & 1 ? (S = (d = S) || c.memoizedState !== null, Wj(a2, b2, c), S = d) : Wj(a2, b2, c);
      break;
    default:
      Wj(a2, b2, c);
  }
}
function Yj(a2) {
  var b2 = a2.updateQueue;
  if (b2 !== null) {
    a2.updateQueue = null;
    var c = a2.stateNode;
    c === null && (c = a2.stateNode = new Ij());
    b2.forEach(function(b3) {
      var d = Zj.bind(null, a2, b3);
      c.has(b3) || (c.add(b3), b3.then(d, d));
    });
  }
}
function ak(a2, b2) {
  var c = b2.deletions;
  if (c !== null)
    for (var d = 0; d < c.length; d++) {
      var e2 = c[d];
      try {
        var f2 = a2, g = b2, h2 = g;
        a:
          for (; h2 !== null; ) {
            switch (h2.tag) {
              case 5:
                V$1 = h2.stateNode;
                Vj = false;
                break a;
              case 3:
                V$1 = h2.stateNode.containerInfo;
                Vj = true;
                break a;
              case 4:
                V$1 = h2.stateNode.containerInfo;
                Vj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (V$1 === null)
          throw Error(p$4(160));
        Xj(f2, g, e2);
        V$1 = null;
        Vj = false;
        var k2 = e2.alternate;
        k2 !== null && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        U$1(e2, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; b2 !== null; )
      bk(b2, a2), b2 = b2.sibling;
}
function bk(a2, b2) {
  var c = a2.alternate, d = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ak(b2, a2);
      ck(a2);
      if (d & 4) {
        try {
          Nj(3, a2, a2.return), Oj(3, a2);
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
        try {
          Nj(5, a2, a2.return);
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
      }
      break;
    case 1:
      ak(b2, a2);
      ck(a2);
      d & 512 && c !== null && Jj(c, c.return);
      break;
    case 5:
      ak(b2, a2);
      ck(a2);
      d & 512 && c !== null && Jj(c, c.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          nb(e2, "");
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
      }
      if (d & 4 && (e2 = a2.stateNode, e2 != null)) {
        var f2 = a2.memoizedProps, g = c !== null ? c.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (k2 !== null)
          try {
            h2 === "input" && f2.type === "radio" && f2.name != null && Za(e2, f2);
            ub(h2, g);
            var l2 = ub(h2, f2);
            for (g = 0; g < k2.length; g += 2) {
              var n2 = k2[g], u2 = k2[g + 1];
              n2 === "style" ? rb(e2, u2) : n2 === "dangerouslySetInnerHTML" ? mb(e2, u2) : n2 === "children" ? nb(e2, u2) : sa(e2, n2, u2, l2);
            }
            switch (h2) {
              case "input":
                $a(e2, f2);
                break;
              case "textarea":
                hb(e2, f2);
                break;
              case "select":
                var q2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                y2 != null ? eb(e2, !!f2.multiple, y2, false) : q2 !== !!f2.multiple && (f2.defaultValue != null ? eb(e2, !!f2.multiple, f2.defaultValue, true) : eb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Of] = f2;
          } catch (m2) {
            U$1(a2, a2.return, m2);
          }
      }
      break;
    case 6:
      ak(b2, a2);
      ck(a2);
      if (d & 4) {
        if (a2.stateNode === null)
          throw Error(p$4(162));
        l2 = a2.stateNode;
        n2 = a2.memoizedProps;
        try {
          l2.nodeValue = n2;
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
      }
      break;
    case 3:
      ak(b2, a2);
      ck(a2);
      if (d & 4 && c !== null && c.memoizedState.isDehydrated)
        try {
          ad(b2.containerInfo);
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
      break;
    case 4:
      ak(b2, a2);
      ck(a2);
      break;
    case 13:
      ak(b2, a2);
      ck(a2);
      l2 = a2.child;
      l2.flags & 8192 && l2.memoizedState !== null && (l2.alternate === null || l2.alternate.memoizedState === null) && (dk = B());
      d & 4 && Yj(a2);
      break;
    case 22:
      l2 = c !== null && c.memoizedState !== null;
      a2.mode & 1 ? (S = (n2 = S) || l2, ak(b2, a2), S = n2) : ak(b2, a2);
      ck(a2);
      if (d & 8192) {
        n2 = a2.memoizedState !== null;
        a:
          for (u2 = null, q2 = a2; ; ) {
            if (q2.tag === 5) {
              if (u2 === null) {
                u2 = q2;
                try {
                  e2 = q2.stateNode, n2 ? (f2 = e2.style, typeof f2.setProperty === "function" ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g = k2 !== void 0 && k2 !== null && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = qb("display", g));
                } catch (m2) {
                  U$1(a2, a2.return, m2);
                }
              }
            } else if (q2.tag === 6) {
              if (u2 === null)
                try {
                  q2.stateNode.nodeValue = n2 ? "" : q2.memoizedProps;
                } catch (m2) {
                  U$1(a2, a2.return, m2);
                }
            } else if ((q2.tag !== 22 && q2.tag !== 23 || q2.memoizedState === null || q2 === a2) && q2.child !== null) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2)
              break a;
            for (; q2.sibling === null; ) {
              if (q2.return === null || q2.return === a2)
                break a;
              u2 === q2 && (u2 = null);
              q2 = q2.return;
            }
            u2 === q2 && (u2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
        if (n2 && !l2 && (a2.mode & 1) !== 0)
          for (T$3 = a2, a2 = a2.child; a2 !== null; ) {
            for (l2 = T$3 = a2; T$3 !== null; ) {
              n2 = T$3;
              u2 = n2.child;
              switch (n2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nj(4, n2, n2.return);
                  break;
                case 1:
                  Jj(n2, n2.return);
                  f2 = n2.stateNode;
                  if (typeof f2.componentWillUnmount === "function") {
                    q2 = n2;
                    y2 = n2.return;
                    try {
                      e2 = q2, f2.props = e2.memoizedProps, f2.state = e2.memoizedState, f2.componentWillUnmount();
                    } catch (m2) {
                      U$1(q2, y2, m2);
                    }
                  }
                  break;
                case 5:
                  Jj(n2, n2.return);
                  break;
                case 22:
                  if (n2.memoizedState !== null) {
                    ek(l2);
                    continue;
                  }
              }
              u2 !== null ? (u2.return = n2, T$3 = u2) : ek(l2);
            }
            a2 = a2.sibling;
          }
      }
      break;
    case 19:
      ak(b2, a2);
      ck(a2);
      d & 4 && Yj(a2);
      break;
    case 21:
      break;
    default:
      ak(b2, a2), ck(a2);
  }
}
function ck(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c = a2.return; c !== null; ) {
          if (Rj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p$4(160));
      }
      switch (d.tag) {
        case 5:
          var e2 = d.stateNode;
          d.flags & 32 && (nb(e2, ""), d.flags &= -33);
          var f2 = Sj(a2);
          Uj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h2 = Sj(a2);
          Tj(a2, h2, g);
          break;
        default:
          throw Error(p$4(161));
      }
    } catch (k2) {
      U$1(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function fk(a2, b2, c) {
  T$3 = a2;
  gk(a2);
}
function gk(a2, b2, c) {
  for (var d = (a2.mode & 1) !== 0; T$3 !== null; ) {
    var e2 = T$3, f2 = e2.child;
    if (e2.tag === 22 && d) {
      var g = e2.memoizedState !== null || Hj;
      if (!g) {
        var h2 = e2.alternate, k2 = h2 !== null && h2.memoizedState !== null || S;
        h2 = Hj;
        var l2 = S;
        Hj = g;
        if ((S = k2) && !l2)
          for (T$3 = e2; T$3 !== null; )
            g = T$3, k2 = g.child, g.tag === 22 && g.memoizedState !== null ? hk(e2) : k2 !== null ? (k2.return = g, T$3 = k2) : hk(e2);
        for (; f2 !== null; )
          T$3 = f2, gk(f2), f2 = f2.sibling;
        T$3 = e2;
        Hj = h2;
        S = l2;
      }
      ik(a2);
    } else
      (e2.subtreeFlags & 8772) !== 0 && f2 !== null ? (f2.return = e2, T$3 = f2) : ik(a2);
  }
}
function ik(a2) {
  for (; T$3 !== null; ) {
    var b2 = T$3;
    if ((b2.flags & 8772) !== 0) {
      var c = b2.alternate;
      try {
        if ((b2.flags & 8772) !== 0)
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              S || Oj(5, b2);
              break;
            case 1:
              var d = b2.stateNode;
              if (b2.flags & 4 && !S)
                if (c === null)
                  d.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c.memoizedProps : kg(b2.type, c.memoizedProps);
                  d.componentDidUpdate(e2, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              f2 !== null && Gg(b2, f2, d);
              break;
            case 3:
              var g = b2.updateQueue;
              if (g !== null) {
                c = null;
                if (b2.child !== null)
                  switch (b2.child.tag) {
                    case 5:
                      c = b2.child.stateNode;
                      break;
                    case 1:
                      c = b2.child.stateNode;
                  }
                Gg(b2, g, c);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (c === null && b2.flags & 4) {
                c = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c.focus();
                    break;
                  case "img":
                    k2.src && (c.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (b2.memoizedState === null) {
                var l2 = b2.alternate;
                if (l2 !== null) {
                  var n2 = l2.memoizedState;
                  if (n2 !== null) {
                    var u2 = n2.dehydrated;
                    u2 !== null && ad(u2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(p$4(163));
          }
        S || b2.flags & 512 && Pj(b2);
      } catch (q2) {
        U$1(b2, b2.return, q2);
      }
    }
    if (b2 === a2) {
      T$3 = null;
      break;
    }
    c = b2.sibling;
    if (c !== null) {
      c.return = b2.return;
      T$3 = c;
      break;
    }
    T$3 = b2.return;
  }
}
function ek(a2) {
  for (; T$3 !== null; ) {
    var b2 = T$3;
    if (b2 === a2) {
      T$3 = null;
      break;
    }
    var c = b2.sibling;
    if (c !== null) {
      c.return = b2.return;
      T$3 = c;
      break;
    }
    T$3 = b2.return;
  }
}
function hk(a2) {
  for (; T$3 !== null; ) {
    var b2 = T$3;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c = b2.return;
          try {
            Oj(4, b2);
          } catch (k2) {
            U$1(b2, c, k2);
          }
          break;
        case 1:
          var d = b2.stateNode;
          if (typeof d.componentDidMount === "function") {
            var e2 = b2.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              U$1(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Pj(b2);
          } catch (k2) {
            U$1(b2, f2, k2);
          }
          break;
        case 5:
          var g = b2.return;
          try {
            Pj(b2);
          } catch (k2) {
            U$1(b2, g, k2);
          }
      }
    } catch (k2) {
      U$1(b2, b2.return, k2);
    }
    if (b2 === a2) {
      T$3 = null;
      break;
    }
    var h2 = b2.sibling;
    if (h2 !== null) {
      h2.return = b2.return;
      T$3 = h2;
      break;
    }
    T$3 = b2.return;
  }
}
var jk = Math.ceil, kk = ta.ReactCurrentDispatcher, lk = ta.ReactCurrentOwner, mk = ta.ReactCurrentBatchConfig, W = 0, P = null, X$3 = null, Y = 0, cj = 0, mj = Tf(0), R = 0, nk = null, Fg = 0, ok = 0, pk = 0, qk = null, rk = null, dk = 0, aj = Infinity, sk = null, Li = false, Mi = null, Oi = null, tk = false, uk = null, vk = 0, wk = 0, xk = null, yk = -1, zk = 0;
function Jg() {
  return (W & 6) !== 0 ? B() : yk !== -1 ? yk : yk = B();
}
function Kg(a2) {
  if ((a2.mode & 1) === 0)
    return 1;
  if ((W & 2) !== 0 && Y !== 0)
    return Y & -Y;
  if (jg.transition !== null)
    return zk === 0 && (zk = xc()), zk;
  a2 = C$2;
  if (a2 !== 0)
    return a2;
  a2 = window.event;
  a2 = a2 === void 0 ? 16 : id(a2.type);
  return a2;
}
function Lg(a2, b2, c) {
  if (50 < wk)
    throw wk = 0, xk = null, Error(p$4(185));
  var d = Ak(a2, b2);
  if (d === null)
    return null;
  zc(d, b2, c);
  if ((W & 2) === 0 || d !== P)
    d === P && ((W & 2) === 0 && (ok |= b2), R === 4 && Bk(d, Y)), Ck(d, c), b2 === 1 && W === 0 && (a2.mode & 1) === 0 && (aj = B() + 500, eg && ig());
  return d;
}
function Ak(a2, b2) {
  a2.lanes |= b2;
  var c = a2.alternate;
  c !== null && (c.lanes |= b2);
  c = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b2, c = a2.alternate, c !== null && (c.childLanes |= b2), c = a2, a2 = a2.return;
  return c.tag === 3 ? c.stateNode : null;
}
function Bg(a2) {
  return (P !== null || vg !== null) && (a2.mode & 1) !== 0 && (W & 2) === 0;
}
function Ck(a2, b2) {
  var c = a2.callbackNode;
  vc(a2, b2);
  var d = tc(a2, a2 === P ? Y : 0);
  if (d === 0)
    c !== null && ac(c), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d & -d, a2.callbackPriority !== b2) {
    c != null && ac(c);
    if (b2 === 1)
      a2.tag === 0 ? hg(Dk.bind(null, a2)) : gg(Dk.bind(null, a2)), If(function() {
        W === 0 && ig();
      }), c = null;
    else {
      switch (Cc(d)) {
        case 1:
          c = ec;
          break;
        case 4:
          c = fc;
          break;
        case 16:
          c = gc;
          break;
        case 536870912:
          c = ic;
          break;
        default:
          c = gc;
      }
      c = Ek(c, Fk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c;
  }
}
function Fk(a2, b2) {
  yk = -1;
  zk = 0;
  if ((W & 6) !== 0)
    throw Error(p$4(327));
  var c = a2.callbackNode;
  if (Gk() && a2.callbackNode !== c)
    return null;
  var d = tc(a2, a2 === P ? Y : 0);
  if (d === 0)
    return null;
  if ((d & 30) !== 0 || (d & a2.expiredLanes) !== 0 || b2)
    b2 = Hk(a2, d);
  else {
    b2 = d;
    var e2 = W;
    W |= 2;
    var f2 = Ik();
    if (P !== a2 || Y !== b2)
      sk = null, aj = B() + 500, Jk(a2, b2);
    do
      try {
        Kk();
        break;
      } catch (h2) {
        Lk(a2, h2);
      }
    while (1);
    pg();
    kk.current = f2;
    W = e2;
    X$3 !== null ? b2 = 0 : (P = null, Y = 0, b2 = R);
  }
  if (b2 !== 0) {
    b2 === 2 && (e2 = wc(a2), e2 !== 0 && (d = e2, b2 = Mk(a2, e2)));
    if (b2 === 1)
      throw c = nk, Jk(a2, 0), Bk(a2, d), Ck(a2, B()), c;
    if (b2 === 6)
      Bk(a2, d);
    else {
      e2 = a2.current.alternate;
      if ((d & 30) === 0 && !Nk(e2) && (b2 = Hk(a2, d), b2 === 2 && (f2 = wc(a2), f2 !== 0 && (d = f2, b2 = Mk(a2, f2))), b2 === 1))
        throw c = nk, Jk(a2, 0), Bk(a2, d), Ck(a2, B()), c;
      a2.finishedWork = e2;
      a2.finishedLanes = d;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$4(345));
        case 2:
          Ok(a2, rk, sk);
          break;
        case 3:
          Bk(a2, d);
          if ((d & 130023424) === d && (b2 = dk + 500 - B(), 10 < b2)) {
            if (tc(a2, 0) !== 0)
              break;
            e2 = a2.suspendedLanes;
            if ((e2 & d) !== d) {
              Jg();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ef(Ok.bind(null, a2, rk, sk), b2);
            break;
          }
          Ok(a2, rk, sk);
          break;
        case 4:
          Bk(a2, d);
          if ((d & 4194240) === d)
            break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d; ) {
            var g = 31 - nc(d);
            f2 = 1 << g;
            g = b2[g];
            g > e2 && (e2 = g);
            d &= ~f2;
          }
          d = e2;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * jk(d / 1960)) - d;
          if (10 < d) {
            a2.timeoutHandle = Ef(Ok.bind(null, a2, rk, sk), d);
            break;
          }
          Ok(a2, rk, sk);
          break;
        case 5:
          Ok(a2, rk, sk);
          break;
        default:
          throw Error(p$4(329));
      }
    }
  }
  Ck(a2, B());
  return a2.callbackNode === c ? Fk.bind(null, a2) : null;
}
function Mk(a2, b2) {
  var c = qk;
  a2.current.memoizedState.isDehydrated && (Jk(a2, b2).flags |= 256);
  a2 = Hk(a2, b2);
  a2 !== 2 && (b2 = rk, rk = c, b2 !== null && Zi(b2));
  return a2;
}
function Zi(a2) {
  rk === null ? rk = a2 : rk.push.apply(rk, a2);
}
function Nk(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c = b2.updateQueue;
      if (c !== null && (c = c.stores, c !== null))
        for (var d = 0; d < c.length; d++) {
          var e2 = c[d], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!Ge(f2(), e2))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b2.child;
    if (b2.subtreeFlags & 16384 && c !== null)
      c.return = b2, b2 = c;
    else {
      if (b2 === a2)
        break;
      for (; b2.sibling === null; ) {
        if (b2.return === null || b2.return === a2)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Bk(a2, b2) {
  b2 &= ~pk;
  b2 &= ~ok;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c = 31 - nc(b2), d = 1 << c;
    a2[c] = -1;
    b2 &= ~d;
  }
}
function Dk(a2) {
  if ((W & 6) !== 0)
    throw Error(p$4(327));
  Gk();
  var b2 = tc(a2, 0);
  if ((b2 & 1) === 0)
    return Ck(a2, B()), null;
  var c = Hk(a2, b2);
  if (a2.tag !== 0 && c === 2) {
    var d = wc(a2);
    d !== 0 && (b2 = d, c = Mk(a2, d));
  }
  if (c === 1)
    throw c = nk, Jk(a2, 0), Bk(a2, b2), Ck(a2, B()), c;
  if (c === 6)
    throw Error(p$4(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Ok(a2, rk, sk);
  Ck(a2, B());
  return null;
}
function Pk(a2, b2) {
  var c = W;
  W |= 1;
  try {
    return a2(b2);
  } finally {
    W = c, W === 0 && (aj = B() + 500, eg && ig());
  }
}
function Qk(a2) {
  uk !== null && uk.tag === 0 && (W & 6) === 0 && Gk();
  var b2 = W;
  W |= 1;
  var c = mk.transition, d = C$2;
  try {
    if (mk.transition = null, C$2 = 1, a2)
      return a2();
  } finally {
    C$2 = d, mk.transition = c, W = b2, (W & 6) === 0 && ig();
  }
}
function bj() {
  cj = mj.current;
  E$3(mj);
}
function Jk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c = a2.timeoutHandle;
  c !== -1 && (a2.timeoutHandle = -1, Ff(c));
  if (X$3 !== null)
    for (c = X$3.return; c !== null; ) {
      var d = c;
      ch(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && Zf();
          break;
        case 3:
          Gh();
          E$3(Vf);
          E$3(H$1);
          Lh();
          break;
        case 5:
          Ih(d);
          break;
        case 4:
          Gh();
          break;
        case 13:
          E$3(K);
          break;
        case 19:
          E$3(K);
          break;
        case 10:
          qg(d.type._context);
          break;
        case 22:
        case 23:
          bj();
      }
      c = c.return;
    }
  P = a2;
  X$3 = a2 = th(a2.current, null);
  Y = cj = b2;
  R = 0;
  nk = null;
  pk = ok = Fg = 0;
  rk = qk = null;
  if (vg !== null) {
    for (b2 = 0; b2 < vg.length; b2++)
      if (c = vg[b2], d = c.interleaved, d !== null) {
        c.interleaved = null;
        var e2 = d.next, f2 = c.pending;
        if (f2 !== null) {
          var g = f2.next;
          f2.next = e2;
          d.next = g;
        }
        c.pending = d;
      }
    vg = null;
  }
  return a2;
}
function Lk(a2, b2) {
  do {
    var c = X$3;
    try {
      pg();
      Mh.current = Yh;
      if (Ph) {
        for (var d = L$2.memoizedState; d !== null; ) {
          var e2 = d.queue;
          e2 !== null && (e2.pending = null);
          d = d.next;
        }
        Ph = false;
      }
      Oh = 0;
      N$2 = M$1 = L$2 = null;
      Qh = false;
      Rh = 0;
      lk.current = null;
      if (c === null || c.return === null) {
        R = 1;
        nk = b2;
        X$3 = null;
        break;
      }
      a: {
        var f2 = a2, g = c.return, h2 = c, k2 = b2;
        b2 = Y;
        h2.flags |= 32768;
        if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
          var l2 = k2, n2 = h2, u2 = n2.tag;
          if ((n2.mode & 1) === 0 && (u2 === 0 || u2 === 11 || u2 === 15)) {
            var q2 = n2.alternate;
            q2 ? (n2.updateQueue = q2.updateQueue, n2.memoizedState = q2.memoizedState, n2.lanes = q2.lanes) : (n2.updateQueue = null, n2.memoizedState = null);
          }
          var y2 = Ri(g);
          if (y2 !== null) {
            y2.flags &= -257;
            Si(y2, g, h2, f2, b2);
            y2.mode & 1 && Pi(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var m2 = b2.updateQueue;
            if (m2 === null) {
              var w2 = /* @__PURE__ */ new Set();
              w2.add(k2);
              b2.updateQueue = w2;
            } else
              m2.add(k2);
            break a;
          } else {
            if ((b2 & 1) === 0) {
              Pi(f2, l2, b2);
              $i();
              break a;
            }
            k2 = Error(p$4(426));
          }
        } else if (I$1 && h2.mode & 1) {
          var J2 = Ri(g);
          if (J2 !== null) {
            (J2.flags & 65536) === 0 && (J2.flags |= 256);
            Si(J2, g, h2, f2, b2);
            oh(k2);
            break a;
          }
        }
        f2 = k2;
        R !== 4 && (R = 2);
        qk === null ? qk = [f2] : qk.push(f2);
        k2 = Hi(k2, h2);
        h2 = g;
        do {
          switch (h2.tag) {
            case 3:
              h2.flags |= 65536;
              b2 &= -b2;
              h2.lanes |= b2;
              var v2 = Ki(h2, k2, b2);
              Dg(h2, v2);
              break a;
            case 1:
              f2 = k2;
              var x2 = h2.type, r2 = h2.stateNode;
              if ((h2.flags & 128) === 0 && (typeof x2.getDerivedStateFromError === "function" || r2 !== null && typeof r2.componentDidCatch === "function" && (Oi === null || !Oi.has(r2)))) {
                h2.flags |= 65536;
                b2 &= -b2;
                h2.lanes |= b2;
                var F2 = Ni(h2, f2, b2);
                Dg(h2, F2);
                break a;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
      }
      Rk(c);
    } catch (Z2) {
      b2 = Z2;
      X$3 === c && c !== null && (X$3 = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Ik() {
  var a2 = kk.current;
  kk.current = Yh;
  return a2 === null ? Yh : a2;
}
function $i() {
  if (R === 0 || R === 3 || R === 2)
    R = 4;
  P === null || (Fg & 268435455) === 0 && (ok & 268435455) === 0 || Bk(P, Y);
}
function Hk(a2, b2) {
  var c = W;
  W |= 2;
  var d = Ik();
  if (P !== a2 || Y !== b2)
    sk = null, Jk(a2, b2);
  do
    try {
      Sk();
      break;
    } catch (e2) {
      Lk(a2, e2);
    }
  while (1);
  pg();
  W = c;
  kk.current = d;
  if (X$3 !== null)
    throw Error(p$4(261));
  P = null;
  Y = 0;
  return R;
}
function Sk() {
  for (; X$3 !== null; )
    Tk(X$3);
}
function Kk() {
  for (; X$3 !== null && !bc(); )
    Tk(X$3);
}
function Tk(a2) {
  var b2 = Uk(a2.alternate, a2, cj);
  a2.memoizedProps = a2.pendingProps;
  b2 === null ? Rk(a2) : X$3 = b2;
  lk.current = null;
}
function Rk(a2) {
  var b2 = a2;
  do {
    var c = b2.alternate;
    a2 = b2.return;
    if ((b2.flags & 32768) === 0) {
      if (c = Yi(c, b2, cj), c !== null) {
        X$3 = c;
        return;
      }
    } else {
      c = Gj(c, b2);
      if (c !== null) {
        c.flags &= 32767;
        X$3 = c;
        return;
      }
      if (a2 !== null)
        a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        R = 6;
        X$3 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      X$3 = b2;
      return;
    }
    X$3 = b2 = a2;
  } while (b2 !== null);
  R === 0 && (R = 5);
}
function Ok(a2, b2, c) {
  var d = C$2, e2 = mk.transition;
  try {
    mk.transition = null, C$2 = 1, Vk(a2, b2, c, d);
  } finally {
    mk.transition = e2, C$2 = d;
  }
  return null;
}
function Vk(a2, b2, c, d) {
  do
    Gk();
  while (uk !== null);
  if ((W & 6) !== 0)
    throw Error(p$4(327));
  c = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (c === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c === a2.current)
    throw Error(p$4(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Ac(a2, f2);
  a2 === P && (X$3 = P = null, Y = 0);
  (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || tk || (tk = true, Ek(gc, function() {
    Gk();
    return null;
  }));
  f2 = (c.flags & 15990) !== 0;
  if ((c.subtreeFlags & 15990) !== 0 || f2) {
    f2 = mk.transition;
    mk.transition = null;
    var g = C$2;
    C$2 = 1;
    var h2 = W;
    W |= 4;
    lk.current = null;
    Mj(a2, c);
    bk(c, a2);
    Ne(Cf);
    cd = !!Bf;
    Cf = Bf = null;
    a2.current = c;
    fk(c);
    cc();
    W = h2;
    C$2 = g;
    mk.transition = f2;
  } else
    a2.current = c;
  tk && (tk = false, uk = a2, vk = e2);
  f2 = a2.pendingLanes;
  f2 === 0 && (Oi = null);
  lc(c.stateNode);
  Ck(a2, B());
  if (b2 !== null)
    for (d = a2.onRecoverableError, c = 0; c < b2.length; c++)
      d(b2[c]);
  if (Li)
    throw Li = false, a2 = Mi, Mi = null, a2;
  (vk & 1) !== 0 && a2.tag !== 0 && Gk();
  f2 = a2.pendingLanes;
  (f2 & 1) !== 0 ? a2 === xk ? wk++ : (wk = 0, xk = a2) : wk = 0;
  ig();
  return null;
}
function Gk() {
  if (uk !== null) {
    var a2 = Cc(vk), b2 = mk.transition, c = C$2;
    try {
      mk.transition = null;
      C$2 = 16 > a2 ? 16 : a2;
      if (uk === null)
        var d = false;
      else {
        a2 = uk;
        uk = null;
        vk = 0;
        if ((W & 6) !== 0)
          throw Error(p$4(331));
        var e2 = W;
        W |= 4;
        for (T$3 = a2.current; T$3 !== null; ) {
          var f2 = T$3, g = f2.child;
          if ((T$3.flags & 16) !== 0) {
            var h2 = f2.deletions;
            if (h2 !== null) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (T$3 = l2; T$3 !== null; ) {
                  var n2 = T$3;
                  switch (n2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(8, n2, f2);
                  }
                  var u2 = n2.child;
                  if (u2 !== null)
                    u2.return = n2, T$3 = u2;
                  else
                    for (; T$3 !== null; ) {
                      n2 = T$3;
                      var q2 = n2.sibling, y2 = n2.return;
                      Qj(n2);
                      if (n2 === l2) {
                        T$3 = null;
                        break;
                      }
                      if (q2 !== null) {
                        q2.return = y2;
                        T$3 = q2;
                        break;
                      }
                      T$3 = y2;
                    }
                }
              }
              var m2 = f2.alternate;
              if (m2 !== null) {
                var w2 = m2.child;
                if (w2 !== null) {
                  m2.child = null;
                  do {
                    var J2 = w2.sibling;
                    w2.sibling = null;
                    w2 = J2;
                  } while (w2 !== null);
                }
              }
              T$3 = f2;
            }
          }
          if ((f2.subtreeFlags & 2064) !== 0 && g !== null)
            g.return = f2, T$3 = g;
          else
            b:
              for (; T$3 !== null; ) {
                f2 = T$3;
                if ((f2.flags & 2048) !== 0)
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(9, f2, f2.return);
                  }
                var v2 = f2.sibling;
                if (v2 !== null) {
                  v2.return = f2.return;
                  T$3 = v2;
                  break b;
                }
                T$3 = f2.return;
              }
        }
        var x2 = a2.current;
        for (T$3 = x2; T$3 !== null; ) {
          g = T$3;
          var r2 = g.child;
          if ((g.subtreeFlags & 2064) !== 0 && r2 !== null)
            r2.return = g, T$3 = r2;
          else
            b:
              for (g = x2; T$3 !== null; ) {
                h2 = T$3;
                if ((h2.flags & 2048) !== 0)
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oj(9, h2);
                    }
                  } catch (Z2) {
                    U$1(h2, h2.return, Z2);
                  }
                if (h2 === g) {
                  T$3 = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (F2 !== null) {
                  F2.return = h2.return;
                  T$3 = F2;
                  break b;
                }
                T$3 = h2.return;
              }
        }
        W = e2;
        ig();
        if (kc && typeof kc.onPostCommitFiberRoot === "function")
          try {
            kc.onPostCommitFiberRoot(jc, a2);
          } catch (Z2) {
          }
        d = true;
      }
      return d;
    } finally {
      C$2 = c, mk.transition = b2;
    }
  }
  return false;
}
function Wk(a2, b2, c) {
  b2 = Hi(c, b2);
  b2 = Ki(a2, b2, 1);
  Ag(a2, b2);
  b2 = Jg();
  a2 = Ak(a2, 1);
  a2 !== null && (zc(a2, 1, b2), Ck(a2, b2));
}
function U$1(a2, b2, c) {
  if (a2.tag === 3)
    Wk(a2, a2, c);
  else
    for (; b2 !== null; ) {
      if (b2.tag === 3) {
        Wk(b2, a2, c);
        break;
      } else if (b2.tag === 1) {
        var d = b2.stateNode;
        if (typeof b2.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Oi === null || !Oi.has(d))) {
          a2 = Hi(c, a2);
          a2 = Ni(b2, a2, 1);
          Ag(b2, a2);
          a2 = Jg();
          b2 = Ak(b2, 1);
          b2 !== null && (zc(b2, 1, a2), Ck(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Qi(a2, b2, c) {
  var d = a2.pingCache;
  d !== null && d.delete(b2);
  b2 = Jg();
  a2.pingedLanes |= a2.suspendedLanes & c;
  P === a2 && (Y & c) === c && (R === 4 || R === 3 && (Y & 130023424) === Y && 500 > B() - dk ? Jk(a2, 0) : pk |= c);
  Ck(a2, b2);
}
function Xk(a2, b2) {
  b2 === 0 && ((a2.mode & 1) === 0 ? b2 = 1 : (b2 = rc, rc <<= 1, (rc & 130023424) === 0 && (rc = 4194304)));
  var c = Jg();
  a2 = Ak(a2, b2);
  a2 !== null && (zc(a2, b2, c), Ck(a2, c));
}
function zj(a2) {
  var b2 = a2.memoizedState, c = 0;
  b2 !== null && (c = b2.retryLane);
  Xk(a2, c);
}
function Zj(a2, b2) {
  var c = 0;
  switch (a2.tag) {
    case 13:
      var d = a2.stateNode;
      var e2 = a2.memoizedState;
      e2 !== null && (c = e2.retryLane);
      break;
    case 19:
      d = a2.stateNode;
      break;
    default:
      throw Error(p$4(314));
  }
  d !== null && d.delete(b2);
  Xk(a2, c);
}
var Uk;
Uk = function(a2, b2, c) {
  if (a2 !== null)
    if (a2.memoizedProps !== b2.pendingProps || Vf.current)
      tg = true;
    else {
      if ((a2.lanes & c) === 0 && (b2.flags & 128) === 0)
        return tg = false, Fj(a2, b2, c);
      tg = (a2.flags & 131072) !== 0 ? true : false;
    }
  else
    tg = false, I$1 && (b2.flags & 1048576) !== 0 && ah(b2, Ug, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d = b2.type;
      a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
      a2 = b2.pendingProps;
      var e2 = Xf(b2, H$1.current);
      sg(b2, c);
      e2 = Uh(null, b2, d, a2, e2, c);
      var f2 = Zh();
      b2.flags |= 1;
      typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0 ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Yf(d) ? (f2 = true, bg(b2)) : f2 = false, b2.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null, xg(b2), e2.updater = Mg, b2.stateNode = e2, e2._reactInternals = b2, Qg(b2, d, a2, c), b2 = pj(null, b2, d, true, f2, c)) : (b2.tag = 0, I$1 && f2 && bh(b2), ej(null, b2, e2, c), b2 = b2.child);
      return b2;
    case 16:
      d = b2.elementType;
      a: {
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        e2 = d._init;
        d = e2(d._payload);
        b2.type = d;
        e2 = b2.tag = Yk(d);
        a2 = kg(d, a2);
        switch (e2) {
          case 0:
            b2 = kj(null, b2, d, a2, c);
            break a;
          case 1:
            b2 = oj(null, b2, d, a2, c);
            break a;
          case 11:
            b2 = fj(null, b2, d, a2, c);
            break a;
          case 14:
            b2 = hj(null, b2, d, kg(d.type, a2), c);
            break a;
        }
        throw Error(p$4(306, d, ""));
      }
      return b2;
    case 0:
      return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : kg(d, e2), kj(a2, b2, d, e2, c);
    case 1:
      return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : kg(d, e2), oj(a2, b2, d, e2, c);
    case 3:
      a: {
        qj(b2);
        if (a2 === null)
          throw Error(p$4(387));
        d = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        yg(a2, b2);
        Eg(b2, d, null, c);
        var g = b2.memoizedState;
        d = g.element;
        if (f2.isDehydrated)
          if (f2 = {
            element: d,
            isDehydrated: false,
            cache: g.cache,
            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
            transitions: g.transitions
          }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Error(p$4(423));
            b2 = rj(a2, b2, d, c, e2);
            break a;
          } else if (d !== e2) {
            e2 = Error(p$4(424));
            b2 = rj(a2, b2, d, c, e2);
            break a;
          } else
            for (eh = Kf(b2.stateNode.containerInfo.firstChild), dh = b2, I$1 = true, fh = null, c = zh(b2, null, d, c), b2.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          nh();
          if (d === e2) {
            b2 = gj(a2, b2, c);
            break a;
          }
          ej(a2, b2, d, c);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Hh(b2), a2 === null && kh(b2), d = b2.type, e2 = b2.pendingProps, f2 = a2 !== null ? a2.memoizedProps : null, g = e2.children, Df(d, e2) ? g = null : f2 !== null && Df(d, f2) && (b2.flags |= 32), nj(a2, b2), ej(a2, b2, g, c), b2.child;
    case 6:
      return a2 === null && kh(b2), null;
    case 13:
      return vj(a2, b2, c);
    case 4:
      return Fh(b2, b2.stateNode.containerInfo), d = b2.pendingProps, a2 === null ? b2.child = yh(b2, null, d, c) : ej(a2, b2, d, c), b2.child;
    case 11:
      return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : kg(d, e2), fj(a2, b2, d, e2, c);
    case 7:
      return ej(a2, b2, b2.pendingProps, c), b2.child;
    case 8:
      return ej(a2, b2, b2.pendingProps.children, c), b2.child;
    case 12:
      return ej(a2, b2, b2.pendingProps.children, c), b2.child;
    case 10:
      a: {
        d = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g = e2.value;
        G(lg, d._currentValue);
        d._currentValue = g;
        if (f2 !== null)
          if (Ge(f2.value, g)) {
            if (f2.children === e2.children && !Vf.current) {
              b2 = gj(a2, b2, c);
              break a;
            }
          } else
            for (f2 = b2.child, f2 !== null && (f2.return = b2); f2 !== null; ) {
              var h2 = f2.dependencies;
              if (h2 !== null) {
                g = f2.child;
                for (var k2 = h2.firstContext; k2 !== null; ) {
                  if (k2.context === d) {
                    if (f2.tag === 1) {
                      k2 = zg(-1, c & -c);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (l2 !== null) {
                        l2 = l2.shared;
                        var n2 = l2.pending;
                        n2 === null ? k2.next = k2 : (k2.next = n2.next, n2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    k2 !== null && (k2.lanes |= c);
                    rg(f2.return, c, b2);
                    h2.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (f2.tag === 10)
                g = f2.type === b2.type ? null : f2.child;
              else if (f2.tag === 18) {
                g = f2.return;
                if (g === null)
                  throw Error(p$4(341));
                g.lanes |= c;
                h2 = g.alternate;
                h2 !== null && (h2.lanes |= c);
                rg(g, c, b2);
                g = f2.sibling;
              } else
                g = f2.child;
              if (g !== null)
                g.return = f2;
              else
                for (g = f2; g !== null; ) {
                  if (g === b2) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (f2 !== null) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
              f2 = g;
            }
        ej(a2, b2, e2.children, c);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d = b2.pendingProps.children, sg(b2, c), e2 = ug(e2), d = d(e2), b2.flags |= 1, ej(a2, b2, d, c), b2.child;
    case 14:
      return d = b2.type, e2 = kg(d, b2.pendingProps), e2 = kg(d.type, e2), hj(a2, b2, d, e2, c);
    case 15:
      return jj(a2, b2, b2.type, b2.pendingProps, c);
    case 17:
      return d = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d ? e2 : kg(d, e2), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Yf(d) ? (a2 = true, bg(b2)) : a2 = false, sg(b2, c), Og(b2, d, e2), Qg(b2, d, e2, c), pj(null, b2, d, true, a2, c);
    case 19:
      return Ej(a2, b2, c);
    case 22:
      return lj(a2, b2, c);
  }
  throw Error(p$4(156, b2.tag));
};
function Ek(a2, b2) {
  return $b(a2, b2);
}
function Zk(a2, b2, c, d) {
  this.tag = a2;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function hh(a2, b2, c, d) {
  return new Zk(a2, b2, c, d);
}
function ij(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function Yk(a2) {
  if (typeof a2 === "function")
    return ij(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Ca)
      return 11;
    if (a2 === Fa)
      return 14;
  }
  return 2;
}
function th(a2, b2) {
  var c = a2.alternate;
  c === null ? (c = hh(a2.tag, b2, a2.key, a2.mode), c.elementType = a2.elementType, c.type = a2.type, c.stateNode = a2.stateNode, c.alternate = a2, a2.alternate = c) : (c.pendingProps = b2, c.type = a2.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a2.flags & 14680064;
  c.childLanes = a2.childLanes;
  c.lanes = a2.lanes;
  c.child = a2.child;
  c.memoizedProps = a2.memoizedProps;
  c.memoizedState = a2.memoizedState;
  c.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c.sibling = a2.sibling;
  c.index = a2.index;
  c.ref = a2.ref;
  return c;
}
function vh(a2, b2, c, d, e2, f2) {
  var g = 2;
  d = a2;
  if (typeof a2 === "function")
    ij(a2) && (g = 1);
  else if (typeof a2 === "string")
    g = 5;
  else
    a:
      switch (a2) {
        case wa:
          return xh(c.children, e2, f2, b2);
        case xa:
          g = 8;
          e2 |= 8;
          break;
        case za:
          return a2 = hh(12, c, b2, e2 | 2), a2.elementType = za, a2.lanes = f2, a2;
        case Da:
          return a2 = hh(13, c, b2, e2), a2.elementType = Da, a2.lanes = f2, a2;
        case Ea:
          return a2 = hh(19, c, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
        case Ha:
          return wj(c, e2, f2, b2);
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
              case Aa:
                g = 10;
                break a;
              case Ba:
                g = 9;
                break a;
              case Ca:
                g = 11;
                break a;
              case Fa:
                g = 14;
                break a;
              case Ga:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p$4(130, a2 == null ? a2 : typeof a2, ""));
      }
  b2 = hh(g, c, b2, e2);
  b2.elementType = a2;
  b2.type = d;
  b2.lanes = f2;
  return b2;
}
function xh(a2, b2, c, d) {
  a2 = hh(7, a2, d, b2);
  a2.lanes = c;
  return a2;
}
function wj(a2, b2, c, d) {
  a2 = hh(22, a2, d, b2);
  a2.elementType = Ha;
  a2.lanes = c;
  a2.stateNode = {};
  return a2;
}
function uh(a2, b2, c) {
  a2 = hh(6, a2, null, b2);
  a2.lanes = c;
  return a2;
}
function wh(a2, b2, c) {
  b2 = hh(4, a2.children !== null ? a2.children : [], a2.key, b2);
  b2.lanes = c;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function $k(a2, b2, c, d, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = yc(0);
  this.expirationTimes = yc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = yc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function al(a2, b2, c, d, e2, f2, g, h2, k2) {
  a2 = new $k(a2, b2, c, h2, k2);
  b2 === 1 ? (b2 = 1, f2 === true && (b2 |= 8)) : b2 = 0;
  f2 = hh(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  xg(f2);
  return a2;
}
function bl(a2, b2, c) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: va, key: d == null ? null : "" + d, children: a2, containerInfo: b2, implementation: c };
}
function cl(a2) {
  if (!a2)
    return Uf;
  a2 = a2._reactInternals;
  a: {
    if (Ub(a2) !== a2 || a2.tag !== 1)
      throw Error(p$4(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Yf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (b2 !== null);
    throw Error(p$4(171));
  }
  if (a2.tag === 1) {
    var c = a2.type;
    if (Yf(c))
      return ag(a2, c, b2);
  }
  return b2;
}
function dl(a2, b2, c, d, e2, f2, g, h2, k2) {
  a2 = al(c, d, true, a2, e2, f2, g, h2, k2);
  a2.context = cl(null);
  c = a2.current;
  d = Jg();
  e2 = Kg(c);
  f2 = zg(d, e2);
  f2.callback = b2 !== void 0 && b2 !== null ? b2 : null;
  Ag(c, f2);
  a2.current.lanes = e2;
  zc(a2, e2, d);
  Ck(a2, d);
  return a2;
}
function el(a2, b2, c, d) {
  var e2 = b2.current, f2 = Jg(), g = Kg(e2);
  c = cl(c);
  b2.context === null ? b2.context = c : b2.pendingContext = c;
  b2 = zg(f2, g);
  b2.payload = { element: a2 };
  d = d === void 0 ? null : d;
  d !== null && (b2.callback = d);
  Ag(e2, b2);
  a2 = Lg(e2, g, f2);
  a2 !== null && Cg(a2, e2, g);
  return g;
}
function fl(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function gl(a2, b2) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c = a2.retryLane;
    a2.retryLane = c !== 0 && c < b2 ? c : b2;
  }
}
function hl(a2, b2) {
  gl(a2, b2);
  (a2 = a2.alternate) && gl(a2, b2);
}
function il() {
  return null;
}
var jl = typeof reportError === "function" ? reportError : function(a2) {
  console.error(a2);
};
function kl(a2) {
  this._internalRoot = a2;
}
ll.prototype.render = kl.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (b2 === null)
    throw Error(p$4(409));
  el(a2, b2, null, null);
};
ll.prototype.unmount = kl.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (a2 !== null) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Qk(function() {
      el(null, a2, null, null);
    });
    b2[tf] = null;
  }
};
function ll(a2) {
  this._internalRoot = a2;
}
ll.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Gc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c = 0; c < Pc.length && b2 !== 0 && b2 < Pc[c].priority; c++)
      ;
    Pc.splice(c, 0, a2);
    c === 0 && Uc(a2);
  }
};
function ml(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11);
}
function nl(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function ol() {
}
function pl(a2, b2, c, d, e2) {
  if (e2) {
    if (typeof d === "function") {
      var f2 = d;
      d = function() {
        var a3 = fl(g);
        f2.call(a3);
      };
    }
    var g = dl(b2, d, a2, 0, null, false, false, "", ol);
    a2._reactRootContainer = g;
    a2[tf] = g.current;
    rf(a2.nodeType === 8 ? a2.parentNode : a2);
    Qk();
    return g;
  }
  for (; e2 = a2.lastChild; )
    a2.removeChild(e2);
  if (typeof d === "function") {
    var h2 = d;
    d = function() {
      var a3 = fl(k2);
      h2.call(a3);
    };
  }
  var k2 = al(a2, 0, false, null, null, false, false, "", ol);
  a2._reactRootContainer = k2;
  a2[tf] = k2.current;
  rf(a2.nodeType === 8 ? a2.parentNode : a2);
  Qk(function() {
    el(b2, k2, c, d);
  });
  return k2;
}
function ql(a2, b2, c, d, e2) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if (typeof e2 === "function") {
      var h2 = e2;
      e2 = function() {
        var a3 = fl(g);
        h2.call(a3);
      };
    }
    el(b2, g, a2, e2);
  } else
    g = pl(c, b2, a2, e2, d);
  return fl(g);
}
Dc = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c = sc(b2.pendingLanes);
        c !== 0 && (Bc(b2, c | 1), Ck(b2, B()), (W & 6) === 0 && (aj = B() + 500, ig()));
      }
      break;
    case 13:
      var d = Jg();
      Qk(function() {
        return Lg(a2, 1, d);
      });
      hl(a2, 1);
  }
};
Ec = function(a2) {
  if (a2.tag === 13) {
    var b2 = Jg();
    Lg(a2, 134217728, b2);
    hl(a2, 134217728);
  }
};
Fc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Jg(), c = Kg(a2);
    Lg(a2, c, b2);
    hl(a2, c);
  }
};
Gc = function() {
  return C$2;
};
Hc = function(a2, b2) {
  var c = C$2;
  try {
    return C$2 = a2, b2();
  } finally {
    C$2 = c;
  }
};
xb = function(a2, b2, c) {
  switch (b2) {
    case "input":
      $a(a2, c);
      b2 = c.name;
      if (c.type === "radio" && b2 != null) {
        for (c = a2; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c.length; b2++) {
          var d = c[b2];
          if (d !== a2 && d.form === a2.form) {
            var e2 = Cb(d);
            if (!e2)
              throw Error(p$4(90));
            Va(d);
            $a(d, e2);
          }
        }
      }
      break;
    case "textarea":
      hb(a2, c);
      break;
    case "select":
      b2 = c.value, b2 != null && eb(a2, !!c.multiple, b2, false);
  }
};
Fb = Pk;
Gb = Qk;
var rl = { usingClientEntryPoint: false, Events: [Bb, te, Cb, Db, Eb, Pk] }, sl = { findFiberByHostInstance: Vc, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom" };
var tl = { bundleType: sl.bundleType, version: sl.version, rendererPackageName: sl.rendererPackageName, rendererConfig: sl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ta.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Yb(a2);
  return a2 === null ? null : a2.stateNode;
}, findFiberByHostInstance: sl.findFiberByHostInstance || il, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.1.0-next-22edb9f77-20220426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ul.isDisabled && ul.supportsFiber)
    try {
      jc = ul.inject(tl), kc = ul;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rl;
reactDom_production_min.createPortal = function(a2, b2) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ml(b2))
    throw Error(p$4(200));
  return bl(a2, b2, null, c);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!ml(a2))
    throw Error(p$4(299));
  var c = false, d = "", e2 = jl;
  b2 !== null && b2 !== void 0 && (b2.unstable_strictMode === true && (c = true), b2.identifierPrefix !== void 0 && (d = b2.identifierPrefix), b2.onRecoverableError !== void 0 && (e2 = b2.onRecoverableError));
  b2 = al(a2, 1, false, null, null, c, false, d, e2);
  a2[tf] = b2.current;
  rf(a2.nodeType === 8 ? a2.parentNode : a2);
  return new kl(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b2 = a2._reactInternals;
  if (b2 === void 0) {
    if (typeof a2.render === "function")
      throw Error(p$4(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$4(268, a2));
  }
  a2 = Yb(b2);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Qk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c) {
  if (!nl(b2))
    throw Error(p$4(200));
  return ql(null, a2, b2, true, c);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c) {
  if (!ml(a2))
    throw Error(p$4(405));
  var d = c != null && c.hydratedSources || null, e2 = false, f2 = "", g = jl;
  c !== null && c !== void 0 && (c.unstable_strictMode === true && (e2 = true), c.identifierPrefix !== void 0 && (f2 = c.identifierPrefix), c.onRecoverableError !== void 0 && (g = c.onRecoverableError));
  b2 = dl(b2, null, a2, 1, c != null ? c : null, e2, false, f2, g);
  a2[tf] = b2.current;
  rf(a2);
  if (d)
    for (a2 = 0; a2 < d.length; a2++)
      c = d[a2], e2 = c._getVersion, e2 = e2(c._source), b2.mutableSourceEagerHydrationData == null ? b2.mutableSourceEagerHydrationData = [c, e2] : b2.mutableSourceEagerHydrationData.push(c, e2);
  return new ll(b2);
};
reactDom_production_min.render = function(a2, b2, c) {
  if (!nl(b2))
    throw Error(p$4(200));
  return ql(null, a2, b2, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!nl(a2))
    throw Error(p$4(40));
  return a2._reactRootContainer ? (Qk(function() {
    ql(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[tf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Pk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c, d) {
  if (!nl(c))
    throw Error(p$4(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(p$4(38));
  return ql(a2, b2, c, false, d);
};
reactDom_production_min.version = "18.1.0-next-22edb9f77-20220426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var m$2 = reactDom.exports;
{
  client.createRoot = m$2.createRoot;
  client.hydrateRoot = m$2.hydrateRoot;
}
var IconContext = /* @__PURE__ */ react.exports.createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});
var renderPathForWeight = function renderPathForWeight2(weight, color2, pathsByWeight2) {
  var path = pathsByWeight2.get(weight);
  if (!!path)
    return path(color2);
  console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
  return null;
};
function _objectWithoutPropertiesLoose(source2, excluded) {
  if (source2 == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source2);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source2[key];
  }
  return target;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$3 = react.exports, k = Symbol.for("react.element"), l$2 = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n$1 = f$3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$3 = { key: true, ref: true, __self: true, __source: true };
function q(c, a2, g) {
  var b2, d = {}, e2 = null, h2 = null;
  g !== void 0 && (e2 = "" + g);
  a2.key !== void 0 && (e2 = "" + a2.key);
  a2.ref !== void 0 && (h2 = a2.ref);
  for (b2 in a2)
    m$1.call(a2, b2) && !p$3.hasOwnProperty(b2) && (d[b2] = a2[b2]);
  if (c && c.defaultProps)
    for (b2 in a2 = c.defaultProps, a2)
      d[b2] === void 0 && (d[b2] = a2[b2]);
  return { $$typeof: k, type: c, key: e2, ref: h2, props: d, _owner: n$1.current };
}
reactJsxRuntime_production_min.Fragment = l$2;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
var IconBase = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  var alt = props.alt, color2 = props.color, size = props.size, weight = props.weight, mirrored = props.mirrored, children = props.children, renderPath8 = props.renderPath, restProps = _objectWithoutPropertiesLoose(props, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]);
  var _useContext = react.exports.useContext(IconContext), _useContext$color = _useContext.color, contextColor = _useContext$color === void 0 ? "currentColor" : _useContext$color, contextSize = _useContext.size, _useContext$weight = _useContext.weight, contextWeight = _useContext$weight === void 0 ? "regular" : _useContext$weight, _useContext$mirrored = _useContext.mirrored, contextMirrored = _useContext$mirrored === void 0 ? false : _useContext$mirrored, restContext = _objectWithoutPropertiesLoose(_useContext, ["color", "size", "weight", "mirrored"]);
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({}, Object.assign({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size != null ? size : contextSize,
    height: size != null ? size : contextSize,
    fill: color2 != null ? color2 : contextColor,
    viewBox: "0 0 256 256",
    transform: mirrored || contextMirrored ? "scale(-1, 1)" : void 0
  }, restContext, restProps)), {
    children: [!!alt && /* @__PURE__ */ jsx("title", {
      children: alt
    }), children, /* @__PURE__ */ jsx("rect", {
      width: "256",
      height: "256",
      fill: "none"
    }), renderPath8(weight != null ? weight : contextWeight, color2 != null ? color2 : contextColor)]
  }));
});
IconBase.displayName = "IconBase";
var IconBase$1 = IconBase;
var pathsByWeight$5 = /* @__PURE__ */ new Map();
pathsByWeight$5.set("bold", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "216",
      y1: "128",
      x2: "40",
      y2: "128",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24"
    }), /* @__PURE__ */ jsx("polyline", {
      points: "112 56 40 128 112 200",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24"
    })]
  });
});
pathsByWeight$5.set("duotone", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "216",
      y1: "128",
      x2: "40",
      y2: "128",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("polyline", {
      points: "112 56 40 128 112 200",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    })]
  });
});
pathsByWeight$5.set("fill", function() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("path", {
      d: "M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"
    })
  });
});
pathsByWeight$5.set("light", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "216",
      y1: "128",
      x2: "40",
      y2: "128",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12"
    }), /* @__PURE__ */ jsx("polyline", {
      points: "112 56 40 128 112 200",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12"
    })]
  });
});
pathsByWeight$5.set("thin", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "216",
      y1: "128",
      x2: "40",
      y2: "128",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    }), /* @__PURE__ */ jsx("polyline", {
      points: "112 56 40 128 112 200",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    })]
  });
});
pathsByWeight$5.set("regular", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "216",
      y1: "128",
      x2: "40",
      y2: "128",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("polyline", {
      points: "112 56 40 128 112 200",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    })]
  });
});
var renderPath$5 = function renderPath2(weight, color2) {
  return renderPathForWeight(weight, color2, pathsByWeight$5);
};
var ArrowLeft = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsx(IconBase$1, __spreadValues({}, Object.assign({
    ref
  }, props, {
    renderPath: renderPath$5
  })));
});
ArrowLeft.displayName = "ArrowLeft";
var ArrowLeft$1 = ArrowLeft;
var pathsByWeight$4 = /* @__PURE__ */ new Map();
pathsByWeight$4.set("bold", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "128",
      cy: "132",
      r: "36",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24"
    })]
  });
});
pathsByWeight$4.set("duotone", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z",
      opacity: "0.2"
    }), /* @__PURE__ */ jsx("path", {
      d: "M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "128",
      cy: "132",
      r: "36",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    })]
  });
});
pathsByWeight$4.set("fill", function() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("path", {
      d: "M208,56H180.3L166.7,35.6A7.9,7.9,0,0,0,160,32H96a7.9,7.9,0,0,0-6.7,3.6L75.7,56H48A24.1,24.1,0,0,0,24,80V192a24.1,24.1,0,0,0,24,24H208a24.1,24.1,0,0,0,24-24V80A24.1,24.1,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z"
    })
  });
});
pathsByWeight$4.set("light", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "128",
      cy: "132",
      r: "36",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12"
    })]
  });
});
pathsByWeight$4.set("thin", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "128",
      cy: "132",
      r: "36",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    })]
  });
});
pathsByWeight$4.set("regular", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "128",
      cy: "132",
      r: "36",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    })]
  });
});
var renderPath$4 = function renderPath3(weight, color2) {
  return renderPathForWeight(weight, color2, pathsByWeight$4);
};
var Camera = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsx(IconBase$1, __spreadValues({}, Object.assign({
    ref
  }, props, {
    renderPath: renderPath$4
  })));
});
Camera.displayName = "Camera";
var Camera$1 = Camera;
var pathsByWeight$3 = /* @__PURE__ */ new Map();
pathsByWeight$3.set("bold", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "132",
      cy: "128",
      r: "16"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "180",
      cy: "128",
      r: "16"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "84",
      cy: "128",
      r: "16"
    })]
  });
});
pathsByWeight$3.set("duotone", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
      opacity: "0.2"
    }), /* @__PURE__ */ jsx("path", {
      d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "132",
      cy: "128",
      r: "12"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "84",
      cy: "128",
      r: "12"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "180",
      cy: "128",
      r: "12"
    })]
  });
});
pathsByWeight$3.set("fill", function() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("path", {
      d: "M132,24A100.2,100.2,0,0,0,32,124v84.3A15.7,15.7,0,0,0,47.7,224H132a100,100,0,0,0,0-200ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,132,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,180,140Z"
    })
  });
});
pathsByWeight$3.set("light", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "132",
      cy: "128",
      r: "10"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "180",
      cy: "128",
      r: "10"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "84",
      cy: "128",
      r: "10"
    })]
  });
});
pathsByWeight$3.set("thin", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "132",
      cy: "128",
      r: "8"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "84",
      cy: "128",
      r: "8"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "180",
      cy: "128",
      r: "8"
    })]
  });
});
pathsByWeight$3.set("regular", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "132",
      cy: "128",
      r: "12"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "84",
      cy: "128",
      r: "12"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "180",
      cy: "128",
      r: "12"
    })]
  });
});
var renderPath$3 = function renderPath4(weight, color2) {
  return renderPathForWeight(weight, color2, pathsByWeight$3);
};
var ChatTeardropDots = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsx(IconBase$1, __spreadValues({}, Object.assign({
    ref
  }, props, {
    renderPath: renderPath$3
  })));
});
ChatTeardropDots.displayName = "ChatTeardropDots";
var ChatTeardropDots$1 = ChatTeardropDots;
var pathsByWeight$2 = /* @__PURE__ */ new Map();
pathsByWeight$2.set("bold", function(color2) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("path", {
      d: "M168,40.7a96,96,0,1,1-80,0",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24"
    })
  });
});
pathsByWeight$2.set("duotone", function(color2) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("path", {
      d: "M168,40.7a96,96,0,1,1-80,0",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    })
  });
});
pathsByWeight$2.set("fill", function() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("path", {
      d: "M232,128A104,104,0,1,1,84.7,33.4a8.1,8.1,0,0,1,10.6,4,8,8,0,0,1-4,10.6,88,88,0,1,0,73.4,0,8,8,0,0,1-4-10.6,8.1,8.1,0,0,1,10.6-4A104.4,104.4,0,0,1,232,128Z"
    })
  });
});
pathsByWeight$2.set("light", function(color2) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("path", {
      d: "M168,40.7a96,96,0,1,1-80,0",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12"
    })
  });
});
pathsByWeight$2.set("thin", function(color2) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("path", {
      d: "M168,40.7a96,96,0,1,1-80,0",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    })
  });
});
pathsByWeight$2.set("regular", function(color2) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("path", {
      d: "M168,40.7a96,96,0,1,1-80,0",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    })
  });
});
var renderPath$2 = function renderPath5(weight, color2) {
  return renderPathForWeight(weight, color2, pathsByWeight$2);
};
var CircleNotch = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsx(IconBase$1, __spreadValues({}, Object.assign({
    ref
  }, props, {
    renderPath: renderPath$2
  })));
});
CircleNotch.displayName = "CircleNotch";
var CircleNotch$1 = CircleNotch;
var pathsByWeight$1 = /* @__PURE__ */ new Map();
pathsByWeight$1.set("bold", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "216",
      y1: "60",
      x2: "40",
      y2: "60",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24"
    }), /* @__PURE__ */ jsx("line", {
      x1: "104",
      y1: "104",
      x2: "104",
      y2: "168",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24"
    }), /* @__PURE__ */ jsx("line", {
      x1: "152",
      y1: "104",
      x2: "152",
      y2: "168",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24"
    }), /* @__PURE__ */ jsx("path", {
      d: "M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24"
    }), /* @__PURE__ */ jsx("path", {
      d: "M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24"
    })]
  });
});
pathsByWeight$1.set("duotone", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",
      opacity: "0.2"
    }), /* @__PURE__ */ jsx("line", {
      x1: "216",
      y1: "56",
      x2: "40",
      y2: "56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("line", {
      x1: "104",
      y1: "104",
      x2: "104",
      y2: "168",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("line", {
      x1: "152",
      y1: "104",
      x2: "152",
      y2: "168",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("path", {
      d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("path", {
      d: "M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    })]
  });
});
pathsByWeight$1.set("fill", function() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("path", {
      d: "M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"
    })
  });
});
pathsByWeight$1.set("light", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "216",
      y1: "56",
      x2: "40",
      y2: "56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12"
    }), /* @__PURE__ */ jsx("line", {
      x1: "104",
      y1: "104",
      x2: "104",
      y2: "168",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12"
    }), /* @__PURE__ */ jsx("line", {
      x1: "152",
      y1: "104",
      x2: "152",
      y2: "168",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12"
    }), /* @__PURE__ */ jsx("path", {
      d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12"
    }), /* @__PURE__ */ jsx("path", {
      d: "M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12"
    })]
  });
});
pathsByWeight$1.set("thin", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "216",
      y1: "56",
      x2: "40",
      y2: "56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    }), /* @__PURE__ */ jsx("line", {
      x1: "104",
      y1: "104",
      x2: "104",
      y2: "168",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    }), /* @__PURE__ */ jsx("line", {
      x1: "152",
      y1: "104",
      x2: "152",
      y2: "168",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    }), /* @__PURE__ */ jsx("path", {
      d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    }), /* @__PURE__ */ jsx("path", {
      d: "M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    })]
  });
});
pathsByWeight$1.set("regular", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "216",
      y1: "56",
      x2: "40",
      y2: "56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("line", {
      x1: "104",
      y1: "104",
      x2: "104",
      y2: "168",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("line", {
      x1: "152",
      y1: "104",
      x2: "152",
      y2: "168",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("path", {
      d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("path", {
      d: "M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    })]
  });
});
var renderPath$1 = function renderPath6(weight, color2) {
  return renderPathForWeight(weight, color2, pathsByWeight$1);
};
var Trash = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsx(IconBase$1, __spreadValues({}, Object.assign({
    ref
  }, props, {
    renderPath: renderPath$1
  })));
});
Trash.displayName = "Trash";
var Trash$1 = Trash;
var pathsByWeight = /* @__PURE__ */ new Map();
pathsByWeight.set("bold", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "200",
      y1: "56",
      x2: "56",
      y2: "200",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24"
    }), /* @__PURE__ */ jsx("line", {
      x1: "200",
      y1: "200",
      x2: "56",
      y2: "56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24"
    })]
  });
});
pathsByWeight.set("duotone", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "200",
      y1: "56",
      x2: "56",
      y2: "200",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("line", {
      x1: "200",
      y1: "200",
      x2: "56",
      y2: "56",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    })]
  });
});
pathsByWeight.set("fill", function() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("path", {
      d: "M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"
    })
  });
});
pathsByWeight.set("light", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "200",
      y1: "56",
      x2: "56",
      y2: "200",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12"
    }), /* @__PURE__ */ jsx("line", {
      x1: "200",
      y1: "200",
      x2: "56",
      y2: "56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12"
    })]
  });
});
pathsByWeight.set("thin", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "200",
      y1: "56",
      x2: "56",
      y2: "200",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    }), /* @__PURE__ */ jsx("line", {
      x1: "200",
      y1: "200",
      x2: "56",
      y2: "56",
      fill: "none",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    })]
  });
});
pathsByWeight.set("regular", function(color2) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("line", {
      x1: "200",
      y1: "56",
      x2: "56",
      y2: "200",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    }), /* @__PURE__ */ jsx("line", {
      x1: "200",
      y1: "200",
      x2: "56",
      y2: "56",
      stroke: color2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16"
    })]
  });
});
var renderPath = function renderPath7(weight, color2) {
  return renderPathForWeight(weight, color2, pathsByWeight);
};
var X$1 = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsx(IconBase$1, __spreadValues({}, Object.assign({
    ref
  }, props, {
    renderPath
  })));
});
X$1.displayName = "X";
var X$2 = X$1;
const t$2 = typeof window != "undefined" ? react.exports.useLayoutEffect : react.exports.useEffect;
let r$2 = { serverHandoffComplete: false };
function a$1() {
  let [e2, f2] = react.exports.useState(r$2.serverHandoffComplete);
  return react.exports.useEffect(() => {
    e2 !== true && f2(true);
  }, [e2]), react.exports.useEffect(() => {
    r$2.serverHandoffComplete === false && (r$2.serverHandoffComplete = true);
  }, []), e2;
}
var u$2;
let l$1 = 0;
function r$1() {
  return ++l$1;
}
let I = (u$2 = React.useId) != null ? u$2 : function() {
  let n2 = a$1(), [e2, o2] = React.useState(n2 ? r$1 : null);
  return t$2(() => {
    e2 === null && o2(r$1());
  }, [e2]), e2 != null ? "" + e2 : void 0;
};
function s$3(e2) {
  let r2 = react.exports.useRef(e2);
  return t$2(() => {
    r2.current = e2;
  }, [e2]), r2;
}
let l = Symbol();
function T$2(...n2) {
  let t2 = react.exports.useRef(n2);
  react.exports.useEffect(() => {
    t2.current = n2;
  }, [n2]);
  let c = react.exports.useCallback((e2) => {
    for (let u2 of t2.current)
      u2 != null && (typeof u2 == "function" ? u2(e2) : u2.current = e2);
  }, [t2]);
  return n2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[l])) ? void 0 : c;
}
function u$1(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$1), t2;
}
var b$1 = ((n2) => (n2[n2.None = 0] = "None", n2[n2.RenderStrategy = 1] = "RenderStrategy", n2[n2.Static = 2] = "Static", n2))(b$1 || {}), x = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(x || {});
function A$1({ ourProps: r2, theirProps: t2, slot: e2, defaultTag: n2, features: o2, visible: a2 = true, name: l2 }) {
  let s2 = m(t2, r2);
  if (a2)
    return p$2(s2, e2, n2, l2);
  let u2 = o2 != null ? o2 : 0;
  if (u2 & 2) {
    let _a = s2, { static: i2 = false } = _a, d = __objRest(_a, ["static"]);
    if (i2)
      return p$2(d, e2, n2, l2);
  }
  if (u2 & 1) {
    let _b = s2, { unmount: i2 = true } = _b, d = __objRest(_b, ["unmount"]);
    return u$1(i2 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return p$2(__spreadProps(__spreadValues({}, d), { hidden: true, style: { display: "none" } }), e2, n2, l2);
    } });
  }
  return p$2(s2, e2, n2, l2);
}
function p$2(r2, t2 = {}, e2, n2) {
  let _a = f$2(r2, ["unmount", "static"]), { as: o2 = e2, children: a2, refName: l2 = "ref" } = _a, s2 = __objRest(_a, ["as", "children", "refName"]), u2 = r2.ref !== void 0 ? { [l2]: r2.ref } : {}, i2 = typeof a2 == "function" ? a2(t2) : a2;
  if (s2.className && typeof s2.className == "function" && (s2.className = s2.className(t2)), o2 === react.exports.Fragment && Object.keys(y(s2)).length > 0) {
    if (!react.exports.isValidElement(i2) || Array.isArray(i2) && i2.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s2).map((d) => `  - ${d}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d) => `  - ${d}`).join(`
`)].join(`
`));
    return react.exports.cloneElement(i2, Object.assign({}, m(i2.props, y(f$2(s2, ["ref"]))), u2));
  }
  return react.exports.createElement(o2, Object.assign({}, f$2(s2, ["ref"]), o2 !== react.exports.Fragment && u2), i2);
}
function m(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let o2 of r2)
    for (let a2 in o2)
      a2.startsWith("on") && typeof o2[a2] == "function" ? (e2[a2] != null || (e2[a2] = []), e2[a2].push(o2[a2])) : t2[a2] = o2[a2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((o2) => [o2, void 0])));
  for (let o2 in e2)
    Object.assign(t2, { [o2](a2) {
      let l2 = e2[o2];
      for (let s2 of l2) {
        if (a2.defaultPrevented)
          return;
        s2(a2);
      }
    } });
  return t2;
}
function H(r2) {
  var t2;
  return Object.assign(react.exports.forwardRef(r2), { displayName: (t2 = r2.displayName) != null ? t2 : r2.name });
}
function y(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function f$2(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let n2 of t2)
    n2 in e2 && delete e2[n2];
  return e2;
}
var o$1 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$1 || {});
function r(n2) {
  let e2 = n2.parentElement, l2 = null;
  for (; e2 && !(e2 instanceof HTMLFieldSetElement); )
    e2 instanceof HTMLLegendElement && (l2 = e2), e2 = e2.parentElement;
  let t2 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
  return t2 && i$5(l2) ? false : t2;
}
function i$5(n2) {
  if (!n2)
    return false;
  let e2 = n2.previousElementSibling;
  for (; e2 !== null; ) {
    if (e2 instanceof HTMLLegendElement)
      return false;
    e2 = e2.previousElementSibling;
  }
  return true;
}
function t$1(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function s$2(e2, r2, n2) {
  let o2 = s$3(r2);
  react.exports.useEffect(() => {
    function t2(i2) {
      o2.current(i2);
    }
    return window.addEventListener(e2, t2, n2), () => window.removeEventListener(e2, t2, n2);
  }, [e2, n2]);
}
var C$1 = ((r2) => (r2[r2.None = 1] = "None", r2[r2.IgnoreScrollbars = 2] = "IgnoreScrollbars", r2))(C$1 || {});
function w(c, a2, r2 = 1) {
  let i2 = react.exports.useRef(false), l2 = s$3((n2) => {
    if (i2.current)
      return;
    i2.current = true, t$1(() => {
      i2.current = false;
    });
    let f2 = function t2(e2) {
      return typeof e2 == "function" ? t2(e2()) : Array.isArray(e2) || e2 instanceof Set ? e2 : [e2];
    }(c), o2 = n2.target;
    if (!!o2.ownerDocument.documentElement.contains(o2)) {
      if ((r2 & 2) === 2) {
        let t2 = 20, e2 = o2.ownerDocument.documentElement;
        if (n2.clientX > e2.clientWidth - t2 || n2.clientX < t2 || n2.clientY > e2.clientHeight - t2 || n2.clientY < t2)
          return;
      }
      for (let t2 of f2) {
        if (t2 === null)
          continue;
        let e2 = t2 instanceof HTMLElement ? t2 : t2.current;
        if (e2 != null && e2.contains(o2))
          return;
      }
      return a2(n2, o2);
    }
  });
  s$2("pointerdown", (...n2) => l2.current(...n2)), s$2("mousedown", (...n2) => l2.current(...n2));
}
let o = react.exports.createContext(null);
o.displayName = "OpenClosedContext";
var p$1 = ((e2) => (e2[e2.Open = 0] = "Open", e2[e2.Closed = 1] = "Closed", e2))(p$1 || {});
function s$1() {
  return react.exports.useContext(o);
}
function C({ value: t2, children: n2 }) {
  return React.createElement(o.Provider, { value: t2 }, n2);
}
function i$4(t2) {
  var n2;
  if (t2.type)
    return t2.type;
  let e2 = (n2 = t2.as) != null ? n2 : "button";
  if (typeof e2 == "string" && e2.toLowerCase() === "button")
    return "button";
}
function s(t2, e2) {
  let [n2, u2] = react.exports.useState(() => i$4(t2));
  return t$2(() => {
    u2(i$4(t2));
  }, [t2.type, t2.as]), t$2(() => {
    n2 || !e2.current || e2.current instanceof HTMLButtonElement && !e2.current.hasAttribute("type") && u2("button");
  }, [n2, e2]), n2;
}
function t(n2) {
  return typeof window == "undefined" ? null : n2 instanceof Node ? n2.ownerDocument : n2 != null && n2.hasOwnProperty("current") && n2.current instanceof Node ? n2.current.ownerDocument : document;
}
let f$1 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var E$2 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(E$2 || {}), p = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(p || {}), L$1 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(L$1 || {});
function N$1(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(f$1));
}
var T$1 = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(T$1 || {});
function O(e2, r2 = 0) {
  var t$12;
  return e2 === ((t$12 = t(e2)) == null ? void 0 : t$12.body) ? false : u$1(r2, { [0]() {
    return e2.matches(f$1);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(f$1))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
let b = ["textarea", "input"].join(",");
function M(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, b)) != null ? t2 : false;
}
function h(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r2(t2), a2 = r2(l2);
    if (o2 === null || a2 === null)
      return 0;
    let n2 = o2.compareDocumentPosition(a2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function F$1(e2, r2) {
  let t2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, l2 = Array.isArray(e2) ? h(e2) : N$1(e2), o2 = t2.activeElement, a2 = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), n2 = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, l2.indexOf(o2)) - 1;
    if (r2 & 4)
      return Math.max(0, l2.indexOf(o2)) + 1;
    if (r2 & 8)
      return l2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = r2 & 32 ? { preventScroll: true } : {}, c = 0, i2 = l2.length, u2;
  do {
    if (c >= i2 || c + i2 <= 0)
      return 0;
    let s2 = n2 + c;
    if (r2 & 16)
      s2 = (s2 + i2) % i2;
    else {
      if (s2 < 0)
        return 3;
      if (s2 >= i2)
        return 1;
    }
    u2 = l2[s2], u2 == null || u2.focus(d), c += a2;
  } while (u2 !== t2.activeElement);
  return r2 & 6 && M(u2) && u2.select(), u2.hasAttribute("tabindex") || u2.setAttribute("tabindex", "0"), 2;
}
function E$1(n2, e2, a2, t2) {
  let i2 = s$3(a2);
  react.exports.useEffect(() => {
    n2 = n2 != null ? n2 : window;
    function r2(o2) {
      i2.current(o2);
    }
    return n2.addEventListener(e2, r2, t2), () => n2.removeEventListener(e2, r2, t2);
  }, [n2, e2, t2]);
}
function n(...e2) {
  return react.exports.useMemo(() => t(...e2), [...e2]);
}
var ve = ((f2) => (f2[f2.Open = 0] = "Open", f2[f2.Closed = 1] = "Closed", f2))(ve || {}), ce = ((l2) => (l2[l2.TogglePopover = 0] = "TogglePopover", l2[l2.ClosePopover = 1] = "ClosePopover", l2[l2.SetButton = 2] = "SetButton", l2[l2.SetButtonId = 3] = "SetButtonId", l2[l2.SetPanel = 4] = "SetPanel", l2[l2.SetPanelId = 5] = "SetPanelId", l2))(ce || {});
let de = { [0]: (a2) => __spreadProps(__spreadValues({}, a2), { popoverState: u$1(a2.popoverState, { [0]: 1, [1]: 0 }) }), [1](a2) {
  return a2.popoverState === 1 ? a2 : __spreadProps(__spreadValues({}, a2), { popoverState: 1 });
}, [2](a2, o2) {
  return a2.button === o2.button ? a2 : __spreadProps(__spreadValues({}, a2), { button: o2.button });
}, [3](a2, o2) {
  return a2.buttonId === o2.buttonId ? a2 : __spreadProps(__spreadValues({}, a2), { buttonId: o2.buttonId });
}, [4](a2, o2) {
  return a2.panel === o2.panel ? a2 : __spreadProps(__spreadValues({}, a2), { panel: o2.panel });
}, [5](a2, o2) {
  return a2.panelId === o2.panelId ? a2 : __spreadProps(__spreadValues({}, a2), { panelId: o2.panelId });
} }, z$1 = react.exports.createContext(null);
z$1.displayName = "PopoverContext";
function N(a2) {
  let o2 = react.exports.useContext(z$1);
  if (o2 === null) {
    let f2 = new Error(`<${a2} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(f2, N), f2;
  }
  return o2;
}
let J = react.exports.createContext(null);
J.displayName = "PopoverAPIContext";
function oe(a2) {
  let o2 = react.exports.useContext(J);
  if (o2 === null) {
    let f2 = new Error(`<${a2} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(f2, oe), f2;
  }
  return o2;
}
let Q = react.exports.createContext(null);
Q.displayName = "PopoverGroupContext";
function re() {
  return react.exports.useContext(Q);
}
let X = react.exports.createContext(null);
X.displayName = "PopoverPanelContext";
function ye() {
  return react.exports.useContext(X);
}
function Te(a2, o2) {
  return u$1(o2.type, de, a2, o2);
}
let Ee = "div", Se = H(function(o2, f2) {
  let e2 = `headlessui-popover-button-${I()}`, P2 = `headlessui-popover-panel-${I()}`, n$12 = react.exports.useRef(null), l2 = T$2(f2, n$12), i2 = n(n$12), s2 = react.exports.useReducer(Te, { popoverState: 1, button: null, buttonId: e2, panel: null, panelId: P2 }), [{ popoverState: v2, button: t2, panel: E2 }, u2] = s2;
  react.exports.useEffect(() => u2({ type: 3, buttonId: e2 }), [e2, u2]), react.exports.useEffect(() => u2({ type: 5, panelId: P2 }), [P2, u2]);
  let S2 = react.exports.useMemo(() => ({ buttonId: e2, panelId: P2, close: () => u2({ type: 1 }) }), [e2, P2, u2]), c = re(), d = c == null ? void 0 : c.registerPopover, p2 = react.exports.useCallback(() => {
    var r2;
    return (r2 = c == null ? void 0 : c.isFocusWithinPopoverGroup()) != null ? r2 : (i2 == null ? void 0 : i2.activeElement) && ((t2 == null ? void 0 : t2.contains(i2.activeElement)) || (E2 == null ? void 0 : E2.contains(i2.activeElement)));
  }, [c, t2, E2]);
  react.exports.useEffect(() => d == null ? void 0 : d(S2), [d, S2]), E$1(i2 == null ? void 0 : i2.defaultView, "focus", () => {
    v2 === 0 && (p2() || !t2 || !E2 || u2({ type: 1 }));
  }, true), w([t2, E2], (r2, T2) => {
    v2 === 0 && (u2({ type: 1 }), O(T2, T$1.Loose) || (r2.preventDefault(), t2 == null || t2.focus()));
  });
  let y2 = react.exports.useCallback((r2) => {
    u2({ type: 1 });
    let T2 = (() => r2 ? r2 instanceof HTMLElement ? r2 : r2.current instanceof HTMLElement ? r2.current : t2 : t2)();
    T2 == null || T2.focus();
  }, [u2, t2]), b2 = react.exports.useMemo(() => ({ close: y2 }), [y2]), g = react.exports.useMemo(() => ({ open: v2 === 0, close: y2 }), [v2, y2]), C$12 = o2, h2 = { ref: l2 };
  return React.createElement(z$1.Provider, { value: s2 }, React.createElement(J.Provider, { value: b2 }, React.createElement(C, { value: u$1(v2, { [0]: p$1.Open, [1]: p$1.Closed }) }, A$1({ ourProps: h2, theirProps: C$12, slot: g, defaultTag: Ee, name: "Popover" }))));
}), be = "button", me = H(function(o2, f2) {
  let [e2, P2] = N("Popover.Button"), n$12 = react.exports.useRef(null), l2 = re(), i2 = l2 == null ? void 0 : l2.closeOthers, s$12 = ye(), v2 = s$12 === null ? false : s$12 === e2.panelId, t2 = T$2(n$12, f2, v2 ? null : (r2) => P2({ type: 2, button: r2 })), E2 = T$2(n$12, f2), u2 = n(n$12), S2 = react.exports.useRef(null), c = react.exports.useRef(null);
  E$1(u2 == null ? void 0 : u2.defaultView, "focus", () => {
    c.current = S2.current, S2.current = u2 == null ? void 0 : u2.activeElement;
  }, true);
  let d = react.exports.useCallback((r2) => {
    var T2, R2, k2, V2;
    if (v2) {
      if (e2.popoverState === 1)
        return;
      switch (r2.key) {
        case o$1.Space:
        case o$1.Enter:
          r2.preventDefault(), (R2 = (T2 = r2.target).click) == null || R2.call(T2), P2({ type: 1 }), (k2 = e2.button) == null || k2.focus();
          break;
      }
    } else
      switch (r2.key) {
        case o$1.Space:
        case o$1.Enter:
          r2.preventDefault(), r2.stopPropagation(), e2.popoverState === 1 && (i2 == null || i2(e2.buttonId)), P2({ type: 0 });
          break;
        case o$1.Escape:
          if (e2.popoverState !== 0)
            return i2 == null ? void 0 : i2(e2.buttonId);
          if (!n$12.current || (u2 == null ? void 0 : u2.activeElement) && !n$12.current.contains(u2.activeElement))
            return;
          r2.preventDefault(), r2.stopPropagation(), P2({ type: 1 });
          break;
        case o$1.Tab:
          if (e2.popoverState !== 0 || !e2.panel || !e2.button)
            return;
          if (r2.shiftKey) {
            if (!c.current || (V2 = e2.button) != null && V2.contains(c.current) || e2.panel.contains(c.current))
              return;
            let Z2 = N$1(u2 == null ? void 0 : u2.body), ne2 = Z2.indexOf(c.current);
            if (Z2.indexOf(e2.button) > ne2)
              return;
            r2.preventDefault(), r2.stopPropagation(), F$1(e2.panel, E$2.Last);
          } else
            r2.preventDefault(), r2.stopPropagation(), F$1(e2.panel, E$2.First);
          break;
      }
  }, [P2, e2.popoverState, e2.buttonId, e2.button, e2.panel, n$12, i2, v2]), p2 = react.exports.useCallback((r2) => {
    var T2;
    if (!v2 && (r2.key === o$1.Space && r2.preventDefault(), e2.popoverState === 0 && !!e2.panel && !!e2.button))
      switch (r2.key) {
        case o$1.Tab:
          if (!c.current || (T2 = e2.button) != null && T2.contains(c.current) || e2.panel.contains(c.current))
            return;
          let R2 = N$1(u2 == null ? void 0 : u2.body), k2 = R2.indexOf(c.current);
          if (R2.indexOf(e2.button) > k2)
            return;
          r2.preventDefault(), r2.stopPropagation(), F$1(e2.panel, E$2.Last);
          break;
      }
  }, [e2.popoverState, e2.panel, e2.button, v2]), y2 = react.exports.useCallback((r$12) => {
    var T2, R2;
    r(r$12.currentTarget) || o2.disabled || (v2 ? (P2({ type: 1 }), (T2 = e2.button) == null || T2.focus()) : (r$12.preventDefault(), r$12.stopPropagation(), e2.popoverState === 1 && (i2 == null || i2(e2.buttonId)), (R2 = e2.button) == null || R2.focus(), P2({ type: 0 })));
  }, [P2, e2.button, e2.popoverState, e2.buttonId, o2.disabled, i2, v2]), b2 = react.exports.useMemo(() => ({ open: e2.popoverState === 0 }), [e2]), g = s(o2, n$12), C2 = o2, h2 = v2 ? { ref: E2, type: g, onKeyDown: d, onClick: y2 } : { ref: t2, id: e2.buttonId, type: g, "aria-expanded": o2.disabled ? void 0 : e2.popoverState === 0, "aria-controls": e2.panel ? e2.panelId : void 0, onKeyDown: d, onKeyUp: p2, onClick: y2 };
  return A$1({ ourProps: h2, theirProps: C2, slot: b2, defaultTag: be, name: "Popover.Button" });
}), ge = "div", Ae = b$1.RenderStrategy | b$1.Static, Ce = H(function(o2, f2) {
  let [{ popoverState: e2 }, P2] = N("Popover.Overlay"), n2 = T$2(f2), l2 = `headlessui-popover-overlay-${I()}`, i2 = s$1(), s2 = (() => i2 !== null ? i2 === p$1.Open : e2 === 0)(), v2 = react.exports.useCallback((S2) => {
    if (r(S2.currentTarget))
      return S2.preventDefault();
    P2({ type: 1 });
  }, [P2]), t2 = react.exports.useMemo(() => ({ open: e2 === 0 }), [e2]);
  return A$1({ ourProps: { ref: n2, id: l2, "aria-hidden": true, onClick: v2 }, theirProps: o2, slot: t2, defaultTag: ge, features: Ae, visible: s2, name: "Popover.Overlay" });
}), Re = "div", Oe = b$1.RenderStrategy | b$1.Static, Ie = H(function(o2, f2) {
  let _a = o2, { focus: e2 = false } = _a, P2 = __objRest(_a, ["focus"]), [n$12, l2] = N("Popover.Panel"), { close: i2 } = oe("Popover.Panel"), s2 = react.exports.useRef(null), v2 = T$2(s2, f2, (p2) => {
    l2({ type: 4, panel: p2 });
  }), t2 = n(s2), E2 = s$1(), u2 = (() => E2 !== null ? E2 === p$1.Open : n$12.popoverState === 0)(), S2 = react.exports.useCallback((p2) => {
    var y2;
    switch (p2.key) {
      case o$1.Escape:
        if (n$12.popoverState !== 0 || !s2.current || (t2 == null ? void 0 : t2.activeElement) && !s2.current.contains(t2.activeElement))
          return;
        p2.preventDefault(), p2.stopPropagation(), l2({ type: 1 }), (y2 = n$12.button) == null || y2.focus();
        break;
    }
  }, [n$12, s2, l2]);
  react.exports.useEffect(() => () => l2({ type: 4, panel: null }), [l2]), react.exports.useEffect(() => {
    var p2;
    o2.static || n$12.popoverState === 1 && ((p2 = o2.unmount) != null ? p2 : true) && l2({ type: 4, panel: null });
  }, [n$12.popoverState, o2.unmount, o2.static, l2]), react.exports.useEffect(() => {
    if (!e2 || n$12.popoverState !== 0 || !s2.current)
      return;
    let p2 = t2 == null ? void 0 : t2.activeElement;
    s2.current.contains(p2) || F$1(s2.current, E$2.First);
  }, [e2, s2, n$12.popoverState]), E$1(t2 == null ? void 0 : t2.defaultView, "keydown", (p$12) => {
    var b2;
    if (n$12.popoverState !== 0 || !s2.current || p$12.key !== o$1.Tab || !(t2 != null && t2.activeElement) || !s2.current || !s2.current.contains(t2.activeElement))
      return;
    p$12.preventDefault();
    let y2 = F$1(s2.current, p$12.shiftKey ? E$2.Previous : E$2.Next);
    if (y2 === p.Underflow)
      return (b2 = n$12.button) == null ? void 0 : b2.focus();
    if (y2 === p.Overflow) {
      if (!n$12.button)
        return;
      let g = N$1(t2.body), C2 = g.indexOf(n$12.button), h2 = g.splice(C2 + 1).filter((r2) => {
        var T2;
        return !((T2 = s2.current) != null && T2.contains(r2));
      });
      F$1(h2, E$2.First) === p.Error && F$1(t2.body, E$2.First);
    }
  }), E$1(t2 == null ? void 0 : t2.defaultView, "focus", () => {
    var p2;
    !e2 || n$12.popoverState === 0 && (!s2.current || (t2 == null ? void 0 : t2.activeElement) && ((p2 = s2.current) == null ? void 0 : p2.contains(t2.activeElement)) || l2({ type: 1 }));
  }, true);
  let c = react.exports.useMemo(() => ({ open: n$12.popoverState === 0, close: i2 }), [n$12, i2]), d = { ref: v2, id: n$12.panelId, onKeyDown: S2 };
  return React.createElement(X.Provider, { value: n$12.panelId }, A$1({ ourProps: d, theirProps: P2, slot: c, defaultTag: Re, features: Oe, visible: u2, name: "Popover.Panel" }));
}), Le = "div", xe = H(function(o2, f2) {
  let e2 = react.exports.useRef(null), P2 = T$2(e2, f2), [n2, l2] = react.exports.useState([]), i2 = react.exports.useCallback((d) => {
    l2((p2) => {
      let y2 = p2.indexOf(d);
      if (y2 !== -1) {
        let b2 = p2.slice();
        return b2.splice(y2, 1), b2;
      }
      return p2;
    });
  }, [l2]), s2 = react.exports.useCallback((d) => (l2((p2) => [...p2, d]), () => i2(d)), [l2, i2]), v2 = react.exports.useCallback(() => {
    var y2;
    let d = t(e2);
    if (!d)
      return false;
    let p2 = d.activeElement;
    return (y2 = e2.current) != null && y2.contains(p2) ? true : n2.some((b2) => {
      var g, C2;
      return ((g = d.getElementById(b2.buttonId)) == null ? void 0 : g.contains(p2)) || ((C2 = d.getElementById(b2.panelId)) == null ? void 0 : C2.contains(p2));
    });
  }, [e2, n2]), t$12 = react.exports.useCallback((d) => {
    for (let p2 of n2)
      p2.buttonId !== d && p2.close();
  }, [n2]), E2 = react.exports.useMemo(() => ({ registerPopover: s2, unregisterPopover: i2, isFocusWithinPopoverGroup: v2, closeOthers: t$12 }), [s2, i2, v2, t$12]), u2 = react.exports.useMemo(() => ({}), []), S2 = o2, c = { ref: P2 };
  return React.createElement(Q.Provider, { value: E2 }, A$1({ ourProps: c, theirProps: S2, slot: u2, defaultTag: Le, name: "Popover.Group" }));
}), tt = Object.assign(Se, { Button: me, Overlay: Ce, Panel: Ie, Group: xe });
function CloseButton() {
  return /* @__PURE__ */ jsx(tt.Button, {
    className: "tw-border-transparent tw-bg-transparent tw-top-5 tw-right-5 tw-absolute tw-text-zinc-400 hover:tw-text-zinc-100",
    title: "Fechar Formulario de Feedback",
    children: /* @__PURE__ */ jsx(X$2, {
      weight: "bold",
      className: "tw-w-4 tw-h-4"
    })
  });
}
function FeedbackTypeStep({
  onFeedbackTypeChanged
}) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("header", {
      children: [/* @__PURE__ */ jsx("span", {
        className: "tw-font-sans tw-text-white tw-text-xl tw-leading-6",
        children: "Deixe seu feedback"
      }), /* @__PURE__ */ jsx(CloseButton, {})]
    }), /* @__PURE__ */ jsx("div", {
      className: "tw-font-sans tw-flex tw-py-8 tw-gap-2 tw-w-full",
      children: Object.entries(feedbackTypes).map(([key, value]) => {
        return /* @__PURE__ */ jsxs("button", {
          className: "tw-font-sans tw-text-white tw-bg-zinc-800 tw-rounded-lg tw-py-5 tw-w-24 tw-flex-1 tw-flex tw-flex-col tw-items-center tw-gap-2 tw-border-2 tw-border-transparent hover:tw-border-brand-500 focus:tw-border-brand-500 focus:tw-outline-none",
          onClick: () => onFeedbackTypeChanged(key),
          type: "button",
          children: [/* @__PURE__ */ jsx("img", {
            src: value.image.source,
            alt: value.image.alt
          }), /* @__PURE__ */ jsx("span", {
            children: value.title
          })]
        }, key);
      })
    })]
  });
}
var axios$2 = { exports: {} };
var bind$2 = function bind2(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i2 = 0; i2 < args.length; i2++) {
      args[i2] = arguments[i2];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
var kindOf = function(cache) {
  return function(thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}
function isArray(val) {
  return Array.isArray(val);
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (kindOf(val) !== "object") {
    return false;
  }
  var prototype2 = Object.getPrototypeOf(val);
  return prototype2 === null || prototype2 === Object.prototype;
}
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
function isFormData(thing) {
  var pattern = "[object FormData]";
  return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
}
var isURLSearchParams = kindOfTest("URLSearchParams");
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i2 = 0, l2 = obj.length; i2 < l2; i2++) {
      fn.call(null, obj[i2], i2, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
    forEach(arguments[i2], assignValue);
  }
  return result;
}
function extend(a2, b2, thisArg) {
  forEach(b2, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a2[key] = bind$1(val, thisArg);
    } else {
      a2[key] = val;
    }
  });
  return a2;
}
function stripBOM(content2) {
  if (content2.charCodeAt(0) === 65279) {
    content2 = content2.slice(1);
  }
  return content2;
}
function inherits(constructor, superConstructor, props, descriptors2) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}
function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i2;
  var prop;
  var merged = {};
  destObj = destObj || {};
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i2 = props.length;
    while (i2-- > 0) {
      prop = props[i2];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
}
function endsWith(str, searchString, position2) {
  str = String(str);
  if (position2 === void 0 || position2 > str.length) {
    position2 = str.length;
  }
  position2 -= searchString.length;
  var lastIndex = str.indexOf(searchString, position2);
  return lastIndex !== -1 && lastIndex === position2;
}
function toArray(thing) {
  if (!thing)
    return null;
  var i2 = thing.length;
  if (isUndefined(i2))
    return null;
  var arr = new Array(i2);
  while (i2-- > 0) {
    arr[i2] = thing[i2];
  }
  return arr;
}
var isTypedArray = function(TypedArray) {
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
}(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
var utils$h = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  isTypedArray,
  isFileList
};
var utils$g = utils$h;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$2 = function buildURL2(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$g.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$g.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$g.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$g.forEach(val, function parseValue(v2) {
        if (utils$g.isDate(v2)) {
          v2 = v2.toISOString();
        } else if (utils$g.isObject(v2)) {
          v2 = JSON.stringify(v2);
        }
        parts.push(encode(key) + "=" + encode(v2));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$f = utils$h;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id2) {
  if (this.handlers[id2]) {
    this.handlers[id2] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$f.forEach(this.handlers, function forEachHandler(h2) {
    if (h2 !== null) {
      fn(h2);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$e = utils$h;
var normalizeHeaderName$1 = function normalizeHeaderName2(headers, normalizedName) {
  utils$e.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
var utils$d = utils$h;
function AxiosError$5(message, code, config, request2, response) {
  Error.call(this);
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request2 && (this.request = request2);
  response && (this.response = response);
}
utils$d.inherits(AxiosError$5, Error, {
  toJSON: function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError$5.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(code) {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError$5, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError$5.from = function(error, code, config, request2, response, customProps) {
  var axiosError = Object.create(prototype);
  utils$d.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });
  AxiosError$5.call(axiosError, error.message, code, config, request2, response);
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_1 = AxiosError$5;
var transitional = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
var utils$c = utils$h;
function toFormData$1(obj, formData) {
  formData = formData || new FormData();
  var stack = [];
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils$c.isDate(value)) {
      return value.toISOString();
    }
    if (utils$c.isArrayBuffer(value) || utils$c.isTypedArray(value)) {
      return typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function build(data2, parentKey) {
    if (utils$c.isPlainObject(data2) || utils$c.isArray(data2)) {
      if (stack.indexOf(data2) !== -1) {
        throw Error("Circular reference detected in " + parentKey);
      }
      stack.push(data2);
      utils$c.forEach(data2, function each(value, key) {
        if (utils$c.isUndefined(value))
          return;
        var fullKey = parentKey ? parentKey + "." + key : key;
        var arr;
        if (value && !parentKey && typeof value === "object") {
          if (utils$c.endsWith(key, "{}")) {
            value = JSON.stringify(value);
          } else if (utils$c.endsWith(key, "[]") && (arr = utils$c.toArray(value))) {
            arr.forEach(function(el2) {
              !utils$c.isUndefined(el2) && formData.append(fullKey, convertValue(el2));
            });
            return;
          }
        }
        build(value, fullKey);
      });
      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data2));
    }
  }
  build(obj);
  return formData;
}
var toFormData_1 = toFormData$1;
var AxiosError$4 = AxiosError_1;
var settle$1 = function settle2(resolve, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError$4("Request failed with status code " + response.status, [AxiosError$4.ERR_BAD_REQUEST, AxiosError$4.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
};
var utils$b = utils$h;
var cookies$1 = utils$b.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value));
      if (utils$b.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$b.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$b.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();
var isAbsoluteURL$1 = function isAbsoluteURL2(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};
var combineURLs$1 = function combineURLs2(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL = isAbsoluteURL$1;
var combineURLs = combineURLs$1;
var buildFullPath$2 = function buildFullPath2(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};
var utils$a = utils$h;
var ignoreDuplicateOf = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
];
var parseHeaders$1 = function parseHeaders2(headers) {
  var parsed = {};
  var key;
  var val;
  var i2;
  if (!headers) {
    return parsed;
  }
  utils$a.forEach(headers.split("\n"), function parser(line) {
    i2 = line.indexOf(":");
    key = utils$a.trim(line.substr(0, i2)).toLowerCase();
    val = utils$a.trim(line.substr(i2 + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var utils$9 = utils$h;
var isURLSameOrigin$1 = utils$9.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url) {
    var href = url;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils$9.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
var AxiosError$3 = AxiosError_1;
var utils$8 = utils$h;
function CanceledError$3(message) {
  AxiosError$3.call(this, message == null ? "canceled" : message, AxiosError$3.ERR_CANCELED);
  this.name = "CanceledError";
}
utils$8.inherits(CanceledError$3, AxiosError$3, {
  __CANCEL__: true
});
var CanceledError_1 = CanceledError$3;
var parseProtocol$1 = function parseProtocol2(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
};
var utils$7 = utils$h;
var settle = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath$1 = buildFullPath$2;
var parseHeaders = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var transitionalDefaults$1 = transitional;
var AxiosError$2 = AxiosError_1;
var CanceledError$2 = CanceledError_1;
var parseProtocol = parseProtocol$1;
var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils$7.isFormData(requestData) && utils$7.isStandardBrowserEnv()) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config.auth) {
      var username = config.auth.username || "";
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath$1(config.baseURL, config.url);
    request2.open(config.method.toUpperCase(), buildURL$1(fullPath, config.params, config.paramsSerializer), true);
    request2.timeout = config.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config,
        request: request2
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(new AxiosError$2("Request aborted", AxiosError$2.ECONNABORTED, config, request2));
      request2 = null;
    };
    request2.onerror = function handleError() {
      reject(new AxiosError$2("Network Error", AxiosError$2.ERR_NETWORK, config, request2, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      var transitional3 = config.transitional || transitionalDefaults$1;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError$2(timeoutErrorMessage, transitional3.clarifyTimeoutError ? AxiosError$2.ETIMEDOUT : AxiosError$2.ECONNABORTED, config, request2));
      request2 = null;
    };
    if (utils$7.isStandardBrowserEnv()) {
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$7.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$7.isUndefined(config.withCredentials)) {
      request2.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request2.addEventListener("progress", config.onDownloadProgress);
    }
    if (typeof config.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config.onUploadProgress);
    }
    if (config.cancelToken || config.signal) {
      onCanceled = function(cancel) {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new CanceledError$2() : cancel);
        request2.abort();
        request2 = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    var protocol = parseProtocol(fullPath);
    if (protocol && ["http", "https", "file"].indexOf(protocol) === -1) {
      reject(new AxiosError$2("Unsupported protocol " + protocol + ":", AxiosError$2.ERR_BAD_REQUEST, config));
      return;
    }
    request2.send(requestData);
  });
};
var _null = null;
var utils$6 = utils$h;
var normalizeHeaderName = normalizeHeaderName$1;
var AxiosError$1 = AxiosError_1;
var transitionalDefaults = transitional;
var toFormData = toFormData_1;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$6.isUndefined(headers) && utils$6.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = xhr;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$6.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$6.trim(rawValue);
    } catch (e2) {
      if (e2.name !== "SyntaxError") {
        throw e2;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: transitionalDefaults,
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName(headers, "Accept");
    normalizeHeaderName(headers, "Content-Type");
    if (utils$6.isFormData(data2) || utils$6.isArrayBuffer(data2) || utils$6.isBuffer(data2) || utils$6.isStream(data2) || utils$6.isFile(data2) || utils$6.isBlob(data2)) {
      return data2;
    }
    if (utils$6.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$6.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    var isObjectPayload = utils$6.isObject(data2);
    var contentType = headers && headers["Content-Type"];
    var isFileList2;
    if ((isFileList2 = utils$6.isFileList(data2)) || isObjectPayload && contentType === "multipart/form-data") {
      var _FormData = this.env && this.env.FormData;
      return toFormData(isFileList2 ? { "files[]": data2 } : data2, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional3 = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional3 && transitional3.silentJSONParsing;
    var forcedJSONParsing = transitional3 && transitional3.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$6.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e2) {
        if (strictJSONParsing) {
          if (e2.name === "SyntaxError") {
            throw AxiosError$1.from(e2, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e2;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: _null
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$6.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$6.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$6.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$5 = utils$h;
var defaults$2 = defaults_1;
var transformData$1 = function transformData2(data2, headers, fns) {
  var context = this || defaults$2;
  utils$5.forEach(fns, function transform2(fn) {
    data2 = fn.call(context, data2, headers);
  });
  return data2;
};
var isCancel$1 = function isCancel2(value) {
  return !!(value && value.__CANCEL__);
};
var utils$4 = utils$h;
var transformData = transformData$1;
var isCancel = isCancel$1;
var defaults$1 = defaults_1;
var CanceledError$1 = CanceledError_1;
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError$1();
  }
}
var dispatchRequest$1 = function dispatchRequest2(config) {
  throwIfCancellationRequested(config);
  config.headers = config.headers || {};
  config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
  config.headers = utils$4.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils$4.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults$1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var utils$3 = utils$h;
var mergeConfig$2 = function mergeConfig2(config1, config2) {
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source2) {
    if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source2)) {
      return utils$3.merge(target, source2);
    } else if (utils$3.isPlainObject(source2)) {
      return utils$3.merge({}, source2);
    } else if (utils$3.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "beforeRedirect": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$3.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
};
var data = {
  "version": "0.27.2"
};
var VERSION = data.version;
var AxiosError = AxiosError_1;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i2) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional2(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new AxiosError(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError.ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i2 = keys.length;
  while (i2-- > 0) {
    var opt = keys[i2];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
var validator$1 = {
  assertOptions,
  validators: validators$1
};
var utils$2 = utils$h;
var buildURL = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var buildFullPath = buildFullPath$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(configOrUrl, config) {
  if (typeof configOrUrl === "string") {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }
  config = mergeConfig$1(this.defaults, config);
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = "get";
  }
  var transitional3 = config.transitional;
  if (transitional3 !== void 0) {
    validator.assertOptions(transitional3, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config) {
  config = mergeConfig$1(this.defaults, config);
  var fullPath = buildFullPath(config.baseURL, config.url);
  return buildURL(fullPath, config.params, config.paramsSerializer);
};
utils$2.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$2.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data2, config) {
      return this.request(mergeConfig$1(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data: data2
      }));
    };
  }
  Axios$1.prototype[method] = generateHTTPMethod();
  Axios$1.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_1 = Axios$1;
var CanceledError = CanceledError_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i2;
    var l2 = token._listeners.length;
    for (i2 = 0; i2 < l2; i2++) {
      token._listeners[i2](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new CanceledError(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};
var utils$1 = utils$h;
var isAxiosError = function isAxiosError2(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
};
var utils = utils$h;
var bind = bind$2;
var Axios = Axios_1;
var mergeConfig = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);
  utils.extend(instance, Axios.prototype, context);
  utils.extend(instance, context);
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.CanceledError = CanceledError_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;
axios$1.VERSION = data.version;
axios$1.toFormData = toFormData_1;
axios$1.AxiosError = AxiosError_1;
axios$1.Cancel = axios$1.CanceledError;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;
axios$1.isAxiosError = isAxiosError;
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
var axios = axios$2.exports;
const api = axios.create({
  baseURL: "https://widget-server-production-42ec.up.railway.app/"
});
function Loading() {
  return /* @__PURE__ */ jsx("div", {
    className: "tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-animate-spin",
    children: /* @__PURE__ */ jsx(CircleNotch$1, {
      weight: "bold",
      className: "tw-w-4 tw-h-4"
    })
  });
}
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b3) {
    d2.__proto__ = b3;
  } || function(d2, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d2[p2] = b3[p2];
  };
  return extendStatics(d, b2);
};
function __extends(d, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d, b2);
  function __() {
    this.constructor = d;
  }
  d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t2[1]) {
              _.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _.label < t2[2]) {
              _.label = t2[2];
              _.ops.push(op);
              break;
            }
            if (t2[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArray(to, from, pack2) {
  if (pack2 || arguments.length === 2)
    for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
  return to.concat(ar || from);
}
var Bounds = function() {
  function Bounds2(left, top, width, height) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }
  Bounds2.prototype.add = function(x2, y2, w2, h2) {
    return new Bounds2(this.left + x2, this.top + y2, this.width + w2, this.height + h2);
  };
  Bounds2.fromClientRect = function(context, clientRect) {
    return new Bounds2(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
  };
  Bounds2.fromDOMRectList = function(context, domRectList) {
    var domRect = Array.from(domRectList).find(function(rect) {
      return rect.width !== 0;
    });
    return domRect ? new Bounds2(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height) : Bounds2.EMPTY;
  };
  Bounds2.EMPTY = new Bounds2(0, 0, 0, 0);
  return Bounds2;
}();
var parseBounds = function(context, node) {
  return Bounds.fromClientRect(context, node.getBoundingClientRect());
};
var parseDocumentSize = function(document2) {
  var body = document2.body;
  var documentElement = document2.documentElement;
  if (!body || !documentElement) {
    throw new Error("Unable to get document size");
  }
  var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
  var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
  return new Bounds(0, 0, width, height);
};
var toCodePoints$1 = function(str) {
  var codePoints = [];
  var i2 = 0;
  var length = str.length;
  while (i2 < length) {
    var value = str.charCodeAt(i2++);
    if (value >= 55296 && value <= 56319 && i2 < length) {
      var extra = str.charCodeAt(i2++);
      if ((extra & 64512) === 56320) {
        codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        codePoints.push(value);
        i2--;
      }
    } else {
      codePoints.push(value);
    }
  }
  return codePoints;
};
var fromCodePoint$1 = function() {
  var codePoints = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    codePoints[_i] = arguments[_i];
  }
  if (String.fromCodePoint) {
    return String.fromCodePoint.apply(String, codePoints);
  }
  var length = codePoints.length;
  if (!length) {
    return "";
  }
  var codeUnits = [];
  var index = -1;
  var result = "";
  while (++index < length) {
    var codePoint = codePoints[index];
    if (codePoint <= 65535) {
      codeUnits.push(codePoint);
    } else {
      codePoint -= 65536;
      codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
    }
    if (index + 1 === length || codeUnits.length > 16384) {
      result += String.fromCharCode.apply(String, codeUnits);
      codeUnits.length = 0;
    }
  }
  return result;
};
var chars$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$2 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
  lookup$2[chars$2.charCodeAt(i$2)] = i$2;
}
var chars$1$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$1$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
  lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
}
var decode$1 = function(base642) {
  var bufferLength = base642.length * 0.75, len = base642.length, i2, p2 = 0, encoded1, encoded2, encoded3, encoded4;
  if (base642[base642.length - 1] === "=") {
    bufferLength--;
    if (base642[base642.length - 2] === "=") {
      bufferLength--;
    }
  }
  var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
  var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
  for (i2 = 0; i2 < len; i2 += 4) {
    encoded1 = lookup$1$1[base642.charCodeAt(i2)];
    encoded2 = lookup$1$1[base642.charCodeAt(i2 + 1)];
    encoded3 = lookup$1$1[base642.charCodeAt(i2 + 2)];
    encoded4 = lookup$1$1[base642.charCodeAt(i2 + 3)];
    bytes[p2++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p2++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p2++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return buffer;
};
var polyUint16Array$1 = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i2 = 0; i2 < length; i2 += 2) {
    bytes.push(buffer[i2 + 1] << 8 | buffer[i2]);
  }
  return bytes;
};
var polyUint32Array$1 = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i2 = 0; i2 < length; i2 += 4) {
    bytes.push(buffer[i2 + 3] << 24 | buffer[i2 + 2] << 16 | buffer[i2 + 1] << 8 | buffer[i2]);
  }
  return bytes;
};
var UTRIE2_SHIFT_2$1 = 5;
var UTRIE2_SHIFT_1$1 = 6 + 5;
var UTRIE2_INDEX_SHIFT$1 = 2;
var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 65536 >> UTRIE2_SHIFT_2$1;
var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 1024 >> UTRIE2_SHIFT_2$1;
var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 2048 >> 6;
var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 65536 >> UTRIE2_SHIFT_1$1;
var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
var slice16$1 = function(view, start, end) {
  if (view.slice) {
    return view.slice(start, end);
  }
  return new Uint16Array(Array.prototype.slice.call(view, start, end));
};
var slice32$1 = function(view, start, end) {
  if (view.slice) {
    return view.slice(start, end);
  }
  return new Uint32Array(Array.prototype.slice.call(view, start, end));
};
var createTrieFromBase64$1 = function(base642, _byteLength) {
  var buffer = decode$1(base642);
  var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
  var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
  var headerLength = 24;
  var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
  var data2 = view32[5] === 2 ? slice16$1(view16, (headerLength + view32[4]) / 2) : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
  return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data2);
};
var Trie$1 = function() {
  function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data2) {
    this.initialValue = initialValue;
    this.errorValue = errorValue;
    this.highStart = highStart;
    this.highValueIndex = highValueIndex;
    this.index = index;
    this.data = data2;
  }
  Trie2.prototype.get = function(codePoint) {
    var ix;
    if (codePoint >= 0) {
      if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
        ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
        ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
        return this.data[ix];
      }
      if (codePoint <= 65535) {
        ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (codePoint - 55296 >> UTRIE2_SHIFT_2$1)];
        ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
        return this.data[ix];
      }
      if (codePoint < this.highStart) {
        ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
        ix = this.index[ix];
        ix += codePoint >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1;
        ix = this.index[ix];
        ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
        return this.data[ix];
      }
      if (codePoint <= 1114111) {
        return this.data[this.highValueIndex];
      }
    }
    return this.errorValue;
  };
  return Trie2;
}();
var chars$3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$3 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i$3 = 0; i$3 < chars$3.length; i$3++) {
  lookup$3[chars$3.charCodeAt(i$3)] = i$3;
}
var base64$1 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==";
var LETTER_NUMBER_MODIFIER = 50;
var BK = 1;
var CR$1 = 2;
var LF$1 = 3;
var CM = 4;
var NL = 5;
var WJ = 7;
var ZW = 8;
var GL = 9;
var SP = 10;
var ZWJ$1 = 11;
var B2 = 12;
var BA = 13;
var BB = 14;
var HY = 15;
var CB = 16;
var CL = 17;
var CP = 18;
var EX = 19;
var IN = 20;
var NS = 21;
var OP = 22;
var QU = 23;
var IS = 24;
var NU = 25;
var PO = 26;
var PR = 27;
var SY = 28;
var AI = 29;
var AL = 30;
var CJ = 31;
var EB = 32;
var EM = 33;
var H2 = 34;
var H3 = 35;
var HL = 36;
var ID = 37;
var JL = 38;
var JV = 39;
var JT = 40;
var RI$1 = 41;
var SA = 42;
var XX = 43;
var ea_OP = [9001, 65288];
var BREAK_MANDATORY = "!";
var BREAK_NOT_ALLOWED$1 = "\xD7";
var BREAK_ALLOWED$1 = "\xF7";
var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
var SPACE$1 = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];
var codePointsToCharacterClasses = function(codePoints, lineBreak2) {
  if (lineBreak2 === void 0) {
    lineBreak2 = "strict";
  }
  var types = [];
  var indices = [];
  var categories = [];
  codePoints.forEach(function(codePoint, index) {
    var classType = UnicodeTrie$1.get(codePoint);
    if (classType > LETTER_NUMBER_MODIFIER) {
      categories.push(true);
      classType -= LETTER_NUMBER_MODIFIER;
    } else {
      categories.push(false);
    }
    if (["normal", "auto", "loose"].indexOf(lineBreak2) !== -1) {
      if ([8208, 8211, 12316, 12448].indexOf(codePoint) !== -1) {
        indices.push(index);
        return types.push(CB);
      }
    }
    if (classType === CM || classType === ZWJ$1) {
      if (index === 0) {
        indices.push(index);
        return types.push(AL);
      }
      var prev = types[index - 1];
      if (LINE_BREAKS.indexOf(prev) === -1) {
        indices.push(indices[index - 1]);
        return types.push(prev);
      }
      indices.push(index);
      return types.push(AL);
    }
    indices.push(index);
    if (classType === CJ) {
      return types.push(lineBreak2 === "strict" ? NS : ID);
    }
    if (classType === SA) {
      return types.push(AL);
    }
    if (classType === AI) {
      return types.push(AL);
    }
    if (classType === XX) {
      if (codePoint >= 131072 && codePoint <= 196605 || codePoint >= 196608 && codePoint <= 262141) {
        return types.push(ID);
      } else {
        return types.push(AL);
      }
    }
    types.push(classType);
  });
  return [indices, types, categories];
};
var isAdjacentWithSpaceIgnored = function(a2, b2, currentIndex, classTypes) {
  var current = classTypes[currentIndex];
  if (Array.isArray(a2) ? a2.indexOf(current) !== -1 : a2 === current) {
    var i2 = currentIndex;
    while (i2 <= classTypes.length) {
      i2++;
      var next = classTypes[i2];
      if (next === b2) {
        return true;
      }
      if (next !== SP) {
        break;
      }
    }
  }
  if (current === SP) {
    var i2 = currentIndex;
    while (i2 > 0) {
      i2--;
      var prev = classTypes[i2];
      if (Array.isArray(a2) ? a2.indexOf(prev) !== -1 : a2 === prev) {
        var n2 = currentIndex;
        while (n2 <= classTypes.length) {
          n2++;
          var next = classTypes[n2];
          if (next === b2) {
            return true;
          }
          if (next !== SP) {
            break;
          }
        }
      }
      if (prev !== SP) {
        break;
      }
    }
  }
  return false;
};
var previousNonSpaceClassType = function(currentIndex, classTypes) {
  var i2 = currentIndex;
  while (i2 >= 0) {
    var type = classTypes[i2];
    if (type === SP) {
      i2--;
    } else {
      return type;
    }
  }
  return 0;
};
var _lineBreakAtIndex = function(codePoints, classTypes, indicies, index, forbiddenBreaks) {
  if (indicies[index] === 0) {
    return BREAK_NOT_ALLOWED$1;
  }
  var currentIndex = index - 1;
  if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
    return BREAK_NOT_ALLOWED$1;
  }
  var beforeIndex = currentIndex - 1;
  var afterIndex = currentIndex + 1;
  var current = classTypes[currentIndex];
  var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
  var next = classTypes[afterIndex];
  if (current === CR$1 && next === LF$1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
    return BREAK_MANDATORY;
  }
  if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (SPACE$1.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
    return BREAK_ALLOWED$1;
  }
  if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === WJ || next === WJ) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === GL) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === SP) {
    return BREAK_ALLOWED$1;
  }
  if (current === QU || next === QU) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (next === CB || current === CB) {
    return BREAK_ALLOWED$1;
  }
  if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (before === HL && HYPHEN.indexOf(current) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === SY && next === HL) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (next === IN) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) || [OP, HY].indexOf(current) !== -1 && next === NU || current === NU && [NU, SY, IS].indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
    var prevIndex = currentIndex;
    while (prevIndex >= 0) {
      var type = classTypes[prevIndex];
      if (type === NU) {
        return BREAK_NOT_ALLOWED$1;
      } else if ([SY, IS].indexOf(type) !== -1) {
        prevIndex--;
      } else {
        break;
      }
    }
  }
  if ([PR, PO].indexOf(next) !== -1) {
    var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
    while (prevIndex >= 0) {
      var type = classTypes[prevIndex];
      if (type === NU) {
        return BREAK_NOT_ALLOWED$1;
      } else if ([SY, IS].indexOf(type) !== -1) {
        prevIndex--;
      } else {
        break;
      }
    }
  }
  if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP && ea_OP.indexOf(codePoints[afterIndex]) === -1 || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === RI$1 && next === RI$1) {
    var i2 = indicies[currentIndex];
    var count = 1;
    while (i2 > 0) {
      i2--;
      if (classTypes[i2] === RI$1) {
        count++;
      } else {
        break;
      }
    }
    if (count % 2 !== 0) {
      return BREAK_NOT_ALLOWED$1;
    }
  }
  if (current === EB && next === EM) {
    return BREAK_NOT_ALLOWED$1;
  }
  return BREAK_ALLOWED$1;
};
var cssFormattedClasses = function(codePoints, options) {
  if (!options) {
    options = { lineBreak: "normal", wordBreak: "normal" };
  }
  var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
  if (options.wordBreak === "break-all" || options.wordBreak === "break-word") {
    classTypes = classTypes.map(function(type) {
      return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
    });
  }
  var forbiddenBreakpoints = options.wordBreak === "keep-all" ? isLetterNumber.map(function(letterNumber, i2) {
    return letterNumber && codePoints[i2] >= 19968 && codePoints[i2] <= 40959;
  }) : void 0;
  return [indicies, classTypes, forbiddenBreakpoints];
};
var Break = function() {
  function Break2(codePoints, lineBreak2, start, end) {
    this.codePoints = codePoints;
    this.required = lineBreak2 === BREAK_MANDATORY;
    this.start = start;
    this.end = end;
  }
  Break2.prototype.slice = function() {
    return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
  };
  return Break2;
}();
var LineBreaker = function(str, options) {
  var codePoints = toCodePoints$1(str);
  var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
  var length = codePoints.length;
  var lastEnd = 0;
  var nextIndex = 0;
  return {
    next: function() {
      if (nextIndex >= length) {
        return { done: true, value: null };
      }
      var lineBreak2 = BREAK_NOT_ALLOWED$1;
      while (nextIndex < length && (lineBreak2 = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED$1) {
      }
      if (lineBreak2 !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
        var value = new Break(codePoints, lineBreak2, lastEnd, nextIndex);
        lastEnd = nextIndex;
        return { value, done: false };
      }
      return { done: true, value: null };
    }
  };
};
var FLAG_UNRESTRICTED = 1 << 0;
var FLAG_ID = 1 << 1;
var FLAG_INTEGER = 1 << 2;
var FLAG_NUMBER = 1 << 3;
var LINE_FEED = 10;
var SOLIDUS = 47;
var REVERSE_SOLIDUS = 92;
var CHARACTER_TABULATION = 9;
var SPACE = 32;
var QUOTATION_MARK = 34;
var EQUALS_SIGN = 61;
var NUMBER_SIGN = 35;
var DOLLAR_SIGN = 36;
var PERCENTAGE_SIGN = 37;
var APOSTROPHE = 39;
var LEFT_PARENTHESIS = 40;
var RIGHT_PARENTHESIS = 41;
var LOW_LINE = 95;
var HYPHEN_MINUS = 45;
var EXCLAMATION_MARK = 33;
var LESS_THAN_SIGN = 60;
var GREATER_THAN_SIGN = 62;
var COMMERCIAL_AT = 64;
var LEFT_SQUARE_BRACKET = 91;
var RIGHT_SQUARE_BRACKET = 93;
var CIRCUMFLEX_ACCENT = 61;
var LEFT_CURLY_BRACKET = 123;
var QUESTION_MARK = 63;
var RIGHT_CURLY_BRACKET = 125;
var VERTICAL_LINE = 124;
var TILDE = 126;
var CONTROL = 128;
var REPLACEMENT_CHARACTER = 65533;
var ASTERISK = 42;
var PLUS_SIGN = 43;
var COMMA = 44;
var COLON = 58;
var SEMICOLON = 59;
var FULL_STOP = 46;
var NULL = 0;
var BACKSPACE = 8;
var LINE_TABULATION = 11;
var SHIFT_OUT = 14;
var INFORMATION_SEPARATOR_ONE = 31;
var DELETE = 127;
var EOF = -1;
var ZERO = 48;
var a = 97;
var e = 101;
var f = 102;
var u = 117;
var z = 122;
var A = 65;
var E = 69;
var F = 70;
var U = 85;
var Z = 90;
var isDigit = function(codePoint) {
  return codePoint >= ZERO && codePoint <= 57;
};
var isSurrogateCodePoint = function(codePoint) {
  return codePoint >= 55296 && codePoint <= 57343;
};
var isHex = function(codePoint) {
  return isDigit(codePoint) || codePoint >= A && codePoint <= F || codePoint >= a && codePoint <= f;
};
var isLowerCaseLetter = function(codePoint) {
  return codePoint >= a && codePoint <= z;
};
var isUpperCaseLetter = function(codePoint) {
  return codePoint >= A && codePoint <= Z;
};
var isLetter = function(codePoint) {
  return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
};
var isNonASCIICodePoint = function(codePoint) {
  return codePoint >= CONTROL;
};
var isWhiteSpace = function(codePoint) {
  return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
};
var isNameStartCodePoint = function(codePoint) {
  return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
};
var isNameCodePoint = function(codePoint) {
  return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
};
var isNonPrintableCodePoint = function(codePoint) {
  return codePoint >= NULL && codePoint <= BACKSPACE || codePoint === LINE_TABULATION || codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE || codePoint === DELETE;
};
var isValidEscape = function(c1, c2) {
  if (c1 !== REVERSE_SOLIDUS) {
    return false;
  }
  return c2 !== LINE_FEED;
};
var isIdentifierStart = function(c1, c2, c3) {
  if (c1 === HYPHEN_MINUS) {
    return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
  } else if (isNameStartCodePoint(c1)) {
    return true;
  } else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
    return true;
  }
  return false;
};
var isNumberStart = function(c1, c2, c3) {
  if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
    if (isDigit(c2)) {
      return true;
    }
    return c2 === FULL_STOP && isDigit(c3);
  }
  if (c1 === FULL_STOP) {
    return isDigit(c2);
  }
  return isDigit(c1);
};
var stringToNumber = function(codePoints) {
  var c = 0;
  var sign = 1;
  if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
    if (codePoints[c] === HYPHEN_MINUS) {
      sign = -1;
    }
    c++;
  }
  var integers = [];
  while (isDigit(codePoints[c])) {
    integers.push(codePoints[c++]);
  }
  var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
  if (codePoints[c] === FULL_STOP) {
    c++;
  }
  var fraction = [];
  while (isDigit(codePoints[c])) {
    fraction.push(codePoints[c++]);
  }
  var fracd = fraction.length;
  var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
  if (codePoints[c] === E || codePoints[c] === e) {
    c++;
  }
  var expsign = 1;
  if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
    if (codePoints[c] === HYPHEN_MINUS) {
      expsign = -1;
    }
    c++;
  }
  var exponent = [];
  while (isDigit(codePoints[c])) {
    exponent.push(codePoints[c++]);
  }
  var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
  return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
};
var LEFT_PARENTHESIS_TOKEN = {
  type: 2
};
var RIGHT_PARENTHESIS_TOKEN = {
  type: 3
};
var COMMA_TOKEN = { type: 4 };
var SUFFIX_MATCH_TOKEN = { type: 13 };
var PREFIX_MATCH_TOKEN = { type: 8 };
var COLUMN_TOKEN = { type: 21 };
var DASH_MATCH_TOKEN = { type: 9 };
var INCLUDE_MATCH_TOKEN = { type: 10 };
var LEFT_CURLY_BRACKET_TOKEN = {
  type: 11
};
var RIGHT_CURLY_BRACKET_TOKEN = {
  type: 12
};
var SUBSTRING_MATCH_TOKEN = { type: 14 };
var BAD_URL_TOKEN = { type: 23 };
var BAD_STRING_TOKEN = { type: 1 };
var CDO_TOKEN = { type: 25 };
var CDC_TOKEN = { type: 24 };
var COLON_TOKEN = { type: 26 };
var SEMICOLON_TOKEN = { type: 27 };
var LEFT_SQUARE_BRACKET_TOKEN = {
  type: 28
};
var RIGHT_SQUARE_BRACKET_TOKEN = {
  type: 29
};
var WHITESPACE_TOKEN = { type: 31 };
var EOF_TOKEN = { type: 32 };
var Tokenizer = function() {
  function Tokenizer2() {
    this._value = [];
  }
  Tokenizer2.prototype.write = function(chunk) {
    this._value = this._value.concat(toCodePoints$1(chunk));
  };
  Tokenizer2.prototype.read = function() {
    var tokens = [];
    var token = this.consumeToken();
    while (token !== EOF_TOKEN) {
      tokens.push(token);
      token = this.consumeToken();
    }
    return tokens;
  };
  Tokenizer2.prototype.consumeToken = function() {
    var codePoint = this.consumeCodePoint();
    switch (codePoint) {
      case QUOTATION_MARK:
        return this.consumeStringToken(QUOTATION_MARK);
      case NUMBER_SIGN:
        var c1 = this.peekCodePoint(0);
        var c2 = this.peekCodePoint(1);
        var c3 = this.peekCodePoint(2);
        if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
          var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
          var value = this.consumeName();
          return { type: 5, value, flags };
        }
        break;
      case DOLLAR_SIGN:
        if (this.peekCodePoint(0) === EQUALS_SIGN) {
          this.consumeCodePoint();
          return SUFFIX_MATCH_TOKEN;
        }
        break;
      case APOSTROPHE:
        return this.consumeStringToken(APOSTROPHE);
      case LEFT_PARENTHESIS:
        return LEFT_PARENTHESIS_TOKEN;
      case RIGHT_PARENTHESIS:
        return RIGHT_PARENTHESIS_TOKEN;
      case ASTERISK:
        if (this.peekCodePoint(0) === EQUALS_SIGN) {
          this.consumeCodePoint();
          return SUBSTRING_MATCH_TOKEN;
        }
        break;
      case PLUS_SIGN:
        if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
          this.reconsumeCodePoint(codePoint);
          return this.consumeNumericToken();
        }
        break;
      case COMMA:
        return COMMA_TOKEN;
      case HYPHEN_MINUS:
        var e1 = codePoint;
        var e2 = this.peekCodePoint(0);
        var e3 = this.peekCodePoint(1);
        if (isNumberStart(e1, e2, e3)) {
          this.reconsumeCodePoint(codePoint);
          return this.consumeNumericToken();
        }
        if (isIdentifierStart(e1, e2, e3)) {
          this.reconsumeCodePoint(codePoint);
          return this.consumeIdentLikeToken();
        }
        if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
          this.consumeCodePoint();
          this.consumeCodePoint();
          return CDC_TOKEN;
        }
        break;
      case FULL_STOP:
        if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
          this.reconsumeCodePoint(codePoint);
          return this.consumeNumericToken();
        }
        break;
      case SOLIDUS:
        if (this.peekCodePoint(0) === ASTERISK) {
          this.consumeCodePoint();
          while (true) {
            var c = this.consumeCodePoint();
            if (c === ASTERISK) {
              c = this.consumeCodePoint();
              if (c === SOLIDUS) {
                return this.consumeToken();
              }
            }
            if (c === EOF) {
              return this.consumeToken();
            }
          }
        }
        break;
      case COLON:
        return COLON_TOKEN;
      case SEMICOLON:
        return SEMICOLON_TOKEN;
      case LESS_THAN_SIGN:
        if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS) {
          this.consumeCodePoint();
          this.consumeCodePoint();
          return CDO_TOKEN;
        }
        break;
      case COMMERCIAL_AT:
        var a1 = this.peekCodePoint(0);
        var a2 = this.peekCodePoint(1);
        var a3 = this.peekCodePoint(2);
        if (isIdentifierStart(a1, a2, a3)) {
          var value = this.consumeName();
          return { type: 7, value };
        }
        break;
      case LEFT_SQUARE_BRACKET:
        return LEFT_SQUARE_BRACKET_TOKEN;
      case REVERSE_SOLIDUS:
        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          this.reconsumeCodePoint(codePoint);
          return this.consumeIdentLikeToken();
        }
        break;
      case RIGHT_SQUARE_BRACKET:
        return RIGHT_SQUARE_BRACKET_TOKEN;
      case CIRCUMFLEX_ACCENT:
        if (this.peekCodePoint(0) === EQUALS_SIGN) {
          this.consumeCodePoint();
          return PREFIX_MATCH_TOKEN;
        }
        break;
      case LEFT_CURLY_BRACKET:
        return LEFT_CURLY_BRACKET_TOKEN;
      case RIGHT_CURLY_BRACKET:
        return RIGHT_CURLY_BRACKET_TOKEN;
      case u:
      case U:
        var u1 = this.peekCodePoint(0);
        var u2 = this.peekCodePoint(1);
        if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
          this.consumeCodePoint();
          this.consumeUnicodeRangeToken();
        }
        this.reconsumeCodePoint(codePoint);
        return this.consumeIdentLikeToken();
      case VERTICAL_LINE:
        if (this.peekCodePoint(0) === EQUALS_SIGN) {
          this.consumeCodePoint();
          return DASH_MATCH_TOKEN;
        }
        if (this.peekCodePoint(0) === VERTICAL_LINE) {
          this.consumeCodePoint();
          return COLUMN_TOKEN;
        }
        break;
      case TILDE:
        if (this.peekCodePoint(0) === EQUALS_SIGN) {
          this.consumeCodePoint();
          return INCLUDE_MATCH_TOKEN;
        }
        break;
      case EOF:
        return EOF_TOKEN;
    }
    if (isWhiteSpace(codePoint)) {
      this.consumeWhiteSpace();
      return WHITESPACE_TOKEN;
    }
    if (isDigit(codePoint)) {
      this.reconsumeCodePoint(codePoint);
      return this.consumeNumericToken();
    }
    if (isNameStartCodePoint(codePoint)) {
      this.reconsumeCodePoint(codePoint);
      return this.consumeIdentLikeToken();
    }
    return { type: 6, value: fromCodePoint$1(codePoint) };
  };
  Tokenizer2.prototype.consumeCodePoint = function() {
    var value = this._value.shift();
    return typeof value === "undefined" ? -1 : value;
  };
  Tokenizer2.prototype.reconsumeCodePoint = function(codePoint) {
    this._value.unshift(codePoint);
  };
  Tokenizer2.prototype.peekCodePoint = function(delta) {
    if (delta >= this._value.length) {
      return -1;
    }
    return this._value[delta];
  };
  Tokenizer2.prototype.consumeUnicodeRangeToken = function() {
    var digits = [];
    var codePoint = this.consumeCodePoint();
    while (isHex(codePoint) && digits.length < 6) {
      digits.push(codePoint);
      codePoint = this.consumeCodePoint();
    }
    var questionMarks = false;
    while (codePoint === QUESTION_MARK && digits.length < 6) {
      digits.push(codePoint);
      codePoint = this.consumeCodePoint();
      questionMarks = true;
    }
    if (questionMarks) {
      var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
        return digit === QUESTION_MARK ? ZERO : digit;
      })), 16);
      var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
        return digit === QUESTION_MARK ? F : digit;
      })), 16);
      return { type: 30, start: start_1, end };
    }
    var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
    if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
      this.consumeCodePoint();
      codePoint = this.consumeCodePoint();
      var endDigits = [];
      while (isHex(codePoint) && endDigits.length < 6) {
        endDigits.push(codePoint);
        codePoint = this.consumeCodePoint();
      }
      var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
      return { type: 30, start, end };
    } else {
      return { type: 30, start, end: start };
    }
  };
  Tokenizer2.prototype.consumeIdentLikeToken = function() {
    var value = this.consumeName();
    if (value.toLowerCase() === "url" && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
      this.consumeCodePoint();
      return this.consumeUrlToken();
    } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
      this.consumeCodePoint();
      return { type: 19, value };
    }
    return { type: 20, value };
  };
  Tokenizer2.prototype.consumeUrlToken = function() {
    var value = [];
    this.consumeWhiteSpace();
    if (this.peekCodePoint(0) === EOF) {
      return { type: 22, value: "" };
    }
    var next = this.peekCodePoint(0);
    if (next === APOSTROPHE || next === QUOTATION_MARK) {
      var stringToken = this.consumeStringToken(this.consumeCodePoint());
      if (stringToken.type === 0) {
        this.consumeWhiteSpace();
        if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
          this.consumeCodePoint();
          return { type: 22, value: stringToken.value };
        }
      }
      this.consumeBadUrlRemnants();
      return BAD_URL_TOKEN;
    }
    while (true) {
      var codePoint = this.consumeCodePoint();
      if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
        return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
      } else if (isWhiteSpace(codePoint)) {
        this.consumeWhiteSpace();
        if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
          this.consumeCodePoint();
          return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
        }
        this.consumeBadUrlRemnants();
        return BAD_URL_TOKEN;
      } else if (codePoint === QUOTATION_MARK || codePoint === APOSTROPHE || codePoint === LEFT_PARENTHESIS || isNonPrintableCodePoint(codePoint)) {
        this.consumeBadUrlRemnants();
        return BAD_URL_TOKEN;
      } else if (codePoint === REVERSE_SOLIDUS) {
        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          value.push(this.consumeEscapedCodePoint());
        } else {
          this.consumeBadUrlRemnants();
          return BAD_URL_TOKEN;
        }
      } else {
        value.push(codePoint);
      }
    }
  };
  Tokenizer2.prototype.consumeWhiteSpace = function() {
    while (isWhiteSpace(this.peekCodePoint(0))) {
      this.consumeCodePoint();
    }
  };
  Tokenizer2.prototype.consumeBadUrlRemnants = function() {
    while (true) {
      var codePoint = this.consumeCodePoint();
      if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
        return;
      }
      if (isValidEscape(codePoint, this.peekCodePoint(0))) {
        this.consumeEscapedCodePoint();
      }
    }
  };
  Tokenizer2.prototype.consumeStringSlice = function(count) {
    var SLICE_STACK_SIZE = 5e4;
    var value = "";
    while (count > 0) {
      var amount = Math.min(SLICE_STACK_SIZE, count);
      value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
      count -= amount;
    }
    this._value.shift();
    return value;
  };
  Tokenizer2.prototype.consumeStringToken = function(endingCodePoint) {
    var value = "";
    var i2 = 0;
    do {
      var codePoint = this._value[i2];
      if (codePoint === EOF || codePoint === void 0 || codePoint === endingCodePoint) {
        value += this.consumeStringSlice(i2);
        return { type: 0, value };
      }
      if (codePoint === LINE_FEED) {
        this._value.splice(0, i2);
        return BAD_STRING_TOKEN;
      }
      if (codePoint === REVERSE_SOLIDUS) {
        var next = this._value[i2 + 1];
        if (next !== EOF && next !== void 0) {
          if (next === LINE_FEED) {
            value += this.consumeStringSlice(i2);
            i2 = -1;
            this._value.shift();
          } else if (isValidEscape(codePoint, next)) {
            value += this.consumeStringSlice(i2);
            value += fromCodePoint$1(this.consumeEscapedCodePoint());
            i2 = -1;
          }
        }
      }
      i2++;
    } while (true);
  };
  Tokenizer2.prototype.consumeNumber = function() {
    var repr = [];
    var type = FLAG_INTEGER;
    var c1 = this.peekCodePoint(0);
    if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
      repr.push(this.consumeCodePoint());
    }
    while (isDigit(this.peekCodePoint(0))) {
      repr.push(this.consumeCodePoint());
    }
    c1 = this.peekCodePoint(0);
    var c2 = this.peekCodePoint(1);
    if (c1 === FULL_STOP && isDigit(c2)) {
      repr.push(this.consumeCodePoint(), this.consumeCodePoint());
      type = FLAG_NUMBER;
      while (isDigit(this.peekCodePoint(0))) {
        repr.push(this.consumeCodePoint());
      }
    }
    c1 = this.peekCodePoint(0);
    c2 = this.peekCodePoint(1);
    var c3 = this.peekCodePoint(2);
    if ((c1 === E || c1 === e) && ((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3) || isDigit(c2))) {
      repr.push(this.consumeCodePoint(), this.consumeCodePoint());
      type = FLAG_NUMBER;
      while (isDigit(this.peekCodePoint(0))) {
        repr.push(this.consumeCodePoint());
      }
    }
    return [stringToNumber(repr), type];
  };
  Tokenizer2.prototype.consumeNumericToken = function() {
    var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
    var c1 = this.peekCodePoint(0);
    var c2 = this.peekCodePoint(1);
    var c3 = this.peekCodePoint(2);
    if (isIdentifierStart(c1, c2, c3)) {
      var unit = this.consumeName();
      return { type: 15, number, flags, unit };
    }
    if (c1 === PERCENTAGE_SIGN) {
      this.consumeCodePoint();
      return { type: 16, number, flags };
    }
    return { type: 17, number, flags };
  };
  Tokenizer2.prototype.consumeEscapedCodePoint = function() {
    var codePoint = this.consumeCodePoint();
    if (isHex(codePoint)) {
      var hex = fromCodePoint$1(codePoint);
      while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
        hex += fromCodePoint$1(this.consumeCodePoint());
      }
      if (isWhiteSpace(this.peekCodePoint(0))) {
        this.consumeCodePoint();
      }
      var hexCodePoint = parseInt(hex, 16);
      if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 1114111) {
        return REPLACEMENT_CHARACTER;
      }
      return hexCodePoint;
    }
    if (codePoint === EOF) {
      return REPLACEMENT_CHARACTER;
    }
    return codePoint;
  };
  Tokenizer2.prototype.consumeName = function() {
    var result = "";
    while (true) {
      var codePoint = this.consumeCodePoint();
      if (isNameCodePoint(codePoint)) {
        result += fromCodePoint$1(codePoint);
      } else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
        result += fromCodePoint$1(this.consumeEscapedCodePoint());
      } else {
        this.reconsumeCodePoint(codePoint);
        return result;
      }
    }
  };
  return Tokenizer2;
}();
var Parser = function() {
  function Parser2(tokens) {
    this._tokens = tokens;
  }
  Parser2.create = function(value) {
    var tokenizer = new Tokenizer();
    tokenizer.write(value);
    return new Parser2(tokenizer.read());
  };
  Parser2.parseValue = function(value) {
    return Parser2.create(value).parseComponentValue();
  };
  Parser2.parseValues = function(value) {
    return Parser2.create(value).parseComponentValues();
  };
  Parser2.prototype.parseComponentValue = function() {
    var token = this.consumeToken();
    while (token.type === 31) {
      token = this.consumeToken();
    }
    if (token.type === 32) {
      throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    }
    this.reconsumeToken(token);
    var value = this.consumeComponentValue();
    do {
      token = this.consumeToken();
    } while (token.type === 31);
    if (token.type === 32) {
      return value;
    }
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  };
  Parser2.prototype.parseComponentValues = function() {
    var values = [];
    while (true) {
      var value = this.consumeComponentValue();
      if (value.type === 32) {
        return values;
      }
      values.push(value);
      values.push();
    }
  };
  Parser2.prototype.consumeComponentValue = function() {
    var token = this.consumeToken();
    switch (token.type) {
      case 11:
      case 28:
      case 2:
        return this.consumeSimpleBlock(token.type);
      case 19:
        return this.consumeFunction(token);
    }
    return token;
  };
  Parser2.prototype.consumeSimpleBlock = function(type) {
    var block = { type, values: [] };
    var token = this.consumeToken();
    while (true) {
      if (token.type === 32 || isEndingTokenFor(token, type)) {
        return block;
      }
      this.reconsumeToken(token);
      block.values.push(this.consumeComponentValue());
      token = this.consumeToken();
    }
  };
  Parser2.prototype.consumeFunction = function(functionToken) {
    var cssFunction = {
      name: functionToken.value,
      values: [],
      type: 18
    };
    while (true) {
      var token = this.consumeToken();
      if (token.type === 32 || token.type === 3) {
        return cssFunction;
      }
      this.reconsumeToken(token);
      cssFunction.values.push(this.consumeComponentValue());
    }
  };
  Parser2.prototype.consumeToken = function() {
    var token = this._tokens.shift();
    return typeof token === "undefined" ? EOF_TOKEN : token;
  };
  Parser2.prototype.reconsumeToken = function(token) {
    this._tokens.unshift(token);
  };
  return Parser2;
}();
var isDimensionToken = function(token) {
  return token.type === 15;
};
var isNumberToken = function(token) {
  return token.type === 17;
};
var isIdentToken = function(token) {
  return token.type === 20;
};
var isStringToken = function(token) {
  return token.type === 0;
};
var isIdentWithValue = function(token, value) {
  return isIdentToken(token) && token.value === value;
};
var nonWhiteSpace = function(token) {
  return token.type !== 31;
};
var nonFunctionArgSeparator = function(token) {
  return token.type !== 31 && token.type !== 4;
};
var parseFunctionArgs = function(tokens) {
  var args = [];
  var arg = [];
  tokens.forEach(function(token) {
    if (token.type === 4) {
      if (arg.length === 0) {
        throw new Error("Error parsing function args, zero tokens for arg");
      }
      args.push(arg);
      arg = [];
      return;
    }
    if (token.type !== 31) {
      arg.push(token);
    }
  });
  if (arg.length) {
    args.push(arg);
  }
  return args;
};
var isEndingTokenFor = function(token, type) {
  if (type === 11 && token.type === 12) {
    return true;
  }
  if (type === 28 && token.type === 29) {
    return true;
  }
  return type === 2 && token.type === 3;
};
var isLength = function(token) {
  return token.type === 17 || token.type === 15;
};
var isLengthPercentage = function(token) {
  return token.type === 16 || isLength(token);
};
var parseLengthPercentageTuple = function(tokens) {
  return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
};
var ZERO_LENGTH = {
  type: 17,
  number: 0,
  flags: FLAG_INTEGER
};
var FIFTY_PERCENT = {
  type: 16,
  number: 50,
  flags: FLAG_INTEGER
};
var HUNDRED_PERCENT = {
  type: 16,
  number: 100,
  flags: FLAG_INTEGER
};
var getAbsoluteValueForTuple = function(tuple, width, height) {
  var x2 = tuple[0], y2 = tuple[1];
  return [getAbsoluteValue(x2, width), getAbsoluteValue(typeof y2 !== "undefined" ? y2 : x2, height)];
};
var getAbsoluteValue = function(token, parent) {
  if (token.type === 16) {
    return token.number / 100 * parent;
  }
  if (isDimensionToken(token)) {
    switch (token.unit) {
      case "rem":
      case "em":
        return 16 * token.number;
      case "px":
      default:
        return token.number;
    }
  }
  return token.number;
};
var DEG = "deg";
var GRAD = "grad";
var RAD = "rad";
var TURN = "turn";
var angle = {
  name: "angle",
  parse: function(_context, value) {
    if (value.type === 15) {
      switch (value.unit) {
        case DEG:
          return Math.PI * value.number / 180;
        case GRAD:
          return Math.PI / 200 * value.number;
        case RAD:
          return value.number;
        case TURN:
          return Math.PI * 2 * value.number;
      }
    }
    throw new Error("Unsupported angle type");
  }
};
var isAngle = function(value) {
  if (value.type === 15) {
    if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
      return true;
    }
  }
  return false;
};
var parseNamedSide = function(tokens) {
  var sideOrCorner = tokens.filter(isIdentToken).map(function(ident) {
    return ident.value;
  }).join(" ");
  switch (sideOrCorner) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [ZERO_LENGTH, ZERO_LENGTH];
    case "to top":
    case "bottom":
      return deg(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [ZERO_LENGTH, HUNDRED_PERCENT];
    case "to right":
    case "left":
      return deg(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [HUNDRED_PERCENT, HUNDRED_PERCENT];
    case "to bottom":
    case "top":
      return deg(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [HUNDRED_PERCENT, ZERO_LENGTH];
    case "to left":
    case "right":
      return deg(270);
  }
  return 0;
};
var deg = function(deg2) {
  return Math.PI * deg2 / 180;
};
var color$1 = {
  name: "color",
  parse: function(context, value) {
    if (value.type === 18) {
      var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
      if (typeof colorFunction === "undefined") {
        throw new Error('Attempting to parse an unsupported color function "' + value.name + '"');
      }
      return colorFunction(context, value.values);
    }
    if (value.type === 5) {
      if (value.value.length === 3) {
        var r2 = value.value.substring(0, 1);
        var g = value.value.substring(1, 2);
        var b2 = value.value.substring(2, 3);
        return pack(parseInt(r2 + r2, 16), parseInt(g + g, 16), parseInt(b2 + b2, 16), 1);
      }
      if (value.value.length === 4) {
        var r2 = value.value.substring(0, 1);
        var g = value.value.substring(1, 2);
        var b2 = value.value.substring(2, 3);
        var a2 = value.value.substring(3, 4);
        return pack(parseInt(r2 + r2, 16), parseInt(g + g, 16), parseInt(b2 + b2, 16), parseInt(a2 + a2, 16) / 255);
      }
      if (value.value.length === 6) {
        var r2 = value.value.substring(0, 2);
        var g = value.value.substring(2, 4);
        var b2 = value.value.substring(4, 6);
        return pack(parseInt(r2, 16), parseInt(g, 16), parseInt(b2, 16), 1);
      }
      if (value.value.length === 8) {
        var r2 = value.value.substring(0, 2);
        var g = value.value.substring(2, 4);
        var b2 = value.value.substring(4, 6);
        var a2 = value.value.substring(6, 8);
        return pack(parseInt(r2, 16), parseInt(g, 16), parseInt(b2, 16), parseInt(a2, 16) / 255);
      }
    }
    if (value.type === 20) {
      var namedColor = COLORS[value.value.toUpperCase()];
      if (typeof namedColor !== "undefined") {
        return namedColor;
      }
    }
    return COLORS.TRANSPARENT;
  }
};
var isTransparent = function(color2) {
  return (255 & color2) === 0;
};
var asString = function(color2) {
  var alpha = 255 & color2;
  var blue = 255 & color2 >> 8;
  var green = 255 & color2 >> 16;
  var red = 255 & color2 >> 24;
  return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
};
var pack = function(r2, g, b2, a2) {
  return (r2 << 24 | g << 16 | b2 << 8 | Math.round(a2 * 255) << 0) >>> 0;
};
var getTokenColorValue = function(token, i2) {
  if (token.type === 17) {
    return token.number;
  }
  if (token.type === 16) {
    var max = i2 === 3 ? 1 : 255;
    return i2 === 3 ? token.number / 100 * max : Math.round(token.number / 100 * max);
  }
  return 0;
};
var rgb = function(_context, args) {
  var tokens = args.filter(nonFunctionArgSeparator);
  if (tokens.length === 3) {
    var _a = tokens.map(getTokenColorValue), r2 = _a[0], g = _a[1], b2 = _a[2];
    return pack(r2, g, b2, 1);
  }
  if (tokens.length === 4) {
    var _b = tokens.map(getTokenColorValue), r2 = _b[0], g = _b[1], b2 = _b[2], a2 = _b[3];
    return pack(r2, g, b2, a2);
  }
  return 0;
};
function hue2rgb(t1, t2, hue) {
  if (hue < 0) {
    hue += 1;
  }
  if (hue >= 1) {
    hue -= 1;
  }
  if (hue < 1 / 6) {
    return (t2 - t1) * hue * 6 + t1;
  } else if (hue < 1 / 2) {
    return t2;
  } else if (hue < 2 / 3) {
    return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
  } else {
    return t1;
  }
}
var hsl = function(context, args) {
  var tokens = args.filter(nonFunctionArgSeparator);
  var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
  var h2 = (hue.type === 17 ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
  var s2 = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
  var l2 = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
  var a2 = typeof alpha !== "undefined" && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
  if (s2 === 0) {
    return pack(l2 * 255, l2 * 255, l2 * 255, 1);
  }
  var t2 = l2 <= 0.5 ? l2 * (s2 + 1) : l2 + s2 - l2 * s2;
  var t1 = l2 * 2 - t2;
  var r2 = hue2rgb(t1, t2, h2 + 1 / 3);
  var g = hue2rgb(t1, t2, h2);
  var b2 = hue2rgb(t1, t2, h2 - 1 / 3);
  return pack(r2 * 255, g * 255, b2 * 255, a2);
};
var SUPPORTED_COLOR_FUNCTIONS = {
  hsl,
  hsla: hsl,
  rgb,
  rgba: rgb
};
var parseColor = function(context, value) {
  return color$1.parse(context, Parser.create(value).parseComponentValue());
};
var COLORS = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
};
var backgroundClip = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.map(function(token) {
      if (isIdentToken(token)) {
        switch (token.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      }
      return 0;
    });
  }
};
var backgroundColor = {
  name: "background-color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
};
var parseColorStop = function(context, args) {
  var color2 = color$1.parse(context, args[0]);
  var stop = args[1];
  return stop && isLengthPercentage(stop) ? { color: color2, stop } : { color: color2, stop: null };
};
var processColorStops = function(stops, lineLength) {
  var first = stops[0];
  var last = stops[stops.length - 1];
  if (first.stop === null) {
    first.stop = ZERO_LENGTH;
  }
  if (last.stop === null) {
    last.stop = HUNDRED_PERCENT;
  }
  var processStops = [];
  var previous = 0;
  for (var i2 = 0; i2 < stops.length; i2++) {
    var stop_1 = stops[i2].stop;
    if (stop_1 !== null) {
      var absoluteValue = getAbsoluteValue(stop_1, lineLength);
      if (absoluteValue > previous) {
        processStops.push(absoluteValue);
      } else {
        processStops.push(previous);
      }
      previous = absoluteValue;
    } else {
      processStops.push(null);
    }
  }
  var gapBegin = null;
  for (var i2 = 0; i2 < processStops.length; i2++) {
    var stop_2 = processStops[i2];
    if (stop_2 === null) {
      if (gapBegin === null) {
        gapBegin = i2;
      }
    } else if (gapBegin !== null) {
      var gapLength = i2 - gapBegin;
      var beforeGap = processStops[gapBegin - 1];
      var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
      for (var g = 1; g <= gapLength; g++) {
        processStops[gapBegin + g - 1] = gapValue * g;
      }
      gapBegin = null;
    }
  }
  return stops.map(function(_a, i3) {
    var color2 = _a.color;
    return { color: color2, stop: Math.max(Math.min(1, processStops[i3] / lineLength), 0) };
  });
};
var getAngleFromCorner = function(corner, width, height) {
  var centerX = width / 2;
  var centerY = height / 2;
  var x2 = getAbsoluteValue(corner[0], width) - centerX;
  var y2 = centerY - getAbsoluteValue(corner[1], height);
  return (Math.atan2(y2, x2) + Math.PI * 2) % (Math.PI * 2);
};
var calculateGradientDirection = function(angle2, width, height) {
  var radian = typeof angle2 === "number" ? angle2 : getAngleFromCorner(angle2, width, height);
  var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
  var halfWidth = width / 2;
  var halfHeight = height / 2;
  var halfLineLength = lineLength / 2;
  var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
  var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
  return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
};
var distance = function(a2, b2) {
  return Math.sqrt(a2 * a2 + b2 * b2);
};
var findCorner = function(width, height, x2, y2, closest) {
  var corners = [
    [0, 0],
    [0, height],
    [width, 0],
    [width, height]
  ];
  return corners.reduce(function(stat, corner) {
    var cx = corner[0], cy = corner[1];
    var d = distance(x2 - cx, y2 - cy);
    if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
      return {
        optimumCorner: corner,
        optimumDistance: d
      };
    }
    return stat;
  }, {
    optimumDistance: closest ? Infinity : -Infinity,
    optimumCorner: null
  }).optimumCorner;
};
var calculateRadius = function(gradient, x2, y2, width, height) {
  var rx = 0;
  var ry = 0;
  switch (gradient.size) {
    case 0:
      if (gradient.shape === 0) {
        rx = ry = Math.min(Math.abs(x2), Math.abs(x2 - width), Math.abs(y2), Math.abs(y2 - height));
      } else if (gradient.shape === 1) {
        rx = Math.min(Math.abs(x2), Math.abs(x2 - width));
        ry = Math.min(Math.abs(y2), Math.abs(y2 - height));
      }
      break;
    case 2:
      if (gradient.shape === 0) {
        rx = ry = Math.min(distance(x2, y2), distance(x2, y2 - height), distance(x2 - width, y2), distance(x2 - width, y2 - height));
      } else if (gradient.shape === 1) {
        var c = Math.min(Math.abs(y2), Math.abs(y2 - height)) / Math.min(Math.abs(x2), Math.abs(x2 - width));
        var _a = findCorner(width, height, x2, y2, true), cx = _a[0], cy = _a[1];
        rx = distance(cx - x2, (cy - y2) / c);
        ry = c * rx;
      }
      break;
    case 1:
      if (gradient.shape === 0) {
        rx = ry = Math.max(Math.abs(x2), Math.abs(x2 - width), Math.abs(y2), Math.abs(y2 - height));
      } else if (gradient.shape === 1) {
        rx = Math.max(Math.abs(x2), Math.abs(x2 - width));
        ry = Math.max(Math.abs(y2), Math.abs(y2 - height));
      }
      break;
    case 3:
      if (gradient.shape === 0) {
        rx = ry = Math.max(distance(x2, y2), distance(x2, y2 - height), distance(x2 - width, y2), distance(x2 - width, y2 - height));
      } else if (gradient.shape === 1) {
        var c = Math.max(Math.abs(y2), Math.abs(y2 - height)) / Math.max(Math.abs(x2), Math.abs(x2 - width));
        var _b = findCorner(width, height, x2, y2, false), cx = _b[0], cy = _b[1];
        rx = distance(cx - x2, (cy - y2) / c);
        ry = c * rx;
      }
      break;
  }
  if (Array.isArray(gradient.size)) {
    rx = getAbsoluteValue(gradient.size[0], width);
    ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
  }
  return [rx, ry];
};
var linearGradient = function(context, tokens) {
  var angle$1 = deg(180);
  var stops = [];
  parseFunctionArgs(tokens).forEach(function(arg, i2) {
    if (i2 === 0) {
      var firstToken = arg[0];
      if (firstToken.type === 20 && firstToken.value === "to") {
        angle$1 = parseNamedSide(arg);
        return;
      } else if (isAngle(firstToken)) {
        angle$1 = angle.parse(context, firstToken);
        return;
      }
    }
    var colorStop = parseColorStop(context, arg);
    stops.push(colorStop);
  });
  return { angle: angle$1, stops, type: 1 };
};
var prefixLinearGradient = function(context, tokens) {
  var angle$1 = deg(180);
  var stops = [];
  parseFunctionArgs(tokens).forEach(function(arg, i2) {
    if (i2 === 0) {
      var firstToken = arg[0];
      if (firstToken.type === 20 && ["top", "left", "right", "bottom"].indexOf(firstToken.value) !== -1) {
        angle$1 = parseNamedSide(arg);
        return;
      } else if (isAngle(firstToken)) {
        angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
        return;
      }
    }
    var colorStop = parseColorStop(context, arg);
    stops.push(colorStop);
  });
  return {
    angle: angle$1,
    stops,
    type: 1
  };
};
var webkitGradient = function(context, tokens) {
  var angle2 = deg(180);
  var stops = [];
  var type = 1;
  var shape = 0;
  var size = 3;
  var position2 = [];
  parseFunctionArgs(tokens).forEach(function(arg, i2) {
    var firstToken = arg[0];
    if (i2 === 0) {
      if (isIdentToken(firstToken) && firstToken.value === "linear") {
        type = 1;
        return;
      } else if (isIdentToken(firstToken) && firstToken.value === "radial") {
        type = 2;
        return;
      }
    }
    if (firstToken.type === 18) {
      if (firstToken.name === "from") {
        var color2 = color$1.parse(context, firstToken.values[0]);
        stops.push({ stop: ZERO_LENGTH, color: color2 });
      } else if (firstToken.name === "to") {
        var color2 = color$1.parse(context, firstToken.values[0]);
        stops.push({ stop: HUNDRED_PERCENT, color: color2 });
      } else if (firstToken.name === "color-stop") {
        var values = firstToken.values.filter(nonFunctionArgSeparator);
        if (values.length === 2) {
          var color2 = color$1.parse(context, values[1]);
          var stop_1 = values[0];
          if (isNumberToken(stop_1)) {
            stops.push({
              stop: { type: 16, number: stop_1.number * 100, flags: stop_1.flags },
              color: color2
            });
          }
        }
      }
    }
  });
  return type === 1 ? {
    angle: (angle2 + deg(180)) % deg(360),
    stops,
    type
  } : { size, shape, stops, position: position2, type };
};
var CLOSEST_SIDE = "closest-side";
var FARTHEST_SIDE = "farthest-side";
var CLOSEST_CORNER = "closest-corner";
var FARTHEST_CORNER = "farthest-corner";
var CIRCLE = "circle";
var ELLIPSE = "ellipse";
var COVER = "cover";
var CONTAIN = "contain";
var radialGradient = function(context, tokens) {
  var shape = 0;
  var size = 3;
  var stops = [];
  var position2 = [];
  parseFunctionArgs(tokens).forEach(function(arg, i2) {
    var isColorStop = true;
    if (i2 === 0) {
      var isAtPosition_1 = false;
      isColorStop = arg.reduce(function(acc, token) {
        if (isAtPosition_1) {
          if (isIdentToken(token)) {
            switch (token.value) {
              case "center":
                position2.push(FIFTY_PERCENT);
                return acc;
              case "top":
              case "left":
                position2.push(ZERO_LENGTH);
                return acc;
              case "right":
              case "bottom":
                position2.push(HUNDRED_PERCENT);
                return acc;
            }
          } else if (isLengthPercentage(token) || isLength(token)) {
            position2.push(token);
          }
        } else if (isIdentToken(token)) {
          switch (token.value) {
            case CIRCLE:
              shape = 0;
              return false;
            case ELLIPSE:
              shape = 1;
              return false;
            case "at":
              isAtPosition_1 = true;
              return false;
            case CLOSEST_SIDE:
              size = 0;
              return false;
            case COVER:
            case FARTHEST_SIDE:
              size = 1;
              return false;
            case CONTAIN:
            case CLOSEST_CORNER:
              size = 2;
              return false;
            case FARTHEST_CORNER:
              size = 3;
              return false;
          }
        } else if (isLength(token) || isLengthPercentage(token)) {
          if (!Array.isArray(size)) {
            size = [];
          }
          size.push(token);
          return false;
        }
        return acc;
      }, isColorStop);
    }
    if (isColorStop) {
      var colorStop = parseColorStop(context, arg);
      stops.push(colorStop);
    }
  });
  return { size, shape, stops, position: position2, type: 2 };
};
var prefixRadialGradient = function(context, tokens) {
  var shape = 0;
  var size = 3;
  var stops = [];
  var position2 = [];
  parseFunctionArgs(tokens).forEach(function(arg, i2) {
    var isColorStop = true;
    if (i2 === 0) {
      isColorStop = arg.reduce(function(acc, token) {
        if (isIdentToken(token)) {
          switch (token.value) {
            case "center":
              position2.push(FIFTY_PERCENT);
              return false;
            case "top":
            case "left":
              position2.push(ZERO_LENGTH);
              return false;
            case "right":
            case "bottom":
              position2.push(HUNDRED_PERCENT);
              return false;
          }
        } else if (isLengthPercentage(token) || isLength(token)) {
          position2.push(token);
          return false;
        }
        return acc;
      }, isColorStop);
    } else if (i2 === 1) {
      isColorStop = arg.reduce(function(acc, token) {
        if (isIdentToken(token)) {
          switch (token.value) {
            case CIRCLE:
              shape = 0;
              return false;
            case ELLIPSE:
              shape = 1;
              return false;
            case CONTAIN:
            case CLOSEST_SIDE:
              size = 0;
              return false;
            case FARTHEST_SIDE:
              size = 1;
              return false;
            case CLOSEST_CORNER:
              size = 2;
              return false;
            case COVER:
            case FARTHEST_CORNER:
              size = 3;
              return false;
          }
        } else if (isLength(token) || isLengthPercentage(token)) {
          if (!Array.isArray(size)) {
            size = [];
          }
          size.push(token);
          return false;
        }
        return acc;
      }, isColorStop);
    }
    if (isColorStop) {
      var colorStop = parseColorStop(context, arg);
      stops.push(colorStop);
    }
  });
  return { size, shape, stops, position: position2, type: 2 };
};
var isLinearGradient = function(background) {
  return background.type === 1;
};
var isRadialGradient = function(background) {
  return background.type === 2;
};
var image = {
  name: "image",
  parse: function(context, value) {
    if (value.type === 22) {
      var image_1 = { url: value.value, type: 0 };
      context.cache.addImage(value.value);
      return image_1;
    }
    if (value.type === 18) {
      var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
      if (typeof imageFunction === "undefined") {
        throw new Error('Attempting to parse an unsupported image function "' + value.name + '"');
      }
      return imageFunction(context, value.values);
    }
    throw new Error("Unsupported image type " + value.type);
  }
};
function isSupportedImage(value) {
  return !(value.type === 20 && value.value === "none") && (value.type !== 18 || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]);
}
var SUPPORTED_IMAGE_FUNCTIONS = {
  "linear-gradient": linearGradient,
  "-moz-linear-gradient": prefixLinearGradient,
  "-ms-linear-gradient": prefixLinearGradient,
  "-o-linear-gradient": prefixLinearGradient,
  "-webkit-linear-gradient": prefixLinearGradient,
  "radial-gradient": radialGradient,
  "-moz-radial-gradient": prefixRadialGradient,
  "-ms-radial-gradient": prefixRadialGradient,
  "-o-radial-gradient": prefixRadialGradient,
  "-webkit-radial-gradient": prefixRadialGradient,
  "-webkit-gradient": webkitGradient
};
var backgroundImage = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(context, tokens) {
    if (tokens.length === 0) {
      return [];
    }
    var first = tokens[0];
    if (first.type === 20 && first.value === "none") {
      return [];
    }
    return tokens.filter(function(value) {
      return nonFunctionArgSeparator(value) && isSupportedImage(value);
    }).map(function(value) {
      return image.parse(context, value);
    });
  }
};
var backgroundOrigin = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.map(function(token) {
      if (isIdentToken(token)) {
        switch (token.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      }
      return 0;
    });
  }
};
var backgroundPosition = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: false,
  parse: function(_context, tokens) {
    return parseFunctionArgs(tokens).map(function(values) {
      return values.filter(isLengthPercentage);
    }).map(parseLengthPercentageTuple);
  }
};
var backgroundRepeat = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return parseFunctionArgs(tokens).map(function(values) {
      return values.filter(isIdentToken).map(function(token) {
        return token.value;
      }).join(" ");
    }).map(parseBackgroundRepeat);
  }
};
var parseBackgroundRepeat = function(value) {
  switch (value) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
};
var BACKGROUND_SIZE;
(function(BACKGROUND_SIZE2) {
  BACKGROUND_SIZE2["AUTO"] = "auto";
  BACKGROUND_SIZE2["CONTAIN"] = "contain";
  BACKGROUND_SIZE2["COVER"] = "cover";
})(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
var backgroundSize = {
  name: "background-size",
  initialValue: "0",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return parseFunctionArgs(tokens).map(function(values) {
      return values.filter(isBackgroundSizeInfoToken);
    });
  }
};
var isBackgroundSizeInfoToken = function(value) {
  return isIdentToken(value) || isLengthPercentage(value);
};
var borderColorForSide = function(side) {
  return {
    name: "border-" + side + "-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  };
};
var borderTopColor = borderColorForSide("top");
var borderRightColor = borderColorForSide("right");
var borderBottomColor = borderColorForSide("bottom");
var borderLeftColor = borderColorForSide("left");
var borderRadiusForSide = function(side) {
  return {
    name: "border-radius-" + side,
    initialValue: "0 0",
    prefix: false,
    type: 1,
    parse: function(_context, tokens) {
      return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
    }
  };
};
var borderTopLeftRadius = borderRadiusForSide("top-left");
var borderTopRightRadius = borderRadiusForSide("top-right");
var borderBottomRightRadius = borderRadiusForSide("bottom-right");
var borderBottomLeftRadius = borderRadiusForSide("bottom-left");
var borderStyleForSide = function(side) {
  return {
    name: "border-" + side + "-style",
    initialValue: "solid",
    prefix: false,
    type: 2,
    parse: function(_context, style) {
      switch (style) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
};
var borderTopStyle = borderStyleForSide("top");
var borderRightStyle = borderStyleForSide("right");
var borderBottomStyle = borderStyleForSide("bottom");
var borderLeftStyle = borderStyleForSide("left");
var borderWidthForSide = function(side) {
  return {
    name: "border-" + side + "-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(_context, token) {
      if (isDimensionToken(token)) {
        return token.number;
      }
      return 0;
    }
  };
};
var borderTopWidth = borderWidthForSide("top");
var borderRightWidth = borderWidthForSide("right");
var borderBottomWidth = borderWidthForSide("bottom");
var borderLeftWidth = borderWidthForSide("left");
var color = {
  name: "color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
};
var direction = {
  name: "direction",
  initialValue: "ltr",
  prefix: false,
  type: 2,
  parse: function(_context, direction2) {
    switch (direction2) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
};
var display = {
  name: "display",
  initialValue: "inline-block",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).reduce(function(bit, token) {
      return bit | parseDisplayValue(token.value);
    }, 0);
  }
};
var parseDisplayValue = function(display2) {
  switch (display2) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
};
var float = {
  name: "float",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, float2) {
    switch (float2) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
};
var letterSpacing = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: false,
  type: 0,
  parse: function(_context, token) {
    if (token.type === 20 && token.value === "normal") {
      return 0;
    }
    if (token.type === 17) {
      return token.number;
    }
    if (token.type === 15) {
      return token.number;
    }
    return 0;
  }
};
var LINE_BREAK;
(function(LINE_BREAK2) {
  LINE_BREAK2["NORMAL"] = "normal";
  LINE_BREAK2["STRICT"] = "strict";
})(LINE_BREAK || (LINE_BREAK = {}));
var lineBreak = {
  name: "line-break",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, lineBreak2) {
    switch (lineBreak2) {
      case "strict":
        return LINE_BREAK.STRICT;
      case "normal":
      default:
        return LINE_BREAK.NORMAL;
    }
  }
};
var lineHeight = {
  name: "line-height",
  initialValue: "normal",
  prefix: false,
  type: 4
};
var computeLineHeight = function(token, fontSize2) {
  if (isIdentToken(token) && token.value === "normal") {
    return 1.2 * fontSize2;
  } else if (token.type === 17) {
    return fontSize2 * token.number;
  } else if (isLengthPercentage(token)) {
    return getAbsoluteValue(token, fontSize2);
  }
  return fontSize2;
};
var listStyleImage = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: false,
  parse: function(context, token) {
    if (token.type === 20 && token.value === "none") {
      return null;
    }
    return image.parse(context, token);
  }
};
var listStylePosition = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: false,
  type: 2,
  parse: function(_context, position2) {
    switch (position2) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
};
var listStyleType = {
  name: "list-style-type",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, type) {
    switch (type) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
};
var marginForSide = function(side) {
  return {
    name: "margin-" + side,
    initialValue: "0",
    prefix: false,
    type: 4
  };
};
var marginTop = marginForSide("top");
var marginRight = marginForSide("right");
var marginBottom = marginForSide("bottom");
var marginLeft = marginForSide("left");
var overflow = {
  name: "overflow",
  initialValue: "visible",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).map(function(overflow2) {
      switch (overflow2.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
};
var overflowWrap = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, overflow2) {
    switch (overflow2) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
};
var paddingForSide = function(side) {
  return {
    name: "padding-" + side,
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length-percentage"
  };
};
var paddingTop = paddingForSide("top");
var paddingRight = paddingForSide("right");
var paddingBottom = paddingForSide("bottom");
var paddingLeft = paddingForSide("left");
var textAlign = {
  name: "text-align",
  initialValue: "left",
  prefix: false,
  type: 2,
  parse: function(_context, textAlign2) {
    switch (textAlign2) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
};
var position = {
  name: "position",
  initialValue: "static",
  prefix: false,
  type: 2,
  parse: function(_context, position2) {
    switch (position2) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
};
var textShadow = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(context, tokens) {
    if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
      return [];
    }
    return parseFunctionArgs(tokens).map(function(values) {
      var shadow = {
        color: COLORS.TRANSPARENT,
        offsetX: ZERO_LENGTH,
        offsetY: ZERO_LENGTH,
        blur: ZERO_LENGTH
      };
      var c = 0;
      for (var i2 = 0; i2 < values.length; i2++) {
        var token = values[i2];
        if (isLength(token)) {
          if (c === 0) {
            shadow.offsetX = token;
          } else if (c === 1) {
            shadow.offsetY = token;
          } else {
            shadow.blur = token;
          }
          c++;
        } else {
          shadow.color = color$1.parse(context, token);
        }
      }
      return shadow;
    });
  }
};
var textTransform = {
  name: "text-transform",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, textTransform2) {
    switch (textTransform2) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
};
var transform$1 = {
  name: "transform",
  initialValue: "none",
  prefix: true,
  type: 0,
  parse: function(_context, token) {
    if (token.type === 20 && token.value === "none") {
      return null;
    }
    if (token.type === 18) {
      var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
      if (typeof transformFunction === "undefined") {
        throw new Error('Attempting to parse an unsupported transform function "' + token.name + '"');
      }
      return transformFunction(token.values);
    }
    return null;
  }
};
var matrix = function(args) {
  var values = args.filter(function(arg) {
    return arg.type === 17;
  }).map(function(arg) {
    return arg.number;
  });
  return values.length === 6 ? values : null;
};
var matrix3d = function(args) {
  var values = args.filter(function(arg) {
    return arg.type === 17;
  }).map(function(arg) {
    return arg.number;
  });
  var a1 = values[0], b1 = values[1];
  values[2];
  values[3];
  var a2 = values[4], b2 = values[5];
  values[6];
  values[7];
  values[8];
  values[9];
  values[10];
  values[11];
  var a4 = values[12], b4 = values[13];
  values[14];
  values[15];
  return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
};
var SUPPORTED_TRANSFORM_FUNCTIONS = {
  matrix,
  matrix3d
};
var DEFAULT_VALUE = {
  type: 16,
  number: 50,
  flags: FLAG_INTEGER
};
var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
var transformOrigin = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: true,
  type: 1,
  parse: function(_context, tokens) {
    var origins = tokens.filter(isLengthPercentage);
    if (origins.length !== 2) {
      return DEFAULT;
    }
    return [origins[0], origins[1]];
  }
};
var visibility = {
  name: "visible",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, visibility2) {
    switch (visibility2) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
};
var WORD_BREAK;
(function(WORD_BREAK2) {
  WORD_BREAK2["NORMAL"] = "normal";
  WORD_BREAK2["BREAK_ALL"] = "break-all";
  WORD_BREAK2["KEEP_ALL"] = "keep-all";
})(WORD_BREAK || (WORD_BREAK = {}));
var wordBreak = {
  name: "word-break",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, wordBreak2) {
    switch (wordBreak2) {
      case "break-all":
        return WORD_BREAK.BREAK_ALL;
      case "keep-all":
        return WORD_BREAK.KEEP_ALL;
      case "normal":
      default:
        return WORD_BREAK.NORMAL;
    }
  }
};
var zIndex = {
  name: "z-index",
  initialValue: "auto",
  prefix: false,
  type: 0,
  parse: function(_context, token) {
    if (token.type === 20) {
      return { auto: true, order: 0 };
    }
    if (isNumberToken(token)) {
      return { auto: false, order: token.number };
    }
    throw new Error("Invalid z-index number parsed");
  }
};
var time = {
  name: "time",
  parse: function(_context, value) {
    if (value.type === 15) {
      switch (value.unit.toLowerCase()) {
        case "s":
          return 1e3 * value.number;
        case "ms":
          return value.number;
      }
    }
    throw new Error("Unsupported time type");
  }
};
var opacity = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: false,
  parse: function(_context, token) {
    if (isNumberToken(token)) {
      return token.number;
    }
    return 1;
  }
};
var textDecorationColor = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
};
var textDecorationLine = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).map(function(token) {
      switch (token.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(line) {
      return line !== 0;
    });
  }
};
var fontFamily = {
  name: "font-family",
  initialValue: "",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    var accumulator = [];
    var results = [];
    tokens.forEach(function(token) {
      switch (token.type) {
        case 20:
        case 0:
          accumulator.push(token.value);
          break;
        case 17:
          accumulator.push(token.number.toString());
          break;
        case 4:
          results.push(accumulator.join(" "));
          accumulator.length = 0;
          break;
      }
    });
    if (accumulator.length) {
      results.push(accumulator.join(" "));
    }
    return results.map(function(result) {
      return result.indexOf(" ") === -1 ? result : "'" + result + "'";
    });
  }
};
var fontSize = {
  name: "font-size",
  initialValue: "0",
  prefix: false,
  type: 3,
  format: "length"
};
var fontWeight = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: false,
  parse: function(_context, token) {
    if (isNumberToken(token)) {
      return token.number;
    }
    if (isIdentToken(token)) {
      switch (token.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    }
    return 400;
  }
};
var fontVariant = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).map(function(token) {
      return token.value;
    });
  }
};
var fontStyle = {
  name: "font-style",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, overflow2) {
    switch (overflow2) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
};
var contains = function(bit, value) {
  return (bit & value) !== 0;
};
var content = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(_context, tokens) {
    if (tokens.length === 0) {
      return [];
    }
    var first = tokens[0];
    if (first.type === 20 && first.value === "none") {
      return [];
    }
    return tokens;
  }
};
var counterIncrement = {
  name: "counter-increment",
  initialValue: "none",
  prefix: true,
  type: 1,
  parse: function(_context, tokens) {
    if (tokens.length === 0) {
      return null;
    }
    var first = tokens[0];
    if (first.type === 20 && first.value === "none") {
      return null;
    }
    var increments = [];
    var filtered = tokens.filter(nonWhiteSpace);
    for (var i2 = 0; i2 < filtered.length; i2++) {
      var counter = filtered[i2];
      var next = filtered[i2 + 1];
      if (counter.type === 20) {
        var increment = next && isNumberToken(next) ? next.number : 1;
        increments.push({ counter: counter.value, increment });
      }
    }
    return increments;
  }
};
var counterReset = {
  name: "counter-reset",
  initialValue: "none",
  prefix: true,
  type: 1,
  parse: function(_context, tokens) {
    if (tokens.length === 0) {
      return [];
    }
    var resets = [];
    var filtered = tokens.filter(nonWhiteSpace);
    for (var i2 = 0; i2 < filtered.length; i2++) {
      var counter = filtered[i2];
      var next = filtered[i2 + 1];
      if (isIdentToken(counter) && counter.value !== "none") {
        var reset = next && isNumberToken(next) ? next.number : 0;
        resets.push({ counter: counter.value, reset });
      }
    }
    return resets;
  }
};
var duration = {
  name: "duration",
  initialValue: "0s",
  prefix: false,
  type: 1,
  parse: function(context, tokens) {
    return tokens.filter(isDimensionToken).map(function(token) {
      return time.parse(context, token);
    });
  }
};
var quotes = {
  name: "quotes",
  initialValue: "none",
  prefix: true,
  type: 1,
  parse: function(_context, tokens) {
    if (tokens.length === 0) {
      return null;
    }
    var first = tokens[0];
    if (first.type === 20 && first.value === "none") {
      return null;
    }
    var quotes2 = [];
    var filtered = tokens.filter(isStringToken);
    if (filtered.length % 2 !== 0) {
      return null;
    }
    for (var i2 = 0; i2 < filtered.length; i2 += 2) {
      var open_1 = filtered[i2].value;
      var close_1 = filtered[i2 + 1].value;
      quotes2.push({ open: open_1, close: close_1 });
    }
    return quotes2;
  }
};
var getQuote = function(quotes2, depth, open) {
  if (!quotes2) {
    return "";
  }
  var quote = quotes2[Math.min(depth, quotes2.length - 1)];
  if (!quote) {
    return "";
  }
  return open ? quote.open : quote.close;
};
var boxShadow = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(context, tokens) {
    if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
      return [];
    }
    return parseFunctionArgs(tokens).map(function(values) {
      var shadow = {
        color: 255,
        offsetX: ZERO_LENGTH,
        offsetY: ZERO_LENGTH,
        blur: ZERO_LENGTH,
        spread: ZERO_LENGTH,
        inset: false
      };
      var c = 0;
      for (var i2 = 0; i2 < values.length; i2++) {
        var token = values[i2];
        if (isIdentWithValue(token, "inset")) {
          shadow.inset = true;
        } else if (isLength(token)) {
          if (c === 0) {
            shadow.offsetX = token;
          } else if (c === 1) {
            shadow.offsetY = token;
          } else if (c === 2) {
            shadow.blur = token;
          } else {
            shadow.spread = token;
          }
          c++;
        } else {
          shadow.color = color$1.parse(context, token);
        }
      }
      return shadow;
    });
  }
};
var paintOrder = {
  name: "paint-order",
  initialValue: "normal",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    var DEFAULT_VALUE2 = [0, 1, 2];
    var layers = [];
    tokens.filter(isIdentToken).forEach(function(token) {
      switch (token.value) {
        case "stroke":
          layers.push(1);
          break;
        case "fill":
          layers.push(0);
          break;
        case "markers":
          layers.push(2);
          break;
      }
    });
    DEFAULT_VALUE2.forEach(function(value) {
      if (layers.indexOf(value) === -1) {
        layers.push(value);
      }
    });
    return layers;
  }
};
var webkitTextStrokeColor = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: false,
  type: 3,
  format: "color"
};
var webkitTextStrokeWidth = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: false,
  parse: function(_context, token) {
    if (isDimensionToken(token)) {
      return token.number;
    }
    return 0;
  }
};
var CSSParsedDeclaration = function() {
  function CSSParsedDeclaration2(context, declaration) {
    var _a, _b;
    this.animationDuration = parse(context, duration, declaration.animationDuration);
    this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
    this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
    this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
    this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
    this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
    this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
    this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
    this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
    this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
    this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
    this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
    this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
    this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
    this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
    this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
    this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
    this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
    this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
    this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
    this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
    this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
    this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
    this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
    this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
    this.color = parse(context, color, declaration.color);
    this.direction = parse(context, direction, declaration.direction);
    this.display = parse(context, display, declaration.display);
    this.float = parse(context, float, declaration.cssFloat);
    this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
    this.fontSize = parse(context, fontSize, declaration.fontSize);
    this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
    this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
    this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
    this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
    this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
    this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
    this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
    this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
    this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
    this.marginTop = parse(context, marginTop, declaration.marginTop);
    this.marginRight = parse(context, marginRight, declaration.marginRight);
    this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
    this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
    this.opacity = parse(context, opacity, declaration.opacity);
    var overflowTuple = parse(context, overflow, declaration.overflow);
    this.overflowX = overflowTuple[0];
    this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
    this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
    this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
    this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
    this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
    this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
    this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
    this.position = parse(context, position, declaration.position);
    this.textAlign = parse(context, textAlign, declaration.textAlign);
    this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
    this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
    this.textShadow = parse(context, textShadow, declaration.textShadow);
    this.textTransform = parse(context, textTransform, declaration.textTransform);
    this.transform = parse(context, transform$1, declaration.transform);
    this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
    this.visibility = parse(context, visibility, declaration.visibility);
    this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
    this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
    this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
    this.zIndex = parse(context, zIndex, declaration.zIndex);
  }
  CSSParsedDeclaration2.prototype.isVisible = function() {
    return this.display > 0 && this.opacity > 0 && this.visibility === 0;
  };
  CSSParsedDeclaration2.prototype.isTransparent = function() {
    return isTransparent(this.backgroundColor);
  };
  CSSParsedDeclaration2.prototype.isTransformed = function() {
    return this.transform !== null;
  };
  CSSParsedDeclaration2.prototype.isPositioned = function() {
    return this.position !== 0;
  };
  CSSParsedDeclaration2.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  };
  CSSParsedDeclaration2.prototype.isFloating = function() {
    return this.float !== 0;
  };
  CSSParsedDeclaration2.prototype.isInlineLevel = function() {
    return contains(this.display, 4) || contains(this.display, 33554432) || contains(this.display, 268435456) || contains(this.display, 536870912) || contains(this.display, 67108864) || contains(this.display, 134217728);
  };
  return CSSParsedDeclaration2;
}();
var CSSParsedPseudoDeclaration = function() {
  function CSSParsedPseudoDeclaration2(context, declaration) {
    this.content = parse(context, content, declaration.content);
    this.quotes = parse(context, quotes, declaration.quotes);
  }
  return CSSParsedPseudoDeclaration2;
}();
var CSSParsedCounterDeclaration = function() {
  function CSSParsedCounterDeclaration2(context, declaration) {
    this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
    this.counterReset = parse(context, counterReset, declaration.counterReset);
  }
  return CSSParsedCounterDeclaration2;
}();
var parse = function(context, descriptor, style) {
  var tokenizer = new Tokenizer();
  var value = style !== null && typeof style !== "undefined" ? style.toString() : descriptor.initialValue;
  tokenizer.write(value);
  var parser = new Parser(tokenizer.read());
  switch (descriptor.type) {
    case 2:
      var token = parser.parseComponentValue();
      return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
    case 0:
      return descriptor.parse(context, parser.parseComponentValue());
    case 1:
      return descriptor.parse(context, parser.parseComponentValues());
    case 4:
      return parser.parseComponentValue();
    case 3:
      switch (descriptor.format) {
        case "angle":
          return angle.parse(context, parser.parseComponentValue());
        case "color":
          return color$1.parse(context, parser.parseComponentValue());
        case "image":
          return image.parse(context, parser.parseComponentValue());
        case "length":
          var length_1 = parser.parseComponentValue();
          return isLength(length_1) ? length_1 : ZERO_LENGTH;
        case "length-percentage":
          var value_1 = parser.parseComponentValue();
          return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
        case "time":
          return time.parse(context, parser.parseComponentValue());
      }
      break;
  }
};
var elementDebuggerAttribute = "data-html2canvas-debug";
var getElementDebugType = function(element) {
  var attribute = element.getAttribute(elementDebuggerAttribute);
  switch (attribute) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
};
var isDebugging = function(element, type) {
  var elementType = getElementDebugType(element);
  return elementType === 1 || type === elementType;
};
var ElementContainer = function() {
  function ElementContainer2(context, element) {
    this.context = context;
    this.textNodes = [];
    this.elements = [];
    this.flags = 0;
    if (isDebugging(element, 3)) {
      debugger;
    }
    this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
    if (isHTMLElementNode(element)) {
      if (this.styles.animationDuration.some(function(duration2) {
        return duration2 > 0;
      })) {
        element.style.animationDuration = "0s";
      }
      if (this.styles.transform !== null) {
        element.style.transform = "none";
      }
    }
    this.bounds = parseBounds(this.context, element);
    if (isDebugging(element, 4)) {
      this.flags |= 16;
    }
  }
  return ElementContainer2;
}();
var base64 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=";
var chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
  lookup$1[chars$1.charCodeAt(i$1)] = i$1;
}
var decode = function(base642) {
  var bufferLength = base642.length * 0.75, len = base642.length, i2, p2 = 0, encoded1, encoded2, encoded3, encoded4;
  if (base642[base642.length - 1] === "=") {
    bufferLength--;
    if (base642[base642.length - 2] === "=") {
      bufferLength--;
    }
  }
  var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
  var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
  for (i2 = 0; i2 < len; i2 += 4) {
    encoded1 = lookup$1[base642.charCodeAt(i2)];
    encoded2 = lookup$1[base642.charCodeAt(i2 + 1)];
    encoded3 = lookup$1[base642.charCodeAt(i2 + 2)];
    encoded4 = lookup$1[base642.charCodeAt(i2 + 3)];
    bytes[p2++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p2++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p2++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return buffer;
};
var polyUint16Array = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i2 = 0; i2 < length; i2 += 2) {
    bytes.push(buffer[i2 + 1] << 8 | buffer[i2]);
  }
  return bytes;
};
var polyUint32Array = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i2 = 0; i2 < length; i2 += 4) {
    bytes.push(buffer[i2 + 3] << 24 | buffer[i2 + 2] << 16 | buffer[i2 + 1] << 8 | buffer[i2]);
  }
  return bytes;
};
var UTRIE2_SHIFT_2 = 5;
var UTRIE2_SHIFT_1 = 6 + 5;
var UTRIE2_INDEX_SHIFT = 2;
var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
var UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> UTRIE2_SHIFT_2;
var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
var UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> UTRIE2_SHIFT_2;
var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 2048 >> 6;
var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> UTRIE2_SHIFT_1;
var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
var slice16 = function(view, start, end) {
  if (view.slice) {
    return view.slice(start, end);
  }
  return new Uint16Array(Array.prototype.slice.call(view, start, end));
};
var slice32 = function(view, start, end) {
  if (view.slice) {
    return view.slice(start, end);
  }
  return new Uint32Array(Array.prototype.slice.call(view, start, end));
};
var createTrieFromBase64 = function(base642, _byteLength) {
  var buffer = decode(base642);
  var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
  var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
  var headerLength = 24;
  var index = slice16(view16, headerLength / 2, view32[4] / 2);
  var data2 = view32[5] === 2 ? slice16(view16, (headerLength + view32[4]) / 2) : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
  return new Trie(view32[0], view32[1], view32[2], view32[3], index, data2);
};
var Trie = function() {
  function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data2) {
    this.initialValue = initialValue;
    this.errorValue = errorValue;
    this.highStart = highStart;
    this.highValueIndex = highValueIndex;
    this.index = index;
    this.data = data2;
  }
  Trie2.prototype.get = function(codePoint) {
    var ix;
    if (codePoint >= 0) {
      if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
        ix = this.index[codePoint >> UTRIE2_SHIFT_2];
        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
        return this.data[ix];
      }
      if (codePoint <= 65535) {
        ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 55296 >> UTRIE2_SHIFT_2)];
        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
        return this.data[ix];
      }
      if (codePoint < this.highStart) {
        ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
        ix = this.index[ix];
        ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
        ix = this.index[ix];
        ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
        return this.data[ix];
      }
      if (codePoint <= 1114111) {
        return this.data[this.highValueIndex];
      }
    }
    return this.errorValue;
  };
  return Trie2;
}();
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var Prepend = 1;
var CR = 2;
var LF = 3;
var Control = 4;
var Extend = 5;
var SpacingMark = 7;
var L = 8;
var V = 9;
var T = 10;
var LV = 11;
var LVT = 12;
var ZWJ = 13;
var Extended_Pictographic = 14;
var RI = 15;
var toCodePoints = function(str) {
  var codePoints = [];
  var i2 = 0;
  var length = str.length;
  while (i2 < length) {
    var value = str.charCodeAt(i2++);
    if (value >= 55296 && value <= 56319 && i2 < length) {
      var extra = str.charCodeAt(i2++);
      if ((extra & 64512) === 56320) {
        codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        codePoints.push(value);
        i2--;
      }
    } else {
      codePoints.push(value);
    }
  }
  return codePoints;
};
var fromCodePoint = function() {
  var codePoints = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    codePoints[_i] = arguments[_i];
  }
  if (String.fromCodePoint) {
    return String.fromCodePoint.apply(String, codePoints);
  }
  var length = codePoints.length;
  if (!length) {
    return "";
  }
  var codeUnits = [];
  var index = -1;
  var result = "";
  while (++index < length) {
    var codePoint = codePoints[index];
    if (codePoint <= 65535) {
      codeUnits.push(codePoint);
    } else {
      codePoint -= 65536;
      codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
    }
    if (index + 1 === length || codeUnits.length > 16384) {
      result += String.fromCharCode.apply(String, codeUnits);
      codeUnits.length = 0;
    }
  }
  return result;
};
var UnicodeTrie = createTrieFromBase64(base64);
var BREAK_NOT_ALLOWED = "\xD7";
var BREAK_ALLOWED = "\xF7";
var codePointToClass = function(codePoint) {
  return UnicodeTrie.get(codePoint);
};
var _graphemeBreakAtIndex = function(_codePoints, classTypes, index) {
  var prevIndex = index - 2;
  var prev = classTypes[prevIndex];
  var current = classTypes[index - 1];
  var next = classTypes[index];
  if (current === CR && next === LF) {
    return BREAK_NOT_ALLOWED;
  }
  if (current === CR || current === LF || current === Control) {
    return BREAK_ALLOWED;
  }
  if (next === CR || next === LF || next === Control) {
    return BREAK_ALLOWED;
  }
  if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED;
  }
  if ((current === LV || current === V) && (next === V || next === T)) {
    return BREAK_NOT_ALLOWED;
  }
  if ((current === LVT || current === T) && next === T) {
    return BREAK_NOT_ALLOWED;
  }
  if (next === ZWJ || next === Extend) {
    return BREAK_NOT_ALLOWED;
  }
  if (next === SpacingMark) {
    return BREAK_NOT_ALLOWED;
  }
  if (current === Prepend) {
    return BREAK_NOT_ALLOWED;
  }
  if (current === ZWJ && next === Extended_Pictographic) {
    while (prev === Extend) {
      prev = classTypes[--prevIndex];
    }
    if (prev === Extended_Pictographic) {
      return BREAK_NOT_ALLOWED;
    }
  }
  if (current === RI && next === RI) {
    var countRI = 0;
    while (prev === RI) {
      countRI++;
      prev = classTypes[--prevIndex];
    }
    if (countRI % 2 === 0) {
      return BREAK_NOT_ALLOWED;
    }
  }
  return BREAK_ALLOWED;
};
var GraphemeBreaker = function(str) {
  var codePoints = toCodePoints(str);
  var length = codePoints.length;
  var index = 0;
  var lastEnd = 0;
  var classTypes = codePoints.map(codePointToClass);
  return {
    next: function() {
      if (index >= length) {
        return { done: true, value: null };
      }
      var graphemeBreak = BREAK_NOT_ALLOWED;
      while (index < length && (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) {
      }
      if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
        var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
        lastEnd = index;
        return { value, done: false };
      }
      return { done: true, value: null };
    }
  };
};
var splitGraphemes = function(str) {
  var breaker = GraphemeBreaker(str);
  var graphemes = [];
  var bk2;
  while (!(bk2 = breaker.next()).done) {
    if (bk2.value) {
      graphemes.push(bk2.value.slice());
    }
  }
  return graphemes;
};
var testRangeBounds = function(document2) {
  var TEST_HEIGHT = 123;
  if (document2.createRange) {
    var range = document2.createRange();
    if (range.getBoundingClientRect) {
      var testElement = document2.createElement("boundtest");
      testElement.style.height = TEST_HEIGHT + "px";
      testElement.style.display = "block";
      document2.body.appendChild(testElement);
      range.selectNode(testElement);
      var rangeBounds = range.getBoundingClientRect();
      var rangeHeight = Math.round(rangeBounds.height);
      document2.body.removeChild(testElement);
      if (rangeHeight === TEST_HEIGHT) {
        return true;
      }
    }
  }
  return false;
};
var testIOSLineBreak = function(document2) {
  var testElement = document2.createElement("boundtest");
  testElement.style.width = "50px";
  testElement.style.display = "block";
  testElement.style.fontSize = "12px";
  testElement.style.letterSpacing = "0px";
  testElement.style.wordSpacing = "0px";
  document2.body.appendChild(testElement);
  var range = document2.createRange();
  testElement.innerHTML = typeof "".repeat === "function" ? "&#128104;".repeat(10) : "";
  var node = testElement.firstChild;
  var textList = toCodePoints$1(node.data).map(function(i2) {
    return fromCodePoint$1(i2);
  });
  var offset = 0;
  var prev = {};
  var supports = textList.every(function(text, i2) {
    range.setStart(node, offset);
    range.setEnd(node, offset + text.length);
    var rect = range.getBoundingClientRect();
    offset += text.length;
    var boundAhead = rect.x > prev.x || rect.y > prev.y;
    prev = rect;
    if (i2 === 0) {
      return true;
    }
    return boundAhead;
  });
  document2.body.removeChild(testElement);
  return supports;
};
var testCORS = function() {
  return typeof new Image().crossOrigin !== "undefined";
};
var testResponseType = function() {
  return typeof new XMLHttpRequest().responseType === "string";
};
var testSVG = function(document2) {
  var img = new Image();
  var canvas = document2.createElement("canvas");
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return false;
  }
  img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    ctx.drawImage(img, 0, 0);
    canvas.toDataURL();
  } catch (e2) {
    return false;
  }
  return true;
};
var isGreenPixel = function(data2) {
  return data2[0] === 0 && data2[1] === 255 && data2[2] === 0 && data2[3] === 255;
};
var testForeignObject = function(document2) {
  var canvas = document2.createElement("canvas");
  var size = 100;
  canvas.width = size;
  canvas.height = size;
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return Promise.reject(false);
  }
  ctx.fillStyle = "rgb(0, 255, 0)";
  ctx.fillRect(0, 0, size, size);
  var img = new Image();
  var greenImageSrc = canvas.toDataURL();
  img.src = greenImageSrc;
  var svg = createForeignObjectSVG(size, size, 0, 0, img);
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, size, size);
  return loadSerializedSVG$1(svg).then(function(img2) {
    ctx.drawImage(img2, 0, 0);
    var data2 = ctx.getImageData(0, 0, size, size).data;
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, size, size);
    var node = document2.createElement("div");
    node.style.backgroundImage = "url(" + greenImageSrc + ")";
    node.style.height = size + "px";
    return isGreenPixel(data2) ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node)) : Promise.reject(false);
  }).then(function(img2) {
    ctx.drawImage(img2, 0, 0);
    return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
  }).catch(function() {
    return false;
  });
};
var createForeignObjectSVG = function(width, height, x2, y2, node) {
  var xmlns = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(xmlns, "svg");
  var foreignObject = document.createElementNS(xmlns, "foreignObject");
  svg.setAttributeNS(null, "width", width.toString());
  svg.setAttributeNS(null, "height", height.toString());
  foreignObject.setAttributeNS(null, "width", "100%");
  foreignObject.setAttributeNS(null, "height", "100%");
  foreignObject.setAttributeNS(null, "x", x2.toString());
  foreignObject.setAttributeNS(null, "y", y2.toString());
  foreignObject.setAttributeNS(null, "externalResourcesRequired", "true");
  svg.appendChild(foreignObject);
  foreignObject.appendChild(node);
  return svg;
};
var loadSerializedSVG$1 = function(svg) {
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      return resolve(img);
    };
    img.onerror = reject;
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
  });
};
var FEATURES = {
  get SUPPORT_RANGE_BOUNDS() {
    var value = testRangeBounds(document);
    Object.defineProperty(FEATURES, "SUPPORT_RANGE_BOUNDS", { value });
    return value;
  },
  get SUPPORT_WORD_BREAKING() {
    var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
    Object.defineProperty(FEATURES, "SUPPORT_WORD_BREAKING", { value });
    return value;
  },
  get SUPPORT_SVG_DRAWING() {
    var value = testSVG(document);
    Object.defineProperty(FEATURES, "SUPPORT_SVG_DRAWING", { value });
    return value;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var value = typeof Array.from === "function" && typeof window.fetch === "function" ? testForeignObject(document) : Promise.resolve(false);
    Object.defineProperty(FEATURES, "SUPPORT_FOREIGNOBJECT_DRAWING", { value });
    return value;
  },
  get SUPPORT_CORS_IMAGES() {
    var value = testCORS();
    Object.defineProperty(FEATURES, "SUPPORT_CORS_IMAGES", { value });
    return value;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var value = testResponseType();
    Object.defineProperty(FEATURES, "SUPPORT_RESPONSE_TYPE", { value });
    return value;
  },
  get SUPPORT_CORS_XHR() {
    var value = "withCredentials" in new XMLHttpRequest();
    Object.defineProperty(FEATURES, "SUPPORT_CORS_XHR", { value });
    return value;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var value = !!(typeof Intl !== "undefined" && Intl.Segmenter);
    Object.defineProperty(FEATURES, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value });
    return value;
  }
};
var TextBounds = function() {
  function TextBounds2(text, bounds) {
    this.text = text;
    this.bounds = bounds;
  }
  return TextBounds2;
}();
var parseTextBounds = function(context, value, styles, node) {
  var textList = breakText(value, styles);
  var textBounds = [];
  var offset = 0;
  textList.forEach(function(text) {
    if (styles.textDecorationLine.length || text.trim().length > 0) {
      if (FEATURES.SUPPORT_RANGE_BOUNDS) {
        var clientRects = createRange(node, offset, text.length).getClientRects();
        if (clientRects.length > 1) {
          var subSegments = segmentGraphemes(text);
          var subOffset_1 = 0;
          subSegments.forEach(function(subSegment) {
            textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
            subOffset_1 += subSegment.length;
          });
        } else {
          textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
        }
      } else {
        var replacementNode = node.splitText(text.length);
        textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
        node = replacementNode;
      }
    } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
      node = node.splitText(text.length);
    }
    offset += text.length;
  });
  return textBounds;
};
var getWrapperBounds = function(context, node) {
  var ownerDocument = node.ownerDocument;
  if (ownerDocument) {
    var wrapper = ownerDocument.createElement("html2canvaswrapper");
    wrapper.appendChild(node.cloneNode(true));
    var parentNode = node.parentNode;
    if (parentNode) {
      parentNode.replaceChild(wrapper, node);
      var bounds = parseBounds(context, wrapper);
      if (wrapper.firstChild) {
        parentNode.replaceChild(wrapper.firstChild, wrapper);
      }
      return bounds;
    }
  }
  return Bounds.EMPTY;
};
var createRange = function(node, offset, length) {
  var ownerDocument = node.ownerDocument;
  if (!ownerDocument) {
    throw new Error("Node has no owner document");
  }
  var range = ownerDocument.createRange();
  range.setStart(node, offset);
  range.setEnd(node, offset + length);
  return range;
};
var segmentGraphemes = function(value) {
  if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(segmenter.segment(value)).map(function(segment) {
      return segment.segment;
    });
  }
  return splitGraphemes(value);
};
var segmentWords = function(value, styles) {
  if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var segmenter = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(segmenter.segment(value)).map(function(segment) {
      return segment.segment;
    });
  }
  return breakWords(value, styles);
};
var breakText = function(value, styles) {
  return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
};
var wordSeparators = [32, 160, 4961, 65792, 65793, 4153, 4241];
var breakWords = function(str, styles) {
  var breaker = LineBreaker(str, {
    lineBreak: styles.lineBreak,
    wordBreak: styles.overflowWrap === "break-word" ? "break-word" : styles.wordBreak
  });
  var words = [];
  var bk2;
  var _loop_1 = function() {
    if (bk2.value) {
      var value = bk2.value.slice();
      var codePoints = toCodePoints$1(value);
      var word_1 = "";
      codePoints.forEach(function(codePoint) {
        if (wordSeparators.indexOf(codePoint) === -1) {
          word_1 += fromCodePoint$1(codePoint);
        } else {
          if (word_1.length) {
            words.push(word_1);
          }
          words.push(fromCodePoint$1(codePoint));
          word_1 = "";
        }
      });
      if (word_1.length) {
        words.push(word_1);
      }
    }
  };
  while (!(bk2 = breaker.next()).done) {
    _loop_1();
  }
  return words;
};
var TextContainer = function() {
  function TextContainer2(context, node, styles) {
    this.text = transform(node.data, styles.textTransform);
    this.textBounds = parseTextBounds(context, this.text, styles, node);
  }
  return TextContainer2;
}();
var transform = function(text, transform2) {
  switch (transform2) {
    case 1:
      return text.toLowerCase();
    case 3:
      return text.replace(CAPITALIZE, capitalize);
    case 2:
      return text.toUpperCase();
    default:
      return text;
  }
};
var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
var capitalize = function(m2, p1, p2) {
  if (m2.length > 0) {
    return p1 + p2.toUpperCase();
  }
  return m2;
};
var ImageElementContainer = function(_super) {
  __extends(ImageElementContainer2, _super);
  function ImageElementContainer2(context, img) {
    var _this = _super.call(this, context, img) || this;
    _this.src = img.currentSrc || img.src;
    _this.intrinsicWidth = img.naturalWidth;
    _this.intrinsicHeight = img.naturalHeight;
    _this.context.cache.addImage(_this.src);
    return _this;
  }
  return ImageElementContainer2;
}(ElementContainer);
var CanvasElementContainer = function(_super) {
  __extends(CanvasElementContainer2, _super);
  function CanvasElementContainer2(context, canvas) {
    var _this = _super.call(this, context, canvas) || this;
    _this.canvas = canvas;
    _this.intrinsicWidth = canvas.width;
    _this.intrinsicHeight = canvas.height;
    return _this;
  }
  return CanvasElementContainer2;
}(ElementContainer);
var SVGElementContainer = function(_super) {
  __extends(SVGElementContainer2, _super);
  function SVGElementContainer2(context, img) {
    var _this = _super.call(this, context, img) || this;
    var s2 = new XMLSerializer();
    var bounds = parseBounds(context, img);
    img.setAttribute("width", bounds.width + "px");
    img.setAttribute("height", bounds.height + "px");
    _this.svg = "data:image/svg+xml," + encodeURIComponent(s2.serializeToString(img));
    _this.intrinsicWidth = img.width.baseVal.value;
    _this.intrinsicHeight = img.height.baseVal.value;
    _this.context.cache.addImage(_this.svg);
    return _this;
  }
  return SVGElementContainer2;
}(ElementContainer);
var LIElementContainer = function(_super) {
  __extends(LIElementContainer2, _super);
  function LIElementContainer2(context, element) {
    var _this = _super.call(this, context, element) || this;
    _this.value = element.value;
    return _this;
  }
  return LIElementContainer2;
}(ElementContainer);
var OLElementContainer = function(_super) {
  __extends(OLElementContainer2, _super);
  function OLElementContainer2(context, element) {
    var _this = _super.call(this, context, element) || this;
    _this.start = element.start;
    _this.reversed = typeof element.reversed === "boolean" && element.reversed === true;
    return _this;
  }
  return OLElementContainer2;
}(ElementContainer);
var CHECKBOX_BORDER_RADIUS = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
];
var RADIO_BORDER_RADIUS = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
];
var reformatInputBounds = function(bounds) {
  if (bounds.width > bounds.height) {
    return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
  } else if (bounds.width < bounds.height) {
    return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
  }
  return bounds;
};
var getInputValue = function(node) {
  var value = node.type === PASSWORD ? new Array(node.value.length + 1).join("\u2022") : node.value;
  return value.length === 0 ? node.placeholder || "" : value;
};
var CHECKBOX = "checkbox";
var RADIO = "radio";
var PASSWORD = "password";
var INPUT_COLOR = 707406591;
var InputElementContainer = function(_super) {
  __extends(InputElementContainer2, _super);
  function InputElementContainer2(context, input) {
    var _this = _super.call(this, context, input) || this;
    _this.type = input.type.toLowerCase();
    _this.checked = input.checked;
    _this.value = getInputValue(input);
    if (_this.type === CHECKBOX || _this.type === RADIO) {
      _this.styles.backgroundColor = 3739148031;
      _this.styles.borderTopColor = _this.styles.borderRightColor = _this.styles.borderBottomColor = _this.styles.borderLeftColor = 2779096575;
      _this.styles.borderTopWidth = _this.styles.borderRightWidth = _this.styles.borderBottomWidth = _this.styles.borderLeftWidth = 1;
      _this.styles.borderTopStyle = _this.styles.borderRightStyle = _this.styles.borderBottomStyle = _this.styles.borderLeftStyle = 1;
      _this.styles.backgroundClip = [0];
      _this.styles.backgroundOrigin = [0];
      _this.bounds = reformatInputBounds(_this.bounds);
    }
    switch (_this.type) {
      case CHECKBOX:
        _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
        break;
      case RADIO:
        _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
        break;
    }
    return _this;
  }
  return InputElementContainer2;
}(ElementContainer);
var SelectElementContainer = function(_super) {
  __extends(SelectElementContainer2, _super);
  function SelectElementContainer2(context, element) {
    var _this = _super.call(this, context, element) || this;
    var option = element.options[element.selectedIndex || 0];
    _this.value = option ? option.text || "" : "";
    return _this;
  }
  return SelectElementContainer2;
}(ElementContainer);
var TextareaElementContainer = function(_super) {
  __extends(TextareaElementContainer2, _super);
  function TextareaElementContainer2(context, element) {
    var _this = _super.call(this, context, element) || this;
    _this.value = element.value;
    return _this;
  }
  return TextareaElementContainer2;
}(ElementContainer);
var IFrameElementContainer = function(_super) {
  __extends(IFrameElementContainer2, _super);
  function IFrameElementContainer2(context, iframe) {
    var _this = _super.call(this, context, iframe) || this;
    _this.src = iframe.src;
    _this.width = parseInt(iframe.width, 10) || 0;
    _this.height = parseInt(iframe.height, 10) || 0;
    _this.backgroundColor = _this.styles.backgroundColor;
    try {
      if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement) {
        _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
        var documentBackgroundColor = iframe.contentWindow.document.documentElement ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT;
        var bodyBackgroundColor = iframe.contentWindow.document.body ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT;
        _this.backgroundColor = isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? _this.styles.backgroundColor : bodyBackgroundColor : documentBackgroundColor;
      }
    } catch (e2) {
    }
    return _this;
  }
  return IFrameElementContainer2;
}(ElementContainer);
var LIST_OWNERS = ["OL", "UL", "MENU"];
var parseNodeTree = function(context, node, parent, root) {
  for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
    nextNode = childNode.nextSibling;
    if (isTextNode(childNode) && childNode.data.trim().length > 0) {
      parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
    } else if (isElementNode(childNode)) {
      if (isSlotElement(childNode) && childNode.assignedNodes) {
        childNode.assignedNodes().forEach(function(childNode2) {
          return parseNodeTree(context, childNode2, parent, root);
        });
      } else {
        var container = createContainer(context, childNode);
        if (container.styles.isVisible()) {
          if (createsRealStackingContext(childNode, container, root)) {
            container.flags |= 4;
          } else if (createsStackingContext(container.styles)) {
            container.flags |= 2;
          }
          if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
            container.flags |= 8;
          }
          parent.elements.push(container);
          childNode.slot;
          if (childNode.shadowRoot) {
            parseNodeTree(context, childNode.shadowRoot, container, root);
          } else if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) {
            parseNodeTree(context, childNode, container, root);
          }
        }
      }
    }
  }
};
var createContainer = function(context, element) {
  if (isImageElement(element)) {
    return new ImageElementContainer(context, element);
  }
  if (isCanvasElement(element)) {
    return new CanvasElementContainer(context, element);
  }
  if (isSVGElement(element)) {
    return new SVGElementContainer(context, element);
  }
  if (isLIElement(element)) {
    return new LIElementContainer(context, element);
  }
  if (isOLElement(element)) {
    return new OLElementContainer(context, element);
  }
  if (isInputElement(element)) {
    return new InputElementContainer(context, element);
  }
  if (isSelectElement(element)) {
    return new SelectElementContainer(context, element);
  }
  if (isTextareaElement(element)) {
    return new TextareaElementContainer(context, element);
  }
  if (isIFrameElement(element)) {
    return new IFrameElementContainer(context, element);
  }
  return new ElementContainer(context, element);
};
var parseTree = function(context, element) {
  var container = createContainer(context, element);
  container.flags |= 4;
  parseNodeTree(context, element, container, container);
  return container;
};
var createsRealStackingContext = function(node, container, root) {
  return container.styles.isPositionedWithZIndex() || container.styles.opacity < 1 || container.styles.isTransformed() || isBodyElement(node) && root.styles.isTransparent();
};
var createsStackingContext = function(styles) {
  return styles.isPositioned() || styles.isFloating();
};
var isTextNode = function(node) {
  return node.nodeType === Node.TEXT_NODE;
};
var isElementNode = function(node) {
  return node.nodeType === Node.ELEMENT_NODE;
};
var isHTMLElementNode = function(node) {
  return isElementNode(node) && typeof node.style !== "undefined" && !isSVGElementNode(node);
};
var isSVGElementNode = function(element) {
  return typeof element.className === "object";
};
var isLIElement = function(node) {
  return node.tagName === "LI";
};
var isOLElement = function(node) {
  return node.tagName === "OL";
};
var isInputElement = function(node) {
  return node.tagName === "INPUT";
};
var isHTMLElement = function(node) {
  return node.tagName === "HTML";
};
var isSVGElement = function(node) {
  return node.tagName === "svg";
};
var isBodyElement = function(node) {
  return node.tagName === "BODY";
};
var isCanvasElement = function(node) {
  return node.tagName === "CANVAS";
};
var isVideoElement = function(node) {
  return node.tagName === "VIDEO";
};
var isImageElement = function(node) {
  return node.tagName === "IMG";
};
var isIFrameElement = function(node) {
  return node.tagName === "IFRAME";
};
var isStyleElement = function(node) {
  return node.tagName === "STYLE";
};
var isScriptElement = function(node) {
  return node.tagName === "SCRIPT";
};
var isTextareaElement = function(node) {
  return node.tagName === "TEXTAREA";
};
var isSelectElement = function(node) {
  return node.tagName === "SELECT";
};
var isSlotElement = function(node) {
  return node.tagName === "SLOT";
};
var isCustomElement = function(node) {
  return node.tagName.indexOf("-") > 0;
};
var CounterState = function() {
  function CounterState2() {
    this.counters = {};
  }
  CounterState2.prototype.getCounterValue = function(name) {
    var counter = this.counters[name];
    if (counter && counter.length) {
      return counter[counter.length - 1];
    }
    return 1;
  };
  CounterState2.prototype.getCounterValues = function(name) {
    var counter = this.counters[name];
    return counter ? counter : [];
  };
  CounterState2.prototype.pop = function(counters) {
    var _this = this;
    counters.forEach(function(counter) {
      return _this.counters[counter].pop();
    });
  };
  CounterState2.prototype.parse = function(style) {
    var _this = this;
    var counterIncrement2 = style.counterIncrement;
    var counterReset2 = style.counterReset;
    var canReset = true;
    if (counterIncrement2 !== null) {
      counterIncrement2.forEach(function(entry) {
        var counter = _this.counters[entry.counter];
        if (counter && entry.increment !== 0) {
          canReset = false;
          if (!counter.length) {
            counter.push(1);
          }
          counter[Math.max(0, counter.length - 1)] += entry.increment;
        }
      });
    }
    var counterNames = [];
    if (canReset) {
      counterReset2.forEach(function(entry) {
        var counter = _this.counters[entry.counter];
        counterNames.push(entry.counter);
        if (!counter) {
          counter = _this.counters[entry.counter] = [];
        }
        counter.push(entry.reset);
      });
    }
    return counterNames;
  };
  return CounterState2;
}();
var ROMAN_UPPER = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
};
var ARMENIAN = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "\u0554",
    "\u0553",
    "\u0552",
    "\u0551",
    "\u0550",
    "\u054F",
    "\u054E",
    "\u054D",
    "\u054C",
    "\u054B",
    "\u054A",
    "\u0549",
    "\u0548",
    "\u0547",
    "\u0546",
    "\u0545",
    "\u0544",
    "\u0543",
    "\u0542",
    "\u0541",
    "\u0540",
    "\u053F",
    "\u053E",
    "\u053D",
    "\u053C",
    "\u053B",
    "\u053A",
    "\u0539",
    "\u0538",
    "\u0537",
    "\u0536",
    "\u0535",
    "\u0534",
    "\u0533",
    "\u0532",
    "\u0531"
  ]
};
var HEBREW = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "\u05D9\u05F3",
    "\u05D8\u05F3",
    "\u05D7\u05F3",
    "\u05D6\u05F3",
    "\u05D5\u05F3",
    "\u05D4\u05F3",
    "\u05D3\u05F3",
    "\u05D2\u05F3",
    "\u05D1\u05F3",
    "\u05D0\u05F3",
    "\u05EA",
    "\u05E9",
    "\u05E8",
    "\u05E7",
    "\u05E6",
    "\u05E4",
    "\u05E2",
    "\u05E1",
    "\u05E0",
    "\u05DE",
    "\u05DC",
    "\u05DB",
    "\u05D9\u05D8",
    "\u05D9\u05D7",
    "\u05D9\u05D6",
    "\u05D8\u05D6",
    "\u05D8\u05D5",
    "\u05D9",
    "\u05D8",
    "\u05D7",
    "\u05D6",
    "\u05D5",
    "\u05D4",
    "\u05D3",
    "\u05D2",
    "\u05D1",
    "\u05D0"
  ]
};
var GEORGIAN = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "\u10F5",
    "\u10F0",
    "\u10EF",
    "\u10F4",
    "\u10EE",
    "\u10ED",
    "\u10EC",
    "\u10EB",
    "\u10EA",
    "\u10E9",
    "\u10E8",
    "\u10E7",
    "\u10E6",
    "\u10E5",
    "\u10E4",
    "\u10F3",
    "\u10E2",
    "\u10E1",
    "\u10E0",
    "\u10DF",
    "\u10DE",
    "\u10DD",
    "\u10F2",
    "\u10DC",
    "\u10DB",
    "\u10DA",
    "\u10D9",
    "\u10D8",
    "\u10D7",
    "\u10F1",
    "\u10D6",
    "\u10D5",
    "\u10D4",
    "\u10D3",
    "\u10D2",
    "\u10D1",
    "\u10D0"
  ]
};
var createAdditiveCounter = function(value, min, max, symbols, fallback, suffix) {
  if (value < min || value > max) {
    return createCounterText(value, fallback, suffix.length > 0);
  }
  return symbols.integers.reduce(function(string, integer, index) {
    while (value >= integer) {
      value -= integer;
      string += symbols.values[index];
    }
    return string;
  }, "") + suffix;
};
var createCounterStyleWithSymbolResolver = function(value, codePointRangeLength, isNumeric, resolver) {
  var string = "";
  do {
    if (!isNumeric) {
      value--;
    }
    string = resolver(value) + string;
    value /= codePointRangeLength;
  } while (value * codePointRangeLength >= codePointRangeLength);
  return string;
};
var createCounterStyleFromRange = function(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
  var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
  return (value < 0 ? "-" : "") + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function(codePoint) {
    return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
  }) + suffix);
};
var createCounterStyleFromSymbols = function(value, symbols, suffix) {
  if (suffix === void 0) {
    suffix = ". ";
  }
  var codePointRangeLength = symbols.length;
  return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function(codePoint) {
    return symbols[Math.floor(codePoint % codePointRangeLength)];
  }) + suffix;
};
var CJK_ZEROS = 1 << 0;
var CJK_TEN_COEFFICIENTS = 1 << 1;
var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
var createCJKCounter = function(value, numbers, multipliers, negativeSign, suffix, flags) {
  if (value < -9999 || value > 9999) {
    return createCounterText(value, 4, suffix.length > 0);
  }
  var tmp = Math.abs(value);
  var string = suffix;
  if (tmp === 0) {
    return numbers[0] + string;
  }
  for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
    var coefficient = tmp % 10;
    if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== "") {
      string = numbers[coefficient] + string;
    } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS)) {
      string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : "") + string;
    } else if (coefficient === 1 && digit > 0) {
      string = multipliers[digit - 1] + string;
    }
    tmp = Math.floor(tmp / 10);
  }
  return (value < 0 ? negativeSign : "") + string;
};
var CHINESE_INFORMAL_MULTIPLIERS = "\u5341\u767E\u5343\u842C";
var CHINESE_FORMAL_MULTIPLIERS = "\u62FE\u4F70\u4EDF\u842C";
var JAPANESE_NEGATIVE = "\u30DE\u30A4\u30CA\u30B9";
var KOREAN_NEGATIVE = "\uB9C8\uC774\uB108\uC2A4";
var createCounterText = function(value, type, appendSuffix) {
  var defaultSuffix = appendSuffix ? ". " : "";
  var cjkSuffix = appendSuffix ? "\u3001" : "";
  var koreanSuffix = appendSuffix ? ", " : "";
  var spaceSuffix = appendSuffix ? " " : "";
  switch (type) {
    case 0:
      return "\u2022" + spaceSuffix;
    case 1:
      return "\u25E6" + spaceSuffix;
    case 2:
      return "\u25FE" + spaceSuffix;
    case 5:
      var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
      return string.length < 4 ? "0" + string : string;
    case 4:
      return createCounterStyleFromSymbols(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", cjkSuffix);
    case 6:
      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix).toLowerCase();
    case 7:
      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix);
    case 8:
      return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
    case 9:
      return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
    case 10:
      return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
    case 11:
      return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
    case 12:
    case 49:
      return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix);
    case 35:
      return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix).toLowerCase();
    case 13:
      return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
    case 14:
    case 30:
      return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
    case 15:
      return createCounterStyleFromSymbols(value, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", cjkSuffix);
    case 16:
      return createCounterStyleFromSymbols(value, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", cjkSuffix);
    case 17:
    case 48:
      return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 47:
      return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8CA0", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 42:
      return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 41:
      return createCJKCounter(value, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8D1F", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 26:
      return createCJKCounter(value, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, 0);
    case 25:
      return createCJKCounter(value, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 31:
      return createCJKCounter(value, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 33:
      return createCJKCounter(value, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", KOREAN_NEGATIVE, koreanSuffix, 0);
    case 32:
      return createCJKCounter(value, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 18:
      return createCounterStyleFromRange(value, 2406, 2415, true, defaultSuffix);
    case 20:
      return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3, defaultSuffix);
    case 21:
      return createCounterStyleFromRange(value, 2790, 2799, true, defaultSuffix);
    case 22:
      return createCounterStyleFromRange(value, 2662, 2671, true, defaultSuffix);
    case 22:
      return createAdditiveCounter(value, 1, 10999, HEBREW, 3, defaultSuffix);
    case 23:
      return createCounterStyleFromSymbols(value, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
    case 24:
      return createCounterStyleFromSymbols(value, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
    case 27:
      return createCounterStyleFromRange(value, 3302, 3311, true, defaultSuffix);
    case 28:
      return createCounterStyleFromSymbols(value, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", cjkSuffix);
    case 29:
      return createCounterStyleFromSymbols(value, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", cjkSuffix);
    case 34:
      return createCounterStyleFromRange(value, 3792, 3801, true, defaultSuffix);
    case 37:
      return createCounterStyleFromRange(value, 6160, 6169, true, defaultSuffix);
    case 38:
      return createCounterStyleFromRange(value, 4160, 4169, true, defaultSuffix);
    case 39:
      return createCounterStyleFromRange(value, 2918, 2927, true, defaultSuffix);
    case 40:
      return createCounterStyleFromRange(value, 1776, 1785, true, defaultSuffix);
    case 43:
      return createCounterStyleFromRange(value, 3046, 3055, true, defaultSuffix);
    case 44:
      return createCounterStyleFromRange(value, 3174, 3183, true, defaultSuffix);
    case 45:
      return createCounterStyleFromRange(value, 3664, 3673, true, defaultSuffix);
    case 46:
      return createCounterStyleFromRange(value, 3872, 3881, true, defaultSuffix);
    case 3:
    default:
      return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
  }
};
var IGNORE_ATTRIBUTE = "data-html2canvas-ignore";
var DocumentCloner = function() {
  function DocumentCloner2(context, element, options) {
    this.context = context;
    this.options = options;
    this.scrolledElements = [];
    this.referenceElement = element;
    this.counters = new CounterState();
    this.quoteDepth = 0;
    if (!element.ownerDocument) {
      throw new Error("Cloned element does not have an owner document");
    }
    this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
  }
  DocumentCloner2.prototype.toIFrame = function(ownerDocument, windowSize) {
    var _this = this;
    var iframe = createIFrameContainer(ownerDocument, windowSize);
    if (!iframe.contentWindow) {
      return Promise.reject("Unable to find iframe window");
    }
    var scrollX = ownerDocument.defaultView.pageXOffset;
    var scrollY = ownerDocument.defaultView.pageYOffset;
    var cloneWindow = iframe.contentWindow;
    var documentClone = cloneWindow.document;
    var iframeLoad = iframeLoader(iframe).then(function() {
      return __awaiter(_this, void 0, void 0, function() {
        var onclone, referenceElement;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.scrolledElements.forEach(restoreNodeScroll);
              if (cloneWindow) {
                cloneWindow.scrollTo(windowSize.left, windowSize.top);
                if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                  this.context.logger.warn("Unable to restore scroll position for cloned document");
                  this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                }
              }
              onclone = this.options.onclone;
              referenceElement = this.clonedReferenceElement;
              if (typeof referenceElement === "undefined") {
                return [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
              }
              if (!(documentClone.fonts && documentClone.fonts.ready))
                return [3, 2];
              return [4, documentClone.fonts.ready];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              if (!/(AppleWebKit)/g.test(navigator.userAgent))
                return [3, 4];
              return [4, imagesReady(documentClone)];
            case 3:
              _a.sent();
              _a.label = 4;
            case 4:
              if (typeof onclone === "function") {
                return [2, Promise.resolve().then(function() {
                  return onclone(documentClone, referenceElement);
                }).then(function() {
                  return iframe;
                })];
              }
              return [2, iframe];
          }
        });
      });
    });
    documentClone.open();
    documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
    restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
    documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
    documentClone.close();
    return iframeLoad;
  };
  DocumentCloner2.prototype.createElementClone = function(node) {
    if (isDebugging(node, 2)) {
      debugger;
    }
    if (isCanvasElement(node)) {
      return this.createCanvasClone(node);
    }
    if (isVideoElement(node)) {
      return this.createVideoClone(node);
    }
    if (isStyleElement(node)) {
      return this.createStyleClone(node);
    }
    var clone = node.cloneNode(false);
    if (isImageElement(clone)) {
      if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
        clone.src = node.currentSrc;
        clone.srcset = "";
      }
      if (clone.loading === "lazy") {
        clone.loading = "eager";
      }
    }
    if (isCustomElement(clone)) {
      return this.createCustomElementClone(clone);
    }
    return clone;
  };
  DocumentCloner2.prototype.createCustomElementClone = function(node) {
    var clone = document.createElement("html2canvascustomelement");
    copyCSSStyles(node.style, clone);
    return clone;
  };
  DocumentCloner2.prototype.createStyleClone = function(node) {
    try {
      var sheet = node.sheet;
      if (sheet && sheet.cssRules) {
        var css = [].slice.call(sheet.cssRules, 0).reduce(function(css2, rule) {
          if (rule && typeof rule.cssText === "string") {
            return css2 + rule.cssText;
          }
          return css2;
        }, "");
        var style = node.cloneNode(false);
        style.textContent = css;
        return style;
      }
    } catch (e2) {
      this.context.logger.error("Unable to access cssRules property", e2);
      if (e2.name !== "SecurityError") {
        throw e2;
      }
    }
    return node.cloneNode(false);
  };
  DocumentCloner2.prototype.createCanvasClone = function(canvas) {
    var _a;
    if (this.options.inlineImages && canvas.ownerDocument) {
      var img = canvas.ownerDocument.createElement("img");
      try {
        img.src = canvas.toDataURL();
        return img;
      } catch (e2) {
        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
      }
    }
    var clonedCanvas = canvas.cloneNode(false);
    try {
      clonedCanvas.width = canvas.width;
      clonedCanvas.height = canvas.height;
      var ctx = canvas.getContext("2d");
      var clonedCtx = clonedCanvas.getContext("2d");
      if (clonedCtx) {
        if (!this.options.allowTaint && ctx) {
          clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
        } else {
          var gl2 = (_a = canvas.getContext("webgl2")) !== null && _a !== void 0 ? _a : canvas.getContext("webgl");
          if (gl2) {
            var attribs = gl2.getContextAttributes();
            if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
              this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", canvas);
            }
          }
          clonedCtx.drawImage(canvas, 0, 0);
        }
      }
      return clonedCanvas;
    } catch (e2) {
      this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
    }
    return clonedCanvas;
  };
  DocumentCloner2.prototype.createVideoClone = function(video) {
    var canvas = video.ownerDocument.createElement("canvas");
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;
    var ctx = canvas.getContext("2d");
    try {
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        if (!this.options.allowTaint) {
          ctx.getImageData(0, 0, canvas.width, canvas.height);
        }
      }
      return canvas;
    } catch (e2) {
      this.context.logger.info("Unable to clone video as it is tainted", video);
    }
    var blankCanvas = video.ownerDocument.createElement("canvas");
    blankCanvas.width = video.offsetWidth;
    blankCanvas.height = video.offsetHeight;
    return blankCanvas;
  };
  DocumentCloner2.prototype.appendChildNode = function(clone, child, copyStyles) {
    if (!isElementNode(child) || !isScriptElement(child) && !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== "function" || !this.options.ignoreElements(child))) {
      if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
        clone.appendChild(this.cloneNode(child, copyStyles));
      }
    }
  };
  DocumentCloner2.prototype.cloneChildNodes = function(node, clone, copyStyles) {
    var _this = this;
    for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
      if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === "function") {
        var assignedNodes = child.assignedNodes();
        if (assignedNodes.length) {
          assignedNodes.forEach(function(assignedNode) {
            return _this.appendChildNode(clone, assignedNode, copyStyles);
          });
        }
      } else {
        this.appendChildNode(clone, child, copyStyles);
      }
    }
  };
  DocumentCloner2.prototype.cloneNode = function(node, copyStyles) {
    if (isTextNode(node)) {
      return document.createTextNode(node.data);
    }
    if (!node.ownerDocument) {
      return node.cloneNode(false);
    }
    var window2 = node.ownerDocument.defaultView;
    if (window2 && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
      var clone = this.createElementClone(node);
      clone.style.transitionProperty = "none";
      var style = window2.getComputedStyle(node);
      var styleBefore = window2.getComputedStyle(node, ":before");
      var styleAfter = window2.getComputedStyle(node, ":after");
      if (this.referenceElement === node && isHTMLElementNode(clone)) {
        this.clonedReferenceElement = clone;
      }
      if (isBodyElement(clone)) {
        createPseudoHideStyles(clone);
      }
      var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
      var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
      if (isCustomElement(node)) {
        copyStyles = true;
      }
      if (!isVideoElement(node)) {
        this.cloneChildNodes(node, clone, copyStyles);
      }
      if (before) {
        clone.insertBefore(before, clone.firstChild);
      }
      var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
      if (after) {
        clone.appendChild(after);
      }
      this.counters.pop(counters);
      if (style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node) || copyStyles) {
        copyCSSStyles(style, clone);
      }
      if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
        this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
      }
      if ((isTextareaElement(node) || isSelectElement(node)) && (isTextareaElement(clone) || isSelectElement(clone))) {
        clone.value = node.value;
      }
      return clone;
    }
    return node.cloneNode(false);
  };
  DocumentCloner2.prototype.resolvePseudoContent = function(node, clone, style, pseudoElt) {
    var _this = this;
    if (!style) {
      return;
    }
    var value = style.content;
    var document2 = clone.ownerDocument;
    if (!document2 || !value || value === "none" || value === "-moz-alt-content" || style.display === "none") {
      return;
    }
    this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
    var declaration = new CSSParsedPseudoDeclaration(this.context, style);
    var anonymousReplacedElement = document2.createElement("html2canvaspseudoelement");
    copyCSSStyles(style, anonymousReplacedElement);
    declaration.content.forEach(function(token) {
      if (token.type === 0) {
        anonymousReplacedElement.appendChild(document2.createTextNode(token.value));
      } else if (token.type === 22) {
        var img = document2.createElement("img");
        img.src = token.value;
        img.style.opacity = "1";
        anonymousReplacedElement.appendChild(img);
      } else if (token.type === 18) {
        if (token.name === "attr") {
          var attr = token.values.filter(isIdentToken);
          if (attr.length) {
            anonymousReplacedElement.appendChild(document2.createTextNode(node.getAttribute(attr[0].value) || ""));
          }
        } else if (token.name === "counter") {
          var _a = token.values.filter(nonFunctionArgSeparator), counter = _a[0], counterStyle = _a[1];
          if (counter && isIdentToken(counter)) {
            var counterState = _this.counters.getCounterValue(counter.value);
            var counterType = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
            anonymousReplacedElement.appendChild(document2.createTextNode(createCounterText(counterState, counterType, false)));
          }
        } else if (token.name === "counters") {
          var _b = token.values.filter(nonFunctionArgSeparator), counter = _b[0], delim = _b[1], counterStyle = _b[2];
          if (counter && isIdentToken(counter)) {
            var counterStates = _this.counters.getCounterValues(counter.value);
            var counterType_1 = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3;
            var separator = delim && delim.type === 0 ? delim.value : "";
            var text = counterStates.map(function(value2) {
              return createCounterText(value2, counterType_1, false);
            }).join(separator);
            anonymousReplacedElement.appendChild(document2.createTextNode(text));
          }
        } else
          ;
      } else if (token.type === 20) {
        switch (token.value) {
          case "open-quote":
            anonymousReplacedElement.appendChild(document2.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
            break;
          case "close-quote":
            anonymousReplacedElement.appendChild(document2.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
            break;
          default:
            anonymousReplacedElement.appendChild(document2.createTextNode(token.value));
        }
      }
    });
    anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    var newClassName = pseudoElt === PseudoElementType.BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    if (isSVGElementNode(clone)) {
      clone.className.baseValue += newClassName;
    } else {
      clone.className += newClassName;
    }
    return anonymousReplacedElement;
  };
  DocumentCloner2.destroy = function(container) {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
      return true;
    }
    return false;
  };
  return DocumentCloner2;
}();
var PseudoElementType;
(function(PseudoElementType2) {
  PseudoElementType2[PseudoElementType2["BEFORE"] = 0] = "BEFORE";
  PseudoElementType2[PseudoElementType2["AFTER"] = 1] = "AFTER";
})(PseudoElementType || (PseudoElementType = {}));
var createIFrameContainer = function(ownerDocument, bounds) {
  var cloneIframeContainer = ownerDocument.createElement("iframe");
  cloneIframeContainer.className = "html2canvas-container";
  cloneIframeContainer.style.visibility = "hidden";
  cloneIframeContainer.style.position = "fixed";
  cloneIframeContainer.style.left = "-10000px";
  cloneIframeContainer.style.top = "0px";
  cloneIframeContainer.style.border = "0";
  cloneIframeContainer.width = bounds.width.toString();
  cloneIframeContainer.height = bounds.height.toString();
  cloneIframeContainer.scrolling = "no";
  cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, "true");
  ownerDocument.body.appendChild(cloneIframeContainer);
  return cloneIframeContainer;
};
var imageReady = function(img) {
  return new Promise(function(resolve) {
    if (img.complete) {
      resolve();
      return;
    }
    if (!img.src) {
      resolve();
      return;
    }
    img.onload = resolve;
    img.onerror = resolve;
  });
};
var imagesReady = function(document2) {
  return Promise.all([].slice.call(document2.images, 0).map(imageReady));
};
var iframeLoader = function(iframe) {
  return new Promise(function(resolve, reject) {
    var cloneWindow = iframe.contentWindow;
    if (!cloneWindow) {
      return reject("No window assigned for iframe");
    }
    var documentClone = cloneWindow.document;
    cloneWindow.onload = iframe.onload = function() {
      cloneWindow.onload = iframe.onload = null;
      var interval = setInterval(function() {
        if (documentClone.body.childNodes.length > 0 && documentClone.readyState === "complete") {
          clearInterval(interval);
          resolve(iframe);
        }
      }, 50);
    };
  });
};
var ignoredStyleProperties = [
  "all",
  "d",
  "content"
];
var copyCSSStyles = function(style, target) {
  for (var i2 = style.length - 1; i2 >= 0; i2--) {
    var property = style.item(i2);
    if (ignoredStyleProperties.indexOf(property) === -1) {
      target.style.setProperty(property, style.getPropertyValue(property));
    }
  }
  return target;
};
var serializeDoctype = function(doctype) {
  var str = "";
  if (doctype) {
    str += "<!DOCTYPE ";
    if (doctype.name) {
      str += doctype.name;
    }
    if (doctype.internalSubset) {
      str += doctype.internalSubset;
    }
    if (doctype.publicId) {
      str += '"' + doctype.publicId + '"';
    }
    if (doctype.systemId) {
      str += '"' + doctype.systemId + '"';
    }
    str += ">";
  }
  return str;
};
var restoreOwnerScroll = function(ownerDocument, x2, y2) {
  if (ownerDocument && ownerDocument.defaultView && (x2 !== ownerDocument.defaultView.pageXOffset || y2 !== ownerDocument.defaultView.pageYOffset)) {
    ownerDocument.defaultView.scrollTo(x2, y2);
  }
};
var restoreNodeScroll = function(_a) {
  var element = _a[0], x2 = _a[1], y2 = _a[2];
  element.scrollLeft = x2;
  element.scrollTop = y2;
};
var PSEUDO_BEFORE = ":before";
var PSEUDO_AFTER = ":after";
var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before";
var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after";
var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';
var createPseudoHideStyles = function(body) {
  createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
};
var createStyles = function(body, styles) {
  var document2 = body.ownerDocument;
  if (document2) {
    var style = document2.createElement("style");
    style.textContent = styles;
    body.appendChild(style);
  }
};
var CacheStorage = function() {
  function CacheStorage2() {
  }
  CacheStorage2.getOrigin = function(url) {
    var link = CacheStorage2._link;
    if (!link) {
      return "about:blank";
    }
    link.href = url;
    link.href = link.href;
    return link.protocol + link.hostname + link.port;
  };
  CacheStorage2.isSameOrigin = function(src) {
    return CacheStorage2.getOrigin(src) === CacheStorage2._origin;
  };
  CacheStorage2.setContext = function(window2) {
    CacheStorage2._link = window2.document.createElement("a");
    CacheStorage2._origin = CacheStorage2.getOrigin(window2.location.href);
  };
  CacheStorage2._origin = "about:blank";
  return CacheStorage2;
}();
var Cache = function() {
  function Cache2(context, _options) {
    this.context = context;
    this._options = _options;
    this._cache = {};
  }
  Cache2.prototype.addImage = function(src) {
    var result = Promise.resolve();
    if (this.has(src)) {
      return result;
    }
    if (isBlobImage(src) || isRenderable(src)) {
      (this._cache[src] = this.loadImage(src)).catch(function() {
      });
      return result;
    }
    return result;
  };
  Cache2.prototype.match = function(src) {
    return this._cache[src];
  };
  Cache2.prototype.loadImage = function(key) {
    return __awaiter(this, void 0, void 0, function() {
      var isSameOrigin, useCORS, useProxy, src;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            isSameOrigin = CacheStorage.isSameOrigin(key);
            useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
            useProxy = !isInlineImage(key) && !isSameOrigin && !isBlobImage(key) && typeof this._options.proxy === "string" && FEATURES.SUPPORT_CORS_XHR && !useCORS;
            if (!isSameOrigin && this._options.allowTaint === false && !isInlineImage(key) && !isBlobImage(key) && !useProxy && !useCORS) {
              return [2];
            }
            src = key;
            if (!useProxy)
              return [3, 2];
            return [4, this.proxy(src)];
          case 1:
            src = _a.sent();
            _a.label = 2;
          case 2:
            this.context.logger.debug("Added image " + key.substring(0, 256));
            return [4, new Promise(function(resolve, reject) {
              var img = new Image();
              img.onload = function() {
                return resolve(img);
              };
              img.onerror = reject;
              if (isInlineBase64Image(src) || useCORS) {
                img.crossOrigin = "anonymous";
              }
              img.src = src;
              if (img.complete === true) {
                setTimeout(function() {
                  return resolve(img);
                }, 500);
              }
              if (_this._options.imageTimeout > 0) {
                setTimeout(function() {
                  return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image");
                }, _this._options.imageTimeout);
              }
            })];
          case 3:
            return [2, _a.sent()];
        }
      });
    });
  };
  Cache2.prototype.has = function(key) {
    return typeof this._cache[key] !== "undefined";
  };
  Cache2.prototype.keys = function() {
    return Promise.resolve(Object.keys(this._cache));
  };
  Cache2.prototype.proxy = function(src) {
    var _this = this;
    var proxy = this._options.proxy;
    if (!proxy) {
      throw new Error("No proxy defined");
    }
    var key = src.substring(0, 256);
    return new Promise(function(resolve, reject) {
      var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? "blob" : "text";
      var xhr2 = new XMLHttpRequest();
      xhr2.onload = function() {
        if (xhr2.status === 200) {
          if (responseType === "text") {
            resolve(xhr2.response);
          } else {
            var reader_1 = new FileReader();
            reader_1.addEventListener("load", function() {
              return resolve(reader_1.result);
            }, false);
            reader_1.addEventListener("error", function(e2) {
              return reject(e2);
            }, false);
            reader_1.readAsDataURL(xhr2.response);
          }
        } else {
          reject("Failed to proxy resource " + key + " with status code " + xhr2.status);
        }
      };
      xhr2.onerror = reject;
      var queryString = proxy.indexOf("?") > -1 ? "&" : "?";
      xhr2.open("GET", "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
      if (responseType !== "text" && xhr2 instanceof XMLHttpRequest) {
        xhr2.responseType = responseType;
      }
      if (_this._options.imageTimeout) {
        var timeout_1 = _this._options.imageTimeout;
        xhr2.timeout = timeout_1;
        xhr2.ontimeout = function() {
          return reject("Timed out (" + timeout_1 + "ms) proxying " + key);
        };
      }
      xhr2.send();
    });
  };
  return Cache2;
}();
var INLINE_SVG = /^data:image\/svg\+xml/i;
var INLINE_BASE64 = /^data:image\/.*;base64,/i;
var INLINE_IMG = /^data:image\/.*/i;
var isRenderable = function(src) {
  return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
};
var isInlineImage = function(src) {
  return INLINE_IMG.test(src);
};
var isInlineBase64Image = function(src) {
  return INLINE_BASE64.test(src);
};
var isBlobImage = function(src) {
  return src.substr(0, 4) === "blob";
};
var isSVG = function(src) {
  return src.substr(-3).toLowerCase() === "svg" || INLINE_SVG.test(src);
};
var Vector = function() {
  function Vector2(x2, y2) {
    this.type = 0;
    this.x = x2;
    this.y = y2;
  }
  Vector2.prototype.add = function(deltaX, deltaY) {
    return new Vector2(this.x + deltaX, this.y + deltaY);
  };
  return Vector2;
}();
var lerp = function(a2, b2, t2) {
  return new Vector(a2.x + (b2.x - a2.x) * t2, a2.y + (b2.y - a2.y) * t2);
};
var BezierCurve = function() {
  function BezierCurve2(start, startControl, endControl, end) {
    this.type = 1;
    this.start = start;
    this.startControl = startControl;
    this.endControl = endControl;
    this.end = end;
  }
  BezierCurve2.prototype.subdivide = function(t2, firstHalf) {
    var ab = lerp(this.start, this.startControl, t2);
    var bc2 = lerp(this.startControl, this.endControl, t2);
    var cd2 = lerp(this.endControl, this.end, t2);
    var abbc = lerp(ab, bc2, t2);
    var bccd = lerp(bc2, cd2, t2);
    var dest = lerp(abbc, bccd, t2);
    return firstHalf ? new BezierCurve2(this.start, ab, abbc, dest) : new BezierCurve2(dest, bccd, cd2, this.end);
  };
  BezierCurve2.prototype.add = function(deltaX, deltaY) {
    return new BezierCurve2(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
  };
  BezierCurve2.prototype.reverse = function() {
    return new BezierCurve2(this.end, this.endControl, this.startControl, this.start);
  };
  return BezierCurve2;
}();
var isBezierCurve = function(path) {
  return path.type === 1;
};
var BoundCurves = function() {
  function BoundCurves2(element) {
    var styles = element.styles;
    var bounds = element.bounds;
    var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
    var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
    var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
    var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
    var factors = [];
    factors.push((tlh + trh) / bounds.width);
    factors.push((blh + brh) / bounds.width);
    factors.push((tlv + blv) / bounds.height);
    factors.push((trv + brv) / bounds.height);
    var maxFactor = Math.max.apply(Math, factors);
    if (maxFactor > 1) {
      tlh /= maxFactor;
      tlv /= maxFactor;
      trh /= maxFactor;
      trv /= maxFactor;
      brh /= maxFactor;
      brv /= maxFactor;
      blh /= maxFactor;
      blv /= maxFactor;
    }
    var topWidth = bounds.width - trh;
    var rightHeight = bounds.height - brv;
    var bottomWidth = bounds.width - brh;
    var leftHeight = bounds.height - blv;
    var borderTopWidth2 = styles.borderTopWidth;
    var borderRightWidth2 = styles.borderRightWidth;
    var borderBottomWidth2 = styles.borderBottomWidth;
    var borderLeftWidth2 = styles.borderLeftWidth;
    var paddingTop2 = getAbsoluteValue(styles.paddingTop, element.bounds.width);
    var paddingRight2 = getAbsoluteValue(styles.paddingRight, element.bounds.width);
    var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
    var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
    this.topLeftBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3, tlh - borderLeftWidth2 / 3, tlv - borderTopWidth2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3);
    this.topRightBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 3, trh - borderRightWidth2 / 3, trv - borderTopWidth2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + borderTopWidth2 / 3);
    this.bottomRightBorderDoubleOuterBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 3, brv - borderBottomWidth2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
    this.bottomLeftBorderDoubleOuterBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 / 3, blv - borderBottomWidth2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
    this.topLeftBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3, tlh - borderLeftWidth2 * 2 / 3, tlv - borderTopWidth2 * 2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
    this.topRightBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 * 2 / 3, trh - borderRightWidth2 * 2 / 3, trv - borderTopWidth2 * 2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
    this.bottomRightBorderDoubleInnerBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 * 2 / 3, brv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
    this.bottomLeftBorderDoubleInnerBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 * 2 / 3, blv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
    this.topLeftBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2, tlh - borderLeftWidth2 / 2, tlv - borderTopWidth2 / 2, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2);
    this.topRightBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 2, trh - borderRightWidth2 / 2, trv - borderTopWidth2 / 2, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + borderTopWidth2 / 2);
    this.bottomRightBorderStroke = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 2, brv - borderBottomWidth2 / 2, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
    this.bottomLeftBorderStroke = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + leftHeight, blh - borderLeftWidth2 / 2, blv - borderBottomWidth2 / 2, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
    this.topLeftBorderBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new Vector(bounds.left, bounds.top);
    this.topRightBorderBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top);
    this.bottomRightBorderBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
    this.bottomLeftBorderBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new Vector(bounds.left, bounds.top + bounds.height);
    this.topLeftPaddingBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2, Math.max(0, tlh - borderLeftWidth2), Math.max(0, tlv - borderTopWidth2), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2);
    this.topRightPaddingBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth2), bounds.top + borderTopWidth2, topWidth > bounds.width + borderRightWidth2 ? 0 : Math.max(0, trh - borderRightWidth2), Math.max(0, trv - borderTopWidth2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + borderTopWidth2);
    this.bottomRightPaddingBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth2), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth2), Math.max(0, brh - borderRightWidth2), Math.max(0, brv - borderBottomWidth2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + bounds.height - borderBottomWidth2);
    this.bottomLeftPaddingBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth2), Math.max(0, blh - borderLeftWidth2), Math.max(0, blv - borderBottomWidth2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + bounds.height - borderBottomWidth2);
    this.topLeftContentBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2, Math.max(0, tlh - (borderLeftWidth2 + paddingLeft2)), Math.max(0, tlv - (borderTopWidth2 + paddingTop2)), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2);
    this.topRightContentBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth2 + paddingLeft2), bounds.top + borderTopWidth2 + paddingTop2, topWidth > bounds.width + borderLeftWidth2 + paddingLeft2 ? 0 : trh - borderLeftWidth2 + paddingLeft2, trv - (borderTopWidth2 + paddingTop2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + borderTopWidth2 + paddingTop2);
    this.bottomRightContentBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth2 + paddingLeft2)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth2 + paddingTop2), Math.max(0, brh - (borderRightWidth2 + paddingRight2)), brv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
    this.bottomLeftContentBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth2 + paddingLeft2)), blv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
  }
  return BoundCurves2;
}();
var CORNER;
(function(CORNER2) {
  CORNER2[CORNER2["TOP_LEFT"] = 0] = "TOP_LEFT";
  CORNER2[CORNER2["TOP_RIGHT"] = 1] = "TOP_RIGHT";
  CORNER2[CORNER2["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
  CORNER2[CORNER2["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
})(CORNER || (CORNER = {}));
var getCurvePoints = function(x2, y2, r1, r2, position2) {
  var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
  var ox = r1 * kappa;
  var oy = r2 * kappa;
  var xm = x2 + r1;
  var ym = y2 + r2;
  switch (position2) {
    case CORNER.TOP_LEFT:
      return new BezierCurve(new Vector(x2, ym), new Vector(x2, ym - oy), new Vector(xm - ox, y2), new Vector(xm, y2));
    case CORNER.TOP_RIGHT:
      return new BezierCurve(new Vector(x2, y2), new Vector(x2 + ox, y2), new Vector(xm, ym - oy), new Vector(xm, ym));
    case CORNER.BOTTOM_RIGHT:
      return new BezierCurve(new Vector(xm, y2), new Vector(xm, y2 + oy), new Vector(x2 + ox, ym), new Vector(x2, ym));
    case CORNER.BOTTOM_LEFT:
    default:
      return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x2, y2 + oy), new Vector(x2, y2));
  }
};
var calculateBorderBoxPath = function(curves) {
  return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
};
var calculateContentBoxPath = function(curves) {
  return [
    curves.topLeftContentBox,
    curves.topRightContentBox,
    curves.bottomRightContentBox,
    curves.bottomLeftContentBox
  ];
};
var calculatePaddingBoxPath = function(curves) {
  return [
    curves.topLeftPaddingBox,
    curves.topRightPaddingBox,
    curves.bottomRightPaddingBox,
    curves.bottomLeftPaddingBox
  ];
};
var TransformEffect = function() {
  function TransformEffect2(offsetX, offsetY, matrix2) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.matrix = matrix2;
    this.type = 0;
    this.target = 2 | 4;
  }
  return TransformEffect2;
}();
var ClipEffect = function() {
  function ClipEffect2(path, target) {
    this.path = path;
    this.target = target;
    this.type = 1;
  }
  return ClipEffect2;
}();
var OpacityEffect = function() {
  function OpacityEffect2(opacity2) {
    this.opacity = opacity2;
    this.type = 2;
    this.target = 2 | 4;
  }
  return OpacityEffect2;
}();
var isTransformEffect = function(effect) {
  return effect.type === 0;
};
var isClipEffect = function(effect) {
  return effect.type === 1;
};
var isOpacityEffect = function(effect) {
  return effect.type === 2;
};
var equalPath = function(a2, b2) {
  if (a2.length === b2.length) {
    return a2.some(function(v2, i2) {
      return v2 === b2[i2];
    });
  }
  return false;
};
var transformPath = function(path, deltaX, deltaY, deltaW, deltaH) {
  return path.map(function(point, index) {
    switch (index) {
      case 0:
        return point.add(deltaX, deltaY);
      case 1:
        return point.add(deltaX + deltaW, deltaY);
      case 2:
        return point.add(deltaX + deltaW, deltaY + deltaH);
      case 3:
        return point.add(deltaX, deltaY + deltaH);
    }
    return point;
  });
};
var StackingContext = function() {
  function StackingContext2(container) {
    this.element = container;
    this.inlineLevel = [];
    this.nonInlineLevel = [];
    this.negativeZIndex = [];
    this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
    this.positiveZIndex = [];
    this.nonPositionedFloats = [];
    this.nonPositionedInlineLevel = [];
  }
  return StackingContext2;
}();
var ElementPaint = function() {
  function ElementPaint2(container, parent) {
    this.container = container;
    this.parent = parent;
    this.effects = [];
    this.curves = new BoundCurves(this.container);
    if (this.container.styles.opacity < 1) {
      this.effects.push(new OpacityEffect(this.container.styles.opacity));
    }
    if (this.container.styles.transform !== null) {
      var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
      var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
      var matrix2 = this.container.styles.transform;
      this.effects.push(new TransformEffect(offsetX, offsetY, matrix2));
    }
    if (this.container.styles.overflowX !== 0) {
      var borderBox = calculateBorderBoxPath(this.curves);
      var paddingBox2 = calculatePaddingBoxPath(this.curves);
      if (equalPath(borderBox, paddingBox2)) {
        this.effects.push(new ClipEffect(borderBox, 2 | 4));
      } else {
        this.effects.push(new ClipEffect(borderBox, 2));
        this.effects.push(new ClipEffect(paddingBox2, 4));
      }
    }
  }
  ElementPaint2.prototype.getEffects = function(target) {
    var inFlow = [2, 3].indexOf(this.container.styles.position) === -1;
    var parent = this.parent;
    var effects = this.effects.slice(0);
    while (parent) {
      var croplessEffects = parent.effects.filter(function(effect) {
        return !isClipEffect(effect);
      });
      if (inFlow || parent.container.styles.position !== 0 || !parent.parent) {
        effects.unshift.apply(effects, croplessEffects);
        inFlow = [2, 3].indexOf(parent.container.styles.position) === -1;
        if (parent.container.styles.overflowX !== 0) {
          var borderBox = calculateBorderBoxPath(parent.curves);
          var paddingBox2 = calculatePaddingBoxPath(parent.curves);
          if (!equalPath(borderBox, paddingBox2)) {
            effects.unshift(new ClipEffect(paddingBox2, 2 | 4));
          }
        }
      } else {
        effects.unshift.apply(effects, croplessEffects);
      }
      parent = parent.parent;
    }
    return effects.filter(function(effect) {
      return contains(effect.target, target);
    });
  };
  return ElementPaint2;
}();
var parseStackTree = function(parent, stackingContext, realStackingContext, listItems) {
  parent.container.elements.forEach(function(child) {
    var treatAsRealStackingContext = contains(child.flags, 4);
    var createsStackingContext2 = contains(child.flags, 2);
    var paintContainer = new ElementPaint(child, parent);
    if (contains(child.styles.display, 2048)) {
      listItems.push(paintContainer);
    }
    var listOwnerItems = contains(child.flags, 8) ? [] : listItems;
    if (treatAsRealStackingContext || createsStackingContext2) {
      var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
      var stack = new StackingContext(paintContainer);
      if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
        var order_1 = child.styles.zIndex.order;
        if (order_1 < 0) {
          var index_1 = 0;
          parentStack.negativeZIndex.some(function(current, i2) {
            if (order_1 > current.element.container.styles.zIndex.order) {
              index_1 = i2;
              return false;
            } else if (index_1 > 0) {
              return true;
            }
            return false;
          });
          parentStack.negativeZIndex.splice(index_1, 0, stack);
        } else if (order_1 > 0) {
          var index_2 = 0;
          parentStack.positiveZIndex.some(function(current, i2) {
            if (order_1 >= current.element.container.styles.zIndex.order) {
              index_2 = i2 + 1;
              return false;
            } else if (index_2 > 0) {
              return true;
            }
            return false;
          });
          parentStack.positiveZIndex.splice(index_2, 0, stack);
        } else {
          parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
        }
      } else {
        if (child.styles.isFloating()) {
          parentStack.nonPositionedFloats.push(stack);
        } else {
          parentStack.nonPositionedInlineLevel.push(stack);
        }
      }
      parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
    } else {
      if (child.styles.isInlineLevel()) {
        stackingContext.inlineLevel.push(paintContainer);
      } else {
        stackingContext.nonInlineLevel.push(paintContainer);
      }
      parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
    }
    if (contains(child.flags, 8)) {
      processListItems(child, listOwnerItems);
    }
  });
};
var processListItems = function(owner, elements) {
  var numbering = owner instanceof OLElementContainer ? owner.start : 1;
  var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
  for (var i2 = 0; i2 < elements.length; i2++) {
    var item = elements[i2];
    if (item.container instanceof LIElementContainer && typeof item.container.value === "number" && item.container.value !== 0) {
      numbering = item.container.value;
    }
    item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
    numbering += reversed ? -1 : 1;
  }
};
var parseStackingContexts = function(container) {
  var paintContainer = new ElementPaint(container, null);
  var root = new StackingContext(paintContainer);
  var listItems = [];
  parseStackTree(paintContainer, root, root, listItems);
  processListItems(paintContainer.container, listItems);
  return root;
};
var parsePathForBorder = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
    case 1:
      return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
    case 2:
      return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
    case 3:
    default:
      return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
  }
};
var parsePathForBorderDoubleOuter = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
    case 1:
      return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
    case 2:
      return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
  }
};
var parsePathForBorderDoubleInner = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
    case 1:
      return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
    case 2:
      return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
    case 3:
    default:
      return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
  }
};
var parsePathForBorderStroke = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
    case 1:
      return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
    case 2:
      return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
    case 3:
    default:
      return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
  }
};
var createStrokePathFromCurves = function(outer1, outer2) {
  var path = [];
  if (isBezierCurve(outer1)) {
    path.push(outer1.subdivide(0.5, false));
  } else {
    path.push(outer1);
  }
  if (isBezierCurve(outer2)) {
    path.push(outer2.subdivide(0.5, true));
  } else {
    path.push(outer2);
  }
  return path;
};
var createPathFromCurves = function(outer1, inner1, outer2, inner2) {
  var path = [];
  if (isBezierCurve(outer1)) {
    path.push(outer1.subdivide(0.5, false));
  } else {
    path.push(outer1);
  }
  if (isBezierCurve(outer2)) {
    path.push(outer2.subdivide(0.5, true));
  } else {
    path.push(outer2);
  }
  if (isBezierCurve(inner2)) {
    path.push(inner2.subdivide(0.5, true).reverse());
  } else {
    path.push(inner2);
  }
  if (isBezierCurve(inner1)) {
    path.push(inner1.subdivide(0.5, false).reverse());
  } else {
    path.push(inner1);
  }
  return path;
};
var paddingBox = function(element) {
  var bounds = element.bounds;
  var styles = element.styles;
  return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
};
var contentBox = function(element) {
  var styles = element.styles;
  var bounds = element.bounds;
  var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, bounds.width);
  var paddingRight2 = getAbsoluteValue(styles.paddingRight, bounds.width);
  var paddingTop2 = getAbsoluteValue(styles.paddingTop, bounds.width);
  var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, bounds.width);
  return bounds.add(paddingLeft2 + styles.borderLeftWidth, paddingTop2 + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft2 + paddingRight2), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop2 + paddingBottom2));
};
var calculateBackgroundPositioningArea = function(backgroundOrigin2, element) {
  if (backgroundOrigin2 === 0) {
    return element.bounds;
  }
  if (backgroundOrigin2 === 2) {
    return contentBox(element);
  }
  return paddingBox(element);
};
var calculateBackgroundPaintingArea = function(backgroundClip2, element) {
  if (backgroundClip2 === 0) {
    return element.bounds;
  }
  if (backgroundClip2 === 2) {
    return contentBox(element);
  }
  return paddingBox(element);
};
var calculateBackgroundRendering = function(container, index, intrinsicSize) {
  var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
  var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
  var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
  var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
  var position2 = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
  var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position2, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
  var offsetX = Math.round(backgroundPositioningArea.left + position2[0]);
  var offsetY = Math.round(backgroundPositioningArea.top + position2[1]);
  return [path, offsetX, offsetY, sizeWidth, sizeHeight];
};
var isAuto = function(token) {
  return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
};
var hasIntrinsicValue = function(value) {
  return typeof value === "number";
};
var calculateBackgroundSize = function(size, _a, bounds) {
  var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
  var first = size[0], second = size[1];
  if (!first) {
    return [0, 0];
  }
  if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
    return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
  }
  var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
  if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
    if (hasIntrinsicValue(intrinsicProportion)) {
      var targetRatio = bounds.width / bounds.height;
      return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [bounds.width, bounds.width / intrinsicProportion] : [bounds.height * intrinsicProportion, bounds.height];
    }
    return [bounds.width, bounds.height];
  }
  var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
  var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
  var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
  if (isAuto(first) && (!second || isAuto(second))) {
    if (hasIntrinsicWidth && hasIntrinsicHeight) {
      return [intrinsicWidth, intrinsicHeight];
    }
    if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
      return [bounds.width, bounds.height];
    }
    if (hasIntrinsicDimensions && hasIntrinsicProportion) {
      var width_1 = hasIntrinsicWidth ? intrinsicWidth : intrinsicHeight * intrinsicProportion;
      var height_1 = hasIntrinsicHeight ? intrinsicHeight : intrinsicWidth / intrinsicProportion;
      return [width_1, height_1];
    }
    var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
    var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
    return [width_2, height_2];
  }
  if (hasIntrinsicProportion) {
    var width_3 = 0;
    var height_3 = 0;
    if (isLengthPercentage(first)) {
      width_3 = getAbsoluteValue(first, bounds.width);
    } else if (isLengthPercentage(second)) {
      height_3 = getAbsoluteValue(second, bounds.height);
    }
    if (isAuto(first)) {
      width_3 = height_3 * intrinsicProportion;
    } else if (!second || isAuto(second)) {
      height_3 = width_3 / intrinsicProportion;
    }
    return [width_3, height_3];
  }
  var width = null;
  var height = null;
  if (isLengthPercentage(first)) {
    width = getAbsoluteValue(first, bounds.width);
  } else if (second && isLengthPercentage(second)) {
    height = getAbsoluteValue(second, bounds.height);
  }
  if (width !== null && (!second || isAuto(second))) {
    height = hasIntrinsicWidth && hasIntrinsicHeight ? width / intrinsicWidth * intrinsicHeight : bounds.height;
  }
  if (height !== null && isAuto(first)) {
    width = hasIntrinsicWidth && hasIntrinsicHeight ? height / intrinsicHeight * intrinsicWidth : bounds.width;
  }
  if (width !== null && height !== null) {
    return [width, height];
  }
  throw new Error("Unable to calculate background-size for element");
};
var getBackgroundValueForIndex = function(values, index) {
  var value = values[index];
  if (typeof value === "undefined") {
    return values[0];
  }
  return value;
};
var calculateBackgroundRepeatPath = function(repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
  var x2 = _a[0], y2 = _a[1];
  var width = _b[0], height = _b[1];
  switch (repeat) {
    case 2:
      return [
        new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y2)),
        new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y2)),
        new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y2)),
        new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y2))
      ];
    case 3:
      return [
        new Vector(Math.round(backgroundPositioningArea.left + x2), Math.round(backgroundPositioningArea.top)),
        new Vector(Math.round(backgroundPositioningArea.left + x2 + width), Math.round(backgroundPositioningArea.top)),
        new Vector(Math.round(backgroundPositioningArea.left + x2 + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
        new Vector(Math.round(backgroundPositioningArea.left + x2), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
      ];
    case 1:
      return [
        new Vector(Math.round(backgroundPositioningArea.left + x2), Math.round(backgroundPositioningArea.top + y2)),
        new Vector(Math.round(backgroundPositioningArea.left + x2 + width), Math.round(backgroundPositioningArea.top + y2)),
        new Vector(Math.round(backgroundPositioningArea.left + x2 + width), Math.round(backgroundPositioningArea.top + y2 + height)),
        new Vector(Math.round(backgroundPositioningArea.left + x2), Math.round(backgroundPositioningArea.top + y2 + height))
      ];
    default:
      return [
        new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
        new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
        new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
        new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
      ];
  }
};
var SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
var SAMPLE_TEXT = "Hidden Text";
var FontMetrics = function() {
  function FontMetrics2(document2) {
    this._data = {};
    this._document = document2;
  }
  FontMetrics2.prototype.parseMetrics = function(fontFamily2, fontSize2) {
    var container = this._document.createElement("div");
    var img = this._document.createElement("img");
    var span = this._document.createElement("span");
    var body = this._document.body;
    container.style.visibility = "hidden";
    container.style.fontFamily = fontFamily2;
    container.style.fontSize = fontSize2;
    container.style.margin = "0";
    container.style.padding = "0";
    container.style.whiteSpace = "nowrap";
    body.appendChild(container);
    img.src = SMALL_IMAGE;
    img.width = 1;
    img.height = 1;
    img.style.margin = "0";
    img.style.padding = "0";
    img.style.verticalAlign = "baseline";
    span.style.fontFamily = fontFamily2;
    span.style.fontSize = fontSize2;
    span.style.margin = "0";
    span.style.padding = "0";
    span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
    container.appendChild(span);
    container.appendChild(img);
    var baseline = img.offsetTop - span.offsetTop + 2;
    container.removeChild(span);
    container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
    container.style.lineHeight = "normal";
    img.style.verticalAlign = "super";
    var middle = img.offsetTop - container.offsetTop + 2;
    body.removeChild(container);
    return { baseline, middle };
  };
  FontMetrics2.prototype.getMetrics = function(fontFamily2, fontSize2) {
    var key = fontFamily2 + " " + fontSize2;
    if (typeof this._data[key] === "undefined") {
      this._data[key] = this.parseMetrics(fontFamily2, fontSize2);
    }
    return this._data[key];
  };
  return FontMetrics2;
}();
var Renderer = function() {
  function Renderer2(context, options) {
    this.context = context;
    this.options = options;
  }
  return Renderer2;
}();
var MASK_OFFSET = 1e4;
var CanvasRenderer = function(_super) {
  __extends(CanvasRenderer2, _super);
  function CanvasRenderer2(context, options) {
    var _this = _super.call(this, context, options) || this;
    _this._activeEffects = [];
    _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
    _this.ctx = _this.canvas.getContext("2d");
    if (!options.canvas) {
      _this.canvas.width = Math.floor(options.width * options.scale);
      _this.canvas.height = Math.floor(options.height * options.scale);
      _this.canvas.style.width = options.width + "px";
      _this.canvas.style.height = options.height + "px";
    }
    _this.fontMetrics = new FontMetrics(document);
    _this.ctx.scale(_this.options.scale, _this.options.scale);
    _this.ctx.translate(-options.x, -options.y);
    _this.ctx.textBaseline = "bottom";
    _this._activeEffects = [];
    _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
    return _this;
  }
  CanvasRenderer2.prototype.applyEffects = function(effects) {
    var _this = this;
    while (this._activeEffects.length) {
      this.popEffect();
    }
    effects.forEach(function(effect) {
      return _this.applyEffect(effect);
    });
  };
  CanvasRenderer2.prototype.applyEffect = function(effect) {
    this.ctx.save();
    if (isOpacityEffect(effect)) {
      this.ctx.globalAlpha = effect.opacity;
    }
    if (isTransformEffect(effect)) {
      this.ctx.translate(effect.offsetX, effect.offsetY);
      this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
      this.ctx.translate(-effect.offsetX, -effect.offsetY);
    }
    if (isClipEffect(effect)) {
      this.path(effect.path);
      this.ctx.clip();
    }
    this._activeEffects.push(effect);
  };
  CanvasRenderer2.prototype.popEffect = function() {
    this._activeEffects.pop();
    this.ctx.restore();
  };
  CanvasRenderer2.prototype.renderStack = function(stack) {
    return __awaiter(this, void 0, void 0, function() {
      var styles;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            styles = stack.element.container.styles;
            if (!styles.isVisible())
              return [3, 2];
            return [4, this.renderStackContent(stack)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.renderNode = function(paint) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (contains(paint.container.flags, 16)) {
              debugger;
            }
            if (!paint.container.styles.isVisible())
              return [3, 3];
            return [4, this.renderNodeBackgroundAndBorders(paint)];
          case 1:
            _a.sent();
            return [4, this.renderNodeContent(paint)];
          case 2:
            _a.sent();
            _a.label = 3;
          case 3:
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.renderTextWithLetterSpacing = function(text, letterSpacing2, baseline) {
    var _this = this;
    if (letterSpacing2 === 0) {
      this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
    } else {
      var letters = segmentGraphemes(text.text);
      letters.reduce(function(left, letter) {
        _this.ctx.fillText(letter, left, text.bounds.top + baseline);
        return left + _this.ctx.measureText(letter).width;
      }, text.bounds.left);
    }
  };
  CanvasRenderer2.prototype.createFontStyle = function(styles) {
    var fontVariant2 = styles.fontVariant.filter(function(variant) {
      return variant === "normal" || variant === "small-caps";
    }).join("");
    var fontFamily2 = fixIOSSystemFonts(styles.fontFamily).join(", ");
    var fontSize2 = isDimensionToken(styles.fontSize) ? "" + styles.fontSize.number + styles.fontSize.unit : styles.fontSize.number + "px";
    return [
      [styles.fontStyle, fontVariant2, styles.fontWeight, fontSize2, fontFamily2].join(" "),
      fontFamily2,
      fontSize2
    ];
  };
  CanvasRenderer2.prototype.renderTextNode = function(text, styles) {
    return __awaiter(this, void 0, void 0, function() {
      var _a, font, fontFamily2, fontSize2, _b, baseline, middle, paintOrder2;
      var _this = this;
      return __generator(this, function(_c) {
        _a = this.createFontStyle(styles), font = _a[0], fontFamily2 = _a[1], fontSize2 = _a[2];
        this.ctx.font = font;
        this.ctx.direction = styles.direction === 1 ? "rtl" : "ltr";
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "alphabetic";
        _b = this.fontMetrics.getMetrics(fontFamily2, fontSize2), baseline = _b.baseline, middle = _b.middle;
        paintOrder2 = styles.paintOrder;
        text.textBounds.forEach(function(text2) {
          paintOrder2.forEach(function(paintOrderLayer) {
            switch (paintOrderLayer) {
              case 0:
                _this.ctx.fillStyle = asString(styles.color);
                _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                var textShadows = styles.textShadow;
                if (textShadows.length && text2.text.trim().length) {
                  textShadows.slice(0).reverse().forEach(function(textShadow2) {
                    _this.ctx.shadowColor = asString(textShadow2.color);
                    _this.ctx.shadowOffsetX = textShadow2.offsetX.number * _this.options.scale;
                    _this.ctx.shadowOffsetY = textShadow2.offsetY.number * _this.options.scale;
                    _this.ctx.shadowBlur = textShadow2.blur.number;
                    _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                  });
                  _this.ctx.shadowColor = "";
                  _this.ctx.shadowOffsetX = 0;
                  _this.ctx.shadowOffsetY = 0;
                  _this.ctx.shadowBlur = 0;
                }
                if (styles.textDecorationLine.length) {
                  _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                  styles.textDecorationLine.forEach(function(textDecorationLine2) {
                    switch (textDecorationLine2) {
                      case 1:
                        _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top + baseline), text2.bounds.width, 1);
                        break;
                      case 2:
                        _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top), text2.bounds.width, 1);
                        break;
                      case 3:
                        _this.ctx.fillRect(text2.bounds.left, Math.ceil(text2.bounds.top + middle), text2.bounds.width, 1);
                        break;
                    }
                  });
                }
                break;
              case 1:
                if (styles.webkitTextStrokeWidth && text2.text.trim().length) {
                  _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                  _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                  _this.ctx.lineJoin = !!window.chrome ? "miter" : "round";
                  _this.ctx.strokeText(text2.text, text2.bounds.left, text2.bounds.top + baseline);
                }
                _this.ctx.strokeStyle = "";
                _this.ctx.lineWidth = 0;
                _this.ctx.lineJoin = "miter";
                break;
            }
          });
        });
        return [2];
      });
    });
  };
  CanvasRenderer2.prototype.renderReplacedElement = function(container, curves, image2) {
    if (image2 && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
      var box = contentBox(container);
      var path = calculatePaddingBoxPath(curves);
      this.path(path);
      this.ctx.save();
      this.ctx.clip();
      this.ctx.drawImage(image2, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
      this.ctx.restore();
    }
  };
  CanvasRenderer2.prototype.renderNodeContent = function(paint) {
    return __awaiter(this, void 0, void 0, function() {
      var container, curves, styles, _i, _a, child, image2, image2, iframeRenderer, canvas, size, _b, fontFamily2, fontSize2, baseline, bounds, x2, textBounds, img, image2, url, fontFamily2, bounds;
      return __generator(this, function(_c) {
        switch (_c.label) {
          case 0:
            this.applyEffects(paint.getEffects(4));
            container = paint.container;
            curves = paint.curves;
            styles = container.styles;
            _i = 0, _a = container.textNodes;
            _c.label = 1;
          case 1:
            if (!(_i < _a.length))
              return [3, 4];
            child = _a[_i];
            return [4, this.renderTextNode(child, styles)];
          case 2:
            _c.sent();
            _c.label = 3;
          case 3:
            _i++;
            return [3, 1];
          case 4:
            if (!(container instanceof ImageElementContainer))
              return [3, 8];
            _c.label = 5;
          case 5:
            _c.trys.push([5, 7, , 8]);
            return [4, this.context.cache.match(container.src)];
          case 6:
            image2 = _c.sent();
            this.renderReplacedElement(container, curves, image2);
            return [3, 8];
          case 7:
            _c.sent();
            this.context.logger.error("Error loading image " + container.src);
            return [3, 8];
          case 8:
            if (container instanceof CanvasElementContainer) {
              this.renderReplacedElement(container, curves, container.canvas);
            }
            if (!(container instanceof SVGElementContainer))
              return [3, 12];
            _c.label = 9;
          case 9:
            _c.trys.push([9, 11, , 12]);
            return [4, this.context.cache.match(container.svg)];
          case 10:
            image2 = _c.sent();
            this.renderReplacedElement(container, curves, image2);
            return [3, 12];
          case 11:
            _c.sent();
            this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
            return [3, 12];
          case 12:
            if (!(container instanceof IFrameElementContainer && container.tree))
              return [3, 14];
            iframeRenderer = new CanvasRenderer2(this.context, {
              scale: this.options.scale,
              backgroundColor: container.backgroundColor,
              x: 0,
              y: 0,
              width: container.width,
              height: container.height
            });
            return [4, iframeRenderer.render(container.tree)];
          case 13:
            canvas = _c.sent();
            if (container.width && container.height) {
              this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
            }
            _c.label = 14;
          case 14:
            if (container instanceof InputElementContainer) {
              size = Math.min(container.bounds.width, container.bounds.height);
              if (container.type === CHECKBOX) {
                if (container.checked) {
                  this.ctx.save();
                  this.path([
                    new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                    new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                    new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                    new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                    new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                    new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                    new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
                  ]);
                  this.ctx.fillStyle = asString(INPUT_COLOR);
                  this.ctx.fill();
                  this.ctx.restore();
                }
              } else if (container.type === RADIO) {
                if (container.checked) {
                  this.ctx.save();
                  this.ctx.beginPath();
                  this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                  this.ctx.fillStyle = asString(INPUT_COLOR);
                  this.ctx.fill();
                  this.ctx.restore();
                }
              }
            }
            if (isTextInputElement(container) && container.value.length) {
              _b = this.createFontStyle(styles), fontFamily2 = _b[0], fontSize2 = _b[1];
              baseline = this.fontMetrics.getMetrics(fontFamily2, fontSize2).baseline;
              this.ctx.font = fontFamily2;
              this.ctx.fillStyle = asString(styles.color);
              this.ctx.textBaseline = "alphabetic";
              this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
              bounds = contentBox(container);
              x2 = 0;
              switch (container.styles.textAlign) {
                case 1:
                  x2 += bounds.width / 2;
                  break;
                case 2:
                  x2 += bounds.width;
                  break;
              }
              textBounds = bounds.add(x2, 0, 0, -bounds.height / 2 + 1);
              this.ctx.save();
              this.path([
                new Vector(bounds.left, bounds.top),
                new Vector(bounds.left + bounds.width, bounds.top),
                new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                new Vector(bounds.left, bounds.top + bounds.height)
              ]);
              this.ctx.clip();
              this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
              this.ctx.restore();
              this.ctx.textBaseline = "alphabetic";
              this.ctx.textAlign = "left";
            }
            if (!contains(container.styles.display, 2048))
              return [3, 20];
            if (!(container.styles.listStyleImage !== null))
              return [3, 19];
            img = container.styles.listStyleImage;
            if (!(img.type === 0))
              return [3, 18];
            image2 = void 0;
            url = img.url;
            _c.label = 15;
          case 15:
            _c.trys.push([15, 17, , 18]);
            return [4, this.context.cache.match(url)];
          case 16:
            image2 = _c.sent();
            this.ctx.drawImage(image2, container.bounds.left - (image2.width + 10), container.bounds.top);
            return [3, 18];
          case 17:
            _c.sent();
            this.context.logger.error("Error loading list-style-image " + url);
            return [3, 18];
          case 18:
            return [3, 20];
          case 19:
            if (paint.listValue && container.styles.listStyleType !== -1) {
              fontFamily2 = this.createFontStyle(styles)[0];
              this.ctx.font = fontFamily2;
              this.ctx.fillStyle = asString(styles.color);
              this.ctx.textBaseline = "middle";
              this.ctx.textAlign = "right";
              bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
              this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
              this.ctx.textBaseline = "bottom";
              this.ctx.textAlign = "left";
            }
            _c.label = 20;
          case 20:
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.renderStackContent = function(stack) {
    return __awaiter(this, void 0, void 0, function() {
      var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
      return __generator(this, function(_p) {
        switch (_p.label) {
          case 0:
            if (contains(stack.element.container.flags, 16)) {
              debugger;
            }
            return [4, this.renderNodeBackgroundAndBorders(stack.element)];
          case 1:
            _p.sent();
            _i = 0, _a = stack.negativeZIndex;
            _p.label = 2;
          case 2:
            if (!(_i < _a.length))
              return [3, 5];
            child = _a[_i];
            return [4, this.renderStack(child)];
          case 3:
            _p.sent();
            _p.label = 4;
          case 4:
            _i++;
            return [3, 2];
          case 5:
            return [4, this.renderNodeContent(stack.element)];
          case 6:
            _p.sent();
            _b = 0, _c = stack.nonInlineLevel;
            _p.label = 7;
          case 7:
            if (!(_b < _c.length))
              return [3, 10];
            child = _c[_b];
            return [4, this.renderNode(child)];
          case 8:
            _p.sent();
            _p.label = 9;
          case 9:
            _b++;
            return [3, 7];
          case 10:
            _d = 0, _e = stack.nonPositionedFloats;
            _p.label = 11;
          case 11:
            if (!(_d < _e.length))
              return [3, 14];
            child = _e[_d];
            return [4, this.renderStack(child)];
          case 12:
            _p.sent();
            _p.label = 13;
          case 13:
            _d++;
            return [3, 11];
          case 14:
            _f = 0, _g = stack.nonPositionedInlineLevel;
            _p.label = 15;
          case 15:
            if (!(_f < _g.length))
              return [3, 18];
            child = _g[_f];
            return [4, this.renderStack(child)];
          case 16:
            _p.sent();
            _p.label = 17;
          case 17:
            _f++;
            return [3, 15];
          case 18:
            _h = 0, _j = stack.inlineLevel;
            _p.label = 19;
          case 19:
            if (!(_h < _j.length))
              return [3, 22];
            child = _j[_h];
            return [4, this.renderNode(child)];
          case 20:
            _p.sent();
            _p.label = 21;
          case 21:
            _h++;
            return [3, 19];
          case 22:
            _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
            _p.label = 23;
          case 23:
            if (!(_k < _l.length))
              return [3, 26];
            child = _l[_k];
            return [4, this.renderStack(child)];
          case 24:
            _p.sent();
            _p.label = 25;
          case 25:
            _k++;
            return [3, 23];
          case 26:
            _m = 0, _o = stack.positiveZIndex;
            _p.label = 27;
          case 27:
            if (!(_m < _o.length))
              return [3, 30];
            child = _o[_m];
            return [4, this.renderStack(child)];
          case 28:
            _p.sent();
            _p.label = 29;
          case 29:
            _m++;
            return [3, 27];
          case 30:
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.mask = function(paths) {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(this.canvas.width, 0);
    this.ctx.lineTo(this.canvas.width, this.canvas.height);
    this.ctx.lineTo(0, this.canvas.height);
    this.ctx.lineTo(0, 0);
    this.formatPath(paths.slice(0).reverse());
    this.ctx.closePath();
  };
  CanvasRenderer2.prototype.path = function(paths) {
    this.ctx.beginPath();
    this.formatPath(paths);
    this.ctx.closePath();
  };
  CanvasRenderer2.prototype.formatPath = function(paths) {
    var _this = this;
    paths.forEach(function(point, index) {
      var start = isBezierCurve(point) ? point.start : point;
      if (index === 0) {
        _this.ctx.moveTo(start.x, start.y);
      } else {
        _this.ctx.lineTo(start.x, start.y);
      }
      if (isBezierCurve(point)) {
        _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
      }
    });
  };
  CanvasRenderer2.prototype.renderRepeat = function(path, pattern, offsetX, offsetY) {
    this.path(path);
    this.ctx.fillStyle = pattern;
    this.ctx.translate(offsetX, offsetY);
    this.ctx.fill();
    this.ctx.translate(-offsetX, -offsetY);
  };
  CanvasRenderer2.prototype.resizeImage = function(image2, width, height) {
    var _a;
    if (image2.width === width && image2.height === height) {
      return image2;
    }
    var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
    var canvas = ownerDocument.createElement("canvas");
    canvas.width = Math.max(1, width);
    canvas.height = Math.max(1, height);
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image2, 0, 0, image2.width, image2.height, 0, 0, width, height);
    return canvas;
  };
  CanvasRenderer2.prototype.renderBackgroundImage = function(container) {
    return __awaiter(this, void 0, void 0, function() {
      var index, _loop_1, this_1, _i, _a, backgroundImage2;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            index = container.styles.backgroundImage.length - 1;
            _loop_1 = function(backgroundImage3) {
              var image2, url, _c, path, x2, y2, width, height, pattern, _d, path, x2, y2, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position2, x2, y2, _g, rx, ry, radialGradient_1, midX, midY, f2, invF;
              return __generator(this, function(_h) {
                switch (_h.label) {
                  case 0:
                    if (!(backgroundImage3.type === 0))
                      return [3, 5];
                    image2 = void 0;
                    url = backgroundImage3.url;
                    _h.label = 1;
                  case 1:
                    _h.trys.push([1, 3, , 4]);
                    return [4, this_1.context.cache.match(url)];
                  case 2:
                    image2 = _h.sent();
                    return [3, 4];
                  case 3:
                    _h.sent();
                    this_1.context.logger.error("Error loading background-image " + url);
                    return [3, 4];
                  case 4:
                    if (image2) {
                      _c = calculateBackgroundRendering(container, index, [
                        image2.width,
                        image2.height,
                        image2.width / image2.height
                      ]), path = _c[0], x2 = _c[1], y2 = _c[2], width = _c[3], height = _c[4];
                      pattern = this_1.ctx.createPattern(this_1.resizeImage(image2, width, height), "repeat");
                      this_1.renderRepeat(path, pattern, x2, y2);
                    }
                    return [3, 6];
                  case 5:
                    if (isLinearGradient(backgroundImage3)) {
                      _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x2 = _d[1], y2 = _d[2], width = _d[3], height = _d[4];
                      _e = calculateGradientDirection(backgroundImage3.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                      canvas = document.createElement("canvas");
                      canvas.width = width;
                      canvas.height = height;
                      ctx = canvas.getContext("2d");
                      gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                      processColorStops(backgroundImage3.stops, lineLength).forEach(function(colorStop) {
                        return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                      });
                      ctx.fillStyle = gradient_1;
                      ctx.fillRect(0, 0, width, height);
                      if (width > 0 && height > 0) {
                        pattern = this_1.ctx.createPattern(canvas, "repeat");
                        this_1.renderRepeat(path, pattern, x2, y2);
                      }
                    } else if (isRadialGradient(backgroundImage3)) {
                      _f = calculateBackgroundRendering(container, index, [
                        null,
                        null,
                        null
                      ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                      position2 = backgroundImage3.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage3.position;
                      x2 = getAbsoluteValue(position2[0], width);
                      y2 = getAbsoluteValue(position2[position2.length - 1], height);
                      _g = calculateRadius(backgroundImage3, x2, y2, width, height), rx = _g[0], ry = _g[1];
                      if (rx > 0 && ry > 0) {
                        radialGradient_1 = this_1.ctx.createRadialGradient(left + x2, top_1 + y2, 0, left + x2, top_1 + y2, rx);
                        processColorStops(backgroundImage3.stops, rx * 2).forEach(function(colorStop) {
                          return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                        });
                        this_1.path(path);
                        this_1.ctx.fillStyle = radialGradient_1;
                        if (rx !== ry) {
                          midX = container.bounds.left + 0.5 * container.bounds.width;
                          midY = container.bounds.top + 0.5 * container.bounds.height;
                          f2 = ry / rx;
                          invF = 1 / f2;
                          this_1.ctx.save();
                          this_1.ctx.translate(midX, midY);
                          this_1.ctx.transform(1, 0, 0, f2, 0, 0);
                          this_1.ctx.translate(-midX, -midY);
                          this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                          this_1.ctx.restore();
                        } else {
                          this_1.ctx.fill();
                        }
                      }
                    }
                    _h.label = 6;
                  case 6:
                    index--;
                    return [2];
                }
              });
            };
            this_1 = this;
            _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
            _b.label = 1;
          case 1:
            if (!(_i < _a.length))
              return [3, 4];
            backgroundImage2 = _a[_i];
            return [5, _loop_1(backgroundImage2)];
          case 2:
            _b.sent();
            _b.label = 3;
          case 3:
            _i++;
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.renderSolidBorder = function(color2, side, curvePoints) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        this.path(parsePathForBorder(curvePoints, side));
        this.ctx.fillStyle = asString(color2);
        this.ctx.fill();
        return [2];
      });
    });
  };
  CanvasRenderer2.prototype.renderDoubleBorder = function(color2, width, side, curvePoints) {
    return __awaiter(this, void 0, void 0, function() {
      var outerPaths, innerPaths;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!(width < 3))
              return [3, 2];
            return [4, this.renderSolidBorder(color2, side, curvePoints)];
          case 1:
            _a.sent();
            return [2];
          case 2:
            outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
            this.path(outerPaths);
            this.ctx.fillStyle = asString(color2);
            this.ctx.fill();
            innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
            this.path(innerPaths);
            this.ctx.fill();
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.renderNodeBackgroundAndBorders = function(paint) {
    return __awaiter(this, void 0, void 0, function() {
      var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.applyEffects(paint.getEffects(2));
            styles = paint.container.styles;
            hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
            borders = [
              { style: styles.borderTopStyle, color: styles.borderTopColor, width: styles.borderTopWidth },
              { style: styles.borderRightStyle, color: styles.borderRightColor, width: styles.borderRightWidth },
              { style: styles.borderBottomStyle, color: styles.borderBottomColor, width: styles.borderBottomWidth },
              { style: styles.borderLeftStyle, color: styles.borderLeftColor, width: styles.borderLeftWidth }
            ];
            backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
            if (!(hasBackground || styles.boxShadow.length))
              return [3, 2];
            this.ctx.save();
            this.path(backgroundPaintingArea);
            this.ctx.clip();
            if (!isTransparent(styles.backgroundColor)) {
              this.ctx.fillStyle = asString(styles.backgroundColor);
              this.ctx.fill();
            }
            return [4, this.renderBackgroundImage(paint.container)];
          case 1:
            _a.sent();
            this.ctx.restore();
            styles.boxShadow.slice(0).reverse().forEach(function(shadow) {
              _this.ctx.save();
              var borderBoxArea = calculateBorderBoxPath(paint.curves);
              var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
              var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
              if (shadow.inset) {
                _this.path(borderBoxArea);
                _this.ctx.clip();
                _this.mask(shadowPaintingArea);
              } else {
                _this.mask(borderBoxArea);
                _this.ctx.clip();
                _this.path(shadowPaintingArea);
              }
              _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
              _this.ctx.shadowOffsetY = shadow.offsetY.number;
              _this.ctx.shadowColor = asString(shadow.color);
              _this.ctx.shadowBlur = shadow.blur.number;
              _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : "rgba(0,0,0,1)";
              _this.ctx.fill();
              _this.ctx.restore();
            });
            _a.label = 2;
          case 2:
            side = 0;
            _i = 0, borders_1 = borders;
            _a.label = 3;
          case 3:
            if (!(_i < borders_1.length))
              return [3, 13];
            border = borders_1[_i];
            if (!(border.style !== 0 && !isTransparent(border.color) && border.width > 0))
              return [3, 11];
            if (!(border.style === 2))
              return [3, 5];
            return [4, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2)];
          case 4:
            _a.sent();
            return [3, 11];
          case 5:
            if (!(border.style === 3))
              return [3, 7];
            return [4, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3)];
          case 6:
            _a.sent();
            return [3, 11];
          case 7:
            if (!(border.style === 4))
              return [3, 9];
            return [4, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
          case 8:
            _a.sent();
            return [3, 11];
          case 9:
            return [4, this.renderSolidBorder(border.color, side, paint.curves)];
          case 10:
            _a.sent();
            _a.label = 11;
          case 11:
            side++;
            _a.label = 12;
          case 12:
            _i++;
            return [3, 3];
          case 13:
            return [2];
        }
      });
    });
  };
  CanvasRenderer2.prototype.renderDashedDottedBorder = function(color2, width, side, curvePoints, style) {
    return __awaiter(this, void 0, void 0, function() {
      var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
      return __generator(this, function(_a) {
        this.ctx.save();
        strokePaths = parsePathForBorderStroke(curvePoints, side);
        boxPaths = parsePathForBorder(curvePoints, side);
        if (style === 2) {
          this.path(boxPaths);
          this.ctx.clip();
        }
        if (isBezierCurve(boxPaths[0])) {
          startX = boxPaths[0].start.x;
          startY = boxPaths[0].start.y;
        } else {
          startX = boxPaths[0].x;
          startY = boxPaths[0].y;
        }
        if (isBezierCurve(boxPaths[1])) {
          endX = boxPaths[1].end.x;
          endY = boxPaths[1].end.y;
        } else {
          endX = boxPaths[1].x;
          endY = boxPaths[1].y;
        }
        if (side === 0 || side === 2) {
          length = Math.abs(startX - endX);
        } else {
          length = Math.abs(startY - endY);
        }
        this.ctx.beginPath();
        if (style === 3) {
          this.formatPath(strokePaths);
        } else {
          this.formatPath(boxPaths.slice(0, 2));
        }
        dashLength = width < 3 ? width * 3 : width * 2;
        spaceLength = width < 3 ? width * 2 : width;
        if (style === 3) {
          dashLength = width;
          spaceLength = width;
        }
        useLineDash = true;
        if (length <= dashLength * 2) {
          useLineDash = false;
        } else if (length <= dashLength * 2 + spaceLength) {
          multiplier = length / (2 * dashLength + spaceLength);
          dashLength *= multiplier;
          spaceLength *= multiplier;
        } else {
          numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
          minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
          maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
          spaceLength = maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace) ? minSpace : maxSpace;
        }
        if (useLineDash) {
          if (style === 3) {
            this.ctx.setLineDash([0, dashLength + spaceLength]);
          } else {
            this.ctx.setLineDash([dashLength, spaceLength]);
          }
        }
        if (style === 3) {
          this.ctx.lineCap = "round";
          this.ctx.lineWidth = width;
        } else {
          this.ctx.lineWidth = width * 2 + 1.1;
        }
        this.ctx.strokeStyle = asString(color2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        if (style === 2) {
          if (isBezierCurve(boxPaths[0])) {
            path1 = boxPaths[3];
            path2 = boxPaths[0];
            this.ctx.beginPath();
            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
            this.ctx.stroke();
          }
          if (isBezierCurve(boxPaths[1])) {
            path1 = boxPaths[1];
            path2 = boxPaths[2];
            this.ctx.beginPath();
            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
            this.ctx.stroke();
          }
        }
        this.ctx.restore();
        return [2];
      });
    });
  };
  CanvasRenderer2.prototype.render = function(element) {
    return __awaiter(this, void 0, void 0, function() {
      var stack;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (this.options.backgroundColor) {
              this.ctx.fillStyle = asString(this.options.backgroundColor);
              this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
            }
            stack = parseStackingContexts(element);
            return [4, this.renderStack(stack)];
          case 1:
            _a.sent();
            this.applyEffects([]);
            return [2, this.canvas];
        }
      });
    });
  };
  return CanvasRenderer2;
}(Renderer);
var isTextInputElement = function(container) {
  if (container instanceof TextareaElementContainer) {
    return true;
  } else if (container instanceof SelectElementContainer) {
    return true;
  } else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
    return true;
  }
  return false;
};
var calculateBackgroundCurvedPaintingArea = function(clip, curves) {
  switch (clip) {
    case 0:
      return calculateBorderBoxPath(curves);
    case 2:
      return calculateContentBoxPath(curves);
    case 1:
    default:
      return calculatePaddingBoxPath(curves);
  }
};
var canvasTextAlign = function(textAlign2) {
  switch (textAlign2) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
};
var iOSBrokenFonts = ["-apple-system", "system-ui"];
var fixIOSSystemFonts = function(fontFamilies) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? fontFamilies.filter(function(fontFamily2) {
    return iOSBrokenFonts.indexOf(fontFamily2) === -1;
  }) : fontFamilies;
};
var ForeignObjectRenderer = function(_super) {
  __extends(ForeignObjectRenderer2, _super);
  function ForeignObjectRenderer2(context, options) {
    var _this = _super.call(this, context, options) || this;
    _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
    _this.ctx = _this.canvas.getContext("2d");
    _this.options = options;
    _this.canvas.width = Math.floor(options.width * options.scale);
    _this.canvas.height = Math.floor(options.height * options.scale);
    _this.canvas.style.width = options.width + "px";
    _this.canvas.style.height = options.height + "px";
    _this.ctx.scale(_this.options.scale, _this.options.scale);
    _this.ctx.translate(-options.x, -options.y);
    _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
    return _this;
  }
  ForeignObjectRenderer2.prototype.render = function(element) {
    return __awaiter(this, void 0, void 0, function() {
      var svg, img;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
            return [4, loadSerializedSVG(svg)];
          case 1:
            img = _a.sent();
            if (this.options.backgroundColor) {
              this.ctx.fillStyle = asString(this.options.backgroundColor);
              this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
            }
            this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
            return [2, this.canvas];
        }
      });
    });
  };
  return ForeignObjectRenderer2;
}(Renderer);
var loadSerializedSVG = function(svg) {
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      resolve(img);
    };
    img.onerror = reject;
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
  });
};
var Logger = function() {
  function Logger2(_a) {
    var id2 = _a.id, enabled = _a.enabled;
    this.id = id2;
    this.enabled = enabled;
    this.start = Date.now();
  }
  Logger2.prototype.debug = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (this.enabled) {
      if (typeof window !== "undefined" && window.console && typeof console.debug === "function") {
        console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
      } else {
        this.info.apply(this, args);
      }
    }
  };
  Logger2.prototype.getTime = function() {
    return Date.now() - this.start;
  };
  Logger2.prototype.info = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (this.enabled) {
      if (typeof window !== "undefined" && window.console && typeof console.info === "function") {
        console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
      }
    }
  };
  Logger2.prototype.warn = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (this.enabled) {
      if (typeof window !== "undefined" && window.console && typeof console.warn === "function") {
        console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
      } else {
        this.info.apply(this, args);
      }
    }
  };
  Logger2.prototype.error = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (this.enabled) {
      if (typeof window !== "undefined" && window.console && typeof console.error === "function") {
        console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
      } else {
        this.info.apply(this, args);
      }
    }
  };
  Logger2.instances = {};
  return Logger2;
}();
var Context = function() {
  function Context2(options, windowBounds) {
    var _a;
    this.windowBounds = windowBounds;
    this.instanceName = "#" + Context2.instanceCount++;
    this.logger = new Logger({ id: this.instanceName, enabled: options.logging });
    this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
  }
  Context2.instanceCount = 1;
  return Context2;
}();
var html2canvas = function(element, options) {
  if (options === void 0) {
    options = {};
  }
  return renderElement(element, options);
};
if (typeof window !== "undefined") {
  CacheStorage.setContext(window);
}
var renderElement = function(element, opts) {
  return __awaiter(void 0, void 0, void 0, function() {
    var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor2, renderOptions, canvas, renderer, root, renderer;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    return __generator(this, function(_u) {
      switch (_u.label) {
        case 0:
          if (!element || typeof element !== "object") {
            return [2, Promise.reject("Invalid element provided as first argument")];
          }
          ownerDocument = element.ownerDocument;
          if (!ownerDocument) {
            throw new Error("Element is not attached to a Document");
          }
          defaultView = ownerDocument.defaultView;
          if (!defaultView) {
            throw new Error("Document is not attached to a Window");
          }
          resourceOptions = {
            allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
            imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15e3,
            proxy: opts.proxy,
            useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
          };
          contextOptions = __assign({ logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true, cache: opts.cache }, resourceOptions);
          windowOptions = {
            windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
            windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
            scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
            scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
          };
          windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
          context = new Context(contextOptions, windowBounds);
          foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
          cloneOptions = {
            allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
            onclone: opts.onclone,
            ignoreElements: opts.ignoreElements,
            inlineImages: foreignObjectRendering,
            copyStyles: foreignObjectRendering
          };
          context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
          documentCloner = new DocumentCloner(context, element, cloneOptions);
          clonedElement = documentCloner.clonedReferenceElement;
          if (!clonedElement) {
            return [2, Promise.reject("Unable to find element in cloned iframe")];
          }
          return [4, documentCloner.toIFrame(ownerDocument, windowBounds)];
        case 1:
          container = _u.sent();
          _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement) ? parseDocumentSize(clonedElement.ownerDocument) : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
          backgroundColor2 = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
          renderOptions = {
            canvas: opts.canvas,
            backgroundColor: backgroundColor2,
            scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
            x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
            y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
            width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
            height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
          };
          if (!foreignObjectRendering)
            return [3, 3];
          context.logger.debug("Document cloned, using foreign object rendering");
          renderer = new ForeignObjectRenderer(context, renderOptions);
          return [4, renderer.render(clonedElement)];
        case 2:
          canvas = _u.sent();
          return [3, 5];
        case 3:
          context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
          context.logger.debug("Starting DOM parsing");
          root = parseTree(context, clonedElement);
          if (backgroundColor2 === root.styles.backgroundColor) {
            root.styles.backgroundColor = COLORS.TRANSPARENT;
          }
          context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
          renderer = new CanvasRenderer(context, renderOptions);
          return [4, renderer.render(root)];
        case 4:
          canvas = _u.sent();
          _u.label = 5;
        case 5:
          if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
            if (!DocumentCloner.destroy(container)) {
              context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
            }
          }
          context.logger.debug("Finished rendering");
          return [2, canvas];
      }
    });
  });
};
var parseBackgroundColor = function(context, element, backgroundColorOverride) {
  var ownerDocument = element.ownerDocument;
  var documentBackgroundColor = ownerDocument.documentElement ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor) : COLORS.TRANSPARENT;
  var bodyBackgroundColor = ownerDocument.body ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor) : COLORS.TRANSPARENT;
  var defaultBackgroundColor = typeof backgroundColorOverride === "string" ? parseColor(context, backgroundColorOverride) : backgroundColorOverride === null ? COLORS.TRANSPARENT : 4294967295;
  return element === ownerDocument.documentElement ? isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? defaultBackgroundColor : bodyBackgroundColor : documentBackgroundColor : defaultBackgroundColor;
};
function ScreenshotButton({
  onScreenshotTaken,
  screenshot
}) {
  const [isTakingScreenshot, setIsTakingScreenshot] = react.exports.useState(false);
  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.body, {
      x: window.scrollX,
      y: window.scrollY,
      width: window.innerWidth,
      height: window.innerHeight
    });
    const base64image = canvas.toDataURL("image/png");
    onScreenshotTaken(base64image);
    setIsTakingScreenshot(false);
  }
  if (screenshot) {
    return /* @__PURE__ */ jsx("button", {
      type: "button",
      className: "tw-p-1 tw-w-10 tw-h-10 tw-rounded-md tw-border-transparent tw-flex tw-justify-end tw-items-end tw-text-zinc-400 hover:tw-text-zinc-100 tw-transition-colors",
      style: {
        backgroundImage: `url(${screenshot})`,
        backgroundPosition: "right bottom",
        backgroundSize: 180
      },
      onClick: () => onScreenshotTaken(null),
      children: /* @__PURE__ */ jsx(Trash$1, {
        weight: "fill"
      })
    });
  }
  {
    console.log(screenshot);
  }
  return /* @__PURE__ */ jsx("button", {
    type: "button",
    onClick: handleTakeScreenshot,
    className: "tw-p-2 tw-bg-zinc-800 tw-rounded-md tw-border-transparent hover:tw-bg-zinc-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-zinc-900 focus:tw-ring-brand-500 tw-transition-colors",
    children: isTakingScreenshot ? /* @__PURE__ */ jsx(Loading, {}) : /* @__PURE__ */ jsx(Camera$1, {
      className: "tw-w-6 tw-h-6 tw-text-zinc-100"
    })
  });
}
function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent
}) {
  const [screenshot, setScreenShot] = react.exports.useState(null);
  const [comment, setComment] = react.exports.useState("");
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [isSendIngFeedback, setIsSendIngFeedback] = react.exports.useState(false);
  async function handleSubmitFeedback(event) {
    event.preventDefault();
    setIsSendIngFeedback(true);
    await api.post("/feedbacks", {
      type: feedbackType,
      screenshot,
      comment
    });
    setIsSendIngFeedback(false);
    onFeedbackSent();
  }
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("header", {
      children: [/* @__PURE__ */ jsx("button", {
        onClick: onFeedbackRestartRequested,
        type: "button",
        className: "tw-border-transparent tw-bg-transparent tw-top-5 tw-left-5 tw-absolute tw-text-zinc-400 hover:tw-text-zinc-100",
        children: /* @__PURE__ */ jsx(ArrowLeft$1, {
          weight: "bold",
          className: "tw-w-4 tw-h-4"
        })
      }), /* @__PURE__ */ jsxs("span", {
        className: "tw-font-sans tw-text-white tw-text-xl tw-leading-6 tw-flex tw-items-center tw-gap-2",
        children: [/* @__PURE__ */ jsx("img", {
          src: feedbackTypeInfo.image.source,
          alt: feedbackTypeInfo.image.alt,
          className: "tw-w-6 tw-h-6"
        }), feedbackTypeInfo.title]
      }), /* @__PURE__ */ jsx(CloseButton, {})]
    }), /* @__PURE__ */ jsxs("form", {
      onSubmit: handleSubmitFeedback,
      className: "tw-my-4 tw-w-full",
      children: [/* @__PURE__ */ jsx("textarea", {
        className: "tw-font-sans tw-py-0 tw-pt-2 tw-px-0 tw-pl-4 tw-min-w-[304px] tw-w-11/12 tw-min-h-[100px] tw-text-sm tw-placeholder-zinc-100 tw-text-zinc-100 tw-border-zinc-600 tw-bg-transparent tw-rounded-md focus:tw-border-brand-500 focus:tw-ring-brand-500 focus:tw-ring-1 focus:tw-outline-none tw-resize-none scrollbar tw-scrollbar-thumb-zinc-700 tw-scrollbar-track-transparent tw-scrollbar-thin",
        placeholder: "Conte com detalhes o que est\xE1 acontecendo...",
        onChange: (event) => setComment(event.target.value)
      }), /* @__PURE__ */ jsxs("footer", {
        className: "tw-flex tw-gap-2 tw-mt-2",
        children: [/* @__PURE__ */ jsx(ScreenshotButton, {
          screenshot,
          onScreenshotTaken: setScreenShot
        }), /* @__PURE__ */ jsx("button", {
          type: "submit",
          disabled: comment.length === 0 || isSendIngFeedback,
          className: "tw-font-sans tw-text-white tw-p-2 tw-bg-brand-500 tw-rounded-md tw-border-transparent tw-flex-1 tw-flex tw-justify-center tw-items-center tw-text-sm hover:tw-bg-brand-300 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-zinc-900 focus:tw-ring-brand-500 tw-transition-colors disabled:tw-opacity-50 disabled:hover:tw-bg-brand-500",
          children: isSendIngFeedback ? /* @__PURE__ */ jsx(Loading, {}) : "Enviar Feedback"
        })]
      })]
    })]
  });
}
var bugImageUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuOTE2NjkgNkMxMC45MTY3IDUgMTAuMTY2NyAyIDguNDc4NjkgMkM2Ljc5MDY5IDIgNi45MTY2OSA0IDcuOTE2NjkgNEM4LjkxNjY5IDQgOC45MTY2OSA2IDguOTE2NjkgN0M4LjkxNjY5IDggOS45MTY2OSA2IDkuOTE2NjkgNlpNNS43MzM2OSA3LjcyQzYuNzMzNjkgNi43MiA1Ljk4MzY5IDMuNzIgNC4yOTU2OSAzLjcyQzIuNjA3NjkgMy43MiAyLjczMzY5IDUuNzIgMy43MzM2OSA1LjcyQzQuNzMzNjkgNS43MiA0LjczMzY5IDcuNzIgNC43MzM2OSA4LjcyQzQuNzMzNjkgOS43MiA1LjczMzY5IDcuNzIgNS43MzM2OSA3LjcyWiIgZmlsbD0iI0FBOEREOCIvPgo8cGF0aCBkPSJNMzIuMTA4NyAzNC44NTZDMzIuMjk3NyAzNS42NjQgMzMuMzM1NyAzNy4xMzYgMzQuMTQwNyAzNi45NDdDMzQuOTQ2NyAzNi43NTcgMzUuMjE3NyAzNC45NzYgMzUuMDI4NyAzNC4xN0MzNC44Mzk3IDMzLjM2MiAzNC4wMzA3IDMyLjg2MyAzMy4yMjQ3IDMzLjA1M0MzMi40MTk3IDMzLjI0MyAzMS45MTg3IDM0LjA1IDMyLjEwODcgMzQuODU2Wk0yNi42NzQ3IDM1LjUwNUMyNi42Nzc3IDM2LjMzNSAyNy4zNTU3IDM4LjAwMyAyOC4xODM3IDM4QzI5LjAxMTcgMzcuOTk2IDI5LjY3NzcgMzYuMzIzIDI5LjY3NDcgMzUuNDk0QzI5LjY3MTcgMzQuNjY1IDI4Ljk5NzcgMzMuOTk3IDI4LjE2OTcgMzMuOTk5QzI3LjM0MTcgMzQuMDAzIDI2LjY3MTcgMzQuNjc2IDI2LjY3NDcgMzUuNTA1Wk0yMS40MDM3IDMzLjA1OUMyMS4wNzc3IDMzLjgyMyAyMS4wMzg3IDM1LjYyMiAyMS43OTk3IDM1Ljk0OUMyMi41NjI3IDM2LjI3MyAyMy44MzY3IDM1LjAwMiAyNC4xNjI3IDM0LjIzOUMyNC40ODc3IDMzLjQ3NyAyNC4xMzQ3IDMyLjU5NiAyMy4zNzM3IDMyLjI2OUMyMi42MTE3IDMxLjk0NCAyMS43MzA3IDMyLjI5NiAyMS40MDM3IDMzLjA1OVpNMTYuMzcyNyAyMi4wMTlDMTUuNTYwNyAyMi4xOTEgMTQuMDY0NyAyMy4xOTIgMTQuMjMzNyAyNC4wMDJDMTQuNDA2NyAyNC44MTIgMTYuMTc4NyAyNS4xMjYgMTYuOTkwNyAyNC45NTVDMTcuODAxNyAyNC43ODQgMTguMzE5NyAyMy45ODggMTguMTUwNyAyMy4xNzhDMTcuOTc4NyAyMi4zNjggMTcuMTg1NyAyMS44NDggMTYuMzcyNyAyMi4wMTlaTTE0LjMzNTcgMTcuMDE5QzEzLjUyMzcgMTcuMTkxIDEyLjAyNzcgMTguMTkyIDEyLjE5NjcgMTkuMDAyQzEyLjM2OTcgMTkuODEyIDE0LjE0MTcgMjAuMTI2IDE0Ljk1MzcgMTkuOTU1QzE1Ljc2NDcgMTkuNzg0IDE2LjI4MjcgMTguOTg4IDE2LjExMzcgMTguMTc4QzE1Ljk0MTcgMTcuMzY4IDE1LjE0NzcgMTYuODQ4IDE0LjMzNTcgMTcuMDE5WiIgZmlsbD0iIzc0NEVBQSIvPgo8cGF0aCBkPSJNMjkuNzQ1NyAzNkMzMi41NzY3IDM2IDM0LjY3MTcgMzUuMTIzIDM1LjAxMTcgMzQuOTczQzM3LjI4MjcgMzMuOTYzIDM4LjMwNDcgMzEuMzA0IDM3LjI5NTcgMjkuMDM0QzM2LjI5NjcgMjYuNzg0IDMzLjY3OTcgMjUuNzU5IDMxLjQyMzcgMjYuNzJDMzEuMjkwNyAyNi43NyAyOS42MzA3IDI3LjM2OSAyOC4wODA3IDI2LjY0OEMyNi4yMjk3IDI1Ljc4NyAyNS4wODU3IDIzLjMzOSAyNC40NTI3IDIxLjQzOUMyNC4zMDg3IDIxLjAwOSAyNC4wNjc3IDIwLjE2NSAyMy43NjY3IDE5LjEyM0MyMS45MDA3IDEyLjY1MiAyMC45MzQ3IDEwLjgzOCAxOS43ODM3IDkuMzAyOTlDMTYuMDcyNyA0LjM1MTk5IDEwLjE5MTcgNC4wMDY5OSA3LjMwMDY4IDQuNTg2OTlDNC44NjM2OCA1LjA3Mzk5IDMuMjgyNjggNy40NDQ5OSAzLjc3MDY4IDkuODgxOTlDNC4yNTg2OCAxMi4zMiA2LjYzMDY4IDEzLjkwMiA5LjA2NjY4IDEzLjQxMkM5LjIyODY4IDEzLjM4NiAxMS4yNzA3IDEzLjEwNiAxMi40OTA3IDE0LjU4MUMxMy4xMzM3IDE1Ljg2OCAxNC41NzA3IDE5LjcwOSAxNS4xMjA3IDIxLjYxNUMxNS40NjY3IDIyLjgxNCAxNS43NDk3IDIzLjc4NiAxNS45MTQ3IDI0LjI4MkMxNy42ODc3IDI5LjU5OSAyMC41ODA3IDMzLjE3NSAyNC41MTc3IDM0LjkxMUMyNi4zNjk3IDM1LjcyOSAyOC4xNzE3IDM2IDI5Ljc0NTcgMzZaIiBmaWxsPSIjOTI2NkNDIi8+CjxwYXRoIGQ9Ik05LjE4MzcyIDhDOS43MzYgOCAxMC4xODM3IDcuNTUyMjggMTAuMTgzNyA3QzEwLjE4MzcgNi40NDc3MiA5LjczNiA2IDkuMTgzNzIgNkM4LjYzMTQzIDYgOC4xODM3MiA2LjQ0NzcyIDguMTgzNzIgN0M4LjE4MzcyIDcuNTUyMjggOC42MzE0MyA4IDkuMTgzNzIgOFoiIGZpbGw9IiMyMDIwMjQiLz4KPHBhdGggZD0iTTMzLjQyNDggMzQuOTY0QzMzLjMzNTggMzQuOTY0IDMzLjI0NDggMzQuOTUyIDMzLjE1NTggMzQuOTI4QzMyLjYyMzggMzQuNzggMzIuMzExOCAzNC4yMjkgMzIuNDU5OCAzMy42OTdDMzMuMjE2OCAzMC45NzUgMzEuNjg5OCAyOS4xNTUgMzEuNjc0OCAyOS4xMzdDMzEuMzE1OCAyOC43MTggMzEuMzYyOCAyOC4wODYgMzEuNzgxOCAyNy43MjdDMzIuMTk5OCAyNy4zNjggMzIuODMyOCAyNy40MTUgMzMuMTkxOCAyNy44MzRDMzMuMjgzOCAyNy45NDEgMzUuNDI1OCAzMC40OTQgMzQuMzg2OCAzNC4yMzFDMzQuMjY0OCAzNC42NzQgMzMuODYxOCAzNC45NjQgMzMuNDI0OCAzNC45NjRaTTI2LjIyNTggMzQuNDAxQzI1Ljk4MDggMzQuNDAxIDI1LjczNTggMzQuMzEyIDI1LjU0MTggMzQuMTMxQzI1LjEzODggMzMuNzUzIDI1LjExNzggMzMuMTIgMjUuNDk0OCAzMi43MTdDMjYuOTc5OCAzMS4xMyAyNi45NDc4IDI4LjUyNCAyNi45NDY4IDI4LjQ5N0MyNi45MzA4IDI3Ljk0NSAyNy4zNjU4IDI3LjQ4NSAyNy45MTg4IDI3LjQ2OUMyOC40NjA4IDI3LjQ2NCAyOC45MzE4IDI3Ljg4OCAyOC45NDY4IDI4LjQ0MUMyOC45NTA4IDI4LjU4IDI5LjAxOTggMzEuODc4IDI2Ljk1NTggMzQuMDg1QzI2Ljc1ODggMzQuMjk1IDI2LjQ5MTggMzQuNDAxIDI2LjIyNTggMzQuNDAxWk0xNy42ODM4IDI1LjcwNUMxNy4yMDM4IDI1LjcwNSAxNi43Nzk4IDI1LjM1OCAxNi42OTg4IDI0Ljg2OEMxNi42MDg4IDI0LjMyNCAxNi45NzY4IDIzLjgwOCAxNy41MjE4IDIzLjcxOUMyMC41OTU4IDIzLjIwOSAyMi4yOTU4IDIxLjM0MiAyMi4zMTI4IDIxLjMyM0MyMi42Nzc4IDIwLjkxMyAyMy4zMTA4IDIwLjg3NCAyMy43MjE4IDIxLjIzOUMyNC4xMzM4IDIxLjYwNCAyNC4xNzQ4IDIyLjIzMiAyMy44MTI4IDIyLjY0NUMyMy43MjU4IDIyLjc0NCAyMS42NTY4IDI1LjA2IDE3Ljg0ODggMjUuNjkxQzE3Ljc5MjggMjUuNzAxIDE3LjczNzggMjUuNzA1IDE3LjY4MzggMjUuNzA1Wk0yMC42MDQ4IDMwLjU2MkMyMC4xNzk4IDMwLjU2MiAxOS43ODU4IDMwLjI5IDE5LjY1MDggMjkuODY0QzE5LjQ4NDggMjkuMzM4IDE5Ljc3NjggMjguNzc1IDIwLjMwMjggMjguNjA5QzIyLjk5NTggMjcuNzU2IDI0LjE4MjggMjUuNzc5IDI0LjE5NDggMjUuNzU5QzI0LjQ3NDggMjUuMjgyIDI1LjA4NjggMjUuMTIyIDI1LjU2MjggMjUuNDAyQzI2LjAzOTggMjUuNjgxIDI2LjE5ODggMjYuMjk1IDI1LjkxOTggMjYuNzdDMjUuODU2OCAyNi44NzggMjQuMzI0OCAyOS40MzMgMjAuOTA2OCAzMC41MTRDMjAuODA1OCAzMC41NDcgMjAuNzAzOCAzMC41NjIgMjAuNjA0OCAzMC41NjJaTTE1Ljk4NTggMTkuODkyQzE1LjQ4OTggMTkuODkyIDE1LjA1ODggMTkuNTIzIDE0Ljk5NDggMTkuMDE3QzE0LjkyNTggMTguNDY5IDE1LjMxMzggMTcuOTY5IDE1Ljg2MTggMTcuODk5QzE4LjU1MDggMTcuNTU5IDIwLjUxODggMTUuOTI4IDIwLjUzNzggMTUuOTExQzIwLjk1OTggMTUuNTU3IDIxLjU5MDggMTUuNjA4IDIxLjk0NTggMTYuMDNDMjIuMzAxOCAxNi40NTEgMjIuMjUwOCAxNy4wOCAyMS44MzA4IDE3LjQzN0MyMS43MzM4IDE3LjUyIDE5LjQxMDggMTkuNDY2IDE2LjExMjggMTkuODgzQzE2LjA2OTggMTkuODg5IDE2LjAyNzggMTkuODkyIDE1Ljk4NTggMTkuODkyWk0xNC4xNjQ4IDE1LjEyNUMxMy43Mzk4IDE1LjEyNSAxMy4zNDU4IDE0Ljg1MiAxMy4yMTA4IDE0LjQyNEMxMy4wNDU4IDEzLjg5NyAxMy4zMzc4IDEzLjMzNiAxMy44NjQ4IDEzLjE3QzE2Ljk5NDggMTIuMTg3IDE4LjExNzggMTAuNDc4IDE4LjE2MzggMTAuNDA2QzE4LjQ1ODggOS45NDM5NyAxOS4wNzQ4IDkuODAwOTcgMTkuNTM4OCAxMC4wOTRDMjAuMDAzOCAxMC4zODYgMjAuMTQ5OCAxMC45OTMgMTkuODYyOCAxMS40NkMxOS44MDI4IDExLjU1NyAxOC4zNTY4IDEzLjg1NiAxNC40NjM4IDE1LjA3OUMxNC4zNjQ4IDE1LjExIDE0LjI2MzggMTUuMTI1IDE0LjE2NDggMTUuMTI1WiIgZmlsbD0iIzc0NEVBQSIvPgo8L3N2Zz4K";
var ideaImageUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMxIDEzLjkyQzMxIDIwLjM1OSAyNiAyMS4zNTkgMjYgMjcuMzZDMjYgMzAuNDU4IDIyLjg3NyAzMC43MTkgMjAuNSAzMC43MTlDMTguNDQ3IDMwLjcxOSAxMy45MTQgMjkuOTQgMTMuOTE0IDI3LjM1OEMxMy45MTQgMjEuMzYgOSAyMC4zNiA5IDEzLjkyQzkgNy44ODkgMTQuMjg1IDMgMjAuMDgzIDNDMjUuODgzIDMgMzEgNy44ODkgMzEgMTMuOTJaIiBmaWxsPSIjRkZEOTgzIi8+CjxwYXRoIGQ9Ik0yNC4xNjcgMzUuMzZDMjQuMTY3IDM2LjE4OCAyMS45MzMgMzcuODYgMjAgMzcuODZDMTguMDY3IDM3Ljg2IDE1LjgzMyAzNi4xODggMTUuODMzIDM1LjM2QzE1LjgzMyAzNC41MzIgMTguMDY2IDM0Ljg2IDIwIDM0Ljg2QzIxLjkzMyAzNC44NiAyNC4xNjcgMzQuNTMyIDI0LjE2NyAzNS4zNloiIGZpbGw9IiNDQ0Q2REQiLz4KPHBhdGggZD0iTTI0LjcwNyAxMy4xNTNDMjQuMzE2IDEyLjc2MiAyMy42ODQgMTIuNzYyIDIzLjI5MyAxMy4xNTNMMjAgMTYuNDQ2TDE2LjcwNyAxMy4xNTNDMTYuMzE2IDEyLjc2MiAxNS42ODQgMTIuNzYyIDE1LjI5MyAxMy4xNTNDMTQuOTAyIDEzLjU0NCAxNC45MDIgMTQuMTc2IDE1LjI5MyAxNC41NjdMMTkgMTguMjc0VjI4Ljg2QzE5IDI5LjQxMyAxOS40NDggMjkuODYgMjAgMjkuODZDMjAuNTUyIDI5Ljg2IDIxIDI5LjQxMyAyMSAyOC44NlYxOC4yNzRMMjQuNzA3IDE0LjU2N0MyNS4wOTggMTQuMTc2IDI1LjA5OCAxMy41NDQgMjQuNzA3IDEzLjE1M1oiIGZpbGw9IiNGRkNDNEQiLz4KPHBhdGggZD0iTTI2IDMzLjg2QzI2IDM0Ljk2NCAyNS4xMDQgMzUuODYgMjQgMzUuODZIMTZDMTQuODk2IDM1Ljg2IDE0IDM0Ljk2NCAxNCAzMy44NlYyNy44NkgyNlYzMy44NloiIGZpbGw9IiM5OUFBQjUiLz4KPHBhdGggZD0iTTEzLjk5ODkgMzQuODZDMTMuNTE4OSAzNC44NiAxMy4wOTQ5IDM0LjUxMyAxMy4wMTM5IDM0LjAyNEMxMi45MjI5IDMzLjQ4IDEzLjI5MDkgMzIuOTY0IDEzLjgzNTkgMzIuODc0TDI1LjgzNTkgMzAuODc0QzI2LjM3OTkgMzAuNzc2IDI2Ljg5NTkgMzEuMTUxIDI2Ljk4NTkgMzEuNjk2QzI3LjA3NjkgMzIuMjQgMjYuNzA4OSAzMi43NTYgMjYuMTYzOSAzMi44NDZMMTQuMTYzOSAzNC44NDZDMTQuMTA4OSAzNC44NTYgMTQuMDUyOSAzNC44NiAxMy45OTg5IDM0Ljg2Wk0xMy45OTg5IDMwLjg2QzEzLjUxODkgMzAuODYgMTMuMDk0OSAzMC41MTMgMTMuMDEzOSAzMC4wMjRDMTIuOTIyOSAyOS40OCAxMy4yOTA5IDI4Ljk2NCAxMy44MzU5IDI4Ljg3NEwyNS44MzU5IDI2Ljg3NEMyNi4zNzk5IDI2Ljc3NyAyNi44OTU5IDI3LjE1MSAyNi45ODU5IDI3LjY5NkMyNy4wNzY5IDI4LjI0IDI2LjcwODkgMjguNzU2IDI2LjE2MzkgMjguODQ2TDE0LjE2MzkgMzAuODQ2QzE0LjEwODkgMzAuODU2IDE0LjA1MjkgMzAuODYgMTMuOTk4OSAzMC44NloiIGZpbGw9IiNDQ0Q2REQiLz4KPC9zdmc+Cg==";
var thoughtImageUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM4IDE0Ljg3NUMzOCAxMS4wMDkgMzQuODY2IDcuODc1IDMxIDcuODc1QzI5LjgzMyA3Ljg3NSAyOC43MzUgOC4xNjUgMjcuNzY4IDguNjY5QzI1LjY4NiA1Ljg0MiAyMi4zNDMgNCAxOC41NjMgNEMxMy40MzEgNCA5LjA4OCA3LjM4IDcuNjQgMTIuMDM2QzQuOTgyIDEyLjY1MyAzIDE1LjAzIDMgMTcuODc1QzMgMjAuODU0IDUuMTc0IDIzLjMyIDguMDIxIDIzLjc4OEM4LjIzNyAyNy43MzcgMTEuNDk4IDMwLjg3NSAxNS41IDMwLjg3NUMxNy42NzYgMzAuODc1IDE5LjYzIDI5Ljk0MiAyMSAyOC40NjJDMjIuMzcgMjkuOTQyIDI0LjMyMyAzMC44NzUgMjYuNSAzMC44NzVDMzAuNjQzIDMwLjg3NSAzNCAyNy41MTggMzQgMjMuMzc1QzM0IDIyLjY2NSAzMy44OTUgMjEuOTgxIDMzLjcxMSAyMS4zM0MzNi4yMyAyMC4yNzEgMzggMTcuNzggMzggMTQuODc1WiIgZmlsbD0iIzg1QzhGOCIvPgo8cGF0aCBkPSJNNyAzNi44NzVDOC42NTY4NSAzNi44NzUgMTAgMzUuNTMxOSAxMCAzMy44NzVDMTAgMzIuMjE4MSA4LjY1Njg1IDMwLjg3NSA3IDMwLjg3NUM1LjM0MzE1IDMwLjg3NSA0IDMyLjIxODEgNCAzMy44NzVDNCAzNS41MzE5IDUuMzQzMTUgMzYuODc1IDcgMzYuODc1WiIgZmlsbD0iIzg1QzhGOCIvPgo8L3N2Zz4K";
function FeedbackSucessStep({
  onFeedbackRestartRequested
}) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("header", {
      children: /* @__PURE__ */ jsx(CloseButton, {})
    }), /* @__PURE__ */ jsxs("div", {
      className: "tw-font-sans tw-flex tw-flex-col tw-items-center tw-py-10 tw-w-[304px]",
      children: [/* @__PURE__ */ jsxs("svg", {
        width: "41",
        height: "40",
        viewBox: "0 0 41 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/* @__PURE__ */ jsx("path", {
          d: "M38.5 34C38.5 36.209 36.709 38 34.5 38H6.5C4.291 38 2.5 36.209 2.5 34V6C2.5 3.791 4.291 2 6.5 2H34.5C36.709 2 38.5 3.791 38.5 6V34Z",
          fill: "#77B255"
        }), /* @__PURE__ */ jsx("path", {
          d: "M31.78 8.36202C30.624 7.61102 29.076 7.94002 28.322 9.09802L17.436 25.877L12.407 21.227C11.393 20.289 9.81103 20.352 8.87403 21.365C7.93703 22.379 7.99903 23.961 9.01303 24.898L16.222 31.564C16.702 32.009 17.312 32.229 17.918 32.229C18.591 32.229 19.452 31.947 20.017 31.09C20.349 30.584 32.517 11.82 32.517 11.82C33.268 10.661 32.938 9.11302 31.78 8.36202Z",
          fill: "white"
        })]
      }), /* @__PURE__ */ jsx("span", {
        className: "tw-font-sans tw-text-white tw-text-xl tw-mt-2",
        children: "Agradecemos o feedback!"
      }), /* @__PURE__ */ jsx("button", {
        className: "tw-font-sans tw-text-white tw-py-2 tw-px-6 tw-mt-6 tw-bg-zinc-800 tw-rounded-md tw-border-transparent tw-text-sm tw-leading-6 hover:tw-bg-zinc-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-zinc-900 focus:tw-ring-brand-500 tw-transition-colors disabled:tw-opacity-50 disabled:hover:tw-bg-brand-500",
        onClick: onFeedbackRestartRequested,
        children: "Quero enviar outro"
      })]
    })]
  });
}
const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um Inseto"
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma Lampada"
    }
  },
  OTHER: {
    title: "Outros",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um bal\xE3o de pensamento"
    }
  }
};
function WidgetForm() {
  const [feedbackType, setFeedbackType] = react.exports.useState(null);
  const [feedbackSent, SetFeedbackSent] = react.exports.useState(false);
  function handleRestartFeedback() {
    SetFeedbackSent(false);
    setFeedbackType(null);
  }
  return /* @__PURE__ */ jsxs("div", {
    className: "tw-font-sans tw-bg-zinc-900 tw-p-4 tw-relative tw-rounded-2xl tw-mb-4 tw-flex tw-flex-col tw-items-center tw-shadow-lg tw-w-[calc(100vw-2rem)] md:tw-w-auto sm:tw-w-auto",
    children: [feedbackSent ? /* @__PURE__ */ jsx(FeedbackSucessStep, {
      onFeedbackRestartRequested: handleRestartFeedback
    }) : /* @__PURE__ */ jsx(Fragment, {
      children: !feedbackType ? /* @__PURE__ */ jsx(FeedbackTypeStep, {
        onFeedbackTypeChanged: setFeedbackType
      }) : /* @__PURE__ */ jsx(FeedbackContentStep, {
        feedbackType,
        onFeedbackRestartRequested: handleRestartFeedback,
        onFeedbackSent: () => SetFeedbackSent(true)
      })
    }), /* @__PURE__ */ jsxs("footer", {
      className: "tw-font-sans tw-text-xs tw-text-neutral-400",
      children: ["Desenvolvido por ", /* @__PURE__ */ jsx("a", {
        className: "tw-font-sans tw-underline tw-underline-offset-2 tw-text-inherit",
        href: "https://www.linkedin.com/in/agnaldocordeiro/",
        children: "AgnaldoCordeiro"
      })]
    })]
  });
}
function Widget() {
  return /* @__PURE__ */ jsxs(tt, {
    className: "tw-absolute tw-bottom-4 tw-right-4 md:tw-bottom-8 md:tw-right-8 tw-flex tw-flex-col tw-items-end tw-font-sans",
    children: [/* @__PURE__ */ jsx(tt.Panel, {
      children: /* @__PURE__ */ jsx(WidgetForm, {})
    }), /* @__PURE__ */ jsxs(tt.Button, {
      className: "tw-bg-brand-500 tw-rounded-full tw-px-3 tw-h-12 tw-text-white tw-flex tw-items-center tw-group tw-border-none tw-font-sans",
      children: [/* @__PURE__ */ jsx(ChatTeardropDots$1, {
        className: "tw-w-6 tw-h-6"
      }), /* @__PURE__ */ jsx("span", {
        className: "tw-font-sans tw-max-w-0 tw-overflow-hidden group-hover:tw-max-w-xs tw-transition-all tw-duration-500 tw-ease-linear",
        children: /* @__PURE__ */ jsx("span", {
          className: "tw-font-sans tw-p-2",
          children: "Feedback"
        })
      })]
    })]
  });
}
function App() {
  return /* @__PURE__ */ jsx(Widget, {});
}
var global = "";
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(App, {})
}));
