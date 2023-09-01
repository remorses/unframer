// https:https://framer.com/m/Logo-Ticker-1CEq.js@YtVlixDzOkypVBs3Dpav
import { jsx as _jsx2, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType2,
  cx,
  getFonts,
  Image,
  RichText,
  useVariantState,
  withCSS,
} from 'installable-framer/dist/framer';
import { LayoutGroup as LayoutGroup2, motion as motion2, } from 'framer-motion';
import * as React from 'react';

// https:https://framerusercontent.com/modules/B2xAlJLcN0gOnt11mSPw/ddeyjQ2r9Xibg9wdL56v/Ticker.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import { Children, cloneElement, createRef, useCallback, useEffect, useMemo, useRef, useState, } from 'react';
import { addPropertyControls, ControlType, RenderTarget, } from 'installable-framer/dist/framer';
import { LayoutGroup, motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion, useTransform, wrap, } from 'framer-motion';

// https:https://esm.sh/v131/@motionone/utils@10.15.1/node/utils.mjs
function h(o, r2,) {
  o.indexOf(r2,) === -1 && o.push(r2,);
}
var x = (o, r2, e,) => Math.min(Math.max(e, o,), r2,);
var b = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: 'ease', };
var s = (o,) => typeof o == 'number';
var a = (o,) => Array.isArray(o,) && !s(o[0],);
var l = (o, r2, e,) => {
  let t2 = r2 - o;
  return ((e - o) % t2 + t2) % t2 + o;
};
function g(o, r2,) {
  return a(o,) ? o[l(0, o.length, r2,)] : o;
}
var i = (o, r2, e,) => -e * o + e * r2 + o;
var O = () => {
};
var u = (o,) => o;
var f = (o, r2, e,) => r2 - o === 0 ? 1 : (e - o) / (r2 - o);
function m(o, r2,) {
  let e = o[o.length - 1];
  for (let t2 = 1; t2 <= r2; t2++) {
    let p2 = f(0, r2, t2,);
    o.push(i(e, 1, p2,),);
  }
}
function d(o,) {
  let r2 = [0,];
  return m(r2, o - 1,), r2;
}
function S(o, r2 = d(o.length,), e = u,) {
  let t2 = o.length, p2 = t2 - r2.length;
  return p2 > 0 && m(r2, p2,), (y,) => {
    let n = 0;
    for (; n < t2 - 2 && !(y < r2[n + 1]); n++);
    let c = x(0, 1, f(r2[n], r2[n + 1], y,),);
    return c = g(e, n,)(c,), i(o[n], o[n + 1], c,);
  };
}
var A = (o,) => Array.isArray(o,) && s(o[0],);
var F = (o,) => typeof o == 'object' && !!o.createAnimation;
var I = (o,) => typeof o == 'function';
var v = (o,) => typeof o == 'string';
var N = { ms: (o,) => o * 1e3, s: (o,) => o / 1e3, };
function R(o, r2,) {
  return r2 ? o * (1e3 / r2) : 0;
}

// https:https://esm.sh/v131/@motionone/easing@10.15.1/node/easing.mjs
var s2 = (n, e, t2,) => (((1 - 3 * t2 + 3 * e) * n + (3 * t2 - 6 * e)) * n + 3 * e) * n;
var f2 = 1e-7;
var d2 = 12;
function b2(n, e, t2, r2, o,) {
  let i3, c, u2 = 0;
  do c = e + (t2 - e) / 2, i3 = s2(c, r2, o,) - n, i3 > 0 ? t2 = c : e = c; while (Math.abs(i3,) > f2 && ++u2 < d2);
  return c;
}
function l2(n, e, t2, r2,) {
  if (n === e && t2 === r2) {
    return u;
  }
  let o = (i3,) => b2(i3, 0, 1, n, t2,);
  return (i3,) => i3 === 0 || i3 === 1 ? i3 : s2(o(i3,), e, r2,);
}
var h2 = (n, e = 'end',) => (t2,) => {
  t2 = e === 'end' ? Math.min(t2, 0.999,) : Math.max(t2, 1e-3,);
  let r2 = t2 * n, o = e === 'end' ? Math.floor(r2,) : Math.ceil(r2,);
  return x(0, 1, o / n,);
};

// https:https://esm.sh/v131/@motionone/animation@10.15.1/node/animation.mjs
var F2 = {
  ease: l2(0.25, 0.1, 0.25, 1,),
  'ease-in': l2(0.42, 0, 1, 1,),
  'ease-in-out': l2(0.42, 0, 0.58, 1,),
  'ease-out': l2(0, 0, 0.58, 1,),
};
var w = /\((.*?)\)/;
function l3(i3,) {
  if (I(i3,)) {
    return i3;
  }
  if (A(i3,)) {
    return l2(...i3,);
  }
  if (F2[i3]) {
    return F2[i3];
  }
  if (i3.startsWith('steps',)) {
    let t2 = w.exec(i3,);
    if (t2) {
      let a2 = t2[1].split(',',);
      return h2(parseFloat(a2[0],), a2[1].trim(),);
    }
  }
  return u;
}
var T = class {
  constructor(
    t2,
    a2 = [0, 1,],
    {
      easing: s3,
      duration: m2 = b.duration,
      delay: p2 = b.delay,
      endDelay: R3 = b.endDelay,
      repeat: A2 = b.repeat,
      offset: x2,
      direction: c = 'normal',
    } = {},
  ) {
    if (
      this.startTime = null,
        this.rate = 1,
        this.t = 0,
        this.cancelTimestamp = null,
        this.easing = u,
        this.duration = 0,
        this.totalDuration = 0,
        this.repeat = 0,
        this.playState = 'idle',
        this.finished = new Promise((r2, h3,) => {
          this.resolve = r2, this.reject = h3;
        },),
        s3 = s3 || b.easing,
        F(s3,)
    ) {
      let r2 = s3.createAnimation(a2,);
      s3 = r2.easing, a2 = r2.keyframes || a2, m2 = r2.duration || m2;
    }
    this.repeat = A2, this.easing = a(s3,) ? u : l3(s3,), this.updateDuration(m2,);
    let q = S(a2, x2, a(s3,) ? s3.map(l3,) : u,);
    this.tick = (r2,) => {
      var h3;
      p2 = p2;
      let e = 0;
      this.pauseTime !== void 0 ? e = this.pauseTime : e = (r2 - this.startTime) * this.rate,
        this.t = e,
        e /= 1e3,
        e = Math.max(e - p2, 0,),
        this.playState === 'finished' && this.pauseTime === void 0 && (e = this.totalDuration);
      let f3 = e / this.duration, g2 = Math.floor(f3,), n = f3 % 1;
      !n && f3 >= 1 && (n = 1), n === 1 && g2--;
      let y = g2 % 2;
      (c === 'reverse' || c === 'alternate' && y || c === 'alternate-reverse' && !y) && (n = 1 - n);
      let D = e >= this.totalDuration ? 1 : Math.min(n, 1,), v2 = q(this.easing(D,),);
      t2(v2,),
        this.pauseTime === void 0 && (this.playState === 'finished' || e >= this.totalDuration + R3)
          ? (this.playState = 'finished', (h3 = this.resolve) === null || h3 === void 0 || h3.call(this, v2,))
          : this.playState !== 'idle' && (this.frameRequestId = requestAnimationFrame(this.tick,));
    }, this.play();
  }
  play() {
    let t2 = performance.now();
    this.playState = 'running',
      this.pauseTime !== void 0 ? this.startTime = t2 - this.pauseTime : this.startTime || (this.startTime = t2),
      this.cancelTimestamp = this.startTime,
      this.pauseTime = void 0,
      this.frameRequestId = requestAnimationFrame(this.tick,);
  }
  pause() {
    this.playState = 'paused', this.pauseTime = this.t;
  }
  finish() {
    this.playState = 'finished', this.tick(0,);
  }
  stop() {
    var t2;
    this.playState = 'idle',
      this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId,),
      (t2 = this.reject) === null || t2 === void 0 || t2.call(this, false,);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp,);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {
  }
  updateDuration(t2,) {
    this.duration = t2, this.totalDuration = t2 * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t2,) {
    this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = t2 : this.startTime = performance.now() - t2 / this.rate;
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(t2,) {
    this.rate = t2;
  }
};

// https:https://esm.sh/v131/@motionone/generators@10.15.1/node/generators.mjs
var O2 = 5;
function T2(t2, o, r2,) {
  let s3 = Math.max(o - O2, 0,);
  return R(r2 - t2(s3,), o - s3,);
}
var p = { stiffness: 100, damping: 10, mass: 1, };
var w2 = (t2 = p.stiffness, o = p.damping, r2 = p.mass,) => o / (2 * Math.sqrt(t2 * r2,));
function S2(t2, o, r2,) {
  return t2 < o && r2 >= o || t2 > o && r2 <= o;
}
var B = (
  {
    stiffness: t2 = p.stiffness,
    damping: o = p.damping,
    mass: r2 = p.mass,
    from: s3 = 0,
    to: n = 1,
    velocity: i3 = 0,
    restSpeed: f3 = 2,
    restDistance: l4 = 0.5,
  } = {},
) => {
  i3 = i3 ? N.s(i3,) : 0;
  let c = { done: false, hasReachedTarget: false, current: s3, target: n, },
    h3 = n - s3,
    m2 = Math.sqrt(t2 / r2,) / 1e3,
    a2 = w2(t2, o, r2,),
    M2;
  if (a2 < 1) {
    let u2 = m2 * Math.sqrt(1 - a2 * a2,);
    M2 = (d3,) => n - Math.exp(-a2 * m2 * d3,) * ((-i3 + a2 * m2 * h3) / u2 * Math.sin(u2 * d3,) + h3 * Math.cos(u2 * d3,));
  } else {
    M2 = (u2,) => n - Math.exp(-m2 * u2,) * (h3 + (-i3 + m2 * h3) * u2);
  }
  return (u2,) => {
    c.current = M2(u2,);
    let d3 = u2 === 0 ? i3 : T2(M2, u2, c.current,), R3 = Math.abs(d3,) <= f3, g2 = Math.abs(n - c.current,) <= l4;
    return c.done = R3 && g2, c.hasReachedTarget = S2(s3, n, c.current,), c;
  };
};
var L = (
  {
    from: t2 = 0,
    velocity: o = 0,
    power: r2 = 0.8,
    decay: s3 = 0.325,
    bounceDamping: n,
    bounceStiffness: i3,
    changeTarget: f3,
    min: l4,
    max: c,
    restDistance: h3 = 0.5,
    restSpeed: m2,
  },
) => {
  s3 = N.ms(s3,);
  let a2 = { hasReachedTarget: false, done: false, current: t2, target: t2, },
    M2 = (e,) => l4 !== void 0 && e < l4 || c !== void 0 && e > c,
    u2 = (e,) => l4 === void 0 ? c : c === void 0 || Math.abs(l4 - e,) < Math.abs(c - e,) ? l4 : c,
    d3 = r2 * o,
    R3 = t2 + d3,
    g2 = f3 === void 0 ? R3 : f3(R3,);
  a2.target = g2, g2 !== R3 && (d3 = g2 - t2);
  let b3 = (e,) => -d3 * Math.exp(-e / s3,),
    q = (e,) => g2 + b3(e,),
    F4 = (e,) => {
      let y = b3(e,), k2 = q(e,);
      a2.done = Math.abs(y,) <= h3, a2.current = a2.done ? g2 : k2;
    },
    x2,
    D,
    G2 = (e,) => {
      M2(a2.current,) &&
        (x2 = e,
          D = B({
            from: a2.current,
            to: u2(a2.current,),
            velocity: T2(q, e, a2.current,),
            damping: n,
            stiffness: i3,
            restDistance: h3,
            restSpeed: m2,
          },));
    };
  return G2(0,), (e,) => {
    let y = false;
    return !D && x2 === void 0 && (y = true, F4(e,), G2(e,)),
      x2 !== void 0 && e > x2 ? (a2.hasReachedTarget = true, D(e - x2,)) : (a2.hasReachedTarget = false, !y && F4(e,), a2);
  };
};
var V = 10;
var $ = 1e4;
function j(t2, o = u,) {
  let r2, s3 = V, n = t2(0,), i3 = [o(n.current,),];
  for (; !n.done && s3 < $;) {
    n = t2(s3,), i3.push(o(n.done ? n.target : n.current,),), r2 === void 0 && n.hasReachedTarget && (r2 = s3), s3 += V;
  }
  let f3 = s3 - V;
  return i3.length === 1 && i3.push(n.current,), { keyframes: i3, duration: f3 / 1e3, overshootDuration: (r2 ?? f3) / 1e3, };
}

// https:https://esm.sh/v131/hey-listen@1.0.8/node/hey-listen.mjs
var i2 = function () {
};
var r = function () {
};
i2 = function (n, o,) {
  !n && typeof console < 'u' && console.warn(o,);
},
  r = function (n, o,) {
    if (!n) {
      throw new Error(o,);
    }
  };

// https:https://esm.sh/v131/tslib@2.6.2/node/tslib.mjs
function S3(e, t2,) {
  var n = {};
  for (var r2 in e) {
    Object.prototype.hasOwnProperty.call(e, r2,) && t2.indexOf(r2,) < 0 && (n[r2] = e[r2]);
  }
  if (e != null && typeof Object.getOwnPropertySymbols == 'function') {
    for (var i3 = 0, r2 = Object.getOwnPropertySymbols(e,); i3 < r2.length; i3++) {
      t2.indexOf(r2[i3],) < 0 && Object.prototype.propertyIsEnumerable.call(e, r2[i3],) && (n[r2[i3]] = e[r2[i3]]);
    }
  }
  return n;
}

// https:https://esm.sh/v131/@motionone/types@10.15.1/node/types.mjs
var t = class {
  setAnimation(i3,) {
    this.animation = i3,
      i3?.finished.then(() => this.clearAnimation()).catch(() => {
      },);
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
};

// https:https://esm.sh/v131/@motionone/dom@10.16.2/node/dom.mjs
var ct = /* @__PURE__ */ new WeakMap();
function j2(t2,) {
  return ct.has(t2,) || ct.set(t2, { transforms: [], values: /* @__PURE__ */ new Map(), },), ct.get(t2,);
}
function Vt(t2, e,) {
  return t2.has(e,) || t2.set(e, new t(),), t2.get(e,);
}
var he = ['', 'X', 'Y', 'Z',];
var ve = ['translate', 'scale', 'rotate', 'skew',];
var z = { x: 'translateX', y: 'translateY', z: 'translateZ', };
var Wt = { syntax: '<angle>', initialValue: '0deg', toDefaultUnit: (t2,) => t2 + 'deg', };
var ye = {
  translate: { syntax: '<length-percentage>', initialValue: '0px', toDefaultUnit: (t2,) => t2 + 'px', },
  rotate: Wt,
  scale: { syntax: '<number>', initialValue: 1, toDefaultUnit: u, },
  skew: Wt,
};
var T3 = /* @__PURE__ */ new Map();
var F3 = (t2,) => `--motion-${t2}`;
var X = ['x', 'y', 'z',];
ve.forEach((t2,) => {
  he.forEach((e,) => {
    X.push(t2 + e,), T3.set(F3(t2 + e,), ye[t2],);
  },);
},);
var xe = (t2, e,) => X.indexOf(t2,) - X.indexOf(e,);
var we = new Set(X,);
var H = (t2,) => we.has(t2,);
var Mt = (t2, e,) => {
  z[e] && (e = z[e]);
  let { transforms: n, } = j2(t2,);
  h(n, e,), t2.style.transform = ft(n,);
};
var ft = (t2,) => t2.sort(xe,).reduce(Ee, '',).trim();
var Ee = (t2, e,) => `${t2} ${e}(var(${F3(e,)}))`;
var R2 = (t2,) => t2.startsWith('--',);
var Pt = /* @__PURE__ */ new Set();
function Nt(t2,) {
  if (!Pt.has(t2,)) {
    Pt.add(t2,);
    try {
      let { syntax: e, initialValue: n, } = T3.has(t2,) ? T3.get(t2,) : {};
      CSS.registerProperty({ name: t2, inherits: false, syntax: e, initialValue: n, },);
    } catch {
    }
  }
}
var lt = (t2, e,) => document.createElement('div',).animate(t2, e,);
var It = {
  cssRegisterProperty: () => typeof CSS < 'u' && Object.hasOwnProperty.call(CSS, 'registerProperty',),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate',),
  partialKeyframes: () => {
    try {
      lt({ opacity: [1,], },);
    } catch {
      return false;
    }
    return true;
  },
  finished: () => !!lt({ opacity: [0, 1,], }, { duration: 1e-3, },).finished,
  linearEasing: () => {
    try {
      lt({ opacity: 0, }, { easing: 'linear(0, 1)', },);
    } catch {
      return false;
    }
    return true;
  },
};
var mt = {};
var V2 = {};
for (let t2 in It) {
  V2[t2] = () => (mt[t2] === void 0 && (mt[t2] = It[t2]()), mt[t2]);
}
var Te = 0.015;
var Le = (t2, e,) => {
  let n = '', r2 = Math.round(e / Te,);
  for (let o = 0; o < r2; o++) {
    n += t2(f(0, r2 - 1, o,),) + ', ';
  }
  return n.substring(0, n.length - 2,);
};
var ut = (t2, e,) => I(t2,) ? V2.linearEasing() ? `linear(${Le(t2, e,)})` : b.easing : A(t2,) ? De(t2,) : t2;
var De = ([t2, e, n, r2,],) => `cubic-bezier(${t2}, ${e}, ${n}, ${r2})`;
function _t(t2, e,) {
  for (let n = 0; n < t2.length; n++) {
    t2[n] === null && (t2[n] = n ? t2[n - 1] : e());
  }
  return t2;
}
var Y = (t2,) => Array.isArray(t2,) ? t2 : [t2,];
function W(t2,) {
  return z[t2] && (t2 = z[t2]), H(t2,) ? F3(t2,) : t2;
}
var M = {
  get: (t2, e,) => {
    e = W(e,);
    let n = R2(e,) ? t2.style.getPropertyValue(e,) : getComputedStyle(t2,)[e];
    if (!n && n !== 0) {
      let r2 = T3.get(e,);
      r2 && (n = r2.initialValue);
    }
    return n;
  },
  set: (t2, e, n,) => {
    e = W(e,), R2(e,) ? t2.style.setProperty(e, n,) : t2.style[e] = n;
  },
};
function J(t2, e = true,) {
  if (!(!t2 || t2.playState === 'finished')) {
    try {
      t2.stop ? t2.stop() : (e && t2.commitStyles(), t2.cancel());
    } catch {
    }
  }
}
function Q(t2, e,) {
  var n;
  let r2 = e?.toDefaultUnit || u, o = t2[t2.length - 1];
  if (v(o,)) {
    let i3 = ((n = o.match(/(-?[\d.]+)([a-z%]*)/,)) === null || n === void 0 ? void 0 : n[2]) || '';
    i3 && (r2 = (s3,) => s3 + i3);
  }
  return r2;
}
function We() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function _(t2, e, n, r2 = {}, o,) {
  let i3 = We(),
    s3 = r2.record !== false && i3,
    l4,
    {
      duration: p2 = b.duration,
      delay: a2 = b.delay,
      endDelay: c = b.endDelay,
      repeat: d3 = b.repeat,
      easing: f3 = b.easing,
      persist: O3 = false,
      direction: S4,
      offset: m2,
      allowWebkitAcceleration: g2 = false,
    } = r2,
    y = j2(t2,),
    b3 = H(e,),
    w3 = V2.waapi();
  b3 && Mt(t2, e,);
  let E2 = W(e,), A2 = Vt(y.values, E2,), x2 = T3.get(E2,);
  return J(A2.animation, !(F(f3,) && A2.generator) && r2.record !== false,), () => {
    let h3 = () => {
        var v2, D;
        return (D = (v2 = M.get(t2, E2,)) !== null && v2 !== void 0 ? v2 : x2?.initialValue) !== null && D !== void 0 ? D : 0;
      },
      u2 = _t(Y(n,), h3,),
      L2 = Q(u2, x2,);
    if (F(f3,)) {
      let v2 = f3.createAnimation(u2, e !== 'opacity', h3, E2, A2,);
      f3 = v2.easing, u2 = v2.keyframes || u2, p2 = v2.duration || p2;
    }
    if (
      R2(E2,) && (V2.cssRegisterProperty() ? Nt(E2,) : w3 = false),
        b3 && !V2.linearEasing() && (I(f3,) || a(f3,) && f3.some(I,)) && (w3 = false),
        w3
    ) {
      x2 && (u2 = u2.map((C,) => s(C,) ? x2.toDefaultUnit(C,) : C)), u2.length === 1 && (!V2.partialKeyframes() || s3) && u2.unshift(h3(),);
      let v2 = {
        delay: N.ms(a2,),
        duration: N.ms(p2,),
        endDelay: N.ms(c,),
        easing: a(f3,) ? void 0 : ut(f3, p2,),
        direction: S4,
        iterations: d3 + 1,
        fill: 'both',
      };
      l4 = t2.animate({ [E2]: u2, offset: m2, easing: a(f3,) ? f3.map((C,) => ut(C, p2,)) : void 0, }, v2,),
        l4.finished || (l4.finished = new Promise((C, Z,) => {
          l4.onfinish = C, l4.oncancel = Z;
        },));
      let D = u2[u2.length - 1];
      l4.finished.then(() => {
        O3 || (M.set(t2, E2, D,), l4.cancel());
      },).catch(O,), g2 || (l4.playbackRate = 1.000001);
    } else if (o && b3) {
      u2 = u2.map((v2,) => typeof v2 == 'string' ? parseFloat(v2,) : v2),
        u2.length === 1 && u2.unshift(parseFloat(h3(),),),
        l4 = new o(
          (v2,) => {
            M.set(t2, E2, L2 ? L2(v2,) : v2,);
          },
          u2,
          Object.assign(Object.assign({}, r2,), { duration: p2, easing: f3, },),
        );
    } else {
      let v2 = u2[u2.length - 1];
      M.set(t2, E2, x2 && s(v2,) ? x2.toDefaultUnit(v2,) : v2,);
    }
    return s3 && i3(t2, e, u2, { duration: p2, delay: a2, easing: f3, repeat: d3, offset: m2, }, 'motion-one',), A2.setAnimation(l4,), l4;
  };
}
var U = (t2, e,) => t2[e] ? Object.assign(Object.assign({}, t2,), t2[e],) : Object.assign({}, t2,);
function P(t2, e,) {
  var n;
  return typeof t2 == 'string'
    ? e
      ? ((n = e[t2]) !== null && n !== void 0 || (e[t2] = document.querySelectorAll(t2,)), t2 = e[t2])
      : t2 = document.querySelectorAll(t2,)
    : t2 instanceof Element && (t2 = [t2,]),
    Array.from(t2 || [],);
}
var Ne = (t2,) => t2();
var G = (t2, e, n = b.duration,) => new Proxy({ animations: t2.map(Ne,).filter(Boolean,), duration: n, options: e, }, _e,);
var Ie = (t2,) => t2.animations[0];
var _e = {
  get: (t2, e,) => {
    let n = Ie(t2,);
    switch (e) {
      case 'duration':
        return t2.duration;
      case 'currentTime':
        return N.s(n?.[e] || 0,);
      case 'playbackRate':
      case 'playState':
        return n?.[e];
      case 'finished':
        return t2.finished || (t2.finished = Promise.all(t2.animations.map(Be,),).catch(O,)), t2.finished;
      case 'stop':
        return () => {
          t2.animations.forEach((r2,) => J(r2,));
        };
      case 'forEachNative':
        return (r2,) => {
          t2.animations.forEach((o,) => r2(o, t2,));
        };
      default:
        return typeof n?.[e] > 'u' ? void 0 : () => t2.animations.forEach((r2,) => r2[e]());
    }
  },
  set: (t2, e, n,) => {
    switch (e) {
      case 'currentTime':
        n = N.ms(n,);
      case 'currentTime':
      case 'playbackRate':
        for (let r2 = 0; r2 < t2.animations.length; r2++) {
          t2.animations[r2][e] = n;
        }
        return true;
    }
    return false;
  },
};
var Be = (t2,) => t2.finished;
function tt(t2, e, n,) {
  return I(t2,) ? t2(e, n,) : t2;
}
function gt(t2,) {
  return function (n, r2, o = {},) {
    n = P(n,);
    let i3 = n.length;
    r(!!i3, 'No valid element provided.',), r(!!r2, 'No keyframes defined.',);
    let s3 = [];
    for (let l4 = 0; l4 < i3; l4++) {
      let p2 = n[l4];
      for (let a2 in r2) {
        let c = U(o, a2,);
        c.delay = tt(c.delay, l4, i3,);
        let d3 = _(p2, a2, r2[a2], c, t2,);
        s3.push(d3,);
      }
    }
    return G(s3, o, o.duration,);
  };
}
var Ge = gt(T,);
function Gt(t2,) {
  return s(t2,) && !isNaN(t2,);
}
function yt(t2,) {
  return v(t2,) ? parseFloat(t2,) : t2;
}
function et(t2,) {
  let e = /* @__PURE__ */ new WeakMap();
  return (n = {},) => {
    let r2 = /* @__PURE__ */ new Map(),
      o = (s3 = 0, l4 = 100, p2 = 0, a2 = false,) => {
        let c = `${s3}-${l4}-${p2}-${a2}`;
        return r2.has(c,) ||
          r2.set(c, t2(Object.assign({ from: s3, to: l4, velocity: p2, restSpeed: a2 ? 0.05 : 2, restDistance: a2 ? 0.01 : 0.5, }, n,),),),
          r2.get(c,);
      },
      i3 = (s3, l4,) => (e.has(s3,) || e.set(s3, j(s3, l4,),), e.get(s3,));
    return {
      createAnimation: (s3, l4 = true, p2, a2, c,) => {
        let d3, f3, O3, S4 = 0, m2 = u, g2 = s3.length;
        if (l4) {
          m2 = Q(s3, a2 ? T3.get(W(a2,),) : void 0,);
          let y = s3[g2 - 1];
          if (O3 = yt(y,), g2 > 1 && s3[0] !== null) {
            f3 = yt(s3[0],);
          } else {
            let b3 = c?.generator;
            if (b3) {
              let { animation: w3, generatorStartTime: E2, } = c,
                A2 = w3?.startTime || E2 || 0,
                x2 = w3?.currentTime || performance.now() - A2,
                h3 = b3(x2,).current;
              f3 = h3, S4 = T2((u2,) => b3(u2,).current, x2, h3,);
            } else {
              p2 && (f3 = yt(p2(),));
            }
          }
        }
        if (Gt(f3,) && Gt(O3,)) {
          let y = o(f3, O3, S4, a2?.includes('scale',),);
          d3 = Object.assign(Object.assign({}, i3(y, m2,),), { easing: 'linear', },),
            c && (c.generator = y, c.generatorStartTime = performance.now());
        }
        return d3 || (d3 = { easing: 'ease', duration: i3(o(0, 100,),).overshootDuration, }), d3;
      },
    };
  };
}
var hn = et(B,);
var yn = et(L,);
var wn = { any: 0, all: 1, };
function xt(t2, e, { root: n, margin: r2, amount: o = 'any', } = {},) {
  if (typeof IntersectionObserver > 'u') {
    return () => {
    };
  }
  let i3 = P(t2,),
    s3 = /* @__PURE__ */ new WeakMap(),
    l4 = (a2,) => {
      a2.forEach((c,) => {
        let d3 = s3.get(c.target,);
        if (c.isIntersecting !== !!d3) {
          if (c.isIntersecting) {
            let f3 = e(c,);
            I(f3,) ? s3.set(c.target, f3,) : p2.unobserve(c.target,);
          } else {
            d3 && (d3(c,), s3.delete(c.target,));
          }
        }
      },);
    },
    p2 = new IntersectionObserver(l4, { root: n, rootMargin: r2, threshold: typeof o == 'number' ? o : wn[o], },);
  return i3.forEach((a2,) => p2.observe(a2,)), () => p2.disconnect();
}
var nt = /* @__PURE__ */ new WeakMap();
var N2;
function En(t2, e,) {
  if (e) {
    let { inlineSize: n, blockSize: r2, } = e[0];
    return { width: n, height: r2, };
  } else {
    return t2 instanceof SVGElement && 'getBBox' in t2 ? t2.getBBox() : { width: t2.offsetWidth, height: t2.offsetHeight, };
  }
}
function Sn({ target: t2, contentRect: e, borderBoxSize: n, },) {
  var r2;
  (r2 = nt.get(t2,)) === null || r2 === void 0 || r2.forEach((o,) => {
    o({
      target: t2,
      contentSize: e,
      get size() {
        return En(t2, n,);
      },
    },);
  },);
}
function bn(t2,) {
  t2.forEach(Sn,);
}
function On() {
  typeof ResizeObserver > 'u' || (N2 = new ResizeObserver(bn,));
}
function Kt(t2, e,) {
  N2 || On();
  let n = P(t2,);
  return n.forEach((r2,) => {
    let o = nt.get(r2,);
    o || (o = /* @__PURE__ */ new Set(), nt.set(r2, o,)), o.add(e,), N2?.observe(r2,);
  },),
    () => {
      n.forEach((r2,) => {
        let o = nt.get(r2,);
        o?.delete(e,), o?.size || N2?.unobserve(r2,);
      },);
    };
}
var rt = /* @__PURE__ */ new Set();
var K;
function An() {
  K = () => {
    let t2 = { width: window.innerWidth, height: window.innerHeight, }, e = { target: window, size: t2, contentSize: t2, };
    rt.forEach((n,) => n(e,));
  }, window.addEventListener('resize', K,);
}
function qt(t2,) {
  return rt.add(t2,), K || An(), () => {
    rt.delete(t2,), !rt.size && K && (K = void 0);
  };
}
function wt(t2, e,) {
  return I(t2,) ? qt(t2,) : Kt(t2, e,);
}
function k(t2, e, n,) {
  t2.dispatchEvent(new CustomEvent(e, { detail: { originalEvent: n, }, },),);
}
function Tt(t2, e, n,) {
  t2.dispatchEvent(new CustomEvent(e, { detail: { originalEntry: n, }, },),);
}
var ce = {
  isActive: (t2,) => !!t2.inView,
  subscribe: (t2, { enable: e, disable: n, }, { inViewOptions: r2 = {}, },) => {
    let { once: o, } = r2, i3 = S3(r2, ['once',],);
    return xt(t2, (s3,) => {
      if (e(), Tt(t2, 'viewenter', s3,), !o) {
        return (l4,) => {
          n(), Tt(t2, 'viewleave', l4,);
        };
      }
    }, i3,);
  },
};
var fe = (t2, e, n,) => (r2,) => {
  r2.pointerType && r2.pointerType !== 'mouse' || (n(), k(t2, e, r2,));
};
var le = {
  isActive: (t2,) => !!t2.hover,
  subscribe: (t2, { enable: e, disable: n, },) => {
    let r2 = fe(t2, 'hoverstart', e,), o = fe(t2, 'hoverend', n,);
    return t2.addEventListener('pointerenter', r2,), t2.addEventListener('pointerleave', o,), () => {
      t2.removeEventListener('pointerenter', r2,), t2.removeEventListener('pointerleave', o,);
    };
  },
};
var me = {
  isActive: (t2,) => !!t2.press,
  subscribe: (t2, { enable: e, disable: n, },) => {
    let r2 = (i3,) => {
        n(), k(t2, 'pressend', i3,), window.removeEventListener('pointerup', r2,);
      },
      o = (i3,) => {
        e(), k(t2, 'pressstart', i3,), window.addEventListener('pointerup', r2,);
      };
    return t2.addEventListener('pointerdown', o,), () => {
      t2.removeEventListener('pointerdown', o,), window.removeEventListener('pointerup', r2,);
    };
  },
};
var st = { inView: ce, hover: le, press: me, };
var ue = ['initial', 'animate', ...Object.keys(st,), 'exit',];

// https:https://framerusercontent.com/modules/B2xAlJLcN0gOnt11mSPw/ddeyjQ2r9Xibg9wdL56v/Ticker.js
var directionTransformers = {
  left: (offset,) => `translateX(-${offset}px)`,
  right: (offset,) => `translateX(${offset}px)`,
  top: (offset,) => `translateY(-${offset}px)`,
  bottom: (offset,) => `translateY(${offset}px)`,
};
var supportsAcceleratedAnimations = typeof Animation !== 'undefined' && typeof Animation.prototype.updatePlaybackRate === 'function';
function Ticker(props,) {
  let {
    slots,
    gap,
    padding,
    paddingPerSide,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    speed,
    hoverFactor,
    direction,
    alignment,
    sizingOptions,
    fadeOptions,
    style,
  } = props;
  const { fadeContent, overflow, fadeWidth, fadeInset, fadeAlpha, } = fadeOptions;
  const { widthType, heightType, } = sizingOptions;
  const paddingValue = paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : `${padding}px`;
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const numChildren = Children.count(slots,);
  const hasChildren = numChildren > 0;
  if (direction === true) {
    direction = 'left';
  }
  const isHorizontal = direction === 'left' || direction === 'right';
  const offset = useMotionValue(0,);
  const transformer = directionTransformers[direction];
  const transform = useTransform(offset, transformer,);
  const parentRef = useRef(null,);
  const childrenRef = useMemo(() => {
    return [/* @__PURE__ */ createRef(), /* @__PURE__ */ createRef(),];
  }, [],);
  const [size, setSize,] = useState({ parent: null, children: null, },);
  let clonedChildren = [];
  let dupedChildren = [];
  let duplicateBy = 0;
  let opacity = 0;
  if (isCanvas) {
    duplicateBy = numChildren ? Math.floor(10 / numChildren,) : 0;
    opacity = 1;
  }
  if (!isCanvas && hasChildren && size.parent) {
    duplicateBy = Math.round(size.parent / size.children * 2,) + 1;
    opacity = 1;
  }
  const measure = useCallback(() => {
    if (hasChildren && parentRef.current) {
      const parentLength = isHorizontal ? parentRef.current.offsetWidth : parentRef.current.offsetHeight;
      const start = childrenRef[0].current ? isHorizontal ? childrenRef[0].current.offsetLeft : childrenRef[0].current.offsetTop : 0;
      const end = childrenRef[1].current
        ? isHorizontal
          ? childrenRef[1].current.offsetLeft + childrenRef[1].current.offsetWidth
          : childrenRef[1].current.offsetTop + childrenRef[1].current.offsetHeight
        : 0;
      const childrenLength = end - start + gap;
      setSize({ parent: parentLength, children: childrenLength, },);
    }
  }, [],);
  const childrenStyles = isCanvas ? { contentVisibility: 'auto', } : {};
  if (hasChildren) {
    if (!isCanvas) {
      let initialResize = useRef(true,);
      useEffect(() => {
        measure();
        return wt(parentRef.current, ({ contentSize, },) => {
          if (!initialResize.current && (contentSize.width || contentSize.height)) {
            measure();
          }
          initialResize.current = false;
        },);
      }, [],);
    }
    clonedChildren = Children.map(slots, (child, index,) => {
      var ref, ref1, ref2, ref3;
      let ref4;
      if (index === 0) {
        ref4 = childrenRef[0];
      }
      if (index === slots.length - 1) {
        ref4 = childrenRef[1];
      }
      const size2 = {
        width: widthType ? (ref = child.props) === null || ref === void 0 ? void 0 : ref.width : '100%',
        height: heightType ? (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.height : '100%',
      };
      return /* @__PURE__ */ _jsx(LayoutGroup, {
        inherit: 'id',
        children: /* @__PURE__ */ _jsx('li', {
          ref: ref4,
          style: size2,
          children: /* @__PURE__ */ cloneElement(child, {
            style: {
              ...(ref2 = child.props) === null || ref2 === void 0 ? void 0 : ref2.style,
              ...size2,
              flexShrink: 0,
              ...childrenStyles,
            },
            layoutId: void 0,
          }, (ref3 = child.props) === null || ref3 === void 0 ? void 0 : ref3.children,),
        },),
      },);
    },);
  }
  if (!isCanvas) {
    for (let i3 = 0; i3 < duplicateBy; i3++) {
      dupedChildren = [
        ...dupedChildren,
        ...Children.map(slots, (child, childIndex,) => {
          var ref, ref1, ref2, ref3;
          return /* @__PURE__ */ _jsx(LayoutGroup, {
            inherit: 'id',
            children: /* @__PURE__ */ _jsx('li', {
              style: { display: 'contents', },
              'aria-hidden': true,
              children: /* @__PURE__ */ cloneElement(child, {
                key: i3 + ' ' + childIndex,
                style: {
                  ...(ref = child.props) === null || ref === void 0 ? void 0 : ref.style,
                  width: widthType ? (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.width : '100%',
                  height: heightType ? (ref2 = child.props) === null || ref2 === void 0 ? void 0 : ref2.height : '100%',
                  flexShrink: 0,
                  ...childrenStyles,
                },
                layoutId: void 0,
              }, (ref3 = child.props) === null || ref3 === void 0 ? void 0 : ref3.children,),
            }, i3 + 'li' + childIndex,),
          }, i3 + 'lg' + childIndex,);
        },),
      ];
    }
  }
  const animateToValue = size.children + size.children * Math.round(size.parent / size.children,);
  const initialTime = useRef(null,);
  const prevTime = useRef(null,);
  const xOrY = useRef(0,);
  const isHover = useRef(false,);
  const isInView = useInView(parentRef,);
  const isReducedMotion = useReducedMotion();
  const listRef = useRef(null,);
  const animationRef = useRef(null,);
  if (!isCanvas) {
    if (supportsAcceleratedAnimations) {
      useEffect(() => {
        if (isReducedMotion || !animateToValue || !speed) {
          return;
        }
        animationRef.current = listRef.current.animate({ transform: [transformer(0,), transformer(animateToValue,),], }, {
          duration: Math.abs(animateToValue,) / speed * 1e3,
          iterations: Infinity,
          easing: 'linear',
        },);
        return () => animationRef.current.cancel();
      }, [hoverFactor, animateToValue, speed,],);
    } else {
      useAnimationFrame((t2,) => {
        if (!animateToValue || isReducedMotion || supportsAcceleratedAnimations) {
          return;
        }
        if (initialTime.current === null) {
          initialTime.current = t2;
        }
        t2 = t2 - initialTime.current;
        const timeSince = prevTime.current === null ? 0 : t2 - prevTime.current;
        let delta = timeSince * (speed / 1e3);
        if (isHover.current) {
          delta *= hoverFactor;
        }
        xOrY.current += delta;
        xOrY.current = wrap(0, animateToValue, xOrY.current,);
        prevTime.current = t2;
        if (!isInView) {
          return;
        }
        offset.set(xOrY.current,);
      },);
    }
  }
  const fadeDirection = isHorizontal ? 'to right' : 'to bottom';
  const fadeWidthStart = fadeWidth / 2;
  const fadeWidthEnd = 100 - fadeWidth / 2;
  const fadeInsetStart = clamp(fadeInset, 0, fadeWidthStart,);
  const fadeInsetEnd = 100 - fadeInset;
  const fadeMask =
    `linear-gradient(${fadeDirection}, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetStart}%, rgba(0, 0, 0, 1) ${fadeWidthStart}%, rgba(0, 0, 0, 1) ${fadeWidthEnd}%, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetEnd}%)`;
  if (!hasChildren) {
    return /* @__PURE__ */ _jsxs('section', {
      style: placeholderStyles,
      children: [
        /* @__PURE__ */ _jsx('div', { style: emojiStyles, children: '\u2728', },),
        /* @__PURE__ */ _jsx('p', { style: titleStyles, children: 'Connect to Content', },),
        /* @__PURE__ */ _jsx('p', { style: subtitleStyles, children: 'Add layers or components to infinitely loop on your page.', },),
      ],
    },);
  }
  return /* @__PURE__ */ _jsx('section', {
    style: {
      ...containerStyle,
      opacity,
      WebkitMaskImage: fadeContent ? fadeMask : void 0,
      MozMaskImage: fadeContent ? fadeMask : void 0,
      maskImage: fadeContent ? fadeMask : void 0,
      overflow: overflow ? 'visible' : 'hidden',
      padding: paddingValue,
    },
    ref: parentRef,
    children: /* @__PURE__ */ _jsxs(motion.ul, {
      ref: listRef,
      style: {
        ...containerStyle,
        gap,
        top: direction === 'bottom' && isValidNumber(animateToValue,) ? -animateToValue : void 0,
        left: direction === 'right' && isValidNumber(animateToValue,) ? -animateToValue : void 0,
        placeItems: alignment,
        position: 'relative',
        flexDirection: isHorizontal ? 'row' : 'column',
        ...style,
        transform: supportsAcceleratedAnimations ? void 0 : transform,
        willChange: 'transform',
      },
      onMouseEnter: () => {
        isHover.current = true;
        if (animationRef.current) {
          animationRef.current.updatePlaybackRate(hoverFactor,);
        }
      },
      onMouseLeave: () => {
        isHover.current = false;
        if (animationRef.current) {
          animationRef.current.updatePlaybackRate(1,);
        }
      },
      children: [clonedChildren, dupedChildren,],
    },),
  },);
}
Ticker.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: true, heightType: true, },
  fadeOptions: { fadeContent: true, overflow: false, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0, },
  direction: true,
};
addPropertyControls(Ticker, {
  slots: { type: ControlType.Array, title: 'Children', control: { type: ControlType.ComponentInstance, }, },
  speed: { type: ControlType.Number, title: 'Speed', min: 0, max: 1e3, defaultValue: 100, unit: '%', displayStepper: true, step: 5, },
  direction: {
    type: ControlType.Enum,
    title: 'Direction',
    options: ['left', 'right', 'top', 'bottom',],
    optionIcons: ['direction-left', 'direction-right', 'direction-up', 'direction-down',],
    optionTitles: ['Left', 'Right', 'Top', 'Bottom',],
    defaultValue: 'left',
    displaySegmentedControl: true,
  },
  alignment: {
    type: ControlType.Enum,
    title: 'Align',
    options: ['flex-start', 'center', 'flex-end',],
    optionIcons: {
      direction: {
        right: ['align-top', 'align-middle', 'align-bottom',],
        left: ['align-top', 'align-middle', 'align-bottom',],
        top: ['align-left', 'align-center', 'align-right',],
        bottom: ['align-left', 'align-center', 'align-right',],
      },
    },
    defaultValue: 'center',
    displaySegmentedControl: true,
  },
  gap: { type: ControlType.Number, title: 'Gap', },
  padding: {
    title: 'Padding',
    type: ControlType.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: ['Padding', 'Padding per side',],
    valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',],
    valueLabels: ['T', 'R', 'B', 'L',],
    min: 0,
  },
  sizingOptions: {
    type: ControlType.Object,
    title: 'Sizing',
    controls: {
      widthType: { type: ControlType.Boolean, title: 'Width', enabledTitle: 'Auto', disabledTitle: 'Stretch', defaultValue: true, },
      heightType: { type: ControlType.Boolean, title: 'Height', enabledTitle: 'Auto', disabledTitle: 'Stretch', defaultValue: true, },
    },
  },
  fadeOptions: {
    type: ControlType.Object,
    title: 'Clipping',
    controls: {
      fadeContent: { type: ControlType.Boolean, title: 'Fade', defaultValue: true, },
      overflow: {
        type: ControlType.Boolean,
        title: 'Overflow',
        enabledTitle: 'Show',
        disabledTitle: 'Hide',
        defaultValue: false,
        hidden(props,) {
          return props.fadeContent === true;
        },
      },
      fadeWidth: {
        type: ControlType.Number,
        title: 'Width',
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: '%',
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
      fadeInset: {
        type: ControlType.Number,
        title: 'Inset',
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: '%',
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
      fadeAlpha: {
        type: ControlType.Number,
        title: 'Opacity',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
    },
  },
  hoverFactor: {
    type: ControlType.Number,
    title: 'Hover',
    min: 0,
    max: 1,
    unit: 'x',
    defaultValue: 1,
    step: 0.1,
    displayStepper: true,
    description: 'Slows down the speed while you are hovering.',
  },
},);
var containerStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  placeItems: 'center',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  textIndent: 'none',
};
var placeholderStyles = {
  display: 'flex',
  width: '100%',
  height: '100%',
  placeContent: 'center',
  placeItems: 'center',
  flexDirection: 'column',
  color: '#96F',
  background: 'rgba(136, 85, 255, 0.1)',
  fontSize: 11,
  overflow: 'hidden',
  padding: '20px 20px 30px 20px',
};
var emojiStyles = { fontSize: 32, marginBottom: 10, };
var titleStyles = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: 'center', };
var subtitleStyles = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: 'center', };
var clamp = (num, min, max,) => Math.min(Math.max(num, min,), max,);
var isValidNumber = (value,) => typeof value === 'number' && !isNaN(value,);

// https:https://framer.com/m/Logo-Ticker-1CEq.js@YtVlixDzOkypVBs3Dpav
var TickerFonts = getFonts(Ticker,);
var cycleOrder = ['GSFRnChFA', 'l9f6iav4R',];
var variantClassNames = { GSFRnChFA: 'framer-v-uvc2d5', l9f6iav4R: 'framer-v-1w9d22v', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var humanReadableVariantMap = { 'Logo Ticker - M': 'l9f6iav4R', 'Logo Ticker': 'GSFRnChFA', };
var transitions = {
  default: { damping: 60, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], mass: 1, stiffness: 500, type: 'spring', },
};
var transformTemplate = (_2, t2,) => `translate(-50%, -50%) ${t2}`;
var Component = /* @__PURE__ */ React.forwardRef(
  function ({ id, style, className, width, height, layoutId, variant: outerVariant = 'GSFRnChFA', ...restProps }, ref,) {
    const outerVariantId = humanReadableVariantMap[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
      cycleOrder,
      defaultVariant: 'GSFRnChFA',
      transitions,
      variant,
      variantClassNames,
    },);
    const layoutDependency = variants.join('-',) + restProps.layoutDependency;
    const defaultLayoutId = React.useId();
    return /* @__PURE__ */ _jsx2(LayoutGroup2, {
      id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
      children: /* @__PURE__ */ _jsx2(motion2.div, {
        initial: variant,
        animate: variants,
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        onTap: () => setGestureState({ isPressed: false, },),
        onTapCancel: () => setGestureState({ isPressed: false, },),
        className: cx('framer-d7otB', classNames,),
        style: { display: 'contents', },
        children: /* @__PURE__ */ _jsxs2(motion2.div, {
          ...restProps,
          className: cx('framer-uvc2d5', className,),
          'data-framer-name': 'Logo Ticker',
          layoutDependency,
          layoutId: 'GSFRnChFA',
          ref,
          style: { opacity: 0.6, ...style, },
          transition,
          ...addPropertyOverrides({ l9f6iav4R: { 'data-framer-name': 'Logo Ticker - M', }, }, baseVariant, gestureVariant,),
          children: [
            /* @__PURE__ */ _jsx2(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx2(React.Fragment, {
                children: /* @__PURE__ */ _jsx2(motion2.p, {
                  style: {
                    '--font-selector': 'SW50ZXItQm9sZA==',
                    '--framer-font-family': '"Inter-Bold", "Inter", "Inter Placeholder", sans-serif',
                    '--framer-font-weight': '700',
                    '--framer-letter-spacing': '-0.2px',
                    '--framer-text-color': 'var(--extracted-r6o4lv)',
                  },
                  children: /* @__PURE__ */ _jsx2(motion2.span, {
                    'data-text-fill': 'true',
                    style: { backgroundImage: 'linear-gradient(90deg, rgb(21, 132, 235) 0%, rgb(36, 214, 217) 100%)', },
                    children: 'Featured by',
                  },),
                },),
              },),
              className: 'framer-kqr5os',
              fonts: ['Inter-Bold',],
              layoutDependency,
              layoutId: 'XfndhbYr8',
              style: {
                '--extracted-r6o4lv': 'var(--token-15fc6ab8-c2ea-472c-853a-fd5eab1ecf4a, rgba(10, 10, 13, 0.6))',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
                '--framer-paragraph-spacing': '0px',
                opacity: 0,
              },
              transformTemplate,
              transition,
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx2(motion2.div, {
              className: 'framer-33yjyg',
              'data-framer-name': 'Ticker Container',
              layoutDependency,
              layoutId: 'DIozXdNnd',
              transition,
              children: /* @__PURE__ */ _jsx2(motion2.div, {
                className: 'framer-aj5tiq-container',
                layoutDependency,
                layoutId: 'LY9zg3llC-container',
                transition,
                children: /* @__PURE__ */ _jsx2(Ticker, {
                  alignment: 'center',
                  direction: 'left',
                  fadeOptions: { fadeAlpha: 0, fadeContent: true, fadeInset: 0, fadeWidth: 25, overflow: false, },
                  gap: 48,
                  height: '100%',
                  hoverFactor: 0.5,
                  id: 'LY9zg3llC',
                  layoutId: 'LY9zg3llC',
                  padding: 10,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  paddingPerSide: false,
                  paddingRight: 10,
                  paddingTop: 10,
                  sizingOptions: { heightType: true, widthType: true, },
                  slots: [
                    /* @__PURE__ */ _jsx2(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 56,
                        intrinsicWidth: 214,
                        pixelHeight: 56,
                        pixelWidth: 214,
                        src:
                          new URL(
                            'assets/2MRVAPOv5JgK3XywRONSUaIKqk.png',
                            'https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/YtVlixDzOkypVBs3Dpav/F1yUSD211.js',
                          ).href,
                      },
                      className: 'framer-ho7oum',
                      'data-framer-name': 'ticker6',
                      layoutDependency,
                      layoutId: 'wIBpL1t1o',
                      transition,
                    },),
                    /* @__PURE__ */ _jsx2(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 56,
                        intrinsicWidth: 266,
                        pixelHeight: 56,
                        pixelWidth: 266,
                        src:
                          new URL(
                            'assets/AWy6GJFmKZrXWU757K5RoZkK3g.png',
                            'https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/YtVlixDzOkypVBs3Dpav/F1yUSD211.js',
                          ).href,
                      },
                      className: 'framer-m43icu',
                      'data-framer-name': 'ticker5',
                      layoutDependency,
                      layoutId: 'DiDAbjJRO',
                      transition,
                    },),
                    /* @__PURE__ */ _jsx2(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 56,
                        intrinsicWidth: 175,
                        pixelHeight: 56,
                        pixelWidth: 175,
                        src:
                          new URL(
                            'assets/rZQaW9lAvPXMyLnVeXIW6OB7mA.png',
                            'https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/YtVlixDzOkypVBs3Dpav/F1yUSD211.js',
                          ).href,
                      },
                      className: 'framer-1lkiw69',
                      'data-framer-name': 'ticker4',
                      layoutDependency,
                      layoutId: 'H2SK1ImTm',
                      transition,
                    },),
                    /* @__PURE__ */ _jsx2(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 56,
                        intrinsicWidth: 241,
                        pixelHeight: 56,
                        pixelWidth: 241,
                        src:
                          new URL(
                            'assets/Q10yYhvk0MrTo7QY1DcHQgJMo.png',
                            'https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/YtVlixDzOkypVBs3Dpav/F1yUSD211.js',
                          ).href,
                      },
                      className: 'framer-1pkn5xg',
                      'data-framer-name': 'ticker3',
                      layoutDependency,
                      layoutId: 'ccoKfMTwo',
                      transition,
                    },),
                    /* @__PURE__ */ _jsx2(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 56,
                        intrinsicWidth: 202,
                        pixelHeight: 56,
                        pixelWidth: 202,
                        src:
                          new URL(
                            'assets/ppxS5gb3Cz9F0carwvkiKmJGAU.png',
                            'https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/YtVlixDzOkypVBs3Dpav/F1yUSD211.js',
                          ).href,
                      },
                      className: 'framer-1r2h739',
                      'data-framer-name': 'ticker2',
                      layoutDependency,
                      layoutId: 'JoXhu8PjD',
                      transition,
                    },),
                    /* @__PURE__ */ _jsx2(Image, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 56,
                        intrinsicWidth: 218,
                        pixelHeight: 56,
                        pixelWidth: 218,
                        src:
                          new URL(
                            'assets/UDE4FbyVmBdXLpobJWNt4qebTHA.png',
                            'https://framerusercontent.com/modules/r0GBH7SiUQiS6ZBqAeSA/YtVlixDzOkypVBs3Dpav/F1yUSD211.js',
                          ).href,
                      },
                      className: 'framer-1zxwag',
                      'data-framer-name': 'ticker1',
                      layoutDependency,
                      layoutId: 'D0cqPvsIH',
                      transition,
                    },),
                  ],
                  speed: 75,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
          ],
        },),
      },),
    },);
  },
);
var css = [
  '.framer-d7otB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-d7otB .framer-154d70i { display: block; }',
  '.framer-d7otB .framer-uvc2d5 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; overflow: hidden; padding: 32px 16px 32px 16px; position: relative; width: 708px; }',
  '.framer-d7otB .framer-kqr5os { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; z-index: 1; }',
  '.framer-d7otB .framer-33yjyg { flex: none; height: 200px; overflow: visible; position: relative; width: 676px; }',
  '.framer-d7otB .framer-aj5tiq-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-d7otB .framer-ho7oum { aspect-ratio: 3.8214285714285716 / 1; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 92px; }',
  '.framer-d7otB .framer-m43icu { aspect-ratio: 4.75 / 1; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 114px; }',
  '.framer-d7otB .framer-1lkiw69 { aspect-ratio: 3.125 / 1; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 75px; }',
  '.framer-d7otB .framer-1pkn5xg { aspect-ratio: 4.303571428571429 / 1; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 103px; }',
  '.framer-d7otB .framer-1r2h739 { aspect-ratio: 3.607142857142857 / 1; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 87px; }',
  '.framer-d7otB .framer-1zxwag { aspect-ratio: 3.892857142857143 / 1; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 93px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-d7otB .framer-uvc2d5 { gap: 0px; } .framer-d7otB .framer-uvc2d5 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-d7otB .framer-uvc2d5 > :first-child { margin-top: 0px; } .framer-d7otB .framer-uvc2d5 > :last-child { margin-bottom: 0px; } }',
  '.framer-d7otB.framer-v-1w9d22v .framer-uvc2d5 { gap: 0px; height: 96px; padding: 32px 0px 32px 0px; width: 359px; }',
  '.framer-d7otB.framer-v-1w9d22v .framer-33yjyg { width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-d7otB.framer-v-1w9d22v .framer-uvc2d5 { gap: 0px; } .framer-d7otB.framer-v-1w9d22v .framer-uvc2d5 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-d7otB.framer-v-1w9d22v .framer-uvc2d5 > :first-child { margin-top: 0px; } .framer-d7otB.framer-v-1w9d22v .framer-uvc2d5 > :last-child { margin-bottom: 0px; } }',
];
var FramerF1yUSD211 = withCSS(Component, css, 'framer-d7otB',);
var stdin_default = FramerF1yUSD211;
FramerF1yUSD211.displayName = 'Logo Ticker';
FramerF1yUSD211.defaultProps = { height: 64, width: 708, };
addPropertyControls2(FramerF1yUSD211, {
  variant: {
    options: ['GSFRnChFA', 'l9f6iav4R',],
    optionTitles: ['Logo Ticker', 'Logo Ticker - M',],
    title: 'Variant',
    type: ControlType2.Enum,
  },
},);
addFonts(FramerF1yUSD211, [...TickerFonts,],);
var __FramerMetadata__ = {
  'exports': {
    'default': {
      'type': 'reactComponent',
      'name': 'FramerF1yUSD211',
      'slots': [],
      'annotations': {
        'framerIntrinsicHeight': '64',
        'framerContractVersion': '1',
        'framerCanvasComponentVariantDetails':
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"l9f6iav4R":{"layout":["fixed","fixed"]}}}',
        'framerIntrinsicWidth': '708',
      },
    },
    'Props': { 'type': 'tsType', 'annotations': { 'framerContractVersion': '1', }, },
    '__FramerMetadata__': { 'type': 'variable', },
  },
};
export { __FramerMetadata__, stdin_default as default, };
