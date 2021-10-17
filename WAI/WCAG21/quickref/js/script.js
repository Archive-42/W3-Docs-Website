/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (
  (!(function (t, e) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t.document
          ? e(t, !0)
          : function (t) {
              if (!t.document)
                throw new Error("jQuery requires a window with a document");
              return e(t);
            })
      : e(t);
  })("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
      var e = t.length,
        n = K.type(t);
      return (
        "function" !== n &&
        !K.isWindow(t) &&
        (!(1 !== t.nodeType || !e) ||
          "array" === n ||
          0 === e ||
          ("number" == typeof e && e > 0 && e - 1 in t))
      );
    }
    function r(t, e, n) {
      if (K.isFunction(e))
        return K.grep(t, function (t, r) {
          return !!e.call(t, r, t) !== n;
        });
      if (e.nodeType)
        return K.grep(t, function (t) {
          return (t === e) !== n;
        });
      if ("string" == typeof e) {
        if (at.test(e)) return K.filter(e, t, n);
        e = K.filter(e, t);
      }
      return K.grep(t, function (t) {
        return z.call(e, t) >= 0 !== n;
      });
    }
    function i(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType; );
      return t;
    }
    function o(t) {
      var e = (ft[t] = {});
      return (
        K.each(t.match(dt) || [], function (t, n) {
          e[n] = !0;
        }),
        e
      );
    }
    function s() {
      J.removeEventListener("DOMContentLoaded", s, !1),
        t.removeEventListener("load", s, !1),
        K.ready();
    }
    function a() {
      Object.defineProperty((this.cache = {}), 0, {
        get: function () {
          return {};
        },
      }),
        (this.expando = K.expando + a.uid++);
    }
    function l(t, e, n) {
      var r;
      if (void 0 === n && 1 === t.nodeType)
        if (
          ((r = "data-" + e.replace(wt, "-$1").toLowerCase()),
          (n = t.getAttribute(r)),
          "string" == typeof n)
        ) {
          try {
            n =
              "true" === n ||
              ("false" !== n &&
                ("null" === n
                  ? null
                  : +n + "" === n
                  ? +n
                  : bt.test(n)
                  ? K.parseJSON(n)
                  : n));
          } catch (i) {}
          yt.set(t, e, n);
        } else n = void 0;
      return n;
    }
    function c() {
      return !0;
    }
    function u() {
      return !1;
    }
    function p() {
      try {
        return J.activeElement;
      } catch (t) {}
    }
    function h(t, e) {
      return K.nodeName(t, "table") &&
        K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
        ? t.getElementsByTagName("tbody")[0] ||
            t.appendChild(t.ownerDocument.createElement("tbody"))
        : t;
    }
    function d(t) {
      return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
    }
    function f(t) {
      var e = Rt.exec(t.type);
      return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
    }
    function g(t, e) {
      for (var n = 0, r = t.length; r > n; n++)
        mt.set(t[n], "globalEval", !e || mt.get(e[n], "globalEval"));
    }
    function v(t, e) {
      var n, r, i, o, s, a, l, c;
      if (1 === e.nodeType) {
        if (
          mt.hasData(t) &&
          ((o = mt.access(t)), (s = mt.set(e, o)), (c = o.events))
        ) {
          delete s.handle, (s.events = {});
          for (i in c)
            for (n = 0, r = c[i].length; r > n; n++) K.event.add(e, i, c[i][n]);
        }
        yt.hasData(t) &&
          ((a = yt.access(t)), (l = K.extend({}, a)), yt.set(e, l));
      }
    }
    function m(t, e) {
      var n = t.getElementsByTagName
        ? t.getElementsByTagName(e || "*")
        : t.querySelectorAll
        ? t.querySelectorAll(e || "*")
        : [];
      return void 0 === e || (e && K.nodeName(t, e)) ? K.merge([t], n) : n;
    }
    function y(t, e) {
      var n = e.nodeName.toLowerCase();
      "input" === n && St.test(t.type)
        ? (e.checked = t.checked)
        : ("input" === n || "textarea" === n) &&
          (e.defaultValue = t.defaultValue);
    }
    function b(e, n) {
      var r,
        i = K(n.createElement(e)).appendTo(n.body),
        o =
          t.getDefaultComputedStyle && (r = t.getDefaultComputedStyle(i[0]))
            ? r.display
            : K.css(i[0], "display");
      return i.detach(), o;
    }
    function w(t) {
      var e = J,
        n = Ft[t];
      return (
        n ||
          ((n = b(t, e)),
          ("none" !== n && n) ||
            ((Ht = (
              Ht || K("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(e.documentElement)),
            (e = Ht[0].contentDocument),
            e.write(),
            e.close(),
            (n = b(t, e)),
            Ht.detach()),
          (Ft[t] = n)),
        n
      );
    }
    function x(t, e, n) {
      var r,
        i,
        o,
        s,
        a = t.style;
      return (
        (n = n || Bt(t)),
        n && (s = n.getPropertyValue(e) || n[e]),
        n &&
          ("" !== s || K.contains(t.ownerDocument, t) || (s = K.style(t, e)),
          Qt.test(s) &&
            Ut.test(e) &&
            ((r = a.width),
            (i = a.minWidth),
            (o = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = s),
            (s = n.width),
            (a.width = r),
            (a.minWidth = i),
            (a.maxWidth = o))),
        void 0 !== s ? s + "" : s
      );
    }
    function T(t, e) {
      return {
        get: function () {
          return t()
            ? void delete this.get
            : (this.get = e).apply(this, arguments);
        },
      };
    }
    function C(t, e) {
      if (e in t) return e;
      for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = Gt.length; i--; )
        if (((e = Gt[i] + n), e in t)) return e;
      return r;
    }
    function S(t, e, n) {
      var r = Wt.exec(e);
      return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e;
    }
    function k(t, e, n, r, i) {
      for (
        var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
          s = 0;
        4 > o;
        o += 2
      )
        "margin" === n && (s += K.css(t, n + Tt[o], !0, i)),
          r
            ? ("content" === n && (s -= K.css(t, "padding" + Tt[o], !0, i)),
              "margin" !== n &&
                (s -= K.css(t, "border" + Tt[o] + "Width", !0, i)))
            : ((s += K.css(t, "padding" + Tt[o], !0, i)),
              "padding" !== n &&
                (s += K.css(t, "border" + Tt[o] + "Width", !0, i)));
      return s;
    }
    function E(t, e, n) {
      var r = !0,
        i = "width" === e ? t.offsetWidth : t.offsetHeight,
        o = Bt(t),
        s = "border-box" === K.css(t, "boxSizing", !1, o);
      if (0 >= i || null == i) {
        if (
          ((i = x(t, e, o)),
          (0 > i || null == i) && (i = t.style[e]),
          Qt.test(i))
        )
          return i;
        (r = s && (Y.boxSizingReliable() || i === t.style[e])),
          (i = parseFloat(i) || 0);
      }
      return i + k(t, e, n || (s ? "border" : "content"), r, o) + "px";
    }
    function A(t, e) {
      for (var n, r, i, o = [], s = 0, a = t.length; a > s; s++)
        (r = t[s]),
          r.style &&
            ((o[s] = mt.get(r, "olddisplay")),
            (n = r.style.display),
            e
              ? (o[s] || "none" !== n || (r.style.display = ""),
                "" === r.style.display &&
                  Ct(r) &&
                  (o[s] = mt.access(r, "olddisplay", w(r.nodeName))))
              : ((i = Ct(r)),
                ("none" === n && i) ||
                  mt.set(r, "olddisplay", i ? n : K.css(r, "display"))));
      for (s = 0; a > s; s++)
        (r = t[s]),
          r.style &&
            ((e && "none" !== r.style.display && "" !== r.style.display) ||
              (r.style.display = e ? o[s] || "" : "none"));
      return t;
    }
    function _(t, e, n, r, i) {
      return new _.prototype.init(t, e, n, r, i);
    }
    function $() {
      return (
        setTimeout(function () {
          Yt = void 0;
        }),
        (Yt = K.now())
      );
    }
    function N(t, e) {
      var n,
        r = 0,
        i = { height: t };
      for (e = e ? 1 : 0; 4 > r; r += 2 - e)
        (n = Tt[r]), (i["margin" + n] = i["padding" + n] = t);
      return e && (i.opacity = i.width = t), i;
    }
    function D(t, e, n) {
      for (
        var r, i = (ne[e] || []).concat(ne["*"]), o = 0, s = i.length;
        s > o;
        o++
      )
        if ((r = i[o].call(n, e, t))) return r;
    }
    function j(t, e, n) {
      var r,
        i,
        o,
        s,
        a,
        l,
        c,
        u,
        p = this,
        h = {},
        d = t.style,
        f = t.nodeType && Ct(t),
        g = mt.get(t, "fxshow");
      n.queue ||
        ((a = K._queueHooks(t, "fx")),
        null == a.unqueued &&
          ((a.unqueued = 0),
          (l = a.empty.fire),
          (a.empty.fire = function () {
            a.unqueued || l();
          })),
        a.unqueued++,
        p.always(function () {
          p.always(function () {
            a.unqueued--, K.queue(t, "fx").length || a.empty.fire();
          });
        })),
        1 === t.nodeType &&
          ("height" in e || "width" in e) &&
          ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
          (c = K.css(t, "display")),
          (u = "none" === c ? mt.get(t, "olddisplay") || w(t.nodeName) : c),
          "inline" === u &&
            "none" === K.css(t, "float") &&
            (d.display = "inline-block")),
        n.overflow &&
          ((d.overflow = "hidden"),
          p.always(function () {
            (d.overflow = n.overflow[0]),
              (d.overflowX = n.overflow[1]),
              (d.overflowY = n.overflow[2]);
          }));
      for (r in e)
        if (((i = e[r]), Zt.exec(i))) {
          if (
            (delete e[r],
            (o = o || "toggle" === i),
            i === (f ? "hide" : "show"))
          ) {
            if ("show" !== i || !g || void 0 === g[r]) continue;
            f = !0;
          }
          h[r] = (g && g[r]) || K.style(t, r);
        } else c = void 0;
      if (K.isEmptyObject(h))
        "inline" === ("none" === c ? w(t.nodeName) : c) && (d.display = c);
      else {
        g ? "hidden" in g && (f = g.hidden) : (g = mt.access(t, "fxshow", {})),
          o && (g.hidden = !f),
          f
            ? K(t).show()
            : p.done(function () {
                K(t).hide();
              }),
          p.done(function () {
            var e;
            mt.remove(t, "fxshow");
            for (e in h) K.style(t, e, h[e]);
          });
        for (r in h)
          (s = D(f ? g[r] : 0, r, p)),
            r in g ||
              ((g[r] = s.start),
              f &&
                ((s.end = s.start),
                (s.start = "width" === r || "height" === r ? 1 : 0)));
      }
    }
    function I(t, e) {
      var n, r, i, o, s;
      for (n in t)
        if (
          ((r = K.camelCase(n)),
          (i = e[r]),
          (o = t[n]),
          K.isArray(o) && ((i = o[1]), (o = t[n] = o[0])),
          n !== r && ((t[r] = o), delete t[n]),
          (s = K.cssHooks[r]),
          s && "expand" in s)
        ) {
          (o = s.expand(o)), delete t[r];
          for (n in o) n in t || ((t[n] = o[n]), (e[n] = i));
        } else e[r] = i;
    }
    function q(t, e, n) {
      var r,
        i,
        o = 0,
        s = ee.length,
        a = K.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (i) return !1;
          for (
            var e = Yt || $(),
              n = Math.max(0, c.startTime + c.duration - e),
              r = n / c.duration || 0,
              o = 1 - r,
              s = 0,
              l = c.tweens.length;
            l > s;
            s++
          )
            c.tweens[s].run(o);
          return (
            a.notifyWith(t, [c, o, n]),
            1 > o && l ? n : (a.resolveWith(t, [c]), !1)
          );
        },
        c = a.promise({
          elem: t,
          props: K.extend({}, e),
          opts: K.extend(!0, { specialEasing: {} }, n),
          originalProperties: e,
          originalOptions: n,
          startTime: Yt || $(),
          duration: n.duration,
          tweens: [],
          createTween: function (e, n) {
            var r = K.Tween(
              t,
              c.opts,
              e,
              n,
              c.opts.specialEasing[e] || c.opts.easing
            );
            return c.tweens.push(r), r;
          },
          stop: function (e) {
            var n = 0,
              r = e ? c.tweens.length : 0;
            if (i) return this;
            for (i = !0; r > n; n++) c.tweens[n].run(1);
            return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this;
          },
        }),
        u = c.props;
      for (I(u, c.opts.specialEasing); s > o; o++)
        if ((r = ee[o].call(c, t, u, c.opts))) return r;
      return (
        K.map(u, D, c),
        K.isFunction(c.opts.start) && c.opts.start.call(t, c),
        K.fx.timer(K.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always)
      );
    }
    function O(t) {
      return function (e, n) {
        "string" != typeof e && ((n = e), (e = "*"));
        var r,
          i = 0,
          o = e.toLowerCase().match(dt) || [];
        if (K.isFunction(n))
          for (; (r = o[i++]); )
            "+" === r[0]
              ? ((r = r.slice(1) || "*"), (t[r] = t[r] || []).unshift(n))
              : (t[r] = t[r] || []).push(n);
      };
    }
    function R(t, e, n, r) {
      function i(a) {
        var l;
        return (
          (o[a] = !0),
          K.each(t[a] || [], function (t, a) {
            var c = a(e, n, r);
            return "string" != typeof c || s || o[c]
              ? s
                ? !(l = c)
                : void 0
              : (e.dataTypes.unshift(c), i(c), !1);
          }),
          l
        );
      }
      var o = {},
        s = t === be;
      return i(e.dataTypes[0]) || (!o["*"] && i("*"));
    }
    function P(t, e) {
      var n,
        r,
        i = K.ajaxSettings.flatOptions || {};
      for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
      return r && K.extend(!0, t, r), t;
    }
    function L(t, e, n) {
      for (var r, i, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
        l.shift(),
          void 0 === r &&
            (r = t.mimeType || e.getResponseHeader("Content-Type"));
      if (r)
        for (i in a)
          if (a[i] && a[i].test(r)) {
            l.unshift(i);
            break;
          }
      if (l[0] in n) o = l[0];
      else {
        for (i in n) {
          if (!l[0] || t.converters[i + " " + l[0]]) {
            o = i;
            break;
          }
          s || (s = i);
        }
        o = o || s;
      }
      return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
    }
    function H(t, e, n, r) {
      var i,
        o,
        s,
        a,
        l,
        c = {},
        u = t.dataTypes.slice();
      if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
      for (o = u.shift(); o; )
        if (
          (t.responseFields[o] && (n[t.responseFields[o]] = e),
          !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
          (l = o),
          (o = u.shift()))
        )
          if ("*" === o) o = l;
          else if ("*" !== l && l !== o) {
            if (((s = c[l + " " + o] || c["* " + o]), !s))
              for (i in c)
                if (
                  ((a = i.split(" ")),
                  a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]]))
                ) {
                  s === !0
                    ? (s = c[i])
                    : c[i] !== !0 && ((o = a[0]), u.unshift(a[1]));
                  break;
                }
            if (s !== !0)
              if (s && t["throws"]) e = s(e);
              else
                try {
                  e = s(e);
                } catch (p) {
                  return {
                    state: "parsererror",
                    error: s ? p : "No conversion from " + l + " to " + o,
                  };
                }
          }
      return { state: "success", data: e };
    }
    function F(t, e, n, r) {
      var i;
      if (K.isArray(e))
        K.each(e, function (e, i) {
          n || Se.test(t)
            ? r(t, i)
            : F(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r);
        });
      else if (n || "object" !== K.type(e)) r(t, e);
      else for (i in e) F(t + "[" + i + "]", e[i], n, r);
    }
    function U(t) {
      return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
    }
    var Q = [],
      B = Q.slice,
      M = Q.concat,
      W = Q.push,
      z = Q.indexOf,
      V = {},
      X = V.toString,
      G = V.hasOwnProperty,
      Y = {},
      J = t.document,
      Z = "2.1.3",
      K = function (t, e) {
        return new K.fn.init(t, e);
      },
      tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      et = /^-ms-/,
      nt = /-([\da-z])/gi,
      rt = function (t, e) {
        return e.toUpperCase();
      };
    (K.fn = K.prototype =
      {
        jquery: Z,
        constructor: K,
        selector: "",
        length: 0,
        toArray: function () {
          return B.call(this);
        },
        get: function (t) {
          return null != t
            ? 0 > t
              ? this[t + this.length]
              : this[t]
            : B.call(this);
        },
        pushStack: function (t) {
          var e = K.merge(this.constructor(), t);
          return (e.prevObject = this), (e.context = this.context), e;
        },
        each: function (t, e) {
          return K.each(this, t, e);
        },
        map: function (t) {
          return this.pushStack(
            K.map(this, function (e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(B.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (t) {
          var e = this.length,
            n = +t + (0 > t ? e : 0);
          return this.pushStack(n >= 0 && e > n ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: W,
        sort: Q.sort,
        splice: Q.splice,
      }),
      (K.extend = K.fn.extend =
        function () {
          var t,
            e,
            n,
            r,
            i,
            o,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || K.isFunction(s) || (s = {}),
              a === l && ((s = this), a--);
            l > a;
            a++
          )
            if (null != (t = arguments[a]))
              for (e in t)
                (n = s[e]),
                  (r = t[e]),
                  s !== r &&
                    (c && r && (K.isPlainObject(r) || (i = K.isArray(r)))
                      ? (i
                          ? ((i = !1), (o = n && K.isArray(n) ? n : []))
                          : (o = n && K.isPlainObject(n) ? n : {}),
                        (s[e] = K.extend(c, o, r)))
                      : void 0 !== r && (s[e] = r));
          return s;
        }),
      K.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t);
        },
        noop: function () {},
        isFunction: function (t) {
          return "function" === K.type(t);
        },
        isArray: Array.isArray,
        isWindow: function (t) {
          return null != t && t === t.window;
        },
        isNumeric: function (t) {
          return !K.isArray(t) && t - parseFloat(t) + 1 >= 0;
        },
        isPlainObject: function (t) {
          return (
            "object" === K.type(t) &&
            !t.nodeType &&
            !K.isWindow(t) &&
            !(
              t.constructor && !G.call(t.constructor.prototype, "isPrototypeOf")
            )
          );
        },
        isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0;
        },
        type: function (t) {
          return null == t
            ? t + ""
            : "object" == typeof t || "function" == typeof t
            ? V[X.call(t)] || "object"
            : typeof t;
        },
        globalEval: function (t) {
          var e,
            n = eval;
          (t = K.trim(t)),
            t &&
              (1 === t.indexOf("use strict")
                ? ((e = J.createElement("script")),
                  (e.text = t),
                  J.head.appendChild(e).parentNode.removeChild(e))
                : n(t));
        },
        camelCase: function (t) {
          return t.replace(et, "ms-").replace(nt, rt);
        },
        nodeName: function (t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function (t, e, r) {
          var i,
            o = 0,
            s = t.length,
            a = n(t);
          if (r) {
            if (a) for (; s > o && ((i = e.apply(t[o], r)), i !== !1); o++);
            else for (o in t) if (((i = e.apply(t[o], r)), i === !1)) break;
          } else if (a)
            for (; s > o && ((i = e.call(t[o], o, t[o])), i !== !1); o++);
          else for (o in t) if (((i = e.call(t[o], o, t[o])), i === !1)) break;
          return t;
        },
        trim: function (t) {
          return null == t ? "" : (t + "").replace(tt, "");
        },
        makeArray: function (t, e) {
          var r = e || [];
          return (
            null != t &&
              (n(Object(t))
                ? K.merge(r, "string" == typeof t ? [t] : t)
                : W.call(r, t)),
            r
          );
        },
        inArray: function (t, e, n) {
          return null == e ? -1 : z.call(e, t, n);
        },
        merge: function (t, e) {
          for (var n = +e.length, r = 0, i = t.length; n > r; r++)
            t[i++] = e[r];
          return (t.length = i), t;
        },
        grep: function (t, e, n) {
          for (var r, i = [], o = 0, s = t.length, a = !n; s > o; o++)
            (r = !e(t[o], o)), r !== a && i.push(t[o]);
          return i;
        },
        map: function (t, e, r) {
          var i,
            o = 0,
            s = t.length,
            a = n(t),
            l = [];
          if (a) for (; s > o; o++) (i = e(t[o], o, r)), null != i && l.push(i);
          else for (o in t) (i = e(t[o], o, r)), null != i && l.push(i);
          return M.apply([], l);
        },
        guid: 1,
        proxy: function (t, e) {
          var n, r, i;
          return (
            "string" == typeof e && ((n = t[e]), (e = t), (t = n)),
            K.isFunction(t)
              ? ((r = B.call(arguments, 2)),
                (i = function () {
                  return t.apply(e || this, r.concat(B.call(arguments)));
                }),
                (i.guid = t.guid = t.guid || K.guid++),
                i)
              : void 0
          );
        },
        now: Date.now,
        support: Y,
      }),
      K.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function (t, e) {
          V["[object " + e + "]"] = e.toLowerCase();
        }
      );
    var it = (function (t) {
      function e(t, e, n, r) {
        var i, o, s, a, l, c, p, d, f, g;
        if (
          ((e ? e.ownerDocument || e : F) !== j && D(e),
          (e = e || j),
          (n = n || []),
          (a = e.nodeType),
          "string" != typeof t || !t || (1 !== a && 9 !== a && 11 !== a))
        )
          return n;
        if (!r && q) {
          if (11 !== a && (i = yt.exec(t)))
            if ((s = i[1])) {
              if (9 === a) {
                if (((o = e.getElementById(s)), !o || !o.parentNode)) return n;
                if (o.id === s) return n.push(o), n;
              } else if (
                e.ownerDocument &&
                (o = e.ownerDocument.getElementById(s)) &&
                L(e, o) &&
                o.id === s
              )
                return n.push(o), n;
            } else {
              if (i[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
              if ((s = i[3]) && x.getElementsByClassName)
                return Z.apply(n, e.getElementsByClassName(s)), n;
            }
          if (x.qsa && (!O || !O.test(t))) {
            if (
              ((d = p = H),
              (f = e),
              (g = 1 !== a && t),
              1 === a && "object" !== e.nodeName.toLowerCase())
            ) {
              for (
                c = k(t),
                  (p = e.getAttribute("id"))
                    ? (d = p.replace(wt, "\\$&"))
                    : e.setAttribute("id", d),
                  d = "[id='" + d + "'] ",
                  l = c.length;
                l--;

              )
                c[l] = d + h(c[l]);
              (f = (bt.test(t) && u(e.parentNode)) || e), (g = c.join(","));
            }
            if (g)
              try {
                return Z.apply(n, f.querySelectorAll(g)), n;
              } catch (v) {
              } finally {
                p || e.removeAttribute("id");
              }
          }
        }
        return A(t.replace(lt, "$1"), e, n, r);
      }
      function n() {
        function t(n, r) {
          return (
            e.push(n + " ") > T.cacheLength && delete t[e.shift()],
            (t[n + " "] = r)
          );
        }
        var e = [];
        return t;
      }
      function r(t) {
        return (t[H] = !0), t;
      }
      function i(t) {
        var e = j.createElement("div");
        try {
          return !!t(e);
        } catch (n) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), (e = null);
        }
      }
      function o(t, e) {
        for (var n = t.split("|"), r = t.length; r--; ) T.attrHandle[n[r]] = e;
      }
      function s(t, e) {
        var n = e && t,
          r =
            n &&
            1 === t.nodeType &&
            1 === e.nodeType &&
            (~e.sourceIndex || V) - (~t.sourceIndex || V);
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
        return t ? 1 : -1;
      }
      function a(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return "input" === n && e.type === t;
        };
      }
      function l(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t;
        };
      }
      function c(t) {
        return r(function (e) {
          return (
            (e = +e),
            r(function (n, r) {
              for (var i, o = t([], n.length, e), s = o.length; s--; )
                n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
            })
          );
        });
      }
      function u(t) {
        return t && "undefined" != typeof t.getElementsByTagName && t;
      }
      function p() {}
      function h(t) {
        for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
        return r;
      }
      function d(t, e, n) {
        var r = e.dir,
          i = n && "parentNode" === r,
          o = Q++;
        return e.first
          ? function (e, n, o) {
              for (; (e = e[r]); ) if (1 === e.nodeType || i) return t(e, n, o);
            }
          : function (e, n, s) {
              var a,
                l,
                c = [U, o];
              if (s) {
                for (; (e = e[r]); )
                  if ((1 === e.nodeType || i) && t(e, n, s)) return !0;
              } else
                for (; (e = e[r]); )
                  if (1 === e.nodeType || i) {
                    if (
                      ((l = e[H] || (e[H] = {})),
                      (a = l[r]) && a[0] === U && a[1] === o)
                    )
                      return (c[2] = a[2]);
                    if (((l[r] = c), (c[2] = t(e, n, s)))) return !0;
                  }
            };
      }
      function f(t) {
        return t.length > 1
          ? function (e, n, r) {
              for (var i = t.length; i--; ) if (!t[i](e, n, r)) return !1;
              return !0;
            }
          : t[0];
      }
      function g(t, n, r) {
        for (var i = 0, o = n.length; o > i; i++) e(t, n[i], r);
        return r;
      }
      function v(t, e, n, r, i) {
        for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++)
          (o = t[a]) && (!n || n(o, r, i)) && (s.push(o), c && e.push(a));
        return s;
      }
      function m(t, e, n, i, o, s) {
        return (
          i && !i[H] && (i = m(i)),
          o && !o[H] && (o = m(o, s)),
          r(function (r, s, a, l) {
            var c,
              u,
              p,
              h = [],
              d = [],
              f = s.length,
              m = r || g(e || "*", a.nodeType ? [a] : a, []),
              y = !t || (!r && e) ? m : v(m, h, t, a, l),
              b = n ? (o || (r ? t : f || i) ? [] : s) : y;
            if ((n && n(y, b, a, l), i))
              for (c = v(b, d), i(c, [], a, l), u = c.length; u--; )
                (p = c[u]) && (b[d[u]] = !(y[d[u]] = p));
            if (r) {
              if (o || t) {
                if (o) {
                  for (c = [], u = b.length; u--; )
                    (p = b[u]) && c.push((y[u] = p));
                  o(null, (b = []), c, l);
                }
                for (u = b.length; u--; )
                  (p = b[u]) &&
                    (c = o ? tt(r, p) : h[u]) > -1 &&
                    (r[c] = !(s[c] = p));
              }
            } else (b = v(b === s ? b.splice(f, b.length) : b)), o ? o(null, s, b, l) : Z.apply(s, b);
          })
        );
      }
      function y(t) {
        for (
          var e,
            n,
            r,
            i = t.length,
            o = T.relative[t[0].type],
            s = o || T.relative[" "],
            a = o ? 1 : 0,
            l = d(
              function (t) {
                return t === e;
              },
              s,
              !0
            ),
            c = d(
              function (t) {
                return tt(e, t) > -1;
              },
              s,
              !0
            ),
            u = [
              function (t, n, r) {
                var i =
                  (!o && (r || n !== _)) ||
                  ((e = n).nodeType ? l(t, n, r) : c(t, n, r));
                return (e = null), i;
              },
            ];
          i > a;
          a++
        )
          if ((n = T.relative[t[a].type])) u = [d(f(u), n)];
          else {
            if (((n = T.filter[t[a].type].apply(null, t[a].matches)), n[H])) {
              for (r = ++a; i > r && !T.relative[t[r].type]; r++);
              return m(
                a > 1 && f(u),
                a > 1 &&
                  h(
                    t
                      .slice(0, a - 1)
                      .concat({ value: " " === t[a - 2].type ? "*" : "" })
                  ).replace(lt, "$1"),
                n,
                r > a && y(t.slice(a, r)),
                i > r && y((t = t.slice(r))),
                i > r && h(t)
              );
            }
            u.push(n);
          }
        return f(u);
      }
      function b(t, n) {
        var i = n.length > 0,
          o = t.length > 0,
          s = function (r, s, a, l, c) {
            var u,
              p,
              h,
              d = 0,
              f = "0",
              g = r && [],
              m = [],
              y = _,
              b = r || (o && T.find.TAG("*", c)),
              w = (U += null == y ? 1 : Math.random() || 0.1),
              x = b.length;
            for (c && (_ = s !== j && s); f !== x && null != (u = b[f]); f++) {
              if (o && u) {
                for (p = 0; (h = t[p++]); )
                  if (h(u, s, a)) {
                    l.push(u);
                    break;
                  }
                c && (U = w);
              }
              i && ((u = !h && u) && d--, r && g.push(u));
            }
            if (((d += f), i && f !== d)) {
              for (p = 0; (h = n[p++]); ) h(g, m, s, a);
              if (r) {
                if (d > 0) for (; f--; ) g[f] || m[f] || (m[f] = Y.call(l));
                m = v(m);
              }
              Z.apply(l, m),
                c && !r && m.length > 0 && d + n.length > 1 && e.uniqueSort(l);
            }
            return c && ((U = w), (_ = y)), g;
          };
        return i ? r(s) : s;
      }
      var w,
        x,
        T,
        C,
        S,
        k,
        E,
        A,
        _,
        $,
        N,
        D,
        j,
        I,
        q,
        O,
        R,
        P,
        L,
        H = "sizzle" + 1 * new Date(),
        F = t.document,
        U = 0,
        Q = 0,
        B = n(),
        M = n(),
        W = n(),
        z = function (t, e) {
          return t === e && (N = !0), 0;
        },
        V = 1 << 31,
        X = {}.hasOwnProperty,
        G = [],
        Y = G.pop,
        J = G.push,
        Z = G.push,
        K = G.slice,
        tt = function (t, e) {
          for (var n = 0, r = t.length; r > n; n++) if (t[n] === e) return n;
          return -1;
        },
        et =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        nt = "[\\x20\\t\\r\\n\\f]",
        rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        it = rt.replace("w", "w#"),
        ot =
          "\\[" +
          nt +
          "*(" +
          rt +
          ")(?:" +
          nt +
          "*([*^$|!~]?=)" +
          nt +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          it +
          "))|)" +
          nt +
          "*\\]",
        st =
          ":(" +
          rt +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          ot +
          ")*)|.*)\\)|)",
        at = new RegExp(nt + "+", "g"),
        lt = new RegExp(
          "^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$",
          "g"
        ),
        ct = new RegExp("^" + nt + "*," + nt + "*"),
        ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
        pt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
        ht = new RegExp(st),
        dt = new RegExp("^" + it + "$"),
        ft = {
          ID: new RegExp("^#(" + rt + ")"),
          CLASS: new RegExp("^\\.(" + rt + ")"),
          TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + ot),
          PSEUDO: new RegExp("^" + st),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              nt +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              nt +
              "*(?:([+-]|)" +
              nt +
              "*(\\d+)|))" +
              nt +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + et + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              nt +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              nt +
              "*((?:-\\d)?\\d*)" +
              nt +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        gt = /^(?:input|select|textarea|button)$/i,
        vt = /^h\d$/i,
        mt = /^[^{]+\{\s*\[native \w/,
        yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        bt = /[+~]/,
        wt = /'|\\/g,
        xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
        Tt = function (t, e, n) {
          var r = "0x" + e - 65536;
          return r !== r || n
            ? e
            : 0 > r
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
        },
        Ct = function () {
          D();
        };
      try {
        Z.apply((G = K.call(F.childNodes)), F.childNodes),
          G[F.childNodes.length].nodeType;
      } catch (St) {
        Z = {
          apply: G.length
            ? function (t, e) {
                J.apply(t, K.call(e));
              }
            : function (t, e) {
                for (var n = t.length, r = 0; (t[n++] = e[r++]); );
                t.length = n - 1;
              },
        };
      }
      (x = e.support = {}),
        (S = e.isXML =
          function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
          }),
        (D = e.setDocument =
          function (t) {
            var e,
              n,
              r = t ? t.ownerDocument || t : F;
            return r !== j && 9 === r.nodeType && r.documentElement
              ? ((j = r),
                (I = r.documentElement),
                (n = r.defaultView),
                n &&
                  n !== n.top &&
                  (n.addEventListener
                    ? n.addEventListener("unload", Ct, !1)
                    : n.attachEvent && n.attachEvent("onunload", Ct)),
                (q = !S(r)),
                (x.attributes = i(function (t) {
                  return (t.className = "i"), !t.getAttribute("className");
                })),
                (x.getElementsByTagName = i(function (t) {
                  return (
                    t.appendChild(r.createComment("")),
                    !t.getElementsByTagName("*").length
                  );
                })),
                (x.getElementsByClassName = mt.test(r.getElementsByClassName)),
                (x.getById = i(function (t) {
                  return (
                    (I.appendChild(t).id = H),
                    !r.getElementsByName || !r.getElementsByName(H).length
                  );
                })),
                x.getById
                  ? ((T.find.ID = function (t, e) {
                      if ("undefined" != typeof e.getElementById && q) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : [];
                      }
                    }),
                    (T.filter.ID = function (t) {
                      var e = t.replace(xt, Tt);
                      return function (t) {
                        return t.getAttribute("id") === e;
                      };
                    }))
                  : (delete T.find.ID,
                    (T.filter.ID = function (t) {
                      var e = t.replace(xt, Tt);
                      return function (t) {
                        var n =
                          "undefined" != typeof t.getAttributeNode &&
                          t.getAttributeNode("id");
                        return n && n.value === e;
                      };
                    })),
                (T.find.TAG = x.getElementsByTagName
                  ? function (t, e) {
                      return "undefined" != typeof e.getElementsByTagName
                        ? e.getElementsByTagName(t)
                        : x.qsa
                        ? e.querySelectorAll(t)
                        : void 0;
                    }
                  : function (t, e) {
                      var n,
                        r = [],
                        i = 0,
                        o = e.getElementsByTagName(t);
                      if ("*" === t) {
                        for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return o;
                    }),
                (T.find.CLASS =
                  x.getElementsByClassName &&
                  function (t, e) {
                    return q ? e.getElementsByClassName(t) : void 0;
                  }),
                (R = []),
                (O = []),
                (x.qsa = mt.test(r.querySelectorAll)) &&
                  (i(function (t) {
                    (I.appendChild(t).innerHTML =
                      "<a id='" +
                      H +
                      "'></a><select id='" +
                      H +
                      "-\f]' msallowcapture=''><option selected=''></option></select>"),
                      t.querySelectorAll("[msallowcapture^='']").length &&
                        O.push("[*^$]=" + nt + "*(?:''|\"\")"),
                      t.querySelectorAll("[selected]").length ||
                        O.push("\\[" + nt + "*(?:value|" + et + ")"),
                      t.querySelectorAll("[id~=" + H + "-]").length ||
                        O.push("~="),
                      t.querySelectorAll(":checked").length ||
                        O.push(":checked"),
                      t.querySelectorAll("a#" + H + "+*").length ||
                        O.push(".#.+[+~]");
                  }),
                  i(function (t) {
                    var e = r.createElement("input");
                    e.setAttribute("type", "hidden"),
                      t.appendChild(e).setAttribute("name", "D"),
                      t.querySelectorAll("[name=d]").length &&
                        O.push("name" + nt + "*[*^$|!~]?="),
                      t.querySelectorAll(":enabled").length ||
                        O.push(":enabled", ":disabled"),
                      t.querySelectorAll("*,:x"),
                      O.push(",.*:");
                  })),
                (x.matchesSelector = mt.test(
                  (P =
                    I.matches ||
                    I.webkitMatchesSelector ||
                    I.mozMatchesSelector ||
                    I.oMatchesSelector ||
                    I.msMatchesSelector)
                )) &&
                  i(function (t) {
                    (x.disconnectedMatch = P.call(t, "div")),
                      P.call(t, "[s!='']:x"),
                      R.push("!=", st);
                  }),
                (O = O.length && new RegExp(O.join("|"))),
                (R = R.length && new RegExp(R.join("|"))),
                (e = mt.test(I.compareDocumentPosition)),
                (L =
                  e || mt.test(I.contains)
                    ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                          r = e && e.parentNode;
                        return (
                          t === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : t.compareDocumentPosition &&
                                16 & t.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function (t, e) {
                        if (e)
                          for (; (e = e.parentNode); ) if (e === t) return !0;
                        return !1;
                      }),
                (z = e
                  ? function (t, e) {
                      if (t === e) return (N = !0), 0;
                      var n =
                        !t.compareDocumentPosition - !e.compareDocumentPosition;
                      return n
                        ? n
                        : ((n =
                            (t.ownerDocument || t) === (e.ownerDocument || e)
                              ? t.compareDocumentPosition(e)
                              : 1),
                          1 & n ||
                          (!x.sortDetached &&
                            e.compareDocumentPosition(t) === n)
                            ? t === r || (t.ownerDocument === F && L(F, t))
                              ? -1
                              : e === r || (e.ownerDocument === F && L(F, e))
                              ? 1
                              : $
                              ? tt($, t) - tt($, e)
                              : 0
                            : 4 & n
                            ? -1
                            : 1);
                    }
                  : function (t, e) {
                      if (t === e) return (N = !0), 0;
                      var n,
                        i = 0,
                        o = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        c = [e];
                      if (!o || !a)
                        return t === r
                          ? -1
                          : e === r
                          ? 1
                          : o
                          ? -1
                          : a
                          ? 1
                          : $
                          ? tt($, t) - tt($, e)
                          : 0;
                      if (o === a) return s(t, e);
                      for (n = t; (n = n.parentNode); ) l.unshift(n);
                      for (n = e; (n = n.parentNode); ) c.unshift(n);
                      for (; l[i] === c[i]; ) i++;
                      return i
                        ? s(l[i], c[i])
                        : l[i] === F
                        ? -1
                        : c[i] === F
                        ? 1
                        : 0;
                    }),
                r)
              : j;
          }),
        (e.matches = function (t, n) {
          return e(t, null, null, n);
        }),
        (e.matchesSelector = function (t, n) {
          if (
            ((t.ownerDocument || t) !== j && D(t),
            (n = n.replace(pt, "='$1']")),
            !(!x.matchesSelector || !q || (R && R.test(n)) || (O && O.test(n))))
          )
            try {
              var r = P.call(t, n);
              if (
                r ||
                x.disconnectedMatch ||
                (t.document && 11 !== t.document.nodeType)
              )
                return r;
            } catch (i) {}
          return e(n, j, null, [t]).length > 0;
        }),
        (e.contains = function (t, e) {
          return (t.ownerDocument || t) !== j && D(t), L(t, e);
        }),
        (e.attr = function (t, e) {
          (t.ownerDocument || t) !== j && D(t);
          var n = T.attrHandle[e.toLowerCase()],
            r =
              n && X.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !q) : void 0;
          return void 0 !== r
            ? r
            : x.attributes || !q
            ? t.getAttribute(e)
            : (r = t.getAttributeNode(e)) && r.specified
            ? r.value
            : null;
        }),
        (e.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t);
        }),
        (e.uniqueSort = function (t) {
          var e,
            n = [],
            r = 0,
            i = 0;
          if (
            ((N = !x.detectDuplicates),
            ($ = !x.sortStable && t.slice(0)),
            t.sort(z),
            N)
          ) {
            for (; (e = t[i++]); ) e === t[i] && (r = n.push(i));
            for (; r--; ) t.splice(n[r], 1);
          }
          return ($ = null), t;
        }),
        (C = e.getText =
          function (t) {
            var e,
              n = "",
              r = 0,
              i = t.nodeType;
            if (i) {
              if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) n += C(t);
              } else if (3 === i || 4 === i) return t.nodeValue;
            } else for (; (e = t[r++]); ) n += C(e);
            return n;
          }),
        (T = e.selectors =
          {
            cacheLength: 50,
            createPseudo: r,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (t) {
                return (
                  (t[1] = t[1].replace(xt, Tt)),
                  (t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Tt)),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
                );
              },
              CHILD: function (t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  "nth" === t[1].slice(0, 3)
                    ? (t[3] || e.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ("even" === t[3] || "odd" === t[3]))),
                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                    : t[3] && e.error(t[0]),
                  t
                );
              },
              PSEUDO: function (t) {
                var e,
                  n = !t[6] && t[2];
                return ft.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[4] || t[5] || "")
                      : n &&
                        ht.test(n) &&
                        (e = k(n, !0)) &&
                        (e = n.indexOf(")", n.length - e) - n.length) &&
                        ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                    t.slice(0, 3));
              },
            },
            filter: {
              TAG: function (t) {
                var e = t.replace(xt, Tt).toLowerCase();
                return "*" === t
                  ? function () {
                      return !0;
                    }
                  : function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
              },
              CLASS: function (t) {
                var e = B[t + " "];
                return (
                  e ||
                  ((e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) &&
                    B(t, function (t) {
                      return e.test(
                        ("string" == typeof t.className && t.className) ||
                          ("undefined" != typeof t.getAttribute &&
                            t.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, n, r) {
                return function (i) {
                  var o = e.attr(i, t);
                  return null == o
                    ? "!=" === n
                    : !n ||
                        ((o += ""),
                        "=" === n
                          ? o === r
                          : "!=" === n
                          ? o !== r
                          : "^=" === n
                          ? r && 0 === o.indexOf(r)
                          : "*=" === n
                          ? r && o.indexOf(r) > -1
                          : "$=" === n
                          ? r && o.slice(-r.length) === r
                          : "~=" === n
                          ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1
                          : "|=" === n &&
                            (o === r || o.slice(0, r.length + 1) === r + "-"));
                };
              },
              CHILD: function (t, e, n, r, i) {
                var o = "nth" !== t.slice(0, 3),
                  s = "last" !== t.slice(-4),
                  a = "of-type" === e;
                return 1 === r && 0 === i
                  ? function (t) {
                      return !!t.parentNode;
                    }
                  : function (e, n, l) {
                      var c,
                        u,
                        p,
                        h,
                        d,
                        f,
                        g = o !== s ? "nextSibling" : "previousSibling",
                        v = e.parentNode,
                        m = a && e.nodeName.toLowerCase(),
                        y = !l && !a;
                      if (v) {
                        if (o) {
                          for (; g; ) {
                            for (p = e; (p = p[g]); )
                              if (
                                a
                                  ? p.nodeName.toLowerCase() === m
                                  : 1 === p.nodeType
                              )
                                return !1;
                            f = g = "only" === t && !f && "nextSibling";
                          }
                          return !0;
                        }
                        if (((f = [s ? v.firstChild : v.lastChild]), s && y)) {
                          for (
                            u = v[H] || (v[H] = {}),
                              c = u[t] || [],
                              d = c[0] === U && c[1],
                              h = c[0] === U && c[2],
                              p = d && v.childNodes[d];
                            (p = (++d && p && p[g]) || (h = d = 0) || f.pop());

                          )
                            if (1 === p.nodeType && ++h && p === e) {
                              u[t] = [U, d, h];
                              break;
                            }
                        } else if (
                          y &&
                          (c = (e[H] || (e[H] = {}))[t]) &&
                          c[0] === U
                        )
                          h = c[1];
                        else
                          for (
                            ;
                            (p =
                              (++d && p && p[g]) || (h = d = 0) || f.pop()) &&
                            ((a
                              ? p.nodeName.toLowerCase() !== m
                              : 1 !== p.nodeType) ||
                              !++h ||
                              (y && ((p[H] || (p[H] = {}))[t] = [U, h]),
                              p !== e));

                          );
                        return (h -= i), h === r || (h % r === 0 && h / r >= 0);
                      }
                    };
              },
              PSEUDO: function (t, n) {
                var i,
                  o =
                    T.pseudos[t] ||
                    T.setFilters[t.toLowerCase()] ||
                    e.error("unsupported pseudo: " + t);
                return o[H]
                  ? o(n)
                  : o.length > 1
                  ? ((i = [t, t, "", n]),
                    T.setFilters.hasOwnProperty(t.toLowerCase())
                      ? r(function (t, e) {
                          for (var r, i = o(t, n), s = i.length; s--; )
                            (r = tt(t, i[s])), (t[r] = !(e[r] = i[s]));
                        })
                      : function (t) {
                          return o(t, 0, i);
                        })
                  : o;
              },
            },
            pseudos: {
              not: r(function (t) {
                var e = [],
                  n = [],
                  i = E(t.replace(lt, "$1"));
                return i[H]
                  ? r(function (t, e, n, r) {
                      for (var o, s = i(t, null, r, []), a = t.length; a--; )
                        (o = s[a]) && (t[a] = !(e[a] = o));
                    })
                  : function (t, r, o) {
                      return (
                        (e[0] = t), i(e, null, o, n), (e[0] = null), !n.pop()
                      );
                    };
              }),
              has: r(function (t) {
                return function (n) {
                  return e(t, n).length > 0;
                };
              }),
              contains: r(function (t) {
                return (
                  (t = t.replace(xt, Tt)),
                  function (e) {
                    return (
                      (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                    );
                  }
                );
              }),
              lang: r(function (t) {
                return (
                  dt.test(t || "") || e.error("unsupported lang: " + t),
                  (t = t.replace(xt, Tt).toLowerCase()),
                  function (e) {
                    var n;
                    do
                      if (
                        (n = q
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()),
                          n === t || 0 === n.indexOf(t + "-")
                        );
                    while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var n = t.location && t.location.hash;
                return n && n.slice(1) === e.id;
              },
              root: function (t) {
                return t === I;
              },
              focus: function (t) {
                return (
                  t === j.activeElement &&
                  (!j.hasFocus || j.hasFocus()) &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: function (t) {
                return t.disabled === !1;
              },
              disabled: function (t) {
                return t.disabled === !0;
              },
              checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return (
                  ("input" === e && !!t.checked) ||
                  ("option" === e && !!t.selected)
                );
              },
              selected: function (t) {
                return (
                  t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                );
              },
              empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                  if (t.nodeType < 6) return !1;
                return !0;
              },
              parent: function (t) {
                return !T.pseudos.empty(t);
              },
              header: function (t) {
                return vt.test(t.nodeName);
              },
              input: function (t) {
                return gt.test(t.nodeName);
              },
              button: function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e && "button" === t.type) || "button" === e;
              },
              text: function (t) {
                var e;
                return (
                  "input" === t.nodeName.toLowerCase() &&
                  "text" === t.type &&
                  (null == (e = t.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: c(function () {
                return [0];
              }),
              last: c(function (t, e) {
                return [e - 1];
              }),
              eq: c(function (t, e, n) {
                return [0 > n ? n + e : n];
              }),
              even: c(function (t, e) {
                for (var n = 0; e > n; n += 2) t.push(n);
                return t;
              }),
              odd: c(function (t, e) {
                for (var n = 1; e > n; n += 2) t.push(n);
                return t;
              }),
              lt: c(function (t, e, n) {
                for (var r = 0 > n ? n + e : n; --r >= 0; ) t.push(r);
                return t;
              }),
              gt: c(function (t, e, n) {
                for (var r = 0 > n ? n + e : n; ++r < e; ) t.push(r);
                return t;
              }),
            },
          }),
        (T.pseudos.nth = T.pseudos.eq);
      for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        T.pseudos[w] = a(w);
      for (w in { submit: !0, reset: !0 }) T.pseudos[w] = l(w);
      return (
        (p.prototype = T.filters = T.pseudos),
        (T.setFilters = new p()),
        (k = e.tokenize =
          function (t, n) {
            var r,
              i,
              o,
              s,
              a,
              l,
              c,
              u = M[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = t, l = [], c = T.preFilter; a; ) {
              (!r || (i = ct.exec(a))) &&
                (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
                (r = !1),
                (i = ut.exec(a)) &&
                  ((r = i.shift()),
                  o.push({ value: r, type: i[0].replace(lt, " ") }),
                  (a = a.slice(r.length)));
              for (s in T.filter)
                !(i = ft[s].exec(a)) ||
                  (c[s] && !(i = c[s](i))) ||
                  ((r = i.shift()),
                  o.push({ value: r, type: s, matches: i }),
                  (a = a.slice(r.length)));
              if (!r) break;
            }
            return n ? a.length : a ? e.error(t) : M(t, l).slice(0);
          }),
        (E = e.compile =
          function (t, e) {
            var n,
              r = [],
              i = [],
              o = W[t + " "];
            if (!o) {
              for (e || (e = k(t)), n = e.length; n--; )
                (o = y(e[n])), o[H] ? r.push(o) : i.push(o);
              (o = W(t, b(i, r))), (o.selector = t);
            }
            return o;
          }),
        (A = e.select =
          function (t, e, n, r) {
            var i,
              o,
              s,
              a,
              l,
              c = "function" == typeof t && t,
              p = !r && k((t = c.selector || t));
            if (((n = n || []), 1 === p.length)) {
              if (
                ((o = p[0] = p[0].slice(0)),
                o.length > 2 &&
                  "ID" === (s = o[0]).type &&
                  x.getById &&
                  9 === e.nodeType &&
                  q &&
                  T.relative[o[1].type])
              ) {
                if (
                  ((e = (T.find.ID(s.matches[0].replace(xt, Tt), e) || [])[0]),
                  !e)
                )
                  return n;
                c && (e = e.parentNode), (t = t.slice(o.shift().value.length));
              }
              for (
                i = ft.needsContext.test(t) ? 0 : o.length;
                i-- && ((s = o[i]), !T.relative[(a = s.type)]);

              )
                if (
                  (l = T.find[a]) &&
                  (r = l(
                    s.matches[0].replace(xt, Tt),
                    (bt.test(o[0].type) && u(e.parentNode)) || e
                  ))
                ) {
                  if ((o.splice(i, 1), (t = r.length && h(o)), !t))
                    return Z.apply(n, r), n;
                  break;
                }
            }
            return (
              (c || E(t, p))(r, e, !q, n, (bt.test(t) && u(e.parentNode)) || e),
              n
            );
          }),
        (x.sortStable = H.split("").sort(z).join("") === H),
        (x.detectDuplicates = !!N),
        D(),
        (x.sortDetached = i(function (t) {
          return 1 & t.compareDocumentPosition(j.createElement("div"));
        })),
        i(function (t) {
          return (
            (t.innerHTML = "<a href='#'></a>"),
            "#" === t.firstChild.getAttribute("href")
          );
        }) ||
          o("type|href|height|width", function (t, e, n) {
            return n
              ? void 0
              : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
          }),
        (x.attributes &&
          i(function (t) {
            return (
              (t.innerHTML = "<input/>"),
              t.firstChild.setAttribute("value", ""),
              "" === t.firstChild.getAttribute("value")
            );
          })) ||
          o("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase()
              ? void 0
              : t.defaultValue;
          }),
        i(function (t) {
          return null == t.getAttribute("disabled");
        }) ||
          o(et, function (t, e, n) {
            var r;
            return n
              ? void 0
              : t[e] === !0
              ? e.toLowerCase()
              : (r = t.getAttributeNode(e)) && r.specified
              ? r.value
              : null;
          }),
        e
      );
    })(t);
    (K.find = it),
      (K.expr = it.selectors),
      (K.expr[":"] = K.expr.pseudos),
      (K.unique = it.uniqueSort),
      (K.text = it.getText),
      (K.isXMLDoc = it.isXML),
      (K.contains = it.contains);
    var ot = K.expr.match.needsContext,
      st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      at = /^.[^:#\[\.,]*$/;
    (K.filter = function (t, e, n) {
      var r = e[0];
      return (
        n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === r.nodeType
          ? K.find.matchesSelector(r, t)
            ? [r]
            : []
          : K.find.matches(
              t,
              K.grep(e, function (t) {
                return 1 === t.nodeType;
              })
            )
      );
    }),
      K.fn.extend({
        find: function (t) {
          var e,
            n = this.length,
            r = [],
            i = this;
          if ("string" != typeof t)
            return this.pushStack(
              K(t).filter(function () {
                for (e = 0; n > e; e++) if (K.contains(i[e], this)) return !0;
              })
            );
          for (e = 0; n > e; e++) K.find(t, i[e], r);
          return (
            (r = this.pushStack(n > 1 ? K.unique(r) : r)),
            (r.selector = this.selector ? this.selector + " " + t : t),
            r
          );
        },
        filter: function (t) {
          return this.pushStack(r(this, t || [], !1));
        },
        not: function (t) {
          return this.pushStack(r(this, t || [], !0));
        },
        is: function (t) {
          return !!r(
            this,
            "string" == typeof t && ot.test(t) ? K(t) : t || [],
            !1
          ).length;
        },
      });
    var lt,
      ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ut = (K.fn.init = function (t, e) {
        var n, r;
        if (!t) return this;
        if ("string" == typeof t) {
          if (
            ((n =
              "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : ct.exec(t)),
            !n || (!n[1] && e))
          )
            return !e || e.jquery
              ? (e || lt).find(t)
              : this.constructor(e).find(t);
          if (n[1]) {
            if (
              ((e = e instanceof K ? e[0] : e),
              K.merge(
                this,
                K.parseHTML(
                  n[1],
                  e && e.nodeType ? e.ownerDocument || e : J,
                  !0
                )
              ),
              st.test(n[1]) && K.isPlainObject(e))
            )
              for (n in e)
                K.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this;
          }
          return (
            (r = J.getElementById(n[2])),
            r && r.parentNode && ((this.length = 1), (this[0] = r)),
            (this.context = J),
            (this.selector = t),
            this
          );
        }
        return t.nodeType
          ? ((this.context = this[0] = t), (this.length = 1), this)
          : K.isFunction(t)
          ? "undefined" != typeof lt.ready
            ? lt.ready(t)
            : t(K)
          : (void 0 !== t.selector &&
              ((this.selector = t.selector), (this.context = t.context)),
            K.makeArray(t, this));
      });
    (ut.prototype = K.fn), (lt = K(J));
    var pt = /^(?:parents|prev(?:Until|All))/,
      ht = { children: !0, contents: !0, next: !0, prev: !0 };
    K.extend({
      dir: function (t, e, n) {
        for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
          if (1 === t.nodeType) {
            if (i && K(t).is(n)) break;
            r.push(t);
          }
        return r;
      },
      sibling: function (t, e) {
        for (var n = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && n.push(t);
        return n;
      },
    }),
      K.fn.extend({
        has: function (t) {
          var e = K(t, this),
            n = e.length;
          return this.filter(function () {
            for (var t = 0; n > t; t++) if (K.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          for (
            var n,
              r = 0,
              i = this.length,
              o = [],
              s =
                ot.test(t) || "string" != typeof t
                  ? K(t, e || this.context)
                  : 0;
            i > r;
            r++
          )
            for (n = this[r]; n && n !== e; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (s
                  ? s.index(n) > -1
                  : 1 === n.nodeType && K.find.matchesSelector(n, t))
              ) {
                o.push(n);
                break;
              }
          return this.pushStack(o.length > 1 ? K.unique(o) : o);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? z.call(K(t), this[0])
              : z.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(K.unique(K.merge(this.get(), K(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
      K.each(
        {
          parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function (t) {
            return K.dir(t, "parentNode");
          },
          parentsUntil: function (t, e, n) {
            return K.dir(t, "parentNode", n);
          },
          next: function (t) {
            return i(t, "nextSibling");
          },
          prev: function (t) {
            return i(t, "previousSibling");
          },
          nextAll: function (t) {
            return K.dir(t, "nextSibling");
          },
          prevAll: function (t) {
            return K.dir(t, "previousSibling");
          },
          nextUntil: function (t, e, n) {
            return K.dir(t, "nextSibling", n);
          },
          prevUntil: function (t, e, n) {
            return K.dir(t, "previousSibling", n);
          },
          siblings: function (t) {
            return K.sibling((t.parentNode || {}).firstChild, t);
          },
          children: function (t) {
            return K.sibling(t.firstChild);
          },
          contents: function (t) {
            return t.contentDocument || K.merge([], t.childNodes);
          },
        },
        function (t, e) {
          K.fn[t] = function (n, r) {
            var i = K.map(this, e, n);
            return (
              "Until" !== t.slice(-5) && (r = n),
              r && "string" == typeof r && (i = K.filter(r, i)),
              this.length > 1 &&
                (ht[t] || K.unique(i), pt.test(t) && i.reverse()),
              this.pushStack(i)
            );
          };
        }
      );
    var dt = /\S+/g,
      ft = {};
    (K.Callbacks = function (t) {
      t = "string" == typeof t ? ft[t] || o(t) : K.extend({}, t);
      var e,
        n,
        r,
        i,
        s,
        a,
        l = [],
        c = !t.once && [],
        u = function (o) {
          for (
            e = t.memory && o, n = !0, a = i || 0, i = 0, s = l.length, r = !0;
            l && s > a;
            a++
          )
            if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
              e = !1;
              break;
            }
          (r = !1),
            l && (c ? c.length && u(c.shift()) : e ? (l = []) : p.disable());
        },
        p = {
          add: function () {
            if (l) {
              var n = l.length;
              !(function o(e) {
                K.each(e, function (e, n) {
                  var r = K.type(n);
                  "function" === r
                    ? (t.unique && p.has(n)) || l.push(n)
                    : n && n.length && "string" !== r && o(n);
                });
              })(arguments),
                r ? (s = l.length) : e && ((i = n), u(e));
            }
            return this;
          },
          remove: function () {
            return (
              l &&
                K.each(arguments, function (t, e) {
                  for (var n; (n = K.inArray(e, l, n)) > -1; )
                    l.splice(n, 1), r && (s >= n && s--, a >= n && a--);
                }),
              this
            );
          },
          has: function (t) {
            return t ? K.inArray(t, l) > -1 : !(!l || !l.length);
          },
          empty: function () {
            return (l = []), (s = 0), this;
          },
          disable: function () {
            return (l = c = e = void 0), this;
          },
          disabled: function () {
            return !l;
          },
          lock: function () {
            return (c = void 0), e || p.disable(), this;
          },
          locked: function () {
            return !c;
          },
          fireWith: function (t, e) {
            return (
              !l ||
                (n && !c) ||
                ((e = e || []),
                (e = [t, e.slice ? e.slice() : e]),
                r ? c.push(e) : u(e)),
              this
            );
          },
          fire: function () {
            return p.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!n;
          },
        };
      return p;
    }),
      K.extend({
        Deferred: function (t) {
          var e = [
              ["resolve", "done", K.Callbacks("once memory"), "resolved"],
              ["reject", "fail", K.Callbacks("once memory"), "rejected"],
              ["notify", "progress", K.Callbacks("memory")],
            ],
            n = "pending",
            r = {
              state: function () {
                return n;
              },
              always: function () {
                return i.done(arguments).fail(arguments), this;
              },
              then: function () {
                var t = arguments;
                return K.Deferred(function (n) {
                  K.each(e, function (e, o) {
                    var s = K.isFunction(t[e]) && t[e];
                    i[o[1]](function () {
                      var t = s && s.apply(this, arguments);
                      t && K.isFunction(t.promise)
                        ? t
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[o[0] + "With"](
                            this === r ? n.promise() : this,
                            s ? [t] : arguments
                          );
                    });
                  }),
                    (t = null);
                }).promise();
              },
              promise: function (t) {
                return null != t ? K.extend(t, r) : r;
              },
            },
            i = {};
          return (
            (r.pipe = r.then),
            K.each(e, function (t, o) {
              var s = o[2],
                a = o[3];
              (r[o[1]] = s.add),
                a &&
                  s.add(
                    function () {
                      n = a;
                    },
                    e[1 ^ t][2].disable,
                    e[2][2].lock
                  ),
                (i[o[0]] = function () {
                  return (
                    i[o[0] + "With"](this === i ? r : this, arguments), this
                  );
                }),
                (i[o[0] + "With"] = s.fireWith);
            }),
            r.promise(i),
            t && t.call(i, i),
            i
          );
        },
        when: function (t) {
          var e,
            n,
            r,
            i = 0,
            o = B.call(arguments),
            s = o.length,
            a = 1 !== s || (t && K.isFunction(t.promise)) ? s : 0,
            l = 1 === a ? t : K.Deferred(),
            c = function (t, n, r) {
              return function (i) {
                (n[t] = this),
                  (r[t] = arguments.length > 1 ? B.call(arguments) : i),
                  r === e ? l.notifyWith(n, r) : --a || l.resolveWith(n, r);
              };
            };
          if (s > 1)
            for (
              e = new Array(s), n = new Array(s), r = new Array(s);
              s > i;
              i++
            )
              o[i] && K.isFunction(o[i].promise)
                ? o[i]
                    .promise()
                    .done(c(i, r, o))
                    .fail(l.reject)
                    .progress(c(i, n, e))
                : --a;
          return a || l.resolveWith(r, o), l.promise();
        },
      });
    var gt;
    (K.fn.ready = function (t) {
      return K.ready.promise().done(t), this;
    }),
      K.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
          t ? K.readyWait++ : K.ready(!0);
        },
        ready: function (t) {
          (t === !0 ? --K.readyWait : K.isReady) ||
            ((K.isReady = !0),
            (t !== !0 && --K.readyWait > 0) ||
              (gt.resolveWith(J, [K]),
              K.fn.triggerHandler &&
                (K(J).triggerHandler("ready"), K(J).off("ready"))));
        },
      }),
      (K.ready.promise = function (e) {
        return (
          gt ||
            ((gt = K.Deferred()),
            "complete" === J.readyState
              ? setTimeout(K.ready)
              : (J.addEventListener("DOMContentLoaded", s, !1),
                t.addEventListener("load", s, !1))),
          gt.promise(e)
        );
      }),
      K.ready.promise();
    var vt = (K.access = function (t, e, n, r, i, o, s) {
      var a = 0,
        l = t.length,
        c = null == n;
      if ("object" === K.type(n)) {
        i = !0;
        for (a in n) K.access(t, e, a, n[a], !0, o, s);
      } else if (
        void 0 !== r &&
        ((i = !0),
        K.isFunction(r) || (s = !0),
        c &&
          (s
            ? (e.call(t, r), (e = null))
            : ((c = e),
              (e = function (t, e, n) {
                return c.call(K(t), n);
              }))),
        e)
      )
        for (; l > a; a++) e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
      return i ? t : c ? e.call(t) : l ? e(t[0], n) : o;
    });
    (K.acceptData = function (t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    }),
      (a.uid = 1),
      (a.accepts = K.acceptData),
      (a.prototype = {
        key: function (t) {
          if (!a.accepts(t)) return 0;
          var e = {},
            n = t[this.expando];
          if (!n) {
            n = a.uid++;
            try {
              (e[this.expando] = { value: n }), Object.defineProperties(t, e);
            } catch (r) {
              (e[this.expando] = n), K.extend(t, e);
            }
          }
          return this.cache[n] || (this.cache[n] = {}), n;
        },
        set: function (t, e, n) {
          var r,
            i = this.key(t),
            o = this.cache[i];
          if ("string" == typeof e) o[e] = n;
          else if (K.isEmptyObject(o)) K.extend(this.cache[i], e);
          else for (r in e) o[r] = e[r];
          return o;
        },
        get: function (t, e) {
          var n = this.cache[this.key(t)];
          return void 0 === e ? n : n[e];
        },
        access: function (t, e, n) {
          var r;
          return void 0 === e || (e && "string" == typeof e && void 0 === n)
            ? ((r = this.get(t, e)),
              void 0 !== r ? r : this.get(t, K.camelCase(e)))
            : (this.set(t, e, n), void 0 !== n ? n : e);
        },
        remove: function (t, e) {
          var n,
            r,
            i,
            o = this.key(t),
            s = this.cache[o];
          if (void 0 === e) this.cache[o] = {};
          else {
            K.isArray(e)
              ? (r = e.concat(e.map(K.camelCase)))
              : ((i = K.camelCase(e)),
                e in s
                  ? (r = [e, i])
                  : ((r = i), (r = r in s ? [r] : r.match(dt) || []))),
              (n = r.length);
            for (; n--; ) delete s[r[n]];
          }
        },
        hasData: function (t) {
          return !K.isEmptyObject(this.cache[t[this.expando]] || {});
        },
        discard: function (t) {
          t[this.expando] && delete this.cache[t[this.expando]];
        },
      });
    var mt = new a(),
      yt = new a(),
      bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      wt = /([A-Z])/g;
    K.extend({
      hasData: function (t) {
        return yt.hasData(t) || mt.hasData(t);
      },
      data: function (t, e, n) {
        return yt.access(t, e, n);
      },
      removeData: function (t, e) {
        yt.remove(t, e);
      },
      _data: function (t, e, n) {
        return mt.access(t, e, n);
      },
      _removeData: function (t, e) {
        mt.remove(t, e);
      },
    }),
      K.fn.extend({
        data: function (t, e) {
          var n,
            r,
            i,
            o = this[0],
            s = o && o.attributes;
          if (void 0 === t) {
            if (
              this.length &&
              ((i = yt.get(o)), 1 === o.nodeType && !mt.get(o, "hasDataAttrs"))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  ((r = s[n].name),
                  0 === r.indexOf("data-") &&
                    ((r = K.camelCase(r.slice(5))), l(o, r, i[r])));
              mt.set(o, "hasDataAttrs", !0);
            }
            return i;
          }
          return "object" == typeof t
            ? this.each(function () {
                yt.set(this, t);
              })
            : vt(
                this,
                function (e) {
                  var n,
                    r = K.camelCase(t);
                  if (o && void 0 === e) {
                    if (((n = yt.get(o, t)), void 0 !== n)) return n;
                    if (((n = yt.get(o, r)), void 0 !== n)) return n;
                    if (((n = l(o, r, void 0)), void 0 !== n)) return n;
                  } else
                    this.each(function () {
                      var n = yt.get(this, r);
                      yt.set(this, r, e),
                        -1 !== t.indexOf("-") &&
                          void 0 !== n &&
                          yt.set(this, t, e);
                    });
                },
                null,
                e,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (t) {
          return this.each(function () {
            yt.remove(this, t);
          });
        },
      }),
      K.extend({
        queue: function (t, e, n) {
          var r;
          return t
            ? ((e = (e || "fx") + "queue"),
              (r = mt.get(t, e)),
              n &&
                (!r || K.isArray(n)
                  ? (r = mt.access(t, e, K.makeArray(n)))
                  : r.push(n)),
              r || [])
            : void 0;
        },
        dequeue: function (t, e) {
          e = e || "fx";
          var n = K.queue(t, e),
            r = n.length,
            i = n.shift(),
            o = K._queueHooks(t, e),
            s = function () {
              K.dequeue(t, e);
            };
          "inprogress" === i && ((i = n.shift()), r--),
            i &&
              ("fx" === e && n.unshift("inprogress"),
              delete o.stop,
              i.call(t, s, o)),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (t, e) {
          var n = e + "queueHooks";
          return (
            mt.get(t, n) ||
            mt.access(t, n, {
              empty: K.Callbacks("once memory").add(function () {
                mt.remove(t, [e + "queue", n]);
              }),
            })
          );
        },
      }),
      K.fn.extend({
        queue: function (t, e) {
          var n = 2;
          return (
            "string" != typeof t && ((e = t), (t = "fx"), n--),
            arguments.length < n
              ? K.queue(this[0], t)
              : void 0 === e
              ? this
              : this.each(function () {
                  var n = K.queue(this, t, e);
                  K._queueHooks(this, t),
                    "fx" === t && "inprogress" !== n[0] && K.dequeue(this, t);
                })
          );
        },
        dequeue: function (t) {
          return this.each(function () {
            K.dequeue(this, t);
          });
        },
        clearQueue: function (t) {
          return this.queue(t || "fx", []);
        },
        promise: function (t, e) {
          var n,
            r = 1,
            i = K.Deferred(),
            o = this,
            s = this.length,
            a = function () {
              --r || i.resolveWith(o, [o]);
            };
          for (
            "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
            s--;

          )
            (n = mt.get(o[s], t + "queueHooks")),
              n && n.empty && (r++, n.empty.add(a));
          return a(), i.promise(e);
        },
      });
    var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Tt = ["Top", "Right", "Bottom", "Left"],
      Ct = function (t, e) {
        return (
          (t = e || t),
          "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
        );
      },
      St = /^(?:checkbox|radio)$/i;
    !(function () {
      var t = J.createDocumentFragment(),
        e = t.appendChild(J.createElement("div")),
        n = J.createElement("input");
      n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        (Y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (e.innerHTML = "<textarea>x</textarea>"),
        (Y.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var kt = "undefined";
    Y.focusinBubbles = "onfocusin" in t;
    var Et = /^key/,
      At = /^(?:mouse|pointer|contextmenu)|click/,
      _t = /^(?:focusinfocus|focusoutblur)$/,
      $t = /^([^.]*)(?:\.(.+)|)$/;
    (K.event = {
      global: {},
      add: function (t, e, n, r, i) {
        var o,
          s,
          a,
          l,
          c,
          u,
          p,
          h,
          d,
          f,
          g,
          v = mt.get(t);
        if (v)
          for (
            n.handler && ((o = n), (n = o.handler), (i = o.selector)),
              n.guid || (n.guid = K.guid++),
              (l = v.events) || (l = v.events = {}),
              (s = v.handle) ||
                (s = v.handle =
                  function (e) {
                    return typeof K !== kt && K.event.triggered !== e.type
                      ? K.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
              e = (e || "").match(dt) || [""],
              c = e.length;
            c--;

          )
            (a = $t.exec(e[c]) || []),
              (d = g = a[1]),
              (f = (a[2] || "").split(".").sort()),
              d &&
                ((p = K.event.special[d] || {}),
                (d = (i ? p.delegateType : p.bindType) || d),
                (p = K.event.special[d] || {}),
                (u = K.extend(
                  {
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && K.expr.match.needsContext.test(i),
                    namespace: f.join("."),
                  },
                  o
                )),
                (h = l[d]) ||
                  ((h = l[d] = []),
                  (h.delegateCount = 0),
                  (p.setup && p.setup.call(t, r, f, s) !== !1) ||
                    (t.addEventListener && t.addEventListener(d, s, !1))),
                p.add &&
                  (p.add.call(t, u),
                  u.handler.guid || (u.handler.guid = n.guid)),
                i ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                (K.event.global[d] = !0));
      },
      remove: function (t, e, n, r, i) {
        var o,
          s,
          a,
          l,
          c,
          u,
          p,
          h,
          d,
          f,
          g,
          v = mt.hasData(t) && mt.get(t);
        if (v && (l = v.events)) {
          for (e = (e || "").match(dt) || [""], c = e.length; c--; )
            if (
              ((a = $t.exec(e[c]) || []),
              (d = g = a[1]),
              (f = (a[2] || "").split(".").sort()),
              d)
            ) {
              for (
                p = K.event.special[d] || {},
                  d = (r ? p.delegateType : p.bindType) || d,
                  h = l[d] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  s = o = h.length;
                o--;

              )
                (u = h[o]),
                  (!i && g !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (a && !a.test(u.namespace)) ||
                    (r && r !== u.selector && ("**" !== r || !u.selector)) ||
                    (h.splice(o, 1),
                    u.selector && h.delegateCount--,
                    p.remove && p.remove.call(t, u));
              s &&
                !h.length &&
                ((p.teardown && p.teardown.call(t, f, v.handle) !== !1) ||
                  K.removeEvent(t, d, v.handle),
                delete l[d]);
            } else for (d in l) K.event.remove(t, d + e[c], n, r, !0);
          K.isEmptyObject(l) && (delete v.handle, mt.remove(t, "events"));
        }
      },
      trigger: function (e, n, r, i) {
        var o,
          s,
          a,
          l,
          c,
          u,
          p,
          h = [r || J],
          d = G.call(e, "type") ? e.type : e,
          f = G.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((s = a = r = r || J),
          3 !== r.nodeType &&
            8 !== r.nodeType &&
            !_t.test(d + K.event.triggered) &&
            (d.indexOf(".") >= 0 &&
              ((f = d.split(".")), (d = f.shift()), f.sort()),
            (c = d.indexOf(":") < 0 && "on" + d),
            (e = e[K.expando] ? e : new K.Event(d, "object" == typeof e && e)),
            (e.isTrigger = i ? 2 : 3),
            (e.namespace = f.join(".")),
            (e.namespace_re = e.namespace
              ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = r),
            (n = null == n ? [e] : K.makeArray(n, [e])),
            (p = K.event.special[d] || {}),
            i || !p.trigger || p.trigger.apply(r, n) !== !1))
        ) {
          if (!i && !p.noBubble && !K.isWindow(r)) {
            for (
              l = p.delegateType || d, _t.test(l + d) || (s = s.parentNode);
              s;
              s = s.parentNode
            )
              h.push(s), (a = s);
            a === (r.ownerDocument || J) &&
              h.push(a.defaultView || a.parentWindow || t);
          }
          for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
            (e.type = o > 1 ? l : p.bindType || d),
              (u = (mt.get(s, "events") || {})[e.type] && mt.get(s, "handle")),
              u && u.apply(s, n),
              (u = c && s[c]),
              u &&
                u.apply &&
                K.acceptData(s) &&
                ((e.result = u.apply(s, n)),
                e.result === !1 && e.preventDefault());
          return (
            (e.type = d),
            i ||
              e.isDefaultPrevented() ||
              (p._default && p._default.apply(h.pop(), n) !== !1) ||
              !K.acceptData(r) ||
              (c &&
                K.isFunction(r[d]) &&
                !K.isWindow(r) &&
                ((a = r[c]),
                a && (r[c] = null),
                (K.event.triggered = d),
                r[d](),
                (K.event.triggered = void 0),
                a && (r[c] = a))),
            e.result
          );
        }
      },
      dispatch: function (t) {
        t = K.event.fix(t);
        var e,
          n,
          r,
          i,
          o,
          s = [],
          a = B.call(arguments),
          l = (mt.get(this, "events") || {})[t.type] || [],
          c = K.event.special[t.type] || {};
        if (
          ((a[0] = t),
          (t.delegateTarget = this),
          !c.preDispatch || c.preDispatch.call(this, t) !== !1)
        ) {
          for (
            s = K.event.handlers.call(this, t, l), e = 0;
            (i = s[e++]) && !t.isPropagationStopped();

          )
            for (
              t.currentTarget = i.elem, n = 0;
              (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();

            )
              (!t.namespace_re || t.namespace_re.test(o.namespace)) &&
                ((t.handleObj = o),
                (t.data = o.data),
                (r = (
                  (K.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, a)),
                void 0 !== r &&
                  (t.result = r) === !1 &&
                  (t.preventDefault(), t.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, t), t.result;
        }
      },
      handlers: function (t, e) {
        var n,
          r,
          i,
          o,
          s = [],
          a = e.delegateCount,
          l = t.target;
        if (a && l.nodeType && (!t.button || "click" !== t.type))
          for (; l !== this; l = l.parentNode || this)
            if (l.disabled !== !0 || "click" !== t.type) {
              for (r = [], n = 0; a > n; n++)
                (o = e[n]),
                  (i = o.selector + " "),
                  void 0 === r[i] &&
                    (r[i] = o.needsContext
                      ? K(i, this).index(l) >= 0
                      : K.find(i, this, null, [l]).length),
                  r[i] && r.push(o);
              r.length && s.push({ elem: l, handlers: r });
            }
        return a < e.length && s.push({ elem: this, handlers: e.slice(a) }), s;
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (t, e) {
          return (
            null == t.which &&
              (t.which = null != e.charCode ? e.charCode : e.keyCode),
            t
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (t, e) {
          var n,
            r,
            i,
            o = e.button;
          return (
            null == t.pageX &&
              null != e.clientX &&
              ((n = t.target.ownerDocument || J),
              (r = n.documentElement),
              (i = n.body),
              (t.pageX =
                e.clientX +
                ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
                ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
              (t.pageY =
                e.clientY +
                ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
                ((r && r.clientTop) || (i && i.clientTop) || 0))),
            t.which ||
              void 0 === o ||
              (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
            t
          );
        },
      },
      fix: function (t) {
        if (t[K.expando]) return t;
        var e,
          n,
          r,
          i = t.type,
          o = t,
          s = this.fixHooks[i];
        for (
          s ||
            (this.fixHooks[i] = s =
              At.test(i) ? this.mouseHooks : Et.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            t = new K.Event(o),
            e = r.length;
          e--;

        )
          (n = r[e]), (t[n] = o[n]);
        return (
          t.target || (t.target = J),
          3 === t.target.nodeType && (t.target = t.target.parentNode),
          s.filter ? s.filter(t, o) : t
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            return this !== p() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === p() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type &&
              this.click &&
              K.nodeName(this, "input")
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (t) {
            return K.nodeName(t.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result &&
              t.originalEvent &&
              (t.originalEvent.returnValue = t.result);
          },
        },
      },
      simulate: function (t, e, n, r) {
        var i = K.extend(new K.Event(), n, {
          type: t,
          isSimulated: !0,
          originalEvent: {},
        });
        r ? K.event.trigger(i, null, e) : K.event.dispatch.call(e, i),
          i.isDefaultPrevented() && n.preventDefault();
      },
    }),
      (K.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1);
      }),
      (K.Event = function (t, e) {
        return this instanceof K.Event
          ? (t && t.type
              ? ((this.originalEvent = t),
                (this.type = t.type),
                (this.isDefaultPrevented =
                  t.defaultPrevented ||
                  (void 0 === t.defaultPrevented && t.returnValue === !1)
                    ? c
                    : u))
              : (this.type = t),
            e && K.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || K.now()),
            void (this[K.expando] = !0))
          : new K.Event(t, e);
      }),
      (K.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
          var t = this.originalEvent;
          (this.isDefaultPrevented = c),
            t && t.preventDefault && t.preventDefault();
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          (this.isPropagationStopped = c),
            t && t.stopPropagation && t.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          (this.isImmediatePropagationStopped = c),
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      K.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (t, e) {
          K.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
              var n,
                r = this,
                i = t.relatedTarget,
                o = t.handleObj;
              return (
                (!i || (i !== r && !K.contains(r, i))) &&
                  ((t.type = o.origType),
                  (n = o.handler.apply(this, arguments)),
                  (t.type = e)),
                n
              );
            },
          };
        }
      ),
      Y.focusinBubbles ||
        K.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          var n = function (t) {
            K.event.simulate(e, t.target, K.event.fix(t), !0);
          };
          K.event.special[e] = {
            setup: function () {
              var r = this.ownerDocument || this,
                i = mt.access(r, e);
              i || r.addEventListener(t, n, !0), mt.access(r, e, (i || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this,
                i = mt.access(r, e) - 1;
              i
                ? mt.access(r, e, i)
                : (r.removeEventListener(t, n, !0), mt.remove(r, e));
            },
          };
        }),
      K.fn.extend({
        on: function (t, e, n, r, i) {
          var o, s;
          if ("object" == typeof t) {
            "string" != typeof e && ((n = n || e), (e = void 0));
            for (s in t) this.on(s, e, n, t[s], i);
            return this;
          }
          if (
            (null == n && null == r
              ? ((r = e), (n = e = void 0))
              : null == r &&
                ("string" == typeof e
                  ? ((r = n), (n = void 0))
                  : ((r = n), (n = e), (e = void 0))),
            r === !1)
          )
            r = u;
          else if (!r) return this;
          return (
            1 === i &&
              ((o = r),
              (r = function (t) {
                return K().off(t), o.apply(this, arguments);
              }),
              (r.guid = o.guid || (o.guid = K.guid++))),
            this.each(function () {
              K.event.add(this, t, r, n, e);
            })
          );
        },
        one: function (t, e, n, r) {
          return this.on(t, e, n, r, 1);
        },
        off: function (t, e, n) {
          var r, i;
          if (t && t.preventDefault && t.handleObj)
            return (
              (r = t.handleObj),
              K(t.delegateTarget).off(
                r.namespace ? r.origType + "." + r.namespace : r.origType,
                r.selector,
                r.handler
              ),
              this
            );
          if ("object" == typeof t) {
            for (i in t) this.off(i, e, t[i]);
            return this;
          }
          return (
            (e === !1 || "function" == typeof e) && ((n = e), (e = void 0)),
            n === !1 && (n = u),
            this.each(function () {
              K.event.remove(this, t, n, e);
            })
          );
        },
        trigger: function (t, e) {
          return this.each(function () {
            K.event.trigger(t, e, this);
          });
        },
        triggerHandler: function (t, e) {
          var n = this[0];
          return n ? K.event.trigger(t, e, n, !0) : void 0;
        },
      });
    var Nt =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Dt = /<([\w:]+)/,
      jt = /<|&#?\w+;/,
      It = /<(?:script|style|link)/i,
      qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ot = /^$|\/(?:java|ecma)script/i,
      Rt = /^true\/(.*)/,
      Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Lt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (Lt.optgroup = Lt.option),
      (Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead),
      (Lt.th = Lt.td),
      K.extend({
        clone: function (t, e, n) {
          var r,
            i,
            o,
            s,
            a = t.cloneNode(!0),
            l = K.contains(t.ownerDocument, t);
          if (
            !(
              Y.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              K.isXMLDoc(t)
            )
          )
            for (s = m(a), o = m(t), r = 0, i = o.length; i > r; r++)
              y(o[r], s[r]);
          if (e)
            if (n)
              for (
                o = o || m(t), s = s || m(a), r = 0, i = o.length;
                i > r;
                r++
              )
                v(o[r], s[r]);
            else v(t, a);
          return (
            (s = m(a, "script")), s.length > 0 && g(s, !l && m(t, "script")), a
          );
        },
        buildFragment: function (t, e, n, r) {
          for (
            var i,
              o,
              s,
              a,
              l,
              c,
              u = e.createDocumentFragment(),
              p = [],
              h = 0,
              d = t.length;
            d > h;
            h++
          )
            if (((i = t[h]), i || 0 === i))
              if ("object" === K.type(i)) K.merge(p, i.nodeType ? [i] : i);
              else if (jt.test(i)) {
                for (
                  o = o || u.appendChild(e.createElement("div")),
                    s = (Dt.exec(i) || ["", ""])[1].toLowerCase(),
                    a = Lt[s] || Lt._default,
                    o.innerHTML = a[1] + i.replace(Nt, "<$1></$2>") + a[2],
                    c = a[0];
                  c--;

                )
                  o = o.lastChild;
                K.merge(p, o.childNodes),
                  (o = u.firstChild),
                  (o.textContent = "");
              } else p.push(e.createTextNode(i));
          for (u.textContent = "", h = 0; (i = p[h++]); )
            if (
              (!r || -1 === K.inArray(i, r)) &&
              ((l = K.contains(i.ownerDocument, i)),
              (o = m(u.appendChild(i), "script")),
              l && g(o),
              n)
            )
              for (c = 0; (i = o[c++]); ) Ot.test(i.type || "") && n.push(i);
          return u;
        },
        cleanData: function (t) {
          for (
            var e, n, r, i, o = K.event.special, s = 0;
            void 0 !== (n = t[s]);
            s++
          ) {
            if (
              K.acceptData(n) &&
              ((i = n[mt.expando]), i && (e = mt.cache[i]))
            ) {
              if (e.events)
                for (r in e.events)
                  o[r] ? K.event.remove(n, r) : K.removeEvent(n, r, e.handle);
              mt.cache[i] && delete mt.cache[i];
            }
            delete yt.cache[n[yt.expando]];
          }
        },
      }),
      K.fn.extend({
        text: function (t) {
          return vt(
            this,
            function (t) {
              return void 0 === t
                ? K.text(this)
                : this.empty().each(function () {
                    (1 === this.nodeType ||
                      11 === this.nodeType ||
                      9 === this.nodeType) &&
                      (this.textContent = t);
                  });
            },
            null,
            t,
            arguments.length
          );
        },
        append: function () {
          return this.domManip(arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = h(this, t);
              e.appendChild(t);
            }
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (t) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var e = h(this, t);
              e.insertBefore(t, e.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (t) {
            this.parentNode &&
              this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        remove: function (t, e) {
          for (
            var n, r = t ? K.filter(t, this) : this, i = 0;
            null != (n = r[i]);
            i++
          )
            e || 1 !== n.nodeType || K.cleanData(m(n)),
              n.parentNode &&
                (e && K.contains(n.ownerDocument, n) && g(m(n, "script")),
                n.parentNode.removeChild(n));
          return this;
        },
        empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++)
            1 === t.nodeType && (K.cleanData(m(t, !1)), (t.textContent = ""));
          return this;
        },
        clone: function (t, e) {
          return (
            (t = null != t && t),
            (e = null == e ? t : e),
            this.map(function () {
              return K.clone(this, t, e);
            })
          );
        },
        html: function (t) {
          return vt(
            this,
            function (t) {
              var e = this[0] || {},
                n = 0,
                r = this.length;
              if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
              if (
                "string" == typeof t &&
                !It.test(t) &&
                !Lt[(Dt.exec(t) || ["", ""])[1].toLowerCase()]
              ) {
                t = t.replace(Nt, "<$1></$2>");
                try {
                  for (; r > n; n++)
                    (e = this[n] || {}),
                      1 === e.nodeType &&
                        (K.cleanData(m(e, !1)), (e.innerHTML = t));
                  e = 0;
                } catch (i) {}
              }
              e && this.empty().append(t);
            },
            null,
            t,
            arguments.length
          );
        },
        replaceWith: function () {
          var t = arguments[0];
          return (
            this.domManip(arguments, function (e) {
              (t = this.parentNode),
                K.cleanData(m(this)),
                t && t.replaceChild(e, this);
            }),
            t && (t.length || t.nodeType) ? this : this.remove()
          );
        },
        detach: function (t) {
          return this.remove(t, !0);
        },
        domManip: function (t, e) {
          t = M.apply([], t);
          var n,
            r,
            i,
            o,
            s,
            a,
            l = 0,
            c = this.length,
            u = this,
            p = c - 1,
            h = t[0],
            g = K.isFunction(h);
          if (
            g ||
            (c > 1 && "string" == typeof h && !Y.checkClone && qt.test(h))
          )
            return this.each(function (n) {
              var r = u.eq(n);
              g && (t[0] = h.call(this, n, r.html())), r.domManip(t, e);
            });
          if (
            c &&
            ((n = K.buildFragment(t, this[0].ownerDocument, !1, this)),
            (r = n.firstChild),
            1 === n.childNodes.length && (n = r),
            r)
          ) {
            for (i = K.map(m(n, "script"), d), o = i.length; c > l; l++)
              (s = n),
                l !== p &&
                  ((s = K.clone(s, !0, !0)), o && K.merge(i, m(s, "script"))),
                e.call(this[l], s, l);
            if (o)
              for (
                a = i[i.length - 1].ownerDocument, K.map(i, f), l = 0;
                o > l;
                l++
              )
                (s = i[l]),
                  Ot.test(s.type || "") &&
                    !mt.access(s, "globalEval") &&
                    K.contains(a, s) &&
                    (s.src
                      ? K._evalUrl && K._evalUrl(s.src)
                      : K.globalEval(s.textContent.replace(Pt, "")));
          }
          return this;
        },
      }),
      K.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (t, e) {
          K.fn[t] = function (t) {
            for (var n, r = [], i = K(t), o = i.length - 1, s = 0; o >= s; s++)
              (n = s === o ? this : this.clone(!0)),
                K(i[s])[e](n),
                W.apply(r, n.get());
            return this.pushStack(r);
          };
        }
      );
    var Ht,
      Ft = {},
      Ut = /^margin/,
      Qt = new RegExp("^(" + xt + ")(?!px)[a-z%]+$", "i"),
      Bt = function (e) {
        return e.ownerDocument.defaultView.opener
          ? e.ownerDocument.defaultView.getComputedStyle(e, null)
          : t.getComputedStyle(e, null);
      };
    !(function () {
      function e() {
        (s.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (s.innerHTML = ""),
          i.appendChild(o);
        var e = t.getComputedStyle(s, null);
        (n = "1%" !== e.top), (r = "4px" === e.width), i.removeChild(o);
      }
      var n,
        r,
        i = J.documentElement,
        o = J.createElement("div"),
        s = J.createElement("div");
      s.style &&
        ((s.style.backgroundClip = "content-box"),
        (s.cloneNode(!0).style.backgroundClip = ""),
        (Y.clearCloneStyle = "content-box" === s.style.backgroundClip),
        (o.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        o.appendChild(s),
        t.getComputedStyle &&
          K.extend(Y, {
            pixelPosition: function () {
              return e(), n;
            },
            boxSizingReliable: function () {
              return null == r && e(), r;
            },
            reliableMarginRight: function () {
              var e,
                n = s.appendChild(J.createElement("div"));
              return (
                (n.style.cssText = s.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                (n.style.marginRight = n.style.width = "0"),
                (s.style.width = "1px"),
                i.appendChild(o),
                (e = !parseFloat(t.getComputedStyle(n, null).marginRight)),
                i.removeChild(o),
                s.removeChild(n),
                e
              );
            },
          }));
    })(),
      (K.swap = function (t, e, n, r) {
        var i,
          o,
          s = {};
        for (o in e) (s[o] = t.style[o]), (t.style[o] = e[o]);
        i = n.apply(t, r || []);
        for (o in e) t.style[o] = s[o];
        return i;
      });
    var Mt = /^(none|table(?!-c[ea]).+)/,
      Wt = new RegExp("^(" + xt + ")(.*)$", "i"),
      zt = new RegExp("^([+-])=(" + xt + ")", "i"),
      Vt = { position: "absolute", visibility: "hidden", display: "block" },
      Xt = { letterSpacing: "0", fontWeight: "400" },
      Gt = ["Webkit", "O", "Moz", "ms"];
    K.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = x(t, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (t, e, n, r) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var i,
            o,
            s,
            a = K.camelCase(e),
            l = t.style;
          return (
            (e = K.cssProps[a] || (K.cssProps[a] = C(l, a))),
            (s = K.cssHooks[e] || K.cssHooks[a]),
            void 0 === n
              ? s && "get" in s && void 0 !== (i = s.get(t, !1, r))
                ? i
                : l[e]
              : ((o = typeof n),
                "string" === o &&
                  (i = zt.exec(n)) &&
                  ((n = (i[1] + 1) * i[2] + parseFloat(K.css(t, e))),
                  (o = "number")),
                void (
                  null != n &&
                  n === n &&
                  ("number" !== o || K.cssNumber[a] || (n += "px"),
                  Y.clearCloneStyle ||
                    "" !== n ||
                    0 !== e.indexOf("background") ||
                    (l[e] = "inherit"),
                  (s && "set" in s && void 0 === (n = s.set(t, n, r))) ||
                    (l[e] = n))
                ))
          );
        }
      },
      css: function (t, e, n, r) {
        var i,
          o,
          s,
          a = K.camelCase(e);
        return (
          (e = K.cssProps[a] || (K.cssProps[a] = C(t.style, a))),
          (s = K.cssHooks[e] || K.cssHooks[a]),
          s && "get" in s && (i = s.get(t, !0, n)),
          void 0 === i && (i = x(t, e, r)),
          "normal" === i && e in Xt && (i = Xt[e]),
          "" === n || n
            ? ((o = parseFloat(i)), n === !0 || K.isNumeric(o) ? o || 0 : i)
            : i
        );
      },
    }),
      K.each(["height", "width"], function (t, e) {
        K.cssHooks[e] = {
          get: function (t, n, r) {
            return n
              ? Mt.test(K.css(t, "display")) && 0 === t.offsetWidth
                ? K.swap(t, Vt, function () {
                    return E(t, e, r);
                  })
                : E(t, e, r)
              : void 0;
          },
          set: function (t, n, r) {
            var i = r && Bt(t);
            return S(
              t,
              n,
              r
                ? k(t, e, r, "border-box" === K.css(t, "boxSizing", !1, i), i)
                : 0
            );
          },
        };
      }),
      (K.cssHooks.marginRight = T(Y.reliableMarginRight, function (t, e) {
        return e
          ? K.swap(t, { display: "inline-block" }, x, [t, "marginRight"])
          : void 0;
      })),
      K.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
        (K.cssHooks[t + e] = {
          expand: function (n) {
            for (
              var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
              4 > r;
              r++
            )
              i[t + Tt[r] + e] = o[r] || o[r - 2] || o[0];
            return i;
          },
        }),
          Ut.test(t) || (K.cssHooks[t + e].set = S);
      }),
      K.fn.extend({
        css: function (t, e) {
          return vt(
            this,
            function (t, e, n) {
              var r,
                i,
                o = {},
                s = 0;
              if (K.isArray(e)) {
                for (r = Bt(t), i = e.length; i > s; s++)
                  o[e[s]] = K.css(t, e[s], !1, r);
                return o;
              }
              return void 0 !== n ? K.style(t, e, n) : K.css(t, e);
            },
            t,
            e,
            arguments.length > 1
          );
        },
        show: function () {
          return A(this, !0);
        },
        hide: function () {
          return A(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                Ct(this) ? K(this).show() : K(this).hide();
              });
        },
      }),
      (K.Tween = _),
      (_.prototype = {
        constructor: _,
        init: function (t, e, n, r, i, o) {
          (this.elem = t),
            (this.prop = n),
            (this.easing = i || "swing"),
            (this.options = e),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (K.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var t = _.propHooks[this.prop];
          return t && t.get ? t.get(this) : _.propHooks._default.get(this);
        },
        run: function (t) {
          var e,
            n = _.propHooks[this.prop];
          return (
            (this.pos = e =
              this.options.duration
                ? K.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  )
                : t),
            (this.now = (this.end - this.start) * e + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : _.propHooks._default.set(this),
            this
          );
        },
      }),
      (_.prototype.init.prototype = _.prototype),
      (_.propHooks = {
        _default: {
          get: function (t) {
            var e;
            return null == t.elem[t.prop] ||
              (t.elem.style && null != t.elem.style[t.prop])
              ? ((e = K.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0)
              : t.elem[t.prop];
          },
          set: function (t) {
            K.fx.step[t.prop]
              ? K.fx.step[t.prop](t)
              : t.elem.style &&
                (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop])
              ? K.style(t.elem, t.prop, t.now + t.unit)
              : (t.elem[t.prop] = t.now);
          },
        },
      }),
      (_.propHooks.scrollTop = _.propHooks.scrollLeft =
        {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
      (K.easing = {
        linear: function (t) {
          return t;
        },
        swing: function (t) {
          return 0.5 - Math.cos(t * Math.PI) / 2;
        },
      }),
      (K.fx = _.prototype.init),
      (K.fx.step = {});
    var Yt,
      Jt,
      Zt = /^(?:toggle|show|hide)$/,
      Kt = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$", "i"),
      te = /queueHooks$/,
      ee = [j],
      ne = {
        "*": [
          function (t, e) {
            var n = this.createTween(t, e),
              r = n.cur(),
              i = Kt.exec(e),
              o = (i && i[3]) || (K.cssNumber[t] ? "" : "px"),
              s =
                (K.cssNumber[t] || ("px" !== o && +r)) &&
                Kt.exec(K.css(n.elem, t)),
              a = 1,
              l = 20;
            if (s && s[3] !== o) {
              (o = o || s[3]), (i = i || []), (s = +r || 1);
              do (a = a || ".5"), (s /= a), K.style(n.elem, t, s + o);
              while (a !== (a = n.cur() / r) && 1 !== a && --l);
            }
            return (
              i &&
                ((s = n.start = +s || +r || 0),
                (n.unit = o),
                (n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2])),
              n
            );
          },
        ],
      };
    (K.Animation = K.extend(q, {
      tweener: function (t, e) {
        K.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
        for (var n, r = 0, i = t.length; i > r; r++)
          (n = t[r]), (ne[n] = ne[n] || []), ne[n].unshift(e);
      },
      prefilter: function (t, e) {
        e ? ee.unshift(t) : ee.push(t);
      },
    })),
      (K.speed = function (t, e, n) {
        var r =
          t && "object" == typeof t
            ? K.extend({}, t)
            : {
                complete: n || (!n && e) || (K.isFunction(t) && t),
                duration: t,
                easing: (n && e) || (e && !K.isFunction(e) && e),
              };
        return (
          (r.duration = K.fx.off
            ? 0
            : "number" == typeof r.duration
            ? r.duration
            : r.duration in K.fx.speeds
            ? K.fx.speeds[r.duration]
            : K.fx.speeds._default),
          (null == r.queue || r.queue === !0) && (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            K.isFunction(r.old) && r.old.call(this),
              r.queue && K.dequeue(this, r.queue);
          }),
          r
        );
      }),
      K.fn.extend({
        fadeTo: function (t, e, n, r) {
          return this.filter(Ct)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: e }, t, n, r);
        },
        animate: function (t, e, n, r) {
          var i = K.isEmptyObject(t),
            o = K.speed(e, n, r),
            s = function () {
              var e = q(this, K.extend({}, t), o);
              (i || mt.get(this, "finish")) && e.stop(!0);
            };
          return (
            (s.finish = s),
            i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
          );
        },
        stop: function (t, e, n) {
          var r = function (t) {
            var e = t.stop;
            delete t.stop, e(n);
          };
          return (
            "string" != typeof t && ((n = e), (e = t), (t = void 0)),
            e && t !== !1 && this.queue(t || "fx", []),
            this.each(function () {
              var e = !0,
                i = null != t && t + "queueHooks",
                o = K.timers,
                s = mt.get(this);
              if (i) s[i] && s[i].stop && r(s[i]);
              else for (i in s) s[i] && s[i].stop && te.test(i) && r(s[i]);
              for (i = o.length; i--; )
                o[i].elem !== this ||
                  (null != t && o[i].queue !== t) ||
                  (o[i].anim.stop(n), (e = !1), o.splice(i, 1));
              (e || !n) && K.dequeue(this, t);
            })
          );
        },
        finish: function (t) {
          return (
            t !== !1 && (t = t || "fx"),
            this.each(function () {
              var e,
                n = mt.get(this),
                r = n[t + "queue"],
                i = n[t + "queueHooks"],
                o = K.timers,
                s = r ? r.length : 0;
              for (
                n.finish = !0,
                  K.queue(this, t, []),
                  i && i.stop && i.stop.call(this, !0),
                  e = o.length;
                e--;

              )
                o[e].elem === this &&
                  o[e].queue === t &&
                  (o[e].anim.stop(!0), o.splice(e, 1));
              for (e = 0; s > e; e++)
                r[e] && r[e].finish && r[e].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      K.each(["toggle", "show", "hide"], function (t, e) {
        var n = K.fn[e];
        K.fn[e] = function (t, r, i) {
          return null == t || "boolean" == typeof t
            ? n.apply(this, arguments)
            : this.animate(N(e, !0), t, r, i);
        };
      }),
      K.each(
        {
          slideDown: N("show"),
          slideUp: N("hide"),
          slideToggle: N("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (t, e) {
          K.fn[t] = function (t, n, r) {
            return this.animate(e, t, n, r);
          };
        }
      ),
      (K.timers = []),
      (K.fx.tick = function () {
        var t,
          e = 0,
          n = K.timers;
        for (Yt = K.now(); e < n.length; e++)
          (t = n[e]), t() || n[e] !== t || n.splice(e--, 1);
        n.length || K.fx.stop(), (Yt = void 0);
      }),
      (K.fx.timer = function (t) {
        K.timers.push(t), t() ? K.fx.start() : K.timers.pop();
      }),
      (K.fx.interval = 13),
      (K.fx.start = function () {
        Jt || (Jt = setInterval(K.fx.tick, K.fx.interval));
      }),
      (K.fx.stop = function () {
        clearInterval(Jt), (Jt = null);
      }),
      (K.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (K.fn.delay = function (t, e) {
        return (
          (t = K.fx ? K.fx.speeds[t] || t : t),
          (e = e || "fx"),
          this.queue(e, function (e, n) {
            var r = setTimeout(e, t);
            n.stop = function () {
              clearTimeout(r);
            };
          })
        );
      }),
      (function () {
        var t = J.createElement("input"),
          e = J.createElement("select"),
          n = e.appendChild(J.createElement("option"));
        (t.type = "checkbox"),
          (Y.checkOn = "" !== t.value),
          (Y.optSelected = n.selected),
          (e.disabled = !0),
          (Y.optDisabled = !n.disabled),
          (t = J.createElement("input")),
          (t.value = "t"),
          (t.type = "radio"),
          (Y.radioValue = "t" === t.value);
      })();
    var re,
      ie,
      oe = K.expr.attrHandle;
    K.fn.extend({
      attr: function (t, e) {
        return vt(this, K.attr, t, e, arguments.length > 1);
      },
      removeAttr: function (t) {
        return this.each(function () {
          K.removeAttr(this, t);
        });
      },
    }),
      K.extend({
        attr: function (t, e, n) {
          var r,
            i,
            o = t.nodeType;
          if (t && 3 !== o && 8 !== o && 2 !== o)
            return typeof t.getAttribute === kt
              ? K.prop(t, e, n)
              : ((1 === o && K.isXMLDoc(t)) ||
                  ((e = e.toLowerCase()),
                  (r =
                    K.attrHooks[e] || (K.expr.match.bool.test(e) ? ie : re))),
                void 0 === n
                  ? r && "get" in r && null !== (i = r.get(t, e))
                    ? i
                    : ((i = K.find.attr(t, e)), null == i ? void 0 : i)
                  : null !== n
                  ? r && "set" in r && void 0 !== (i = r.set(t, n, e))
                    ? i
                    : (t.setAttribute(e, n + ""), n)
                  : void K.removeAttr(t, e));
        },
        removeAttr: function (t, e) {
          var n,
            r,
            i = 0,
            o = e && e.match(dt);
          if (o && 1 === t.nodeType)
            for (; (n = o[i++]); )
              (r = K.propFix[n] || n),
                K.expr.match.bool.test(n) && (t[r] = !1),
                t.removeAttribute(n);
        },
        attrHooks: {
          type: {
            set: function (t, e) {
              if (!Y.radioValue && "radio" === e && K.nodeName(t, "input")) {
                var n = t.value;
                return t.setAttribute("type", e), n && (t.value = n), e;
              }
            },
          },
        },
      }),
      (ie = {
        set: function (t, e, n) {
          return e === !1 ? K.removeAttr(t, n) : t.setAttribute(n, n), n;
        },
      }),
      K.each(K.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = oe[e] || K.find.attr;
        oe[e] = function (t, e, r) {
          var i, o;
          return (
            r ||
              ((o = oe[e]),
              (oe[e] = i),
              (i = null != n(t, e, r) ? e.toLowerCase() : null),
              (oe[e] = o)),
            i
          );
        };
      });
    var se = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
      prop: function (t, e) {
        return vt(this, K.prop, t, e, arguments.length > 1);
      },
      removeProp: function (t) {
        return this.each(function () {
          delete this[K.propFix[t] || t];
        });
      },
    }),
      K.extend({
        propFix: { for: "htmlFor", class: "className" },
        prop: function (t, e, n) {
          var r,
            i,
            o,
            s = t.nodeType;
          if (t && 3 !== s && 8 !== s && 2 !== s)
            return (
              (o = 1 !== s || !K.isXMLDoc(t)),
              o && ((e = K.propFix[e] || e), (i = K.propHooks[e])),
              void 0 !== n
                ? i && "set" in i && void 0 !== (r = i.set(t, n, e))
                  ? r
                  : (t[e] = n)
                : i && "get" in i && null !== (r = i.get(t, e))
                ? r
                : t[e]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (t) {
              return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href
                ? t.tabIndex
                : -1;
            },
          },
        },
      }),
      Y.optSelected ||
        (K.propHooks.selected = {
          get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
          },
        }),
      K.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          K.propFix[this.toLowerCase()] = this;
        }
      );
    var ae = /[\t\r\n\f]/g;
    K.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          s,
          a = "string" == typeof t && t,
          l = 0,
          c = this.length;
        if (K.isFunction(t))
          return this.each(function (e) {
            K(this).addClass(t.call(this, e, this.className));
          });
        if (a)
          for (e = (t || "").match(dt) || []; c > l; l++)
            if (
              ((n = this[l]),
              (r =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(ae, " ")
                  : " ")))
            ) {
              for (o = 0; (i = e[o++]); )
                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
              (s = K.trim(r)), n.className !== s && (n.className = s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          s,
          a = 0 === arguments.length || ("string" == typeof t && t),
          l = 0,
          c = this.length;
        if (K.isFunction(t))
          return this.each(function (e) {
            K(this).removeClass(t.call(this, e, this.className));
          });
        if (a)
          for (e = (t || "").match(dt) || []; c > l; l++)
            if (
              ((n = this[l]),
              (r =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(ae, " ")
                  : "")))
            ) {
              for (o = 0; (i = e[o++]); )
                for (; r.indexOf(" " + i + " ") >= 0; )
                  r = r.replace(" " + i + " ", " ");
              (s = t ? K.trim(r) : ""), n.className !== s && (n.className = s);
            }
        return this;
      },
      toggleClass: function (t, e) {
        var n = typeof t;
        return "boolean" == typeof e && "string" === n
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : this.each(
              K.isFunction(t)
                ? function (n) {
                    K(this).toggleClass(t.call(this, n, this.className, e), e);
                  }
                : function () {
                    if ("string" === n)
                      for (
                        var e, r = 0, i = K(this), o = t.match(dt) || [];
                        (e = o[r++]);

                      )
                        i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                    else
                      (n === kt || "boolean" === n) &&
                        (this.className &&
                          mt.set(this, "__className__", this.className),
                        (this.className =
                          this.className || t === !1
                            ? ""
                            : mt.get(this, "__className__") || ""));
                  }
            );
      },
      hasClass: function (t) {
        for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++)
          if (
            1 === this[n].nodeType &&
            (" " + this[n].className + " ").replace(ae, " ").indexOf(e) >= 0
          )
            return !0;
        return !1;
      },
    });
    var le = /\r/g;
    K.fn.extend({
      val: function (t) {
        var e,
          n,
          r,
          i = this[0];
        return arguments.length
          ? ((r = K.isFunction(t)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                ((i = r ? t.call(this, n, K(this).val()) : t),
                null == i
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : K.isArray(i) &&
                    (i = K.map(i, function (t) {
                      return null == t ? "" : t + "";
                    })),
                (e =
                  K.valHooks[this.type] ||
                  K.valHooks[this.nodeName.toLowerCase()]),
                (e && "set" in e && void 0 !== e.set(this, i, "value")) ||
                  (this.value = i));
            }))
          : i
          ? ((e = K.valHooks[i.type] || K.valHooks[i.nodeName.toLowerCase()]),
            e && "get" in e && void 0 !== (n = e.get(i, "value"))
              ? n
              : ((n = i.value),
                "string" == typeof n ? n.replace(le, "") : null == n ? "" : n))
          : void 0;
      },
    }),
      K.extend({
        valHooks: {
          option: {
            get: function (t) {
              var e = K.find.attr(t, "value");
              return null != e ? e : K.trim(K.text(t));
            },
          },
          select: {
            get: function (t) {
              for (
                var e,
                  n,
                  r = t.options,
                  i = t.selectedIndex,
                  o = "select-one" === t.type || 0 > i,
                  s = o ? null : [],
                  a = o ? i + 1 : r.length,
                  l = 0 > i ? a : o ? i : 0;
                a > l;
                l++
              )
                if (
                  ((n = r[l]),
                  !(
                    (!n.selected && l !== i) ||
                    (Y.optDisabled
                      ? n.disabled
                      : null !== n.getAttribute("disabled")) ||
                    (n.parentNode.disabled &&
                      K.nodeName(n.parentNode, "optgroup"))
                  ))
                ) {
                  if (((e = K(n).val()), o)) return e;
                  s.push(e);
                }
              return s;
            },
            set: function (t, e) {
              for (
                var n, r, i = t.options, o = K.makeArray(e), s = i.length;
                s--;

              )
                (r = i[s]),
                  (r.selected = K.inArray(r.value, o) >= 0) && (n = !0);
              return n || (t.selectedIndex = -1), o;
            },
          },
        },
      }),
      K.each(["radio", "checkbox"], function () {
        (K.valHooks[this] = {
          set: function (t, e) {
            return K.isArray(e)
              ? (t.checked = K.inArray(K(t).val(), e) >= 0)
              : void 0;
          },
        }),
          Y.checkOn ||
            (K.valHooks[this].get = function (t) {
              return null === t.getAttribute("value") ? "on" : t.value;
            });
      }),
      K.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (t, e) {
          K.fn[e] = function (t, n) {
            return arguments.length > 0
              ? this.on(e, null, t, n)
              : this.trigger(e);
          };
        }
      ),
      K.fn.extend({
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t);
        },
        bind: function (t, e, n) {
          return this.on(t, null, e, n);
        },
        unbind: function (t, e) {
          return this.off(t, null, e);
        },
        delegate: function (t, e, n, r) {
          return this.on(e, t, n, r);
        },
        undelegate: function (t, e, n) {
          return 1 === arguments.length
            ? this.off(t, "**")
            : this.off(e, t || "**", n);
        },
      });
    var ce = K.now(),
      ue = /\?/;
    (K.parseJSON = function (t) {
      return JSON.parse(t + "");
    }),
      (K.parseXML = function (t) {
        var e, n;
        if (!t || "string" != typeof t) return null;
        try {
          (n = new DOMParser()), (e = n.parseFromString(t, "text/xml"));
        } catch (r) {
          e = void 0;
        }
        return (
          (!e || e.getElementsByTagName("parsererror").length) &&
            K.error("Invalid XML: " + t),
          e
        );
      });
    var pe = /#.*$/,
      he = /([?&])_=[^&]*/,
      de = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      ge = /^(?:GET|HEAD)$/,
      ve = /^\/\//,
      me = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      ye = {},
      be = {},
      we = "*/".concat("*"),
      xe = t.location.href,
      Te = me.exec(xe.toLowerCase()) || [];
    K.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: xe,
        type: "GET",
        isLocal: fe.test(Te[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": we,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": K.parseJSON,
          "text xml": K.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? P(P(t, K.ajaxSettings), e) : P(K.ajaxSettings, t);
      },
      ajaxPrefilter: O(ye),
      ajaxTransport: O(be),
      ajax: function (t, e) {
        function n(t, e, n, s) {
          var l,
            u,
            m,
            y,
            w,
            T = e;
          2 !== b &&
            ((b = 2),
            a && clearTimeout(a),
            (r = void 0),
            (o = s || ""),
            (x.readyState = t > 0 ? 4 : 0),
            (l = (t >= 200 && 300 > t) || 304 === t),
            n && (y = L(p, x, n)),
            (y = H(p, y, x, l)),
            l
              ? (p.ifModified &&
                  ((w = x.getResponseHeader("Last-Modified")),
                  w && (K.lastModified[i] = w),
                  (w = x.getResponseHeader("etag")),
                  w && (K.etag[i] = w)),
                204 === t || "HEAD" === p.type
                  ? (T = "nocontent")
                  : 304 === t
                  ? (T = "notmodified")
                  : ((T = y.state), (u = y.data), (m = y.error), (l = !m)))
              : ((m = T), (t || !T) && ((T = "error"), 0 > t && (t = 0))),
            (x.status = t),
            (x.statusText = (e || T) + ""),
            l ? f.resolveWith(h, [u, T, x]) : f.rejectWith(h, [x, T, m]),
            x.statusCode(v),
            (v = void 0),
            c && d.trigger(l ? "ajaxSuccess" : "ajaxError", [x, p, l ? u : m]),
            g.fireWith(h, [x, T]),
            c &&
              (d.trigger("ajaxComplete", [x, p]),
              --K.active || K.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
        var r,
          i,
          o,
          s,
          a,
          l,
          c,
          u,
          p = K.ajaxSetup({}, e),
          h = p.context || p,
          d = p.context && (h.nodeType || h.jquery) ? K(h) : K.event,
          f = K.Deferred(),
          g = K.Callbacks("once memory"),
          v = p.statusCode || {},
          m = {},
          y = {},
          b = 0,
          w = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === b) {
                if (!s)
                  for (s = {}; (e = de.exec(o)); ) s[e[1].toLowerCase()] = e[2];
                e = s[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return 2 === b ? o : null;
            },
            setRequestHeader: function (t, e) {
              var n = t.toLowerCase();
              return b || ((t = y[n] = y[n] || t), (m[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return b || (p.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (2 > b) for (e in t) v[e] = [v[e], t[e]];
                else x.always(t[x.status]);
              return this;
            },
            abort: function (t) {
              var e = t || w;
              return r && r.abort(e), n(0, e), this;
            },
          };
        if (
          ((f.promise(x).complete = g.add),
          (x.success = x.done),
          (x.error = x.fail),
          (p.url = ((t || p.url || xe) + "")
            .replace(pe, "")
            .replace(ve, Te[1] + "//")),
          (p.type = e.method || e.type || p.method || p.type),
          (p.dataTypes = K.trim(p.dataType || "*")
            .toLowerCase()
            .match(dt) || [""]),
          null == p.crossDomain &&
            ((l = me.exec(p.url.toLowerCase())),
            (p.crossDomain = !(
              !l ||
              (l[1] === Te[1] &&
                l[2] === Te[2] &&
                (l[3] || ("http:" === l[1] ? "80" : "443")) ===
                  (Te[3] || ("http:" === Te[1] ? "80" : "443")))
            ))),
          p.data &&
            p.processData &&
            "string" != typeof p.data &&
            (p.data = K.param(p.data, p.traditional)),
          R(ye, p, e, x),
          2 === b)
        )
          return x;
        (c = K.event && p.global),
          c && 0 === K.active++ && K.event.trigger("ajaxStart"),
          (p.type = p.type.toUpperCase()),
          (p.hasContent = !ge.test(p.type)),
          (i = p.url),
          p.hasContent ||
            (p.data &&
              ((i = p.url += (ue.test(i) ? "&" : "?") + p.data), delete p.data),
            p.cache === !1 &&
              (p.url = he.test(i)
                ? i.replace(he, "$1_=" + ce++)
                : i + (ue.test(i) ? "&" : "?") + "_=" + ce++)),
          p.ifModified &&
            (K.lastModified[i] &&
              x.setRequestHeader("If-Modified-Since", K.lastModified[i]),
            K.etag[i] && x.setRequestHeader("If-None-Match", K.etag[i])),
          ((p.data && p.hasContent && p.contentType !== !1) || e.contentType) &&
            x.setRequestHeader("Content-Type", p.contentType),
          x.setRequestHeader(
            "Accept",
            p.dataTypes[0] && p.accepts[p.dataTypes[0]]
              ? p.accepts[p.dataTypes[0]] +
                  ("*" !== p.dataTypes[0] ? ", " + we + "; q=0.01" : "")
              : p.accepts["*"]
          );
        for (u in p.headers) x.setRequestHeader(u, p.headers[u]);
        if (p.beforeSend && (p.beforeSend.call(h, x, p) === !1 || 2 === b))
          return x.abort();
        w = "abort";
        for (u in { success: 1, error: 1, complete: 1 }) x[u](p[u]);
        if ((r = R(be, p, e, x))) {
          (x.readyState = 1),
            c && d.trigger("ajaxSend", [x, p]),
            p.async &&
              p.timeout > 0 &&
              (a = setTimeout(function () {
                x.abort("timeout");
              }, p.timeout));
          try {
            (b = 1), r.send(m, n);
          } catch (T) {
            if (!(2 > b)) throw T;
            n(-1, T);
          }
        } else n(-1, "No Transport");
        return x;
      },
      getJSON: function (t, e, n) {
        return K.get(t, e, n, "json");
      },
      getScript: function (t, e) {
        return K.get(t, void 0, e, "script");
      },
    }),
      K.each(["get", "post"], function (t, e) {
        K[e] = function (t, n, r, i) {
          return (
            K.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
            K.ajax({ url: t, type: e, dataType: i, data: n, success: r })
          );
        };
      }),
      (K._evalUrl = function (t) {
        return K.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      K.fn.extend({
        wrapAll: function (t) {
          var e;
          return K.isFunction(t)
            ? this.each(function (e) {
                K(this).wrapAll(t.call(this, e));
              })
            : (this[0] &&
                ((e = K(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (t) {
          return this.each(
            K.isFunction(t)
              ? function (e) {
                  K(this).wrapInner(t.call(this, e));
                }
              : function () {
                  var e = K(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                }
          );
        },
        wrap: function (t) {
          var e = K.isFunction(t);
          return this.each(function (n) {
            K(this).wrapAll(e ? t.call(this, n) : t);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              K.nodeName(this, "body") || K(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (K.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0;
      }),
      (K.expr.filters.visible = function (t) {
        return !K.expr.filters.hidden(t);
      });
    var Ce = /%20/g,
      Se = /\[\]$/,
      ke = /\r?\n/g,
      Ee = /^(?:submit|button|image|reset|file)$/i,
      Ae = /^(?:input|select|textarea|keygen)/i;
    (K.param = function (t, e) {
      var n,
        r = [],
        i = function (t, e) {
          (e = K.isFunction(e) ? e() : null == e ? "" : e),
            (r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
        };
      if (
        (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional),
        K.isArray(t) || (t.jquery && !K.isPlainObject(t)))
      )
        K.each(t, function () {
          i(this.name, this.value);
        });
      else for (n in t) F(n, t[n], e, i);
      return r.join("&").replace(Ce, "+");
    }),
      K.fn.extend({
        serialize: function () {
          return K.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var t = K.prop(this, "elements");
            return t ? K.makeArray(t) : this;
          })
            .filter(function () {
              var t = this.type;
              return (
                this.name &&
                !K(this).is(":disabled") &&
                Ae.test(this.nodeName) &&
                !Ee.test(t) &&
                (this.checked || !St.test(t))
              );
            })
            .map(function (t, e) {
              var n = K(this).val();
              return null == n
                ? null
                : K.isArray(n)
                ? K.map(n, function (t) {
                    return { name: e.name, value: t.replace(ke, "\r\n") };
                  })
                : { name: e.name, value: n.replace(ke, "\r\n") };
            })
            .get();
        },
      }),
      (K.ajaxSettings.xhr = function () {
        try {
          return new XMLHttpRequest();
        } catch (t) {}
      });
    var _e = 0,
      $e = {},
      Ne = { 0: 200, 1223: 204 },
      De = K.ajaxSettings.xhr();
    t.attachEvent &&
      t.attachEvent("onunload", function () {
        for (var t in $e) $e[t]();
      }),
      (Y.cors = !!De && "withCredentials" in De),
      (Y.ajax = De = !!De),
      K.ajaxTransport(function (t) {
        var e;
        return Y.cors || (De && !t.crossDomain)
          ? {
              send: function (n, r) {
                var i,
                  o = t.xhr(),
                  s = ++_e;
                if (
                  (o.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (i in t.xhrFields) o[i] = t.xhrFields[i];
                t.mimeType &&
                  o.overrideMimeType &&
                  o.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    n["X-Requested-With"] ||
                    (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                (e = function (t) {
                  return function () {
                    e &&
                      (delete $e[s],
                      (e = o.onload = o.onerror = null),
                      "abort" === t
                        ? o.abort()
                        : "error" === t
                        ? r(o.status, o.statusText)
                        : r(
                            Ne[o.status] || o.status,
                            o.statusText,
                            "string" == typeof o.responseText
                              ? { text: o.responseText }
                              : void 0,
                            o.getAllResponseHeaders()
                          ));
                  };
                }),
                  (o.onload = e()),
                  (o.onerror = e("error")),
                  (e = $e[s] = e("abort"));
                try {
                  o.send((t.hasContent && t.data) || null);
                } catch (a) {
                  if (e) throw a;
                }
              },
              abort: function () {
                e && e();
              },
            }
          : void 0;
      }),
      K.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function (t) {
            return K.globalEval(t), t;
          },
        },
      }),
      K.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
      }),
      K.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
          var e, n;
          return {
            send: function (r, i) {
              (e = K("<script>")
                .prop({ async: !0, charset: t.scriptCharset, src: t.url })
                .on(
                  "load error",
                  (n = function (t) {
                    e.remove(),
                      (n = null),
                      t && i("error" === t.type ? 404 : 200, t.type);
                  })
                )),
                J.head.appendChild(e[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var je = [],
      Ie = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = je.pop() || K.expando + "_" + ce++;
        return (this[t] = !0), t;
      },
    }),
      K.ajaxPrefilter("json jsonp", function (e, n, r) {
        var i,
          o,
          s,
          a =
            e.jsonp !== !1 &&
            (Ie.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                !(e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
                Ie.test(e.data) &&
                "data");
        return a || "jsonp" === e.dataTypes[0]
          ? ((i = e.jsonpCallback =
              K.isFunction(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Ie, "$1" + i))
              : e.jsonp !== !1 &&
                (e.url += (ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            (e.converters["script json"] = function () {
              return s || K.error(i + " was not called"), s[0];
            }),
            (e.dataTypes[0] = "json"),
            (o = t[i]),
            (t[i] = function () {
              s = arguments;
            }),
            r.always(function () {
              (t[i] = o),
                e[i] && ((e.jsonpCallback = n.jsonpCallback), je.push(i)),
                s && K.isFunction(o) && o(s[0]),
                (s = o = void 0);
            }),
            "script")
          : void 0;
      }),
      (K.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && ((n = e), (e = !1)), (e = e || J);
        var r = st.exec(t),
          i = !n && [];
        return r
          ? [e.createElement(r[1])]
          : ((r = K.buildFragment([t], e, i)),
            i && i.length && K(i).remove(),
            K.merge([], r.childNodes));
      });
    var qe = K.fn.load;
    (K.fn.load = function (t, e, n) {
      if ("string" != typeof t && qe) return qe.apply(this, arguments);
      var r,
        i,
        o,
        s = this,
        a = t.indexOf(" ");
      return (
        a >= 0 && ((r = K.trim(t.slice(a))), (t = t.slice(0, a))),
        K.isFunction(e)
          ? ((n = e), (e = void 0))
          : e && "object" == typeof e && (i = "POST"),
        s.length > 0 &&
          K.ajax({ url: t, type: i, dataType: "html", data: e })
            .done(function (t) {
              (o = arguments),
                s.html(r ? K("<div>").append(K.parseHTML(t)).find(r) : t);
            })
            .complete(
              n &&
                function (t, e) {
                  s.each(n, o || [t.responseText, e, t]);
                }
            ),
        this
      );
    }),
      K.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (t, e) {
          K.fn[e] = function (t) {
            return this.on(e, t);
          };
        }
      ),
      (K.expr.filters.animated = function (t) {
        return K.grep(K.timers, function (e) {
          return t === e.elem;
        }).length;
      });
    var Oe = t.document.documentElement;
    (K.offset = {
      setOffset: function (t, e, n) {
        var r,
          i,
          o,
          s,
          a,
          l,
          c,
          u = K.css(t, "position"),
          p = K(t),
          h = {};
        "static" === u && (t.style.position = "relative"),
          (a = p.offset()),
          (o = K.css(t, "top")),
          (l = K.css(t, "left")),
          (c =
            ("absolute" === u || "fixed" === u) &&
            (o + l).indexOf("auto") > -1),
          c
            ? ((r = p.position()), (s = r.top), (i = r.left))
            : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
          K.isFunction(e) && (e = e.call(t, n, a)),
          null != e.top && (h.top = e.top - a.top + s),
          null != e.left && (h.left = e.left - a.left + i),
          "using" in e ? e.using.call(t, h) : p.css(h);
      },
    }),
      K.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  K.offset.setOffset(this, t, e);
                });
          var e,
            n,
            r = this[0],
            i = { top: 0, left: 0 },
            o = r && r.ownerDocument;
          return o
            ? ((e = o.documentElement),
              K.contains(e, r)
                ? (typeof r.getBoundingClientRect !== kt &&
                    (i = r.getBoundingClientRect()),
                  (n = U(o)),
                  {
                    top: i.top + n.pageYOffset - e.clientTop,
                    left: i.left + n.pageXOffset - e.clientLeft,
                  })
                : i)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var t,
              e,
              n = this[0],
              r = { top: 0, left: 0 };
            return (
              "fixed" === K.css(n, "position")
                ? (e = n.getBoundingClientRect())
                : ((t = this.offsetParent()),
                  (e = this.offset()),
                  K.nodeName(t[0], "html") || (r = t.offset()),
                  (r.top += K.css(t[0], "borderTopWidth", !0)),
                  (r.left += K.css(t[0], "borderLeftWidth", !0))),
              {
                top: e.top - r.top - K.css(n, "marginTop", !0),
                left: e.left - r.left - K.css(n, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var t = this.offsetParent || Oe;
              t && !K.nodeName(t, "html") && "static" === K.css(t, "position");

            )
              t = t.offsetParent;
            return t || Oe;
          });
        },
      }),
      K.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, n) {
          var r = "pageYOffset" === n;
          K.fn[e] = function (i) {
            return vt(
              this,
              function (e, i, o) {
                var s = U(e);
                return void 0 === o
                  ? s
                    ? s[n]
                    : e[i]
                  : void (s
                      ? s.scrollTo(r ? t.pageXOffset : o, r ? o : t.pageYOffset)
                      : (e[i] = o));
              },
              e,
              i,
              arguments.length,
              null
            );
          };
        }
      ),
      K.each(["top", "left"], function (t, e) {
        K.cssHooks[e] = T(Y.pixelPosition, function (t, n) {
          return n
            ? ((n = x(t, e)), Qt.test(n) ? K(t).position()[e] + "px" : n)
            : void 0;
        });
      }),
      K.each({ Height: "height", Width: "width" }, function (t, e) {
        K.each(
          { padding: "inner" + t, content: e, "": "outer" + t },
          function (n, r) {
            K.fn[r] = function (r, i) {
              var o = arguments.length && (n || "boolean" != typeof r),
                s = n || (r === !0 || i === !0 ? "margin" : "border");
              return vt(
                this,
                function (e, n, r) {
                  var i;
                  return K.isWindow(e)
                    ? e.document.documentElement["client" + t]
                    : 9 === e.nodeType
                    ? ((i = e.documentElement),
                      Math.max(
                        e.body["scroll" + t],
                        i["scroll" + t],
                        e.body["offset" + t],
                        i["offset" + t],
                        i["client" + t]
                      ))
                    : void 0 === r
                    ? K.css(e, n, s)
                    : K.style(e, n, r, s);
                },
                e,
                o ? r : void 0,
                o,
                null
              );
            };
          }
        );
      }),
      (K.fn.size = function () {
        return this.length;
      }),
      (K.fn.andSelf = K.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return K;
        });
    var Re = t.jQuery,
      Pe = t.$;
    return (
      (K.noConflict = function (e) {
        return (
          t.$ === K && (t.$ = Pe), e && t.jQuery === K && (t.jQuery = Re), K
        );
      }),
      typeof e === kt && (t.jQuery = t.$ = K),
      K
    );
  }) /*! svg4everybody v2.0.3 | github.com/jonathantneal/svg4everybody */,
  !(function (t, e) {
    "function" == typeof define && define.amd
      ? define([], function () {
          return (t.svg4everybody = e());
        })
      : "object" == typeof exports
      ? (module.exports = e())
      : (t.svg4everybody = e());
  })(this, function () {
    /*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */ function t(
      t,
      e
    ) {
      if (e) {
        var n = !t.getAttribute("viewBox") && e.getAttribute("viewBox"),
          r = document.createDocumentFragment(),
          i = e.cloneNode(!0);
        for (n && t.setAttribute("viewBox", n); i.childNodes.length; )
          r.appendChild(i.firstChild);
        t.appendChild(r);
      }
    }
    function e(e) {
      (e.onreadystatechange = function () {
        if (4 === e.readyState) {
          var n = document.createElement("x");
          (n.innerHTML = e.responseText),
            e.s.splice(0).map(function (e) {
              t(e[0], n.querySelector("#" + e[1].replace(/(\W)/g, "\\$1")));
            });
        }
      }),
        e.onreadystatechange();
    }
    function n(n) {
      function r() {
        for (var n; (n = i[0]); ) {
          var c = n.parentNode;
          if (c && /svg/i.test(c.nodeName)) {
            var u = n.getAttribute("xlink:href");
            if (o && (!s || s(u, c, n))) {
              var p = u.split("#"),
                h = p[0],
                d = p[1];
              if ((c.removeChild(n), h.length)) {
                var f = (l[h] = l[h] || new XMLHttpRequest());
                f.s || ((f.s = []), f.open("GET", h), f.send()),
                  f.s.push([c, d]),
                  e(f);
              } else t(c, document.getElementById(d));
            }
          }
        }
        a(r, 17);
      }
      n = n || {};
      var i = document.getElementsByTagName("use"),
        o =
          "polyfill" in n
            ? n.polyfill
            : /\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(
                navigator.userAgent
              ) ||
              (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537,
        s = n.validate,
        a = window.requestAnimationFrame || setTimeout,
        l = {};
      o && r();
    }
    return n;
  }),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if ((e[0] < 2 && e[1] < 9) || (1 == e[0] && 9 == e[1] && e[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery),
  +(function (t) {
    "use strict";
    function e() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var n in e) if (void 0 !== t.style[n]) return { end: e[n] };
      return !1;
    }
    (t.fn.emulateTransitionEnd = function (e) {
      var n = !1,
        r = this;
      t(this).one("bsTransitionEnd", function () {
        n = !0;
      });
      var i = function () {
        n || t(r).trigger(t.support.transition.end);
      };
      return setTimeout(i, e), this;
    }),
      t(function () {
        (t.support.transition = e()),
          t.support.transition &&
            (t.event.special.bsTransitionEnd = {
              bindType: t.support.transition.end,
              delegateType: t.support.transition.end,
              handle: function (e) {
                if (t(e.target).is(this))
                  return e.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          i = n.data("bs.alert");
        i || n.data("bs.alert", (i = new r(this))),
          "string" == typeof e && i[e].call(n);
      });
    }
    var n = '[data-dismiss="alert"]',
      r = function (e) {
        t(e).on("click", n, this.close);
      };
    (r.VERSION = "3.3.2"),
      (r.TRANSITION_DURATION = 150),
      (r.prototype.close = function (e) {
        function n() {
          s.detach().trigger("closed.bs.alert").remove();
        }
        var i = t(this),
          o = i.attr("data-target");
        o || ((o = i.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, "")));
        var s = t(o);
        e && e.preventDefault(),
          s.length || (s = i.closest(".alert")),
          s.trigger((e = t.Event("close.bs.alert"))),
          e.isDefaultPrevented() ||
            (s.removeClass("in"),
            t.support.transition && s.hasClass("fade")
              ? s
                  .one("bsTransitionEnd", n)
                  .emulateTransitionEnd(r.TRANSITION_DURATION)
              : n());
      });
    var i = t.fn.alert;
    (t.fn.alert = e),
      (t.fn.alert.Constructor = r),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = i), this;
      }),
      t(document).on("click.bs.alert.data-api", n, r.prototype.close);
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var r = t(this),
          i = r.data("bs.button"),
          o = "object" == typeof e && e;
        i || r.data("bs.button", (i = new n(this, o))),
          "toggle" == e ? i.toggle() : e && i.setState(e);
      });
    }
    var n = function (e, r) {
      (this.$element = t(e)),
        (this.options = t.extend({}, n.DEFAULTS, r)),
        (this.isLoading = !1);
    };
    (n.VERSION = "3.3.2"),
      (n.DEFAULTS = { loadingText: "loading..." }),
      (n.prototype.setState = function (e) {
        var n = "disabled",
          r = this.$element,
          i = r.is("input") ? "val" : "html",
          o = r.data();
        (e += "Text"),
          null == o.resetText && r.data("resetText", r[i]()),
          setTimeout(
            t.proxy(function () {
              r[i](null == o[e] ? this.options[e] : o[e]),
                "loadingText" == e
                  ? ((this.isLoading = !0), r.addClass(n).attr(n, n))
                  : this.isLoading &&
                    ((this.isLoading = !1), r.removeClass(n).removeAttr(n));
            }, this),
            0
          );
      }),
      (n.prototype.toggle = function () {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
          var n = this.$element.find("input");
          "radio" == n.prop("type") &&
            (n.prop("checked") && this.$element.hasClass("active")
              ? (t = !1)
              : e.find(".active").removeClass("active")),
            t &&
              n
                .prop("checked", !this.$element.hasClass("active"))
                .trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active");
      });
    var r = t.fn.button;
    (t.fn.button = e),
      (t.fn.button.Constructor = n),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = r), this;
      }),
      t(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (n) {
            var r = t(n.target);
            r.hasClass("btn") || (r = r.closest(".btn")),
              e.call(r, "toggle"),
              n.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            t(e.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(e.type));
          }
        );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var r = t(this),
          i = r.data("bs.carousel"),
          o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e),
          s = "string" == typeof e ? e : o.slide;
        i || r.data("bs.carousel", (i = new n(this, o))),
          "number" == typeof e
            ? i.to(e)
            : s
            ? i[s]()
            : o.interval && i.pause().cycle();
      });
    }
    var n = function (e, n) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = n),
        (this.paused =
          this.sliding =
          this.interval =
          this.$active =
          this.$items =
            null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
    };
    (n.VERSION = "3.3.2"),
      (n.TRANSITION_DURATION = 600),
      (n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (n.prototype.cycle = function (e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (n.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e),
          r =
            ("prev" == t && 0 === n) ||
            ("next" == t && n == this.$items.length - 1);
        if (r && !this.options.wrap) return e;
        var i = "prev" == t ? -1 : 1,
          o = (n + i) % this.$items.length;
        return this.$items.eq(o);
      }),
      (n.prototype.to = function (t) {
        var e = this,
          n = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(t > this.$items.length - 1 || t < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                e.to(t);
              })
            : n == t
            ? this.pause().cycle()
            : this.slide(t > n ? "next" : "prev", this.$items.eq(t));
      }),
      (n.prototype.pause = function (e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (n.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (n.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (n.prototype.slide = function (e, r) {
        var i = this.$element.find(".item.active"),
          o = r || this.getItemForDirection(e, i),
          s = this.interval,
          a = "next" == e ? "left" : "right",
          l = this;
        if (o.hasClass("active")) return (this.sliding = !1);
        var c = o[0],
          u = t.Event("slide.bs.carousel", { relatedTarget: c, direction: a });
        if ((this.$element.trigger(u), !u.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), s && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var p = t(this.$indicators.children()[this.getItemIndex(o)]);
            p && p.addClass("active");
          }
          var h = t.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: a,
          });
          return (
            t.support.transition && this.$element.hasClass("slide")
              ? (o.addClass(e),
                o[0].offsetWidth,
                i.addClass(a),
                o.addClass(a),
                i
                  .one("bsTransitionEnd", function () {
                    o.removeClass([e, a].join(" ")).addClass("active"),
                      i.removeClass(["active", a].join(" ")),
                      (l.sliding = !1),
                      setTimeout(function () {
                        l.$element.trigger(h);
                      }, 0);
                  })
                  .emulateTransitionEnd(n.TRANSITION_DURATION))
              : (i.removeClass("active"),
                o.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(h)),
            s && this.cycle(),
            this
          );
        }
      });
    var r = t.fn.carousel;
    (t.fn.carousel = e),
      (t.fn.carousel.Constructor = n),
      (t.fn.carousel.noConflict = function () {
        return (t.fn.carousel = r), this;
      });
    var i = function (n) {
      var r,
        i = t(this),
        o = t(
          i.attr("data-target") ||
            ((r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (o.hasClass("carousel")) {
        var s = t.extend({}, o.data(), i.data()),
          a = i.attr("data-slide-to");
        a && (s.interval = !1),
          e.call(o, s),
          a && o.data("bs.carousel").to(a),
          n.preventDefault();
      }
    };
    t(document)
      .on("click.bs.carousel.data-api", "[data-slide]", i)
      .on("click.bs.carousel.data-api", "[data-slide-to]", i),
      t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
          var n = t(this);
          e.call(n, n.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      var n,
        r =
          e.attr("data-target") ||
          ((n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
      return t(r);
    }
    function n(e) {
      return this.each(function () {
        var n = t(this),
          i = n.data("bs.collapse"),
          o = t.extend({}, r.DEFAULTS, n.data(), "object" == typeof e && e);
        !i && o.toggle && "show" == e && (o.toggle = !1),
          i || n.data("bs.collapse", (i = new r(this, o))),
          "string" == typeof e && i[e]();
      });
    }
    var r = function (e, n) {
      (this.$element = t(e)),
        (this.options = t.extend({}, r.DEFAULTS, n)),
        (this.$trigger = t(this.options.trigger).filter(
          '[href="#' + e.id + '"], [data-target="#' + e.id + '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (r.VERSION = "3.3.2"),
      (r.TRANSITION_DURATION = 350),
      (r.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }),
      (r.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height";
      }),
      (r.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
            i =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              i &&
              i.length &&
              ((e = i.data("bs.collapse")), e && e.transitioning)
            )
          ) {
            var o = t.Event("show.bs.collapse");
            if ((this.$element.trigger(o), !o.isDefaultPrevented())) {
              i &&
                i.length &&
                (n.call(i, "hide"), e || i.data("bs.collapse", null));
              var s = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [s](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var a = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [s](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!t.support.transition) return a.call(this);
              var l = t.camelCase(["scroll", s].join("-"));
              this.$element
                .one("bsTransitionEnd", t.proxy(a, this))
                .emulateTransitionEnd(r.TRANSITION_DURATION)
                [s](this.$element[0][l]);
            }
          }
        }
      }),
      (r.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var i = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return t.support.transition
              ? void this.$element[n](0)
                  .one("bsTransitionEnd", t.proxy(i, this))
                  .emulateTransitionEnd(r.TRANSITION_DURATION)
              : i.call(this);
          }
        }
      }),
      (r.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (r.prototype.getParent = function () {
        return t(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            t.proxy(function (n, r) {
              var i = t(r);
              this.addAriaAndCollapsedClass(e(i), i);
            }, this)
          )
          .end();
      }),
      (r.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n),
          e.toggleClass("collapsed", !n).attr("aria-expanded", n);
      });
    var i = t.fn.collapse;
    (t.fn.collapse = n),
      (t.fn.collapse.Constructor = r),
      (t.fn.collapse.noConflict = function () {
        return (t.fn.collapse = i), this;
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (r) {
          var i = t(this);
          i.attr("data-target") || r.preventDefault();
          var o = e(i),
            s = o.data("bs.collapse"),
            a = s ? "toggle" : t.extend({}, i.data(), { trigger: this });
          n.call(o, a);
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      (e && 3 === e.which) ||
        (t(i).remove(),
        t(o).each(function () {
          var r = t(this),
            i = n(r),
            o = { relatedTarget: this };
          i.hasClass("open") &&
            (i.trigger((e = t.Event("hide.bs.dropdown", o))),
            e.isDefaultPrevented() ||
              (r.attr("aria-expanded", "false"),
              i.removeClass("open").trigger("hidden.bs.dropdown", o)));
        }));
    }
    function n(e) {
      var n = e.attr("data-target");
      n ||
        ((n = e.attr("href")),
        (n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")));
      var r = n && t(n);
      return r && r.length ? r : e.parent();
    }
    function r(e) {
      return this.each(function () {
        var n = t(this),
          r = n.data("bs.dropdown");
        r || n.data("bs.dropdown", (r = new s(this))),
          "string" == typeof e && r[e].call(n);
      });
    }
    var i = ".dropdown-backdrop",
      o = '[data-toggle="dropdown"]',
      s = function (e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    (s.VERSION = "3.3.2"),
      (s.prototype.toggle = function (r) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
          var o = n(i),
            s = o.hasClass("open");
          if ((e(), !s)) {
            "ontouchstart" in document.documentElement &&
              !o.closest(".navbar-nav").length &&
              t('<div class="dropdown-backdrop"/>')
                .insertAfter(t(this))
                .on("click", e);
            var a = { relatedTarget: this };
            if (
              (o.trigger((r = t.Event("show.bs.dropdown", a))),
              r.isDefaultPrevented())
            )
              return;
            i.trigger("focus").attr("aria-expanded", "true"),
              o.toggleClass("open").trigger("shown.bs.dropdown", a);
          }
          return !1;
        }
      }),
      (s.prototype.keydown = function (e) {
        if (
          /(38|40|27|32)/.test(e.which) &&
          !/input|textarea/i.test(e.target.tagName)
        ) {
          var r = t(this);
          if (
            (e.preventDefault(),
            e.stopPropagation(),
            !r.is(".disabled, :disabled"))
          ) {
            var i = n(r),
              s = i.hasClass("open");
            if ((!s && 27 != e.which) || (s && 27 == e.which))
              return (
                27 == e.which && i.find(o).trigger("focus"), r.trigger("click")
              );
            var a = " li:not(.divider):visible a",
              l = i.find('[role="menu"]' + a + ', [role="listbox"]' + a);
            if (l.length) {
              var c = l.index(e.target);
              38 == e.which && c > 0 && c--,
                40 == e.which && c < l.length - 1 && c++,
                ~c || (c = 0),
                l.eq(c).trigger("focus");
            }
          }
        }
      });
    var a = t.fn.dropdown;
    (t.fn.dropdown = r),
      (t.fn.dropdown.Constructor = s),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = a), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", e)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", o, s.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", o, s.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="menu"]',
          s.prototype.keydown
        )
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="listbox"]',
          s.prototype.keydown
        );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e, r) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.modal"),
          s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
        o || i.data("bs.modal", (o = new n(this, s))),
          "string" == typeof e ? o[e](r) : s.show && o.show(r);
      });
    }
    var n = function (e, n) {
      (this.options = n),
        (this.$body = t(document.body)),
        (this.$element = t(e)),
        (this.$backdrop = this.isShown = null),
        (this.scrollbarWidth = 0),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            t.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (n.VERSION = "3.3.2"),
      (n.TRANSITION_DURATION = 300),
      (n.BACKDROP_TRANSITION_DURATION = 150),
      (n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (n.prototype.show = function (e) {
        var r = this,
          i = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(i),
          this.isShown ||
            i.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.backdrop(function () {
              var i = t.support.transition && r.$element.hasClass("fade");
              r.$element.parent().length || r.$element.appendTo(r.$body),
                r.$element.show().scrollTop(0),
                r.options.backdrop && r.adjustBackdrop(),
                r.adjustDialog(),
                i && r.$element[0].offsetWidth,
                r.$element.addClass("in").attr("aria-hidden", !1),
                r.enforceFocus();
              var o = t.Event("shown.bs.modal", { relatedTarget: e });
              i
                ? r.$element
                    .find(".modal-dialog")
                    .one("bsTransitionEnd", function () {
                      r.$element.trigger("focus").trigger(o);
                    })
                    .emulateTransitionEnd(n.TRANSITION_DURATION)
                : r.$element.trigger("focus").trigger(o);
            }));
      }),
      (n.prototype.hide = function (e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .attr("aria-hidden", !0)
              .off("click.dismiss.bs.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (n.prototype.enforceFocus = function () {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function (t) {
              this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (n.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              t.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (n.prototype.resize = function () {
        this.isShown
          ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
          : t(window).off("resize.bs.modal");
      }),
      (n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (n.prototype.backdrop = function (e) {
        var r = this,
          i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var o = t.support.transition && i;
          if (
            ((this.$backdrop = t('<div class="modal-backdrop ' + i + '" />')
              .prependTo(this.$element)
              .on(
                "click.dismiss.bs.modal",
                t.proxy(function (t) {
                  t.target === t.currentTarget &&
                    ("static" == this.options.backdrop
                      ? this.$element[0].focus.call(this.$element[0])
                      : this.hide.call(this));
                }, this)
              )),
            o && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          )
            return;
          o
            ? this.$backdrop
                .one("bsTransitionEnd", e)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : e();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var s = function () {
            r.removeBackdrop(), e && e();
          };
          t.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", s)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : s();
        } else e && e();
      }),
      (n.prototype.handleUpdate = function () {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog();
      }),
      (n.prototype.adjustBackdrop = function () {
        this.$backdrop
          .css("height", 0)
          .css("height", this.$element[0].scrollHeight);
      }),
      (n.prototype.adjustDialog = function () {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        });
      }),
      (n.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (n.prototype.checkScrollbar = function () {
        (this.bodyIsOverflowing =
          document.body.scrollHeight > document.documentElement.clientHeight),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing &&
          this.$body.css("padding-right", t + this.scrollbarWidth);
      }),
      (n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "");
      }),
      (n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var r = t.fn.modal;
    (t.fn.modal = e),
      (t.fn.modal.Constructor = n),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = r), this;
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (n) {
          var r = t(this),
            i = r.attr("href"),
            o = t(
              r.attr("data-target") || (i && i.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            s = o.data("bs.modal")
              ? "toggle"
              : t.extend({ remote: !/#/.test(i) && i }, o.data(), r.data());
          r.is("a") && n.preventDefault(),
            o.one("show.bs.modal", function (t) {
              t.isDefaultPrevented() ||
                o.one("hidden.bs.modal", function () {
                  r.is(":visible") && r.trigger("focus");
                });
            }),
            e.call(o, s, this);
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var r = t(this),
          i = r.data("bs.tooltip"),
          o = "object" == typeof e && e;
        (i || "destroy" != e) &&
          (i || r.data("bs.tooltip", (i = new n(this, o))),
          "string" == typeof e && i[e]());
      });
    }
    var n = function (t, e) {
      (this.type =
        this.options =
        this.enabled =
        this.timeout =
        this.hoverState =
        this.$element =
          null),
        this.init("tooltip", t, e);
    };
    (n.VERSION = "3.3.2"),
      (n.TRANSITION_DURATION = 150),
      (n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (n.prototype.init = function (e, n, r) {
        (this.enabled = !0),
          (this.type = e),
          (this.$element = t(n)),
          (this.options = this.getOptions(r)),
          (this.$viewport =
            this.options.viewport &&
            t(this.options.viewport.selector || this.options.viewport));
        for (var i = this.options.trigger.split(" "), o = i.length; o--; ) {
          var s = i[o];
          if ("click" == s)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          else if ("manual" != s) {
            var a = "hover" == s ? "mouseenter" : "focusin",
              l = "hover" == s ? "mouseleave" : "focusout";
            this.$element.on(
              a + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (n.prototype.getDefaults = function () {
        return n.DEFAULTS;
      }),
      (n.prototype.getOptions = function (e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e)),
          e.delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        );
      }),
      (n.prototype.getDelegateOptions = function () {
        var e = {},
          n = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, r) {
              n[t] != r && (e[t] = r);
            }),
          e
        );
      }),
      (n.prototype.enter = function (e) {
        var n =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return n && n.$tip && n.$tip.is(":visible")
          ? void (n.hoverState = "in")
          : (n ||
              ((n = new this.constructor(
                e.currentTarget,
                this.getDelegateOptions()
              )),
              t(e.currentTarget).data("bs." + this.type, n)),
            clearTimeout(n.timeout),
            (n.hoverState = "in"),
            n.options.delay && n.options.delay.show
              ? void (n.timeout = setTimeout(function () {
                  "in" == n.hoverState && n.show();
                }, n.options.delay.show))
              : n.show());
      }),
      (n.prototype.leave = function (e) {
        var n =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          n ||
            ((n = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, n)),
          clearTimeout(n.timeout),
          (n.hoverState = "out"),
          n.options.delay && n.options.delay.hide
            ? void (n.timeout = setTimeout(function () {
                "out" == n.hoverState && n.hide();
              }, n.options.delay.hide))
            : n.hide()
        );
      }),
      (n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var r = t.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (e.isDefaultPrevented() || !r) return;
          var i = this,
            o = this.tip(),
            s = this.getUID(this.type);
          this.setContent(),
            o.attr("id", s),
            this.$element.attr("aria-describedby", s),
            this.options.animation && o.addClass("fade");
          var a =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, o[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            c = l.test(a);
          c && (a = a.replace(l, "") || "top"),
            o
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(a)
              .data("bs." + this.type, this),
            this.options.container
              ? o.appendTo(this.options.container)
              : o.insertAfter(this.$element);
          var u = this.getPosition(),
            p = o[0].offsetWidth,
            h = o[0].offsetHeight;
          if (c) {
            var d = a,
              f = this.options.container
                ? t(this.options.container)
                : this.$element.parent(),
              g = this.getPosition(f);
            (a =
              "bottom" == a && u.bottom + h > g.bottom
                ? "top"
                : "top" == a && u.top - h < g.top
                ? "bottom"
                : "right" == a && u.right + p > g.width
                ? "left"
                : "left" == a && u.left - p < g.left
                ? "right"
                : a),
              o.removeClass(d).addClass(a);
          }
          var v = this.getCalculatedOffset(a, u, p, h);
          this.applyPlacement(v, a);
          var m = function () {
            var t = i.hoverState;
            i.$element.trigger("shown.bs." + i.type),
              (i.hoverState = null),
              "out" == t && i.leave(i);
          };
          t.support.transition && this.$tip.hasClass("fade")
            ? o
                .one("bsTransitionEnd", m)
                .emulateTransitionEnd(n.TRANSITION_DURATION)
            : m();
        }
      }),
      (n.prototype.applyPlacement = function (e, n) {
        var r = this.tip(),
          i = r[0].offsetWidth,
          o = r[0].offsetHeight,
          s = parseInt(r.css("margin-top"), 10),
          a = parseInt(r.css("margin-left"), 10);
        isNaN(s) && (s = 0),
          isNaN(a) && (a = 0),
          (e.top = e.top + s),
          (e.left = e.left + a),
          t.offset.setOffset(
            r[0],
            t.extend(
              {
                using: function (t) {
                  r.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              e
            ),
            0
          ),
          r.addClass("in");
        var l = r[0].offsetWidth,
          c = r[0].offsetHeight;
        "top" == n && c != o && (e.top = e.top + o - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? (e.left += u.left) : (e.top += u.top);
        var p = /top|bottom/.test(n),
          h = p ? 2 * u.left - i + l : 2 * u.top - o + c,
          d = p ? "offsetWidth" : "offsetHeight";
        r.offset(e), this.replaceArrow(h, r[0][d], p);
      }),
      (n.prototype.replaceArrow = function (t, e, n) {
        this.arrow()
          .css(n ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(n ? "top" : "left", "");
      }),
      (n.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (n.prototype.hide = function (e) {
        function r() {
          "in" != i.hoverState && o.detach(),
            i.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + i.type),
            e && e();
        }
        var i = this,
          o = this.tip(),
          s = t.Event("hide.bs." + this.type);
        if ((this.$element.trigger(s), !s.isDefaultPrevented()))
          return (
            o.removeClass("in"),
            t.support.transition && this.$tip.hasClass("fade")
              ? o
                  .one("bsTransitionEnd", r)
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : r(),
            (this.hoverState = null),
            this
          );
      }),
      (n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (n.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0],
          r = "BODY" == n.tagName,
          i = n.getBoundingClientRect();
        null == i.width &&
          (i = t.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top,
          }));
        var o = r ? { top: 0, left: 0 } : e.offset(),
          s = {
            scroll: r
              ? document.documentElement.scrollTop || document.body.scrollTop
              : e.scrollTop(),
          },
          a = r
            ? { width: t(window).width(), height: t(window).height() }
            : null;
        return t.extend({}, i, s, a, o);
      }),
      (n.prototype.getCalculatedOffset = function (t, e, n, r) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 }
          : "top" == t
          ? { top: e.top - r, left: e.left + e.width / 2 - n / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - r / 2, left: e.left - n }
          : { top: e.top + e.height / 2 - r / 2, left: e.left + e.width };
      }),
      (n.prototype.getViewportAdjustedDelta = function (t, e, n, r) {
        var i = { top: 0, left: 0 };
        if (!this.$viewport) return i;
        var o = (this.options.viewport && this.options.viewport.padding) || 0,
          s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var a = e.top - o - s.scroll,
            l = e.top + o - s.scroll + r;
          a < s.top
            ? (i.top = s.top - a)
            : l > s.top + s.height && (i.top = s.top + s.height - l);
        } else {
          var c = e.left - o,
            u = e.left + o + n;
          c < s.left
            ? (i.left = s.left - c)
            : u > s.width && (i.left = s.left + s.width - u);
        }
        return i;
      }),
      (n.prototype.getTitle = function () {
        var t,
          e = this.$element,
          n = this.options;
        return (t =
          e.attr("data-original-title") ||
          ("function" == typeof n.title ? n.title.call(e[0]) : n.title));
      }),
      (n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t;
      }),
      (n.prototype.tip = function () {
        return (this.$tip = this.$tip || t(this.options.template));
      }),
      (n.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (n.prototype.enable = function () {
        this.enabled = !0;
      }),
      (n.prototype.disable = function () {
        this.enabled = !1;
      }),
      (n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (n.prototype.toggle = function (e) {
        var n = this;
        e &&
          ((n = t(e.currentTarget).data("bs." + this.type)),
          n ||
            ((n = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, n))),
          n.tip().hasClass("in") ? n.leave(n) : n.enter(n);
      }),
      (n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type);
          });
      });
    var r = t.fn.tooltip;
    (t.fn.tooltip = e),
      (t.fn.tooltip.Constructor = n),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = r), this;
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var r = t(this),
          i = r.data("bs.popover"),
          o = "object" == typeof e && e;
        (i || "destroy" != e) &&
          (i || r.data("bs.popover", (i = new n(this, o))),
          "string" == typeof e && i[e]());
      });
    }
    var n = function (t, e) {
      this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (n.VERSION = "3.3.2"),
      (n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
      (n.prototype.constructor = n),
      (n.prototype.getDefaults = function () {
        return n.DEFAULTS;
      }),
      (n.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof n
                  ? "html"
                  : "append"
                : "text"
            ](n),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (n.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (n.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      }),
      (n.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip;
      });
    var r = t.fn.popover;
    (t.fn.popover = e),
      (t.fn.popover.Constructor = n),
      (t.fn.popover.noConflict = function () {
        return (t.fn.popover = r), this;
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(n, r) {
      var i = t.proxy(this.process, this);
      (this.$body = t("body")),
        (this.$scrollElement = t(t(n).is("body") ? window : n)),
        (this.options = t.extend({}, e.DEFAULTS, r)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on("scroll.bs.scrollspy", i),
        this.refresh(),
        this.process();
    }
    function n(n) {
      return this.each(function () {
        var r = t(this),
          i = r.data("bs.scrollspy"),
          o = "object" == typeof n && n;
        i || r.data("bs.scrollspy", (i = new e(this, o))),
          "string" == typeof n && i[n]();
      });
    }
    (e.VERSION = "3.3.2"),
      (e.DEFAULTS = { offset: 10 }),
      (e.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (e.prototype.refresh = function () {
        var e = "offset",
          n = 0;
        t.isWindow(this.$scrollElement[0]) ||
          ((e = "position"), (n = this.$scrollElement.scrollTop())),
          (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight());
        var r = this;
        this.$body
          .find(this.selector)
          .map(function () {
            var r = t(this),
              i = r.data("target") || r.attr("href"),
              o = /^#./.test(i) && t(i);
            return (
              (o && o.length && o.is(":visible") && [[o[e]().top + n, i]]) ||
              null
            );
          })
          .sort(function (t, e) {
            return t[0] - e[0];
          })
          .each(function () {
            r.offsets.push(this[0]), r.targets.push(this[1]);
          });
      }),
      (e.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          n = this.getScrollHeight(),
          r = this.options.offset + n - this.$scrollElement.height(),
          i = this.offsets,
          o = this.targets,
          s = this.activeTarget;
        if ((this.scrollHeight != n && this.refresh(), e >= r))
          return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e < i[0]) return (this.activeTarget = null), this.clear();
        for (t = i.length; t--; )
          s != o[t] &&
            e >= i[t] &&
            (!i[t + 1] || e <= i[t + 1]) &&
            this.activate(o[t]);
      }),
      (e.prototype.activate = function (e) {
        (this.activeTarget = e), this.clear();
        var n =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          r = t(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length &&
          (r = r.closest("li.dropdown").addClass("active")),
          r.trigger("activate.bs.scrollspy");
      }),
      (e.prototype.clear = function () {
        t(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var r = t.fn.scrollspy;
    (t.fn.scrollspy = n),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function () {
        return (t.fn.scrollspy = r), this;
      }),
      t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
          var e = t(this);
          n.call(e, e.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var r = t(this),
          i = r.data("bs.tab");
        i || r.data("bs.tab", (i = new n(this))),
          "string" == typeof e && i[e]();
      });
    }
    var n = function (e) {
      this.element = t(e);
    };
    (n.VERSION = "3.3.2"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.show = function () {
        var e = this.element,
          n = e.closest("ul:not(.dropdown-menu)"),
          r = e.data("target");
        if (
          (r ||
            ((r = e.attr("href")), (r = r && r.replace(/.*(?=#[^\s]*$)/, ""))),
          !e.parent("li").hasClass("active"))
        ) {
          var i = n.find(".active:last a"),
            o = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
            s = t.Event("show.bs.tab", { relatedTarget: i[0] });
          if (
            (i.trigger(o),
            e.trigger(s),
            !s.isDefaultPrevented() && !o.isDefaultPrevented())
          ) {
            var a = t(r);
            this.activate(e.closest("li"), n),
              this.activate(a, a.parent(), function () {
                i.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                  e.trigger({ type: "shown.bs.tab", relatedTarget: i[0] });
              });
          }
        }
      }),
      (n.prototype.activate = function (e, r, i) {
        function o() {
          s
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            e
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu") &&
              e
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            i && i();
        }
        var s = r.find("> .active"),
          a =
            i &&
            t.support.transition &&
            ((s.length && s.hasClass("fade")) || !!r.find("> .fade").length);
        s.length && a
          ? s
              .one("bsTransitionEnd", o)
              .emulateTransitionEnd(n.TRANSITION_DURATION)
          : o(),
          s.removeClass("in");
      });
    var r = t.fn.tab;
    (t.fn.tab = e),
      (t.fn.tab.Constructor = n),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = r), this;
      });
    var i = function (n) {
      n.preventDefault(), e.call(t(this), "show");
    };
    t(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', i)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', i);
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var r = t(this),
          i = r.data("bs.affix"),
          o = "object" == typeof e && e;
        i || r.data("bs.affix", (i = new n(this, o))),
          "string" == typeof e && i[e]();
      });
    }
    var n = function (e, r) {
      (this.options = t.extend({}, n.DEFAULTS, r)),
        (this.$target = t(this.options.target)
          .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            t.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = t(e)),
        (this.affixed = this.unpin = this.pinnedOffset = null),
        this.checkPosition();
    };
    (n.VERSION = "3.3.2"),
      (n.RESET = "affix affix-top affix-bottom"),
      (n.DEFAULTS = { offset: 0, target: window }),
      (n.prototype.getState = function (t, e, n, r) {
        var i = this.$target.scrollTop(),
          o = this.$element.offset(),
          s = this.$target.height();
        if (null != n && "top" == this.affixed) return i < n && "top";
        if ("bottom" == this.affixed)
          return null != n
            ? !(i + this.unpin <= o.top) && "bottom"
            : !(i + s <= t - r) && "bottom";
        var a = null == this.affixed,
          l = a ? i : o.top,
          c = a ? s : e;
        return null != n && i <= n
          ? "top"
          : null != r && l + c >= t - r && "bottom";
      }),
      (n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var e = this.$element.height(),
            r = this.options.offset,
            i = r.top,
            o = r.bottom,
            s = t("body").height();
          "object" != typeof r && (o = i = r),
            "function" == typeof i && (i = r.top(this.$element)),
            "function" == typeof o && (o = r.bottom(this.$element));
          var a = this.getState(s, e, i, o);
          if (this.affixed != a) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (a ? "-" + a : ""),
              c = t.Event(l + ".bs.affix");
            if ((this.$element.trigger(c), c.isDefaultPrevented())) return;
            (this.affixed = a),
              (this.unpin = "bottom" == a ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(n.RESET)
                .addClass(l)
                .trigger(l.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == a && this.$element.offset({ top: s - e - o });
        }
      });
    var r = t.fn.affix;
    (t.fn.affix = e),
      (t.fn.affix.Constructor = n),
      (t.fn.affix.noConflict = function () {
        return (t.fn.affix = r), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
          var n = t(this),
            r = n.data();
          (r.offset = r.offset || {}),
            null != r.offsetBottom && (r.offset.bottom = r.offsetBottom),
            null != r.offsetTop && (r.offset.top = r.offsetTop),
            e.call(n, r);
        });
      });
  })(jQuery) /*! URI.js v1.15.1 http://medialize.github.io/URI.js/ */,
  (function (t, e) {
    "object" == typeof exports
      ? (module.exports = e(
          require("./punycode"),
          require("./IPv6"),
          require("./SecondLevelDomains")
        ))
      : "function" == typeof define && define.amd
      ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], e)
      : (t.URI = e(t.punycode, t.IPv6, t.SecondLevelDomains, t));
  })(this, function (t, e, n, r) {
    function i(t, e) {
      var n = 1 <= arguments.length,
        r = 2 <= arguments.length;
      if (!(this instanceof i))
        return n ? (r ? new i(t, e) : new i(t)) : new i();
      if (void 0 === t) {
        if (n) throw new TypeError("undefined is not a valid argument for URI");
        t = "undefined" != typeof location ? location.href + "" : "";
      }
      return this.href(t), void 0 !== e ? this.absoluteTo(e) : this;
    }
    function o(t) {
      return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }
    function s(t) {
      return void 0 === t
        ? "Undefined"
        : String(Object.prototype.toString.call(t)).slice(8, -1);
    }
    function a(t) {
      return "Array" === s(t);
    }
    function l(t, e) {
      var n,
        r,
        i = {};
      if ("RegExp" === s(e)) i = null;
      else if (a(e)) for (n = 0, r = e.length; n < r; n++) i[e[n]] = !0;
      else i[e] = !0;
      for (n = 0, r = t.length; n < r; n++)
        ((i && void 0 !== i[t[n]]) || (!i && e.test(t[n]))) &&
          (t.splice(n, 1), r--, n--);
      return t;
    }
    function c(t, e) {
      var n, r;
      if (a(e)) {
        for (n = 0, r = e.length; n < r; n++) if (!c(t, e[n])) return !1;
        return !0;
      }
      var i = s(e);
      for (n = 0, r = t.length; n < r; n++)
        if ("RegExp" === i) {
          if ("string" == typeof t[n] && t[n].match(e)) return !0;
        } else if (t[n] === e) return !0;
      return !1;
    }
    function u(t, e) {
      if (!a(t) || !a(e) || t.length !== e.length) return !1;
      t.sort(), e.sort();
      for (var n = 0, r = t.length; n < r; n++) if (t[n] !== e[n]) return !1;
      return !0;
    }
    function p(t) {
      return escape(t);
    }
    function h(t) {
      return encodeURIComponent(t)
        .replace(/[!'()*]/g, p)
        .replace(/\*/g, "%2A");
    }
    function d(t) {
      return function (e, n) {
        return void 0 === e
          ? this._parts[t] || ""
          : ((this._parts[t] = e || null), this.build(!n), this);
      };
    }
    function f(t, e) {
      return function (n, r) {
        return void 0 === n
          ? this._parts[t] || ""
          : (null !== n &&
              ((n += ""), n.charAt(0) === e && (n = n.substring(1))),
            (this._parts[t] = n),
            this.build(!r),
            this);
      };
    }
    var g = r && r.URI;
    i.version = "1.15.1";
    var v = i.prototype,
      m = Object.prototype.hasOwnProperty;
    (i._parts = function () {
      return {
        protocol: null,
        username: null,
        password: null,
        hostname: null,
        urn: null,
        port: null,
        path: null,
        query: null,
        fragment: null,
        duplicateQueryParameters: i.duplicateQueryParameters,
        escapeQuerySpace: i.escapeQuerySpace,
      };
    }),
      (i.duplicateQueryParameters = !1),
      (i.escapeQuerySpace = !0),
      (i.protocol_expression = /^[a-z][a-z0-9.+-]*$/i),
      (i.idn_expression = /[^a-z0-9\.-]/i),
      (i.punycode_expression = /(xn--)/i),
      (i.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/),
      (i.ip6_expression =
        /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/),
      (i.find_uri_expression =
        /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/gi),
      (i.findUri = {
        start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
        end: /[\s\r\n]|$/,
        trim: /[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/,
      }),
      (i.defaultPorts = {
        http: "80",
        https: "443",
        ftp: "21",
        gopher: "70",
        ws: "80",
        wss: "443",
      }),
      (i.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/),
      (i.domAttributes = {
        a: "href",
        blockquote: "cite",
        link: "href",
        base: "href",
        script: "src",
        form: "action",
        img: "src",
        area: "href",
        iframe: "src",
        embed: "src",
        source: "src",
        track: "src",
        input: "src",
        audio: "src",
        video: "src",
      }),
      (i.getDomAttribute = function (t) {
        if (t && t.nodeName) {
          var e = t.nodeName.toLowerCase();
          return "input" === e && "image" !== t.type
            ? void 0
            : i.domAttributes[e];
        }
      }),
      (i.encode = h),
      (i.decode = decodeURIComponent),
      (i.iso8859 = function () {
        (i.encode = escape), (i.decode = unescape);
      }),
      (i.unicode = function () {
        (i.encode = h), (i.decode = decodeURIComponent);
      }),
      (i.characters = {
        pathname: {
          encode: {
            expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
            map: {
              "%24": "$",
              "%26": "&",
              "%2B": "+",
              "%2C": ",",
              "%3B": ";",
              "%3D": "=",
              "%3A": ":",
              "%40": "@",
            },
          },
          decode: {
            expression: /[\/\?#]/g,
            map: { "/": "%2F", "?": "%3F", "#": "%23" },
          },
        },
        reserved: {
          encode: {
            expression:
              /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
            map: {
              "%3A": ":",
              "%2F": "/",
              "%3F": "?",
              "%23": "#",
              "%5B": "[",
              "%5D": "]",
              "%40": "@",
              "%21": "!",
              "%24": "$",
              "%26": "&",
              "%27": "'",
              "%28": "(",
              "%29": ")",
              "%2A": "*",
              "%2B": "+",
              "%2C": ",",
              "%3B": ";",
              "%3D": "=",
            },
          },
        },
        urnpath: {
          encode: {
            expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,
            map: {
              "%21": "!",
              "%24": "$",
              "%27": "'",
              "%28": "(",
              "%29": ")",
              "%2A": "*",
              "%2B": "+",
              "%2C": ",",
              "%3B": ";",
              "%3D": "=",
              "%40": "@",
            },
          },
          decode: {
            expression: /[\/\?#:]/g,
            map: { "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" },
          },
        },
      }),
      (i.encodeQuery = function (t, e) {
        var n = i.encode(t + "");
        return (
          void 0 === e && (e = i.escapeQuerySpace),
          e ? n.replace(/%20/g, "+") : n
        );
      }),
      (i.decodeQuery = function (t, e) {
        (t += ""), void 0 === e && (e = i.escapeQuerySpace);
        try {
          return i.decode(e ? t.replace(/\+/g, "%20") : t);
        } catch (n) {
          return t;
        }
      });
    var y,
      b = { encode: "encode", decode: "decode" },
      w = function (t, e) {
        return function (n) {
          try {
            return i[e](n + "").replace(
              i.characters[t][e].expression,
              function (n) {
                return i.characters[t][e].map[n];
              }
            );
          } catch (r) {
            return n;
          }
        };
      };
    for (y in b)
      (i[y + "PathSegment"] = w("pathname", b[y])),
        (i[y + "UrnPathSegment"] = w("urnpath", b[y]));
    (b = function (t, e, n) {
      return function (r) {
        var o;
        (o = n
          ? function (t) {
              return i[e](i[n](t));
            }
          : i[e]),
          (r = (r + "").split(t));
        for (var s = 0, a = r.length; s < a; s++) r[s] = o(r[s]);
        return r.join(t);
      };
    }),
      (i.decodePath = b("/", "decodePathSegment")),
      (i.decodeUrnPath = b(":", "decodeUrnPathSegment")),
      (i.recodePath = b("/", "encodePathSegment", "decode")),
      (i.recodeUrnPath = b(":", "encodeUrnPathSegment", "decode")),
      (i.encodeReserved = w("reserved", "encode")),
      (i.parse = function (t, e) {
        var n;
        return (
          e || (e = {}),
          (n = t.indexOf("#")),
          -1 < n &&
            ((e.fragment = t.substring(n + 1) || null),
            (t = t.substring(0, n))),
          (n = t.indexOf("?")),
          -1 < n &&
            ((e.query = t.substring(n + 1) || null), (t = t.substring(0, n))),
          "//" === t.substring(0, 2)
            ? ((e.protocol = null),
              (t = t.substring(2)),
              (t = i.parseAuthority(t, e)))
            : ((n = t.indexOf(":")),
              -1 < n &&
                ((e.protocol = t.substring(0, n) || null),
                e.protocol && !e.protocol.match(i.protocol_expression)
                  ? (e.protocol = void 0)
                  : "//" === t.substring(n + 1, n + 3)
                  ? ((t = t.substring(n + 3)), (t = i.parseAuthority(t, e)))
                  : ((t = t.substring(n + 1)), (e.urn = !0)))),
          (e.path = t),
          e
        );
      }),
      (i.parseHost = function (t, e) {
        var n,
          r = t.indexOf("/");
        if ((-1 === r && (r = t.length), "[" === t.charAt(0)))
          (n = t.indexOf("]")),
            (e.hostname = t.substring(1, n) || null),
            (e.port = t.substring(n + 2, r) || null),
            "/" === e.port && (e.port = null);
        else {
          var i = t.indexOf(":");
          (n = t.indexOf("/")),
            (i = t.indexOf(":", i + 1)),
            -1 !== i && (-1 === n || i < n)
              ? ((e.hostname = t.substring(0, r) || null), (e.port = null))
              : ((n = t.substring(0, r).split(":")),
                (e.hostname = n[0] || null),
                (e.port = n[1] || null));
        }
        return (
          e.hostname &&
            "/" !== t.substring(r).charAt(0) &&
            (r++, (t = "/" + t)),
          t.substring(r) || "/"
        );
      }),
      (i.parseAuthority = function (t, e) {
        return (t = i.parseUserinfo(t, e)), i.parseHost(t, e);
      }),
      (i.parseUserinfo = function (t, e) {
        var n = t.indexOf("/"),
          r = t.lastIndexOf("@", -1 < n ? n : t.length - 1);
        return (
          -1 < r && (-1 === n || r < n)
            ? ((n = t.substring(0, r).split(":")),
              (e.username = n[0] ? i.decode(n[0]) : null),
              n.shift(),
              (e.password = n[0] ? i.decode(n.join(":")) : null),
              (t = t.substring(r + 1)))
            : ((e.username = null), (e.password = null)),
          t
        );
      }),
      (i.parseQuery = function (t, e) {
        if (!t) return {};
        if (((t = t.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, "")), !t))
          return {};
        for (
          var n, r, o = {}, s = t.split("&"), a = s.length, l = 0;
          l < a;
          l++
        )
          (n = s[l].split("=")),
            (r = i.decodeQuery(n.shift(), e)),
            (n = n.length ? i.decodeQuery(n.join("="), e) : null),
            m.call(o, r)
              ? ("string" == typeof o[r] && (o[r] = [o[r]]), o[r].push(n))
              : (o[r] = n);
        return o;
      }),
      (i.build = function (t) {
        var e = "";
        return (
          t.protocol && (e += t.protocol + ":"),
          t.urn || (!e && !t.hostname) || (e += "//"),
          (e += i.buildAuthority(t) || ""),
          "string" == typeof t.path &&
            ("/" !== t.path.charAt(0) &&
              "string" == typeof t.hostname &&
              (e += "/"),
            (e += t.path)),
          "string" == typeof t.query && t.query && (e += "?" + t.query),
          "string" == typeof t.fragment &&
            t.fragment &&
            (e += "#" + t.fragment),
          e
        );
      }),
      (i.buildHost = function (t) {
        var e = "";
        return t.hostname
          ? ((e = i.ip6_expression.test(t.hostname)
              ? e + ("[" + t.hostname + "]")
              : e + t.hostname),
            t.port && (e += ":" + t.port),
            e)
          : "";
      }),
      (i.buildAuthority = function (t) {
        return i.buildUserinfo(t) + i.buildHost(t);
      }),
      (i.buildUserinfo = function (t) {
        var e = "";
        return (
          t.username &&
            ((e += i.encode(t.username)),
            t.password && (e += ":" + i.encode(t.password)),
            (e += "@")),
          e
        );
      }),
      (i.buildQuery = function (t, e, n) {
        var r,
          o,
          s,
          l,
          c = "";
        for (o in t)
          if (m.call(t, o) && o)
            if (a(t[o]))
              for (r = {}, s = 0, l = t[o].length; s < l; s++)
                void 0 !== t[o][s] &&
                  void 0 === r[t[o][s] + ""] &&
                  ((c += "&" + i.buildQueryParameter(o, t[o][s], n)),
                  !0 !== e && (r[t[o][s] + ""] = !0));
            else
              void 0 !== t[o] && (c += "&" + i.buildQueryParameter(o, t[o], n));
        return c.substring(1);
      }),
      (i.buildQueryParameter = function (t, e, n) {
        return (
          i.encodeQuery(t, n) + (null !== e ? "=" + i.encodeQuery(e, n) : "")
        );
      }),
      (i.addQuery = function (t, e, n) {
        if ("object" == typeof e)
          for (var r in e) m.call(e, r) && i.addQuery(t, r, e[r]);
        else {
          if ("string" != typeof e)
            throw new TypeError(
              "URI.addQuery() accepts an object, string as the name parameter"
            );
          void 0 === t[e]
            ? (t[e] = n)
            : ("string" == typeof t[e] && (t[e] = [t[e]]),
              a(n) || (n = [n]),
              (t[e] = (t[e] || []).concat(n)));
        }
      }),
      (i.removeQuery = function (t, e, n) {
        var r;
        if (a(e)) for (n = 0, r = e.length; n < r; n++) t[e[n]] = void 0;
        else if ("RegExp" === s(e)) for (r in t) e.test(r) && (t[r] = void 0);
        else if ("object" == typeof e)
          for (r in e) m.call(e, r) && i.removeQuery(t, r, e[r]);
        else {
          if ("string" != typeof e)
            throw new TypeError(
              "URI.removeQuery() accepts an object, string, RegExp as the first parameter"
            );
          void 0 !== n
            ? "RegExp" === s(n)
              ? !a(t[e]) && n.test(t[e])
                ? (t[e] = void 0)
                : (t[e] = l(t[e], n))
              : t[e] === n
              ? (t[e] = void 0)
              : a(t[e]) && (t[e] = l(t[e], n))
            : (t[e] = void 0);
        }
      }),
      (i.hasQuery = function (t, e, n, r) {
        if ("object" == typeof e) {
          for (var o in e)
            if (m.call(e, o) && !i.hasQuery(t, o, e[o])) return !1;
          return !0;
        }
        if ("string" != typeof e)
          throw new TypeError(
            "URI.hasQuery() accepts an object, string as the name parameter"
          );
        switch (s(n)) {
          case "Undefined":
            return e in t;
          case "Boolean":
            return (t = Boolean(a(t[e]) ? t[e].length : t[e])), n === t;
          case "Function":
            return !!n(t[e], e, t);
          case "Array":
            return !!a(t[e]) && (r ? c : u)(t[e], n);
          case "RegExp":
            return a(t[e]) ? !!r && c(t[e], n) : Boolean(t[e] && t[e].match(n));
          case "Number":
            n = String(n);
          case "String":
            return a(t[e]) ? !!r && c(t[e], n) : t[e] === n;
          default:
            throw new TypeError(
              "URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter"
            );
        }
      }),
      (i.commonPath = function (t, e) {
        var n,
          r = Math.min(t.length, e.length);
        for (n = 0; n < r; n++)
          if (t.charAt(n) !== e.charAt(n)) {
            n--;
            break;
          }
        return 1 > n
          ? t.charAt(0) === e.charAt(0) && "/" === t.charAt(0)
            ? "/"
            : ""
          : (("/" === t.charAt(n) && "/" === e.charAt(n)) ||
              (n = t.substring(0, n).lastIndexOf("/")),
            t.substring(0, n + 1));
      }),
      (i.withinString = function (t, e, n) {
        n || (n = {});
        var r = n.start || i.findUri.start,
          o = n.end || i.findUri.end,
          s = n.trim || i.findUri.trim,
          a = /[a-z0-9-]=["']?$/i;
        for (r.lastIndex = 0; ; ) {
          var l = r.exec(t);
          if (!l) break;
          if (((l = l.index), n.ignoreHtml)) {
            var c = t.slice(Math.max(l - 3, 0), l);
            if (c && a.test(c)) continue;
          }
          var c = l + t.slice(l).search(o),
            u = t.slice(l, c).replace(s, "");
          (n.ignore && n.ignore.test(u)) ||
            ((c = l + u.length),
            (u = e(u, l, c, t)),
            (t = t.slice(0, l) + u + t.slice(c)),
            (r.lastIndex = l + u.length));
        }
        return (r.lastIndex = 0), t;
      }),
      (i.ensureValidHostname = function (e) {
        if (e.match(i.invalid_hostname_characters)) {
          if (!t)
            throw new TypeError(
              'Hostname "' +
                e +
                '" contains characters other than [A-Z0-9.-] and Punycode.js is not available'
            );
          if (t.toASCII(e).match(i.invalid_hostname_characters))
            throw new TypeError(
              'Hostname "' + e + '" contains characters other than [A-Z0-9.-]'
            );
        }
      }),
      (i.noConflict = function (t) {
        return t
          ? ((t = { URI: this.noConflict() }),
            r.URITemplate &&
              "function" == typeof r.URITemplate.noConflict &&
              (t.URITemplate = r.URITemplate.noConflict()),
            r.IPv6 &&
              "function" == typeof r.IPv6.noConflict &&
              (t.IPv6 = r.IPv6.noConflict()),
            r.SecondLevelDomains &&
              "function" == typeof r.SecondLevelDomains.noConflict &&
              (t.SecondLevelDomains = r.SecondLevelDomains.noConflict()),
            t)
          : (r.URI === this && (r.URI = g), this);
      }),
      (v.build = function (t) {
        return (
          !0 === t
            ? (this._deferred_build = !0)
            : (void 0 === t || this._deferred_build) &&
              ((this._string = i.build(this._parts)),
              (this._deferred_build = !1)),
          this
        );
      }),
      (v.clone = function () {
        return new i(this);
      }),
      (v.valueOf = v.toString =
        function () {
          return this.build(!1)._string;
        }),
      (v.protocol = d("protocol")),
      (v.username = d("username")),
      (v.password = d("password")),
      (v.hostname = d("hostname")),
      (v.port = d("port")),
      (v.query = f("query", "?")),
      (v.fragment = f("fragment", "#")),
      (v.search = function (t, e) {
        var n = this.query(t, e);
        return "string" == typeof n && n.length ? "?" + n : n;
      }),
      (v.hash = function (t, e) {
        var n = this.fragment(t, e);
        return "string" == typeof n && n.length ? "#" + n : n;
      }),
      (v.pathname = function (t, e) {
        if (void 0 === t || !0 === t) {
          var n = this._parts.path || (this._parts.hostname ? "/" : "");
          return t ? (this._parts.urn ? i.decodeUrnPath : i.decodePath)(n) : n;
        }
        return (
          (this._parts.path = this._parts.urn
            ? t
              ? i.recodeUrnPath(t)
              : ""
            : t
            ? i.recodePath(t)
            : "/"),
          this.build(!e),
          this
        );
      }),
      (v.path = v.pathname),
      (v.href = function (t, e) {
        var n;
        if (void 0 === t) return this.toString();
        (this._string = ""), (this._parts = i._parts());
        var r = t instanceof i,
          o = "object" == typeof t && (t.hostname || t.path || t.pathname);
        if (
          (t.nodeName &&
            ((o = i.getDomAttribute(t)), (t = t[o] || ""), (o = !1)),
          !r && o && void 0 !== t.pathname && (t = t.toString()),
          "string" == typeof t || t instanceof String)
        )
          this._parts = i.parse(String(t), this._parts);
        else {
          if (!r && !o) throw new TypeError("invalid input");
          for (n in (r = r ? t._parts : t))
            m.call(this._parts, n) && (this._parts[n] = r[n]);
        }
        return this.build(!e), this;
      }),
      (v.is = function (t) {
        var e = !1,
          r = !1,
          o = !1,
          s = !1,
          a = !1,
          l = !1,
          c = !1,
          u = !this._parts.urn;
        switch (
          (this._parts.hostname &&
            ((u = !1),
            (r = i.ip4_expression.test(this._parts.hostname)),
            (o = i.ip6_expression.test(this._parts.hostname)),
            (e = r || o),
            (a = (s = !e) && n && n.has(this._parts.hostname)),
            (l = s && i.idn_expression.test(this._parts.hostname)),
            (c = s && i.punycode_expression.test(this._parts.hostname))),
          t.toLowerCase())
        ) {
          case "relative":
            return u;
          case "absolute":
            return !u;
          case "domain":
          case "name":
            return s;
          case "sld":
            return a;
          case "ip":
            return e;
          case "ip4":
          case "ipv4":
          case "inet4":
            return r;
          case "ip6":
          case "ipv6":
          case "inet6":
            return o;
          case "idn":
            return l;
          case "url":
            return !this._parts.urn;
          case "urn":
            return !!this._parts.urn;
          case "punycode":
            return c;
        }
        return null;
      });
    var x = v.protocol,
      T = v.port,
      C = v.hostname;
    (v.protocol = function (t, e) {
      if (
        void 0 !== t &&
        t &&
        ((t = t.replace(/:(\/\/)?$/, "")), !t.match(i.protocol_expression))
      )
        throw new TypeError(
          'Protocol "' +
            t +
            "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]"
        );
      return x.call(this, t, e);
    }),
      (v.scheme = v.protocol),
      (v.port = function (t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (
          void 0 !== t &&
          (0 === t && (t = null),
          t &&
            ((t += ""),
            ":" === t.charAt(0) && (t = t.substring(1)),
            t.match(/[^0-9]/)))
        )
          throw new TypeError(
            'Port "' + t + '" contains characters other than [0-9]'
          );
        return T.call(this, t, e);
      }),
      (v.hostname = function (t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 !== t) {
          var n = {};
          i.parseHost(t, n), (t = n.hostname);
        }
        return C.call(this, t, e);
      }),
      (v.host = function (t, e) {
        return this._parts.urn
          ? void 0 === t
            ? ""
            : this
          : void 0 === t
          ? this._parts.hostname
            ? i.buildHost(this._parts)
            : ""
          : (i.parseHost(t, this._parts), this.build(!e), this);
      }),
      (v.authority = function (t, e) {
        return this._parts.urn
          ? void 0 === t
            ? ""
            : this
          : void 0 === t
          ? this._parts.hostname
            ? i.buildAuthority(this._parts)
            : ""
          : (i.parseAuthority(t, this._parts), this.build(!e), this);
      }),
      (v.userinfo = function (t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 === t) {
          if (!this._parts.username) return "";
          var n = i.buildUserinfo(this._parts);
          return n.substring(0, n.length - 1);
        }
        return (
          "@" !== t[t.length - 1] && (t += "@"),
          i.parseUserinfo(t, this._parts),
          this.build(!e),
          this
        );
      }),
      (v.resource = function (t, e) {
        var n;
        return void 0 === t
          ? this.path() + this.search() + this.hash()
          : ((n = i.parse(t)),
            (this._parts.path = n.path),
            (this._parts.query = n.query),
            (this._parts.fragment = n.fragment),
            this.build(!e),
            this);
      }),
      (v.subdomain = function (t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 === t) {
          if (!this._parts.hostname || this.is("IP")) return "";
          var n = this._parts.hostname.length - this.domain().length - 1;
          return this._parts.hostname.substring(0, n) || "";
        }
        return (
          (n = this._parts.hostname.length - this.domain().length),
          (n = this._parts.hostname.substring(0, n)),
          (n = new RegExp("^" + o(n))),
          t && "." !== t.charAt(t.length - 1) && (t += "."),
          t && i.ensureValidHostname(t),
          (this._parts.hostname = this._parts.hostname.replace(n, t)),
          this.build(!e),
          this
        );
      }),
      (v.domain = function (t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (("boolean" == typeof t && ((e = t), (t = void 0)), void 0 === t)) {
          if (!this._parts.hostname || this.is("IP")) return "";
          var n = this._parts.hostname.match(/\./g);
          return n && 2 > n.length
            ? this._parts.hostname
            : ((n = this._parts.hostname.length - this.tld(e).length - 1),
              (n = this._parts.hostname.lastIndexOf(".", n - 1) + 1),
              this._parts.hostname.substring(n) || "");
        }
        if (!t) throw new TypeError("cannot set domain empty");
        return (
          i.ensureValidHostname(t),
          !this._parts.hostname || this.is("IP")
            ? (this._parts.hostname = t)
            : ((n = new RegExp(o(this.domain()) + "$")),
              (this._parts.hostname = this._parts.hostname.replace(n, t))),
          this.build(!e),
          this
        );
      }),
      (v.tld = function (t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (("boolean" == typeof t && ((e = t), (t = void 0)), void 0 === t)) {
          if (!this._parts.hostname || this.is("IP")) return "";
          var r = this._parts.hostname.lastIndexOf("."),
            r = this._parts.hostname.substring(r + 1);
          return !0 !== e && n && n.list[r.toLowerCase()]
            ? n.get(this._parts.hostname) || r
            : r;
        }
        if (!t) throw new TypeError("cannot set TLD empty");
        if (t.match(/[^a-zA-Z0-9-]/)) {
          if (!n || !n.is(t))
            throw new TypeError(
              'TLD "' + t + '" contains characters other than [A-Z0-9]'
            );
          (r = new RegExp(o(this.tld()) + "$")),
            (this._parts.hostname = this._parts.hostname.replace(r, t));
        } else {
          if (!this._parts.hostname || this.is("IP"))
            throw new ReferenceError("cannot set TLD on non-domain host");
          (r = new RegExp(o(this.tld()) + "$")),
            (this._parts.hostname = this._parts.hostname.replace(r, t));
        }
        return this.build(!e), this;
      }),
      (v.directory = function (t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 === t || !0 === t) {
          if (!this._parts.path && !this._parts.hostname) return "";
          if ("/" === this._parts.path) return "/";
          var n = this._parts.path.length - this.filename().length - 1,
            n =
              this._parts.path.substring(0, n) ||
              (this._parts.hostname ? "/" : "");
          return t ? i.decodePath(n) : n;
        }
        return (
          (n = this._parts.path.length - this.filename().length),
          (n = this._parts.path.substring(0, n)),
          (n = new RegExp("^" + o(n))),
          this.is("relative") ||
            (t || (t = "/"), "/" !== t.charAt(0) && (t = "/" + t)),
          t && "/" !== t.charAt(t.length - 1) && (t += "/"),
          (t = i.recodePath(t)),
          (this._parts.path = this._parts.path.replace(n, t)),
          this.build(!e),
          this
        );
      }),
      (v.filename = function (t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 === t || !0 === t) {
          if (!this._parts.path || "/" === this._parts.path) return "";
          var n = this._parts.path.lastIndexOf("/"),
            n = this._parts.path.substring(n + 1);
          return t ? i.decodePathSegment(n) : n;
        }
        (n = !1),
          "/" === t.charAt(0) && (t = t.substring(1)),
          t.match(/\.?\//) && (n = !0);
        var r = new RegExp(o(this.filename()) + "$");
        return (
          (t = i.recodePath(t)),
          (this._parts.path = this._parts.path.replace(r, t)),
          n ? this.normalizePath(e) : this.build(!e),
          this
        );
      }),
      (v.suffix = function (t, e) {
        if (this._parts.urn) return void 0 === t ? "" : this;
        if (void 0 === t || !0 === t) {
          if (!this._parts.path || "/" === this._parts.path) return "";
          var n = this.filename(),
            r = n.lastIndexOf(".");
          return -1 === r
            ? ""
            : ((n = n.substring(r + 1)),
              (n = /^[a-z0-9%]+$/i.test(n) ? n : ""),
              t ? i.decodePathSegment(n) : n);
        }
        if (("." === t.charAt(0) && (t = t.substring(1)), (n = this.suffix())))
          r = t ? new RegExp(o(n) + "$") : new RegExp(o("." + n) + "$");
        else {
          if (!t) return this;
          this._parts.path += "." + i.recodePath(t);
        }
        return (
          r &&
            ((t = i.recodePath(t)),
            (this._parts.path = this._parts.path.replace(r, t))),
          this.build(!e),
          this
        );
      }),
      (v.segment = function (t, e, n) {
        var r = this._parts.urn ? ":" : "/",
          i = this.path(),
          o = "/" === i.substring(0, 1),
          i = i.split(r);
        if (
          (void 0 !== t &&
            "number" != typeof t &&
            ((n = e), (e = t), (t = void 0)),
          void 0 !== t && "number" != typeof t)
        )
          throw Error('Bad segment "' + t + '", must be 0-based integer');
        if (
          (o && i.shift(),
          0 > t && (t = Math.max(i.length + t, 0)),
          void 0 === e)
        )
          return void 0 === t ? i : i[t];
        if (null === t || void 0 === i[t])
          if (a(e)) {
            (i = []), (t = 0);
            for (var s = e.length; t < s; t++)
              (e[t].length || (i.length && i[i.length - 1].length)) &&
                (i.length && !i[i.length - 1].length && i.pop(), i.push(e[t]));
          } else
            (e || "string" == typeof e) &&
              ("" === i[i.length - 1] ? (i[i.length - 1] = e) : i.push(e));
        else e ? (i[t] = e) : i.splice(t, 1);
        return o && i.unshift(""), this.path(i.join(r), n);
      }),
      (v.segmentCoded = function (t, e, n) {
        var r, o;
        if (
          ("number" != typeof t && ((n = e), (e = t), (t = void 0)),
          void 0 === e)
        ) {
          if (((t = this.segment(t, e, n)), a(t)))
            for (r = 0, o = t.length; r < o; r++) t[r] = i.decode(t[r]);
          else t = void 0 !== t ? i.decode(t) : void 0;
          return t;
        }
        if (a(e)) for (r = 0, o = e.length; r < o; r++) e[r] = i.decode(e[r]);
        else e = "string" == typeof e || e instanceof String ? i.encode(e) : e;
        return this.segment(t, e, n);
      });
    var S = v.query;
    return (
      (v.query = function (t, e) {
        if (!0 === t)
          return i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ("function" == typeof t) {
          var n = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace),
            r = t.call(this, n);
          return (
            (this._parts.query = i.buildQuery(
              r || n,
              this._parts.duplicateQueryParameters,
              this._parts.escapeQuerySpace
            )),
            this.build(!e),
            this
          );
        }
        return void 0 !== t && "string" != typeof t
          ? ((this._parts.query = i.buildQuery(
              t,
              this._parts.duplicateQueryParameters,
              this._parts.escapeQuerySpace
            )),
            this.build(!e),
            this)
          : S.call(this, t, e);
      }),
      (v.setQuery = function (t, e, n) {
        var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if ("string" == typeof t || t instanceof String)
          r[t] = void 0 !== e ? e : null;
        else {
          if ("object" != typeof t)
            throw new TypeError(
              "URI.addQuery() accepts an object, string as the name parameter"
            );
          for (var o in t) m.call(t, o) && (r[o] = t[o]);
        }
        return (
          (this._parts.query = i.buildQuery(
            r,
            this._parts.duplicateQueryParameters,
            this._parts.escapeQuerySpace
          )),
          "string" != typeof t && (n = e),
          this.build(!n),
          this
        );
      }),
      (v.addQuery = function (t, e, n) {
        var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return (
          i.addQuery(r, t, void 0 === e ? null : e),
          (this._parts.query = i.buildQuery(
            r,
            this._parts.duplicateQueryParameters,
            this._parts.escapeQuerySpace
          )),
          "string" != typeof t && (n = e),
          this.build(!n),
          this
        );
      }),
      (v.removeQuery = function (t, e, n) {
        var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return (
          i.removeQuery(r, t, e),
          (this._parts.query = i.buildQuery(
            r,
            this._parts.duplicateQueryParameters,
            this._parts.escapeQuerySpace
          )),
          "string" != typeof t && (n = e),
          this.build(!n),
          this
        );
      }),
      (v.hasQuery = function (t, e, n) {
        var r = i.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return i.hasQuery(r, t, e, n);
      }),
      (v.setSearch = v.setQuery),
      (v.addSearch = v.addQuery),
      (v.removeSearch = v.removeQuery),
      (v.hasSearch = v.hasQuery),
      (v.normalize = function () {
        return this._parts.urn
          ? this.normalizeProtocol(!1)
              .normalizePath(!1)
              .normalizeQuery(!1)
              .normalizeFragment(!1)
              .build()
          : this.normalizeProtocol(!1)
              .normalizeHostname(!1)
              .normalizePort(!1)
              .normalizePath(!1)
              .normalizeQuery(!1)
              .normalizeFragment(!1)
              .build();
      }),
      (v.normalizeProtocol = function (t) {
        return (
          "string" == typeof this._parts.protocol &&
            ((this._parts.protocol = this._parts.protocol.toLowerCase()),
            this.build(!t)),
          this
        );
      }),
      (v.normalizeHostname = function (n) {
        return (
          this._parts.hostname &&
            (this.is("IDN") && t
              ? (this._parts.hostname = t.toASCII(this._parts.hostname))
              : this.is("IPv6") &&
                e &&
                (this._parts.hostname = e.best(this._parts.hostname)),
            (this._parts.hostname = this._parts.hostname.toLowerCase()),
            this.build(!n)),
          this
        );
      }),
      (v.normalizePort = function (t) {
        return (
          "string" == typeof this._parts.protocol &&
            this._parts.port === i.defaultPorts[this._parts.protocol] &&
            ((this._parts.port = null), this.build(!t)),
          this
        );
      }),
      (v.normalizePath = function (t) {
        var e = this._parts.path;
        if (!e) return this;
        if (this._parts.urn)
          return (
            (this._parts.path = i.recodeUrnPath(this._parts.path)),
            this.build(!t),
            this
          );
        if ("/" === this._parts.path) return this;
        var n,
          r,
          o,
          s = "";
        for (
          "/" !== e.charAt(0) && ((n = !0), (e = "/" + e)),
            e = e.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/"),
            n && (s = e.substring(1).match(/^(\.\.\/)+/) || "") && (s = s[0]);
          (r = e.indexOf("/..")), -1 !== r;

        )
          0 !== r
            ? ((o = e.substring(0, r).lastIndexOf("/")),
              -1 === o && (o = r),
              (e = e.substring(0, o) + e.substring(r + 3)))
            : (e = e.substring(3));
        return (
          n && this.is("relative") && (e = s + e.substring(1)),
          (e = i.recodePath(e)),
          (this._parts.path = e),
          this.build(!t),
          this
        );
      }),
      (v.normalizePathname = v.normalizePath),
      (v.normalizeQuery = function (t) {
        return (
          "string" == typeof this._parts.query &&
            (this._parts.query.length
              ? this.query(
                  i.parseQuery(this._parts.query, this._parts.escapeQuerySpace)
                )
              : (this._parts.query = null),
            this.build(!t)),
          this
        );
      }),
      (v.normalizeFragment = function (t) {
        return (
          this._parts.fragment ||
            ((this._parts.fragment = null), this.build(!t)),
          this
        );
      }),
      (v.normalizeSearch = v.normalizeQuery),
      (v.normalizeHash = v.normalizeFragment),
      (v.iso8859 = function () {
        var t = i.encode,
          e = i.decode;
        (i.encode = escape), (i.decode = decodeURIComponent);
        try {
          this.normalize();
        } finally {
          (i.encode = t), (i.decode = e);
        }
        return this;
      }),
      (v.unicode = function () {
        var t = i.encode,
          e = i.decode;
        (i.encode = h), (i.decode = unescape);
        try {
          this.normalize();
        } finally {
          (i.encode = t), (i.decode = e);
        }
        return this;
      }),
      (v.readable = function () {
        var e = this.clone();
        e.username("").password("").normalize();
        var n = "";
        if (
          (e._parts.protocol && (n += e._parts.protocol + "://"),
          e._parts.hostname &&
            (e.is("punycode") && t
              ? ((n += t.toUnicode(e._parts.hostname)),
                e._parts.port && (n += ":" + e._parts.port))
              : (n += e.host())),
          e._parts.hostname &&
            e._parts.path &&
            "/" !== e._parts.path.charAt(0) &&
            (n += "/"),
          (n += e.path(!0)),
          e._parts.query)
        ) {
          for (
            var r = "", o = 0, s = e._parts.query.split("&"), a = s.length;
            o < a;
            o++
          ) {
            var l = (s[o] || "").split("="),
              r =
                r +
                ("&" +
                  i
                    .decodeQuery(l[0], this._parts.escapeQuerySpace)
                    .replace(/&/g, "%26"));
            void 0 !== l[1] &&
              (r +=
                "=" +
                i
                  .decodeQuery(l[1], this._parts.escapeQuerySpace)
                  .replace(/&/g, "%26"));
          }
          n += "?" + r.substring(1);
        }
        return (n += i.decodeQuery(e.hash(), !0));
      }),
      (v.absoluteTo = function (t) {
        var e,
          n,
          r = this.clone(),
          o = ["protocol", "username", "password", "hostname", "port"];
        if (this._parts.urn)
          throw Error(
            "URNs do not have any generally defined hierarchical components"
          );
        if (
          (t instanceof i || (t = new i(t)),
          r._parts.protocol || (r._parts.protocol = t._parts.protocol),
          this._parts.hostname)
        )
          return r;
        for (e = 0; (n = o[e]); e++) r._parts[n] = t._parts[n];
        return (
          r._parts.path
            ? ".." === r._parts.path.substring(-2) && (r._parts.path += "/")
            : ((r._parts.path = t._parts.path),
              r._parts.query || (r._parts.query = t._parts.query)),
          "/" !== r.path().charAt(0) &&
            ((o = (o = t.directory())
              ? o
              : 0 === t.path().indexOf("/")
              ? "/"
              : ""),
            (r._parts.path = (o ? o + "/" : "") + r._parts.path),
            r.normalizePath()),
          r.build(),
          r
        );
      }),
      (v.relativeTo = function (t) {
        var e,
          n,
          r,
          o,
          s = this.clone().normalize();
        if (s._parts.urn)
          throw Error(
            "URNs do not have any generally defined hierarchical components"
          );
        if (
          ((t = new i(t).normalize()),
          (e = s._parts),
          (n = t._parts),
          (r = s.path()),
          (o = t.path()),
          "/" !== r.charAt(0))
        )
          throw Error("URI is already relative");
        if ("/" !== o.charAt(0))
          throw Error(
            "Cannot calculate a URI relative to another relative URI"
          );
        return (
          e.protocol === n.protocol && (e.protocol = null),
          e.username !== n.username ||
          e.password !== n.password ||
          null !== e.protocol ||
          null !== e.username ||
          null !== e.password ||
          e.hostname !== n.hostname ||
          e.port !== n.port
            ? s.build()
            : ((e.hostname = null),
              (e.port = null),
              r === o
                ? ((e.path = ""), s.build())
                : (t = i.commonPath(s.path(), t.path()))
                ? ((n = n.path
                    .substring(t.length)
                    .replace(/[^\/]*$/, "")
                    .replace(/.*?\//g, "../")),
                  (e.path = n + e.path.substring(t.length)),
                  s.build())
                : s.build())
        );
      }),
      (v.equals = function (t) {
        var e = this.clone();
        t = new i(t);
        var n,
          r = {},
          o = {},
          s = {};
        if ((e.normalize(), t.normalize(), e.toString() === t.toString()))
          return !0;
        if (
          ((r = e.query()),
          (o = t.query()),
          e.query(""),
          t.query(""),
          e.toString() !== t.toString() || r.length !== o.length)
        )
          return !1;
        (r = i.parseQuery(r, this._parts.escapeQuerySpace)),
          (o = i.parseQuery(o, this._parts.escapeQuerySpace));
        for (n in r)
          if (m.call(r, n)) {
            if (a(r[n])) {
              if (!u(r[n], o[n])) return !1;
            } else if (r[n] !== o[n]) return !1;
            s[n] = !0;
          }
        for (n in o) if (m.call(o, n) && !s[n]) return !1;
        return !0;
      }),
      (v.duplicateQueryParameters = function (t) {
        return (this._parts.duplicateQueryParameters = !!t), this;
      }),
      (v.escapeQuerySpace = function (t) {
        return (this._parts.escapeQuerySpace = !!t), this;
      }),
      i
    );
  })
  /*!
   * History API JavaScript Library v4.2.0
   *
   * Support: IE8+, FF3+, Opera 9+, Safari, Chrome and other
   *
   * Copyright 2011-2014, Dmitrii Pakhtinov ( spb.piksel@gmail.com )
   *
   * http://spb-piksel.ru/
   *
   * Dual licensed under the MIT and GPL licenses:
   *   http://www.opensource.org/licenses/mit-license.php
   *   http://www.gnu.org/licenses/gpl.html
   *
   * Update: 2014-11-06 21:35
   */,
  (function (t) {
    "function" == typeof define && define.amd
      ? define(
          "object" != typeof document || "loading" !== document.readyState
            ? []
            : "html5-history-api",
          t
        )
      : t();
  })(function () {
    function t(t, e) {
      var n = v.history !== T;
      n && (v.history = T), t.apply(T, e), n && (v.history = C);
    }
    function e() {}
    function n(t, e, r) {
      if (t == f || "" === t || e)
        (t = e ? t : x.href),
          (!E || r) &&
            ((t = t.replace(/^[^#]*/, "") || "#"),
            (t =
              x.protocol.replace(/:.*$|$/, ":") +
              "//" +
              x.host +
              P.basepath +
              t.replace(RegExp("^#[/]?(?:" + P.type + ")?"), "")));
      else {
        var e = n(),
          i = m.getElementsByTagName("base")[0];
        !r &&
          i &&
          i.getAttribute("href") &&
          ((i.href = i.href), (e = n(i.href, f, d))),
          (r = e.d),
          (i = e.h),
          (t = "" + t),
          (t = /^(?:\w+\:)?\/\//.test(t)
            ? 0 === t.indexOf("/")
              ? i + t
              : t
            : i +
              "//" +
              e.g +
              (0 === t.indexOf("/")
                ? t
                : 0 === t.indexOf("?")
                ? r + t
                : 0 === t.indexOf("#")
                ? r + e.e + t
                : r.replace(/[^\/]+$/g, "") + t));
      }
      H.href = t;
      var t =
          /(?:(\w+\:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/.exec(
            H.href
          ),
        e = t[2] + (t[3] ? ":" + t[3] : ""),
        r = t[4] || "/",
        i = t[5] || "",
        o = "#" === t[6] ? "" : t[6] || "",
        s = r + i + o,
        a = r.replace(RegExp("^" + P.basepath, "i"), P.type) + i;
      return {
        b: t[1] + "//" + e + s,
        h: t[1],
        g: e,
        i: t[2],
        k: t[3] || "",
        d: r,
        e: i,
        a: o,
        c: s,
        j: a,
        f: a + o,
      };
    }
    function r() {
      var t;
      try {
        (t = v.sessionStorage), t.setItem(L + "t", "1"), t.removeItem(L + "t");
      } catch (e) {
        t = {
          getItem: function (t) {
            return (
              (t = m.cookie.split(t + "=")),
              (1 < t.length && t.pop().split(";").shift()) || "null"
            );
          },
          setItem: function (t) {
            var e = {};
            (e[x.href] = C.state) && (m.cookie = t + "=" + w.stringify(e));
          },
        };
      }
      try {
        W = w.parse(t.getItem(L)) || {};
      } catch (n) {
        W = {};
      }
      q(
        N + "unload",
        function () {
          t.setItem(L, w.stringify(W));
        },
        g
      );
    }
    function i(t, n, r, i) {
      var o = 0;
      r || ((r = { set: e }), (o = 1));
      var s = !r.set,
        a = !r.get,
        l = {
          configurable: d,
          set: function () {
            s = 1;
          },
          get: function () {
            a = 1;
          },
        };
      try {
        _(t, n, l), (t[n] = t[n]), _(t, n, r);
      } catch (c) {}
      if (
        !(
          (s && a) ||
          (t.__defineGetter__ &&
            (t.__defineGetter__(n, l.get),
            t.__defineSetter__(n, l.set),
            (t[n] = t[n]),
            r.get && t.__defineGetter__(n, r.get),
            r.set && t.__defineSetter__(n, r.set)),
          s && a)
        )
      ) {
        if (o) return g;
        if (t === v) {
          try {
            var u = t[n];
            t[n] = f;
          } catch (p) {}
          if ("execScript" in v)
            v.execScript("Public " + n, "VBScript"),
              v.execScript("var " + n + ";", "JavaScript");
          else
            try {
              _(t, n, { value: e });
            } catch (h) {
              "onpopstate" === n &&
                (q(
                  "popstate",
                  (r = function () {
                    O("popstate", r, g);
                    var e = t.onpopstate;
                    (t.onpopstate = f),
                      setTimeout(function () {
                        t.onpopstate = e;
                      }, 1);
                  }),
                  g
                ),
                (Q = 0));
            }
          t[n] = u;
        } else
          try {
            try {
              var m = b.create(t);
              _(b.getPrototypeOf(m) === t ? m : t, n, r);
              for (var y in t)
                "function" == typeof t[y] && (m[y] = t[y].bind(t));
              try {
                i.call(m, m, t);
              } catch (w) {}
              t = m;
            } catch (x) {
              _(t.constructor.prototype, n, r);
            }
          } catch (T) {
            return g;
          }
      }
      return t;
    }
    function o(t, e, n) {
      return (
        (n = n || {}),
        (t = t === Y ? x : t),
        (n.set =
          n.set ||
          function (n) {
            t[e] = n;
          }),
        (n.get =
          n.get ||
          function () {
            return t[e];
          }),
        n
      );
    }
    function s(t, n) {
      var r = ("" + ("string" == typeof t ? t : t.type)).replace(/^on/, ""),
        o = z[r];
      if (o) {
        if (((n = "string" == typeof t ? n : t), n.target == f))
          for (
            var s = ["target", "currentTarget", "srcElement", "type"];
            (t = s.pop());

          )
            n = i(n, t, {
              get:
                "type" === t
                  ? function () {
                      return r;
                    }
                  : function () {
                      return v;
                    },
            });
        Q &&
          (("popstate" === r ? v.onpopstate : v.onhashchange) || e).call(v, n);
        for (var s = 0, a = o.length; s < a; s++) o[s].call(v, n);
        return d;
      }
      return R(t, n);
    }
    function a() {
      var t = m.createEvent ? m.createEvent("Event") : m.createEventObject();
      t.initEvent ? t.initEvent("popstate", g, g) : (t.type = "popstate"),
        (t.state = C.state),
        s(t);
    }
    function l(t, e, r, i) {
      E
        ? (F = x.href)
        : (0 === M && (M = 2),
          (e = n(e, 2 === M && -1 !== ("" + e).indexOf("#"))),
          e.c !== n().c &&
            ((F = i), r ? x.replace("#" + e.f) : (x.hash = e.f))),
        !A && t && (W[x.href] = t),
        (B = g);
    }
    function c(t) {
      var e = F;
      if (((F = x.href), e)) {
        U !== x.href && a();
        var t = t || v.event,
          e = n(e, d),
          r = n();
        t.oldURL || ((t.oldURL = e.b), (t.newURL = r.b)), e.a !== r.a && s(t);
      }
    }
    function u(t) {
      setTimeout(function () {
        q(
          "popstate",
          function (t) {
            (U = x.href),
              A ||
                (t = i(t, "state", {
                  get: function () {
                    return C.state;
                  },
                })),
              s(t);
          },
          g
        );
      }, 0),
        !E && t !== d && "location" in C && (h($.hash), B && ((B = g), a()));
    }
    function p(t) {
      var e,
        t = t || v.event;
      t: {
        for (e = t.target || t.srcElement; e; ) {
          if ("A" === e.nodeName) break t;
          e = e.parentNode;
        }
        e = void 0;
      }
      var r =
        "defaultPrevented" in t ? t.defaultPrevented : t.returnValue === g;
      e &&
        "A" === e.nodeName &&
        !r &&
        ((r = n()),
        (e = n(e.getAttribute("href", 2))),
        r.b.split("#").shift() === e.b.split("#").shift() &&
          e.a &&
          (r.a !== e.a && ($.hash = e.a),
          h(e.a),
          t.preventDefault ? t.preventDefault() : (t.returnValue = g)));
    }
    function h(t) {
      var e = m.getElementById((t = (t || "").replace(/^#/, "")));
      e &&
        e.id === t &&
        "A" === e.nodeName &&
        ((t = e.getBoundingClientRect()),
        v.scrollTo(
          y.scrollLeft || 0,
          t.top + (y.scrollTop || 0) - (y.clientTop || 0)
        ));
    }
    var d = !0,
      f = null,
      g = !1,
      v = ("object" == typeof window ? window : this) || {};
    if (!v.history || "emulate" in v.history) return v.history;
    var m = v.document,
      y = m.documentElement,
      b = v.Object,
      w = v.JSON,
      x = v.location,
      T = v.history,
      C = T,
      S = T.pushState,
      k = T.replaceState,
      E = !!S,
      A = "state" in T,
      _ = b.defineProperty,
      $ = i({}, "t") ? {} : m.createElement("a"),
      N = "",
      D = v.addEventListener ? "addEventListener" : (N = "on") && "attachEvent",
      j = v.removeEventListener ? "removeEventListener" : "detachEvent",
      I = v.dispatchEvent ? "dispatchEvent" : "fireEvent",
      q = v[D],
      O = v[j],
      R = v[I],
      P = { basepath: "/", redirect: 0, type: "/", init: 0 },
      L = "__historyAPI__",
      H = m.createElement("a"),
      F = x.href,
      U = "",
      Q = 1,
      B = g,
      M = 0,
      W = {},
      z = {},
      V = m.title,
      X = { onhashchange: f, onpopstate: f },
      G = {
        setup: function (t, e, n) {
          (P.basepath = ("" + (t == f ? P.basepath : t)).replace(
            /(?:^|\/)[^\/]*$/,
            "/"
          )),
            (P.type = e == f ? P.type : e),
            (P.redirect = n == f ? P.redirect : !!n);
        },
        redirect: function (t, e) {
          if ((C.setup(e, t), (e = P.basepath), v.top == v.self)) {
            var r = n(f, g, d).c,
              i = x.pathname + x.search;
            E
              ? ((i = i.replace(/([^\/])$/, "$1/")),
                r != e && RegExp("^" + e + "$", "i").test(i) && x.replace(r))
              : i != e &&
                ((i = i.replace(/([^\/])\?/, "$1/?")),
                RegExp("^" + e, "i").test(i) &&
                  x.replace(
                    e + "#" + i.replace(RegExp("^" + e, "i"), P.type) + x.hash
                  ));
          }
        },
        pushState: function (e, n, r) {
          var i = m.title;
          V != f && (m.title = V),
            S && t(S, arguments),
            l(e, r),
            (m.title = i),
            (V = n);
        },
        replaceState: function (e, n, r) {
          var i = m.title;
          V != f && (m.title = V),
            delete W[x.href],
            k && t(k, arguments),
            l(e, r, d),
            (m.title = i),
            (V = n);
        },
        location: {
          set: function (t) {
            0 === M && (M = 1), (v.location = t);
          },
          get: function () {
            return 0 === M && (M = 1), E ? x : $;
          },
        },
        state: {
          get: function () {
            return W[x.href] || f;
          },
        },
      },
      Y = {
        assign: function (t) {
          0 === ("" + t).indexOf("#") ? l(f, t) : x.assign(t);
        },
        reload: function () {
          x.reload();
        },
        replace: function (t) {
          0 === ("" + t).indexOf("#") ? l(f, t, d) : x.replace(t);
        },
        toString: function () {
          return this.href;
        },
        href: {
          get: function () {
            return n().b;
          },
        },
        protocol: f,
        host: f,
        hostname: f,
        port: f,
        pathname: {
          get: function () {
            return n().d;
          },
        },
        search: {
          get: function () {
            return n().e;
          },
        },
        hash: {
          set: function (t) {
            l(f, ("" + t).replace(/^(#|)/, "#"), g, F);
          },
          get: function () {
            return n().a;
          },
        },
      };
    return (function () {
      var t = m.getElementsByTagName("script"),
        t = (t[t.length - 1] || {}).src || "";
      (-1 !== t.indexOf("?") ? t.split("?").pop() : "").replace(
        /(\w+)(?:=([^&]*))?/g,
        function (t, e, n) {
          P[e] = (n || "").replace(/^(0|false)$/, "");
        }
      ),
        q(N + "hashchange", c, g);
      var e = [Y, $, X, v, G, C];
      A && delete G.state;
      for (var s = 0; s < e.length; s += 2)
        for (var a in e[s])
          if (e[s].hasOwnProperty(a))
            if ("function" == typeof e[s][a]) e[s + 1][a] = e[s][a];
            else {
              if (
                ((t = o(e[s], a, e[s][a])),
                !i(e[s + 1], a, t, function (t, n) {
                  n === C && (v.history = C = e[s + 1] = t);
                }))
              )
                return O(N + "hashchange", c, g), g;
              e[s + 1] === v && (z[a] = z[a.substr(2)] = []);
            }
      return (
        C.setup(),
        P.redirect && C.redirect(),
        P.init && (M = 1),
        !A && w && r(),
        E || m[D](N + "click", p, g),
        "complete" === m.readyState
          ? u(d)
          : (!E && n().c !== P.basepath && (B = d), q(N + "load", u, g)),
        d
      );
    })()
      ? ((C.emulate = !E),
        (v[D] = function (t, e, n) {
          t in z
            ? z[t].push(e)
            : 3 < arguments.length
            ? q(t, e, n, arguments[3])
            : q(t, e, n);
        }),
        (v[j] = function (t, e, n) {
          var r = z[t];
          if (r) {
            for (t = r.length; t--; )
              if (r[t] === e) {
                r.splice(t, 1);
                break;
              }
          } else O(t, e, n);
        }),
        (v[I] = s),
        C)
      : void 0;
  });
var addclass = function (t, e) {
    t.classList ? t.classList.add(e) : (t.className += " " + e);
  },
  remclass = function (t, e) {
    t.classList
      ? t.classList.remove(e)
      : (t.className = t.className.replace(
          new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"),
          " "
        ));
  },
  hasclass = function (t, e) {
    return t.classList
      ? t.classList.contains(e)
      : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className);
  };
document.addEventListener("DOMContentLoaded", function () {
  var t = document.createElement("a");
  t.innerHTML =
    '<svg aria-hidden="true" class="i-share"><use xlink:href="img/icons.svg#i-share"></use></svg> SHARE';
  var e = document.createElement("div");
  addclass(e, "permalink");
  var n = document.createElement("div");
  addclass(n, "sharebox");
  var r =
      '<p><label>Link to this section:<input type="url" value="%s" readonly> Shortcut to copy the link: <kbd>ctrl</kbd>+<kbd>C</kbd> <em>or</em> <kbd>⌘</kbd><kbd>C</kbd></label></p><p><a href="mailto:?subject=Web%20Accessibility%20–%20How%20to%20Meet%20WCAG&body=Hi!%0AYou%20might%20be%20interested%20in%20this%20section%20of%20the%20Web%20Content%20Accessibility%20Guidelines%20(WCAG)%3A%0A%0A%s">E-mail a link to this section</a><button>Close</button></p>',
    i = window.location.origin + window.location.pathname,
    o = document.querySelectorAll(".sc-wrapper footer a");
  Array.prototype.forEach.call(o, function (o, s) {
    var a = t.cloneNode(!0),
      l = o.parentNode.parentNode.id;
    a.setAttribute("href", "#" + l),
      a.setAttribute(
        "aria-label",
        "Share Link to the section “" +
          o.parentNode.parentNode.querySelector("h4[id]").textContent +
          "”"
      );
    var c = r.replace("%s", i + "#" + l).replace("%s", i + "#" + l),
      u = n.cloneNode(!0);
    u.innerHTML = c;
    var p = e.cloneNode(!0);
    p.appendChild(a),
      p.appendChild(u),
      a.addEventListener("click", function (t) {
        var e = this.nextSibling,
          n = e.querySelector("input");
        hasclass(e, "open")
          ? remclass(e, "open")
          : (addclass(e, "open"), n.select(), n.focus()),
          t.preventDefault();
      }),
      o.parentNode.insertBefore(p, o);
  });
  var s = document.querySelectorAll(".sharebox button");
  Array.prototype.forEach.call(s, function (t, e) {
    t.addEventListener("click", function () {
      for (
        var e = document.querySelectorAll(".sharebox.open"), n = e.length - 1;
        n >= 0;
        n--
      )
        remclass(e[n], "open");
      t.parentNode.parentNode.parentNode.querySelector("a").focus();
    });
  });
}) /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */,
  window.matchMedia ||
    (window.matchMedia = (function () {
      "use strict";
      var t = window.styleMedia || window.media;
      if (!t) {
        var e = document.createElement("style"),
          n = document.getElementsByTagName("script")[0],
          r = null;
        (e.type = "text/css"),
          (e.id = "matchmediajs-test"),
          n.parentNode.insertBefore(e, n),
          (r =
            ("getComputedStyle" in window &&
              window.getComputedStyle(e, null)) ||
            e.currentStyle),
          (t = {
            matchMedium: function (t) {
              var n = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
              return (
                e.styleSheet ? (e.styleSheet.cssText = n) : (e.textContent = n),
                "1px" === r.width
              );
            },
          });
      }
      return function (e) {
        return { matches: t.matchMedium(e || "all"), media: e || "all" };
      };
    })()),
  jQuery(document).ready(function (t) {
    function e(e, n) {
      if (e.length < 3) return e.join(" " + n + " ");
      for (var r = [], i = e.length - 2; i >= 0; i--) r[i] = t.trim(e[i]);
      return r.join(", ") + ", " + n + " " + t.trim(e[e.length - 1]);
    }
    function n() {
      t(".maininner").addClass("loading"),
        t(".filter-status .loaded").hide(),
        t(".filter-status .loading").show();
    }
    function r(t) {
      window.noAddToHistory ||
        (history.pushState(null, null, t),
        t.fragment(""),
        localStorage.setItem("url-" + t.filename(), t)),
        u();
    }
    function i() {
      var e = window.history.location || window.location,
        n = new URI(e),
        r = n.search(!0);
      if (
        (r.hidesidebar &&
          (t(".sidebar").hide(),
          t(".mainrow").addClass("sidebar-hidden"),
          t("#showsidebars").show().focus()),
        r.currentsidebar &&
          t("a[href=" + r.currentsidebar + "]").trigger("click"),
        r.tags &&
          (t("#tags .btn")
            .removeClass("btn-primary")
            .addClass("btn-default")
            .attr("aria-pressed", "false"),
          t(
            '#tags .btn[data-tag="' +
              r.tags.split(",").join('"], #tags .btn[data-tag="') +
              '"]'
          )
            .addClass("btn-primary")
            .removeClass("btn-default")
            .attr("aria-pressed", !0)),
        r.levels &&
          (t("#filter-levels input").prop("checked", !0),
          t(
            '#filter-levels input[value="' +
              r.levels.split(",").join('"], #filter-levels input[value="') +
              '"]'
          ).prop("checked", !1)),
        r.technologies &&
          (t("#filter-technologies input").prop("checked", !0),
          t(
            '#filter-technologies input[value="' +
              r.technologies
                .split(",")
                .join('"], #filter-technologies input[value="') +
              '"]'
          ).prop("checked", !1)),
        r.techniques &&
          (t("#filter-techniques input").prop("checked", !0),
          t(
            '#filter-techniques input[value="' +
              r.techniques
                .split(",")
                .join('"], #filter-techniques input[value="') +
              '"]'
          ).prop("checked", !1)),
        r.versions &&
          t('#wcagver [value="' + r.versions + '"]').prop("selected", !0),
        t(".btn-techniques").each(function (e, n) {
          var r = t(n);
          r.attr("aria-expanded", !1),
            t("#" + r.attr("aria-controls")).removeClass("in");
        }),
        r.showtechniques &&
          t(
            '.btn-techniques[aria-controls="techniques-' +
              r.showtechniques
                .split(",")
                .join('"], .btn-techniques[aria-controls="techniques-') +
              '"]'
          ).each(function (e, n) {
            var r = t(n);
            r.attr("aria-expanded", !0),
              t("#" + r.attr("aria-controls")).addClass("in");
          }),
        s(),
        l(),
        a(),
        o(),
        t("#tags button:disabled").first().addClass("first"),
        n.hash())
      ) {
        var i = n.hash();
        if (
          i.match(/(.*)-sufficient-head$/) ||
          i.match(/(.*)-tech-optional-head$/) ||
          i.match(/(.*)-failures-head$/)
        )
          t('[data-historicalid="' + i + '"]')
            .parents(".collapse")
            .collapse("show"),
            p(t('[data-historicalid="' + i.replace("#", "") + '"]'));
        else {
          var c = t('[data-alt-id~="' + i.replace("#", "") + '"]');
          c.length
            ? (p(c), history.replaceState(null, null, "#" + c.attr("id")))
            : p(t(i));
        }
      }
    }
    function o() {
      var e = t("#tags .btn-primary:not(:disabled)"),
        n = t("#audiences input:checked"),
        r = t("#filter-levels input:not(:checked)");
      if (e.length > 0) {
        var i = [],
          o = [],
          s = [];
        e.each(function (e, n) {
          i.push(t(n).attr("data-tag"));
        }),
          n.each(function (e, n) {
            o.push(t(n).val());
          });
        for (var a = o.length - 1; a >= 0; a--)
          for (var l = i.length - 1; l >= 0; l--)
            s.push(".sc-wrapper[data-tags-" + o[a] + "~=" + i[l] + "]");
        var u = s.join(", ");
        t(".sc-wrapper").removeClass("current"),
          t(u).addClass("current"),
          t("#deselecttags").prop("disabled", !1);
      } else t(".sc-wrapper").addClass("current"), t("#deselecttags").prop("disabled", !0);
      if (
        (2 == r.length
          ? t("#filter-levels input:checked").prop("disabled", !0)
          : t("#filter-levels input:checked").prop("disabled", !1),
        r.length > 0
          ? (t("#filter-levels button.filters").prop("disabled", !1),
            r.each(function (e, n) {
              t(".sc-wrapper.current").each(function (e, r) {
                t(r).hasClass("filter-levels-" + t(n).val()) &&
                  t(r).removeClass("current");
              });
            }))
          : t("#filter-levels button.filters").prop("disabled", !0),
        t(".sc-wrapper").each(function (e, n) {
          t(n).is(".current")
            ? t('.overview [href="#' + t(n).find("h4").attr("id") + '"]')
                .parent()
                .show()
            : t('.overview [href="#' + t(n).find("h4").attr("id") + '"]')
                .parent()
                .hide();
        }),
        t(".guideline").each(function (e, n) {
          t(n).has(".sc-wrapper.current").length > 0
            ? (t(n).find("> .panel-heading, > .panel-body").show(),
              t('.overview [href="#' + t(n).find("h3").attr("id") + '"]')
                .parent()
                .show())
            : (t(n).find("> .panel-heading, > .panel-body").hide(),
              t('.overview [href="#' + t(n).find("h3").attr("id") + '"]')
                .parent()
                .hide());
        }),
        t(".principle + .guidelines").each(function (e, n) {
          t(n).has(".sc-wrapper.current").length > 0
            ? (t(n).prev().show(),
              t('.overview [href="#' + t(n).prev().find("h2").attr("id") + '"]')
                .parent()
                .show())
            : (t(n).prev().hide(),
              t('.overview [href="#' + t(n).prev().find("h2").attr("id") + '"]')
                .parent()
                .hide());
        }),
        t(".sc-wrapper:not(.current)").length > 0)
      ) {
        t("#hiddensc").empty(),
          t(
            '<div class="panel-heading"><h2 style="margin: 0;">Filtered-Out Success Criteria <button class="clearall btn btn-info btn-sm" hidden="" style="display: inline-block;"><span class="glyphicon glyphicon-refresh"></span> Clear filters</button></h2></div><div class="panel-body"><p><strong>The following success criteria are not shown based on the selected version, tags, and/or filters:</strong></p></div>'
          ).appendTo("#hiddensc"),
          t('<div class="panel-body hiddensc-inner">').appendTo("#hiddensc");
        var p = t("<ul>");
        t(".sc-wrapper:not(.current) h4").each(function (e, n) {
          p.append(
            "<li>" +
              t(n).find("> strong").text() +
              " " +
              t(n).find("> span").text() +
              " " +
              t(n).parent().find(".newin21").text() +
              "</li>"
          ).appendTo("#hiddensc .hiddensc-inner");
        }),
          t("#hiddensc, #hiddennav").show();
      } else t("#hiddensc, #hiddennav").hide();
      c(), f();
    }
    function s() {
      t("[class*=filter-tech]").show();
      var e = [],
        n = t("#filter-technologies input:not(:checked)");
      if (n.length > 0) {
        n.each(function (n, r) {
          e.push(t(r).val());
        });
        var r = ".filter-tech-" + e.join(", .filter-tech-");
        t(r).hide(),
          c(),
          f(),
          t("#filter-technologies button.filters").prop("disabled", !1);
      } else t("#filter-technologies button.filters").prop("disabled", !0);
    }
    function a() {
      t("[data-versions]").hide(),
        t(".sc-wrapper.current").removeClass("current");
      var e = t("#wcagver").val();
      "2.1only" == e
        ? t('[data-versions="2.1 "]').show().addClass("current")
        : t('[data-versions*="' + e + '"]')
            .show()
            .addClass("current");
    }
    function l() {
      for (
        var e = t("#filter-techniques-content"),
          n = [],
          r = [],
          i = e.find("input:checked"),
          o = i.length - 1;
        o >= 0;
        o--
      )
        n.push(t(i[o]).val());
      var s =
          '.techniques-button input[name$="' +
          n.join('"], .techniques-button input[name$="') +
          '"]',
        a = ".tbox-" + n.join(", .tbox-");
      t(s).prop("checked", !0), t(a).addClass("active");
      var l = e.find("input:not(:checked)");
      if (l.length > 0) {
        for (var c = l.length - 1; c >= 0; c--) r.push(t(l[c]).val());
        (s =
          '.techniques-button input[name$="' +
          r.join('"], .techniques-button input[name$="') +
          '"]'),
          (a = ".tbox-" + r.join(", .tbox-")),
          t(s).prop("checked", !1),
          t(a).removeClass("active"),
          t("#filter-techniques button.filters").prop("disabled", !1);
      } else t("#filter-techniques button.filters").prop("disabled", !0);
    }
    function c() {
      var e = window.history.location || window.location,
        n = new URI(e),
        i = [];
      n.removeSearch("tags"),
        t("#tags .btn-primary").each(function (e, r) {
          i.push(t(r).data("tag")), n.setSearch("tags", i.join(","));
        }),
        t("#filters .sbbox").each(function (e, r) {
          var i = [];
          t(r)
            .find("input:not(:checked)")
            .each(function (e, n) {
              i.push(t(n).val());
            }),
            n.removeSearch(r.id.replace(/filter-/gi, "")),
            i.length > 0 &&
              n.setSearch(r.id.replace(/filter-/gi, ""), i.join(",") + "");
        }),
        r(n);
    }
    function u() {
      t("body").scrollspy({
        target: ".overview.spy-active",
        offset: t(".navrow").outerHeight() + 10,
      });
    }
    function p(e) {
      var n = window.history.location || window.location,
        i = new URI(n),
        o = 60;
      return (
        t(".navrow").outerHeight() > 0 && (o = t(".navrow").outerHeight() + 5),
        setTimeout(function () {
          window.scrollTo(0, e.offset().top - o);
        }, 100),
        i.fragment("#" + t(e).attr("id")),
        r(i),
        e.attr("tabindex", "-1").focus(),
        !1
      );
    }
    function h() {
      var e = t(".sc-content hr");
      e.hide(),
        e
          .prev()
          .append(
            ' <button type="button" aria-expanded="false" class="btn btn-info btn-xs"><span class="word-show"><svg aria-hidden="true" class="i-chevron-right"><use xlink:href="img/icons.svg#i-chevron-right"></use></svg> Show</span><span class="word-hide"><svg aria-hidden="true" class="i-chevron-down"><use xlink:href="img/icons.svg#i-chevron-down"></use></svg> Hide</span> full description</button>'
          ),
        e.find("~ *").hide(),
        e
          .prev()
          .find("button")
          .on("click", function (e) {
            e.preventDefault(),
              t(this)
                .attr("aria-expanded", function (t, e) {
                  return "true" === e ? "false" : "true";
                })
                .parent()
                .find("~ *:not(hr)")
                .toggle();
          });
    }
    function d() {
      t("html").addClass("has-js"),
        t(window).width() > 896
          ? t("html").addClass("large")
          : t("html").removeClass("large"),
        t(window).width() < 480 &&
          t("#hidesidebars").not(":visible").trigger("click"),
        t(".mainrow aside > div").css("top", t(".navrow").height()),
        t("#hidesidebars").on("click", function () {
          var e = window.history.location || window.location,
            n = new URI(e);
          n.addSearch("hidesidebar", !0),
            t(".sidebar").hide(),
            t(".mainrow").addClass("sidebar-hidden"),
            t("#showsidebars").show().focus(),
            r(n);
        }),
        t("#showsidebars").on("click", function () {
          var e = window.history.location || window.location,
            n = new URI(e);
          n.removeSearch("hidesidebar"),
            t(".sidebar").show(),
            t(".mainrow").removeClass("sidebar-hidden"),
            t("#showsidebars").hide(),
            t("#hidesidebars").focus(),
            r(n);
        }),
        t("#navtabs a").on("click", function (e) {
          var n = window.history.location || window.location,
            i = new URI(n);
          i.setSearch("currentsidebar", t(this).attr("href")), r(i);
        }),
        t("#overview").on("click", "a", function (e) {
          e.preventDefault();
          var n,
            r = t(e.target);
          return (
            (n = r.is("a") ? r.attr("href") : r.parents("a").attr("href")),
            p(t(n)),
            !1
          );
        }),
        t("#hiddennav").on("click", function (e) {
          e.preventDefault(), p(t("#hiddensc"));
        }),
        t(".maininner").on(
          "webkitAnimationEnd oanimationend msAnimationEnd animationend",
          function (e) {
            t(this).removeClass("loading"),
              t(".filter-status .loaded").show(),
              t(".filter-status .loading").hide();
          }
        ),
        t("#deselecttags").on("click", function (e) {
          e.preventDefault(),
            t("#tags .btn-primary")
              .removeClass("btn-primary")
              .addClass("btn-default")
              .attr("aria-pressed", "false"),
            s(),
            o(),
            f(),
            t(this).prop("disabled", !0);
        }),
        t("#wcagver").on("change", function (e) {
          e.preventDefault();
          var n = window.history.location || window.location,
            i = new URI(n);
          i.setSearch("versions", t("#wcagver").val()),
            s(),
            a(),
            o(),
            f(),
            r(i);
        }),
        svg4everybody();
    }
    t("#filter-technologies").on(
      "change",
      "input[type=checkbox]",
      function (t) {
        n(), a(), s();
      }
    ),
      t("#filter-levels").on("change", "input[type=checkbox]", function (t) {
        n(), a(), o();
      }),
      t("#hiddensc, .filter-status-row").on("click", ".clearall", function (e) {
        var n = t(
          "#filters input:not(:checked), #audiences input:not(:checked)"
        );
        n.each(function () {
          t(this).prop("checked", "checked");
        }),
          t("#tags .btn-primary")
            .removeClass("btn-primary")
            .addClass("btn-default")
            .attr("aria-pressed", "false"),
          t("#tags .btn").removeAttr("disabled"),
          t(".sc-wrapper.current").removeClass("current"),
          s(),
          a(),
          o(),
          f(),
          p(t("#top"));
      }),
      t(".sbbox-heading button.filters").on("click", function (e) {
        var n = t(e.target).parent().parent().find("input:not(:checked)");
        n.each(function () {
          t(this).prop("checked", "checked");
        }),
          s(),
          a(),
          o();
      }),
      t(".btn-only").on("click", function () {
        t(this)
          .parents(".sbbox-body")
          .find("input[type=checkbox]")
          .prop("checked", !1),
          t(this)
            .parent()
            .find("input[type=checkbox]")
            .prop("checked", !0)
            .trigger("change");
      }),
      h();
    var f = function () {
      n();
      var r = [],
        i = "all success criteria",
        o = "",
        s = "",
        a = "",
        l = "",
        c = "all",
        u = "techniques",
        p = "",
        h = t("#wcagver").val();
      "2.1only" == h
        ? (version = "Only what’s added in WCAG 2.1:")
        : (version = "WCAG " + h + ":");
      var d = t("#filter-techniques-content input"),
        f = d.filter(":checked");
      if (f.length < d.length) {
        var g = [];
        f.each(function (e, n) {
          "failures" == t(n).val() ? g.push("failure") : g.push(t(n).val());
        }),
          (c = e(g, "and"));
      }
      c += " ";
      var v = t("#tags .btn-primary");
      if (v.length > 0) {
        v.each(function (e, n) {
          r.push(t(n).attr("data-tag"));
        }),
          (o = " <strong>tagged with " + e(r, "or") + "</strong>");
        t("#tags .btn-default");
      }
      var m = [],
        y = t("#filter-levels input:checked"),
        b =
          (t("#filter-levels input:not(:checked)"), t("#filter-levels input"));
      y.length < b.length &&
        (y.each(function (e, n) {
          m.push(t(n).attr("value").toUpperCase());
        }),
        (a = " for <strong>levels " + e(m, "and") + "</strong>")),
        (v.length > 0 || y.length < b.length) &&
          (i = "success criteria " + o + s + a + l);
      var w = [],
        x = t("#filter-technologies input:checked"),
        T =
          (t("#filter-technologies input:not(:checked)"),
          t("#filter-technologies input"));
      x.length < T.length &&
        (x.each(function (e, n) {
          w.push(t(n).parent().text());
        }),
        (u =
          " techniques for the technologies: <strong>" +
          e(w, "and") +
          "</strong>")),
        t("#status .ver").html(version),
        t("#status .sc").html(i),
        t("#status .tech").html(c + u + p + "."),
        "all techniques" == u && "all success criteria" == i
          ? (t(".clearall").hide(),
            t(".filter-status-row").removeClass("active"))
          : (t(".clearall").show(), t(".filter-status-row").addClass("active"));
    };
    t("#tags").on("click", ".btn", function (e) {
      n();
      var r = t(e.target);
      r.hasClass("btn-primary")
        ? r
            .removeClass("btn-primary")
            .addClass("btn-default")
            .attr("aria-pressed", "false")
        : r
            .removeClass("btn-default")
            .addClass("btn-primary")
            .attr("aria-pressed", "true"),
        o(),
        c();
    }),
      t("#showalltags").on("click", function (e) {
        var n = t("#tags").is(".open") ? "Show all tags" : "Show fewer tags";
        t(this).text(n), t("#tags").toggleClass("open");
      }),
      t("#audiences").on("change", "input", function (e) {
        t("#tags button").prop("disabled", !1),
          t("#tags button").removeClass("first");
        var n = [];
        t("#audiences input:checked").each(function (e, r) {
          n.push(t(r).val());
        });
        var r = "[data-count" + n.join('="0"][data-count') + '="0"]';
        t("#tags button" + r).prop("disabled", !0),
          t("#tags button" + r)
            .first()
            .addClass("first"),
          l(),
          s(),
          o();
      }),
      t("#filter-techniques-content").on("change", "input", function (t) {
        l(), s(), o();
      }),
      t("main").on("change", ".techniques-button input", function (e) {
        e.preventDefault();
        var n = t(e.target),
          r = n.attr("name").match(/sc-[0-9]{2,3}-(.*)/)[1];
        t('.techniques-button input[name$="' + r + '"]:checked').length > 0 &&
        t('.techniques-button input[name$="' + r + '"]:not(:checked)').length >
          0
          ? t('[name="filter-techniques"][value="' + r + '"]').prop(
              "indeterminate",
              !0
            )
          : (t('[name="filter-techniques"][value="' + r + '"]').prop(
              "indeterminate",
              !1
            ),
            0 ===
              t('.techniques-button input[name$="' + r + '"]:checked').length &&
              t('[name="filter-techniques"][value="' + r + '"]').removeProp(
                "checked"
              ),
            0 ===
              t('.techniques-button input[name$="' + r + '"]:not(:checked)')
                .length &&
              t('[name="filter-techniques"][value="' + r + '"]').prop(
                "checked",
                "checked"
              )),
          n.is(":checked")
            ? t("#" + n.prop("name")).addClass("active")
            : t("#" + n.prop("name")).removeClass("active");
      }),
      t("main").on("click", ".techniques-button .btn-techniques", function (e) {
        var n = t(e.target),
          i = n.attr("aria-controls"),
          o = window.history.location || window.location,
          s = new URI(o),
          a = [];
        if (
          (t('.btn-techniques[aria-expanded="true"]').each(function (e, n) {
            a.push(t(n).attr("aria-controls"));
          }),
          "false" == n.attr("aria-expanded"))
        )
          a.push(i);
        else
          for (var l = a.length - 1; l >= 0; l--) a[l] == i && a.splice(l, 1);
        a.length > 0
          ? s.setSearch(
              "showtechniques",
              a.join(",").replace(/techniques-/gi, "") + ""
            )
          : s.removeSearch("showtechniques"),
          r(s);
      }),
      t("#sharethisviewbutton").on("click", function () {
        var e = window.history.location || window.location,
          n = t(this).parent().find(".sharebox");
        n.hasClass("open")
          ? n.removeClass("open")
          : (n.addClass("open"), n.find("input").val(e).select().focus());
      }),
      t("#sharethisviewbutton")
        .parent()
        .find(".sharebox button")
        .on("click", function () {
          t(this).parent().parent().parent().removeClass("open"),
            t("#sharethisviewbutton").focus();
        }),
      t("#expandcollapsalltechniques").on("click", function (e) {
        "true" != t(this).attr("aria-expanded")
          ? (t(".collapse").collapse("show"),
            t(".sc-text button")
              .attr("aria-expanded", !0)
              .parent()
              .find("~ *:not(hr)")
              .toggle(),
            t(this)
              .attr("aria-expanded", !0)
              .find("span")
              .html("Collapse <strong>all</strong> sections"))
          : (t(".collapse").collapse("hide"),
            t(".sc-text button")
              .attr("aria-expanded", !1)
              .parent()
              .find("~ *:not(hr)")
              .toggle(),
            t(this)
              .attr("aria-expanded", !1)
              .find("span")
              .html("Expand <strong>all</strong> sections"));
      }),
      t(window).on("popstate", function (t) {
        (window.noAddToHistory = !0), i(), (window.noAddToHistory = !1);
      }),
      d(),
      (window.noAddToHistory = !0),
      i(),
      (window.noAddToHistory = !1);
  });
