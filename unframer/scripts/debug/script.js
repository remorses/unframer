'use strict'
var animator = (() => {
    var I = Object.defineProperty
    var pe = Object.getOwnPropertyDescriptor
    var me = Object.getOwnPropertyNames
    var fe = Object.prototype.hasOwnProperty
    var ce = (e, t) => {
            for (var o in t) I(e, o, { get: t[o], enumerable: !0 })
        },
        ue = (e, t, o, r) => {
            if ((t && typeof t == 'object') || typeof t == 'function')
                for (let s of me(t))
                    !fe.call(e, s) &&
                        s !== o &&
                        I(e, s, {
                            get: () => t[s],
                            enumerable: !(r = pe(t, s)) || r.enumerable,
                        })
            return e
        }
    var le = (e) => ue(I({}, '__esModule', { value: !0 }), e)
    var ze = {}
    ce(ze, {
        animateAppearEffects: () => ie,
        getActiveVariantHash: () => ae,
        spring: () => w,
        startOptimizedAppearAnimation: () => $,
    })
    var de = [
            'transformPerspective',
            'x',
            'y',
            'z',
            'translateX',
            'translateY',
            'translateZ',
            'scale',
            'scaleX',
            'scaleY',
            'rotate',
            'rotateX',
            'rotateY',
            'rotateZ',
            'skew',
            'skewX',
            'skewY',
        ],
        j = new Set(de)
    var K = (e, t, o) => Math.min(Math.max(o, e), t)
    var F = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    var k = (e) => e
    var E = 'framerAppearId',
        Ye = 'data-' + F(E)
    var Z = k
    var z = (e) => e * 1e3,
        v = (e) => e / 1e3
    var G = (e) => Array.isArray(e) && typeof e[0] == 'number'
    var M = ([e, t, o, r]) => `cubic-bezier(${e}, ${t}, ${o}, ${r})`,
        xe = {
            linear: 'linear',
            ease: 'ease',
            easeIn: 'ease-in',
            easeOut: 'ease-out',
            easeInOut: 'ease-in-out',
            circIn: M([0, 0.65, 0.55, 1]),
            circOut: M([0.55, 0, 1, 0.45]),
            backIn: M([0.31, 0.01, 0.66, -0.59]),
            backOut: M([0.33, 1.53, 0.69, 0.99]),
        }
    function C(e) {
        if (e) return G(e) ? M(e) : Array.isArray(e) ? e.map(C) : xe[e]
    }
    function B(
        e,
        t,
        o,
        {
            delay: r = 0,
            duration: s,
            repeat: i = 0,
            repeatType: n = 'loop',
            ease: p,
            times: f,
        } = {},
    ) {
        let a = { [t]: o }
        f && (a.offset = f)
        let m = C(p)
        return (
            Array.isArray(m) && (a.easing = m),
            e.animate(a, {
                delay: r,
                duration: s,
                easing: Array.isArray(m) ? 'linear' : m,
                fill: 'both',
                iterations: i + 1,
                direction: n === 'reverse' ? 'alternate' : 'normal',
            })
        )
    }
    function q(e, t) {
        return t ? e * (1e3 / t) : 0
    }
    var ye = 5
    function U(e, t, o) {
        let r = Math.max(t - ye, 0)
        return q(o - e(r), t - r)
    }
    var N = 0.001,
        ge = 0.01,
        H = 10,
        Ae = 0.05,
        he = 1
    function W({
        duration: e = 800,
        bounce: t = 0.25,
        velocity: o = 0,
        mass: r = 1,
    }) {
        let s, i
        Z(e <= z(H), 'Spring duration must be 10 seconds or less')
        let n = 1 - t
        ;(n = K(Ae, he, n)),
            (e = K(ge, H, v(e))),
            n < 1
                ? ((s = (a) => {
                      let m = a * n,
                          c = m * e,
                          l = m - o,
                          d = V(a, n),
                          u = Math.exp(-c)
                      return N - (l / d) * u
                  }),
                  (i = (a) => {
                      let c = a * n * e,
                          l = c * o + o,
                          d = Math.pow(n, 2) * Math.pow(a, 2) * e,
                          u = Math.exp(-c),
                          y = V(Math.pow(a, 2), n)
                      return ((-s(a) + N > 0 ? -1 : 1) * ((l - d) * u)) / y
                  }))
                : ((s = (a) => {
                      let m = Math.exp(-a * e),
                          c = (a - o) * e + 1
                      return -N + m * c
                  }),
                  (i = (a) => {
                      let m = Math.exp(-a * e),
                          c = (o - a) * (e * e)
                      return m * c
                  }))
        let p = 5 / e,
            f = be(s, i, p)
        if (((e = z(e)), isNaN(f)))
            return { stiffness: 100, damping: 10, duration: e }
        {
            let a = Math.pow(f, 2) * r
            return {
                stiffness: a,
                damping: n * 2 * Math.sqrt(r * a),
                duration: e,
            }
        }
    }
    var Te = 12
    function be(e, t, o) {
        let r = o
        for (let s = 1; s < Te; s++) r = r - e(r) / t(r)
        return r
    }
    function V(e, t) {
        return e * Math.sqrt(1 - t * t)
    }
    var Oe = ['duration', 'bounce'],
        ve = ['stiffness', 'damping', 'mass']
    function _(e, t) {
        return t.some((o) => e[o] !== void 0)
    }
    function Me(e) {
        let t = {
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1,
            ...e,
        }
        if (!_(e, ve) && _(e, Oe)) {
            let o = W(e)
            ;(t = { ...t, ...o, velocity: 0, mass: 1 }),
                (t.isResolvedFromDuration = !0)
        }
        return t
    }
    function w({ keyframes: e, restDelta: t, restSpeed: o, ...r }) {
        let s = e[0],
            i = e[e.length - 1],
            n = { done: !1, value: s },
            {
                stiffness: p,
                damping: f,
                mass: a,
                velocity: m,
                duration: c,
                isResolvedFromDuration: l,
            } = Me(r),
            d = m ? -v(m) : 0,
            u = f / (2 * Math.sqrt(p * a)),
            y = i - s,
            g = v(Math.sqrt(p / a)),
            O = Math.abs(y) < 5
        o || (o = O ? 0.01 : 2), t || (t = O ? 0.005 : 0.5)
        let h
        if (u < 1) {
            let x = V(g, u)
            h = (A) => {
                let T = Math.exp(-u * g * A)
                return (
                    i -
                    T *
                        (((d + u * g * y) / x) * Math.sin(x * A) +
                            y * Math.cos(x * A))
                )
            }
        } else if (u === 1)
            h = (x) => i - Math.exp(-g * x) * (y + (d + g * y) * x)
        else {
            let x = g * Math.sqrt(u * u - 1)
            h = (A) => {
                let T = Math.exp(-u * g * A),
                    P = Math.min(x * A, 300)
                return (
                    i -
                    (T *
                        ((d + u * g * y) * Math.sinh(P) +
                            x * y * Math.cosh(P))) /
                        x
                )
            }
        }
        return {
            calculatedDuration: (l && c) || null,
            next: (x) => {
                let A = h(x)
                if (l) n.done = x >= c
                else {
                    let T = d
                    x !== 0 && (u < 1 ? (T = U(h, x, A)) : (T = 0))
                    let P = Math.abs(T) <= o,
                        se = Math.abs(i - A) <= t
                    n.done = P && se
                }
                return (n.value = n.done ? i : A), n
            },
        }
    }
    var D = (e, t) => `${e}: ${t}`
    var b = new Map()
    function Q(e, t, o, r) {
        let s = D(e, j.has(t) ? 'transform' : t),
            i = b.get(s)
        if (!i) return 0
        let { animation: n, startTime: p } = i,
            f = () => {
                b.delete(s)
                try {
                    n.cancel()
                } catch {}
            }
        return p !== null ? (r.render(f), performance.now() - p || 0) : (f(), 0)
    }
    function $(e, t, o, r, s) {
        let i = e.dataset[E]
        if (!i) return
        window.HandoffAppearAnimations = Q
        let n = D(i, t),
            p = B(e, t, [o[0], o[0]], { duration: 1e4, ease: 'linear' })
        b.set(n, { animation: p, startTime: null })
        let f = () => {
            p.cancel()
            let a = B(e, t, o, r)
            document.timeline && (a.startTime = document.timeline.currentTime),
                b.set(n, { animation: a, startTime: performance.now() }),
                s && s(a)
        }
        p.ready ? p.ready.then(f).catch(k) : f()
    }
    var L = [
            'transformPerspective',
            'x',
            'y',
            'z',
            'translateX',
            'translateY',
            'translateZ',
            'scale',
            'scaleX',
            'scaleY',
            'rotate',
            'rotateX',
            'rotateY',
            'rotateZ',
            'skew',
            'skewX',
            'skewY',
        ],
        we = {
            x: 'translateX',
            y: 'translateY',
            z: 'translateZ',
            transformPerspective: 'perspective',
        },
        Se = {
            translateX: 'px',
            translateY: 'px',
            translateZ: 'px',
            x: 'px',
            y: 'px',
            z: 'px',
            perspective: 'px',
            transformPerspective: 'px',
            rotate: 'deg',
            rotateX: 'deg',
            rotateY: 'deg',
        }
    function J(e, t) {
        let o = Se[e]
        return !o || (typeof t == 'string' && t.endsWith(o)) ? t : `${t}${o}`
    }
    function X(e) {
        return L.includes(e)
    }
    var Pe = (e, t) => L.indexOf(e) - L.indexOf(t)
    function ee(
        { transform: e, transformKeys: t },
        { enableHardwareAcceleration: o = !0, allowTransformNone: r = !0 },
        s,
        i,
    ) {
        let n = ''
        t.sort(Pe)
        for (let p of t) n += `${we[p] || p}(${e[p]}) `
        return (
            o && !e.z && (n += 'translateZ(0)'),
            (n = n.trim()),
            i ? (n = i(e, n)) : r && s && (n = 'none'),
            n
        )
    }
    function Y(e, t) {
        let o = new Set(Object.keys(e))
        for (let r in t) o.add(r)
        return Array.from(o)
    }
    function R(e, t) {
        let o = t - e.length
        if (o <= 0) return e
        let r = new Array(o).fill(e[e.length - 1])
        return e.concat(r)
    }
    var oe = { duration: 0.001 },
        S = {
            opacity: 1,
            scale: 1,
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            x: 0,
            y: 0,
            z: 0,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
        }
    function re(e, t, o, r, s) {
        return (
            o.delay && (o.delay *= 1e3),
            o.type === 'spring' ? Ve(e, t, o, r, s) : Ie(e, t, o, r, s)
        )
    }
    function ke(e, t, o) {
        let r = {},
            s = 0,
            i = 0
        for (let n of Y(e, t)) {
            let p = e[n] ?? S[n],
                f = t[n] ?? S[n]
            if (p === void 0 || f === void 0) continue
            let a = Ke(p, f, o),
                { duration: m, keyframes: c } = a
            m === void 0 ||
                c === void 0 ||
                (m > s && ((s = m), (i = c.length)), (r[n] = c))
        }
        return {
            keyframeValuesByProps: r,
            longestDuration: s,
            longestLength: i,
        }
    }
    function Ve(e, t, o, r, s) {
        let i = {},
            {
                keyframeValuesByProps: n,
                longestDuration: p,
                longestLength: f,
            } = ke(e, t, o)
        if (!f) return i
        let a = { ease: 'linear', duration: p, delay: o.delay },
            m = s ? oe : a,
            c = {}
        for (let [d, u] of Object.entries(n))
            X(d)
                ? (c[d] = R(u, f))
                : (i[d] = {
                      keyframes: R(u, f),
                      options: d === 'opacity' ? a : m,
                  })
        let l = ne(c, r)
        return l && (i.transform = { keyframes: l, options: m }), i
    }
    function De(e) {
        let { type: t, duration: o, ...r } = e
        return { duration: o * 1e3, ...r }
    }
    function Ie(e, t, o, r, s) {
        let i = De(o)
        if (!i) return
        let n = {},
            p = s ? oe : i,
            f = {}
        for (let m of Y(e, t)) {
            let c = e[m] ?? S[m],
                l = t[m] ?? S[m]
            c === void 0 ||
                l === void 0 ||
                (X(m)
                    ? (f[m] = [c, l])
                    : (n[m] = {
                          keyframes: [c, l],
                          options: m === 'opacity' ? i : p,
                      }))
        }
        let a = ne(f, r)
        return a && (n.transform = { keyframes: a, options: p }), n
    }
    var te = 10
    function Ke(e, t, o) {
        let r = [e, t],
            s = w({ ...o, keyframes: r }),
            i = { done: !1, value: r[0] },
            n = [],
            p = 0
        for (; !i.done && p < 1e4; ) (i = s.next(p)), n.push(i.value), (p += te)
        r = n
        let f = p - te
        return { keyframes: r, duration: f, ease: 'linear' }
    }
    function ne(e, t) {
        let o = [],
            r = Object.values(e)[0]?.length
        if (!r) return
        let s = Object.keys(e)
        for (let i = 0; i < r; i++) {
            let n = {},
                p = !0
            for (let [a, m] of Object.entries(e)) {
                let c = m[i]
                p && (p = c === void 0 || c === S[a]),
                    c !== void 0 && (n[a] = J(a, c))
            }
            let f = ee({ transform: n, transformKeys: s }, {}, p, t)
            o.push(f)
        }
        return o
    }
    function ie(e, t, o, r, s, i) {
        for (let [n, p] of Object.entries(e)) {
            let {
                initial: f,
                animate: a,
                transformTemplate: m,
                variantHash: c,
            } = p
            if (!f || !a || (c && i && c !== i)) continue
            let { transition: l, ...d } = a,
                u = re(f, d, l, Ee(m, r), s)
            if (!u) continue
            let y = {},
                g = {}
            for (let [O, h] of Object.entries(u))
                (y[O] = h.keyframes), (g[O] = h.options)
            t(`[${o}="${n}"]`, y, g)
        }
    }
    function Ee(e, t) {
        if (!(!e || !t)) return (o, r) => e.replace(t, r)
    }
    function ae(e) {
        return e
            ? e.find((o) =>
                  o.mediaQuery
                      ? window.matchMedia(o.mediaQuery).matches === !0
                      : !1,
              )?.hash
            : void 0
    }
    return le(ze)
})()
