/* eslint-disable */
'use client';
import { __export, } from './chunk-6C3VEZWH.js';

// https :https://framerusercontent.com/modules/waKcvjbslSC7rFQ1SrGC/YLQ9NHDl0w0KOCprElla/C6ZYtBmll.js
import { jsx as _jsx8, jsxs as _jsxs6, } from 'react/jsx-runtime';
import {
  addFonts as addFonts6,
  addPropertyControls as addPropertyControls8,
  ControlType as ControlType11,
  cx as cx6,
  getFonts as getFonts5,
  RichText as RichText5,
  SVG as SVG6,
  useActiveVariantCallback as useActiveVariantCallback4,
  useLocaleInfo as useLocaleInfo6,
  useOnVariantChange,
  useVariantState as useVariantState6,
  withCSS as withCSS8,
} from 'unframer';
import { LayoutGroup as LayoutGroup6, motion as motion7, MotionConfigContext as MotionConfigContext6, } from 'unframer';
import * as React8 from 'react';

// https :https://framerusercontent.com/modules/Oud72c2V1Mr3Jz9fGInx/JOR3KhPFd8hglGOz5UeE/C_odUWZqr.js
import { jsx as _jsx6, jsxs as _jsxs4, } from 'react/jsx-runtime';
import {
  addFonts as addFonts4,
  addPropertyControls as addPropertyControls6,
  ControlType as ControlType9,
  cx as cx4,
  getFonts as getFonts3,
  getPropertyControls as getPropertyControls2,
  RichText as RichText3,
  SVG as SVG4,
  useActiveVariantCallback as useActiveVariantCallback2,
  useLocaleInfo as useLocaleInfo4,
  useVariantState as useVariantState4,
  withCSS as withCSS6,
} from 'unframer';
import { LayoutGroup as LayoutGroup4, motion as motion5, MotionConfigContext as MotionConfigContext4, } from 'unframer';
import * as React6 from 'react';

// https :https://framerusercontent.com/modules/vgSbxmWWvbgW6ShllXld/9oZlwlOxsp6zJVFpVkIp/Typewriter.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import { addPropertyControls, ControlType, RenderTarget, withCSS, } from 'unframer';

// https :https://esm.sh/stable/react@18.2.0/esnext/react.mjs
var react_exports = {};
__export(react_exports, {
  Children: () => le,
  Component: () => ae,
  Fragment: () => pe,
  Profiler: () => ye,
  PureComponent: () => de,
  StrictMode: () => _e,
  Suspense: () => me,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => he,
  cloneElement: () => ve,
  createContext: () => Se,
  createElement: () => Ee,
  createFactory: () => Re,
  createRef: () => Ce,
  default: () => We,
  forwardRef: () => ke,
  isValidElement: () => we,
  lazy: () => be,
  memo: () => $e,
  startTransition: () => xe,
  unstable_act: () => Oe,
  useCallback: () => je,
  useContext: () => Ie,
  useDebugValue: () => ge,
  useDeferredValue: () => Pe,
  useEffect: () => Te,
  useId: () => De,
  useImperativeHandle: () => Ve,
  useInsertionEffect: () => Le,
  useLayoutEffect: () => Ne,
  useMemo: () => Fe,
  useReducer: () => Ue,
  useRef: () => qe,
  useState: () => Ae,
  useSyncExternalStore: () => Me,
  useTransition: () => ze,
  version: () => Be,
},);
var z = Object.create;
var E = Object.defineProperty;
var B = Object.getOwnPropertyDescriptor;
var H = Object.getOwnPropertyNames;
var W = Object.getPrototypeOf;
var Y = Object.prototype.hasOwnProperty;
var x = (e3, t3,) => () => (t3 || e3((t3 = { exports: {}, }).exports, t3,), t3.exports);
var G = (e3, t3,) => {
  for (var r4 in t3) {
    E(e3, r4, { get: t3[r4], enumerable: true, },);
  }
};
var S = (e3, t3, r4, u2,) => {
  if (t3 && typeof t3 == 'object' || typeof t3 == 'function') {
    for (let o4 of H(t3,)) {
      !Y.call(e3, o4,) && o4 !== r4 && E(e3, o4, { get: () => t3[o4], enumerable: !(u2 = B(t3, o4,)) || u2.enumerable, },);
    }
  }
  return e3;
};
var y = (e3, t3, r4,) => (S(e3, t3, 'default',), r4 && S(r4, t3, 'default',));
var O = (
  e3,
  t3,
  r4,
) => (r4 = e3 != null ? z(W(e3,),) : {}, S(t3 || !e3 || !e3.__esModule ? E(r4, 'default', { value: e3, enumerable: true, },) : r4, e3,));
var U = x((n4,) => {
  'use strict';
  var _2 = Symbol.for('react.element',),
    J = Symbol.for('react.portal',),
    K2 = Symbol.for('react.fragment',),
    Q = Symbol.for('react.strict_mode',),
    X3 = Symbol.for('react.profiler',),
    Z = Symbol.for('react.provider',),
    ee = Symbol.for('react.context',),
    te = Symbol.for('react.forward_ref',),
    re = Symbol.for('react.suspense',),
    ne = Symbol.for('react.memo',),
    oe = Symbol.for('react.lazy',),
    j3 = Symbol.iterator;
  function ue(e3,) {
    return e3 === null || typeof e3 != 'object' ? null : (e3 = j3 && e3[j3] || e3['@@iterator'], typeof e3 == 'function' ? e3 : null);
  }
  var P = {
      isMounted: function () {
        return false;
      },
      enqueueForceUpdate: function () {
      },
      enqueueReplaceState: function () {
      },
      enqueueSetState: function () {
      },
    },
    T = Object.assign,
    D3 = {};
  function d4(e3, t3, r4,) {
    this.props = e3, this.context = t3, this.refs = D3, this.updater = r4 || P;
  }
  d4.prototype.isReactComponent = {};
  d4.prototype.setState = function (e3, t3,) {
    if (typeof e3 != 'object' && typeof e3 != 'function' && e3 != null) {
      throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.',);
    }
    this.updater.enqueueSetState(this, e3, t3, 'setState',);
  };
  d4.prototype.forceUpdate = function (e3,) {
    this.updater.enqueueForceUpdate(this, e3, 'forceUpdate',);
  };
  function V() {
  }
  V.prototype = d4.prototype;
  function C3(e3, t3, r4,) {
    this.props = e3, this.context = t3, this.refs = D3, this.updater = r4 || P;
  }
  var k2 = C3.prototype = new V();
  k2.constructor = C3;
  T(k2, d4.prototype,);
  k2.isPureReactComponent = true;
  var I = Array.isArray,
    L = Object.prototype.hasOwnProperty,
    w4 = { current: null, },
    N = { key: true, ref: true, __self: true, __source: true, };
  function F2(e3, t3, r4,) {
    var u2, o4 = {}, c3 = null, f3 = null;
    if (t3 != null) {
      for (u2 in t3.ref !== void 0 && (f3 = t3.ref), t3.key !== void 0 && (c3 = '' + t3.key), t3) {
        L.call(t3, u2,) && !N.hasOwnProperty(u2,) && (o4[u2] = t3[u2]);
      }
    }
    var i3 = arguments.length - 2;
    if (i3 === 1) {
      o4.children = r4;
    } else if (1 < i3) {
      for (var s4 = Array(i3,), a5 = 0; a5 < i3; a5++) {
        s4[a5] = arguments[a5 + 2];
      }
      o4.children = s4;
    }
    if (e3 && e3.defaultProps) {
      for (u2 in i3 = e3.defaultProps, i3) {
        o4[u2] === void 0 && (o4[u2] = i3[u2]);
      }
    }
    return { $$typeof: _2, type: e3, key: c3, ref: f3, props: o4, _owner: w4.current, };
  }
  function se(e3, t3,) {
    return { $$typeof: _2, type: e3.type, key: t3, ref: e3.ref, props: e3.props, _owner: e3._owner, };
  }
  function b3(e3,) {
    return typeof e3 == 'object' && e3 !== null && e3.$$typeof === _2;
  }
  function ce(e3,) {
    var t3 = { '=': '=0', ':': '=2', };
    return '$' + e3.replace(/[=:]/g, function (r4,) {
      return t3[r4];
    },);
  }
  var g4 = /\/+/g;
  function R4(e3, t3,) {
    return typeof e3 == 'object' && e3 !== null && e3.key != null ? ce('' + e3.key,) : t3.toString(36,);
  }
  function h4(e3, t3, r4, u2, o4,) {
    var c3 = typeof e3;
    (c3 === 'undefined' || c3 === 'boolean') && (e3 = null);
    var f3 = false;
    if (e3 === null) {
      f3 = true;
    } else {
      switch (c3) {
        case 'string':
        case 'number':
          f3 = true;
          break;
        case 'object':
          switch (e3.$$typeof) {
            case _2:
            case J:
              f3 = true;
          }
      }
    }
    if (f3) {
      return f3 = e3,
        o4 = o4(f3,),
        e3 = u2 === '' ? '.' + R4(f3, 0,) : u2,
        I(o4,)
          ? (r4 = '',
            e3 != null && (r4 = e3.replace(g4, '$&/',) + '/'),
            h4(o4, t3, r4, '', function (a5,) {
              return a5;
            },))
          : o4 != null &&
            (b3(o4,) && (o4 = se(o4, r4 + (!o4.key || f3 && f3.key === o4.key ? '' : ('' + o4.key).replace(g4, '$&/',) + '/') + e3,)),
              t3.push(o4,)),
        1;
    }
    if (f3 = 0, u2 = u2 === '' ? '.' : u2 + ':', I(e3,)) {
      for (var i3 = 0; i3 < e3.length; i3++) {
        c3 = e3[i3];
        var s4 = u2 + R4(c3, i3,);
        f3 += h4(c3, t3, r4, s4, o4,);
      }
    } else if (s4 = ue(e3,), typeof s4 == 'function') {
      for (e3 = s4.call(e3,), i3 = 0; !(c3 = e3.next()).done;) {
        c3 = c3.value, s4 = u2 + R4(c3, i3++,), f3 += h4(c3, t3, r4, s4, o4,);
      }
    } else if (c3 === 'object') {
      throw t3 = String(e3,),
        Error(
          'Objects are not valid as a React child (found: ' +
            (t3 === '[object Object]' ? 'object with keys {' + Object.keys(e3,).join(', ',) + '}' : t3) +
            '). If you meant to render a collection of children, use an array instead.',
        );
    }
    return f3;
  }
  function m4(e3, t3, r4,) {
    if (e3 == null) {
      return e3;
    }
    var u2 = [], o4 = 0;
    return h4(e3, u2, '', '', function (c3,) {
      return t3.call(r4, c3, o4++,);
    },),
      u2;
  }
  function ie(e3,) {
    if (e3._status === -1) {
      var t3 = e3._result;
      t3 = t3(),
        t3.then(function (r4,) {
          (e3._status === 0 || e3._status === -1) && (e3._status = 1, e3._result = r4);
        }, function (r4,) {
          (e3._status === 0 || e3._status === -1) && (e3._status = 2, e3._result = r4);
        },),
        e3._status === -1 && (e3._status = 0, e3._result = t3);
    }
    if (e3._status === 1) {
      return e3._result.default;
    }
    throw e3._result;
  }
  var l4 = { current: null, },
    v4 = { transition: null, },
    fe = { ReactCurrentDispatcher: l4, ReactCurrentBatchConfig: v4, ReactCurrentOwner: w4, };
  n4.Children = {
    map: m4,
    forEach: function (e3, t3, r4,) {
      m4(e3, function () {
        t3.apply(this, arguments,);
      }, r4,);
    },
    count: function (e3,) {
      var t3 = 0;
      return m4(e3, function () {
        t3++;
      },),
        t3;
    },
    toArray: function (e3,) {
      return m4(e3, function (t3,) {
        return t3;
      },) || [];
    },
    only: function (e3,) {
      if (!b3(e3,)) {
        throw Error('React.Children.only expected to receive a single React element child.',);
      }
      return e3;
    },
  };
  n4.Component = d4;
  n4.Fragment = K2;
  n4.Profiler = X3;
  n4.PureComponent = C3;
  n4.StrictMode = Q;
  n4.Suspense = re;
  n4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fe;
  n4.cloneElement = function (e3, t3, r4,) {
    if (e3 == null) {
      throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e3 + '.',);
    }
    var u2 = T({}, e3.props,), o4 = e3.key, c3 = e3.ref, f3 = e3._owner;
    if (t3 != null) {
      if (t3.ref !== void 0 && (c3 = t3.ref, f3 = w4.current), t3.key !== void 0 && (o4 = '' + t3.key), e3.type && e3.type.defaultProps) {
        var i3 = e3.type.defaultProps;
      }
      for (s4 in t3) {
        L.call(t3, s4,) && !N.hasOwnProperty(s4,) && (u2[s4] = t3[s4] === void 0 && i3 !== void 0 ? i3[s4] : t3[s4]);
      }
    }
    var s4 = arguments.length - 2;
    if (s4 === 1) {
      u2.children = r4;
    } else if (1 < s4) {
      i3 = Array(s4,);
      for (var a5 = 0; a5 < s4; a5++) {
        i3[a5] = arguments[a5 + 2];
      }
      u2.children = i3;
    }
    return { $$typeof: _2, type: e3.type, key: o4, ref: c3, props: u2, _owner: f3, };
  };
  n4.createContext = function (e3,) {
    return e3 = {
      $$typeof: ee,
      _currentValue: e3,
      _currentValue2: e3,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    },
      e3.Provider = { $$typeof: Z, _context: e3, },
      e3.Consumer = e3;
  };
  n4.createElement = F2;
  n4.createFactory = function (e3,) {
    var t3 = F2.bind(null, e3,);
    return t3.type = e3, t3;
  };
  n4.createRef = function () {
    return { current: null, };
  };
  n4.forwardRef = function (e3,) {
    return { $$typeof: te, render: e3, };
  };
  n4.isValidElement = b3;
  n4.lazy = function (e3,) {
    return { $$typeof: oe, _payload: { _status: -1, _result: e3, }, _init: ie, };
  };
  n4.memo = function (e3, t3,) {
    return { $$typeof: ne, type: e3, compare: t3 === void 0 ? null : t3, };
  };
  n4.startTransition = function (e3,) {
    var t3 = v4.transition;
    v4.transition = {};
    try {
      e3();
    } finally {
      v4.transition = t3;
    }
  };
  n4.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.',);
  };
  n4.useCallback = function (e3, t3,) {
    return l4.current.useCallback(e3, t3,);
  };
  n4.useContext = function (e3,) {
    return l4.current.useContext(e3,);
  };
  n4.useDebugValue = function () {
  };
  n4.useDeferredValue = function (e3,) {
    return l4.current.useDeferredValue(e3,);
  };
  n4.useEffect = function (e3, t3,) {
    return l4.current.useEffect(e3, t3,);
  };
  n4.useId = function () {
    return l4.current.useId();
  };
  n4.useImperativeHandle = function (e3, t3, r4,) {
    return l4.current.useImperativeHandle(e3, t3, r4,);
  };
  n4.useInsertionEffect = function (e3, t3,) {
    return l4.current.useInsertionEffect(e3, t3,);
  };
  n4.useLayoutEffect = function (e3, t3,) {
    return l4.current.useLayoutEffect(e3, t3,);
  };
  n4.useMemo = function (e3, t3,) {
    return l4.current.useMemo(e3, t3,);
  };
  n4.useReducer = function (e3, t3, r4,) {
    return l4.current.useReducer(e3, t3, r4,);
  };
  n4.useRef = function (e3,) {
    return l4.current.useRef(e3,);
  };
  n4.useState = function (e3,) {
    return l4.current.useState(e3,);
  };
  n4.useSyncExternalStore = function (e3, t3, r4,) {
    return l4.current.useSyncExternalStore(e3, t3, r4,);
  };
  n4.useTransition = function () {
    return l4.current.useTransition();
  };
  n4.version = '18.2.0';
},);
var $ = x((Je, q2,) => {
  'use strict';
  q2.exports = U();
},);
var p = {};
G(p, {
  Children: () => le,
  Component: () => ae,
  Fragment: () => pe,
  Profiler: () => ye,
  PureComponent: () => de,
  StrictMode: () => _e,
  Suspense: () => me,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => he,
  cloneElement: () => ve,
  createContext: () => Se,
  createElement: () => Ee,
  createFactory: () => Re,
  createRef: () => Ce,
  default: () => We,
  forwardRef: () => ke,
  isValidElement: () => we,
  lazy: () => be,
  memo: () => $e,
  startTransition: () => xe,
  unstable_act: () => Oe,
  useCallback: () => je,
  useContext: () => Ie,
  useDebugValue: () => ge,
  useDeferredValue: () => Pe,
  useEffect: () => Te,
  useId: () => De,
  useImperativeHandle: () => Ve,
  useInsertionEffect: () => Le,
  useLayoutEffect: () => Ne,
  useMemo: () => Fe,
  useReducer: () => Ue,
  useRef: () => qe,
  useState: () => Ae,
  useSyncExternalStore: () => Me,
  useTransition: () => ze,
  version: () => Be,
},);
var M = O($(),);
y(p, O($(),),);
var {
  Children: le,
  Component: ae,
  Fragment: pe,
  Profiler: ye,
  PureComponent: de,
  StrictMode: _e,
  Suspense: me,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: he,
  cloneElement: ve,
  createContext: Se,
  createElement: Ee,
  createFactory: Re,
  createRef: Ce,
  forwardRef: ke,
  isValidElement: we,
  lazy: be,
  memo: $e,
  startTransition: xe,
  unstable_act: Oe,
  useCallback: je,
  useContext: Ie,
  useDebugValue: ge,
  useDeferredValue: Pe,
  useEffect: Te,
  useId: De,
  useImperativeHandle: Ve,
  useInsertionEffect: Le,
  useLayoutEffect: Ne,
  useMemo: Fe,
  useReducer: Ue,
  useRef: qe,
  useState: Ae,
  useSyncExternalStore: Me,
  useTransition: ze,
  version: Be,
} = M;
var { default: A, ...He } = M;
var We = A !== void 0 ? A : He;

// https :https://esm.sh/v135/node_events.js
var a = typeof Reflect == 'object' ? Reflect : null;
var m = a && typeof a.apply == 'function' ? a.apply : function (e3, n4, r4,) {
  return Function.prototype.apply.call(e3, n4, r4,);
};
var v;
a && typeof a.ownKeys == 'function' ? v = a.ownKeys : Object.getOwnPropertySymbols
  ? v = function (e3,) {
    return Object.getOwnPropertyNames(e3,).concat(Object.getOwnPropertySymbols(e3,),);
  }
  : v = function (e3,) {
    return Object.getOwnPropertyNames(e3,);
  };
function C(t3,) {
  console && console.warn && console.warn(t3,);
}
var p2 = Number.isNaN || function (e3,) {
  return e3 !== e3;
};
function o() {
  d.call(this,);
}
o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
var l = 10;
function h(t3,) {
  if (typeof t3 != 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t3,);
  }
}
Object.defineProperty(o, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return l;
  },
  set: function (t3,) {
    if (typeof t3 != 'number' || t3 < 0 || p2(t3,)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t3 + '.',);
    }
    l = t3;
  },
},);
function d() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this,)._events) &&
  (this._events = /* @__PURE__ */ Object.create(null,), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}
o.init = d,
  o.prototype.setMaxListeners = function (e3,) {
    if (typeof e3 != 'number' || e3 < 0 || p2(e3,)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e3 + '.',);
    }
    return this._maxListeners = e3, this;
  };
function y2(t3,) {
  return t3._maxListeners === void 0 ? o.defaultMaxListeners : t3._maxListeners;
}
o.prototype.getMaxListeners = function () {
  return y2(this,);
},
  o.prototype.emit = function (e3,) {
    for (var n4 = [], r4 = 1; r4 < arguments.length; r4++) {
      n4.push(arguments[r4],);
    }
    var i3 = e3 === 'error', f3 = this._events;
    if (f3 !== void 0) {
      i3 = i3 && f3.error === void 0;
    } else if (!i3) {
      return false;
    }
    if (i3) {
      var s4;
      if (n4.length > 0 && (s4 = n4[0]), s4 instanceof Error) {
        throw s4;
      }
      var u2 = new Error('Unhandled error.' + (s4 ? ' (' + s4.message + ')' : ''),);
      throw u2.context = s4, u2;
    }
    var c3 = f3[e3];
    if (c3 === void 0) {
      return false;
    }
    if (typeof c3 == 'function') {
      m(c3, this, n4,);
    } else {
      for (var L = c3.length, x4 = E2(c3, L,), r4 = 0; r4 < L; ++r4) {
        m(x4[r4], this, n4,);
      }
    }
    return true;
  };
function g(t3, e3, n4, r4,) {
  var i3, f3, s4;
  if (
    h(n4,),
      f3 = t3._events,
      f3 === void 0
        ? (f3 = t3._events = /* @__PURE__ */ Object.create(null,), t3._eventsCount = 0)
        : (f3.newListener !== void 0 && (t3.emit('newListener', e3, n4.listener ? n4.listener : n4,), f3 = t3._events), s4 = f3[e3]),
      s4 === void 0
  ) {
    s4 = f3[e3] = n4, ++t3._eventsCount;
  } else if (
    typeof s4 == 'function' ? s4 = f3[e3] = r4 ? [n4, s4,] : [s4, n4,] : r4 ? s4.unshift(n4,) : s4.push(n4,),
      i3 = y2(t3,),
      i3 > 0 && s4.length > i3 && !s4.warned
  ) {
    s4.warned = true;
    var u2 = new Error(
      'Possible EventEmitter memory leak detected. ' + s4.length + ' ' + String(e3,) +
        ' listeners added. Use emitter.setMaxListeners() to increase limit',
    );
    u2.name = 'MaxListenersExceededWarning', u2.emitter = t3, u2.type = e3, u2.count = s4.length, C(u2,);
  }
  return t3;
}
o.prototype.addListener = function (e3, n4,) {
  return g(this, e3, n4, false,);
},
  o.prototype.on = o.prototype.addListener,
  o.prototype.prependListener = function (e3, n4,) {
    return g(this, e3, n4, true,);
  };
function R() {
  if (!this.fired) {
    return this.target.removeListener(this.type, this.wrapFn,),
      this.fired = true,
      arguments.length === 0 ? this.listener.call(this.target,) : this.listener.apply(this.target, arguments,);
  }
}
function w(t3, e3, n4,) {
  var r4 = { fired: false, wrapFn: void 0, target: t3, type: e3, listener: n4, }, i3 = R.bind(r4,);
  return i3.listener = n4, r4.wrapFn = i3, i3;
}
o.prototype.once = function (e3, n4,) {
  return h(n4,), this.on(e3, w(this, e3, n4,),), this;
},
  o.prototype.prependOnceListener = function (e3, n4,) {
    return h(n4,), this.prependListener(e3, w(this, e3, n4,),), this;
  },
  o.prototype.removeListener = function (e3, n4,) {
    var r4, i3, f3, s4, u2;
    if (h(n4,), i3 = this._events, i3 === void 0) {
      return this;
    }
    if (r4 = i3[e3], r4 === void 0) {
      return this;
    }
    if (r4 === n4 || r4.listener === n4) {
      --this._eventsCount === 0
        ? this._events = /* @__PURE__ */ Object.create(null,)
        : (delete i3[e3], i3.removeListener && this.emit('removeListener', e3, r4.listener || n4,));
    } else if (typeof r4 != 'function') {
      for (f3 = -1, s4 = r4.length - 1; s4 >= 0; s4--) {
        if (r4[s4] === n4 || r4[s4].listener === n4) {
          u2 = r4[s4].listener, f3 = s4;
          break;
        }
      }
      if (f3 < 0) {
        return this;
      }
      f3 === 0 ? r4.shift() : M2(r4, f3,),
        r4.length === 1 && (i3[e3] = r4[0]),
        i3.removeListener !== void 0 && this.emit('removeListener', e3, u2 || n4,);
    }
    return this;
  },
  o.prototype.off = o.prototype.removeListener,
  o.prototype.removeAllListeners = function (e3,) {
    var n4, r4, i3;
    if (r4 = this._events, r4 === void 0) {
      return this;
    }
    if (r4.removeListener === void 0) {
      return arguments.length === 0
        ? (this._events = /* @__PURE__ */ Object.create(null,), this._eventsCount = 0)
        : r4[e3] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null,) : delete r4[e3]),
        this;
    }
    if (arguments.length === 0) {
      var f3 = Object.keys(r4,), s4;
      for (i3 = 0; i3 < f3.length; ++i3) {
        s4 = f3[i3], s4 !== 'removeListener' && this.removeAllListeners(s4,);
      }
      return this.removeAllListeners('removeListener',), this._events = /* @__PURE__ */ Object.create(null,), this._eventsCount = 0, this;
    }
    if (n4 = r4[e3], typeof n4 == 'function') {
      this.removeListener(e3, n4,);
    } else if (n4 !== void 0) {
      for (i3 = n4.length - 1; i3 >= 0; i3--) {
        this.removeListener(e3, n4[i3],);
      }
    }
    return this;
  };
function _(t3, e3, n4,) {
  var r4 = t3._events;
  if (r4 === void 0) {
    return [];
  }
  var i3 = r4[e3];
  return i3 === void 0 ? [] : typeof i3 == 'function' ? n4 ? [i3.listener || i3,] : [i3,] : n4 ? j(i3,) : E2(i3, i3.length,);
}
o.prototype.listeners = function (e3,) {
  return _(this, e3, true,);
},
  o.prototype.rawListeners = function (e3,) {
    return _(this, e3, false,);
  };
function b(t3, e3,) {
  return typeof t3.listenerCount == 'function' ? t3.listenerCount(e3,) : o.prototype.listenerCount.call(t3, e3,);
}
o.listenerCount = b,
  o.prototype.listenerCount = function (t3,) {
    var e3 = this._events;
    if (e3 !== void 0) {
      var n4 = e3[t3];
      if (typeof n4 == 'function') {
        return 1;
      }
      if (n4 !== void 0) {
        return n4.length;
      }
    }
    return 0;
  },
  o.prototype.eventNames = function () {
    return this._eventsCount > 0 ? v(this._events,) : [];
  };
function E2(t3, e3,) {
  for (var n4 = new Array(e3,), r4 = 0; r4 < e3; ++r4) {
    n4[r4] = t3[r4];
  }
  return n4;
}
function M2(t3, e3,) {
  for (; e3 + 1 < t3.length; e3++) {
    t3[e3] = t3[e3 + 1];
  }
  t3.pop();
}
function j(t3,) {
  for (var e3 = new Array(t3.length,), n4 = 0; n4 < e3.length; ++n4) {
    e3[n4] = t3[n4].listener || t3[n4];
  }
  return e3;
}

// https :https://esm.sh/v135/node_process.js
function s(t3,) {
  const e3 = performance.now(), r4 = Math.floor(e3 / 1e3,), o4 = Math.floor(e3 * 1e6 - r4 * 1e9,);
  if (!t3) {
    return [r4, o4,];
  }
  const [i3, c3,] = t3;
  return [r4 - i3, o4 - c3,];
}
s.bigint = function () {
  const [t3, e3,] = s();
  return BigInt(t3,) * 1000000000n + BigInt(e3,);
};
var p3 = class extends o {
  title = 'browser';
  browser = true;
  env = {};
  argv = [];
  pid = 0;
  arch = 'unknown';
  platform = 'browser';
  version = '';
  versions = {};
  emitWarning = () => {
    throw new Error('process.emitWarning is not supported',);
  };
  binding = () => {
    throw new Error('process.binding is not supported',);
  };
  cwd = () => {
    throw new Error('process.cwd is not supported',);
  };
  chdir = (e3,) => {
    throw new Error('process.chdir is not supported',);
  };
  umask = () => 18;
  nextTick = (e3, ...r4) => queueMicrotask(() => e3(...r4,));
  hrtime = s;
  constructor() {
    super();
  }
};
var n = new p3();
if (typeof Deno < 'u') {
  n.name = 'deno',
    n.browser = false,
    n.pid = Deno.pid,
    n.cwd = () => Deno.cwd(),
    n.chdir = (e3,) => Deno.chdir(e3,),
    n.arch = Deno.build.arch,
    n.platform = Deno.build.os,
    n.version = 'v18.12.1',
    n.versions = {
      node: '18.12.1',
      uv: '1.43.0',
      zlib: '1.2.11',
      brotli: '1.0.9',
      ares: '1.18.1',
      modules: '108',
      nghttp2: '1.47.0',
      napi: '8',
      llhttp: '6.0.10',
      openssl: '3.0.7+quic',
      cldr: '41.0',
      icu: '71.1',
      tz: '2022b',
      unicode: '14.0',
      ngtcp2: '0.8.1',
      nghttp3: '0.7.0',
      ...Deno.version,
    },
    n.env = new Proxy({}, {
      get(e3, r4,) {
        return Deno.env.get(String(r4,),);
      },
      ownKeys: () => Reflect.ownKeys(Deno.env.toObject(),),
      getOwnPropertyDescriptor: (e3, r4,) => {
        const o4 = Deno.env.toObject();
        if (r4 in Deno.env.toObject()) {
          const i3 = { enumerable: true, configurable: true, };
          return typeof r4 == 'string' && (i3.value = o4[r4]), i3;
        }
      },
      set(e3, r4, o4,) {
        return Deno.env.set(String(r4,), String(o4,),), o4;
      },
    },);
  const t3 = ['', '', ...Deno.args,];
  Object.defineProperty(t3, '0', { get: Deno.execPath, },),
    Object.defineProperty(t3, '1', {
      get: () => Deno.mainModule.startsWith('file:',) ? new URL(Deno.mainModule,).pathname : join(Deno.cwd(), '$deno$node.js',),
    },),
    n.argv = t3;
} else {
  let t3 = '/';
  n.cwd = () => t3, n.chdir = (e3,) => t3 = e3;
}
var a2 = n;

// https :https://esm.sh/v135/typewriter-effect@2.21.0/esnext/typewriter-effect.mjs
var require2 = (n4,) => {
  const e3 = (m4,) => typeof m4.default < 'u' ? m4.default : m4, c3 = (m4,) => Object.assign({}, m4,);
  switch (n4) {
    case 'react':
      return e3(react_exports,);
    default:
      throw new Error('module "' + n4 + '" not found',);
  }
};
var Et = Object.create;
var at = Object.defineProperty;
var Ot = Object.getOwnPropertyDescriptor;
var Tt = Object.getOwnPropertyNames;
var At = Object.getPrototypeOf;
var St = Object.prototype.hasOwnProperty;
var vt =
  ((C3,) =>
    typeof require2 < 'u'
      ? require2
      : typeof Proxy < 'u'
      ? new Proxy(C3, { get: (P, z2,) => (typeof require2 < 'u' ? require2 : P)[z2], },)
      : C3)(function (C3,) {
      if (typeof require2 < 'u') {
        return require2.apply(this, arguments,);
      }
      throw Error('Dynamic require of "' + C3 + '" is not supported',);
    },);
var Nt = (C3, P,) => () => (P || C3((P = { exports: {}, }).exports, P,), P.exports);
var Pt = (C3, P,) => {
  for (var z2 in P) {
    at(C3, z2, { get: P[z2], enumerable: true, },);
  }
};
var ot = (C3, P, z2, R4,) => {
  if (P && typeof P == 'object' || typeof P == 'function') {
    for (let B3 of Tt(P,)) {
      !St.call(C3, B3,) && B3 !== z2 && at(C3, B3, { get: () => P[B3], enumerable: !(R4 = Ot(P, B3,)) || R4.enumerable, },);
    }
  }
  return C3;
};
var q = (C3, P, z2,) => (ot(C3, P, 'default',), z2 && ot(z2, P, 'default',));
var dt = (
  C3,
  P,
  z2,
) => (z2 = C3 != null ? Et(At(C3,),) : {}, ot(P || !C3 || !C3.__esModule ? at(z2, 'default', { value: C3, enumerable: true, },) : z2, C3,));
var st = Nt((X3, it,) => {
  (function (C3, P,) {
    typeof X3 == 'object' && typeof it == 'object'
      ? it.exports = P(vt('react',),)
      : typeof define == 'function' && define.amd
      ? define('Typewriter', ['react',], P,)
      : typeof X3 == 'object'
      ? X3.Typewriter = P(vt('react',),)
      : C3.Typewriter = P(C3.react,);
  })(typeof self < 'u' ? self : X3, (C3,) =>
    (() => {
      var P = {
          7403: (e3, o4, t3,) => {
            'use strict';
            t3.d(o4, { default: () => V, },);
            var r4 = t3(4087,), i3 = t3.n(r4,);
            let a5 = function (x4,) {
                return new RegExp(/<[a-z][\s\S]*>/i,).test(x4,);
              },
              n4 = function (x4, h4,) {
                return Math.floor(Math.random() * (h4 - x4 + 1),) + x4;
              };
            var u2 = 'TYPE_CHARACTER',
              c3 = 'REMOVE_CHARACTER',
              p6 = 'REMOVE_ALL',
              f3 = 'REMOVE_LAST_VISIBLE_NODE',
              l4 = 'PAUSE_FOR',
              v4 = 'CALL_FUNCTION',
              y5 = 'ADD_HTML_TAG_ELEMENT',
              d4 = 'CHANGE_DELETE_SPEED',
              g4 = 'CHANGE_DELAY',
              _2 = 'CHANGE_CURSOR',
              E3 = 'PASTE_STRING',
              A3 = 'HTML_TAG';
            function O2(x4,) {
              return O2 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (h4,) {
                  return typeof h4;
                }
                : function (h4,) {
                  return h4 && typeof Symbol == 'function' && h4.constructor === Symbol && h4 !== Symbol.prototype ? 'symbol' : typeof h4;
                },
                O2(x4,);
            }
            function m4(x4, h4,) {
              var T = Object.keys(x4,);
              if (Object.getOwnPropertySymbols) {
                var j3 = Object.getOwnPropertySymbols(x4,);
                h4 && (j3 = j3.filter(function (H3,) {
                  return Object.getOwnPropertyDescriptor(x4, H3,).enumerable;
                },)), T.push.apply(T, j3,);
              }
              return T;
            }
            function w4(x4,) {
              for (var h4 = 1; h4 < arguments.length; h4++) {
                var T = arguments[h4] != null ? arguments[h4] : {};
                h4 % 2
                  ? m4(Object(T,), true,).forEach(function (j3,) {
                    S2(x4, j3, T[j3],);
                  },)
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(x4, Object.getOwnPropertyDescriptors(T,),)
                  : m4(Object(T,),).forEach(function (j3,) {
                    Object.defineProperty(x4, j3, Object.getOwnPropertyDescriptor(T, j3,),);
                  },);
              }
              return x4;
            }
            function N(x4,) {
              return function (h4,) {
                if (Array.isArray(h4,)) {
                  return L(h4,);
                }
              }(x4,) || function (h4,) {
                if (typeof Symbol < 'u' && h4[Symbol.iterator] != null || h4['@@iterator'] != null) {
                  return Array.from(h4,);
                }
              }(x4,) || function (h4, T,) {
                if (h4) {
                  if (typeof h4 == 'string') {
                    return L(h4, T,);
                  }
                  var j3 = Object.prototype.toString.call(h4,).slice(8, -1,);
                  return j3 === 'Object' && h4.constructor && (j3 = h4.constructor.name),
                    j3 === 'Map' || j3 === 'Set'
                      ? Array.from(h4,)
                      : j3 === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j3,)
                      ? L(h4, T,)
                      : void 0;
                }
              }(x4,) || function () {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`,);
              }();
            }
            function L(x4, h4,) {
              (h4 == null || h4 > x4.length) && (h4 = x4.length);
              for (var T = 0, j3 = new Array(h4,); T < h4; T++) {
                j3[T] = x4[T];
              }
              return j3;
            }
            function M4(x4, h4,) {
              for (var T = 0; T < h4.length; T++) {
                var j3 = h4[T];
                j3.enumerable = j3.enumerable || false,
                  j3.configurable = true,
                  'value' in j3 && (j3.writable = true),
                  Object.defineProperty(x4, U2(j3.key,), j3,);
              }
            }
            function S2(x4, h4, T,) {
              return (h4 = U2(h4,)) in x4
                ? Object.defineProperty(x4, h4, { value: T, enumerable: true, configurable: true, writable: true, },)
                : x4[h4] = T,
                x4;
            }
            function U2(x4,) {
              var h4 = function (T, j3,) {
                if (O2(T,) !== 'object' || T === null) {
                  return T;
                }
                var H3 = T[Symbol.toPrimitive];
                if (H3 !== void 0) {
                  var s4 = H3.call(T, 'string',);
                  if (O2(s4,) !== 'object') {
                    return s4;
                  }
                  throw new TypeError('@@toPrimitive must return a primitive value.',);
                }
                return String(T,);
              }(x4,);
              return O2(h4,) === 'symbol' ? h4 : String(h4,);
            }
            let V = function () {
              function x4(j3, H3,) {
                var s4 = this;
                if (
                  function (b3, k2,) {
                    if (!(b3 instanceof k2)) {
                      throw new TypeError('Cannot call a class as a function',);
                    }
                  }(this, x4,),
                    S2(this, 'state', {
                      cursorAnimation: null,
                      lastFrameTime: null,
                      pauseUntil: null,
                      eventQueue: [],
                      eventLoop: null,
                      eventLoopPaused: false,
                      reverseCalledEvents: [],
                      calledEvents: [],
                      visibleNodes: [],
                      initialOptions: null,
                      elements: { container: null, wrapper: document.createElement('span',), cursor: document.createElement('span',), },
                    },),
                    S2(this, 'options', {
                      strings: null,
                      cursor: '|',
                      delay: 'natural',
                      pauseFor: 1500,
                      deleteSpeed: 'natural',
                      loop: false,
                      autoStart: false,
                      devMode: false,
                      skipAddStyles: false,
                      wrapperClassName: 'Typewriter__wrapper',
                      cursorClassName: 'Typewriter__cursor',
                      stringSplitter: null,
                      onCreateTextNode: null,
                      onRemoveNode: null,
                    },),
                    S2(this, 'setupWrapperElement', function () {
                      s4.state.elements.container && (s4.state.elements.wrapper.className = s4.options.wrapperClassName,
                        s4.state.elements.cursor.className = s4.options.cursorClassName,
                        s4.state.elements.cursor.innerHTML = s4.options.cursor,
                        s4.state.elements.container.innerHTML = '',
                        s4.state.elements.container.appendChild(s4.state.elements.wrapper,),
                        s4.state.elements.container.appendChild(s4.state.elements.cursor,));
                    },),
                    S2(this, 'start', function () {
                      return s4.state.eventLoopPaused = false, s4.runEventLoop(), s4;
                    },),
                    S2(this, 'pause', function () {
                      return s4.state.eventLoopPaused = true, s4;
                    },),
                    S2(this, 'stop', function () {
                      return s4.state.eventLoop && ((0, r4.cancel)(s4.state.eventLoop,), s4.state.eventLoop = null), s4;
                    },),
                    S2(this, 'pauseFor', function (b3,) {
                      return s4.addEventToQueue(l4, { ms: b3, },), s4;
                    },),
                    S2(this, 'typeOutAllStrings', function () {
                      return typeof s4.options.strings == 'string'
                        ? (s4.typeString(s4.options.strings,).pauseFor(s4.options.pauseFor,), s4)
                        : (s4.options.strings.forEach(function (b3,) {
                          s4.typeString(b3,).pauseFor(s4.options.pauseFor,).deleteAll(s4.options.deleteSpeed,);
                        },),
                          s4);
                    },),
                    S2(this, 'typeString', function (b3,) {
                      var k2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                      if (a5(b3,)) {
                        return s4.typeOutHTMLString(b3, k2,);
                      }
                      if (b3) {
                        var F2 = (s4.options || {}).stringSplitter, Q = typeof F2 == 'function' ? F2(b3,) : b3.split('',);
                        s4.typeCharacters(Q, k2,);
                      }
                      return s4;
                    },),
                    S2(this, 'pasteString', function (b3,) {
                      var k2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                      return a5(b3,)
                        ? s4.typeOutHTMLString(b3, k2, true,)
                        : (b3 && s4.addEventToQueue(E3, { character: b3, node: k2, },), s4);
                    },),
                    S2(this, 'typeOutHTMLString', function (b3,) {
                      var k2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
                        F2 = arguments.length > 2 ? arguments[2] : void 0,
                        Q = function (G2,) {
                          var Y2 = document.createElement('div',);
                          return Y2.innerHTML = G2, Y2.childNodes;
                        }(b3,);
                      if (Q.length > 0) {
                        for (var D3 = 0; D3 < Q.length; D3++) {
                          var I = Q[D3], $2 = I.innerHTML;
                          I && I.nodeType !== 3
                            ? (I.innerHTML = '',
                              s4.addEventToQueue(y5, { node: I, parentNode: k2, },),
                              F2 ? s4.pasteString($2, I,) : s4.typeString($2, I,))
                            : I.textContent && (F2 ? s4.pasteString(I.textContent, k2,) : s4.typeString(I.textContent, k2,));
                        }
                      }
                      return s4;
                    },),
                    S2(this, 'deleteAll', function () {
                      var b3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'natural';
                      return s4.addEventToQueue(p6, { speed: b3, },), s4;
                    },),
                    S2(this, 'changeDeleteSpeed', function (b3,) {
                      if (!b3) {
                        throw new Error('Must provide new delete speed',);
                      }
                      return s4.addEventToQueue(d4, { speed: b3, },), s4;
                    },),
                    S2(this, 'changeDelay', function (b3,) {
                      if (!b3) {
                        throw new Error('Must provide new delay',);
                      }
                      return s4.addEventToQueue(g4, { delay: b3, },), s4;
                    },),
                    S2(this, 'changeCursor', function (b3,) {
                      if (!b3) {
                        throw new Error('Must provide new cursor',);
                      }
                      return s4.addEventToQueue(_2, { cursor: b3, },), s4;
                    },),
                    S2(this, 'deleteChars', function (b3,) {
                      if (!b3) {
                        throw new Error('Must provide amount of characters to delete',);
                      }
                      for (var k2 = 0; k2 < b3; k2++) {
                        s4.addEventToQueue(c3,);
                      }
                      return s4;
                    },),
                    S2(this, 'callFunction', function (b3, k2,) {
                      if (!b3 || typeof b3 != 'function') {
                        throw new Error('Callback must be a function',);
                      }
                      return s4.addEventToQueue(v4, { cb: b3, thisArg: k2, },), s4;
                    },),
                    S2(this, 'typeCharacters', function (b3,) {
                      var k2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                      if (!b3 || !Array.isArray(b3,)) {
                        throw new Error('Characters must be an array',);
                      }
                      return b3.forEach(function (F2,) {
                        s4.addEventToQueue(u2, { character: F2, node: k2, },);
                      },),
                        s4;
                    },),
                    S2(this, 'removeCharacters', function (b3,) {
                      if (!b3 || !Array.isArray(b3,)) {
                        throw new Error('Characters must be an array',);
                      }
                      return b3.forEach(function () {
                        s4.addEventToQueue(c3,);
                      },),
                        s4;
                    },),
                    S2(this, 'addEventToQueue', function (b3, k2,) {
                      var F2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                      return s4.addEventToStateProperty(b3, k2, F2, 'eventQueue',);
                    },),
                    S2(this, 'addReverseCalledEvent', function (b3, k2,) {
                      var F2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                      return s4.options.loop ? s4.addEventToStateProperty(b3, k2, F2, 'reverseCalledEvents',) : s4;
                    },),
                    S2(this, 'addEventToStateProperty', function (b3, k2,) {
                      var F2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2],
                        Q = arguments.length > 3 ? arguments[3] : void 0,
                        D3 = { eventName: b3, eventArgs: k2 || {}, };
                      return s4.state[Q] = F2 ? [D3,].concat(N(s4.state[Q],),) : [].concat(N(s4.state[Q],), [D3,],), s4;
                    },),
                    S2(this, 'runEventLoop', function () {
                      s4.state.lastFrameTime || (s4.state.lastFrameTime = Date.now());
                      var b3 = Date.now(), k2 = b3 - s4.state.lastFrameTime;
                      if (!s4.state.eventQueue.length) {
                        if (!s4.options.loop) {
                          return;
                        }
                        s4.state.eventQueue = N(s4.state.calledEvents,),
                          s4.state.calledEvents = [],
                          s4.options = w4({}, s4.state.initialOptions,);
                      }
                      if (s4.state.eventLoop = i3()(s4.runEventLoop,), !s4.state.eventLoopPaused) {
                        if (s4.state.pauseUntil) {
                          if (b3 < s4.state.pauseUntil) {
                            return;
                          }
                          s4.state.pauseUntil = null;
                        }
                        var F2, Q = N(s4.state.eventQueue,), D3 = Q.shift();
                        if (
                          !(k2 <= (F2 = D3.eventName === f3 || D3.eventName === c3
                            ? s4.options.deleteSpeed === 'natural' ? n4(40, 80,) : s4.options.deleteSpeed
                            : s4.options.delay === 'natural'
                            ? n4(120, 160,)
                            : s4.options.delay))
                        ) {
                          var I = D3.eventName, $2 = D3.eventArgs;
                          switch (s4.logInDevMode({ currentEvent: D3, state: s4.state, delay: F2, },), I) {
                            case E3:
                            case u2:
                              var G2 = $2.character, Y2 = $2.node, ct = document.createTextNode(G2,), J = ct;
                              s4.options.onCreateTextNode && typeof s4.options.onCreateTextNode == 'function' &&
                              (J = s4.options.onCreateTextNode(G2, ct,)),
                                J && (Y2 ? Y2.appendChild(J,) : s4.state.elements.wrapper.appendChild(J,)),
                                s4.state.visibleNodes = [].concat(N(s4.state.visibleNodes,), [{
                                  type: 'TEXT_NODE',
                                  character: G2,
                                  node: J,
                                },],);
                              break;
                            case c3:
                              Q.unshift({ eventName: f3, eventArgs: { removingCharacterNode: true, }, },);
                              break;
                            case l4:
                              var yt = D3.eventArgs.ms;
                              s4.state.pauseUntil = Date.now() + parseInt(yt,);
                              break;
                            case v4:
                              var pt = D3.eventArgs, mt = pt.cb, bt = pt.thisArg;
                              mt.call(bt, { elements: s4.state.elements, },);
                              break;
                            case y5:
                              var lt = D3.eventArgs, tt = lt.node, et = lt.parentNode;
                              et ? et.appendChild(tt,) : s4.state.elements.wrapper.appendChild(tt,),
                                s4.state.visibleNodes = [].concat(N(s4.state.visibleNodes,), [{
                                  type: A3,
                                  node: tt,
                                  parentNode: et || s4.state.elements.wrapper,
                                },],);
                              break;
                            case p6:
                              var gt = s4.state.visibleNodes, rt = $2.speed, K2 = [];
                              rt && K2.push({ eventName: d4, eventArgs: { speed: rt, temp: true, }, },);
                              for (var ft = 0, _t = gt.length; ft < _t; ft++) {
                                K2.push({ eventName: f3, eventArgs: { removingCharacterNode: false, }, },);
                              }
                              rt && K2.push({ eventName: d4, eventArgs: { speed: s4.options.deleteSpeed, temp: true, }, },),
                                Q.unshift.apply(Q, K2,);
                              break;
                            case f3:
                              var wt = D3.eventArgs.removingCharacterNode;
                              if (s4.state.visibleNodes.length) {
                                var nt = s4.state.visibleNodes.pop(), xt = nt.type, Z = nt.node, jt = nt.character;
                                s4.options.onRemoveNode && typeof s4.options.onRemoveNode == 'function' &&
                                s4.options.onRemoveNode({ node: Z, character: jt, },),
                                  Z && Z.parentNode.removeChild(Z,),
                                  xt === A3 && wt && Q.unshift({ eventName: f3, eventArgs: {}, },);
                              }
                              break;
                            case d4:
                              s4.options.deleteSpeed = D3.eventArgs.speed;
                              break;
                            case g4:
                              s4.options.delay = D3.eventArgs.delay;
                              break;
                            case _2:
                              s4.options.cursor = D3.eventArgs.cursor, s4.state.elements.cursor.innerHTML = D3.eventArgs.cursor;
                          }
                          s4.options.loop &&
                          (D3.eventName === f3 || D3.eventArgs && D3.eventArgs.temp ||
                            (s4.state.calledEvents = [].concat(N(s4.state.calledEvents,), [D3,],))),
                            s4.state.eventQueue = Q,
                            s4.state.lastFrameTime = b3;
                        }
                      }
                    },),
                    j3
                ) {
                  if (typeof j3 == 'string') {
                    var ut = document.querySelector(j3,);
                    if (!ut) {
                      throw new Error('Could not find container element',);
                    }
                    this.state.elements.container = ut;
                  } else {
                    this.state.elements.container = j3;
                  }
                }
                H3 && (this.options = w4(w4({}, this.options,), H3,)), this.state.initialOptions = w4({}, this.options,), this.init();
              }
              var h4, T;
              return h4 = x4,
                (T = [{
                  key: 'init',
                  value: function () {
                    var j3, H3;
                    this.setupWrapperElement(),
                      this.addEventToQueue(_2, { cursor: this.options.cursor, }, true,),
                      this.addEventToQueue(p6, null, true,),
                      !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles ||
                      (j3 =
                        '.Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}',
                        (H3 = document.createElement('style',)).appendChild(document.createTextNode(j3,),),
                        document.head.appendChild(H3,),
                        window.___TYPEWRITER_JS_STYLES_ADDED___ = true),
                      this.options.autoStart === true && this.options.strings && this.typeOutAllStrings().start();
                  },
                }, {
                  key: 'logInDevMode',
                  value: function (j3,) {
                    this.options.devMode && console.log(j3,);
                  },
                },]) && M4(h4.prototype, T,),
                Object.defineProperty(h4, 'prototype', { writable: false, },),
                x4;
            }();
          },
          8552: (e3, o4, t3,) => {
            var r4 = t3(852,)(t3(5639,), 'DataView',);
            e3.exports = r4;
          },
          1989: (e3, o4, t3,) => {
            var r4 = t3(1789,), i3 = t3(401,), a5 = t3(7667,), n4 = t3(1327,), u2 = t3(1866,);
            function c3(p6,) {
              var f3 = -1, l4 = p6 == null ? 0 : p6.length;
              for (this.clear(); ++f3 < l4;) {
                var v4 = p6[f3];
                this.set(v4[0], v4[1],);
              }
            }
            c3.prototype.clear = r4,
              c3.prototype.delete = i3,
              c3.prototype.get = a5,
              c3.prototype.has = n4,
              c3.prototype.set = u2,
              e3.exports = c3;
          },
          8407: (e3, o4, t3,) => {
            var r4 = t3(7040,), i3 = t3(4125,), a5 = t3(2117,), n4 = t3(7518,), u2 = t3(4705,);
            function c3(p6,) {
              var f3 = -1, l4 = p6 == null ? 0 : p6.length;
              for (this.clear(); ++f3 < l4;) {
                var v4 = p6[f3];
                this.set(v4[0], v4[1],);
              }
            }
            c3.prototype.clear = r4,
              c3.prototype.delete = i3,
              c3.prototype.get = a5,
              c3.prototype.has = n4,
              c3.prototype.set = u2,
              e3.exports = c3;
          },
          7071: (e3, o4, t3,) => {
            var r4 = t3(852,)(t3(5639,), 'Map',);
            e3.exports = r4;
          },
          3369: (e3, o4, t3,) => {
            var r4 = t3(4785,), i3 = t3(1285,), a5 = t3(6e3,), n4 = t3(9916,), u2 = t3(5265,);
            function c3(p6,) {
              var f3 = -1, l4 = p6 == null ? 0 : p6.length;
              for (this.clear(); ++f3 < l4;) {
                var v4 = p6[f3];
                this.set(v4[0], v4[1],);
              }
            }
            c3.prototype.clear = r4,
              c3.prototype.delete = i3,
              c3.prototype.get = a5,
              c3.prototype.has = n4,
              c3.prototype.set = u2,
              e3.exports = c3;
          },
          3818: (e3, o4, t3,) => {
            var r4 = t3(852,)(t3(5639,), 'Promise',);
            e3.exports = r4;
          },
          8525: (e3, o4, t3,) => {
            var r4 = t3(852,)(t3(5639,), 'Set',);
            e3.exports = r4;
          },
          8668: (e3, o4, t3,) => {
            var r4 = t3(3369,), i3 = t3(619,), a5 = t3(2385,);
            function n4(u2,) {
              var c3 = -1, p6 = u2 == null ? 0 : u2.length;
              for (this.__data__ = new r4(); ++c3 < p6;) {
                this.add(u2[c3],);
              }
            }
            n4.prototype.add = n4.prototype.push = i3, n4.prototype.has = a5, e3.exports = n4;
          },
          6384: (e3, o4, t3,) => {
            var r4 = t3(8407,), i3 = t3(7465,), a5 = t3(3779,), n4 = t3(7599,), u2 = t3(4758,), c3 = t3(4309,);
            function p6(f3,) {
              var l4 = this.__data__ = new r4(f3,);
              this.size = l4.size;
            }
            p6.prototype.clear = i3,
              p6.prototype.delete = a5,
              p6.prototype.get = n4,
              p6.prototype.has = u2,
              p6.prototype.set = c3,
              e3.exports = p6;
          },
          2705: (e3, o4, t3,) => {
            var r4 = t3(5639,).Symbol;
            e3.exports = r4;
          },
          1149: (e3, o4, t3,) => {
            var r4 = t3(5639,).Uint8Array;
            e3.exports = r4;
          },
          577: (e3, o4, t3,) => {
            var r4 = t3(852,)(t3(5639,), 'WeakMap',);
            e3.exports = r4;
          },
          4963: (e3,) => {
            e3.exports = function (o4, t3,) {
              for (var r4 = -1, i3 = o4 == null ? 0 : o4.length, a5 = 0, n4 = []; ++r4 < i3;) {
                var u2 = o4[r4];
                t3(u2, r4, o4,) && (n4[a5++] = u2);
              }
              return n4;
            };
          },
          4636: (e3, o4, t3,) => {
            var r4 = t3(2545,),
              i3 = t3(5694,),
              a5 = t3(1469,),
              n4 = t3(4144,),
              u2 = t3(5776,),
              c3 = t3(6719,),
              p6 = Object.prototype.hasOwnProperty;
            e3.exports = function (f3, l4,) {
              var v4 = a5(f3,),
                y5 = !v4 && i3(f3,),
                d4 = !v4 && !y5 && n4(f3,),
                g4 = !v4 && !y5 && !d4 && c3(f3,),
                _2 = v4 || y5 || d4 || g4,
                E3 = _2 ? r4(f3.length, String,) : [],
                A3 = E3.length;
              for (var O2 in f3) {
                !l4 && !p6.call(f3, O2,) ||
                  _2 &&
                    (O2 == 'length' || d4 && (O2 == 'offset' || O2 == 'parent') ||
                      g4 && (O2 == 'buffer' || O2 == 'byteLength' || O2 == 'byteOffset') || u2(O2, A3,)) ||
                  E3.push(O2,);
              }
              return E3;
            };
          },
          2488: (e3,) => {
            e3.exports = function (o4, t3,) {
              for (var r4 = -1, i3 = t3.length, a5 = o4.length; ++r4 < i3;) {
                o4[a5 + r4] = t3[r4];
              }
              return o4;
            };
          },
          2908: (e3,) => {
            e3.exports = function (o4, t3,) {
              for (var r4 = -1, i3 = o4 == null ? 0 : o4.length; ++r4 < i3;) {
                if (t3(o4[r4], r4, o4,)) {
                  return true;
                }
              }
              return false;
            };
          },
          8470: (e3, o4, t3,) => {
            var r4 = t3(7813,);
            e3.exports = function (i3, a5,) {
              for (var n4 = i3.length; n4--;) {
                if (r4(i3[n4][0], a5,)) {
                  return n4;
                }
              }
              return -1;
            };
          },
          8866: (e3, o4, t3,) => {
            var r4 = t3(2488,), i3 = t3(1469,);
            e3.exports = function (a5, n4, u2,) {
              var c3 = n4(a5,);
              return i3(a5,) ? c3 : r4(c3, u2(a5,),);
            };
          },
          4239: (e3, o4, t3,) => {
            var r4 = t3(2705,), i3 = t3(9607,), a5 = t3(2333,), n4 = r4 ? r4.toStringTag : void 0;
            e3.exports = function (u2,) {
              return u2 == null ? u2 === void 0 ? '[object Undefined]' : '[object Null]' : n4 && n4 in Object(u2,) ? i3(u2,) : a5(u2,);
            };
          },
          9454: (e3, o4, t3,) => {
            var r4 = t3(4239,), i3 = t3(7005,);
            e3.exports = function (a5,) {
              return i3(a5,) && r4(a5,) == '[object Arguments]';
            };
          },
          939: (e3, o4, t3,) => {
            var r4 = t3(2492,), i3 = t3(7005,);
            e3.exports = function a5(n4, u2, c3, p6, f3,) {
              return n4 === u2 || (n4 == null || u2 == null || !i3(n4,) && !i3(u2,) ? n4 != n4 && u2 != u2 : r4(n4, u2, c3, p6, a5, f3,));
            };
          },
          2492: (e3, o4, t3,) => {
            var r4 = t3(6384,),
              i3 = t3(7114,),
              a5 = t3(8351,),
              n4 = t3(6096,),
              u2 = t3(4160,),
              c3 = t3(1469,),
              p6 = t3(4144,),
              f3 = t3(6719,),
              l4 = '[object Arguments]',
              v4 = '[object Array]',
              y5 = '[object Object]',
              d4 = Object.prototype.hasOwnProperty;
            e3.exports = function (g4, _2, E3, A3, O2, m4,) {
              var w4 = c3(g4,),
                N = c3(_2,),
                L = w4 ? v4 : u2(g4,),
                M4 = N ? v4 : u2(_2,),
                S2 = (L = L == l4 ? y5 : L) == y5,
                U2 = (M4 = M4 == l4 ? y5 : M4) == y5,
                V = L == M4;
              if (V && p6(g4,)) {
                if (!p6(_2,)) {
                  return false;
                }
                w4 = true, S2 = false;
              }
              if (V && !S2) {
                return m4 || (m4 = new r4()), w4 || f3(g4,) ? i3(g4, _2, E3, A3, O2, m4,) : a5(g4, _2, L, E3, A3, O2, m4,);
              }
              if (!(1 & E3)) {
                var x4 = S2 && d4.call(g4, '__wrapped__',), h4 = U2 && d4.call(_2, '__wrapped__',);
                if (x4 || h4) {
                  var T = x4 ? g4.value() : g4, j3 = h4 ? _2.value() : _2;
                  return m4 || (m4 = new r4()), O2(T, j3, E3, A3, m4,);
                }
              }
              return !!V && (m4 || (m4 = new r4()), n4(g4, _2, E3, A3, O2, m4,));
            };
          },
          8458: (e3, o4, t3,) => {
            var r4 = t3(3560,),
              i3 = t3(5346,),
              a5 = t3(3218,),
              n4 = t3(346,),
              u2 = /^\[object .+?Constructor\]$/,
              c3 = Function.prototype,
              p6 = Object.prototype,
              f3 = c3.toString,
              l4 = p6.hasOwnProperty,
              v4 = RegExp(
                '^' +
                  f3.call(l4,).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&',).replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    '$1.*?',
                  ) + '$',
              );
            e3.exports = function (y5,) {
              return !(!a5(y5,) || i3(y5,)) && (r4(y5,) ? v4 : u2).test(n4(y5,),);
            };
          },
          8749: (e3, o4, t3,) => {
            var r4 = t3(4239,), i3 = t3(1780,), a5 = t3(7005,), n4 = {};
            n4['[object Float32Array]'] =
              n4['[object Float64Array]'] =
              n4['[object Int8Array]'] =
              n4['[object Int16Array]'] =
              n4['[object Int32Array]'] =
              n4['[object Uint8Array]'] =
              n4['[object Uint8ClampedArray]'] =
              n4['[object Uint16Array]'] =
              n4['[object Uint32Array]'] =
                true,
              n4['[object Arguments]'] =
                n4['[object Array]'] =
                n4['[object ArrayBuffer]'] =
                n4['[object Boolean]'] =
                n4['[object DataView]'] =
                n4['[object Date]'] =
                n4['[object Error]'] =
                n4['[object Function]'] =
                n4['[object Map]'] =
                n4['[object Number]'] =
                n4['[object Object]'] =
                n4['[object RegExp]'] =
                n4['[object Set]'] =
                n4['[object String]'] =
                n4['[object WeakMap]'] =
                  false,
              e3.exports = function (u2,) {
                return a5(u2,) && i3(u2.length,) && !!n4[r4(u2,)];
              };
          },
          280: (e3, o4, t3,) => {
            var r4 = t3(5726,), i3 = t3(6916,), a5 = Object.prototype.hasOwnProperty;
            e3.exports = function (n4,) {
              if (!r4(n4,)) {
                return i3(n4,);
              }
              var u2 = [];
              for (var c3 in Object(n4,)) {
                a5.call(n4, c3,) && c3 != 'constructor' && u2.push(c3,);
              }
              return u2;
            };
          },
          2545: (e3,) => {
            e3.exports = function (o4, t3,) {
              for (var r4 = -1, i3 = Array(o4,); ++r4 < o4;) {
                i3[r4] = t3(r4,);
              }
              return i3;
            };
          },
          1717: (e3,) => {
            e3.exports = function (o4,) {
              return function (t3,) {
                return o4(t3,);
              };
            };
          },
          4757: (e3,) => {
            e3.exports = function (o4, t3,) {
              return o4.has(t3,);
            };
          },
          4429: (e3, o4, t3,) => {
            var r4 = t3(5639,)['__core-js_shared__'];
            e3.exports = r4;
          },
          7114: (e3, o4, t3,) => {
            var r4 = t3(8668,), i3 = t3(2908,), a5 = t3(4757,);
            e3.exports = function (n4, u2, c3, p6, f3, l4,) {
              var v4 = 1 & c3, y5 = n4.length, d4 = u2.length;
              if (y5 != d4 && !(v4 && d4 > y5)) {
                return false;
              }
              var g4 = l4.get(n4,), _2 = l4.get(u2,);
              if (g4 && _2) {
                return g4 == u2 && _2 == n4;
              }
              var E3 = -1, A3 = true, O2 = 2 & c3 ? new r4() : void 0;
              for (l4.set(n4, u2,), l4.set(u2, n4,); ++E3 < y5;) {
                var m4 = n4[E3], w4 = u2[E3];
                if (p6) {
                  var N = v4 ? p6(w4, m4, E3, u2, n4, l4,) : p6(m4, w4, E3, n4, u2, l4,);
                }
                if (N !== void 0) {
                  if (N) {
                    continue;
                  }
                  A3 = false;
                  break;
                }
                if (O2) {
                  if (
                    !i3(u2, function (L, M4,) {
                      if (!a5(O2, M4,) && (m4 === L || f3(m4, L, c3, p6, l4,))) {
                        return O2.push(M4,);
                      }
                    },)
                  ) {
                    A3 = false;
                    break;
                  }
                } else if (m4 !== w4 && !f3(m4, w4, c3, p6, l4,)) {
                  A3 = false;
                  break;
                }
              }
              return l4.delete(n4,), l4.delete(u2,), A3;
            };
          },
          8351: (e3, o4, t3,) => {
            var r4 = t3(2705,),
              i3 = t3(1149,),
              a5 = t3(7813,),
              n4 = t3(7114,),
              u2 = t3(8776,),
              c3 = t3(1814,),
              p6 = r4 ? r4.prototype : void 0,
              f3 = p6 ? p6.valueOf : void 0;
            e3.exports = function (l4, v4, y5, d4, g4, _2, E3,) {
              switch (y5) {
                case '[object DataView]':
                  if (l4.byteLength != v4.byteLength || l4.byteOffset != v4.byteOffset) {
                    return false;
                  }
                  l4 = l4.buffer, v4 = v4.buffer;
                case '[object ArrayBuffer]':
                  return !(l4.byteLength != v4.byteLength || !_2(new i3(l4,), new i3(v4,),));
                case '[object Boolean]':
                case '[object Date]':
                case '[object Number]':
                  return a5(+l4, +v4,);
                case '[object Error]':
                  return l4.name == v4.name && l4.message == v4.message;
                case '[object RegExp]':
                case '[object String]':
                  return l4 == v4 + '';
                case '[object Map]':
                  var A3 = u2;
                case '[object Set]':
                  var O2 = 1 & d4;
                  if (A3 || (A3 = c3), l4.size != v4.size && !O2) {
                    return false;
                  }
                  var m4 = E3.get(l4,);
                  if (m4) {
                    return m4 == v4;
                  }
                  d4 |= 2, E3.set(l4, v4,);
                  var w4 = n4(A3(l4,), A3(v4,), d4, g4, _2, E3,);
                  return E3.delete(l4,), w4;
                case '[object Symbol]':
                  if (f3) {
                    return f3.call(l4,) == f3.call(v4,);
                  }
              }
              return false;
            };
          },
          6096: (e3, o4, t3,) => {
            var r4 = t3(8234,), i3 = Object.prototype.hasOwnProperty;
            e3.exports = function (a5, n4, u2, c3, p6, f3,) {
              var l4 = 1 & u2, v4 = r4(a5,), y5 = v4.length;
              if (y5 != r4(n4,).length && !l4) {
                return false;
              }
              for (var d4 = y5; d4--;) {
                var g4 = v4[d4];
                if (!(l4 ? g4 in n4 : i3.call(n4, g4,))) {
                  return false;
                }
              }
              var _2 = f3.get(a5,), E3 = f3.get(n4,);
              if (_2 && E3) {
                return _2 == n4 && E3 == a5;
              }
              var A3 = true;
              f3.set(a5, n4,), f3.set(n4, a5,);
              for (var O2 = l4; ++d4 < y5;) {
                var m4 = a5[g4 = v4[d4]], w4 = n4[g4];
                if (c3) {
                  var N = l4 ? c3(w4, m4, g4, n4, a5, f3,) : c3(m4, w4, g4, a5, n4, f3,);
                }
                if (!(N === void 0 ? m4 === w4 || p6(m4, w4, u2, c3, f3,) : N)) {
                  A3 = false;
                  break;
                }
                O2 || (O2 = g4 == 'constructor');
              }
              if (A3 && !O2) {
                var L = a5.constructor, M4 = n4.constructor;
                L == M4 || !('constructor' in a5) || !('constructor' in n4) ||
                  typeof L == 'function' && L instanceof L && typeof M4 == 'function' && M4 instanceof M4 || (A3 = false);
              }
              return f3.delete(a5,), f3.delete(n4,), A3;
            };
          },
          1957: (e3, o4, t3,) => {
            var r4 = typeof t3.g == 'object' && t3.g && t3.g.Object === Object && t3.g;
            e3.exports = r4;
          },
          8234: (e3, o4, t3,) => {
            var r4 = t3(8866,), i3 = t3(9551,), a5 = t3(3674,);
            e3.exports = function (n4,) {
              return r4(n4, a5, i3,);
            };
          },
          5050: (e3, o4, t3,) => {
            var r4 = t3(7019,);
            e3.exports = function (i3, a5,) {
              var n4 = i3.__data__;
              return r4(a5,) ? n4[typeof a5 == 'string' ? 'string' : 'hash'] : n4.map;
            };
          },
          852: (e3, o4, t3,) => {
            var r4 = t3(8458,), i3 = t3(7801,);
            e3.exports = function (a5, n4,) {
              var u2 = i3(a5, n4,);
              return r4(u2,) ? u2 : void 0;
            };
          },
          9607: (e3, o4, t3,) => {
            var r4 = t3(2705,), i3 = Object.prototype, a5 = i3.hasOwnProperty, n4 = i3.toString, u2 = r4 ? r4.toStringTag : void 0;
            e3.exports = function (c3,) {
              var p6 = a5.call(c3, u2,), f3 = c3[u2];
              try {
                c3[u2] = void 0;
                var l4 = true;
              } catch {
              }
              var v4 = n4.call(c3,);
              return l4 && (p6 ? c3[u2] = f3 : delete c3[u2]), v4;
            };
          },
          9551: (e3, o4, t3,) => {
            var r4 = t3(4963,),
              i3 = t3(479,),
              a5 = Object.prototype.propertyIsEnumerable,
              n4 = Object.getOwnPropertySymbols,
              u2 = n4
                ? function (c3,) {
                  return c3 == null ? [] : (c3 = Object(c3,),
                    r4(n4(c3,), function (p6,) {
                      return a5.call(c3, p6,);
                    },));
                }
                : i3;
            e3.exports = u2;
          },
          4160: (e3, o4, t3,) => {
            var r4 = t3(8552,),
              i3 = t3(7071,),
              a5 = t3(3818,),
              n4 = t3(8525,),
              u2 = t3(577,),
              c3 = t3(4239,),
              p6 = t3(346,),
              f3 = '[object Map]',
              l4 = '[object Promise]',
              v4 = '[object Set]',
              y5 = '[object WeakMap]',
              d4 = '[object DataView]',
              g4 = p6(r4,),
              _2 = p6(i3,),
              E3 = p6(a5,),
              A3 = p6(n4,),
              O2 = p6(u2,),
              m4 = c3;
            (r4 && m4(new r4(new ArrayBuffer(1,),),) != d4 || i3 && m4(new i3(),) != f3 || a5 && m4(a5.resolve(),) != l4 ||
              n4 && m4(new n4(),) != v4 || u2 && m4(new u2(),) != y5) && (m4 = function (w4,) {
                var N = c3(w4,), L = N == '[object Object]' ? w4.constructor : void 0, M4 = L ? p6(L,) : '';
                if (M4) {
                  switch (M4) {
                    case g4:
                      return d4;
                    case _2:
                      return f3;
                    case E3:
                      return l4;
                    case A3:
                      return v4;
                    case O2:
                      return y5;
                  }
                }
                return N;
              }), e3.exports = m4;
          },
          7801: (e3,) => {
            e3.exports = function (o4, t3,) {
              return o4?.[t3];
            };
          },
          1789: (e3, o4, t3,) => {
            var r4 = t3(4536,);
            e3.exports = function () {
              this.__data__ = r4 ? r4(null,) : {}, this.size = 0;
            };
          },
          401: (e3,) => {
            e3.exports = function (o4,) {
              var t3 = this.has(o4,) && delete this.__data__[o4];
              return this.size -= t3 ? 1 : 0, t3;
            };
          },
          7667: (e3, o4, t3,) => {
            var r4 = t3(4536,), i3 = Object.prototype.hasOwnProperty;
            e3.exports = function (a5,) {
              var n4 = this.__data__;
              if (r4) {
                var u2 = n4[a5];
                return u2 === '__lodash_hash_undefined__' ? void 0 : u2;
              }
              return i3.call(n4, a5,) ? n4[a5] : void 0;
            };
          },
          1327: (e3, o4, t3,) => {
            var r4 = t3(4536,), i3 = Object.prototype.hasOwnProperty;
            e3.exports = function (a5,) {
              var n4 = this.__data__;
              return r4 ? n4[a5] !== void 0 : i3.call(n4, a5,);
            };
          },
          1866: (e3, o4, t3,) => {
            var r4 = t3(4536,);
            e3.exports = function (i3, a5,) {
              var n4 = this.__data__;
              return this.size += this.has(i3,) ? 0 : 1, n4[i3] = r4 && a5 === void 0 ? '__lodash_hash_undefined__' : a5, this;
            };
          },
          5776: (e3,) => {
            var o4 = /^(?:0|[1-9]\d*)$/;
            e3.exports = function (t3, r4,) {
              var i3 = typeof t3;
              return !!(r4 = r4 ?? 9007199254740991) && (i3 == 'number' || i3 != 'symbol' && o4.test(t3,)) && t3 > -1 && t3 % 1 == 0 &&
                t3 < r4;
            };
          },
          7019: (e3,) => {
            e3.exports = function (o4,) {
              var t3 = typeof o4;
              return t3 == 'string' || t3 == 'number' || t3 == 'symbol' || t3 == 'boolean' ? o4 !== '__proto__' : o4 === null;
            };
          },
          5346: (e3, o4, t3,) => {
            var r4, i3 = t3(4429,), a5 = (r4 = /[^.]+$/.exec(i3 && i3.keys && i3.keys.IE_PROTO || '',)) ? 'Symbol(src)_1.' + r4 : '';
            e3.exports = function (n4,) {
              return !!a5 && a5 in n4;
            };
          },
          5726: (e3,) => {
            var o4 = Object.prototype;
            e3.exports = function (t3,) {
              var r4 = t3 && t3.constructor;
              return t3 === (typeof r4 == 'function' && r4.prototype || o4);
            };
          },
          7040: (e3,) => {
            e3.exports = function () {
              this.__data__ = [], this.size = 0;
            };
          },
          4125: (e3, o4, t3,) => {
            var r4 = t3(8470,), i3 = Array.prototype.splice;
            e3.exports = function (a5,) {
              var n4 = this.__data__, u2 = r4(n4, a5,);
              return !(u2 < 0 || (u2 == n4.length - 1 ? n4.pop() : i3.call(n4, u2, 1,), --this.size, 0));
            };
          },
          2117: (e3, o4, t3,) => {
            var r4 = t3(8470,);
            e3.exports = function (i3,) {
              var a5 = this.__data__, n4 = r4(a5, i3,);
              return n4 < 0 ? void 0 : a5[n4][1];
            };
          },
          7518: (e3, o4, t3,) => {
            var r4 = t3(8470,);
            e3.exports = function (i3,) {
              return r4(this.__data__, i3,) > -1;
            };
          },
          4705: (e3, o4, t3,) => {
            var r4 = t3(8470,);
            e3.exports = function (i3, a5,) {
              var n4 = this.__data__, u2 = r4(n4, i3,);
              return u2 < 0 ? (++this.size, n4.push([i3, a5,],)) : n4[u2][1] = a5, this;
            };
          },
          4785: (e3, o4, t3,) => {
            var r4 = t3(1989,), i3 = t3(8407,), a5 = t3(7071,);
            e3.exports = function () {
              this.size = 0, this.__data__ = { hash: new r4(), map: new (a5 || i3)(), string: new r4(), };
            };
          },
          1285: (e3, o4, t3,) => {
            var r4 = t3(5050,);
            e3.exports = function (i3,) {
              var a5 = r4(this, i3,).delete(i3,);
              return this.size -= a5 ? 1 : 0, a5;
            };
          },
          6e3: (e3, o4, t3,) => {
            var r4 = t3(5050,);
            e3.exports = function (i3,) {
              return r4(this, i3,).get(i3,);
            };
          },
          9916: (e3, o4, t3,) => {
            var r4 = t3(5050,);
            e3.exports = function (i3,) {
              return r4(this, i3,).has(i3,);
            };
          },
          5265: (e3, o4, t3,) => {
            var r4 = t3(5050,);
            e3.exports = function (i3, a5,) {
              var n4 = r4(this, i3,), u2 = n4.size;
              return n4.set(i3, a5,), this.size += n4.size == u2 ? 0 : 1, this;
            };
          },
          8776: (e3,) => {
            e3.exports = function (o4,) {
              var t3 = -1, r4 = Array(o4.size,);
              return o4.forEach(function (i3, a5,) {
                r4[++t3] = [a5, i3,];
              },),
                r4;
            };
          },
          4536: (e3, o4, t3,) => {
            var r4 = t3(852,)(Object, 'create',);
            e3.exports = r4;
          },
          6916: (e3, o4, t3,) => {
            var r4 = t3(5569,)(Object.keys, Object,);
            e3.exports = r4;
          },
          1167: (e3, o4, t3,) => {
            e3 = t3.nmd(e3,);
            var r4 = t3(1957,),
              i3 = o4 && !o4.nodeType && o4,
              a5 = i3 && e3 && !e3.nodeType && e3,
              n4 = a5 && a5.exports === i3 && r4.process,
              u2 = function () {
                try {
                  return a5 && a5.require && a5.require('util',).types || n4 && n4.binding && n4.binding('util',);
                } catch {
                }
              }();
            e3.exports = u2;
          },
          2333: (e3,) => {
            var o4 = Object.prototype.toString;
            e3.exports = function (t3,) {
              return o4.call(t3,);
            };
          },
          5569: (e3,) => {
            e3.exports = function (o4, t3,) {
              return function (r4,) {
                return o4(t3(r4,),);
              };
            };
          },
          5639: (e3, o4, t3,) => {
            var r4 = t3(1957,),
              i3 = typeof self == 'object' && self && self.Object === Object && self,
              a5 = r4 || i3 || Function('return this',)();
            e3.exports = a5;
          },
          619: (e3,) => {
            e3.exports = function (o4,) {
              return this.__data__.set(o4, '__lodash_hash_undefined__',), this;
            };
          },
          2385: (e3,) => {
            e3.exports = function (o4,) {
              return this.__data__.has(o4,);
            };
          },
          1814: (e3,) => {
            e3.exports = function (o4,) {
              var t3 = -1, r4 = Array(o4.size,);
              return o4.forEach(function (i3,) {
                r4[++t3] = i3;
              },),
                r4;
            };
          },
          7465: (e3, o4, t3,) => {
            var r4 = t3(8407,);
            e3.exports = function () {
              this.__data__ = new r4(), this.size = 0;
            };
          },
          3779: (e3,) => {
            e3.exports = function (o4,) {
              var t3 = this.__data__, r4 = t3.delete(o4,);
              return this.size = t3.size, r4;
            };
          },
          7599: (e3,) => {
            e3.exports = function (o4,) {
              return this.__data__.get(o4,);
            };
          },
          4758: (e3,) => {
            e3.exports = function (o4,) {
              return this.__data__.has(o4,);
            };
          },
          4309: (e3, o4, t3,) => {
            var r4 = t3(8407,), i3 = t3(7071,), a5 = t3(3369,);
            e3.exports = function (n4, u2,) {
              var c3 = this.__data__;
              if (c3 instanceof r4) {
                var p6 = c3.__data__;
                if (!i3 || p6.length < 199) {
                  return p6.push([n4, u2,],), this.size = ++c3.size, this;
                }
                c3 = this.__data__ = new a5(p6,);
              }
              return c3.set(n4, u2,), this.size = c3.size, this;
            };
          },
          346: (e3,) => {
            var o4 = Function.prototype.toString;
            e3.exports = function (t3,) {
              if (t3 != null) {
                try {
                  return o4.call(t3,);
                } catch {
                }
                try {
                  return t3 + '';
                } catch {
                }
              }
              return '';
            };
          },
          7813: (e3,) => {
            e3.exports = function (o4, t3,) {
              return o4 === t3 || o4 != o4 && t3 != t3;
            };
          },
          5694: (e3, o4, t3,) => {
            var r4 = t3(9454,),
              i3 = t3(7005,),
              a5 = Object.prototype,
              n4 = a5.hasOwnProperty,
              u2 = a5.propertyIsEnumerable,
              c3 = r4(/* @__PURE__ */ function () {
                  return arguments;
                }(),)
                ? r4
                : function (p6,) {
                  return i3(p6,) && n4.call(p6, 'callee',) && !u2.call(p6, 'callee',);
                };
            e3.exports = c3;
          },
          1469: (e3,) => {
            var o4 = Array.isArray;
            e3.exports = o4;
          },
          8612: (e3, o4, t3,) => {
            var r4 = t3(3560,), i3 = t3(1780,);
            e3.exports = function (a5,) {
              return a5 != null && i3(a5.length,) && !r4(a5,);
            };
          },
          4144: (e3, o4, t3,) => {
            e3 = t3.nmd(e3,);
            var r4 = t3(5639,),
              i3 = t3(5062,),
              a5 = o4 && !o4.nodeType && o4,
              n4 = a5 && e3 && !e3.nodeType && e3,
              u2 = n4 && n4.exports === a5 ? r4.Buffer : void 0,
              c3 = (u2 ? u2.isBuffer : void 0) || i3;
            e3.exports = c3;
          },
          8446: (e3, o4, t3,) => {
            var r4 = t3(939,);
            e3.exports = function (i3, a5,) {
              return r4(i3, a5,);
            };
          },
          3560: (e3, o4, t3,) => {
            var r4 = t3(4239,), i3 = t3(3218,);
            e3.exports = function (a5,) {
              if (!i3(a5,)) {
                return false;
              }
              var n4 = r4(a5,);
              return n4 == '[object Function]' || n4 == '[object GeneratorFunction]' || n4 == '[object AsyncFunction]' ||
                n4 == '[object Proxy]';
            };
          },
          1780: (e3,) => {
            e3.exports = function (o4,) {
              return typeof o4 == 'number' && o4 > -1 && o4 % 1 == 0 && o4 <= 9007199254740991;
            };
          },
          3218: (e3,) => {
            e3.exports = function (o4,) {
              var t3 = typeof o4;
              return o4 != null && (t3 == 'object' || t3 == 'function');
            };
          },
          7005: (e3,) => {
            e3.exports = function (o4,) {
              return o4 != null && typeof o4 == 'object';
            };
          },
          6719: (e3, o4, t3,) => {
            var r4 = t3(8749,), i3 = t3(1717,), a5 = t3(1167,), n4 = a5 && a5.isTypedArray, u2 = n4 ? i3(n4,) : r4;
            e3.exports = u2;
          },
          3674: (e3, o4, t3,) => {
            var r4 = t3(4636,), i3 = t3(280,), a5 = t3(8612,);
            e3.exports = function (n4,) {
              return a5(n4,) ? r4(n4,) : i3(n4,);
            };
          },
          479: (e3,) => {
            e3.exports = function () {
              return [];
            };
          },
          5062: (e3,) => {
            e3.exports = function () {
              return false;
            };
          },
          75: function (e3,) {
            (function () {
              var o4, t3, r4, i3, a5, n4;
              typeof performance < 'u' && performance !== null && performance.now
                ? e3.exports = function () {
                  return performance.now();
                }
                : typeof a2 < 'u' && a2 !== null && a2.hrtime
                ? (e3.exports = function () {
                  return (o4() - a5) / 1e6;
                },
                  t3 = a2.hrtime,
                  i3 = (o4 = function () {
                    var u2;
                    return 1e9 * (u2 = t3())[0] + u2[1];
                  })(),
                  n4 = 1e9 * a2.uptime(),
                  a5 = i3 - n4)
                : Date.now
                ? (e3.exports = function () {
                  return Date.now() - r4;
                },
                  r4 = Date.now())
                : (e3.exports = function () {
                  return (/* @__PURE__ */ new Date()).getTime() - r4;
                },
                  r4 = (/* @__PURE__ */ new Date()).getTime());
            }).call(this,);
          },
          4087: (e3, o4, t3,) => {
            for (
              var r4 = t3(75,),
                i3 = typeof window > 'u' ? t3.g : window,
                a5 = ['moz', 'webkit',],
                n4 = 'AnimationFrame',
                u2 = i3['request' + n4],
                c3 = i3['cancel' + n4] || i3['cancelRequest' + n4],
                p6 = 0;
              !u2 && p6 < a5.length;
              p6++
            ) {
              u2 = i3[a5[p6] + 'Request' + n4], c3 = i3[a5[p6] + 'Cancel' + n4] || i3[a5[p6] + 'CancelRequest' + n4];
            }
            if (!u2 || !c3) {
              var f3 = 0, l4 = 0, v4 = [];
              u2 = function (y5,) {
                if (v4.length === 0) {
                  var d4 = r4(), g4 = Math.max(0, 16.666666666666668 - (d4 - f3),);
                  f3 = g4 + d4,
                    setTimeout(function () {
                      var _2 = v4.slice(0,);
                      v4.length = 0;
                      for (var E3 = 0; E3 < _2.length; E3++) {
                        if (!_2[E3].cancelled) {
                          try {
                            _2[E3].callback(f3,);
                          } catch (A3) {
                            setTimeout(function () {
                              throw A3;
                            }, 0,);
                          }
                        }
                      }
                    }, Math.round(g4,),);
                }
                return v4.push({ handle: ++l4, callback: y5, cancelled: false, },), l4;
              },
                c3 = function (y5,) {
                  for (var d4 = 0; d4 < v4.length; d4++) {
                    v4[d4].handle === y5 && (v4[d4].cancelled = true);
                  }
                };
            }
            e3.exports = function (y5,) {
              return u2.call(i3, y5,);
            },
              e3.exports.cancel = function () {
                c3.apply(i3, arguments,);
              },
              e3.exports.polyfill = function (y5,) {
                y5 || (y5 = i3), y5.requestAnimationFrame = u2, y5.cancelAnimationFrame = c3;
              };
          },
          8156: (e3,) => {
            'use strict';
            e3.exports = C3;
          },
        },
        z2 = {};
      function R4(e3,) {
        var o4 = z2[e3];
        if (o4 !== void 0) {
          return o4.exports;
        }
        var t3 = z2[e3] = { id: e3, loaded: false, exports: {}, };
        return P[e3].call(t3.exports, t3, t3.exports, R4,), t3.loaded = true, t3.exports;
      }
      R4.n = (e3,) => {
        var o4 = e3 && e3.__esModule ? () => e3.default : () => e3;
        return R4.d(o4, { a: o4, },), o4;
      },
        R4.d = (e3, o4,) => {
          for (var t3 in o4) {
            R4.o(o4, t3,) && !R4.o(e3, t3,) && Object.defineProperty(e3, t3, { enumerable: true, get: o4[t3], },);
          }
        },
        R4.g = function () {
          if (typeof globalThis == 'object') {
            return globalThis;
          }
          try {
            return this || new Function('return this',)();
          } catch {
            if (typeof window == 'object') {
              return window;
            }
          }
        }(),
        R4.o = (e3, o4,) => Object.prototype.hasOwnProperty.call(e3, o4,),
        R4.nmd = (e3,) => (e3.paths = [], e3.children || (e3.children = []), e3);
      var B3 = {};
      return (() => {
        'use strict';
        R4.d(B3, { default: () => v4, },);
        var e3 = R4(8156,), o4 = R4.n(e3,), t3 = R4(7403,), r4 = R4(8446,), i3 = R4.n(r4,);
        function a5(y5,) {
          return a5 = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (d4,) {
              return typeof d4;
            }
            : function (d4,) {
              return d4 && typeof Symbol == 'function' && d4.constructor === Symbol && d4 !== Symbol.prototype ? 'symbol' : typeof d4;
            },
            a5(y5,);
        }
        function n4(y5, d4,) {
          for (var g4 = 0; g4 < d4.length; g4++) {
            var _2 = d4[g4];
            _2.enumerable = _2.enumerable || false,
              _2.configurable = true,
              'value' in _2 && (_2.writable = true),
              Object.defineProperty(y5, f3(_2.key,), _2,);
          }
        }
        function u2(y5, d4,) {
          return u2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (g4, _2,) {
            return g4.__proto__ = _2, g4;
          },
            u2(y5, d4,);
        }
        function c3(y5,) {
          if (y5 === void 0) {
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called',);
          }
          return y5;
        }
        function p6(y5,) {
          return p6 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (d4,) {
            return d4.__proto__ || Object.getPrototypeOf(d4,);
          },
            p6(y5,);
        }
        function f3(y5,) {
          var d4 = function (g4, _2,) {
            if (a5(g4,) !== 'object' || g4 === null) {
              return g4;
            }
            var E3 = g4[Symbol.toPrimitive];
            if (E3 !== void 0) {
              var A3 = E3.call(g4, 'string',);
              if (a5(A3,) !== 'object') {
                return A3;
              }
              throw new TypeError('@@toPrimitive must return a primitive value.',);
            }
            return String(g4,);
          }(y5,);
          return a5(d4,) === 'symbol' ? d4 : String(d4,);
        }
        var l4 = function (y5,) {
          (function (m4, w4,) {
            if (typeof w4 != 'function' && w4 !== null) {
              throw new TypeError('Super expression must either be null or a function',);
            }
            m4.prototype = Object.create(w4 && w4.prototype, { constructor: { value: m4, writable: true, configurable: true, }, },),
              Object.defineProperty(m4, 'prototype', { writable: false, },),
              w4 && u2(m4, w4,);
          })(O2, y5,);
          var d4,
            g4,
            _2,
            E3,
            A3 = (_2 = O2,
              E3 = function () {
                if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) {
                  return false;
                }
                if (typeof Proxy == 'function') {
                  return true;
                }
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                  },),),
                    true;
                } catch {
                  return false;
                }
              }(),
              function () {
                var m4, w4 = p6(_2,);
                if (E3) {
                  var N = p6(this,).constructor;
                  m4 = Reflect.construct(w4, arguments, N,);
                } else {
                  m4 = w4.apply(this, arguments,);
                }
                return function (L, M4,) {
                  if (M4 && (a5(M4,) === 'object' || typeof M4 == 'function')) {
                    return M4;
                  }
                  if (M4 !== void 0) {
                    throw new TypeError('Derived constructors may only return object or undefined',);
                  }
                  return c3(L,);
                }(this, m4,);
              });
          function O2() {
            var m4, w4, N, L;
            (function (V, x4,) {
              if (!(V instanceof x4)) {
                throw new TypeError('Cannot call a class as a function',);
              }
            })(this, O2,);
            for (var M4 = arguments.length, S2 = new Array(M4,), U2 = 0; U2 < M4; U2++) {
              S2[U2] = arguments[U2];
            }
            return w4 = c3(m4 = A3.call.apply(A3, [this,].concat(S2,),),),
              L = { instance: null, },
              (N = f3(N = 'state',)) in w4
                ? Object.defineProperty(w4, N, { value: L, enumerable: true, configurable: true, writable: true, },)
                : w4[N] = L,
              m4;
          }
          return d4 = O2,
            (g4 = [{
              key: 'componentDidMount',
              value: function () {
                var m4 = this, w4 = new t3.default(this.typewriter, this.props.options,);
                this.setState({ instance: w4, }, function () {
                  var N = m4.props.onInit;
                  N && N(w4,);
                },);
              },
            }, {
              key: 'componentDidUpdate',
              value: function (m4,) {
                i3()(this.props.options, m4.options,) ||
                  this.setState({ instance: new t3.default(this.typewriter, this.props.options,), },);
              },
            }, {
              key: 'componentWillUnmount',
              value: function () {
                this.state.instance && this.state.instance.stop();
              },
            }, {
              key: 'render',
              value: function () {
                var m4 = this, w4 = this.props.component;
                return o4().createElement(w4, {
                  ref: function (N,) {
                    return m4.typewriter = N;
                  },
                  className: 'Typewriter',
                  'data-testid': 'typewriter-wrapper',
                },);
              },
            },]) && n4(d4.prototype, g4,),
            Object.defineProperty(d4, 'prototype', { writable: false, },),
            O2;
        }(e3.Component,);
        l4.defaultProps = { component: 'div', };
        let v4 = l4;
      })(),
        B3.default;
    })(),);
},);
var W2 = {};
Pt(W2, { default: () => Mt, },);
var Ct = dt(st(),);
q(W2, dt(st(),),);
var { default: ht, ...Lt } = Ct;
var Mt = ht !== void 0 ? ht : Lt;

// https :https://framerusercontent.com/modules/vgSbxmWWvbgW6ShllXld/9oZlwlOxsp6zJVFpVkIp/Typewriter.js
var headingStyles = (props,) => {
  return {
    width: '100%',
    height: '100%',
    // display: "flex",
    // placeContent: "center",
    // placeItems: "center",
    position: 'relative',
    overflow: 'visible',
    fontSize: props.font.fontSize,
    fontFamily: props.font.fontFamily || 'Inter',
    fontWeight: props.font.fontWeight,
    letterSpacing: props.font.letterSpacing,
    lineHeight: props.font.lineHeightType ? props.font.lineHeight : `${props.font.lineHeightPixels}px`,
    textAlign: props.font.textAlign,
    whiteSpace: props.font.whiteSpace,
    color: props.color,
    left: `${props.font.offset}%`,
    margin: 0,
    padding: 0,
  };
};
function TypeWriter(props,) {
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const strings = props.text.split(' ',);
  const content = props.split ? strings : props.text;
  const canvasContent = props.split ? strings[0] : props.text;
  const tagMap = { paragraph: 'p', heading1: 'h1', heading2: 'h2', heading3: 'h3', };
  const Tag = tagMap[props.tag];
  const cursorStyles = `.${props.id} .Typewriter__cursor { color: ${props.cursorColor}; }`;
  const TypeWriterPure = () =>
    /* @__PURE__ */ _jsx(Mt, {
      options: {
        strings: content,
        autoStart: props.autoStart,
        loop: props.loop,
        cursor: props.cursor,
        pauseFor: props.pauseFor * 1e3,
        delay: props.delayType ? 'natural' : props.delayNumber * 1e3,
      },
      onInit: (typewriter,) => {
        typewriter.callFunction((state,) => {
          if (props.loop) {
            return;
          }
          if (!props.caretVisibility) {
            state.elements.cursor.style.display = 'none';
          }
        },);
      },
    },);
  const TypeWriterWithCSS = withCSS(
    () =>
      /* @__PURE__ */ _jsx('span', {
        style: { display: 'contents', },
        className: `${props.id}`,
        children: /* @__PURE__ */ _jsx(TypeWriterPure, {},),
      },),
    cursorStyles,
  );
  return /* @__PURE__ */ _jsx(Tag, {
    style: headingStyles(props,),
    children: isCanvas ? canvasContent : /* @__PURE__ */ _jsx(TypeWriterWithCSS, {},),
  },);
}
TypeWriter.displayName = 'Typewriter';
TypeWriter.defaultProps = {
  text: 'Hello World',
  font: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: 1.2,
    lineHeightType: true,
    lineHeightPixels: 100,
    letterSpacing: 0,
    offset: 0,
    whiteSpace: 'nowrap',
  },
  cursor: '|',
  delayType: true,
  delayNumber: 0.2,
  pauseFor: 1,
  loop: true,
  caretVisibility: true,
  split: false,
  autoStart: true,
  tag: 'heading1',
  color: '#888',
  cursorColor: 'rgba(136, 136, 136, 0.5)',
};
addPropertyControls(TypeWriter, {
  tag: {
    title: 'Tag',
    type: ControlType.Enum,
    options: ['heading1', 'heading2', 'heading3', 'paragraph',],
    optionTitles: ['H1', 'H2', 'H3', 'P',],
    defaultValue: TypeWriter.defaultProps.tag,
    displaySegmentedControl: true,
  },
  text: { type: ControlType.String, title: 'Text', defaultValue: TypeWriter.defaultProps.text, },
  autoStart: { title: 'Autoplay', type: ControlType.Boolean, defaultValue: TypeWriter.defaultProps.autoStart, },
  split: { title: 'Per Word', type: ControlType.Boolean, defaultValue: TypeWriter.defaultProps.split, },
  loop: { title: 'Loop', type: ControlType.Boolean, defaultValue: TypeWriter.defaultProps.loop, },
  caretVisibility: {
    title: 'Caret',
    type: ControlType.Boolean,
    enabledTitle: 'Show',
    disabledTitle: 'Hide',
    defaultValue: TypeWriter.defaultProps.caretVisibility,
    hidden: (props,) => props.loop,
  },
  delayType: {
    title: 'Delay',
    type: ControlType.Boolean,
    enabledTitle: 'Natural',
    disabledTitle: 'Number',
    defaultValue: TypeWriter.defaultProps.delayType,
  },
  delayNumber: {
    title: 'Delay',
    type: ControlType.Number,
    step: 0.1,
    min: 0,
    defaultValue: TypeWriter.defaultProps.delayNumber,
    displayStepper: true,
    hidden: (props,) => props.delayType,
  },
  pauseFor: { title: 'Pause', type: ControlType.Number, min: 0, defaultValue: TypeWriter.defaultProps.pauseFor, displayStepper: true, },
  color: { type: ControlType.Color, defaultValue: TypeWriter.defaultProps.color, },
  font: {
    type: ControlType.Object,
    controls: {
      fontFamily: { title: 'Font', type: ControlType.String, placeholder: 'Inter', defaultValue: TypeWriter.defaultProps.font.fontFamily, },
      fontSize: {
        title: 'Size',
        type: ControlType.Number,
        min: 0,
        max: 500,
        step: 0.5,
        defaultValue: TypeWriter.defaultProps.font.fontSize,
      },
      fontWeight: {
        type: ControlType.Enum,
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900,],
        defaultValue: TypeWriter.defaultProps.font.fontWeight,
        title: 'Weight',
      },
      textAlign: {
        type: ControlType.Enum,
        displaySegmentedControl: true,
        title: 'Align',
        options: ['left', 'center', 'right',],
        optionTitles: ['Left', 'Center', 'Right',],
        defaultValue: TypeWriter.defaultProps.font.textAlign,
      },
      letterSpacing: {
        title: 'Letter',
        type: ControlType.Number,
        defaultValue: TypeWriter.defaultProps.font.letterSpacing,
        step: 0.1,
        displayStepper: true,
      },
      offset: {
        type: ControlType.Number,
        title: 'Offset',
        min: -100,
        max: 100,
        displayStepper: true,
        step: 0.25,
        defaultValue: TypeWriter.defaultProps.font.offset,
        unit: '%',
      },
      whiteSpace: {
        type: ControlType.Enum,
        title: 'Space',
        options: ['normal', 'nowrap', 'pre', 'pre-wrap', 'preline', 'break-spaces',],
        optionTitles: ['Normal', 'No Wrap', 'Pre', 'Pre Wrap', 'Preline', 'Break Spaces',],
        defaultValue: TypeWriter.defaultProps.font.whiteSpace,
      },
      lineHeight: {
        type: ControlType.Number,
        title: 'Line',
        min: -500,
        max: 500,
        displayStepper: true,
        step: 0.1,
        defaultValue: TypeWriter.defaultProps.font.lineHeight,
        hidden: (props,) => !props.lineHeightType,
      },
      lineHeightPixels: {
        type: ControlType.Number,
        title: 'Line',
        min: -500,
        max: 500,
        displayStepper: true,
        step: 0.1,
        defaultValue: TypeWriter.defaultProps.font.lineHeightPixels,
        hidden: (props,) => props.lineHeightType,
      },
      lineHeightType: {
        type: ControlType.Boolean,
        title: ' ',
        enabledTitle: 'em',
        disabledTitle: 'px',
        defaultValue: TypeWriter.defaultProps.font.lineHeightType,
      },
    },
  },
  cursor: { title: 'Cursor', type: ControlType.String, defaultValue: TypeWriter.defaultProps.cursor, placeholder: 'Character', },
  cursorColor: { type: ControlType.Color, title: ' ', defaultValue: TypeWriter.defaultProps.cursorColor, },
},);

// https :https://framerusercontent.com/modules/dts3KkzoHO6kQWh7b5Ug/Jl4LcFSHJUrJcPe7QrUZ/A4GdXWFMj.js
import { jsx as _jsx5, jsxs as _jsxs3, } from 'react/jsx-runtime';
import {
  addFonts as addFonts3,
  addPropertyControls as addPropertyControls5,
  ControlType as ControlType8,
  cx as cx3,
  getFonts as getFonts2,
  getPropertyControls,
  RichText as RichText2,
  SVG as SVG3,
  useLocaleInfo as useLocaleInfo3,
  useVariantState as useVariantState3,
  withCSS as withCSS5,
} from 'unframer';
import { LayoutGroup as LayoutGroup3, motion as motion4, MotionConfigContext as MotionConfigContext3, } from 'unframer';
import * as React5 from 'react';

// https :https://framerusercontent.com/modules/GuWa1Ud162ubWf1k1mKH/dP9Wr4BfySniV887TUM3/FpOKcRGFb.js
import { jsx as _jsx4, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls4,
  ControlType as ControlType7,
  cx as cx2,
  getFonts,
  RichText,
  SVG as SVG2,
  useLocaleCode,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS4,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion3, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React4 from 'react';

// https :https://framerusercontent.com/modules/TjsuAE5glU2n7MoNSdHk/uk4tNJP8azIVk1aBSiz4/Slider_1.js
import { jsx as _jsx2, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType5,
  RenderTarget as RenderTarget4,
  withCSS as withCSS2,
} from 'unframer';
import { animate as animate2, motion, transform, useTransform, } from 'unframer';
import { useCallback as useCallback2, useRef as useRef3, useState as useState3, } from 'react';

// https :https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType as ControlType2, } from 'unframer';
var containerStyles = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: 'rgba(136, 85, 255, 0.3)',
  color: '#85F',
  border: '1px dashed #85F',
  flexDirection: 'column',
};
var defaultEvents = {
  onClick: {
    type: ControlType2.EventHandler,
  },
  onMouseEnter: {
    type: ControlType2.EventHandler,
  },
  onMouseLeave: {
    type: ControlType2.EventHandler,
  },
};
var fontSizeOptions = {
  type: ControlType2.Number,
  title: 'Font Size',
  min: 2,
  max: 200,
  step: 1,
  displayStepper: true,
};
var fontControls = {
  font: {
    type: ControlType2.Boolean,
    title: 'Font',
    defaultValue: false,
    disabledTitle: 'Default',
    enabledTitle: 'Custom',
  },
  fontFamily: {
    type: ControlType2.String,
    title: 'Family',
    placeholder: 'Inter',
    hidden: ({ font, },) => !font,
  },
  fontWeight: {
    type: ControlType2.Enum,
    title: 'Weight',
    options: [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
    ],
    optionTitles: [
      'Thin',
      'Extra-light',
      'Light',
      'Regular',
      'Medium',
      'Semi-bold',
      'Bold',
      'Extra-bold',
      'Black',
    ],
    hidden: ({ font, },) => !font,
  },
};

// https :https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget, } from 'unframer';
import { useEffect, } from 'react';

// https :https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js
import { useRef, } from 'react';
function useConstant(init,) {
  const ref = useRef(null,);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// https :https://framerusercontent.com/modules/D2Lz5CmnNVPZFFiZXalt/QaCzPbriZBfXWZIIycFI/colorFromToken.js
import { Color, } from 'unframer';

// https :https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js
import { MotionValue, } from 'unframer';
var isMotionValue = (v4,) => v4 instanceof MotionValue;

// https :https://framerusercontent.com/modules/xDiQsqBGXzmMsv7AlEVy/uhunpMiNsbXxzjlXsg1y/useUniqueClassName.js
import * as React from 'react';

// https :https://framerusercontent.com/modules/ETACN5BJyFTSo0VVDJfu/NHRqowOiXkF9UwOzczF7/variantUtils.js
import { ControlType as ControlType3, } from 'unframer';

// https :https://framerusercontent.com/modules/eMBrwoqQK7h6mEeGQUH8/GuplvPJVjmxpk9zqOTcb/isBrowser.js
import { useMemo, } from 'react';

// https :https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect3, } from 'react';
function useOnChange(value, callback,) {
  useEffect3(
    () => (
      // @ts-ignore this should be detected as a MV :shrug:
      isMotionValue(value,) ? value.onChange(callback,) : void 0
    ),
  );
}

// https :https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback, useEffect as useEffect4, useRef as useRef2, } from 'react';
import { animate, motionValue, RenderTarget as RenderTarget2, } from 'unframer';
function useAutoMotionValue(inputValue, options,) {
  var ref;
  const optionsRef = useRef2(options,);
  const animation = useRef2();
  const didInitialMount = useRef2(false,);
  const isOnCanvas = RenderTarget2.current() === RenderTarget2.canvas;
  const onChangeDeps = (options === null || options === void 0 ? void 0 : options.onChangeDeps) ? options.onChangeDeps : [];
  const onChange = useCallback(options === null || options === void 0 ? void 0 : options.onChange, [
    ...onChangeDeps,
  ],);
  const transformer = useCallback(
    (value2,) =>
      ((ref = optionsRef.current) === null || ref === void 0 ? void 0 : ref.transform) ? optionsRef.current.transform(value2,) : value2,
    [],
  );
  const value = useConstant(
    () => isMotionValue(inputValue,) ? inputValue : motionValue(transformer(inputValue,),),
  );
  useEffect4(() => {
    if (!isMotionValue(inputValue,) && didInitialMount.current) {
      var ref1, ref2;
      const newValue = transformer(inputValue,);
      (ref1 = animation.current) === null || ref1 === void 0 ? void 0 : ref1.stop();
      if (onChange) {
        onChange(newValue, value,);
      }
      if (((ref2 = optionsRef.current) === null || ref2 === void 0 ? void 0 : ref2.animate) && !isOnCanvas) {
        var ref3;
        animation.current = animate(value, newValue, (ref3 = optionsRef.current) === null || ref3 === void 0 ? void 0 : ref3.transition,);
      } else {
        value.set(newValue,);
      }
    }
    didInitialMount.current = true;
  }, [
    inputValue,
    ...onChangeDeps,
  ],);
  return value;
}

// https :https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore, } from 'unframer';
import { useEffect as useEffect5, } from 'react';

// https :https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo as useMemo2, } from 'react';
import { RenderTarget as RenderTarget3, } from 'unframer';

// https :https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React2 from 'react';

// https :https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo3, } from 'react';
import { ControlType as ControlType4, } from 'unframer';
var borderRadiusControl = {
  borderRadius: {
    title: 'Radius',
    type: ControlType4.FusedNumber,
    toggleKey: 'isMixedBorderRadius',
    toggleTitles: [
      'Radius',
      'Radius per corner',
    ],
    valueKeys: [
      'topLeftRadius',
      'topRightRadius',
      'bottomRightRadius',
      'bottomLeftRadius',
    ],
    valueLabels: [
      'TL',
      'TR',
      'BR',
      'BL',
    ],
    min: 0,
  },
};
var paddingControl = {
  padding: {
    type: ControlType4.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: [
      'Padding',
      'Padding per side',
    ],
    valueKeys: [
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
    ],
    valueLabels: [
      'T',
      'R',
      'B',
      'L',
    ],
    min: 0,
    title: 'Padding',
  },
};

// https :https://framer.com/m/framer/lodash.js@0.3.0
var FUNC_ERROR_TEXT = 'Expected a function';
var nativeMax = Math.max;
var nativeMin = Math.min;
var NAN = 0 / 0;
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
var now = function () {
  return Date.now();
};
function isObject(value,) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
function toNumber(value,) {
  if (typeof value == 'number') {
    return value;
  }
  if (typeof value == 'symbol') {
    return NAN;
  }
  if (isObject(value,)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other,) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '',);
  var isBinary = reIsBinary.test(value,);
  return isBinary || reIsOctal.test(value,) ? freeParseInt(value.slice(2,), isBinary ? 2 : 8,) : reIsBadHex.test(value,) ? NAN : +value;
}
function debounce(func, wait, options,) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT,);
  }
  wait = toNumber(wait,) || 0;
  if (isObject(options,)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait,) || 0, wait,) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time,) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args,);
    return result;
  }
  function leadingEdge(time,) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait,);
    return leading ? invokeFunc(time,) : result;
  }
  function remainingWait(time,) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke,) : timeWaiting;
  }
  function shouldInvoke(time,) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time,)) {
      return trailingEdge(time,);
    }
    timerId = setTimeout(timerExpired, remainingWait(time,),);
  }
  function trailingEdge(time,) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time,);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId,);
    }
    lastInvokeTime = 0;
    lastArgs =
      lastCallTime =
      lastThis =
      timerId =
        void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now(),);
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time,);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime,);
      }
      if (maxing) {
        clearTimeout(timerId,);
        timerId = setTimeout(timerExpired, wait,);
        return invokeFunc(lastCallTime,);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait,);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function throttle(func, wait, options,) {
  var leading = true, trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT,);
  }
  if (isObject(options,)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading,
    maxWait: wait,
    trailing,
  },);
}

// https :https://framerusercontent.com/modules/TjsuAE5glU2n7MoNSdHk/uk4tNJP8azIVk1aBSiz4/Slider_1.js
var KnobOptions;
(function (KnobOptions2,) {
  KnobOptions2['Hide'] = 'Hide';
  KnobOptions2['Hover'] = 'Hover';
  KnobOptions2['Show'] = 'Show';
})(KnobOptions || (KnobOptions = {}),);
var Slider = withCSS2(function Slider2(props,) {
  const {
    value: valueProp,
    trackHeight,
    fillColor,
    focusColor,
    min,
    max,
    onChange,
    onChangeLive,
    onMax,
    onMin,
    trackColor,
    trackRadius,
    knobSize,
    knobColor,
    constrainKnob,
    shadow,
    shouldAnimateChange,
    transition,
    overdrag,
    knobSetting,
    style,
  } = props;
  const [hovered, setHovered,] = useState3(false,);
  const [focused, setFocused,] = useState3(false,);
  const onCanvas = RenderTarget4.current() === RenderTarget4.canvas;
  const shouldAnimate = shouldAnimateChange && !onCanvas;
  const isConstrained = constrainKnob && knobSetting === KnobOptions.Show;
  const showKnob = knobSetting !== KnobOptions.Hide;
  const input = useRef3();
  const knobPadding = 8;
  const updateValue = useCallback2((newVal, target,) => {
    throttledInputUpdate(newVal,);
    if (onChange) {
      onChange(newVal,);
    }
    if (shouldAnimate) {
      animate2(target, newVal, transition,);
    } else {
      requestAnimationFrame(() => target.set(newVal,));
    }
  }, [transition, shouldAnimate, onChange,],);
  const value = useAutoMotionValue(valueProp, {
    onChange: updateValue,
    transform: (value2,) => transform(value2, [0, 100,], [min, max,],),
  },);
  const knobX = useTransform(value, [min, max,], ['0%', '100%',],);
  const normalizedValue = useTransform(value, [min, max,], [0, 1,],);
  const throttledInputUpdate = useCallback2(
    throttle((val,) => {
      var ref;
      if ((ref = input.current) === null || ref === void 0 ? void 0 : ref.value) {
        input.current.value = val;
      }
    }, 100,),
    [input,],
  );
  useOnChange(value, (val,) => {
    if (isMotionValue(valueProp,)) {
      throttledInputUpdate(val,);
    }
    if (onMax && val >= max) {
      onMax();
    }
    if (onMin && val <= min) {
      onMin();
    }
    if (onChangeLive) {
      onChangeLive(val,);
    }
  },);
  const handleInputChange = (e3,) => {
    updateValue(parseFloat(e3.target.value,), value,);
  };
  const handleMouseDown = (e3,) => {
    if (parseFloat(e3.target.value,) !== 0) {
      updateValue(parseFloat(e3.target.value,), value,);
    }
  };
  const handleMouseUp = () => {
  };
  const totalKnobWidth = showKnob ? knobSize + knobPadding : knobPadding;
  const totalHeight = Math.max(knobSize + knobPadding, trackHeight,);
  return /* @__PURE__ */ _jsxs('div', {
    className: 'framer-default-slider',
    onMouseEnter: () => setHovered(true,),
    onMouseLeave: () => setHovered(false,),
    style: {
      position: 'relative',
      ...style,
      alignItems: 'center',
      justifyContent: 'flex-start',
      border: `0px solid ${focusColor}`,
      '--framer-default-slider-height': totalHeight,
      '--framer-default-slider-width': totalKnobWidth,
    },
    children: [
      /* @__PURE__ */ _jsx2('input', {
        ref: input,
        style: {
          flexShrink: 0,
          minHeight: totalHeight,
          opacity: 0,
          margin: 0,
          display: 'flex',
          ...style,
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          ...!isConstrained && { width: `calc(100% + ${totalKnobWidth}px)`, marginLeft: -totalKnobWidth / 2, },
        },
        onFocus: () => setFocused(true,),
        onBlur: () => setFocused(false,),
        type: 'range',
        min,
        max,
        defaultValue: -1,
        step: 'any',
        onChange: handleInputChange,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
      },),
      /* @__PURE__ */ _jsx2('div', {
        style: {
          background: trackColor,
          position: 'absolute',
          top: `calc(50% - ${Math.ceil(trackHeight / 2,)}px)`,
          borderRadius: trackRadius,
          display: 'flex',
          height: trackHeight,
          width: '100%',
          transformOrigin: 'left',
          pointerEvents: 'none',
          overflow: 'hidden',
        },
        children: /* @__PURE__ */ _jsx2(motion.div, {
          style: {
            height: trackHeight,
            width: '100%',
            background: fillColor,
            scaleX: normalizedValue,
            position: 'absolute',
            top: `calc(50% - ${Math.ceil(trackHeight / 2,)}px)`,
            transformOrigin: 'left',
            pointerEvents: 'none',
          },
        },),
      },),
      /* @__PURE__ */ _jsx2(motion.div, {
        style: {
          x: knobX,
          position: 'absolute',
          display: 'flex',
          width: '100%',
          top: `calc(50% - ${Math.floor(knobSize / 2,)}px)`,
          pointerEvents: 'none',
          ...isConstrained ? { width: `calc(100% - ${knobSize}px`, left: 0, } : { width: `100%`, left: -knobSize / 2, },
        },
        children: /* @__PURE__ */ _jsx2(motion.div, {
          initial: false,
          animate: { scale: hovered && knobSetting === KnobOptions.Hover || knobSetting === KnobOptions.Show ? 1 : 0, },
          transition: { type: 'spring', stiffness: 900, damping: 40, },
          style: {
            transformOrigin: '50% 50%',
            width: knobSize,
            height: knobSize,
            borderRadius: '50%',
            background: knobColor,
            pointerEvents: 'none',
            boxShadow: `0px 1px 2px 0px ${shadow}, 
                                0px 2px 4px 0px ${shadow}, 
                                0px 4px 8px 0px ${shadow}`,
          },
        },),
      },),
    ],
  },);
}, [
  '.framer-default-slider input[type=range] {  width: 100%; height: 100% background:transparent margin: 0;}',
  '.framer-default-slider input[type=range]:focus { outline: none; }',
  '.framer-default-slider input[type=range]::-ms-track { width: 100%; cursor: pointer; background: transparent; border-color: transparent; color: transparent; }',
  '.framer-default-slider input[type=range]::-webkit-slider-thumb { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }',
  '.framer-default-slider input[type=range]::-moz-range-thumb { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }',
  '.framer-default-slider input[type=range]::-ms-thumb  { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }',
],);
Slider.displayName = 'Slider';
Slider.defaultProps = {
  height: 20,
  width: 200,
  trackHeight: 4,
  fillColor: '#09F',
  trackColor: '#DDD',
  knobColor: '#FFF',
  focusColor: 'rgba(0, 153, 255,0)',
  shadow: 'rgba(0,0,0,0.1)',
  knobSize: 20,
  overdrag: true,
  min: 0,
  max: 100,
  value: 50,
  trackRadius: 5,
  knobSetting: KnobOptions.Show,
  constrainKnob: false,
  transition: { type: 'spring', delay: 0, stiffness: 750, damping: 50, },
  shouldAnimateChange: true,
};
addPropertyControls2(Slider, {
  fillColor: { title: 'Tint', type: ControlType5.Color, },
  trackColor: { title: 'Track', type: ControlType5.Color, },
  knobColor: { title: 'Knob', type: ControlType5.Color, },
  shadow: { type: ControlType5.Color, title: 'Shadow', },
  // focusColor: {
  //     title: "Focus",
  //     type: ControlType.Color,
  // },
  shouldAnimateChange: { type: ControlType5.Boolean, title: 'Changes', enabledTitle: 'Animate', disabledTitle: 'Instant', },
  transition: { type: ControlType5.Transition, defaultValue: Slider.defaultProps.transition, },
  knobSetting: { type: ControlType5.Enum, displaySegmentedControl: true, title: 'Knob', options: ['Hide', 'Hover', 'Show',], },
  constrainKnob: {
    type: ControlType5.Boolean,
    title: 'Constrain',
    enabledTitle: 'Yes',
    disabledTitle: 'No',
    hidden: ({ knobSetting, },) => knobSetting !== KnobOptions.Show,
  },
  knobSize: {
    type: ControlType5.Number,
    title: 'Knob',
    min: 10,
    max: 100,
    hidden: ({ knobSetting, },) => knobSetting === KnobOptions.Hide,
  },
  value: { type: ControlType5.Number, title: 'Value', min: 0, max: 100, unit: '%', },
  trackHeight: { title: 'Height', type: ControlType5.Number, min: 0, },
  min: { title: 'Min', type: ControlType5.Number, displayStepper: true, },
  trackRadius: { type: ControlType5.Number, displayStepper: true, min: 0, max: 200, title: 'Radius', },
  max: { title: 'Max', type: ControlType5.Number, displayStepper: true, },
  onChange: { type: ControlType5.EventHandler, },
  onMax: { type: ControlType5.EventHandler, },
  onMin: { type: ControlType5.EventHandler, },
},);

// https :https://framerusercontent.com/modules/VFd7g4pPpeQfOVRIoRr0/wzMpOw8WySsXu5Z3mOOv/ydC9w7qn8.js
import { fontStore as r, } from 'unframer';
r.loadWebFontsFromSelectors(['CUSTOM;PP Supply Sans Medium',],);
var fonts = [{ family: 'PP Supply Sans Medium', url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf', },];
var css = [
  '.framer-flOLY .framer-styles-preset-90m2e0:not(.rich-text-wrapper), .framer-flOLY .framer-styles-preset-90m2e0.rich-text-wrapper h4 { --framer-font-family: "PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, #101942); --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className = 'framer-flOLY';

// https :https://framerusercontent.com/modules/DT1hIxOdb4kno6gt2cr8/UCSXqWITtmuGmi2ZERWH/gGsg8DxuX.js
import { jsx as _jsx3, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls3,
  ControlType as ControlType6,
  cx,
  SVG,
  useActiveVariantCallback,
  useLocaleInfo,
  useVariantState,
  withCSS as withCSS3,
} from 'unframer';
import { LayoutGroup, motion as motion2, MotionConfigContext, } from 'unframer';
import * as React3 from 'react';
var enabledGestures = { nPpSWwiWE: { hover: true, pressed: true, }, r5tWv5mqY: { hover: true, pressed: true, }, };
var cycleOrder = ['r5tWv5mqY', 'nPpSWwiWE',];
var variantClassNames = { nPpSWwiWE: 'framer-v-1sknhfx', r5tWv5mqY: 'framer-v-afvvw', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var Transition = ({ value, children, },) => {
  const config = React3.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap = { off: 'r5tWv5mqY', on: 'nPpSWwiWE', };
var getProps = ({ height, id, width, ...props },) => {
  var _variant, ref;
  return {
    ...props,
    variant:
      (ref = (_variant = humanReadableVariantMap[props.variant]) !== null && _variant !== void 0 ? _variant : props.variant) !== null &&
        ref !== void 0
        ? ref
        : 'r5tWv5mqY',
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React3.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'r5tWv5mqY',
    enabledGestures,
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTaptllhbd = activeVariantCallback(async (...args) => {
    setVariant('nPpSWwiWE',);
  },);
  const onTap1cy162z = activeVariantCallback(async (...args) => {
    setVariant('r5tWv5mqY',);
  },);
  const defaultLayoutId = React3.useId();
  return /* @__PURE__ */ _jsx3(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx3(motion2.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx('framer-L5s7X', classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx3(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx3(motion2.div, {
          ...restProps,
          className: cx('framer-afvvw', className2,),
          'data-framer-name': 'off',
          'data-highlight': true,
          layoutDependency,
          layoutId: 'r5tWv5mqY',
          onTap: onTaptllhbd,
          ref,
          style: { ...style, },
          ...addPropertyOverrides(
            {
              'nPpSWwiWE-hover': { 'data-framer-name': void 0, },
              'nPpSWwiWE-pressed': { 'data-framer-name': void 0, },
              'r5tWv5mqY-hover': { 'data-framer-name': void 0, },
              'r5tWv5mqY-pressed': { 'data-framer-name': void 0, },
              nPpSWwiWE: { 'data-framer-name': 'on', onTap: onTap1cy162z, },
            },
            baseVariant,
            gestureVariant,
          ),
          children: /* @__PURE__ */ _jsx3(motion2.div, {
            className: 'framer-4zjiij',
            'data-framer-name': 'Selected=true, State=Pressed',
            layoutDependency,
            layoutId: 'n23OCPwPr',
            children: /* @__PURE__ */ _jsx3(motion2.div, {
              className: 'framer-ikwtg4',
              'data-framer-name': 'container',
              layoutDependency,
              layoutId: 'LapWIZHAg',
              style: {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
              },
              variants: { 'nPpSWwiWE-pressed': { backgroundColor: 'rgba(29, 27, 32, 0.12)', }, },
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-1n0ftg3',
                'data-framer-name': 'state-layer',
                layoutDependency,
                layoutId: 'ysxxTKwvI',
                style: { backgroundColor: 'rgba(0, 0, 0, 0)', },
                variants: {
                  'nPpSWwiWE-hover': { backgroundColor: 'rgba(29, 27, 32, 0.08)', },
                  'r5tWv5mqY-hover': { backgroundColor: 'rgba(29, 27, 32, 0.12)', },
                },
                children: /* @__PURE__ */ _jsx3(motion2.div, {
                  className: 'framer-utueao',
                  'data-framer-name': 'icon',
                  layoutDependency,
                  layoutId: 'B_Q84JU7b',
                  children: /* @__PURE__ */ _jsx3(SVG, {
                    className: 'framer-1us996j',
                    'data-framer-name': 'icon',
                    layout: 'position',
                    layoutDependency,
                    layoutId: 'EjvYoFDFF',
                    opacity: 1,
                    svg:
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z" fill="#3F484A"></path><path d="M 10 15 C 12.761 15 15 12.761 15 10 C 15 7.239 12.761 5 10 5 C 7.239 5 5 7.239 5 10 C 5 12.761 7.239 15 10 15 Z" fill="transparent"></path></svg>',
                    svgContentId: 246232588,
                    withExternalLayout: true,
                    ...addPropertyOverrides(
                      {
                        nPpSWwiWE: {
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 0 C 4.48 0 0 4.48 0 10 C 0 15.52 4.48 20 10 20 C 15.52 20 20 15.52 20 10 C 20 4.48 15.52 0 10 0 Z M 10 18 C 5.58 18 2 14.42 2 10 C 2 5.58 5.58 2 10 2 C 14.42 2 18 5.58 18 10 C 18 14.42 14.42 18 10 18 Z" fill="#006973"></path><path d="M 10 15 C 12.761 15 15 12.761 15 10 C 15 7.239 12.761 5 10 5 C 7.239 5 5 7.239 5 10 C 5 12.761 7.239 15 10 15 Z" fill="rgb(0,105,115)"></path></svg>',
                          svgContentId: 3684307705,
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css2 = [
  '.framer-L5s7X [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-L5s7X .framer-1o2obsq { display: block; }',
  '.framer-L5s7X .framer-afvvw { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-L5s7X .framer-4zjiij { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-L5s7X .framer-ikwtg4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-L5s7X .framer-1n0ftg3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }',
  '.framer-L5s7X .framer-utueao { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }',
  '.framer-L5s7X .framer-1us996j { flex: none; height: 20px; left: 2px; position: absolute; top: 2px; width: 20px; }',
  '.framer-L5s7X .framer-v-afvvw .framer-afvvw, .framer-L5s7X .framer-v-1sknhfx .framer-afvvw { cursor: pointer; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-L5s7X .framer-afvvw, .framer-L5s7X .framer-4zjiij, .framer-L5s7X .framer-ikwtg4, .framer-L5s7X .framer-1n0ftg3 { gap: 0px; } .framer-L5s7X .framer-afvvw > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-L5s7X .framer-afvvw > :first-child { margin-top: 0px; } .framer-L5s7X .framer-afvvw > :last-child { margin-bottom: 0px; } .framer-L5s7X .framer-4zjiij > *, .framer-L5s7X .framer-ikwtg4 > *, .framer-L5s7X .framer-1n0ftg3 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-L5s7X .framer-4zjiij > :first-child, .framer-L5s7X .framer-ikwtg4 > :first-child, .framer-L5s7X .framer-1n0ftg3 > :first-child { margin-left: 0px; } .framer-L5s7X .framer-4zjiij > :last-child, .framer-L5s7X .framer-ikwtg4 > :last-child, .framer-L5s7X .framer-1n0ftg3 > :last-child { margin-right: 0px; } }',
];
var FramergGsg8DxuX = withCSS3(Component, css2, 'framer-L5s7X',);
var stdin_default = FramergGsg8DxuX;
FramergGsg8DxuX.displayName = 'Radio';
FramergGsg8DxuX.defaultProps = { height: 48, width: 48, };
addPropertyControls3(FramergGsg8DxuX, {
  variant: { options: ['r5tWv5mqY', 'nPpSWwiWE',], optionTitles: ['off', 'on',], title: 'Variant', type: ControlType6.Enum, },
},);
addFonts(FramergGsg8DxuX, [],);

// https :https://framerusercontent.com/modules/XVtd2bf3UBXWeoE8atnJ/p0XqgJqJRcMVAc0XLYkI/O3yRlw71i.js
import { jsx as r2, jsxs as e, } from 'react/jsx-runtime';
import {
  addFonts as a3,
  addPropertyControls as t,
  ControlType as o2,
  cx as i,
  SVG as d2,
  useActiveVariantCallback as n2,
  useLocaleInfo as l2,
  useVariantState as s2,
  withCSS as p4,
} from 'unframer';
import { LayoutGroup as m2, motion as f, MotionConfigContext as g2, } from 'unframer';
import * as v2 from 'react';
var h2 = { J6MeOBYHD: { hover: true, pressed: true, }, ygo8X2vVX: { hover: true, pressed: true, }, };
var c = ['ygo8X2vVX', 'J6MeOBYHD',];
var b2 = { J6MeOBYHD: 'framer-v-1d5zi15', ygo8X2vVX: 'framer-v-1gklv01', };
function x2(r22, ...e22) {
  let a22 = {};
  return null == e22 || e22.forEach((e3,) => e3 && Object.assign(a22, r22[e3],)), a22;
}
var y3 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var k = (r22, e22,) => `translateY(-50%) ${e22}`;
var w2 = (r22, e22,) => `translate(-50%, -50%) ${e22}`;
var X = ({ value: e22, children: a22, },) => {
  let t22 = v2.useContext(g2,),
    o22 = null != e22 ? e22 : t22.transition,
    i22 = v2.useMemo(() => ({ ...t22, transition: o22, }), [JSON.stringify(o22,),],);
  return /* @__PURE__ */ r2(g2.Provider, { value: i22, children: a22, },);
};
var D = { left: 'J6MeOBYHD', right: 'ygo8X2vVX', };
var B2 = ({ height: r22, id: e22, width: a22, ...t22 },) => {
  var o22, i22;
  return {
    ...t22,
    variant: null !== (i22 = null !== (o22 = D[t22.variant]) && void 0 !== o22 ? o22 : t22.variant) && void 0 !== i22 ? i22 : 'ygo8X2vVX',
  };
};
var A2 = (r22, e22,) => e22.join('-',) + r22.layoutDependency;
var H2 = /* @__PURE__ */ v2.forwardRef(function (a22, t22,) {
  let { activeLocale: o22, } = l2(),
    { style: p22, className: g22, layoutId: u2, variant: D22, ...H22 } = B2(a22,),
    { baseVariant: R22, classNames: M22, gestureVariant: O2, setGestureState: Y2, setVariant: J, transition: T, variants: C3, } = s2({
      cycleOrder: c,
      defaultVariant: 'ygo8X2vVX',
      enabledGestures: h2,
      transitions: y3,
      variant: D22,
      variantClassNames: b2,
    },),
    L = A2(a22, C3,),
    { activeVariantCallback: V, delay: z2, } = n2(R22,),
    I = V(async (...r22) => {
      J('J6MeOBYHD',);
    },),
    j3 = V(async (...r22) => {
      J('ygo8X2vVX',);
    },),
    N = v2.useRef(null,),
    S2 = v2.useId();
  return /* @__PURE__ */ r2(m2, {
    id: null != u2 ? u2 : S2,
    children: /* @__PURE__ */ r2(f.div, {
      initial: D22,
      animate: C3,
      onHoverStart: () => Y2({ isHovered: true, },),
      onHoverEnd: () => Y2({ isHovered: false, },),
      onTapStart: () => Y2({ isPressed: true, },),
      onTap: () => Y2({ isPressed: false, },),
      onTapCancel: () => Y2({ isPressed: false, },),
      className: i('framer-9Ak9i', ...[], M22,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ r2(X, {
        value: T,
        children: /* @__PURE__ */ r2(f.div, {
          ...H22,
          className: i('framer-1gklv01', g22,),
          'data-framer-name': 'right',
          'data-highlight': true,
          layoutDependency: L,
          layoutId: 'ygo8X2vVX',
          onTap: I,
          ref: null != t22 ? t22 : N,
          style: { ...p22, },
          ...x2(
            {
              'J6MeOBYHD-hover': { 'data-framer-name': void 0, },
              'J6MeOBYHD-pressed': { 'data-framer-name': void 0, },
              'ygo8X2vVX-hover': { 'data-framer-name': void 0, },
              'ygo8X2vVX-pressed': { 'data-framer-name': void 0, },
              J6MeOBYHD: { 'data-framer-name': 'left', onTap: j3, },
            },
            R22,
            O2,
          ),
          children: /* @__PURE__ */ e(f.div, {
            className: 'framer-1hgdkhu',
            'data-framer-name': 'Selected=true, State=pressed, Icon=true',
            layoutDependency: L,
            layoutId: 'IiXwKNFQk',
            children: [
              /* @__PURE__ */ r2(f.div, {
                className: 'framer-5lpapb',
                'data-framer-name': 'Track',
                layoutDependency: L,
                layoutId: 'G6WOZVctI',
                style: {
                  '--border-bottom-width': '0px',
                  '--border-color': 'rgba(0, 0, 0, 0)',
                  '--border-left-width': '0px',
                  '--border-right-width': '0px',
                  '--border-style': 'solid',
                  '--border-top-width': '0px',
                  backgroundColor: 'rgb(0, 105, 115)',
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  borderTopLeftRadius: 100,
                  borderTopRightRadius: 100,
                },
                variants: {
                  J6MeOBYHD: {
                    '--border-bottom-width': '1px',
                    '--border-color': 'rgb(111, 121, 122)',
                    '--border-left-width': '1px',
                    '--border-right-width': '1px',
                    '--border-style': 'solid',
                    '--border-top-width': '1px',
                    backgroundColor: 'rgb(226, 226, 229)',
                  },
                },
                ...x2({ J6MeOBYHD: { 'data-border': true, }, }, R22, O2,),
              },),
              /* @__PURE__ */ e(f.div, {
                className: 'framer-hlafz0',
                'data-framer-name': 'Handle container',
                layoutDependency: L,
                layoutId: 'XRj_lwNYA',
                children: [
                  /* @__PURE__ */ r2(f.div, {
                    className: 'framer-1gko0jg',
                    'data-framer-name': 'State layer',
                    layoutDependency: L,
                    layoutId: 'LQLptTlcV',
                    style: {
                      backgroundColor: 'rgba(103, 80, 164, 0.12)',
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      opacity: 0,
                    },
                    variants: {
                      'J6MeOBYHD-hover': { backgroundColor: 'rgba(29, 27, 32, 0.08)', opacity: 1, },
                      'J6MeOBYHD-pressed': { backgroundColor: 'rgba(29, 27, 32, 0.08)', opacity: 1, },
                      'ygo8X2vVX-hover': { opacity: 1, },
                      'ygo8X2vVX-pressed': { opacity: 1, },
                    },
                  },),
                  /* @__PURE__ */ r2(f.div, {
                    className: 'framer-nsr17c',
                    'data-framer-name': 'Handle',
                    layoutDependency: L,
                    layoutId: 'ySzvyGC5C',
                    style: {
                      backgroundColor: 'rgb(255, 255, 255)',
                      borderBottomLeftRadius: 23,
                      borderBottomRightRadius: 23,
                      borderTopLeftRadius: 23,
                      borderTopRightRadius: 23,
                    },
                    transformTemplate: k,
                    variants: {
                      'J6MeOBYHD-hover': { backgroundColor: 'rgb(63, 72, 74)', },
                      'J6MeOBYHD-pressed': { backgroundColor: 'rgb(63, 72, 74)', },
                      'ygo8X2vVX-hover': { backgroundColor: 'rgb(144, 241, 255)', },
                      'ygo8X2vVX-pressed': { backgroundColor: 'rgb(144, 241, 255)', },
                      J6MeOBYHD: {
                        backgroundColor: 'rgb(111, 121, 122)',
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                    },
                    ...x2(
                      {
                        'J6MeOBYHD-hover': { transformTemplate: void 0, },
                        'J6MeOBYHD-pressed': { transformTemplate: void 0, },
                        J6MeOBYHD: { transformTemplate: void 0, },
                      },
                      R22,
                      O2,
                    ),
                  },),
                  /* @__PURE__ */ r2(f.div, {
                    className: 'framer-9l6nfs',
                    'data-framer-name': 'Icons/navigate_next',
                    layoutDependency: L,
                    layoutId: 'qnpH0sC8r',
                    transformTemplate: w2,
                    ...x2({ J6MeOBYHD: { transformTemplate: k, }, }, R22, O2,),
                    children: /* @__PURE__ */ r2(d2, {
                      className: 'framer-1w4j10a',
                      'data-framer-name': 'icon',
                      layout: 'position',
                      layoutDependency: L,
                      layoutId: 'DDF46dCqY',
                      opacity: 1,
                      svg:
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4 6"><path d="M 0.777 0 L 0.025 0.705 L 2.468 3 L 0.025 5.295 L 0.777 6 L 3.977 3 Z" fill="rgb(0,31,35)"></path></svg>',
                      svgContentId: 2501881375,
                      withExternalLayout: true,
                      ...x2(
                        {
                          'ygo8X2vVX-hover': { svgContentId: 1128838910, },
                          J6MeOBYHD: {
                            svg:
                              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4 6"><path d="M 2.46 1 L 3.031 1.587 L 1.177 3.5 L 3.031 5.412 L 2.46 6 L 0.031 3.5 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                            svgContentId: 2777384572,
                          },
                        },
                        R22,
                        O2,
                      ),
                    },),
                  },),
                ],
              },),
            ],
          },),
        },),
      },),
    },),
  },);
},);
var R2 = [
  '.framer-9Ak9i [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-9Ak9i .framer-194fwp6 { display: block; }',
  '.framer-9Ak9i .framer-1gklv01 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-9Ak9i .framer-1hgdkhu { flex: none; height: 15px; overflow: visible; position: relative; width: 24px; }',
  '.framer-9Ak9i .framer-5lpapb { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-9Ak9i .framer-hlafz0 { bottom: -16px; flex: none; left: -8px; overflow: visible; position: absolute; right: -16px; top: -16px; }',
  '.framer-9Ak9i .framer-1gko0jg { flex: none; height: 40px; left: calc(50% - 40px / 2); position: absolute; top: calc(50% - 40px / 2); width: 40px; }',
  '.framer-9Ak9i .framer-nsr17c { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); position: absolute; right: 18px; top: 50%; width: 12px; }',
  '.framer-9Ak9i .framer-9l6nfs { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; overflow: hidden; position: absolute; top: 50%; width: 16px; }',
  '.framer-9Ak9i .framer-1w4j10a { flex: none; height: 6px; position: absolute; right: 5px; top: calc(50.00000000000002% - 6px / 2); width: 4px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-9Ak9i .framer-1gklv01 { gap: 0px; } .framer-9Ak9i .framer-1gklv01 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-9Ak9i .framer-1gklv01 > :first-child { margin-top: 0px; } .framer-9Ak9i .framer-1gklv01 > :last-child { margin-bottom: 0px; } }',
  '.framer-9Ak9i.framer-v-1d5zi15 .framer-hlafz0 { bottom: -8px; right: unset; top: -8px; width: 48px; }',
  '.framer-9Ak9i.framer-v-1d5zi15 .framer-nsr17c { right: 27px; top: 10px; }',
  '.framer-9Ak9i.framer-v-1d5zi15 .framer-9l6nfs { left: 7px; top: 48%; }',
  '.framer-9Ak9i.framer-v-1d5zi15 .framer-1w4j10a { left: calc(50.00000000000002% - 4px / 2); right: unset; }',
  '.framer-9Ak9i.framer-v-1gklv01.hover .framer-1w4j10a { right: 4px; }',
  '.framer-9Ak9i.framer-v-1gklv01.pressed .framer-nsr17c { height: var(--framer-aspect-ratio-supported, 14px); }',
  '.framer-9Ak9i.framer-v-1d5zi15.hover .framer-hlafz0, .framer-9Ak9i.framer-v-1d5zi15.hover .framer-1w4j10a, .framer-9Ak9i.framer-v-1d5zi15.pressed .framer-hlafz0 { right: unset; }',
  '.framer-9Ak9i.framer-v-1d5zi15.pressed .framer-9l6nfs { left: 9px; }',
  '.framer-9Ak9i.framer-v-1d5zi15.pressed .framer-1w4j10a { left: 5px; right: unset; }',
];
var M3 = p4(H2, R2, 'framer-9Ak9i',);
var stdin_default2 = M3;
M3.displayName = 'Toggle Copy',
  M3.defaultProps = { height: 15, width: 24, },
  t(M3, { variant: { options: ['ygo8X2vVX', 'J6MeOBYHD',], optionTitles: ['right', 'left',], title: 'Variant', type: o2.Enum, }, },),
  a3(M3, [],);

// https :https://framerusercontent.com/modules/2hkg5XCE2rQboltCwgjw/PVmOOsL0Kqg5DoBKyDp4/vvRGywRFH.js
import { jsx as r3, jsxs as e2, } from 'react/jsx-runtime';
import {
  addFonts as a4,
  addPropertyControls as t2,
  ControlType as o3,
  cx as i2,
  SVG as d3,
  useActiveVariantCallback as n3,
  useLocaleInfo as s3,
  useVariantState as l3,
  withCSS as f2,
} from 'unframer';
import { LayoutGroup as m3, motion as p5, MotionConfigContext as c2, } from 'unframer';
import * as h3 from 'react';
var u = { jy1UKfzw2: { hover: true, pressed: true, }, KDR2W3FAc: { hover: true, pressed: true, }, };
var g3 = ['jy1UKfzw2', 'KDR2W3FAc',];
var x3 = { jy1UKfzw2: 'framer-v-34fava', KDR2W3FAc: 'framer-v-dxxjoq', };
function v3(r22, ...e22) {
  let a22 = {};
  return null == e22 || e22.forEach((e3,) => e3 && Object.assign(a22, r22[e3],)), a22;
}
var y4 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var w3 = (r22, e22,) => `translate(-50%, -50%) ${e22}`;
var R3 = ({ value: e22, children: a22, },) => {
  let t22 = h3.useContext(c2,),
    o22 = null != e22 ? e22 : t22.transition,
    i22 = h3.useMemo(() => ({ ...t22, transition: o22, }), [JSON.stringify(o22,),],);
  return /* @__PURE__ */ r3(c2.Provider, { value: i22, children: a22, },);
};
var C2 = { left: 'KDR2W3FAc', right: 'jy1UKfzw2', };
var F = ({ height: r22, id: e22, width: a22, ...t22 },) => {
  var o22, i22;
  return {
    ...t22,
    variant: null !== (i22 = null !== (o22 = C2[t22.variant]) && void 0 !== o22 ? o22 : t22.variant) && void 0 !== i22 ? i22 : 'jy1UKfzw2',
  };
};
var j2 = (r22, e22,) => e22.join('-',) + r22.layoutDependency;
var K = /* @__PURE__ */ h3.forwardRef(function (a22, t22,) {
  let { activeLocale: o22, } = s3(),
    { style: f22, className: c22, layoutId: b22, variant: C22, ...K2 } = F(a22,),
    { baseVariant: D22, classNames: X22, gestureVariant: k2, setGestureState: z2, setVariant: A3, transition: L, variants: T, } = l3({
      cycleOrder: g3,
      defaultVariant: 'jy1UKfzw2',
      enabledGestures: u,
      transitions: y4,
      variant: C22,
      variantClassNames: x3,
    },),
    W3 = j2(a22, T,),
    { activeVariantCallback: U2, delay: I, } = n3(D22,),
    q2 = U2(async (...r22) => {
      A3('KDR2W3FAc',);
    },),
    N = U2(async (...r22) => {
      A3('jy1UKfzw2',);
    },),
    B3 = h3.useRef(null,),
    S2 = h3.useId();
  return /* @__PURE__ */ r3(m3, {
    id: null != b22 ? b22 : S2,
    children: /* @__PURE__ */ r3(p5.div, {
      initial: C22,
      animate: T,
      onHoverStart: () => z2({ isHovered: true, },),
      onHoverEnd: () => z2({ isHovered: false, },),
      onTapStart: () => z2({ isPressed: true, },),
      onTap: () => z2({ isPressed: false, },),
      onTapCancel: () => z2({ isPressed: false, },),
      className: i2('framer-FX84C', ...[], X22,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ r3(R3, {
        value: L,
        children: /* @__PURE__ */ r3(p5.div, {
          ...K2,
          className: i2('framer-34fava', c22,),
          'data-framer-name': 'right',
          'data-highlight': true,
          layoutDependency: W3,
          layoutId: 'jy1UKfzw2',
          onTap: q2,
          ref: null != t22 ? t22 : B3,
          style: { ...f22, },
          ...v3(
            {
              'jy1UKfzw2-hover': { 'data-framer-name': void 0, },
              'jy1UKfzw2-pressed': { 'data-framer-name': void 0, },
              'KDR2W3FAc-hover': { 'data-framer-name': void 0, },
              'KDR2W3FAc-pressed': { 'data-framer-name': void 0, },
              KDR2W3FAc: { 'data-framer-name': 'left', onTap: N, },
            },
            D22,
            k2,
          ),
          children: /* @__PURE__ */ e2(p5.div, {
            className: 'framer-1ooqcgs',
            'data-framer-name': 'Selected=true, State=pressed, Icon=true',
            layoutDependency: W3,
            layoutId: 'Ei4wdAtNu',
            children: [
              /* @__PURE__ */ r3(p5.div, {
                className: 'framer-5vfx9p',
                'data-framer-name': 'Track',
                layoutDependency: W3,
                layoutId: 'VoK29m1Dm',
                style: {
                  '--border-bottom-width': '0px',
                  '--border-color': 'rgba(0, 0, 0, 0)',
                  '--border-left-width': '0px',
                  '--border-right-width': '0px',
                  '--border-style': 'solid',
                  '--border-top-width': '0px',
                  backgroundColor: 'rgb(0, 105, 115)',
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  borderTopLeftRadius: 100,
                  borderTopRightRadius: 100,
                },
                variants: {
                  KDR2W3FAc: {
                    '--border-bottom-width': '2px',
                    '--border-color': 'rgb(111, 121, 122)',
                    '--border-left-width': '2px',
                    '--border-right-width': '2px',
                    '--border-style': 'solid',
                    '--border-top-width': '2px',
                    backgroundColor: 'rgb(226, 226, 229)',
                  },
                },
                ...v3({ KDR2W3FAc: { 'data-border': true, }, }, D22, k2,),
              },),
              /* @__PURE__ */ e2(p5.div, {
                className: 'framer-fh6gm0',
                'data-framer-name': 'Handle container',
                layoutDependency: W3,
                layoutId: 'dMpLVgXmB',
                children: [
                  /* @__PURE__ */ r3(p5.div, {
                    className: 'framer-j9yhje',
                    'data-framer-name': 'State layer',
                    layoutDependency: W3,
                    layoutId: 'u5WCySR2_',
                    style: {
                      backgroundColor: 'rgba(103, 80, 164, 0.12)',
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      opacity: 0,
                    },
                    variants: {
                      'jy1UKfzw2-hover': { opacity: 1, },
                      'jy1UKfzw2-pressed': { opacity: 1, },
                      'KDR2W3FAc-hover': { backgroundColor: 'rgba(29, 27, 32, 0.08)', opacity: 1, },
                      'KDR2W3FAc-pressed': { backgroundColor: 'rgba(29, 27, 32, 0.08)', opacity: 1, },
                    },
                  },),
                  /* @__PURE__ */ r3(p5.div, {
                    className: 'framer-1jzmbae',
                    'data-framer-name': 'Handle',
                    layoutDependency: W3,
                    layoutId: 'DtlSm4uVE',
                    style: {
                      backgroundColor: 'rgb(255, 255, 255)',
                      borderBottomLeftRadius: 23,
                      borderBottomRightRadius: 23,
                      borderTopLeftRadius: 23,
                      borderTopRightRadius: 23,
                    },
                    transformTemplate: w3,
                    variants: {
                      'jy1UKfzw2-hover': { backgroundColor: 'rgb(144, 241, 255)', },
                      'jy1UKfzw2-pressed': { backgroundColor: 'rgb(144, 241, 255)', },
                      'KDR2W3FAc-hover': { backgroundColor: 'rgb(63, 72, 74)', },
                      'KDR2W3FAc-pressed': { backgroundColor: 'rgb(63, 72, 74)', },
                      KDR2W3FAc: {
                        backgroundColor: 'rgb(111, 121, 122)',
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                    },
                  },),
                  /* @__PURE__ */ r3(p5.div, {
                    className: 'framer-2q425d',
                    'data-framer-name': 'Icons/navigate_next',
                    layoutDependency: W3,
                    layoutId: 'xC2098cIf',
                    transformTemplate: w3,
                    children: /* @__PURE__ */ r3(d3, {
                      className: 'framer-1b0kmaq',
                      'data-framer-name': 'icon',
                      layout: 'position',
                      layoutDependency: W3,
                      layoutId: 'A4QRMsAMx',
                      opacity: 1,
                      svg:
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5 8"><path d="M 0.971 0 L 0.031 0.94 L 3.085 4 L 0.031 7.06 L 0.971 8 L 4.971 4 Z" fill="rgb(0,31,35)"></path></svg>',
                      svgContentId: 227539786,
                      withExternalLayout: true,
                      ...v3(
                        {
                          KDR2W3FAc: {
                            svg:
                              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5 8"><path d="M 4.031 0 L 4.971 0.94 L 1.918 4 L 4.971 7.06 L 4.031 8 L 0.031 4 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                            svgContentId: 2477479149,
                          },
                        },
                        D22,
                        k2,
                      ),
                    },),
                  },),
                ],
              },),
            ],
          },),
        },),
      },),
    },),
  },);
},);
var D2 = [
  '.framer-FX84C [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-FX84C .framer-1srx8tz { display: block; }',
  '.framer-FX84C .framer-34fava { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-FX84C .framer-1ooqcgs { flex: none; height: 32px; overflow: visible; position: relative; width: 52px; }',
  '.framer-FX84C .framer-5vfx9p { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-FX84C .framer-fh6gm0 { flex: none; height: 48px; overflow: visible; position: absolute; right: -8px; top: calc(50% - 48px / 2); width: 48px; }',
  '.framer-FX84C .framer-j9yhje { flex: none; height: 40px; left: calc(50% - 40px / 2); position: absolute; top: calc(50% - 40px / 2); width: 40px; }',
  '.framer-FX84C .framer-1jzmbae { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 50%; position: absolute; top: 50%; width: 24px; }',
  '.framer-FX84C .framer-2q425d { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); left: 50%; overflow: hidden; position: absolute; top: 50%; width: 16px; }',
  '.framer-FX84C .framer-1b0kmaq { flex: none; height: 8px; left: 6px; position: absolute; top: 4px; width: 5px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-FX84C .framer-34fava { gap: 0px; } .framer-FX84C .framer-34fava > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-FX84C .framer-34fava > :first-child { margin-top: 0px; } .framer-FX84C .framer-34fava > :last-child { margin-bottom: 0px; } }',
  '.framer-FX84C.framer-v-dxxjoq .framer-fh6gm0 { bottom: -8px; height: unset; left: -8px; right: unset; top: -8px; }',
  '.framer-FX84C.framer-v-dxxjoq .framer-1jzmbae, .framer-FX84C.framer-v-34fava.hover .framer-1jzmbae { left: 50%; top: 50%; }',
  '.framer-FX84C.framer-v-dxxjoq.hover .framer-fh6gm0, .framer-FX84C.framer-v-dxxjoq.pressed .framer-fh6gm0 { height: unset; right: unset; }',
  '.framer-FX84C.framer-v-dxxjoq.pressed .framer-1jzmbae { height: var(--framer-aspect-ratio-supported, 28px); width: 28px; }',
];
var X2 = f2(K, D2, 'framer-FX84C',);
var stdin_default3 = X2;
X2.displayName = 'Toggle',
  X2.defaultProps = { height: 32, width: 52, },
  t2(X2, { variant: { options: ['jy1UKfzw2', 'KDR2W3FAc',], optionTitles: ['right', 'left',], title: 'Variant', type: o3.Enum, }, },),
  a4(X2, [],);

// https :https://framerusercontent.com/modules/GuWa1Ud162ubWf1k1mKH/dP9Wr4BfySniV887TUM3/FpOKcRGFb.js
var TypewriterFonts = getFonts(TypeWriter,);
var SliderFonts = getFonts(Slider,);
var RadioFonts = getFonts(stdin_default,);
var ToggleFonts = getFonts(stdin_default3,);
var ToggleCopyFonts = getFonts(stdin_default2,);
var cycleOrder2 = ['wHWVBWbCh', 'u5YClbSTz', 'cJW2ksH1e', 'Wfe2yFy4g', 'fSJwriuSS', 'qV5XCavMo', 'tp4ldCYgZ', 'XTPzGOQNq',];
var serializationHash = 'framer-f4133';
var variantClassNames2 = {
  cJW2ksH1e: 'framer-v-cameip',
  fSJwriuSS: 'framer-v-o5kv5u',
  qV5XCavMo: 'framer-v-117x2zl',
  tp4ldCYgZ: 'framer-v-1xhso81',
  u5YClbSTz: 'framer-v-bqdfuj',
  Wfe2yFy4g: 'framer-v-ajsg1n',
  wHWVBWbCh: 'framer-v-ubmi04',
  XTPzGOQNq: 'framer-v-1pumkev',
};
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions2 = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', },
  qV5XCavMo: { delay: 0.5, duration: 0.7, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  tp4ldCYgZ: { delay: 0.2, duration: 0.7, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  XTPzGOQNq: { delay: 0.3, duration: 0.8, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
};
var negate = (value,) => {
  return !value;
};
var numberToString = (value, options = {}, activeLocale,) => {
  const fallbackLocale = 'en-US';
  const locale = options.locale || activeLocale || fallbackLocale;
  const {
    useGrouping,
    notation,
    compactDisplay,
    style,
    currency,
    currencyDisplay,
    unit,
    unitDisplay,
    minimumFractionDigits,
    maximumFractionDigits,
    minimumIntegerDigits,
  } = options;
  const formatOptions = {
    useGrouping,
    notation,
    compactDisplay,
    style,
    currency,
    currencyDisplay,
    unit,
    unitDisplay,
    minimumFractionDigits,
    maximumFractionDigits,
    minimumIntegerDigits,
  };
  const number = Number(value,);
  try {
    return number.toLocaleString(locale, formatOptions,);
  } catch {
    try {
      return number.toLocaleString(fallbackLocale, formatOptions,);
    } catch {
      return number.toLocaleString();
    }
  }
};
var convertFromEnum = (value, activeLocale,) => {
  switch (value) {
    case 'zAJDHJhkW':
      return 'nPpSWwiWE';
    default:
      return 'r5tWv5mqY';
  }
};
var convertFromEnum1 = (value, activeLocale,) => {
  switch (value) {
    case 's7bcrIMxH':
      return 'nPpSWwiWE';
    default:
      return 'r5tWv5mqY';
  }
};
var convertFromEnum2 = (value, activeLocale,) => {
  switch (value) {
    case 'jmeUKm4BT':
      return 'nPpSWwiWE';
    default:
      return 'r5tWv5mqY';
  }
};
var convertFromBoolean = (value, activeLocale,) => {
  if (value) {
    return 'jy1UKfzw2';
  } else {
    return 'KDR2W3FAc';
  }
};
var convertFromBoolean1 = (value, activeLocale,) => {
  if (value) {
    return 'ygo8X2vVX';
  } else {
    return 'J6MeOBYHD';
  }
};
var Transition2 = ({ value, children, },) => {
  const config = React4.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var humanReadableEnumMap = { 'Option 1': 'zAJDHJhkW', 'Option 2': 's7bcrIMxH', 'Option 3': 'jmeUKm4BT', };
var humanReadableVariantMap2 = {
  'Boolean Smalll': 'qV5XCavMo',
  'Input Small': 'fSJwriuSS',
  'MC Small': 'XTPzGOQNq',
  'Multiple Choice': 'wHWVBWbCh',
  'Slider Small': 'tp4ldCYgZ',
  Boolean: 'cJW2ksH1e',
  Input: 'Wfe2yFy4g',
  Slider: 'u5YClbSTz',
};
var getProps2 = (
  {
    booleanToggle,
    choice1,
    choice2,
    choice3,
    height,
    id,
    input,
    option,
    option1,
    option2,
    sliiderValue,
    streaming,
    title,
    width,
    ...props
  },
) => {
  var _ref,
    _ref1,
    _ref2,
    _ref3,
    _humanReadableEnumMap_option,
    _ref4,
    _ref5,
    _ref6,
    _ref7,
    _ref8,
    _ref9,
    _humanReadableVariantMap_props_variant,
    _ref10,
    _ref11;
  return {
    ...props,
    AA_oylHc1: booleanToggle !== null && booleanToggle !== void 0 ? booleanToggle : props.AA_oylHc1,
    B9Ye7wHiX: (_ref = choice1 !== null && choice1 !== void 0 ? choice1 : props.B9Ye7wHiX) !== null && _ref !== void 0 ? _ref : 'A',
    cib0E0Vb9: (_ref1 = option2 !== null && option2 !== void 0 ? option2 : props.cib0E0Vb9) !== null && _ref1 !== void 0 ? _ref1 : 'B',
    Cpm7YdhW6: (_ref2 = option1 !== null && option1 !== void 0 ? option1 : props.Cpm7YdhW6) !== null && _ref2 !== void 0 ? _ref2 : 'A',
    dxSidP8LF: (_ref3 = choice3 !== null && choice3 !== void 0 ? choice3 : props.dxSidP8LF) !== null && _ref3 !== void 0 ? _ref3 : 'C',
    eePEcZAuW:
      (_ref5 = (_ref4 = (_humanReadableEnumMap_option = humanReadableEnumMap[option]) !== null && _humanReadableEnumMap_option !== void 0
                  ? _humanReadableEnumMap_option
                  : option) !== null && _ref4 !== void 0
            ? _ref4
            : props.eePEcZAuW) !== null && _ref5 !== void 0
        ? _ref5
        : 'zAJDHJhkW',
    Gu4Kp5hWx: (_ref6 = title !== null && title !== void 0 ? title : props.Gu4Kp5hWx) !== null && _ref6 !== void 0 ? _ref6 : 'Title',
    kRgq0jgQR: (_ref7 = sliiderValue !== null && sliiderValue !== void 0 ? sliiderValue : props.kRgq0jgQR) !== null && _ref7 !== void 0
      ? _ref7
      : 50,
    NPSt7VsjX: (_ref8 = streaming !== null && streaming !== void 0 ? streaming : props.NPSt7VsjX) !== null && _ref8 !== void 0
      ? _ref8
      : true,
    nQb7W3cjE: (_ref9 = input !== null && input !== void 0 ? input : props.nQb7W3cjE) !== null && _ref9 !== void 0
      ? _ref9
      : 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    variant:
      (_ref10 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref10 !== void 0
        ? _ref10
        : 'wHWVBWbCh',
    yBMe3I4G7: (_ref11 = choice2 !== null && choice2 !== void 0 ? choice2 : props.yBMe3I4G7) !== null && _ref11 !== void 0 ? _ref11 : 'B',
  };
};
var createLayoutDependency2 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React4.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo2();
  const {
    style,
    className: className2,
    layoutId,
    variant,
    eePEcZAuW,
    kRgq0jgQR,
    Cpm7YdhW6,
    cib0E0Vb9,
    B9Ye7wHiX,
    yBMe3I4G7,
    dxSidP8LF,
    NPSt7VsjX,
    Gu4Kp5hWx,
    nQb7W3cjE,
    AA_oylHc1,
    ...restProps
  } = getProps2(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'wHWVBWbCh',
    transitions: transitions2,
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const ref1 = React4.useRef(null,);
  const isDisplayed = () => {
    if (['Wfe2yFy4g', 'fSJwriuSS',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const visible = negate(NPSt7VsjX,);
  const isDisplayed1 = () => {
    if (['u5YClbSTz', 'tp4ldCYgZ',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed2 = () => {
    if (['u5YClbSTz', 'tp4ldCYgZ',].includes(baseVariant,)) {
      return visible;
    }
    return true;
  };
  const activeLocaleCode = useLocaleCode();
  const textContent = numberToString(kRgq0jgQR, { locale: '', notation: 'standard', style: 'decimal', }, activeLocaleCode,);
  const isDisplayed3 = () => {
    if (['Wfe2yFy4g', 'fSJwriuSS',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed4 = () => {
    if (baseVariant === 'Wfe2yFy4g') {
      return visible;
    }
    if (baseVariant === 'fSJwriuSS') {
      return true;
    }
    return false;
  };
  const isDisplayed5 = () => {
    if (baseVariant === 'fSJwriuSS') {
      return false;
    }
    return NPSt7VsjX;
  };
  const isDisplayed6 = () => {
    if (['u5YClbSTz', 'cJW2ksH1e', 'Wfe2yFy4g', 'fSJwriuSS', 'qV5XCavMo', 'tp4ldCYgZ',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed7 = () => {
    if (['cJW2ksH1e', 'qV5XCavMo',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed8 = () => {
    if (['cJW2ksH1e', 'qV5XCavMo',].includes(baseVariant,)) {
      return visible;
    }
    return true;
  };
  const isDisplayed9 = () => {
    if (baseVariant === 'qV5XCavMo') {
      return false;
    }
    return true;
  };
  const isDisplayed10 = () => {
    if (baseVariant === 'cJW2ksH1e') {
      return false;
    }
    return true;
  };
  const isDisplayed11 = () => {
    if (['Wfe2yFy4g', 'fSJwriuSS',].includes(baseVariant,)) {
      return visible;
    }
    return true;
  };
  const defaultLayoutId = React4.useId();
  const sharedStyleClassNames = [className,];
  return /* @__PURE__ */ _jsx4(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx4(Transition2, {
      value: transition,
      children: /* @__PURE__ */ _jsxs2(motion3.div, {
        ...restProps,
        animate: variants,
        className: cx2(serializationHash, ...sharedStyleClassNames, 'framer-ubmi04', className2, classNames,),
        'data-framer-name': 'Multiple Choice',
        initial: variant,
        layoutDependency,
        layoutId: 'wHWVBWbCh',
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onTap: () => setGestureState({ isPressed: false, },),
        onTapCancel: () => setGestureState({ isPressed: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        ref: ref !== null && ref !== void 0 ? ref : ref1,
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0.59)',
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          ...style,
        },
        ...addPropertyOverrides2(
          {
            cJW2ksH1e: { 'data-framer-name': 'Boolean', },
            fSJwriuSS: { 'data-framer-name': 'Input Small', },
            qV5XCavMo: { 'data-framer-name': 'Boolean Smalll', },
            tp4ldCYgZ: { 'data-framer-name': 'Slider Small', },
            u5YClbSTz: { 'data-framer-name': 'Slider', },
            Wfe2yFy4g: { 'data-framer-name': 'Input', },
            XTPzGOQNq: { 'data-framer-name': 'MC Small', },
          },
          baseVariant,
          gestureVariant,
        ),
        children: [
          isDisplayed() && /* @__PURE__ */ _jsxs2(motion3.div, {
            className: 'framer-s8ik11',
            layoutDependency,
            layoutId: 'ZML_QoWcQ',
            children: [
              visible && /* @__PURE__ */ _jsx4(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                  children: /* @__PURE__ */ _jsx4(motion3.p, {
                    style: {
                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                      '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                      '--framer-font-size': '8px',
                      '--framer-letter-spacing': '0px',
                      '--framer-line-height': '1.5em',
                      '--framer-text-alignment': 'left',
                      '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                    },
                    children: 'Title',
                  },),
                },),
                className: 'framer-lyzunu',
                'data-framer-name': 'Label',
                fonts: ['CUSTOM;PP Supply Sans Medium',],
                layoutDependency,
                layoutId: 'wpRihfUy1',
                style: { '--extracted-r6o4lv': 'rgba(16, 25, 66, 0.64)', '--framer-paragraph-spacing': '0px', },
                text: Gu4Kp5hWx,
                verticalAlignment: 'center',
                withExternalLayout: true,
                ...addPropertyOverrides2(
                  {
                    tp4ldCYgZ: {
                      children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                        children: /* @__PURE__ */ _jsx4(motion3.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                            '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                            '--framer-font-size': '8px',
                            '--framer-line-height': '1.5em',
                            '--framer-text-alignment': 'left',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                          },
                          children: 'Title',
                        },),
                      },),
                    },
                    u5YClbSTz: {
                      children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                        children: /* @__PURE__ */ _jsx4(motion3.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                            '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                            '--framer-font-size': '8px',
                            '--framer-line-height': '1.5em',
                            '--framer-text-alignment': 'left',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                          },
                          children: 'Title',
                        },),
                      },),
                    },
                  },
                  baseVariant,
                  gestureVariant,
                ),
              },),
              NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-12y26uo-container',
                layoutDependency,
                layoutId: 'epUupU4HK-container',
                children: /* @__PURE__ */ _jsx4(TypeWriter, {
                  autoStart: true,
                  caretVisibility: false,
                  color: 'rgba(16, 25, 66, 0.64)',
                  cursor: '\u25CF',
                  cursorColor: 'rgba(136, 136, 136, 0.5)',
                  delayNumber: 0.05,
                  delayType: false,
                  font: {
                    fontFamily: 'PP Supply Sans Medium',
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: 0,
                    lineHeight: 1.5,
                    lineHeightPixels: 100,
                    lineHeightType: true,
                    offset: 0,
                    textAlign: 'left',
                    whiteSpace: 'normal',
                  },
                  height: '100%',
                  id: 'epUupU4HK',
                  layoutId: 'epUupU4HK',
                  loop: false,
                  pauseFor: 0,
                  split: false,
                  style: { width: '100%', },
                  tag: 'heading1',
                  text: Gu4Kp5hWx,
                  width: '100%',
                  ...addPropertyOverrides2(
                    {
                      qV5XCavMo: {
                        font: {
                          fontFamily: 'PP Supply Sans Medium',
                          fontSize: 8,
                          fontWeight: 500,
                          letterSpacing: 0,
                          lineHeight: 1.5,
                          lineHeightPixels: 100,
                          lineHeightType: true,
                          offset: 0,
                          textAlign: 'left',
                          whiteSpace: 'normal',
                        },
                      },
                      tp4ldCYgZ: {
                        font: {
                          fontFamily: 'PP Supply Sans Medium',
                          fontSize: 8,
                          fontWeight: 500,
                          letterSpacing: 0,
                          lineHeight: 1.5,
                          lineHeightPixels: 100,
                          lineHeightType: true,
                          offset: 0,
                          textAlign: 'left',
                          whiteSpace: 'normal',
                        },
                      },
                      XTPzGOQNq: {
                        font: {
                          fontFamily: 'PP Supply Sans Medium',
                          fontSize: 8,
                          fontWeight: 500,
                          letterSpacing: 0,
                          lineHeight: 1.5,
                          lineHeightPixels: 100,
                          lineHeightType: true,
                          offset: 0,
                          textAlign: 'left',
                          whiteSpace: 'normal',
                        },
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
              },),
            ],
          },),
          isDisplayed1() && /* @__PURE__ */ _jsxs2(motion3.div, {
            className: 'framer-19lcyrf',
            layoutDependency,
            layoutId: 'j2bvRU3DL',
            children: [
              isDisplayed2() && /* @__PURE__ */ _jsx4(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                  children: /* @__PURE__ */ _jsx4(motion3.p, {
                    style: {
                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                      '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                      '--framer-font-size': '10px',
                      '--framer-letter-spacing': '0.35px',
                      '--framer-line-height': '12px',
                      '--framer-text-alignment': 'left',
                      '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                    },
                    children: 'Scale-0',
                  },),
                },),
                className: 'framer-1kpfvtt',
                'data-framer-name': 'Label',
                fonts: ['CUSTOM;PP Supply Sans Medium',],
                layoutDependency,
                layoutId: 'HjdLEywsW',
                style: { '--extracted-r6o4lv': 'rgba(16, 25, 66, 0.64)', '--framer-paragraph-spacing': '0px', },
                text: Cpm7YdhW6,
                verticalAlignment: 'center',
                withExternalLayout: true,
              },),
              NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-6epta2-container',
                layoutDependency,
                layoutId: 'GjyMm_jMc-container',
                children: /* @__PURE__ */ _jsx4(TypeWriter, {
                  autoStart: true,
                  caretVisibility: false,
                  color: 'rgb(16, 25, 66)',
                  cursor: '\u25CF',
                  cursorColor: 'rgba(136, 136, 136, 0.5)',
                  delayNumber: 0.06,
                  delayType: false,
                  font: {
                    fontFamily: 'PP Supply Sans Medium',
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: 0.35,
                    lineHeight: 1.2,
                    lineHeightPixels: 100,
                    lineHeightType: true,
                    offset: 0,
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                  },
                  height: '100%',
                  id: 'GjyMm_jMc',
                  layoutId: 'GjyMm_jMc',
                  loop: false,
                  pauseFor: 1,
                  split: false,
                  style: { width: '100%', },
                  tag: 'heading1',
                  text: Cpm7YdhW6,
                  width: '100%',
                },),
              },),
              /* @__PURE__ */ _jsx4(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                  children: /* @__PURE__ */ _jsx4(motion3.p, {
                    style: {
                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFNlbWlib2xk',
                      '--framer-font-family': '"PP Supply Sans Semibold", sans-serif',
                      '--framer-font-size': '15px',
                      '--framer-letter-spacing': '0.35px',
                      '--framer-line-height': '12px',
                      '--framer-text-alignment': 'center',
                      '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                    },
                    children: 'A',
                  },),
                },),
                className: 'framer-841zpz',
                'data-framer-name': 'Label',
                fonts: ['CUSTOM;PP Supply Sans Semibold',],
                layoutDependency,
                layoutId: 'SzC7v8nfP',
                style: { '--extracted-r6o4lv': 'rgba(16, 25, 66, 0.64)', '--framer-paragraph-spacing': '0px', },
                text: textContent,
                verticalAlignment: 'center',
                withExternalLayout: true,
                ...addPropertyOverrides2(
                  {
                    tp4ldCYgZ: {
                      children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                        children: /* @__PURE__ */ _jsx4(motion3.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFNlbWlib2xk',
                            '--framer-font-family': '"PP Supply Sans Semibold", "PP Supply Sans Semibold Placeholder", sans-serif',
                            '--framer-font-size': '10px',
                            '--framer-letter-spacing': '0.35px',
                            '--framer-line-height': '12px',
                            '--framer-text-alignment': 'center',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                          },
                          children: '50',
                        },),
                      },),
                    },
                  },
                  baseVariant,
                  gestureVariant,
                ),
              },),
              isDisplayed2() && /* @__PURE__ */ _jsx4(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                  children: /* @__PURE__ */ _jsx4(motion3.p, {
                    style: {
                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                      '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                      '--framer-font-size': '10px',
                      '--framer-letter-spacing': '0.35px',
                      '--framer-line-height': '12px',
                      '--framer-text-alignment': 'right',
                      '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                    },
                    children: 'Scale 1',
                  },),
                },),
                className: 'framer-1fro32h',
                'data-framer-name': 'Label',
                fonts: ['CUSTOM;PP Supply Sans Medium',],
                layoutDependency,
                layoutId: 'hfdX7RAnj',
                style: { '--extracted-r6o4lv': 'rgba(16, 25, 66, 0.64)', '--framer-paragraph-spacing': '0px', },
                text: cib0E0Vb9,
                verticalAlignment: 'center',
                withExternalLayout: true,
              },),
              NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-ii7jep-container',
                layoutDependency,
                layoutId: 'RaG0o5JJN-container',
                children: /* @__PURE__ */ _jsx4(TypeWriter, {
                  autoStart: true,
                  caretVisibility: false,
                  color: 'rgb(16, 25, 66)',
                  cursor: '\u25CF',
                  cursorColor: 'rgba(136, 136, 136, 0.5)',
                  delayNumber: 0.06,
                  delayType: false,
                  font: {
                    fontFamily: 'PP Supply Sans Medium',
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: 0.35,
                    lineHeight: 1.2,
                    lineHeightPixels: 100,
                    lineHeightType: true,
                    offset: 0,
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  },
                  height: '100%',
                  id: 'RaG0o5JJN',
                  layoutId: 'RaG0o5JJN',
                  loop: false,
                  pauseFor: 1,
                  split: false,
                  style: { width: '100%', },
                  tag: 'heading1',
                  text: cib0E0Vb9,
                  width: '100%',
                },),
              },),
            ],
          },),
          isDisplayed3() && /* @__PURE__ */ _jsxs2(motion3.div, {
            className: 'framer-1vu5yst',
            layoutDependency,
            layoutId: 'S6KvIs150',
            children: [
              isDisplayed4() && /* @__PURE__ */ _jsx4(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                  children: /* @__PURE__ */ _jsx4(motion3.p, {
                    style: {
                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                      '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                      '--framer-font-size': '12px',
                      '--framer-letter-spacing': '0px',
                      '--framer-line-height': '1.5em',
                      '--framer-text-alignment': 'left',
                      '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                    },
                    children: 'Title',
                  },),
                },),
                className: 'framer-1v7c9ix',
                'data-framer-name': 'Label',
                fonts: ['CUSTOM;PP Supply Sans Medium',],
                layoutDependency,
                layoutId: 'W06hdtuBX',
                style: { '--extracted-r6o4lv': 'rgba(16, 25, 66, 0.64)', '--framer-paragraph-spacing': '0px', },
                text: Gu4Kp5hWx,
                verticalAlignment: 'center',
                withExternalLayout: true,
                ...addPropertyOverrides2(
                  {
                    fSJwriuSS: {
                      children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                        children: /* @__PURE__ */ _jsx4(motion3.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                            '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                            '--framer-font-size': '8px',
                            '--framer-letter-spacing': '0px',
                            '--framer-line-height': '1.5em',
                            '--framer-text-alignment': 'left',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgba(16, 25, 66, 0.64))',
                          },
                          children: 'Title',
                        },),
                      },),
                    },
                  },
                  baseVariant,
                  gestureVariant,
                ),
              },),
              isDisplayed5() && /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-yrdgrn-container',
                layoutDependency,
                layoutId: 'dFtUYLY7q-container',
                children: /* @__PURE__ */ _jsx4(TypeWriter, {
                  autoStart: true,
                  caretVisibility: false,
                  color: 'rgba(16, 25, 66, 0.64)',
                  cursor: '\u25CF',
                  cursorColor: 'rgba(136, 136, 136, 0.5)',
                  delayNumber: 0.05,
                  delayType: false,
                  font: {
                    fontFamily: 'PP Supply Sans Medium',
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: 0,
                    lineHeight: 1.5,
                    lineHeightPixels: 100,
                    lineHeightType: true,
                    offset: 0,
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                  },
                  height: '100%',
                  id: 'dFtUYLY7q',
                  layoutId: 'dFtUYLY7q',
                  loop: false,
                  pauseFor: 0,
                  split: false,
                  style: { width: '100%', },
                  tag: 'heading1',
                  text: Gu4Kp5hWx,
                  width: '100%',
                },),
              },),
            ],
          },),
          isDisplayed1() && /* @__PURE__ */ _jsx4(motion3.div, {
            className: 'framer-1cypg73',
            layoutDependency,
            layoutId: 'W7v0dnOBr',
            children: isDisplayed1() && /* @__PURE__ */ _jsx4(motion3.div, {
              className: 'framer-j34qcq-container',
              layoutDependency,
              layoutId: 'y3OmF6OSb-container',
              children: /* @__PURE__ */ _jsx4(Slider, {
                constrainKnob: false,
                fillColor: 'rgb(0, 105, 115)',
                height: '100%',
                id: 'y3OmF6OSb',
                knobColor: 'rgb(0, 89, 97)',
                knobSetting: 'Show',
                knobSize: 16,
                layoutId: 'y3OmF6OSb',
                max: 100,
                min: 0,
                shadow: 'rgba(0, 0, 0, 0.1)',
                shouldAnimateChange: true,
                style: { width: '100%', },
                trackColor: 'rgb(221, 221, 221)',
                trackHeight: 4,
                trackRadius: 2,
                transition: { damping: 50, delay: 0, stiffness: 750, type: 'spring', },
                value: kRgq0jgQR,
                width: '100%',
              },),
            },),
          },),
          isDisplayed6() && /* @__PURE__ */ _jsxs2(motion3.div, {
            className: 'framer-s5cdq5',
            layoutDependency,
            layoutId: 'ueUtpSOCB',
            style: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, },
            children: [
              /* @__PURE__ */ _jsxs2(motion3.div, {
                className: 'framer-crweby',
                layoutDependency,
                layoutId: 'IvlCVPVPf',
                children: [
                  /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-14jci97-container',
                    layoutDependency,
                    layoutId: 'KJOwPbb8F-container',
                    children: /* @__PURE__ */ _jsx4(stdin_default, {
                      height: '100%',
                      id: 'KJOwPbb8F',
                      layoutId: 'KJOwPbb8F',
                      variant: convertFromEnum(eePEcZAuW, activeLocale,),
                      width: '100%',
                    },),
                  },),
                  NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-1kyowmy-container',
                    layoutDependency,
                    layoutId: 'v9pHCTSvV-container',
                    children: /* @__PURE__ */ _jsx4(TypeWriter, {
                      autoStart: true,
                      caretVisibility: false,
                      color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                      cursor: '\u25CF',
                      cursorColor: 'rgba(136, 136, 136, 0.5)',
                      delayNumber: 0.06,
                      delayType: false,
                      font: {
                        fontFamily: 'PP Supply Sans Medium',
                        fontSize: 16,
                        fontWeight: 500,
                        letterSpacing: 0,
                        lineHeight: 1.2,
                        lineHeightPixels: 100,
                        lineHeightType: true,
                        offset: 0,
                        textAlign: 'left',
                        whiteSpace: 'nowrap',
                      },
                      height: '100%',
                      id: 'v9pHCTSvV',
                      layoutId: 'v9pHCTSvV',
                      loop: false,
                      pauseFor: 1,
                      split: false,
                      style: { width: '100%', },
                      tag: 'heading1',
                      text: B9Ye7wHiX,
                      width: '100%',
                      ...addPropertyOverrides2(
                        {
                          XTPzGOQNq: {
                            font: {
                              fontFamily: 'PP Supply Sans Medium',
                              fontSize: 12,
                              fontWeight: 500,
                              letterSpacing: 0,
                              lineHeight: 1.2,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'left',
                              whiteSpace: 'nowrap',
                            },
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  visible && /* @__PURE__ */ _jsx4(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                      children: /* @__PURE__ */ _jsx4(motion3.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                          '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                          '--framer-letter-spacing': '0.04em',
                          '--framer-text-color':
                            'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                        },
                        children: 'A',
                      },),
                    },),
                    className: 'framer-2mo03c',
                    'data-framer-name': 'Board Dimensions',
                    fonts: ['CUSTOM;PP Supply Sans Light',],
                    layoutDependency,
                    layoutId: 'Y2BGHzsNx',
                    style: {
                      '--extracted-r6o4lv': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))',
                      '--framer-paragraph-spacing': '0px',
                    },
                    text: B9Ye7wHiX,
                    verticalAlignment: 'center',
                    withExternalLayout: true,
                  },),
                ],
              },),
              /* @__PURE__ */ _jsxs2(motion3.div, {
                className: 'framer-1ferc8i',
                layoutDependency,
                layoutId: 'R905nnpUi',
                children: [
                  /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-1hj9m21-container',
                    layoutDependency,
                    layoutId: 'nN3lKdmks-container',
                    children: /* @__PURE__ */ _jsx4(stdin_default, {
                      height: '100%',
                      id: 'nN3lKdmks',
                      layoutId: 'nN3lKdmks',
                      variant: convertFromEnum1(eePEcZAuW, activeLocale,),
                      width: '100%',
                    },),
                  },),
                  NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-1ofvx9w-container',
                    layoutDependency,
                    layoutId: 'rDpMrm8Tz-container',
                    children: /* @__PURE__ */ _jsx4(TypeWriter, {
                      autoStart: true,
                      caretVisibility: false,
                      color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                      cursor: '\u25CF',
                      cursorColor: 'rgba(136, 136, 136, 0.5)',
                      delayNumber: 0.06,
                      delayType: false,
                      font: {
                        fontFamily: 'PP Supply Sans Medium',
                        fontSize: 16,
                        fontWeight: 500,
                        letterSpacing: 0,
                        lineHeight: 1.2,
                        lineHeightPixels: 100,
                        lineHeightType: true,
                        offset: 0,
                        textAlign: 'left',
                        whiteSpace: 'nowrap',
                      },
                      height: '100%',
                      id: 'rDpMrm8Tz',
                      layoutId: 'rDpMrm8Tz',
                      loop: false,
                      pauseFor: 1,
                      split: false,
                      style: { width: '100%', },
                      tag: 'heading1',
                      text: yBMe3I4G7,
                      width: '100%',
                      ...addPropertyOverrides2(
                        {
                          XTPzGOQNq: {
                            font: {
                              fontFamily: 'PP Supply Sans Medium',
                              fontSize: 12,
                              fontWeight: 500,
                              letterSpacing: 0,
                              lineHeight: 1.2,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'left',
                              whiteSpace: 'nowrap',
                            },
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  visible && /* @__PURE__ */ _jsx4(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                      children: /* @__PURE__ */ _jsx4(motion3.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                          '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                          '--framer-letter-spacing': '0.04em',
                          '--framer-text-color':
                            'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                        },
                        children: 'B',
                      },),
                    },),
                    className: 'framer-1yflnix',
                    'data-framer-name': 'Board Dimensions',
                    fonts: ['CUSTOM;PP Supply Sans Light',],
                    layoutDependency,
                    layoutId: 'qTrBDLko2',
                    style: {
                      '--extracted-r6o4lv': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))',
                      '--framer-paragraph-spacing': '0px',
                    },
                    text: yBMe3I4G7,
                    verticalAlignment: 'center',
                    withExternalLayout: true,
                  },),
                ],
              },),
              /* @__PURE__ */ _jsxs2(motion3.div, {
                className: 'framer-m3o52p',
                layoutDependency,
                layoutId: 'fTVGy5qSW',
                children: [
                  /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-1tqvnrb-container',
                    layoutDependency,
                    layoutId: 'TK5DtHbAx-container',
                    children: /* @__PURE__ */ _jsx4(stdin_default, {
                      height: '100%',
                      id: 'TK5DtHbAx',
                      layoutId: 'TK5DtHbAx',
                      variant: convertFromEnum2(eePEcZAuW, activeLocale,),
                      width: '100%',
                    },),
                  },),
                  NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-qqau2w-container',
                    layoutDependency,
                    layoutId: 'Vz4vSXp4B-container',
                    children: /* @__PURE__ */ _jsx4(TypeWriter, {
                      autoStart: true,
                      caretVisibility: false,
                      color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                      cursor: '\u25CF',
                      cursorColor: 'rgba(136, 136, 136, 0.5)',
                      delayNumber: 0.06,
                      delayType: false,
                      font: {
                        fontFamily: 'PP Supply Sans Medium',
                        fontSize: 16,
                        fontWeight: 500,
                        letterSpacing: 0,
                        lineHeight: 1.2,
                        lineHeightPixels: 100,
                        lineHeightType: true,
                        offset: 0,
                        textAlign: 'left',
                        whiteSpace: 'nowrap',
                      },
                      height: '100%',
                      id: 'Vz4vSXp4B',
                      layoutId: 'Vz4vSXp4B',
                      loop: false,
                      pauseFor: 1,
                      split: false,
                      style: { width: '100%', },
                      tag: 'heading1',
                      text: dxSidP8LF,
                      width: '100%',
                      ...addPropertyOverrides2(
                        {
                          XTPzGOQNq: {
                            font: {
                              fontFamily: 'PP Supply Sans Medium',
                              fontSize: 12,
                              fontWeight: 500,
                              letterSpacing: 0,
                              lineHeight: 1.2,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'left',
                              whiteSpace: 'nowrap',
                            },
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  visible && /* @__PURE__ */ _jsx4(RichText, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                      children: /* @__PURE__ */ _jsx4(motion3.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                          '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                          '--framer-letter-spacing': '0.04em',
                          '--framer-text-color':
                            'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                        },
                        children: 'C',
                      },),
                    },),
                    className: 'framer-yxub92',
                    'data-framer-name': 'Board Dimensions',
                    fonts: ['CUSTOM;PP Supply Sans Light',],
                    layoutDependency,
                    layoutId: 'o55iN1S8J',
                    style: {
                      '--extracted-r6o4lv': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))',
                      '--framer-paragraph-spacing': '0px',
                    },
                    text: dxSidP8LF,
                    verticalAlignment: 'center',
                    withExternalLayout: true,
                  },),
                ],
              },),
            ],
          },),
          isDisplayed7() && /* @__PURE__ */ _jsx4(motion3.div, {
            className: 'framer-11t7ch5',
            layoutDependency,
            layoutId: 'gqRV57KH3',
            style: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, },
            children: /* @__PURE__ */ _jsxs2(motion3.div, {
              className: 'framer-mydmw0',
              layoutDependency,
              layoutId: 'a3_Mf4FDG',
              children: [
                isDisplayed8() && /* @__PURE__ */ _jsx4(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                    children: /* @__PURE__ */ _jsx4(motion3.h4, {
                      className: 'framer-styles-preset-90m2e0',
                      'data-styles-preset': 'ydC9w7qn8',
                      children: 'text',
                    },),
                  },),
                  className: 'framer-1d8zajo',
                  'data-framer-name': 'Board Dimensions',
                  layoutDependency,
                  layoutId: 'gc4hJG9iZ',
                  style: { '--framer-paragraph-spacing': '0px', },
                  text: Cpm7YdhW6,
                  variants: {
                    qV5XCavMo: { '--extracted-1eung3n': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))', },
                  },
                  verticalAlignment: 'center',
                  withExternalLayout: true,
                  ...addPropertyOverrides2(
                    {
                      qV5XCavMo: {
                        children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                          children: /* @__PURE__ */ _jsx4(motion3.h4, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                              '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                              '--framer-font-size': '13px',
                              '--framer-letter-spacing': '0.04em',
                              '--framer-text-color':
                                'var(--extracted-1eung3n, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                            },
                            children: 'A',
                          },),
                        },),
                        fonts: ['CUSTOM;PP Supply Sans Medium',],
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                  className: 'framer-sbe7bz-container',
                  layoutDependency,
                  layoutId: 'aKuf_fMd7-container',
                  children: /* @__PURE__ */ _jsx4(TypeWriter, {
                    autoStart: true,
                    caretVisibility: false,
                    color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                    cursor: '\u25CF',
                    cursorColor: 'rgba(136, 136, 136, 0.5)',
                    delayNumber: 0.06,
                    delayType: false,
                    font: {
                      fontFamily: 'PP Supply Sans Medium',
                      fontSize: 16,
                      fontWeight: 500,
                      letterSpacing: 0,
                      lineHeight: 1.2,
                      lineHeightPixels: 100,
                      lineHeightType: true,
                      offset: 0,
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                    },
                    height: '100%',
                    id: 'aKuf_fMd7',
                    layoutId: 'aKuf_fMd7',
                    loop: false,
                    pauseFor: 1,
                    split: false,
                    style: { width: '100%', },
                    tag: 'heading1',
                    text: Cpm7YdhW6,
                    width: '100%',
                    ...addPropertyOverrides2(
                      {
                        qV5XCavMo: {
                          font: {
                            fontFamily: 'PP Supply Sans Medium',
                            fontSize: 10,
                            fontWeight: 500,
                            letterSpacing: 0,
                            lineHeight: 1.2,
                            lineHeightPixels: 100,
                            lineHeightType: true,
                            offset: 0,
                            textAlign: 'left',
                            whiteSpace: 'nowrap',
                          },
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
                isDisplayed8() && /* @__PURE__ */ _jsx4(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                    children: /* @__PURE__ */ _jsx4(motion3.h4, {
                      className: 'framer-styles-preset-90m2e0',
                      'data-styles-preset': 'ydC9w7qn8',
                      style: { '--framer-text-alignment': 'right', },
                      children: 'Option 2',
                    },),
                  },),
                  className: 'framer-eva85o',
                  'data-framer-name': 'Board Dimensions',
                  layoutDependency,
                  layoutId: 'nHQ0UoEPv',
                  style: { '--framer-paragraph-spacing': '0px', },
                  text: cib0E0Vb9,
                  variants: {
                    qV5XCavMo: { '--extracted-1eung3n': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))', },
                  },
                  verticalAlignment: 'center',
                  withExternalLayout: true,
                  ...addPropertyOverrides2(
                    {
                      qV5XCavMo: {
                        children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                          children: /* @__PURE__ */ _jsx4(motion3.h4, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                              '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                              '--framer-font-size': '13px',
                              '--framer-letter-spacing': '0.04em',
                              '--framer-text-alignment': 'right',
                              '--framer-text-color':
                                'var(--extracted-1eung3n, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                            },
                            children: 'B',
                          },),
                        },),
                        fonts: ['CUSTOM;PP Supply Sans Medium',],
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                  className: 'framer-13ltp5y-container',
                  layoutDependency,
                  layoutId: 'ddVwnbWnZ-container',
                  children: /* @__PURE__ */ _jsx4(TypeWriter, {
                    autoStart: true,
                    caretVisibility: false,
                    color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                    cursor: '\u25CF',
                    cursorColor: 'rgba(136, 136, 136, 0.5)',
                    delayNumber: 0.06,
                    delayType: false,
                    font: {
                      fontFamily: 'PP Supply Sans Medium',
                      fontSize: 16,
                      fontWeight: 500,
                      letterSpacing: 0,
                      lineHeight: 1.2,
                      lineHeightPixels: 100,
                      lineHeightType: true,
                      offset: 0,
                      textAlign: 'right',
                      whiteSpace: 'nowrap',
                    },
                    height: '100%',
                    id: 'ddVwnbWnZ',
                    layoutId: 'ddVwnbWnZ',
                    loop: false,
                    pauseFor: 1,
                    split: false,
                    style: { width: '100%', },
                    tag: 'heading1',
                    text: cib0E0Vb9,
                    width: '100%',
                    ...addPropertyOverrides2(
                      {
                        qV5XCavMo: {
                          font: {
                            fontFamily: 'PP Supply Sans Medium',
                            fontSize: 10,
                            fontWeight: 500,
                            letterSpacing: 0,
                            lineHeight: 1.2,
                            lineHeightPixels: 100,
                            lineHeightType: true,
                            offset: 0,
                            textAlign: 'right',
                            whiteSpace: 'nowrap',
                          },
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
                isDisplayed9() && /* @__PURE__ */
                _jsx4(motion3.div, {
                  className: 'framer-11ipqiw-container',
                  layoutDependency,
                  layoutId: 'pYbKGMi0I-container',
                  children: /* @__PURE__ */ _jsx4(stdin_default3, {
                    height: '100%',
                    id: 'pYbKGMi0I',
                    layoutId: 'pYbKGMi0I',
                    variant: convertFromBoolean(AA_oylHc1, activeLocale,),
                    width: '100%',
                  },),
                },),
                isDisplayed10() && /* @__PURE__ */
                _jsx4(motion3.div, {
                  className: 'framer-xv96wz-container',
                  layoutDependency,
                  layoutId: 'AYob5DRWp-container',
                  children: /* @__PURE__ */ _jsx4(stdin_default2, {
                    height: '100%',
                    id: 'AYob5DRWp',
                    layoutId: 'AYob5DRWp',
                    variant: convertFromBoolean1(AA_oylHc1, activeLocale,),
                    width: '100%',
                  },),
                },),
              ],
            },),
          },),
          isDisplayed3() && /* @__PURE__ */ _jsx4(motion3.div, {
            className: 'framer-1cyqgqh',
            'data-framer-name': 'Input',
            layoutDependency,
            layoutId: 'nImH06vgx',
            style: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12, },
            children: /* @__PURE__ */ _jsxs2(motion3.div, {
              className: 'framer-o1k220',
              'data-framer-name': 'Content',
              layoutDependency,
              layoutId: 'EbqS70Gxh',
              children: [
                isDisplayed11() && /* @__PURE__ */ _jsx4(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                    children: /* @__PURE__ */ _jsx4(motion3.p, {
                      style: {
                        '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                        '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                        '--framer-letter-spacing': '0.5px',
                        '--framer-line-height': '1.5em',
                        '--framer-text-color':
                          'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                      },
                      children: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    },),
                  },),
                  className: 'framer-ivgzyi',
                  'data-framer-name': 'Value',
                  fonts: ['CUSTOM;PP Supply Sans Light',],
                  layoutDependency,
                  layoutId: 'sytYy87Uv',
                  style: {
                    '--extracted-r6o4lv': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))',
                    '--framer-paragraph-spacing': '0px',
                  },
                  text: nQb7W3cjE,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                  ...addPropertyOverrides2(
                    {
                      fSJwriuSS: {
                        children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                          children: /* @__PURE__ */ _jsx4(motion3.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                              '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                              '--framer-font-size': '10px',
                              '--framer-letter-spacing': '0.5px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-color':
                                'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                            },
                            children: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                          },),
                        },),
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                NPSt7VsjX && /* @__PURE__ */ _jsx4(motion3.div, {
                  className: 'framer-5wsa7o-container',
                  layoutDependency,
                  layoutId: 'jC8ftCsb3-container',
                  style: { rotate: 34, },
                  variants: { fSJwriuSS: { rotate: 0, }, Wfe2yFy4g: { rotate: 0, }, },
                  children: /* @__PURE__ */ _jsx4(TypeWriter, {
                    autoStart: true,
                    caretVisibility: false,
                    color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',
                    cursor: '|',
                    cursorColor: 'rgba(136, 136, 136, 0.5)',
                    delayNumber: 0.1,
                    delayType: false,
                    font: {
                      fontFamily: 'PP Supply Sans Light',
                      fontSize: 16,
                      fontWeight: 500,
                      letterSpacing: 0.5,
                      lineHeight: 1.5,
                      lineHeightPixels: 100,
                      lineHeightType: true,
                      offset: 0,
                      textAlign: 'left',
                      whiteSpace: 'normal',
                    },
                    height: '100%',
                    id: 'jC8ftCsb3',
                    layoutId: 'jC8ftCsb3',
                    loop: true,
                    pauseFor: 2,
                    split: false,
                    style: { width: '100%', },
                    tag: 'heading1',
                    text: nQb7W3cjE,
                    width: '100%',
                    ...addPropertyOverrides2(
                      {
                        fSJwriuSS: {
                          delayNumber: 0.03,
                          font: {
                            fontFamily: 'PP Supply Sans Light',
                            fontSize: 12,
                            fontWeight: 500,
                            letterSpacing: 0.5,
                            lineHeight: 1.5,
                            lineHeightPixels: 100,
                            lineHeightType: true,
                            offset: 0,
                            textAlign: 'left',
                            whiteSpace: 'normal',
                          },
                          loop: false,
                          pauseFor: 1,
                        },
                        Wfe2yFy4g: { delayNumber: 0.05, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
                /* @__PURE__ */ _jsx4(motion3.div, {
                  className: 'framer-15wkik3',
                  'data-framer-name': 'Adorn. End Container',
                  layoutDependency,
                  layoutId: 'lZW8el5CE',
                  children: /* @__PURE__ */ _jsx4(motion3.div, {
                    className: 'framer-9cc7lb',
                    'data-framer-name': 'AdornmentEnd',
                    layoutDependency,
                    layoutId: 'gXObIIVW8',
                    children: /* @__PURE__ */ _jsx4(SVG2, {
                      className: 'framer-3bebcg',
                      'data-framer-name': 'Vector',
                      layout: 'position',
                      layoutDependency,
                      layoutId: 'ZAN56s7P_',
                      opacity: 1,
                      svg:
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><path d="M 1.967 15.5 L 3.04 15.5 L 12.934 5.606 L 11.861 4.533 L 1.967 14.427 Z M 15.074 4.887 L 12.574 2.398 L 13.782 1.19 C 13.986 0.987 14.229 0.885 14.512 0.885 C 14.795 0.885 15.038 0.987 15.242 1.19 L 16.276 2.225 C 16.48 2.429 16.584 2.67 16.588 2.949 C 16.592 3.228 16.492 3.469 16.288 3.673 Z M 14.355 5.612 L 3.467 16.5 L 0.967 16.5 L 0.967 14 L 11.855 3.112 Z M 12.388 5.06 L 11.861 4.533 L 12.934 5.606 Z" fill="var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {&quot;name&quot;:&quot;Space&quot;} */"></path></svg>',
                      svgContentId: 1338201683,
                      withExternalLayout: true,
                      ...addPropertyOverrides2(
                        {
                          fSJwriuSS: {
                            svg:
                              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><path d="M 1.388 10.941 L 2.146 10.941 L 9.13 3.957 L 8.372 3.2 L 1.388 10.184 Z M 10.641 3.449 L 8.876 1.693 L 9.728 0.84 C 9.872 0.696 10.044 0.624 10.244 0.624 C 10.443 0.624 10.615 0.696 10.759 0.84 L 11.489 1.571 C 11.633 1.714 11.706 1.885 11.709 2.082 C 11.712 2.279 11.641 2.449 11.497 2.593 Z M 10.133 3.961 L 2.447 11.647 L 0.682 11.647 L 0.682 9.882 L 8.368 2.196 Z M 8.744 3.572 L 8.372 3.2 L 9.13 3.957 Z" fill="var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {&quot;name&quot;:&quot;Space&quot;} */"></path></svg>',
                            svgContentId: 218827995,
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
              ],
            },),
          },),
        ],
      },),
    },),
  },);
},);
var css3 = [
  '.framer-f4133[data-border="true"]::after, .framer-f4133 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-f4133.framer-17k9lcm, .framer-f4133 .framer-17k9lcm { display: block; }',
  '.framer-f4133.framer-ubmi04 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-f4133 .framer-s8ik11 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px 10px 0px 10px; position: relative; width: auto; }',
  '.framer-f4133 .framer-lyzunu, .framer-f4133 .framer-1kpfvtt, .framer-f4133 .framer-841zpz, .framer-f4133 .framer-1fro32h { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '.framer-f4133 .framer-12y26uo-container, .framer-f4133 .framer-6epta2-container, .framer-f4133 .framer-ii7jep-container, .framer-f4133 .framer-j34qcq-container, .framer-f4133 .framer-1kyowmy-container, .framer-f4133 .framer-1ofvx9w-container, .framer-f4133 .framer-qqau2w-container, .framer-f4133 .framer-sbe7bz-container, .framer-f4133 .framer-13ltp5y-container, .framer-f4133 .framer-5wsa7o-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }',
  '.framer-f4133 .framer-19lcyrf { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 12px 9px 10px; position: relative; width: auto; }',
  '.framer-f4133 .framer-1vu5yst { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px 10px 10px 10px; position: relative; width: auto; }',
  '.framer-f4133 .framer-1v7c9ix { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-f4133 .framer-yrdgrn-container { flex: none; height: auto; position: relative; width: 100%; }',
  '.framer-f4133 .framer-1cypg73 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 24px; overflow: visible; padding: 10px 10px 10px 10px; position: relative; width: auto; }',
  '.framer-f4133 .framer-s5cdq5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 5px 0px 5px 0px; position: relative; width: 277px; }',
  '.framer-f4133 .framer-crweby, .framer-f4133 .framer-1ferc8i, .framer-f4133 .framer-m3o52p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 32px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-f4133 .framer-14jci97-container, .framer-f4133 .framer-1hj9m21-container, .framer-f4133 .framer-1tqvnrb-container, .framer-f4133 .framer-11ipqiw-container, .framer-f4133 .framer-xv96wz-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-f4133 .framer-2mo03c, .framer-f4133 .framer-1yflnix, .framer-f4133 .framer-yxub92, .framer-f4133 .framer-1d8zajo, .framer-f4133 .framer-eva85o { flex: 1 0 0px; height: 24px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '.framer-f4133 .framer-11t7ch5 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 8px 12px 8px 12px; position: relative; width: auto; }',
  '.framer-f4133 .framer-mydmw0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 213px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-f4133 .framer-1cyqgqh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; overflow: visible; padding: 9px 12px 8px 12px; position: relative; width: min-content; }',
  '.framer-f4133 .framer-o1k220 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 253px; }',
  '.framer-f4133 .framer-ivgzyi { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 221px; word-break: break-word; word-wrap: break-word; }',
  '.framer-f4133 .framer-15wkik3 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-f4133 .framer-9cc7lb { flex: none; height: 24px; overflow: hidden; position: relative; width: 24px; }',
  '.framer-f4133 .framer-3bebcg { flex: none; height: 17px; left: 4px; position: absolute; top: 4px; width: 17px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-f4133.framer-ubmi04, .framer-f4133 .framer-s8ik11, .framer-f4133 .framer-19lcyrf, .framer-f4133 .framer-1vu5yst, .framer-f4133 .framer-1cypg73, .framer-f4133 .framer-s5cdq5, .framer-f4133 .framer-crweby, .framer-f4133 .framer-1ferc8i, .framer-f4133 .framer-m3o52p, .framer-f4133 .framer-1cyqgqh, .framer-f4133 .framer-o1k220, .framer-f4133 .framer-15wkik3 { gap: 0px; } .framer-f4133.framer-ubmi04 > *, .framer-f4133 .framer-s5cdq5 > *, .framer-f4133 .framer-15wkik3 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-f4133.framer-ubmi04 > :first-child, .framer-f4133 .framer-1vu5yst > :first-child, .framer-f4133 .framer-s5cdq5 > :first-child, .framer-f4133 .framer-1cyqgqh > :first-child, .framer-f4133 .framer-15wkik3 > :first-child { margin-top: 0px; } .framer-f4133.framer-ubmi04 > :last-child, .framer-f4133 .framer-1vu5yst > :last-child, .framer-f4133 .framer-s5cdq5 > :last-child, .framer-f4133 .framer-1cyqgqh > :last-child, .framer-f4133 .framer-15wkik3 > :last-child { margin-bottom: 0px; } .framer-f4133 .framer-s8ik11 > *, .framer-f4133 .framer-19lcyrf > *, .framer-f4133 .framer-1cypg73 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-f4133 .framer-s8ik11 > :first-child, .framer-f4133 .framer-19lcyrf > :first-child, .framer-f4133 .framer-1cypg73 > :first-child, .framer-f4133 .framer-crweby > :first-child, .framer-f4133 .framer-1ferc8i > :first-child, .framer-f4133 .framer-m3o52p > :first-child, .framer-f4133 .framer-o1k220 > :first-child { margin-left: 0px; } .framer-f4133 .framer-s8ik11 > :last-child, .framer-f4133 .framer-19lcyrf > :last-child, .framer-f4133 .framer-1cypg73 > :last-child, .framer-f4133 .framer-crweby > :last-child, .framer-f4133 .framer-1ferc8i > :last-child, .framer-f4133 .framer-m3o52p > :last-child, .framer-f4133 .framer-o1k220 > :last-child { margin-right: 0px; } .framer-f4133 .framer-1vu5yst > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-f4133 .framer-crweby > *, .framer-f4133 .framer-1ferc8i > *, .framer-f4133 .framer-m3o52p > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-f4133 .framer-1cyqgqh > * { margin: 0px; margin-bottom: calc(3px / 2); margin-top: calc(3px / 2); } .framer-f4133 .framer-o1k220 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }',
  '.framer-f4133.framer-v-bqdfuj.framer-ubmi04 { width: 203px; }',
  '.framer-f4133.framer-v-bqdfuj .framer-s8ik11, .framer-f4133.framer-v-cameip .framer-s8ik11 { align-self: unset; order: 0; width: 100%; }',
  '.framer-f4133.framer-v-bqdfuj .framer-19lcyrf, .framer-f4133.framer-v-1xhso81 .framer-19lcyrf { align-self: unset; order: 2; width: 100%; }',
  '.framer-f4133.framer-v-bqdfuj .framer-1cypg73 { align-self: unset; min-height: unset; order: 1; width: 100%; }',
  '.framer-f4133.framer-v-cameip.framer-ubmi04 { width: 243px; }',
  '.framer-f4133.framer-v-cameip .framer-11t7ch5, .framer-f4133.framer-v-117x2zl .framer-11t7ch5 { align-self: unset; order: 3; width: 100%; }',
  '.framer-f4133.framer-v-cameip .framer-mydmw0, .framer-f4133.framer-v-117x2zl .framer-mydmw0 { height: 32px; order: 0; }',
  '.framer-f4133.framer-v-cameip .framer-1d8zajo, .framer-f4133.framer-v-117x2zl .framer-1d8zajo { order: 0; }',
  '.framer-f4133.framer-v-cameip .framer-sbe7bz-container, .framer-f4133.framer-v-117x2zl .framer-sbe7bz-container { order: 1; }',
  '.framer-f4133.framer-v-cameip .framer-eva85o, .framer-f4133.framer-v-117x2zl .framer-xv96wz-container { order: 3; }',
  '.framer-f4133.framer-v-cameip .framer-13ltp5y-container, .framer-f4133.framer-v-117x2zl .framer-eva85o { order: 4; }',
  '.framer-f4133.framer-v-cameip .framer-11ipqiw-container { order: 2; }',
  '.framer-f4133.framer-v-ajsg1n.framer-ubmi04 { width: 277px; }',
  '.framer-f4133.framer-v-ajsg1n .framer-1vu5yst { align-self: unset; flex-direction: row; order: 0; width: 100%; }',
  '.framer-f4133.framer-v-ajsg1n .framer-1v7c9ix, .framer-f4133.framer-v-ajsg1n .framer-yrdgrn-container, .framer-f4133.framer-v-ajsg1n .framer-ivgzyi, .framer-f4133.framer-v-o5kv5u .framer-1v7c9ix, .framer-f4133.framer-v-o5kv5u .framer-ivgzyi { flex: 1 0 0px; width: 1px; }',
  '.framer-f4133.framer-v-ajsg1n .framer-1cyqgqh, .framer-f4133.framer-v-o5kv5u .framer-1cyqgqh { order: 4; padding: 0px 12px 8px 12px; width: 100%; }',
  '.framer-f4133.framer-v-ajsg1n .framer-o1k220, .framer-f4133.framer-v-o5kv5u .framer-o1k220, .framer-f4133.framer-v-1pumkev .framer-s5cdq5 { width: 100%; }',
  '.framer-f4133.framer-v-ajsg1n .framer-15wkik3 { width: 24px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-f4133.framer-v-ajsg1n .framer-1vu5yst { gap: 0px; } .framer-f4133.framer-v-ajsg1n .framer-1vu5yst > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-f4133.framer-v-ajsg1n .framer-1vu5yst > :first-child { margin-left: 0px; } .framer-f4133.framer-v-ajsg1n .framer-1vu5yst > :last-child { margin-right: 0px; } }',
  '.framer-f4133.framer-v-o5kv5u.framer-ubmi04 { justify-content: flex-start; width: 193px; }',
  '.framer-f4133.framer-v-o5kv5u .framer-1vu5yst { align-content: flex-start; align-items: flex-start; align-self: unset; flex-direction: row; order: 0; padding: 6px 10px 6px 10px; width: 100%; }',
  '.framer-f4133.framer-v-o5kv5u .framer-3bebcg { height: 12px; left: unset; right: 4px; top: 4px; width: 12px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-f4133.framer-v-o5kv5u .framer-1vu5yst { gap: 0px; } .framer-f4133.framer-v-o5kv5u .framer-1vu5yst > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-f4133.framer-v-o5kv5u .framer-1vu5yst > :first-child { margin-left: 0px; } .framer-f4133.framer-v-o5kv5u .framer-1vu5yst > :last-child { margin-right: 0px; } }',
  '.framer-f4133.framer-v-117x2zl.framer-ubmi04 { width: 127px; }',
  '.framer-f4133.framer-v-117x2zl .framer-s8ik11, .framer-f4133.framer-v-1xhso81 .framer-s8ik11 { align-self: unset; order: 0; padding: 6px 10px 6px 10px; width: 100%; }',
  '.framer-f4133.framer-v-117x2zl .framer-13ltp5y-container { order: 5; }',
  '.framer-f4133.framer-v-1xhso81.framer-ubmi04 { width: 114px; }',
  '.framer-f4133.framer-v-1xhso81 .framer-1cypg73 { align-self: unset; min-height: unset; order: 1; padding: 0px 10px 0px 10px; width: 100%; }',
  '.framer-f4133.framer-v-1pumkev.framer-ubmi04 { width: 139px; }',
  '.framer-f4133.framer-v-1pumkev .framer-s8ik11 { align-self: unset; width: 100%; }',
  ...css,
];
var FramerFpOKcRGFb = withCSS4(Component2, css3, 'framer-f4133',);
var stdin_default4 = FramerFpOKcRGFb;
FramerFpOKcRGFb.displayName = 'node-type';
FramerFpOKcRGFb.defaultProps = { height: 134, width: 277, };
addPropertyControls4(FramerFpOKcRGFb, {
  variant: {
    options: ['wHWVBWbCh', 'u5YClbSTz', 'cJW2ksH1e', 'Wfe2yFy4g', 'fSJwriuSS', 'qV5XCavMo', 'tp4ldCYgZ', 'XTPzGOQNq',],
    optionTitles: ['Multiple Choice', 'Slider', 'Boolean', 'Input', 'Input Small', 'Boolean Smalll', 'Slider Small', 'MC Small',],
    title: 'Variant',
    type: ControlType7.Enum,
  },
  eePEcZAuW: {
    defaultValue: 'zAJDHJhkW',
    options: ['zAJDHJhkW', 's7bcrIMxH', 'jmeUKm4BT',],
    optionTitles: ['Option 1', 'Option 2', 'Option 3',],
    title: 'Option',
    type: ControlType7.Enum,
  },
  kRgq0jgQR: { defaultValue: 50, displayStepper: false, max: 100, min: 0, title: 'Sliider Value', type: ControlType7.Number, },
  Cpm7YdhW6: { defaultValue: 'A', placeholder: 'A', title: 'Option 1', type: ControlType7.String, },
  cib0E0Vb9: { defaultValue: 'B', displayTextArea: false, placeholder: 'B', title: 'Option 2', type: ControlType7.String, },
  B9Ye7wHiX: { defaultValue: 'A', placeholder: 'A', title: 'Choice 1', type: ControlType7.String, },
  yBMe3I4G7: { defaultValue: 'B', placeholder: 'B', title: 'Choice 2', type: ControlType7.String, },
  dxSidP8LF: { defaultValue: 'C', placeholder: 'C', title: 'Choice 3', type: ControlType7.String, },
  NPSt7VsjX: { defaultValue: true, title: 'Streaming', type: ControlType7.Boolean, },
  Gu4Kp5hWx: { defaultValue: 'Title', displayTextArea: false, placeholder: 'Title', title: 'Title', type: ControlType7.String, },
  nQb7W3cjE: {
    defaultValue: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    displayTextArea: true,
    title: 'Input',
    type: ControlType7.String,
  },
  AA_oylHc1: { defaultValue: false, title: 'Boolean Toggle', type: ControlType7.Boolean, },
},);
addFonts2(FramerFpOKcRGFb, [
  { family: 'PP Supply Sans Medium', url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf', },
  { family: 'PP Supply Sans Semibold', url: 'https://framerusercontent.com/assets/pTQFOoSKHkP8mTGMzsUIQQeIh4.ttf', },
  { family: 'PP Supply Sans Light', url: 'https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf', },
  ...TypewriterFonts,
  ...SliderFonts,
  ...RadioFonts,
  ...ToggleFonts,
  ...ToggleCopyFonts,
  ...fonts,
],);

// https :https://framerusercontent.com/modules/dts3KkzoHO6kQWh7b5Ug/Jl4LcFSHJUrJcPe7QrUZ/A4GdXWFMj.js
var NodeTypeFonts = getFonts2(stdin_default4,);
var NodeTypeControls = getPropertyControls(stdin_default4,);
var cycleOrder3 = ['wZ2vnzihB', 'cbq3T4JIp',];
var serializationHash2 = 'framer-dpVuh';
var variantClassNames3 = { cbq3T4JIp: 'framer-v-u1sef0', wZ2vnzihB: 'framer-v-11roolr', };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions3 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var Transition3 = ({ value, children, },) => {
  const config = React5.useContext(MotionConfigContext3,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx5(MotionConfigContext3.Provider, { value: contextValue, children, },);
};
var humanReadableEnumMap2 = {
  'Boolean Smalll': 'qV5XCavMo',
  'Input Small': 'fSJwriuSS',
  'MC Small': 'XTPzGOQNq',
  'Multiple Choice': 'wHWVBWbCh',
  'Slider Small': 'tp4ldCYgZ',
  Boolean: 'cJW2ksH1e',
  Input: 'Wfe2yFy4g',
  Slider: 'u5YClbSTz',
};
var humanReadableVariantMap3 = { default: 'cbq3T4JIp', hover: 'wZ2vnzihB', };
var getProps3 = ({ height, id, index, input, streaming, title2, type, width, ...props },) => {
  var _humanReadableEnumMap_type, _ref, _ref1, _ref2, _ref3, _humanReadableVariantMap_props_variant, _ref4, _ref5;
  return {
    ...props,
    AoRZX1H1N: streaming !== null && streaming !== void 0 ? streaming : props.AoRZX1H1N,
    lxdU5EATK:
      (_ref1 = (_ref = (_humanReadableEnumMap_type = humanReadableEnumMap2[type]) !== null && _humanReadableEnumMap_type !== void 0
                  ? _humanReadableEnumMap_type
                  : type) !== null && _ref !== void 0
            ? _ref
            : props.lxdU5EATK) !== null && _ref1 !== void 0
        ? _ref1
        : 'fSJwriuSS',
    NJqu6koZC: (_ref2 = input !== null && input !== void 0 ? input : props.NJqu6koZC) !== null && _ref2 !== void 0
      ? _ref2
      : 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    QCOPRCUSC: (_ref3 = index !== null && index !== void 0 ? index : props.QCOPRCUSC) !== null && _ref3 !== void 0 ? _ref3 : 'A-2',
    variant:
      (_ref4 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap3[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref4 !== void 0
        ? _ref4
        : 'wZ2vnzihB',
    W1dUHMesf: (_ref5 = title2 !== null && title2 !== void 0 ? title2 : props.W1dUHMesf) !== null && _ref5 !== void 0
      ? _ref5
      : 'Define Primary Goal',
  };
};
var createLayoutDependency3 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component3 = /* @__PURE__ */ React5.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo3();
  const { style, className: className2, layoutId, variant, QCOPRCUSC, lxdU5EATK, W1dUHMesf, NJqu6koZC, AoRZX1H1N, ...restProps } =
    getProps3(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState3({
    cycleOrder: cycleOrder3,
    defaultVariant: 'wZ2vnzihB',
    transitions: transitions3,
    variant,
    variantClassNames: variantClassNames3,
  },);
  const layoutDependency = createLayoutDependency3(props, variants,);
  const ref1 = React5.useRef(null,);
  const isDisplayed = () => {
    if (baseVariant === 'cbq3T4JIp') {
      return false;
    }
    return true;
  };
  const defaultLayoutId = React5.useId();
  const sharedStyleClassNames = [];
  return /* @__PURE__ */ _jsx5(LayoutGroup3, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx5(Transition3, {
      value: transition,
      children: /* @__PURE__ */ _jsx5(motion4.div, {
        ...restProps,
        animate: variants,
        className: cx3(serializationHash2, ...sharedStyleClassNames, 'framer-11roolr', className2, classNames,),
        'data-framer-name': 'hover',
        initial: variant,
        layoutDependency,
        layoutId: 'wZ2vnzihB',
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onTap: () => setGestureState({ isPressed: false, },),
        onTapCancel: () => setGestureState({ isPressed: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        ref: ref !== null && ref !== void 0 ? ref : ref1,
        style: { ...style, },
        ...addPropertyOverrides3({ cbq3T4JIp: { 'data-framer-name': 'default', }, }, baseVariant, gestureVariant,),
        children: /* @__PURE__ */ _jsx5(motion4.div, {
          className: 'framer-198tq80',
          'data-framer-name': 'Frame 2608513',
          layoutDependency,
          layoutId: 'EOsWO_QI1',
          children: /* @__PURE__ */ _jsxs3(motion4.div, {
            className: 'framer-wcil6r',
            'data-framer-name': 'Search bar',
            layoutDependency,
            layoutId: 'kaNzx5LzP',
            style: {
              backgroundColor: 'rgb(237, 238, 241)',
              borderBottomLeftRadius: 28,
              borderBottomRightRadius: 28,
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
              boxShadow: '0px 13px 16px -1px rgba(0, 0, 0, 0.23)',
            },
            variants: {
              cbq3T4JIp: {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                boxShadow: 'none',
              },
            },
            children: [
              /* @__PURE__ */ _jsxs3(motion4.div, {
                className: 'framer-z4y7c8',
                'data-framer-name': 'state-layer',
                layoutDependency,
                layoutId: 'TvDEjHH6w',
                children: [
                  /* @__PURE__ */ _jsx5(motion4.div, {
                    className: 'framer-1mc0qah',
                    'data-framer-name': 'Trailing-Elements',
                    layoutDependency,
                    layoutId: 'vZLIIn6dW',
                    children: /* @__PURE__ */ _jsx5(motion4.div, {
                      className: 'framer-1ickzll',
                      'data-framer-name': 'Avatar-target',
                      layoutDependency,
                      layoutId: 'YubHZA293',
                      children: /* @__PURE__ */ _jsx5(motion4.div, {
                        className: 'framer-mzr60a',
                        'data-framer-name': 'Leading element',
                        layoutDependency,
                        layoutId: 'tefoqV_mq',
                        children: /* @__PURE__ */ _jsx5(motion4.div, {
                          className: 'framer-1oshf39',
                          'data-framer-name': 'Building Blocks/Monogram',
                          layoutDependency,
                          layoutId: 'unQWFotM5',
                          style: {
                            backgroundColor: 'rgb(69, 164, 176)',
                            borderBottomLeftRadius: 26,
                            borderBottomRightRadius: 26,
                            borderTopLeftRadius: 26,
                            borderTopRightRadius: 26,
                          },
                          children: /* @__PURE__ */ _jsx5(RichText2, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                              children: /* @__PURE__ */ _jsx5(motion4.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                  '--framer-letter-spacing': '-0.5px',
                                  '--framer-line-height': '22px',
                                  '--framer-text-alignment': 'center',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                                },
                                children: 'A-2',
                              },),
                            },),
                            className: 'framer-nc1jdp',
                            'data-framer-name': 'Initial',
                            fonts: ['CUSTOM;PP Supply Sans Light',],
                            layoutDependency,
                            layoutId: 'smxMuzlJ1',
                            style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                            text: QCOPRCUSC,
                            verticalAlignment: 'center',
                            withExternalLayout: true,
                          },),
                        },),
                      },),
                    },),
                  },),
                  isDisplayed() && /* @__PURE__ */ _jsxs3(motion4.div, {
                    className: 'framer-e83wz3',
                    'data-framer-name': 'Content',
                    layoutDependency,
                    layoutId: 'bKslJ4TgA',
                    children: [
                      /* @__PURE__ */ _jsxs3(motion4.div, {
                        className: 'framer-1t4brwe',
                        layoutDependency,
                        layoutId: 'wVJfg4hIM',
                        children: [
                          /* @__PURE__ */ _jsx5(RichText2, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                              children: /* @__PURE__ */ _jsx5(motion4.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                                  '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                                  '--framer-font-size': '12px',
                                  '--framer-letter-spacing': '0.5px',
                                  '--framer-line-height': '24px',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                                },
                                children: 'Decision Node',
                              },),
                            },),
                            className: 'framer-13eay36',
                            'data-framer-name': 'supporting-text',
                            fonts: ['CUSTOM;PP Supply Sans Medium',],
                            layoutDependency,
                            layoutId: 'tYOiIMZDy',
                            style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                            verticalAlignment: 'center',
                            withExternalLayout: true,
                          },),
                          /* @__PURE__ */ _jsx5(RichText2, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                              children: /* @__PURE__ */ _jsx5(motion4.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                  '--framer-text-transform': 'capitalize',
                                },
                                children: 'Define Primary Goal',
                              },),
                            },),
                            className: 'framer-e4h0q9',
                            'data-framer-name': 'supporting-text',
                            fonts: ['CUSTOM;PP Supply Sans Light',],
                            layoutDependency,
                            layoutId: 'mHlvgTPwH',
                            style: { '--framer-paragraph-spacing': '0px', },
                            text: W1dUHMesf,
                            verticalAlignment: 'center',
                            withExternalLayout: true,
                          },),
                        ],
                      },),
                      /* @__PURE__ */ _jsx5(motion4.div, {
                        className: 'framer-sy5g44',
                        'data-framer-name': 'Leading-icon',
                        layoutDependency,
                        layoutId: 'iRCcIBiIk',
                        children: /* @__PURE__ */ _jsx5(motion4.div, {
                          className: 'framer-n1rm4',
                          'data-framer-name': 'container',
                          layoutDependency,
                          layoutId: 'XWUxp0uFB',
                          style: {
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                          },
                          children: /* @__PURE__ */ _jsx5(motion4.div, {
                            className: 'framer-vqyzwc',
                            'data-framer-name': 'state-layer',
                            layoutDependency,
                            layoutId: 'zFjwVocJZ',
                            children: /* @__PURE__ */ _jsx5(motion4.div, {
                              className: 'framer-kl16gq',
                              'data-framer-name': 'Icon',
                              layoutDependency,
                              layoutId: 'ya6P5S7z1',
                              children: /* @__PURE__ */ _jsx5(SVG3, {
                                className: 'framer-xu11w6',
                                'data-framer-name': 'icon',
                                fill: 'rgba(0,0,0,1)',
                                intrinsicHeight: 16,
                                intrinsicWidth: 4,
                                layoutDependency,
                                layoutId: 'LJ1VmVGJb',
                                svg:
                                  '<svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z" fill="#3F484A"/>\n</svg>\n',
                                withExternalLayout: true,
                              },),
                            },),
                          },),
                        },),
                      },),
                    ],
                  },),
                ],
              },),
              isDisplayed() && /* @__PURE__ */ _jsx5(motion4.div, {
                className: 'framer-maj9oe',
                layoutDependency,
                layoutId: 'YWPrfQt8J',
                children: /* @__PURE__ */ _jsx5(motion4.div, {
                  className: 'framer-60028p-container',
                  layoutDependency,
                  layoutId: 'I0lrz3W9r-container',
                  children: /* @__PURE__ */ _jsx5(stdin_default4, {
                    AA_oylHc1: false,
                    B9Ye7wHiX: 'A',
                    cib0E0Vb9: 'B',
                    Cpm7YdhW6: 'A',
                    dxSidP8LF: 'C',
                    eePEcZAuW: 'zAJDHJhkW',
                    Gu4Kp5hWx: W1dUHMesf,
                    height: '100%',
                    id: 'I0lrz3W9r',
                    kRgq0jgQR: 50,
                    layoutId: 'I0lrz3W9r',
                    NPSt7VsjX: AoRZX1H1N,
                    nQb7W3cjE: NJqu6koZC,
                    style: { width: '100%', },
                    variant: lxdU5EATK,
                    width: '100%',
                    yBMe3I4G7: 'B',
                  },),
                },),
              },),
            ],
          },),
        },),
      },),
    },),
  },);
},);
var css4 = [
  '.framer-dpVuh[data-border="true"]::after, .framer-dpVuh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-dpVuh.framer-36ul35, .framer-dpVuh .framer-36ul35 { display: block; }',
  '.framer-dpVuh.framer-11roolr { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-dpVuh .framer-198tq80 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 366px; }',
  '.framer-dpVuh .framer-wcil6r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
  '.framer-dpVuh .framer-z4y7c8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 56px; justify-content: flex-start; overflow: visible; padding: 4px 4px 4px 4px; position: relative; width: 100%; }',
  '.framer-dpVuh .framer-1mc0qah { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-dpVuh .framer-1ickzll { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-dpVuh .framer-mzr60a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-dpVuh .framer-1oshf39 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-dpVuh .framer-nc1jdp { flex: none; height: 40px; left: calc(50% - 40px / 2); position: absolute; top: calc(50% - 40px / 2); white-space: pre-wrap; width: 40px; word-break: break-word; word-wrap: break-word; }',
  '.framer-dpVuh .framer-e83wz3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-dpVuh .framer-1t4brwe { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-dpVuh .framer-13eay36 { flex: none; height: 12px; position: relative; white-space: pre-wrap; width: 248px; word-break: break-word; word-wrap: break-word; }',
  '.framer-dpVuh .framer-e4h0q9 { flex: none; height: 19px; position: relative; white-space: pre-wrap; width: 248px; word-break: break-word; word-wrap: break-word; }',
  '.framer-dpVuh .framer-sy5g44 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-dpVuh .framer-n1rm4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-dpVuh .framer-vqyzwc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }',
  '.framer-dpVuh .framer-kl16gq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }',
  '.framer-dpVuh .framer-xu11w6 { bottom: 4px; flex: none; left: 10px; position: absolute; right: 10px; top: 4px; }',
  '.framer-dpVuh .framer-maj9oe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 12px 13px 12px; position: relative; width: min-content; }',
  '.framer-dpVuh .framer-60028p-container { flex: none; height: auto; position: relative; width: 342px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-dpVuh.framer-11roolr, .framer-dpVuh .framer-198tq80, .framer-dpVuh .framer-wcil6r, .framer-dpVuh .framer-z4y7c8, .framer-dpVuh .framer-1mc0qah, .framer-dpVuh .framer-1ickzll, .framer-dpVuh .framer-mzr60a, .framer-dpVuh .framer-e83wz3, .framer-dpVuh .framer-1t4brwe, .framer-dpVuh .framer-sy5g44, .framer-dpVuh .framer-n1rm4, .framer-dpVuh .framer-vqyzwc, .framer-dpVuh .framer-maj9oe { gap: 0px; } .framer-dpVuh.framer-11roolr > *, .framer-dpVuh .framer-1mc0qah > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-dpVuh.framer-11roolr > :first-child, .framer-dpVuh .framer-z4y7c8 > :first-child, .framer-dpVuh .framer-1mc0qah > :first-child, .framer-dpVuh .framer-1ickzll > :first-child, .framer-dpVuh .framer-e83wz3 > :first-child, .framer-dpVuh .framer-n1rm4 > :first-child, .framer-dpVuh .framer-vqyzwc > :first-child, .framer-dpVuh .framer-maj9oe > :first-child { margin-left: 0px; } .framer-dpVuh.framer-11roolr > :last-child, .framer-dpVuh .framer-z4y7c8 > :last-child, .framer-dpVuh .framer-1mc0qah > :last-child, .framer-dpVuh .framer-1ickzll > :last-child, .framer-dpVuh .framer-e83wz3 > :last-child, .framer-dpVuh .framer-n1rm4 > :last-child, .framer-dpVuh .framer-vqyzwc > :last-child, .framer-dpVuh .framer-maj9oe > :last-child { margin-right: 0px; } .framer-dpVuh .framer-198tq80 > *, .framer-dpVuh .framer-mzr60a > *, .framer-dpVuh .framer-1t4brwe > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-dpVuh .framer-198tq80 > :first-child, .framer-dpVuh .framer-wcil6r > :first-child, .framer-dpVuh .framer-mzr60a > :first-child, .framer-dpVuh .framer-1t4brwe > :first-child, .framer-dpVuh .framer-sy5g44 > :first-child { margin-top: 0px; } .framer-dpVuh .framer-198tq80 > :last-child, .framer-dpVuh .framer-wcil6r > :last-child, .framer-dpVuh .framer-mzr60a > :last-child, .framer-dpVuh .framer-1t4brwe > :last-child, .framer-dpVuh .framer-sy5g44 > :last-child { margin-bottom: 0px; } .framer-dpVuh .framer-wcil6r > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-dpVuh .framer-z4y7c8 > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-dpVuh .framer-1ickzll > *, .framer-dpVuh .framer-e83wz3 > *, .framer-dpVuh .framer-n1rm4 > *, .framer-dpVuh .framer-vqyzwc > *, .framer-dpVuh .framer-maj9oe > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-dpVuh .framer-sy5g44 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }',
  '.framer-dpVuh.framer-v-u1sef0 .framer-198tq80, .framer-dpVuh.framer-v-u1sef0 .framer-wcil6r, .framer-dpVuh.framer-v-u1sef0 .framer-z4y7c8 { width: min-content; }',
];
var FramerA4GdXWFMj = withCSS5(Component3, css4, 'framer-dpVuh',);
var stdin_default5 = FramerA4GdXWFMj;
FramerA4GdXWFMj.displayName = 'node-detail';
FramerA4GdXWFMj.defaultProps = { height: 135, width: 366, };
addPropertyControls5(FramerA4GdXWFMj, {
  variant: { options: ['wZ2vnzihB', 'cbq3T4JIp',], optionTitles: ['hover', 'default',], title: 'Variant', type: ControlType8.Enum, },
  QCOPRCUSC: { defaultValue: 'A-2', displayTextArea: false, title: 'Index', type: ControlType8.String, },
  lxdU5EATK: (NodeTypeControls === null || NodeTypeControls === void 0 ? void 0 : NodeTypeControls['variant']) &&
    { ...NodeTypeControls['variant'], defaultValue: 'fSJwriuSS', hidden: void 0, title: 'Type', },
  W1dUHMesf: { defaultValue: 'Define Primary Goal', displayTextArea: false, title: 'Title 2', type: ControlType8.String, },
  NJqu6koZC: {
    defaultValue: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    displayTextArea: true,
    title: 'Input',
    type: ControlType8.String,
  },
  AoRZX1H1N: { defaultValue: false, title: 'Streaming', type: ControlType8.Boolean, },
},);
addFonts3(FramerA4GdXWFMj, [
  { family: 'PP Supply Sans Light', url: 'https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf', },
  { family: 'PP Supply Sans Medium', url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf', },
  ...NodeTypeFonts,
],);

// https :https://framerusercontent.com/modules/Oud72c2V1Mr3Jz9fGInx/JOR3KhPFd8hglGOz5UeE/C_odUWZqr.js
var NodeDetailFonts = getFonts3(stdin_default5,);
var TypewriterFonts2 = getFonts3(TypeWriter,);
var NodeTypeFonts2 = getFonts3(stdin_default4,);
var NodeTypeControls2 = getPropertyControls2(stdin_default4,);
var NodeDetailControls = getPropertyControls2(stdin_default5,);
var cycleOrder4 = [
  'glP89HQPH',
  'PvhAKPvc8',
  'uyxhsUNZq',
  'uTj0cEPb8',
  'vVjMhdARB',
  'K8oqZ2hdT',
  'QKKRwxza_',
  'l6T5PxAnq',
  'FXIjKjDPL',
  'tVxl2ewSx',
  'z1ffbxAcs',
  'pmi554o5Z',
  'Cr7AsQCPR',
  'iqrSONtoO',
  'jFWx1BeuK',
];
var serializationHash3 = 'framer-43DSm';
var variantClassNames4 = {
  Cr7AsQCPR: 'framer-v-1s83m4o',
  FXIjKjDPL: 'framer-v-w4miu7',
  glP89HQPH: 'framer-v-15k1mix',
  iqrSONtoO: 'framer-v-1twsf6e',
  jFWx1BeuK: 'framer-v-vry1od',
  K8oqZ2hdT: 'framer-v-1khlikx',
  l6T5PxAnq: 'framer-v-40zvo0',
  pmi554o5Z: 'framer-v-14j2671',
  PvhAKPvc8: 'framer-v-1fc3t3a',
  QKKRwxza_: 'framer-v-18q1m16',
  tVxl2ewSx: 'framer-v-1kuanhy',
  uTj0cEPb8: 'framer-v-1a8pern',
  uyxhsUNZq: 'framer-v-tlkqch',
  vVjMhdARB: 'framer-v-uax94b',
  z1ffbxAcs: 'framer-v-uiz0vr',
};
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions4 = {
  Cr7AsQCPR: { delay: 0, duration: 0.8, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', },
  FXIjKjDPL: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  iqrSONtoO: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  jFWx1BeuK: { delay: 0, duration: 0.33, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  K8oqZ2hdT: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  QKKRwxza_: { delay: 0, duration: 0.33, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  uTj0cEPb8: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  uyxhsUNZq: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  vVjMhdARB: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
};
var transformTemplate1 = (_2, t3,) => `translateX(-50%) ${t3}`;
var transformTemplate2 = (_2, t3,) => `translateY(-50%) ${t3}`;
var negate2 = (value,) => {
  return !value;
};
var convertFromEnum3 = (value, activeLocale,) => {
  switch (value) {
    case 'FNw58JHcH':
      return 'Wfe2yFy4g';
    case 'pXF5zK4BB':
      return 'u5YClbSTz';
    case 'hjUA_q4Xo':
      return 'wHWVBWbCh';
    case 'R8yTQtly5':
      return 'cJW2ksH1e';
    default:
      return void 0;
  }
};
var convertFromEnum12 = (value, activeLocale,) => {
  switch (value) {
    case 'LNmrAjenO':
      return 'XTPzGOQNq';
    case 'IHKJNDltd':
      return 'qV5XCavMo';
    case 'nWf8FHUKr':
      return 'tp4ldCYgZ';
    case 'M5KMhG7fk':
      return 'fSJwriuSS';
    default:
      return 'tp4ldCYgZ';
  }
};
var Transition4 = ({ value, children, },) => {
  const config = React6.useContext(MotionConfigContext4,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx6(MotionConfigContext4.Provider, { value: contextValue, children, },);
};
var humanReadableEnumMap3 = { Boolean: 'R8yTQtly5', Choice: 'hjUA_q4Xo', Input: 'FNw58JHcH', Slider: 'pXF5zK4BB', };
var humanReadableEnumMap1 = { 'Multiple Choice': 'LNmrAjenO', Boolean: 'IHKJNDltd', Input: 'M5KMhG7fk', Slider: 'nWf8FHUKr', };
var humanReadableEnumMap22 = { 'Option 1': 'zAJDHJhkW', 'Option 2': 's7bcrIMxH', 'Option 3': 'jmeUKm4BT', };
var humanReadableEnumMap32 = { default: 'cbq3T4JIp', hover: 'wZ2vnzihB', };
var humanReadableVariantMap4 = {
  'Node-LG': 'uTj0cEPb8',
  'Node-MD': 'vVjMhdARB',
  'Node-SM': 'K8oqZ2hdT',
  'Node-XL': 'uyxhsUNZq',
  'Node-XS': 'QKKRwxza_',
  'Variant 10': 'tVxl2ewSx',
  'Variant 13': 'z1ffbxAcs',
  'Variant 14': 'iqrSONtoO',
  'Variant 8': 'l6T5PxAnq',
  Clockface: 'pmi554o5Z',
  Compact: 'Cr7AsQCPR',
  Expanded: 'glP89HQPH',
  Hover: 'PvhAKPvc8',
  Line: 'FXIjKjDPL',
  ticker: 'jFWx1BeuK',
};
var getProps4 = ({
  booleanToggle,
  choice,
  choice1,
  choice2,
  choice3,
  color,
  decisionDescription,
  decisionIndex,
  decisionTitle,
  decisionTypeNormal,
  decisionTypeSmall,
  dependencyIndex1,
  dependencyIndex2,
  dependencyIndex3,
  dependencyVisible,
  height,
  hover,
  id,
  input,
  scaleX1,
  scaleX2,
  sliderValue,
  streaming,
  tap,
  width,
  ...props
},) => {
  var _ref,
    _ref1,
    _ref2,
    _ref3,
    _ref4,
    _humanReadableEnumMap3_hover,
    _ref5,
    _ref6,
    _ref7,
    _ref8,
    _ref9,
    _humanReadableEnumMap2_choice,
    _ref10,
    _ref11,
    _humanReadableEnumMap_decisionTypeNormal,
    _ref12,
    _ref13,
    _ref14,
    _ref15,
    _ref16,
    _ref17,
    _humanReadableVariantMap_props_variant,
    _ref18,
    _ref19,
    _ref20,
    _ref21,
    _ref22,
    _humanReadableEnumMap1_decisionTypeSmall,
    _ref23,
    _ref24;
  return {
    ...props,
    aysnwkSZE: tap !== null && tap !== void 0 ? tap : props.aysnwkSZE,
    bGyluXMcm:
      (_ref = dependencyIndex3 !== null && dependencyIndex3 !== void 0 ? dependencyIndex3 : props.bGyluXMcm) !== null && _ref !== void 0
        ? _ref
        : 'C-2',
    C0xbi_CXP: (_ref1 = scaleX2 !== null && scaleX2 !== void 0 ? scaleX2 : props.C0xbi_CXP) !== null && _ref1 !== void 0 ? _ref1 : 'B',
    cRMlaJb1_: (_ref2 = color !== null && color !== void 0 ? color : props.cRMlaJb1_) !== null && _ref2 !== void 0
      ? _ref2
      : 'rgb(255, 255, 255)',
    eZ_WIO8yz: (_ref3 = choice3 !== null && choice3 !== void 0 ? choice3 : props.eZ_WIO8yz) !== null && _ref3 !== void 0
      ? _ref3
      : 'Choice 3',
    fxy_09app: (_ref4 = input !== null && input !== void 0 ? input : props.fxy_09app) !== null && _ref4 !== void 0
      ? _ref4
      : 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    Gb15ibvMU:
      (_ref6 = (_ref5 = (_humanReadableEnumMap3_hover = humanReadableEnumMap32[hover]) !== null && _humanReadableEnumMap3_hover !== void 0
                  ? _humanReadableEnumMap3_hover
                  : hover) !== null && _ref5 !== void 0
            ? _ref5
            : props.Gb15ibvMU) !== null && _ref6 !== void 0
        ? _ref6
        : 'wZ2vnzihB',
    iDjlfHFIv: (_ref7 = decisionIndex !== null && decisionIndex !== void 0 ? decisionIndex : props.iDjlfHFIv) !== null && _ref7 !== void 0
      ? _ref7
      : 'C-2',
    Jdv7M1lr6: (_ref8 = scaleX1 !== null && scaleX1 !== void 0 ? scaleX1 : props.Jdv7M1lr6) !== null && _ref8 !== void 0 ? _ref8 : 'A',
    JM8R5zcqV: booleanToggle !== null && booleanToggle !== void 0 ? booleanToggle : props.JM8R5zcqV,
    k4ezTegiq: (_ref9 = sliderValue !== null && sliderValue !== void 0 ? sliderValue : props.k4ezTegiq) !== null && _ref9 !== void 0
      ? _ref9
      : 50,
    K5BysgXsx:
      (_ref11 =
            (_ref10 = (_humanReadableEnumMap2_choice = humanReadableEnumMap22[choice]) !== null && _humanReadableEnumMap2_choice !== void 0
                  ? _humanReadableEnumMap2_choice
                  : choice) !== null && _ref10 !== void 0
              ? _ref10
              : props.K5BysgXsx) !== null && _ref11 !== void 0
        ? _ref11
        : 'zAJDHJhkW',
    LNNJy1jnm:
      (_ref13 =
            (_ref12 =
                  (_humanReadableEnumMap_decisionTypeNormal = humanReadableEnumMap3[decisionTypeNormal]) !== null &&
                    _humanReadableEnumMap_decisionTypeNormal !== void 0
                    ? _humanReadableEnumMap_decisionTypeNormal
                    : decisionTypeNormal) !== null && _ref12 !== void 0
              ? _ref12
              : props.LNNJy1jnm) !== null && _ref13 !== void 0
        ? _ref13
        : 'FNw58JHcH',
    NvMMjvlBy:
      (_ref14 = decisionDescription !== null && decisionDescription !== void 0 ? decisionDescription : props.NvMMjvlBy) !== null &&
        _ref14 !== void 0
        ? _ref14
        : 'Please provide the dimensions of the drawing board (width, height, and depth).',
    OJMet4Rjs: (_ref15 = choice1 !== null && choice1 !== void 0 ? choice1 : props.OJMet4Rjs) !== null && _ref15 !== void 0
      ? _ref15
      : 'Choice 1',
    qQ_BO9qk8: (_ref16 = choice2 !== null && choice2 !== void 0 ? choice2 : props.qQ_BO9qk8) !== null && _ref16 !== void 0
      ? _ref16
      : 'Choice 2',
    TTpsRmZqr:
      (_ref17 = dependencyVisible !== null && dependencyVisible !== void 0 ? dependencyVisible : props.TTpsRmZqr) !== null &&
        _ref17 !== void 0
        ? _ref17
        : true,
    variant:
      (_ref18 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap4[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref18 !== void 0
        ? _ref18
        : 'glP89HQPH',
    VOTcq87Vu: (_ref19 = streaming !== null && streaming !== void 0 ? streaming : props.VOTcq87Vu) !== null && _ref19 !== void 0
      ? _ref19
      : true,
    vZATQhujj: (_ref20 = decisionTitle !== null && decisionTitle !== void 0 ? decisionTitle : props.vZATQhujj) !== null && _ref20 !== void 0
      ? _ref20
      : 'Board Dimensions',
    Xo22rvSfa:
      (_ref21 = dependencyIndex2 !== null && dependencyIndex2 !== void 0 ? dependencyIndex2 : props.Xo22rvSfa) !== null && _ref21 !== void 0
        ? _ref21
        : 'B-2',
    Z93yscm8P:
      (_ref22 = dependencyIndex1 !== null && dependencyIndex1 !== void 0 ? dependencyIndex1 : props.Z93yscm8P) !== null && _ref22 !== void 0
        ? _ref22
        : 'A-1',
    zgF6TYXbc:
      (_ref24 =
            (_ref23 =
                  (_humanReadableEnumMap1_decisionTypeSmall = humanReadableEnumMap1[decisionTypeSmall]) !== null &&
                    _humanReadableEnumMap1_decisionTypeSmall !== void 0
                    ? _humanReadableEnumMap1_decisionTypeSmall
                    : decisionTypeSmall) !== null && _ref23 !== void 0
              ? _ref23
              : props.zgF6TYXbc) !== null && _ref24 !== void 0
        ? _ref24
        : 'LNmrAjenO',
  };
};
var createLayoutDependency4 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component4 = /* @__PURE__ */ React6.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo4();
  const {
    style,
    className: className2,
    layoutId,
    variant,
    vZATQhujj,
    NvMMjvlBy,
    iDjlfHFIv,
    LNNJy1jnm,
    zgF6TYXbc,
    K5BysgXsx,
    OJMet4Rjs,
    qQ_BO9qk8,
    eZ_WIO8yz,
    Jdv7M1lr6,
    C0xbi_CXP,
    k4ezTegiq,
    VOTcq87Vu,
    fxy_09app,
    JM8R5zcqV,
    cRMlaJb1_,
    Z93yscm8P,
    Xo22rvSfa,
    bGyluXMcm,
    TTpsRmZqr,
    Gb15ibvMU,
    aysnwkSZE,
    ...restProps
  } = getProps4(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState4({
    cycleOrder: cycleOrder4,
    defaultVariant: 'glP89HQPH',
    transitions: transitions4,
    variant,
    variantClassNames: variantClassNames4,
  },);
  const layoutDependency = createLayoutDependency4(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback2(baseVariant,);
  const onTap17xnc97 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    if (aysnwkSZE) {
      const res = await aysnwkSZE(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onTap1nt00da = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    if (aysnwkSZE) {
      const res = await aysnwkSZE(...args,);
      if (res === false) {
        return false;
      }
    }
    setVariant('glP89HQPH',);
  },);
  const ref1 = React6.useRef(null,);
  const isDisplayed = () => {
    if (['tVxl2ewSx', 'z1ffbxAcs', 'pmi554o5Z',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed1 = () => {
    if (baseVariant === 'pmi554o5Z') {
      return false;
    }
    return true;
  };
  const isDisplayed2 = () => {
    if (baseVariant === 'pmi554o5Z') {
      return true;
    }
    return false;
  };
  const isDisplayed3 = () => {
    if (['tVxl2ewSx', 'z1ffbxAcs',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed4 = () => {
    if (
      ['uyxhsUNZq', 'uTj0cEPb8', 'vVjMhdARB', 'K8oqZ2hdT', 'QKKRwxza_', 'FXIjKjDPL', 'tVxl2ewSx', 'z1ffbxAcs', 'iqrSONtoO', 'jFWx1BeuK',]
        .includes(baseVariant,)
    ) {
      return false;
    }
    return VOTcq87Vu;
  };
  const visible = negate2(VOTcq87Vu,);
  const isDisplayed5 = () => {
    if (['uyxhsUNZq', 'uTj0cEPb8', 'vVjMhdARB', 'K8oqZ2hdT', 'QKKRwxza_', 'FXIjKjDPL', 'iqrSONtoO', 'jFWx1BeuK',].includes(baseVariant,)) {
      return false;
    }
    return visible;
  };
  const isDisplayed6 = () => {
    if (['tVxl2ewSx', 'z1ffbxAcs',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed7 = () => {
    if (
      ['uyxhsUNZq', 'uTj0cEPb8', 'vVjMhdARB', 'K8oqZ2hdT', 'QKKRwxza_', 'FXIjKjDPL', 'tVxl2ewSx', 'z1ffbxAcs', 'iqrSONtoO', 'jFWx1BeuK',]
        .includes(baseVariant,)
    ) {
      return false;
    }
    return true;
  };
  const isDisplayed8 = () => {
    if (
      [
        'PvhAKPvc8',
        'uyxhsUNZq',
        'uTj0cEPb8',
        'vVjMhdARB',
        'K8oqZ2hdT',
        'QKKRwxza_',
        'FXIjKjDPL',
        'tVxl2ewSx',
        'z1ffbxAcs',
        'pmi554o5Z',
        'iqrSONtoO',
        'jFWx1BeuK',
      ].includes(baseVariant,)
    ) {
      return false;
    }
    return true;
  };
  const isDisplayed9 = () => {
    if (baseVariant === 'l6T5PxAnq') {
      return TTpsRmZqr;
    }
    return false;
  };
  const isDisplayed10 = () => {
    if (baseVariant === 'z1ffbxAcs') {
      return true;
    }
    return false;
  };
  const defaultLayoutId = React6.useId();
  const sharedStyleClassNames = [];
  return /* @__PURE__ */ _jsx6(LayoutGroup4, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx6(Transition4, {
      value: transition,
      children: /* @__PURE__ */ _jsxs4(motion5.div, {
        ...restProps,
        animate: variants,
        className: cx4(serializationHash3, ...sharedStyleClassNames, 'framer-15k1mix', className2, classNames,),
        'data-framer-name': 'Expanded',
        'data-highlight': true,
        initial: variant,
        layoutDependency,
        layoutId: 'glP89HQPH',
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onTap: onTap17xnc97,
        onTapCancel: () => setGestureState({ isPressed: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        ref: ref !== null && ref !== void 0 ? ref : ref1,
        style: { ...style, },
        ...addPropertyOverrides4(
          {
            Cr7AsQCPR: { 'data-framer-name': 'Compact', },
            FXIjKjDPL: { 'data-framer-name': 'Line', },
            iqrSONtoO: { 'data-framer-name': 'Variant 14', },
            jFWx1BeuK: { 'data-framer-name': 'ticker', },
            K8oqZ2hdT: { 'data-framer-name': 'Node-SM', },
            l6T5PxAnq: { 'data-framer-name': 'Variant 8', },
            pmi554o5Z: { 'data-framer-name': 'Clockface', },
            PvhAKPvc8: { 'data-framer-name': 'Hover', onTap: onTap1nt00da, },
            QKKRwxza_: { 'data-framer-name': 'Node-XS', },
            tVxl2ewSx: { 'data-framer-name': 'Variant 10', },
            uTj0cEPb8: { 'data-framer-name': 'Node-LG', },
            uyxhsUNZq: { 'data-framer-name': 'Node-XL', },
            vVjMhdARB: { 'data-framer-name': 'Node-MD', },
            z1ffbxAcs: { 'data-framer-name': 'Variant 13', },
          },
          baseVariant,
          gestureVariant,
        ),
        children: [
          /* @__PURE__ */ _jsxs4(motion5.div, {
            className: 'framer-u952ip',
            'data-framer-name': 'Property 1=Variant3',
            layoutDependency,
            layoutId: 'R7_JcPYV4',
            style: {
              '--border-bottom-width': '0px',
              '--border-color': 'rgba(0, 0, 0, 0)',
              '--border-left-width': '0px',
              '--border-right-width': '0px',
              '--border-style': 'solid',
              '--border-top-width': '0px',
              backdropFilter: 'blur(14px)',
              backgroundColor: 'rgba(232, 232, 232, 0.2)',
              borderBottomLeftRadius: 19,
              borderBottomRightRadius: 19,
              borderTopLeftRadius: 19,
              borderTopRightRadius: 19,
              boxShadow: 'none',
              WebkitBackdropFilter: 'blur(14px)',
            },
            variants: {
              Cr7AsQCPR: { backdropFilter: 'blur(7px)', backgroundColor: 'rgba(232, 232, 232, 0.8)', WebkitBackdropFilter: 'blur(7px)', },
              FXIjKjDPL: { borderBottomLeftRadius: 37, borderBottomRightRadius: 37, borderTopLeftRadius: 37, borderTopRightRadius: 37, },
              iqrSONtoO: {
                backdropFilter: 'none',
                background:
                  'linear-gradient(154deg, var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */ -6.837499999999845%, var(--token-99545d54-94e2-40c6-a83a-7a0b21f2cb8c, rgb(210, 216, 232)) /* {"name":"Lavendar"} */ 100%)',
                borderBottomLeftRadius: 37,
                borderBottomRightRadius: 37,
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
                WebkitBackdropFilter: 'none',
              },
              jFWx1BeuK: { borderBottomLeftRadius: 3, borderBottomRightRadius: 3, borderTopLeftRadius: 3, borderTopRightRadius: 3, },
              K8oqZ2hdT: {
                backdropFilter: 'blur(5px)',
                borderBottomLeftRadius: 37,
                borderBottomRightRadius: 37,
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
                WebkitBackdropFilter: 'blur(5px)',
              },
              pmi554o5Z: {
                '--border-bottom-width': '1px',
                '--border-color': 'rgba(232, 232, 235, 0.74)',
                '--border-left-width': '1px',
                '--border-right-width': '1px',
                '--border-style': 'solid',
                '--border-top-width': '1px',
                backdropFilter: 'none',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottomLeftRadius: 140,
                borderBottomRightRadius: 140,
                borderTopLeftRadius: 140,
                borderTopRightRadius: 140,
                boxShadow: '0px 1px 9px 0px rgba(0,0,0,0.25), 0px 51px 32px -13px rgba(0, 0, 0, 0.11)',
                WebkitBackdropFilter: 'none',
              },
              PvhAKPvc8: { backgroundColor: 'rgba(232, 232, 232, 0.11)', },
              QKKRwxza_: { borderBottomLeftRadius: 37, borderBottomRightRadius: 37, borderTopLeftRadius: 37, borderTopRightRadius: 37, },
              tVxl2ewSx: {
                '--border-bottom-width': '1px',
                '--border-color': 'rgba(232, 232, 235, 0.74)',
                '--border-left-width': '1px',
                '--border-right-width': '1px',
                '--border-style': 'solid',
                '--border-top-width': '1px',
                backgroundColor: 'rgba(232, 232, 235, 0.59)',
                borderBottomLeftRadius: 32,
                borderBottomRightRadius: 32,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
                boxShadow: '0px 0px 26px 3px rgba(0,0,0,0.25)',
              },
              uTj0cEPb8: {
                backdropFilter: 'blur(7px)',
                borderBottomLeftRadius: 37,
                borderBottomRightRadius: 37,
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
                WebkitBackdropFilter: 'blur(7px)',
              },
              uyxhsUNZq: {
                backdropFilter: 'none',
                borderBottomLeftRadius: 37,
                borderBottomRightRadius: 37,
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
                WebkitBackdropFilter: 'none',
              },
              vVjMhdARB: {
                backdropFilter: 'blur(5px)',
                borderBottomLeftRadius: 37,
                borderBottomRightRadius: 37,
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
                WebkitBackdropFilter: 'blur(5px)',
              },
              z1ffbxAcs: {
                '--border-bottom-width': '1px',
                '--border-color': 'rgba(232, 232, 235, 0.74)',
                '--border-left-width': '1px',
                '--border-right-width': '1px',
                '--border-style': 'solid',
                '--border-top-width': '1px',
                backgroundColor: 'rgba(232, 232, 235, 0.51)',
                borderBottomLeftRadius: 32,
                borderBottomRightRadius: 32,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
              },
            },
            ...addPropertyOverrides4(
              { pmi554o5Z: { 'data-border': true, }, tVxl2ewSx: { 'data-border': true, }, z1ffbxAcs: { 'data-border': true, }, },
              baseVariant,
              gestureVariant,
            ),
            children: [
              isDisplayed() && /* @__PURE__ */ _jsxs4(motion5.div, {
                className: 'framer-16jcubo',
                'data-framer-name': 'Clock face - 12 hour',
                layoutDependency,
                layoutId: 'WYvDh9tTX',
                style: {
                  backgroundColor: 'rgb(226, 226, 229)',
                  borderBottomLeftRadius: 500,
                  borderBottomRightRadius: 500,
                  borderTopLeftRadius: 500,
                  borderTopRightRadius: 500,
                },
                children: [
                  /* @__PURE__ */ _jsx6(SVG4, {
                    className: 'framer-pgz1il',
                    'data-framer-name': 'Vector 1',
                    fill: 'rgba(0,0,0,1)',
                    intrinsicHeight: 4,
                    intrinsicWidth: 260,
                    layoutDependency,
                    layoutId: 'gW_5SwpSl',
                    svg:
                      '<svg width="260" height="4" viewBox="-1 -1 260 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1 1L257 1.00002" stroke="#BEC8CA" stroke-linecap="round" stroke-dasharray="2 5"/>\n</svg>\n',
                    withExternalLayout: true,
                  },),
                  /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-t88y97',
                    'data-border': true,
                    'data-framer-name': 'Center Ellipse',
                    layoutDependency,
                    layoutId: 'xRnljz54b',
                    style: {
                      '--border-bottom-width': '1px',
                      '--border-color': 'rgb(0, 105, 115)',
                      '--border-left-width': '1px',
                      '--border-right-width': '1px',
                      '--border-style': 'solid',
                      '--border-top-width': '1px',
                      backgroundColor: 'rgb(0, 105, 115)',
                      borderBottomLeftRadius: '100%',
                      borderBottomRightRadius: '100%',
                      borderTopLeftRadius: '100%',
                      borderTopRightRadius: '100%',
                      rotate: -90,
                    },
                  },),
                  /* @__PURE__ */ _jsx6(SVG4, {
                    className: 'framer-1bz5g0t',
                    'data-framer-name': 'Building Blocks/hour-line',
                    layout: 'position',
                    layoutDependency,
                    layoutId: 'RXuxIjRpw',
                    opacity: 0.22,
                    style: { opacity: 0.22, },
                    svg:
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 15.277 99.908 C 15.276 35.086 46.379 6.725 46.379 6.725" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                    svgContentId: 2843491711,
                    withExternalLayout: true,
                  },),
                  /* @__PURE__ */ _jsx6(SVG4, {
                    className: 'framer-s80oao',
                    'data-framer-name': 'Building Blocks/hour-line',
                    layout: 'position',
                    layoutDependency,
                    layoutId: 'VlwfQd9my',
                    opacity: 1,
                    style: { opacity: 1, },
                    svg:
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 46.379 99.908 C 46.38 35.086 15.277 6.725 15.277 6.725" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                    svgContentId: 1730963088,
                    variants: { tVxl2ewSx: { opacity: 0.22, }, },
                    withExternalLayout: true,
                    ...addPropertyOverrides4(
                      {
                        pmi554o5Z: {
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 46.379 99.908 C 46.38 35.086 15.277 6.725 15.277 6.725" fill="transparent" stroke-width="2" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                          svgContentId: 4285060552,
                        },
                        tVxl2ewSx: { opacity: 0.22, svgContentId: 2946061060, },
                        z1ffbxAcs: {
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 46.379 99.908 C 46.38 35.086 15.277 6.725 15.277 6.725" fill="transparent" stroke-width="2" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                          svgContentId: 4285060552,
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                  /* @__PURE__ */ _jsx6(SVG4, {
                    className: 'framer-grahyw',
                    'data-framer-name': 'Building Blocks/hour-line',
                    layout: 'position',
                    layoutDependency,
                    layoutId: 'P17m7StQW',
                    opacity: 0.22,
                    style: { opacity: 0.22, },
                    svg:
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 46.379 6.816 C 46.381 71.511 -3.621 99.816 -3.621 99.816" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                    svgContentId: 1399265944,
                    withExternalLayout: true,
                  },),
                  /* @__PURE__ */ _jsx6(SVG4, {
                    className: 'framer-ters9i',
                    'data-framer-name': 'Building Blocks/hour-line',
                    layout: 'position',
                    layoutDependency,
                    layoutId: 'NNKcByfsb',
                    opacity: 0.22,
                    style: { opacity: 0.22, },
                    svg:
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 0.621 6.816 C 0.619 71.511 50.621 99.816 50.621 99.816" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                    svgContentId: 1631026620,
                    withExternalLayout: true,
                  },),
                  /* @__PURE__ */ _jsx6(SVG4, {
                    className: 'framer-ygxorp',
                    'data-framer-name': 'Building Blocks/hour-line',
                    layout: 'position',
                    layoutDependency,
                    layoutId: 'oH75iPoJ1',
                    opacity: 0.22,
                    style: { opacity: 0.22, },
                    svg:
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 100"><path d="M 9.5 7.5 C 9.497 72.194 9.002 100 9.002 100" fill="transparent" stroke="rgb(0,105,115)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                    svgContentId: 3276682908,
                    withExternalLayout: true,
                  },),
                  isDisplayed1() && /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-gaigs9',
                    'data-framer-name': 'Hour 14',
                    layoutDependency,
                    layoutId: 'nMpM9YaWP',
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-19e96pz',
                      'data-framer-name': 'Leading element',
                      layoutDependency,
                      layoutId: 'flGQU_VyT',
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-67o6ax',
                        'data-framer-name': 'Building Blocks/Monogram',
                        layoutDependency,
                        layoutId: 'zP73eCjun',
                        style: {
                          backgroundColor: 'rgb(69, 164, 176)',
                          borderBottomLeftRadius: 26,
                          borderBottomRightRadius: 26,
                          borderTopLeftRadius: 26,
                          borderTopRightRadius: 26,
                        },
                        children: /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                '--framer-letter-spacing': '-0.5px',
                                '--framer-line-height': '22px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                              },
                              children: 'A-2',
                            },),
                          },),
                          className: 'framer-1er1yu3',
                          'data-framer-name': 'Initial',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'IVgQH8zb7',
                          style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                        },),
                      },),
                    },),
                  },),
                  isDisplayed2() && /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-zsae62',
                    layoutDependency,
                    layoutId: 'bDyldThfV',
                    transformTemplate: transformTemplate1,
                    ...addPropertyOverrides4({ pmi554o5Z: { transformTemplate: void 0, }, }, baseVariant, gestureVariant,),
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-mkcxyc-container',
                      layoutDependency,
                      layoutId: 'WZHozuJOS-container',
                      children: /* @__PURE__ */ _jsx6(stdin_default5, {
                        AoRZX1H1N: VOTcq87Vu,
                        height: '100%',
                        id: 'WZHozuJOS',
                        layoutId: 'WZHozuJOS',
                        lxdU5EATK: 'fSJwriuSS',
                        NJqu6koZC: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                        QCOPRCUSC: 'A-2',
                        variant: 'cbq3T4JIp',
                        W1dUHMesf: 'Define Primary Goal',
                        width: '100%',
                        ...addPropertyOverrides4(
                          { pmi554o5Z: { NJqu6koZC: fxy_09app, variant: Gb15ibvMU, }, },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-16lays1',
                    'data-framer-name': 'Hour 13',
                    layoutDependency,
                    layoutId: 'GIdxe8ttk',
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-1r78rj3',
                      'data-border': true,
                      'data-framer-name': 'Leading element',
                      layoutDependency,
                      layoutId: 'dHgEeuKPX',
                      style: {
                        '--border-bottom-width': '3px',
                        '--border-color': 'rgb(171, 171, 171)',
                        '--border-left-width': '3px',
                        '--border-right-width': '3px',
                        '--border-style': 'solid',
                        '--border-top-width': '3px',
                        borderBottomLeftRadius: 33,
                        borderBottomRightRadius: 33,
                        borderTopLeftRadius: 33,
                        borderTopRightRadius: 33,
                      },
                      variants: {
                        tVxl2ewSx: {
                          '--border-bottom-width': '0px',
                          '--border-left-width': '0px',
                          '--border-right-width': '0px',
                          '--border-top-width': '0px',
                        },
                      },
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-1slmo9y',
                        'data-border': true,
                        'data-framer-name': 'Building Blocks/Monogram',
                        layoutDependency,
                        layoutId: 'ut9_JjQux',
                        style: {
                          '--border-bottom-width': '3px',
                          '--border-color': 'rgb(190, 200, 202)',
                          '--border-left-width': '3px',
                          '--border-right-width': '3px',
                          '--border-style': 'solid',
                          '--border-top-width': '3px',
                          backgroundColor: 'rgb(144, 241, 255)',
                          borderBottomLeftRadius: 26,
                          borderBottomRightRadius: 26,
                          borderTopLeftRadius: 26,
                          borderTopRightRadius: 26,
                        },
                        variants: {
                          tVxl2ewSx: {
                            '--border-bottom-width': '0px',
                            '--border-left-width': '0px',
                            '--border-right-width': '0px',
                            '--border-top-width': '0px',
                          },
                        },
                        children: /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                '--framer-letter-spacing': '-0.5px',
                                '--framer-line-height': '23px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(0, 31, 35))',
                              },
                              children: 'A-2',
                            },),
                          },),
                          className: 'framer-1iiryhe',
                          'data-framer-name': 'Initial',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'kSj4a5el_',
                          style: { '--extracted-r6o4lv': 'rgb(0, 31, 35)', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                          ...addPropertyOverrides4(
                            {
                              pmi554o5Z: {
                                children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion5.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                      '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                      '--framer-letter-spacing': '-0.5px',
                                      '--framer-line-height': '23px',
                                      '--framer-text-alignment': 'center',
                                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(0, 31, 35))',
                                    },
                                    children: 'A-1',
                                  },),
                                },),
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-hm8hzz',
                    'data-framer-name': 'Hour 7',
                    layoutDependency,
                    layoutId: 'RKbNbyXNN',
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-bxm0gv',
                      'data-framer-name': 'Leading element',
                      layoutDependency,
                      layoutId: 'VTI0VzvGT',
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-13irvgu',
                        'data-framer-name': 'Building Blocks/Monogram',
                        layoutDependency,
                        layoutId: 'VSbG8o7c3',
                        style: {
                          backgroundColor: 'rgb(150, 55, 78)',
                          borderBottomLeftRadius: 26,
                          borderBottomRightRadius: 26,
                          borderTopLeftRadius: 26,
                          borderTopRightRadius: 26,
                        },
                        children: /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                '--framer-letter-spacing': '-0.5px',
                                '--framer-line-height': '22px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 219, 202))',
                              },
                              children: 'A-2',
                            },),
                          },),
                          className: 'framer-1v0hux5',
                          'data-framer-name': 'Initial',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'asz0BD9Ng',
                          style: { '--extracted-r6o4lv': 'rgb(255, 219, 202)', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                          ...addPropertyOverrides4(
                            {
                              pmi554o5Z: {
                                children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion5.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                      '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                      '--framer-letter-spacing': '-0.5px',
                                      '--framer-line-height': '22px',
                                      '--framer-text-alignment': 'center',
                                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 219, 202))',
                                    },
                                    children: 'B-1',
                                  },),
                                },),
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-b81srs',
                    'data-framer-name': 'Hour 15',
                    layoutDependency,
                    layoutId: 'UD0ADclsv',
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-1seihbr',
                      'data-framer-name': 'Leading element',
                      layoutDependency,
                      layoutId: 'U8E456R_5',
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-b95frv',
                        'data-framer-name': 'Building Blocks/Monogram',
                        layoutDependency,
                        layoutId: 'zAv3WT4os',
                        style: {
                          backgroundColor: 'rgb(245, 122, 41)',
                          borderBottomLeftRadius: 26,
                          borderBottomRightRadius: 26,
                          borderTopLeftRadius: 26,
                          borderTopRightRadius: 26,
                        },
                        children: /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                '--framer-letter-spacing': '-0.5px',
                                '--framer-line-height': '22px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(248, 242, 239))',
                              },
                              children: 'A-2',
                            },),
                          },),
                          className: 'framer-1gnv6f9',
                          'data-framer-name': 'Initial',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'alE6E0r_7',
                          style: { '--extracted-r6o4lv': 'rgb(248, 242, 239)', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                          ...addPropertyOverrides4(
                            {
                              pmi554o5Z: {
                                children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion5.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                      '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                      '--framer-letter-spacing': '-0.5px',
                                      '--framer-line-height': '22px',
                                      '--framer-text-alignment': 'center',
                                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(248, 242, 239))',
                                    },
                                    children: 'B-2',
                                  },),
                                },),
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-eie4hr',
                    'data-framer-name': 'Hour 16',
                    layoutDependency,
                    layoutId: 'RwCIEaxUx',
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-1x7jv21',
                      'data-framer-name': 'Leading element',
                      layoutDependency,
                      layoutId: 'RovaPqUr5',
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-1iqm9oi',
                        'data-framer-name': 'Building Blocks/Monogram',
                        layoutDependency,
                        layoutId: 'SvZwSxqLy',
                        style: {
                          backgroundColor: 'rgb(205, 93, 204)',
                          borderBottomLeftRadius: 26,
                          borderBottomRightRadius: 26,
                          borderTopLeftRadius: 26,
                          borderTopRightRadius: 26,
                        },
                        children: /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                '--framer-letter-spacing': '-0.5px',
                                '--framer-line-height': '22px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 232, 254))',
                              },
                              children: 'A-2',
                            },),
                          },),
                          className: 'framer-10xeruc',
                          'data-framer-name': 'Initial',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'b0L1mHhSz',
                          style: { '--extracted-r6o4lv': 'rgb(255, 232, 254)', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                          ...addPropertyOverrides4(
                            {
                              pmi554o5Z: {
                                children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion5.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                      '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                      '--framer-letter-spacing': '-0.5px',
                                      '--framer-line-height': '22px',
                                      '--framer-text-alignment': 'center',
                                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 232, 254))',
                                    },
                                    children: 'B-5',
                                  },),
                                },),
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx6(RichText3, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                      children: /* @__PURE__ */ _jsx6(motion5.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                          '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                          '--framer-font-size': '10px',
                          '--framer-letter-spacing': '0.5px',
                          '--framer-line-height': '16px',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                        },
                        children: 'ROOTS',
                      },),
                    },),
                    className: 'framer-pk4yjk',
                    'data-framer-name': 'Title',
                    fonts: ['CUSTOM;PP Supply Sans Medium',],
                    layoutDependency,
                    layoutId: 'STZvevj6M',
                    style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', },
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                  /* @__PURE__ */ _jsx6(RichText3, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                      children: /* @__PURE__ */ _jsx6(motion5.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                          '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                          '--framer-font-size': '10px',
                          '--framer-letter-spacing': '0.5px',
                          '--framer-line-height': '16px',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                        },
                        children: 'BRANCHES',
                      },),
                    },),
                    className: 'framer-1saw3ai',
                    'data-framer-name': 'Title',
                    fonts: ['CUSTOM;PP Supply Sans Medium',],
                    layoutDependency,
                    layoutId: 'SplMHIcz7',
                    style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', },
                    transformTemplate: transformTemplate2,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                ],
              },),
              isDisplayed1() && /* @__PURE__ */ _jsxs4(motion5.div, {
                className: 'framer-6vo91e',
                'data-framer-name': 'Frame 18',
                layoutDependency,
                layoutId: 'gPdwXBLtX',
                children: [
                  isDisplayed3() && /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-1bz3drm',
                    'data-framer-name': 'Header',
                    layoutDependency,
                    layoutId: 'RV_qbEcij',
                    children: /* @__PURE__ */ _jsx6(RichText3, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                        children: /* @__PURE__ */ _jsx6(motion5.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFNlbWlib2xk',
                            '--framer-font-family': '"PP Supply Sans Semibold", sans-serif',
                            '--framer-font-size': '12px',
                            '--framer-letter-spacing': '0.5px',
                            '--framer-line-height': '16px',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                          },
                          children: 'COMPONENT IDEA',
                        },),
                      },),
                      className: 'framer-rxhn3z',
                      'data-framer-name': 'Title',
                      fonts: ['CUSTOM;PP Supply Sans Semibold',],
                      layoutDependency,
                      layoutId: 'Jug1OtyCX',
                      style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                  },),
                  isDisplayed3() && /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-z3jaf1',
                    'data-framer-name': 'headline',
                    layoutDependency,
                    layoutId: 'X6QKXCzwN',
                    children: /* @__PURE__ */ _jsx6(RichText3, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                        children: /* @__PURE__ */ _jsx6(motion5.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                            '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                            '--framer-font-size': '14px',
                            '--framer-letter-spacing': '0.25px',
                            '--framer-line-height': '20px',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                          },
                          children: 'Describing the medium and method of the tool.',
                        },),
                      },),
                      className: 'framer-1dzdi2f',
                      'data-framer-name': 'subhead',
                      fonts: ['CUSTOM;PP Supply Sans Light',],
                      layoutDependency,
                      layoutId: 'JMZOOi5ss',
                      style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                      ...addPropertyOverrides4(
                        {
                          tVxl2ewSx: {
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                  '--framer-letter-spacing': '0.25px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                                },
                                children: 'Describing the medium and method of the tool.',
                              },),
                            },),
                          },
                          z1ffbxAcs: {
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                  '--framer-letter-spacing': '0.25px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                                },
                                children: 'Describing the medium and method of the tool.',
                              },),
                            },),
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-1t15ltz',
                    'data-framer-name': 'Frame 3',
                    layoutDependency,
                    layoutId: 'XgLQHhi6z',
                    children: /* @__PURE__ */ _jsxs4(motion5.div, {
                      className: 'framer-relj6k',
                      'data-framer-name': 'Frame 20',
                      layoutDependency,
                      layoutId: 'zmCmB8SKh',
                      children: [
                        isDisplayed4() && /* @__PURE__ */ _jsx6(motion5.div, {
                          className: 'framer-g6jc3c-container',
                          layoutDependency,
                          layoutId: 'v7q4Kvml4-container',
                          children: /* @__PURE__ */ _jsx6(TypeWriter, {
                            autoStart: true,
                            caretVisibility: false,
                            color: 'rgb(255, 255, 255)',
                            cursor: '\u25CF',
                            cursorColor: 'rgba(136, 136, 136, 0.5)',
                            delayNumber: 0.06,
                            delayType: false,
                            font: {
                              fontFamily: 'PP Supply Sans Light',
                              fontSize: 12,
                              fontWeight: 500,
                              letterSpacing: 0.4,
                              lineHeight: 1.2,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'left',
                              whiteSpace: 'nowrap',
                            },
                            height: '100%',
                            id: 'v7q4Kvml4',
                            layoutId: 'v7q4Kvml4',
                            loop: false,
                            pauseFor: 1,
                            split: false,
                            style: { width: '100%', },
                            tag: 'heading1',
                            text: vZATQhujj,
                            width: '100%',
                            ...addPropertyOverrides4(
                              {
                                l6T5PxAnq: {
                                  font: {
                                    fontFamily: 'PP Supply Sans Light',
                                    fontSize: 20,
                                    fontWeight: 500,
                                    letterSpacing: 0.4,
                                    lineHeight: 1.2,
                                    lineHeightPixels: 100,
                                    lineHeightType: true,
                                    offset: 0,
                                    textAlign: 'left',
                                    whiteSpace: 'nowrap',
                                  },
                                },
                                PvhAKPvc8: {
                                  font: {
                                    fontFamily: 'PP Supply Sans Light',
                                    fontSize: 20,
                                    fontWeight: 500,
                                    letterSpacing: 0.4,
                                    lineHeight: 1.2,
                                    lineHeightPixels: 100,
                                    lineHeightType: true,
                                    offset: 0,
                                    textAlign: 'left',
                                    whiteSpace: 'nowrap',
                                  },
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                          },),
                        },),
                        isDisplayed5() && /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                '--framer-font-size': '20px',
                                '--framer-letter-spacing': '0.04em',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                              },
                              children: 'Board Dimensions',
                            },),
                          },),
                          className: 'framer-s3klti',
                          'data-framer-name': 'Board Dimensions',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'VpZUXHRQ1',
                          style: { '--extracted-r6o4lv': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))', },
                          text: vZATQhujj,
                          variants: { PvhAKPvc8: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', }, },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                          ...addPropertyOverrides4(
                            {
                              Cr7AsQCPR: {
                                children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion5.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                      '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                      '--framer-font-size': '12px',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                                    },
                                    children: 'Board Dimensions',
                                  },),
                                },),
                              },
                              PvhAKPvc8: {
                                children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion5.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                      '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                      '--framer-font-size': '20px',
                                      '--framer-letter-spacing': '0.04em',
                                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                                    },
                                    children: 'Board Dimensions',
                                  },),
                                },),
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                        /* @__PURE__ */ _jsx6(motion5.div, {
                          className: 'framer-knxsbs',
                          'data-framer-name': 'Dot',
                          layoutDependency,
                          layoutId: 'y57fJ5mgy',
                          style: {
                            backdropFilter: 'none',
                            backgroundColor: cRMlaJb1_,
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            boxShadow:
                              'inset -0.12072530715522589px -0.12072530715522589px 0px 0px rgba(0, 0, 0, 0.02415), inset -1px -1px 0px 0px rgba(0, 0, 0, 0.2)',
                            WebkitBackdropFilter: 'none',
                          },
                          variants: {
                            FXIjKjDPL: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                            },
                            iqrSONtoO: {
                              backdropFilter: 'blur(36px)',
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                              boxShadow:
                                'inset 0px -0.5px 1px 0px rgba(0, 0, 0, 0.05), 0.1px 1px 3px 0px rgba(16, 25, 66, 0.14), inset 0.1px 0.25px 4px 0px rgba(0, 0, 0, 0.08), inset -0.1px -0.2px 2px 0px rgb(255, 255, 255)',
                              WebkitBackdropFilter: 'blur(36px)',
                            },
                            jFWx1BeuK: {
                              borderBottomLeftRadius: 2,
                              borderBottomRightRadius: 2,
                              borderTopLeftRadius: 2,
                              borderTopRightRadius: 2,
                            },
                            K8oqZ2hdT: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                            },
                            QKKRwxza_: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                            },
                            tVxl2ewSx: {
                              backgroundColor: 'rgb(226, 226, 229)',
                              borderBottomLeftRadius: 11,
                              borderBottomRightRadius: 11,
                              borderTopLeftRadius: 11,
                              borderTopRightRadius: 11,
                              boxShadow:
                                'inset 0.12072530715522589px 0.12072530715522589px 0px 0px hsla(0, 0%, 100%, 0.02415), inset 1px 1px 0px 0px hsla(0, 0%, 100%, 0.2)',
                            },
                            uTj0cEPb8: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                            },
                            uyxhsUNZq: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                              boxShadow:
                                'inset -0.12072530715522589px -0.12072530715522589px 0px 0px rgba(0, 0, 0, 0.02415), inset -1px -1px 0px 0px rgba(0, 0, 0, 0.2), inset 3px -13px 0px -5px rgba(0, 0, 0, 0.1), inset 0.6123797319404547px 0.5417205321011715px 0px -0.8333333333333333px rgba(255, 255, 255, 0.09764), inset 1.5656869846134214px 1.3850307940811035px 0px -1.6666666666666665px rgba(255, 255, 255, 0.09398), inset 3.138857986035873px 2.7766820645701955px 0px -2.5px rgba(255, 255, 255, 0.08793), inset 5.950186588432988px 5.263626597459951px 0px -3.333333333333333px rgba(255, 255, 255, 0.07711), inset 11.827193223321228px 10.462517082168779px 0px -4.166666666666667px rgba(255, 255, 255, 0.05451), inset 26px 23px 0px -5px rgba(255, 255, 255, 0)',
                            },
                            vVjMhdARB: {
                              borderBottomLeftRadius: 18,
                              borderBottomRightRadius: 18,
                              borderTopLeftRadius: 18,
                              borderTopRightRadius: 18,
                            },
                            z1ffbxAcs: {
                              backgroundColor: 'rgb(226, 226, 229)',
                              borderBottomLeftRadius: 11,
                              borderBottomRightRadius: 11,
                              borderTopLeftRadius: 11,
                              borderTopRightRadius: 11,
                              boxShadow:
                                'inset 0.12072530715522589px 0.12072530715522589px 0px 0px hsla(0, 0%, 100%, 0.02415), inset 1px 1px 0px 0px hsla(0, 0%, 100%, 0.2)',
                            },
                          },
                          children: /* @__PURE__ */ _jsxs4(motion5.div, {
                            className: 'framer-rojnhy',
                            'data-framer-name': 'state-layer',
                            layoutDependency,
                            layoutId: 'I303:2962;53923:27987',
                            style: { backgroundColor: 'rgba(0, 0, 0, 0)', },
                            variants: {
                              tVxl2ewSx: { backgroundColor: 'rgba(144, 241, 255, 0.24)', },
                              z1ffbxAcs: { backgroundColor: 'rgba(144, 241, 255, 0.24)', },
                            },
                            children: [
                              isDisplayed3() && /* @__PURE__ */ _jsxs4(motion5.div, {
                                className: 'framer-tthg7e',
                                'data-framer-name': 'Frame 2608514',
                                layoutDependency,
                                layoutId: 'n_ZUrzmLg',
                                style: {
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                                children: [
                                  /* @__PURE__ */ _jsx6(motion5.div, {
                                    className: 'framer-1hadtwd',
                                    layoutDependency,
                                    layoutId: 'uyjvBXZGD',
                                    children: /* @__PURE__ */ _jsx6(RichText3, {
                                      __fromCanvasComponent: true,
                                      children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                        children: /* @__PURE__ */ _jsx6(motion5.p, {
                                          style: {
                                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                            '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                            '--framer-font-size': '14px',
                                            '--framer-letter-spacing': '0.25px',
                                            '--framer-line-height': '26px',
                                            '--framer-text-color':
                                              'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                                          },
                                          children:
                                            'a software tool employing various interactive exercises and adaptive methodologies will be developed, prioritizing user engagement, personalization, and efficacy in cognitive enhancement',
                                        },),
                                      },),
                                      className: 'framer-6porn2',
                                      'data-framer-name': 'supporting-text',
                                      fonts: ['CUSTOM;PP Supply Sans Light',],
                                      layoutDependency,
                                      layoutId: 'oSRMBRi6_',
                                      style: {
                                        '--extracted-r6o4lv': 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))',
                                      },
                                      verticalAlignment: 'top',
                                      withExternalLayout: true,
                                      ...addPropertyOverrides4(
                                        {
                                          tVxl2ewSx: {
                                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                                style: {
                                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                                  '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                                  '--framer-font-size': '14px',
                                                  '--framer-letter-spacing': '0.25px',
                                                  '--framer-line-height': '24px',
                                                  '--framer-text-color':
                                                    'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                                                },
                                                children:
                                                  'a software tool employing various interactive exercises and adaptive methodologies will be developed, prioritizing user engagement, personalization, and efficacy in cognitive enhancement',
                                              },),
                                            },),
                                          },
                                          z1ffbxAcs: {
                                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                                style: {
                                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                                  '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                                  '--framer-font-size': '14px',
                                                  '--framer-letter-spacing': '0.25px',
                                                  '--framer-line-height': '24px',
                                                  '--framer-text-color':
                                                    'var(--extracted-r6o4lv, var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)))',
                                                },
                                                children:
                                                  'a software tool employing various interactive exercises and adaptive methodologies will be developed, prioritizing user engagement, personalization, and efficacy in cognitive enhancement',
                                              },),
                                            },),
                                          },
                                        },
                                        baseVariant,
                                        gestureVariant,
                                      ),
                                    },),
                                  },),
                                  /* @__PURE__ */ _jsxs4(motion5.div, {
                                    className: 'framer-p6sy63',
                                    layoutDependency,
                                    layoutId: 'XopzhIgQU',
                                    children: [
                                      isDisplayed6() && /* @__PURE__ */
                                      _jsx6(motion5.div, {
                                        className: 'framer-1sckg0c',
                                        'data-framer-name': 'Rectangle 8',
                                        layoutDependency,
                                        layoutId: 'iRzYxu2iB',
                                        style: {
                                          backgroundColor: 'rgb(237, 110, 235)',
                                          borderBottomLeftRadius: 6,
                                          borderBottomRightRadius: 6,
                                          borderTopLeftRadius: 6,
                                          borderTopRightRadius: 6,
                                        },
                                      },),
                                      isDisplayed6() && /* @__PURE__ */
                                      _jsx6(motion5.div, {
                                        className: 'framer-4q5s49',
                                        'data-framer-name': 'Rectangle 8',
                                        layoutDependency,
                                        layoutId: 'n9fKOegD2',
                                        style: {
                                          backgroundColor: 'rgb(168, 243, 255)',
                                          borderBottomLeftRadius: 6,
                                          borderBottomRightRadius: 6,
                                          borderTopLeftRadius: 6,
                                          borderTopRightRadius: 6,
                                        },
                                      },),
                                      isDisplayed6() && /* @__PURE__ */
                                      _jsx6(motion5.div, {
                                        className: 'framer-btq4z',
                                        'data-framer-name': 'Rectangle 8',
                                        layoutDependency,
                                        layoutId: 'm7kyec2O7',
                                        style: {
                                          backgroundColor: 'rgb(69, 164, 176)',
                                          borderBottomLeftRadius: 6,
                                          borderBottomRightRadius: 6,
                                          borderTopLeftRadius: 6,
                                          borderTopRightRadius: 6,
                                        },
                                      },),
                                      isDisplayed6() && /* @__PURE__ */
                                      _jsx6(motion5.div, {
                                        className: 'framer-hccerc',
                                        'data-framer-name': 'Rectangle 8',
                                        layoutDependency,
                                        layoutId: 'Un6XGp9Hx',
                                        style: {
                                          backgroundColor: 'rgb(248, 99, 136)',
                                          borderBottomLeftRadius: 6,
                                          borderBottomRightRadius: 6,
                                          borderTopLeftRadius: 6,
                                          borderTopRightRadius: 6,
                                        },
                                      },),
                                      isDisplayed6() && /* @__PURE__ */
                                      _jsx6(motion5.div, {
                                        className: 'framer-1rdnm2h',
                                        'data-framer-name': 'Rectangle 8',
                                        layoutDependency,
                                        layoutId: 'bIlIHQ7WO',
                                        style: {
                                          backgroundColor: 'rgb(255, 148, 77)',
                                          borderBottomLeftRadius: 6,
                                          borderBottomRightRadius: 6,
                                          borderTopLeftRadius: 6,
                                          borderTopRightRadius: 6,
                                        },
                                      },),
                                      isDisplayed6() && /* @__PURE__ */
                                      _jsx6(motion5.div, {
                                        className: 'framer-1msl2tx',
                                        'data-framer-name': 'Rectangle 8',
                                        layoutDependency,
                                        layoutId: 'sMikB4eW_',
                                        style: {
                                          backgroundColor: 'rgb(240, 112, 238)',
                                          borderBottomLeftRadius: 6,
                                          borderBottomRightRadius: 6,
                                          borderTopLeftRadius: 6,
                                          borderTopRightRadius: 6,
                                        },
                                      },),
                                      isDisplayed6() && /* @__PURE__ */
                                      _jsx6(motion5.div, {
                                        className: 'framer-via5el',
                                        'data-framer-name': 'Rectangle 8',
                                        layoutDependency,
                                        layoutId: 'y0zKgSH6F',
                                        style: {
                                          backgroundColor: 'rgb(168, 230, 240)',
                                          borderBottomLeftRadius: 6,
                                          borderBottomRightRadius: 6,
                                          borderTopLeftRadius: 6,
                                          borderTopRightRadius: 6,
                                        },
                                      },),
                                    ],
                                  },),
                                ],
                              },),
                              isDisplayed7() && /* @__PURE__ */ _jsx6(RichText3, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion5.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                      '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                      '--framer-font-size': '14px',
                                      '--framer-letter-spacing': '0.7px',
                                      '--framer-line-height': '20px',
                                      '--framer-text-alignment': 'center',
                                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(48, 48, 48))',
                                    },
                                    children: 'C-2',
                                  },),
                                },),
                                className: 'framer-1hg0ea8',
                                'data-framer-name': 'label-text',
                                fonts: ['CUSTOM;PP Supply Sans Light',],
                                layoutDependency,
                                layoutId: 'I303:2962;53923:27988',
                                style: { '--extracted-r6o4lv': 'rgb(48, 48, 48)', },
                                text: iDjlfHFIv,
                                variants: { PvhAKPvc8: { '--extracted-r6o4lv': 'rgb(87, 87, 87)', }, },
                                verticalAlignment: 'center',
                                withExternalLayout: true,
                                ...addPropertyOverrides4(
                                  {
                                    Cr7AsQCPR: {
                                      children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                        children: /* @__PURE__ */ _jsx6(motion5.p, {
                                          style: {
                                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                            '--framer-font-family':
                                              '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                            '--framer-font-size': '8px',
                                            '--framer-letter-spacing': '0.7px',
                                            '--framer-line-height': '20px',
                                            '--framer-text-alignment': 'center',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(48, 48, 48))',
                                          },
                                          children: 'C-2',
                                        },),
                                      },),
                                    },
                                    PvhAKPvc8: {
                                      children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                        children: /* @__PURE__ */ _jsx6(motion5.p, {
                                          style: {
                                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                            '--framer-font-family':
                                              '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                            '--framer-font-size': '14px',
                                            '--framer-letter-spacing': '0.7px',
                                            '--framer-line-height': '20px',
                                            '--framer-text-alignment': 'center',
                                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(87, 87, 87))',
                                          },
                                          children: 'C-2',
                                        },),
                                      },),
                                    },
                                  },
                                  baseVariant,
                                  gestureVariant,
                                ),
                              },),
                            ],
                          },),
                        },),
                      ],
                    },),
                  },),
                  isDisplayed5() && /* @__PURE__ */ _jsx6(RichText3, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                      children: /* @__PURE__ */ _jsx6(motion5.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                          '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                          '--framer-font-size': '12px',
                          '--framer-letter-spacing': '0.02em',
                          '--framer-line-height': '1.5em',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(16, 25, 66))',
                        },
                        children: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      },),
                    },),
                    className: 'framer-1oh0yiu',
                    'data-framer-name': 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    fonts: ['CUSTOM;PP Supply Sans Light',],
                    layoutDependency,
                    layoutId: 'qhSPm_I9X',
                    style: { '--extracted-r6o4lv': 'rgb(16, 25, 66)', },
                    text: NvMMjvlBy,
                    variants: { PvhAKPvc8: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', }, },
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                    ...addPropertyOverrides4(
                      {
                        Cr7AsQCPR: {
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                '--framer-font-size': '8px',
                                '--framer-line-height': '1.5em',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(16, 25, 66))',
                              },
                              children: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                            },),
                          },),
                        },
                        PvhAKPvc8: {
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                '--framer-font-size': '12px',
                                '--framer-letter-spacing': '0.02em',
                                '--framer-line-height': '1.5em',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                              },
                              children: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                            },),
                          },),
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                  isDisplayed4() && /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-274qgp-container',
                    layoutDependency,
                    layoutId: 'bYwxfJYzC-container',
                    children: /* @__PURE__ */ _jsx6(TypeWriter, {
                      autoStart: true,
                      caretVisibility: false,
                      color: 'rgb(255, 255, 255)',
                      cursor: '\u25CF',
                      cursorColor: 'rgba(136, 136, 136, 0.5)',
                      delayNumber: 0,
                      delayType: false,
                      font: {
                        fontFamily: 'PP Supply Sans Light',
                        fontSize: 8,
                        fontWeight: 500,
                        letterSpacing: 0.2,
                        lineHeight: 1.5,
                        lineHeightPixels: 100,
                        lineHeightType: true,
                        offset: 0,
                        textAlign: 'left',
                        whiteSpace: 'normal',
                      },
                      height: '100%',
                      id: 'bYwxfJYzC',
                      layoutId: 'bYwxfJYzC',
                      loop: false,
                      pauseFor: 1,
                      split: false,
                      style: { width: '100%', },
                      tag: 'heading1',
                      text: NvMMjvlBy,
                      width: '100%',
                      ...addPropertyOverrides4(
                        {
                          l6T5PxAnq: {
                            font: {
                              fontFamily: 'PP Supply Sans Light',
                              fontSize: 12,
                              fontWeight: 500,
                              letterSpacing: 0.2,
                              lineHeight: 1.5,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'left',
                              whiteSpace: 'normal',
                            },
                          },
                          PvhAKPvc8: {
                            font: {
                              fontFamily: 'PP Supply Sans Light',
                              fontSize: 12,
                              fontWeight: 500,
                              letterSpacing: 0.2,
                              lineHeight: 1.5,
                              lineHeightPixels: 100,
                              lineHeightType: true,
                              offset: 0,
                              textAlign: 'left',
                              whiteSpace: 'normal',
                            },
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                ],
              },),
              isDisplayed8() && /* @__PURE__ */ _jsx6(motion5.div, {
                className: 'framer-8z588a',
                'data-framer-name': 'Divider',
                layoutDependency,
                layoutId: 'ThuYqZPF1',
                children: /* @__PURE__ */ _jsx6(SVG4, {
                  className: 'framer-q310jp',
                  'data-framer-name': 'Divider',
                  fill: 'rgba(0,0,0,1)',
                  intrinsicHeight: 3,
                  intrinsicWidth: 362,
                  layoutDependency,
                  layoutId: 'I52977:33967;51816:5861',
                  svg:
                    '<svg width="362" height="3" viewBox="-1 -1 362 3" fill="none" xmlns="http://www.w3.org/2000/svg">\n<line y1="0.5" x2="360" y2="0.5" stroke="#6F797A"/>\n</svg>\n',
                  withExternalLayout: true,
                },),
              },),
              isDisplayed9() && /* @__PURE__ */ _jsxs4(motion5.div, {
                className: 'framer-s5kk1i',
                'data-framer-name': 'Frame 19',
                layoutDependency,
                layoutId: 'deAcFRQkZ',
                children: [
                  /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-1o7rnow',
                    'data-framer-name': 'Frame 4',
                    layoutDependency,
                    layoutId: 'MXvMU4ja8',
                    children: /* @__PURE__ */ _jsx6(RichText3, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                        children: /* @__PURE__ */ _jsx6(motion5.p, {
                          style: {
                            '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                            '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                            '--framer-font-size': '10px',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(16, 25, 66))',
                          },
                          children: 'Dependencies',
                        },),
                      },),
                      className: 'framer-rluzxm',
                      'data-framer-name': 'Dependencies',
                      fonts: ['CUSTOM;PP Supply Sans Medium',],
                      layoutDependency,
                      layoutId: 'ca5w6dtAm',
                      style: { '--extracted-r6o4lv': 'rgb(16, 25, 66)', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                  },),
                  /* @__PURE__ */ _jsxs4(motion5.div, {
                    className: 'framer-b3batm',
                    'data-framer-name': 'Frame 17',
                    layoutDependency,
                    layoutId: 'BjqpKAw3A',
                    children: [
                      /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-1u81hx0',
                        'data-framer-name': 'Input chip',
                        layoutDependency,
                        layoutId: 'gI4qKg22n',
                        style: {
                          backgroundColor: 'rgb(187, 238, 242)',
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                        },
                        children: /* @__PURE__ */ _jsx6(motion5.div, {
                          className: 'framer-1m02nfp',
                          'data-framer-name': 'state-layer',
                          layoutDependency,
                          layoutId: 'I303:2970;53923:27987',
                          children: /* @__PURE__ */ _jsx6(RichText3, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                  '--framer-font-size': '10px',
                                  '--framer-letter-spacing': '0.1px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-alignment': 'center',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(55, 0, 58))',
                                },
                                children: 'A-1',
                              },),
                            },),
                            className: 'framer-dad9fl',
                            'data-framer-name': 'label-text',
                            fonts: ['CUSTOM;PP Supply Sans Light',],
                            layoutDependency,
                            layoutId: 'I303:2970;53923:27988',
                            style: { '--extracted-r6o4lv': 'rgb(55, 0, 58)', },
                            text: Z93yscm8P,
                            verticalAlignment: 'center',
                            withExternalLayout: true,
                          },),
                        },),
                      },),
                      /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-160injg',
                        'data-framer-name': 'Input chip',
                        layoutDependency,
                        layoutId: 'gjT2zzuK7',
                        style: {
                          backgroundColor: 'rgb(232, 173, 166)',
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                        },
                        children: /* @__PURE__ */ _jsx6(motion5.div, {
                          className: 'framer-1h7yeih',
                          'data-framer-name': 'state-layer',
                          layoutDependency,
                          layoutId: 'I303:2971;53923:27987',
                          children: /* @__PURE__ */ _jsx6(RichText3, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                  '--framer-font-size': '10px',
                                  '--framer-letter-spacing': '0.1px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-alignment': 'center',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(55, 0, 58))',
                                },
                                children: 'B-3',
                              },),
                            },),
                            className: 'framer-d8tsbz',
                            'data-framer-name': 'label-text',
                            fonts: ['CUSTOM;PP Supply Sans Light',],
                            layoutDependency,
                            layoutId: 'I303:2971;53923:27988',
                            style: { '--extracted-r6o4lv': 'rgb(55, 0, 58)', },
                            text: Xo22rvSfa,
                            verticalAlignment: 'center',
                            withExternalLayout: true,
                          },),
                        },),
                      },),
                      /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-3iw8sr',
                        'data-framer-name': 'Input chip',
                        layoutDependency,
                        layoutId: 'C1mKJu16t',
                        style: {
                          backgroundColor: 'rgb(245, 122, 41)',
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                        },
                        children: /* @__PURE__ */ _jsx6(motion5.div, {
                          className: 'framer-vkt06o',
                          'data-framer-name': 'state-layer',
                          layoutDependency,
                          layoutId: 'I303:2972;53923:27987',
                          children: /* @__PURE__ */ _jsx6(RichText3, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion5.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                  '--framer-font-size': '10px',
                                  '--framer-letter-spacing': '0.1px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-alignment': 'center',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(55, 0, 58))',
                                },
                                children: 'B-4',
                              },),
                            },),
                            className: 'framer-fo4y0u',
                            'data-framer-name': 'label-text',
                            fonts: ['CUSTOM;PP Supply Sans Light',],
                            layoutDependency,
                            layoutId: 'I303:2972;53923:27988',
                            style: { '--extracted-r6o4lv': 'rgb(55, 0, 58)', },
                            text: bGyluXMcm,
                            verticalAlignment: 'center',
                            withExternalLayout: true,
                          },),
                        },),
                      },),
                    ],
                  },),
                ],
              },),
              isDisplayed8() && /* @__PURE__ */ _jsx6(motion5.div, {
                className: 'framer-mlqagl',
                'data-framer-name': 'Multiline/Filled',
                layoutDependency,
                layoutId: 'RRJp3CM3F',
                children: /* @__PURE__ */ _jsx6(motion5.div, {
                  className: 'framer-1e67f1l',
                  'data-framer-name': 'Text Field/Filled',
                  layoutDependency,
                  layoutId: 'I68:3468;7624:93641',
                  children: /* @__PURE__ */ _jsx6(motion5.div, {
                    className: 'framer-1nwn68q',
                    'data-framer-name': 'Content',
                    layoutDependency,
                    layoutId: 'I68:3468;7624:93641;7623:77382',
                    children: /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-1as28oh-container',
                      layoutDependency,
                      layoutId: 'HOAIAfIHR-container',
                      children: /* @__PURE__ */ _jsx6(stdin_default4, {
                        AA_oylHc1: JM8R5zcqV,
                        B9Ye7wHiX: OJMet4Rjs,
                        cib0E0Vb9: C0xbi_CXP,
                        Cpm7YdhW6: Jdv7M1lr6,
                        dxSidP8LF: eZ_WIO8yz,
                        eePEcZAuW: K5BysgXsx,
                        Gu4Kp5hWx: vZATQhujj,
                        height: '100%',
                        id: 'HOAIAfIHR',
                        kRgq0jgQR: k4ezTegiq,
                        layoutId: 'HOAIAfIHR',
                        NPSt7VsjX: VOTcq87Vu,
                        nQb7W3cjE: fxy_09app,
                        style: { width: '100%', },
                        variant: convertFromEnum3(LNNJy1jnm, activeLocale,),
                        width: '100%',
                        yBMe3I4G7: qQ_BO9qk8,
                        ...addPropertyOverrides4(
                          { Cr7AsQCPR: { variant: convertFromEnum12(zgF6TYXbc, activeLocale,), }, },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                },),
              },),
              isDisplayed8() && /* @__PURE__ */ _jsx6(motion5.div, {
                className: 'framer-zo2az3',
                'data-framer-name': 'Button-dark',
                layoutDependency,
                layoutId: 'KAf5_wkAp',
                style: {
                  backgroundColor: 'rgb(0, 105, 115)',
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                },
                children: /* @__PURE__ */ _jsx6(motion5.div, {
                  className: 'framer-so5fwt',
                  'data-framer-name': 'state-layer',
                  layoutDependency,
                  layoutId: 'I303:2975;53923:27817',
                  children: /* @__PURE__ */ _jsx6(RichText3, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                      children: /* @__PURE__ */ _jsx6(motion5.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                          '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-letter-spacing': '3.2px',
                          '--framer-line-height': '20px',
                          '--framer-text-alignment': 'center',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                        },
                        children: 'SUBMIT',
                      },),
                    },),
                    className: 'framer-19gd5fv',
                    'data-framer-name': 'label-text',
                    fonts: ['CUSTOM;PP Supply Sans Medium',],
                    layoutDependency,
                    layoutId: 'I303:2975;53923:27818',
                    style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', },
                    verticalAlignment: 'center',
                    withExternalLayout: true,
                    ...addPropertyOverrides4(
                      {
                        Cr7AsQCPR: {
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                                '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                                '--framer-font-size': '10px',
                                '--framer-letter-spacing': '2.9px',
                                '--framer-line-height': '20px',
                                '--framer-text-alignment': 'center',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                              },
                              children: 'SUBMIT',
                            },),
                          },),
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
              isDisplayed10() && /* @__PURE__ */ _jsx6(motion5.div, {
                className: 'framer-l87yju',
                'data-framer-name': 'Frame 2608513',
                layoutDependency,
                layoutId: 'uI8Q2DWZZ',
                children: /* @__PURE__ */ _jsxs4(motion5.div, {
                  className: 'framer-r0em8m',
                  'data-framer-name': 'Search bar',
                  layoutDependency,
                  layoutId: 'Pv0E4vHIr',
                  style: {
                    backgroundColor: 'rgb(237, 238, 241)',
                    borderBottomLeftRadius: 28,
                    borderBottomRightRadius: 28,
                    borderTopLeftRadius: 28,
                    borderTopRightRadius: 28,
                  },
                  children: [
                    /* @__PURE__ */ _jsxs4(motion5.div, {
                      className: 'framer-1dvq414',
                      'data-framer-name': 'state-layer',
                      layoutDependency,
                      layoutId: 'Lccr6sgjb',
                      children: [
                        /* @__PURE__ */ _jsx6(motion5.div, {
                          className: 'framer-1p1bo23',
                          'data-framer-name': 'Trailing-Elements',
                          layoutDependency,
                          layoutId: 'T3ghZskdD',
                          children: /* @__PURE__ */ _jsx6(motion5.div, {
                            className: 'framer-zqh2nn',
                            'data-framer-name': 'Avatar-target',
                            layoutDependency,
                            layoutId: 'dA0DBdc3o',
                            children: /* @__PURE__ */ _jsxs4(motion5.div, {
                              className: 'framer-pbr21r',
                              'data-framer-name': 'Avatar',
                              layoutDependency,
                              layoutId: 'cfeGun5r6',
                              children: [
                                /* @__PURE__ */ _jsx6(motion5.div, {
                                  className: 'framer-cnr1k8',
                                  'data-framer-name': 'Background',
                                  layoutDependency,
                                  layoutId: 'g1zm_vuax',
                                  style: {
                                    backgroundColor: 'rgb(144, 241, 255)',
                                    borderBottomLeftRadius: '100%',
                                    borderBottomRightRadius: '100%',
                                    borderTopLeftRadius: '100%',
                                    borderTopRightRadius: '100%',
                                  },
                                },),
                                /* @__PURE__ */ _jsx6(RichText3, {
                                  __fromCanvasComponent: true,
                                  children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                    children: /* @__PURE__ */ _jsx6(motion5.p, {
                                      style: {
                                        '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                        '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                        '--framer-font-size': '13px',
                                        '--framer-letter-spacing': '0.15px',
                                        '--framer-line-height': '24px',
                                        '--framer-text-alignment': 'center',
                                      },
                                      children: 'A-2',
                                    },),
                                  },),
                                  className: 'framer-krm87b',
                                  'data-framer-name': 'Initial',
                                  fonts: ['CUSTOM;PP Supply Sans Light',],
                                  layoutDependency,
                                  layoutId: 'rgXnE_qqi',
                                  verticalAlignment: 'center',
                                  withExternalLayout: true,
                                },),
                              ],
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsxs4(motion5.div, {
                          className: 'framer-87mzjl',
                          'data-framer-name': 'Content',
                          layoutDependency,
                          layoutId: 'n_bgiVlSg',
                          children: [
                            /* @__PURE__ */ _jsxs4(motion5.div, {
                              className: 'framer-di8oog',
                              layoutDependency,
                              layoutId: 'x70rl52m1',
                              children: [
                                /* @__PURE__ */ _jsx6(RichText3, {
                                  __fromCanvasComponent: true,
                                  children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                    children: /* @__PURE__ */ _jsx6(motion5.p, {
                                      style: {
                                        '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                                        '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                                        '--framer-font-size': '12px',
                                        '--framer-letter-spacing': '0.5px',
                                        '--framer-line-height': '24px',
                                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                                      },
                                      children: 'Decision Node',
                                    },),
                                  },),
                                  className: 'framer-a1wsp2',
                                  'data-framer-name': 'supporting-text',
                                  fonts: ['CUSTOM;PP Supply Sans Medium',],
                                  layoutDependency,
                                  layoutId: 'WsucBkVUz',
                                  style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', },
                                  verticalAlignment: 'center',
                                  withExternalLayout: true,
                                },),
                                /* @__PURE__ */ _jsx6(RichText3, {
                                  __fromCanvasComponent: true,
                                  children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                    children: /* @__PURE__ */ _jsx6(motion5.p, {
                                      style: {
                                        '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                                        '--framer-font-family': '"PP Supply Sans Medium", sans-serif',
                                        '--framer-letter-spacing': '0.5px',
                                        '--framer-line-height': '24px',
                                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                                      },
                                      children: 'Define Primary Goal',
                                    },),
                                  },),
                                  className: 'framer-1awvx7p',
                                  'data-framer-name': 'supporting-text',
                                  fonts: ['CUSTOM;PP Supply Sans Medium',],
                                  layoutDependency,
                                  layoutId: 'opOu0sqRn',
                                  style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', },
                                  verticalAlignment: 'center',
                                  withExternalLayout: true,
                                },),
                              ],
                            },),
                            /* @__PURE__ */ _jsx6(motion5.div, {
                              className: 'framer-3tnxcx',
                              'data-framer-name': 'Leading-icon',
                              layoutDependency,
                              layoutId: 'p5HW_zmJw',
                              children: /* @__PURE__ */ _jsx6(motion5.div, {
                                className: 'framer-zfqid9',
                                'data-framer-name': 'container',
                                layoutDependency,
                                layoutId: 'WrrEwbxTu',
                                style: {
                                  borderBottomLeftRadius: 100,
                                  borderBottomRightRadius: 100,
                                  borderTopLeftRadius: 100,
                                  borderTopRightRadius: 100,
                                },
                                children: /* @__PURE__ */ _jsx6(motion5.div, {
                                  className: 'framer-1bsvo3k',
                                  'data-framer-name': 'state-layer',
                                  layoutDependency,
                                  layoutId: 'ltq3iN3cA',
                                  children: /* @__PURE__ */ _jsx6(motion5.div, {
                                    className: 'framer-1vjxg04',
                                    'data-framer-name': 'Icon',
                                    layoutDependency,
                                    layoutId: 'FL77cuW9w',
                                    children: /* @__PURE__ */ _jsx6(SVG4, {
                                      className: 'framer-8x5cq0',
                                      'data-framer-name': 'icon',
                                      fill: 'rgba(0,0,0,1)',
                                      intrinsicHeight: 16,
                                      intrinsicWidth: 4,
                                      layoutDependency,
                                      layoutId: 'nYgYJQYoH',
                                      svg:
                                        '<svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z" fill="#3F484A"/>\n</svg>\n',
                                      withExternalLayout: true,
                                    },),
                                  },),
                                },),
                              },),
                            },),
                          ],
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsx6(motion5.div, {
                      className: 'framer-tb2a78',
                      'data-framer-name': 'Content',
                      layoutDependency,
                      layoutId: 'VtJJ7CbYW',
                      children: /* @__PURE__ */ _jsx6(motion5.div, {
                        className: 'framer-r4j7qq',
                        'data-framer-name': 'Frame 2608516',
                        layoutDependency,
                        layoutId: 'u0pNrfPeD',
                        style: {
                          backgroundColor: 'rgb(249, 249, 252)',
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: /* @__PURE__ */ _jsx6(RichText3, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                            children: /* @__PURE__ */ _jsx6(motion5.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", sans-serif',
                                '--framer-letter-spacing': '1px',
                                '--framer-line-height': '24px',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(26, 28, 30))',
                              },
                              children:
                                '\u201CTo create a tool that enhances users\' memory retention and recall capabilities through various interactive exercises and activities, utilizing personalized data to optimize and tailor experiences.\u201D',
                            },),
                          },),
                          className: 'framer-1uxqpch',
                          'data-framer-name': 'Headline',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'vwgmDfcb6',
                          style: { '--extracted-r6o4lv': 'rgb(26, 28, 30)', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                        },),
                      },),
                    },),
                  ],
                },),
              },),
            ],
          },),
          /* @__PURE__ */ _jsx6(motion5.div, {
            className: 'framer-1btdo6o',
            'data-border': true,
            'data-framer-name': 'Border',
            layoutDependency,
            layoutId: 'AtsnyuJWL',
            style: {
              '--border-bottom-width': '0px',
              '--border-color': 'rgb(255, 255, 255)',
              '--border-left-width': '0px',
              '--border-right-width': '0px',
              '--border-style': 'solid',
              '--border-top-width': '0.5px',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              opacity: 0.1,
            },
            variants: {
              Cr7AsQCPR: { '--border-color': 'rgba(0, 0, 0, 0.73)', },
              uTj0cEPb8: { borderBottomLeftRadius: 27, borderBottomRightRadius: 27, borderTopLeftRadius: 27, borderTopRightRadius: 27, },
              uyxhsUNZq: {
                borderBottomLeftRadius: 138,
                borderBottomRightRadius: 138,
                borderTopLeftRadius: 138,
                borderTopRightRadius: 138,
              },
            },
          },),
        ],
      },),
    },),
  },);
},);
var css5 = [
  '.framer-43DSm[data-border="true"]::after, .framer-43DSm [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-43DSm.framer-13itnim, .framer-43DSm .framer-13itnim { display: block; }',
  '.framer-43DSm.framer-15k1mix { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-43DSm .framer-u952ip { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 24px 24px 24px; position: relative; width: 325px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-43DSm .framer-16jcubo { flex: none; height: 256px; overflow: visible; position: relative; width: 256px; }',
  '.framer-43DSm .framer-pgz1il { flex: none; height: 4px; left: calc(50% - 260px / 2); position: absolute; top: calc(50.000004371139184% - 4px / 2); width: 260px; }',
  '.framer-43DSm .framer-t88y97 { aspect-ratio: 1 / 1; bottom: var(--framer-aspect-ratio-supported, 123px); flex: none; height: 9px; left: 123px; position: absolute; right: 123px; top: 123px; }',
  '.framer-43DSm .framer-1bz5g0t { flex: none; height: 100px; left: calc(53.90625000000002% - 49px / 2); position: absolute; top: 28px; width: 49px; }',
  '.framer-43DSm .framer-s80oao { flex: none; height: 100px; left: 82px; position: absolute; top: 28px; width: 49px; }',
  '.framer-43DSm .framer-grahyw { bottom: 35px; flex: none; height: 100px; left: 82px; position: absolute; width: 49px; }',
  '.framer-43DSm .framer-ters9i { bottom: 35px; flex: none; height: 100px; position: absolute; right: 79px; width: 49px; }',
  '.framer-43DSm .framer-ygxorp { bottom: 35px; flex: none; height: 100px; position: absolute; right: 88px; width: 49px; }',
  '.framer-43DSm .framer-gaigs9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 133px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 8px; width: 48px; }',
  '.framer-43DSm .framer-19e96pz, .framer-43DSm .framer-bxm0gv, .framer-43DSm .framer-1seihbr, .framer-43DSm .framer-1x7jv21 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-43DSm .framer-67o6ax, .framer-43DSm .framer-13irvgu, .framer-43DSm .framer-b95frv, .framer-43DSm .framer-1iqm9oi { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-43DSm .framer-1er1yu3, .framer-43DSm .framer-1iiryhe, .framer-43DSm .framer-1v0hux5, .framer-43DSm .framer-1gnv6f9, .framer-43DSm .framer-10xeruc, .framer-43DSm .framer-krm87b { flex: none; height: 40px; left: calc(50% - 40px / 2); position: absolute; top: calc(50% - 40px / 2); white-space: pre-wrap; width: 40px; word-break: break-word; word-wrap: break-word; }',
  '.framer-43DSm .framer-zsae62 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 52%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: -92px; width: min-content; }',
  '.framer-43DSm .framer-mkcxyc-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-43DSm .framer-16lays1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 75px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 8px; width: 48px; }',
  '.framer-43DSm .framer-1r78rj3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 2px 2px 2px 2px; position: relative; width: min-content; }',
  '.framer-43DSm .framer-1slmo9y { flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-43DSm .framer-hm8hzz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 54px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 192px; width: 48px; }',
  '.framer-43DSm .framer-b81srs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 104px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 206px; width: 48px; }',
  '.framer-43DSm .framer-eie4hr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; left: 154px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 192px; width: 48px; }',
  '.framer-43DSm .framer-pk4yjk { flex: none; height: auto; left: 9px; position: absolute; top: 107px; white-space: pre; width: auto; }',
  '.framer-43DSm .framer-1saw3ai { flex: none; height: auto; left: 9px; position: absolute; top: 54%; white-space: pre; width: auto; }',
  '.framer-43DSm .framer-6vo91e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-43DSm .framer-1bz3drm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-43DSm .framer-rxhn3z, .framer-43DSm .framer-1hg0ea8, .framer-43DSm .framer-d8tsbz, .framer-43DSm .framer-fo4y0u, .framer-43DSm .framer-19gd5fv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-43DSm .framer-z3jaf1, .framer-43DSm .framer-mlqagl, .framer-43DSm .framer-1nwn68q { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-43DSm .framer-1dzdi2f { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 638px; word-break: break-word; word-wrap: break-word; }',
  '.framer-43DSm .framer-1t15ltz, .framer-43DSm .framer-1o7rnow { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-43DSm .framer-relj6k { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-43DSm .framer-g6jc3c-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }',
  '.framer-43DSm .framer-s3klti { flex: none; height: 24px; position: relative; white-space: pre-wrap; width: 226px; word-break: break-word; word-wrap: break-word; }',
  '.framer-43DSm .framer-knxsbs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 24px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-43DSm .framer-rojnhy, .framer-43DSm .framer-1m02nfp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 100%; justify-content: center; overflow: visible; padding: 4px 8px 4px 8px; position: relative; width: min-content; }',
  '.framer-43DSm .framer-tthg7e { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-43DSm .framer-1hadtwd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-43DSm .framer-6porn2 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '.framer-43DSm .framer-p6sy63 { flex: none; height: 125px; left: -3px; mix-blend-mode: multiply; overflow: visible; position: absolute; top: calc(49.230769230769255% - 125px / 2); width: 314px; z-index: 1; }',
  '.framer-43DSm .framer-1sckg0c { bottom: 26px; flex: none; height: 21px; mix-blend-mode: multiply; position: absolute; right: 27px; width: 71px; z-index: 1; }',
  '.framer-43DSm .framer-4q5s49 { flex: none; height: 21px; mix-blend-mode: multiply; position: absolute; right: 1px; top: 0px; width: 241px; z-index: 1; }',
  '.framer-43DSm .framer-btq4z { flex: none; height: 21px; mix-blend-mode: multiply; position: absolute; right: 59px; top: 26px; width: 162px; z-index: 1; }',
  '.framer-43DSm .framer-hccerc { flex: none; height: 21px; mix-blend-mode: multiply; position: absolute; right: 37px; top: calc(50.40000000000002% - 21px / 2); width: 205px; z-index: 1; }',
  '.framer-43DSm .framer-1rdnm2h { bottom: 26px; flex: none; height: 21px; left: 1px; mix-blend-mode: multiply; position: absolute; width: 115px; z-index: 1; }',
  '.framer-43DSm .framer-1msl2tx { bottom: 1px; flex: none; height: 21px; left: 1px; mix-blend-mode: multiply; position: absolute; width: 94px; z-index: 1; }',
  '.framer-43DSm .framer-via5el { flex: none; height: 21px; left: 2px; position: absolute; top: 26px; width: 65px; z-index: 1; }',
  '.framer-43DSm .framer-1oh0yiu, .framer-43DSm .framer-rluzxm { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 277px; word-break: break-word; word-wrap: break-word; }',
  '.framer-43DSm .framer-274qgp-container, .framer-43DSm .framer-1as28oh-container { flex: none; height: auto; position: relative; width: 100%; }',
  '.framer-43DSm .framer-8z588a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 25px 0px 25px; position: relative; width: 325px; }',
  '.framer-43DSm .framer-q310jp { flex: 1 0 0px; height: 3px; position: relative; width: 1px; }',
  '.framer-43DSm .framer-s5kk1i { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-43DSm .framer-b3batm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-43DSm .framer-1u81hx0, .framer-43DSm .framer-160injg, .framer-43DSm .framer-3iw8sr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 16px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-43DSm .framer-dad9fl { flex: none; height: 100%; position: relative; white-space: pre; width: auto; }',
  '.framer-43DSm .framer-1h7yeih, .framer-43DSm .framer-vkt06o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 4px 8px 4px 8px; position: relative; width: min-content; }',
  '.framer-43DSm .framer-1e67f1l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-43DSm .framer-zo2az3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
  '.framer-43DSm .framer-so5fwt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 10px 24px 10px 24px; position: relative; width: 100%; }',
  '.framer-43DSm .framer-l87yju { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-43DSm .framer-r0em8m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-43DSm .framer-1dvq414 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 56px; justify-content: flex-start; overflow: visible; padding: 4px 4px 4px 4px; position: relative; width: auto; }',
  '.framer-43DSm .framer-1p1bo23 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-43DSm .framer-zqh2nn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-43DSm .framer-pbr21r { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); overflow: hidden; position: relative; width: 30px; }',
  '.framer-43DSm .framer-cnr1k8 { aspect-ratio: 1 / 1; bottom: var(--framer-aspect-ratio-supported, 0px); flex: none; height: 30px; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-43DSm .framer-87mzjl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-43DSm .framer-di8oog { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-43DSm .framer-a1wsp2 { flex: none; height: 12px; position: relative; white-space: pre-wrap; width: 248px; word-break: break-word; word-wrap: break-word; }',
  '.framer-43DSm .framer-1awvx7p { flex: none; height: 19px; position: relative; white-space: pre-wrap; width: 248px; word-break: break-word; word-wrap: break-word; }',
  '.framer-43DSm .framer-3tnxcx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-43DSm .framer-zfqid9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-43DSm .framer-1bsvo3k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }',
  '.framer-43DSm .framer-1vjxg04 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }',
  '.framer-43DSm .framer-8x5cq0 { bottom: 4px; flex: none; left: 10px; position: absolute; right: 10px; top: 4px; }',
  '.framer-43DSm .framer-tb2a78 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 18px 18px 18px; position: relative; width: auto; }',
  '.framer-43DSm .framer-r4j7qq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 10px 12px 10px 12px; position: relative; width: 100%; }',
  '.framer-43DSm .framer-1uxqpch { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 306px; word-break: break-word; word-wrap: break-word; }',
  '.framer-43DSm .framer-1btdo6o { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-43DSm.framer-15k1mix, .framer-43DSm .framer-u952ip, .framer-43DSm .framer-gaigs9, .framer-43DSm .framer-19e96pz, .framer-43DSm .framer-zsae62, .framer-43DSm .framer-16lays1, .framer-43DSm .framer-1r78rj3, .framer-43DSm .framer-hm8hzz, .framer-43DSm .framer-bxm0gv, .framer-43DSm .framer-b81srs, .framer-43DSm .framer-1seihbr, .framer-43DSm .framer-eie4hr, .framer-43DSm .framer-1x7jv21, .framer-43DSm .framer-6vo91e, .framer-43DSm .framer-1bz3drm, .framer-43DSm .framer-z3jaf1, .framer-43DSm .framer-1t15ltz, .framer-43DSm .framer-knxsbs, .framer-43DSm .framer-rojnhy, .framer-43DSm .framer-tthg7e, .framer-43DSm .framer-1hadtwd, .framer-43DSm .framer-8z588a, .framer-43DSm .framer-s5kk1i, .framer-43DSm .framer-1o7rnow, .framer-43DSm .framer-b3batm, .framer-43DSm .framer-1u81hx0, .framer-43DSm .framer-1m02nfp, .framer-43DSm .framer-160injg, .framer-43DSm .framer-1h7yeih, .framer-43DSm .framer-3iw8sr, .framer-43DSm .framer-vkt06o, .framer-43DSm .framer-mlqagl, .framer-43DSm .framer-1e67f1l, .framer-43DSm .framer-1nwn68q, .framer-43DSm .framer-zo2az3, .framer-43DSm .framer-so5fwt, .framer-43DSm .framer-l87yju, .framer-43DSm .framer-r0em8m, .framer-43DSm .framer-1dvq414, .framer-43DSm .framer-1p1bo23, .framer-43DSm .framer-zqh2nn, .framer-43DSm .framer-87mzjl, .framer-43DSm .framer-di8oog, .framer-43DSm .framer-3tnxcx, .framer-43DSm .framer-zfqid9, .framer-43DSm .framer-1bsvo3k, .framer-43DSm .framer-tb2a78, .framer-43DSm .framer-r4j7qq { gap: 0px; } .framer-43DSm.framer-15k1mix > *, .framer-43DSm .framer-1bz3drm > *, .framer-43DSm .framer-3tnxcx > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-43DSm.framer-15k1mix > :first-child, .framer-43DSm .framer-u952ip > :first-child, .framer-43DSm .framer-19e96pz > :first-child, .framer-43DSm .framer-1r78rj3 > :first-child, .framer-43DSm .framer-bxm0gv > :first-child, .framer-43DSm .framer-1seihbr > :first-child, .framer-43DSm .framer-1x7jv21 > :first-child, .framer-43DSm .framer-6vo91e > :first-child, .framer-43DSm .framer-1bz3drm > :first-child, .framer-43DSm .framer-z3jaf1 > :first-child, .framer-43DSm .framer-s5kk1i > :first-child, .framer-43DSm .framer-mlqagl > :first-child, .framer-43DSm .framer-1e67f1l > :first-child, .framer-43DSm .framer-1nwn68q > :first-child, .framer-43DSm .framer-zo2az3 > :first-child, .framer-43DSm .framer-l87yju > :first-child, .framer-43DSm .framer-r0em8m > :first-child, .framer-43DSm .framer-di8oog > :first-child, .framer-43DSm .framer-3tnxcx > :first-child, .framer-43DSm .framer-tb2a78 > :first-child, .framer-43DSm .framer-r4j7qq > :first-child { margin-top: 0px; } .framer-43DSm.framer-15k1mix > :last-child, .framer-43DSm .framer-u952ip > :last-child, .framer-43DSm .framer-19e96pz > :last-child, .framer-43DSm .framer-1r78rj3 > :last-child, .framer-43DSm .framer-bxm0gv > :last-child, .framer-43DSm .framer-1seihbr > :last-child, .framer-43DSm .framer-1x7jv21 > :last-child, .framer-43DSm .framer-6vo91e > :last-child, .framer-43DSm .framer-1bz3drm > :last-child, .framer-43DSm .framer-z3jaf1 > :last-child, .framer-43DSm .framer-s5kk1i > :last-child, .framer-43DSm .framer-mlqagl > :last-child, .framer-43DSm .framer-1e67f1l > :last-child, .framer-43DSm .framer-1nwn68q > :last-child, .framer-43DSm .framer-zo2az3 > :last-child, .framer-43DSm .framer-l87yju > :last-child, .framer-43DSm .framer-r0em8m > :last-child, .framer-43DSm .framer-di8oog > :last-child, .framer-43DSm .framer-3tnxcx > :last-child, .framer-43DSm .framer-tb2a78 > :last-child, .framer-43DSm .framer-r4j7qq > :last-child { margin-bottom: 0px; } .framer-43DSm .framer-u952ip > * { margin: 0px; margin-bottom: calc(18px / 2); margin-top: calc(18px / 2); } .framer-43DSm .framer-gaigs9 > *, .framer-43DSm .framer-16lays1 > *, .framer-43DSm .framer-hm8hzz > *, .framer-43DSm .framer-b81srs > *, .framer-43DSm .framer-eie4hr > *, .framer-43DSm .framer-1t15ltz > *, .framer-43DSm .framer-knxsbs > *, .framer-43DSm .framer-8z588a > *, .framer-43DSm .framer-1o7rnow > *, .framer-43DSm .framer-1u81hx0 > *, .framer-43DSm .framer-160injg > *, .framer-43DSm .framer-3iw8sr > *, .framer-43DSm .framer-1p1bo23 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-43DSm .framer-gaigs9 > :first-child, .framer-43DSm .framer-zsae62 > :first-child, .framer-43DSm .framer-16lays1 > :first-child, .framer-43DSm .framer-hm8hzz > :first-child, .framer-43DSm .framer-b81srs > :first-child, .framer-43DSm .framer-eie4hr > :first-child, .framer-43DSm .framer-1t15ltz > :first-child, .framer-43DSm .framer-knxsbs > :first-child, .framer-43DSm .framer-rojnhy > :first-child, .framer-43DSm .framer-tthg7e > :first-child, .framer-43DSm .framer-1hadtwd > :first-child, .framer-43DSm .framer-8z588a > :first-child, .framer-43DSm .framer-1o7rnow > :first-child, .framer-43DSm .framer-b3batm > :first-child, .framer-43DSm .framer-1u81hx0 > :first-child, .framer-43DSm .framer-1m02nfp > :first-child, .framer-43DSm .framer-160injg > :first-child, .framer-43DSm .framer-1h7yeih > :first-child, .framer-43DSm .framer-3iw8sr > :first-child, .framer-43DSm .framer-vkt06o > :first-child, .framer-43DSm .framer-so5fwt > :first-child, .framer-43DSm .framer-1dvq414 > :first-child, .framer-43DSm .framer-1p1bo23 > :first-child, .framer-43DSm .framer-zqh2nn > :first-child, .framer-43DSm .framer-87mzjl > :first-child, .framer-43DSm .framer-zfqid9 > :first-child, .framer-43DSm .framer-1bsvo3k > :first-child { margin-left: 0px; } .framer-43DSm .framer-gaigs9 > :last-child, .framer-43DSm .framer-zsae62 > :last-child, .framer-43DSm .framer-16lays1 > :last-child, .framer-43DSm .framer-hm8hzz > :last-child, .framer-43DSm .framer-b81srs > :last-child, .framer-43DSm .framer-eie4hr > :last-child, .framer-43DSm .framer-1t15ltz > :last-child, .framer-43DSm .framer-knxsbs > :last-child, .framer-43DSm .framer-rojnhy > :last-child, .framer-43DSm .framer-tthg7e > :last-child, .framer-43DSm .framer-1hadtwd > :last-child, .framer-43DSm .framer-8z588a > :last-child, .framer-43DSm .framer-1o7rnow > :last-child, .framer-43DSm .framer-b3batm > :last-child, .framer-43DSm .framer-1u81hx0 > :last-child, .framer-43DSm .framer-1m02nfp > :last-child, .framer-43DSm .framer-160injg > :last-child, .framer-43DSm .framer-1h7yeih > :last-child, .framer-43DSm .framer-3iw8sr > :last-child, .framer-43DSm .framer-vkt06o > :last-child, .framer-43DSm .framer-so5fwt > :last-child, .framer-43DSm .framer-1dvq414 > :last-child, .framer-43DSm .framer-1p1bo23 > :last-child, .framer-43DSm .framer-zqh2nn > :last-child, .framer-43DSm .framer-87mzjl > :last-child, .framer-43DSm .framer-zfqid9 > :last-child, .framer-43DSm .framer-1bsvo3k > :last-child { margin-right: 0px; } .framer-43DSm .framer-19e96pz > *, .framer-43DSm .framer-1r78rj3 > *, .framer-43DSm .framer-bxm0gv > *, .framer-43DSm .framer-1seihbr > *, .framer-43DSm .framer-1x7jv21 > *, .framer-43DSm .framer-z3jaf1 > *, .framer-43DSm .framer-mlqagl > *, .framer-43DSm .framer-1nwn68q > *, .framer-43DSm .framer-zo2az3 > *, .framer-43DSm .framer-l87yju > *, .framer-43DSm .framer-di8oog > *, .framer-43DSm .framer-tb2a78 > *, .framer-43DSm .framer-r4j7qq > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-43DSm .framer-zsae62 > *, .framer-43DSm .framer-tthg7e > *, .framer-43DSm .framer-1hadtwd > *, .framer-43DSm .framer-zqh2nn > *, .framer-43DSm .framer-87mzjl > *, .framer-43DSm .framer-zfqid9 > *, .framer-43DSm .framer-1bsvo3k > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-43DSm .framer-6vo91e > *, .framer-43DSm .framer-s5kk1i > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-43DSm .framer-rojnhy > *, .framer-43DSm .framer-b3batm > *, .framer-43DSm .framer-1m02nfp > *, .framer-43DSm .framer-1h7yeih > *, .framer-43DSm .framer-vkt06o > *, .framer-43DSm .framer-so5fwt > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-43DSm .framer-1e67f1l > * { margin: 0px; margin-bottom: calc(3px / 2); margin-top: calc(3px / 2); } .framer-43DSm .framer-r0em8m > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-43DSm .framer-1dvq414 > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } }',
  '.framer-43DSm.framer-v-tlkqch .framer-u952ip, .framer-43DSm.framer-v-1twsf6e .framer-u952ip { height: 60px; padding: 17px 17px 17px 17px; width: 60px; }',
  '.framer-43DSm.framer-v-tlkqch .framer-6vo91e, .framer-43DSm.framer-v-tlkqch .framer-1t15ltz, .framer-43DSm.framer-v-1a8pern .framer-6vo91e, .framer-43DSm.framer-v-1a8pern .framer-1t15ltz, .framer-43DSm.framer-v-uax94b .framer-6vo91e, .framer-43DSm.framer-v-uax94b .framer-1t15ltz, .framer-43DSm.framer-v-1khlikx .framer-6vo91e, .framer-43DSm.framer-v-1khlikx .framer-1t15ltz, .framer-43DSm.framer-v-18q1m16 .framer-6vo91e, .framer-43DSm.framer-v-18q1m16 .framer-1t15ltz, .framer-43DSm.framer-v-w4miu7 .framer-6vo91e, .framer-43DSm.framer-v-w4miu7 .framer-1t15ltz, .framer-43DSm.framer-v-1twsf6e .framer-1t15ltz { flex: 1 0 0px; height: 1px; }',
  '.framer-43DSm.framer-v-tlkqch .framer-relj6k, .framer-43DSm.framer-v-1a8pern .framer-relj6k, .framer-43DSm.framer-v-uax94b .framer-relj6k, .framer-43DSm.framer-v-1khlikx .framer-relj6k, .framer-43DSm.framer-v-18q1m16 .framer-relj6k, .framer-43DSm.framer-v-w4miu7 .framer-relj6k, .framer-43DSm.framer-v-1twsf6e .framer-relj6k { height: 100%; }',
  '.framer-43DSm.framer-v-tlkqch .framer-knxsbs, .framer-43DSm.framer-v-1a8pern .framer-knxsbs, .framer-43DSm.framer-v-uax94b .framer-knxsbs, .framer-43DSm.framer-v-1khlikx .framer-knxsbs, .framer-43DSm.framer-v-18q1m16 .framer-knxsbs, .framer-43DSm.framer-v-w4miu7 .framer-knxsbs, .framer-43DSm.framer-v-1twsf6e .framer-knxsbs { flex: 1 0 0px; height: 100%; overflow: visible; width: 1px; }',
  '.framer-43DSm.framer-v-tlkqch .framer-rojnhy, .framer-43DSm.framer-v-1a8pern .framer-rojnhy, .framer-43DSm.framer-v-uax94b .framer-rojnhy, .framer-43DSm.framer-v-1khlikx .framer-rojnhy, .framer-43DSm.framer-v-18q1m16 .framer-rojnhy, .framer-43DSm.framer-v-w4miu7 .framer-rojnhy, .framer-43DSm.framer-v-1twsf6e .framer-rojnhy, .framer-43DSm.framer-v-vry1od .framer-rojnhy { flex: 1 0 0px; width: 1px; }',
  '.framer-43DSm.framer-v-1a8pern .framer-u952ip { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 50px); padding: 14px 14px 14px 14px; width: 50px; }',
  '.framer-43DSm.framer-v-uax94b .framer-u952ip { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 40px); padding: 11px 11px 11px 11px; width: 40px; }',
  '.framer-43DSm.framer-v-1khlikx .framer-u952ip { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 30px); padding: 8px 8px 8px 8px; width: 30px; }',
  '.framer-43DSm.framer-v-18q1m16 .framer-u952ip { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 20px); padding: 5px 5px 5px 5px; width: 20px; }',
  '.framer-43DSm.framer-v-w4miu7.framer-15k1mix { width: 86px; }',
  '.framer-43DSm.framer-v-w4miu7 .framer-u952ip { height: 20px; padding: 5px 5px 5px 5px; width: 100%; }',
  '.framer-43DSm.framer-v-1kuanhy.framer-15k1mix, .framer-43DSm.framer-v-uiz0vr.framer-15k1mix, .framer-43DSm.framer-v-14j2671.framer-15k1mix { gap: 0px; }',
  '.framer-43DSm.framer-v-1kuanhy .framer-u952ip, .framer-43DSm.framer-v-uiz0vr .framer-u952ip { align-content: flex-start; align-items: flex-start; flex-direction: row; overflow: visible; padding: 32px 16px 16px 16px; width: min-content; }',
  '.framer-43DSm.framer-v-1kuanhy .framer-16jcubo, .framer-43DSm.framer-v-1kuanhy .framer-1hadtwd, .framer-43DSm.framer-v-uiz0vr .framer-16jcubo, .framer-43DSm.framer-v-uiz0vr .framer-1hadtwd, .framer-43DSm.framer-v-14j2671 .framer-16jcubo, .framer-43DSm.framer-v-vry1od .framer-1btdo6o { order: 1; }',
  '.framer-43DSm.framer-v-1kuanhy .framer-6vo91e, .framer-43DSm.framer-v-uiz0vr .framer-6vo91e { order: 0; padding: 0px 23px 0px 23px; width: 385px; }',
  '.framer-43DSm.framer-v-1kuanhy .framer-1bz3drm, .framer-43DSm.framer-v-1kuanhy .framer-s3klti, .framer-43DSm.framer-v-uiz0vr .framer-1bz3drm, .framer-43DSm.framer-v-uiz0vr .framer-s3klti, .framer-43DSm.framer-v-uiz0vr .framer-l87yju { order: 2; }',
  '.framer-43DSm.framer-v-1kuanhy .framer-z3jaf1, .framer-43DSm.framer-v-uiz0vr .framer-z3jaf1 { order: 3; }',
  '.framer-43DSm.framer-v-1kuanhy .framer-1dzdi2f, .framer-43DSm.framer-v-uiz0vr .framer-1dzdi2f, .framer-43DSm.framer-v-1s83m4o .framer-1oh0yiu, .framer-43DSm.framer-v-1s83m4o .framer-8z588a { width: 100%; }',
  '.framer-43DSm.framer-v-1kuanhy .framer-1t15ltz, .framer-43DSm.framer-v-uiz0vr .framer-1t15ltz { order: 4; }',
  '.framer-43DSm.framer-v-1kuanhy .framer-relj6k, .framer-43DSm.framer-v-uiz0vr .framer-relj6k { flex-direction: column; }',
  '.framer-43DSm.framer-v-1kuanhy .framer-knxsbs, .framer-43DSm.framer-v-uiz0vr .framer-knxsbs { height: min-content; order: 0; width: 100%; }',
  '.framer-43DSm.framer-v-1kuanhy .framer-rojnhy, .framer-43DSm.framer-v-uiz0vr .framer-rojnhy { flex: 1 0 0px; height: min-content; padding: 16px 16px 16px 16px; width: 1px; }',
  '.framer-43DSm.framer-v-1kuanhy .framer-p6sy63, .framer-43DSm.framer-v-uiz0vr .framer-p6sy63 { bottom: -9px; height: unset; order: 0; top: -11px; width: 372px; }',
  '.framer-43DSm.framer-v-1kuanhy .framer-1oh0yiu, .framer-43DSm.framer-v-uiz0vr .framer-1oh0yiu { order: 5; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-43DSm.framer-v-1kuanhy.framer-15k1mix, .framer-43DSm.framer-v-1kuanhy .framer-u952ip, .framer-43DSm.framer-v-1kuanhy .framer-relj6k { gap: 0px; } .framer-43DSm.framer-v-1kuanhy.framer-15k1mix > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-43DSm.framer-v-1kuanhy.framer-15k1mix > :first-child { margin-top: 0px; } .framer-43DSm.framer-v-1kuanhy.framer-15k1mix > :last-child { margin-bottom: 0px; } .framer-43DSm.framer-v-1kuanhy .framer-u952ip > * { margin: 0px; margin-left: calc(18px / 2); margin-right: calc(18px / 2); } .framer-43DSm.framer-v-1kuanhy .framer-u952ip > :first-child { margin-left: 0px; } .framer-43DSm.framer-v-1kuanhy .framer-u952ip > :last-child { margin-right: 0px; } .framer-43DSm.framer-v-1kuanhy .framer-relj6k > *, .framer-43DSm.framer-v-1kuanhy .framer-relj6k > :first-child, .framer-43DSm.framer-v-1kuanhy .framer-relj6k > :last-child { margin: 0px; } }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-43DSm.framer-v-uiz0vr.framer-15k1mix, .framer-43DSm.framer-v-uiz0vr .framer-u952ip, .framer-43DSm.framer-v-uiz0vr .framer-relj6k { gap: 0px; } .framer-43DSm.framer-v-uiz0vr.framer-15k1mix > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-43DSm.framer-v-uiz0vr.framer-15k1mix > :first-child { margin-top: 0px; } .framer-43DSm.framer-v-uiz0vr.framer-15k1mix > :last-child { margin-bottom: 0px; } .framer-43DSm.framer-v-uiz0vr .framer-u952ip > * { margin: 0px; margin-left: calc(18px / 2); margin-right: calc(18px / 2); } .framer-43DSm.framer-v-uiz0vr .framer-u952ip > :first-child { margin-left: 0px; } .framer-43DSm.framer-v-uiz0vr .framer-u952ip > :last-child { margin-right: 0px; } .framer-43DSm.framer-v-uiz0vr .framer-relj6k > *, .framer-43DSm.framer-v-uiz0vr .framer-relj6k > :first-child, .framer-43DSm.framer-v-uiz0vr .framer-relj6k > :last-child { margin: 0px; } }',
  '.framer-43DSm.framer-v-14j2671 .framer-u952ip { align-content: flex-start; align-items: flex-start; flex-direction: row; overflow: visible; padding: 16px 16px 16px 16px; width: min-content; }',
  '.framer-43DSm.framer-v-14j2671 .framer-zsae62 { left: 127px; top: 4px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-43DSm.framer-v-14j2671.framer-15k1mix, .framer-43DSm.framer-v-14j2671 .framer-u952ip { gap: 0px; } .framer-43DSm.framer-v-14j2671.framer-15k1mix > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-43DSm.framer-v-14j2671.framer-15k1mix > :first-child { margin-top: 0px; } .framer-43DSm.framer-v-14j2671.framer-15k1mix > :last-child { margin-bottom: 0px; } .framer-43DSm.framer-v-14j2671 .framer-u952ip > * { margin: 0px; margin-left: calc(18px / 2); margin-right: calc(18px / 2); } .framer-43DSm.framer-v-14j2671 .framer-u952ip > :first-child { margin-left: 0px; } .framer-43DSm.framer-v-14j2671 .framer-u952ip > :last-child { margin-right: 0px; } }',
  '.framer-43DSm.framer-v-1s83m4o .framer-u952ip { gap: 5px; padding: 15px 15px 15px 15px; width: 211px; }',
  '.framer-43DSm.framer-v-1s83m4o .framer-6vo91e { gap: 4px; }',
  '.framer-43DSm.framer-v-1s83m4o .framer-s3klti { align-self: stretch; flex: 1 0 0px; height: auto; width: 1px; }',
  '.framer-43DSm.framer-v-1s83m4o .framer-knxsbs { height: 15px; }',
  '.framer-43DSm.framer-v-1s83m4o .framer-so5fwt { padding: 3px 24px 3px 24px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-43DSm.framer-v-1s83m4o .framer-u952ip, .framer-43DSm.framer-v-1s83m4o .framer-6vo91e { gap: 0px; } .framer-43DSm.framer-v-1s83m4o .framer-u952ip > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-43DSm.framer-v-1s83m4o .framer-u952ip > :first-child, .framer-43DSm.framer-v-1s83m4o .framer-6vo91e > :first-child { margin-top: 0px; } .framer-43DSm.framer-v-1s83m4o .framer-u952ip > :last-child, .framer-43DSm.framer-v-1s83m4o .framer-6vo91e > :last-child { margin-bottom: 0px; } .framer-43DSm.framer-v-1s83m4o .framer-6vo91e > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } }',
  '.framer-43DSm.framer-v-1twsf6e .framer-6vo91e { flex: 1 0 0px; height: 1px; overflow: visible; }',
  '.framer-43DSm.framer-v-vry1od.framer-15k1mix { height: 71px; width: 20px; }',
  '.framer-43DSm.framer-v-vry1od .framer-u952ip { flex: 1 0 0px; height: 1px; order: 0; padding: 23px 3px 23px 3px; width: min-content; }',
  '.framer-43DSm.framer-v-vry1od .framer-6vo91e, .framer-43DSm.framer-v-vry1od .framer-1t15ltz { width: min-content; }',
  '.framer-43DSm.framer-v-vry1od .framer-relj6k { flex: none; gap: 0px; height: 19px; justify-content: center; width: min-content; }',
  '.framer-43DSm.framer-v-vry1od .framer-knxsbs { height: 100%; overflow: visible; width: 12px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-43DSm.framer-v-vry1od .framer-relj6k { gap: 0px; } .framer-43DSm.framer-v-vry1od .framer-relj6k > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-43DSm.framer-v-vry1od .framer-relj6k > :first-child { margin-left: 0px; } .framer-43DSm.framer-v-vry1od .framer-relj6k > :last-child { margin-right: 0px; } }',
];
var FramerC_odUWZqr = withCSS6(Component4, css5, 'framer-43DSm',);
var stdin_default6 = FramerC_odUWZqr;
FramerC_odUWZqr.displayName = 'node';
FramerC_odUWZqr.defaultProps = { height: 295, width: 325, };
addPropertyControls6(FramerC_odUWZqr, {
  variant: {
    options: [
      'glP89HQPH',
      'PvhAKPvc8',
      'uyxhsUNZq',
      'uTj0cEPb8',
      'vVjMhdARB',
      'K8oqZ2hdT',
      'QKKRwxza_',
      'l6T5PxAnq',
      'FXIjKjDPL',
      'tVxl2ewSx',
      'z1ffbxAcs',
      'pmi554o5Z',
      'Cr7AsQCPR',
      'iqrSONtoO',
      'jFWx1BeuK',
    ],
    optionTitles: [
      'Expanded',
      'Hover',
      'Node-XL',
      'Node-LG',
      'Node-MD',
      'Node-SM',
      'Node-XS',
      'Variant 8',
      'Line',
      'Variant 10',
      'Variant 13',
      'Clockface',
      'Compact',
      'Variant 14',
      'ticker',
    ],
    title: 'Variant',
    type: ControlType9.Enum,
  },
  vZATQhujj: {
    defaultValue: 'Board Dimensions',
    displayTextArea: false,
    placeholder: '',
    title: 'Decision Title',
    type: ControlType9.String,
  },
  NvMMjvlBy: {
    defaultValue: 'Please provide the dimensions of the drawing board (width, height, and depth).',
    displayTextArea: true,
    placeholder: '',
    title: 'Decision Description',
    type: ControlType9.String,
  },
  iDjlfHFIv: { defaultValue: 'C-2', displayTextArea: false, title: 'Decision Index', type: ControlType9.String, },
  LNNJy1jnm: {
    defaultValue: 'FNw58JHcH',
    options: ['FNw58JHcH', 'pXF5zK4BB', 'hjUA_q4Xo', 'R8yTQtly5',],
    optionTitles: ['Input', 'Slider', 'Choice', 'Boolean',],
    title: 'Decision Type Normal',
    type: ControlType9.Enum,
  },
  zgF6TYXbc: {
    defaultValue: 'LNmrAjenO',
    options: ['LNmrAjenO', 'nWf8FHUKr', 'M5KMhG7fk', 'IHKJNDltd',],
    optionTitles: ['Multiple Choice', 'Slider', 'Input', 'Boolean',],
    title: 'Decision Type Small',
    type: ControlType9.Enum,
  },
  K5BysgXsx: (NodeTypeControls2 === null || NodeTypeControls2 === void 0 ? void 0 : NodeTypeControls2['eePEcZAuW']) &&
    { ...NodeTypeControls2['eePEcZAuW'], defaultValue: 'zAJDHJhkW', hidden: void 0, title: 'Choice', },
  OJMet4Rjs: { defaultValue: 'Choice 1', placeholder: 'Choice 1', title: 'Choice 1', type: ControlType9.String, },
  qQ_BO9qk8: { defaultValue: 'Choice 2', placeholder: 'Choice 2', title: 'Choice 2', type: ControlType9.String, },
  eZ_WIO8yz: { defaultValue: 'Choice 3', placeholder: 'Choice 3', title: 'Choice 3', type: ControlType9.String, },
  Jdv7M1lr6: { defaultValue: 'A', placeholder: 'A', title: 'Scale X1', type: ControlType9.String, },
  C0xbi_CXP: { defaultValue: 'B', displayTextArea: false, placeholder: 'B', title: 'Scale X2', type: ControlType9.String, },
  k4ezTegiq: { defaultValue: 50, displayStepper: false, max: 100, min: 0, step: 10, title: 'Slider Value', type: ControlType9.Number, },
  VOTcq87Vu: { defaultValue: true, title: 'Streaming', type: ControlType9.Boolean, },
  fxy_09app: {
    defaultValue: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
    displayTextArea: true,
    title: 'Input',
    type: ControlType9.String,
  },
  JM8R5zcqV: { defaultValue: false, title: 'Boolean Toggle', type: ControlType9.Boolean, },
  cRMlaJb1_: { defaultValue: 'rgb(255, 255, 255)', title: 'Color', type: ControlType9.Color, },
  Z93yscm8P: { defaultValue: 'A-1', displayTextArea: false, placeholder: 'A-1', title: ' Dependency Index 1', type: ControlType9.String, },
  Xo22rvSfa: { defaultValue: 'B-2', placeholder: 'B-2', title: 'Dependency Index 2', type: ControlType9.String, },
  bGyluXMcm: { defaultValue: 'C-2', displayTextArea: false, title: 'Dependency Index 3', type: ControlType9.String, },
  TTpsRmZqr: { defaultValue: true, title: 'Dependency Visible', type: ControlType9.Boolean, },
  Gb15ibvMU: (NodeDetailControls === null || NodeDetailControls === void 0 ? void 0 : NodeDetailControls['variant']) &&
    { ...NodeDetailControls['variant'], defaultValue: 'wZ2vnzihB', hidden: void 0, title: 'Hover', },
  aysnwkSZE: { title: 'Tap', type: ControlType9.EventHandler, },
},);
addFonts4(FramerC_odUWZqr, [
  { family: 'PP Supply Sans Light', url: 'https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf', },
  { family: 'PP Supply Sans Medium', url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf', },
  { family: 'PP Supply Sans Semibold', url: 'https://framerusercontent.com/assets/pTQFOoSKHkP8mTGMzsUIQQeIh4.ttf', },
  ...NodeDetailFonts,
  ...TypewriterFonts2,
  ...NodeTypeFonts2,
],);

// https :https://framerusercontent.com/modules/dL0m3LArmiMN513smqCL/BWDOt3IkmVrwDb8XxU9m/pSxPslti_.js
import { jsx as _jsx7, jsxs as _jsxs5, } from 'react/jsx-runtime';
import {
  addFonts as addFonts5,
  addPropertyControls as addPropertyControls7,
  ControlType as ControlType10,
  cx as cx5,
  getFonts as getFonts4,
  RichText as RichText4,
  SVG as SVG5,
  useActiveVariantCallback as useActiveVariantCallback3,
  useLocaleInfo as useLocaleInfo5,
  useVariantState as useVariantState5,
  withCSS as withCSS7,
} from 'unframer';
import { LayoutGroup as LayoutGroup5, motion as motion6, MotionConfigContext as MotionConfigContext5, } from 'unframer';
import * as React7 from 'react';
var TypewriterFonts3 = getFonts4(TypeWriter,);
var cycleOrder5 = ['R_0SntBXV', 'RspHZjbvA', 'KzyHUFutd', 'lR29aQ4aC', 'CDTOPoYwJ', 'AKBlJHd8s', 'NfdKYRGKU',];
var serializationHash4 = 'framer-10NzW';
var variantClassNames5 = {
  AKBlJHd8s: 'framer-v-14ttska',
  CDTOPoYwJ: 'framer-v-wmnvsy',
  KzyHUFutd: 'framer-v-1u2jgkx',
  lR29aQ4aC: 'framer-v-15ekw7u',
  NfdKYRGKU: 'framer-v-n0zl46',
  R_0SntBXV: 'framer-v-1xd6uv3',
  RspHZjbvA: 'framer-v-15mvvd2',
};
function addPropertyOverrides5(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions5 = {
  CDTOPoYwJ: { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', },
  RspHZjbvA: { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
};
var transformTemplate = (_2, t3,) => `translate(-50%, -50%) ${t3}`;
var transition1 = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var Transition5 = ({ value, children, },) => {
  const config = React7.useContext(MotionConfigContext5,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React7.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx7(MotionConfigContext5.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap5 = {
  'Variant 7': 'NfdKYRGKU',
  expanded: 'KzyHUFutd',
  generate: 'AKBlJHd8s',
  logo: 'CDTOPoYwJ',
  search: 'R_0SntBXV',
  seed: 'RspHZjbvA',
  type: 'lR29aQ4aC',
};
var getProps5 = ({ height, id, tap3, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap5[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'R_0SntBXV',
    WPG5b_gus: tap3 !== null && tap3 !== void 0 ? tap3 : props.WPG5b_gus,
  };
};
var createLayoutDependency5 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component5 = /* @__PURE__ */ React7.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo5();
  const { style, className: className2, layoutId, variant, WPG5b_gus, ...restProps } = getProps5(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState5({
    cycleOrder: cycleOrder5,
    defaultVariant: 'R_0SntBXV',
    transitions: transitions5,
    variant,
    variantClassNames: variantClassNames5,
  },);
  const layoutDependency = createLayoutDependency5(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback3(baseVariant,);
  const onTap1dk9sfn = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    if (WPG5b_gus) {
      const res = await WPG5b_gus(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React7.useRef(null,);
  const isDisplayed = () => {
    if (['RspHZjbvA', 'CDTOPoYwJ',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === 'KzyHUFutd') {
      return true;
    }
    return false;
  };
  const isDisplayed2 = () => {
    if (baseVariant === 'KzyHUFutd') {
      return false;
    }
    return true;
  };
  const isDisplayed3 = () => {
    if (['lR29aQ4aC', 'AKBlJHd8s',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed4 = () => {
    if (['lR29aQ4aC', 'AKBlJHd8s',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed5 = () => {
    if (['RspHZjbvA', 'CDTOPoYwJ', 'NfdKYRGKU',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed6 = () => {
    if (baseVariant === 'AKBlJHd8s') {
      return false;
    }
    return true;
  };
  const isDisplayed7 = () => {
    if (baseVariant === 'AKBlJHd8s') {
      return true;
    }
    return false;
  };
  const defaultLayoutId = React7.useId();
  const sharedStyleClassNames = [];
  return /* @__PURE__ */ _jsx7(LayoutGroup5, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx7(Transition5, {
      value: transition,
      children: /* @__PURE__ */ _jsx7(motion6.div, {
        ...restProps,
        animate: variants,
        className: cx5(serializationHash4, ...sharedStyleClassNames, 'framer-1xd6uv3', className2, classNames,),
        'data-framer-name': 'search',
        'data-highlight': true,
        initial: variant,
        layoutDependency,
        layoutId: 'R_0SntBXV',
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onTap: onTap1dk9sfn,
        onTapCancel: () => setGestureState({ isPressed: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        ref: ref !== null && ref !== void 0 ? ref : ref1,
        style: { ...style, },
        ...addPropertyOverrides5(
          {
            AKBlJHd8s: { 'data-framer-name': 'generate', },
            CDTOPoYwJ: { 'data-framer-name': 'logo', },
            KzyHUFutd: { 'data-framer-name': 'expanded', },
            lR29aQ4aC: { 'data-framer-name': 'type', },
            NfdKYRGKU: { 'data-framer-name': 'Variant 7', },
            RspHZjbvA: { 'data-framer-name': 'seed', },
          },
          baseVariant,
          gestureVariant,
        ),
        children: /* @__PURE__ */ _jsx7(Transition5, {
          ...addPropertyOverrides5({ CDTOPoYwJ: { value: transition1, }, }, baseVariant, gestureVariant,),
          children: /* @__PURE__ */ _jsx7(motion6.div, {
            className: 'framer-th6quy',
            'data-framer-name': 'Component 1',
            layoutDependency,
            layoutId: 'sFQLDloAD',
            style: {
              backdropFilter: 'blur(5px)',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderBottomLeftRadius: 28,
              borderBottomRightRadius: 28,
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
              boxShadow: '0px 1px 26px 2px rgba(255, 255, 255, 0.1)',
              WebkitBackdropFilter: 'blur(5px)',
            },
            transformTemplate,
            variants: {
              CDTOPoYwJ: {
                backgroundColor: 'rgba(255, 255, 255, 0.71)',
                borderBottomLeftRadius: 335,
                borderBottomRightRadius: 335,
                borderTopLeftRadius: 335,
                borderTopRightRadius: 335,
              },
              KzyHUFutd: {
                backdropFilter: 'blur(14px)',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                WebkitBackdropFilter: 'blur(14px)',
              },
              RspHZjbvA: {
                borderBottomLeftRadius: 66,
                borderBottomRightRadius: 66,
                borderTopLeftRadius: 66,
                borderTopRightRadius: 66,
                boxShadow: '0px 1px 26px 2px rgba(0,0,0,0.25)',
              },
            },
            ...addPropertyOverrides5(
              {
                AKBlJHd8s: { transformTemplate: void 0, },
                lR29aQ4aC: { transformTemplate: void 0, },
                NfdKYRGKU: { transformTemplate: void 0, },
              },
              baseVariant,
              gestureVariant,
            ),
            children: /* @__PURE__ */ _jsxs5(motion6.div, {
              className: 'framer-102rpj4',
              'data-framer-name': 'state-layer',
              layoutDependency,
              layoutId: 'ldDmdZXhT',
              children: [
                /* @__PURE__ */ _jsxs5(motion6.div, {
                  className: 'framer-1x3xeex',
                  'data-framer-name': 'Frame 1066',
                  layoutDependency,
                  layoutId: 'MrqGHeMQA',
                  style: {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderBottomLeftRadius: 32,
                    borderBottomRightRadius: 32,
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                  },
                  variants: {
                    AKBlJHd8s: { backgroundColor: 'rgba(255, 255, 255, 0.3)', },
                    CDTOPoYwJ: {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      borderBottomLeftRadius: 75,
                      borderBottomRightRadius: 75,
                      borderTopLeftRadius: 75,
                      borderTopRightRadius: 75,
                    },
                    NfdKYRGKU: { backgroundColor: 'rgba(255, 255, 255, 0.5)', },
                    RspHZjbvA: {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      borderBottomLeftRadius: 75,
                      borderBottomRightRadius: 75,
                      borderTopLeftRadius: 75,
                      borderTopRightRadius: 75,
                    },
                  },
                  children: [
                    isDisplayed() && /* @__PURE__ */ _jsx7(motion6.div, {
                      className: 'framer-onwzwe',
                      'data-framer-name': 'Leading-icon-button',
                      layoutDependency,
                      layoutId: 'LP0LOwP3R',
                      children: /* @__PURE__ */ _jsx7(motion6.div, {
                        className: 'framer-1d3you',
                        'data-framer-name': 'container',
                        layoutDependency,
                        layoutId: 'p3ZJaGqF2',
                        style: {
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                        children: /* @__PURE__ */ _jsx7(motion6.div, {
                          className: 'framer-1klpfuo',
                          'data-framer-name': 'state-layer',
                          layoutDependency,
                          layoutId: 'EmVl06lFH',
                          children: /* @__PURE__ */ _jsxs5(motion6.div, {
                            className: 'framer-4hz2zg',
                            'data-framer-name': 'Icon',
                            layoutDependency,
                            layoutId: 'QzLvSZx_y',
                            children: [
                              isDisplayed1() && /* @__PURE__ */ _jsx7(SVG5, {
                                className: 'framer-1pd2dzy',
                                'data-framer-name': 'icon',
                                fill: 'rgba(0,0,0,1)',
                                intrinsicHeight: 16,
                                intrinsicWidth: 17,
                                layoutDependency,
                                layoutId: 'iYV9LkFzg',
                                svg:
                                  '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.5 7H4.33L9.92 1.41L8.5 0L0.5 8L8.5 16L9.91 14.59L4.33 9H16.5V7Z" fill="#3F484A"/>\n</svg>\n',
                                withExternalLayout: true,
                              },),
                              isDisplayed2() && /* @__PURE__ */ _jsx7(SVG5, {
                                className: 'framer-2jm16e',
                                'data-framer-name': 'icon',
                                fill: 'rgba(0,0,0,1)',
                                intrinsicHeight: 12,
                                intrinsicWidth: 18,
                                layoutDependency,
                                layoutId: 'LcWaG1b2J',
                                svg:
                                  '<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z" fill="#3F484A"/>\n</svg>\n',
                                withExternalLayout: true,
                              },),
                            ],
                          },),
                        },),
                      },),
                    },),
                    isDisplayed() && /* @__PURE__ */ _jsxs5(motion6.div, {
                      className: 'framer-a5vvyf',
                      'data-framer-name': 'Content',
                      layoutDependency,
                      layoutId: 'dHgJhO3P9',
                      children: [
                        isDisplayed3() && /* @__PURE__ */ _jsx7(RichText4, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                            children: /* @__PURE__ */ _jsx7(motion6.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFZhcmlhYmxl',
                                '--framer-font-family': '"PP Supply Sans Variable", sans-serif',
                                '--framer-letter-spacing': '0.5px',
                                '--framer-line-height': '24px',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                              },
                              children: 'Your idea begins here...',
                            },),
                          },),
                          className: 'framer-er2jrd',
                          'data-framer-name': 'supporting-text',
                          fonts: ['CUSTOM;PP Supply Sans Variable',],
                          layoutDependency,
                          layoutId: 'KO8mkxbXv',
                          style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                          ...addPropertyOverrides5(
                            {
                              NfdKYRGKU: {
                                children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                                  children: /* @__PURE__ */ _jsx7(motion6.p, {
                                    style: {
                                      '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFZhcmlhYmxl',
                                      '--framer-font-family': '"PP Supply Sans Variable", sans-serif',
                                      '--framer-letter-spacing': '0.5px',
                                      '--framer-line-height': '24px',
                                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                                    },
                                    children: 'OUTLINE',
                                  },),
                                },),
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                        isDisplayed4() && /* @__PURE__ */ _jsx7(motion6.div, {
                          className: 'framer-b3bbqg',
                          'data-framer-name': 'Typed Content',
                          layoutDependency,
                          layoutId: 'ooGcjaCIs',
                          children: /* @__PURE__ */ _jsx7(motion6.div, {
                            className: 'framer-q46j6z-container',
                            layoutDependency,
                            layoutId: 'wQ8u93V0Q-container',
                            children: /* @__PURE__ */ _jsx7(TypeWriter, {
                              autoStart: true,
                              caretVisibility: true,
                              color: 'rgb(0, 0, 0)',
                              cursor: '|',
                              cursorColor: 'rgb(153, 153, 153)',
                              delayNumber: 0.1,
                              delayType: true,
                              font: {
                                fontFamily: 'PP Supply Sans',
                                fontSize: 24,
                                fontWeight: 300,
                                letterSpacing: 0,
                                lineHeight: 2.2,
                                lineHeightPixels: 100,
                                lineHeightType: true,
                                offset: 1.5,
                                textAlign: 'left',
                                whiteSpace: 'nowrap',
                              },
                              height: '100%',
                              id: 'wQ8u93V0Q',
                              layoutId: 'wQ8u93V0Q',
                              loop: true,
                              pauseFor: 1,
                              split: false,
                              style: { height: '100%', width: '100%', },
                              tag: 'heading1',
                              text: 'a tool that enhances human cognition',
                              width: '100%',
                              ...addPropertyOverrides5(
                                {
                                  AKBlJHd8s: {
                                    delayNumber: 0.05,
                                    delayType: false,
                                    font: {
                                      fontFamily: 'PP Supply Sans Light',
                                      fontSize: 22.5,
                                      fontWeight: 300,
                                      letterSpacing: 0,
                                      lineHeight: 2.3,
                                      lineHeightPixels: 100,
                                      lineHeightType: true,
                                      offset: 3,
                                      textAlign: 'left',
                                      whiteSpace: 'nowrap',
                                    },
                                    pauseFor: 0.5,
                                    split: true,
                                    text: 'outline report summary proposal presentation book essay',
                                  },
                                  lR29aQ4aC: {
                                    delayNumber: 0.04,
                                    delayType: false,
                                    font: {
                                      fontFamily: 'PP Supply Sans Light',
                                      fontSize: 19,
                                      fontWeight: 300,
                                      letterSpacing: 0,
                                      lineHeight: 2.5,
                                      lineHeightPixels: 100,
                                      lineHeightType: true,
                                      offset: 2,
                                      textAlign: 'left',
                                      whiteSpace: 'nowrap',
                                    },
                                    loop: false,
                                  },
                                },
                                baseVariant,
                                gestureVariant,
                              ),
                            },),
                          },),
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs5(motion6.div, {
                      className: 'framer-o3gcmt',
                      'data-framer-name': 'Trailing-Elements',
                      layoutDependency,
                      layoutId: 'kDcsPSPnH',
                      children: [
                        isDisplayed5() && /* @__PURE__ */ _jsx7(motion6.div, {
                          className: 'framer-8y7dsi',
                          'data-framer-name': '1st trailing-icon',
                          layoutDependency,
                          layoutId: 'nKrJlDrIs',
                          children: /* @__PURE__ */ _jsx7(motion6.div, {
                            className: 'framer-vyt6dv',
                            'data-framer-name': 'container',
                            layoutDependency,
                            layoutId: 'PocSIdTw3',
                            style: {
                              borderBottomLeftRadius: 100,
                              borderBottomRightRadius: 100,
                              borderTopLeftRadius: 100,
                              borderTopRightRadius: 100,
                            },
                            children: /* @__PURE__ */ _jsx7(motion6.div, {
                              className: 'framer-1o52rms',
                              'data-framer-name': 'state-layer',
                              layoutDependency,
                              layoutId: 'kDzc7Cncp',
                              children: /* @__PURE__ */ _jsxs5(motion6.div, {
                                className: 'framer-1xo5sxg',
                                'data-framer-name': 'Icon',
                                layoutDependency,
                                layoutId: 'mPD9hz3KO',
                                children: [
                                  isDisplayed6() && /* @__PURE__ */ _jsx7(SVG5, {
                                    className: 'framer-dpkc67',
                                    'data-framer-name': 'icon',
                                    fill: 'rgba(0,0,0,1)',
                                    intrinsicHeight: 18,
                                    intrinsicWidth: 18,
                                    layoutDependency,
                                    layoutId: 'E4d6wJpmJ',
                                    svg:
                                      '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.26 10.77L17.99 16.5L16.5 17.99L10.77 12.26C9.7 13.03 8.41 13.5 7 13.5C3.41 13.5 0.5 10.59 0.5 7C0.5 3.41 3.41 0.5 7 0.5C10.59 0.5 13.5 3.41 13.5 7C13.5 8.41 13.03 9.7 12.26 10.77ZM7 2.5C4.51 2.5 2.5 4.51 2.5 7C2.5 9.49 4.51 11.5 7 11.5C9.49 11.5 11.5 9.49 11.5 7C11.5 4.51 9.49 2.5 7 2.5Z" fill="#3F484A"/>\n</svg>\n',
                                    withExternalLayout: true,
                                  },),
                                  isDisplayed7() && /* @__PURE__ */ _jsx7(SVG5, {
                                    className: 'framer-11pjihq',
                                    'data-framer-name': 'autorenew_FILL0_wght200_GRAD0_opsz24 1',
                                    fill: 'rgba(0,0,0,1)',
                                    intrinsicHeight: 24,
                                    intrinsicWidth: 24,
                                    layoutDependency,
                                    layoutId: 'kVysVdybG',
                                    svg:
                                      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M5.5 12.0499C5.5 12.3679 5.52307 12.6881 5.56922 13.0105C5.61539 13.333 5.69296 13.6512 5.80192 13.9653C5.84679 14.1076 5.84167 14.2439 5.78655 14.374C5.73142 14.5041 5.64295 14.5955 5.52115 14.648C5.39552 14.7044 5.26763 14.7073 5.1375 14.6567C5.00737 14.606 4.91987 14.5096 4.875 14.3672C4.74167 13.9967 4.64583 13.6147 4.5875 13.2211C4.52917 12.8275 4.5 12.4371 4.5 12.0499C4.5 9.95763 5.23012 8.17623 6.69037 6.70573C8.15064 5.23521 9.92052 4.49995 12 4.49995H13.3865L11.6404 2.7538C11.5468 2.66022 11.4968 2.54547 11.4904 2.40957C11.484 2.27367 11.534 2.15252 11.6404 2.0461C11.7468 1.93968 11.8647 1.88647 11.9942 1.88647C12.1237 1.88647 12.2417 1.93968 12.3481 2.0461L14.7365 4.43457C14.8981 4.59611 14.9789 4.78457 14.9789 4.99995C14.9789 5.21533 14.8981 5.40379 14.7365 5.56532L12.3481 7.9538C12.2545 8.04738 12.1397 8.09738 12.0038 8.1038C11.8679 8.11022 11.7468 8.06022 11.6404 7.9538C11.534 7.84738 11.4808 7.72943 11.4808 7.59995C11.4808 7.47047 11.534 7.35252 11.6404 7.2461L13.3865 5.49995H12C10.1923 5.49995 8.65706 6.13552 7.39423 7.40667C6.13141 8.67784 5.5 10.2256 5.5 12.0499ZM18.5 11.95C18.5 11.632 18.4769 11.3118 18.4308 10.9894C18.3846 10.6669 18.307 10.3487 18.1981 10.0346C18.1532 9.89226 18.1583 9.75603 18.2135 9.6259C18.2686 9.49578 18.3571 9.40444 18.4789 9.35188C18.6045 9.29546 18.7292 9.29258 18.8529 9.34323C18.9766 9.39386 19.0609 9.49033 19.1058 9.63265C19.2391 10.0031 19.3381 10.3852 19.4029 10.7788C19.4676 11.1724 19.5 11.5628 19.5 11.95C19.5 14.0423 18.7699 15.8237 17.3096 17.2942C15.8494 18.7647 14.0795 19.5 12 19.5H10.6135L12.3596 21.2461C12.4532 21.3397 12.5032 21.4544 12.5096 21.5904C12.516 21.7262 12.466 21.8474 12.3596 21.9538C12.2532 22.0602 12.1353 22.1134 12.0058 22.1134C11.8763 22.1134 11.7583 22.0602 11.6519 21.9538L9.26345 19.5653C9.10192 19.4038 9.02115 19.2153 9.02115 19C9.02115 18.7846 9.10192 18.5961 9.26345 18.4346L11.6519 16.0461C11.7455 15.9525 11.8603 15.9025 11.9962 15.8961C12.1321 15.8897 12.2532 15.9397 12.3596 16.0461C12.466 16.1525 12.5192 16.2705 12.5192 16.4C12.5192 16.5294 12.466 16.6474 12.3596 16.7538L10.6135 18.5H12C13.8077 18.5 15.3429 17.8644 16.6058 16.5932C17.8686 15.3221 18.5 13.7743 18.5 11.95Z" fill="black"/>\n<path d="M14.4473 12C14.4473 13.3516 13.3516 14.4473 12 14.4473C10.6484 14.4473 9.55273 13.3516 9.55273 12C9.55273 10.6484 10.6484 9.55273 12 9.55273C13.3516 9.55273 14.4473 10.6484 14.4473 12Z" fill="black"/>\n</svg>\n',
                                    withExternalLayout: true,
                                  },),
                                ],
                              },),
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx7(motion6.div, {
                          className: 'framer-1togmrv',
                          layoutDependency,
                          layoutId: 'BHWuc6wgS',
                          style: {
                            backgroundColor: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66))',
                            borderBottomLeftRadius: 108,
                            borderBottomRightRadius: 108,
                            borderTopLeftRadius: 108,
                            borderTopRightRadius: 108,
                            boxShadow: 'none',
                          },
                          variants: { CDTOPoYwJ: { boxShadow: 'inset 0px 1px 32px 9px rgba(255, 255, 255, 0.05)', }, },
                          children: /* @__PURE__ */ _jsx7(Transition5, {
                            value: transition1,
                            ...addPropertyOverrides5(
                              { CDTOPoYwJ: { value: void 0, }, RspHZjbvA: { value: void 0, }, },
                              baseVariant,
                              gestureVariant,
                            ),
                            children: /* @__PURE__ */ _jsx7(SVG5, {
                              className: 'framer-wmmfv',
                              'data-framer-name': 'Frame 15',
                              layout: 'position',
                              layoutDependency,
                              layoutId: 'eRNDyXM4I',
                              opacity: 1,
                              svg:
                                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27 22"><path d="M 11.649 9.11 C 12.525 8.178 13.093 7.038 13.661 5.899 C 14.991 3.229 16.322 0.559 21.605 0.559 L 23.342 0.559 C 24.883 0.559 26.024 1.808 26.023 3.349 C 26.023 4.889 24.774 6.137 23.233 6.137 L 21.604 6.137 C 16.321 6.137 14.99 8.373 13.66 10.608 C 13.539 10.81 13.419 11.012 13.295 11.213 C 13.419 11.416 13.539 11.62 13.66 11.824 C 14.99 14.082 16.321 16.34 21.604 16.34 L 23.472 16.34 C 24.881 16.34 26.023 17.481 26.023 18.89 C 26.024 20.299 24.881 21.441 23.472 21.441 L 21.605 21.441 C 16.322 21.441 14.991 18.89 13.661 16.34 C 13.095 15.256 12.53 14.172 11.662 13.284 C 10.486 14.339 8.755 15.079 5.715 15.079 L 4.863 15.079 C 2.716 15.079 0.976 13.339 0.976 11.194 C 0.976 9.048 2.716 7.309 4.863 7.309 L 5.715 7.309 C 8.744 7.309 10.474 8.051 11.649 9.11 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                              svgContentId: 3105722239,
                              withExternalLayout: true,
                              ...addPropertyOverrides5(
                                {
                                  CDTOPoYwJ: {
                                    svg:
                                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 135 117"><g><defs><path d="M 59.993 50.348 C 63.78 46.328 66.238 41.414 68.695 36.5 C 74.453 24.986 80.21 13.472 103.068 13.472 L 110.581 13.472 C 117.249 13.472 122.184 18.859 122.183 25.503 C 122.181 32.145 116.777 37.529 110.11 37.529 L 103.064 37.529 C 80.206 37.529 74.448 47.169 68.691 56.809 C 68.17 57.681 67.649 58.553 67.115 59.418 C 67.649 60.292 68.17 61.173 68.691 62.054 C 74.448 71.79 80.206 81.527 103.064 81.527 L 111.143 81.527 C 117.239 81.527 122.181 86.45 122.183 92.524 C 122.184 98.6 117.241 103.526 111.143 103.526 L 103.068 103.526 C 80.21 103.526 74.453 92.527 68.695 81.527 C 66.249 76.854 63.803 72.181 60.046 68.352 C 54.959 72.898 47.469 76.089 34.318 76.089 L 30.631 76.089 C 21.344 76.089 13.815 68.588 13.815 59.335 C 13.815 50.081 21.344 42.58 30.631 42.58 L 34.318 42.58 C 47.423 42.58 54.907 45.781 59.993 50.348 Z" id="a1241z"></path><filter id="a1243z" x="-25.2%" y="-30.3%" width="150.2%" height="160.5%" filterUnits="objectBoundingBox"><feOffset dx="0" dy="0" in="SourceAlpha" result="a1245z"></feOffset><feGaussianBlur stdDeviation="6.5" in="a1245z" result="a1246z"></feGaussianBlur><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.09 0" type="matrix" in="a1246z" result="a1247z"></feColorMatrix></filter><filter id="a1248z" x="-0.9%" y="-2.2%" width="101.8%" height="104.3%" filterUnits="objectBoundingBox"><feGaussianBlur stdDeviation="0" in="SourceAlpha" result="a1250z"></feGaussianBlur><feOffset dx="-1" dy="-2" in="a1250z" result="a1251z"></feOffset><feComposite in="a1251z" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="a1252z"></feComposite><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0" type="matrix" in="a1252z" result="a1253z"></feColorMatrix></filter></defs><g filter="url(#a1243z)"><use fill="black" fill-opacity="1" stroke="black" stroke-opacity="0" stroke-width="0" xlink:href="#a1241z" clip-path="url(#a1242z)"></use></g><use xlink:href="#a1241z" fill="hsl(0, 0%, 100%)" clip-path="url(#a1242z)"></use><use fill="black" fill-opacity="1" filter="url(#a1248z)" xlink:href="#a1241z"></use></g></svg>',
                                    svgContentId: 4012248618,
                                  },
                                  RspHZjbvA: {
                                    svg:
                                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 42"><path d="M 21.45 17.377 C 23.129 15.59 24.219 13.406 25.308 11.222 C 27.861 6.105 30.414 0.988 40.549 0.988 L 43.88 0.988 C 46.837 0.988 49.025 3.382 49.024 6.335 C 49.024 9.287 46.627 11.679 43.671 11.679 L 40.547 11.679 C 30.412 11.679 27.859 15.964 25.306 20.248 C 25.075 20.636 24.844 21.024 24.608 21.408 C 24.844 21.796 25.075 22.188 25.306 22.579 C 27.859 26.907 30.412 31.234 40.547 31.234 L 44.129 31.234 C 46.832 31.234 49.024 33.422 49.024 36.122 C 49.025 38.822 46.833 41.012 44.129 41.012 L 40.549 41.012 C 30.414 41.012 27.861 36.123 25.308 31.234 C 24.224 29.157 23.139 27.08 21.473 25.378 C 19.218 27.399 15.897 28.817 10.065 28.817 L 8.431 28.817 C 4.313 28.817 0.975 25.483 0.975 21.371 C 0.975 17.258 4.313 13.925 8.431 13.925 L 10.065 13.925 C 15.876 13.925 19.195 15.347 21.45 17.377 Z" fill="hsl(0, 0%, 100%)"></path></svg>',
                                    svgContentId: 3097924344,
                                  },
                                },
                                baseVariant,
                                gestureVariant,
                              ),
                            },),
                          },),
                        },),
                      ],
                    },),
                    isDisplayed7() && /* @__PURE__ */ _jsx7(motion6.div, {
                      className: 'framer-12cmvwa',
                      'data-framer-name': 'Style=outlined, State=enabled, Selected=true, Show icon=false',
                      layoutDependency,
                      layoutId: 'PemICCCY5',
                      style: {
                        backgroundColor: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239))',
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        boxShadow: 'inset -1px -1px 0px 0px rgba(0, 0, 0, 0.15)',
                      },
                      children: /* @__PURE__ */ _jsx7(motion6.div, {
                        className: 'framer-1ko8d44',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'p96NAqcgT',
                        children: /* @__PURE__ */ _jsx7(RichText4, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                            children: /* @__PURE__ */ _jsx7(motion6.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIFJlZ3VsYXI=',
                                '--framer-font-family': '"PP Supply Sans Regular", "PP Supply Sans Regular Placeholder", sans-serif',
                                '--framer-letter-spacing': '0.1px',
                                '--framer-line-height': '20px',
                                '--framer-text-alignment': 'center',
                              },
                              children: 'SYNTHESIZE:',
                            },),
                          },),
                          className: 'framer-1xc11ty',
                          'data-framer-name': 'label-text',
                          fonts: ['CUSTOM;PP Supply Sans Regular',],
                          layoutDependency,
                          layoutId: 'CHq8RWHnu',
                          style: { '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'center',
                          withExternalLayout: true,
                        },),
                      },),
                    },),
                  ],
                },),
                isDisplayed1() && /* @__PURE__ */ _jsxs5(motion6.div, {
                  className: 'framer-4fuql9',
                  'data-framer-name': 'Frame 1069',
                  layoutDependency,
                  layoutId: 'qBBzUFy05',
                  children: [
                    /* @__PURE__ */ _jsx7(motion6.div, {
                      className: 'framer-9xr0lm',
                      'data-framer-name': 'Button',
                      layoutDependency,
                      layoutId: 'Rnbe2ugWo',
                      style: {
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                      children: isDisplayed1() && /* @__PURE__ */ _jsxs5(motion6.div, {
                        className: 'framer-jg6s93',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'a8kznWgNw',
                        children: [
                          /* @__PURE__ */ _jsx7(motion6.div, {
                            className: 'framer-1trg1ag',
                            'data-framer-name': 'icon',
                            layoutDependency,
                            layoutId: 'woNxE8IKQ',
                            children: /* @__PURE__ */ _jsx7(SVG5, {
                              className: 'framer-qsehqp',
                              'data-framer-name': 'upload_file_FILL0_wght300_GRAD0_opsz24',
                              layout: 'position',
                              layoutDependency,
                              layoutId: 'CYT15kUAK',
                              opacity: 1,
                              svg:
                                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18"><path d="M 8.438 13.788 L 9.562 13.788 L 9.562 10.462 L 10.95 11.85 L 11.74 11.048 L 9 8.308 L 6.26 11.048 L 7.062 11.838 L 8.438 10.462 Z M 4.731 16.125 C 4.352 16.125 4.031 15.994 3.769 15.731 C 3.506 15.469 3.375 15.148 3.375 14.769 L 3.375 3.231 C 3.375 2.852 3.506 2.531 3.769 2.269 C 4.031 2.006 4.352 1.875 4.731 1.875 L 10.688 1.875 L 14.625 5.812 L 14.625 14.769 C 14.625 15.148 14.494 15.469 14.231 15.731 C 13.969 15.994 13.648 16.125 13.269 16.125 Z M 10.125 6.375 L 10.125 3 L 4.731 3 C 4.673 3 4.62 3.024 4.572 3.072 C 4.524 3.12 4.5 3.173 4.5 3.231 L 4.5 14.769 C 4.5 14.827 4.524 14.88 4.572 14.928 C 4.62 14.976 4.673 15 4.731 15 L 13.269 15 C 13.327 15 13.38 14.976 13.428 14.928 C 13.476 14.88 13.5 14.827 13.5 14.769 L 13.5 6.375 Z M 4.5 3 L 4.5 6.375 L 4.5 3 L 4.5 15 Z" fill="rgb(255, 255, 255)"></path></svg>',
                              svgContentId: 3160747625,
                              withExternalLayout: true,
                            },),
                          },),
                          /* @__PURE__ */ _jsx7(RichText4, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                              children: /* @__PURE__ */ _jsx7(motion6.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                  '--framer-font-size': '14px',
                                  '--framer-letter-spacing': '0.1px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-alignment': 'center',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                                },
                                children: 'Add Context',
                              },),
                            },),
                            className: 'framer-1s5l2r8',
                            'data-framer-name': 'label-text',
                            fonts: ['CUSTOM;PP Supply Sans Light',],
                            layoutDependency,
                            layoutId: 'DSeRzKlnX',
                            style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                            verticalAlignment: 'center',
                            withExternalLayout: true,
                          },),
                        ],
                      },),
                    },),
                    /* @__PURE__ */ _jsx7(motion6.div, {
                      className: 'framer-1j7qf8c',
                      'data-framer-name': 'Button',
                      layoutDependency,
                      layoutId: 'ddZNMNSdB',
                      style: {
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                      children: isDisplayed1() && /* @__PURE__ */ _jsxs5(motion6.div, {
                        className: 'framer-r697fa',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'AApLais__',
                        children: [
                          /* @__PURE__ */ _jsx7(motion6.div, {
                            className: 'framer-1l3eqf8',
                            'data-framer-name': 'icon',
                            layoutDependency,
                            layoutId: 'l36JTzfdi',
                            children: /* @__PURE__ */ _jsx7(SVG5, {
                              className: 'framer-lbi8jg',
                              'data-framer-name': 'add_notes_FILL0_wght300_GRAD0_opsz24',
                              layout: 'position',
                              layoutDependency,
                              layoutId: 'XQZ26gtA6',
                              opacity: 1,
                              svg:
                                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18"><path d="M 3.981 15.375 C 3.607 15.375 3.287 15.243 3.022 14.978 C 2.757 14.713 2.625 14.393 2.625 14.019 L 2.625 3.981 C 2.625 3.607 2.757 3.287 3.022 3.022 C 3.287 2.757 3.607 2.625 3.981 2.625 L 14.019 2.625 C 14.393 2.625 14.713 2.757 14.978 3.022 C 15.243 3.287 15.375 3.607 15.375 3.981 L 15.375 8.725 C 15.19 8.646 15.006 8.579 14.82 8.524 C 14.635 8.469 14.445 8.425 14.25 8.393 L 14.25 3.981 C 14.25 3.923 14.226 3.87 14.178 3.822 C 14.13 3.774 14.077 3.75 14.019 3.75 L 3.981 3.75 C 3.923 3.75 3.87 3.774 3.822 3.822 C 3.774 3.87 3.75 3.923 3.75 3.981 L 3.75 14.019 C 3.75 14.077 3.774 14.13 3.822 14.178 C 3.87 14.226 3.923 14.25 3.981 14.25 L 8.374 14.25 C 8.402 14.458 8.443 14.654 8.498 14.839 C 8.553 15.024 8.62 15.203 8.699 15.375 Z M 3.75 13.5 L 3.75 14.25 L 3.75 3.75 L 3.75 8.393 L 3.75 8.337 Z M 5.438 12.476 L 8.45 12.476 C 8.483 12.281 8.532 12.091 8.596 11.906 C 8.661 11.72 8.731 11.536 8.807 11.351 L 5.438 11.351 Z M 5.438 9.562 L 10.193 9.562 C 10.516 9.288 10.861 9.059 11.227 8.874 C 11.593 8.689 11.986 8.557 12.404 8.479 L 12.404 8.438 L 5.438 8.438 Z M 5.438 6.649 L 12.562 6.649 L 12.562 5.524 L 5.438 5.524 Z M 13.5 16.918 C 12.563 16.918 11.767 16.59 11.11 15.933 C 10.453 15.276 10.125 14.48 10.125 13.543 C 10.125 12.607 10.453 11.81 11.11 11.153 C 11.767 10.497 12.563 10.168 13.5 10.168 C 14.437 10.168 15.233 10.497 15.89 11.153 C 16.547 11.81 16.875 12.607 16.875 13.543 C 16.875 14.48 16.547 15.276 15.89 15.933 C 15.233 16.59 14.437 16.918 13.5 16.918 Z M 13.168 15.75 L 13.832 15.75 L 13.832 13.875 L 15.707 13.875 L 15.707 13.212 L 13.832 13.212 L 13.832 11.337 L 13.168 11.337 L 13.168 13.212 L 11.293 13.212 L 11.293 13.875 L 13.168 13.875 Z" fill="rgb(255, 255, 255)"></path></svg>',
                              svgContentId: 4162371026,
                              withExternalLayout: true,
                            },),
                          },),
                          /* @__PURE__ */ _jsx7(RichText4, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                              children: /* @__PURE__ */ _jsx7(motion6.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                  '--framer-font-size': '14px',
                                  '--framer-letter-spacing': '0.1px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-alignment': 'center',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                                },
                                children: 'Import Document',
                              },),
                            },),
                            className: 'framer-16jmr7f',
                            'data-framer-name': 'label-text',
                            fonts: ['CUSTOM;PP Supply Sans Light',],
                            layoutDependency,
                            layoutId: 'ycs7iHzcA',
                            style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                            verticalAlignment: 'center',
                            withExternalLayout: true,
                          },),
                        ],
                      },),
                    },),
                    /* @__PURE__ */ _jsx7(motion6.div, {
                      className: 'framer-1oqfwc7',
                      'data-framer-name': 'Button',
                      layoutDependency,
                      layoutId: 'FKF0FyMcH',
                      style: {
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                      children: isDisplayed1() && /* @__PURE__ */ _jsxs5(motion6.div, {
                        className: 'framer-i9rcfr',
                        'data-framer-name': 'state-layer',
                        layoutDependency,
                        layoutId: 'BZ3pT8Y5b',
                        children: [
                          /* @__PURE__ */ _jsx7(motion6.div, {
                            className: 'framer-1cp1dxx',
                            'data-framer-name': 'icon',
                            layoutDependency,
                            layoutId: 'fwQBSQVFw',
                            children: /* @__PURE__ */ _jsx7(SVG5, {
                              className: 'framer-zi6dr6',
                              'data-framer-name': 'lightbulb_FILL0_wght300_GRAD0_opsz24',
                              layout: 'position',
                              layoutDependency,
                              layoutId: 'tS0dOihda',
                              opacity: 1,
                              svg:
                                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18"><path d="M 9 16.183 C 8.621 16.183 8.294 16.051 8.02 15.789 C 7.745 15.526 7.596 15.206 7.572 14.827 L 10.428 14.827 C 10.404 15.206 10.255 15.526 9.98 15.789 C 9.706 16.051 9.379 16.183 9 16.183 Z M 6.188 13.788 L 6.188 12.663 L 11.812 12.663 L 11.812 13.788 Z M 6.303 11.625 C 5.517 11.137 4.895 10.498 4.437 9.71 C 3.979 8.922 3.75 8.061 3.75 7.125 C 3.75 5.663 4.26 4.423 5.279 3.404 C 6.298 2.385 7.538 1.875 9 1.875 C 10.462 1.875 11.702 2.385 12.721 3.404 C 13.74 4.423 14.25 5.663 14.25 7.125 C 14.25 8.061 14.021 8.922 13.563 9.71 C 13.105 10.498 12.483 11.137 11.697 11.625 Z M 6.638 10.5 L 11.363 10.5 C 11.925 10.1 12.359 9.606 12.666 9.019 C 12.972 8.431 13.125 7.8 13.125 7.125 C 13.125 5.975 12.725 5 11.925 4.2 C 11.125 3.4 10.15 3 9 3 C 7.85 3 6.875 3.4 6.075 4.2 C 5.275 5 4.875 5.975 4.875 7.125 C 4.875 7.8 5.028 8.431 5.334 9.019 C 5.641 9.606 6.075 10.1 6.638 10.5 Z M 9 10.5 Z" fill="rgb(255, 255, 255)"></path></svg>',
                              svgContentId: 615827332,
                              withExternalLayout: true,
                            },),
                          },),
                          /* @__PURE__ */ _jsx7(RichText4, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx7(React7.Fragment, {
                              children: /* @__PURE__ */ _jsx7(motion6.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                  '--framer-font-size': '14px',
                                  '--framer-letter-spacing': '0.1px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-alignment': 'center',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                                },
                                children: 'Random Idea',
                              },),
                            },),
                            className: 'framer-1j2s96v',
                            'data-framer-name': 'label-text',
                            fonts: ['CUSTOM;PP Supply Sans Light',],
                            layoutDependency,
                            layoutId: 'g6U9tFdki',
                            style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                            verticalAlignment: 'center',
                            withExternalLayout: true,
                          },),
                        ],
                      },),
                    },),
                  ],
                },),
              ],
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css6 = [
  '.framer-10NzW[data-border="true"]::after, .framer-10NzW [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-10NzW.framer-b9y4c0, .framer-10NzW .framer-b9y4c0 { display: block; }',
  '.framer-10NzW.framer-1xd6uv3 { cursor: pointer; height: 537px; overflow: hidden; position: relative; width: 1009px; }',
  '.framer-10NzW .framer-th6quy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 50%; width: 360px; }',
  '.framer-10NzW .framer-102rpj4 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: 100%; justify-content: flex-start; overflow: visible; padding: 4px 4px 4px 4px; position: relative; width: 1px; z-index: 1; }',
  '.framer-10NzW .framer-1x3xeex { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-10NzW .framer-onwzwe, .framer-10NzW .framer-8y7dsi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-10NzW .framer-1d3you, .framer-10NzW .framer-vyt6dv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-10NzW .framer-1klpfuo, .framer-10NzW .framer-1o52rms { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }',
  '.framer-10NzW .framer-4hz2zg, .framer-10NzW .framer-1xo5sxg { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }',
  '.framer-10NzW .framer-1pd2dzy { bottom: 4px; flex: none; left: 4px; position: absolute; right: 5px; top: 4px; }',
  '.framer-10NzW .framer-2jm16e { bottom: 6px; flex: none; left: 3px; position: absolute; right: 3px; top: 6px; }',
  '.framer-10NzW .framer-a5vvyf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 49px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-10NzW .framer-er2jrd, .framer-10NzW .framer-1xc11ty, .framer-10NzW .framer-1s5l2r8, .framer-10NzW .framer-16jmr7f, .framer-10NzW .framer-1j2s96v { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-10NzW .framer-b3bbqg { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-10NzW .framer-q46j6z-container { flex: 1 0 0px; height: 50px; position: relative; width: 1px; }',
  '.framer-10NzW .framer-o3gcmt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-10NzW .framer-dpkc67 { bottom: 4px; flex: none; left: 3px; position: absolute; right: 4px; top: 3px; }',
  '.framer-10NzW .framer-11pjihq { bottom: -8px; flex: none; left: -8px; position: absolute; right: -8px; top: -8px; }',
  '.framer-10NzW .framer-1togmrv { flex: none; height: 49px; overflow: visible; position: relative; width: 50px; }',
  '.framer-10NzW .framer-wmmfv { flex: none; height: 22px; left: calc(49.33333333333336% - 27px / 2); position: absolute; top: calc(51.38888888888891% - 22px / 2); width: 27px; }',
  '.framer-10NzW .framer-12cmvwa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 35px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-10NzW .framer-1ko8d44 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 32px; justify-content: center; overflow: visible; padding: 6px 16px 6px 16px; position: relative; width: min-content; }',
  '.framer-10NzW .framer-4fuql9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 4px 4px 4px; position: relative; width: 352px; }',
  '.framer-10NzW .framer-9xr0lm, .framer-10NzW .framer-1j7qf8c, .framer-10NzW .framer-1oqfwc7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
  '.framer-10NzW .framer-jg6s93, .framer-10NzW .framer-r697fa, .framer-10NzW .framer-i9rcfr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 1px; justify-content: center; overflow: visible; padding: 10px 16px 10px 12px; position: relative; width: 100%; }',
  '.framer-10NzW .framer-1trg1ag, .framer-10NzW .framer-1l3eqf8, .framer-10NzW .framer-1cp1dxx { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); overflow: visible; position: relative; width: 18px; }',
  '.framer-10NzW .framer-qsehqp, .framer-10NzW .framer-lbi8jg, .framer-10NzW .framer-zi6dr6 { flex: none; height: 18px; left: 0px; position: absolute; top: 0px; width: 18px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-10NzW .framer-th6quy, .framer-10NzW .framer-102rpj4, .framer-10NzW .framer-1x3xeex, .framer-10NzW .framer-onwzwe, .framer-10NzW .framer-1d3you, .framer-10NzW .framer-1klpfuo, .framer-10NzW .framer-a5vvyf, .framer-10NzW .framer-b3bbqg, .framer-10NzW .framer-o3gcmt, .framer-10NzW .framer-8y7dsi, .framer-10NzW .framer-vyt6dv, .framer-10NzW .framer-1o52rms, .framer-10NzW .framer-12cmvwa, .framer-10NzW .framer-1ko8d44, .framer-10NzW .framer-4fuql9, .framer-10NzW .framer-9xr0lm, .framer-10NzW .framer-jg6s93, .framer-10NzW .framer-1j7qf8c, .framer-10NzW .framer-r697fa, .framer-10NzW .framer-1oqfwc7, .framer-10NzW .framer-i9rcfr { gap: 0px; } .framer-10NzW .framer-th6quy > *, .framer-10NzW .framer-1x3xeex > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-10NzW .framer-th6quy > :first-child, .framer-10NzW .framer-1x3xeex > :first-child, .framer-10NzW .framer-1d3you > :first-child, .framer-10NzW .framer-1klpfuo > :first-child, .framer-10NzW .framer-a5vvyf > :first-child, .framer-10NzW .framer-b3bbqg > :first-child, .framer-10NzW .framer-o3gcmt > :first-child, .framer-10NzW .framer-vyt6dv > :first-child, .framer-10NzW .framer-1o52rms > :first-child, .framer-10NzW .framer-12cmvwa > :first-child, .framer-10NzW .framer-1ko8d44 > :first-child, .framer-10NzW .framer-jg6s93 > :first-child, .framer-10NzW .framer-r697fa > :first-child, .framer-10NzW .framer-i9rcfr > :first-child { margin-left: 0px; } .framer-10NzW .framer-th6quy > :last-child, .framer-10NzW .framer-1x3xeex > :last-child, .framer-10NzW .framer-1d3you > :last-child, .framer-10NzW .framer-1klpfuo > :last-child, .framer-10NzW .framer-a5vvyf > :last-child, .framer-10NzW .framer-b3bbqg > :last-child, .framer-10NzW .framer-o3gcmt > :last-child, .framer-10NzW .framer-vyt6dv > :last-child, .framer-10NzW .framer-1o52rms > :last-child, .framer-10NzW .framer-12cmvwa > :last-child, .framer-10NzW .framer-1ko8d44 > :last-child, .framer-10NzW .framer-jg6s93 > :last-child, .framer-10NzW .framer-r697fa > :last-child, .framer-10NzW .framer-i9rcfr > :last-child { margin-right: 0px; } .framer-10NzW .framer-102rpj4 > *, .framer-10NzW .framer-4fuql9 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-10NzW .framer-102rpj4 > :first-child, .framer-10NzW .framer-onwzwe > :first-child, .framer-10NzW .framer-8y7dsi > :first-child, .framer-10NzW .framer-4fuql9 > :first-child, .framer-10NzW .framer-9xr0lm > :first-child, .framer-10NzW .framer-1j7qf8c > :first-child, .framer-10NzW .framer-1oqfwc7 > :first-child { margin-top: 0px; } .framer-10NzW .framer-102rpj4 > :last-child, .framer-10NzW .framer-onwzwe > :last-child, .framer-10NzW .framer-8y7dsi > :last-child, .framer-10NzW .framer-4fuql9 > :last-child, .framer-10NzW .framer-9xr0lm > :last-child, .framer-10NzW .framer-1j7qf8c > :last-child, .framer-10NzW .framer-1oqfwc7 > :last-child { margin-bottom: 0px; } .framer-10NzW .framer-onwzwe > *, .framer-10NzW .framer-8y7dsi > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-10NzW .framer-1d3you > *, .framer-10NzW .framer-1klpfuo > *, .framer-10NzW .framer-a5vvyf > *, .framer-10NzW .framer-b3bbqg > *, .framer-10NzW .framer-vyt6dv > *, .framer-10NzW .framer-1o52rms > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-10NzW .framer-o3gcmt > *, .framer-10NzW .framer-12cmvwa > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-10NzW .framer-1ko8d44 > *, .framer-10NzW .framer-jg6s93 > *, .framer-10NzW .framer-r697fa > *, .framer-10NzW .framer-i9rcfr > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-10NzW .framer-9xr0lm > *, .framer-10NzW .framer-1j7qf8c > *, .framer-10NzW .framer-1oqfwc7 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }',
  '.framer-10NzW.framer-v-15mvvd2 .framer-th6quy { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 98px); width: 98px; }',
  '.framer-10NzW.framer-v-15mvvd2 .framer-102rpj4, .framer-10NzW.framer-v-1u2jgkx .framer-102rpj4, .framer-10NzW.framer-v-wmnvsy .framer-102rpj4 { flex: none; height: min-content; width: min-content; }',
  '.framer-10NzW.framer-v-15mvvd2 .framer-1x3xeex { height: 90px; width: 90px; }',
  '.framer-10NzW.framer-v-15mvvd2 .framer-1togmrv { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 90px); width: 90px; }',
  '.framer-10NzW.framer-v-15mvvd2 .framer-wmmfv { height: 42px; left: calc(50.00000000000002% - 50px / 2); top: calc(50.00000000000002% - 42px / 2); width: 50px; }',
  '.framer-10NzW.framer-v-1u2jgkx .framer-th6quy { width: min-content; }',
  '.framer-10NzW.framer-v-1u2jgkx .framer-1x3xeex { width: 352px; }',
  '.framer-10NzW.framer-v-1u2jgkx .framer-wmmfv, .framer-10NzW.framer-v-15ekw7u .framer-wmmfv, .framer-10NzW.framer-v-14ttska .framer-wmmfv, .framer-10NzW.framer-v-n0zl46 .framer-wmmfv { left: calc(50.00000000000002% - 27px / 2); top: calc(51.02040816326533% - 22px / 2); }',
  '.framer-10NzW.framer-v-15ekw7u.framer-1xd6uv3 { overflow: visible; }',
  '.framer-10NzW.framer-v-15ekw7u .framer-th6quy { height: 57px; left: calc(50.04955401387514% - min(600px, max(460px, 57.8790882061447%)) / 2); max-width: 600px; min-width: 460px; top: calc(49.90689013035384% - 57px / 2); width: 58%; }',
  '.framer-10NzW.framer-v-wmnvsy .framer-th6quy { width: 186px; }',
  '.framer-10NzW.framer-v-wmnvsy .framer-1x3xeex { height: 178px; width: 178px; }',
  '.framer-10NzW.framer-v-wmnvsy .framer-1togmrv { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 178px); width: 178px; }',
  '.framer-10NzW.framer-v-wmnvsy .framer-wmmfv { height: 117px; left: calc(49.76525821596247% - 135px / 2); top: calc(50.23474178403758% - 117px / 2); width: 135px; }',
  '.framer-10NzW.framer-v-14ttska .framer-th6quy { height: 57px; left: calc(50.04955401387514% - max(460px, 57.8790882061447%) / 2); min-width: 460px; top: calc(49.90689013035384% - 57px / 2); width: 58%; }',
  '.framer-10NzW.framer-v-14ttska .framer-1x3xeex, .framer-10NzW.framer-v-n0zl46 .framer-1x3xeex { align-content: center; align-items: center; }',
  '.framer-10NzW.framer-v-14ttska .framer-onwzwe, .framer-10NzW.framer-v-n0zl46 .framer-onwzwe { order: 0; }',
  '.framer-10NzW.framer-v-14ttska .framer-a5vvyf, .framer-10NzW.framer-v-n0zl46 .framer-a5vvyf { order: 2; }',
  '.framer-10NzW.framer-v-14ttska .framer-o3gcmt, .framer-10NzW.framer-v-n0zl46 .framer-o3gcmt { order: 3; }',
  '.framer-10NzW.framer-v-14ttska .framer-12cmvwa { order: 1; }',
  '.framer-10NzW.framer-v-n0zl46 .framer-th6quy { height: 301px; left: calc(50.04955401387514% - 326px / 2); top: calc(47.113594040968366% - 301px / 2); width: 326px; }',
];
var FramerpSxPslti_ = withCSS7(Component5, css6, 'framer-10NzW',);
var stdin_default7 = FramerpSxPslti_;
FramerpSxPslti_.displayName = 'Seed';
FramerpSxPslti_.defaultProps = { height: 537, width: 1009, };
addPropertyControls7(FramerpSxPslti_, {
  variant: {
    options: ['R_0SntBXV', 'RspHZjbvA', 'KzyHUFutd', 'lR29aQ4aC', 'CDTOPoYwJ', 'AKBlJHd8s', 'NfdKYRGKU',],
    optionTitles: ['search', 'seed', 'expanded', 'type', 'logo', 'generate', 'Variant 7',],
    title: 'Variant',
    type: ControlType10.Enum,
  },
  WPG5b_gus: { title: 'Tap 3', type: ControlType10.EventHandler, },
},);
addFonts5(FramerpSxPslti_, [
  { family: 'PP Supply Sans Variable', url: 'https://framerusercontent.com/assets/nTnfVPKvx4BNtayjhoEgyhNSc.ttf', },
  { family: 'PP Supply Sans Regular', url: 'https://framerusercontent.com/assets/IIwW8kvIZ9g5LjEOU4ekY5CtLI.ttf', },
  { family: 'PP Supply Sans Light', url: 'https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf', },
  ...TypewriterFonts3,
],);

// https :https://framerusercontent.com/modules/waKcvjbslSC7rFQ1SrGC/YLQ9NHDl0w0KOCprElla/C6ZYtBmll.js
var NodeFonts = getFonts5(stdin_default6,);
var SeedFonts = getFonts5(stdin_default7,);
var cycleOrder6 = [
  'zEXSsGxpE',
  'HovROSEim',
  'lBUZui6j9',
  'dVLWELU6e',
  'XACXI8mDn',
  'vf_oeYc8q',
  'po9merzYT',
  'Wzv1r0oKb',
  'Du1gnhwdF',
  'MX2TbvLxw',
  'cg1e52nt2',
  'QcEIwdpHn',
  'r8IR85ZDv',
  'qMUngWgkC',
  'gDTDJiCJ2',
  'p6HKTvlB3',
  'rfZM8jP4B',
  'fhIf6dGTg',
  'Ugn1WXH_Q',
  'NsO3auvSc',
  'HAgS9njVa',
  'vhOykwvnY',
  'bmOYz6gay',
  'qT5kEYyp_',
  'ZNHbdIJKd',
  'h124nvy2N',
  'Cr5qNjOdj',
  'kFGmGEOUz',
  'l5FvQV66Q',
  'udHfq45LS',
  'Z1sTRLzN1',
  'cq7D62bxc',
  'dUMZVZnV0',
];
var serializationHash5 = 'framer-948ei';
var variantClassNames6 = {
  bmOYz6gay: 'framer-v-1ymudb1',
  cg1e52nt2: 'framer-v-8ciawy',
  cq7D62bxc: 'framer-v-13llhv3',
  Cr5qNjOdj: 'framer-v-1anadwn',
  Du1gnhwdF: 'framer-v-19a269d',
  dUMZVZnV0: 'framer-v-antl4q',
  dVLWELU6e: 'framer-v-d973em',
  fhIf6dGTg: 'framer-v-655dk4',
  gDTDJiCJ2: 'framer-v-1ewhbs6',
  h124nvy2N: 'framer-v-1f09y03',
  HAgS9njVa: 'framer-v-96r6q7',
  HovROSEim: 'framer-v-f73ajw',
  kFGmGEOUz: 'framer-v-16mzam7',
  l5FvQV66Q: 'framer-v-tv2zos',
  lBUZui6j9: 'framer-v-1odncvf',
  MX2TbvLxw: 'framer-v-1b7v10g',
  NsO3auvSc: 'framer-v-18wwg9a',
  p6HKTvlB3: 'framer-v-47329',
  po9merzYT: 'framer-v-1t34yxb',
  QcEIwdpHn: 'framer-v-87eqop',
  qMUngWgkC: 'framer-v-ewze6y',
  qT5kEYyp_: 'framer-v-qkkkjw',
  r8IR85ZDv: 'framer-v-zdyy2d',
  rfZM8jP4B: 'framer-v-n0vpn9',
  udHfq45LS: 'framer-v-1j14qwb',
  Ugn1WXH_Q: 'framer-v-ae0cwc',
  vf_oeYc8q: 'framer-v-yrn57e',
  vhOykwvnY: 'framer-v-10pngp5',
  Wzv1r0oKb: 'framer-v-1l5e6kx',
  XACXI8mDn: 'framer-v-13tsvzn',
  Z1sTRLzN1: 'framer-v-1sk9d83',
  zEXSsGxpE: 'framer-v-hpdod',
  ZNHbdIJKd: 'framer-v-30clu8',
};
function addPropertyOverrides6(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions6 = {
  bmOYz6gay: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  cg1e52nt2: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  Cr5qNjOdj: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', },
  dUMZVZnV0: { delay: 0, duration: 1.1, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  dVLWELU6e: { delay: 0, duration: 5.8, ease: [0.81, -0.01, 0.28, 1,], type: 'tween', },
  h124nvy2N: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  HovROSEim: { delay: 0, duration: 3.75, ease: [0.66, -0.02, 0.27, 1.04,], type: 'tween', },
  kFGmGEOUz: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  l5FvQV66Q: { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  lBUZui6j9: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', },
  p6HKTvlB3: { delay: 0, duration: 1.6, ease: [0.4, -0.02, 0.56, 1,], type: 'tween', },
  QcEIwdpHn: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  qT5kEYyp_: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  udHfq45LS: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  vf_oeYc8q: { delay: 0, duration: 3, ease: [0.81, -0.01, 0.28, 1,], type: 'tween', },
  Wzv1r0oKb: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  XACXI8mDn: { delay: 0, duration: 5.8, ease: [0.81, -0.01, 0.28, 1,], type: 'tween', },
  Z1sTRLzN1: { delay: 0, duration: 3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
  ZNHbdIJKd: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', },
};
var transformTemplate3 = (_2, t3,) => `translateX(-50%) ${t3}`;
var transition12 = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var Transition6 = ({ value, children, },) => {
  const config = React8.useContext(MotionConfigContext6,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React8.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx8(MotionConfigContext6.Provider, { value: contextValue, children, },);
};
var transition2 = { delay: 0.4, duration: 0.5, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transformTemplate12 = (_2, t3,) => `translateY(-50%) ${t3}`;
var transition3 = { delay: 0, duration: 0.4, ease: [0.7, -0.02, 0.58, 1.04,], type: 'tween', };
var transition4 = { damping: 66, delay: 0, mass: 3.2, stiffness: 526, type: 'spring', };
var transition5 = { delay: 0.2, duration: 0.4, ease: [0.59, -0.01, 0.56, 1,], type: 'tween', };
var transition6 = { delay: 0, duration: 5.6, ease: [0.66, -0.02, 0.12, 1,], type: 'tween', };
var transition7 = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transformTemplate22 = (_2, t3,) => `translate(-50%, -50%) ${t3}`;
var transition8 = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition9 = { delay: 0.5, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition10 = { delay: 0.5, duration: 0.6, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition11 = { delay: 0, duration: 0.3, ease: [0.66, -0.02, 0.27, 1.02,], type: 'tween', };
var transition122 = { damping: 30, delay: 0, mass: 1, stiffness: 430, type: 'spring', };
var transition13 = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition14 = { delay: 0.8, duration: 0.5, ease: [0.73, 0.04, 0.54, 1,], type: 'tween', };
var transition15 = { delay: 0, duration: 0.9, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition16 = { delay: 0.2, duration: 0.8, ease: [0.64, 0, 0.53, 1.03,], type: 'tween', };
var transition17 = { delay: 0.6, duration: 0.3, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition18 = { delay: 0.4, duration: 0.3, ease: [0.59, 0.02, 0.56, 1,], type: 'tween', };
var humanReadableVariantMap6 = {
  'Variant A-1': 'HovROSEim',
  'Variant A-2': 'lBUZui6j9',
  'Variant A-3': 'dVLWELU6e',
  'Variant A-4': 'XACXI8mDn',
  'Variant B-1': 'vf_oeYc8q',
  'Variant B-2': 'zEXSsGxpE',
  'Variant B-3': 'Wzv1r0oKb',
  'Variant B-6': 'dUMZVZnV0',
  'Variant B-7': 'Du1gnhwdF',
  'Variant B-8': 'MX2TbvLxw',
  'Variant C-1': 'cg1e52nt2',
  'Variant C-2': 'QcEIwdpHn',
  'Variant C-3': 'r8IR85ZDv',
  'Variant C-4': 'qMUngWgkC',
  'Variant C-5': 'gDTDJiCJ2',
  'Variant C-6': 'p6HKTvlB3',
  'Variant D-1': 'rfZM8jP4B',
  'Variant D-2': 'fhIf6dGTg',
  'Variant D-3': 'Ugn1WXH_Q',
  'Variant D-4': 'NsO3auvSc',
  'Variant E-1': 'HAgS9njVa',
  'Variant E-2': 'vhOykwvnY',
  'Variant E-3': 'bmOYz6gay',
  'Variant E-4': 'qT5kEYyp_',
  'Variant E-5': 'ZNHbdIJKd',
  'Variant E-6': 'h124nvy2N',
  'Variant E-7': 'Cr5qNjOdj',
  'Variant F-1': 'kFGmGEOUz',
  'Variant F-2': 'l5FvQV66Q',
  'Variant F-3': 'udHfq45LS',
  'Variant F-4': 'Z1sTRLzN1',
  'Variant F-5': 'cq7D62bxc',
};
var getProps6 = ({ height, id, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap6[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'zEXSsGxpE',
  };
};
var createLayoutDependency6 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component6 = /* @__PURE__ */ React8.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo6();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps6(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState6({
    cycleOrder: cycleOrder6,
    defaultVariant: 'zEXSsGxpE',
    transitions: transitions6,
    variant,
    variantClassNames: variantClassNames6,
  },);
  const layoutDependency = createLayoutDependency6(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback4(baseVariant,);
  const onTaptc8yo = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('po9merzYT',);
  },);
  const onTap1bg0tgh = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('dVLWELU6e',);
  },);
  const onAppear1w3pbxc = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('dVLWELU6e',), 800,);
  },);
  const onTap1bxl348 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('XACXI8mDn',);
  },);
  const onAppear92gtia = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('XACXI8mDn',), 1500,);
  },);
  const onTap1ktvu7r = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('vf_oeYc8q',);
  },);
  const onTap7ptd9v = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('zEXSsGxpE',);
  },);
  const onTappwmcco = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('Wzv1r0oKb',);
  },);
  const onTap12vfdf0 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('dUMZVZnV0',);
  },);
  const onTapp7z3kx = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('MX2TbvLxw',);
  },);
  const onTap101bo62 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('cg1e52nt2',);
  },);
  const onTap1ayrjm9 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('QcEIwdpHn',);
  },);
  const onAppear72lkqo = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('QcEIwdpHn',), 400,);
  },);
  const onAppear1660fro = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('r8IR85ZDv',), 300,);
  },);
  const onAppear1skz1qb = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('qMUngWgkC',), 300,);
  },);
  const onAppear1fop6mg = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('gDTDJiCJ2',), 300,);
  },);
  const onTapvnhec7 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('p6HKTvlB3',);
  },);
  const onTap6dtcrj = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('rfZM8jP4B',);
  },);
  const onAppear5cy2cc = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('rfZM8jP4B',), 1700,);
  },);
  const onTapphes1 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('fhIf6dGTg',);
  },);
  const onAppearuj7ay4 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('fhIf6dGTg',), 1500,);
  },);
  const onTap89vh3l = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('Ugn1WXH_Q',);
  },);
  const onAppear1k9apdf = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('Ugn1WXH_Q',), 1e3,);
  },);
  const onTap78efpb = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('NsO3auvSc',);
  },);
  const onAppear183s3yt = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('NsO3auvSc',), 1e3,);
  },);
  const onTap1xbh5wi = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('HAgS9njVa',);
  },);
  const onAppear1d05iw9 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('HAgS9njVa',), 1e3,);
  },);
  const onTap1154zru = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('vhOykwvnY',);
  },);
  const onAppear13ef6yw = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('vhOykwvnY',), 1e3,);
  },);
  const onTap1kqtljy = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('bmOYz6gay',);
  },);
  const onAppearxt4uid = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('bmOYz6gay',), 1e3,);
  },);
  const onTap1jxvowa = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('qT5kEYyp_',);
  },);
  const onTap13cqn5c = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('ZNHbdIJKd',);
  },);
  const onAppear42kjx9 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('ZNHbdIJKd',), 400,);
  },);
  const onTapbwlhxp = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('h124nvy2N',);
  },);
  const onAppearpfs35t = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('h124nvy2N',), 700,);
  },);
  const onTap8svcju = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('Cr5qNjOdj',);
  },);
  const onAppearmcrp7k = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('Cr5qNjOdj',), 1e3,);
  },);
  const onTap1f76q4w = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('l5FvQV66Q',);
  },);
  const onAppearjqbfxa = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('l5FvQV66Q',), 600,);
  },);
  const onTap1ury1zd = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('udHfq45LS',);
  },);
  const onAppear1u675qa = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('udHfq45LS',), 500,);
  },);
  const onTapd260ka = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('Z1sTRLzN1',);
  },);
  const onAppear1nq4qdk = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('Z1sTRLzN1',), 400,);
  },);
  const onTap1yvepg8 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('cq7D62bxc',);
  },);
  const onAppear17h0p06 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant('cq7D62bxc',), 500,);
  },);
  const onTapxnqne0 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    setVariant('Du1gnhwdF',);
  },);
  const WPG5b_gusa7d9q8 = activeVariantCallback(async (...args) => {
    setVariant('dUMZVZnV0',);
  },);
  const aysnwkSZEhbyqyv = activeVariantCallback(async (...args) => {
    setVariant('lBUZui6j9',);
  },);
  const aysnwkSZE6nb57o = activeVariantCallback(async (...args) => {
    setVariant('dVLWELU6e',);
  },);
  const aysnwkSZE1lpg9gm = activeVariantCallback(async (...args) => {
    setVariant('vf_oeYc8q',);
  },);
  useOnVariantChange(baseVariant, {
    cg1e52nt2: onAppear72lkqo,
    dVLWELU6e: onAppear92gtia,
    fhIf6dGTg: onAppear1k9apdf,
    h124nvy2N: onAppearmcrp7k,
    HAgS9njVa: onAppear13ef6yw,
    kFGmGEOUz: onAppearjqbfxa,
    l5FvQV66Q: onAppear1u675qa,
    lBUZui6j9: onAppear1w3pbxc,
    NsO3auvSc: onAppear1d05iw9,
    p6HKTvlB3: onAppear5cy2cc,
    QcEIwdpHn: onAppear1660fro,
    qMUngWgkC: onAppear1fop6mg,
    qT5kEYyp_: onAppear42kjx9,
    r8IR85ZDv: onAppear1skz1qb,
    rfZM8jP4B: onAppearuj7ay4,
    udHfq45LS: onAppear1nq4qdk,
    Ugn1WXH_Q: onAppear183s3yt,
    vhOykwvnY: onAppearxt4uid,
    Z1sTRLzN1: onAppear17h0p06,
    ZNHbdIJKd: onAppearpfs35t,
  },);
  const ref1 = React8.useRef(null,);
  const isDisplayed = () => {
    if (baseVariant === 'Cr5qNjOdj') {
      return true;
    }
    return false;
  };
  const isDisplayed1 = () => {
    if (['HAgS9njVa', 'vhOykwvnY', 'bmOYz6gay',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed2 = () => {
    if (
      [
        'cg1e52nt2',
        'QcEIwdpHn',
        'r8IR85ZDv',
        'qMUngWgkC',
        'gDTDJiCJ2',
        'p6HKTvlB3',
        'rfZM8jP4B',
        'fhIf6dGTg',
        'Ugn1WXH_Q',
        'NsO3auvSc',
        'HAgS9njVa',
        'vhOykwvnY',
        'bmOYz6gay',
        'qT5kEYyp_',
        'ZNHbdIJKd',
        'h124nvy2N',
        'Cr5qNjOdj',
        'kFGmGEOUz',
        'l5FvQV66Q',
        'udHfq45LS',
        'Z1sTRLzN1',
        'cq7D62bxc',
      ].includes(baseVariant,)
    ) {
      return true;
    }
    return false;
  };
  const isDisplayed3 = () => {
    if (['Z1sTRLzN1', 'cq7D62bxc',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed4 = () => {
    if (baseVariant === 'cq7D62bxc') {
      return false;
    }
    return true;
  };
  const isDisplayed5 = () => {
    if (['Ugn1WXH_Q', 'NsO3auvSc', 'HAgS9njVa', 'vhOykwvnY', 'bmOYz6gay', 'dUMZVZnV0',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed6 = () => {
    if (baseVariant === 'dUMZVZnV0') {
      return false;
    }
    return true;
  };
  const isDisplayed7 = () => {
    if (['qT5kEYyp_', 'ZNHbdIJKd', 'h124nvy2N', 'Cr5qNjOdj', 'dUMZVZnV0',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed8 = () => {
    if (
      [
        'r8IR85ZDv',
        'qMUngWgkC',
        'gDTDJiCJ2',
        'p6HKTvlB3',
        'rfZM8jP4B',
        'fhIf6dGTg',
        'Ugn1WXH_Q',
        'NsO3auvSc',
        'HAgS9njVa',
        'vhOykwvnY',
        'bmOYz6gay',
        'qT5kEYyp_',
        'ZNHbdIJKd',
        'h124nvy2N',
        'Cr5qNjOdj',
        'kFGmGEOUz',
        'l5FvQV66Q',
        'udHfq45LS',
        'Z1sTRLzN1',
        'cq7D62bxc',
      ].includes(baseVariant,)
    ) {
      return true;
    }
    return false;
  };
  const isDisplayed9 = () => {
    if (['udHfq45LS', 'Z1sTRLzN1', 'cq7D62bxc',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed10 = () => {
    if (baseVariant === 'qMUngWgkC') {
      return true;
    }
    return false;
  };
  const isDisplayed11 = () => {
    if (['Du1gnhwdF', 'MX2TbvLxw', 'dUMZVZnV0',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const isDisplayed12 = () => {
    if (['po9merzYT', 'Wzv1r0oKb', 'Du1gnhwdF', 'dUMZVZnV0',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed13 = () => {
    if (
      [
        'rfZM8jP4B',
        'fhIf6dGTg',
        'Ugn1WXH_Q',
        'NsO3auvSc',
        'HAgS9njVa',
        'vhOykwvnY',
        'bmOYz6gay',
        'qT5kEYyp_',
        'ZNHbdIJKd',
        'h124nvy2N',
        'Cr5qNjOdj',
      ].includes(baseVariant,)
    ) {
      return true;
    }
    return false;
  };
  const isDisplayed14 = () => {
    if (
      ['Du1gnhwdF', 'MX2TbvLxw', 'rfZM8jP4B', 'fhIf6dGTg', 'Ugn1WXH_Q', 'NsO3auvSc', 'HAgS9njVa', 'vhOykwvnY', 'bmOYz6gay', 'dUMZVZnV0',]
        .includes(baseVariant,)
    ) {
      return true;
    }
    return false;
  };
  const isDisplayed15 = () => {
    if (['Du1gnhwdF', 'MX2TbvLxw', 'dUMZVZnV0',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed16 = () => {
    if (
      ['Du1gnhwdF', 'MX2TbvLxw', 'fhIf6dGTg', 'Ugn1WXH_Q', 'NsO3auvSc', 'HAgS9njVa', 'vhOykwvnY', 'bmOYz6gay', 'dUMZVZnV0',].includes(
        baseVariant,
      )
    ) {
      return true;
    }
    return false;
  };
  const isDisplayed17 = () => {
    if (['HovROSEim', 'lBUZui6j9', 'XACXI8mDn',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const defaultLayoutId = React8.useId();
  const sharedStyleClassNames = [];
  return /* @__PURE__ */ _jsx8(LayoutGroup6, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx8(Transition6, {
      value: transition,
      children: /* @__PURE__ */ _jsxs6(motion7.div, {
        ...restProps,
        animate: variants,
        className: cx6(serializationHash5, ...sharedStyleClassNames, 'framer-hpdod', className2, classNames,),
        'data-framer-name': 'Variant B-2',
        'data-highlight': true,
        initial: variant,
        layoutDependency,
        layoutId: 'zEXSsGxpE',
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onTap: onTaptc8yo,
        onTapCancel: () => setGestureState({ isPressed: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        ref: ref !== null && ref !== void 0 ? ref : ref1,
        style: { backgroundColor: 'rgba(0, 0, 0, 0)', ...style, },
        variants: {
          Cr5qNjOdj: { backgroundColor: 'rgb(255, 255, 255)', },
          h124nvy2N: { backgroundColor: 'rgb(255, 255, 255)', },
          kFGmGEOUz: { backgroundColor: 'rgb(255, 255, 255)', },
          qT5kEYyp_: { backgroundColor: 'rgb(255, 255, 255)', },
          ZNHbdIJKd: { backgroundColor: 'rgb(255, 255, 255)', },
        },
        ...addPropertyOverrides6(
          {
            bmOYz6gay: { 'data-framer-name': 'Variant E-3', onTap: onTap1jxvowa, },
            cg1e52nt2: { 'data-framer-name': 'Variant C-1', onTap: onTap1ayrjm9, },
            cq7D62bxc: {
              'data-framer-name': 'Variant F-5',
              'data-highlight': void 0,
              onTap: () => setGestureState({ isPressed: false, },),
            },
            Cr5qNjOdj: { 'data-framer-name': 'Variant E-7', onTap: onTap1f76q4w, },
            Du1gnhwdF: { 'data-framer-name': 'Variant B-7', onTap: onTapp7z3kx, },
            dUMZVZnV0: { 'data-framer-name': 'Variant B-6', onTap: onTapxnqne0, },
            dVLWELU6e: { 'data-framer-name': 'Variant A-3', onTap: onTap1bxl348, },
            fhIf6dGTg: { 'data-framer-name': 'Variant D-2', onTap: onTap89vh3l, },
            gDTDJiCJ2: { 'data-framer-name': 'Variant C-5', onTap: onTapvnhec7, },
            h124nvy2N: { 'data-framer-name': 'Variant E-6', onTap: onTap8svcju, },
            HAgS9njVa: { 'data-framer-name': 'Variant E-1', onTap: onTap1154zru, },
            HovROSEim: {
              'data-framer-name': 'Variant A-1',
              'data-highlight': void 0,
              onTap: () => setGestureState({ isPressed: false, },),
            },
            kFGmGEOUz: { 'data-framer-name': 'Variant F-1', onTap: onTap1f76q4w, },
            l5FvQV66Q: { 'data-framer-name': 'Variant F-2', onTap: onTap1ury1zd, },
            lBUZui6j9: { 'data-framer-name': 'Variant A-2', onTap: onTap1bg0tgh, },
            MX2TbvLxw: { 'data-framer-name': 'Variant B-8', onTap: onTap101bo62, },
            NsO3auvSc: { 'data-framer-name': 'Variant D-4', onTap: onTap1xbh5wi, },
            p6HKTvlB3: { 'data-framer-name': 'Variant C-6', onTap: onTap6dtcrj, },
            po9merzYT: { 'data-framer-name': 'Variant B-3', onTap: onTappwmcco, },
            QcEIwdpHn: { 'data-framer-name': 'Variant C-2', onTap: () => setGestureState({ isPressed: false, },), },
            qMUngWgkC: { 'data-framer-name': 'Variant C-4', onTap: () => setGestureState({ isPressed: false, },), },
            qT5kEYyp_: { 'data-framer-name': 'Variant E-4', onTap: onTap13cqn5c, },
            r8IR85ZDv: { 'data-framer-name': 'Variant C-3', onTap: () => setGestureState({ isPressed: false, },), },
            rfZM8jP4B: { 'data-framer-name': 'Variant D-1', onTap: onTapphes1, },
            udHfq45LS: { 'data-framer-name': 'Variant F-3', onTap: onTapd260ka, },
            Ugn1WXH_Q: { 'data-framer-name': 'Variant D-3', onTap: onTap78efpb, },
            vf_oeYc8q: { 'data-framer-name': 'Variant B-1', onTap: onTap7ptd9v, },
            vhOykwvnY: { 'data-framer-name': 'Variant E-2', onTap: onTap1kqtljy, },
            Wzv1r0oKb: { 'data-framer-name': 'Variant B-3', onTap: onTap12vfdf0, },
            XACXI8mDn: { 'data-framer-name': 'Variant A-4', onTap: onTap1ktvu7r, },
            Z1sTRLzN1: { 'data-framer-name': 'Variant F-4', onTap: onTap1yvepg8, },
            ZNHbdIJKd: { 'data-framer-name': 'Variant E-5', onTap: onTapbwlhxp, },
          },
          baseVariant,
          gestureVariant,
        ),
        children: [
          isDisplayed() && /* @__PURE__ */ _jsx8(SVG6, {
            className: 'framer-1ycw9vo',
            'data-framer-name': 'Vector 105',
            layout: 'position',
            layoutDependency,
            layoutId: 'eqG2RbVKy',
            opacity: 1,
            svg:
              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 771 198"><path d="M 1.316 196.508 C 35.771 196.508 72.064 158.45 97.758 158.45 C 123.451 158.45 123.451 182.672 143.401 182.672 C 163.352 182.672 171.513 158.45 187.534 158.45 C 203.555 158.45 211.716 182.672 234.085 182.672 C 256.453 182.672 260.685 133.017 278.217 133.017 C 295.749 133.017 302.457 101.752 323.323 101.752 C 344.189 101.752 357.097 129.258 381.259 129.258 C 405.421 129.258 412.855 101.752 441.974 101.752 C 471.092 101.752 475.918 138.613 503.649 138.613 C 531.38 138.613 533.749 62.632 562.328 62.632 C 590.908 62.632 602.519 84.997 632.885 84.997 C 663.251 84.997 669.503 0.904 703.442 0.904 C 737.38 0.904 740.508 62.632 770.164 62.632" fill="transparent" stroke-width="1.2" stroke="rgba(0, 0, 0, 0.42)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray="0, 5"></path></svg>',
            svgContentId: 2031109906,
            withExternalLayout: true,
            ...addPropertyOverrides6({ Cr5qNjOdj: { svgContentId: 1792152398, }, }, baseVariant, gestureVariant,),
          },),
          isDisplayed1() && /* @__PURE__ */ _jsx8(Transition6, {
            ...addPropertyOverrides6({ HAgS9njVa: { value: transition12, }, }, baseVariant, gestureVariant,),
            children: /* @__PURE__ */ _jsxs6(motion7.div, {
              className: 'framer-8vddoc',
              'data-framer-name': 'Dial picker',
              layoutDependency,
              layoutId: 'noegUpLE7',
              style: {
                backgroundColor: 'rgb(250, 250, 250)',
                borderBottomLeftRadius: 28,
                borderBottomRightRadius: 28,
                borderTopLeftRadius: 28,
                borderTopRightRadius: 28,
                boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.12)',
                filter: 'none',
                WebkitFilter: 'none',
              },
              transformTemplate: transformTemplate3,
              variants: {
                bmOYz6gay: { filter: 'blur(5px)', WebkitFilter: 'blur(5px)', },
                HAgS9njVa: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                vhOykwvnY: { filter: 'blur(5px)', WebkitFilter: 'blur(5px)', },
              },
              children: [
                /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-3jhvp',
                  'data-framer-name': 'Header',
                  layoutDependency,
                  layoutId: 'WxA9YA_8X',
                  children: /* @__PURE__ */ _jsx8(RichText5, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                      children: /* @__PURE__ */ _jsx8(motion7.p, {
                        style: {
                          '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                          '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                          '--framer-font-size': '12px',
                          '--framer-letter-spacing': '0.5px',
                          '--framer-line-height': '16px',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                        },
                        children: 'COMPONENT IDEA',
                      },),
                    },),
                    className: 'framer-58jcgq',
                    'data-framer-name': 'Title',
                    fonts: ['CUSTOM;PP Supply Sans Medium',],
                    layoutDependency,
                    layoutId: 'jhZE2KFB3',
                    style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                },),
                /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-k3rqov',
                  'data-framer-name': 'Input Selection',
                  layoutDependency,
                  layoutId: 'UhcRycNtR',
                  children: /* @__PURE__ */ _jsxs6(motion7.div, {
                    className: 'framer-ovz0el',
                    'data-framer-name': 'Input',
                    layoutDependency,
                    layoutId: 'lK3TjGT60',
                    children: [
                      /* @__PURE__ */ _jsx8(motion7.div, {
                        className: 'framer-1cjxhy0',
                        'data-framer-name': 'headline',
                        layoutDependency,
                        layoutId: 'hkLaO70Lr',
                        children: /* @__PURE__ */ _jsx8(RichText5, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                            children: /* @__PURE__ */ _jsx8(motion7.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-letter-spacing': '0.25px',
                                '--framer-line-height': '20px',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                              },
                              children: 'Describing the medium and method of the tool.',
                            },),
                          },),
                          className: 'framer-1ebn6ix',
                          'data-framer-name': 'subhead',
                          fonts: ['CUSTOM;PP Supply Sans Light',],
                          layoutDependency,
                          layoutId: 'w31DsTlZr',
                          style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                      },),
                      /* @__PURE__ */ _jsxs6(motion7.div, {
                        className: 'framer-1twb4mw',
                        'data-framer-name': 'Frame 2608514',
                        layoutDependency,
                        layoutId: 'Ifo7_8nhh',
                        style: {
                          backgroundColor: 'rgb(219, 228, 230)',
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        children: [
                          /* @__PURE__ */ _jsx8(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                              children: /* @__PURE__ */ _jsx8(motion7.p, {
                                style: {
                                  '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIExpZ2h0',
                                  '--framer-font-family': '"PP Supply Sans Light", "PP Supply Sans Light Placeholder", sans-serif',
                                  '--framer-font-size': '14px',
                                  '--framer-letter-spacing': '0.25px',
                                  '--framer-line-height': '20px',
                                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(63, 72, 74))',
                                },
                                children:
                                  'a software tool employing various interactive exercises and adaptive methodologies will be developed, prioritizing user engagement, personalization, and efficacy in cognitive enhancement',
                              },),
                            },),
                            className: 'framer-1qyytje',
                            'data-framer-name': 'supporting-text',
                            fonts: ['CUSTOM;PP Supply Sans Light',],
                            layoutDependency,
                            layoutId: 'gF58LoXMj',
                            style: { '--extracted-r6o4lv': 'rgb(63, 72, 74)', '--framer-paragraph-spacing': '0px', },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                          },),
                          /* @__PURE__ */ _jsx8(motion7.div, {
                            className: 'framer-1kj1ldo',
                            'data-framer-name': 'Rectangle 8',
                            layoutDependency,
                            layoutId: 'z_lhUo_7q',
                            style: {
                              backgroundColor: 'rgb(205, 248, 255)',
                              borderBottomLeftRadius: 6,
                              borderBottomRightRadius: 6,
                              borderTopLeftRadius: 6,
                              borderTopRightRadius: 6,
                            },
                          },),
                        ],
                      },),
                    ],
                  },),
                },),
                /* @__PURE__ */ _jsxs6(motion7.div, {
                  className: 'framer-101gxbs',
                  'data-framer-name': 'Actions',
                  layoutDependency,
                  layoutId: 'ncLLYMcQj',
                  children: [
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-k8lsxt',
                      'data-framer-name': 'Icon button',
                      layoutDependency,
                      layoutId: 'mt4LTPa7S',
                      children: /* @__PURE__ */ _jsx8(motion7.div, {
                        className: 'framer-u4tus2',
                        'data-framer-name': 'container',
                        layoutDependency,
                        layoutId: 'lf97XrvaO',
                        style: {
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                        children: /* @__PURE__ */ _jsx8(motion7.div, {
                          className: 'framer-1nyjb26',
                          'data-framer-name': 'state-layer',
                          layoutDependency,
                          layoutId: 'B6RWHuxE2',
                          children: /* @__PURE__ */ _jsx8(motion7.div, {
                            className: 'framer-1t8lizg',
                            'data-framer-name': 'Icon',
                            layoutDependency,
                            layoutId: 'lRt_sjvrx',
                            children: /* @__PURE__ */ _jsx8(SVG6, {
                              className: 'framer-8qwf3t',
                              'data-framer-name': 'icon',
                              fill: 'rgba(0,0,0,1)',
                              intrinsicHeight: 20,
                              intrinsicWidth: 20,
                              layoutDependency,
                              layoutId: 'Xk9eJhGaU',
                              svg:
                                '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H4L2 16V2H18V14Z" fill="#3F484A"/>\n</svg>\n',
                              withExternalLayout: true,
                            },),
                          },),
                        },),
                      },),
                    },),
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-td7305',
                      'data-framer-name': 'Actions',
                      layoutDependency,
                      layoutId: 'xykc2cmYt',
                      children: /* @__PURE__ */ _jsx8(motion7.div, {
                        className: 'framer-moaqya',
                        'data-framer-name': 'Primary button',
                        layoutDependency,
                        layoutId: 'Ap9JVtS8k',
                        style: {
                          backgroundColor: 'rgb(0, 105, 115)',
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                        children: /* @__PURE__ */ _jsxs6(motion7.div, {
                          className: 'framer-191z50s',
                          'data-framer-name': 'state-layer',
                          layoutDependency,
                          layoutId: 'AgFOKnyWl',
                          children: [
                            /* @__PURE__ */ _jsx8(motion7.div, {
                              className: 'framer-1sofjn6',
                              'data-framer-name': 'icon',
                              layoutDependency,
                              layoutId: 'rqt1bS_FD',
                              children: /* @__PURE__ */ _jsx8(SVG6, {
                                className: 'framer-j61epy',
                                'data-framer-name': 'icon',
                                fill: 'rgba(0,0,0,1)',
                                intrinsicHeight: 11,
                                intrinsicWidth: 14,
                                layoutDependency,
                                layoutId: 'ZHhrdaBNV',
                                svg:
                                  '<svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M4.75109 8.12738L1.62359 4.99988L0.558594 6.05738L4.75109 10.2499L13.7511 1.24988L12.6936 0.192383L4.75109 8.12738Z" fill="white"/>\n</svg>\n',
                                withExternalLayout: true,
                              },),
                            },),
                            /* @__PURE__ */ _jsx8(RichText5, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                                children: /* @__PURE__ */ _jsx8(motion7.p, {
                                  style: {
                                    '--font-selector': 'R0Y7Um9ib3RvLTUwMA==',
                                    '--framer-font-family': '"Roboto", "Roboto Placeholder", sans-serif',
                                    '--framer-font-size': '14px',
                                    '--framer-font-weight': '500',
                                    '--framer-letter-spacing': '0.1px',
                                    '--framer-line-height': '20px',
                                    '--framer-text-alignment': 'center',
                                    '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                                  },
                                  children: 'OK',
                                },),
                              },),
                              className: 'framer-1558cx',
                              'data-framer-name': 'label-text',
                              fonts: ['GF;Roboto-500',],
                              layoutDependency,
                              layoutId: 'DchzKzVV6',
                              style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                              verticalAlignment: 'center',
                              withExternalLayout: true,
                            },),
                          ],
                        },),
                      },),
                    },),
                  ],
                },),
              ],
            },),
          },),
          isDisplayed2() && /* @__PURE__ */ _jsxs6(motion7.div, {
            className: 'framer-6s0tzo',
            'data-framer-name': 'Layer 3',
            layoutDependency,
            layoutId: 'IhV5X0KRI',
            style: { filter: 'none', opacity: 1, rotate: 0, WebkitFilter: 'none', },
            variants: {
              bmOYz6gay: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
              cq7D62bxc: { filter: 'blur(1px)', WebkitFilter: 'blur(1px)', },
              Cr5qNjOdj: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              fhIf6dGTg: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              gDTDJiCJ2: { filter: 'blur(5px)', rotate: -35, WebkitFilter: 'blur(5px)', },
              h124nvy2N: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              HAgS9njVa: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
              kFGmGEOUz: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              l5FvQV66Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              NsO3auvSc: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              p6HKTvlB3: { filter: 'blur(7px)', WebkitFilter: 'blur(7px)', },
              qT5kEYyp_: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              rfZM8jP4B: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              udHfq45LS: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              Ugn1WXH_Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              vhOykwvnY: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
              Z1sTRLzN1: { filter: 'blur(1px)', WebkitFilter: 'blur(1px)', },
              ZNHbdIJKd: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
            },
            children: [
              isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                ...addPropertyOverrides6(
                  { Cr5qNjOdj: { value: transition2, }, h124nvy2N: { value: transition2, }, ZNHbdIJKd: { value: transition2, }, },
                  baseVariant,
                  gestureVariant,
                ),
                children: /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-4b524j-container',
                  layoutDependency,
                  layoutId: 'WWuXDBWRZ-container',
                  style: { opacity: 1, },
                  variants: {
                    cg1e52nt2: { opacity: 0, },
                    Cr5qNjOdj: { opacity: 0, },
                    h124nvy2N: { opacity: 0, },
                    QcEIwdpHn: { opacity: 0, },
                    udHfq45LS: { opacity: 0, },
                    ZNHbdIJKd: { opacity: 0, },
                  },
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'WWuXDBWRZ',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'WWuXDBWRZ',
                    LNNJy1jnm: 'FNw58JHcH',
                    NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'vVjMhdARB',
                    VOTcq87Vu: true,
                    vZATQhujj: 'Board Dimensions',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        Cr5qNjOdj: { variant: 'K8oqZ2hdT', },
                        fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                        h124nvy2N: { variant: 'K8oqZ2hdT', },
                        HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                        l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                        NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                        qMUngWgkC: { variant: 'K8oqZ2hdT', },
                        qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                        r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                        rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        udHfq45LS: { variant: 'K8oqZ2hdT', },
                        Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
              isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                ...addPropertyOverrides6(
                  { Cr5qNjOdj: { value: transition2, }, h124nvy2N: { value: transition2, }, ZNHbdIJKd: { value: transition2, }, },
                  baseVariant,
                  gestureVariant,
                ),
                children: /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-vvhei8-container',
                  layoutDependency,
                  layoutId: 'EiFaCbusC-container',
                  style: { opacity: 1, },
                  transformTemplate: transformTemplate3,
                  variants: {
                    cg1e52nt2: { opacity: 0, },
                    Cr5qNjOdj: { opacity: 0, },
                    h124nvy2N: { opacity: 0, },
                    QcEIwdpHn: { opacity: 0, },
                    udHfq45LS: { opacity: 0, },
                    ZNHbdIJKd: { opacity: 0, },
                  },
                  ...addPropertyOverrides6(
                    {
                      bmOYz6gay: { transformTemplate: void 0, },
                      cg1e52nt2: { transformTemplate: void 0, },
                      fhIf6dGTg: { transformTemplate: void 0, },
                      HAgS9njVa: { transformTemplate: void 0, },
                      NsO3auvSc: { transformTemplate: void 0, },
                      QcEIwdpHn: { transformTemplate: void 0, },
                      rfZM8jP4B: { transformTemplate: void 0, },
                      udHfq45LS: { transformTemplate: void 0, },
                      Ugn1WXH_Q: { transformTemplate: void 0, },
                      vhOykwvnY: { transformTemplate: void 0, },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'EiFaCbusC',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'EiFaCbusC',
                    LNNJy1jnm: 'FNw58JHcH',
                    NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'vVjMhdARB',
                    VOTcq87Vu: true,
                    vZATQhujj: 'Board Dimensions',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        Cr5qNjOdj: { variant: 'K8oqZ2hdT', },
                        fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                        h124nvy2N: { variant: 'K8oqZ2hdT', },
                        HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                        l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                        NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                        qMUngWgkC: { variant: 'K8oqZ2hdT', },
                        qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                        r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                        rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        udHfq45LS: { variant: 'K8oqZ2hdT', },
                        Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
              isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                ...addPropertyOverrides6(
                  { Cr5qNjOdj: { value: transition2, }, h124nvy2N: { value: transition2, }, ZNHbdIJKd: { value: transition2, }, },
                  baseVariant,
                  gestureVariant,
                ),
                children: /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-d60suy-container',
                  layoutDependency,
                  layoutId: 'UrEVv8Wpi-container',
                  style: { opacity: 1, },
                  variants: {
                    cg1e52nt2: { opacity: 0, },
                    Cr5qNjOdj: { opacity: 0, },
                    h124nvy2N: { opacity: 0, },
                    QcEIwdpHn: { opacity: 0, },
                    udHfq45LS: { opacity: 0, },
                    ZNHbdIJKd: { opacity: 0, },
                  },
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'UrEVv8Wpi',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'UrEVv8Wpi',
                    LNNJy1jnm: 'FNw58JHcH',
                    NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'vVjMhdARB',
                    VOTcq87Vu: true,
                    vZATQhujj: 'Board Dimensions',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        Cr5qNjOdj: { variant: 'K8oqZ2hdT', },
                        fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                        h124nvy2N: { variant: 'K8oqZ2hdT', },
                        HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                        l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                        NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                        qMUngWgkC: { variant: 'K8oqZ2hdT', },
                        qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                        r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                        rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        udHfq45LS: { variant: 'K8oqZ2hdT', },
                        Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
              isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                ...addPropertyOverrides6(
                  { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, },
                  baseVariant,
                  gestureVariant,
                ),
                children: /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-1iaswxc-container',
                  layoutDependency,
                  layoutId: 'damywTtdg-container',
                  style: { opacity: 1, },
                  variants: { cg1e52nt2: { opacity: 0, }, QcEIwdpHn: { opacity: 0, }, udHfq45LS: { opacity: 0, }, },
                  ...addPropertyOverrides6(
                    {
                      cg1e52nt2: { transformTemplate: transformTemplate12, },
                      h124nvy2N: { transformTemplate: transformTemplate12, },
                      QcEIwdpHn: { transformTemplate: transformTemplate12, },
                      udHfq45LS: { transformTemplate: transformTemplate12, },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'damywTtdg',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'damywTtdg',
                    LNNJy1jnm: 'FNw58JHcH',
                    NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'vVjMhdARB',
                    VOTcq87Vu: true,
                    vZATQhujj: 'Board Dimensions',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                        fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                        h124nvy2N: { variant: 'uTj0cEPb8', },
                        HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                        l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                        NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                        qMUngWgkC: { variant: 'K8oqZ2hdT', },
                        qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                        r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                        rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        udHfq45LS: { variant: 'K8oqZ2hdT', },
                        Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
              isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                ...addPropertyOverrides6(
                  { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, },
                  baseVariant,
                  gestureVariant,
                ),
                children: /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-ereqn5-container',
                  layoutDependency,
                  layoutId: 'GNBmiGjGk-container',
                  style: { opacity: 1, },
                  variants: { cg1e52nt2: { opacity: 0, }, QcEIwdpHn: { opacity: 0, }, udHfq45LS: { opacity: 0, }, },
                  ...addPropertyOverrides6({ h124nvy2N: { transformTemplate: transformTemplate12, }, }, baseVariant, gestureVariant,),
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'GNBmiGjGk',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'GNBmiGjGk',
                    LNNJy1jnm: 'FNw58JHcH',
                    NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'vVjMhdARB',
                    VOTcq87Vu: true,
                    vZATQhujj: 'Board Dimensions',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                        fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                        h124nvy2N: { variant: 'uTj0cEPb8', },
                        HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                        l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                        NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                        qMUngWgkC: { variant: 'K8oqZ2hdT', },
                        qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                        r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                        rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        udHfq45LS: { variant: 'K8oqZ2hdT', },
                        Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
              isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                ...addPropertyOverrides6(
                  { Cr5qNjOdj: { value: transition2, }, h124nvy2N: { value: transition2, }, ZNHbdIJKd: { value: transition2, }, },
                  baseVariant,
                  gestureVariant,
                ),
                children: /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-8jq7kp-container',
                  layoutDependency,
                  layoutId: 'yT9ZoWJyq-container',
                  style: { opacity: 1, },
                  variants: {
                    cg1e52nt2: { opacity: 0, },
                    Cr5qNjOdj: { opacity: 0, },
                    h124nvy2N: { opacity: 0, },
                    QcEIwdpHn: { opacity: 0, },
                    udHfq45LS: { opacity: 0, },
                    ZNHbdIJKd: { opacity: 0, },
                  },
                  ...addPropertyOverrides6(
                    {
                      cg1e52nt2: { transformTemplate: transformTemplate3, },
                      QcEIwdpHn: { transformTemplate: transformTemplate3, },
                      udHfq45LS: { transformTemplate: transformTemplate3, },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-e822dd2c-d150-4a11-98b6-5a9a4e20fdc0, rgb(156, 93, 229)) /* {"name":"Amethyst"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'yT9ZoWJyq',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'yT9ZoWJyq',
                    LNNJy1jnm: 'FNw58JHcH',
                    NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'vVjMhdARB',
                    VOTcq87Vu: true,
                    vZATQhujj: 'Board Dimensions',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        Cr5qNjOdj: { variant: 'K8oqZ2hdT', },
                        fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                        h124nvy2N: { variant: 'K8oqZ2hdT', },
                        HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                        l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                        NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                        qMUngWgkC: { variant: 'K8oqZ2hdT', },
                        qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                        r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                        rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        udHfq45LS: { variant: 'K8oqZ2hdT', },
                        Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
              isDisplayed3() && /* @__PURE__ */ _jsx8(Transition6, {
                ...addPropertyOverrides6(
                  { Cr5qNjOdj: { value: transition2, }, h124nvy2N: { value: transition2, }, ZNHbdIJKd: { value: transition2, }, },
                  baseVariant,
                  gestureVariant,
                ),
                children: /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-121179n-container',
                  layoutDependency,
                  layoutId: 'WKaH2EbbI-container',
                  style: { opacity: 1, },
                  variants: {
                    cg1e52nt2: { opacity: 0, },
                    Cr5qNjOdj: { opacity: 0, },
                    h124nvy2N: { opacity: 0, },
                    QcEIwdpHn: { opacity: 0, },
                    udHfq45LS: { opacity: 0, },
                    ZNHbdIJKd: { opacity: 0, },
                  },
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'WKaH2EbbI',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'WKaH2EbbI',
                    LNNJy1jnm: 'FNw58JHcH',
                    NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'vVjMhdARB',
                    VOTcq87Vu: true,
                    vZATQhujj: 'Board Dimensions',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        Cr5qNjOdj: { variant: 'K8oqZ2hdT', },
                        fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        gDTDJiCJ2: { variant: 'K8oqZ2hdT', },
                        h124nvy2N: { variant: 'K8oqZ2hdT', },
                        HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        kFGmGEOUz: { variant: 'K8oqZ2hdT', },
                        l5FvQV66Q: { variant: 'K8oqZ2hdT', },
                        NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        p6HKTvlB3: { variant: 'K8oqZ2hdT', },
                        qMUngWgkC: { variant: 'K8oqZ2hdT', },
                        qT5kEYyp_: { variant: 'K8oqZ2hdT', },
                        r8IR85ZDv: { variant: 'K8oqZ2hdT', },
                        rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        udHfq45LS: { variant: 'K8oqZ2hdT', },
                        Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        ZNHbdIJKd: { variant: 'K8oqZ2hdT', },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
            ],
          },),
          isDisplayed2() && /* @__PURE__ */ _jsx8(Transition6, {
            ...addPropertyOverrides6(
              { Cr5qNjOdj: { value: transition5, }, h124nvy2N: { value: transition5, }, ZNHbdIJKd: { value: transition5, }, },
              baseVariant,
              gestureVariant,
            ),
            children: /* @__PURE__ */ _jsxs6(motion7.div, {
              className: 'framer-1w2gq54',
              'data-framer-name': 'Layer 2',
              layoutDependency,
              layoutId: 'GuJgVxdD8',
              style: { filter: 'none', opacity: 1, rotate: 0, WebkitFilter: 'none', },
              variants: {
                bmOYz6gay: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                cq7D62bxc: { filter: 'blur(1px)', WebkitFilter: 'blur(1px)', },
                Cr5qNjOdj: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                fhIf6dGTg: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                gDTDJiCJ2: { filter: 'blur(3px)', rotate: 11, WebkitFilter: 'blur(3px)', },
                h124nvy2N: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                HAgS9njVa: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                kFGmGEOUz: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                l5FvQV66Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                NsO3auvSc: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                p6HKTvlB3: { filter: 'blur(5px)', WebkitFilter: 'blur(5px)', },
                qT5kEYyp_: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                rfZM8jP4B: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                udHfq45LS: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                Ugn1WXH_Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                vhOykwvnY: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                Z1sTRLzN1: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                ZNHbdIJKd: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              },
              children: [
                isDisplayed4() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-1togqzb-container',
                    layoutDependency,
                    layoutId: 'HiU_aZKvz-container',
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'HiU_aZKvz',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'HiU_aZKvz',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uTj0cEPb8',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'vVjMhdARB', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'vVjMhdARB', },
                          l5FvQV66Q: { variant: 'vVjMhdARB', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'vVjMhdARB', },
                          qMUngWgkC: { variant: 'vVjMhdARB', },
                          qT5kEYyp_: { variant: 'vVjMhdARB', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'vVjMhdARB', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { style: { height: '100%', width: '100%', }, variant: 'vVjMhdARB', },
                          ZNHbdIJKd: { variant: 'vVjMhdARB', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed4() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-u2l7lb-container',
                    layoutDependency,
                    layoutId: 'R_SllmlLt-container',
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'R_SllmlLt',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'R_SllmlLt',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uTj0cEPb8',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'vVjMhdARB', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'vVjMhdARB', },
                          l5FvQV66Q: { variant: 'vVjMhdARB', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'vVjMhdARB', },
                          qMUngWgkC: { variant: 'vVjMhdARB', },
                          qT5kEYyp_: { variant: 'vVjMhdARB', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'vVjMhdARB', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { style: { height: '100%', width: '100%', }, variant: 'vVjMhdARB', },
                          ZNHbdIJKd: { variant: 'vVjMhdARB', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed4() && /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-dt1nri-container',
                  layoutDependency,
                  layoutId: 'AMZsQkyu0-container',
                  style: { opacity: 1, },
                  variants: { Cr5qNjOdj: { opacity: 0, }, h124nvy2N: { opacity: 0, }, ZNHbdIJKd: { opacity: 0, }, },
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-e822dd2c-d150-4a11-98b6-5a9a4e20fdc0, rgb(156, 93, 229)) /* {"name":"Amethyst"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'AMZsQkyu0',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'AMZsQkyu0',
                    LNNJy1jnm: 'FNw58JHcH',
                    NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'uTj0cEPb8',
                    VOTcq87Vu: true,
                    vZATQhujj: 'Board Dimensions',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        Cr5qNjOdj: { variant: 'vVjMhdARB', },
                        fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        gDTDJiCJ2: { variant: 'vVjMhdARB', },
                        h124nvy2N: { variant: 'vVjMhdARB', },
                        HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        kFGmGEOUz: { variant: 'vVjMhdARB', },
                        l5FvQV66Q: { variant: 'vVjMhdARB', },
                        NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        p6HKTvlB3: { variant: 'vVjMhdARB', },
                        qMUngWgkC: { variant: 'vVjMhdARB', },
                        qT5kEYyp_: { variant: 'vVjMhdARB', },
                        rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        udHfq45LS: { variant: 'vVjMhdARB', },
                        Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        Z1sTRLzN1: { style: { height: '100%', }, variant: 'vVjMhdARB', },
                        ZNHbdIJKd: { variant: 'vVjMhdARB', },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
                isDisplayed4() && /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-vm0lt-container',
                  layoutDependency,
                  layoutId: 'CNXy5TkRd-container',
                  style: { opacity: 1, },
                  variants: { Cr5qNjOdj: { opacity: 0, }, h124nvy2N: { opacity: 0, }, ZNHbdIJKd: { opacity: 0, }, },
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'CNXy5TkRd',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'CNXy5TkRd',
                    LNNJy1jnm: 'FNw58JHcH',
                    NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'uTj0cEPb8',
                    VOTcq87Vu: true,
                    vZATQhujj: 'Board Dimensions',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        Cr5qNjOdj: { variant: 'vVjMhdARB', },
                        fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        gDTDJiCJ2: { variant: 'vVjMhdARB', },
                        h124nvy2N: { variant: 'vVjMhdARB', },
                        HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        kFGmGEOUz: { variant: 'vVjMhdARB', },
                        l5FvQV66Q: { variant: 'vVjMhdARB', },
                        NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        p6HKTvlB3: { variant: 'vVjMhdARB', },
                        qMUngWgkC: { variant: 'vVjMhdARB', },
                        qT5kEYyp_: { variant: 'vVjMhdARB', },
                        rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        udHfq45LS: { variant: 'vVjMhdARB', },
                        Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        Z1sTRLzN1: { style: { height: '100%', }, variant: 'vVjMhdARB', },
                        ZNHbdIJKd: { variant: 'vVjMhdARB', },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
                isDisplayed4() && /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-1xv0t2j-container',
                  layoutDependency,
                  layoutId: 'nDR3RU8yt-container',
                  style: { opacity: 1, },
                  variants: { Cr5qNjOdj: { opacity: 0, }, h124nvy2N: { opacity: 0, }, ZNHbdIJKd: { opacity: 0, }, },
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'nDR3RU8yt',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'nDR3RU8yt',
                    LNNJy1jnm: 'FNw58JHcH',
                    NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'uTj0cEPb8',
                    VOTcq87Vu: true,
                    vZATQhujj: 'Board Dimensions',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        Cr5qNjOdj: { variant: 'vVjMhdARB', },
                        fhIf6dGTg: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        gDTDJiCJ2: { variant: 'vVjMhdARB', },
                        h124nvy2N: { variant: 'vVjMhdARB', },
                        HAgS9njVa: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        kFGmGEOUz: { variant: 'vVjMhdARB', },
                        l5FvQV66Q: { variant: 'vVjMhdARB', },
                        NsO3auvSc: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        p6HKTvlB3: { variant: 'vVjMhdARB', },
                        qMUngWgkC: { variant: 'vVjMhdARB', },
                        qT5kEYyp_: { variant: 'vVjMhdARB', },
                        rfZM8jP4B: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        udHfq45LS: { variant: 'vVjMhdARB', },
                        Ugn1WXH_Q: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        vhOykwvnY: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        Z1sTRLzN1: { style: { height: '100%', }, variant: 'vVjMhdARB', },
                        ZNHbdIJKd: { variant: 'vVjMhdARB', },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
                isDisplayed4() && /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-lc2jrz-container',
                  layoutDependency,
                  layoutId: 'G5F6iqn5_-container',
                  style: { opacity: 0.36, },
                  variants: {
                    bmOYz6gay: { opacity: 1, },
                    cg1e52nt2: { opacity: 1, },
                    Cr5qNjOdj: { opacity: 0, },
                    fhIf6dGTg: { opacity: 1, },
                    gDTDJiCJ2: { opacity: 1, },
                    h124nvy2N: { opacity: 0, },
                    HAgS9njVa: { opacity: 1, },
                    kFGmGEOUz: { opacity: 1, },
                    l5FvQV66Q: { opacity: 1, },
                    NsO3auvSc: { opacity: 1, },
                    p6HKTvlB3: { opacity: 1, },
                    QcEIwdpHn: { opacity: 1, },
                    qMUngWgkC: { opacity: 1, },
                    qT5kEYyp_: { opacity: 1, },
                    r8IR85ZDv: { opacity: 1, },
                    rfZM8jP4B: { opacity: 1, },
                    udHfq45LS: { opacity: 1, },
                    Ugn1WXH_Q: { opacity: 1, },
                    vhOykwvnY: { opacity: 1, },
                    Z1sTRLzN1: { opacity: 1, },
                    ZNHbdIJKd: { opacity: 0, },
                  },
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'G5F6iqn5_',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'G5F6iqn5_',
                    LNNJy1jnm: 'FNw58JHcH',
                    NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'uTj0cEPb8',
                    VOTcq87Vu: true,
                    vZATQhujj: 'Board Dimensions',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        Cr5qNjOdj: { variant: 'vVjMhdARB', },
                        fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        gDTDJiCJ2: { variant: 'vVjMhdARB', },
                        h124nvy2N: { variant: 'vVjMhdARB', },
                        HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        kFGmGEOUz: { variant: 'vVjMhdARB', },
                        l5FvQV66Q: { variant: 'vVjMhdARB', },
                        NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        p6HKTvlB3: { variant: 'vVjMhdARB', },
                        qMUngWgkC: { variant: 'vVjMhdARB', },
                        qT5kEYyp_: { variant: 'vVjMhdARB', },
                        rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        udHfq45LS: { variant: 'vVjMhdARB', },
                        Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        Z1sTRLzN1: { variant: 'vVjMhdARB', },
                        ZNHbdIJKd: { variant: 'vVjMhdARB', },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
                isDisplayed4() && /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-15swu5u-container',
                  layoutDependency,
                  layoutId: 'H154cZRUZ-container',
                  style: { opacity: 1, },
                  variants: { Cr5qNjOdj: { opacity: 0, }, h124nvy2N: { opacity: 0, }, ZNHbdIJKd: { opacity: 0, }, },
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'H154cZRUZ',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'H154cZRUZ',
                    LNNJy1jnm: 'FNw58JHcH',
                    NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'uTj0cEPb8',
                    VOTcq87Vu: true,
                    vZATQhujj: 'Board Dimensions',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        Cr5qNjOdj: { variant: 'vVjMhdARB', },
                        fhIf6dGTg: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        gDTDJiCJ2: { variant: 'vVjMhdARB', },
                        h124nvy2N: { variant: 'vVjMhdARB', },
                        HAgS9njVa: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        kFGmGEOUz: { variant: 'vVjMhdARB', },
                        l5FvQV66Q: { variant: 'vVjMhdARB', },
                        NsO3auvSc: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        p6HKTvlB3: { variant: 'vVjMhdARB', },
                        qMUngWgkC: { variant: 'vVjMhdARB', },
                        qT5kEYyp_: { variant: 'vVjMhdARB', },
                        rfZM8jP4B: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        udHfq45LS: { variant: 'vVjMhdARB', },
                        Ugn1WXH_Q: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        vhOykwvnY: { style: { height: '100%', width: '100%', }, variant: 'FXIjKjDPL', },
                        Z1sTRLzN1: { style: { height: '100%', }, variant: 'vVjMhdARB', },
                        ZNHbdIJKd: { variant: 'vVjMhdARB', },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              ],
            },),
          },),
          /* @__PURE__ */ _jsx8(Transition6, {
            ...addPropertyOverrides6(
              {
                Cr5qNjOdj: { value: transition7, },
                h124nvy2N: { value: transition7, },
                HovROSEim: { value: transition6, },
                ZNHbdIJKd: { value: transition7, },
              },
              baseVariant,
              gestureVariant,
            ),
            children: /* @__PURE__ */ _jsxs6(motion7.div, {
              className: 'framer-ywbmcs',
              'data-framer-name': 'Layer 1',
              layoutDependency,
              layoutId: 'ETAGciIqA',
              style: { filter: 'none', opacity: 1, rotate: 0, WebkitFilter: 'none', },
              variants: {
                bmOYz6gay: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                cq7D62bxc: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                Cr5qNjOdj: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                fhIf6dGTg: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                gDTDJiCJ2: { filter: 'blur(1px)', rotate: 64, WebkitFilter: 'blur(1px)', },
                h124nvy2N: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                HAgS9njVa: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                kFGmGEOUz: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                l5FvQV66Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                NsO3auvSc: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                p6HKTvlB3: { filter: 'blur(3px)', WebkitFilter: 'blur(3px)', },
                qT5kEYyp_: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                rfZM8jP4B: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                udHfq45LS: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                Ugn1WXH_Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                vhOykwvnY: { filter: 'blur(0px)', opacity: 0, WebkitFilter: 'blur(0px)', },
                Z1sTRLzN1: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                ZNHbdIJKd: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              },
              children: [
                /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6({ Z1sTRLzN1: { value: transition8, }, }, baseVariant, gestureVariant,),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-1egxi8f-container',
                    layoutDependency,
                    layoutId: 'D5EbKbo6S-container',
                    style: { opacity: 1, },
                    transformTemplate: transformTemplate22,
                    variants: {
                      cq7D62bxc: { opacity: 0, },
                      Cr5qNjOdj: { opacity: 0, },
                      Du1gnhwdF: { opacity: 0, },
                      dUMZVZnV0: { opacity: 0, },
                      dVLWELU6e: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      HovROSEim: { opacity: 0, },
                      lBUZui6j9: { opacity: 0, },
                      MX2TbvLxw: { opacity: 0, },
                      vf_oeYc8q: { opacity: 0, },
                      XACXI8mDn: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { transformTemplate: void 0, },
                        fhIf6dGTg: { transformTemplate: void 0, },
                        HAgS9njVa: { transformTemplate: void 0, },
                        NsO3auvSc: { transformTemplate: void 0, },
                        rfZM8jP4B: { transformTemplate: void 0, },
                        Ugn1WXH_Q: { transformTemplate: void 0, },
                        vhOykwvnY: { transformTemplate: void 0, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'D5EbKbo6S',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'D5EbKbo6S',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uyxhsUNZq',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          cg1e52nt2: { VOTcq87Vu: false, },
                          cq7D62bxc: { variant: 'uTj0cEPb8', },
                          Cr5qNjOdj: { variant: 'uTj0cEPb8', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                          h124nvy2N: { variant: 'uTj0cEPb8', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'uTj0cEPb8', },
                          l5FvQV66Q: { variant: 'uTj0cEPb8', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'uTj0cEPb8', },
                          qMUngWgkC: { variant: 'uTj0cEPb8', },
                          qT5kEYyp_: { variant: 'uTj0cEPb8', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'uTj0cEPb8', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                          ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed5() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Du1gnhwdF: { value: transition9, }, MX2TbvLxw: { value: transition9, }, Z1sTRLzN1: { value: transition8, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-xsw623-container',
                    layoutDependency,
                    layoutId: 'RmjeBraiJ-container',
                    style: { opacity: 1, },
                    transformTemplate: transformTemplate22,
                    variants: {
                      cq7D62bxc: { opacity: 0, },
                      Cr5qNjOdj: { opacity: 0, },
                      dVLWELU6e: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      HovROSEim: { opacity: 0, },
                      lBUZui6j9: { opacity: 0, },
                      vf_oeYc8q: { opacity: 0, },
                      XACXI8mDn: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    ...addPropertyOverrides6(
                      {
                        Du1gnhwdF: { transformTemplate: void 0, },
                        fhIf6dGTg: { transformTemplate: void 0, },
                        MX2TbvLxw: { transformTemplate: void 0, },
                        rfZM8jP4B: { transformTemplate: void 0, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'RmjeBraiJ',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'RmjeBraiJ',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uyxhsUNZq',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          cq7D62bxc: { variant: 'uTj0cEPb8', },
                          Cr5qNjOdj: { variant: 'uTj0cEPb8', },
                          Du1gnhwdF: {
                            LNNJy1jnm: 'pXF5zK4BB',
                            NvMMjvlBy: 'Describe the primary goal of your tool.',
                            variant: 'Cr7AsQCPR',
                            VOTcq87Vu: false,
                            vZATQhujj: 'Define Primary Goal',
                            zgF6TYXbc: 'nWf8FHUKr',
                          },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                          h124nvy2N: { variant: 'uTj0cEPb8', },
                          kFGmGEOUz: { variant: 'uTj0cEPb8', },
                          l5FvQV66Q: { variant: 'uTj0cEPb8', },
                          MX2TbvLxw: {
                            k4ezTegiq: 80,
                            LNNJy1jnm: 'pXF5zK4BB',
                            NvMMjvlBy: 'Describe the primary goal of your tool.',
                            variant: 'Cr7AsQCPR',
                            VOTcq87Vu: false,
                            vZATQhujj: 'Define Primary Goal',
                            zgF6TYXbc: 'nWf8FHUKr',
                          },
                          p6HKTvlB3: { variant: 'uTj0cEPb8', },
                          qMUngWgkC: { variant: 'uTj0cEPb8', },
                          qT5kEYyp_: { variant: 'uTj0cEPb8', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'uTj0cEPb8', },
                          Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                          ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6({ Z1sTRLzN1: { value: transition8, }, }, baseVariant, gestureVariant,),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-15gph2n-container',
                    layoutDependency,
                    layoutId: 'h6Nd9WFsm-container',
                    style: { opacity: 1, },
                    transformTemplate: transformTemplate22,
                    variants: {
                      cq7D62bxc: { opacity: 0, },
                      Cr5qNjOdj: { opacity: 0, },
                      Du1gnhwdF: { opacity: 0, },
                      dUMZVZnV0: { opacity: 0, },
                      dVLWELU6e: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      HovROSEim: { opacity: 0, },
                      lBUZui6j9: { opacity: 0, },
                      MX2TbvLxw: { opacity: 0, },
                      vf_oeYc8q: { opacity: 0, },
                      XACXI8mDn: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { transformTemplate: void 0, },
                        fhIf6dGTg: { transformTemplate: void 0, },
                        HAgS9njVa: { transformTemplate: void 0, },
                        NsO3auvSc: { transformTemplate: void 0, },
                        rfZM8jP4B: { transformTemplate: void 0, },
                        Ugn1WXH_Q: { transformTemplate: void 0, },
                        vhOykwvnY: { transformTemplate: void 0, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'h6Nd9WFsm',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'h6Nd9WFsm',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uyxhsUNZq',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          cq7D62bxc: { variant: 'uTj0cEPb8', },
                          Cr5qNjOdj: { variant: 'uTj0cEPb8', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                          h124nvy2N: { variant: 'uTj0cEPb8', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'uTj0cEPb8', },
                          l5FvQV66Q: { variant: 'uTj0cEPb8', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'uTj0cEPb8', },
                          qMUngWgkC: { variant: 'uTj0cEPb8', },
                          qT5kEYyp_: { variant: 'uTj0cEPb8', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'uTj0cEPb8', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                          ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6({ Z1sTRLzN1: { value: transition8, }, }, baseVariant, gestureVariant,),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-yox9q5-container',
                    layoutDependency,
                    layoutId: 'tExCQhNKD-container',
                    style: { opacity: 1, },
                    transformTemplate: transformTemplate22,
                    variants: {
                      cq7D62bxc: { opacity: 0, },
                      Cr5qNjOdj: { opacity: 0, },
                      Du1gnhwdF: { opacity: 0, },
                      dUMZVZnV0: { opacity: 0, },
                      dVLWELU6e: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      HovROSEim: { opacity: 0, },
                      lBUZui6j9: { opacity: 0, },
                      MX2TbvLxw: { opacity: 0, },
                      vf_oeYc8q: { opacity: 0, },
                      XACXI8mDn: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { transformTemplate: void 0, },
                        fhIf6dGTg: { transformTemplate: void 0, },
                        HAgS9njVa: { transformTemplate: void 0, },
                        NsO3auvSc: { transformTemplate: void 0, },
                        rfZM8jP4B: { transformTemplate: void 0, },
                        Ugn1WXH_Q: { transformTemplate: void 0, },
                        vhOykwvnY: { transformTemplate: void 0, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'tExCQhNKD',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'tExCQhNKD',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uyxhsUNZq',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          cq7D62bxc: { variant: 'uTj0cEPb8', },
                          Cr5qNjOdj: { variant: 'uTj0cEPb8', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                          h124nvy2N: { variant: 'uTj0cEPb8', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'uTj0cEPb8', },
                          l5FvQV66Q: { variant: 'uTj0cEPb8', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'uTj0cEPb8', },
                          qMUngWgkC: { variant: 'uTj0cEPb8', },
                          qT5kEYyp_: { variant: 'uTj0cEPb8', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'uTj0cEPb8', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                          ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6({ Z1sTRLzN1: { value: transition8, }, }, baseVariant, gestureVariant,),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-17glung-container',
                    layoutDependency,
                    layoutId: 'H9WPJC9De-container',
                    style: { opacity: 1, },
                    variants: {
                      cq7D62bxc: { opacity: 0, },
                      Cr5qNjOdj: { opacity: 0, },
                      Du1gnhwdF: { opacity: 0, },
                      dUMZVZnV0: { opacity: 0, },
                      dVLWELU6e: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      HovROSEim: { opacity: 0, },
                      lBUZui6j9: { opacity: 0, },
                      MX2TbvLxw: { opacity: 0, },
                      vf_oeYc8q: { opacity: 0, },
                      XACXI8mDn: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    ...addPropertyOverrides6(
                      {
                        cq7D62bxc: { transformTemplate: transformTemplate22, },
                        dVLWELU6e: { transformTemplate: transformTemplate22, },
                        HovROSEim: { transformTemplate: transformTemplate22, },
                        lBUZui6j9: { transformTemplate: transformTemplate22, },
                        vf_oeYc8q: { transformTemplate: transformTemplate22, },
                        XACXI8mDn: { transformTemplate: transformTemplate22, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'H9WPJC9De',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'H9WPJC9De',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uyxhsUNZq',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          cq7D62bxc: { variant: 'uTj0cEPb8', },
                          Cr5qNjOdj: { variant: 'uTj0cEPb8', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                          h124nvy2N: { variant: 'uTj0cEPb8', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'uTj0cEPb8', },
                          l5FvQV66Q: { variant: 'uTj0cEPb8', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'uTj0cEPb8', },
                          qMUngWgkC: { variant: 'uTj0cEPb8', },
                          qT5kEYyp_: { variant: 'uTj0cEPb8', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'uTj0cEPb8', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                          ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed6() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Du1gnhwdF: { value: transition9, }, MX2TbvLxw: { value: transition9, }, Z1sTRLzN1: { value: transition8, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-n0gl4w-container',
                    layoutDependency,
                    layoutId: 'ZymjGBNkx-container',
                    style: { opacity: 1, },
                    transformTemplate: transformTemplate22,
                    variants: {
                      cq7D62bxc: { opacity: 0, },
                      Cr5qNjOdj: { opacity: 0, },
                      dVLWELU6e: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      HovROSEim: { opacity: 0, },
                      lBUZui6j9: { opacity: 0, },
                      vf_oeYc8q: { opacity: 0, },
                      XACXI8mDn: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { transformTemplate: void 0, },
                        Du1gnhwdF: { transformTemplate: void 0, },
                        fhIf6dGTg: { transformTemplate: void 0, },
                        HAgS9njVa: { transformTemplate: void 0, },
                        MX2TbvLxw: { transformTemplate: void 0, },
                        NsO3auvSc: { transformTemplate: void 0, },
                        rfZM8jP4B: { transformTemplate: void 0, },
                        Ugn1WXH_Q: { transformTemplate: void 0, },
                        vhOykwvnY: { transformTemplate: void 0, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-e822dd2c-d150-4a11-98b6-5a9a4e20fdc0, rgb(156, 93, 229)) /* {"name":"Amethyst"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'ZymjGBNkx',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'ZymjGBNkx',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uyxhsUNZq',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          cq7D62bxc: { variant: 'uTj0cEPb8', },
                          Cr5qNjOdj: { variant: 'uTj0cEPb8', },
                          Du1gnhwdF: {
                            C0xbi_CXP: 'Software',
                            Jdv7M1lr6: 'Hardware',
                            k4ezTegiq: 80,
                            LNNJy1jnm: 'R8yTQtly5',
                            NvMMjvlBy: 'Select whether the tool is a physical device or a software application.',
                            variant: 'Cr7AsQCPR',
                            VOTcq87Vu: false,
                            vZATQhujj: 'Hardware or Software',
                            zgF6TYXbc: 'IHKJNDltd',
                          },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                          h124nvy2N: { variant: 'uTj0cEPb8', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'uTj0cEPb8', },
                          l5FvQV66Q: { variant: 'uTj0cEPb8', },
                          MX2TbvLxw: {
                            C0xbi_CXP: 'Software',
                            Jdv7M1lr6: 'Hardware',
                            JM8R5zcqV: true,
                            k4ezTegiq: 80,
                            LNNJy1jnm: 'R8yTQtly5',
                            NvMMjvlBy: 'Select whether the tool is a physical device or a software application.',
                            variant: 'Cr7AsQCPR',
                            VOTcq87Vu: false,
                            vZATQhujj: 'Hardware or Software',
                            zgF6TYXbc: 'IHKJNDltd',
                          },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'uTj0cEPb8', },
                          qMUngWgkC: { variant: 'uTj0cEPb8', },
                          qT5kEYyp_: { variant: 'uTj0cEPb8', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'uTj0cEPb8', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                          ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed7() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Du1gnhwdF: { value: transition9, }, MX2TbvLxw: { value: transition9, }, Z1sTRLzN1: { value: transition8, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-10kjnxc-container',
                    layoutDependency,
                    layoutId: 'w3kNSZaAk-container',
                    style: { opacity: 1, },
                    transformTemplate: transformTemplate22,
                    variants: {
                      cq7D62bxc: { opacity: 0, },
                      dVLWELU6e: { opacity: 0, },
                      HovROSEim: { opacity: 0, },
                      lBUZui6j9: { opacity: 0, },
                      vf_oeYc8q: { opacity: 0, },
                      XACXI8mDn: { opacity: 0, },
                    },
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { transformTemplate: void 0, },
                        Du1gnhwdF: { transformTemplate: void 0, },
                        fhIf6dGTg: { transformTemplate: void 0, },
                        HAgS9njVa: { transformTemplate: void 0, },
                        MX2TbvLxw: { transformTemplate: void 0, },
                        NsO3auvSc: { transformTemplate: void 0, },
                        rfZM8jP4B: { transformTemplate: void 0, },
                        Ugn1WXH_Q: { transformTemplate: void 0, },
                        vhOykwvnY: { transformTemplate: void 0, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'w3kNSZaAk',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'w3kNSZaAk',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'uyxhsUNZq',
                      VOTcq87Vu: false,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          cq7D62bxc: { variant: 'uTj0cEPb8', },
                          Du1gnhwdF: {
                            eZ_WIO8yz: 'Language',
                            JM8R5zcqV: true,
                            LNNJy1jnm: 'hjUA_q4Xo',
                            NvMMjvlBy: 'What area of cognition do you want to improve?',
                            OJMet4Rjs: 'Memory',
                            qQ_BO9qk8: 'Perception',
                            variant: 'Cr7AsQCPR',
                            vZATQhujj: 'Select Cognitive Area',
                          },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          gDTDJiCJ2: { variant: 'uTj0cEPb8', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          kFGmGEOUz: { variant: 'uTj0cEPb8', },
                          l5FvQV66Q: { variant: 'uTj0cEPb8', },
                          MX2TbvLxw: {
                            eZ_WIO8yz: 'Language',
                            JM8R5zcqV: true,
                            K5BysgXsx: 's7bcrIMxH',
                            LNNJy1jnm: 'hjUA_q4Xo',
                            NvMMjvlBy: 'What area of cognition do you want to improve?',
                            OJMet4Rjs: 'Memory',
                            qQ_BO9qk8: 'Perception',
                            variant: 'Cr7AsQCPR',
                            vZATQhujj: 'Select Cognitive Area',
                          },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          p6HKTvlB3: { variant: 'uTj0cEPb8', },
                          qMUngWgkC: { variant: 'uTj0cEPb8', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          udHfq45LS: { variant: 'uTj0cEPb8', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Z1sTRLzN1: { variant: 'uTj0cEPb8', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
              ],
            },),
          },),
          isDisplayed8() && /* @__PURE__ */ _jsx8(motion7.div, {
            className: 'framer-1mvnusd',
            'data-framer-name': 'Layer 4',
            layoutDependency,
            layoutId: 'mtEkOBUqz',
            style: { opacity: 1, rotate: 0, },
            variants: {
              bmOYz6gay: { opacity: 0, },
              gDTDJiCJ2: { rotate: -86, },
              HAgS9njVa: { opacity: 0, },
              qMUngWgkC: { opacity: 0, },
              vhOykwvnY: { opacity: 0, },
            },
            children: isDisplayed8() && /* @__PURE__ */ _jsxs6(motion7.div, {
              className: 'framer-1k3vrbv',
              layoutDependency,
              layoutId: 'CMunQga3Q',
              style: { filter: 'blur(7px)', opacity: 1, WebkitFilter: 'blur(7px)', },
              variants: {
                bmOYz6gay: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                cq7D62bxc: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                Cr5qNjOdj: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                fhIf6dGTg: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                h124nvy2N: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                HAgS9njVa: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                kFGmGEOUz: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                l5FvQV66Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                NsO3auvSc: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                p6HKTvlB3: { filter: 'blur(9px)', WebkitFilter: 'blur(9px)', },
                qMUngWgkC: { opacity: 0, },
                qT5kEYyp_: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                rfZM8jP4B: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                udHfq45LS: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                Ugn1WXH_Q: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                vhOykwvnY: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                Z1sTRLzN1: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
                ZNHbdIJKd: { filter: 'blur(0px)', WebkitFilter: 'blur(0px)', },
              },
              children: [
                isDisplayed9() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { h124nvy2N: { value: transition10, }, ZNHbdIJKd: { value: transition10, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-gkoso3-container',
                    layoutDependency,
                    layoutId: 'xDNxvPTdp-container',
                    style: { opacity: 1, },
                    variants: {
                      Cr5qNjOdj: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      l5FvQV66Q: { opacity: 0, },
                      qMUngWgkC: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    ...addPropertyOverrides6({ r8IR85ZDv: { transformTemplate: transformTemplate22, }, }, baseVariant, gestureVariant,),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'xDNxvPTdp',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'xDNxvPTdp',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'QKKRwxza_',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: {
                            cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          fhIf6dGTg: {
                            cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          HAgS9njVa: {
                            cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          NsO3auvSc: {
                            cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          rfZM8jP4B: {
                            cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          Ugn1WXH_Q: {
                            cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          vhOykwvnY: {
                            cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed9() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { h124nvy2N: { value: transition10, }, ZNHbdIJKd: { value: transition10, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-1yvmtw8-container',
                    layoutDependency,
                    layoutId: 'wvz648S9W-container',
                    style: { opacity: 1, },
                    variants: {
                      Cr5qNjOdj: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      l5FvQV66Q: { opacity: 0, },
                      qMUngWgkC: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    ...addPropertyOverrides6({ r8IR85ZDv: { transformTemplate: transformTemplate22, }, }, baseVariant, gestureVariant,),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-8bf6d357-6f97-4b36-9b48-c398e1a81f28, rgb(150, 55, 78)) /* {"name":"Amaranth"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'wvz648S9W',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'wvz648S9W',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'QKKRwxza_',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: {
                            cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          fhIf6dGTg: {
                            cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          HAgS9njVa: {
                            cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          NsO3auvSc: {
                            cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          rfZM8jP4B: {
                            cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          Ugn1WXH_Q: {
                            cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          vhOykwvnY: {
                            cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed9() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-w97bgk-container',
                    layoutDependency,
                    layoutId: 'WjMMah5to-container',
                    style: { opacity: 1, },
                    variants: { l5FvQV66Q: { opacity: 0, }, qMUngWgkC: { opacity: 0, }, },
                    ...addPropertyOverrides6(
                      { h124nvy2N: { transformTemplate: transformTemplate12, }, r8IR85ZDv: { transformTemplate: transformTemplate22, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'WjMMah5to',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'WjMMah5to',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'QKKRwxza_',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: {
                            cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                          fhIf6dGTg: {
                            cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          h124nvy2N: { variant: 'uTj0cEPb8', },
                          HAgS9njVa: {
                            cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          NsO3auvSc: {
                            cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          rfZM8jP4B: {
                            cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          Ugn1WXH_Q: {
                            cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          vhOykwvnY: {
                            cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed9() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-fpq9rw-container',
                    layoutDependency,
                    layoutId: 'djTUjO54n-container',
                    style: { opacity: 1, },
                    transformTemplate: transformTemplate3,
                    variants: { l5FvQV66Q: { opacity: 0, }, qMUngWgkC: { opacity: 0, }, },
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { transformTemplate: void 0, },
                        Cr5qNjOdj: { transformTemplate: void 0, },
                        fhIf6dGTg: { transformTemplate: void 0, },
                        h124nvy2N: { transformTemplate: transformTemplate12, },
                        HAgS9njVa: { transformTemplate: void 0, },
                        l5FvQV66Q: { transformTemplate: void 0, },
                        NsO3auvSc: { transformTemplate: void 0, },
                        qMUngWgkC: { transformTemplate: void 0, },
                        r8IR85ZDv: { transformTemplate: transformTemplate22, },
                        rfZM8jP4B: { transformTemplate: void 0, },
                        Ugn1WXH_Q: { transformTemplate: void 0, },
                        vhOykwvnY: { transformTemplate: void 0, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'djTUjO54n',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'djTUjO54n',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'QKKRwxza_',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: {
                            cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                          fhIf6dGTg: {
                            cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          h124nvy2N: { variant: 'uTj0cEPb8', },
                          HAgS9njVa: {
                            cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          NsO3auvSc: {
                            cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          rfZM8jP4B: {
                            cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          Ugn1WXH_Q: {
                            cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          vhOykwvnY: {
                            cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed9() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Cr5qNjOdj: { value: transition4, }, h124nvy2N: { value: transition3, }, ZNHbdIJKd: { value: transition10, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-160pc9z-container',
                    layoutDependency,
                    layoutId: 'xJw0y7a7r-container',
                    style: { opacity: 1, },
                    variants: { l5FvQV66Q: { opacity: 0, }, qMUngWgkC: { opacity: 0, }, },
                    ...addPropertyOverrides6(
                      { h124nvy2N: { transformTemplate: transformTemplate12, }, r8IR85ZDv: { transformTemplate: transformTemplate22, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-e822dd2c-d150-4a11-98b6-5a9a4e20fdc0, rgb(156, 93, 229)) /* {"name":"Amethyst"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'xJw0y7a7r',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'xJw0y7a7r',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'QKKRwxza_',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Cr5qNjOdj: { style: { height: '100%', width: '100%', }, variant: 'jFWx1BeuK', },
                          fhIf6dGTg: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          h124nvy2N: { variant: 'uTj0cEPb8', },
                          HAgS9njVa: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          NsO3auvSc: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          rfZM8jP4B: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          Ugn1WXH_Q: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                          vhOykwvnY: { style: { width: '100%', }, variant: 'FXIjKjDPL', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed9() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { h124nvy2N: { value: transition10, }, ZNHbdIJKd: { value: transition10, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-1jw6h9g-container',
                    layoutDependency,
                    layoutId: 'fbzUeHx9R-container',
                    style: { opacity: 1, },
                    variants: {
                      Cr5qNjOdj: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      l5FvQV66Q: { opacity: 0, },
                      qMUngWgkC: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    ...addPropertyOverrides6(
                      {
                        l5FvQV66Q: { transformTemplate: transformTemplate12, },
                        qMUngWgkC: { transformTemplate: transformTemplate12, },
                        r8IR85ZDv: { transformTemplate: transformTemplate22, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-67c2bbe6-d0ed-466b-8293-294df87a6675, rgb(205, 93, 204)) /* {"name":"Orchid"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'fbzUeHx9R',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'fbzUeHx9R',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'QKKRwxza_',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: {
                            cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          fhIf6dGTg: {
                            cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          HAgS9njVa: {
                            cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          NsO3auvSc: {
                            cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          rfZM8jP4B: {
                            cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          Ugn1WXH_Q: {
                            cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          vhOykwvnY: {
                            cRMlaJb1_: 'var(--token-c5dba3e8-a617-4220-8bf7-b36ab38ac589, rgb(69, 164, 176)) /* {"name":"Moonstone"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
                isDisplayed9() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { h124nvy2N: { value: transition10, }, ZNHbdIJKd: { value: transition10, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsx8(motion7.div, {
                    className: 'framer-1igj8fa-container',
                    layoutDependency,
                    layoutId: 'tvs76iJpG-container',
                    style: { opacity: 1, },
                    variants: {
                      Cr5qNjOdj: { opacity: 0, },
                      h124nvy2N: { opacity: 0, },
                      l5FvQV66Q: { opacity: 0, },
                      qMUngWgkC: { opacity: 0, },
                      ZNHbdIJKd: { opacity: 0, },
                    },
                    ...addPropertyOverrides6(
                      {
                        l5FvQV66Q: { transformTemplate: transformTemplate3, },
                        qMUngWgkC: { transformTemplate: transformTemplate3, },
                        r8IR85ZDv: { transformTemplate: transformTemplate22, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx8(stdin_default6, {
                      bGyluXMcm: 'C-2',
                      C0xbi_CXP: 'B',
                      cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
                      eZ_WIO8yz: 'Choice 3',
                      fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                      Gb15ibvMU: 'wZ2vnzihB',
                      height: '100%',
                      id: 'tvs76iJpG',
                      iDjlfHFIv: 'C-2',
                      Jdv7M1lr6: 'A',
                      JM8R5zcqV: false,
                      k4ezTegiq: 50,
                      K5BysgXsx: 'zAJDHJhkW',
                      layoutId: 'tvs76iJpG',
                      LNNJy1jnm: 'FNw58JHcH',
                      NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                      OJMet4Rjs: 'Choice 1',
                      qQ_BO9qk8: 'Choice 2',
                      TTpsRmZqr: true,
                      variant: 'QKKRwxza_',
                      VOTcq87Vu: true,
                      vZATQhujj: 'Board Dimensions',
                      width: '100%',
                      Xo22rvSfa: 'B-2',
                      Z93yscm8P: 'A-1',
                      zgF6TYXbc: 'LNmrAjenO',
                      ...addPropertyOverrides6(
                        {
                          bmOYz6gay: {
                            cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          fhIf6dGTg: {
                            cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          HAgS9njVa: {
                            cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          NsO3auvSc: {
                            cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          rfZM8jP4B: {
                            cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          Ugn1WXH_Q: {
                            cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                          vhOykwvnY: {
                            cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                            style: { width: '100%', },
                            variant: 'FXIjKjDPL',
                          },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                },),
              ],
            },),
          },),
          isDisplayed10() && /* @__PURE__ */ _jsx8(motion7.div, {
            className: 'framer-1jstyen-container',
            layoutDependency,
            layoutId: 'uG8Z9CRoe-container',
            style: { opacity: 1, },
            variants: { qMUngWgkC: { opacity: 0, }, },
            ...addPropertyOverrides6({ qMUngWgkC: { transformTemplate: transformTemplate22, }, }, baseVariant, gestureVariant,),
            children: /* @__PURE__ */ _jsx8(stdin_default6, {
              bGyluXMcm: 'C-2',
              C0xbi_CXP: 'B',
              cRMlaJb1_: 'var(--token-73c02931-d7f7-4ef9-bb83-00d2076801a3, rgb(245, 122, 41)) /* {"name":"Amber"} */',
              eZ_WIO8yz: 'Choice 3',
              fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
              Gb15ibvMU: 'wZ2vnzihB',
              height: '100%',
              id: 'uG8Z9CRoe',
              iDjlfHFIv: 'C-2',
              Jdv7M1lr6: 'A',
              JM8R5zcqV: false,
              k4ezTegiq: 50,
              K5BysgXsx: 'zAJDHJhkW',
              layoutId: 'uG8Z9CRoe',
              LNNJy1jnm: 'FNw58JHcH',
              NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
              OJMet4Rjs: 'Choice 1',
              qQ_BO9qk8: 'Choice 2',
              TTpsRmZqr: true,
              variant: 'l6T5PxAnq',
              VOTcq87Vu: true,
              vZATQhujj: 'Board Dimensions',
              width: '100%',
              Xo22rvSfa: 'B-2',
              Z93yscm8P: 'A-1',
              zgF6TYXbc: 'LNmrAjenO',
              ...addPropertyOverrides6({ qMUngWgkC: { variant: 'K8oqZ2hdT', }, }, baseVariant, gestureVariant,),
            },),
          },),
          isDisplayed11() && /* @__PURE__ */ _jsx8(Transition6, {
            ...addPropertyOverrides6(
              { Cr5qNjOdj: { value: transition7, }, h124nvy2N: { value: transition122, }, HovROSEim: { value: transition11, }, },
              baseVariant,
              gestureVariant,
            ),
            children: /* @__PURE__ */ _jsx8(motion7.div, {
              className: 'framer-p493zr-container',
              layoutDependency,
              layoutId: 'QpaYeYDIg-container',
              style: { opacity: 1, },
              variants: { bmOYz6gay: { opacity: 0, }, HAgS9njVa: { opacity: 0, }, vhOykwvnY: { opacity: 0, }, },
              children: /* @__PURE__ */ _jsx8(stdin_default7, {
                height: '100%',
                id: 'QpaYeYDIg',
                layoutId: 'QpaYeYDIg',
                style: { height: '100%', width: '100%', },
                variant: 'RspHZjbvA',
                width: '100%',
                ...addPropertyOverrides6(
                  {
                    dVLWELU6e: { variant: 'KzyHUFutd', },
                    fhIf6dGTg: { variant: 'NfdKYRGKU', },
                    gDTDJiCJ2: { variant: 'AKBlJHd8s', },
                    HovROSEim: { variant: 'CDTOPoYwJ', },
                    NsO3auvSc: { variant: 'NfdKYRGKU', },
                    rfZM8jP4B: { variant: 'NfdKYRGKU', },
                    Ugn1WXH_Q: { variant: 'NfdKYRGKU', },
                    Wzv1r0oKb: { WPG5b_gus: WPG5b_gusa7d9q8, },
                    XACXI8mDn: { variant: 'lR29aQ4aC', },
                  },
                  baseVariant,
                  gestureVariant,
                ),
              },),
            },),
          },),
          /* @__PURE__ */ _jsxs6(motion7.div, {
            className: 'framer-1gr4pd7',
            layoutDependency,
            layoutId: 'n1u20eF9q',
            children: [
              isDisplayed12() && /* @__PURE__ */ _jsx8(motion7.div, {
                className: 'framer-1ni00s4',
                layoutDependency,
                layoutId: 'akrn23ZMM',
                children: isDisplayed12() && /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-oet49y-container',
                  'data-framer-name': 'NODE A',
                  layoutDependency,
                  layoutId: 'btUuKgTN6-container',
                  name: 'NODE A',
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'btUuKgTN6',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'btUuKgTN6',
                    LNNJy1jnm: 'FNw58JHcH',
                    name: 'NODE A',
                    NvMMjvlBy: 'What area of cognition do you want to improve?',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'PvhAKPvc8',
                    VOTcq87Vu: false,
                    vZATQhujj: 'Select Cognitive Area',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        dUMZVZnV0: { LNNJy1jnm: 'hjUA_q4Xo', variant: 'Cr7AsQCPR', },
                        po9merzYT: { variant: 'uyxhsUNZq', },
                        Wzv1r0oKb: { VOTcq87Vu: true, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
              isDisplayed12() && /* @__PURE__ */ _jsx8(motion7.div, {
                className: 'framer-1gwffo1',
                layoutDependency,
                layoutId: 'bFadxB5zu',
                children: isDisplayed12() && /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-6g4na4-container',
                  'data-framer-name': 'NODE B',
                  layoutDependency,
                  layoutId: 'aWYVbb9XH-container',
                  name: 'NODE B',
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-e822dd2c-d150-4a11-98b6-5a9a4e20fdc0, rgb(156, 93, 229)) /* {"name":"Amethyst"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'aWYVbb9XH',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'aWYVbb9XH',
                    LNNJy1jnm: 'FNw58JHcH',
                    name: 'NODE B',
                    NvMMjvlBy: 'Select whether the tool is a physical device or a software application.',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'PvhAKPvc8',
                    VOTcq87Vu: true,
                    vZATQhujj: 'Hardware or Software',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        dUMZVZnV0: { variant: 'Cr7AsQCPR', VOTcq87Vu: false, zgF6TYXbc: 'IHKJNDltd', },
                        po9merzYT: { variant: 'uyxhsUNZq', },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
              isDisplayed12() && /* @__PURE__ */ _jsx8(motion7.div, {
                className: 'framer-dnftbs',
                layoutDependency,
                layoutId: 'C7t9ARA7O',
                children: isDisplayed12() && /* @__PURE__ */ _jsx8(motion7.div, {
                  className: 'framer-1sta0cd-container',
                  'data-framer-name': 'NODE C',
                  layoutDependency,
                  layoutId: 'Q_9iRc0Vd-container',
                  name: 'NODE C',
                  children: /* @__PURE__ */ _jsx8(stdin_default6, {
                    bGyluXMcm: 'C-2',
                    C0xbi_CXP: 'B',
                    cRMlaJb1_: 'var(--token-800ccd72-4302-43ed-8d67-0e06f1a5b359, rgb(232, 173, 166)) /* {"name":"Melon"} */',
                    eZ_WIO8yz: 'Choice 3',
                    fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                    Gb15ibvMU: 'wZ2vnzihB',
                    height: '100%',
                    id: 'Q_9iRc0Vd',
                    iDjlfHFIv: 'C-2',
                    Jdv7M1lr6: 'A',
                    JM8R5zcqV: false,
                    k4ezTegiq: 50,
                    K5BysgXsx: 'zAJDHJhkW',
                    layoutId: 'Q_9iRc0Vd',
                    LNNJy1jnm: 'FNw58JHcH',
                    name: 'NODE C',
                    NvMMjvlBy: 'Describe the primary goal of your tool.',
                    OJMet4Rjs: 'Choice 1',
                    qQ_BO9qk8: 'Choice 2',
                    TTpsRmZqr: true,
                    variant: 'PvhAKPvc8',
                    VOTcq87Vu: false,
                    vZATQhujj: 'Define Primary Goal',
                    width: '100%',
                    Xo22rvSfa: 'B-2',
                    Z93yscm8P: 'A-1',
                    zgF6TYXbc: 'LNmrAjenO',
                    ...addPropertyOverrides6(
                      {
                        dUMZVZnV0: { variant: 'Cr7AsQCPR', zgF6TYXbc: 'M5KMhG7fk', },
                        po9merzYT: { variant: 'uyxhsUNZq', },
                        Wzv1r0oKb: { VOTcq87Vu: true, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
            ],
          },),
          isDisplayed13() && /* @__PURE__ */ _jsx8(Transition6, {
            ...addPropertyOverrides6(
              {
                bmOYz6gay: { value: transition12, },
                Cr5qNjOdj: { value: transition4, },
                h124nvy2N: { value: transition3, },
                NsO3auvSc: { value: transition13, },
              },
              baseVariant,
              gestureVariant,
            ),
            children: /* @__PURE__ */ _jsx8(motion7.div, {
              className: 'framer-8j7eic-container',
              layoutDependency,
              layoutId: 'R87ZiPGik-container',
              children: /* @__PURE__ */ _jsx8(stdin_default6, {
                bGyluXMcm: 'C-2',
                C0xbi_CXP: 'B',
                cRMlaJb1_: 'var(--token-67b50491-f6a9-41d1-8457-d6676b88b0fb, rgb(108, 223, 239)) /* {"name":"Electric"} */',
                eZ_WIO8yz: 'Choice 3',
                fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
                Gb15ibvMU: 'wZ2vnzihB',
                height: '100%',
                id: 'R87ZiPGik',
                iDjlfHFIv: 'C-2',
                Jdv7M1lr6: 'A',
                JM8R5zcqV: false,
                k4ezTegiq: 50,
                K5BysgXsx: 'zAJDHJhkW',
                layoutId: 'R87ZiPGik',
                LNNJy1jnm: 'FNw58JHcH',
                NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
                OJMet4Rjs: 'Choice 1',
                qQ_BO9qk8: 'Choice 2',
                style: { height: '100%', width: '100%', },
                TTpsRmZqr: true,
                variant: 'FXIjKjDPL',
                VOTcq87Vu: true,
                vZATQhujj: 'Board Dimensions',
                width: '100%',
                Xo22rvSfa: 'B-2',
                Z93yscm8P: 'A-1',
                zgF6TYXbc: 'LNmrAjenO',
                ...addPropertyOverrides6(
                  {
                    bmOYz6gay: { fxy_09app: 'Create an interactive tool to augment decision-making and ideation', variant: 'pmi554o5Z', },
                    Cr5qNjOdj: { variant: 'jFWx1BeuK', },
                    h124nvy2N: { variant: 'uTj0cEPb8', },
                    HAgS9njVa: { Gb15ibvMU: 'cbq3T4JIp', variant: 'pmi554o5Z', },
                    qT5kEYyp_: { variant: 'uTj0cEPb8', },
                    vhOykwvnY: {
                      fxy_09app: 'Create an interactive tool to enhance human cognition',
                      variant: 'pmi554o5Z',
                      VOTcq87Vu: false,
                    },
                    ZNHbdIJKd: { variant: 'uTj0cEPb8', },
                  },
                  baseVariant,
                  gestureVariant,
                ),
              },),
            },),
          },),
          isDisplayed14() && /* @__PURE__ */ _jsx8(Transition6, {
            ...addPropertyOverrides6({ dUMZVZnV0: { value: transition14, }, }, baseVariant, gestureVariant,),
            children: /* @__PURE__ */ _jsxs6(motion7.div, {
              className: 'framer-10roqpf',
              'data-framer-name': 'Cursors',
              layoutDependency,
              layoutId: 'GOKJ37Vod',
              style: { opacity: 1, },
              variants: { MX2TbvLxw: { opacity: 0, }, },
              children: [
                isDisplayed15() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    { Du1gnhwdF: { value: transition15, }, MX2TbvLxw: { value: transition15, }, },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsxs6(motion7.div, {
                    className: 'framer-1baknbo',
                    'data-framer-name': 'Cursor 3',
                    layoutDependency,
                    layoutId: 'P_xP6ga5i',
                    children: [
                      /* @__PURE__ */ _jsx8(SVG6, {
                        className: 'framer-1rymr0x',
                        'data-framer-name': 'Cursor',
                        fill: 'rgba(0,0,0,1)',
                        intrinsicHeight: 27,
                        intrinsicWidth: 27,
                        layoutDependency,
                        layoutId: 'Nku6cRO5X',
                        svg:
                          '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_d_319_54525)">\n<path d="M2.9663 12.4666L18.9578 7.908C19.7835 7.67261 20.4966 8.53023 20.1235 9.31006L12.8984 24.4128C12.5143 25.2158 11.3617 25.1554 11.0645 24.3167L8.86375 18.1054C8.78382 17.8798 8.62653 17.6906 8.42029 17.572L2.74154 14.306C1.97476 13.865 2.11602 12.709 2.9663 12.4666Z" fill="#7B3BC3"/>\n<path d="M18.8232 7.4247L2.83166 11.9833C1.55625 12.3468 1.34436 14.0809 2.49453 14.7424L8.17328 18.0084C8.2764 18.0677 8.35505 18.1623 8.39501 18.2751L10.5958 24.4865C11.0416 25.7445 12.7704 25.835 13.3467 24.6305L20.5717 9.5278C21.1313 8.35806 20.0618 7.07163 18.8232 7.4247Z" stroke="#7B3BC3"/>\n</g>\n<defs>\n<filter id="filter0_d_319_54525" x="-0.755981" y="5.8623" width="23.9794" height="23.124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dy="1"/>\n<feGaussianBlur stdDeviation="1"/>\n<feComposite in2="hardAlpha" operator="out"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_54525"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_319_54525" result="shape"/>\n</filter>\n</defs>\n</svg>\n',
                        withExternalLayout: true,
                      },),
                      /* @__PURE__ */ _jsx8(motion7.div, {
                        className: 'framer-1jtt2gu',
                        'data-framer-name': 'Comment',
                        layoutDependency,
                        layoutId: 'gR2oOys7M',
                        style: {
                          backgroundColor: 'rgb(123, 59, 195)',
                          borderBottomLeftRadius: 24,
                          borderBottomRightRadius: 24,
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                          boxShadow: 'inset -1px -1px 0px 1px rgba(0, 0, 0, 0.25), 0px 25px 17px -8px rgba(0,0,0,0.25)',
                        },
                        children: /* @__PURE__ */ _jsx8(RichText5, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                            children: /* @__PURE__ */ _jsx8(motion7.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                                '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                                '--framer-line-height': '24px',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                              },
                              children: 'DESIGNER',
                            },),
                          },),
                          className: 'framer-1act9ll',
                          fonts: ['CUSTOM;PP Supply Sans Medium',],
                          layoutDependency,
                          layoutId: 'uAwO9MCnm',
                          style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '16px', opacity: 0.8, },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                      },),
                    ],
                  },),
                },),
                isDisplayed15() && /* @__PURE__ */ _jsxs6(motion7.div, {
                  className: 'framer-vrov5l',
                  'data-framer-name': 'Cursor 2',
                  layoutDependency,
                  layoutId: 'ehZCrwpW_',
                  children: [
                    /* @__PURE__ */ _jsx8(SVG6, {
                      className: 'framer-66j59f',
                      'data-framer-name': 'Cursor',
                      fill: 'rgba(0,0,0,1)',
                      intrinsicHeight: 27,
                      intrinsicWidth: 27,
                      layoutDependency,
                      layoutId: 'K4_fqlXgf',
                      style: { rotate: -90, },
                      svg:
                        '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_d_319_54525)">\n<path d="M2.9663 12.4666L18.9578 7.908C19.7835 7.67261 20.4966 8.53023 20.1235 9.31006L12.8984 24.4128C12.5143 25.2158 11.3617 25.1554 11.0645 24.3167L8.86375 18.1054C8.78382 17.8798 8.62653 17.6906 8.42029 17.572L2.74154 14.306C1.97476 13.865 2.11602 12.709 2.9663 12.4666Z" fill="#7B3BC3"/>\n<path d="M18.8232 7.4247L2.83166 11.9833C1.55625 12.3468 1.34436 14.0809 2.49453 14.7424L8.17328 18.0084C8.2764 18.0677 8.35505 18.1623 8.39501 18.2751L10.5958 24.4865C11.0416 25.7445 12.7704 25.835 13.3467 24.6305L20.5717 9.5278C21.1313 8.35806 20.0618 7.07163 18.8232 7.4247Z" stroke="#7B3BC3"/>\n</g>\n<defs>\n<filter id="filter0_d_319_54525" x="-0.755981" y="5.8623" width="23.9794" height="23.124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dy="1"/>\n<feGaussianBlur stdDeviation="1"/>\n<feComposite in2="hardAlpha" operator="out"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_54525"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_319_54525" result="shape"/>\n</filter>\n</defs>\n</svg>\n',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsx8(motion7.div, {
                      className: 'framer-1hr6ih8',
                      'data-framer-name': 'Comment',
                      layoutDependency,
                      layoutId: 'GlsxFWQVg',
                      style: {
                        backgroundColor: 'rgb(123, 59, 195)',
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        boxShadow: 'inset -1px -1px 0px 1px rgba(0, 0, 0, 0.25), 0px 25px 17px -8px rgba(0,0,0,0.25)',
                      },
                      children: /* @__PURE__ */ _jsx8(RichText5, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                          children: /* @__PURE__ */ _jsx8(motion7.p, {
                            style: {
                              '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                              '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                              '--framer-line-height': '24px',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: 'SCIENTIST',
                          },),
                        },),
                        className: 'framer-1k2k6y',
                        fonts: ['CUSTOM;PP Supply Sans Medium',],
                        layoutDependency,
                        layoutId: 'ma9qai6hE',
                        style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '16px', opacity: 0.8, },
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                    },),
                  ],
                },),
                isDisplayed16() && /* @__PURE__ */ _jsx8(Transition6, {
                  ...addPropertyOverrides6(
                    {
                      Du1gnhwdF: { value: transition16, },
                      HAgS9njVa: { value: transition17, },
                      MX2TbvLxw: { value: transition16, },
                      vhOykwvnY: { value: transition18, },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                  children: /* @__PURE__ */ _jsxs6(motion7.div, {
                    className: 'framer-125axmh',
                    'data-framer-name': 'Cursor 1',
                    layoutDependency,
                    layoutId: 'ORQ_RGdFu',
                    transformTemplate: transformTemplate22,
                    ...addPropertyOverrides6(
                      {
                        bmOYz6gay: { transformTemplate: void 0, },
                        Du1gnhwdF: { transformTemplate: void 0, },
                        dUMZVZnV0: { transformTemplate: transformTemplate3, },
                        fhIf6dGTg: { transformTemplate: void 0, },
                        HAgS9njVa: { transformTemplate: transformTemplate3, },
                        MX2TbvLxw: { transformTemplate: transformTemplate3, },
                        NsO3auvSc: { transformTemplate: transformTemplate3, },
                        Ugn1WXH_Q: { transformTemplate: void 0, },
                        vhOykwvnY: { transformTemplate: void 0, },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: [
                      /* @__PURE__ */ _jsx8(SVG6, {
                        className: 'framer-1k2rh2o',
                        'data-framer-name': 'Cursor',
                        fill: 'rgba(0,0,0,1)',
                        intrinsicHeight: 27,
                        intrinsicWidth: 27,
                        layoutDependency,
                        layoutId: 'J3r_4r9KH',
                        style: { rotate: -52, },
                        svg:
                          '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g filter="url(#filter0_d_319_54525)">\n<path d="M2.9663 12.4666L18.9578 7.908C19.7835 7.67261 20.4966 8.53023 20.1235 9.31006L12.8984 24.4128C12.5143 25.2158 11.3617 25.1554 11.0645 24.3167L8.86375 18.1054C8.78382 17.8798 8.62653 17.6906 8.42029 17.572L2.74154 14.306C1.97476 13.865 2.11602 12.709 2.9663 12.4666Z" fill="#7B3BC3"/>\n<path d="M18.8232 7.4247L2.83166 11.9833C1.55625 12.3468 1.34436 14.0809 2.49453 14.7424L8.17328 18.0084C8.2764 18.0677 8.35505 18.1623 8.39501 18.2751L10.5958 24.4865C11.0416 25.7445 12.7704 25.835 13.3467 24.6305L20.5717 9.5278C21.1313 8.35806 20.0618 7.07163 18.8232 7.4247Z" stroke="#7B3BC3"/>\n</g>\n<defs>\n<filter id="filter0_d_319_54525" x="-0.755981" y="5.8623" width="23.9794" height="23.124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n<feOffset dy="1"/>\n<feGaussianBlur stdDeviation="1"/>\n<feComposite in2="hardAlpha" operator="out"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_54525"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_319_54525" result="shape"/>\n</filter>\n</defs>\n</svg>\n',
                        withExternalLayout: true,
                      },),
                      /* @__PURE__ */ _jsx8(motion7.div, {
                        className: 'framer-11jec6m',
                        'data-framer-name': 'Comment',
                        layoutDependency,
                        layoutId: 'kbnkn1Fri',
                        style: {
                          backgroundColor: 'rgb(123, 59, 195)',
                          borderBottomLeftRadius: 24,
                          borderBottomRightRadius: 24,
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                          boxShadow: 'inset -1px -1px 0px 1px rgba(0, 0, 0, 0.25), 0px 25px 17px -8px rgba(0,0,0,0.25)',
                        },
                        variants: {
                          fhIf6dGTg: { boxShadow: 'inset -1px -1px 0px 1px rgba(0, 0, 0, 0.25), 0px 14px 17px -8px rgba(0,0,0,0.25)', },
                          NsO3auvSc: { boxShadow: 'inset -1px -1px 0px 1px rgba(0, 0, 0, 0.25), 0px 25px 17px -8px rgba(0, 0, 0, 0.4)', },
                        },
                        children: /* @__PURE__ */ _jsx8(RichText5, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx8(React8.Fragment, {
                            children: /* @__PURE__ */ _jsx8(motion7.p, {
                              style: {
                                '--font-selector': 'Q1VTVE9NO1BQIFN1cHBseSBTYW5zIE1lZGl1bQ==',
                                '--framer-font-family': '"PP Supply Sans Medium", "PP Supply Sans Medium Placeholder", sans-serif',
                                '--framer-line-height': '24px',
                                '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                              },
                              children: 'ENGINEER',
                            },),
                          },),
                          className: 'framer-tu0py0',
                          fonts: ['CUSTOM;PP Supply Sans Medium',],
                          layoutDependency,
                          layoutId: 'Zj6Dd7vJj',
                          style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '16px', opacity: 0.8, },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                      },),
                    ],
                  },),
                },),
              ],
            },),
          },),
          isDisplayed17() && /* @__PURE__ */ _jsx8(motion7.div, {
            className: 'framer-1cvd1f6-container',
            layoutDependency,
            layoutId: 'H5e_SESK0-container',
            transformTemplate: transformTemplate3,
            children: /* @__PURE__ */ _jsx8(stdin_default6, {
              aysnwkSZE: aysnwkSZEhbyqyv,
              bGyluXMcm: 'C-2',
              C0xbi_CXP: 'B',
              cRMlaJb1_: 'rgb(255, 255, 255)',
              eZ_WIO8yz: 'Choice 3',
              fxy_09app: 'Width: 24 inches, Height: 36 inches, Depth: 0.5 inches',
              Gb15ibvMU: 'wZ2vnzihB',
              height: '100%',
              id: 'H5e_SESK0',
              iDjlfHFIv: 'C-2',
              Jdv7M1lr6: 'A',
              JM8R5zcqV: false,
              k4ezTegiq: 50,
              K5BysgXsx: 'zAJDHJhkW',
              layoutId: 'H5e_SESK0',
              LNNJy1jnm: 'FNw58JHcH',
              NvMMjvlBy: 'Please provide the dimensions of the drawing board (width, height, and depth).',
              OJMet4Rjs: 'Choice 1',
              qQ_BO9qk8: 'Choice 2',
              TTpsRmZqr: true,
              variant: 'uyxhsUNZq',
              VOTcq87Vu: true,
              vZATQhujj: 'Board Dimensions',
              width: '100%',
              Xo22rvSfa: 'B-2',
              Z93yscm8P: 'A-1',
              zgF6TYXbc: 'LNmrAjenO',
              ...addPropertyOverrides6(
                { lBUZui6j9: { aysnwkSZE: aysnwkSZE6nb57o, }, XACXI8mDn: { aysnwkSZE: aysnwkSZE1lpg9gm, }, },
                baseVariant,
                gestureVariant,
              ),
            },),
          },),
        ],
      },),
    },),
  },);
},);
var css7 = [
  '.framer-948ei[data-border="true"]::after, .framer-948ei [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-948ei.framer-1w3po97, .framer-948ei .framer-1w3po97 { display: block; }',
  '.framer-948ei.framer-hpdod { cursor: pointer; height: 537px; position: relative; width: 1009px; }',
  '.framer-948ei .framer-1ycw9vo { flex: none; height: 198px; left: calc(49.9504459861249% - 771px / 2); position: absolute; top: calc(50.0931098696462% - 198px / 2); width: 771px; }',
  '.framer-948ei .framer-8vddoc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 52px; width: 618px; }',
  '.framer-948ei .framer-3jhvp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 24px 0px 24px; position: relative; width: 100%; }',
  '.framer-948ei .framer-58jcgq, .framer-948ei .framer-1558cx, .framer-948ei .framer-1act9ll, .framer-948ei .framer-1k2k6y, .framer-948ei .framer-tu0py0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-948ei .framer-k3rqov { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }',
  '.framer-948ei .framer-ovz0el { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 10px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-948ei .framer-1cjxhy0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-948ei .framer-1ebn6ix { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 638px; word-break: break-word; word-wrap: break-word; }',
  '.framer-948ei .framer-1twb4mw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 11px 15px 11px 15px; position: relative; width: 100%; }',
  '.framer-948ei .framer-1qyytje { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '.framer-948ei .framer-1kj1ldo { flex: none; height: 25px; left: 12px; mix-blend-mode: multiply; position: absolute; top: 9px; width: 67%; z-index: 1; }',
  '.framer-948ei .framer-101gxbs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 20px 24px 20px 12px; position: relative; width: 100%; }',
  '.framer-948ei .framer-k8lsxt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }',
  '.framer-948ei .framer-u4tus2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-948ei .framer-1nyjb26 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 8px 8px; position: relative; width: min-content; }',
  '.framer-948ei .framer-1t8lizg { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: hidden; position: relative; width: 24px; }',
  '.framer-948ei .framer-8qwf3t { bottom: 2px; flex: none; left: 2px; position: absolute; right: 2px; top: 2px; }',
  '.framer-948ei .framer-td7305 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-948ei .framer-moaqya { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-948ei .framer-191z50s { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 1px; justify-content: center; overflow: visible; padding: 10px 24px 10px 16px; position: relative; width: 100%; }',
  '.framer-948ei .framer-1sofjn6 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); overflow: visible; position: relative; width: 18px; }',
  '.framer-948ei .framer-j61epy { bottom: 4px; flex: none; left: 2px; position: absolute; right: 3px; top: 4px; }',
  '.framer-948ei .framer-6s0tzo, .framer-948ei .framer-1mvnusd { flex: none; height: 393px; left: calc(49.653121902874155% - 391px / 2); overflow: visible; position: absolute; top: calc(48.60335195530728% - 393px / 2); width: 391px; }',
  '.framer-948ei .framer-4b524j-container { flex: none; height: auto; left: 28px; position: absolute; top: 77px; width: auto; }',
  '.framer-948ei .framer-vvhei8-container { flex: none; height: auto; left: 48%; position: absolute; top: 0px; width: auto; }',
  '.framer-948ei .framer-d60suy-container { flex: none; height: auto; position: absolute; right: 40px; top: 69px; width: auto; }',
  '.framer-948ei .framer-1iaswxc-container { bottom: 119px; flex: none; height: auto; position: absolute; right: 0px; width: auto; }',
  '.framer-948ei .framer-ereqn5-container { bottom: 0px; flex: none; height: auto; position: absolute; right: 89px; width: auto; }',
  '.framer-948ei .framer-8jq7kp-container { bottom: 6px; flex: none; height: auto; left: 70px; position: absolute; width: auto; }',
  '.framer-948ei .framer-121179n-container { bottom: 149px; flex: none; height: auto; left: 0px; position: absolute; width: auto; }',
  '.framer-948ei .framer-1w2gq54 { bottom: 114px; flex: none; left: calc(49.9504459861249% - 319px / 2); overflow: visible; position: absolute; top: 114px; width: 319px; }',
  '.framer-948ei .framer-1togqzb-container { flex: none; height: auto; left: 282px; position: absolute; top: 109px; width: auto; }',
  '.framer-948ei .framer-u2l7lb-container { flex: none; height: auto; left: 249px; position: absolute; top: 234px; width: auto; }',
  '.framer-948ei .framer-dt1nri-container { flex: none; height: auto; left: 120px; position: absolute; top: 279px; width: auto; }',
  '.framer-948ei .framer-vm0lt-container { flex: none; height: auto; left: 6px; position: absolute; top: 219px; width: auto; }',
  '.framer-948ei .framer-1xv0t2j-container { flex: none; height: auto; left: -11px; position: absolute; top: 94px; width: auto; }',
  '.framer-948ei .framer-lc2jrz-container { flex: none; height: auto; left: 71px; position: absolute; top: -5px; width: auto; }',
  '.framer-948ei .framer-15swu5u-container { flex: none; height: auto; left: 193px; position: absolute; top: 0px; width: auto; }',
  '.framer-948ei .framer-ywbmcs { flex: none; height: 233px; left: calc(49.9504459861249% - 233px / 2); overflow: visible; position: absolute; top: calc(49.90689013035384% - 233px / 2); width: 233px; }',
  '.framer-948ei .framer-1egxi8f-container { flex: none; height: auto; left: 20%; position: absolute; top: 25%; width: auto; }',
  '.framer-948ei .framer-xsw623-container { flex: none; height: auto; left: 12%; position: absolute; top: 58%; width: auto; }',
  '.framer-948ei .framer-15gph2n-container { flex: none; height: auto; left: 87%; position: absolute; top: 61%; width: auto; }',
  '.framer-948ei .framer-yox9q5-container { flex: none; height: auto; left: 50%; position: absolute; top: 13%; width: auto; }',
  '.framer-948ei .framer-17glung-container { bottom: 5px; flex: none; height: auto; left: 40px; position: absolute; width: auto; }',
  '.framer-948ei .framer-n0gl4w-container { flex: none; height: auto; left: 64%; position: absolute; top: 87%; width: auto; }',
  '.framer-948ei .framer-10kjnxc-container { flex: none; height: auto; left: 81%; position: absolute; top: 27%; width: auto; }',
  '.framer-948ei .framer-1k3vrbv { bottom: -21px; flex: none; height: 395px; left: -9px; overflow: visible; position: absolute; right: -10px; }',
  '.framer-948ei .framer-gkoso3-container { flex: none; height: auto; left: 91px; position: absolute; top: 1px; width: auto; }',
  '.framer-948ei .framer-1yvmtw8-container { flex: none; height: auto; position: absolute; right: 0px; top: 134px; width: auto; }',
  '.framer-948ei .framer-w97bgk-container { bottom: 57px; flex: none; height: auto; position: absolute; right: 29px; width: auto; }',
  '.framer-948ei .framer-fpq9rw-container { bottom: 0px; flex: none; height: auto; left: 51%; position: absolute; width: auto; }',
  '.framer-948ei .framer-160pc9z-container { bottom: 77px; flex: none; height: auto; left: 7px; position: absolute; width: auto; }',
  '.framer-948ei .framer-1jw6h9g-container { flex: none; height: auto; left: 0px; position: absolute; top: 125px; width: auto; }',
  '.framer-948ei .framer-1igj8fa-container { flex: none; height: auto; position: absolute; right: 103px; top: 1px; width: auto; }',
  '.framer-948ei .framer-1jstyen-container { flex: none; height: auto; position: absolute; right: 51px; top: 64px; width: auto; }',
  '.framer-948ei .framer-p493zr-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-948ei .framer-1gr4pd7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 41px; height: 317px; justify-content: center; left: calc(49.85133795837465% - 755px / 2); overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: calc(51.58286778398512% - 317px / 2); width: 755px; }',
  '.framer-948ei .framer-1ni00s4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-height: 98px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-948ei .framer-oet49y-container, .framer-948ei .framer-6g4na4-container, .framer-948ei .framer-1sta0cd-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-948ei .framer-1gwffo1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; min-height: 116px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-948ei .framer-dnftbs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; min-height: 98px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-948ei .framer-8j7eic-container { flex: none; height: 22px; left: calc(53.32011892963332% - 56px / 2); position: absolute; top: 168px; width: 56px; }',
  '.framer-948ei .framer-10roqpf { bottom: 111px; flex: none; height: 200px; left: calc(50.04955401387514% - 872px / 2); overflow: visible; position: absolute; width: 872px; }',
  '.framer-948ei .framer-1baknbo { flex: none; height: 63px; left: 0px; overflow: visible; position: absolute; top: calc(48.051948051948074% - 63px / 2); width: 132px; }',
  '.framer-948ei .framer-1rymr0x { flex: none; height: 27px; left: 105px; position: absolute; top: -1px; width: 27px; }',
  '.framer-948ei .framer-1jtt2gu, .framer-948ei .framer-1hr6ih8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; left: 0px; overflow: visible; padding: 8px 16px 8px 16px; position: absolute; top: 24px; width: min-content; }',
  '.framer-948ei .framer-vrov5l { flex: none; height: 63px; overflow: visible; position: absolute; right: 0px; top: calc(48.051948051948074% - 63px / 2); width: 104px; }',
  '.framer-948ei .framer-66j59f { flex: none; height: 27px; left: -28px; position: absolute; top: -4px; width: 27px; }',
  '.framer-948ei .framer-125axmh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 49%; width: min-content; }',
  '.framer-948ei .framer-1k2rh2o { flex: none; height: 27px; position: relative; width: 27px; }',
  '.framer-948ei .framer-11jec6m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px 16px 8px 16px; position: relative; width: min-content; }',
  '.framer-948ei .framer-1cvd1f6-container { bottom: 36px; flex: none; height: auto; left: 50%; position: absolute; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-948ei .framer-8vddoc, .framer-948ei .framer-3jhvp, .framer-948ei .framer-k3rqov, .framer-948ei .framer-ovz0el, .framer-948ei .framer-1cjxhy0, .framer-948ei .framer-1twb4mw, .framer-948ei .framer-k8lsxt, .framer-948ei .framer-u4tus2, .framer-948ei .framer-1nyjb26, .framer-948ei .framer-td7305, .framer-948ei .framer-moaqya, .framer-948ei .framer-191z50s, .framer-948ei .framer-1gr4pd7, .framer-948ei .framer-1ni00s4, .framer-948ei .framer-1gwffo1, .framer-948ei .framer-dnftbs, .framer-948ei .framer-1jtt2gu, .framer-948ei .framer-1hr6ih8, .framer-948ei .framer-125axmh, .framer-948ei .framer-11jec6m { gap: 0px; } .framer-948ei .framer-8vddoc > *, .framer-948ei .framer-1cjxhy0 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-948ei .framer-8vddoc > :first-child, .framer-948ei .framer-ovz0el > :first-child, .framer-948ei .framer-1cjxhy0 > :first-child, .framer-948ei .framer-k8lsxt > :first-child, .framer-948ei .framer-moaqya > :first-child, .framer-948ei .framer-1gr4pd7 > :first-child, .framer-948ei .framer-125axmh > :first-child { margin-top: 0px; } .framer-948ei .framer-8vddoc > :last-child, .framer-948ei .framer-ovz0el > :last-child, .framer-948ei .framer-1cjxhy0 > :last-child, .framer-948ei .framer-k8lsxt > :last-child, .framer-948ei .framer-moaqya > :last-child, .framer-948ei .framer-1gr4pd7 > :last-child, .framer-948ei .framer-125axmh > :last-child { margin-bottom: 0px; } .framer-948ei .framer-3jhvp > *, .framer-948ei .framer-1twb4mw > *, .framer-948ei .framer-u4tus2 > *, .framer-948ei .framer-1nyjb26 > *, .framer-948ei .framer-1ni00s4 > *, .framer-948ei .framer-1gwffo1 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-948ei .framer-3jhvp > :first-child, .framer-948ei .framer-k3rqov > :first-child, .framer-948ei .framer-1twb4mw > :first-child, .framer-948ei .framer-u4tus2 > :first-child, .framer-948ei .framer-1nyjb26 > :first-child, .framer-948ei .framer-td7305 > :first-child, .framer-948ei .framer-191z50s > :first-child, .framer-948ei .framer-1ni00s4 > :first-child, .framer-948ei .framer-1gwffo1 > :first-child, .framer-948ei .framer-dnftbs > :first-child, .framer-948ei .framer-1jtt2gu > :first-child, .framer-948ei .framer-1hr6ih8 > :first-child, .framer-948ei .framer-11jec6m > :first-child { margin-left: 0px; } .framer-948ei .framer-3jhvp > :last-child, .framer-948ei .framer-k3rqov > :last-child, .framer-948ei .framer-1twb4mw > :last-child, .framer-948ei .framer-u4tus2 > :last-child, .framer-948ei .framer-1nyjb26 > :last-child, .framer-948ei .framer-td7305 > :last-child, .framer-948ei .framer-191z50s > :last-child, .framer-948ei .framer-1ni00s4 > :last-child, .framer-948ei .framer-1gwffo1 > :last-child, .framer-948ei .framer-dnftbs > :last-child, .framer-948ei .framer-1jtt2gu > :last-child, .framer-948ei .framer-1hr6ih8 > :last-child, .framer-948ei .framer-11jec6m > :last-child { margin-right: 0px; } .framer-948ei .framer-k3rqov > * { margin: 0px; margin-left: calc(26px / 2); margin-right: calc(26px / 2); } .framer-948ei .framer-ovz0el > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-948ei .framer-k8lsxt > *, .framer-948ei .framer-125axmh > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-948ei .framer-td7305 > *, .framer-948ei .framer-191z50s > *, .framer-948ei .framer-1jtt2gu > *, .framer-948ei .framer-1hr6ih8 > *, .framer-948ei .framer-11jec6m > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-948ei .framer-moaqya > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-948ei .framer-1gr4pd7 > * { margin: 0px; margin-bottom: calc(41px / 2); margin-top: calc(41px / 2); } .framer-948ei .framer-dnftbs > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }',
  '.framer-948ei.framer-v-f73ajw.framer-hpdod, .framer-948ei.framer-v-87eqop.framer-hpdod, .framer-948ei.framer-v-zdyy2d.framer-hpdod, .framer-948ei.framer-v-ewze6y.framer-hpdod, .framer-948ei.framer-v-13llhv3.framer-hpdod { cursor: unset; }',
  '.framer-948ei.framer-v-f73ajw .framer-1egxi8f-container, .framer-948ei.framer-v-f73ajw .framer-xsw623-container, .framer-948ei.framer-v-f73ajw .framer-15gph2n-container, .framer-948ei.framer-v-f73ajw .framer-n0gl4w-container, .framer-948ei.framer-v-f73ajw .framer-10kjnxc-container, .framer-948ei.framer-v-1odncvf .framer-1egxi8f-container, .framer-948ei.framer-v-1odncvf .framer-xsw623-container, .framer-948ei.framer-v-1odncvf .framer-15gph2n-container, .framer-948ei.framer-v-1odncvf .framer-n0gl4w-container, .framer-948ei.framer-v-1odncvf .framer-10kjnxc-container, .framer-948ei.framer-v-d973em .framer-1egxi8f-container, .framer-948ei.framer-v-d973em .framer-xsw623-container, .framer-948ei.framer-v-d973em .framer-15gph2n-container, .framer-948ei.framer-v-d973em .framer-n0gl4w-container, .framer-948ei.framer-v-d973em .framer-10kjnxc-container, .framer-948ei.framer-v-13tsvzn .framer-1egxi8f-container, .framer-948ei.framer-v-13tsvzn .framer-xsw623-container, .framer-948ei.framer-v-13tsvzn .framer-15gph2n-container, .framer-948ei.framer-v-13tsvzn .framer-n0gl4w-container, .framer-948ei.framer-v-13tsvzn .framer-10kjnxc-container, .framer-948ei.framer-v-yrn57e .framer-1egxi8f-container, .framer-948ei.framer-v-yrn57e .framer-xsw623-container, .framer-948ei.framer-v-yrn57e .framer-15gph2n-container, .framer-948ei.framer-v-yrn57e .framer-n0gl4w-container, .framer-948ei.framer-v-yrn57e .framer-10kjnxc-container, .framer-948ei.framer-v-13llhv3 .framer-1egxi8f-container, .framer-948ei.framer-v-13llhv3 .framer-xsw623-container, .framer-948ei.framer-v-13llhv3 .framer-15gph2n-container, .framer-948ei.framer-v-13llhv3 .framer-yox9q5-container, .framer-948ei.framer-v-13llhv3 .framer-n0gl4w-container, .framer-948ei.framer-v-13llhv3 .framer-10kjnxc-container { left: 50%; top: 50%; }',
  '.framer-948ei.framer-v-f73ajw .framer-yox9q5-container, .framer-948ei.framer-v-1odncvf .framer-yox9q5-container, .framer-948ei.framer-v-d973em .framer-yox9q5-container, .framer-948ei.framer-v-13tsvzn .framer-yox9q5-container, .framer-948ei.framer-v-yrn57e .framer-yox9q5-container { top: 50%; }',
  '.framer-948ei.framer-v-f73ajw .framer-17glung-container, .framer-948ei.framer-v-1odncvf .framer-17glung-container, .framer-948ei.framer-v-d973em .framer-17glung-container, .framer-948ei.framer-v-13tsvzn .framer-17glung-container, .framer-948ei.framer-v-yrn57e .framer-17glung-container, .framer-948ei.framer-v-13llhv3 .framer-17glung-container { bottom: unset; left: 50%; top: 50%; }',
  '.framer-948ei.framer-v-1t34yxb .framer-1gr4pd7 { gap: 0px; height: 63px; left: calc(49.85133795837465% - max(0px, 6.045589692765114%) / 2); min-width: 0px; top: calc(49.720670391061475% - 63px / 2); width: 6%; z-index: -1; }',
  '.framer-948ei.framer-v-1t34yxb .framer-1ni00s4, .framer-948ei.framer-v-1t34yxb .framer-1gwffo1, .framer-948ei.framer-v-1t34yxb .framer-dnftbs { height: 1px; min-height: unset; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-948ei.framer-v-1t34yxb .framer-1gr4pd7 { gap: 0px; } .framer-948ei.framer-v-1t34yxb .framer-1gr4pd7 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-948ei.framer-v-1t34yxb .framer-1gr4pd7 > :first-child { margin-top: 0px; } .framer-948ei.framer-v-1t34yxb .framer-1gr4pd7 > :last-child { margin-bottom: 0px; } }',
  '.framer-948ei.framer-v-1l5e6kx .framer-1gr4pd7 { gap: 52px; left: calc(49.85133795837465% - max(325px, 74.82656095143707%) / 2); min-width: 325px; width: 75%; }',
  '.framer-948ei.framer-v-1l5e6kx .framer-1ni00s4, .framer-948ei.framer-v-1l5e6kx .framer-1gwffo1, .framer-948ei.framer-v-1l5e6kx .framer-dnftbs, .framer-948ei.framer-v-19a269d .framer-1ni00s4, .framer-948ei.framer-v-19a269d .framer-1gwffo1, .framer-948ei.framer-v-19a269d .framer-dnftbs { min-height: unset; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-948ei.framer-v-1l5e6kx .framer-1gr4pd7 { gap: 0px; } .framer-948ei.framer-v-1l5e6kx .framer-1gr4pd7 > * { margin: 0px; margin-bottom: calc(52px / 2); margin-top: calc(52px / 2); } .framer-948ei.framer-v-1l5e6kx .framer-1gr4pd7 > :first-child { margin-top: 0px; } .framer-948ei.framer-v-1l5e6kx .framer-1gr4pd7 > :last-child { margin-bottom: 0px; } }',
  '.framer-948ei.framer-v-19a269d .framer-xsw623-container, .framer-948ei.framer-v-1b7v10g .framer-xsw623-container { left: -240px; top: 28px; }',
  '.framer-948ei.framer-v-19a269d .framer-n0gl4w-container, .framer-948ei.framer-v-1b7v10g .framer-n0gl4w-container { left: 273px; top: 24px; }',
  '.framer-948ei.framer-v-19a269d .framer-10kjnxc-container, .framer-948ei.framer-v-1b7v10g .framer-10kjnxc-container { left: 11px; top: 26px; }',
  '.framer-948ei.framer-v-19a269d .framer-10roqpf { height: 77px; }',
  '.framer-948ei.framer-v-19a269d .framer-1baknbo { left: 110px; top: -84px; }',
  '.framer-948ei.framer-v-19a269d .framer-vrov5l { right: 49px; top: -54px; }',
  '.framer-948ei.framer-v-19a269d .framer-125axmh { left: 316px; top: -40px; }',
  '.framer-948ei.framer-v-1b7v10g .framer-10roqpf { bottom: -69px; height: 77px; }',
  '.framer-948ei.framer-v-1b7v10g .framer-1baknbo { left: -220px; top: -84px; }',
  '.framer-948ei.framer-v-1b7v10g .framer-vrov5l { right: -201px; top: -54px; }',
  '.framer-948ei.framer-v-1b7v10g .framer-125axmh { bottom: -19px; left: 48%; top: unset; }',
  '.framer-948ei.framer-v-8ciawy .framer-4b524j-container, .framer-948ei.framer-v-87eqop .framer-4b524j-container { left: 34px; top: 146px; }',
  '.framer-948ei.framer-v-8ciawy .framer-vvhei8-container, .framer-948ei.framer-v-87eqop .framer-vvhei8-container, .framer-948ei.framer-v-1j14qwb .framer-vvhei8-container { left: 115px; top: 50px; }',
  '.framer-948ei.framer-v-8ciawy .framer-d60suy-container, .framer-948ei.framer-v-87eqop .framer-d60suy-container { right: 115px; top: 53px; }',
  '.framer-948ei.framer-v-8ciawy .framer-1iaswxc-container, .framer-948ei.framer-v-87eqop .framer-1iaswxc-container { bottom: unset; right: 23px; top: 46%; }',
  '.framer-948ei.framer-v-8ciawy .framer-ereqn5-container, .framer-948ei.framer-v-87eqop .framer-ereqn5-container { bottom: 67px; right: 60px; }',
  '.framer-948ei.framer-v-8ciawy .framer-8jq7kp-container, .framer-948ei.framer-v-87eqop .framer-8jq7kp-container { bottom: 20px; left: 47%; }',
  '.framer-948ei.framer-v-8ciawy .framer-121179n-container, .framer-948ei.framer-v-87eqop .framer-121179n-container { bottom: 82px; left: 51px; }',
  '.framer-948ei.framer-v-8ciawy .framer-1w2gq54, .framer-948ei.framer-v-87eqop .framer-1w2gq54, .framer-948ei.framer-v-zdyy2d .framer-1w2gq54, .framer-948ei.framer-v-ewze6y .framer-1w2gq54, .framer-948ei.framer-v-1ewhbs6 .framer-1w2gq54, .framer-948ei.framer-v-47329 .framer-1w2gq54 { bottom: unset; height: 309px; top: calc(49.90689013035384% - 309px / 2); }',
  '.framer-948ei.framer-v-8ciawy .framer-1togqzb-container { left: 208px; top: 78px; }',
  '.framer-948ei.framer-v-8ciawy .framer-u2l7lb-container { left: 222px; top: 158px; }',
  '.framer-948ei.framer-v-8ciawy .framer-dt1nri-container { left: 168px; top: 217px; }',
  '.framer-948ei.framer-v-8ciawy .framer-vm0lt-container { left: 88px; top: 212px; }',
  '.framer-948ei.framer-v-8ciawy .framer-1xv0t2j-container { left: 45px; top: 147px; }',
  '.framer-948ei.framer-v-8ciawy .framer-lc2jrz-container { left: 65px; top: 71px; }',
  '.framer-948ei.framer-v-8ciawy .framer-15swu5u-container { left: 134px; top: 42px; }',
  '.framer-948ei.framer-v-8ciawy .framer-10kjnxc-container, .framer-948ei.framer-v-87eqop .framer-10kjnxc-container { left: 82%; }',
  '.framer-948ei.framer-v-zdyy2d .framer-gkoso3-container, .framer-948ei.framer-v-zdyy2d .framer-1jw6h9g-container { left: 52%; top: 50%; }',
  '.framer-948ei.framer-v-zdyy2d .framer-1yvmtw8-container, .framer-948ei.framer-v-zdyy2d .framer-1igj8fa-container { left: 52%; right: unset; top: 50%; }',
  '.framer-948ei.framer-v-zdyy2d .framer-w97bgk-container { bottom: unset; left: 52%; right: unset; top: 50%; }',
  '.framer-948ei.framer-v-zdyy2d .framer-fpq9rw-container, .framer-948ei.framer-v-zdyy2d .framer-160pc9z-container { bottom: unset; left: 52%; top: 50%; }',
  '.framer-948ei.framer-v-zdyy2d .framer-p493zr-container, .framer-948ei.framer-v-1ewhbs6 .framer-p493zr-container, .framer-948ei.framer-v-47329 .framer-p493zr-container { bottom: unset; height: 537px; left: calc(49.9504459861249% - 1009px / 2); right: unset; top: calc(49.90689013035384% - 537px / 2); width: 1009px; }',
  '.framer-948ei.framer-v-ewze6y .framer-gkoso3-container { left: 42px; top: 64px; }',
  '.framer-948ei.framer-v-ewze6y .framer-1yvmtw8-container { right: 57px; top: 55px; }',
  '.framer-948ei.framer-v-ewze6y .framer-w97bgk-container { bottom: 146px; right: 15px; }',
  '.framer-948ei.framer-v-ewze6y .framer-fpq9rw-container, .framer-948ei.framer-v-tv2zos .framer-fpq9rw-container { bottom: 25px; left: unset; right: 104px; }',
  '.framer-948ei.framer-v-ewze6y .framer-160pc9z-container { bottom: 34px; left: 84px; }',
  '.framer-948ei.framer-v-ewze6y .framer-1jw6h9g-container { left: 14px; top: 53%; }',
  '.framer-948ei.framer-v-ewze6y .framer-1igj8fa-container { left: 49%; right: unset; top: -14px; }',
  '.framer-948ei.framer-v-ewze6y .framer-1jstyen-container { left: 50%; right: unset; top: 54%; }',
  '.framer-948ei.framer-v-1ewhbs6 .framer-1igj8fa-container { right: 92px; top: -10px; }',
  '.framer-948ei.framer-v-47329 .framer-1igj8fa-container, .framer-948ei.framer-v-qkkkjw .framer-1igj8fa-container, .framer-948ei.framer-v-30clu8 .framer-1igj8fa-container, .framer-948ei.framer-v-1f09y03 .framer-1igj8fa-container, .framer-948ei.framer-v-16mzam7 .framer-1igj8fa-container { right: 98px; top: 9px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-6s0tzo, .framer-948ei.framer-v-655dk4 .framer-6s0tzo, .framer-948ei.framer-v-ae0cwc .framer-6s0tzo, .framer-948ei.framer-v-18wwg9a .framer-6s0tzo, .framer-948ei.framer-v-96r6q7 .framer-6s0tzo, .framer-948ei.framer-v-10pngp5 .framer-6s0tzo, .framer-948ei.framer-v-1ymudb1 .framer-6s0tzo { height: 200px; left: calc(49.7522299306244% - 270px / 2); top: calc(50.279329608938575% - 200px / 2); width: 270px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-4b524j-container, .framer-948ei.framer-v-655dk4 .framer-4b524j-container, .framer-948ei.framer-v-ae0cwc .framer-4b524j-container, .framer-948ei.framer-v-18wwg9a .framer-4b524j-container, .framer-948ei.framer-v-96r6q7 .framer-4b524j-container, .framer-948ei.framer-v-10pngp5 .framer-4b524j-container, .framer-948ei.framer-v-1ymudb1 .framer-4b524j-container { bottom: 180px; left: unset; right: 217px; top: unset; width: 53px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-vvhei8-container, .framer-948ei.framer-v-655dk4 .framer-vvhei8-container, .framer-948ei.framer-v-ae0cwc .framer-vvhei8-container, .framer-948ei.framer-v-18wwg9a .framer-vvhei8-container, .framer-948ei.framer-v-96r6q7 .framer-vvhei8-container, .framer-948ei.framer-v-10pngp5 .framer-vvhei8-container, .framer-948ei.framer-v-1ymudb1 .framer-vvhei8-container { bottom: 150px; left: unset; right: 230px; top: unset; width: 40px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-d60suy-container, .framer-948ei.framer-v-655dk4 .framer-d60suy-container, .framer-948ei.framer-v-ae0cwc .framer-d60suy-container, .framer-948ei.framer-v-18wwg9a .framer-d60suy-container, .framer-948ei.framer-v-96r6q7 .framer-d60suy-container, .framer-948ei.framer-v-10pngp5 .framer-d60suy-container, .framer-948ei.framer-v-1ymudb1 .framer-d60suy-container { bottom: 120px; right: 209px; top: unset; width: 61px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-1iaswxc-container, .framer-948ei.framer-v-655dk4 .framer-1iaswxc-container, .framer-948ei.framer-v-ae0cwc .framer-1iaswxc-container, .framer-948ei.framer-v-18wwg9a .framer-1iaswxc-container, .framer-948ei.framer-v-96r6q7 .framer-1iaswxc-container, .framer-948ei.framer-v-10pngp5 .framer-1iaswxc-container, .framer-948ei.framer-v-1ymudb1 .framer-1iaswxc-container { bottom: 91px; right: 218px; width: 52px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-ereqn5-container, .framer-948ei.framer-v-655dk4 .framer-ereqn5-container, .framer-948ei.framer-v-ae0cwc .framer-ereqn5-container, .framer-948ei.framer-v-18wwg9a .framer-ereqn5-container, .framer-948ei.framer-v-96r6q7 .framer-ereqn5-container, .framer-948ei.framer-v-10pngp5 .framer-ereqn5-container, .framer-948ei.framer-v-1ymudb1 .framer-ereqn5-container { bottom: 60px; right: 220px; width: 50px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-8jq7kp-container, .framer-948ei.framer-v-655dk4 .framer-8jq7kp-container, .framer-948ei.framer-v-ae0cwc .framer-8jq7kp-container, .framer-948ei.framer-v-18wwg9a .framer-8jq7kp-container, .framer-948ei.framer-v-96r6q7 .framer-8jq7kp-container, .framer-948ei.framer-v-10pngp5 .framer-8jq7kp-container, .framer-948ei.framer-v-1ymudb1 .framer-8jq7kp-container { bottom: 30px; left: unset; right: 209px; width: 61px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-121179n-container, .framer-948ei.framer-v-655dk4 .framer-121179n-container, .framer-948ei.framer-v-ae0cwc .framer-121179n-container, .framer-948ei.framer-v-18wwg9a .framer-121179n-container, .framer-948ei.framer-v-96r6q7 .framer-121179n-container, .framer-948ei.framer-v-10pngp5 .framer-121179n-container, .framer-948ei.framer-v-1ymudb1 .framer-121179n-container { bottom: 0px; left: unset; right: 230px; width: 40px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-1w2gq54, .framer-948ei.framer-v-655dk4 .framer-1w2gq54, .framer-948ei.framer-v-ae0cwc .framer-1w2gq54, .framer-948ei.framer-v-18wwg9a .framer-1w2gq54, .framer-948ei.framer-v-96r6q7 .framer-1w2gq54, .framer-948ei.framer-v-10pngp5 .framer-1w2gq54, .framer-948ei.framer-v-1ymudb1 .framer-1w2gq54 { bottom: unset; height: 199px; left: calc(49.7522299306244% - 270px / 2); top: calc(50.0931098696462% - 199px / 2); width: 270px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-1togqzb-container, .framer-948ei.framer-v-655dk4 .framer-1togqzb-container, .framer-948ei.framer-v-ae0cwc .framer-1togqzb-container, .framer-948ei.framer-v-18wwg9a .framer-1togqzb-container, .framer-948ei.framer-v-96r6q7 .framer-1togqzb-container, .framer-948ei.framer-v-10pngp5 .framer-1togqzb-container, .framer-948ei.framer-v-1ymudb1 .framer-1togqzb-container { left: 143px; top: 0px; width: 56px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-u2l7lb-container, .framer-948ei.framer-v-655dk4 .framer-u2l7lb-container { left: 98px; top: 30px; width: 64px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-dt1nri-container, .framer-948ei.framer-v-655dk4 .framer-dt1nri-container, .framer-948ei.framer-v-ae0cwc .framer-dt1nri-container, .framer-948ei.framer-v-18wwg9a .framer-dt1nri-container, .framer-948ei.framer-v-96r6q7 .framer-dt1nri-container, .framer-948ei.framer-v-10pngp5 .framer-dt1nri-container, .framer-948ei.framer-v-1ymudb1 .framer-dt1nri-container { left: 128px; top: 60px; width: 87px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-vm0lt-container, .framer-948ei.framer-v-655dk4 .framer-vm0lt-container, .framer-948ei.framer-v-ae0cwc .framer-vm0lt-container, .framer-948ei.framer-v-18wwg9a .framer-vm0lt-container, .framer-948ei.framer-v-96r6q7 .framer-vm0lt-container, .framer-948ei.framer-v-10pngp5 .framer-vm0lt-container, .framer-948ei.framer-v-1ymudb1 .framer-vm0lt-container { left: 112px; top: 179px; width: 95px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-1xv0t2j-container, .framer-948ei.framer-v-655dk4 .framer-1xv0t2j-container, .framer-948ei.framer-v-ae0cwc .framer-1xv0t2j-container, .framer-948ei.framer-v-18wwg9a .framer-1xv0t2j-container, .framer-948ei.framer-v-96r6q7 .framer-1xv0t2j-container, .framer-948ei.framer-v-10pngp5 .framer-1xv0t2j-container, .framer-948ei.framer-v-1ymudb1 .framer-1xv0t2j-container { height: 20px; left: 128px; top: 120px; width: 95px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-lc2jrz-container, .framer-948ei.framer-v-655dk4 .framer-lc2jrz-container, .framer-948ei.framer-v-ae0cwc .framer-lc2jrz-container, .framer-948ei.framer-v-18wwg9a .framer-lc2jrz-container, .framer-948ei.framer-v-96r6q7 .framer-lc2jrz-container, .framer-948ei.framer-v-10pngp5 .framer-lc2jrz-container, .framer-948ei.framer-v-1ymudb1 .framer-lc2jrz-container { left: 134px; top: 150px; width: 43px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-15swu5u-container, .framer-948ei.framer-v-655dk4 .framer-15swu5u-container, .framer-948ei.framer-v-ae0cwc .framer-15swu5u-container, .framer-948ei.framer-v-18wwg9a .framer-15swu5u-container, .framer-948ei.framer-v-96r6q7 .framer-15swu5u-container, .framer-948ei.framer-v-10pngp5 .framer-15swu5u-container, .framer-948ei.framer-v-1ymudb1 .framer-15swu5u-container { height: 20px; left: 145px; top: 89px; width: 54px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-ywbmcs, .framer-948ei.framer-v-655dk4 .framer-ywbmcs, .framer-948ei.framer-v-ae0cwc .framer-ywbmcs, .framer-948ei.framer-v-18wwg9a .framer-ywbmcs, .framer-948ei.framer-v-96r6q7 .framer-ywbmcs, .framer-948ei.framer-v-10pngp5 .framer-ywbmcs, .framer-948ei.framer-v-1ymudb1 .framer-ywbmcs { height: 199px; left: calc(49.7522299306244% - 270px / 2); top: calc(50.0931098696462% - 199px / 2); width: 270px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-1egxi8f-container, .framer-948ei.framer-v-655dk4 .framer-1egxi8f-container, .framer-948ei.framer-v-ae0cwc .framer-1egxi8f-container, .framer-948ei.framer-v-18wwg9a .framer-1egxi8f-container, .framer-948ei.framer-v-96r6q7 .framer-1egxi8f-container, .framer-948ei.framer-v-10pngp5 .framer-1egxi8f-container, .framer-948ei.framer-v-1ymudb1 .framer-1egxi8f-container { bottom: 179px; left: unset; right: 137px; top: unset; width: 72px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-xsw623-container, .framer-948ei.framer-v-655dk4 .framer-xsw623-container { bottom: 119px; left: unset; right: 151px; top: unset; width: 52px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-15gph2n-container, .framer-948ei.framer-v-655dk4 .framer-15gph2n-container { bottom: 90px; left: unset; right: 133px; top: unset; width: 78px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-yox9q5-container, .framer-948ei.framer-v-655dk4 .framer-yox9q5-container { bottom: 59px; left: unset; right: 151px; top: unset; width: 62px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-17glung-container, .framer-948ei.framer-v-655dk4 .framer-17glung-container { bottom: 149px; left: unset; right: 179px; width: 44px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-n0gl4w-container, .framer-948ei.framer-v-655dk4 .framer-n0gl4w-container, .framer-948ei.framer-v-ae0cwc .framer-n0gl4w-container, .framer-948ei.framer-v-18wwg9a .framer-n0gl4w-container, .framer-948ei.framer-v-96r6q7 .framer-n0gl4w-container, .framer-948ei.framer-v-10pngp5 .framer-n0gl4w-container, .framer-948ei.framer-v-1ymudb1 .framer-n0gl4w-container { bottom: 29px; left: unset; right: 145px; top: unset; width: 55px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-10kjnxc-container, .framer-948ei.framer-v-655dk4 .framer-10kjnxc-container, .framer-948ei.framer-v-ae0cwc .framer-10kjnxc-container, .framer-948ei.framer-v-18wwg9a .framer-10kjnxc-container, .framer-948ei.framer-v-96r6q7 .framer-10kjnxc-container, .framer-948ei.framer-v-10pngp5 .framer-10kjnxc-container, .framer-948ei.framer-v-1ymudb1 .framer-10kjnxc-container { bottom: -1px; left: unset; right: 167px; top: unset; width: 56px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-1mvnusd, .framer-948ei.framer-v-655dk4 .framer-1mvnusd, .framer-948ei.framer-v-ae0cwc .framer-1mvnusd, .framer-948ei.framer-v-18wwg9a .framer-1mvnusd, .framer-948ei.framer-v-96r6q7 .framer-1mvnusd, .framer-948ei.framer-v-10pngp5 .framer-1mvnusd, .framer-948ei.framer-v-1ymudb1 .framer-1mvnusd { height: 201px; left: calc(49.7522299306244% - 270px / 2); top: calc(49.90689013035384% - 201px / 2); width: 270px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-1k3vrbv, .framer-948ei.framer-v-655dk4 .framer-1k3vrbv, .framer-948ei.framer-v-ae0cwc .framer-1k3vrbv, .framer-948ei.framer-v-18wwg9a .framer-1k3vrbv, .framer-948ei.framer-v-96r6q7 .framer-1k3vrbv, .framer-948ei.framer-v-10pngp5 .framer-1k3vrbv, .framer-948ei.framer-v-1ymudb1 .framer-1k3vrbv { align-content: flex-end; align-items: flex-end; bottom: unset; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: center; left: calc(46.29629629629632% - 289px / 2); padding: 0px 0px 0px 0px; right: unset; top: -96px; width: 289px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-gkoso3-container, .framer-948ei.framer-v-655dk4 .framer-gkoso3-container, .framer-948ei.framer-v-ae0cwc .framer-gkoso3-container, .framer-948ei.framer-v-18wwg9a .framer-gkoso3-container, .framer-948ei.framer-v-96r6q7 .framer-gkoso3-container, .framer-948ei.framer-v-10pngp5 .framer-gkoso3-container, .framer-948ei.framer-v-1ymudb1 .framer-gkoso3-container { left: unset; position: relative; top: unset; width: 65px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-1yvmtw8-container, .framer-948ei.framer-v-655dk4 .framer-1yvmtw8-container, .framer-948ei.framer-v-ae0cwc .framer-1yvmtw8-container, .framer-948ei.framer-v-18wwg9a .framer-1yvmtw8-container, .framer-948ei.framer-v-96r6q7 .framer-1yvmtw8-container, .framer-948ei.framer-v-10pngp5 .framer-1yvmtw8-container, .framer-948ei.framer-v-1ymudb1 .framer-1yvmtw8-container { position: relative; right: unset; top: unset; width: 101px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-w97bgk-container, .framer-948ei.framer-v-655dk4 .framer-w97bgk-container, .framer-948ei.framer-v-ae0cwc .framer-w97bgk-container, .framer-948ei.framer-v-18wwg9a .framer-w97bgk-container, .framer-948ei.framer-v-96r6q7 .framer-w97bgk-container, .framer-948ei.framer-v-10pngp5 .framer-w97bgk-container, .framer-948ei.framer-v-1ymudb1 .framer-w97bgk-container { bottom: unset; position: relative; right: unset; width: 47px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-fpq9rw-container, .framer-948ei.framer-v-655dk4 .framer-fpq9rw-container, .framer-948ei.framer-v-ae0cwc .framer-fpq9rw-container, .framer-948ei.framer-v-18wwg9a .framer-fpq9rw-container, .framer-948ei.framer-v-96r6q7 .framer-fpq9rw-container, .framer-948ei.framer-v-10pngp5 .framer-fpq9rw-container, .framer-948ei.framer-v-1ymudb1 .framer-fpq9rw-container { bottom: unset; left: unset; position: relative; width: 63px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-160pc9z-container, .framer-948ei.framer-v-655dk4 .framer-160pc9z-container, .framer-948ei.framer-v-ae0cwc .framer-160pc9z-container, .framer-948ei.framer-v-18wwg9a .framer-160pc9z-container, .framer-948ei.framer-v-96r6q7 .framer-160pc9z-container, .framer-948ei.framer-v-10pngp5 .framer-160pc9z-container, .framer-948ei.framer-v-1ymudb1 .framer-160pc9z-container { bottom: unset; left: unset; position: relative; width: 38px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-1jw6h9g-container, .framer-948ei.framer-v-655dk4 .framer-1jw6h9g-container, .framer-948ei.framer-v-ae0cwc .framer-1jw6h9g-container, .framer-948ei.framer-v-18wwg9a .framer-1jw6h9g-container, .framer-948ei.framer-v-96r6q7 .framer-1jw6h9g-container, .framer-948ei.framer-v-10pngp5 .framer-1jw6h9g-container, .framer-948ei.framer-v-1ymudb1 .framer-1jw6h9g-container { left: unset; position: relative; top: unset; width: 85px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-1igj8fa-container, .framer-948ei.framer-v-655dk4 .framer-1igj8fa-container, .framer-948ei.framer-v-ae0cwc .framer-1igj8fa-container, .framer-948ei.framer-v-18wwg9a .framer-1igj8fa-container, .framer-948ei.framer-v-96r6q7 .framer-1igj8fa-container, .framer-948ei.framer-v-10pngp5 .framer-1igj8fa-container, .framer-948ei.framer-v-1ymudb1 .framer-1igj8fa-container { position: relative; right: unset; top: unset; width: 55px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-p493zr-container, .framer-948ei.framer-v-655dk4 .framer-p493zr-container, .framer-948ei.framer-v-ae0cwc .framer-p493zr-container, .framer-948ei.framer-v-18wwg9a .framer-p493zr-container, .framer-948ei.framer-v-96r6q7 .framer-p493zr-container, .framer-948ei.framer-v-10pngp5 .framer-p493zr-container, .framer-948ei.framer-v-1ymudb1 .framer-p493zr-container { bottom: unset; height: 537px; left: calc(49.9504459861249% - 1009px / 2); mix-blend-mode: multiply; right: unset; top: calc(49.90689013035384% - 537px / 2); width: 1009px; }',
  '.framer-948ei.framer-v-n0vpn9 .framer-8j7eic-container, .framer-948ei.framer-v-655dk4 .framer-8j7eic-container, .framer-948ei.framer-v-ae0cwc .framer-8j7eic-container, .framer-948ei.framer-v-18wwg9a .framer-8j7eic-container { bottom: 347px; height: unset; left: 510px; right: 443px; width: unset; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-948ei.framer-v-n0vpn9 .framer-1k3vrbv { gap: 0px; } .framer-948ei.framer-v-n0vpn9 .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-948ei.framer-v-n0vpn9 .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-948ei.framer-v-n0vpn9 .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-948ei.framer-v-655dk4 .framer-125axmh { left: 322px; top: -14px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-948ei.framer-v-655dk4 .framer-1k3vrbv { gap: 0px; } .framer-948ei.framer-v-655dk4 .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-948ei.framer-v-655dk4 .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-948ei.framer-v-655dk4 .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-948ei.framer-v-ae0cwc .framer-u2l7lb-container, .framer-948ei.framer-v-18wwg9a .framer-u2l7lb-container, .framer-948ei.framer-v-96r6q7 .framer-u2l7lb-container, .framer-948ei.framer-v-10pngp5 .framer-u2l7lb-container, .framer-948ei.framer-v-1ymudb1 .framer-u2l7lb-container { left: 52px; top: 30px; width: 110px; }',
  '.framer-948ei.framer-v-ae0cwc .framer-15gph2n-container, .framer-948ei.framer-v-18wwg9a .framer-15gph2n-container, .framer-948ei.framer-v-96r6q7 .framer-15gph2n-container, .framer-948ei.framer-v-10pngp5 .framer-15gph2n-container, .framer-948ei.framer-v-1ymudb1 .framer-15gph2n-container { bottom: 119px; left: unset; right: 149px; top: unset; width: 54px; }',
  '.framer-948ei.framer-v-ae0cwc .framer-yox9q5-container, .framer-948ei.framer-v-18wwg9a .framer-yox9q5-container, .framer-948ei.framer-v-96r6q7 .framer-yox9q5-container, .framer-948ei.framer-v-10pngp5 .framer-yox9q5-container, .framer-948ei.framer-v-1ymudb1 .framer-yox9q5-container { bottom: 89px; left: unset; right: 133px; top: unset; width: 80px; }',
  '.framer-948ei.framer-v-ae0cwc .framer-17glung-container, .framer-948ei.framer-v-18wwg9a .framer-17glung-container, .framer-948ei.framer-v-96r6q7 .framer-17glung-container, .framer-948ei.framer-v-10pngp5 .framer-17glung-container, .framer-948ei.framer-v-1ymudb1 .framer-17glung-container { bottom: unset; left: 58px; top: 120px; width: 61px; }',
  '.framer-948ei.framer-v-ae0cwc .framer-125axmh { bottom: 48px; left: 339px; top: unset; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-948ei.framer-v-ae0cwc .framer-1k3vrbv { gap: 0px; } .framer-948ei.framer-v-ae0cwc .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-948ei.framer-v-ae0cwc .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-948ei.framer-v-ae0cwc .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-948ei.framer-v-18wwg9a .framer-125axmh { left: 54%; top: -50px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-948ei.framer-v-18wwg9a .framer-1k3vrbv { gap: 0px; } .framer-948ei.framer-v-18wwg9a .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-948ei.framer-v-18wwg9a .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-948ei.framer-v-18wwg9a .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-948ei.framer-v-96r6q7 .framer-8j7eic-container, .framer-948ei.framer-v-10pngp5 .framer-8j7eic-container, .framer-948ei.framer-v-1ymudb1 .framer-8j7eic-container { bottom: 157px; height: unset; left: 477px; right: 476px; top: 358px; width: unset; }',
  '.framer-948ei.framer-v-96r6q7 .framer-125axmh { left: 53%; top: 50px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-948ei.framer-v-96r6q7 .framer-1k3vrbv { gap: 0px; } .framer-948ei.framer-v-96r6q7 .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-948ei.framer-v-96r6q7 .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-948ei.framer-v-96r6q7 .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-948ei.framer-v-10pngp5 .framer-125axmh { bottom: -8px; left: unset; right: 60px; top: unset; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-948ei.framer-v-10pngp5 .framer-1k3vrbv { gap: 0px; } .framer-948ei.framer-v-10pngp5 .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-948ei.framer-v-10pngp5 .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-948ei.framer-v-10pngp5 .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-948ei.framer-v-1ymudb1 .framer-125axmh { bottom: -26px; left: unset; right: 60px; top: unset; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-948ei.framer-v-1ymudb1 .framer-1k3vrbv { gap: 0px; } .framer-948ei.framer-v-1ymudb1 .framer-1k3vrbv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-948ei.framer-v-1ymudb1 .framer-1k3vrbv > :first-child { margin-top: 0px; } .framer-948ei.framer-v-1ymudb1 .framer-1k3vrbv > :last-child { margin-bottom: 0px; } }',
  '.framer-948ei.framer-v-qkkkjw .framer-8j7eic-container, .framer-948ei.framer-v-30clu8 .framer-8j7eic-container { left: unset; right: 405px; top: 206px; }',
  '.framer-948ei.framer-v-1f09y03 .framer-1iaswxc-container { bottom: unset; right: -56px; top: 53%; }',
  '.framer-948ei.framer-v-1f09y03 .framer-ereqn5-container { bottom: unset; right: 14px; top: 53%; }',
  '.framer-948ei.framer-v-1f09y03 .framer-1togqzb-container { left: 8px; top: 135px; }',
  '.framer-948ei.framer-v-1f09y03 .framer-u2l7lb-container { left: 148px; top: 135px; }',
  '.framer-948ei.framer-v-1f09y03 .framer-w97bgk-container { bottom: unset; right: -116px; top: 48%; }',
  '.framer-948ei.framer-v-1f09y03 .framer-fpq9rw-container { bottom: unset; left: unset; right: 94px; top: 48%; }',
  '.framer-948ei.framer-v-1f09y03 .framer-160pc9z-container { bottom: unset; left: 126px; top: 48%; }',
  '.framer-948ei.framer-v-1f09y03 .framer-p493zr-container { bottom: -4px; height: 537px; left: -306px; right: unset; top: unset; width: 1009px; }',
  '.framer-948ei.framer-v-1f09y03 .framer-8j7eic-container { left: 266px; top: calc(51.02420856610803% - 22px / 2); width: 75px; }',
  '.framer-948ei.framer-v-1anadwn .framer-1iaswxc-container { bottom: 101px; height: 108px; left: 87px; right: unset; width: 13px; z-index: 0; }',
  '.framer-948ei.framer-v-1anadwn .framer-ereqn5-container { bottom: 73px; height: 71px; left: 42px; right: unset; width: 14px; z-index: 0; }',
  '.framer-948ei.framer-v-1anadwn .framer-1togqzb-container { height: 71px; left: -173px; top: 200px; width: 12px; z-index: 0; }',
  '.framer-948ei.framer-v-1anadwn .framer-u2l7lb-container { height: 71px; left: -85px; top: 200px; width: 13px; z-index: 0; }',
  '.framer-948ei.framer-v-1anadwn .framer-w97bgk-container { bottom: unset; height: 74px; left: 141px; right: unset; top: calc(47.34177215189876% - 74px / 2); width: 12px; z-index: 0; }',
  '.framer-948ei.framer-v-1anadwn .framer-fpq9rw-container { bottom: 108px; height: 86px; left: 7px; width: 13px; z-index: 0; }',
  '.framer-948ei.framer-v-1anadwn .framer-160pc9z-container { bottom: 107px; height: 93px; left: -81px; width: 14px; z-index: 0; }',
  '.framer-948ei.framer-v-1anadwn .framer-p493zr-container { z-index: 1; }',
  '.framer-948ei.framer-v-1anadwn .framer-8j7eic-container { bottom: 110px; height: 126px; left: 104px; top: unset; width: 48px; z-index: 0; }',
  '.framer-948ei.framer-v-tv2zos .framer-gkoso3-container { left: 42px; top: 63px; }',
  '.framer-948ei.framer-v-tv2zos .framer-1yvmtw8-container { right: 54px; top: 56px; }',
  '.framer-948ei.framer-v-tv2zos .framer-w97bgk-container { bottom: 144px; right: 14px; }',
  '.framer-948ei.framer-v-tv2zos .framer-160pc9z-container { bottom: 32px; left: 84px; }',
  '.framer-948ei.framer-v-tv2zos .framer-1jw6h9g-container { left: 15px; top: 53%; }',
  '.framer-948ei.framer-v-tv2zos .framer-1igj8fa-container { left: 48%; right: unset; top: -14px; }',
  '.framer-948ei.framer-v-1j14qwb .framer-4b524j-container { left: 33px; top: 157px; }',
  '.framer-948ei.framer-v-1j14qwb .framer-d60suy-container { right: 119px; top: 59px; }',
  '.framer-948ei.framer-v-1j14qwb .framer-1iaswxc-container { bottom: unset; right: 26px; top: 48%; }',
  '.framer-948ei.framer-v-1j14qwb .framer-ereqn5-container { bottom: 65px; right: 58px; }',
  '.framer-948ei.framer-v-1j14qwb .framer-8jq7kp-container { bottom: 20px; left: 46%; }',
  '.framer-948ei.framer-v-1j14qwb .framer-121179n-container { bottom: 81px; left: 51px; }',
  '.framer-948ei.framer-v-1sk9d83 .framer-1togqzb-container { height: 50px; left: 206px; top: 76px; width: 50px; }',
  '.framer-948ei.framer-v-1sk9d83 .framer-u2l7lb-container { height: 50px; left: 222px; top: 157px; width: 50px; }',
  '.framer-948ei.framer-v-1sk9d83 .framer-dt1nri-container { height: 50px; left: 172px; top: 216px; }',
  '.framer-948ei.framer-v-1sk9d83 .framer-vm0lt-container { height: 50px; left: 89px; top: 218px; }',
  '.framer-948ei.framer-v-1sk9d83 .framer-1xv0t2j-container { height: 50px; left: 51px; top: 147px; }',
  '.framer-948ei.framer-v-1sk9d83 .framer-lc2jrz-container { bottom: 191px; left: 69px; top: unset; }',
  '.framer-948ei.framer-v-1sk9d83 .framer-15swu5u-container { height: 50px; left: 141px; top: 40px; }',
  '.framer-948ei.framer-v-antl4q .framer-1gr4pd7 { flex-direction: row; height: 59%; left: calc(49.85133795837465% - 85.92666005946482% / 2); padding: 0px 100px 0px 100px; top: calc(51.58286778398512% - 59.0316573556797% / 2); width: 86%; }',
  '.framer-948ei.framer-v-antl4q .framer-1ni00s4 { flex: 1 0 0px; justify-content: center; min-height: unset; order: 1; width: 1px; }',
  '.framer-948ei.framer-v-antl4q .framer-oet49y-container { z-index: 10; }',
  '.framer-948ei.framer-v-antl4q .framer-1gwffo1 { flex: 1 0 0px; justify-content: center; min-height: unset; order: 0; width: 1px; z-index: 10; }',
  '.framer-948ei.framer-v-antl4q .framer-dnftbs { flex: 1 0 0px; justify-content: center; min-height: unset; order: 2; width: 1px; }',
  '.framer-948ei.framer-v-antl4q .framer-10roqpf { bottom: 71px; height: 77px; left: calc(49.89979959919842% - 73.94789579158316% / 2); width: 74%; }',
  '.framer-948ei.framer-v-antl4q .framer-1baknbo { bottom: -12px; left: -30px; top: unset; }',
  '.framer-948ei.framer-v-antl4q .framer-vrov5l { bottom: -10px; right: -35px; top: unset; }',
  '.framer-948ei.framer-v-antl4q .framer-125axmh { bottom: -39px; top: unset; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-948ei.framer-v-antl4q .framer-1gr4pd7 { gap: 0px; } .framer-948ei.framer-v-antl4q .framer-1gr4pd7 > * { margin: 0px; margin-left: calc(41px / 2); margin-right: calc(41px / 2); } .framer-948ei.framer-v-antl4q .framer-1gr4pd7 > :first-child { margin-left: 0px; } .framer-948ei.framer-v-antl4q .framer-1gr4pd7 > :last-child { margin-right: 0px; } }',
];
var FramerC6ZYtBmll = withCSS8(Component6, css7, 'framer-948ei',);
var stdin_default8 = FramerC6ZYtBmll;
FramerC6ZYtBmll.displayName = 'FYLO COMPOSITION';
FramerC6ZYtBmll.defaultProps = { height: 537, width: 1009, };
addPropertyControls8(FramerC6ZYtBmll, {
  variant: {
    options: [
      'zEXSsGxpE',
      'HovROSEim',
      'lBUZui6j9',
      'dVLWELU6e',
      'XACXI8mDn',
      'vf_oeYc8q',
      'po9merzYT',
      'Wzv1r0oKb',
      'Du1gnhwdF',
      'MX2TbvLxw',
      'cg1e52nt2',
      'QcEIwdpHn',
      'r8IR85ZDv',
      'qMUngWgkC',
      'gDTDJiCJ2',
      'p6HKTvlB3',
      'rfZM8jP4B',
      'fhIf6dGTg',
      'Ugn1WXH_Q',
      'NsO3auvSc',
      'HAgS9njVa',
      'vhOykwvnY',
      'bmOYz6gay',
      'qT5kEYyp_',
      'ZNHbdIJKd',
      'h124nvy2N',
      'Cr5qNjOdj',
      'kFGmGEOUz',
      'l5FvQV66Q',
      'udHfq45LS',
      'Z1sTRLzN1',
      'cq7D62bxc',
      'dUMZVZnV0',
    ],
    optionTitles: [
      'Variant B-2',
      'Variant A-1',
      'Variant A-2',
      'Variant A-3',
      'Variant A-4',
      'Variant B-1',
      'Variant B-3',
      'Variant B-3',
      'Variant B-7',
      'Variant B-8',
      'Variant C-1',
      'Variant C-2',
      'Variant C-3',
      'Variant C-4',
      'Variant C-5',
      'Variant C-6',
      'Variant D-1',
      'Variant D-2',
      'Variant D-3',
      'Variant D-4',
      'Variant E-1',
      'Variant E-2',
      'Variant E-3',
      'Variant E-4',
      'Variant E-5',
      'Variant E-6',
      'Variant E-7',
      'Variant F-1',
      'Variant F-2',
      'Variant F-3',
      'Variant F-4',
      'Variant F-5',
      'Variant B-6',
    ],
    title: 'Variant',
    type: ControlType11.Enum,
  },
},);
addFonts6(FramerC6ZYtBmll, [
  { family: 'PP Supply Sans Medium', url: 'https://framerusercontent.com/assets/0kF4T3RnZOnNCKwJnGNdr51Rg.ttf', },
  { family: 'PP Supply Sans Light', url: 'https://framerusercontent.com/assets/qRqpS3XmgDWz2V8lG9yQbA2xWg.ttf', },
  { family: 'Roboto', style: 'normal', url: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vBh05IsDqlA.woff2', weight: '500', },
  ...NodeFonts,
  ...SeedFonts,
],);

// virtual:fylo
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default8.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default8, ...props, },);
};
var fylo_default = stdin_default8;
export { fylo_default as default, };
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
