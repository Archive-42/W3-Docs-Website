window.Modernizr = (function (e, t, n) {
  function r(e) {
    y.cssText = e;
  }

  function a(e, t) {
    return typeof e === t;
  }

  function o(e, t) {
    return !!~("" + e).indexOf(t);
  }

  function i(e, t) {
    for (const r in e) {
      const a = e[r];
      if (!o(a, "-") && y[a] !== n) return "pfx" == t ? a : !0;
    }
    return !1;
  }

  function c(e, t, r) {
    for (const o in e) {
      const i = t[e[o]];
      if (i !== n)
        return r === !1 ? e[o] : a(i, "function") ? i.bind(r || t) : i;
    }
    return !1;
  }

  function l(e, t, n) {
    const r = e.charAt(0).toUpperCase() + e.slice(1);
    let o = (e + " " + S.join(r + " ") + r).split(" ");
    return a(t, "string") || a(t, "undefined")
      ? i(o, t)
      : ((o = (e + " " + N.join(r + " ") + r).split(" ")), c(o, t, n));
  }

  function u() {
    d.input = (n => {
      for (let r = 0, a = n.length; a > r; r++) C[n[r]] = !!(n[r] in E);
      return (
        C.list &&
          (C.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)),
        C
      );
    })(
      "autocomplete autofocus list placeholder max min multiple pattern required step".split(
        " "
      )
    );
  }
  let s;
  let f;
  const m = "2.8.2";
  var d = {};
  const p = !0;
  const h = t.documentElement;
  const v = "modernizr";
  let g = t.createElement(v);
  var y = g.style;
  var E = t.createElement("input");
  const b = ({}.toString, "Webkit Moz O ms");
  var S = b.split(" ");
  var N = b.toLowerCase().split(" ");

  const F = {
    svg: "http://www.w3.org/2000/svg",
  };

  const x = {};
  var C = {};
  const T = [];
  const w = T.slice;
  const j = {}.hasOwnProperty;
  (f =
    a(j, "undefined") || a(j.call, "undefined")
      ? (e, t) => {
          return t in e && a(e.constructor.prototype[t], "undefined");
        }
      : (e, t) => {
          return j.call(e, t);
        }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (e) {
        const t = this;
        if ("function" != typeof t) throw new TypeError();
        const n = w.call(arguments, 1),
              r = function () {
                if (this instanceof r) {
                  const a = () => {};
                  a.prototype = t.prototype;
                  const o = new a(), i = t.apply(o, n.concat(w.call(arguments)));
                  return Object(i) === i ? i : o;
                }
                return t.apply(e, n.concat(w.call(arguments)));
              };
        return r;
      }),
    (x.flexbox = () => {
      return l("flexWrap");
    }),
    (x.svg = () => {
      return (
        !!t.createElementNS && !!t.createElementNS(F.svg, "svg").createSVGRect
      );
    });
  for (const D in x)
    f(x, D) &&
      ((s = D.toLowerCase()), (d[s] = x[D]()), T.push((d[s] ? "" : "no-") + s));
  return d.input || u(), d.addTest = (e, t) => {
    if ("object" == typeof e) for (const r in e) f(e, r) && d.addTest(r, e[r]);
    else {
      if (((e = e.toLowerCase()), d[e] !== n)) return d;
      (t = "function" == typeof t ? t() : t),
        "undefined" != typeof p &&
          p &&
          (h.className += " " + (t ? "" : "no-") + e),
        (d[e] = t);
    }
    return d;
  }, r(""), g = E = null, ((e, t) => {
    function n(e, t) {
      const n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
      return (
        (n.innerHTML = "x<style>" + t + "</style>"),
        r.insertBefore(n.lastChild, r.firstChild)
      );
    }

    function r() {
      const e = y.elements;
      return "string" == typeof e ? e.split(" ") : e;
    }

    function a(e) {
      let t = g[e[h]];
      return t || ((t = {}), v++, (e[h] = v), (g[v] = t)), t;
    }

    function o(e, n, r) {
      if ((n || (n = t), s)) return n.createElement(e);
      r || (r = a(n));
      let o;
      return (
        (o = r.cache[e]
          ? r.cache[e].cloneNode()
          : p.test(e)
          ? (r.cache[e] = r.createElem(e)).cloneNode()
          : r.createElem(e)),
        !o.canHaveChildren || d.test(e) || o.tagUrn
          ? o
          : r.frag.appendChild(o)
      );
    }

    function i(e, n) {
      if ((e || (e = t), s)) return e.createDocumentFragment();
      n = n || a(e);
      for (
        var o = n.frag.cloneNode(), i = 0, c = r(), l = c.length;
        l > i;
        i++
      )
        o.createElement(c[i]);
      return o;
    }

    function c(e, t) {
      t.cache ||
        ((t.cache = {}),
        (t.createElem = e.createElement),
        (t.createFrag = e.createDocumentFragment),
        (t.frag = t.createFrag())),
        (e.createElement = n => {
          return y.shivMethods ? o(n, e, t) : t.createElem(n);
        }),
        (e.createDocumentFragment = Function(
          "h,f",
          "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
            r()
              .join()
              .replace(/[\w\-]+/g, e => {
                return (
                  t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                );
              }) +
            ");return n}"
        )(y, t.frag));
    }

    function l(e) {
      e || (e = t);
      const r = a(e);
      return (
        !y.shivCSS ||
          u ||
          r.hasCSS ||
          (r.hasCSS = !!n(
            e,
            "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
          )),
        s || c(e, r),
        e
      );
    }
    var u;
    var s;
    const f = "3.7.0";
    const m = e.html5 || {};

    var d =
      /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

    var p =
      /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

    var h = "_html5shiv";
    var v = 0;
    var g = {};
    !(() => {
      try {
        const e = t.createElement("a");
        (e.innerHTML = "<xyz></xyz>"),
          (u = "hidden" in e),
          (s =
            1 == e.childNodes.length || (() => {
              t.createElement("a");
              const e = t.createDocumentFragment();
              return (
                "undefined" == typeof e.cloneNode ||
                "undefined" == typeof e.createDocumentFragment ||
                "undefined" == typeof e.createElement
              );
            })());
      } catch (n) {
        (u = !0), (s = !0);
      }
    })();
    var y = {
      elements:
        m.elements ||
        "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
      version: f,
      shivCSS: m.shivCSS !== !1,
      supportsUnknownElements: s,
      shivMethods: m.shivMethods !== !1,
      type: "default",
      shivDocument: l,
      createElement: o,
      createDocumentFragment: i,
    };
    (e.html5 = y), l(t);
  })(this, t), d._version = m, d._domPrefixes = N, d._cssomPrefixes = S, d.testProp = e => {
    return i([e]);
  }, d.testAllProps = l, h.className =
    h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
    (p ? " js " + T.join(" ") : ""), d;
})(this, this.document), ((e, t) => {
  function n(e, t) {
    const n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
    return (
      (n.innerHTML = "x<style>" + t + "</style>"),
      r.insertBefore(n.lastChild, r.firstChild)
    );
  }

  function r() {
    const e = N.elements;
    return "string" == typeof e ? e.split(" ") : e;
  }

  function a(e) {
    let t = S[e[E]];
    return t || ((t = {}), b++, (e[E] = b), (S[b] = t)), t;
  }

  function o(e, n, r) {
    if ((n || (n = t), h)) return n.createElement(e);
    r || (r = a(n));
    let o;
    return (
      (o = r.cache[e]
        ? r.cache[e].cloneNode()
        : y.test(e)
        ? (r.cache[e] = r.createElem(e)).cloneNode()
        : r.createElem(e)),
      o.canHaveChildren && !g.test(e) ? r.frag.appendChild(o) : o
    );
  }

  function i(e, n) {
    if ((e || (e = t), h)) return e.createDocumentFragment();
    n = n || a(e);
    for (var o = n.frag.cloneNode(), i = 0, c = r(), l = c.length; l > i; i++)
      o.createElement(c[i]);
    return o;
  }

  function c(e, t) {
    t.cache ||
      ((t.cache = {}),
      (t.createElem = e.createElement),
      (t.createFrag = e.createDocumentFragment),
      (t.frag = t.createFrag())),
      (e.createElement = n => {
        return N.shivMethods ? o(n, e, t) : t.createElem(n);
      }),
      (e.createDocumentFragment = Function(
        "h,f",
        "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
          r()
            .join()
            .replace(/\w+/g, e => {
              return (
                t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
              );
            }) +
          ");return n}"
      )(N, t.frag));
  }

  function l(e) {
    e || (e = t);
    const r = a(e);
    return (
      !N.shivCSS ||
        p ||
        r.hasCSS ||
        (r.hasCSS = !!n(
          e,
          "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"
        )),
      h || c(e, r),
      e
    );
  }

  function u(e) {
    for (
      var t,
        n = e.getElementsByTagName("*"),
        a = n.length,
        o = RegExp("^(?:" + r().join("|") + ")$", "i"),
        i = [];
      a--;

    )
      (t = n[a]), o.test(t.nodeName) && i.push(t.applyElement(s(t)));
    return i;
  }

  function s(e) {
    for (
      var t,
        n = e.attributes,
        r = n.length,
        a = e.ownerDocument.createElement(x + ":" + e.nodeName);
      r--;

    )
      (t = n[r]), t.specified && a.setAttribute(t.nodeName, t.nodeValue);
    return (a.style.cssText = e.style.cssText), a;
  }

  function f(e) {
    for (
      var t,
        n = e.split("{"),
        a = n.length,
        o = RegExp(
          "(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)",
          "gi"
        ),
        i = "$1" + x + "\\:$2";
      a--;

    )
      (t = n[a] = n[a].split("}")),
        (t[t.length - 1] = t[t.length - 1].replace(o, i)),
        (n[a] = t.join("}"));
    return n.join("{");
  }

  function m(e) {
    for (let t = e.length; t--; ) e[t].removeNode();
  }

  function d(e) {
    function t() {
      clearTimeout(i._removeSheetTimer), r && r.removeNode(!0), (r = null);
    }
    var r;
    let o;
    var i = a(e);
    const c = e.namespaces;
    const l = e.parentWindow;
    return !C || e.printShived
      ? e
      : ("undefined" == typeof c[x] && c.add(x),
        l.attachEvent("onbeforeprint", () => {
          t();
          for (
            var a,
              i,
              c,
              l = e.styleSheets,
              s = [],
              m = l.length,
              d = Array(m);
            m--;

          )
            d[m] = l[m];
          for (; (c = d.pop()); )
            if (!c.disabled && F.test(c.media)) {
              try {
                (a = c.imports), (i = a.length);
              } catch (p) {
                i = 0;
              }
              for (m = 0; i > m; m++) d.push(a[m]);
              try {
                s.push(c.cssText);
              } catch (p) {}
            }
          (s = f(s.reverse().join(""))), (o = u(e)), (r = n(e, s));
        }),
        l.attachEvent("onafterprint", () => {
          m(o),
            clearTimeout(i._removeSheetTimer),
            (i._removeSheetTimer = setTimeout(t, 500));
        }),
        (e.printShived = !0),
        e);
  }
  var p;
  var h;
  const v = e.html5 || {};
  var g = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

  var y =
    /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i;

  var E = "_html5shiv";
  var b = 0;
  var S = {};
  !(() => {
    try {
      const e = t.createElement("a");
      (e.innerHTML = "<xyz></xyz>"),
        (p = "hidden" in e),
        (h =
          1 == e.childNodes.length || (() => {
            t.createElement("a");
            const e = t.createDocumentFragment();
            return (
              "undefined" == typeof e.cloneNode ||
              "undefined" == typeof e.createDocumentFragment ||
              "undefined" == typeof e.createElement
            );
          })());
    } catch (n) {
      (p = !0), (h = !0);
    }
  })();
  var N = {
    elements:
      v.elements ||
      "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
    shivCSS: v.shivCSS !== !1,
    supportsUnknownElements: h,
    shivMethods: v.shivMethods !== !1,
    type: "default",
    shivDocument: l,
    createElement: o,
    createDocumentFragment: i,
  };
  (e.html5 = N), l(t);
  var F = /^$|\b(?:all|print)\b/,
    x = "html5shiv",
    C =
      !h && (() => {
        const n = t.documentElement;
        return !(
          "undefined" == typeof t.namespaces ||
          "undefined" == typeof t.parentWindow ||
          "undefined" == typeof n.applyElement ||
          "undefined" == typeof n.removeNode ||
          "undefined" == typeof e.attachEvent
        );
      })();
  (N.type += " print"), (N.shivPrint = d), d(t);
})(this, document);
