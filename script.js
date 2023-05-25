/*! jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license */

 /* <![CDATA[ */
 var dsAjax = {
    page_id: "8",
    category_id: null,
    tag_id: null,
    s: null,
    sc: null,
    home_popup: "2605",
    is_front_page: "1",
    whitepaper_form: "348",
    is_single: "",
  };
  /* ]]> */



!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat
        ? function (e) {
            return t.flat.call(e);
          }
        : function (e) {
            return t.concat.apply([], e);
          },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      y = n.hasOwnProperty,
      a = y.toString,
      l = a.call(Object),
      v = {},
      m = function (e) {
        return (
          "function" == typeof e &&
          "number" != typeof e.nodeType &&
          "function" != typeof e.item
        );
      },
      x = function (e) {
        return null != e && e === e.window;
      },
      E = C.document,
      c = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(e, t, n) {
      var r,
        i,
        o = (n = n || E).createElement("script");
      if (((o.text = e), t))
        for (r in c)
          (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
            o.setAttribute(r, i);
      n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
      return null == e
        ? e + ""
        : "object" == typeof e || "function" == typeof e
        ? n[o.call(e)] || "object"
        : typeof e;
    }
    var f = "3.6.4",
      S = function (e, t) {
        return new S.fn.init(e, t);
      };
    function p(e) {
      var t = !!e && "length" in e && e.length,
        n = w(e);
      return (
        !m(e) &&
        !x(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && 0 < t && t - 1 in e))
      );
    }
    (S.fn = S.prototype =
      {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function () {
          return s.call(this);
        },
        get: function (e) {
          return null == e
            ? s.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = S.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return S.each(this, e);
        },
        map: function (n) {
          return this.pushStack(
            S.map(this, function (e, t) {
              return n.call(e, t, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            S.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            S.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice,
      }),
      (S.extend = S.fn.extend =
        function () {
          var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
          for (
            "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || m(a) || (a = {}),
              s === u && ((a = this), s--);
            s < u;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (r = e[t]),
                  "__proto__" !== t &&
                    a !== r &&
                    (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = a[t]),
                        (o =
                          i && !Array.isArray(n)
                            ? []
                            : i || S.isPlainObject(n)
                            ? n
                            : {}),
                        (i = !1),
                        (a[t] = S.extend(l, o, r)))
                      : void 0 !== r && (a[t] = r));
          return a;
        }),
      S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return (
            !(!e || "[object Object]" !== o.call(e)) &&
            (!(t = r(e)) ||
              ("function" ==
                typeof (n = y.call(t, "constructor") && t.constructor) &&
                a.call(n) === l))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e, t, n) {
          b(e, { nonce: t && t.nonce }, n);
        },
        each: function (e, t) {
          var n,
            r = 0;
          if (p(e)) {
            for (n = e.length; r < n; r++)
              if (!1 === t.call(e[r], r, e[r])) break;
          } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
          return e;
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (p(Object(e))
                ? S.merge(n, "string" == typeof e ? [e] : e)
                : u.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : i.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
            !t(e[i], i) !== a && r.push(e[i]);
          return r;
        },
        map: function (e, t, n) {
          var r,
            i,
            o = 0,
            a = [];
          if (p(e))
            for (r = e.length; o < r; o++)
              null != (i = t(e[o], o, n)) && a.push(i);
          else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
          return g(a);
        },
        guid: 1,
        support: v,
      }),
      "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
      S.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          n["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var d = (function (n) {
      var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        y,
        s,
        c,
        v,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        j = function (e, t) {
          return e === t && (l = !0), 0;
        },
        D = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        },
        R =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          M +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W =
          "\\[" +
          M +
          "*(" +
          I +
          ")(?:" +
          M +
          "*([*^$|!~]?=)" +
          M +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          I +
          "))|)" +
          M +
          "*\\]",
        F =
          ":(" +
          I +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          W +
          ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
          ID: new RegExp("^#(" + I + ")"),
          CLASS: new RegExp("^\\.(" + I + ")"),
          TAG: new RegExp("^(" + I + "|[*])"),
          ATTR: new RegExp("^" + W),
          PSEUDO: new RegExp("^" + F),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              M +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              M +
              "*(?:([+-]|)" +
              M +
              "*(\\d+)|))" +
              M +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + R + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              M +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              M +
              "*((?:-\\d)?\\d*)" +
              M +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function (e, t) {
          var n = "0x" + e.slice(1) - 65536;
          return (
            t ||
            (n < 0
              ? String.fromCharCode(n + 65536)
              : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
          );
        },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function (e, t) {
          return t
            ? "\0" === e
              ? "\ufffd"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        },
        oe = function () {
          T();
        },
        ae = be(
          function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        H.apply((t = O.call(p.childNodes)), p.childNodes),
          t[p.childNodes.length].nodeType;
      } catch (e) {
        H = {
          apply: t.length
            ? function (e, t) {
                L.apply(e, O.call(t));
              }
            : function (e, t) {
                var n = e.length,
                  r = 0;
                while ((e[n++] = t[r++]));
                e.length = n - 1;
              },
        };
      }
      function se(t, e, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
        )
          return n;
        if (!r && (T(e), (e = e || C), E)) {
          if (11 !== p && (u = Z.exec(t)))
            if ((i = u[1])) {
              if (9 === p) {
                if (!(a = e.getElementById(i))) return n;
                if (a.id === i) return n.push(a), n;
              } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i)
                return n.push(a), n;
            } else {
              if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
              if (
                (i = u[3]) &&
                d.getElementsByClassName &&
                e.getElementsByClassName
              )
                return H.apply(n, e.getElementsByClassName(i)), n;
            }
          if (
            d.qsa &&
            !N[t + " "] &&
            (!y || !y.test(t)) &&
            (1 !== p || "object" !== e.nodeName.toLowerCase())
          ) {
            if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
              ((f = (ee.test(t) && ve(e.parentNode)) || e) === e && d.scope) ||
                ((s = e.getAttribute("id"))
                  ? (s = s.replace(re, ie))
                  : e.setAttribute("id", (s = S))),
                (o = (l = h(t)).length);
              while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
              c = l.join(",");
            }
            try {
              return H.apply(n, f.querySelectorAll(c)), n;
            } catch (e) {
              N(t, !0);
            } finally {
              s === S && e.removeAttribute("id");
            }
          }
        }
        return g(t.replace(B, "$1"), e, n, r);
      }
      function ue() {
        var r = [];
        return function e(t, n) {
          return (
            r.push(t + " ") > b.cacheLength && delete e[r.shift()],
            (e[t + " "] = n)
          );
        };
      }
      function le(e) {
        return (e[S] = !0), e;
      }
      function ce(e) {
        var t = C.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function fe(e, t) {
        var n = e.split("|"),
          r = n.length;
        while (r--) b.attrHandle[n[r]] = t;
      }
      function pe(e, t) {
        var n = t && e,
          r =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) while ((n = n.nextSibling)) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function de(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function he(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      }
      function ge(t) {
        return function (e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function ye(a) {
        return le(function (o) {
          return (
            (o = +o),
            le(function (e, t) {
              var n,
                r = a([], e.length, o),
                i = r.length;
              while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function ve(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      for (e in ((d = se.support = {}),
      (i = se.isXML =
        function (e) {
          var t = e && e.namespaceURI,
            n = e && (e.ownerDocument || e).documentElement;
          return !Y.test(t || (n && n.nodeName) || "HTML");
        }),
      (T = se.setDocument =
        function (e) {
          var t,
            n,
            r = e ? e.ownerDocument || e : p;
          return (
            r != C &&
              9 === r.nodeType &&
              r.documentElement &&
              ((a = (C = r).documentElement),
              (E = !i(C)),
              p != C &&
                (n = C.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", oe, !1)
                  : n.attachEvent && n.attachEvent("onunload", oe)),
              (d.scope = ce(function (e) {
                return (
                  a.appendChild(e).appendChild(C.createElement("div")),
                  "undefined" != typeof e.querySelectorAll &&
                    !e.querySelectorAll(":scope fieldset div").length
                );
              })),
              (d.cssHas = ce(function () {
                try {
                  return C.querySelector(":has(*,:jqfake)"), !1;
                } catch (e) {
                  return !0;
                }
              })),
              (d.attributes = ce(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (d.getElementsByTagName = ce(function (e) {
                return (
                  e.appendChild(C.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (d.getElementsByClassName = K.test(C.getElementsByClassName)),
              (d.getById = ce(function (e) {
                return (
                  (a.appendChild(e).id = S),
                  !C.getElementsByName || !C.getElementsByName(S).length
                );
              })),
              d.getById
                ? ((b.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((b.filter.ID = function (e) {
                    var n = e.replace(te, ne);
                    return function (e) {
                      var t =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return t && t.value === n;
                    };
                  }),
                  (b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        (i = t.getElementsByName(e)), (r = 0);
                        while ((o = i[r++]))
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (b.find.TAG = d.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : d.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (b.find.CLASS =
                d.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e);
                }),
              (s = []),
              (y = []),
              (d.qsa = K.test(C.querySelectorAll)) &&
                (ce(function (e) {
                  var t;
                  (a.appendChild(e).innerHTML =
                    "<a id='" +
                    S +
                    "'></a><select id='" +
                    S +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      y.push("[*^$]=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      y.push("\\[" + M + "*(?:value|" + R + ")"),
                    e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="),
                    (t = C.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length ||
                      y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll(":checked").length || y.push(":checked"),
                    e.querySelectorAll("a#" + S + "+*").length ||
                      y.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    y.push("[\\r\\n\\f]");
                }),
                ce(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = C.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      y.push("name" + M + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      y.push(":enabled", ":disabled"),
                    (a.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      y.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    y.push(",.*:");
                })),
              (d.matchesSelector = K.test(
                (c =
                  a.matches ||
                  a.webkitMatchesSelector ||
                  a.mozMatchesSelector ||
                  a.oMatchesSelector ||
                  a.msMatchesSelector)
              )) &&
                ce(function (e) {
                  (d.disconnectedMatch = c.call(e, "*")),
                    c.call(e, "[s!='']:x"),
                    s.push("!=", F);
                }),
              d.cssHas || y.push(":has"),
              (y = y.length && new RegExp(y.join("|"))),
              (s = s.length && new RegExp(s.join("|"))),
              (t = K.test(a.compareDocumentPosition)),
              (v =
                t || K.test(a.contains)
                  ? function (e, t) {
                      var n = (9 === e.nodeType && e.documentElement) || e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t) while ((t = t.parentNode)) if (t === e) return !0;
                      return !1;
                    }),
              (j = t
                ? function (e, t) {
                    if (e === t) return (l = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) == (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!d.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e == C || (e.ownerDocument == p && v(p, e))
                          ? -1
                          : t == C || (t.ownerDocument == p && v(p, t))
                          ? 1
                          : u
                          ? P(u, e) - P(u, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (l = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!i || !o)
                      return e == C
                        ? -1
                        : t == C
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while ((n = n.parentNode)) a.unshift(n);
                    n = t;
                    while ((n = n.parentNode)) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r
                      ? pe(a[r], s[r])
                      : a[r] == p
                      ? -1
                      : s[r] == p
                      ? 1
                      : 0;
                  })),
            C
          );
        }),
      (se.matches = function (e, t) {
        return se(e, null, null, t);
      }),
      (se.matchesSelector = function (e, t) {
        if (
          (T(e),
          d.matchesSelector &&
            E &&
            !N[t + " "] &&
            (!s || !s.test(t)) &&
            (!y || !y.test(t)))
        )
          try {
            var n = c.call(e, t);
            if (
              n ||
              d.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {
            N(t, !0);
          }
        return 0 < se(t, C, null, [e]).length;
      }),
      (se.contains = function (e, t) {
        return (e.ownerDocument || e) != C && T(e), v(e, t);
      }),
      (se.attr = function (e, t) {
        (e.ownerDocument || e) != C && T(e);
        var n = b.attrHandle[t.toLowerCase()],
          r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
        return void 0 !== r
          ? r
          : d.attributes || !E
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (se.escape = function (e) {
        return (e + "").replace(re, ie);
      }),
      (se.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (se.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((l = !d.detectDuplicates),
          (u = !d.sortStable && e.slice(0)),
          e.sort(j),
          l)
        ) {
          while ((t = e[i++])) t === e[i] && (r = n.push(i));
          while (r--) e.splice(n[r], 1);
        }
        return (u = null), e;
      }),
      (o = se.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else while ((t = e[r++])) n += o(t);
          return n;
        }),
      ((b = se.selectors =
        {
          cacheLength: 50,
          createPseudo: le,
          match: G,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(te, ne)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || se.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && se.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return G.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      X.test(n) &&
                      (t = h(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = m[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                  m(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (n, r, i) {
              return function (e) {
                var t = se.attr(e, n);
                return null == t
                  ? "!=" === r
                  : !r ||
                      ((t += ""),
                      "=" === r
                        ? t === i
                        : "!=" === r
                        ? t !== i
                        : "^=" === r
                        ? i && 0 === t.indexOf(i)
                        : "*=" === r
                        ? i && -1 < t.indexOf(i)
                        : "$=" === r
                        ? i && t.slice(-i.length) === i
                        : "~=" === r
                        ? -1 < (" " + t.replace($, " ") + " ").indexOf(i)
                        : "|=" === r &&
                          (t === i || t.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (h, e, t, g, y) {
              var v = "nth" !== h.slice(0, 3),
                m = "last" !== h.slice(-4),
                x = "of-type" === e;
              return 1 === g && 0 === y
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (e, t, n) {
                    var r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l = v !== m ? "nextSibling" : "previousSibling",
                      c = e.parentNode,
                      f = x && e.nodeName.toLowerCase(),
                      p = !n && !x,
                      d = !1;
                    if (c) {
                      if (v) {
                        while (l) {
                          a = e;
                          while ((a = a[l]))
                            if (
                              x
                                ? a.nodeName.toLowerCase() === f
                                : 1 === a.nodeType
                            )
                              return !1;
                          u = l = "only" === h && !u && "nextSibling";
                        }
                        return !0;
                      }
                      if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                        (d =
                          (s =
                            (r =
                              (i =
                                (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                            r[1]) && r[2]),
                          (a = s && c.childNodes[s]);
                        while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                          if (1 === a.nodeType && ++d && a === e) {
                            i[h] = [k, s, d];
                            break;
                          }
                      } else if (
                        (p &&
                          (d = s =
                            (r =
                              (i =
                                (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                        !1 === d)
                      )
                        while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                          if (
                            (x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType) &&
                            ++d &&
                            (p &&
                              ((i =
                                (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] = [k, d]),
                            a === e)
                          )
                            break;
                      return (d -= y) === g || (d % g == 0 && 0 <= d / g);
                    }
                  };
            },
            PSEUDO: function (e, o) {
              var t,
                a =
                  b.pseudos[e] ||
                  b.setFilters[e.toLowerCase()] ||
                  se.error("unsupported pseudo: " + e);
              return a[S]
                ? a(o)
                : 1 < a.length
                ? ((t = [e, e, "", o]),
                  b.setFilters.hasOwnProperty(e.toLowerCase())
                    ? le(function (e, t) {
                        var n,
                          r = a(e, o),
                          i = r.length;
                        while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                      })
                    : function (e) {
                        return a(e, 0, t);
                      })
                : a;
            },
          },
          pseudos: {
            not: le(function (e) {
              var r = [],
                i = [],
                s = f(e.replace(B, "$1"));
              return s[S]
                ? le(function (e, t, n, r) {
                    var i,
                      o = s(e, null, r, []),
                      a = e.length;
                    while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                  })
                : function (e, t, n) {
                    return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                  };
            }),
            has: le(function (t) {
              return function (e) {
                return 0 < se(t, e).length;
              };
            }),
            contains: le(function (t) {
              return (
                (t = t.replace(te, ne)),
                function (e) {
                  return -1 < (e.textContent || o(e)).indexOf(t);
                }
              );
            }),
            lang: le(function (n) {
              return (
                V.test(n || "") || se.error("unsupported lang: " + n),
                (n = n.replace(te, ne).toLowerCase()),
                function (e) {
                  var t;
                  do {
                    if (
                      (t = E
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = n.location && n.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === a;
            },
            focus: function (e) {
              return (
                e === C.activeElement &&
                (!C.hasFocus || C.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: ge(!1),
            disabled: ge(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !b.pseudos.empty(e);
            },
            header: function (e) {
              return J.test(e.nodeName);
            },
            input: function (e) {
              return Q.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: ye(function () {
              return [0];
            }),
            last: ye(function (e, t) {
              return [t - 1];
            }),
            eq: ye(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: ye(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: ye(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: ye(function (e, t, n) {
              for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
              return e;
            }),
            gt: ye(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = b.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        b.pseudos[e] = de(e);
      for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
      function me() {}
      function xe(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
      }
      function be(s, e, t) {
        var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
        return e.first
          ? function (e, t, n) {
              while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
              return !1;
            }
          : function (e, t, n) {
              var r,
                i,
                o,
                a = [k, p];
              if (n) {
                while ((e = e[u]))
                  if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
              } else
                while ((e = e[u]))
                  if (1 === e.nodeType || f)
                    if (
                      ((i =
                        (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                        (o[e.uniqueID] = {})),
                      l && l === e.nodeName.toLowerCase())
                    )
                      e = e[u] || e;
                    else {
                      if ((r = i[c]) && r[0] === k && r[1] === p)
                        return (a[2] = r[2]);
                      if (((i[c] = a)[2] = s(e, t, n))) return !0;
                    }
              return !1;
            };
      }
      function we(i) {
        return 1 < i.length
          ? function (e, t, n) {
              var r = i.length;
              while (r--) if (!i[r](e, t, n)) return !1;
              return !0;
            }
          : i[0];
      }
      function Te(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
          (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
        return a;
      }
      function Ce(d, h, g, y, v, e) {
        return (
          y && !y[S] && (y = Ce(y)),
          v && !v[S] && (v = Ce(v, e)),
          le(function (e, t, n, r) {
            var i,
              o,
              a,
              s = [],
              u = [],
              l = t.length,
              c =
                e ||
                (function (e, t, n) {
                  for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                  return n;
                })(h || "*", n.nodeType ? [n] : n, []),
              f = !d || (!e && h) ? c : Te(c, s, d, n, r),
              p = g ? (v || (e ? d : l || y) ? [] : t) : f;
            if ((g && g(f, p, n, r), y)) {
              (i = Te(p, u)), y(i, [], n, r), (o = i.length);
              while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
            }
            if (e) {
              if (v || d) {
                if (v) {
                  (i = []), (o = p.length);
                  while (o--) (a = p[o]) && i.push((f[o] = a));
                  v(null, (p = []), i, r);
                }
                o = p.length;
                while (o--)
                  (a = p[o]) &&
                    -1 < (i = v ? P(e, a) : s[o]) &&
                    (e[i] = !(t[i] = a));
              }
            } else (p = Te(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : H.apply(t, p);
          })
        );
      }
      function Ee(e) {
        for (
          var i,
            t,
            n,
            r = e.length,
            o = b.relative[e[0].type],
            a = o || b.relative[" "],
            s = o ? 1 : 0,
            u = be(
              function (e) {
                return e === i;
              },
              a,
              !0
            ),
            l = be(
              function (e) {
                return -1 < P(i, e);
              },
              a,
              !0
            ),
            c = [
              function (e, t, n) {
                var r =
                  (!o && (n || t !== w)) ||
                  ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return (i = null), r;
              },
            ];
          s < r;
          s++
        )
          if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
          else {
            if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
              for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
              return Ce(
                1 < s && we(c),
                1 < s &&
                  xe(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" })
                  ).replace(B, "$1"),
                t,
                s < n && Ee(e.slice(s, n)),
                n < r && Ee((e = e.slice(n))),
                n < r && xe(e)
              );
            }
            c.push(t);
          }
        return we(c);
      }
      return (
        (me.prototype = b.filters = b.pseudos),
        (b.setFilters = new me()),
        (h = se.tokenize =
          function (e, t) {
            var n,
              r,
              i,
              o,
              a,
              s,
              u,
              l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            (a = e), (s = []), (u = b.preFilter);
            while (a) {
              for (o in ((n && !(r = _.exec(a))) ||
                (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
              (n = !1),
              (r = z.exec(a)) &&
                ((n = r.shift()),
                i.push({ value: n, type: r[0].replace(B, " ") }),
                (a = a.slice(n.length))),
              b.filter))
                !(r = G[o].exec(a)) ||
                  (u[o] && !(r = u[o](r))) ||
                  ((n = r.shift()),
                  i.push({ value: n, type: o, matches: r }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
          }),
        (f = se.compile =
          function (e, t) {
            var n,
              y,
              v,
              m,
              x,
              r,
              i = [],
              o = [],
              a = A[e + " "];
            if (!a) {
              t || (t = h(e)), (n = t.length);
              while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
              (a = A(
                e,
                ((y = o),
                (m = 0 < (v = i).length),
                (x = 0 < y.length),
                (r = function (e, t, n, r, i) {
                  var o,
                    a,
                    s,
                    u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    p = w,
                    d = e || (x && b.find.TAG("*", i)),
                    h = (k += null == p ? 1 : Math.random() || 0.1),
                    g = d.length;
                  for (
                    i && (w = t == C || t || i);
                    l !== g && null != (o = d[l]);
                    l++
                  ) {
                    if (x && o) {
                      (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                      while ((s = y[a++]))
                        if (s(o, t || C, n)) {
                          r.push(o);
                          break;
                        }
                      i && (k = h);
                    }
                    m && ((o = !s && o) && u--, e && c.push(o));
                  }
                  if (((u += l), m && l !== u)) {
                    a = 0;
                    while ((s = v[a++])) s(c, f, t, n);
                    if (e) {
                      if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                      f = Te(f);
                    }
                    H.apply(r, f),
                      i &&
                        !e &&
                        0 < f.length &&
                        1 < u + v.length &&
                        se.uniqueSort(r);
                  }
                  return i && ((k = h), (w = p)), c;
                }),
                m ? le(r) : r)
              )).selector = e;
            }
            return a;
          }),
        (g = se.select =
          function (e, t, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l = "function" == typeof e && e,
              c = !r && h((e = l.selector || e));
            if (((n = n || []), 1 === c.length)) {
              if (
                2 < (o = c[0] = c[0].slice(0)).length &&
                "ID" === (a = o[0]).type &&
                9 === t.nodeType &&
                E &&
                b.relative[o[1].type]
              ) {
                if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                  return n;
                l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
              }
              i = G.needsContext.test(e) ? 0 : o.length;
              while (i--) {
                if (((a = o[i]), b.relative[(s = a.type)])) break;
                if (
                  (u = b.find[s]) &&
                  (r = u(
                    a.matches[0].replace(te, ne),
                    (ee.test(o[0].type) && ve(t.parentNode)) || t
                  ))
                ) {
                  if ((o.splice(i, 1), !(e = r.length && xe(o))))
                    return H.apply(n, r), n;
                  break;
                }
              }
            }
            return (
              (l || f(e, c))(
                r,
                t,
                !E,
                n,
                !t || (ee.test(e) && ve(t.parentNode)) || t
              ),
              n
            );
          }),
        (d.sortStable = S.split("").sort(j).join("") === S),
        (d.detectDuplicates = !!l),
        T(),
        (d.sortDetached = ce(function (e) {
          return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        })),
        ce(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (d.attributes &&
          ce(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
          }),
        ce(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          fe(R, function (e, t, n) {
            var r;
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
          }),
        se
      );
    })(C);
    (S.find = d),
      (S.expr = d.selectors),
      (S.expr[":"] = S.expr.pseudos),
      (S.uniqueSort = S.unique = d.uniqueSort),
      (S.text = d.getText),
      (S.isXMLDoc = d.isXML),
      (S.contains = d.contains),
      (S.escapeSelector = d.escape);
    var h = function (e, t, n) {
        var r = [],
          i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
          if (1 === e.nodeType) {
            if (i && S(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      T = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      k = S.expr.match.needsContext;
    function A(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
      return m(n)
        ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r;
          })
        : n.nodeType
        ? S.grep(e, function (e) {
            return (e === n) !== r;
          })
        : "string" != typeof n
        ? S.grep(e, function (e) {
            return -1 < i.call(n, e) !== r;
          })
        : S.filter(n, e, r);
    }
    (S.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType
          ? S.find.matchesSelector(r, e)
            ? [r]
            : []
          : S.find.matches(
              e,
              S.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      S.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            i = this;
          if ("string" != typeof e)
            return this.pushStack(
              S(e).filter(function () {
                for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
          return 1 < r ? S.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(j(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(j(this, e || [], !0));
        },
        is: function (e) {
          return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
            .length;
        },
      });
    var D,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((S.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || D), "string" == typeof e)) {
        if (
          !(r =
            "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
              ? [null, e, null]
              : q.exec(e)) ||
          (!r[1] && t)
        )
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof S ? t[0] : t),
            S.merge(
              this,
              S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
            ),
            N.test(r[1]) && S.isPlainObject(t))
          )
            for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : m(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(S)
        : S.makeArray(e, this);
    }).prototype = S.fn),
      (D = S(E));
    var L = /^(?:parents|prev(?:Until|All))/,
      H = { children: !0, contents: !0, next: !0, prev: !0 };
    function O(e, t) {
      while ((e = e[t]) && 1 !== e.nodeType);
      return e;
    }
    S.fn.extend({
      has: function (e) {
        var t = S(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
        if (!k.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (a
                  ? -1 < a.index(n)
                  : 1 === n.nodeType && S.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
        return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? i.call(S(e), this[0])
            : i.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      },
    }),
      S.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return h(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n);
          },
          next: function (e) {
            return O(e, "nextSibling");
          },
          prev: function (e) {
            return O(e, "previousSibling");
          },
          nextAll: function (e) {
            return h(e, "nextSibling");
          },
          prevAll: function (e) {
            return h(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n);
          },
          siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return T(e.firstChild);
          },
          contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument)
              ? e.contentDocument
              : (A(e, "template") && (e = e.content || e),
                S.merge([], e.childNodes));
          },
        },
        function (r, i) {
          S.fn[r] = function (e, t) {
            var n = S.map(this, i, e);
            return (
              "Until" !== r.slice(-5) && (t = e),
              t && "string" == typeof t && (n = S.filter(t, n)),
              1 < this.length &&
                (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
              this.pushStack(n)
            );
          };
        }
      );
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
      return e;
    }
    function M(e) {
      throw e;
    }
    function I(e, t, n, r) {
      var i;
      try {
        e && m((i = e.promise))
          ? i.call(e).done(t).fail(n)
          : e && m((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    (S.Callbacks = function (r) {
      var e, n;
      r =
        "string" == typeof r
          ? ((e = r),
            (n = {}),
            S.each(e.match(P) || [], function (e, t) {
              n[t] = !0;
            }),
            n)
          : S.extend({}, r);
      var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function () {
          for (a = a || r.once, o = i = !0; u.length; l = -1) {
            t = u.shift();
            while (++l < s.length)
              !1 === s[l].apply(t[0], t[1]) &&
                r.stopOnFalse &&
                ((l = s.length), (t = !1));
          }
          r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
        },
        f = {
          add: function () {
            return (
              s &&
                (t && !i && ((l = s.length - 1), u.push(t)),
                (function n(e) {
                  S.each(e, function (e, t) {
                    m(t)
                      ? (r.unique && f.has(t)) || s.push(t)
                      : t && t.length && "string" !== w(t) && n(t);
                  });
                })(arguments),
                t && !i && c()),
              this
            );
          },
          remove: function () {
            return (
              S.each(arguments, function (e, t) {
                var n;
                while (-1 < (n = S.inArray(t, s, n)))
                  s.splice(n, 1), n <= l && l--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? -1 < S.inArray(e, s) : 0 < s.length;
          },
          empty: function () {
            return s && (s = []), this;
          },
          disable: function () {
            return (a = u = []), (s = t = ""), this;
          },
          disabled: function () {
            return !s;
          },
          lock: function () {
            return (a = u = []), t || i || (s = t = ""), this;
          },
          locked: function () {
            return !!a;
          },
          fireWith: function (e, t) {
            return (
              a ||
                ((t = [e, (t = t || []).slice ? t.slice() : t]),
                u.push(t),
                i || c()),
              this
            );
          },
          fire: function () {
            return f.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!o;
          },
        };
      return f;
    }),
      S.extend({
        Deferred: function (e) {
          var o = [
              [
                "notify",
                "progress",
                S.Callbacks("memory"),
                S.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                S.Callbacks("once memory"),
                S.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                S.Callbacks("once memory"),
                S.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            i = "pending",
            a = {
              state: function () {
                return i;
              },
              always: function () {
                return s.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return a.then(null, e);
              },
              pipe: function () {
                var i = arguments;
                return S.Deferred(function (r) {
                  S.each(o, function (e, t) {
                    var n = m(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                }).promise();
              },
              then: function (t, n, r) {
                var u = 0;
                function l(i, o, a, s) {
                  return function () {
                    var n = this,
                      r = arguments,
                      e = function () {
                        var e, t;
                        if (!(i < u)) {
                          if ((e = a.apply(n, r)) === o.promise())
                            throw new TypeError("Thenable self-resolution");
                          (t =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            m(t)
                              ? s
                                ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                                : (u++,
                                  t.call(
                                    e,
                                    l(u, o, R, s),
                                    l(u, o, M, s),
                                    l(u, o, R, o.notifyWith)
                                  ))
                              : (a !== R && ((n = void 0), (r = [e])),
                                (s || o.resolveWith)(n, r));
                        }
                      },
                      t = s
                        ? e
                        : function () {
                            try {
                              e();
                            } catch (e) {
                              S.Deferred.exceptionHook &&
                                S.Deferred.exceptionHook(e, t.stackTrace),
                                u <= i + 1 &&
                                  (a !== M && ((n = void 0), (r = [e])),
                                  o.rejectWith(n, r));
                            }
                          };
                    i
                      ? t()
                      : (S.Deferred.getStackHook &&
                          (t.stackTrace = S.Deferred.getStackHook()),
                        C.setTimeout(t));
                  };
                }
                return S.Deferred(function (e) {
                  o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                    o[1][3].add(l(0, e, m(t) ? t : R)),
                    o[2][3].add(l(0, e, m(n) ? n : M));
                }).promise();
              },
              promise: function (e) {
                return null != e ? S.extend(e, a) : a;
              },
            },
            s = {};
          return (
            S.each(o, function (e, t) {
              var n = t[2],
                r = t[5];
              (a[t[1]] = n.add),
                r &&
                  n.add(
                    function () {
                      i = r;
                    },
                    o[3 - e][2].disable,
                    o[3 - e][3].disable,
                    o[0][2].lock,
                    o[0][3].lock
                  ),
                n.add(t[3].fire),
                (s[t[0]] = function () {
                  return (
                    s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                  );
                }),
                (s[t[0] + "With"] = n.fireWith);
            }),
            a.promise(s),
            e && e.call(s, s),
            s
          );
        },
        when: function (e) {
          var n = arguments.length,
            t = n,
            r = Array(t),
            i = s.call(arguments),
            o = S.Deferred(),
            a = function (t) {
              return function (e) {
                (r[t] = this),
                  (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                  --n || o.resolveWith(r, i);
              };
            };
          if (
            n <= 1 &&
            (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then))
          )
            return o.then();
          while (t--) I(i[t], a(t), o.reject);
          return o.promise();
        },
      });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (S.Deferred.exceptionHook = function (e, t) {
      C.console &&
        C.console.warn &&
        e &&
        W.test(e.name) &&
        C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
      (S.readyException = function (e) {
        C.setTimeout(function () {
          throw e;
        });
      });
    var F = S.Deferred();
    function $() {
      E.removeEventListener("DOMContentLoaded", $),
        C.removeEventListener("load", $),
        S.ready();
    }
    (S.fn.ready = function (e) {
      return (
        F.then(e)["catch"](function (e) {
          S.readyException(e);
        }),
        this
      );
    }),
      S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --S.readyWait : S.isReady) ||
            ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
            F.resolveWith(E, [S]);
        },
      }),
      (S.ready.then = F.then),
      "complete" === E.readyState ||
      ("loading" !== E.readyState && !E.documentElement.doScroll)
        ? C.setTimeout(S.ready)
        : (E.addEventListener("DOMContentLoaded", $),
          C.addEventListener("load", $));
    var B = function (e, t, n, r, i, o, a) {
        var s = 0,
          u = e.length,
          l = null == n;
        if ("object" === w(n))
          for (s in ((i = !0), n)) B(e, t, s, n[s], !0, o, a);
        else if (
          void 0 !== r &&
          ((i = !0),
          m(r) || (a = !0),
          l &&
            (a
              ? (t.call(e, r), (t = null))
              : ((l = t),
                (t = function (e, t, n) {
                  return l.call(S(e), n);
                }))),
          t)
        )
          for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
      },
      _ = /^-ms-/,
      z = /-([a-z])/g;
    function U(e, t) {
      return t.toUpperCase();
    }
    function X(e) {
      return e.replace(_, "ms-").replace(z, U);
    }
    var V = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function G() {
      this.expando = S.expando + G.uid++;
    }
    (G.uid = 1),
      (G.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              V(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var r,
            i = this.cache(e);
          if ("string" == typeof t) i[X(t)] = n;
          else for (r in t) i[X(r)] = t[r];
          return i;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][X(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t)
                ? t.map(X)
                : (t = X(t)) in r
                ? [t]
                : t.match(P) || []).length;
              while (n--) delete r[t[n]];
            }
            (void 0 === t || S.isEmptyObject(r)) &&
              (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !S.isEmptyObject(t);
        },
      });
    var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;
    function Z(e, t, n) {
      var r, i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(r)))
        ) {
          try {
            n =
              "true" === (i = n) ||
              ("false" !== i &&
                ("null" === i
                  ? null
                  : i === +i + ""
                  ? +i
                  : J.test(i)
                  ? JSON.parse(i)
                  : i));
          } catch (e) {}
          Q.set(e, t, n);
        } else n = void 0;
      return n;
    }
    S.extend({
      hasData: function (e) {
        return Q.hasData(e) || Y.hasData(e);
      },
      data: function (e, t, n) {
        return Q.access(e, t, n);
      },
      removeData: function (e, t) {
        Q.remove(e, t);
      },
      _data: function (e, t, n) {
        return Y.access(e, t, n);
      },
      _removeData: function (e, t) {
        Y.remove(e, t);
      },
    }),
      S.fn.extend({
        data: function (n, e) {
          var t,
            r,
            i,
            o = this[0],
            a = o && o.attributes;
          if (void 0 === n) {
            if (
              this.length &&
              ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
            ) {
              t = a.length;
              while (t--)
                a[t] &&
                  0 === (r = a[t].name).indexOf("data-") &&
                  ((r = X(r.slice(5))), Z(o, r, i[r]));
              Y.set(o, "hasDataAttrs", !0);
            }
            return i;
          }
          return "object" == typeof n
            ? this.each(function () {
                Q.set(this, n);
              })
            : B(
                this,
                function (e) {
                  var t;
                  if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n))
                      ? t
                      : void 0 !== (t = Z(o, n))
                      ? t
                      : void 0;
                  this.each(function () {
                    Q.set(this, n, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            Q.remove(this, e);
          });
        },
      }),
      S.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (r = Y.get(e, t)),
              n &&
                (!r || Array.isArray(n)
                  ? (r = Y.access(e, t, S.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = S.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = S._queueHooks(e, t);
          "inprogress" === i && ((i = n.shift()), r--),
            i &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              i.call(
                e,
                function () {
                  S.dequeue(e, t);
                },
                o
              )),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            Y.get(e, n) ||
            Y.access(e, n, {
              empty: S.Callbacks("once memory").add(function () {
                Y.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      S.fn.extend({
        queue: function (t, n) {
          var e = 2;
          return (
            "string" != typeof t && ((n = t), (t = "fx"), e--),
            arguments.length < e
              ? S.queue(this[0], t)
              : void 0 === n
              ? this
              : this.each(function () {
                  var e = S.queue(this, t, n);
                  S._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            S.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            i = S.Deferred(),
            o = this,
            a = this.length,
            s = function () {
              --r || i.resolveWith(o, [o]);
            };
          "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
          while (a--)
            (n = Y.get(o[a], e + "queueHooks")) &&
              n.empty &&
              (r++, n.empty.add(s));
          return s(), i.promise(t);
        },
      });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function (e) {
        return S.contains(e.ownerDocument, e);
      },
      oe = { composed: !0 };
    re.getRootNode &&
      (ie = function (e) {
        return (
          S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
        );
      });
    var ae = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
      );
    };
    function se(e, t, n, r) {
      var i,
        o,
        a = 20,
        s = r
          ? function () {
              return r.cur();
            }
          : function () {
              return S.css(e, t, "");
            },
        u = s(),
        l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
        c =
          e.nodeType &&
          (S.cssNumber[t] || ("px" !== l && +u)) &&
          te.exec(S.css(e, t));
      if (c && c[3] !== l) {
        (u /= 2), (l = l || c[3]), (c = +u || 1);
        while (a--)
          S.style(e, t, c + l),
            (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
            (c /= o);
        (c *= 2), S.style(e, t, c + l), (n = n || []);
      }
      return (
        n &&
          ((c = +c || +u || 0),
          (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
          r && ((r.unit = l), (r.start = c), (r.end = i))),
        i
      );
    }
    var ue = {};
    function le(e, t) {
      for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
        (r = e[c]).style &&
          ((n = r.style.display),
          t
            ? ("none" === n &&
                ((l[c] = Y.get(r, "display") || null),
                l[c] || (r.style.display = "")),
              "" === r.style.display &&
                ae(r) &&
                (l[c] =
                  ((u = a = o = void 0),
                  (a = (i = r).ownerDocument),
                  (s = i.nodeName),
                  (u = ue[s]) ||
                    ((o = a.body.appendChild(a.createElement(s))),
                    (u = S.css(o, "display")),
                    o.parentNode.removeChild(o),
                    "none" === u && (u = "block"),
                    (ue[s] = u)))))
            : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
      for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
      return e;
    }
    S.fn.extend({
      show: function () {
        return le(this, !0);
      },
      hide: function () {
        return le(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              ae(this) ? S(this).show() : S(this).hide();
            });
      },
    });
    var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
    (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
      (fe = E.createElement("input")).setAttribute("type", "radio"),
      fe.setAttribute("checked", "checked"),
      fe.setAttribute("name", "t"),
      ce.appendChild(fe),
      (v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (ce.innerHTML = "<textarea>x</textarea>"),
      (v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
      (ce.innerHTML = "<option></option>"),
      (v.option = !!ce.lastChild);
    var ge = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    function ye(e, t) {
      var n;
      return (
        (n =
          "undefined" != typeof e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : "undefined" != typeof e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
        void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
      );
    }
    function ve(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
      (ge.th = ge.td),
      v.option ||
        (ge.optgroup = ge.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
      for (
        var o,
          a,
          s,
          u,
          l,
          c,
          f = t.createDocumentFragment(),
          p = [],
          d = 0,
          h = e.length;
        d < h;
        d++
      )
        if ((o = e[d]) || 0 === o)
          if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
          else if (me.test(o)) {
            (a = a || f.appendChild(t.createElement("div"))),
              (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
              (u = ge[s] || ge._default),
              (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
              (c = u[0]);
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
          } else p.push(t.createTextNode(o));
      (f.textContent = ""), (d = 0);
      while ((o = p[d++]))
        if (r && -1 < S.inArray(o, r)) i && i.push(o);
        else if (
          ((l = ie(o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)
        ) {
          c = 0;
          while ((o = a[c++])) he.test(o.type || "") && n.push(o);
        }
      return f;
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
      return !0;
    }
    function Te() {
      return !1;
    }
    function Ce(e, t) {
      return (
        (e ===
          (function () {
            try {
              return E.activeElement;
            } catch (e) {}
          })()) ==
        ("focus" === t)
      );
    }
    function Ee(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
        for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
          Ee(e, s, n, r, t[s], o);
        return e;
      }
      if (
        (null == r && null == i
          ? ((i = n), (r = n = void 0))
          : null == i &&
            ("string" == typeof n
              ? ((i = r), (r = void 0))
              : ((i = r), (r = n), (n = void 0))),
        !1 === i)
      )
        i = Te;
      else if (!i) return e;
      return (
        1 === o &&
          ((a = i),
          ((i = function (e) {
            return S().off(e), a.apply(this, arguments);
          }).guid = a.guid || (a.guid = S.guid++))),
        e.each(function () {
          S.event.add(this, t, i, r, n);
        })
      );
    }
    function Se(e, i, o) {
      o
        ? (Y.set(e, i, !1),
          S.event.add(e, i, {
            namespace: !1,
            handler: function (e) {
              var t,
                n,
                r = Y.get(this, i);
              if (1 & e.isTrigger && this[i]) {
                if (r.length)
                  (S.event.special[i] || {}).delegateType && e.stopPropagation();
                else if (
                  ((r = s.call(arguments)),
                  Y.set(this, i, r),
                  (t = o(this, i)),
                  this[i](),
                  r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                  r !== n)
                )
                  return (
                    e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                  );
              } else
                r.length &&
                  (Y.set(this, i, {
                    value: S.event.trigger(
                      S.extend(r[0], S.Event.prototype),
                      r.slice(1),
                      this
                    ),
                  }),
                  e.stopImmediatePropagation());
            },
          }))
        : void 0 === Y.get(e, i) && S.event.add(e, i, we);
    }
    (S.event = {
      global: {},
      add: function (t, e, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = Y.get(t);
        if (V(t)) {
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && S.find.matchesSelector(re, i),
            n.guid || (n.guid = S.guid++),
            (u = y.events) || (u = y.events = Object.create(null)),
            (a = y.handle) ||
              (a = y.handle =
                function (e) {
                  return "undefined" != typeof S && S.event.triggered !== e.type
                    ? S.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            (l = (e = (e || "").match(P) || [""]).length);
          while (l--)
            (d = g = (s = be.exec(e[l]) || [])[1]),
              (h = (s[2] || "").split(".").sort()),
              d &&
                ((f = S.event.special[d] || {}),
                (d = (i ? f.delegateType : f.bindType) || d),
                (f = S.event.special[d] || {}),
                (c = S.extend(
                  {
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join("."),
                  },
                  o
                )),
                (p = u[d]) ||
                  (((p = u[d] = []).delegateCount = 0),
                  (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                    (t.addEventListener && t.addEventListener(d, a))),
                f.add &&
                  (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                (S.event.global[d] = !0));
        }
      },
      remove: function (e, t, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = Y.hasData(e) && Y.get(e);
        if (y && (u = y.events)) {
          l = (t = (t || "").match(P) || [""]).length;
          while (l--)
            if (
              ((d = g = (s = be.exec(t[l]) || [])[1]),
              (h = (s[2] || "").split(".").sort()),
              d)
            ) {
              (f = S.event.special[d] || {}),
                (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
                (s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                (a = o = p.length);
              while (o--)
                (c = p[o]),
                  (!i && g !== c.origType) ||
                    (n && n.guid !== c.guid) ||
                    (s && !s.test(c.namespace)) ||
                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                    (p.splice(o, 1),
                    c.selector && p.delegateCount--,
                    f.remove && f.remove.call(e, c));
              a &&
                !p.length &&
                ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                  S.removeEvent(e, d, y.handle),
                delete u[d]);
            } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
          S.isEmptyObject(u) && Y.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};
        for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
        if (
          ((u.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, u))
        ) {
          (a = S.event.handlers.call(this, u, l)), (t = 0);
          while ((i = a[t++]) && !u.isPropagationStopped()) {
            (u.currentTarget = i.elem), (n = 0);
            while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
              (u.rnamespace &&
                !1 !== o.namespace &&
                !u.rnamespace.test(o.namespace)) ||
                ((u.handleObj = o),
                (u.data = o.data),
                void 0 !==
                  (r = (
                    (S.event.special[o.origType] || {}).handle || o.handler
                  ).apply(i.elem, s)) &&
                  !1 === (u.result = r) &&
                  (u.preventDefault(), u.stopPropagation()));
          }
          return c.postDispatch && c.postDispatch.call(this, u), u.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
        if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (o = [], a = {}, n = 0; n < u; n++)
                void 0 === a[(i = (r = t[n]).selector + " ")] &&
                  (a[i] = r.needsContext
                    ? -1 < S(i, this).index(l)
                    : S.find(i, this, null, [l]).length),
                  a[i] && o.push(r);
              o.length && s.push({ elem: l, handlers: o });
            }
        return (
          (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        );
      },
      addProp: function (t, e) {
        Object.defineProperty(S.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: m(e)
            ? function () {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[t];
              },
          set: function (e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            });
          },
        });
      },
      fix: function (e) {
        return e[S.expando] ? e : new S.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (pe.test(t.type) &&
                t.click &&
                A(t, "input") &&
                Y.get(t, "click")) ||
              A(t, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
                ? we
                : Te),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && S.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[S.expando] = !0);
      }),
      (S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = we),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = we),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = we),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      S.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: !0,
        },
        S.event.addProp
      ),
      S.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        S.event.special[t] = {
          setup: function () {
            return Se(this, t, Ce), !1;
          },
          trigger: function () {
            return Se(this, t), !0;
          },
          _default: function (e) {
            return Y.get(e.target, t);
          },
          delegateType: e,
        };
      }),
      S.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, i) {
          S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
              var t,
                n = e.relatedTarget,
                r = e.handleObj;
              return (
                (n && (n === this || S.contains(this, n))) ||
                  ((e.type = r.origType),
                  (t = r.handler.apply(this, arguments)),
                  (e.type = i)),
                t
              );
            },
          };
        }
      ),
      S.fn.extend({
        on: function (e, t, n, r) {
          return Ee(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
          return Ee(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              S(e.delegateTarget).off(
                r.namespace ? r.origType + "." + r.namespace : r.origType,
                r.selector,
                r.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this;
          }
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = Te),
            this.each(function () {
              S.event.remove(this, e, n, t);
            })
          );
        },
      });
    var ke = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function je(e, t) {
      return (
        (A(e, "table") &&
          A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
          S(e).children("tbody")[0]) ||
        e
      );
    }
    function De(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function qe(e) {
      return (
        "true/" === (e.type || "").slice(0, 5)
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function Le(e, t) {
      var n, r, i, o, a, s;
      if (1 === t.nodeType) {
        if (Y.hasData(e) && (s = Y.get(e).events))
          for (i in (Y.remove(t, "handle events"), s))
            for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
        Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
      }
    }
    function He(n, r, i, o) {
      r = g(r);
      var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
      if (h || (1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)))
        return n.each(function (e) {
          var t = n.eq(e);
          h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
        });
      if (
        f &&
        ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
        1 === e.childNodes.length && (e = t),
        t || o)
      ) {
        for (s = (a = S.map(ye(e, "script"), De)).length; c < f; c++)
          (u = e),
            c !== p &&
              ((u = S.clone(u, !0, !0)), s && S.merge(a, ye(u, "script"))),
            i.call(n[c], u, c);
        if (s)
          for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
            (u = a[c]),
              he.test(u.type || "") &&
                !Y.access(u, "globalEval") &&
                S.contains(l, u) &&
                (u.src && "module" !== (u.type || "").toLowerCase()
                  ? S._evalUrl &&
                    !u.noModule &&
                    S._evalUrl(
                      u.src,
                      { nonce: u.nonce || u.getAttribute("nonce") },
                      l
                    )
                  : b(u.textContent.replace(Ne, ""), u, l));
      }
      return n;
    }
    function Oe(e, t, n) {
      for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
        n || 1 !== r.nodeType || S.cleanData(ye(r)),
          r.parentNode &&
            (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    S.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
        if (
          !(
            v.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            S.isXMLDoc(e)
          )
        )
          for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++)
            (s = o[r]),
              (u = a[r]),
              void 0,
              "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
                ? (u.checked = s.checked)
                : ("input" !== l && "textarea" !== l) ||
                  (u.defaultValue = s.defaultValue);
        if (t)
          if (n)
            for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++)
              Le(o[r], a[r]);
          else Le(e, c);
        return (
          0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
        );
      },
      cleanData: function (e) {
        for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
          if (V(n)) {
            if ((t = n[Y.expando])) {
              if (t.events)
                for (r in t.events)
                  i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
              n[Y.expando] = void 0;
            }
            n[Q.expando] && (n[Q.expando] = void 0);
          }
      },
    }),
      S.fn.extend({
        detach: function (e) {
          return Oe(this, e, !0);
        },
        remove: function (e) {
          return Oe(this, e);
        },
        text: function (e) {
          return B(
            this,
            function (e) {
              return void 0 === e
                ? S.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return He(this, arguments, function (e) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              je(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return He(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = je(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return He(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return He(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (S.cleanData(ye(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return S.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return B(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                r = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !ke.test(e) &&
                !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = S.htmlPrefilter(e);
                try {
                  for (; n < r; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (S.cleanData(ye(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var n = [];
          return He(
            this,
            arguments,
            function (e) {
              var t = this.parentNode;
              S.inArray(this, n) < 0 &&
                (S.cleanData(ye(this)), t && t.replaceChild(e, this));
            },
            n
          );
        },
      }),
      S.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, a) {
          S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
              (t = o === i ? this : this.clone(!0)),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n);
          };
        }
      );
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = /^--/,
      Me = function (e) {
        var t = e.ownerDocument.defaultView;
        return (t && t.opener) || (t = C), t.getComputedStyle(e);
      },
      Ie = function (e, t, n) {
        var r,
          i,
          o = {};
        for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
        return r;
      },
      We = new RegExp(ne.join("|"), "i"),
      Fe = "[\\x20\\t\\r\\n\\f]",
      $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");
    function Be(e, t, n) {
      var r,
        i,
        o,
        a,
        s = Re.test(t),
        u = e.style;
      return (
        (n = n || Me(e)) &&
          ((a = n.getPropertyValue(t) || n[t]),
          s && a && (a = a.replace($e, "$1") || void 0),
          "" !== a || ie(e) || (a = S.style(e, t)),
          !v.pixelBoxStyles() &&
            Pe.test(a) &&
            We.test(t) &&
            ((r = u.width),
            (i = u.minWidth),
            (o = u.maxWidth),
            (u.minWidth = u.maxWidth = u.width = a),
            (a = n.width),
            (u.width = r),
            (u.minWidth = i),
            (u.maxWidth = o))),
        void 0 !== a ? a + "" : a
      );
    }
    function _e(e, t) {
      return {
        get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        },
      };
    }
    !(function () {
      function e() {
        if (l) {
          (u.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (l.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            re.appendChild(u).appendChild(l);
          var e = C.getComputedStyle(l);
          (n = "1%" !== e.top),
            (s = 12 === t(e.marginLeft)),
            (l.style.right = "60%"),
            (o = 36 === t(e.right)),
            (r = 36 === t(e.width)),
            (l.style.position = "absolute"),
            (i = 12 === t(l.offsetWidth / 3)),
            re.removeChild(u),
            (l = null);
        }
      }
      function t(e) {
        return Math.round(parseFloat(e));
      }
      var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
      l.style &&
        ((l.style.backgroundClip = "content-box"),
        (l.cloneNode(!0).style.backgroundClip = ""),
        (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
        S.extend(v, {
          boxSizingReliable: function () {
            return e(), r;
          },
          pixelBoxStyles: function () {
            return e(), o;
          },
          pixelPosition: function () {
            return e(), n;
          },
          reliableMarginLeft: function () {
            return e(), s;
          },
          scrollboxSize: function () {
            return e(), i;
          },
          reliableTrDimensions: function () {
            var e, t, n, r;
            return (
              null == a &&
                ((e = E.createElement("table")),
                (t = E.createElement("tr")),
                (n = E.createElement("div")),
                (e.style.cssText =
                  "position:absolute;left:-11111px;border-collapse:separate"),
                (t.style.cssText = "border:1px solid"),
                (t.style.height = "1px"),
                (n.style.height = "9px"),
                (n.style.display = "block"),
                re.appendChild(e).appendChild(t).appendChild(n),
                (r = C.getComputedStyle(t)),
                (a =
                  parseInt(r.height, 10) +
                    parseInt(r.borderTopWidth, 10) +
                    parseInt(r.borderBottomWidth, 10) ===
                  t.offsetHeight),
                re.removeChild(e)),
              a
            );
          },
        }));
    })();
    var ze = ["Webkit", "Moz", "ms"],
      Ue = E.createElement("div").style,
      Xe = {};
    function Ve(e) {
      var t = S.cssProps[e] || Xe[e];
      return (
        t ||
        (e in Ue
          ? e
          : (Xe[e] =
              (function (e) {
                var t = e[0].toUpperCase() + e.slice(1),
                  n = ze.length;
                while (n--) if ((e = ze[n] + t) in Ue) return e;
              })(e) || e))
      );
    }
    var Ge = /^(none|table(?!-c[ea]).+)/,
      Ye = { position: "absolute", visibility: "hidden", display: "block" },
      Qe = { letterSpacing: "0", fontWeight: "400" };
    function Je(e, t, n) {
      var r = te.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ke(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2)
        "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
          r
            ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
              "margin" !== n &&
                (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
            : ((u += S.css(e, "padding" + ne[a], !0, i)),
              "padding" !== n
                ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
                : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
      return (
        !r &&
          0 <= o &&
          (u +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
              )
            ) || 0),
        u
      );
    }
    function Ze(e, t, n) {
      var r = Me(e),
        i =
          (!v.boxSizingReliable() || n) &&
          "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Pe.test(a)) {
        if (!n) return a;
        a = "auto";
      }
      return (
        ((!v.boxSizingReliable() && i) ||
          (!v.reliableTrDimensions() && A(e, "tr")) ||
          "auto" === a ||
          (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
          e.getClientRects().length &&
          ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
          (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) +
          Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
          "px"
      );
    }
    function et(e, t, n, r, i) {
      return new et.prototype.init(e, t, n, r, i);
    }
    S.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Be(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
            o,
            a,
            s = X(t),
            u = Re.test(t),
            l = e.style;
          if (
            (u || (t = Ve(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
          )
            return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
          "string" === (o = typeof n) &&
            (i = te.exec(n)) &&
            i[1] &&
            ((n = se(e, t, i)), (o = "number")),
            null != n &&
              n == n &&
              ("number" !== o ||
                u ||
                (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
              v.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (l[t] = "inherit"),
              (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                (u ? l.setProperty(t, n) : (l[t] = n)));
        }
      },
      css: function (e, t, n, r) {
        var i,
          o,
          a,
          s = X(t);
        return (
          Re.test(t) || (t = Ve(s)),
          (a = S.cssHooks[t] || S.cssHooks[s]) &&
            "get" in a &&
            (i = a.get(e, !0, n)),
          void 0 === i && (i = Be(e, t, r)),
          "normal" === i && t in Qe && (i = Qe[t]),
          "" === n || n
            ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
            : i
        );
      },
    }),
      S.each(["height", "width"], function (e, u) {
        S.cssHooks[u] = {
          get: function (e, t, n) {
            if (t)
              return !Ge.test(S.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? Ze(e, u, n)
                : Ie(e, Ye, function () {
                    return Ze(e, u, n);
                  });
          },
          set: function (e, t, n) {
            var r,
              i = Me(e),
              o = !v.scrollboxSize() && "absolute" === i.position,
              a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
              s = n ? Ke(e, u, n, a, i) : 0;
            return (
              a &&
                o &&
                (s -= Math.ceil(
                  e["offset" + u[0].toUpperCase() + u.slice(1)] -
                    parseFloat(i[u]) -
                    Ke(e, u, "border", !1, i) -
                    0.5
                )),
              s &&
                (r = te.exec(t)) &&
                "px" !== (r[3] || "px") &&
                ((e.style[u] = t), (t = S.css(e, u))),
              Je(0, t, s)
            );
          },
        };
      }),
      (S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(Be(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                Ie(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
        (S.cssHooks[i + o] = {
          expand: function (e) {
            for (
              var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            )
              n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
            return n;
          },
        }),
          "margin" !== i && (S.cssHooks[i + o].set = Je);
      }),
      S.fn.extend({
        css: function (e, t) {
          return B(
            this,
            function (e, t, n) {
              var r,
                i,
                o = {},
                a = 0;
              if (Array.isArray(t)) {
                for (r = Me(e), i = t.length; a < i; a++)
                  o[t[a]] = S.css(e, t[a], !1, r);
                return o;
              }
              return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          );
        },
      }),
      (((S.Tween = et).prototype = {
        constructor: et,
        init: function (e, t, n, r, i, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || S.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (S.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = et.propHooks[this.prop];
          return e && e.get ? e.get(this) : et.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = et.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  S.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
          );
        },
      }).init.prototype = et.prototype),
      ((et.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
          },
          set: function (e) {
            S.fx.step[e.prop]
              ? S.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (!S.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : S.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }).scrollTop = et.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (S.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (S.fx = et.prototype.init),
      (S.fx.step = {});
    var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;
    function st() {
      nt &&
        (!1 === E.hidden && C.requestAnimationFrame
          ? C.requestAnimationFrame(st)
          : C.setTimeout(st, S.fx.interval),
        S.fx.tick());
    }
    function ut() {
      return (
        C.setTimeout(function () {
          tt = void 0;
        }),
        (tt = Date.now())
      );
    }
    function lt(e, t) {
      var n,
        r = 0,
        i = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        i["margin" + (n = ne[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i;
    }
    function ct(e, t, n) {
      for (
        var r,
          i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
          o = 0,
          a = i.length;
        o < a;
        o++
      )
        if ((r = i[o].call(n, t, e))) return r;
    }
    function ft(o, e, t) {
      var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
          delete u.elem;
        }),
        u = function () {
          if (a) return !1;
          for (
            var e = tt || ut(),
              t = Math.max(0, l.startTime + l.duration - e),
              n = 1 - (t / l.duration || 0),
              r = 0,
              i = l.tweens.length;
            r < i;
            r++
          )
            l.tweens[r].run(n);
          return (
            s.notifyWith(o, [l, n, t]),
            n < 1 && i
              ? t
              : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
          );
        },
        l = s.promise({
          elem: o,
          props: S.extend({}, e),
          opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
          originalProperties: e,
          originalOptions: t,
          startTime: tt || ut(),
          duration: t.duration,
          tweens: [],
          createTween: function (e, t) {
            var n = S.Tween(
              o,
              l.opts,
              e,
              t,
              l.opts.specialEasing[e] || l.opts.easing
            );
            return l.tweens.push(n), n;
          },
          stop: function (e) {
            var t = 0,
              n = e ? l.tweens.length : 0;
            if (a) return this;
            for (a = !0; t < n; t++) l.tweens[t].run(1);
            return (
              e
                ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
                : s.rejectWith(o, [l, e]),
              this
            );
          },
        }),
        c = l.props;
      for (
        !(function (e, t) {
          var n, r, i, o, a;
          for (n in e)
            if (
              ((i = t[(r = X(n))]),
              (o = e[n]),
              Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
              n !== r && ((e[r] = o), delete e[n]),
              (a = S.cssHooks[r]) && ("expand" in a))
            )
              for (n in ((o = a.expand(o)), delete e[r], o))
                (n in e) || ((e[n] = o[n]), (t[n] = i));
            else t[r] = i;
        })(c, l.opts.specialEasing);
        r < i;
        r++
      )
        if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
          return (
            m(n.stop) &&
              (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
            n
          );
      return (
        S.map(c, ct, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l
          .progress(l.opts.progress)
          .done(l.opts.done, l.opts.complete)
          .fail(l.opts.fail)
          .always(l.opts.always),
        S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
        l
      );
    }
    (S.Animation = S.extend(ft, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return se(n.elem, e, te.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
        for (var n, r = 0, i = e.length; r < i; r++)
          (n = e[r]),
            (ft.tweeners[n] = ft.tweeners[n] || []),
            ft.tweeners[n].unshift(t);
      },
      prefilters: [
        function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = Y.get(e, "fxshow");
          for (r in (n.queue ||
            (null == (a = S._queueHooks(e, "fx")).unqueued &&
              ((a.unqueued = 0),
              (s = a.empty.fire),
              (a.empty.fire = function () {
                a.unqueued || s();
              })),
            a.unqueued++,
            p.always(function () {
              p.always(function () {
                a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
              });
            })),
          t))
            if (((i = t[r]), ot.test(i))) {
              if (
                (delete t[r],
                (o = o || "toggle" === i),
                i === (g ? "hide" : "show"))
              ) {
                if ("show" !== i || !y || void 0 === y[r]) continue;
                g = !0;
              }
              d[r] = (y && y[r]) || S.style(e, r);
            }
          if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
            for (r in (f &&
              1 === e.nodeType &&
              ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              null == (l = y && y.display) && (l = Y.get(e, "display")),
              "none" === (c = S.css(e, "display")) &&
                (l
                  ? (c = l)
                  : (le([e], !0),
                    (l = e.style.display || l),
                    (c = S.css(e, "display")),
                    le([e]))),
              ("inline" === c || ("inline-block" === c && null != l)) &&
                "none" === S.css(e, "float") &&
                (u ||
                  (p.done(function () {
                    h.display = l;
                  }),
                  null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                (h.display = "inline-block"))),
            n.overflow &&
              ((h.overflow = "hidden"),
              p.always(function () {
                (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2]);
              })),
            (u = !1),
            d))
              u ||
                (y
                  ? "hidden" in y && (g = y.hidden)
                  : (y = Y.access(e, "fxshow", { display: l })),
                o && (y.hidden = !g),
                g && le([e], !0),
                p.done(function () {
                  for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                    S.style(e, r, d[r]);
                })),
                (u = ct(g ? y[r] : 0, r, p)),
                r in y ||
                  ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        },
      ],
      prefilter: function (e, t) {
        t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
      },
    })),
      (S.speed = function (e, t, n) {
        var r =
          e && "object" == typeof e
            ? S.extend({}, e)
            : {
                complete: n || (!n && t) || (m(e) && e),
                duration: e,
                easing: (n && t) || (t && !m(t) && t),
              };
        return (
          S.fx.off
            ? (r.duration = 0)
            : "number" != typeof r.duration &&
              (r.duration in S.fx.speeds
                ? (r.duration = S.fx.speeds[r.duration])
                : (r.duration = S.fx.speeds._default)),
          (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
          }),
          r
        );
      }),
      S.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(ae)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (t, e, n, r) {
          var i = S.isEmptyObject(t),
            o = S.speed(e, n, r),
            a = function () {
              var e = ft(this, S.extend({}, t), o);
              (i || Y.get(this, "finish")) && e.stop(!0);
            };
          return (
            (a.finish = a),
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          );
        },
        stop: function (i, e, o) {
          var a = function (e) {
            var t = e.stop;
            delete e.stop, t(o);
          };
          return (
            "string" != typeof i && ((o = e), (e = i), (i = void 0)),
            e && this.queue(i || "fx", []),
            this.each(function () {
              var e = !0,
                t = null != i && i + "queueHooks",
                n = S.timers,
                r = Y.get(this);
              if (t) r[t] && r[t].stop && a(r[t]);
              else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
              for (t = n.length; t--; )
                n[t].elem !== this ||
                  (null != i && n[t].queue !== i) ||
                  (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
              (!e && o) || S.dequeue(this, i);
            })
          );
        },
        finish: function (a) {
          return (
            !1 !== a && (a = a || "fx"),
            this.each(function () {
              var e,
                t = Y.get(this),
                n = t[a + "queue"],
                r = t[a + "queueHooks"],
                i = S.timers,
                o = n ? n.length : 0;
              for (
                t.finish = !0,
                  S.queue(this, a, []),
                  r && r.stop && r.stop.call(this, !0),
                  e = i.length;
                e--;
  
              )
                i[e].elem === this &&
                  i[e].queue === a &&
                  (i[e].anim.stop(!0), i.splice(e, 1));
              for (e = 0; e < o; e++)
                n[e] && n[e].finish && n[e].finish.call(this);
              delete t.finish;
            })
          );
        },
      }),
      S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
          return null == e || "boolean" == typeof e
            ? i.apply(this, arguments)
            : this.animate(lt(r, !0), e, t, n);
        };
      }),
      S.each(
        {
          slideDown: lt("show"),
          slideUp: lt("hide"),
          slideToggle: lt("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, r) {
          S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n);
          };
        }
      ),
      (S.timers = []),
      (S.fx.tick = function () {
        var e,
          t = 0,
          n = S.timers;
        for (tt = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), (tt = void 0);
      }),
      (S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start();
      }),
      (S.fx.interval = 13),
      (S.fx.start = function () {
        nt || ((nt = !0), st());
      }),
      (S.fx.stop = function () {
        nt = null;
      }),
      (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (S.fn.delay = function (r, e) {
        return (
          (r = (S.fx && S.fx.speeds[r]) || r),
          (e = e || "fx"),
          this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
              C.clearTimeout(n);
            };
          })
        );
      }),
      (rt = E.createElement("input")),
      (it = E.createElement("select").appendChild(E.createElement("option"))),
      (rt.type = "checkbox"),
      (v.checkOn = "" !== rt.value),
      (v.optSelected = it.selected),
      ((rt = E.createElement("input")).value = "t"),
      (rt.type = "radio"),
      (v.radioValue = "t" === rt.value);
    var pt,
      dt = S.expr.attrHandle;
    S.fn.extend({
      attr: function (e, t) {
        return B(this, S.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          S.removeAttr(this, e);
        });
      },
    }),
      S.extend({
        attr: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return "undefined" == typeof e.getAttribute
              ? S.prop(e, t, n)
              : ((1 === o && S.isXMLDoc(e)) ||
                  (i =
                    S.attrHooks[t.toLowerCase()] ||
                    (S.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n
                  ? null === n
                    ? void S.removeAttr(e, t)
                    : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = S.find.attr(e, t))
                  ? void 0
                  : r);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!v.radioValue && "radio" === t && A(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            r = 0,
            i = t && t.match(P);
          if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
        },
      }),
      (pt = {
        set: function (e, t, n) {
          return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function (e, t, n) {
          var r,
            i,
            o = t.toLowerCase();
          return (
            n ||
              ((i = dt[o]),
              (dt[o] = r),
              (r = null != a(e, t, n) ? o : null),
              (dt[o] = i)),
            r
          );
        };
      });
    var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;
    function yt(e) {
      return (e.match(P) || []).join(" ");
    }
    function vt(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function mt(e) {
      return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
    }
    S.fn.extend({
      prop: function (e, t) {
        return B(this, S.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[S.propFix[e] || e];
        });
      },
    }),
      S.extend({
        prop: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && S.isXMLDoc(e)) ||
                ((t = S.propFix[t] || t), (i = S.propHooks[t])),
              void 0 !== n
                ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e[t] = n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = S.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      v.optSelected ||
        (S.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      S.each(
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
          S.propFix[this.toLowerCase()] = this;
        }
      ),
      S.fn.extend({
        addClass: function (t) {
          var e, n, r, i, o, a;
          return m(t)
            ? this.each(function (e) {
                S(this).addClass(t.call(this, e, vt(this)));
              })
            : (e = mt(t)).length
            ? this.each(function () {
                if (
                  ((r = vt(this)), (n = 1 === this.nodeType && " " + yt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++)
                    (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                  (a = yt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this;
        },
        removeClass: function (t) {
          var e, n, r, i, o, a;
          return m(t)
            ? this.each(function (e) {
                S(this).removeClass(t.call(this, e, vt(this)));
              })
            : arguments.length
            ? (e = mt(t)).length
              ? this.each(function () {
                  if (
                    ((r = vt(this)),
                    (n = 1 === this.nodeType && " " + yt(r) + " "))
                  ) {
                    for (o = 0; o < e.length; o++) {
                      i = e[o];
                      while (-1 < n.indexOf(" " + i + " "))
                        n = n.replace(" " + i + " ", " ");
                    }
                    (a = yt(n)), r !== a && this.setAttribute("class", a);
                  }
                })
              : this
            : this.attr("class", "");
        },
        toggleClass: function (t, n) {
          var e,
            r,
            i,
            o,
            a = typeof t,
            s = "string" === a || Array.isArray(t);
          return m(t)
            ? this.each(function (e) {
                S(this).toggleClass(t.call(this, e, vt(this), n), n);
              })
            : "boolean" == typeof n && s
            ? n
              ? this.addClass(t)
              : this.removeClass(t)
            : ((e = mt(t)),
              this.each(function () {
                if (s)
                  for (o = S(this), i = 0; i < e.length; i++)
                    (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                  (void 0 !== t && "boolean" !== a) ||
                    ((r = vt(this)) && Y.set(this, "__className__", r),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        r || !1 === t ? "" : Y.get(this, "__className__") || ""
                      ));
              }));
        },
        hasClass: function (e) {
          var t,
            n,
            r = 0;
          t = " " + e + " ";
          while ((n = this[r++]))
            if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t))
              return !0;
          return !1;
        },
      });
    var xt = /\r/g;
    S.fn.extend({
      val: function (n) {
        var r,
          e,
          i,
          t = this[0];
        return arguments.length
          ? ((i = m(n)),
            this.each(function (e) {
              var t;
              1 === this.nodeType &&
                (null == (t = i ? n.call(this, e, S(this).val()) : n)
                  ? (t = "")
                  : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = S.map(t, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((r =
                  S.valHooks[this.type] ||
                  S.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in r &&
                  void 0 !== r.set(this, t, "value")) ||
                  (this.value = t));
            }))
          : t
          ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
            "get" in r &&
            void 0 !== (e = r.get(t, "value"))
            ? e
            : "string" == typeof (e = t.value)
            ? e.replace(xt, "")
            : null == e
            ? ""
            : e
          : void 0;
      },
    }),
      S.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = S.find.attr(e, "value");
              return null != t ? t : yt(S.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                i = e.options,
                o = e.selectedIndex,
                a = "select-one" === e.type,
                s = a ? null : [],
                u = a ? o + 1 : i.length;
              for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                if (
                  ((n = i[r]).selected || r === o) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                ) {
                  if (((t = S(n).val()), a)) return t;
                  s.push(t);
                }
              return s;
            },
            set: function (e, t) {
              var n,
                r,
                i = e.options,
                o = S.makeArray(t),
                a = i.length;
              while (a--)
                ((r = i[a]).selected =
                  -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      S.each(["radio", "checkbox"], function () {
        (S.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = -1 < S.inArray(S(e).val(), t));
          },
        }),
          v.checkOn ||
            (S.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (v.focusin = "onfocusin" in C);
    var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function (e) {
        e.stopPropagation();
      };
    S.extend(S.event, {
      trigger: function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = y.call(e, "type") ? e.type : e,
          h = y.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((o = f = a = n = n || E),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !bt.test(d + S.event.triggered) &&
            (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
            (u = d.indexOf(":") < 0 && "on" + d),
            ((e = e[S.expando]
              ? e
              : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
            (e.namespace = h.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : S.makeArray(t, [e])),
            (c = S.event.special[d] || {}),
            r || !c.trigger || !1 !== c.trigger.apply(n, t)))
        ) {
          if (!r && !c.noBubble && !x(n)) {
            for (
              s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
              o;
              o = o.parentNode
            )
              p.push(o), (a = o);
            a === (n.ownerDocument || E) &&
              p.push(a.defaultView || a.parentWindow || C);
          }
          i = 0;
          while ((o = p[i++]) && !e.isPropagationStopped())
            (f = o),
              (e.type = 1 < i ? s : c.bindType || d),
              (l =
                (Y.get(o, "events") || Object.create(null))[e.type] &&
                Y.get(o, "handle")) && l.apply(o, t),
              (l = u && o[u]) &&
                l.apply &&
                V(o) &&
                ((e.result = l.apply(o, t)),
                !1 === e.result && e.preventDefault());
          return (
            (e.type = d),
            r ||
              e.isDefaultPrevented() ||
              (c._default && !1 !== c._default.apply(p.pop(), t)) ||
              !V(n) ||
              (u &&
                m(n[d]) &&
                !x(n) &&
                ((a = n[u]) && (n[u] = null),
                (S.event.triggered = d),
                e.isPropagationStopped() && f.addEventListener(d, wt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, wt),
                (S.event.triggered = void 0),
                a && (n[u] = a))),
            e.result
          );
        }
      },
      simulate: function (e, t, n) {
        var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
        S.event.trigger(r, null, t);
      },
    }),
      S.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            S.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return S.event.trigger(e, t, n, !0);
        },
      }),
      v.focusin ||
        S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
          var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e));
          };
          S.event.special[r] = {
            setup: function () {
              var e = this.ownerDocument || this.document || this,
                t = Y.access(e, r);
              t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this.document || this,
                t = Y.access(e, r) - 1;
              t
                ? Y.access(e, r, t)
                : (e.removeEventListener(n, i, !0), Y.remove(e, r));
            },
          };
        });
    var Tt = C.location,
      Ct = { guid: Date.now() },
      Et = /\?/;
    S.parseXML = function (e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
        t = new C.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {}
      return (
        (n = t && t.getElementsByTagName("parsererror")[0]),
        (t && !n) ||
          S.error(
            "Invalid XML: " +
              (n
                ? S.map(n.childNodes, function (e) {
                    return e.textContent;
                  }).join("\n")
                : e)
          ),
        t
      );
    };
    var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;
    function jt(n, e, r, i) {
      var t;
      if (Array.isArray(e))
        S.each(e, function (e, t) {
          r || St.test(n)
            ? i(n, t)
            : jt(
                n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
                t,
                r,
                i
              );
        });
      else if (r || "object" !== w(e)) i(n, e);
      else for (t in e) jt(n + "[" + t + "]", e[t], r, i);
    }
    (S.param = function (e, t) {
      var n,
        r = [],
        i = function (e, t) {
          var n = m(t) ? t() : t;
          r[r.length] =
            encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
      if (null == e) return "";
      if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
        S.each(e, function () {
          i(this.name, this.value);
        });
      else for (n in e) jt(n, e[n], t, i);
      return r.join("&");
    }),
      S.fn.extend({
        serialize: function () {
          return S.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = S.prop(this, "elements");
            return e ? S.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !S(this).is(":disabled") &&
                Nt.test(this.nodeName) &&
                !At.test(e) &&
                (this.checked || !pe.test(e))
              );
            })
            .map(function (e, t) {
              var n = S(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? S.map(n, function (e) {
                    return { name: t.name, value: e.replace(kt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(kt, "\r\n") };
            })
            .get();
        },
      });
    var Dt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");
    function Ft(o) {
      return function (e, t) {
        "string" != typeof e && ((t = e), (e = "*"));
        var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
        if (m(t))
          while ((n = i[r++]))
            "+" === n[0]
              ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
              : (o[n] = o[n] || []).push(t);
      };
    }
    function $t(t, i, o, a) {
      var s = {},
        u = t === Mt;
      function l(e) {
        var r;
        return (
          (s[e] = !0),
          S.each(t[e] || [], function (e, t) {
            var n = t(i, o, a);
            return "string" != typeof n || u || s[n]
              ? u
                ? !(r = n)
                : void 0
              : (i.dataTypes.unshift(n), l(n), !1);
          }),
          r
        );
      }
      return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function Bt(e, t) {
      var n,
        r,
        i = S.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && S.extend(!0, e, r), e;
    }
    (Wt.href = Tt.href),
      S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Tt.href,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Tt.protocol
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": It,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": S.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function (e, t) {
          "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
          var c,
            f,
            p,
            n,
            d,
            r,
            h,
            g,
            i,
            o,
            y = S.ajaxSetup({}, t),
            v = y.context || y,
            m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event,
            x = S.Deferred(),
            b = S.Callbacks("once memory"),
            w = y.statusCode || {},
            a = {},
            s = {},
            u = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (h) {
                  if (!n) {
                    n = {};
                    while ((t = Ht.exec(p)))
                      n[t[1].toLowerCase() + " "] = (
                        n[t[1].toLowerCase() + " "] || []
                      ).concat(t[2]);
                  }
                  t = n[e.toLowerCase() + " "];
                }
                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function () {
                return h ? p : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == h &&
                    ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                    (a[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == h && (y.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (h) T.always(e[T.status]);
                  else for (t in e) w[t] = [w[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || u;
                return c && c.abort(t), l(0, t), this;
              },
            };
          if (
            (x.promise(T),
            (y.url = ((e || y.url || Tt.href) + "").replace(
              Pt,
              Tt.protocol + "//"
            )),
            (y.type = t.method || t.type || y.method || y.type),
            (y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""]),
            null == y.crossDomain)
          ) {
            r = E.createElement("a");
            try {
              (r.href = y.url),
                (r.href = r.href),
                (y.crossDomain =
                  Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
            } catch (e) {
              y.crossDomain = !0;
            }
          }
          if (
            (y.data &&
              y.processData &&
              "string" != typeof y.data &&
              (y.data = S.param(y.data, y.traditional)),
            $t(Rt, y, t, T),
            h)
          )
            return T;
          for (i in ((g = S.event && y.global) &&
            0 == S.active++ &&
            S.event.trigger("ajaxStart"),
          (y.type = y.type.toUpperCase()),
          (y.hasContent = !Ot.test(y.type)),
          (f = y.url.replace(qt, "")),
          y.hasContent
            ? y.data &&
              y.processData &&
              0 ===
                (y.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (y.data = y.data.replace(Dt, "+"))
            : ((o = y.url.slice(f.length)),
              y.data &&
                (y.processData || "string" == typeof y.data) &&
                ((f += (Et.test(f) ? "&" : "?") + y.data), delete y.data),
              !1 === y.cache &&
                ((f = f.replace(Lt, "$1")),
                (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
              (y.url = f + o)),
          y.ifModified &&
            (S.lastModified[f] &&
              T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
          ((y.data && y.hasContent && !1 !== y.contentType) || t.contentType) &&
            T.setRequestHeader("Content-Type", y.contentType),
          T.setRequestHeader(
            "Accept",
            y.dataTypes[0] && y.accepts[y.dataTypes[0]]
              ? y.accepts[y.dataTypes[0]] +
                  ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "")
              : y.accepts["*"]
          ),
          y.headers))
            T.setRequestHeader(i, y.headers[i]);
          if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h))
            return T.abort();
          if (
            ((u = "abort"),
            b.add(y.complete),
            T.done(y.success),
            T.fail(y.error),
            (c = $t(Mt, y, t, T)))
          ) {
            if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, y]), h))
              return T;
            y.async &&
              0 < y.timeout &&
              (d = C.setTimeout(function () {
                T.abort("timeout");
              }, y.timeout));
            try {
              (h = !1), c.send(a, l);
            } catch (e) {
              if (h) throw e;
              l(-1, e);
            }
          } else l(-1, "No Transport");
          function l(e, t, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l = t;
            h ||
              ((h = !0),
              d && C.clearTimeout(d),
              (c = void 0),
              (p = r || ""),
              (T.readyState = 0 < e ? 4 : 0),
              (i = (200 <= e && e < 300) || 304 === e),
              n &&
                (s = (function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s = e.contents,
                    u = e.dataTypes;
                  while ("*" === u[0])
                    u.shift(),
                      void 0 === r &&
                        (r = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (r)
                    for (i in s)
                      if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break;
                      }
                  if (u[0] in n) o = u[0];
                  else {
                    for (i in n) {
                      if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break;
                      }
                      a || (a = i);
                    }
                    o = o || a;
                  }
                  if (o) return o !== u[0] && u.unshift(o), n[o];
                })(y, T, n)),
              !i &&
                -1 < S.inArray("script", y.dataTypes) &&
                S.inArray("json", y.dataTypes) < 0 &&
                (y.converters["text script"] = function () {}),
              (s = (function (e, t, n, r) {
                var i,
                  o,
                  a,
                  s,
                  u,
                  l = {},
                  c = e.dataTypes.slice();
                if (c[1])
                  for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                o = c.shift();
                while (o)
                  if (
                    (e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    (u = o),
                    (o = c.shift()))
                  )
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                      if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                          if (
                            (s = i.split(" "))[1] === o &&
                            (a = l[u + " " + s[0]] || l["* " + s[0]])
                          ) {
                            !0 === a
                              ? (a = l[i])
                              : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                            break;
                          }
                      if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else
                          try {
                            t = a(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: a
                                ? e
                                : "No conversion from " + u + " to " + o,
                            };
                          }
                    }
                return { state: "success", data: t };
              })(y, s, T, i)),
              i
                ? (y.ifModified &&
                    ((u = T.getResponseHeader("Last-Modified")) &&
                      (S.lastModified[f] = u),
                    (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                  204 === e || "HEAD" === y.type
                    ? (l = "nocontent")
                    : 304 === e
                    ? (l = "notmodified")
                    : ((l = s.state), (o = s.data), (i = !(a = s.error))))
                : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
              (T.status = e),
              (T.statusText = (t || l) + ""),
              i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
              T.statusCode(w),
              (w = void 0),
              g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]),
              b.fireWith(v, [T, l]),
              g &&
                (m.trigger("ajaxComplete", [T, y]),
                --S.active || S.event.trigger("ajaxStop")));
          }
          return T;
        },
        getJSON: function (e, t, n) {
          return S.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return S.get(e, void 0, t, "script");
        },
      }),
      S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
          return (
            m(t) && ((r = r || n), (n = t), (t = void 0)),
            S.ajax(
              S.extend(
                { url: e, type: i, dataType: r, data: t, success: n },
                S.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      S.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers)
          "content-type" === t.toLowerCase() &&
            (e.contentType = e.headers[t] || "");
      }),
      (S._evalUrl = function (e, t, n) {
        return S.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (e) {
            S.globalEval(e, t, n);
          },
        });
      }),
      S.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (m(e) && (e = e.call(this[0])),
              (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  var e = this;
                  while (e.firstElementChild) e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (n) {
          return m(n)
            ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e));
              })
            : this.each(function () {
                var e = S(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              });
        },
        wrap: function (t) {
          var n = m(t);
          return this.each(function (e) {
            S(this).wrapAll(n ? t.call(this, e) : t);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                S(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e);
      }),
      (S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (S.ajaxSettings.xhr = function () {
        try {
          return new C.XMLHttpRequest();
        } catch (e) {}
      });
    var _t = { 0: 200, 1223: 204 },
      zt = S.ajaxSettings.xhr();
    (v.cors = !!zt && "withCredentials" in zt),
      (v.ajax = zt = !!zt),
      S.ajaxTransport(function (i) {
        var o, a;
        if (v.cors || (zt && !i.crossDomain))
          return {
            send: function (e, t) {
              var n,
                r = i.xhr();
              if (
                (r.open(i.type, i.url, i.async, i.username, i.password),
                i.xhrFields)
              )
                for (n in i.xhrFields) r[n] = i.xhrFields[n];
              for (n in (i.mimeType &&
                r.overrideMimeType &&
                r.overrideMimeType(i.mimeType),
              i.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                r.setRequestHeader(n, e[n]);
              (o = function (e) {
                return function () {
                  o &&
                    ((o =
                      a =
                      r.onload =
                      r.onerror =
                      r.onabort =
                      r.ontimeout =
                      r.onreadystatechange =
                        null),
                    "abort" === e
                      ? r.abort()
                      : "error" === e
                      ? "number" != typeof r.status
                        ? t(0, "error")
                        : t(r.status, r.statusText)
                      : t(
                          _t[r.status] || r.status,
                          r.statusText,
                          "text" !== (r.responseType || "text") ||
                            "string" != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders()
                        ));
                };
              }),
                (r.onload = o()),
                (a = r.onerror = r.ontimeout = o("error")),
                void 0 !== r.onabort
                  ? (r.onabort = a)
                  : (r.onreadystatechange = function () {
                      4 === r.readyState &&
                        C.setTimeout(function () {
                          o && a();
                        });
                    }),
                (o = o("abort"));
              try {
                r.send((i.hasContent && i.data) || null);
              } catch (e) {
                if (o) throw e;
              }
            },
            abort: function () {
              o && o();
            },
          };
      }),
      S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      S.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return S.globalEval(e), e;
          },
        },
      }),
      S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      S.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
          return {
            send: function (e, t) {
              (r = S("<script>")
                .attr(n.scriptAttrs || {})
                .prop({ charset: n.scriptCharset, src: n.url })
                .on(
                  "load error",
                  (i = function (e) {
                    r.remove(),
                      (i = null),
                      e && t("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                E.head.appendChild(r[0]);
            },
            abort: function () {
              i && i();
            },
          };
      });
    var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Xt.pop() || S.expando + "_" + Ct.guid++;
        return (this[e] = !0), e;
      },
    }),
      S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r,
          i,
          o,
          a =
            !1 !== e.jsonp &&
            (Vt.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Vt.test(e.data) &&
                "data");
        if (a || "jsonp" === e.dataTypes[0])
          return (
            (r = e.jsonpCallback =
              m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Vt, "$1" + r))
              : !1 !== e.jsonp &&
                (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            (e.converters["script json"] = function () {
              return o || S.error(r + " was not called"), o[0];
            }),
            (e.dataTypes[0] = "json"),
            (i = C[r]),
            (C[r] = function () {
              o = arguments;
            }),
            n.always(function () {
              void 0 === i ? S(C).removeProp(r) : (C[r] = i),
                e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
                o && m(i) && i(o[0]),
                (o = i = void 0);
            }),
            "script"
          );
      }),
      (v.createHTMLDocument =
        (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === Ut.childNodes.length)),
      (S.parseHTML = function (e, t, n) {
        return "string" != typeof e
          ? []
          : ("boolean" == typeof t && ((n = t), (t = !1)),
            t ||
              (v.createHTMLDocument
                ? (((r = (t =
                    E.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = E.location.href),
                  t.head.appendChild(r))
                : (t = E)),
            (o = !n && []),
            (i = N.exec(e))
              ? [t.createElement(i[1])]
              : ((i = xe([e], t, o)),
                o && o.length && S(o).remove(),
                S.merge([], i.childNodes)));
        var r, i, o;
      }),
      (S.fn.load = function (e, t, n) {
        var r,
          i,
          o,
          a = this,
          s = e.indexOf(" ");
        return (
          -1 < s && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
          m(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (i = "POST"),
          0 < a.length &&
            S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
              .done(function (e) {
                (o = arguments),
                  a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    a.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      (S.expr.pseudos.animated = function (t) {
        return S.grep(S.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (S.offset = {
        setOffset: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l = S.css(e, "position"),
            c = S(e),
            f = {};
          "static" === l && (e.style.position = "relative"),
            (s = c.offset()),
            (o = S.css(e, "top")),
            (u = S.css(e, "left")),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
              ? ((a = (r = c.position()).top), (i = r.left))
              : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, f) : c.css(f);
        },
      }),
      S.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  S.offset.setOffset(this, t, e);
                });
          var e,
            n,
            r = this[0];
          return r
            ? r.getClientRects().length
              ? ((e = r.getBoundingClientRect()),
                (n = r.ownerDocument.defaultView),
                { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              r = this[0],
              i = { top: 0, left: 0 };
            if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
            else {
              (t = this.offset()),
                (n = r.ownerDocument),
                (e = r.offsetParent || n.documentElement);
              while (
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === S.css(e, "position")
              )
                e = e.parentNode;
              e &&
                e !== r &&
                1 === e.nodeType &&
                (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
                (i.left += S.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - i.top - S.css(r, "marginTop", !0),
              left: t.left - i.left - S.css(r, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            var e = this.offsetParent;
            while (e && "static" === S.css(e, "position")) e = e.offsetParent;
            return e || re;
          });
        },
      }),
      S.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, i) {
          var o = "pageYOffset" === i;
          S.fn[t] = function (e) {
            return B(
              this,
              function (e, t, n) {
                var r;
                if (
                  (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                  void 0 === n)
                )
                  return r ? r[i] : e[t];
                r
                  ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                  : (e[t] = n);
              },
              t,
              e,
              arguments.length
            );
          };
        }
      ),
      S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
          if (t)
            return (t = Be(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
        });
      }),
      S.each({ Height: "height", Width: "width" }, function (a, s) {
        S.each(
          { padding: "inner" + a, content: s, "": "outer" + a },
          function (r, o) {
            S.fn[o] = function (e, t) {
              var n = arguments.length && (r || "boolean" != typeof e),
                i = r || (!0 === e || !0 === t ? "margin" : "border");
              return B(
                this,
                function (e, t, n) {
                  var r;
                  return x(e)
                    ? 0 === o.indexOf("outer")
                      ? e["inner" + a]
                      : e.document.documentElement["client" + a]
                    : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        r["scroll" + a],
                        e.body["offset" + a],
                        r["offset" + a],
                        r["client" + a]
                      ))
                    : void 0 === n
                    ? S.css(e, t, i)
                    : S.style(e, t, n, i);
                },
                s,
                n ? e : void 0,
                n
              );
            };
          }
        );
      }),
      S.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          S.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      S.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      S.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, n) {
          S.fn[n] = function (e, t) {
            return 0 < arguments.length
              ? this.on(n, null, e, t)
              : this.trigger(n);
          };
        }
      );
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (S.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
        return (
          (r = s.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)));
          }).guid = e.guid =
            e.guid || S.guid++),
          i
        );
    }),
      (S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0);
      }),
      (S.isArray = Array.isArray),
      (S.parseJSON = JSON.parse),
      (S.nodeName = A),
      (S.isFunction = m),
      (S.isWindow = x),
      (S.camelCase = X),
      (S.type = w),
      (S.now = Date.now),
      (S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (S.trim = function (e) {
        return null == e ? "" : (e + "").replace(Gt, "$1");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return S;
        });
    var Yt = C.jQuery,
      Qt = C.$;
    return (
      (S.noConflict = function (e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
      }),
      "undefined" == typeof e && (C.jQuery = C.$ = S),
      S
    );
  });
  jQuery.noConflict();
  /*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
(function (t) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], function (e) {
        return t(e, window);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = t(require("jquery"), window))
    : t(jQuery, window);
})(function (s, n) {
  "use strict";
  function e(e) {
    return (
      0 <=
      (function (e, t) {
        for (
          var r = /^(\d+)\.(\d+)\.(\d+)/,
            n = r.exec(e) || [],
            o = r.exec(t) || [],
            a = 1;
          a <= 3;
          a++
        ) {
          if (+n[a] > +o[a]) return 1;
          if (+n[a] < +o[a]) return -1;
        }
        return 0;
      })(s.fn.jquery, e)
    );
  }
  s.migrateVersion = "3.4.0";
  var t = Object.create(null),
    o =
      ((s.migrateDisablePatches = function () {
        for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0;
      }),
      (s.migrateEnablePatches = function () {
        for (var e = 0; e < arguments.length; e++) delete t[arguments[e]];
      }),
      (s.migrateIsPatchEnabled = function (e) {
        return !t[e];
      }),
      n.console &&
        n.console.log &&
        ((s && e("3.0.0")) ||
          n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
        s.migrateWarnings &&
          n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        n.console.log(
          "JQMIGRATE: Migrate is installed" +
            (s.migrateMute ? "" : " with logging active") +
            ", version " +
            s.migrateVersion
        )),
      {});
  function i(e, t) {
    var r = n.console;
    !s.migrateIsPatchEnabled(e) ||
      (s.migrateDeduplicateWarnings && o[t]) ||
      ((o[t] = !0),
      s.migrateWarnings.push(t + " [" + e + "]"),
      r &&
        r.warn &&
        !s.migrateMute &&
        (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()));
  }
  function r(e, t, r, n, o) {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return i(n, o), r;
      },
      set: function (e) {
        i(n, o), (r = e);
      },
    });
  }
  function a(e, t, r, n, o) {
    var a = e[t];
    e[t] = function () {
      return (
        o && i(n, o),
        (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
      );
    };
  }
  function u(e, t, r, n, o) {
    if (!o) throw new Error("No warning message provided");
    a(e, t, r, n, o);
  }
  function d(e, t, r, n) {
    a(e, t, r, n);
  }
  (s.migrateDeduplicateWarnings = !0),
    (s.migrateWarnings = []),
    void 0 === s.migrateTrace && (s.migrateTrace = !0),
    (s.migrateReset = function () {
      (o = {}), (s.migrateWarnings.length = 0);
    }),
    "BackCompat" === n.document.compatMode &&
      i("quirks", "jQuery is not compatible with Quirks Mode");
  var c,
    l,
    p,
    f = {},
    m = s.fn.init,
    y = s.find,
    h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
    g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
    v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  for (c in (d(
    s.fn,
    "init",
    function (e) {
      var t = Array.prototype.slice.call(arguments);
      return (
        s.migrateIsPatchEnabled("selector-empty-id") &&
          "string" == typeof e &&
          "#" === e &&
          (i("selector-empty-id", "jQuery( '#' ) is not a valid selector"),
          (t[0] = [])),
        m.apply(this, t)
      );
    },
    "selector-empty-id"
  ),
  (s.fn.init.prototype = s.fn),
  d(
    s,
    "find",
    function (t) {
      var r = Array.prototype.slice.call(arguments);
      if ("string" == typeof t && h.test(t))
        try {
          n.document.querySelector(t);
        } catch (e) {
          t = t.replace(g, function (e, t, r, n) {
            return "[" + t + r + '"' + n + '"]';
          });
          try {
            n.document.querySelector(t),
              i(
                "selector-hash",
                "Attribute selector with '#' must be quoted: " + r[0]
              ),
              (r[0] = t);
          } catch (e) {
            i(
              "selector-hash",
              "Attribute selector with '#' was not fixed: " + r[0]
            );
          }
        }
      return y.apply(this, r);
    },
    "selector-hash"
  ),
  y))
    Object.prototype.hasOwnProperty.call(y, c) && (s.find[c] = y[c]);
  u(
    s.fn,
    "size",
    function () {
      return this.length;
    },
    "size",
    "jQuery.fn.size() is deprecated and removed; use the .length property"
  ),
    u(
      s,
      "parseJSON",
      function () {
        return JSON.parse.apply(null, arguments);
      },
      "parseJSON",
      "jQuery.parseJSON is deprecated; use JSON.parse"
    ),
    u(
      s,
      "holdReady",
      s.holdReady,
      "holdReady",
      "jQuery.holdReady is deprecated"
    ),
    u(
      s,
      "unique",
      s.uniqueSort,
      "unique",
      "jQuery.unique is deprecated; use jQuery.uniqueSort"
    ),
    r(
      s.expr,
      "filters",
      s.expr.pseudos,
      "expr-pre-pseudos",
      "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
    ),
    r(
      s.expr,
      ":",
      s.expr.pseudos,
      "expr-pre-pseudos",
      "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
    ),
    e("3.1.1") &&
      u(
        s,
        "trim",
        function (e) {
          return null == e ? "" : (e + "").replace(v, "");
        },
        "trim",
        "jQuery.trim is deprecated; use String.prototype.trim"
      ),
    e("3.2.0") &&
      (u(
        s,
        "nodeName",
        function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        "nodeName",
        "jQuery.nodeName is deprecated"
      ),
      u(
        s,
        "isArray",
        Array.isArray,
        "isArray",
        "jQuery.isArray is deprecated; use Array.isArray"
      )),
    e("3.3.0") &&
      (u(
        s,
        "isNumeric",
        function (e) {
          var t = typeof e;
          return (
            ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
          );
        },
        "isNumeric",
        "jQuery.isNumeric() is deprecated"
      ),
      s.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          f["[object " + t + "]"] = t.toLowerCase();
        }
      ),
      u(
        s,
        "type",
        function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? f[Object.prototype.toString.call(e)] || "object"
            : typeof e;
        },
        "type",
        "jQuery.type is deprecated"
      ),
      u(
        s,
        "isFunction",
        function (e) {
          return "function" == typeof e;
        },
        "isFunction",
        "jQuery.isFunction() is deprecated"
      ),
      u(
        s,
        "isWindow",
        function (e) {
          return null != e && e === e.window;
        },
        "isWindow",
        "jQuery.isWindow() is deprecated"
      )),
    s.ajax &&
      ((l = s.ajax),
      (p = /(=)\?(?=&|$)|\?\?/),
      d(
        s,
        "ajax",
        function () {
          var e = l.apply(this, arguments);
          return (
            e.promise &&
              (u(
                e,
                "success",
                e.done,
                "jqXHR-methods",
                "jQXHR.success is deprecated and removed"
              ),
              u(
                e,
                "error",
                e.fail,
                "jqXHR-methods",
                "jQXHR.error is deprecated and removed"
              ),
              u(
                e,
                "complete",
                e.always,
                "jqXHR-methods",
                "jQXHR.complete is deprecated and removed"
              )),
            e
          );
        },
        "jqXHR-methods"
      ),
      e("4.0.0") ||
        s.ajaxPrefilter("+json", function (e) {
          !1 !== e.jsonp &&
            (p.test(e.url) ||
              ("string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                p.test(e.data))) &&
            i(
              "jsonp-promotion",
              "JSON-to-JSONP auto-promotion is deprecated"
            );
        }));
  var j = s.fn.removeAttr,
    b = s.fn.toggleClass,
    w = /\S+/g;
  function Q(e) {
    return e.replace(/-([a-z])/g, function (e, t) {
      return t.toUpperCase();
    });
  }
  d(
    s.fn,
    "removeAttr",
    function (e) {
      var r = this;
      return (
        s.each(e.match(w), function (e, t) {
          s.expr.match.bool.test(t) &&
            (i(
              "removeAttr-bool",
              "jQuery.fn.removeAttr no longer sets boolean properties: " + t
            ),
            r.prop(t, !1));
        }),
        j.apply(this, arguments)
      );
    },
    "removeAttr-bool"
  ),
    d(
      s.fn,
      "toggleClass",
      function (t) {
        return void 0 !== t && "boolean" != typeof t
          ? b.apply(this, arguments)
          : (i(
              "toggleClass-bool",
              "jQuery.fn.toggleClass( boolean ) is deprecated"
            ),
            this.each(function () {
              var e = (this.getAttribute && this.getAttribute("class")) || "";
              e && s.data(this, "__className__", e),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    (!e && !1 !== t && s.data(this, "__className__")) || ""
                  );
            }));
      },
      "toggleClass-bool"
    );
  var x,
    A = !1,
    R = /^[a-z]/,
    T =
      /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  s.swap &&
    s.each(["height", "width", "reliableMarginRight"], function (e, t) {
      var r = s.cssHooks[t] && s.cssHooks[t].get;
      r &&
        (s.cssHooks[t].get = function () {
          var e;
          return (A = !0), (e = r.apply(this, arguments)), (A = !1), e;
        });
    }),
    d(
      s,
      "swap",
      function (e, t, r, n) {
        var o,
          a = {};
        for (o in (A ||
          i("swap", "jQuery.swap() is undocumented and deprecated"),
        t))
          (a[o] = e.style[o]), (e.style[o] = t[o]);
        for (o in ((r = r.apply(e, n || [])), t)) e.style[o] = a[o];
        return r;
      },
      "swap"
    ),
    e("3.4.0") &&
      "undefined" != typeof Proxy &&
      (s.cssProps = new Proxy(s.cssProps || {}, {
        set: function () {
          return (
            i("cssProps", "jQuery.cssProps is deprecated"),
            Reflect.set.apply(this, arguments)
          );
        },
      })),
    e("4.0.0") &&
      "undefined" != typeof Proxy &&
      (s.cssNumber = new Proxy(
        {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        {
          get: function () {
            return (
              i("css-number", "jQuery.cssNumber is deprecated"),
              Reflect.get.apply(this, arguments)
            );
          },
          set: function () {
            return (
              i("css-number", "jQuery.cssNumber is deprecated"),
              Reflect.set.apply(this, arguments)
            );
          },
        }
      )),
    (x = s.fn.css),
    d(
      s.fn,
      "css",
      function (e, t) {
        var r,
          n = this;
        return e && "object" == typeof e && !Array.isArray(e)
          ? (s.each(e, function (e, t) {
              s.fn.css.call(n, e, t);
            }),
            this)
          : ("number" == typeof t &&
              ((t = Q(e)),
              (r = t),
              (R.test(r) && T.test(r[0].toUpperCase() + r.slice(1))) ||
                s.cssNumber[t] ||
                i(
                  "css-number",
                  'Number-typed values are deprecated for jQuery.fn.css( "' +
                    e +
                    '", value )'
                )),
            x.apply(this, arguments));
      },
      "css-number"
    );
  function C(e) {
    var t = n.document.implementation.createHTMLDocument("");
    return (t.body.innerHTML = e), t.body && t.body.innerHTML;
  }
  var S,
    N,
    P,
    k,
    H,
    E,
    M,
    q = s.data,
    D =
      (d(
        s,
        "data",
        function (e, t, r) {
          var n, o, a;
          if (t && "object" == typeof t && 2 === arguments.length) {
            for (a in ((n = s.hasData(e) && q.call(this, e)), (o = {}), t))
              a !== Q(a)
                ? (i(
                    "data-camelCase",
                    "jQuery.data() always sets/gets camelCased names: " + a
                  ),
                  (n[a] = t[a]))
                : (o[a] = t[a]);
            return q.call(this, e, o), t;
          }
          return t &&
            "string" == typeof t &&
            t !== Q(t) &&
            (n = s.hasData(e) && q.call(this, e)) &&
            t in n
            ? (i(
                "data-camelCase",
                "jQuery.data() always sets/gets camelCased names: " + t
              ),
              2 < arguments.length && (n[t] = r),
              n[t])
            : q.apply(this, arguments);
        },
        "data-camelCase"
      ),
      s.fx &&
        ((P = s.Tween.prototype.run),
        (k = function (e) {
          return e;
        }),
        d(
          s.Tween.prototype,
          "run",
          function () {
            1 < s.easing[this.easing].length &&
              (i(
                "easing-one-arg",
                "'jQuery.easing." +
                  this.easing.toString() +
                  "' should use only one argument"
              ),
              (s.easing[this.easing] = k)),
              P.apply(this, arguments);
          },
          "easing-one-arg"
        ),
        (S = s.fx.interval),
        (N = "jQuery.fx.interval is deprecated"),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return (
                n.document.hidden || i("fx-interval", N),
                s.migrateIsPatchEnabled("fx-interval") && void 0 === S
                  ? 13
                  : S
              );
            },
            set: function (e) {
              i("fx-interval", N), (S = e);
            },
          })),
      s.fn.load),
    F = s.event.add,
    W = s.event.fix,
    O =
      ((s.event.props = []),
      (s.event.fixHooks = {}),
      r(
        s.event.props,
        "concat",
        s.event.props.concat,
        "event-old-patch",
        "jQuery.event.props.concat() is deprecated and removed"
      ),
      d(
        s.event,
        "fix",
        function (e) {
          var t = e.type,
            r = this.fixHooks[t],
            n = s.event.props;
          if (n.length) {
            i(
              "event-old-patch",
              "jQuery.event.props are deprecated and removed: " + n.join()
            );
            while (n.length) s.event.addProp(n.pop());
          }
          if (
            r &&
            !r._migrated_ &&
            ((r._migrated_ = !0),
            i(
              "event-old-patch",
              "jQuery.event.fixHooks are deprecated and removed: " + t
            ),
            (n = r.props) && n.length)
          )
            while (n.length) s.event.addProp(n.pop());
          return (t = W.call(this, e)), r && r.filter ? r.filter(t, e) : t;
        },
        "event-old-patch"
      ),
      d(
        s.event,
        "add",
        function (e, t) {
          return (
            e === n &&
              "load" === t &&
              "complete" === n.document.readyState &&
              i(
                "load-after-event",
                "jQuery(window).on('load'...) called after load event occurred"
              ),
            F.apply(this, arguments)
          );
        },
        "load-after-event"
      ),
      s.each(["load", "unload", "error"], function (e, t) {
        d(
          s.fn,
          t,
          function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0]
              ? D.apply(this, e)
              : (i(
                  "shorthand-removed-v3",
                  "jQuery.fn." + t + "() is deprecated"
                ),
                e.splice(0, 0, t),
                arguments.length
                  ? this.on.apply(this, e)
                  : (this.triggerHandler.apply(this, e), this));
          },
          "shorthand-removed-v3"
        );
      }),
      s.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, r) {
          u(
            s.fn,
            r,
            function (e, t) {
              return 0 < arguments.length
                ? this.on(r, null, e, t)
                : this.trigger(r);
            },
            "shorthand-deprecated-v3",
            "jQuery.fn." + r + "() event shorthand is deprecated"
          );
        }
      ),
      s(function () {
        s(n.document).triggerHandler("ready");
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document &&
            i("ready-event", "'ready' event is deprecated");
        },
      }),
      u(
        s.fn,
        "bind",
        function (e, t, r) {
          return this.on(e, null, t, r);
        },
        "pre-on-methods",
        "jQuery.fn.bind() is deprecated"
      ),
      u(
        s.fn,
        "unbind",
        function (e, t) {
          return this.off(e, null, t);
        },
        "pre-on-methods",
        "jQuery.fn.unbind() is deprecated"
      ),
      u(
        s.fn,
        "delegate",
        function (e, t, r, n) {
          return this.on(t, e, r, n);
        },
        "pre-on-methods",
        "jQuery.fn.delegate() is deprecated"
      ),
      u(
        s.fn,
        "undelegate",
        function (e, t, r) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", r);
        },
        "pre-on-methods",
        "jQuery.fn.undelegate() is deprecated"
      ),
      u(
        s.fn,
        "hover",
        function (e, t) {
          return this.on("mouseenter", e).on("mouseleave", t || e);
        },
        "pre-on-methods",
        "jQuery.fn.hover() is deprecated"
      ),
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),
    _ =
      ((s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
        s.migrateEnablePatches("self-closed-tags");
      }),
      d(
        s,
        "htmlPrefilter",
        function (e) {
          var t, r;
          return (
            (r = (t = e).replace(O, "<$1></$2>")) !== t &&
              C(t) !== C(r) &&
              i(
                "self-closed-tags",
                "HTML tags must be properly nested and closed: " + t
              ),
            e.replace(O, "<$1></$2>")
          );
        },
        "self-closed-tags"
      ),
      s.migrateDisablePatches("self-closed-tags"),
      s.fn.offset);
  return (
    d(
      s.fn,
      "offset",
      function () {
        var e = this[0];
        return !e || (e.nodeType && e.getBoundingClientRect)
          ? _.apply(this, arguments)
          : (i(
              "offset-valid-elem",
              "jQuery.fn.offset() requires a valid DOM element"
            ),
            arguments.length ? this : void 0);
      },
      "offset-valid-elem"
    ),
    s.ajax &&
      ((H = s.param),
      d(
        s,
        "param",
        function (e, t) {
          var r = s.ajaxSettings && s.ajaxSettings.traditional;
          return (
            void 0 === t &&
              r &&
              (i(
                "param-ajax-traditional",
                "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
              ),
              (t = r)),
            H.call(this, e, t)
          );
        },
        "param-ajax-traditional"
      )),
    u(
      s.fn,
      "andSelf",
      s.fn.addBack,
      "andSelf",
      "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
    ),
    s.Deferred &&
      ((E = s.Deferred),
      (M = [
        [
          "resolve",
          "done",
          s.Callbacks("once memory"),
          s.Callbacks("once memory"),
          "resolved",
        ],
        [
          "reject",
          "fail",
          s.Callbacks("once memory"),
          s.Callbacks("once memory"),
          "rejected",
        ],
        ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")],
      ]),
      d(
        s,
        "Deferred",
        function (e) {
          var a = E(),
            i = a.promise();
          function t() {
            var o = arguments;
            return s
              .Deferred(function (n) {
                s.each(M, function (e, t) {
                  var r = "function" == typeof o[e] && o[e];
                  a[t[1]](function () {
                    var e = r && r.apply(this, arguments);
                    e && "function" == typeof e.promise
                      ? e
                          .promise()
                          .done(n.resolve)
                          .fail(n.reject)
                          .progress(n.notify)
                      : n[t[0] + "With"](
                          this === i ? n.promise() : this,
                          r ? [e] : arguments
                        );
                  });
                }),
                  (o = null);
              })
              .promise();
          }
          return (
            u(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
            u(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
            e && e.call(a, a),
            a
          );
        },
        "deferred-pipe"
      ),
      (s.Deferred.exceptionHook = E.exceptionHook)),
    s
  );
});


/*!loadCSS. [c]2017 Filament Group, Inc. MIT License*/ (function (w) {
    "use strict";
    if (!w.loadCSS) {
      w.loadCSS = function () {};
    }
    var rp = (loadCSS.relpreload = {});
    rp.support = (function () {
      var ret;
      try {
        ret = w.document.createElement("link").relList.supports("preload");
      } catch (e) {
        ret = false;
      }
      return function () {
        return ret;
      };
    })();
    rp.bindMediaToggle = function (link) {
      var finalMedia = link.media || "all";
      function enableStylesheet() {
        link.media = finalMedia;
      }
      if (link.addEventListener) {
        link.addEventListener("load", enableStylesheet);
      } else if (link.attachEvent) {
        link.attachEvent("onload", enableStylesheet);
      }
      setTimeout(function () {
        link.rel = "stylesheet";
        link.media = "only x";
      });
      setTimeout(enableStylesheet, 3000);
    };
    rp.poly = function () {
      if (rp.support()) {
        return;
      }
      var links = w.document.getElementsByTagName("link");
      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (
          link.rel === "preload" &&
          link.getAttribute("as") === "style" &&
          !link.getAttribute("data-loadcss")
        ) {
          link.setAttribute("data-loadcss", true);
          rp.bindMediaToggle(link);
        }
      }
    };
    if (!rp.support()) {
      rp.poly();
      var run = w.setInterval(rp.poly, 500);
      if (w.addEventListener) {
        w.addEventListener("load", function () {
          rp.poly();
          w.clearInterval(run);
        });
      } else if (w.attachEvent) {
        w.attachEvent("onload", function () {
          rp.poly();
          w.clearInterval(run);
        });
      }
    }
    if (typeof exports !== "undefined") {
      exports.loadCSS = loadCSS;
    } else {
      w.loadCSS = loadCSS;
    }
  })(typeof global !== "undefined" ? global : this);
  
// mirage2.min.js
var mirage = (function (t) {
    "use strict";
    function e() {
      throw new Error(
        "Dynamic requires are not currently supported by rollup-plugin-commonjs"
      );
    }
    function r(t) {
      return Object.prototype.toString.call(t);
    }
    function n(t) {
      return [].slice.call(t);
    }
    function i() {
      return new Date().getTime();
    }
    function o(t) {
      return (
        null != t &&
        "object" == typeof t &&
        t.nodeType === Node.ELEMENT_NODE &&
        "object" == typeof t.style &&
        "object" == typeof t.ownerDocument
      );
    }
    function s(t, e) {
      for (var r = 0; r < t.length; r++) if (e === t[r]) return r;
      return -1;
    }
    function a() {
      var t, e;
      return {
        promise: new G(function (r, n) {
          (t = r), (e = n);
        }),
        resolve: t,
        reject: e,
      };
    }
    function u() {
      try {
        return !!window.addEventListener;
      } catch (t) {
        return !1;
      }
    }
    function c(t, e) {
      if (t)
        return $ < 8 && "style" === e
          ? t.style.cssText
          : "getAttribute" in t
          ? t.getAttribute(e)
          : t.attributes[e];
    }
    function h(t, e, r) {
      if (t) {
        if (!($ < 8 && "style" === e))
          return "setAttribute" in t
            ? t.setAttribute(e, r)
            : (t.attributes[e] = r);
        t.style.cssText = r;
      }
    }
    function l(t, e) {
      if (t) {
        if (!($ < 8 && "style" === e))
          return "removeAttribute" in t
            ? t.removeAttribute(e)
            : delete t.attributes[e];
        t.style.cssText = "";
      }
    }
    function f(t, e) {
      return c(t, "data-" + e);
    }
    function p(t, e, r) {
      return h(t, "data-" + e, r);
    }
    function d(t, e, r, n) {
      return u() ? t.addEventListener(e, r, n) : t.attachEvent("on" + e, r);
    }
    function g(t, e, r, n) {
      return u() ? t.removeEventListener(e, r, n) : t.detachEvent("on" + e, r);
    }
    function _() {
      var t = {};
      try {
        void 0 !== window.innerWidth
          ? ((t.width = window.innerWidth), (t.height = window.innerHeight))
          : void 0 !== document.documentElement &&
            void 0 !== document.documentElement.clientWidth &&
            0 !== document.documentElement.clientWidth
          ? ((t.width = document.documentElement.clientWidth),
            (t.height = document.documentElement.clientHeight))
          : ((t.width = document.getElementsByTagName("body")[0].clientWidth),
            (t.height = document.getElementsByTagName("body")[0].clientHeight));
      } catch (e) {
        (t.width = void 0), (t.height = void 0);
      }
      return t;
    }
    function m(t, e, r) {
      for (var n = [], i = 0; i < t.length; i++) n.push(e.call(r, t[i], i, t));
      return n;
    }
    function y(t, e, r) {
      for (var n = 0; n < t.length; n++) e.call(r, t[n], n, t);
    }
    function v(t, e, r) {
      for (var n = 0; n < t.length; n++) if (e.call(r, t[n], n, t)) return t[n];
    }
    function w(t, e, r) {
      for (var n in t) e.call(r, t[n], n, t);
    }
    function b(t, e, r) {
      for (var n = [], i = 0; i < t.length; i++)
        e.call(r, t[i], i, t) && n.push(t[i]);
      return n;
    }
    function S(t) {
      if (!(this instanceof S)) return new S(t);
      if (!t || !o(t)) throw new Error("A DOM element reference is required");
      return (this.element = t), (this.tokens = t.classList), this;
    }
    function E(t, e) {
      return new S(t).remove(e);
    }
    function T(t, e) {
      return new S(t).has(e);
    }
    function O() {
      return Promise.resolve(
        navigator.connection ||
          navigator.mozConnection ||
          navigator.webkitConnection ||
          A()
      ).then(function (t) {
        var e = window.navigator.userAgent || "";
        return (
          !!/Android|iPhone|iPod|iPad/.test(e) &&
          ("string" == typeof t.effectiveType
            ? "2g" === t.effectiveType || "slow-2g" === t.effectiveType
            : !isNaN(t.bandwidth) && t.bandwidth < It)
        );
      });
    }
    function A() {
      return new Promise(function (t) {
        var e = "___MIRAGE_STORAGE_TEST___";
        try {
          localStorage.setItem(e, e),
            localStorage.getItem(e),
            localStorage.removeItem(e);
        } catch (e) {
          return t(St);
        }
        var r;
        try {
          r = JSON.parse(window.localStorage.getItem(Et));
        } catch (t) {}
        r && t(r),
          t(
            I().then(
              function (t) {
                try {
                  window.localStorage.setItem(Et, JSON.stringify(t));
                } catch (t) {}
                return t;
              },
              function (t) {
                return bt("Speedtest failed", t.message), St;
              }
            )
          );
      });
    }
    function I() {
      return new Promise(function (t, e) {
        var r = new XMLHttpRequest(),
          n = i();
        wt("Approximating network connection.."),
          r.open("get", At + n),
          (r.onreadystatechange = function () {
            if (4 === r.readyState) {
              try {
                if (r.status) var o = +r.status;
              } catch (t) {}
              1223 === o && (o = 204),
                200 === o
                  ? t(L(n, i(), r))
                  : e(Error("Unexpected HTTP status: " + o));
            }
          }),
          r.send();
      });
    }
    function L(t, e, r) {
      var n = window.parseInt(r.getResponseHeader(Tt), 10),
        i = window.parseInt(r.getResponseHeader(Ot), 10);
      return isNaN(n) || isNaN(i)
        ? St
        : { effectiveType: C(2 * (n - t), i / (e - n) / 1e3) };
    }
    function C(t, e) {
      return t >= 2e3 && e <= 50
        ? "slow-2g"
        : t >= 1400 && e <= 70
        ? "2g"
        : t >= 270 && e <= 700
        ? "3g"
        : "4g";
    }
    function x(t, e, r) {
      var n,
        i,
        o,
        s,
        a = t.byteLength;
      if (((e = ~~e), (r = void 0 === r ? a : ~~r), "function" == typeof t.slice))
        return t.slice(e, r);
      if (
        (e < 0 ? (e += a) < 0 && (e = 0) : e > a && (e = a),
        r < 0 ? (r += a) < 0 && (r = 0) : r > a && (r = a),
        r < e && (r = e),
        0 === (n = r - e))
      )
        return new Uint8Array(n);
      for (i = new DataView(t, e, n), o = new Uint8Array(n), s = 0; s < n; s++)
        o[s] = i.getUint8(s);
      return o.buffer;
    }
    function N(t, e, r) {
      var n,
        i = t[e];
      n = Object.getOwnPropertyDescriptor(t, e) ||
        Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), e) || {
          value: i,
          writable: !0,
          configurable: !0,
          enumerable: !0,
        };
      try {
        P(n.configurable, "Property must be configurable."),
          P(!!r, "Property descriptor must be defined.");
      } catch (t) {
        throw new Error('Invalid attempt to redefine "' + e + '".', t.message);
      }
      void 0 === r.get && void 0 === r.set && (r.writable = !0),
        (r.enumerable = !1 !== r.enumerable),
        (r.configurable = !1 !== r.configurable);
      try {
        Object.defineProperty(t, e, r);
      } catch (t) {
        bt('Failed to define property "' + e + '".', t.message);
      }
      return function () {
        try {
          Object.defineProperty(t, e, n);
        } catch (t) {
          bt('Failed to restore user-defined property "' + e + '".', t.message);
        }
      };
    }
    function P(t, e) {
      if (!t) throw new Error(e);
    }
    function R(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    function D(t, e) {
      var r, n;
      e = e || { type: "text/javascript" };
      try {
        n = new Blob([t], e);
      } catch (i) {
        (r = new (this.BlobBuilder ||
          this.WebKitBlobBuilder ||
          this.MozBlobBuilder)()).append(t),
          (n = r.getBlob(e && e.type));
      }
      return n;
    }
    function j() {
      (this.queue_ = G.resolve()),
        this.reset_(),
        (this.sizeQueue_ = []),
        (this.map_ = {});
    }
    function M(t, e) {
      try {
        new Uint8Array(t, e)[0] === M.type.SIGNATURE[0]
          ? this.initializeAsSignature_(t, e)
          : this.initializeAsChunk_(t, e);
      } catch (t) {
        throw new Error("Failed to initialize a PNG chunk. " + t.toString());
      }
    }
    function B(t, e) {
      var r = new M(t, e),
        n = 0;
      P(r.isSignature(), "First chunk should be PNG signature."),
        (n += r.byteLength);
      do {
        n += (r = new M(t, e + n)).byteLength;
      } while (!r.isEnd());
      (this.offset = e),
        (this.byteLength = n),
        (this.view = new Uint8Array(t, e, n)),
        (this.imageSrc_ = null);
    }
    function k(t, e) {
      for (var r, n = new Uint8Array(t, e, 4), i = 0, o = 0; o < 4; o++)
        (i <<= 8), (i |= n[o]);
      try {
        (r = String.fromCharCode.apply(null, new Uint8Array(t, e + 4, i))),
          (r = JSON.parse(r));
      } catch (t) {
        throw new Error("Unable to parse degraded image JSON. " + t.toString());
      }
      (this.byteLength = i + 4),
        (this.data = r),
        (this.loadStatus =
          this.data.status == k.state.LOAD_OK
            ? this.data.status
            : this.data.status + ":" + this.data.cache_status),
        (this.data.width = this.data.width || this.data.X || 0),
        (this.data.height = this.data.height || this.data.Y || 0);
    }
    function U(t, e) {
      (this.json = new k(t, e)),
        (this.png = new B(t, e + this.json.byteLength)),
        (this.src = this.json.data.url),
        (this.width = this.json.data.width || this.json.data.Y),
        (this.height = this.json.data.height || this.json.data.X),
        (this.byteLength = this.json.byteLength + this.png.byteLength);
    }
    function z(t, e) {
      var r = t.indexOf("}\n", e) + 1,
        n = t.indexOf("\n\n", r);
      P(-1 !== r, "A JSON boundary should exist."),
        P(-1 !== n, "A DataURL boundary should exist.");
      var i = JSON.parse(t.slice(e, r)),
        o = t.slice(r + 1, n);
      (this.json = {
        data: i,
        loadStatus:
          i.status == k.state.LOAD_OK
            ? i.status
            : i.status + ":" + i.cache_status,
      }),
        (this.src = this.json.data.url),
        (this.width = this.json.data.width || this.json.data.X),
        (this.height = this.json.data.height || this.json.data.Y),
        (this.stringLength = n + 2 - e),
        (this.dataUrl_ = o);
    }
    function H(t, e) {
      (this.image_ = t),
        (this.restored_ = !1),
        (this.restoring_ = !1),
        (this.stateCallback_ = null),
        (this.restoredResult_ = a()),
        (this.wrappedPropertyCache_ = []),
        (this.boundExpireState_ = R(this.expireState_, this)),
        (this.parentTree_ = H.resolveParentTree(this.image_)),
        (this.parentTreeChangesPromise_ = null),
        (this.parentTreeCheckInterval_ = null),
        (this.forcePreloadOnly_ = e && e.forcePreloadOnly_),
        (this.requireProxy_ = e && e.proxy_),
        this.storeStyleMutation(),
        this.makeMeasurable_(),
        this.wrap_();
    }
    function V(t) {
      (this.supportsBinaryData_ = !!t && !!t.supportsBinaryData),
        (this.map_ = {}),
        (this.timer_ = null),
        (this.supportsBinaryData_ = !1),
        this.supportsBinaryData_ &&
          ("undefined" == typeof ArrayBuffer && (this.supportsBinaryData_ = !1),
          "undefined" == typeof URL &&
            "undefined" == typeof webkitURL &&
            "undefined" == typeof mozURL &&
            (this.supportsBinaryData_ = !1),
          "undefined" == typeof Blob &&
            "undefined" == typeof BlobBuilder &&
            "undefined" == typeof WebKitBlobBuilder &&
            "undefined" == typeof MozBlobBuilder &&
            (this.supportsBinaryData_ = !1)),
        (this.loadStrategy_ = this.supportsBinaryData_
          ? this.loadArrayBuffer_
          : this.loadDataUrls_);
    }
    function F() {
      (this.manifest_ = new j()),
        (this.imageCache_ = []),
        (this.forcePreload_ = /forcepreload/.test(window.location.search)),
        (this.forcePreloadOnly_ = /forcepreloadonly/.test(
          window.location.search
        )),
        (this.forceEagerLoad_ = /forceeagerload/.test(window.location.search)),
        (this.forceDataUrls_ = /forcedataurls/.test(window.location.search)),
        (this.optimizationTimeout_ = null),
        (this.requireProxy_ = !1),
        (this.loadStatistics = {}),
        (this.nativeMethods = {}),
        this.forcePreload_ && this.manifest_.clear(),
        this.forceEagerLoad_ && (Ct.eagerLoad = !0),
        (this.supportsBinaryData_ = !0),
        void 0 === window.ArrayBuffer && (this.supportsBinaryData_ = !1),
        void 0 === window.Blob &&
          void 0 === window.BlobBuilder &&
          void 0 === window.WebKitBlobBuilder &&
          void 0 === window.MozBlobBuilder &&
          (this.supportsBinaryData_ = !1);
      var t = document.createElement("canvas");
      if (void 0 === t.getContext) this.supportsBinaryData_ = !1;
      else
        try {
          t.getContext("2d");
        } catch (t) {
          this.supportsBinaryData_ = !1;
        }
      this.forceDataUrls_ && (this.supportsBinaryData_ = !1),
        (this.loader_ = new V({ supportsBinaryData: this.supportsBinaryData_ }));
    }
    var q =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      G = (function (t, e) {
        return (e = { exports: {} }), t(e, e.exports), e.exports;
      })(function (t, r) {
        !(function (e, r) {
          t.exports = r();
        })(0, function () {
          function t(t) {
            var e = typeof t;
            return null !== t && ("object" === e || "function" === e);
          }
          function r(t) {
            return "function" == typeof t;
          }
          function n() {
            return void 0 !== M
              ? function () {
                  M(o);
                }
              : i();
          }
          function i() {
            var t = setTimeout;
            return function () {
              return t(o, 1);
            };
          }
          function o() {
            for (var t = 0; t < j; t += 2)
              (0, G[t])(G[t + 1]), (G[t] = void 0), (G[t + 1] = void 0);
            j = 0;
          }
          function s(t, e) {
            var r = arguments,
              n = this,
              i = new this.constructor(u);
            void 0 === i[K] && I(i);
            var o = n._state;
            return (
              o
                ? (function () {
                    var t = r[o - 1];
                    k(function () {
                      return T(o, i, t, n._result);
                    });
                  })()
                : w(n, i, t, e),
              i
            );
          }
          function a(t) {
            var e = this;
            if (t && "object" == typeof t && t.constructor === e) return t;
            var r = new e(u);
            return _(r, t), r;
          }
          function u() {}
          function c() {
            return new TypeError("You cannot resolve a promise with itself");
          }
          function h() {
            return new TypeError(
              "A promises callback cannot return that same promise."
            );
          }
          function l(t) {
            try {
              return t.then;
            } catch (t) {
              return (J.error = t), J;
            }
          }
          function f(t, e, r, n) {
            try {
              t.call(e, r, n);
            } catch (t) {
              return t;
            }
          }
          function p(t, e, r) {
            k(function (t) {
              var n = !1,
                i = f(
                  r,
                  e,
                  function (r) {
                    n || ((n = !0), e !== r ? _(t, r) : y(t, r));
                  },
                  function (e) {
                    n || ((n = !0), v(t, e));
                  },
                  "Settle: " + (t._label || " unknown promise")
                );
              !n && i && ((n = !0), v(t, i));
            }, t);
          }
          function d(t, e) {
            e._state === Q
              ? y(t, e._result)
              : e._state === X
              ? v(t, e._result)
              : w(
                  e,
                  void 0,
                  function (e) {
                    return _(t, e);
                  },
                  function (e) {
                    return v(t, e);
                  }
                );
          }
          function g(t, e, n) {
            e.constructor === t.constructor &&
            n === s &&
            e.constructor.resolve === a
              ? d(t, e)
              : n === J
              ? (v(t, J.error), (J.error = null))
              : void 0 === n
              ? y(t, e)
              : r(n)
              ? p(t, e, n)
              : y(t, e);
          }
          function _(e, r) {
            e === r ? v(e, c()) : t(r) ? g(e, r, l(r)) : y(e, r);
          }
          function m(t) {
            t._onerror && t._onerror(t._result), b(t);
          }
          function y(t, e) {
            t._state === Y &&
              ((t._result = e),
              (t._state = Q),
              0 !== t._subscribers.length && k(b, t));
          }
          function v(t, e) {
            t._state === Y && ((t._state = X), (t._result = e), k(m, t));
          }
          function w(t, e, r, n) {
            var i = t._subscribers,
              o = i.length;
            (t._onerror = null),
              (i[o] = e),
              (i[o + Q] = r),
              (i[o + X] = n),
              0 === o && t._state && k(b, t);
          }
          function b(t) {
            var e = t._subscribers,
              r = t._state;
            if (0 !== e.length) {
              for (
                var n = void 0, i = void 0, o = t._result, s = 0;
                s < e.length;
                s += 3
              )
                (n = e[s]), (i = e[s + r]), n ? T(r, n, i, o) : i(o);
              t._subscribers.length = 0;
            }
          }
          function S() {
            this.error = null;
          }
          function E(t, e) {
            try {
              return t(e);
            } catch (t) {
              return (Z.error = t), Z;
            }
          }
          function T(t, e, n, i) {
            var o = r(n),
              s = void 0,
              a = void 0,
              u = void 0,
              c = void 0;
            if (o) {
              if (
                ((s = E(n, i)) === Z
                  ? ((c = !0), (a = s.error), (s.error = null))
                  : (u = !0),
                e === s)
              )
                return void v(e, h());
            } else (s = i), (u = !0);
            e._state !== Y ||
              (o && u
                ? _(e, s)
                : c
                ? v(e, a)
                : t === Q
                ? y(e, s)
                : t === X && v(e, s));
          }
          function O(t, e) {
            try {
              e(
                function (e) {
                  _(t, e);
                },
                function (e) {
                  v(t, e);
                }
              );
            } catch (e) {
              v(t, e);
            }
          }
          function A() {
            return $++;
          }
          function I(t) {
            (t[K] = $++),
              (t._state = void 0),
              (t._result = void 0),
              (t._subscribers = []);
          }
          function L(t, e) {
            (this._instanceConstructor = t),
              (this.promise = new t(u)),
              this.promise[K] || I(this.promise),
              D(e)
                ? ((this.length = e.length),
                  (this._remaining = e.length),
                  (this._result = new Array(this.length)),
                  0 === this.length
                    ? y(this.promise, this._result)
                    : ((this.length = this.length || 0),
                      this._enumerate(e),
                      0 === this._remaining && y(this.promise, this._result)))
                : v(this.promise, C());
          }
          function C() {
            return new Error("Array Methods must be provided an Array");
          }
          function x() {
            throw new TypeError(
              "You must pass a resolver function as the first argument to the promise constructor"
            );
          }
          function N() {
            throw new TypeError(
              "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
            );
          }
          function P(t) {
            (this[K] = A()),
              (this._result = this._state = void 0),
              (this._subscribers = []),
              u !== t &&
                ("function" != typeof t && x(),
                this instanceof P ? O(this, t) : N());
          }
          var R = void 0,
            D = (R = Array.isArray
              ? Array.isArray
              : function (t) {
                  return "[object Array]" === Object.prototype.toString.call(t);
                }),
            j = 0,
            M = void 0,
            B = void 0,
            k = function (t, e) {
              (G[j] = t), (G[j + 1] = e), 2 === (j += 2) && (B ? B(o) : W());
            },
            U = "undefined" != typeof window ? window : void 0,
            z = U || {},
            H = z.MutationObserver || z.WebKitMutationObserver,
            V =
              "undefined" == typeof self &&
              "undefined" != typeof process &&
              "[object process]" === {}.toString.call(process),
            F =
              "undefined" != typeof Uint8ClampedArray &&
              "undefined" != typeof importScripts &&
              "undefined" != typeof MessageChannel,
            G = new Array(1e3),
            W = void 0;
          W = V
            ? function () {
                return process.nextTick(o);
              }
            : H
            ? (function () {
                var t = 0,
                  e = new H(o),
                  r = document.createTextNode("");
                return (
                  e.observe(r, { characterData: !0 }),
                  function () {
                    r.data = t = ++t % 2;
                  }
                );
              })()
            : F
            ? (function () {
                var t = new MessageChannel();
                return (
                  (t.port1.onmessage = o),
                  function () {
                    return t.port2.postMessage(0);
                  }
                );
              })()
            : void 0 === U && "function" == typeof e
            ? (function () {
                try {
                  var t = e("vertx");
                  return (M = t.runOnLoop || t.runOnContext), n();
                } catch (t) {
                  return i();
                }
              })()
            : i();
          var K = Math.random().toString(36).substring(16),
            Y = void 0,
            Q = 1,
            X = 2,
            J = new S(),
            Z = new S(),
            $ = 0;
          return (
            (L.prototype._enumerate = function (t) {
              for (var e = 0; this._state === Y && e < t.length; e++)
                this._eachEntry(t[e], e);
            }),
            (L.prototype._eachEntry = function (t, e) {
              var r = this._instanceConstructor,
                n = r.resolve;
              if (n === a) {
                var i = l(t);
                if (i === s && t._state !== Y)
                  this._settledAt(t._state, e, t._result);
                else if ("function" != typeof i)
                  this._remaining--, (this._result[e] = t);
                else if (r === P) {
                  var o = new r(u);
                  g(o, t, i), this._willSettleAt(o, e);
                } else
                  this._willSettleAt(
                    new r(function (e) {
                      return e(t);
                    }),
                    e
                  );
              } else this._willSettleAt(n(t), e);
            }),
            (L.prototype._settledAt = function (t, e, r) {
              var n = this.promise;
              n._state === Y &&
                (this._remaining--, t === X ? v(n, r) : (this._result[e] = r)),
                0 === this._remaining && y(n, this._result);
            }),
            (L.prototype._willSettleAt = function (t, e) {
              var r = this;
              w(
                t,
                void 0,
                function (t) {
                  return r._settledAt(Q, e, t);
                },
                function (t) {
                  return r._settledAt(X, e, t);
                }
              );
            }),
            (P.all = function (t) {
              return new L(this, t).promise;
            }),
            (P.race = function (t) {
              var e = this;
              return new e(
                D(t)
                  ? function (r, n) {
                      for (var i = t.length, o = 0; o < i; o++)
                        e.resolve(t[o]).then(r, n);
                    }
                  : function (t, e) {
                      return e(new TypeError("You must pass an array to race."));
                    }
              );
            }),
            (P.resolve = a),
            (P.reject = function (t) {
              var e = new this(u);
              return v(e, t), e;
            }),
            (P._setScheduler = function (t) {
              B = t;
            }),
            (P._setAsap = function (t) {
              k = t;
            }),
            (P._asap = k),
            (P.prototype = {
              constructor: P,
              then: s,
              catch: function (t) {
                return this.then(null, t);
              },
            }),
            (P.polyfill = function () {
              var t = void 0;
              if (void 0 !== q) t = q;
              else if ("undefined" != typeof self) t = self;
              else
                try {
                  t = Function("return this")();
                } catch (t) {
                  throw new Error(
                    "polyfill failed because global object is unavailable in this environment"
                  );
                }
              var e = t.Promise;
              if (e) {
                var r = null;
                try {
                  r = Object.prototype.toString.call(e.resolve());
                } catch (t) {}
                if ("[object Promise]" === r && !e.cast) return;
              }
              t.Promise = P;
            }),
            (P.Promise = P),
            P
          );
        });
      }),
      W = (Object.freeze || Object)({
        getClass: r,
        isString: function (t) {
          return /String/.test(r(t));
        },
        isArray: function (t) {
          return (
            !!t &&
            (t instanceof Array ||
              ("object" == typeof t &&
                t.hasOwnProperty("length") &&
                !t.propertyIsEnumerable("length")))
          );
        },
        nodeListToArray: n,
        now: i,
        isElement: o,
        indexOf: s,
        defer: a,
      }),
      K = window.navigator.userAgent,
      Y = Number((K.match(/Firefox\/([0-9]+\.[0-9]+)/) || [0, 0])[1]) || void 0,
      Q = Number((K.match(/Chrome\/([0-9]+\.[0-9]+)/) || [0, 0])[1]) || void 0,
      X =
        Number(
          (K.match(/Version\/([0-9]+\.[0-9]+)(?:\.[0-9]+)?\sSafari\//) || [
            0, 0,
          ])[1]
        ) || void 0,
      J =
        Number(
          (
            K.match(
              /Opera\/.*\sVersion\/([0-9]+\.[0-9]+)|Opera\/([0-9]+\.[0-9]+)/
            ) || []
          )
            .slice(1)
            .join("")
        ) || void 0,
      Z =
        Number(
          K.match(/(iPad|iPhone|iPod)(?:\sSimulator)?;[\s\w;]*?CPU/) &&
            (K.match(/U; CPU i?OS ([0-9]+_[0-9]+)/) || ["", "1_0"])[1].replace(
              "_",
              "."
            )
        ) || void 0,
      $ = Number((navigator.userAgent.match(/MSIE ([\w.]+)/) || [])[1]) || void 0,
      tt = (function () {
        var t = a();
        return (
          "readyState" in document &&
            "complete" === document.readyState &&
            t.resolve({}),
          d(
            document,
            "readystatechange",
            function (e) {
              "readyState" in document &&
                "complete" === document.readyState &&
                t.resolve(e);
            },
            !0
          ),
          d(
            document,
            "DOMContentLoaded",
            function (e) {
              t.resolve(e);
            },
            !0
          ),
          t.promise
        );
      })(),
      et = (function () {
        var t = a();
        return (
          "complete" === document.readyState && tt.then(t.resolve),
          d(
            window,
            "load",
            function (e) {
              t.resolve(e);
            },
            !0
          ),
          t.promise
        );
      })(),
      rt = (Object.freeze || Object)({
        userAgent: K,
        firefox: Y,
        chrome: Q,
        safari: X,
        opera: J,
        ios: Z,
        internetExplorer: $,
        hasCreateElementCallApply: function () {
          try {
            return !!document.createElement.call;
          } catch (t) {
            return !1;
          }
        },
        hasStandardEvents: u,
        getAttribute: c,
        setAttribute: h,
        removeAttribute: l,
        getData: f,
        setData: p,
        addEventListener: d,
        removeEventListener: g,
        preventDefault: function (t) {
          "preventDefault" in t ? t.preventDefault() : (t.returnValue = !1);
        },
        getViewport: _,
        onReady: tt,
        onLoad: et,
      }),
      nt = window.__mirage2 || {},
      it = nt.verbose || !1,
      ot = nt.petok,
      st = nt.maxjsonsize || 1e5,
      at = nt.maxdegradedimages || 50,
      ut = nt.maxexternalimages || 50,
      ct = nt.eagerLoad || !1,
      ht = (Object.freeze || Object)({
        verbose: it,
        petok: ot,
        maxjsonsize: st,
        maxdegradedimages: at,
        maxexternalimages: ut,
        eagerLoad: ct,
      }),
      lt = (Object.freeze || Object)({
        map: m,
        forEach: y,
        find: v,
        forIn: w,
        filter: b,
      }),
      ft = document.createElement("a"),
      pt = function (t) {
        return (
          (ft.href = t),
          {
            hash: ft.hash,
            host: ft.host,
            hostname: ft.hostname,
            href: ft.href,
            pathname: ft.pathname,
            port: ft.port,
            protocol: ft.protocol,
            search: ft.search,
          }
        );
      },
      dt = function (t, e) {
        e = null == e ? window.location.href : e;
        var r = pt(gt(t)),
          n = pt(gt(e));
        return r.protocol === n.protocol && r.host === n.host;
      },
      gt = (function () {
        var t = document.createElement("div"),
          e = window.URL || window.webkitURL,
          r = !0;
        try {
          r = null != new e(window.location && window.location.href).href;
        } catch (t) {
          r = !1;
        }
        return r
          ? function (t) {
              return new e(
                t,
                document.baseURI || (window.location && window.location.href)
              ).href;
            }
          : function (e) {
              return (
                (e = e
                  .split("&")
                  .join("&#38;")
                  .split("<")
                  .join("&#60;")
                  .split("'")
                  .join("&#39;")),
                (t.innerHTML = '<a href="' + e + '">x</a>'),
                t.firstChild.href
              );
            };
      })(),
      _t = (Object.freeze || Object)({
        parseURL: pt,
        sameOrigin: dt,
        resolveFullURL: gt,
      });
    (S.prototype.add = function (t) {
      var e;
      return this.tokens
        ? (this.tokens.add(t), this)
        : ((e = this.array()),
          s(e, t) < 0 && e.push(t),
          (this.element.className = e.join(" ")),
          this);
    }),
      (S.prototype.remove = function (t) {
        var e, r;
        return this.tokens
          ? (this.tokens.remove(t), this)
          : ((e = this.array()),
            (r = s(e, t)) >= 0
              ? (e.splice(r, 1), (this.element.className = e.join(" ")), this)
              : void 0);
      }),
      (S.prototype.toggle = function (t) {
        return this.tokens
          ? (this.tokens.toggle(t), this)
          : (this.has(t) ? this.remove(t) : this.add(t), this);
      }),
      (S.prototype.array = function () {
        var t, e;
        return (
          (t = this.element.className.replace(/^\s+|\s+$/g, "")),
          "" === (e = t.split(/\s+/))[0] && e.shift(),
          e
        );
      });
    var mt = T;
    S.prototype.has = S.prototype.contains = function (t) {
      return this.tokens ? this.tokens.contains(t) : !!~s(this.array(), t);
    };
    var yt = (Object.freeze || Object)({
        add: function (t, e) {
          return new S(t).add(e);
        },
        remove: E,
        toggle: function (t, e) {
          new S(t).toggle(e);
        },
        has: T,
        contains: mt,
        Classes: S,
      }),
      vt = {};
    vt.log = function (t, e) {
      var r = {};
      (r.message = t), (r.category = e), vt.history.push(r);
    };
    var wt = function (t, e, r) {
        if (it) {
          try {
            console.log("[ CLOUDFLARE ] " + t);
          } catch (t) {}
          !1 !== r && vt.log(t, 1 | e);
        }
      },
      bt = function (t, e, r) {
        if (it) {
          try {
            console.error("[ CLOUDFLARE ] " + t);
          } catch (r) {
            wt(t, 4 | e, !1);
          }
          !1 !== r && vt.log(t, 4 | e);
        }
      },
      St = { bandwidth: 1 / 0 },
      Et = "mirage_network_connection",
      Tt = "X-Mirage-Server-Time",
      Ot = "X-Mirage-Transfer-Size",
      At = "/cdn-cgi/mirage_speedtest/",
      It = 1.25,
      Lt = (Object.freeze || Object)({
        isHighLatency: O,
        getFakeConnection: A,
        connectionFromStats: L,
        calculateEffectiveConnectionType: C,
      }),
      Ct = {};
    for (var xt in ht) Ct[xt] = ht[xt];
    var Nt = window.URL || window.webkitURL || window.mozURL,
      Pt = (function () {
        var t;
        return window.location.origin
          ? window.location.origin
          : (t = pt(window.location.toString())).protocol +
              "://" +
              t.host +
              ":" +
              t.port;
      })();
    return (
      (j.DEFAULT_TTL = 1728e5),
      (j.STORAGE_KEY = "mirage_cache_manifest"),
      (j.DEBOUNCE_THRESHOLD = 500),
      (j.MAX_LENGTH = 100),
      (j.prototype.record = function (t) {
        return this.whenReady_(function () {
          this.add_(t), this.persist_();
        });
      }),
      (j.prototype.has = function (t) {
        return this.whenReady_(function () {
          return this.has_(t);
        });
      }),
      (j.prototype.indexOf = function (t) {
        return this.whenReady_(function () {
          return this.indexOf_(this.map_[t]);
        });
      }),
      (j.prototype.clear = function () {
        return this.whenReady_(function () {
          try {
            window.localStorage.removeItem(j.STORAGE_KEY);
          } catch (t) {}
          this.reset_();
        });
      }),
      (j.prototype.whenReady_ = function (t) {
        return (this.queue_ = this.queue_.then(R(t, this))), this.queue_;
      }),
      (j.prototype.has_ = function (t) {
        var e = this.map_[t],
          r = i();
        return e && e + j.DEFAULT_TTL < r
          ? (this.remove_(t), this.persist_(), !1)
          : !!e;
      }),
      (j.prototype.reset_ = function () {
        try {
          (this.map_ = JSON.parse(window.localStorage.getItem(j.STORAGE_KEY))),
            (this.sizeMap_ = {}),
            (this.sizeQueue_ = m(
              this.map_,
              function (t, e) {
                var r = { key: e, value: t };
                return (this.sizeMap_[e] = r), r;
              },
              this
            ).sort(function (t, e) {
              return t.value > e.value ? -1 : t.value < e.value ? 1 : 0;
            }));
        } catch (t) {}
        (this.map_ = this.map_ || {}), (this.offset_ = 0);
      }),
      (j.prototype.indexOf_ = function (t, e, r) {
        var n, i;
        return 0 === this.sizeQueue_.length || void 0 === t
          ? -1
          : ((e = e || 0),
            (r = r || this.sizeQueue_.length),
            0 == (n = r - e)
              ? -1
              : ((i = n / 2 + e),
                (i |= i),
                this.sizeQueue_[i].value < t
                  ? this.indexOf_(t, e, i)
                  : this.sizeQueue_[i].value > t
                  ? this.indexOf_(t, i, r)
                  : i));
      }),
      (j.prototype.add_ = function (t) {
        var e,
          r = this.sizeMap_[t];
        r
          ? ((e = this.indexOf_(r.value)), this.sizeQueue_.splice(e, 1))
          : ((r = { key: t }), (this.sizeMap_[t] = r)),
          (this.map_[t] = r.value = i() + this.offset_++),
          this.sizeQueue_.unshift(r),
          this.sizeQueue_.length > j.MAX_LENGTH &&
            this.remove_(this.sizeQueue_[this.sizeQueue_.length - 1].key);
      }),
      (j.prototype.remove_ = function (t) {
        var e = this.sizeMap_[t],
          r = this.indexOf_(e.value);
        delete this.map_[t],
          delete this.sizeMap_[t],
          -1 !== r && this.sizeQueue_.splice(r, 1);
      }),
      (j.prototype.persist_ = function () {
        return this.whenReady_(function () {
          try {
            window.localStorage.setItem(j.STORAGE_KEY, JSON.stringify(this.map_));
          } catch (t) {}
        });
      }),
      (j.prototype.persist_ = (function (t, e) {
        var r = null;
        return function () {
          var n = arguments,
            i = this;
          null !== r && window.clearTimeout(r),
            (r = window.setTimeout(function () {
              t.apply(i, n);
            }, e));
        };
      })(j.prototype.persist_, j.DEBOUNCE_THRESHOLD)),
      (M.type = {
        SIGNATURE: [137, 80, 78, 71, 13, 10, 26, 10],
        IHDR: [73, 72, 68, 82],
        IEND: [73, 69, 78, 68],
      }),
      (M.FIELD_BYTE_LENGTH = 12),
      (M.prototype.initializeAsSignature_ = function (t, e) {
        (this.byteLength = 8),
          (this.type_ = new Uint8Array(t, e, this.byteLength));
      }),
      (M.prototype.initializeAsChunk_ = function (t, e) {
        for (var r = new Uint8Array(t, e, 4), n = 0, i = 0; i < 4; i++)
          (n <<= 8), (n |= r[i]);
        (this.byteLength = n + M.FIELD_BYTE_LENGTH),
          (this.type_ = new Uint8Array(t, e + 4, 4));
      }),
      (M.prototype.isSignature = function () {
        return 8 === this.byteLength;
      }),
      (M.prototype.isHeader = function () {
        return this.matches(M.type.IHDR);
      }),
      (M.prototype.isEnd = function () {
        return this.matches(M.type.IEND);
      }),
      (M.prototype.matches = function (t) {
        for (var e = 0; e < t.length; ++e) if (this.type_[e] !== t[e]) return !1;
        return !0;
      }),
      (B.createObjectUrl = (function () {
        var t = G.resolve();
        return function (e) {
          return (t = t.then(function () {
            var t = e.toBlob_();
            e.releaseImageSrc();
            try {
              var r = "createObjectURL";
              for (r in Nt) if ("createObjectURL" === r) break;
              return Nt[r](t);
            } catch (t) {
              return bt("Failed to create objectURL for a blob.", t.message), "";
            }
          }));
        };
      })()),
      (B.prototype.toBlob_ = function () {
        return D(
          x(
            this.view.buffer,
            this.view.byteOffset,
            this.view.byteOffset + this.view.byteLength
          ),
          { type: "image/png" }
        );
      }),
      (B.prototype.resolveImageSrc = function () {
        return B.createObjectUrl(this).then(
          R(function (t) {
            return (this.imageSrc_ = t), t;
          }, this)
        );
      }),
      (B.prototype.releaseImageSrc = function () {
        if (this.imageSrc_)
          try {
            Nt.revokeObjectURL(this.imageSrc_), (this.imageSrc_ = null);
          } catch (t) {
            bt("Failed to release image src.", t.message);
          }
      }),
      (k.state = { LOAD_OK: "ok", CACHE_MISS: "914:MISS", CACHE_HIT: "914:HIT" }),
      (U.prototype.resolveSrc = function () {
        return this.png.resolveImageSrc();
      }),
      (U.prototype.isValid = function () {
        return this.json.loadStatus == k.state.LOAD_OK;
      }),
      (z.prototype.resolveSrc = function () {
        return G.resolve(this.dataUrl_);
      }),
      (z.prototype.isValid = function () {
        return this.json.loadStatus == k.state.LOAD_OK;
      }),
      (H.VIEWPORT_BUFFER = 300),
      (H.PARENT_TREE_POLL_INTERVAL = 500),
      (H.RETRY_TIME = 100),
      (H.INVISIBLE_CLASS = "cf-invisible"),
      (H.HIDDEN_CLASS = "cf-hidden"),
      (H.resolveParentTree = function (t) {
        for (var e = [], r = t; r; ) {
          e.push(r);
          try {
            r = r.parentNode;
          } catch (t) {
            break;
          }
        }
        return e;
      }),
      (H.matchesParentTree = function (t, e) {
        var r = H.resolveParentTree(t);
        if (r.length !== e.length) return !1;
        for (var n = 0; n < r.length; ++n) if (r[n] !== e[n]) return !1;
        return !0;
      }),
      (H.prototype.storeStyleMutation = function () {
        var t = f(this.image_, "cfstyle");
        "hidden" === this.image_.style.visibility &&
          ((this.image_.style.visibility = ""), (e = c(this.image_, "style"))),
          "none" === this.image_.style.display &&
            ((this.image_.style.display = ""), (e = c(this.image_, "style")));
        var e = c(this.image_, "style");
        e &&
          (t
            ? p(this.image_, "cfstyle", H.mergeInlineStyles(this.image_))
            : p(this.image_, "cfstyle", e));
      }),
      (H.mergeInlineStyles = function (t) {
        var e = c(t, "style"),
          r = {};
        y(f(t, "cfstyle").split(";").concat(e.split(";")), function (t) {
          (i = t.split(":")), (r[i[0].trim()] = t);
        });
        var n = [];
        for (var i in r) i && n.push(r[i]);
        return n.join(";");
      }),
      (H.isValidCandidate = function (t) {
        var e = f(t, "cfsrc"),
          r = c(t, "src");
        f(t, "cfstyle"), c(t, "style");
        return e && "data:" === e.slice(0, 5).toLowerCase()
          ? (h(t, "src", e), H.restoreStyle(t), !1)
          : (((r && e !== r) || !e) && H.restoreStyle(t),
            "IMG" === t.nodeName && !!e && (null === r || "" === r || r === e));
      }),
      (H.restoreStyle = function (t) {
        var e,
          r = f(t, "cfstyle");
        t.style && ((t.style.visibility = ""), (t.style.display = "")),
          (e = c(t, "style")),
          r
            ? e
              ? h(t, "style", H.mergeInlineStyles(t))
              : h(t, "style", r)
            : l(t, "style");
      }),
      (H.prototype.getSrc = function () {
        return gt(f(this.image_, "cfsrc") || "");
      }),
      (H.prototype.getStyle = function () {
        return f(this.image_, "cfstyle") || "";
      }),
      (H.prototype.getTop = function () {
        for (var t = 0, e = this.image_; e; )
          try {
            void 0 !== e.offsetTop && e.offsetTop && (t += e.offsetTop),
              (e = e.offsetParent);
          } catch (t) {
            break;
          }
        return t;
      }),
      (H.prototype.getLeft = function () {
        return this.image_.getBoundingClientRect().left;
      }),
      (H.prototype.setDegradedSrc = function (t) {
        return new G(
          R(function (e) {
            this.restored_
              ? e()
              : ((this.restoring_ = !0),
                this.unwrap_(),
                (this.restoring_ = !1),
                this.whenStateExpires_(e),
                h(this.image_, "src", t),
                (this.image_.src = t),
                "" === this.getStyle()
                  ? l(this.image_, "style")
                  : h(this.image_, "style", this.getStyle()),
                E(this.image_, H.HIDDEN_CLASS),
                this.wrap_());
          }, this)
        );
      }),
      (H.prototype.restoreWithinViewport = function () {
        return this.forcePreloadOnly_
          ? this.restoredResult_.promise
          : Ct.eagerLoad
          ? this.restore()
          : this.entersViewport_().then(
              R(function () {
                return this.restore();
              }, this)
            );
      }),
      (H.prototype.restore = function () {
        return this.forcePreloadOnly_
          ? this.restoredResult_.promise
          : ((this.restoring_ = !0),
            this.unwrap_(),
            (this.restoring_ = !1),
            (this.restored_ = !0),
            h(this.image_, "src", this.getSrc()),
            (this.image_.src = this.getSrc()),
            "" === this.getStyle()
              ? l(this.image_, "style")
              : h(this.image_, "style", this.getStyle()),
            E(this.image_, H.HIDDEN_CLASS),
            this.whenStateExpires_(
              R(function () {
                this.restoredResult_.resolve();
              }, this)
            ),
            this.restoredResult_.promise);
      }),
      (H.prototype.whenRestored = function (t) {
        return this.restoredResult_.promise.then(t);
      }),
      (H.prototype.isWithinViewport = function () {
        var t,
          e = _(),
          r = this.image_.getBoundingClientRect();
        return (
          (t = r.bottom < 0 ? r.bottom : r.top > e.height ? r.top - e.height : 0),
          Math.abs(t) < F.DISTANCE_FROM_VIEWPORT
        );
      }),
      (H.prototype.whenStateExpires_ = function (t) {
        this.expireState_(),
          (this.stateCallback_ = t),
          d(this.image_, "load", this.boundExpireState_),
          d(this.image_, "error", this.boundExpireState_);
      }),
      (H.prototype.expireState_ = function () {
        var t;
        g(this.image_, "load", this.boundExpireState_),
          g(this.image_, "error", this.boundExpireState_),
          this.stateCallback_ &&
            ((t = this.stateCallback_), (this.stateCallback_ = null), t());
      }),
      (H.prototype.entersViewport_ = function () {
        return new G(
          R(function (t) {
            if (this.isWithinViewport()) return t();
            var e = R(function () {
              this.isWithinViewport() &&
                (null !== this.parentTreeCheckInterval_ &&
                  (window.clearInterval(this.parentTreeCheckInterval_),
                  (this.parentTreeCheckInterval_ = null)),
                this.mutationObserver.disconnect(),
                this.retryTimer_ && delete this.retryTimer_,
                g(window, "resize", e),
                g(window, "scroll", e),
                t());
            }, this);
            (this.retryTimer_ = setTimeout(
              R(function () {
                e();
              }, this),
              H.RETRY_TIME
            )),
              this.parentTreeChanges_().then(e),
              this.elementAttributeChange_().then(e),
              d(window, "resize", e),
              d(window, "scroll", e);
          }, this)
        );
      }),
      (H.prototype.elementAttributeChange_ = function () {
        return new G(
          R(function (t) {
            var e =
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver ||
              function () {
                (this.observe = function () {}),
                  (this.disconnect = function () {});
              };
            (this.mutationObserver = new e(function (e) {
              t();
            })),
              this.image_.origImage_ &&
                this.mutationObserver.observe(this.image_.origImage_, {
                  attributes: !0,
                  attributeOldValue: !0,
                });
          }, this)
        );
      }),
      (H.prototype.parentTreeChanges_ = function () {
        if (this.parentTreeChangesPromise_) return this.parentTreeChangesPromise_;
        var t = a();
        return (
          (this.parentTreeCheckInterval_ = window.setInterval(
            R(function () {
              H.matchesParentTree(this.image_, this.parentTree_) ||
                ((this.parentTree_ = H.resolveParentTree(this.image_)),
                window.clearInterval(this.parentTreeCheckInterval_),
                (this.parentTreeCheckInterval_ = null),
                (this.parentTreeChangesPromise_ = null),
                t.resolve());
            }, this),
            H.PARENT_TREE_POLL_INTERVAL
          )),
          (this.parentTreeChangesPromise_ = t.promise),
          t.promise
        );
      }),
      (H.prototype.makeMeasurable_ = function () {
        this.restored_ ||
          (T(this.image_, H.INVISIBLE_CLASS)
            ? E(this.image_, H.INVISIBLE_CLASS)
            : h(this.image_, "style", "visibility:hidden"));
      }),
      (H.prototype.wrap_ = function () {
        this.requireProxy_
          ? (this.proxy_ || (this.proxy_ = this.makeProxy()),
            (this.image_ = this.proxy_))
          : this.wrapImage_();
      }),
      (H.prototype.wrapImage_ = function () {
        try {
          var t = this,
            e = this.image_.getAttribute,
            r = this.image_.setAttribute,
            n = N(this.image_, "src", {
              get: function () {
                return t.getSrc();
              },
              set: function (e) {
                t.restoring_ || p(t.image_, "cfsrc", e);
              },
            }),
            i = N(this.image_, "getAttribute", {
              value: function (r) {
                return "src" === r
                  ? t.getSrc()
                  : "style" === r
                  ? t.getStyle()
                  : e.apply(t.image_, arguments);
              },
            }),
            o = N(this.image_, "setAttribute", {
              value: function (e, n) {
                "src" === e
                  ? p(t.image_, "cfsrc", n)
                  : "style" === e
                  ? p(t.image_, "cfstyle", n)
                  : r.apply(t.image_, arguments);
              },
            });
          this.wrappedPropertyCache_.push(n, i, o);
        } catch (t) {
          this.proxy_ || (this.proxy_ = this.makeProxy()),
            (this.image_ = this.proxy_);
        }
      }),
      (H.prototype.makeProxy = function () {
        var t = {};
        t.origImage_ = this.image_;
        var e = this;
        return (
          w(
            this.image_,
            function (r, n) {
              "function" == typeof r
                ? (t[n] = function () {
                    return this.origImage_[n].apply(this.origImage_, arguments);
                  })
                : "SRC" === n.toUpperCase()
                ? Object.defineProperty(t, n, {
                    get: function () {
                      return e.getSrc();
                    },
                    set: function (t) {
                      p(this.origImage_, "cfsrc", t);
                    },
                  })
                : Object.defineProperty(t, n, {
                    get: function () {
                      return this.origImage_[n];
                    },
                    set: function (t) {
                      this.origImage_[n] = t;
                    },
                  });
            },
            null
          ),
          N(t, "getAttribute", {
            value: function (t) {
              return "SRC" === t.toUpperCase()
                ? e.getSrc()
                : "STYLE" === t.toUpperCase()
                ? e.getStyle()
                : this.origImage_.getAttribute(t);
            },
          }),
          N(t, "setAttribute", {
            value: function (t, e) {
              "src" === t
                ? p(this.origImage_, "cfsrc", e)
                : "style" === t
                ? p(this.origImage_, "cfstyle", e)
                : setAttribute.apply(this.origImage_, arguments);
            },
          }),
          t
        );
      }),
      (H.prototype.unwrap_ = function () {
        this.wrappedPropertyCache_.length
          ? y(this.wrappedPropertyCache_, function (t) {
              t();
            })
          : (this.image_ = this.proxy_.origImage_);
      }),
      (V.LOAD_TICK_INTERVAL = 200),
      (V.BINARY_LOCATION_FRAGMENT = "/cdn-cgi/pe/mirage_bag?format=binary"),
      (V.DATAURL_LOCATION_FRAGMENT = "/cdn-cgi/pe/mirage_bag?format=base64"),
      (V.prototype.load = function (t) {
        var e = (this.map_[t] = this.map_[t] || a());
        return (
          null === this.timer_ &&
            (this.timer_ = setTimeout(
              R(function () {
                var t = this.map_,
                  e = Object.keys(t);
                (this.map_ = {}),
                  (this.timer_ = null),
                  this.loadStrategy_(
                    e,
                    R(function (e, r, n, i) {
                      t[e].resolve({
                        src: e,
                        width: n,
                        height: i,
                        degradedSrc: r,
                      });
                    }, this),
                    R(function (e, r) {
                      t[e].reject({
                        loadStatus: r,
                        message: e + " was not preloaded",
                      });
                    })
                  ).then(
                    function (e) {
                      for (var r in t)
                        r in e ||
                          t[r].reject(new Error(r + " was not preloaded."));
                    },
                    function (e) {
                      for (var r in t)
                        t[r].reject(
                          new Error(
                            "Fatal XHR failure." + (e ? " " + e.message : "")
                          )
                        );
                    }
                  );
              }, this),
              V.LOAD_TICK_INTERVAL
            )),
          e.promise
        );
      }),
      (V.prototype.loadDataUrls_ = function (t, e, r) {
        var n = new XMLHttpRequest(),
          i = !1,
          o = Pt;
        o += t.reduce(function (t, e, r) {
          var n = "&r[]=" + encodeURIComponent(e);
          return (
            void 0 !== rt && $ <= 8 && (i = t.length + n.length > 2032),
            t + (r < Ct.maxdegradedimages && !i ? n : "")
          );
        }, V.DATAURL_LOCATION_FRAGMENT);
        var s = {},
          u = a(),
          c = 0;
        return (
          n.open("get", o),
          Ct.petok && n.setRequestHeader("PE-Token", Ct.petok),
          (n.onreadystatechange = function () {
            try {
              if (n.status > 299) return u.reject();
            } catch (t) {}
            if (n.readyState > 2 && void 0 !== n.responseText) {
              for (var t = n.responseText; t && c < t.length; )
                try {
                  !(function () {
                    var n = new z(t, c);
                    (c += n.stringLength),
                      (s[n.src] = n),
                      n.isValid()
                        ? n.resolveSrc().then(function (t) {
                            e(n.src, t, n.width, n.height);
                          })
                        : r(n.src, n.json.loadStatus);
                  })();
                } catch (t) {
                  break;
                }
              4 === n.readyState && u.resolve(s);
            }
          }),
          n.send(),
          u.promise
        );
      }),
      (V.prototype.loadArrayBuffer_ = function (t, e, r) {
        var n = new XMLHttpRequest(),
          i =
            Pt +
            t.reduce(function (t, e, r) {
              return (
                t +
                (r < Ct.maxdegradedimages ? "&r[]=" + encodeURIComponent(e) : "")
              );
            }, V.BINARY_LOCATION_FRAGMENT),
          o = {},
          s = a(),
          u = 0;
        return (
          n.open("get", i, !0),
          Ct.petok && n.setRequestHeader("PE-Token", Ct.petok),
          (n.responseType = "arraybuffer"),
          (n.onreadystatechange = function () {
            try {
              if (n.status > 299) return s.reject();
            } catch (t) {}
            if (n.readyState > 2) {
              for (var t = n.response; t && u < t.byteLength; )
                try {
                  !(function () {
                    var n = new U(t, u);
                    (u += n.byteLength),
                      (o[n.src] = n),
                      n.isValid()
                        ? n.resolveSrc().then(function (t) {
                            e(n.src, t, n.width, n.height);
                          })
                        : r(n.src, n.json.loadStatus);
                  })();
                } catch (t) {
                  break;
                }
              4 === n.readyState && s.resolve(o);
            }
          }),
          n.send(),
          s.promise
        );
      }),
      (F.OPTIMIZATION_TIMEOUT = 3e4),
      (F.DISTANCE_FROM_VIEWPORT = 100),
      (F.RESTORE_NON_DEGRADED_IMAGE_TIMEOUT = 50),
      (F.prototype.sanitiseDOM = function () {
        return m(n(document.getElementsByTagName("img")), function (t) {
          f(t, "cfsrc") &&
            t.nextSibling &&
            "NOSCRIPT" == t.nextSibling.tagName &&
            t.parentElement.removeChild(t.nextSibling);
        });
      }),
      (F.prototype.releaseNativeMethods = function () {
        w(this.nativeMethods, function (t, e) {
          document[e] = t;
        });
      }),
      (F.prototype.proxyElementList = function (t) {
        var e = this.nativeMethods[t];
        return R(function (t) {
          return m(
            e.call(document, t),
            function (t) {
              return this.proxyMirageImage(t);
            },
            this
          );
        }, this);
      }),
      (F.prototype.proxyElement = function (t) {
        var e = this.nativeMethods[t];
        return R(function (t) {
          return this.proxyMirageImage(e.call(document, t));
        }, this);
      }),
      (F.prototype.proxyMirageImage = function (t) {
        if (t && t.nodeName && "IMG" === t.nodeName.toUpperCase()) {
          var e = v(this.imageCache_, function (e) {
            return e.image_.origImage_ === t;
          });
          return e ? e.image_ : t;
        }
        return t;
      }),
      (F.prototype.captureNativeMethods = function () {
        y(
          [
            "getElementsByTagName",
            "getElementById",
            "getElementsByClassName",
            "querySelectorAll",
            "querySelector",
          ],
          function (t) {
            this.nativeMethods[t] = document[t];
          },
          this
        ),
          (document.getElementsByClassName = this.proxyElementList(
            "getElementsByClassName"
          )),
          (document.querySelectorAll = this.proxyElementList("querySelectorAll")),
          (document.getElementById = this.proxyElement("getElementById")),
          (document.querySelector = this.proxyElement("querySelector")),
          (document.getElementsByTagName = R(function (t) {
            var e = this.nativeMethods.getElementsByTagName;
            return "IMG" === t.toUpperCase()
              ? m(
                  e.call(document, "img"),
                  function (t) {
                    return this.proxyMirageImage(t);
                  },
                  this
                )
              : e.apply(document, arguments);
          }, this));
      }),
      (F.prototype.capture = function () {
        return m(
          n(document.getElementsByTagName("img")),
          function (t) {
            var e;
            return (
              H.isValidCandidate(t) &&
                ((e = new H(t, {
                  forcePreloadOnly_: this.forcePreloadOnly_,
                  proxy_: this.requireProxy_,
                })).whenRestored(
                  R(function () {
                    this.manifest_.record(e.getSrc());
                  }, this)
                ),
                this.imageCache_.push(e)),
              e
            );
          },
          this
        );
      }),
      (F.prototype.logPreload = function (t) {
        t in this.loadStatistics
          ? this.loadStatistics[t]++
          : (this.loadStatistics[t] = 1);
      }),
      (F.prototype.preload = function () {
        return this.reducePreloadableImages_().then(
          R(function (t) {
            if (t.length) {
              var e = m(
                t,
                function (t) {
                  var e = this.loader_.load(t.getSrc()).then(
                    R(function (e) {
                      return (
                        this.logPreload(k.state.LOAD_OK),
                        (this.supportsBinaryData_
                          ? this.postProcess_(e.degradedSrc, e.width, e.height)
                          : G.resolve(e.degradedSrc)
                        ).then(function (e) {
                          return t.setDegradedSrc(e).then(function () {
                            return et.then(function () {
                              return t.restoreWithinViewport();
                            });
                          });
                        })
                      );
                    }, this),
                    R(function (e) {
                      return (
                        bt("Attempt to preload image failed.", e.message),
                        this.logPreload(e.loadStatus),
                        et.then(function () {
                          return t.restore();
                        })
                      );
                    }, this)
                  );
                  return t.isWithinViewport() ? e : G.resolve();
                },
                this
              );
              return (
                (this.optimizationTimeout_ = window.setTimeout(function () {
                  y(t, function (t) {
                    t.restore();
                  });
                }, F.OPTIMIZATION_TIMEOUT)),
                G.all(e).then(
                  R(function () {
                    this.optimizationTimeout_ &&
                      window.clearTimeout(this.optimizationTimeout_);
                  }, this)
                )
              );
            }
          }, this)
        );
      }),
      (F.prototype.backfill = function () {
        var t = [];
        return (
          y(
            this.imageCache_,
            function (e) {
              var r = e.restore();
              e.isWithinViewport() && t.push(r);
            },
            this
          ),
          G.all(t)
        );
      }),
      (F.prototype.reset = function () {
        (this.imageCache_ = []), this.manifest_.clear();
      }),
      (F.prototype.setConfig = function (t) {
        (Ct.maxjsonsize = t.maxjsonsize || 1e5),
          (Ct.maxdegradedimages = t.maxdegradedimages || 50),
          (Ct.maxexternalimages = t.maxexternalimages || 50),
          (Ct.eagerLoad = t.eagerLoad || !1),
          (Ct.petok = t.petok);
      }),
      (F.prototype.accessorTest = function (t) {
        var e = t.src,
          r = Object.getOwnPropertyDescriptor(t, "src") ||
            Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "src") || {
              value: e,
              writable: !0,
              configurable: !0,
              enumerable: !0,
            };
        return !(!r || r.configurable);
      }),
      (F.prototype.isHighLatency_ = O),
      (F.prototype.activate = function () {
        return tt.then(
          R(function () {
            this.sanitiseDOM(), (this.requireProxy_ = !1);
            var t = n(document.getElementsByTagName("img"));
            return (
              t.length &&
                t.length >= 1 &&
                (this.requireProxy_ = this.accessorTest(t[0])),
              this.capture(),
              this.requireProxy_ && this.captureNativeMethods(),
              this.isHighLatency_().then(
                R(function (t) {
                  return t || this.forcePreload_
                    ? this.preload()
                    : this.backfill();
                }, this)
              )
            );
          }, this)
        );
      }),
      (F.prototype.postProcess_ = function (t, e, r) {
        return new G(function (n) {
          var i = document.createElement("canvas"),
            o = document.createElement("img"),
            s = i.getContext("2d");
          (i.width = e),
            (i.height = r),
            o.addEventListener(
              "load",
              R(function () {
                s.drawImage(o, 0, 0, e, r), n(i.toDataURL());
              }, this)
            ),
            o.addEventListener(
              "error",
              R(function (t) {
                bt("Error loading image."), n("");
              }, this)
            ),
            (o.src = t);
        });
      }),
      (F.prototype.limitPreloadableImages_ = function (t) {
        var e = [],
          r = [];
        return (
          y(
            b(t, function (t) {
              return !!t;
            }),
            function (t, n) {
              var i = dt(t);
              n < Ct.maxdegradedimages
                ? (i || e.push(n), r.push(t))
                : i &&
                  e.length > Ct.maxexternalimages &&
                  (r.splice(e.pop(), 1), r.push(t));
            }
          ),
          G.resolve(r)
        );
      }),
      (F.prototype.reducePreloadableImages_ = function () {
        var t = [];
        return (
          y(
            this.getUniqueSrcs_(),
            function (e, r) {
              t.push(
                G.resolve().then(
                  R(function () {
                    return this.manifest_.has(e).then(function (t) {
                      if (!t) return e;
                    });
                  }, this),
                  function () {}
                )
              );
            },
            this
          ),
          G.all(t).then(
            R(function (t) {
              return this.limitPreloadableImages_(t).then(
                R(function (t) {
                  var e,
                    r = {};
                  y(
                    t,
                    function (t) {
                      r[t] = !0;
                    },
                    {}
                  );
                  var n = [];
                  return (
                    (e = b(
                      this.imageCache_,
                      function (t) {
                        var e = r[t.getSrc()];
                        return e || this.push(t), e;
                      },
                      n
                    )),
                    n.length > 0 &&
                      window.setTimeout(function () {
                        y(n, function (t) {
                          t.restore();
                        });
                      }, F.RESTORE_NON_DEGRADED_IMAGE_TIMEOUT),
                    e
                  );
                }, this)
              );
            }, this)
          )
        );
      }),
      (F.prototype.getUniqueSrcs_ = function () {
        var t = {},
          e = [],
          r = [],
          n = window.innerWidth,
          i = window.innerHeight;
        return (
          y(this.imageCache_, function (o) {
            var s = o.getTop(),
              a = o.getLeft(),
              u = o.getSrc();
            s < i && a < n && !t[u] ? e.push(u) : r.push(u), (t[o.getSrc()] = !0);
          }),
          e.concat(r)
        );
      }),
      "undefined" == typeof __DEV__ &&
        G.resolve().then(function () {
          var t = new F();
          t.activate().then(function () {
            t.requireProxy_ && t.releaseNativeMethods();
          });
        }),
      (t.MirageLoader = V),
      (t.MirageManager = F),
      (t.PNGChunk = M),
      (t.PNGImage = B),
      (t.MirageDegradedImage = U),
      (t.MirageDegradedImageFallback = z),
      (t.MirageImage = H),
      (t.MirageImageJSON = k),
      (t.CacheManifest = j),
      (t.arrayBufferSlice = x),
      (t.fakeConnection = Lt),
      (t.dom = rt),
      (t.classes = yt),
      (t.iterators = lt),
      (t.path = _t),
      (t.utility = W),
      t
    );
  })({});
  
  
// klaviyoed20.js
!(function () {
    var e = "XE7zHU",
      n = window.klaviyoModulesObject;
    if (n) {
      var a = n,
        o = a.companyId,
        r = a.serverSideRendered;
      if (o != e || !r)
        return void console.warn(
          "Already loaded for account "
            .concat(o, ". Skipping account ")
            .concat(e, ".")
        );
    }
    (window._learnq = window._learnq || []),
      (window.__klKey = window.__klKey || e),
      n ||
        (window._learnq.push(["account", e]),
        (n = {
          companyId: e,
          loadTime: new Date(),
          loadedModules: {},
          loadedCss: {},
          serverSideRendered: !0,
          assetSource: "",
        }),
        Object.defineProperty(window, "klaviyoModulesObject", {
          value: n,
          enumerable: !1,
        }));
    var t = {},
      s = document,
      d = s.head;
    function c(e) {
      if (!t[e]) {
        var n = s.createElement("script");
        (n.type = "text/javascript"),
          (n.async = !0),
          (n.src = e),
          (n.crossOrigin = "anonymous"),
          d.appendChild(n),
          (t[e] = !0);
      }
    }
    var i,
      l,
      u,
      p = JSON.parse(
        "noModule" in s.createElement("script") ||
          (function () {
            try {
              return new Function('import("")'), !0;
            } catch (e) {
              return !1;
            }
          })()
          ? "{\u0022static\u0022: {\u0022js\u0022: [\u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/fender_analytics.23194ba60b06f2efa3bc.js?cb\u003D1\u0022, \u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/static.7040eccfb11ebc1531fa.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/runtime.920fc6719702df012914.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/sharedUtils.32025a582e71883fa7de.js?cb\u003D1\u0022]}}"
          : "{\u0022static\u0022: {\u0022js\u0022: [\u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/fender_analytics.77b4887f93fb672c8ca7.js?cb\u003D1\u0022, \u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/static.655e090d66d86be854cd.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/runtime.4bd19db906c0ac1e6760.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/sharedUtils.aa113ff0b145b26e8381.js?cb\u003D1\u0022]}}"
      ),
      w = n,
      v = w.loadedCss,
      y = w.loadedModules;
    for (i in p)
      if (p.hasOwnProperty(i)) {
        var f = p[i];
        f.js.forEach(function (e) {
          y[e] || (c(e), (y[e] = new Date().toISOString()));
        });
        var m = f.css;
        m &&
          !v[m] &&
          ((l = m),
          (u = void 0),
          ((u = s.createElement("link")).rel = "stylesheet"),
          (u.href = l),
          d.appendChild(u),
          (v[m] = new Date().toISOString()));
      }
  })();
  !(function (n, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((n =
          "undefined" != typeof globalThis ? globalThis : n || self).LazyLoad =
          t());
  })(this, function () {
    "use strict";
    function n() {
      return (
        (n =
          Object.assign ||
          function (n) {
            for (var t = 1; t < arguments.length; t++) {
              var e = arguments[t];
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
            }
            return n;
          }),
        n.apply(this, arguments)
      );
    }
    var t = "undefined" != typeof window,
      e =
        (t && !("onscroll" in window)) ||
        ("undefined" != typeof navigator &&
          /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
      i = t && "IntersectionObserver" in window,
      o = t && "classList" in document.createElement("p"),
      a = t && window.devicePixelRatio > 1,
      r = {
        elements_selector: ".lazy",
        container: e || t ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: "src",
        data_srcset: "srcset",
        data_sizes: "sizes",
        data_bg: "bg",
        data_bg_hidpi: "bg-hidpi",
        data_bg_multi: "bg-multi",
        data_bg_multi_hidpi: "bg-multi-hidpi",
        data_bg_set: "bg-set",
        data_poster: "poster",
        class_applied: "applied",
        class_loading: "loading",
        class_loaded: "loaded",
        class_error: "error",
        class_entered: "entered",
        class_exited: "exited",
        unobserve_completed: !0,
        unobserve_entered: !1,
        cancel_on_exit: !0,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: !1,
        restore_on_error: !1,
      },
      c = function (t) {
        return n({}, r, t);
      },
      l = function (n, t) {
        var e,
          i = "LazyLoad::Initialized",
          o = new n(t);
        try {
          e = new CustomEvent(i, { detail: { instance: o } });
        } catch (n) {
          (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
            instance: o,
          });
        }
        window.dispatchEvent(e);
      },
      u = "src",
      s = "srcset",
      d = "sizes",
      f = "poster",
      _ = "llOriginalAttrs",
      g = "data",
      v = "loading",
      b = "loaded",
      m = "applied",
      p = "error",
      h = "native",
      E = "data-",
      I = "ll-status",
      y = function (n, t) {
        return n.getAttribute(E + t);
      },
      k = function (n) {
        return y(n, I);
      },
      w = function (n, t) {
        return (function (n, t, e) {
          var i = "data-ll-status";
          null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
        })(n, 0, t);
      },
      A = function (n) {
        return w(n, null);
      },
      L = function (n) {
        return null === k(n);
      },
      O = function (n) {
        return k(n) === h;
      },
      x = [v, b, m, p],
      C = function (n, t, e, i) {
        n && (void 0 === i ? (void 0 === e ? n(t) : n(t, e)) : n(t, e, i));
      },
      N = function (n, t) {
        o ? n.classList.add(t) : (n.className += (n.className ? " " : "") + t);
      },
      M = function (n, t) {
        o
          ? n.classList.remove(t)
          : (n.className = n.className
              .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
              .replace(/^\s+/, "")
              .replace(/\s+$/, ""));
      },
      z = function (n) {
        return n.llTempImage;
      },
      T = function (n, t) {
        if (t) {
          var e = t._observer;
          e && e.unobserve(n);
        }
      },
      R = function (n, t) {
        n && (n.loadingCount += t);
      },
      G = function (n, t) {
        n && (n.toLoadCount = t);
      },
      j = function (n) {
        for (var t, e = [], i = 0; (t = n.children[i]); i += 1)
          "SOURCE" === t.tagName && e.push(t);
        return e;
      },
      D = function (n, t) {
        var e = n.parentNode;
        e && "PICTURE" === e.tagName && j(e).forEach(t);
      },
      H = function (n, t) {
        j(n).forEach(t);
      },
      V = [u],
      F = [u, f],
      B = [u, s, d],
      J = [g],
      P = function (n) {
        return !!n[_];
      },
      S = function (n) {
        return n[_];
      },
      U = function (n) {
        return delete n[_];
      },
      $ = function (n, t) {
        if (!P(n)) {
          var e = {};
          t.forEach(function (t) {
            e[t] = n.getAttribute(t);
          }),
            (n[_] = e);
        }
      },
      q = function (n, t) {
        if (P(n)) {
          var e = S(n);
          t.forEach(function (t) {
            !(function (n, t, e) {
              e ? n.setAttribute(t, e) : n.removeAttribute(t);
            })(n, t, e[t]);
          });
        }
      },
      K = function (n, t, e) {
        N(n, t.class_applied),
          w(n, m),
          e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
      },
      Q = function (n, t, e) {
        N(n, t.class_loading),
          w(n, v),
          e && (R(e, 1), C(t.callback_loading, n, e));
      },
      W = function (n, t, e) {
        e && n.setAttribute(t, e);
      },
      X = function (n, t) {
        W(n, d, y(n, t.data_sizes)),
          W(n, s, y(n, t.data_srcset)),
          W(n, u, y(n, t.data_src));
      },
      Y = {
        IMG: function (n, t) {
          D(n, function (n) {
            $(n, B), X(n, t);
          }),
            $(n, B),
            X(n, t);
        },
        IFRAME: function (n, t) {
          $(n, V), W(n, u, y(n, t.data_src));
        },
        VIDEO: function (n, t) {
          H(n, function (n) {
            $(n, V), W(n, u, y(n, t.data_src));
          }),
            $(n, F),
            W(n, f, y(n, t.data_poster)),
            W(n, u, y(n, t.data_src)),
            n.load();
        },
        OBJECT: function (n, t) {
          $(n, J), W(n, g, y(n, t.data_src));
        },
      },
      Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
      nn = function (n, t) {
        !t ||
          (function (n) {
            return n.loadingCount > 0;
          })(t) ||
          (function (n) {
            return n.toLoadCount > 0;
          })(t) ||
          C(n.callback_finish, t);
      },
      tn = function (n, t, e) {
        n.addEventListener(t, e), (n.llEvLisnrs[t] = e);
      },
      en = function (n, t, e) {
        n.removeEventListener(t, e);
      },
      on = function (n) {
        return !!n.llEvLisnrs;
      },
      an = function (n) {
        if (on(n)) {
          var t = n.llEvLisnrs;
          for (var e in t) {
            var i = t[e];
            en(n, e, i);
          }
          delete n.llEvLisnrs;
        }
      },
      rn = function (n, t, e) {
        !(function (n) {
          delete n.llTempImage;
        })(n),
          R(e, -1),
          (function (n) {
            n && (n.toLoadCount -= 1);
          })(e),
          M(n, t.class_loading),
          t.unobserve_completed && T(n, e);
      },
      cn = function (n, t, e) {
        var i = z(n) || n;
        on(i) ||
          (function (n, t, e) {
            on(n) || (n.llEvLisnrs = {});
            var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
            tn(n, i, t), tn(n, "error", e);
          })(
            i,
            function (o) {
              !(function (n, t, e, i) {
                var o = O(t);
                rn(t, e, i),
                  N(t, e.class_loaded),
                  w(t, b),
                  C(e.callback_loaded, t, i),
                  o || nn(e, i);
              })(0, n, t, e),
                an(i);
            },
            function (o) {
              !(function (n, t, e, i) {
                var o = O(t);
                rn(t, e, i),
                  N(t, e.class_error),
                  w(t, p),
                  C(e.callback_error, t, i),
                  e.restore_on_error && q(t, B),
                  o || nn(e, i);
              })(0, n, t, e),
                an(i);
            }
          );
      },
      ln = function (n, t, e) {
        !(function (n) {
          return Z.indexOf(n.tagName) > -1;
        })(n)
          ? (function (n, t, e) {
              !(function (n) {
                n.llTempImage = document.createElement("IMG");
              })(n),
                cn(n, t, e),
                (function (n) {
                  P(n) || (n[_] = { backgroundImage: n.style.backgroundImage });
                })(n),
                (function (n, t, e) {
                  var i = y(n, t.data_bg),
                    o = y(n, t.data_bg_hidpi),
                    r = a && o ? o : i;
                  r &&
                    ((n.style.backgroundImage = 'url("'.concat(r, '")')),
                    z(n).setAttribute(u, r),
                    Q(n, t, e));
                })(n, t, e),
                (function (n, t, e) {
                  var i = y(n, t.data_bg_multi),
                    o = y(n, t.data_bg_multi_hidpi),
                    r = a && o ? o : i;
                  r && ((n.style.backgroundImage = r), K(n, t, e));
                })(n, t, e),
                (function (n, t, e) {
                  var i = y(n, t.data_bg_set);
                  if (i) {
                    var o = i.split("|"),
                      a = o.map(function (n) {
                        return "image-set(".concat(n, ")");
                      });
                    (n.style.backgroundImage = a.join()),
                      "" === n.style.backgroundImage &&
                        ((a = o.map(function (n) {
                          return "-webkit-image-set(".concat(n, ")");
                        })),
                        (n.style.backgroundImage = a.join())),
                      K(n, t, e);
                  }
                })(n, t, e);
            })(n, t, e)
          : (function (n, t, e) {
              cn(n, t, e),
                (function (n, t, e) {
                  var i = Y[n.tagName];
                  i && (i(n, t), Q(n, t, e));
                })(n, t, e);
            })(n, t, e);
      },
      un = function (n) {
        n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
      },
      sn = function (n) {
        D(n, function (n) {
          q(n, B);
        }),
          q(n, B);
      },
      dn = {
        IMG: sn,
        IFRAME: function (n) {
          q(n, V);
        },
        VIDEO: function (n) {
          H(n, function (n) {
            q(n, V);
          }),
            q(n, F),
            n.load();
        },
        OBJECT: function (n) {
          q(n, J);
        },
      },
      fn = function (n, t) {
        (function (n) {
          var t = dn[n.tagName];
          t
            ? t(n)
            : (function (n) {
                if (P(n)) {
                  var t = S(n);
                  n.style.backgroundImage = t.backgroundImage;
                }
              })(n);
        })(n),
          (function (n, t) {
            L(n) ||
              O(n) ||
              (M(n, t.class_entered),
              M(n, t.class_exited),
              M(n, t.class_applied),
              M(n, t.class_loading),
              M(n, t.class_loaded),
              M(n, t.class_error));
          })(n, t),
          A(n),
          U(n);
      },
      _n = ["IMG", "IFRAME", "VIDEO"],
      gn = function (n) {
        return n.use_native && "loading" in HTMLImageElement.prototype;
      },
      vn = function (n, t, e) {
        n.forEach(function (n) {
          return (function (n) {
            return n.isIntersecting || n.intersectionRatio > 0;
          })(n)
            ? (function (n, t, e, i) {
                var o = (function (n) {
                  return x.indexOf(k(n)) >= 0;
                })(n);
                w(n, "entered"),
                  N(n, e.class_entered),
                  M(n, e.class_exited),
                  (function (n, t, e) {
                    t.unobserve_entered && T(n, e);
                  })(n, e, i),
                  C(e.callback_enter, n, t, i),
                  o || ln(n, e, i);
              })(n.target, n, t, e)
            : (function (n, t, e, i) {
                L(n) ||
                  (N(n, e.class_exited),
                  (function (n, t, e, i) {
                    e.cancel_on_exit &&
                      (function (n) {
                        return k(n) === v;
                      })(n) &&
                      "IMG" === n.tagName &&
                      (an(n),
                      (function (n) {
                        D(n, function (n) {
                          un(n);
                        }),
                          un(n);
                      })(n),
                      sn(n),
                      M(n, e.class_loading),
                      R(i, -1),
                      A(n),
                      C(e.callback_cancel, n, t, i));
                  })(n, t, e, i),
                  C(e.callback_exit, n, t, i));
              })(n.target, n, t, e);
        });
      },
      bn = function (n) {
        return Array.prototype.slice.call(n);
      },
      mn = function (n) {
        return n.container.querySelectorAll(n.elements_selector);
      },
      pn = function (n) {
        return (function (n) {
          return k(n) === p;
        })(n);
      },
      hn = function (n, t) {
        return (function (n) {
          return bn(n).filter(L);
        })(n || mn(t));
      },
      En = function (n, e) {
        var o = c(n);
        (this._settings = o),
          (this.loadingCount = 0),
          (function (n, t) {
            i &&
              !gn(n) &&
              (t._observer = new IntersectionObserver(
                function (e) {
                  vn(e, n, t);
                },
                (function (n) {
                  return {
                    root: n.container === document ? null : n.container,
                    rootMargin: n.thresholds || n.threshold + "px",
                  };
                })(n)
              ));
          })(o, this),
          (function (n, e) {
            t &&
              ((e._onlineHandler = function () {
                !(function (n, t) {
                  var e;
                  ((e = mn(n)), bn(e).filter(pn)).forEach(function (t) {
                    M(t, n.class_error), A(t);
                  }),
                    t.update();
                })(n, e);
              }),
              window.addEventListener("online", e._onlineHandler));
          })(o, this),
          this.update(e);
      };
    return (
      (En.prototype = {
        update: function (n) {
          var t,
            o,
            a = this._settings,
            r = hn(n, a);
          G(this, r.length),
            !e && i
              ? gn(a)
                ? (function (n, t, e) {
                    n.forEach(function (n) {
                      -1 !== _n.indexOf(n.tagName) &&
                        (function (n, t, e) {
                          n.setAttribute("loading", "lazy"),
                            cn(n, t, e),
                            (function (n, t) {
                              var e = Y[n.tagName];
                              e && e(n, t);
                            })(n, t),
                            w(n, h);
                        })(n, t, e);
                    }),
                      G(e, 0);
                  })(r, a, this)
                : ((o = r),
                  (function (n) {
                    n.disconnect();
                  })((t = this._observer)),
                  (function (n, t) {
                    t.forEach(function (t) {
                      n.observe(t);
                    });
                  })(t, o))
              : this.loadAll(r);
        },
        destroy: function () {
          this._observer && this._observer.disconnect(),
            t && window.removeEventListener("online", this._onlineHandler),
            mn(this._settings).forEach(function (n) {
              U(n);
            }),
            delete this._observer,
            delete this._settings,
            delete this._onlineHandler,
            delete this.loadingCount,
            delete this.toLoadCount;
        },
        loadAll: function (n) {
          var t = this,
            e = this._settings;
          hn(n, e).forEach(function (n) {
            T(n, t), ln(n, e, t);
          });
        },
        restoreAll: function () {
          var n = this._settings;
          mn(n).forEach(function (t) {
            fn(t, n);
          });
        },
      }),
      (En.load = function (n, t) {
        var e = c(t);
        ln(n, e);
      }),
      (En.resetStatus = function (n) {
        A(n);
      }),
      t &&
        (function (n, t) {
          if (t)
            if (t.length) for (var e, i = 0; (e = t[i]); i += 1) l(n, e);
            else l(n, t);
        })(En, window.lazyLoadOptions),
      En
    );
  });
  !(function () {
    "use strict";
    var e = {
        364: function (e) {
          function t(e, t, n) {
            return t > e ? t : n < e ? n : e;
          }
          function n(e) {
            return +(e > 0) - +(e < 0);
          }
          var i,
            o = {};
          function r(e) {
            return "-" + e[0].toLowerCase();
          }
          function a(e) {
            return o[e] || (o[e] = e.replace(/([A-Z])/g, r));
          }
          function s(e, t) {
            return e && 0 !== e.length
              ? e.nodeName
                ? [e]
                : [].slice.call(
                    e[0].nodeName
                      ? e
                      : (t || document.documentElement).querySelectorAll(e)
                  )
              : [];
          }
          function c(e, t) {
            for (var n in t)
              n.indexOf("_") && e.setAttribute("data-" + a(n), t[n]);
          }
          var l = [];
          function u() {
            (i = 0),
              l.slice().forEach(function (e) {
                return e();
              }),
              d();
          }
          function d() {
            !i && l.length && (i = requestAnimationFrame(u));
          }
          function f(e, t, n, i) {
            return "function" == typeof e ? e(t, n, i) : e;
          }
          function p() {}
          e.exports = function (e) {
            var o,
              r,
              u,
              v,
              m = (e = e || {}).onChange || p,
              b = e.onHidden || p,
              h = e.onShown || p,
              y = e.onScroll || p,
              g = e.cssProps
                ? ((o = e.cssProps),
                  function (e, t) {
                    for (var n in t)
                      n.indexOf("_") &&
                        (!0 === o || o[n]) &&
                        e.style.setProperty(
                          "--" + a(n),
                          ((i = t[n]), Math.round(1e4 * i) / 1e4)
                        );
                    var i;
                  })
                : p,
              w = e.scrollingElement,
              S = w ? s(w)[0] : window,
              j = w ? s(w)[0] : document.documentElement,
              L = !1,
              k = {},
              E = [];
            function A() {
              E = s(e.targets || "[data-scroll]", s(e.scope || j)[0]).map(
                function (e) {
                  return { element: e };
                }
              );
            }
            function T() {
              var o = j.clientWidth,
                a = j.clientHeight,
                s = n(-r + (r = j.scrollLeft || window.pageXOffset)),
                c = n(-u + (u = j.scrollTop || window.pageYOffset)),
                p = j.scrollLeft / (j.scrollWidth - o || 1),
                m = j.scrollTop / (j.scrollHeight - a || 1);
              (L =
                L ||
                k.scrollDirX !== s ||
                k.scrollDirY !== c ||
                k.scrollPercentX !== p ||
                k.scrollPercentY !== m),
                (k.scrollDirX = s),
                (k.scrollDirY = c),
                (k.scrollPercentX = p),
                (k.scrollPercentY = m);
              for (var b, h = !1, y = 0; y < E.length; y++) {
                var g = E[y],
                  w = g.element,
                  A = w,
                  T = 0,
                  P = 0;
                do {
                  (T += A.offsetLeft), (P += A.offsetTop), (A = A.offsetParent);
                } while (A && A !== S);
                var O,
                  x = w.clientHeight || w.offsetHeight || 0,
                  _ = w.clientWidth || w.offsetWidth || 0,
                  D = (t(T + _, r, r + o) - t(T, r, r + o)) / _,
                  q = (t(P + x, u, u + a) - t(P, u, u + a)) / x,
                  I = 1 === D ? 0 : n(T - r),
                  M = 1 === q ? 0 : n(P - u),
                  N = t((r - (_ / 2 + T - o / 2)) / (o / 2), -1, 1),
                  R = t((u - (x / 2 + P - a / 2)) / (a / 2), -1, 1);
                O = e.offset
                  ? f(e.offset, w, g, j) <= u
                    ? 1
                    : 0
                  : (f(e.threshold, w, g, j) || 0) < D * q
                  ? 1
                  : 0;
                var B = g.visible !== O;
                (g._changed ||
                  B ||
                  g.visibleX !== D ||
                  g.visibleY !== q ||
                  g.index !== y ||
                  g.elementHeight !== x ||
                  g.elementWidth !== _ ||
                  g.offsetX !== T ||
                  g.offsetY !== P ||
                  g.intersectX != g.intersectX ||
                  g.intersectY != g.intersectY ||
                  g.viewportX !== N ||
                  g.viewportY !== R) &&
                  ((h = !0),
                  (g._changed = !0),
                  (g._visibleChanged = B),
                  (g.visible = O),
                  (g.elementHeight = x),
                  (g.elementWidth = _),
                  (g.index = y),
                  (g.offsetX = T),
                  (g.offsetY = P),
                  (g.visibleX = D),
                  (g.visibleY = q),
                  (g.intersectX = I),
                  (g.intersectY = M),
                  (g.viewportX = N),
                  (g.viewportY = R),
                  (g.visible = O));
              }
              v ||
                (!L && !h) ||
                ((b = C),
                l.push(b),
                d(),
                (v = function () {
                  !(l = l.filter(function (e) {
                    return e !== b;
                  })).length &&
                    i &&
                    (cancelAnimationFrame(i), (i = 0));
                }));
            }
            function C() {
              P(),
                L &&
                  ((L = !1),
                  c(j, { scrollDirX: k.scrollDirX, scrollDirY: k.scrollDirY }),
                  g(j, k),
                  y(j, k, E));
              for (var t = E.length - 1; t > -1; t--) {
                var n = E[t],
                  i = n.element,
                  o = n.visible,
                  r = i.hasAttribute("scrollout-once") || !1;
                n._changed && ((n._changed = !1), g(i, n)),
                  n._visibleChanged &&
                    (c(i, { scroll: o ? "in" : "out" }),
                    m(i, n, j),
                    (o ? h : b)(i, n, j)),
                  o && (e.once || r) && E.splice(t, 1);
              }
            }
            function P() {
              v && (v(), (v = void 0));
            }
            A(), T(), C();
            var O = 0,
              x = function () {
                O =
                  O ||
                  setTimeout(function () {
                    (O = 0), T();
                  }, 0);
              };
            return (
              window.addEventListener("resize", x),
              S.addEventListener("scroll", x),
              {
                index: A,
                update: T,
                teardown: function () {
                  P(),
                    window.removeEventListener("resize", x),
                    S.removeEventListener("scroll", x);
                },
              }
            );
          };
        },
        311: function (e) {
          e.exports = jQuery;
        },
      },
      t = {};
    function n(i) {
      var o = t[i];
      if (void 0 !== o) return o.exports;
      var r = (t[i] = { exports: {} });
      return e[i](r, r.exports, n), r.exports;
    }
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
      (n.d = function (e, t) {
        for (var i in t)
          n.o(t, i) &&
            !n.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      });
    var i = {};
    !(function () {
      n.d(i, {
        B: function () {
          return mt;
        },
      });
      var e = void 0,
        t = function (t, n, i) {
          var o;
          return function () {
            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++)
              a[s] = arguments[s];
            var c = t.bind.apply(t, [e].concat(a));
            o ||
              (i && !o && c(),
              (o = setTimeout(function () {
                i || c(), (o = null);
              }, n)));
          };
        };
      var o = function e(t, n) {
          for (var i in n)
            n[i] && n[i].constructor && n[i].constructor === Object
              ? ((t[i] = t[i] || {}), e(t[i], n[i]))
              : (t[i] = n[i]);
          return t;
        },
        r = function (e, t) {
          var n = {};
          for (var i in e) n[i] = t[i] || e[i];
          return n;
        },
        a = function (e) {
          return Number.isInteger
            ? Number.isInteger(e)
            : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
        },
        s = function (e) {
          if (null == e) return !1;
          if ("boolean" == typeof e) return !0 === e;
          if ("string" == typeof e) {
            if ("" == e) return !1;
            if (
              "true" == (e = e.replace(/^\s+|\s+$/g, "")).toLowerCase() ||
              "yes" == e.toLowerCase()
            )
              return !0;
            e = (e = e.replace(/,/g, ".")).replace(/^\s*\-\s*/g, "-");
          }
          return !isNaN(e) && 0 != parseFloat(e);
        },
        c = {
          duration: 250,
          easing: function (e, t, n, i) {
            return -n * (e /= i) * (e - 2) + t;
          },
          display: "block",
        },
        l = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          a(t) && (t = { duration: t });
          var n = r(c, t),
            i = n.display;
          (n.direction = 2),
            (n.to = 0),
            (n.startingHeight = e.scrollHeight),
            (n.distanceHeight = -n.startingHeight),
            f(e, i),
            window.requestAnimationFrame(function (t) {
              return d(e, n, t);
            });
        },
        u = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          a(t) && (t = { duration: t }), (e.style.height = "0px");
          var n = r(c, t),
            i = n.display;
          f(e, i),
            (n.direction = 1),
            (n.to = e.scrollHeight),
            (n.startingHeight = 0),
            (n.distanceHeight = n.to),
            window.requestAnimationFrame(function (t) {
              return d(e, n, t);
            });
        },
        d = function e(t, n, i) {
          n.startTime || (n.startTime = i);
          var o = i - n.startTime,
            r = o < n.duration,
            a = n.easing(o, n.startingHeight, n.distanceHeight, n.duration);
          r
            ? ((t.style.height = "".concat(a.toFixed(2), "px")),
              window.requestAnimationFrame(function (i) {
                return e(t, n, i);
              }))
            : (2 === n.direction && (t.style.display = "none"),
              1 === n.direction &&
                (t.style.display = "flex" === n.display ? "flex" : "block"),
              p(t));
        },
        f = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "block";
          (e.style.display = "flex" === t ? "flex" : "block"),
            (e.style.overflow = "hidden"),
            (e.style.marginTop = "0"),
            (e.style.marginBottom = "0"),
            (e.style.paddingTop = "0"),
            (e.style.paddingBottom = "0");
        },
        p = function (e) {
          (e.style.height = null),
            (e.style.overflow = null),
            (e.style.marginTop = null),
            (e.style.marginBottom = null),
            (e.style.paddingTop = null),
            (e.style.paddingBottom = null);
        },
        v = function (e, t) {
          if (!e) return t;
          var n = e.getAttribute("data-slider-autoplay"),
            i = e.getAttribute("data-slider-autoplay-delay");
          return (
            "true" === n &&
              ((t.autoplay = {}),
              (t.autoplay.disableOnInteraction = !1),
              (t.autoplay.delay = i ? parseInt(i) : 3e3)),
            t
          );
        },
        m = function (e, t) {
          return e
            ? ((t.preloadImages = !1),
              (t.lazy = {}),
              (t.lazy.loadPrevNext = !0),
              (t.loadOnTransitionStart = !0),
              t)
            : t;
        },
        b = function () {
          return (
            !(
              "undefined" == typeof window ||
              !(
                "ontouchstart" in window ||
                (window.DocumentTouch &&
                  "undefined" != typeof document &&
                  document instanceof window.DocumentTouch)
              )
            ) ||
            !(
              "undefined" == typeof navigator ||
              (!navigator.maxTouchPoints && !navigator.msMaxTouchPoints)
            )
          );
        },
        h = function () {
          var e = b(),
            t = document.getElementsByTagName("html")[0];
          e
            ? (t.classList.remove("no-touch-device"),
              t.classList.add("touch-device"))
            : (t.classList.remove("touch-device"),
              t.classList.add("no-touch-device"));
        };
      function y(e) {
        return (
          (y =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          y(e)
        );
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== y(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, "string");
                  if ("object" !== y(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(i.key)),
              "symbol" === y(o) ? o : String(o)),
              i
            );
        }
        var o;
      }
      var w = (function () {
          function e(t, n) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.defaults = {
                element: ".l-nav",
                item: ".c-nav__item",
                active: "is-active",
                trigger: "click",
              }),
              (this.isTouch = !1),
              this.isTouchDevice(),
              t.initialized
                ? ((this.swiper = t),
                  (this.config = Object.assign({}, this.defaults, n || {})),
                  (this.selector = ""
                    .concat(this.config.element, " ")
                    .concat(this.config.item)),
                  (this.items = document.querySelectorAll(this.selector)),
                  (this.tabClicked = this.tabClick.bind(this)),
                  this.init())
                : console.log("swiper not initialized");
          }
          var t, n;
          return (
            (t = e),
            (n = [
              {
                key: "init",
                value: function () {
                  this.swiperSlideChange(), this.bindTabs();
                },
              },
              {
                key: "bindTabs",
                value: function () {
                  var e = this;
                  e.items.forEach(function (t) {
                    t.addEventListener(e.config.trigger, e.tabClicked, {
                      passive: !0,
                    }),
                      e.isTouch &&
                        "mouseover" === e.config.trigger &&
                        t.addEventListener("touchstart", e.tabClicked, {
                          passive: !0,
                        });
                  });
                },
              },
              {
                key: "unbindTabs",
                value: function () {
                  var e = this;
                  e.items.forEach(function (t) {
                    t.removeEventListener(e.config.trigger, e.tabClicked),
                      e.isTouch &&
                        "mouseover" === e.config.trigger &&
                        t.removeEventListener("touchstart", e.tabClicked);
                  });
                },
              },
              {
                key: "tabClick",
                value: function (e) {
                  var t,
                    n = this,
                    i = e.currentTarget;
                  n.items.forEach(function (e, o) {
                    i === e && (t = o), e.classList.remove(n.config.active);
                  }),
                    i.classList.add(n.config.active),
                    n.swiper.slideTo(t);
                },
              },
              {
                key: "tabChange",
                value: function (e) {
                  var t = this,
                    n = t.items;
                  n.forEach(function (e) {
                    e.classList.remove(t.config.active);
                  }),
                    n.forEach(function (n, i) {
                      e === i && n.classList.add(t.config.active);
                    });
                },
              },
              {
                key: "isTouchDevice",
                value: function () {
                  b() && (this.isTouch = !0);
                },
              },
              {
                key: "swiperSlideChange",
                value: function () {
                  var e = this;
                  e.swiper.on("slideChange", function () {
                    var t = e.swiper.activeIndex;
                    e.tabChange(t);
                  });
                },
              },
            ]) && g(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })(),
        S = function (e, t, n, i) {
          var o, r, a, s;
          if (!e) return t;
          if (e.getAttribute("data-slider-navigation")) {
            (t.navigation = {}),
              n &&
                void 0 !== i &&
                ((o = "".concat(n, "-next-").concat(i)),
                (r = "".concat(n, "-prev-").concat(i)));
            var c = e.closest(".m-slider");
            c &&
              ((a = c.querySelector(".swiper-button-next")),
              (s = c.querySelector(".swiper-button-prev"))),
              a &&
                o &&
                (a.setAttribute("id", o), (t.navigation.nextEl = "#".concat(o))),
              s &&
                r &&
                (s.setAttribute("id", r), (t.navigation.prevEl = "#".concat(r)));
          } else t.navigation = !1;
          return t;
        },
        j = function (e, t) {
          return e
            ? ("true" === e.getAttribute("data-slider-loop") &&
                ((t.loop = !0), (t.centeredSlides = !0)),
              t)
            : t;
        };
      function L(e) {
        return (
          (L =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          L(e)
        );
      }
      function k(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== L(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, "string");
                  if ("object" !== L(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(i.key)),
              "symbol" === L(o) ? o : String(o)),
              i
            );
        }
        var o;
      }
      var E = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.optionsDesktop = {}),
              (this.optionsMobile = {
                slideClass: "js-dsbls-nav-item",
                pagination: { el: ".l-slider-nav__pagination", clickable: !0 },
              }),
              (this.optionsNav = {
                item: ".js-dsbls-nav-item",
                active: "is-active",
                trigger: "mouseover",
              }),
              (this.sliderNo = t.replace("js-slider-dsbls-", "")),
              (this.sliderName = t),
              (this.sliderMobileName = t.replace(
                "js-slider-dsbls-",
                "js-slider-dsbls-m-"
              )),
              (this.sliderSel = "#" + this.sliderName),
              (this.sliderMobileSel = "#" + this.sliderMobileName),
              (this.optionsNav.element = this.sliderMobileSel),
              (this.sliderElem = document.querySelector(this.sliderSel)),
              (this.sliderMobileElem = document.querySelector(
                this.sliderMobileSel
              )),
              (this.showMobile = s(
                this.sliderElem.getAttribute("data-slider-is-mobile")
              )),
              (this.isMobile = !1),
              (this.isDesktop = !1),
              this.desktopInstance,
              this.mobileInstance,
              this.desktopTabs,
              this.init();
          }
          var n, i;
          return (
            (n = e),
            (i = [
              {
                key: "init",
                value: function () {
                  var e = this;
                  window.innerWidth < 1025
                    ? (e.isMobile = !0)
                    : (e.isDesktop = !0),
                    e.parseOptions(),
                    e.isMobile && e.showMobile && e.createMobile(),
                    e.isDesktop && e.createDesktop(),
                    window.addEventListener("resize", function () {
                      e.throttleResize();
                    }),
                    (e.throttleResize = t(function () {
                      e.resizeSlider();
                    }, 350));
                },
              },
              {
                key: "parseOptions",
                value: function () {
                  var e = this;
                  if (e.isMobile && e.showMobile) {
                    var t = e.sliderMobileName;
                    (e.optionsMobile = j(e.sliderMobileElem, e.optionsMobile)),
                      (e.optionsMobile = v(e.sliderMobileElem, e.optionsMobile)),
                      (e.optionsMobile = m(e.sliderMobileElem, e.optionsMobile)),
                      (e.optionsMobile = S(
                        e.sliderMobileElem,
                        e.optionsMobile,
                        t,
                        e.sliderNo
                      ));
                  }
                  if (e.isDesktop) {
                    var n = e.sliderName;
                    (e.optionsDesktop = j(e.sliderElem, e.optionsDesktop)),
                      (e.optionsDesktop = v(e.sliderElem, e.optionsDesktop)),
                      (e.optionsDesktop = m(e.sliderElem, e.optionsDesktop)),
                      (e.optionsDesktop = (function (e, t) {
                        if (!e) return t;
                        var n = e.getAttribute("data-slider-effect-transition");
                        switch (((t.effect = {}), n)) {
                          case "fade":
                            (t.effect = "fade"),
                              (t.fadeEffect = {}),
                              (t.fadeEffect.crossFade = !0);
                            break;
                          case "cube":
                            t.effect = "cube";
                            break;
                          case "coverflow":
                            t.effect = "coverflow";
                            break;
                          case "cards":
                            t.effect = "cards";
                            break;
                          case "flip":
                            t.effect = "flip";
                        }
                        return t;
                      })(e.sliderElem, e.optionsDesktop)),
                      (e.optionsDesktop = S(
                        e.sliderElem,
                        e.optionsDesktop,
                        n,
                        e.sliderNo
                      ));
                  }
                },
              },
              {
                key: "createDesktop",
                value: function () {
                  var e = this;
                  (e.desktopInstance = new Swiper(e.sliderSel, e.optionsDesktop)),
                    e.desktopInstance.initialized &&
                      (e.desktopTabs = new w(e.desktopInstance, e.optionsNav));
                },
              },
              {
                key: "createMobile",
                value: function () {
                  var e = this;
                  e.mobileInstance = new Swiper(
                    e.sliderMobileSel,
                    e.optionsMobile
                  );
                },
              },
              {
                key: "resizeSlider",
                value: function () {
                  var e = this;
                  window.innerWidth < 1025
                    ? e.isMobile ||
                      (void 0 !== e.desktopInstance &&
                        (e.desktopTabs.unbindTabs(),
                        e.desktopInstance.destroy(),
                        (e.desktopInstance = void 0)),
                      e.showMobile && e.createMobile(),
                      (e.isDesktop = !1),
                      (e.isMobile = !0))
                    : e.isDesktop ||
                      (void 0 !== e.mobileInstance &&
                        (e.mobileInstance.destroy(), (e.mobileInstance = void 0)),
                      e.createDesktop(),
                      (e.isMobile = !1),
                      (e.isDesktop = !0));
                },
              },
            ]) && k(n.prototype, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e
          );
        })(),
        A = document.querySelectorAll(".js-slider-dsbls"),
        T = document.querySelectorAll(".js-slider-dsbls-m"),
        C = function (e, t) {
          if (!e) return t;
          var n = parseInt(e.getAttribute("data-slider-columns")),
            i = parseInt(e.getAttribute("data-slider-columns-gap"));
          return (
            n
              ? ((t.slidesPerView = n),
                (t.breakpoints = {
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  576: {
                    slidesPerView: n > 3 ? 2 : 1,
                    spaceBetween: i > 20 ? 15 : 10,
                  },
                  1024: { slidesPerView: n, spaceBetween: i > 30 ? 25 : 20 },
                  1440: { slidesPerView: n, spaceBetween: i || 20 },
                }))
              : (t.breakpoints = {
                  320: { slidesPerView: 1 },
                  576: { slidesPerView: 2, spaceBetween: i > 20 ? 15 : 10 },
                  1024: { slidesPerView: "auto", spaceBetween: i > 30 ? 25 : 20 },
                }),
            t
          );
        },
        P = "js-slider-simple",
        O = document.querySelectorAll(".js-slider-simple"),
        x = "js-slider-advanced",
        _ = document.querySelectorAll(".js-slider-advanced"),
        D = 100,
        q = function (e) {
          var t = new Date(),
            n = setInterval(function () {
              var i = (new Date() - t) / e.duration;
              i > 1 && (i = 1), (e.progress = i);
              var o = e.delta(i);
              e.step(o),
                1 == i &&
                  (clearInterval(n),
                  "function" == typeof e.complete && e.complete());
            }, e.delay || 10);
        },
        I = function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        };
      Math.easeInOutCubic = function (e, t, n, i) {
        return (e /= i / 2) < 1
          ? (n / 2) * e * e * e + t
          : (n / 2) * ((e -= 2) * e * e + 2) + t;
      };
      var M = function (e) {
          var t = void 0 !== e.element ? e.element : window,
            n = e.to,
            i = void 0 !== e.duration ? e.duration : 250,
            o = void 0 !== e.callback ? e.callback : null,
            r = void 0 !== e.easing ? e.easing : Math.easeInOutCubic,
            a =
              t !== window
                ? t.scrollTop
                : (window.pageYOffset || document.documentElement.scrollTop) -
                  (document.documentElement.clientTop || 0),
            s = n - a,
            c = 0;
          !(function e() {
            c += 16;
            var l = i ? r(c, a, s, i) : n;
            t.scrollTo(0, l), c < i ? setTimeout(e, 16) : o && o();
          })();
        },
        N = function (e, t, n, i) {
          return n * (e /= i) * e + t;
        },
        R = function (e, t, n, i) {
          return (e /= i / 2) < 1
            ? (n / 2) * e * e * e * e + t
            : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
        };
      function B(e) {
        return (
          (B =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          B(e)
        );
      }
      function F(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return V(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return V(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? V(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function V(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function H(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== B(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, "string");
                  if ("object" !== B(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(i.key)),
              "symbol" === B(o) ? o : String(o)),
              i
            );
        }
        var o;
      }
      var z = (function () {
          function e(t, n) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.wrapper = ".js-acc-wrapper"),
              (this.defaults = {
                selectors: {
                  item: ".js-acc-item",
                  trigger: ".js-acc-button",
                  content: ".js-acc-content",
                },
                gallery: { container: ".js-acc-gallery", item: ".js-acc-media" },
                classes: {
                  active: "is-active",
                  focus: "focus",
                  display: "block",
                },
                animation: { content: !0, gallery: !1 },
                attr: {
                  close: "data-close",
                  open: "data-expand",
                  gallery: "data-gallery",
                  startClosed: "data-start-closed",
                  animationContent: "data-animation",
                  animationGallery: "data-gallery-animation",
                  display: "data-acc-display",
                  scrollToView: "data-scroll-to-view",
                },
                opt: {
                  close: !1,
                  expand: !1,
                  hasGallery: !1,
                  startClosed: !1,
                  scrollToView: !1,
                },
                aria: { button: "header", content: "content" },
              }),
              (this.config = o(this.defaults, n)),
              void 0 !== t && (this.wrapper = t),
              this.getAriaName(),
              (this.selector = document.querySelector(this.wrapper)),
              (this.eventsListeners = {}),
              this.parseOptions(),
              (this.trigger = this.selector.querySelectorAll(
                this.config.selectors.trigger
              )),
              (this.items = this.selector.querySelectorAll(
                this.config.selectors.item
              )),
              this.config.opt.hasGallery &&
                (this.galleryItems = this.selector.querySelectorAll(
                  this.config.gallery.item
                )),
              (this.handlers = []),
              (this.previousIndex = 0),
              (this.currentIndex = 0),
              this.init();
          }
          var t, n;
          return (
            (t = e),
            (n = [
              {
                key: "init",
                value: function () {
                  this.addAria(),
                    this.prepareForAnimation(),
                    this.accordionBindEvents();
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  var n = this;
                  "function" == typeof t &&
                    e.split(" ").forEach(function (e, i) {
                      n.eventsListeners[e] || (n.eventsListeners[e] = []),
                        n.eventsListeners[e].push(t);
                    });
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  var n = this;
                  n.eventsListeners &&
                    e.split(" ").forEach(function (e) {
                      void 0 === t
                        ? (n.eventsListeners[e] = [])
                        : n.eventsListeners[e] &&
                          n.eventsListeners[e].forEach(function (i, o) {
                            i === t && n.eventsListeners[e].splice(o, 1);
                          });
                    });
                },
              },
              {
                key: "emit",
                value: function () {
                  var e,
                    t,
                    n,
                    i = this;
                  if (!i.eventsListeners) return i;
                  for (
                    var o = arguments.length, r = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    r[a] = arguments[a];
                  "string" == typeof r[0] || Array.isArray(r[0])
                    ? ((e = r[0]), (t = r.slice(1, r.length)), (n = i))
                    : ((e = r[0].events),
                      (t = r[0].data),
                      (n = r[0].context || i)),
                    t.unshift(n);
                  var s = Array.isArray(e) ? e : e.split(" ");
                  s.forEach(function (e) {
                    i.eventsListeners &&
                      i.eventsListeners[e] &&
                      i.eventsListeners[e].forEach(function (e) {
                        e.apply(n, t);
                      });
                  });
                },
              },
              {
                key: "accordionBindEvents",
                value: function () {
                  var e = this,
                    t = e.trigger;
                  (e.addListenerFocus = e.addListenerFocus.bind(e)),
                    (e.addListenerBlur = e.addListenerBlur.bind(e)),
                    (e.addKeyListener = e.addKeyListener.bind(e)),
                    (e.on = e.on.bind(e)),
                    (e.off = e.off.bind(e)),
                    (e.emit = e.emit.bind(e)),
                    t.forEach(function (t, n) {
                      var i = e.accordionNavClick.bind(e, n);
                      e.handlers.push(i),
                        t.addEventListener("click", i, { passive: !0 }),
                        t.addEventListener("focus", e.addListenerFocus, {
                          passive: !0,
                        }),
                        t.addEventListener("blur", e.addListenerBlur, {
                          passive: !0,
                        });
                    }),
                    e.selector.addEventListener("keydown", e.addKeyListener, {
                      passive: !0,
                    });
                },
              },
              {
                key: "accordionUnbindEvents",
                value: function () {
                  var e = this;
                  e.trigger.forEach(function (t, n) {
                    var i = t
                      .closest(e.config.selectors.item)
                      .querySelector(e.config.selectors.content);
                    e.config.aria.name &&
                      (""
                        .concat(e.config.aria.name, "-")
                        .concat(e.config.aria.content, "-")
                        .concat(n),
                      ""
                        .concat(e.config.aria.name, "-")
                        .concat(e.config.aria.button, "-")
                        .concat(n)),
                      t.removeAttribute("aria-expanded", ""),
                      i.removeAttribute("aria-hidden", ""),
                      e.config.aria.name &&
                        (t.removeAttribute("aria-controls", ""),
                        t.removeAttribute("id", ""),
                        i.removeAttribute("id", ""),
                        i.removeAttribute("aria-labelledby", "")),
                      i.removeAttribute("role", ""),
                      t.removeEventListener("click", e.handlers[n]),
                      t.removeEventListener("focus", e.addListenerFocus),
                      t.removeEventListener("blur", e.addListenerBlur);
                  }),
                    e.selector.removeEventListener("keydown", e.addKeyListener),
                    e.removeStyles();
                },
              },
              {
                key: "accordionNavClick",
                value: function (e, t) {
                  var n = t.currentTarget;
                  this.accordionContentchange(e, n, t);
                },
              },
              {
                key: "accordionContentchange",
                value: function (e, t, n) {
                  var i = this,
                    o = t,
                    r = i.items,
                    a = o.closest(i.config.selectors.item),
                    s = a.querySelector(i.config.selectors.content),
                    c = "true" === o.getAttribute("aria-expanded") || !1;
                  a.classList.contains(i.config.classes.active)
                    ? i.config.opt.close &&
                      (i.config.animation.content &&
                        l(s, { display: i.config.classes.display }),
                      a.classList.remove(i.config.classes.active),
                      o.setAttribute("aria-expanded", !c),
                      s.setAttribute("aria-hidden", c))
                    : (i.config.opt.expand
                        ? (i.config.animation.content &&
                            u(s, { display: i.config.classes.display }),
                          a.classList.add(i.config.classes.active),
                          o.setAttribute("aria-expanded", !c),
                          s.setAttribute("aria-hidden", c))
                        : (r.forEach(function (e) {
                            var t = e.querySelector(i.config.selectors.content),
                              n = e.querySelector(i.config.selectors.trigger);
                            i.config.animation.content &&
                              l(t, { display: i.config.classes.display }),
                              e.classList.remove(i.config.classes.active),
                              n.setAttribute("aria-expanded", c),
                              t.setAttribute("aria-hidden", !c);
                          }),
                          i.config.animation.content &&
                            u(s, { display: i.config.classes.display }),
                          a.classList.add(i.config.classes.active),
                          o.setAttribute("aria-expanded", !c),
                          s.setAttribute("aria-hidden", c)),
                      i.config.opt.hasGallery && i.accordionChangeGallery(e),
                      i.config.opt.scrollToView &&
                        i.currentIndex < e &&
                        i.scrollToAccordion(e)),
                    (this.previousIndex = this.currentIndex),
                    (this.currentIndex = e),
                    i.emit("accordionChange", n);
                },
              },
              {
                key: "nextAccordion",
                value: function () {
                  var e = this,
                    t = e.currentIndex;
                  t === e.items.length - 1 ? (t = 0) : (t += 1);
                  var n = e.items[t];
                  e.accordionContentchange(t, n, null);
                },
              },
              {
                key: "prevAccordion",
                value: function () {
                  var e = this,
                    t = e.currentIndex,
                    n = e.items.length;
                  0 === t ? (t = n - 1) : (t -= 1);
                  var i = e.items[t];
                  e.accordionContentchange(t, i, null);
                },
              },
              {
                key: "accordionChangeGallery",
                value: function (e) {
                  var t = this,
                    n = F(t.galleryItems);
                  n.forEach(function (i) {
                    t.config.animation.gallery
                      ? (function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                          void 0 === t.duration && (t.duration = D);
                          var n = 1;
                          q({
                            duration: t.duration,
                            delta: function (e) {
                              return (e = this.progress), I(e);
                            },
                            complete: t.complete,
                            step: function (t) {
                              e.style.opacity = n - t;
                            },
                          });
                        })(i, {
                          complete: function () {
                            i.classList.remove(t.config.classes.active);
                            var o = n[e];
                            !(function (e) {
                              var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : {};
                              void 0 === t.duration && (t.duration = D);
                              var n = 0;
                              q({
                                duration: t.duration,
                                delta: function (e) {
                                  return (e = this.progress), I(e);
                                },
                                complete: t.complete,
                                step: function (t) {
                                  e.style.opacity = n + t;
                                },
                              });
                            })(o, { duration: 50 }),
                              o.classList.add(t.config.classes.active);
                          },
                        })
                      : i.classList.remove(t.config.classes.active);
                  }),
                    t.config.animation.gallery ||
                      n[e].classList.add(t.config.classes.active);
                },
              },
              {
                key: "prepareForAnimation",
                value: function () {
                  var e = this,
                    t = e.items,
                    n = !1;
                  if (
                    e.config.animation.content &&
                    (t.forEach(function (t, i) {
                      var o = t.querySelector(e.config.selectors.content);
                      t.classList.contains(e.config.classes.active)
                        ? (e.config.opt.startClosed ||
                            (o.style.display = e.config.classes.display),
                          (n = !0))
                        : (o.style.display = "none");
                    }),
                    !n && !e.config.opt.startClosed)
                  ) {
                    var i = t[0].querySelector(e.config.selectors.content);
                    t[0].classList.add(e.config.classes.active),
                      (i.style.display = e.config.classes.display);
                  }
                },
              },
              {
                key: "removeStyles",
                value: function () {
                  var e = this,
                    t = e.items;
                  e.config.animation.content &&
                    t.forEach(function (t, n) {
                      t.querySelector(e.config.selectors.content).style.display =
                        "";
                    });
                },
              },
              {
                key: "parseOptions",
                value: function () {
                  var e = this,
                    t =
                      s(e.selector.getAttribute(e.config.attr.close)) ||
                      e.config.opt.close;
                  t && (e.config.opt.close = !!t),
                    s(e.selector.getAttribute(e.config.attr.open)) ||
                    e.config.opt.expand
                      ? ((e.config.opt.expand = !0), (e.config.opt.close = !0))
                      : (e.config.opt.expand = !1),
                    (s(e.selector.getAttribute(e.config.attr.startClosed)) ||
                      e.config.opt.startClosed) &&
                      ((e.config.opt.startClosed = !0),
                      (e.config.opt.close = !0)),
                    (s(e.selector.getAttribute(e.config.attr.gallery)) ||
                      e.config.opt.hasGallery) &&
                      ((e.config.opt.hasGallery = !0),
                      (e.config.opt.expand = !1),
                      (e.config.opt.close = !1),
                      (e.config.opt.startClosed = !1));
                  var n = e.selector.getAttribute(e.config.attr.animationContent);
                  n && (e.config.animation.content = "js" === n);
                  var i = e.selector.getAttribute(e.config.attr.animationGallery);
                  i && (e.config.animation.gallery = "js" === i);
                  var o =
                    e.selector.getAttribute(e.config.attr.display) ||
                    e.config.classes.display;
                  (e.config.classes.display = "flex" === o ? "flex" : "block"),
                    (s(e.selector.getAttribute(e.config.attr.scrollToView)) ||
                      e.config.opt.scrollToView) &&
                      ((e.config.opt.scrollToView = !0),
                      (e.config.opt.expand = !1)),
                    e.emit("optionsParsed");
                },
              },
              {
                key: "isValidId",
                value: function (e) {
                  return /^[^\s]+$/.test(e);
                },
              },
              {
                key: "getAriaName",
                value: function () {
                  var e = this.wrapper.slice(1);
                  this.isValidId(e)
                    ? (this.config.aria.name = e)
                    : (this.config.aria.name = !1);
                },
              },
              {
                key: "addAria",
                value: function () {
                  var e = this;
                  e.trigger.forEach(function (t, n) {
                    var i,
                      o,
                      r = t.closest(e.config.selectors.item),
                      a = r.querySelector(e.config.selectors.content);
                    e.config.aria.name &&
                      ((i = ""
                        .concat(e.config.aria.name, "-")
                        .concat(e.config.aria.content, "-")
                        .concat(n)),
                      (o = ""
                        .concat(e.config.aria.name, "-")
                        .concat(e.config.aria.button, "-")
                        .concat(n))),
                      r.classList.contains(e.config.classes.active)
                        ? (t.setAttribute("aria-expanded", !0),
                          a.setAttribute("aria-hidden", !1))
                        : (t.setAttribute("aria-expanded", !1),
                          a.setAttribute("aria-hidden", !0)),
                      e.config.aria.name &&
                        (t.setAttribute("aria-controls", i),
                        t.setAttribute("id", o),
                        a.setAttribute("id", i),
                        a.setAttribute("aria-labelledby", o)),
                      a.setAttribute("role", "region");
                  });
                },
              },
              {
                key: "addListenerFocus",
                value: function (e) {
                  e.target.classList.add(this.config.classes.focus);
                },
              },
              {
                key: "addListenerBlur",
                value: function (e) {
                  e.target.classList.remove(this.config.classes.focus);
                },
              },
              {
                key: "addKeyListener",
                value: function (e) {
                  var t = e.target,
                    n = e.which.toString(),
                    i = F(this.trigger),
                    o = this.config.selectors.trigger.slice(1),
                    r = e.ctrlKey && n.match(/33|34/);
                  if (t.classList.contains(o))
                    if (n.match(/38|40/) || r) {
                      var a = i.indexOf(t),
                        s = n.match(/34|40/) ? 1 : -1,
                        c = i.length;
                      i[(a + c + s) % c].focus();
                    } else if (n.match(/35|36/))
                      switch (n) {
                        case "36":
                          i[0].focus();
                          break;
                        case "35":
                          i[i.length - 1].focus();
                      }
                },
              },
              {
                key: "scrollToAccordion",
                value: function (e) {
                  var t = this.trigger[0].getBoundingClientRect(),
                    n = t.height * e,
                    i = window.pageYOffset || document.documentElement.scrollTop,
                    o = t.top + i + n - 80;
                  M({ to: o, duration: 0, easing: N });
                },
              },
            ]),
            n && H(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })(),
        Y = z,
        W = document.querySelectorAll(".js-acc-wrapper");
      function X(e) {
        return (
          (X =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          X(e)
        );
      }
      function G(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== X(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, "string");
                  if ("object" !== X(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(i.key)),
              "symbol" === X(o) ? o : String(o)),
              i
            );
        }
        var o;
      }
      var U = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.eventsListeners = {}),
              (this.currentIndex = 0),
              (this.activeNav = null),
              (this.activePanel = null);
          }
          var t, n;
          return (
            (t = e),
            (n = [
              {
                key: "bindFunctions",
                value: function () {
                  this.tabNavClick = this.tabNavClick.bind(this);
                },
              },
              {
                key: "bindTabNavEvent",
                value: function () {
                  var e = this;
                  e.items.forEach(function (t) {
                    t.addEventListener("click", e.tabNavClick, { passive: !0 });
                  });
                },
              },
              {
                key: "unbindTabNavEvent",
                value: function () {
                  var e = this;
                  e.items.forEach(function (t) {
                    t.removeEventListener("click", e.tabNavClick);
                  });
                },
              },
              {
                key: "tabNavClick",
                value: function (e) {
                  var t = this,
                    n = e.currentTarget;
                  t.activeNav = e.currentTarget;
                  var i = n
                      .closest(t.config.wrapper)
                      .querySelectorAll(t.config.selectors.nav),
                    o = t.getNavTabID(n);
                  t.clearActiveClass(i, "nav"),
                    t.setActiveClass(n, "nav"),
                    t.tabPanelChange(o);
                },
              },
              {
                key: "tabPanelChange",
                value: function (e) {
                  var t = this;
                  if (void 0 !== e) {
                    var n = "".concat(t.config.data, "-").concat(e),
                      i = document.querySelector("#".concat(n));
                    t.activePanel = i;
                    var o = i
                      .closest(t.config.wrapper)
                      .querySelectorAll(t.config.selectors.panel);
                    void 0 !== i &&
                      ((t.currentIndex = e),
                      t.clearActiveClass(o, "panel"),
                      t.setActiveClass(i, "panel"),
                      t.emit("tabsChange"));
                  }
                },
              },
              {
                key: "getNavTabID",
                value: function (e) {
                  return e.getAttribute(this.config.data);
                },
              },
              {
                key: "clearActiveClass",
                value: function (e, t) {
                  var n = this;
                  e.forEach(function (e) {
                    e.classList.remove(n.config.classes.active),
                      "panel" === t && e.setAttribute("aria-hidden", !0),
                      "nav" === t && e.setAttribute("aria-selected", !1);
                  });
                },
              },
              {
                key: "setActiveClass",
                value: function (e, t) {
                  e.classList.add(this.config.classes.active),
                    "panel" === t && e.setAttribute("aria-hidden", !1),
                    "nav" === t && e.setAttribute("aria-selected", !0);
                },
              },
              {
                key: "setFirstActive",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t = this,
                    n = t.items,
                    i = n[e],
                    o = i.closest(t.config.wrapper),
                    r = o.querySelectorAll(t.config.selectors.nav),
                    a = t.getNavTabID(i);
                  t.clearActiveClass(r, "nav"),
                    t.setActiveClass(i, "nav"),
                    t.tabPanelChange(a);
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  var n = this;
                  "function" == typeof t &&
                    e.split(" ").forEach(function (e, i) {
                      n.eventsListeners[e] || (n.eventsListeners[e] = []),
                        n.eventsListeners[e].push(t);
                    });
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  var n = this;
                  n.eventsListeners &&
                    e.split(" ").forEach(function (e) {
                      void 0 === t
                        ? (n.eventsListeners[e] = [])
                        : n.eventsListeners[e] &&
                          n.eventsListeners[e].forEach(function (i, o) {
                            i === t && n.eventsListeners[e].splice(o, 1);
                          });
                    });
                },
              },
              {
                key: "emit",
                value: function () {
                  var e,
                    t,
                    n,
                    i = this;
                  if (!i.eventsListeners) return i;
                  for (
                    var o = arguments.length, r = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    r[a] = arguments[a];
                  "string" == typeof r[0] || Array.isArray(r[0])
                    ? ((e = r[0]), (t = r.slice(1, r.length)), (n = i))
                    : ((e = r[0].events),
                      (t = r[0].data),
                      (n = r[0].context || i)),
                    t.unshift(n);
                  var s = Array.isArray(e) ? e : e.split(" ");
                  s.forEach(function (e) {
                    i.eventsListeners &&
                      i.eventsListeners[e] &&
                      i.eventsListeners[e].forEach(function (e) {
                        e.apply(n, t);
                      });
                  });
                },
              },
            ]),
            n && G(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })(),
        $ = U;
      function K(e) {
        return (
          (K =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          K(e)
        );
      }
      function J(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== K(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, "string");
                  if ("object" !== K(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(i.key)),
              "symbol" === K(o) ? o : String(o)),
              i
            );
        }
        var o;
      }
      function Q() {
        return (
          (Q =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var i = Z(e, t);
                  if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? e : n)
                      : o.value;
                  }
                }),
          Q.apply(this, arguments)
        );
      }
      function Z(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ne(e));
  
        );
        return e;
      }
      function ee(e, t) {
        return (
          (ee = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          ee(e, t)
        );
      }
      function te(e, t) {
        if (t && ("object" === K(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function ne(e) {
        return (
          (ne = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ne(e)
        );
      }
      var ie = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && ee(e, t);
          })(s, e);
          var t,
            n,
            i,
            r,
            a =
              ((i = s),
              (r = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = ne(i);
                if (r) {
                  var n = ne(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return te(this, e);
              });
          function s(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              ((t = a.call(this)).defaults = {
                wrapper: ".js-tabs-wrapper",
                selectors: { nav: ".js-tabs-nav-item", panel: ".js-tabs-panel" },
                classes: { active: "is-active" },
                data: "data-tab",
              }),
              (t.config = o(t.defaults, e)),
              (t.selector = ""
                .concat(t.config.wrapper, " ")
                .concat(t.config.selectors.nav)),
              (t.items = document.querySelectorAll(t.selector)),
              t.init(),
              t
            );
          }
          return (
            (t = s),
            (n = [
              {
                key: "init",
                value: function () {
                  Q(ne(s.prototype), "bindFunctions", this).call(this),
                    Q(ne(s.prototype), "bindTabNavEvent", this).call(this);
                },
              },
            ]) && J(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            s
          );
        })($),
        oe = ie;
      function re(e) {
        return (
          (re =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          re(e)
        );
      }
      function ae(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== re(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, "string");
                  if ("object" !== re(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(i.key)),
              "symbol" === re(o) ? o : String(o)),
              i
            );
        }
        var o;
      }
      var se = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.tabaccID = "#js-tab-acc"),
              (this.tabaccSelector = ".js-tabs-to-acc-wrapper"),
              (this.tabaccItems = document.querySelectorAll(this.tabaccSelector)),
              (this.tabOptions = {
                wrapper: ".js-tabs-wrapper",
                selectors: { nav: ".js-tabs-nav-item", panel: ".js-tabs-panel" },
              }),
              (this.accordionOptions = {
                selectors: {
                  item: ".js-tabs-panel",
                  trigger: ".js-tabs-label",
                  content: ".js-ta-content",
                },
                opt: { close: !0, expand: !0 },
                classes: { display: "flex" },
                animation: { content: !0 },
              }),
              (this.isMobile = !1),
              (this.isDesktop = !1),
              this.accordionInstance,
              this.tabInstance,
              void 0 !== t && (this.tabaccID = t),
              this.init();
          }
          var n, i;
          return (
            (n = e),
            (i = [
              {
                key: "init",
                value: function () {
                  var e = this;
                  window.innerWidth < 1025
                    ? (this.isMobile = !0)
                    : (this.isDesktop = !0),
                    e.isMobile && e.buildAccordion(),
                    e.isDesktop && e.buildTab(),
                    window.addEventListener("resize", function () {
                      e.throttleScroll();
                    }),
                    (this.throttleScroll = t(function () {
                      e.buildTabAccordion();
                    }, 150)),
                    e.buildTabAccordion();
                },
              },
              {
                key: "buildTabAccordion",
                value: function () {
                  var e = this;
                  window.innerWidth < 1025
                    ? e.isMobile ||
                      (void 0 !== e.tabInstance &&
                        (e.tabInstance.unbindTabNavEvent(),
                        (e.tabInstance = void 0)),
                      e.buildAccordion(),
                      (e.isDesktop = !1),
                      (e.isMobile = !0))
                    : e.isDesktop ||
                      (void 0 !== e.accordionInstance &&
                        (e.accordionInstance.accordionUnbindEvents(),
                        (e.accordionInstance = void 0)),
                      e.buildTab(),
                      (e.isMobile = !1),
                      (e.isDesktop = !0));
                },
              },
              {
                key: "buildAccordion",
                value: function () {
                  this.accordionInstance = new Y(
                    this.tabaccID,
                    this.accordionOptions
                  );
                },
              },
              {
                key: "buildTab",
                value: function () {
                  (this.tabOptions.wrapper = this.tabaccID),
                    (this.tabInstance = new oe(this.tabOptions)),
                    this.tabInstance.setFirstActive();
                },
              },
            ]) && ae(n.prototype, i),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e
          );
        })(),
        ce = document.querySelectorAll(".js-tabs-to-acc-wrapper"),
        le = n(311);
      var ue = n(311),
        de = n(311),
        fe = mt();
      document.addEventListener(
        "wpcf7submit",
        function (e) {
          var t = fe.whitepaper_form;
          t &&
            +t == e.detail.contactFormId &&
            "validation_failed" !== e.detail.apiResponse.status &&
            "mail_failed" !== e.detail.apiResponse.status &&
            (e.target.closest(".js-download-form").classList.add("sent"),
            (function (e, t, n) {
              var i = new Date();
              i.setTime(i.getTime() + 2592e6);
              var o = "expires=".concat(i.toUTCString());
              document.cookie = ""
                .concat("ds-popup-done", "=")
                .concat("true", ";")
                .concat(o, ";");
            })());
        },
        !1
      );
      var pe = n(311),
        ve = n(311),
        me = n(311);
      var be = n(311);
      var he = n(311);
      var ye = n(311);
      var ge = n(311),
        we = mt();
      function Se(e) {
        for (
          var t = "".concat(e, "="),
            n = decodeURIComponent(document.cookie).split(";"),
            i = 0;
          i < n.length;
          i++
        ) {
          for (var o = n[i]; " " == o.charAt(0); ) o = o.substring(1);
          if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
        }
        return "";
      }
      var je = n(311),
        Le = n(311),
        ke = n(311),
        Ee = n(311),
        Ae = n(311);
      function Te(e) {
        return (
          (Te =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Te(e)
        );
      }
      function Ce(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== Te(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, "string");
                  if ("object" !== Te(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(i.key)),
              "symbol" === Te(o) ? o : String(o)),
              i
            );
        }
        var o;
      }
      var Pe = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.config = {
              selector: ".js-tabs-panel",
              navigation: ".js-tabs-nav",
              tabs: { container: ".l-tabs__panel" },
              accordion: { label: ".l-tabs__label", content: ".l-tabs__content" },
              nav: { item: ".c-tabs-nav__link" },
            }),
            (this.selector = ""
              .concat(this.config.navigation, " ")
              .concat(this.config.nav.item)),
            (this.items = document.querySelectorAll(this.selector)),
            (this.keys = {
              end: 35,
              home: 36,
              left: 37,
              up: 38,
              right: 39,
              down: 40,
              delete: 46,
              enter: 13,
              space: 32,
            }),
            (this.keysDirection = { 37: -1, 38: -1, 39: 1, 40: 1 }),
            this.init();
        }
        var t, n;
        return (
          (t = e),
          (n = [{ key: "init", value: function () {} }]) && Ce(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      function Oe(e) {
        return (
          (Oe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Oe(e)
        );
      }
      function xe(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return _e(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return _e(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? _e(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _e(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function De(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== Oe(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, "string");
                  if ("object" !== Oe(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(i.key)),
              "symbol" === Oe(o) ? o : String(o)),
              i
            );
        }
        var o;
      }
      var qe = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.scroll = {}),
            (this.selector = ".js-tabs-nav .c-tabs-nav__link"),
            (this.mobileSelector = ".js-tabs-panel .l-tabs__label"),
            (this.items = document.querySelectorAll(this.selector)),
            (this.itemsMobile = document.querySelectorAll(this.mobileSelector)),
            (this.aos = t),
            this.init();
        }
        var n, i;
        return (
          (n = e),
          (i = [
            {
              key: "init",
              value: function () {
                var e = this;
                (e.bindChangeTab = this.changeTab.bind(this)),
                  (e.bindChangeSlide = this.changeSlide.bind(this)),
                  (e.bindScrollAccordion = this.scrollAccordion.bind(this)),
                  (e.bindResizeAccordion = this.resizeAccordion.bind(this)),
                  xe(e.items).forEach(function (t) {
                    t.addEventListener("click", e.bindChangeTab);
                  }),
                  xe(e.itemsMobile).forEach(function (t) {
                    t.addEventListener("click", e.bindChangeSlide);
                  }),
                  window.addEventListener("resize", function () {
                    n();
                  });
                var n = t(function () {
                  e.bindResizeAccordion();
                }, 250);
                t(function () {
                  e.bindScrollAccordion();
                }, 150),
                  e.bindResizeAccordion();
              },
            },
            {
              key: "changeTab",
              value: function (e) {
                e.preventDefault();
                var t = e.currentTarget,
                  n = t.getAttribute("aria-controls"),
                  i =
                    (t.closest(".c-tabs-nav__item"),
                    t
                      .closest(".js-tabs-nav")
                      .querySelectorAll(".c-tabs-nav__link"));
                t.classList.contains("is-active") ||
                  (i.forEach(function (e, t) {
                    e.classList.remove("is-active"),
                      e.setAttribute("aria-selected", "false");
                  }),
                  t.classList.add("is-active"),
                  t.setAttribute("aria-selected", "true"));
                var o = document.querySelectorAll(
                  ".js-tabs-panel .l-tabs__panel"
                );
                o.forEach(function (e, t) {
                  e.classList.remove("is-active", "is-current"),
                    e.setAttribute("aria-hidden", "true");
                }),
                  o.forEach(function (e, t) {
                    e.getAttribute("id") === n &&
                      (e.classList.add("is-active", "is-current"),
                      e.setAttribute("aria-hidden", "false"));
                  });
              },
            },
            {
              key: "changeSlide",
              value: function (e) {
                e.preventDefault();
                var t = e.currentTarget.closest(".l-tabs__panel"),
                  n = t.querySelector(".l-tabs__content");
                if (
                  (document
                    .querySelectorAll(".js-tabs-panel .l-tabs__panel")
                    .forEach(function (e, n) {
                      e === t
                        ? t.classList.contains("is-current") ||
                          t.classList.add("is-current")
                        : e.classList.remove("is-current");
                    }),
                  t.classList.contains("is-active"))
                ) {
                  var i = n.offsetTop,
                    o = window.pageYOffset || document.documentElement.scrollTop,
                    r = n.offsetTop - 99;
                  o > i - 50 && M({ to: r, duration: 200, easing: R }),
                    l(n),
                    t.classList.remove("is-active"),
                    t.classList.remove("is-current");
                } else u(n, { display: "flex" }), t.classList.add("is-active");
              },
            },
            {
              key: "scrollAccordion",
              value: function () {
                window.innerWidth;
                var e = [],
                  t = document.querySelectorAll(
                    ".js-tabs-panel .l-tabs__content"
                  );
                t.forEach(function (t, n) {
                  var i, o, r, a, s, c, l;
                  t.closest(".l-tabs__panel").classList.contains("is-active") &&
                    ((i = t),
                    (o = window.scrollY || window.pageYOffset),
                    (r = i.getBoundingClientRect().top + o),
                    (a = o),
                    (s = o + window.innerHeight),
                    (c = r),
                    (((l = r + i.clientHeight) >= a && l <= s) ||
                      (c <= s && c >= a)) &&
                      e.push(n));
                }),
                  e.length > 0 &&
                    t.forEach(function (t, n) {
                      var i = t.closest(".l-tabs__panel");
                      e[0] === n
                        ? i.classList.contains("is-current") ||
                          i.classList.add("is-current")
                        : i.classList.remove("is-current");
                    });
              },
            },
            {
              key: "resizeAccordion",
              value: function () {
                if (window.innerWidth > 1024) {
                  var e = document.querySelectorAll(
                      ".js-tabs-panel .l-tabs__content"
                    ),
                    t = 0;
                  e.forEach(function (e, n) {
                    var i = e.closest(".l-tabs__panel");
                    i.classList.contains("is-current") && (t = n),
                      i.classList.remove("is-active"),
                      (e.style.display = "");
                  }),
                    e.length > 0 &&
                      e[t].closest(".l-tabs__panel").classList.add("is-active");
                  var n = document.querySelectorAll(
                    ".js-tabs-nav .c-tabs-nav__link"
                  );
                  n.forEach(function (e, t) {
                    e.classList.remove("is-active");
                  }),
                    n.length > 0 && n[t].classList.add("is-active"),
                    window.removeEventListener(
                      "scroll",
                      this.bindScrollAccordion
                    );
                } else
                  window.addEventListener("scroll", this.bindScrollAccordion);
              },
            },
          ]) && De(n.prototype, i),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          e
        );
      })();
      function Ie(e) {
        return (
          (Ie =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ie(e)
        );
      }
      function Me(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== Ie(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, "string");
                  if ("object" !== Ie(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(i.key)),
              "symbol" === Ie(o) ? o : String(o)),
              i
            );
        }
        var o;
      }
      function Ne() {
        return (
          (Ne =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var i = Re(e, t);
                  if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? e : n)
                      : o.value;
                  }
                }),
          Ne.apply(this, arguments)
        );
      }
      function Re(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ve(e));
  
        );
        return e;
      }
      function Be(e, t) {
        return (
          (Be = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Be(e, t)
        );
      }
      function Fe(e, t) {
        if (t && ("object" === Ie(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function Ve(e) {
        return (
          (Ve = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Ve(e)
        );
      }
      var He = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && Be(e, t);
          })(s, e);
          var t,
            n,
            i,
            r,
            a =
              ((i = s),
              (r = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = Ve(i);
                if (r) {
                  var n = Ve(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return Fe(this, e);
              });
          function s(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              ((t = a.call(this)).defaults = {
                wrapper: ".js-tabsDrop-wrapper",
                selectors: {
                  dropdown: ".js-tabs-dropdown",
                  panel: ".js-tabs-panel",
                },
                classes: { active: "is-active" },
                data: "data-tab",
              }),
              (t.config = o(t.defaults, e)),
              (t.selectorDropdown = ""
                .concat(t.config.wrapper, " ")
                .concat(t.config.selectors.dropdown)),
              (t.itemsDropdown = document.querySelectorAll(t.selectorDropdown)),
              t.init(),
              t
            );
          }
          return (
            (t = s),
            (n = [
              {
                key: "init",
                value: function () {
                  this.bindFunctions(), this.bindTabsDropdownEvent();
                },
              },
              {
                key: "bindFunctions",
                value: function () {
                  this.tabDropdownChange = this.tabDropdownChange.bind(this);
                },
              },
              {
                key: "bindTabsDropdownEvent",
                value: function () {
                  var e = this;
                  e.itemsDropdown.forEach(function (t) {
                    t.addEventListener("change", e.tabDropdownChange);
                  });
                },
              },
              {
                key: "tabDropdownChange",
                value: function (e) {
                  for (
                    var t = e.currentTarget,
                      n = t.value,
                      i = t.options.selectedIndex,
                      o = 0;
                    o < t.options.length;
                    o += 1
                  )
                    t.options[o].removeAttribute("selected");
                  t.options[i].setAttribute("selected", "selected"),
                    Ne(Ve(s.prototype), "tabPanelChange", this).call(this, n);
                },
              },
              {
                key: "unbindTabsDropdownEvent",
                value: function () {
                  var e = this;
                  e.itemsDropdown.forEach(function (t) {
                    t.removeEventListener("change", e.tabDropdownChange);
                  });
                },
              },
            ]) && Me(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            s
          );
        })($),
        ze = He;
      function Ye(e) {
        return (
          (Ye =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ye(e)
        );
      }
      function We(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== Ye(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, "string");
                  if ("object" !== Ye(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(i.key)),
              "symbol" === Ye(o) ? o : String(o)),
              i
            );
        }
        var o;
      }
      function Xe() {
        return (
          (Xe =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var i = Ge(e, t);
                  if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, t);
                    return o.get
                      ? o.get.call(arguments.length < 3 ? e : n)
                      : o.value;
                  }
                }),
          Xe.apply(this, arguments)
        );
      }
      function Ge(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ke(e));
  
        );
        return e;
      }
      function Ue(e, t) {
        return (
          (Ue = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          Ue(e, t)
        );
      }
      function $e(e, t) {
        if (t && ("object" === Ye(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function Ke(e) {
        return (
          (Ke = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Ke(e)
        );
      }
      var Je = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && Ue(e, t);
          })(s, e);
          var t,
            n,
            i,
            r,
            a =
              ((i = s),
              (r = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = Ke(i);
                if (r) {
                  var n = Ke(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return $e(this, e);
              });
          function s(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              ((t = a.call(this)).defaults = {
                wrapper: ".js-tabsTabDrop-wrapper",
                selectors: {
                  nav: ".js-tabs-nav-item",
                  dropdown: ".js-tabs-dropdown",
                  panel: ".js-tabs-panel",
                },
                classes: { active: "is-active" },
                data: "data-tab",
              }),
              (t.config = o(t.defaults, e)),
              (t.selectorTabs = ""
                .concat(t.config.wrapper, " ")
                .concat(t.config.selectors.nav)),
              (t.selectorDropdown = ""
                .concat(t.config.wrapper, " ")
                .concat(t.config.selectors.dropdown)),
              (t.items = document.querySelectorAll(t.selectorTabs)),
              (t.itemsDropdown = document.querySelectorAll(t.selectorDropdown)),
              t.initTabsDropdown(),
              t
            );
          }
          return (
            (t = s),
            (n = [
              {
                key: "initTabsDropdown",
                value: function () {
                  this.bindFunctions(),
                    this.bindTabNavEv(),
                    this.bindTabsDropdownEvent();
                },
              },
              {
                key: "bindFunctions",
                value: function () {
                  (this.tabDropdownChange = this.tabDropdownChange.bind(this)),
                    (this.tabNavClick = this.tabNavClick.bind(this));
                },
              },
              {
                key: "bindTabsDropdownEvent",
                value: function () {
                  var e = this;
                  e.itemsDropdown.forEach(function (t) {
                    t.addEventListener("change", e.tabDropdownChange);
                  });
                },
              },
              {
                key: "bindTabNavEv",
                value: function () {
                  var e = this;
                  e.items.forEach(function (t) {
                    t.addEventListener("click", e.tabNavClick, { passive: !0 });
                  });
                },
              },
              {
                key: "tabNavClick",
                value: function (e) {
                  for (
                    var t,
                      n = this,
                      i = e.currentTarget,
                      o = Xe(Ke(s.prototype), "getNavTabID", this).call(this, i),
                      r = i
                        .closest(n.config.wrapper)
                        .querySelector(n.config.selectors.dropdown),
                      a = 0;
                    a < r.options.length;
                    a += 1
                  )
                    r.options[a].value === o && (t = a);
                  n.updateTabNav(i, t),
                    n.updateDropdown(r, t),
                    Xe(Ke(s.prototype), "tabPanelChange", this).call(this, o);
                },
              },
              {
                key: "tabDropdownChange",
                value: function (e) {
                  var t = this,
                    n = e.currentTarget,
                    i = n.options.selectedIndex,
                    o = n.value,
                    r = document.querySelector(
                      "[".concat(t.config.data, "='").concat(o, "']")
                    );
                  t.updateDropdown(n, i),
                    t.updateTabNav(r),
                    Xe(Ke(s.prototype), "tabPanelChange", this).call(this, o);
                },
              },
              {
                key: "updateDropdown",
                value: function (e, t) {
                  for (var n = e, i = t, o = 0; o < n.options.length; o += 1)
                    n.options[o].removeAttribute("selected");
                  n.options[i].setAttribute("selected", "selected"),
                    (n.options.selectedIndex = i);
                },
              },
              {
                key: "updateTabNav",
                value: function (e, t) {
                  var n = this,
                    i = e;
                  n.activeNav = e;
                  var o = i
                    .closest(n.config.wrapper)
                    .querySelectorAll(n.config.selectors.nav);
                  Xe(Ke(s.prototype), "clearActiveClass", this).call(
                    this,
                    o,
                    "nav"
                  ),
                    Xe(Ke(s.prototype), "setActiveClass", this).call(
                      this,
                      i,
                      "nav"
                    );
                },
              },
              {
                key: "unbindTabsDropEvents",
                value: function () {
                  var e = this,
                    t = e.itemsDropdown;
                  e.items.forEach(function (t) {
                    t.removeEventListener("click", e.tabNavClick);
                  }),
                    t.forEach(function (t) {
                      t.removeEventListener("change", e.tabDropdownChange);
                    });
                },
              },
            ]) && We(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            s
          );
        })($),
        Qe = Je;
      function Ze(e) {
        return (
          (Ze =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ze(e)
        );
      }
      function et(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function tt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ("object" !== Ze(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(e, "string");
                  if ("object" !== Ze(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(i.key)),
              "symbol" === Ze(o) ? o : String(o)),
              i
            );
        }
        var o;
      }
      var nt = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.defaults = {
              selector: ".js-video-init",
              wrapper: "js-video-wrap",
              buttons: {
                play: ".btn-play",
                mute: ".btn-mute",
                close: ".btn-close",
              },
              classes: {
                pause: "is-pause",
                playing: "is-playing",
                sound: "is-sound",
                mute: "is-muted",
                parentPlay: "is-video-playing",
                parentPause: "is-video-paused",
                triggerAutoplay: "js-trigger-autoplay",
              },
              controls: !1,
            }),
            (this.config = o(this.defaults, t)),
            (this.items = document.querySelectorAll(this.config.selector)),
            this.init();
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "init",
              value: function () {
                var e,
                  t = this;
                (t.bindTogglePlay = this.togglePlay.bind(this)),
                  (t.bindToggleMute = this.toggleMute.bind(this)),
                  (t.bindEndedVideo = this.endedVideo.bind(this)),
                  ((e = t.items),
                  (function (e) {
                    if (Array.isArray(e)) return et(e);
                  })(e) ||
                    (function (e) {
                      if (
                        ("undefined" != typeof Symbol &&
                          null != e[Symbol.iterator]) ||
                        null != e["@@iterator"]
                      )
                        return Array.from(e);
                    })(e) ||
                    (function (e, t) {
                      if (e) {
                        if ("string" == typeof e) return et(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return (
                          "Object" === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                          "Map" === n || "Set" === n
                            ? Array.from(e)
                            : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? et(e, t)
                            : void 0
                        );
                      }
                    })(e) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()).forEach(function (e) {
                    t.config.controls || (e.controls = !1);
                    var n = e.parentElement;
                    n.classList.add(t.config.wrapper);
                    var i = n.querySelector(t.config.buttons.play),
                      o = n.querySelector(t.config.buttons.mute);
                    i && i.addEventListener("click", t.bindTogglePlay),
                      o && o.addEventListener("click", t.bindToggleMute),
                      e.addEventListener("ended", t.bindEndedVideo, !1),
                      e.classList.contains(t.config.classes.triggerAutoplay) &&
                        t.startPlay(e);
                  });
              },
            },
            {
              key: "endedVideo",
              value: function (e) {
                var t = this,
                  n = e.currentTarget,
                  i = n.closest("." + t.config.wrapper),
                  o = i.querySelector(t.config.buttons.play);
                n.pause(),
                  (n.currentTime = 0),
                  o.classList.add(t.config.classes.pause),
                  o.classList.remove(t.config.classes.playing),
                  i.classList.remove(t.config.classes.parentPlay);
              },
            },
            {
              key: "togglePlay",
              value: function (e) {
                var t = this,
                  n = e.currentTarget,
                  i = n.closest("." + t.config.wrapper),
                  o = i.querySelector(t.config.selector);
                o.paused || o.ended
                  ? (n.classList.add(t.config.classes.playing),
                    i.classList.add(t.config.classes.parentPlay),
                    i.classList.remove(t.config.classes.parentPause),
                    n.classList.remove(t.config.classes.pause),
                    o.play())
                  : (n.classList.add(t.config.classes.pause),
                    i.classList.add(t.config.classes.parentPause),
                    i.classList.remove(t.config.classes.parentPlay),
                    n.classList.remove(t.config.classes.playing),
                    o.pause());
              },
            },
            {
              key: "toggleMute",
              value: function (e) {
                var t = this,
                  n = e.currentTarget,
                  i = n
                    .closest("." + t.config.wrapper)
                    .querySelector(t.config.selector);
                (i.muted = !i.muted),
                  i.muted
                    ? (n.classList.add(t.config.classes.mute),
                      n.classList.remove(t.config.classes.sound))
                    : (n.classList.add(t.config.classes.sound),
                      n.classList.remove(t.config.classes.mute));
              },
            },
            {
              key: "stopPlay",
              value: function (e) {
                var t = this,
                  n = e,
                  i = n.parentElement.querySelector(t.config.buttons.play);
                (n.paused && n.ended) ||
                  (i.classList.add(t.config.classes.pause),
                  i.classList.remove(t.config.classes.playing),
                  n.pause());
              },
            },
            {
              key: "startPlay",
              value: function (e) {
                var t = this,
                  n = e,
                  i = n.parentElement.querySelector(t.config.buttons.play);
                (n.paused || n.ended) &&
                  (i.classList.add(t.config.classes.playing),
                  i.classList.remove(t.config.classes.pause),
                  n.play());
              },
            },
          ]) && tt(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })();
      function it(e) {
        return (
          (it =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          it(e)
        );
      }
      function ot(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function rt(e, t, n) {
        return (
          (t = st(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function at(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, st(i.key), i);
        }
      }
      function st(e) {
        var t = (function (e, t) {
          if ("object" !== it(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, "string");
            if ("object" !== it(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" === it(t) ? t : String(t);
      }
      var ct = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.defaults = {
                start: 0,
                end: 100,
                duration: 2e3,
                delay: 10,
                once: !0,
                decimals: 0,
                legacy: !0,
                currency: !1,
                currencysymbol: !1,
                separator: !1,
                separatorsymbol: ",",
                selector: ".purecounter",
              }),
              (this.configOptions = Object.assign({}, this.defaults, t || {})),
              this.registerEventListeners();
          }
          var t, n;
          return (
            (t = e),
            (n = [
              {
                key: "registerEventListeners",
                value: function () {
                  var e = this,
                    t = document.querySelectorAll(this.configOptions.selector);
                  if (this.intersectionListenerSupported()) {
                    var n = new IntersectionObserver(
                      this.animateElements.bind(this),
                      { root: null, rootMargin: "20px", threshold: 0.5 }
                    );
                    t.forEach(function (e) {
                      n.observe(e);
                    });
                  } else
                    window.addEventListener &&
                      (this.animateLegacy(t),
                      window.addEventListener(
                        "scroll",
                        function (n) {
                          e.animateLegacy(t);
                        },
                        { passive: !0 }
                      ));
                },
              },
              {
                key: "animateLegacy",
                value: function (e) {
                  var t = this;
                  e.forEach(function (e) {
                    !0 === t.parseConfig(e).legacy &&
                      t.elementIsInView(e) &&
                      t.animateElements([e]);
                  });
                },
              },
              {
                key: "animateElements",
                value: function (e, t) {
                  var n = this;
                  e.forEach(function (e) {
                    var i = e.target || e,
                      o = n.parseConfig(i);
                    if (o.duration <= 0)
                      return (i.innerHTML = n.formatNumber(o.end, o));
                    if (
                      (!t && !n.elementIsInView(e)) ||
                      (t && e.intersectionRatio < 0.5)
                    ) {
                      var r = o.start > o.end ? o.end : o.start;
                      return (i.innerHTML = n.formatNumber(r, o));
                    }
                    setTimeout(function () {
                      return n.startCounter(i, o);
                    }, o.delay);
                  });
                },
              },
              {
                key: "startCounter",
                value: function (e, t) {
                  var n = this,
                    i = (t.end - t.start) / (t.duration / t.delay),
                    o = "inc";
                  t.start > t.end && ((o = "dec"), (i *= -1));
                  var r = this.parseValue(t.start);
                  (e.innerHTML = this.formatNumber(r, t)),
                    !0 === t.once &&
                      e.setAttribute("data-purecounter-duration", 0);
                  var a = setInterval(function () {
                    var s = n.nextNumber(r, i, o);
                    (e.innerHTML = n.formatNumber(s, t)),
                      (((r = s) >= t.end && "inc" == o) ||
                        (r <= t.end && "dec" == o)) &&
                        ((e.innerHTML = n.formatNumber(t.end, t)),
                        clearInterval(a));
                  }, t.delay);
                },
              },
              {
                key: "parseConfig",
                value: function (e) {
                  var t = this,
                    n = (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? ot(Object(n), !0).forEach(function (t) {
                              rt(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : ot(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t)
                              );
                            });
                      }
                      return e;
                    })({}, this.configOptions),
                    i = [].filter.call(e.attributes, function (e) {
                      return /^data-purecounter-/.test(e.name);
                    }),
                    o = {};
                  return (
                    i.forEach(function (e) {
                      var n = e.name
                          .replace("data-purecounter-", "")
                          .toLowerCase(),
                        i =
                          "duration" == n
                            ? parseInt(1e3 * t.parseValue(e.value))
                            : t.parseValue(e.value);
                      o[n] = i;
                    }),
                    Object.assign(n, o)
                  );
                },
              },
              {
                key: "nextNumber",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "inc";
                  return (
                    (e = this.parseValue(e)),
                    (t = this.parseValue(t)),
                    parseFloat("inc" === n ? e + t : e - t)
                  );
                },
              },
              {
                key: "convertToCurrencySystem",
                value: function (e, t) {
                  var n = t.currencysymbol || "",
                    i = t.decimals || 1;
                  return (
                    n +
                    ((e = Math.abs(Number(e))) >= 1e12
                      ? "".concat((e / 1e12).toFixed(i), " T")
                      : e >= 1e9
                      ? "".concat((e / 1e9).toFixed(i), " B")
                      : e >= 1e6
                      ? "".concat((e / 1e6).toFixed(i), " M")
                      : e >= 1e3
                      ? "".concat((e / 1e12).toFixed(i), " K")
                      : e.toFixed(i))
                  );
                },
              },
              {
                key: "applySeparator",
                value: function (e, t) {
                  return t.separator
                    ? e
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                        .replace(new RegExp(/,/gi, "gi"), t.separatorsymbol)
                    : e.replace(new RegExp(/,/gi, "gi"), "");
                },
              },
              {
                key: "formatNumber",
                value: function (e, t) {
                  var n = {
                    minimumFractionDigits: t.decimals,
                    maximumFractionDigits: t.decimals,
                  };
                  return (
                    (e = t.currency
                      ? this.convertToCurrencySystem(e, t)
                      : parseFloat(e)),
                    this.applySeparator(e.toLocaleString(void 0, n), t)
                  );
                },
              },
              {
                key: "parseValue",
                value: function (e) {
                  return /^[0-9]+\.[0-9]+$/.test(e)
                    ? parseFloat(e)
                    : /^[0-9]+$/.test(e)
                    ? parseInt(e)
                    : /^true|false/i.test(e)
                    ? /^true/i.test(e)
                    : e;
                },
              },
              {
                key: "elementIsInView",
                value: function (e) {
                  for (
                    var t = e.offsetTop,
                      n = e.offsetLeft,
                      i = e.offsetWidth,
                      o = e.offsetHeight;
                    e.offsetParent;
  
                  )
                    (t += (e = e.offsetParent).offsetTop), (n += e.offsetLeft);
                  return (
                    t >= window.pageYOffset &&
                    n >= window.pageXOffset &&
                    t + o <= window.pageYOffset + window.innerHeight &&
                    n + i <= window.pageXOffset + window.innerWidth
                  );
                },
              },
              {
                key: "intersectionListenerSupported",
                value: function () {
                  return (
                    "IntersectionObserver" in window &&
                    "IntersectionObserverEntry" in window &&
                    "intersectionRatio" in
                      window.IntersectionObserverEntry.prototype
                  );
                },
              },
            ]),
            n && at(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })(),
        lt = ct,
        ut = n(311),
        dt = n(311),
        ft = n(364),
        pt = n.n(ft),
        vt = n(311);
      function mt() {
        return dsAjax;
      }
      document.addEventListener("DOMContentLoaded", function () {
        var e,
          n,
          i,
          o,
          r,
          a,
          c,
          d,
          f,
          p,
          b,
          y,
          g,
          L,
          k,
          D,
          q,
          I,
          M,
          N,
          R,
          B,
          F,
          V,
          H,
          z,
          X,
          G,
          U,
          $;
        !(function () {
          h();
          var e = t(function () {
            h();
          }, 300);
          window.addEventListener("resize", function () {
            e();
          });
        })(),
          (function (e, n) {
            var i = document.querySelector(e),
              o = parseInt(2),
              r = t(function () {
                window.pageYOffset > 10 + o
                  ? i.classList.add(n)
                  : window.pageYOffset < 10 - o && i.classList.remove(n);
              }, 30);
            window.addEventListener("scroll", function () {
              r();
            }),
              window.pageYOffset > 10 + o && i.classList.add(n);
          })(".site-header", "is-sticky"),
          (function () {
            var e = document.querySelector('[data-js="search-target"]');
            if (e) {
              var t = e.querySelector(".search-submit"),
                n = function () {
                  !(function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "is-hidden",
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : "is-shown";
                    e.classList.add(t), e.classList.remove(n);
                  })(e);
                };
              document.addEventListener(
                "click",
                function (i) {
                  i.target.matches('[data-js="search-trigger"]') &&
                    e.classList.contains("is-shown") &&
                    t.click(),
                    i.target.matches('[data-js="search-trigger"]') &&
                      (i.preventDefault(),
                      (function (e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : "is-hidden",
                          n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : "is-shown";
                        e.classList.remove(t), e.classList.add(n);
                      })(e),
                      t.focus()),
                    i.target.matches('[data-js="search-close"]') &&
                      (i.preventDefault(), n());
                },
                !1
              ),
                document.addEventListener("keydown", function (e) {
                  document.body.classList.contains("overflow-hidden") &&
                    (("Escape" !== e.key && 27 !== e.keyCode) || n());
                });
            }
          })(),
          (function (e, t) {
            if (document.querySelector(e)) {
              var n = document.querySelector(e),
                i = document.querySelector("body"),
                o = document.querySelector(".js-dropdown-menu-holder"),
                r = window.innerWidth;
              if (
                (n.addEventListener("click", function (e) {
                  e.preventDefault(),
                    r < 1025 &&
                      (o.querySelector(".sub-menu").style.display = "block"),
                    "false" === n.getAttribute("aria-expanded")
                      ? (n.classList.add("is-active"),
                        i.classList.add("nav-active"),
                        n.setAttribute("aria-expanded", "true"))
                      : (n.classList.remove("is-active"),
                        i.classList.remove("nav-active"),
                        n.setAttribute("aria-expanded", "false"));
                }),
                document.querySelector(t))
              ) {
                var a = document.querySelector(t),
                  s = document.querySelector(".js-dropdown-menu-holder");
                a.addEventListener("click", function () {
                  console.log(a),
                    a.classList.toggle("nav-active"),
                    a.setAttribute("aria-expanded", "true"),
                    s.classList.toggle("nav-active");
                });
              }
            }
          })(".js-toggleNav", ".js-dropdown-toggle"),
          window.matchMedia("(max-width: 1024px)").matches &&
            ((n = document.querySelector(".footer-nav")) &&
              (e = n.querySelectorAll(".footer-nav .menu-item-has-children")),
            e &&
              e.forEach(function (t, n) {
                var i = t.querySelector(".sub-menu");
                t.setAttribute("aria-expanded", "false"),
                  l(i),
                  t.firstElementChild.addEventListener("click", function (n) {
                    n.preventDefault(),
                      n.target.tagName.toLowerCase(),
                      t.classList.contains("is-toggled")
                        ? (l(i),
                          t.classList.remove("is-toggled"),
                          t.setAttribute("aria-expanded", "false"))
                        : (e.forEach(function (e, t) {
                            var n = e.querySelector(".sub-menu");
                            e.classList.contains("is-toggled") &&
                              (l(n),
                              e.classList.remove("is-toggled"),
                              e.setAttribute("aria-expanded", "false"));
                          }),
                          t.classList.add("is-toggled"),
                          t.setAttribute("aria-expanded", "true"),
                          u(i));
                  });
              })),
          new lt({ selector: ".js-counter-number" }),
          new Pe(),
          (i = document.querySelector(".js-gridder")),
          (o = document.querySelectorAll(".js-gridder")),
          i &&
            (ut().gridderExpander
              ? dt(function () {
                  o.forEach(function (e, t) {
                    dt(e).gridderExpander({
                      scroll: !0,
                      scrollOffset: 80,
                      scrollTo: "panel",
                      animationSpeed: 400,
                      animationEasing: "easeInOutExpo",
                      showNav: !0,
                      nextText: "",
                      prevText: "",
                      closeText: "Close",
                      onStart: function () {},
                      onContent: function () {},
                      onClosed: function () {},
                    });
                  });
                })
              : console.log("DSMP Error: Please include gridder library")),
          new nt(),
          (N = []),
          A.forEach(function (e, t) {
            var n = "js-slider-dsbls-" + t,
              i = "js-slider-dsbls-m-" + t;
            e.setAttribute("id", n),
              T[t].setAttribute("id", i),
              (N[t] = new E(n));
          }),
          (G = []),
          (U = []),
          ($ = window.innerWidth),
          O.forEach(function (e, t) {
            G[t] = { pagination: { el: ".m-slider__pagination", clickable: !0 } };
            var n = "".concat(P, "-").concat(t);
            e.setAttribute("id", n),
              (G[t] = v(e, G[t])),
              (G[t] = m(e, G[t])),
              (G[t] = C(e, G[t])),
              (G[t] = S(e, G[t], P, t));
            var i = e.getAttribute("data-no-mobile");
            (U[t] = new Swiper(e, G[t])), i && $ < 768 && U[t].destroy();
          }),
          (B = []),
          (F = []),
          (V = []),
          (H = []),
          (z = []),
          (X = []),
          _.forEach(function (e, t) {
            (B[t] = {
              centeredSlides: !0,
              pagination: { el: ".m-slider__pagination", clickable: !0 },
            }),
              (V[t] = {
                item: ".js-nav__item",
                active: "is-active",
                trigger: "click",
              }),
              e.classList.contains("js-before-after")
                ? (X[t] = {
                    slidesPerView: "auto",
                    spaceBetween: 10,
                    centeredSlides: !0,
                    loop: !0,
                    slideToClickedSlide: !0,
                  })
                : (X[t] = {
                    spaceBetween: 10,
                    slidesPerView: "auto",
                    freeMode: !0,
                    threshold: 10,
                    watchSlidesProgress: !0,
                    wrapperClass: "c-slider-nav",
                  });
            var n = s(e.getAttribute("data-slider-thumbs")),
              i = "".concat(x, "-").concat(t);
            e.setAttribute("id", i);
            var o,
              r,
              a,
              c = e.closest(".m-slider");
            if ((c && (R = c.querySelector(".l-slider-nav")), R))
              if (n) {
                var l = "js-slider-advanced-thumbs-" + t;
                R.setAttribute("id", l), (o = "#" + l);
              } else {
                var u = "js-slider-advanced-nav-" + t;
                R.setAttribute("id", u), (V[t].element = "#" + u);
              }
            if (
              ((B[t] = j(e, B[t])),
              (B[t] = v(e, B[t])),
              (B[t] = m(e, B[t])),
              (B[t] = C(e, B[t])),
              (B[t] =
                ((r = e),
                (a = B[t]),
                r
                  ? ("true" ===
                      r.getAttribute("data-slider-slide-to-clicked-slide") &&
                      (a.slideToClicedSlide = !0),
                    a)
                  : a)),
              (B[t] = S(e, B[t], x, t)),
              n &&
                ((z[t] = new Swiper(o, X[t])),
                (B[t].thumbs = {}),
                (B[t].thumbs.swiper = z[t]),
                (B[t].noSwipingSelector =
                  ".l-slider-nav, .m-slider__pagination")),
              (F[t] = new Swiper(e, B[t])),
              R && F[t].initialized)
            ) {
              H[t] = new w(F[t], V[t]);
              var d = F[t].$el[0].querySelector(".js-slider-nav-underline");
              d &&
                H[t].swiper.on("slideChange", function () {
                  d.style.transform =
                    "translate3d(" + 100 * H[t].swiper.activeIndex + "%,0,0)";
                });
            }
          }),
          (function () {
            if (document.querySelector(".js-before-after")) {
              var e = document.querySelectorAll(
                  ".s-before-after .c-slider-nav__thumb"
                ).length,
                t = new Swiper(".ba-slider", {
                  slidesPerView: 1,
                  centeredSlides: !0,
                  loop: !0,
                  loopedSlides: e,
                  navigation: {
                    nextEl: ".ba-slider-next",
                    prevEl: ".ba-slider-prev",
                  },
                }),
                n = new Swiper(".ba-thumbs", {
                  slidesPerView: "auto",
                  spaceBetween: 10,
                  centeredSlides: !0,
                  loop: !0,
                  threshold: 20,
                  slideToClickedSlide: !0,
                });
              (t.controller.control = n), (n.controller.control = t);
            }
          })(),
          (M = []),
          W.forEach(function (e, t) {
            var n = "".concat("js-acc", "-").concat(t),
              i = "#".concat(n);
            e.setAttribute("id", n), (M[t] = new Y(i));
          }),
          (function (e) {
            e("#load_more_posts").on("click", function (t) {
              t.preventDefault();
              var n = e("#load_more_posts"),
                i = n.attr("data-paged"),
                o = n.attr("data-total"),
                r = n.attr("data-author"),
                a = e("#posts_wrap"),
                s =
                  (e(".latest-cat.lower .more-wrap"),
                  {
                    action: "more_blog_posts",
                    nonce: ds.nonce,
                    currentPage: i,
                    author: r,
                  });
              e.ajax({
                url: ds.ajax_url,
                data: s,
                type: "POST",
                beforeSend: function (e) {
                  n.addClass("loading");
                },
                success: function (t) {
                  var i;
                  t
                    ? (e(a).append(t.posts),
                      setTimeout(
                        ((i = e(".l-latest-cat-item.loaded:not(done)")),
                        void e(i).each(function (t) {
                          var n = e(this);
                          setTimeout(function () {
                            n.addClass("done");
                          }, 110 * t);
                        })),
                        110
                      ),
                      n.attr("data-paged", t.paged),
                      n.removeClass("loading"),
                      t.paged == o && n.hide())
                    : n.hide();
                },
              });
            });
          })(be),
          (function (e) {
            var t,
              n = document.querySelectorAll(e);
            n.length > 0 &&
              (n.forEach(function (e) {
                le(e).is(":hidden") && (e.autoplay = !e.autoplay);
              }),
              n.forEach(function (e) {
                var t = le(e)
                    .parents(".js-video-section")
                    .find(".js-hero-video-cont"),
                  n = t.get(0),
                  i = t.find(".btn-play").get(0),
                  o = t.find(".btn-mute").get(0),
                  r = t.find(".btn-control").get(0);
                (e.controls = !1),
                  e.addEventListener(
                    "ended",
                    function () {
                      this.pause(),
                        document
                          .querySelector(".video-hidden")
                          .classList.remove("is-enabled"),
                        (e.currentTime = 0),
                        i.classList.add("is-pause"),
                        i.classList.remove("is-playing");
                    },
                    !1
                  ),
                  e.addEventListener(
                    "timeupdate",
                    function () {
                      this.currentTime >= 61 && this.pause(),
                        this.currentTime >= 58
                          ? n.querySelector(".invideo-link").classList.add("show")
                          : n
                              .querySelector(".invideo-link")
                              .classList.remove("show");
                    },
                    !1
                  ),
                  i.addEventListener("click", function () {
                    e.paused || e.ended
                      ? (i.classList.add("is-playing"),
                        i.classList.remove("is-pause"),
                        e.parentElement.classList.remove("is-ended"),
                        e.play())
                      : (i.classList.add("is-pause"),
                        i.classList.remove("is-playing"),
                        e.pause());
                  }),
                  o.addEventListener("click", function () {
                    (e.muted = !e.muted),
                      e.muted
                        ? (o.classList.add("is-muted"),
                          o.classList.remove("is-sound"))
                        : (o.classList.add("is-sound"),
                          o.classList.remove("is-muted"));
                  }),
                  r &&
                    r.addEventListener("click", function () {
                      r &&
                        ((e.controls = !e.controls),
                        e.controls
                          ? (r.classList.add("is-muted"),
                            r.classList.remove("is-sound"))
                          : (r.classList.add("is-sound"),
                            r.classList.remove("is-muted")));
                    });
              }),
              (t = ".js-play-video"),
              document.querySelectorAll(t).length > 0 &&
                document.querySelectorAll(t).forEach(function (e) {
                  e.addEventListener("click", function (t) {
                    t.stopPropagation();
                    var n = le(t.target)
                      .parents(".js-video-section")
                      .find(".js-hero-video-cont");
                    n.addClass("is-enabled"),
                      document.body.classList.add("hide-scrollbar"),
                      n.animate({ opacity: 1 }, 500),
                      n
                        .find(".videoPlayer .js-source1")
                        .prop("src", le(e).data("video-url")),
                      n
                        .find(".videoPlayer .js-source2")
                        .prop("src", le(e).data("video-url"));
                    var i = n.find(".videoPlayer").get(0);
                    i.load(), i.play();
                  });
                }),
              (function (e) {
                document.querySelectorAll(e).length > 0 &&
                  document.querySelectorAll(e).forEach(function (e) {
                    e.addEventListener("click", function (e) {
                      e.stopPropagation();
                      var t = le(e.target)
                        .parents(".js-video-section")
                        .find(".js-hero-video-cont");
                      t.removeClass("is-enabled"),
                        document.body.classList.remove("hide-scrollbar"),
                        t.animate({ opacity: 0 }, 500);
                      var n = t.find(".videoPlayer").get(0);
                      n.pause(), (n.currentTime = 0);
                    });
                  });
              })(".js-stop-video"));
          })(".videoPlayer"),
          ue(".jsOpenStudyDetails").each(function () {
            var e = ue(this),
              t = e.find(".jsStudyDetails").find(".jsCloseDetails");
            e.on("click", function (e) {
              e.stopPropagation();
            }),
              t.on("click", function (e) {
                e.stopPropagation();
                var t = ue(this).parents(".js-acc-item");
                t.hasClass("is-active") &&
                  t.find(".js-acc-button").trigger("click");
              }),
              ue(".jsSeeOurWork")
                .find(".js-tabs-nav-item")
                .on("click", function (e) {
                  e.preventDefault(),
                    ue(this)
                      .parents(".jsSeeOurWork")
                      .find(".js-acc-item.is-active")
                      .find(".js-acc-button")
                      .trigger("click");
                });
          }),
          de(".whitepaper__wrapper").length > 0 &&
            (de(".whitepaper__wrapper .whitepaper-close").on(
              "click",
              function () {
                de(".whitepaper__wrapper").fadeOut().removeClass("active");
              }
            ),
            de(".whitepaper").on("click", function (e) {
              e.stopPropagation();
            }),
            de("body").on("click", function () {
              de(".whitepaper__wrapper").hasClass("active") &&
                de(".whitepaper__wrapper").fadeOut().removeClass("active");
            })),
          document.querySelectorAll(".read-more-wrapper").forEach(function (e) {
            var t = e.querySelector(".js-read-more-toggle"),
              n = e.querySelector(".read-more-text"),
              i = (e.classList.contains("is-active"), n ? n.scrollHeight : 0);
            t.addEventListener("mouseenter", function () {
              n &&
                (pe(".read-more-wrapper").removeClass("is-active"),
                pe(".read-more-text").css({ maxHeight: "0" }),
                e.classList.add("is-active"),
                (n.style.maxHeight = "".concat(i, "px")));
            });
          }),
          (r = dsAjax),
          ve("#load_more_projects").on("click", function (e) {
            e.preventDefault();
            var t = ve("#load_more_projects"),
              n = t.attr("data-visible"),
              i = t.attr("data-total"),
              o = t.attr("data-load_more"),
              a = t.attr("data-id"),
              s = ve("#project-list"),
              c = {
                action: "more_blog_projects",
                id: a,
                visible: n,
                loadMore: o,
                projectsJson: s.data("projects"),
              };
            ve.ajax({
              url: r.admin_url,
              data: c,
              type: "POST",
              beforeSend: function (e) {
                t.addClass("loading");
              },
              success: function (e) {
                e
                  ? (ve(s).append(e.output),
                    t.attr("data-visible", e.visible),
                    t.removeClass("loading"),
                    e.visible >= i && t.hide())
                  : t.hide();
              },
            });
          }),
          (function (e) {
            var t = me(".js-other-insights"),
              n = t.data("offset"),
              i = me(".js-load-more-insights"),
              o = e.category_id,
              r = e.tag_id,
              a = me(".js-show-num-insights"),
              s = t.data("perpage"),
              c = t.data("found-posts"),
              l = 9,
              u = "loadmore-animated";
            i.on("click", function (d) {
              d.preventDefault(),
                (function () {
                  var n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    o =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 9,
                    s =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    d =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                  i.addClass("loading"),
                    me.ajax({
                      url: "".concat(e.admin_url, "?action=more_insights"),
                      method: "GET",
                      dataType: "json",
                      data: {
                        offset: n,
                        posts_per_page: o,
                        category_id: s,
                        tag_id: r,
                        sc: e.sc,
                        s: e.s,
                        filter: d,
                        ajax: !0,
                      },
                      success: function (e) {
                        me(".js-message-insights").html(null),
                          !1 !== e &&
                            ((l += e.count),
                            d && t.html(null),
                            t
                              .append(e.output)
                              .animate({ opacity: 1 }, 200, function () {
                                a.html(
                                  parseInt(a.html(), 10) + parseInt(e.count, 10),
                                  10
                                ),
                                  me(".js-found-insights").html() === a.html() &&
                                    i.hide(),
                                  me(".".concat(u)).animate({ opacity: 1 }, 200),
                                  me(".".concat(u)).each(function (e, t) {
                                    me(t).removeClass(".".concat(u));
                                    var n = me(".jsInsightsLoadedMore");
                                    me(".jsMainCont").append(n.html()),
                                      n.remove();
                                  });
                              }),
                            i.removeClass("loading"),
                            (0 === e.count || e.count < o || l >= c) &&
                              (i.hide(), t.removeClass("hidden"))),
                          (!1 !== e && !1 !== e.output) ||
                            (me(".js-showing-insights").hide(),
                            i.hide(),
                            me(".js-message-insights").html("No More Posts"));
                      },
                    });
                })((n += t.data("perpage")), s, o);
            });
          })(dsAjax),
          (function (e) {
            var t = he(".js-other-case-studies"),
              n = t.data("offset"),
              i = he(".js-load-more-case-studies"),
              o = he(".js-pagination-case-studies"),
              r = t.data("perpage"),
              a = (t.data("found-posts"), t.data("case-studies")),
              s = "loadmore-animated";
            i.on("click", function (c) {
              c.preventDefault(),
                (function () {
                  var n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 9,
                    c =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                  i.addClass("loading"),
                    he.ajax({
                      url: "".concat(e.admin_url, "?action=more_case_studies"),
                      method: "GET",
                      dataType: "json",
                      data: {
                        offset: n,
                        posts_per_page: r,
                        case_studies: a,
                        ajax: !0,
                      },
                      success: function (e) {
                        he(".js-message-case-studies").html(null),
                          !1 !== e &&
                            (e.count,
                            c && t.html(null),
                            t
                              .append(e.output)
                              .animate({ opacity: 1 }, 200, function () {
                                he(".".concat(s)).animate({ opacity: 1 }, 200),
                                  he(".".concat(s)).each(function (e, t) {
                                    he(t).removeClass(".".concat(s));
                                    var n = he(".jsCaseStudiesLoadedMore");
                                    he(".jsMainCont").append(n.html()),
                                      n.remove();
                                  });
                              }),
                            i.removeClass("loading"),
                            (0 === e.count || e.count < r) &&
                              (i.hide(), o.hide(), t.removeClass("hidden"))),
                          (!1 !== e && !1 !== e.output) ||
                            (i.hide(), o.hide(), t.removeClass("hidden"));
                      },
                    });
                })((n += t.data("perpage")), r);
            });
          })(dsAjax),
          (function (e) {
            var t = document.querySelector(e),
              n = document.querySelector(".jsSearchForm"),
              i = document.querySelector(".jsSearchProd"),
              o = document.querySelector(".jsSearchBtn"),
              r = ye(".jsAutoSearchParent");
            function a() {
              n.classList.remove("is-active"),
                t.setAttribute("aria-expanded", "false"),
                r.removeClass("active"),
                i.setAttribute("tabindex", "-1"),
                o.setAttribute("tabindex", "-1");
            }
            t &&
              (t.addEventListener("click", function (e) {
                e.preventDefault(),
                  "false" === t.getAttribute("aria-expanded")
                    ? (n.classList.add("is-active"),
                      t.setAttribute("aria-expanded", "true"),
                      i.removeAttribute("tabindex"),
                      (i.value = ""),
                      o.removeAttribute("tabindex"),
                      ye(".jsSearchProd").focus())
                    : a();
              }),
              i.addEventListener("focus", function (e) {
                i.value = "";
              })),
              document.addEventListener(
                "click",
                function (e) {
                  e.target.closest(".c-site-search") ||
                    (t && "true" === t.getAttribute("aria-expanded") && a());
                },
                !1
              );
          })(".js-searchToggle"),
          (a = we.home_popup),
          (c = we.is_front_page),
          (d = null),
          (f = null),
          ge(document).ready(function () {
            if (document.querySelector(".exitpopup")) {
              var e = function () {
                c ? (d = Se("home-popup")) : (f = Se("other-popup")),
                  ((c && !d) || (!c && !f)) &&
                    (ge(".exitpopup_bg").fadeIn(),
                    ge(".exitpopup").fadeIn(),
                    ge(".exitpopup_bg").addClass("visible"),
                    ge(".exitpopup").addClass("visible"),
                    (function (e, t, n) {
                      var i = new Date();
                      i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
                      var o = "expires=".concat(i.toUTCString());
                      document.cookie = ""
                        .concat(e, "=")
                        .concat(t, ";")
                        .concat(o, ";");
                    })(c ? "home-popup" : "other-popup", "1", 7));
              };
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )
                ? new DialogTrigger(
                    e,
                    { trigger: "scrollUp", percentUp: 10 },
                    { trigger: "scrollDown", percentDown: 50 }
                  )
                : new DialogTrigger(e, { trigger: "exitIntent" }),
                ge(".js-exit-popup__close").click(function () {
                  ge(".exit-popup").fadeOut(),
                    ge(".exitpopup_bg").fadeOut(),
                    ge(".exitpopup_bg").removeClass("visible"),
                    ge(".exitpopup").removeClass("visible");
                });
            }
            ge("body").click(function (e) {
              ge(e.target).hasClass("exitpopup_bg") &&
                (ge(".exitpopup_bg").fadeOut(),
                ge(".exit-popup").fadeOut(),
                ge(".exitpopup_bg").removeClass("visible"),
                ge(".exitpopup").removeClass("visible"));
            });
          }),
          document.addEventListener(
            "wpcf7submit",
            function (e) {
              a &&
                +a == e.detail.contactFormId &&
                "validation_failed" !== e.detail.apiResponse.status &&
                "mail_failed" !== e.detail.apiResponse.status &&
                (ge(".jsPopupForm").hide(), ge(".jsPopupThankMsg").show());
            },
            !1
          ),
          (p = document.getElementById("backToTop")) &&
            p.addEventListener("click", function () {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }),
          (I = document.getElementById("singleProgressBar")) &&
            window.addEventListener("scroll", function () {
              var e;
              (e =
                ((document.body.scrollTop || document.documentElement.scrollTop) /
                  (document.documentElement.scrollHeight -
                    document.documentElement.clientHeight)) *
                100),
                (I.style.width = e + "%");
            }),
          je("#js-toggleTrigger").click(function () {
            je("#js-toggleElement ").toggleClass("open"),
              je(this).toggleClass("is-active");
          }),
          je("#js-toggleTrigger").mouseenter(function () {
            je("#js-toggleElement ").addClass("open"),
              je(this).addClass("is-active");
          }),
          je("#js-toggleElement").mouseleave(function () {
            je(this).removeClass("open"),
              je("#js-toggleTrigger").removeClass("is-active");
          }),
          (b = document.querySelectorAll(".js-tbnav")),
          window.innerWidth > 1024 &&
            b.length > 0 &&
            b.forEach(function (e) {
              var t = e.querySelectorAll(".js-tabs-nav-item"),
                n = e.querySelector(".js-tabs-nav-underline");
              t.forEach(function (e, t) {
                e.addEventListener("click", function () {
                  !(function (e, t) {
                    e &&
                      t >= 0 &&
                      (e.style.transform = "translate3d(" + 100 * t + "%,0,0)");
                  })(n, t);
                });
              });
            }),
          (y = Le(".js-case-study-tabs")).length > 0 &&
            y.each(function (e, t) {
              var n = Le(this);
              n.find(".js-tabs-nav-item").on("click", function (e) {
                var t = Le(this),
                  i = t.attr("data-img-index"),
                  o = t.parents(".js-tab");
                if (
                  o.find(".js-img-tab[data-tab-index='".concat(i, "']")).length >
                  0
                ) {
                  var r = o
                    .find(".js-img-tab[data-tab-index='".concat(i, "']"))
                    .attr("data-src");
                  n.find(".l-tbnav-v1__img").animate(
                    { opacity: 0 },
                    200,
                    function () {
                      n.find(".js-left-img").attr("src", r),
                        n.find(".js-left-img").attr("data-src", r),
                        n.find(".l-tbnav-v1__img").animate({ opacity: 1 }, 200);
                    }
                  );
                }
              });
            }),
          (function (e, t) {
            var n = document.querySelector(e);
            if ((document.querySelector(e), n)) {
              var i = document.querySelector(".s-before-after");
              n.addEventListener("click", function (e) {
                e.preventDefault(),
                  i.classList.contains("ba-active")
                    ? (i.classList.remove("ba-active"),
                      i.scrollIntoView({ offset: { top: 250 } }))
                    : i.classList.add("ba-active");
              });
            }
          })(".js-view-more"),
          (function () {
            ke(".ba-expander .c-qz-btn").each(function () {
              ke(this).click(function () {
                !(function (e) {
                  if (e.hasClass("on"))
                    e.parent().prev().css("max-height", ""),
                      e.removeClass("on"),
                      e.parent().parent().removeClass("is-expanded"),
                      e.parent().prev().get(0).scrollIntoView();
                  else {
                    var t = e
                      .parent()
                      .prev()
                      .find(".c-image__media")
                      .outerHeight();
                    e.parent().prev().css("max-height", t),
                      e.addClass("on"),
                      e.parent().parent().addClass("is-expanded");
                  }
                })(ke(this));
              });
            });
            var e = ke(location).prop("hash").substr(1);
            ke(".ba-single .js-tabs-panel").each(function () {
              var t = ke(this),
                n = t.find(".ba-single__project"),
                i = t.attr("id"),
                o = ke(".ba-single .js-tabs-nav-item[aria-controls=" + i + "]");
              e &&
                (function (e, t) {
                  e.removeClass("is-active"),
                    e.attr("aria-hidden", "false"),
                    t.removeClass("is-active"),
                    t.attr("aria-selected", "false");
                })(t, o),
                n.each(function () {
                  var n = this,
                    r = ke(this).find(".ba-single__project-hash").attr("name");
                  e == r &&
                    (ke(this).closest(".lm-col").addClass("on"),
                    ke(this).closest(".lm-col").prevAll().addClass("on"),
                    i ==
                      ke(this)
                        .find(".c-qz-btn")
                        .closest(".js-tabs-panel")
                        .attr("id") &&
                      ((function (e, t) {
                        e.addClass("is-active"),
                          e.attr("aria-hidden", "ture"),
                          t.addClass("is-active"),
                          t.attr("aria-selected", "ture");
                      })(t, o),
                      setTimeout(function () {
                        ke(n).find(".c-qz-btn").click();
                      }, 1500),
                      setTimeout(function () {
                        ke(n).find(".c-image").css("max-height", "none");
                      }, 2100)));
                });
            }),
              ke(".lm-ba").each(function () {
                ke(this).click(function () {
                  ke(this).closest(".lm-col").next().addClass("on");
                });
              });
          })(),
          (g = document.querySelector(".popup-raq")),
          (L = document.querySelector(".popup-raq__close")),
          (k = document.querySelector("body")),
          (D = "popup"),
          (q = "closed"),
          sessionStorage.getItem(D) !== q &&
            g &&
            setTimeout(function () {
              g.classList.add("is-active"),
                k.classList.add("raq-active"),
                L.addEventListener("click", function () {
                  sessionStorage.setItem(D, q),
                    g.classList.remove("is-active"),
                    k.classList.remove("raq-active");
                });
            }, 15e3),
          Ae(".hero .projects").length &&
            setInterval(function () {
              var e = Ae(".js-auto-loop-tabs.is-active"),
                t = Ae(".js-auto-loop-tabs.first");
              e.hasClass("last") ? t.click() : e.next().click();
            }, 4e3),
          new qe(),
          new oe(),
          new ze(),
          new Qe(),
          ce.forEach(function (e, t) {
            var n = "".concat("js-tab-acc", "-").concat(t),
              i = "#".concat(n);
            e.setAttribute("id", n), new se(i);
          }),
          window.matchMedia("(min-width: 1025px)").matches &&
            (pt()({
              threshold: 0.2,
              once: !0,
              targets:
                ".in-view, .a-fade-trans, .s-text-box, .s-blog-section, .l-sign-up, .form-section__inner, .s-analysis, .s-services-custom, .services .l-dcbl, .s-team .bg-text",
            }),
            pt()({ threshold: 0, once: !1, targets: ".in-view-r" }),
            (window.onload = function () {
              for (
                var e = document.getElementsByClassName("services-media"),
                  t = function () {
                    var t = e[n].querySelector("video");
                    e[n].addEventListener("mouseover", function (e) {
                      t.play();
                    }),
                      e[n].addEventListener("mouseout", function (e) {
                        t.pause();
                      });
                  },
                  n = 0;
                n < e.length;
                n++
              )
                t();
            }),
            Ee(".footer-nav > .menu-item").each(function () {
              Ee(".footer-nav > .menu-item").hasClass("current-menu-parent")
                ? (Ee(".footer-nav > .current-menu-parent").addClass("is-hover"),
                  Ee(".footer-nav").mouseleave(function () {
                    Ee(".footer-nav > .current-menu-parent").addClass("is-hover");
                  }))
                : (Ee(".footer-nav > .menu-item:first-child").addClass(
                    "is-hover"
                  ),
                  Ee(".footer-nav").mouseleave(function () {
                    Ee(".footer-nav > .menu-item:first-child").addClass(
                      "is-hover"
                    );
                  })),
                Ee(this).mouseenter(function () {
                  Ee(this).addClass("is-hover");
                }),
                Ee(this).mouseleave(function () {
                  Ee(".footer-nav > .menu-item").removeClass("is-hover");
                });
            }));
      });
      var bt = new LazyLoad({ elements_selector: ".lazy" });
      (window.myLazyLoad = bt),
        (vt.event.special.touchstart = {
          setup: function (e, t, n) {
            this.addEventListener("touchstart", n, {
              passive: !t.includes("noPreventDefault"),
            });
          },
        }),
        (vt.event.special.touchmove = {
          setup: function (e, t, n) {
            this.addEventListener("touchmove", n, {
              passive: !t.includes("noPreventDefault"),
            });
          },
        }),
        (vt.event.special.wheel = {
          setup: function (e, t, n) {
            this.addEventListener("wheel", n, { passive: !0 });
          },
        }),
        (vt.event.special.mousewheel = {
          setup: function (e, t, n) {
            this.addEventListener("mousewheel", n, { passive: !0 });
          },
        });
    })();
  })();
  
  
  
  
  
  !(function () {
  "use strict";
  var e = {
      364: function (e) {
        function t(e, t, n) {
          return t > e ? t : n < e ? n : e;
        }
        function n(e) {
          return +(e > 0) - +(e < 0);
        }
        var i,
          o = {};
        function r(e) {
          return "-" + e[0].toLowerCase();
        }
        function a(e) {
          return o[e] || (o[e] = e.replace(/([A-Z])/g, r));
        }
        function s(e, t) {
          return e && 0 !== e.length
            ? e.nodeName
              ? [e]
              : [].slice.call(
                  e[0].nodeName
                    ? e
                    : (t || document.documentElement).querySelectorAll(e)
                )
            : [];
        }
        function c(e, t) {
          for (var n in t)
            n.indexOf("_") && e.setAttribute("data-" + a(n), t[n]);
        }
        var l = [];
        function u() {
          (i = 0),
            l.slice().forEach(function (e) {
              return e();
            }),
            d();
        }
        function d() {
          !i && l.length && (i = requestAnimationFrame(u));
        }
        function f(e, t, n, i) {
          return "function" == typeof e ? e(t, n, i) : e;
        }
        function p() {}
        e.exports = function (e) {
          var o,
            r,
            u,
            v,
            m = (e = e || {}).onChange || p,
            b = e.onHidden || p,
            h = e.onShown || p,
            y = e.onScroll || p,
            g = e.cssProps
              ? ((o = e.cssProps),
                function (e, t) {
                  for (var n in t)
                    n.indexOf("_") &&
                      (!0 === o || o[n]) &&
                      e.style.setProperty(
                        "--" + a(n),
                        ((i = t[n]), Math.round(1e4 * i) / 1e4)
                      );
                  var i;
                })
              : p,
            w = e.scrollingElement,
            S = w ? s(w)[0] : window,
            j = w ? s(w)[0] : document.documentElement,
            L = !1,
            k = {},
            E = [];
          function A() {
            E = s(e.targets || "[data-scroll]", s(e.scope || j)[0]).map(
              function (e) {
                return { element: e };
              }
            );
          }
          function T() {
            var o = j.clientWidth,
              a = j.clientHeight,
              s = n(-r + (r = j.scrollLeft || window.pageXOffset)),
              c = n(-u + (u = j.scrollTop || window.pageYOffset)),
              p = j.scrollLeft / (j.scrollWidth - o || 1),
              m = j.scrollTop / (j.scrollHeight - a || 1);
            (L =
              L ||
              k.scrollDirX !== s ||
              k.scrollDirY !== c ||
              k.scrollPercentX !== p ||
              k.scrollPercentY !== m),
              (k.scrollDirX = s),
              (k.scrollDirY = c),
              (k.scrollPercentX = p),
              (k.scrollPercentY = m);
            for (var b, h = !1, y = 0; y < E.length; y++) {
              var g = E[y],
                w = g.element,
                A = w,
                T = 0,
                P = 0;
              do {
                (T += A.offsetLeft), (P += A.offsetTop), (A = A.offsetParent);
              } while (A && A !== S);
              var O,
                x = w.clientHeight || w.offsetHeight || 0,
                _ = w.clientWidth || w.offsetWidth || 0,
                D = (t(T + _, r, r + o) - t(T, r, r + o)) / _,
                q = (t(P + x, u, u + a) - t(P, u, u + a)) / x,
                I = 1 === D ? 0 : n(T - r),
                M = 1 === q ? 0 : n(P - u),
                N = t((r - (_ / 2 + T - o / 2)) / (o / 2), -1, 1),
                R = t((u - (x / 2 + P - a / 2)) / (a / 2), -1, 1);
              O = e.offset
                ? f(e.offset, w, g, j) <= u
                  ? 1
                  : 0
                : (f(e.threshold, w, g, j) || 0) < D * q
                ? 1
                : 0;
              var B = g.visible !== O;
              (g._changed ||
                B ||
                g.visibleX !== D ||
                g.visibleY !== q ||
                g.index !== y ||
                g.elementHeight !== x ||
                g.elementWidth !== _ ||
                g.offsetX !== T ||
                g.offsetY !== P ||
                g.intersectX != g.intersectX ||
                g.intersectY != g.intersectY ||
                g.viewportX !== N ||
                g.viewportY !== R) &&
                ((h = !0),
                (g._changed = !0),
                (g._visibleChanged = B),
                (g.visible = O),
                (g.elementHeight = x),
                (g.elementWidth = _),
                (g.index = y),
                (g.offsetX = T),
                (g.offsetY = P),
                (g.visibleX = D),
                (g.visibleY = q),
                (g.intersectX = I),
                (g.intersectY = M),
                (g.viewportX = N),
                (g.viewportY = R),
                (g.visible = O));
            }
            v ||
              (!L && !h) ||
              ((b = C),
              l.push(b),
              d(),
              (v = function () {
                !(l = l.filter(function (e) {
                  return e !== b;
                })).length &&
                  i &&
                  (cancelAnimationFrame(i), (i = 0));
              }));
          }
          function C() {
            P(),
              L &&
                ((L = !1),
                c(j, { scrollDirX: k.scrollDirX, scrollDirY: k.scrollDirY }),
                g(j, k),
                y(j, k, E));
            for (var t = E.length - 1; t > -1; t--) {
              var n = E[t],
                i = n.element,
                o = n.visible,
                r = i.hasAttribute("scrollout-once") || !1;
              n._changed && ((n._changed = !1), g(i, n)),
                n._visibleChanged &&
                  (c(i, { scroll: o ? "in" : "out" }),
                  m(i, n, j),
                  (o ? h : b)(i, n, j)),
                o && (e.once || r) && E.splice(t, 1);
            }
          }
          function P() {
            v && (v(), (v = void 0));
          }
          A(), T(), C();
          var O = 0,
            x = function () {
              O =
                O ||
                setTimeout(function () {
                  (O = 0), T();
                }, 0);
            };
          return (
            window.addEventListener("resize", x),
            S.addEventListener("scroll", x),
            {
              index: A,
              update: T,
              teardown: function () {
                P(),
                  window.removeEventListener("resize", x),
                  S.removeEventListener("scroll", x);
              },
            }
          );
        };
      },
      311: function (e) {
        e.exports = jQuery;
      },
    },
    t = {};
  function n(i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var r = (t[i] = { exports: {} });
    return e[i](r, r.exports, n), r.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    });
  var i = {};
  !(function () {
    n.d(i, {
      B: function () {
        return mt;
      },
    });
    var e = void 0,
      t = function (t, n, i) {
        var o;
        return function () {
          for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++)
            a[s] = arguments[s];
          var c = t.bind.apply(t, [e].concat(a));
          o ||
            (i && !o && c(),
            (o = setTimeout(function () {
              i || c(), (o = null);
            }, n)));
        };
      };
    var o = function e(t, n) {
        for (var i in n)
          n[i] && n[i].constructor && n[i].constructor === Object
            ? ((t[i] = t[i] || {}), e(t[i], n[i]))
            : (t[i] = n[i]);
        return t;
      },
      r = function (e, t) {
        var n = {};
        for (var i in e) n[i] = t[i] || e[i];
        return n;
      },
      a = function (e) {
        return Number.isInteger
          ? Number.isInteger(e)
          : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
      },
      s = function (e) {
        if (null == e) return !1;
        if ("boolean" == typeof e) return !0 === e;
        if ("string" == typeof e) {
          if ("" == e) return !1;
          if (
            "true" == (e = e.replace(/^\s+|\s+$/g, "")).toLowerCase() ||
            "yes" == e.toLowerCase()
          )
            return !0;
          e = (e = e.replace(/,/g, ".")).replace(/^\s*\-\s*/g, "-");
        }
        return !isNaN(e) && 0 != parseFloat(e);
      },
      c = {
        duration: 250,
        easing: function (e, t, n, i) {
          return -n * (e /= i) * (e - 2) + t;
        },
        display: "block",
      },
      l = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        a(t) && (t = { duration: t });
        var n = r(c, t),
          i = n.display;
        (n.direction = 2),
          (n.to = 0),
          (n.startingHeight = e.scrollHeight),
          (n.distanceHeight = -n.startingHeight),
          f(e, i),
          window.requestAnimationFrame(function (t) {
            return d(e, n, t);
          });
      },
      u = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        a(t) && (t = { duration: t }), (e.style.height = "0px");
        var n = r(c, t),
          i = n.display;
        f(e, i),
          (n.direction = 1),
          (n.to = e.scrollHeight),
          (n.startingHeight = 0),
          (n.distanceHeight = n.to),
          window.requestAnimationFrame(function (t) {
            return d(e, n, t);
          });
      },
      d = function e(t, n, i) {
        n.startTime || (n.startTime = i);
        var o = i - n.startTime,
          r = o < n.duration,
          a = n.easing(o, n.startingHeight, n.distanceHeight, n.duration);
        r
          ? ((t.style.height = "".concat(a.toFixed(2), "px")),
            window.requestAnimationFrame(function (i) {
              return e(t, n, i);
            }))
          : (2 === n.direction && (t.style.display = "none"),
            1 === n.direction &&
              (t.style.display = "flex" === n.display ? "flex" : "block"),
            p(t));
      },
      f = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "block";
        (e.style.display = "flex" === t ? "flex" : "block"),
          (e.style.overflow = "hidden"),
          (e.style.marginTop = "0"),
          (e.style.marginBottom = "0"),
          (e.style.paddingTop = "0"),
          (e.style.paddingBottom = "0");
      },
      p = function (e) {
        (e.style.height = null),
          (e.style.overflow = null),
          (e.style.marginTop = null),
          (e.style.marginBottom = null),
          (e.style.paddingTop = null),
          (e.style.paddingBottom = null);
      },
      v = function (e, t) {
        if (!e) return t;
        var n = e.getAttribute("data-slider-autoplay"),
          i = e.getAttribute("data-slider-autoplay-delay");
        return (
          "true" === n &&
            ((t.autoplay = {}),
            (t.autoplay.disableOnInteraction = !1),
            (t.autoplay.delay = i ? parseInt(i) : 3e3)),
          t
        );
      },
      m = function (e, t) {
        return e
          ? ((t.preloadImages = !1),
            (t.lazy = {}),
            (t.lazy.loadPrevNext = !0),
            (t.loadOnTransitionStart = !0),
            t)
          : t;
      },
      b = function () {
        return (
          !(
            "undefined" == typeof window ||
            !(
              "ontouchstart" in window ||
              (window.DocumentTouch &&
                "undefined" != typeof document &&
                document instanceof window.DocumentTouch)
            )
          ) ||
          !(
            "undefined" == typeof navigator ||
            (!navigator.maxTouchPoints && !navigator.msMaxTouchPoints)
          )
        );
      },
      h = function () {
        var e = b(),
          t = document.getElementsByTagName("html")[0];
        e
          ? (t.classList.remove("no-touch-device"),
            t.classList.add("touch-device"))
          : (t.classList.remove("touch-device"),
            t.classList.add("no-touch-device"));
      };
    function y(e) {
      return (
        (y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        y(e)
      );
    }
    function g(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(
            e,
            (void 0,
            (o = (function (e, t) {
              if ("object" !== y(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, "string");
                if ("object" !== y(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(i.key)),
            "symbol" === y(o) ? o : String(o)),
            i
          );
      }
      var o;
    }
    var w = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.defaults = {
              element: ".l-nav",
              item: ".c-nav__item",
              active: "is-active",
              trigger: "click",
            }),
            (this.isTouch = !1),
            this.isTouchDevice(),
            t.initialized
              ? ((this.swiper = t),
                (this.config = Object.assign({}, this.defaults, n || {})),
                (this.selector = ""
                  .concat(this.config.element, " ")
                  .concat(this.config.item)),
                (this.items = document.querySelectorAll(this.selector)),
                (this.tabClicked = this.tabClick.bind(this)),
                this.init())
              : console.log("swiper not initialized");
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "init",
              value: function () {
                this.swiperSlideChange(), this.bindTabs();
              },
            },
            {
              key: "bindTabs",
              value: function () {
                var e = this;
                e.items.forEach(function (t) {
                  t.addEventListener(e.config.trigger, e.tabClicked, {
                    passive: !0,
                  }),
                    e.isTouch &&
                      "mouseover" === e.config.trigger &&
                      t.addEventListener("touchstart", e.tabClicked, {
                        passive: !0,
                      });
                });
              },
            },
            {
              key: "unbindTabs",
              value: function () {
                var e = this;
                e.items.forEach(function (t) {
                  t.removeEventListener(e.config.trigger, e.tabClicked),
                    e.isTouch &&
                      "mouseover" === e.config.trigger &&
                      t.removeEventListener("touchstart", e.tabClicked);
                });
              },
            },
            {
              key: "tabClick",
              value: function (e) {
                var t,
                  n = this,
                  i = e.currentTarget;
                n.items.forEach(function (e, o) {
                  i === e && (t = o), e.classList.remove(n.config.active);
                }),
                  i.classList.add(n.config.active),
                  n.swiper.slideTo(t);
              },
            },
            {
              key: "tabChange",
              value: function (e) {
                var t = this,
                  n = t.items;
                n.forEach(function (e) {
                  e.classList.remove(t.config.active);
                }),
                  n.forEach(function (n, i) {
                    e === i && n.classList.add(t.config.active);
                  });
              },
            },
            {
              key: "isTouchDevice",
              value: function () {
                b() && (this.isTouch = !0);
              },
            },
            {
              key: "swiperSlideChange",
              value: function () {
                var e = this;
                e.swiper.on("slideChange", function () {
                  var t = e.swiper.activeIndex;
                  e.tabChange(t);
                });
              },
            },
          ]) && g(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })(),
      S = function (e, t, n, i) {
        var o, r, a, s;
        if (!e) return t;
        if (e.getAttribute("data-slider-navigation")) {
          (t.navigation = {}),
            n &&
              void 0 !== i &&
              ((o = "".concat(n, "-next-").concat(i)),
              (r = "".concat(n, "-prev-").concat(i)));
          var c = e.closest(".m-slider");
          c &&
            ((a = c.querySelector(".swiper-button-next")),
            (s = c.querySelector(".swiper-button-prev"))),
            a &&
              o &&
              (a.setAttribute("id", o), (t.navigation.nextEl = "#".concat(o))),
            s &&
              r &&
              (s.setAttribute("id", r), (t.navigation.prevEl = "#".concat(r)));
        } else t.navigation = !1;
        return t;
      },
      j = function (e, t) {
        return e
          ? ("true" === e.getAttribute("data-slider-loop") &&
              ((t.loop = !0), (t.centeredSlides = !0)),
            t)
          : t;
      };
    function L(e) {
      return (
        (L =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        L(e)
      );
    }
    function k(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(
            e,
            (void 0,
            (o = (function (e, t) {
              if ("object" !== L(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, "string");
                if ("object" !== L(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(i.key)),
            "symbol" === L(o) ? o : String(o)),
            i
          );
      }
      var o;
    }
    var E = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.optionsDesktop = {}),
            (this.optionsMobile = {
              slideClass: "js-dsbls-nav-item",
              pagination: { el: ".l-slider-nav__pagination", clickable: !0 },
            }),
            (this.optionsNav = {
              item: ".js-dsbls-nav-item",
              active: "is-active",
              trigger: "mouseover",
            }),
            (this.sliderNo = t.replace("js-slider-dsbls-", "")),
            (this.sliderName = t),
            (this.sliderMobileName = t.replace(
              "js-slider-dsbls-",
              "js-slider-dsbls-m-"
            )),
            (this.sliderSel = "#" + this.sliderName),
            (this.sliderMobileSel = "#" + this.sliderMobileName),
            (this.optionsNav.element = this.sliderMobileSel),
            (this.sliderElem = document.querySelector(this.sliderSel)),
            (this.sliderMobileElem = document.querySelector(
              this.sliderMobileSel
            )),
            (this.showMobile = s(
              this.sliderElem.getAttribute("data-slider-is-mobile")
            )),
            (this.isMobile = !1),
            (this.isDesktop = !1),
            this.desktopInstance,
            this.mobileInstance,
            this.desktopTabs,
            this.init();
        }
        var n, i;
        return (
          (n = e),
          (i = [
            {
              key: "init",
              value: function () {
                var e = this;
                window.innerWidth < 1025
                  ? (e.isMobile = !0)
                  : (e.isDesktop = !0),
                  e.parseOptions(),
                  e.isMobile && e.showMobile && e.createMobile(),
                  e.isDesktop && e.createDesktop(),
                  window.addEventListener("resize", function () {
                    e.throttleResize();
                  }),
                  (e.throttleResize = t(function () {
                    e.resizeSlider();
                  }, 350));
              },
            },
            {
              key: "parseOptions",
              value: function () {
                var e = this;
                if (e.isMobile && e.showMobile) {
                  var t = e.sliderMobileName;
                  (e.optionsMobile = j(e.sliderMobileElem, e.optionsMobile)),
                    (e.optionsMobile = v(e.sliderMobileElem, e.optionsMobile)),
                    (e.optionsMobile = m(e.sliderMobileElem, e.optionsMobile)),
                    (e.optionsMobile = S(
                      e.sliderMobileElem,
                      e.optionsMobile,
                      t,
                      e.sliderNo
                    ));
                }
                if (e.isDesktop) {
                  var n = e.sliderName;
                  (e.optionsDesktop = j(e.sliderElem, e.optionsDesktop)),
                    (e.optionsDesktop = v(e.sliderElem, e.optionsDesktop)),
                    (e.optionsDesktop = m(e.sliderElem, e.optionsDesktop)),
                    (e.optionsDesktop = (function (e, t) {
                      if (!e) return t;
                      var n = e.getAttribute("data-slider-effect-transition");
                      switch (((t.effect = {}), n)) {
                        case "fade":
                          (t.effect = "fade"),
                            (t.fadeEffect = {}),
                            (t.fadeEffect.crossFade = !0);
                          break;
                        case "cube":
                          t.effect = "cube";
                          break;
                        case "coverflow":
                          t.effect = "coverflow";
                          break;
                        case "cards":
                          t.effect = "cards";
                          break;
                        case "flip":
                          t.effect = "flip";
                      }
                      return t;
                    })(e.sliderElem, e.optionsDesktop)),
                    (e.optionsDesktop = S(
                      e.sliderElem,
                      e.optionsDesktop,
                      n,
                      e.sliderNo
                    ));
                }
              },
            },
            {
              key: "createDesktop",
              value: function () {
                var e = this;
                (e.desktopInstance = new Swiper(e.sliderSel, e.optionsDesktop)),
                  e.desktopInstance.initialized &&
                    (e.desktopTabs = new w(e.desktopInstance, e.optionsNav));
              },
            },
            {
              key: "createMobile",
              value: function () {
                var e = this;
                e.mobileInstance = new Swiper(
                  e.sliderMobileSel,
                  e.optionsMobile
                );
              },
            },
            {
              key: "resizeSlider",
              value: function () {
                var e = this;
                window.innerWidth < 1025
                  ? e.isMobile ||
                    (void 0 !== e.desktopInstance &&
                      (e.desktopTabs.unbindTabs(),
                      e.desktopInstance.destroy(),
                      (e.desktopInstance = void 0)),
                    e.showMobile && e.createMobile(),
                    (e.isDesktop = !1),
                    (e.isMobile = !0))
                  : e.isDesktop ||
                    (void 0 !== e.mobileInstance &&
                      (e.mobileInstance.destroy(), (e.mobileInstance = void 0)),
                    e.createDesktop(),
                    (e.isMobile = !1),
                    (e.isDesktop = !0));
              },
            },
          ]) && k(n.prototype, i),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          e
        );
      })(),
      A = document.querySelectorAll(".js-slider-dsbls"),
      T = document.querySelectorAll(".js-slider-dsbls-m"),
      C = function (e, t) {
        if (!e) return t;
        var n = parseInt(e.getAttribute("data-slider-columns")),
          i = parseInt(e.getAttribute("data-slider-columns-gap"));
        return (
          n
            ? ((t.slidesPerView = n),
              (t.breakpoints = {
                320: { slidesPerView: 1, spaceBetween: 10 },
                576: {
                  slidesPerView: n > 3 ? 2 : 1,
                  spaceBetween: i > 20 ? 15 : 10,
                },
                1024: { slidesPerView: n, spaceBetween: i > 30 ? 25 : 20 },
                1440: { slidesPerView: n, spaceBetween: i || 20 },
              }))
            : (t.breakpoints = {
                320: { slidesPerView: 1 },
                576: { slidesPerView: 2, spaceBetween: i > 20 ? 15 : 10 },
                1024: { slidesPerView: "auto", spaceBetween: i > 30 ? 25 : 20 },
              }),
          t
        );
      },
      P = "js-slider-simple",
      O = document.querySelectorAll(".js-slider-simple"),
      x = "js-slider-advanced",
      _ = document.querySelectorAll(".js-slider-advanced"),
      D = 100,
      q = function (e) {
        var t = new Date(),
          n = setInterval(function () {
            var i = (new Date() - t) / e.duration;
            i > 1 && (i = 1), (e.progress = i);
            var o = e.delta(i);
            e.step(o),
              1 == i &&
                (clearInterval(n),
                "function" == typeof e.complete && e.complete());
          }, e.delay || 10);
      },
      I = function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      };
    Math.easeInOutCubic = function (e, t, n, i) {
      return (e /= i / 2) < 1
        ? (n / 2) * e * e * e + t
        : (n / 2) * ((e -= 2) * e * e + 2) + t;
    };
    var M = function (e) {
        var t = void 0 !== e.element ? e.element : window,
          n = e.to,
          i = void 0 !== e.duration ? e.duration : 250,
          o = void 0 !== e.callback ? e.callback : null,
          r = void 0 !== e.easing ? e.easing : Math.easeInOutCubic,
          a =
            t !== window
              ? t.scrollTop
              : (window.pageYOffset || document.documentElement.scrollTop) -
                (document.documentElement.clientTop || 0),
          s = n - a,
          c = 0;
        !(function e() {
          c += 16;
          var l = i ? r(c, a, s, i) : n;
          t.scrollTo(0, l), c < i ? setTimeout(e, 16) : o && o();
        })();
      },
      N = function (e, t, n, i) {
        return n * (e /= i) * e + t;
      },
      R = function (e, t, n, i) {
        return (e /= i / 2) < 1
          ? (n / 2) * e * e * e * e + t
          : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
      };
    function B(e) {
      return (
        (B =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        B(e)
      );
    }
    function F(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return V(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return V(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? V(e, t)
                : void 0
            );
          }
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function V(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function H(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(
            e,
            (void 0,
            (o = (function (e, t) {
              if ("object" !== B(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, "string");
                if ("object" !== B(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(i.key)),
            "symbol" === B(o) ? o : String(o)),
            i
          );
      }
      var o;
    }
    var z = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.wrapper = ".js-acc-wrapper"),
            (this.defaults = {
              selectors: {
                item: ".js-acc-item",
                trigger: ".js-acc-button",
                content: ".js-acc-content",
              },
              gallery: { container: ".js-acc-gallery", item: ".js-acc-media" },
              classes: {
                active: "is-active",
                focus: "focus",
                display: "block",
              },
              animation: { content: !0, gallery: !1 },
              attr: {
                close: "data-close",
                open: "data-expand",
                gallery: "data-gallery",
                startClosed: "data-start-closed",
                animationContent: "data-animation",
                animationGallery: "data-gallery-animation",
                display: "data-acc-display",
                scrollToView: "data-scroll-to-view",
              },
              opt: {
                close: !1,
                expand: !1,
                hasGallery: !1,
                startClosed: !1,
                scrollToView: !1,
              },
              aria: { button: "header", content: "content" },
            }),
            (this.config = o(this.defaults, n)),
            void 0 !== t && (this.wrapper = t),
            this.getAriaName(),
            (this.selector = document.querySelector(this.wrapper)),
            (this.eventsListeners = {}),
            this.parseOptions(),
            (this.trigger = this.selector.querySelectorAll(
              this.config.selectors.trigger
            )),
            (this.items = this.selector.querySelectorAll(
              this.config.selectors.item
            )),
            this.config.opt.hasGallery &&
              (this.galleryItems = this.selector.querySelectorAll(
                this.config.gallery.item
              )),
            (this.handlers = []),
            (this.previousIndex = 0),
            (this.currentIndex = 0),
            this.init();
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "init",
              value: function () {
                this.addAria(),
                  this.prepareForAnimation(),
                  this.accordionBindEvents();
              },
            },
            {
              key: "on",
              value: function (e, t) {
                var n = this;
                "function" == typeof t &&
                  e.split(" ").forEach(function (e, i) {
                    n.eventsListeners[e] || (n.eventsListeners[e] = []),
                      n.eventsListeners[e].push(t);
                  });
              },
            },
            {
              key: "off",
              value: function (e, t) {
                var n = this;
                n.eventsListeners &&
                  e.split(" ").forEach(function (e) {
                    void 0 === t
                      ? (n.eventsListeners[e] = [])
                      : n.eventsListeners[e] &&
                        n.eventsListeners[e].forEach(function (i, o) {
                          i === t && n.eventsListeners[e].splice(o, 1);
                        });
                  });
              },
            },
            {
              key: "emit",
              value: function () {
                var e,
                  t,
                  n,
                  i = this;
                if (!i.eventsListeners) return i;
                for (
                  var o = arguments.length, r = new Array(o), a = 0;
                  a < o;
                  a++
                )
                  r[a] = arguments[a];
                "string" == typeof r[0] || Array.isArray(r[0])
                  ? ((e = r[0]), (t = r.slice(1, r.length)), (n = i))
                  : ((e = r[0].events),
                    (t = r[0].data),
                    (n = r[0].context || i)),
                  t.unshift(n);
                var s = Array.isArray(e) ? e : e.split(" ");
                s.forEach(function (e) {
                  i.eventsListeners &&
                    i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach(function (e) {
                      e.apply(n, t);
                    });
                });
              },
            },
            {
              key: "accordionBindEvents",
              value: function () {
                var e = this,
                  t = e.trigger;
                (e.addListenerFocus = e.addListenerFocus.bind(e)),
                  (e.addListenerBlur = e.addListenerBlur.bind(e)),
                  (e.addKeyListener = e.addKeyListener.bind(e)),
                  (e.on = e.on.bind(e)),
                  (e.off = e.off.bind(e)),
                  (e.emit = e.emit.bind(e)),
                  t.forEach(function (t, n) {
                    var i = e.accordionNavClick.bind(e, n);
                    e.handlers.push(i),
                      t.addEventListener("click", i, { passive: !0 }),
                      t.addEventListener("focus", e.addListenerFocus, {
                        passive: !0,
                      }),
                      t.addEventListener("blur", e.addListenerBlur, {
                        passive: !0,
                      });
                  }),
                  e.selector.addEventListener("keydown", e.addKeyListener, {
                    passive: !0,
                  });
              },
            },
            {
              key: "accordionUnbindEvents",
              value: function () {
                var e = this;
                e.trigger.forEach(function (t, n) {
                  var i = t
                    .closest(e.config.selectors.item)
                    .querySelector(e.config.selectors.content);
                  e.config.aria.name &&
                    (""
                      .concat(e.config.aria.name, "-")
                      .concat(e.config.aria.content, "-")
                      .concat(n),
                    ""
                      .concat(e.config.aria.name, "-")
                      .concat(e.config.aria.button, "-")
                      .concat(n)),
                    t.removeAttribute("aria-expanded", ""),
                    i.removeAttribute("aria-hidden", ""),
                    e.config.aria.name &&
                      (t.removeAttribute("aria-controls", ""),
                      t.removeAttribute("id", ""),
                      i.removeAttribute("id", ""),
                      i.removeAttribute("aria-labelledby", "")),
                    i.removeAttribute("role", ""),
                    t.removeEventListener("click", e.handlers[n]),
                    t.removeEventListener("focus", e.addListenerFocus),
                    t.removeEventListener("blur", e.addListenerBlur);
                }),
                  e.selector.removeEventListener("keydown", e.addKeyListener),
                  e.removeStyles();
              },
            },
            {
              key: "accordionNavClick",
              value: function (e, t) {
                var n = t.currentTarget;
                this.accordionContentchange(e, n, t);
              },
            },
            {
              key: "accordionContentchange",
              value: function (e, t, n) {
                var i = this,
                  o = t,
                  r = i.items,
                  a = o.closest(i.config.selectors.item),
                  s = a.querySelector(i.config.selectors.content),
                  c = "true" === o.getAttribute("aria-expanded") || !1;
                a.classList.contains(i.config.classes.active)
                  ? i.config.opt.close &&
                    (i.config.animation.content &&
                      l(s, { display: i.config.classes.display }),
                    a.classList.remove(i.config.classes.active),
                    o.setAttribute("aria-expanded", !c),
                    s.setAttribute("aria-hidden", c))
                  : (i.config.opt.expand
                      ? (i.config.animation.content &&
                          u(s, { display: i.config.classes.display }),
                        a.classList.add(i.config.classes.active),
                        o.setAttribute("aria-expanded", !c),
                        s.setAttribute("aria-hidden", c))
                      : (r.forEach(function (e) {
                          var t = e.querySelector(i.config.selectors.content),
                            n = e.querySelector(i.config.selectors.trigger);
                          i.config.animation.content &&
                            l(t, { display: i.config.classes.display }),
                            e.classList.remove(i.config.classes.active),
                            n.setAttribute("aria-expanded", c),
                            t.setAttribute("aria-hidden", !c);
                        }),
                        i.config.animation.content &&
                          u(s, { display: i.config.classes.display }),
                        a.classList.add(i.config.classes.active),
                        o.setAttribute("aria-expanded", !c),
                        s.setAttribute("aria-hidden", c)),
                    i.config.opt.hasGallery && i.accordionChangeGallery(e),
                    i.config.opt.scrollToView &&
                      i.currentIndex < e &&
                      i.scrollToAccordion(e)),
                  (this.previousIndex = this.currentIndex),
                  (this.currentIndex = e),
                  i.emit("accordionChange", n);
              },
            },
            {
              key: "nextAccordion",
              value: function () {
                var e = this,
                  t = e.currentIndex;
                t === e.items.length - 1 ? (t = 0) : (t += 1);
                var n = e.items[t];
                e.accordionContentchange(t, n, null);
              },
            },
            {
              key: "prevAccordion",
              value: function () {
                var e = this,
                  t = e.currentIndex,
                  n = e.items.length;
                0 === t ? (t = n - 1) : (t -= 1);
                var i = e.items[t];
                e.accordionContentchange(t, i, null);
              },
            },
            {
              key: "accordionChangeGallery",
              value: function (e) {
                var t = this,
                  n = F(t.galleryItems);
                n.forEach(function (i) {
                  t.config.animation.gallery
                    ? (function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        void 0 === t.duration && (t.duration = D);
                        var n = 1;
                        q({
                          duration: t.duration,
                          delta: function (e) {
                            return (e = this.progress), I(e);
                          },
                          complete: t.complete,
                          step: function (t) {
                            e.style.opacity = n - t;
                          },
                        });
                      })(i, {
                        complete: function () {
                          i.classList.remove(t.config.classes.active);
                          var o = n[e];
                          !(function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            void 0 === t.duration && (t.duration = D);
                            var n = 0;
                            q({
                              duration: t.duration,
                              delta: function (e) {
                                return (e = this.progress), I(e);
                              },
                              complete: t.complete,
                              step: function (t) {
                                e.style.opacity = n + t;
                              },
                            });
                          })(o, { duration: 50 }),
                            o.classList.add(t.config.classes.active);
                        },
                      })
                    : i.classList.remove(t.config.classes.active);
                }),
                  t.config.animation.gallery ||
                    n[e].classList.add(t.config.classes.active);
              },
            },
            {
              key: "prepareForAnimation",
              value: function () {
                var e = this,
                  t = e.items,
                  n = !1;
                if (
                  e.config.animation.content &&
                  (t.forEach(function (t, i) {
                    var o = t.querySelector(e.config.selectors.content);
                    t.classList.contains(e.config.classes.active)
                      ? (e.config.opt.startClosed ||
                          (o.style.display = e.config.classes.display),
                        (n = !0))
                      : (o.style.display = "none");
                  }),
                  !n && !e.config.opt.startClosed)
                ) {
                  var i = t[0].querySelector(e.config.selectors.content);
                  t[0].classList.add(e.config.classes.active),
                    (i.style.display = e.config.classes.display);
                }
              },
            },
            {
              key: "removeStyles",
              value: function () {
                var e = this,
                  t = e.items;
                e.config.animation.content &&
                  t.forEach(function (t, n) {
                    t.querySelector(e.config.selectors.content).style.display =
                      "";
                  });
              },
            },
            {
              key: "parseOptions",
              value: function () {
                var e = this,
                  t =
                    s(e.selector.getAttribute(e.config.attr.close)) ||
                    e.config.opt.close;
                t && (e.config.opt.close = !!t),
                  s(e.selector.getAttribute(e.config.attr.open)) ||
                  e.config.opt.expand
                    ? ((e.config.opt.expand = !0), (e.config.opt.close = !0))
                    : (e.config.opt.expand = !1),
                  (s(e.selector.getAttribute(e.config.attr.startClosed)) ||
                    e.config.opt.startClosed) &&
                    ((e.config.opt.startClosed = !0),
                    (e.config.opt.close = !0)),
                  (s(e.selector.getAttribute(e.config.attr.gallery)) ||
                    e.config.opt.hasGallery) &&
                    ((e.config.opt.hasGallery = !0),
                    (e.config.opt.expand = !1),
                    (e.config.opt.close = !1),
                    (e.config.opt.startClosed = !1));
                var n = e.selector.getAttribute(e.config.attr.animationContent);
                n && (e.config.animation.content = "js" === n);
                var i = e.selector.getAttribute(e.config.attr.animationGallery);
                i && (e.config.animation.gallery = "js" === i);
                var o =
                  e.selector.getAttribute(e.config.attr.display) ||
                  e.config.classes.display;
                (e.config.classes.display = "flex" === o ? "flex" : "block"),
                  (s(e.selector.getAttribute(e.config.attr.scrollToView)) ||
                    e.config.opt.scrollToView) &&
                    ((e.config.opt.scrollToView = !0),
                    (e.config.opt.expand = !1)),
                  e.emit("optionsParsed");
              },
            },
            {
              key: "isValidId",
              value: function (e) {
                return /^[^\s]+$/.test(e);
              },
            },
            {
              key: "getAriaName",
              value: function () {
                var e = this.wrapper.slice(1);
                this.isValidId(e)
                  ? (this.config.aria.name = e)
                  : (this.config.aria.name = !1);
              },
            },
            {
              key: "addAria",
              value: function () {
                var e = this;
                e.trigger.forEach(function (t, n) {
                  var i,
                    o,
                    r = t.closest(e.config.selectors.item),
                    a = r.querySelector(e.config.selectors.content);
                  e.config.aria.name &&
                    ((i = ""
                      .concat(e.config.aria.name, "-")
                      .concat(e.config.aria.content, "-")
                      .concat(n)),
                    (o = ""
                      .concat(e.config.aria.name, "-")
                      .concat(e.config.aria.button, "-")
                      .concat(n))),
                    r.classList.contains(e.config.classes.active)
                      ? (t.setAttribute("aria-expanded", !0),
                        a.setAttribute("aria-hidden", !1))
                      : (t.setAttribute("aria-expanded", !1),
                        a.setAttribute("aria-hidden", !0)),
                    e.config.aria.name &&
                      (t.setAttribute("aria-controls", i),
                      t.setAttribute("id", o),
                      a.setAttribute("id", i),
                      a.setAttribute("aria-labelledby", o)),
                    a.setAttribute("role", "region");
                });
              },
            },
            {
              key: "addListenerFocus",
              value: function (e) {
                e.target.classList.add(this.config.classes.focus);
              },
            },
            {
              key: "addListenerBlur",
              value: function (e) {
                e.target.classList.remove(this.config.classes.focus);
              },
            },
            {
              key: "addKeyListener",
              value: function (e) {
                var t = e.target,
                  n = e.which.toString(),
                  i = F(this.trigger),
                  o = this.config.selectors.trigger.slice(1),
                  r = e.ctrlKey && n.match(/33|34/);
                if (t.classList.contains(o))
                  if (n.match(/38|40/) || r) {
                    var a = i.indexOf(t),
                      s = n.match(/34|40/) ? 1 : -1,
                      c = i.length;
                    i[(a + c + s) % c].focus();
                  } else if (n.match(/35|36/))
                    switch (n) {
                      case "36":
                        i[0].focus();
                        break;
                      case "35":
                        i[i.length - 1].focus();
                    }
              },
            },
            {
              key: "scrollToAccordion",
              value: function (e) {
                var t = this.trigger[0].getBoundingClientRect(),
                  n = t.height * e,
                  i = window.pageYOffset || document.documentElement.scrollTop,
                  o = t.top + i + n - 80;
                M({ to: o, duration: 0, easing: N });
              },
            },
          ]),
          n && H(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })(),
      Y = z,
      W = document.querySelectorAll(".js-acc-wrapper");
    function X(e) {
      return (
        (X =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        X(e)
      );
    }
    function G(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(
            e,
            (void 0,
            (o = (function (e, t) {
              if ("object" !== X(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, "string");
                if ("object" !== X(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(i.key)),
            "symbol" === X(o) ? o : String(o)),
            i
          );
      }
      var o;
    }
    var U = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.eventsListeners = {}),
            (this.currentIndex = 0),
            (this.activeNav = null),
            (this.activePanel = null);
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "bindFunctions",
              value: function () {
                this.tabNavClick = this.tabNavClick.bind(this);
              },
            },
            {
              key: "bindTabNavEvent",
              value: function () {
                var e = this;
                e.items.forEach(function (t) {
                  t.addEventListener("click", e.tabNavClick, { passive: !0 });
                });
              },
            },
            {
              key: "unbindTabNavEvent",
              value: function () {
                var e = this;
                e.items.forEach(function (t) {
                  t.removeEventListener("click", e.tabNavClick);
                });
              },
            },
            {
              key: "tabNavClick",
              value: function (e) {
                var t = this,
                  n = e.currentTarget;
                t.activeNav = e.currentTarget;
                var i = n
                    .closest(t.config.wrapper)
                    .querySelectorAll(t.config.selectors.nav),
                  o = t.getNavTabID(n);
                t.clearActiveClass(i, "nav"),
                  t.setActiveClass(n, "nav"),
                  t.tabPanelChange(o);
              },
            },
            {
              key: "tabPanelChange",
              value: function (e) {
                var t = this;
                if (void 0 !== e) {
                  var n = "".concat(t.config.data, "-").concat(e),
                    i = document.querySelector("#".concat(n));
                  t.activePanel = i;
                  var o = i
                    .closest(t.config.wrapper)
                    .querySelectorAll(t.config.selectors.panel);
                  void 0 !== i &&
                    ((t.currentIndex = e),
                    t.clearActiveClass(o, "panel"),
                    t.setActiveClass(i, "panel"),
                    t.emit("tabsChange"));
                }
              },
            },
            {
              key: "getNavTabID",
              value: function (e) {
                return e.getAttribute(this.config.data);
              },
            },
            {
              key: "clearActiveClass",
              value: function (e, t) {
                var n = this;
                e.forEach(function (e) {
                  e.classList.remove(n.config.classes.active),
                    "panel" === t && e.setAttribute("aria-hidden", !0),
                    "nav" === t && e.setAttribute("aria-selected", !1);
                });
              },
            },
            {
              key: "setActiveClass",
              value: function (e, t) {
                e.classList.add(this.config.classes.active),
                  "panel" === t && e.setAttribute("aria-hidden", !1),
                  "nav" === t && e.setAttribute("aria-selected", !0);
              },
            },
            {
              key: "setFirstActive",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  t = this,
                  n = t.items,
                  i = n[e],
                  o = i.closest(t.config.wrapper),
                  r = o.querySelectorAll(t.config.selectors.nav),
                  a = t.getNavTabID(i);
                t.clearActiveClass(r, "nav"),
                  t.setActiveClass(i, "nav"),
                  t.tabPanelChange(a);
              },
            },
            {
              key: "on",
              value: function (e, t) {
                var n = this;
                "function" == typeof t &&
                  e.split(" ").forEach(function (e, i) {
                    n.eventsListeners[e] || (n.eventsListeners[e] = []),
                      n.eventsListeners[e].push(t);
                  });
              },
            },
            {
              key: "off",
              value: function (e, t) {
                var n = this;
                n.eventsListeners &&
                  e.split(" ").forEach(function (e) {
                    void 0 === t
                      ? (n.eventsListeners[e] = [])
                      : n.eventsListeners[e] &&
                        n.eventsListeners[e].forEach(function (i, o) {
                          i === t && n.eventsListeners[e].splice(o, 1);
                        });
                  });
              },
            },
            {
              key: "emit",
              value: function () {
                var e,
                  t,
                  n,
                  i = this;
                if (!i.eventsListeners) return i;
                for (
                  var o = arguments.length, r = new Array(o), a = 0;
                  a < o;
                  a++
                )
                  r[a] = arguments[a];
                "string" == typeof r[0] || Array.isArray(r[0])
                  ? ((e = r[0]), (t = r.slice(1, r.length)), (n = i))
                  : ((e = r[0].events),
                    (t = r[0].data),
                    (n = r[0].context || i)),
                  t.unshift(n);
                var s = Array.isArray(e) ? e : e.split(" ");
                s.forEach(function (e) {
                  i.eventsListeners &&
                    i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach(function (e) {
                      e.apply(n, t);
                    });
                });
              },
            },
          ]),
          n && G(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })(),
      $ = U;
    function K(e) {
      return (
        (K =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        K(e)
      );
    }
    function J(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(
            e,
            (void 0,
            (o = (function (e, t) {
              if ("object" !== K(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, "string");
                if ("object" !== K(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(i.key)),
            "symbol" === K(o) ? o : String(o)),
            i
          );
      }
      var o;
    }
    function Q() {
      return (
        (Q =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (e, t, n) {
                var i = Z(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? e : n)
                    : o.value;
                }
              }),
        Q.apply(this, arguments)
      );
    }
    function Z(e, t) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ne(e));

      );
      return e;
    }
    function ee(e, t) {
      return (
        (ee = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        ee(e, t)
      );
    }
    function te(e, t) {
      if (t && ("object" === K(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      })(e);
    }
    function ne(e) {
      return (
        (ne = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        ne(e)
      );
    }
    var ie = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && ee(e, t);
        })(s, e);
        var t,
          n,
          i,
          r,
          a =
            ((i = s),
            (r = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = ne(i);
              if (r) {
                var n = ne(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return te(this, e);
            });
        function s(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            ((t = a.call(this)).defaults = {
              wrapper: ".js-tabs-wrapper",
              selectors: { nav: ".js-tabs-nav-item", panel: ".js-tabs-panel" },
              classes: { active: "is-active" },
              data: "data-tab",
            }),
            (t.config = o(t.defaults, e)),
            (t.selector = ""
              .concat(t.config.wrapper, " ")
              .concat(t.config.selectors.nav)),
            (t.items = document.querySelectorAll(t.selector)),
            t.init(),
            t
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "init",
              value: function () {
                Q(ne(s.prototype), "bindFunctions", this).call(this),
                  Q(ne(s.prototype), "bindTabNavEvent", this).call(this);
              },
            },
          ]) && J(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          s
        );
      })($),
      oe = ie;
    function re(e) {
      return (
        (re =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        re(e)
      );
    }
    function ae(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(
            e,
            (void 0,
            (o = (function (e, t) {
              if ("object" !== re(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, "string");
                if ("object" !== re(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(i.key)),
            "symbol" === re(o) ? o : String(o)),
            i
          );
      }
      var o;
    }
    var se = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.tabaccID = "#js-tab-acc"),
            (this.tabaccSelector = ".js-tabs-to-acc-wrapper"),
            (this.tabaccItems = document.querySelectorAll(this.tabaccSelector)),
            (this.tabOptions = {
              wrapper: ".js-tabs-wrapper",
              selectors: { nav: ".js-tabs-nav-item", panel: ".js-tabs-panel" },
            }),
            (this.accordionOptions = {
              selectors: {
                item: ".js-tabs-panel",
                trigger: ".js-tabs-label",
                content: ".js-ta-content",
              },
              opt: { close: !0, expand: !0 },
              classes: { display: "flex" },
              animation: { content: !0 },
            }),
            (this.isMobile = !1),
            (this.isDesktop = !1),
            this.accordionInstance,
            this.tabInstance,
            void 0 !== t && (this.tabaccID = t),
            this.init();
        }
        var n, i;
        return (
          (n = e),
          (i = [
            {
              key: "init",
              value: function () {
                var e = this;
                window.innerWidth < 1025
                  ? (this.isMobile = !0)
                  : (this.isDesktop = !0),
                  e.isMobile && e.buildAccordion(),
                  e.isDesktop && e.buildTab(),
                  window.addEventListener("resize", function () {
                    e.throttleScroll();
                  }),
                  (this.throttleScroll = t(function () {
                    e.buildTabAccordion();
                  }, 150)),
                  e.buildTabAccordion();
              },
            },
            {
              key: "buildTabAccordion",
              value: function () {
                var e = this;
                window.innerWidth < 1025
                  ? e.isMobile ||
                    (void 0 !== e.tabInstance &&
                      (e.tabInstance.unbindTabNavEvent(),
                      (e.tabInstance = void 0)),
                    e.buildAccordion(),
                    (e.isDesktop = !1),
                    (e.isMobile = !0))
                  : e.isDesktop ||
                    (void 0 !== e.accordionInstance &&
                      (e.accordionInstance.accordionUnbindEvents(),
                      (e.accordionInstance = void 0)),
                    e.buildTab(),
                    (e.isMobile = !1),
                    (e.isDesktop = !0));
              },
            },
            {
              key: "buildAccordion",
              value: function () {
                this.accordionInstance = new Y(
                  this.tabaccID,
                  this.accordionOptions
                );
              },
            },
            {
              key: "buildTab",
              value: function () {
                (this.tabOptions.wrapper = this.tabaccID),
                  (this.tabInstance = new oe(this.tabOptions)),
                  this.tabInstance.setFirstActive();
              },
            },
          ]) && ae(n.prototype, i),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          e
        );
      })(),
      ce = document.querySelectorAll(".js-tabs-to-acc-wrapper"),
      le = n(311);
    var ue = n(311),
      de = n(311),
      fe = mt();
    document.addEventListener(
      "wpcf7submit",
      function (e) {
        var t = fe.whitepaper_form;
        t &&
          +t == e.detail.contactFormId &&
          "validation_failed" !== e.detail.apiResponse.status &&
          "mail_failed" !== e.detail.apiResponse.status &&
          (e.target.closest(".js-download-form").classList.add("sent"),
          (function (e, t, n) {
            var i = new Date();
            i.setTime(i.getTime() + 2592e6);
            var o = "expires=".concat(i.toUTCString());
            document.cookie = ""
              .concat("ds-popup-done", "=")
              .concat("true", ";")
              .concat(o, ";");
          })());
      },
      !1
    );
    var pe = n(311),
      ve = n(311),
      me = n(311);
    var be = n(311);
    var he = n(311);
    var ye = n(311);
    var ge = n(311),
      we = mt();
    function Se(e) {
      for (
        var t = "".concat(e, "="),
          n = decodeURIComponent(document.cookie).split(";"),
          i = 0;
        i < n.length;
        i++
      ) {
        for (var o = n[i]; " " == o.charAt(0); ) o = o.substring(1);
        if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
      }
      return "";
    }
    var je = n(311),
      Le = n(311),
      ke = n(311),
      Ee = n(311),
      Ae = n(311);
    function Te(e) {
      return (
        (Te =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        Te(e)
      );
    }
    function Ce(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(
            e,
            (void 0,
            (o = (function (e, t) {
              if ("object" !== Te(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, "string");
                if ("object" !== Te(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(i.key)),
            "symbol" === Te(o) ? o : String(o)),
            i
          );
      }
      var o;
    }
    var Pe = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.config = {
            selector: ".js-tabs-panel",
            navigation: ".js-tabs-nav",
            tabs: { container: ".l-tabs__panel" },
            accordion: { label: ".l-tabs__label", content: ".l-tabs__content" },
            nav: { item: ".c-tabs-nav__link" },
          }),
          (this.selector = ""
            .concat(this.config.navigation, " ")
            .concat(this.config.nav.item)),
          (this.items = document.querySelectorAll(this.selector)),
          (this.keys = {
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            delete: 46,
            enter: 13,
            space: 32,
          }),
          (this.keysDirection = { 37: -1, 38: -1, 39: 1, 40: 1 }),
          this.init();
      }
      var t, n;
      return (
        (t = e),
        (n = [{ key: "init", value: function () {} }]) && Ce(t.prototype, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })();
    function Oe(e) {
      return (
        (Oe =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        Oe(e)
      );
    }
    function xe(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return _e(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return _e(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? _e(e, t)
                : void 0
            );
          }
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function _e(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function De(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(
            e,
            (void 0,
            (o = (function (e, t) {
              if ("object" !== Oe(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, "string");
                if ("object" !== Oe(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(i.key)),
            "symbol" === Oe(o) ? o : String(o)),
            i
          );
      }
      var o;
    }
    var qe = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.scroll = {}),
          (this.selector = ".js-tabs-nav .c-tabs-nav__link"),
          (this.mobileSelector = ".js-tabs-panel .l-tabs__label"),
          (this.items = document.querySelectorAll(this.selector)),
          (this.itemsMobile = document.querySelectorAll(this.mobileSelector)),
          (this.aos = t),
          this.init();
      }
      var n, i;
      return (
        (n = e),
        (i = [
          {
            key: "init",
            value: function () {
              var e = this;
              (e.bindChangeTab = this.changeTab.bind(this)),
                (e.bindChangeSlide = this.changeSlide.bind(this)),
                (e.bindScrollAccordion = this.scrollAccordion.bind(this)),
                (e.bindResizeAccordion = this.resizeAccordion.bind(this)),
                xe(e.items).forEach(function (t) {
                  t.addEventListener("click", e.bindChangeTab);
                }),
                xe(e.itemsMobile).forEach(function (t) {
                  t.addEventListener("click", e.bindChangeSlide);
                }),
                window.addEventListener("resize", function () {
                  n();
                });
              var n = t(function () {
                e.bindResizeAccordion();
              }, 250);
              t(function () {
                e.bindScrollAccordion();
              }, 150),
                e.bindResizeAccordion();
            },
          },
          {
            key: "changeTab",
            value: function (e) {
              e.preventDefault();
              var t = e.currentTarget,
                n = t.getAttribute("aria-controls"),
                i =
                  (t.closest(".c-tabs-nav__item"),
                  t
                    .closest(".js-tabs-nav")
                    .querySelectorAll(".c-tabs-nav__link"));
              t.classList.contains("is-active") ||
                (i.forEach(function (e, t) {
                  e.classList.remove("is-active"),
                    e.setAttribute("aria-selected", "false");
                }),
                t.classList.add("is-active"),
                t.setAttribute("aria-selected", "true"));
              var o = document.querySelectorAll(
                ".js-tabs-panel .l-tabs__panel"
              );
              o.forEach(function (e, t) {
                e.classList.remove("is-active", "is-current"),
                  e.setAttribute("aria-hidden", "true");
              }),
                o.forEach(function (e, t) {
                  e.getAttribute("id") === n &&
                    (e.classList.add("is-active", "is-current"),
                    e.setAttribute("aria-hidden", "false"));
                });
            },
          },
          {
            key: "changeSlide",
            value: function (e) {
              e.preventDefault();
              var t = e.currentTarget.closest(".l-tabs__panel"),
                n = t.querySelector(".l-tabs__content");
              if (
                (document
                  .querySelectorAll(".js-tabs-panel .l-tabs__panel")
                  .forEach(function (e, n) {
                    e === t
                      ? t.classList.contains("is-current") ||
                        t.classList.add("is-current")
                      : e.classList.remove("is-current");
                  }),
                t.classList.contains("is-active"))
              ) {
                var i = n.offsetTop,
                  o = window.pageYOffset || document.documentElement.scrollTop,
                  r = n.offsetTop - 99;
                o > i - 50 && M({ to: r, duration: 200, easing: R }),
                  l(n),
                  t.classList.remove("is-active"),
                  t.classList.remove("is-current");
              } else u(n, { display: "flex" }), t.classList.add("is-active");
            },
          },
          {
            key: "scrollAccordion",
            value: function () {
              window.innerWidth;
              var e = [],
                t = document.querySelectorAll(
                  ".js-tabs-panel .l-tabs__content"
                );
              t.forEach(function (t, n) {
                var i, o, r, a, s, c, l;
                t.closest(".l-tabs__panel").classList.contains("is-active") &&
                  ((i = t),
                  (o = window.scrollY || window.pageYOffset),
                  (r = i.getBoundingClientRect().top + o),
                  (a = o),
                  (s = o + window.innerHeight),
                  (c = r),
                  (((l = r + i.clientHeight) >= a && l <= s) ||
                    (c <= s && c >= a)) &&
                    e.push(n));
              }),
                e.length > 0 &&
                  t.forEach(function (t, n) {
                    var i = t.closest(".l-tabs__panel");
                    e[0] === n
                      ? i.classList.contains("is-current") ||
                        i.classList.add("is-current")
                      : i.classList.remove("is-current");
                  });
            },
          },
          {
            key: "resizeAccordion",
            value: function () {
              if (window.innerWidth > 1024) {
                var e = document.querySelectorAll(
                    ".js-tabs-panel .l-tabs__content"
                  ),
                  t = 0;
                e.forEach(function (e, n) {
                  var i = e.closest(".l-tabs__panel");
                  i.classList.contains("is-current") && (t = n),
                    i.classList.remove("is-active"),
                    (e.style.display = "");
                }),
                  e.length > 0 &&
                    e[t].closest(".l-tabs__panel").classList.add("is-active");
                var n = document.querySelectorAll(
                  ".js-tabs-nav .c-tabs-nav__link"
                );
                n.forEach(function (e, t) {
                  e.classList.remove("is-active");
                }),
                  n.length > 0 && n[t].classList.add("is-active"),
                  window.removeEventListener(
                    "scroll",
                    this.bindScrollAccordion
                  );
              } else
                window.addEventListener("scroll", this.bindScrollAccordion);
            },
          },
        ]) && De(n.prototype, i),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        e
      );
    })();
    function Ie(e) {
      return (
        (Ie =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        Ie(e)
      );
    }
    function Me(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(
            e,
            (void 0,
            (o = (function (e, t) {
              if ("object" !== Ie(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, "string");
                if ("object" !== Ie(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(i.key)),
            "symbol" === Ie(o) ? o : String(o)),
            i
          );
      }
      var o;
    }
    function Ne() {
      return (
        (Ne =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (e, t, n) {
                var i = Re(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? e : n)
                    : o.value;
                }
              }),
        Ne.apply(this, arguments)
      );
    }
    function Re(e, t) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ve(e));

      );
      return e;
    }
    function Be(e, t) {
      return (
        (Be = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        Be(e, t)
      );
    }
    function Fe(e, t) {
      if (t && ("object" === Ie(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      })(e);
    }
    function Ve(e) {
      return (
        (Ve = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Ve(e)
      );
    }
    var He = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && Be(e, t);
        })(s, e);
        var t,
          n,
          i,
          r,
          a =
            ((i = s),
            (r = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Ve(i);
              if (r) {
                var n = Ve(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return Fe(this, e);
            });
        function s(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            ((t = a.call(this)).defaults = {
              wrapper: ".js-tabsDrop-wrapper",
              selectors: {
                dropdown: ".js-tabs-dropdown",
                panel: ".js-tabs-panel",
              },
              classes: { active: "is-active" },
              data: "data-tab",
            }),
            (t.config = o(t.defaults, e)),
            (t.selectorDropdown = ""
              .concat(t.config.wrapper, " ")
              .concat(t.config.selectors.dropdown)),
            (t.itemsDropdown = document.querySelectorAll(t.selectorDropdown)),
            t.init(),
            t
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "init",
              value: function () {
                this.bindFunctions(), this.bindTabsDropdownEvent();
              },
            },
            {
              key: "bindFunctions",
              value: function () {
                this.tabDropdownChange = this.tabDropdownChange.bind(this);
              },
            },
            {
              key: "bindTabsDropdownEvent",
              value: function () {
                var e = this;
                e.itemsDropdown.forEach(function (t) {
                  t.addEventListener("change", e.tabDropdownChange);
                });
              },
            },
            {
              key: "tabDropdownChange",
              value: function (e) {
                for (
                  var t = e.currentTarget,
                    n = t.value,
                    i = t.options.selectedIndex,
                    o = 0;
                  o < t.options.length;
                  o += 1
                )
                  t.options[o].removeAttribute("selected");
                t.options[i].setAttribute("selected", "selected"),
                  Ne(Ve(s.prototype), "tabPanelChange", this).call(this, n);
              },
            },
            {
              key: "unbindTabsDropdownEvent",
              value: function () {
                var e = this;
                e.itemsDropdown.forEach(function (t) {
                  t.removeEventListener("change", e.tabDropdownChange);
                });
              },
            },
          ]) && Me(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          s
        );
      })($),
      ze = He;
    function Ye(e) {
      return (
        (Ye =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        Ye(e)
      );
    }
    function We(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(
            e,
            (void 0,
            (o = (function (e, t) {
              if ("object" !== Ye(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, "string");
                if ("object" !== Ye(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(i.key)),
            "symbol" === Ye(o) ? o : String(o)),
            i
          );
      }
      var o;
    }
    function Xe() {
      return (
        (Xe =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (e, t, n) {
                var i = Ge(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? e : n)
                    : o.value;
                }
              }),
        Xe.apply(this, arguments)
      );
    }
    function Ge(e, t) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ke(e));

      );
      return e;
    }
    function Ue(e, t) {
      return (
        (Ue = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        Ue(e, t)
      );
    }
    function $e(e, t) {
      if (t && ("object" === Ye(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      })(e);
    }
    function Ke(e) {
      return (
        (Ke = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Ke(e)
      );
    }
    var Je = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && Ue(e, t);
        })(s, e);
        var t,
          n,
          i,
          r,
          a =
            ((i = s),
            (r = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = Ke(i);
              if (r) {
                var n = Ke(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return $e(this, e);
            });
        function s(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, s),
            ((t = a.call(this)).defaults = {
              wrapper: ".js-tabsTabDrop-wrapper",
              selectors: {
                nav: ".js-tabs-nav-item",
                dropdown: ".js-tabs-dropdown",
                panel: ".js-tabs-panel",
              },
              classes: { active: "is-active" },
              data: "data-tab",
            }),
            (t.config = o(t.defaults, e)),
            (t.selectorTabs = ""
              .concat(t.config.wrapper, " ")
              .concat(t.config.selectors.nav)),
            (t.selectorDropdown = ""
              .concat(t.config.wrapper, " ")
              .concat(t.config.selectors.dropdown)),
            (t.items = document.querySelectorAll(t.selectorTabs)),
            (t.itemsDropdown = document.querySelectorAll(t.selectorDropdown)),
            t.initTabsDropdown(),
            t
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "initTabsDropdown",
              value: function () {
                this.bindFunctions(),
                  this.bindTabNavEv(),
                  this.bindTabsDropdownEvent();
              },
            },
            {
              key: "bindFunctions",
              value: function () {
                (this.tabDropdownChange = this.tabDropdownChange.bind(this)),
                  (this.tabNavClick = this.tabNavClick.bind(this));
              },
            },
            {
              key: "bindTabsDropdownEvent",
              value: function () {
                var e = this;
                e.itemsDropdown.forEach(function (t) {
                  t.addEventListener("change", e.tabDropdownChange);
                });
              },
            },
            {
              key: "bindTabNavEv",
              value: function () {
                var e = this;
                e.items.forEach(function (t) {
                  t.addEventListener("click", e.tabNavClick, { passive: !0 });
                });
              },
            },
            {
              key: "tabNavClick",
              value: function (e) {
                for (
                  var t,
                    n = this,
                    i = e.currentTarget,
                    o = Xe(Ke(s.prototype), "getNavTabID", this).call(this, i),
                    r = i
                      .closest(n.config.wrapper)
                      .querySelector(n.config.selectors.dropdown),
                    a = 0;
                  a < r.options.length;
                  a += 1
                )
                  r.options[a].value === o && (t = a);
                n.updateTabNav(i, t),
                  n.updateDropdown(r, t),
                  Xe(Ke(s.prototype), "tabPanelChange", this).call(this, o);
              },
            },
            {
              key: "tabDropdownChange",
              value: function (e) {
                var t = this,
                  n = e.currentTarget,
                  i = n.options.selectedIndex,
                  o = n.value,
                  r = document.querySelector(
                    "[".concat(t.config.data, "='").concat(o, "']")
                  );
                t.updateDropdown(n, i),
                  t.updateTabNav(r),
                  Xe(Ke(s.prototype), "tabPanelChange", this).call(this, o);
              },
            },
            {
              key: "updateDropdown",
              value: function (e, t) {
                for (var n = e, i = t, o = 0; o < n.options.length; o += 1)
                  n.options[o].removeAttribute("selected");
                n.options[i].setAttribute("selected", "selected"),
                  (n.options.selectedIndex = i);
              },
            },
            {
              key: "updateTabNav",
              value: function (e, t) {
                var n = this,
                  i = e;
                n.activeNav = e;
                var o = i
                  .closest(n.config.wrapper)
                  .querySelectorAll(n.config.selectors.nav);
                Xe(Ke(s.prototype), "clearActiveClass", this).call(
                  this,
                  o,
                  "nav"
                ),
                  Xe(Ke(s.prototype), "setActiveClass", this).call(
                    this,
                    i,
                    "nav"
                  );
              },
            },
            {
              key: "unbindTabsDropEvents",
              value: function () {
                var e = this,
                  t = e.itemsDropdown;
                e.items.forEach(function (t) {
                  t.removeEventListener("click", e.tabNavClick);
                }),
                  t.forEach(function (t) {
                    t.removeEventListener("change", e.tabDropdownChange);
                  });
              },
            },
          ]) && We(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          s
        );
      })($),
      Qe = Je;
    function Ze(e) {
      return (
        (Ze =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        Ze(e)
      );
    }
    function et(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function tt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(
            e,
            (void 0,
            (o = (function (e, t) {
              if ("object" !== Ze(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, "string");
                if ("object" !== Ze(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(i.key)),
            "symbol" === Ze(o) ? o : String(o)),
            i
          );
      }
      var o;
    }
    var nt = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.defaults = {
            selector: ".js-video-init",
            wrapper: "js-video-wrap",
            buttons: {
              play: ".btn-play",
              mute: ".btn-mute",
              close: ".btn-close",
            },
            classes: {
              pause: "is-pause",
              playing: "is-playing",
              sound: "is-sound",
              mute: "is-muted",
              parentPlay: "is-video-playing",
              parentPause: "is-video-paused",
              triggerAutoplay: "js-trigger-autoplay",
            },
            controls: !1,
          }),
          (this.config = o(this.defaults, t)),
          (this.items = document.querySelectorAll(this.config.selector)),
          this.init();
      }
      var t, n;
      return (
        (t = e),
        (n = [
          {
            key: "init",
            value: function () {
              var e,
                t = this;
              (t.bindTogglePlay = this.togglePlay.bind(this)),
                (t.bindToggleMute = this.toggleMute.bind(this)),
                (t.bindEndedVideo = this.endedVideo.bind(this)),
                ((e = t.items),
                (function (e) {
                  if (Array.isArray(e)) return et(e);
                })(e) ||
                  (function (e) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != e[Symbol.iterator]) ||
                      null != e["@@iterator"]
                    )
                      return Array.from(e);
                  })(e) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return et(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === n &&
                          e.constructor &&
                          (n = e.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(e)
                          : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? et(e, t)
                          : void 0
                      );
                    }
                  })(e) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).forEach(function (e) {
                  t.config.controls || (e.controls = !1);
                  var n = e.parentElement;
                  n.classList.add(t.config.wrapper);
                  var i = n.querySelector(t.config.buttons.play),
                    o = n.querySelector(t.config.buttons.mute);
                  i && i.addEventListener("click", t.bindTogglePlay),
                    o && o.addEventListener("click", t.bindToggleMute),
                    e.addEventListener("ended", t.bindEndedVideo, !1),
                    e.classList.contains(t.config.classes.triggerAutoplay) &&
                      t.startPlay(e);
                });
            },
          },
          {
            key: "endedVideo",
            value: function (e) {
              var t = this,
                n = e.currentTarget,
                i = n.closest("." + t.config.wrapper),
                o = i.querySelector(t.config.buttons.play);
              n.pause(),
                (n.currentTime = 0),
                o.classList.add(t.config.classes.pause),
                o.classList.remove(t.config.classes.playing),
                i.classList.remove(t.config.classes.parentPlay);
            },
          },
          {
            key: "togglePlay",
            value: function (e) {
              var t = this,
                n = e.currentTarget,
                i = n.closest("." + t.config.wrapper),
                o = i.querySelector(t.config.selector);
              o.paused || o.ended
                ? (n.classList.add(t.config.classes.playing),
                  i.classList.add(t.config.classes.parentPlay),
                  i.classList.remove(t.config.classes.parentPause),
                  n.classList.remove(t.config.classes.pause),
                  o.play())
                : (n.classList.add(t.config.classes.pause),
                  i.classList.add(t.config.classes.parentPause),
                  i.classList.remove(t.config.classes.parentPlay),
                  n.classList.remove(t.config.classes.playing),
                  o.pause());
            },
          },
          {
            key: "toggleMute",
            value: function (e) {
              var t = this,
                n = e.currentTarget,
                i = n
                  .closest("." + t.config.wrapper)
                  .querySelector(t.config.selector);
              (i.muted = !i.muted),
                i.muted
                  ? (n.classList.add(t.config.classes.mute),
                    n.classList.remove(t.config.classes.sound))
                  : (n.classList.add(t.config.classes.sound),
                    n.classList.remove(t.config.classes.mute));
            },
          },
          {
            key: "stopPlay",
            value: function (e) {
              var t = this,
                n = e,
                i = n.parentElement.querySelector(t.config.buttons.play);
              (n.paused && n.ended) ||
                (i.classList.add(t.config.classes.pause),
                i.classList.remove(t.config.classes.playing),
                n.pause());
            },
          },
          {
            key: "startPlay",
            value: function (e) {
              var t = this,
                n = e,
                i = n.parentElement.querySelector(t.config.buttons.play);
              (n.paused || n.ended) &&
                (i.classList.add(t.config.classes.playing),
                i.classList.remove(t.config.classes.pause),
                n.play());
            },
          },
        ]) && tt(t.prototype, n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e
      );
    })();
    function it(e) {
      return (
        (it =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        it(e)
      );
    }
    function ot(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function rt(e, t, n) {
      return (
        (t = st(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function at(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, st(i.key), i);
      }
    }
    function st(e) {
      var t = (function (e, t) {
        if ("object" !== it(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var i = n.call(e, "string");
          if ("object" !== it(i)) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      })(e);
      return "symbol" === it(t) ? t : String(t);
    }
    var ct = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.defaults = {
              start: 0,
              end: 100,
              duration: 2e3,
              delay: 10,
              once: !0,
              decimals: 0,
              legacy: !0,
              currency: !1,
              currencysymbol: !1,
              separator: !1,
              separatorsymbol: ",",
              selector: ".purecounter",
            }),
            (this.configOptions = Object.assign({}, this.defaults, t || {})),
            this.registerEventListeners();
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "registerEventListeners",
              value: function () {
                var e = this,
                  t = document.querySelectorAll(this.configOptions.selector);
                if (this.intersectionListenerSupported()) {
                  var n = new IntersectionObserver(
                    this.animateElements.bind(this),
                    { root: null, rootMargin: "20px", threshold: 0.5 }
                  );
                  t.forEach(function (e) {
                    n.observe(e);
                  });
                } else
                  window.addEventListener &&
                    (this.animateLegacy(t),
                    window.addEventListener(
                      "scroll",
                      function (n) {
                        e.animateLegacy(t);
                      },
                      { passive: !0 }
                    ));
              },
            },
            {
              key: "animateLegacy",
              value: function (e) {
                var t = this;
                e.forEach(function (e) {
                  !0 === t.parseConfig(e).legacy &&
                    t.elementIsInView(e) &&
                    t.animateElements([e]);
                });
              },
            },
            {
              key: "animateElements",
              value: function (e, t) {
                var n = this;
                e.forEach(function (e) {
                  var i = e.target || e,
                    o = n.parseConfig(i);
                  if (o.duration <= 0)
                    return (i.innerHTML = n.formatNumber(o.end, o));
                  if (
                    (!t && !n.elementIsInView(e)) ||
                    (t && e.intersectionRatio < 0.5)
                  ) {
                    var r = o.start > o.end ? o.end : o.start;
                    return (i.innerHTML = n.formatNumber(r, o));
                  }
                  setTimeout(function () {
                    return n.startCounter(i, o);
                  }, o.delay);
                });
              },
            },
            {
              key: "startCounter",
              value: function (e, t) {
                var n = this,
                  i = (t.end - t.start) / (t.duration / t.delay),
                  o = "inc";
                t.start > t.end && ((o = "dec"), (i *= -1));
                var r = this.parseValue(t.start);
                (e.innerHTML = this.formatNumber(r, t)),
                  !0 === t.once &&
                    e.setAttribute("data-purecounter-duration", 0);
                var a = setInterval(function () {
                  var s = n.nextNumber(r, i, o);
                  (e.innerHTML = n.formatNumber(s, t)),
                    (((r = s) >= t.end && "inc" == o) ||
                      (r <= t.end && "dec" == o)) &&
                      ((e.innerHTML = n.formatNumber(t.end, t)),
                      clearInterval(a));
                }, t.delay);
              },
            },
            {
              key: "parseConfig",
              value: function (e) {
                var t = this,
                  n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? ot(Object(n), !0).forEach(function (t) {
                            rt(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : ot(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                    }
                    return e;
                  })({}, this.configOptions),
                  i = [].filter.call(e.attributes, function (e) {
                    return /^data-purecounter-/.test(e.name);
                  }),
                  o = {};
                return (
                  i.forEach(function (e) {
                    var n = e.name
                        .replace("data-purecounter-", "")
                        .toLowerCase(),
                      i =
                        "duration" == n
                          ? parseInt(1e3 * t.parseValue(e.value))
                          : t.parseValue(e.value);
                    o[n] = i;
                  }),
                  Object.assign(n, o)
                );
              },
            },
            {
              key: "nextNumber",
              value: function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "inc";
                return (
                  (e = this.parseValue(e)),
                  (t = this.parseValue(t)),
                  parseFloat("inc" === n ? e + t : e - t)
                );
              },
            },
            {
              key: "convertToCurrencySystem",
              value: function (e, t) {
                var n = t.currencysymbol || "",
                  i = t.decimals || 1;
                return (
                  n +
                  ((e = Math.abs(Number(e))) >= 1e12
                    ? "".concat((e / 1e12).toFixed(i), " T")
                    : e >= 1e9
                    ? "".concat((e / 1e9).toFixed(i), " B")
                    : e >= 1e6
                    ? "".concat((e / 1e6).toFixed(i), " M")
                    : e >= 1e3
                    ? "".concat((e / 1e12).toFixed(i), " K")
                    : e.toFixed(i))
                );
              },
            },
            {
              key: "applySeparator",
              value: function (e, t) {
                return t.separator
                  ? e
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                      .replace(new RegExp(/,/gi, "gi"), t.separatorsymbol)
                  : e.replace(new RegExp(/,/gi, "gi"), "");
              },
            },
            {
              key: "formatNumber",
              value: function (e, t) {
                var n = {
                  minimumFractionDigits: t.decimals,
                  maximumFractionDigits: t.decimals,
                };
                return (
                  (e = t.currency
                    ? this.convertToCurrencySystem(e, t)
                    : parseFloat(e)),
                  this.applySeparator(e.toLocaleString(void 0, n), t)
                );
              },
            },
            {
              key: "parseValue",
              value: function (e) {
                return /^[0-9]+\.[0-9]+$/.test(e)
                  ? parseFloat(e)
                  : /^[0-9]+$/.test(e)
                  ? parseInt(e)
                  : /^true|false/i.test(e)
                  ? /^true/i.test(e)
                  : e;
              },
            },
            {
              key: "elementIsInView",
              value: function (e) {
                for (
                  var t = e.offsetTop,
                    n = e.offsetLeft,
                    i = e.offsetWidth,
                    o = e.offsetHeight;
                  e.offsetParent;

                )
                  (t += (e = e.offsetParent).offsetTop), (n += e.offsetLeft);
                return (
                  t >= window.pageYOffset &&
                  n >= window.pageXOffset &&
                  t + o <= window.pageYOffset + window.innerHeight &&
                  n + i <= window.pageXOffset + window.innerWidth
                );
              },
            },
            {
              key: "intersectionListenerSupported",
              value: function () {
                return (
                  "IntersectionObserver" in window &&
                  "IntersectionObserverEntry" in window &&
                  "intersectionRatio" in
                    window.IntersectionObserverEntry.prototype
                );
              },
            },
          ]),
          n && at(t.prototype, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })(),
      lt = ct,
      ut = n(311),
      dt = n(311),
      ft = n(364),
      pt = n.n(ft),
      vt = n(311);
    function mt() {
      return dsAjax;
    }
    document.addEventListener("DOMContentLoaded", function () {
      var e,
        n,
        i,
        o,
        r,
        a,
        c,
        d,
        f,
        p,
        b,
        y,
        g,
        L,
        k,
        D,
        q,
        I,
        M,
        N,
        R,
        B,
        F,
        V,
        H,
        z,
        X,
        G,
        U,
        $;
      !(function () {
        h();
        var e = t(function () {
          h();
        }, 300);
        window.addEventListener("resize", function () {
          e();
        });
      })(),
        (function (e, n) {
          var i = document.querySelector(e),
            o = parseInt(2),
            r = t(function () {
              window.pageYOffset > 10 + o
                ? i.classList.add(n)
                : window.pageYOffset < 10 - o && i.classList.remove(n);
            }, 30);
          window.addEventListener("scroll", function () {
            r();
          }),
            window.pageYOffset > 10 + o && i.classList.add(n);
        })(".site-header", "is-sticky"),
        (function () {
          var e = document.querySelector('[data-js="search-target"]');
          if (e) {
            var t = e.querySelector(".search-submit"),
              n = function () {
                !(function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "is-hidden",
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "is-shown";
                  e.classList.add(t), e.classList.remove(n);
                })(e);
              };
            document.addEventListener(
              "click",
              function (i) {
                i.target.matches('[data-js="search-trigger"]') &&
                  e.classList.contains("is-shown") &&
                  t.click(),
                  i.target.matches('[data-js="search-trigger"]') &&
                    (i.preventDefault(),
                    (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "is-hidden",
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : "is-shown";
                      e.classList.remove(t), e.classList.add(n);
                    })(e),
                    t.focus()),
                  i.target.matches('[data-js="search-close"]') &&
                    (i.preventDefault(), n());
              },
              !1
            ),
              document.addEventListener("keydown", function (e) {
                document.body.classList.contains("overflow-hidden") &&
                  (("Escape" !== e.key && 27 !== e.keyCode) || n());
              });
          }
        })(),
        (function (e, t) {
          if (document.querySelector(e)) {
            var n = document.querySelector(e),
              i = document.querySelector("body"),
              o = document.querySelector(".js-dropdown-menu-holder"),
              r = window.innerWidth;
            if (
              (n.addEventListener("click", function (e) {
                e.preventDefault(),
                  r < 1025 &&
                    (o.querySelector(".sub-menu").style.display = "block"),
                  "false" === n.getAttribute("aria-expanded")
                    ? (n.classList.add("is-active"),
                      i.classList.add("nav-active"),
                      n.setAttribute("aria-expanded", "true"))
                    : (n.classList.remove("is-active"),
                      i.classList.remove("nav-active"),
                      n.setAttribute("aria-expanded", "false"));
              }),
              document.querySelector(t))
            ) {
              var a = document.querySelector(t),
                s = document.querySelector(".js-dropdown-menu-holder");
              a.addEventListener("click", function () {
                console.log(a),
                  a.classList.toggle("nav-active"),
                  a.setAttribute("aria-expanded", "true"),
                  s.classList.toggle("nav-active");
              });
            }
          }
        })(".js-toggleNav", ".js-dropdown-toggle"),
        window.matchMedia("(max-width: 1024px)").matches &&
          ((n = document.querySelector(".footer-nav")) &&
            (e = n.querySelectorAll(".footer-nav .menu-item-has-children")),
          e &&
            e.forEach(function (t, n) {
              var i = t.querySelector(".sub-menu");
              t.setAttribute("aria-expanded", "false"),
                l(i),
                t.firstElementChild.addEventListener("click", function (n) {
                  n.preventDefault(),
                    n.target.tagName.toLowerCase(),
                    t.classList.contains("is-toggled")
                      ? (l(i),
                        t.classList.remove("is-toggled"),
                        t.setAttribute("aria-expanded", "false"))
                      : (e.forEach(function (e, t) {
                          var n = e.querySelector(".sub-menu");
                          e.classList.contains("is-toggled") &&
                            (l(n),
                            e.classList.remove("is-toggled"),
                            e.setAttribute("aria-expanded", "false"));
                        }),
                        t.classList.add("is-toggled"),
                        t.setAttribute("aria-expanded", "true"),
                        u(i));
                });
            })),
        new lt({ selector: ".js-counter-number" }),
        new Pe(),
        (i = document.querySelector(".js-gridder")),
        (o = document.querySelectorAll(".js-gridder")),
        i &&
          (ut().gridderExpander
            ? dt(function () {
                o.forEach(function (e, t) {
                  dt(e).gridderExpander({
                    scroll: !0,
                    scrollOffset: 80,
                    scrollTo: "panel",
                    animationSpeed: 400,
                    animationEasing: "easeInOutExpo",
                    showNav: !0,
                    nextText: "",
                    prevText: "",
                    closeText: "Close",
                    onStart: function () {},
                    onContent: function () {},
                    onClosed: function () {},
                  });
                });
              })
            : console.log("DSMP Error: Please include gridder library")),
        new nt(),
        (N = []),
        A.forEach(function (e, t) {
          var n = "js-slider-dsbls-" + t,
            i = "js-slider-dsbls-m-" + t;
          e.setAttribute("id", n),
            T[t].setAttribute("id", i),
            (N[t] = new E(n));
        }),
        (G = []),
        (U = []),
        ($ = window.innerWidth),
        O.forEach(function (e, t) {
          G[t] = { pagination: { el: ".m-slider__pagination", clickable: !0 } };
          var n = "".concat(P, "-").concat(t);
          e.setAttribute("id", n),
            (G[t] = v(e, G[t])),
            (G[t] = m(e, G[t])),
            (G[t] = C(e, G[t])),
            (G[t] = S(e, G[t], P, t));
          var i = e.getAttribute("data-no-mobile");
          (U[t] = new Swiper(e, G[t])), i && $ < 768 && U[t].destroy();
        }),
        (B = []),
        (F = []),
        (V = []),
        (H = []),
        (z = []),
        (X = []),
        _.forEach(function (e, t) {
          (B[t] = {
            centeredSlides: !0,
            pagination: { el: ".m-slider__pagination", clickable: !0 },
          }),
            (V[t] = {
              item: ".js-nav__item",
              active: "is-active",
              trigger: "click",
            }),
            e.classList.contains("js-before-after")
              ? (X[t] = {
                  slidesPerView: "auto",
                  spaceBetween: 10,
                  centeredSlides: !0,
                  loop: !0,
                  slideToClickedSlide: !0,
                })
              : (X[t] = {
                  spaceBetween: 10,
                  slidesPerView: "auto",
                  freeMode: !0,
                  threshold: 10,
                  watchSlidesProgress: !0,
                  wrapperClass: "c-slider-nav",
                });
          var n = s(e.getAttribute("data-slider-thumbs")),
            i = "".concat(x, "-").concat(t);
          e.setAttribute("id", i);
          var o,
            r,
            a,
            c = e.closest(".m-slider");
          if ((c && (R = c.querySelector(".l-slider-nav")), R))
            if (n) {
              var l = "js-slider-advanced-thumbs-" + t;
              R.setAttribute("id", l), (o = "#" + l);
            } else {
              var u = "js-slider-advanced-nav-" + t;
              R.setAttribute("id", u), (V[t].element = "#" + u);
            }
          if (
            ((B[t] = j(e, B[t])),
            (B[t] = v(e, B[t])),
            (B[t] = m(e, B[t])),
            (B[t] = C(e, B[t])),
            (B[t] =
              ((r = e),
              (a = B[t]),
              r
                ? ("true" ===
                    r.getAttribute("data-slider-slide-to-clicked-slide") &&
                    (a.slideToClicedSlide = !0),
                  a)
                : a)),
            (B[t] = S(e, B[t], x, t)),
            n &&
              ((z[t] = new Swiper(o, X[t])),
              (B[t].thumbs = {}),
              (B[t].thumbs.swiper = z[t]),
              (B[t].noSwipingSelector =
                ".l-slider-nav, .m-slider__pagination")),
            (F[t] = new Swiper(e, B[t])),
            R && F[t].initialized)
          ) {
            H[t] = new w(F[t], V[t]);
            var d = F[t].$el[0].querySelector(".js-slider-nav-underline");
            d &&
              H[t].swiper.on("slideChange", function () {
                d.style.transform =
                  "translate3d(" + 100 * H[t].swiper.activeIndex + "%,0,0)";
              });
          }
        }),
        (function () {
          if (document.querySelector(".js-before-after")) {
            var e = document.querySelectorAll(
                ".s-before-after .c-slider-nav__thumb"
              ).length,
              t = new Swiper(".ba-slider", {
                slidesPerView: 1,
                centeredSlides: !0,
                loop: !0,
                loopedSlides: e,
                navigation: {
                  nextEl: ".ba-slider-next",
                  prevEl: ".ba-slider-prev",
                },
              }),
              n = new Swiper(".ba-thumbs", {
                slidesPerView: "auto",
                spaceBetween: 10,
                centeredSlides: !0,
                loop: !0,
                threshold: 20,
                slideToClickedSlide: !0,
              });
            (t.controller.control = n), (n.controller.control = t);
          }
        })(),
        (M = []),
        W.forEach(function (e, t) {
          var n = "".concat("js-acc", "-").concat(t),
            i = "#".concat(n);
          e.setAttribute("id", n), (M[t] = new Y(i));
        }),
        (function (e) {
          e("#load_more_posts").on("click", function (t) {
            t.preventDefault();
            var n = e("#load_more_posts"),
              i = n.attr("data-paged"),
              o = n.attr("data-total"),
              r = n.attr("data-author"),
              a = e("#posts_wrap"),
              s =
                (e(".latest-cat.lower .more-wrap"),
                {
                  action: "more_blog_posts",
                  nonce: ds.nonce,
                  currentPage: i,
                  author: r,
                });
            e.ajax({
              url: ds.ajax_url,
              data: s,
              type: "POST",
              beforeSend: function (e) {
                n.addClass("loading");
              },
              success: function (t) {
                var i;
                t
                  ? (e(a).append(t.posts),
                    setTimeout(
                      ((i = e(".l-latest-cat-item.loaded:not(done)")),
                      void e(i).each(function (t) {
                        var n = e(this);
                        setTimeout(function () {
                          n.addClass("done");
                        }, 110 * t);
                      })),
                      110
                    ),
                    n.attr("data-paged", t.paged),
                    n.removeClass("loading"),
                    t.paged == o && n.hide())
                  : n.hide();
              },
            });
          });
        })(be),
        (function (e) {
          var t,
            n = document.querySelectorAll(e);
          n.length > 0 &&
            (n.forEach(function (e) {
              le(e).is(":hidden") && (e.autoplay = !e.autoplay);
            }),
            n.forEach(function (e) {
              var t = le(e)
                  .parents(".js-video-section")
                  .find(".js-hero-video-cont"),
                n = t.get(0),
                i = t.find(".btn-play").get(0),
                o = t.find(".btn-mute").get(0),
                r = t.find(".btn-control").get(0);
              (e.controls = !1),
                e.addEventListener(
                  "ended",
                  function () {
                    this.pause(),
                      document
                        .querySelector(".video-hidden")
                        .classList.remove("is-enabled"),
                      (e.currentTime = 0),
                      i.classList.add("is-pause"),
                      i.classList.remove("is-playing");
                  },
                  !1
                ),
                e.addEventListener(
                  "timeupdate",
                  function () {
                    this.currentTime >= 61 && this.pause(),
                      this.currentTime >= 58
                        ? n.querySelector(".invideo-link").classList.add("show")
                        : n
                            .querySelector(".invideo-link")
                            .classList.remove("show");
                  },
                  !1
                ),
                i.addEventListener("click", function () {
                  e.paused || e.ended
                    ? (i.classList.add("is-playing"),
                      i.classList.remove("is-pause"),
                      e.parentElement.classList.remove("is-ended"),
                      e.play())
                    : (i.classList.add("is-pause"),
                      i.classList.remove("is-playing"),
                      e.pause());
                }),
                o.addEventListener("click", function () {
                  (e.muted = !e.muted),
                    e.muted
                      ? (o.classList.add("is-muted"),
                        o.classList.remove("is-sound"))
                      : (o.classList.add("is-sound"),
                        o.classList.remove("is-muted"));
                }),
                r &&
                  r.addEventListener("click", function () {
                    r &&
                      ((e.controls = !e.controls),
                      e.controls
                        ? (r.classList.add("is-muted"),
                          r.classList.remove("is-sound"))
                        : (r.classList.add("is-sound"),
                          r.classList.remove("is-muted")));
                  });
            }),
            (t = ".js-play-video"),
            document.querySelectorAll(t).length > 0 &&
              document.querySelectorAll(t).forEach(function (e) {
                e.addEventListener("click", function (t) {
                  t.stopPropagation();
                  var n = le(t.target)
                    .parents(".js-video-section")
                    .find(".js-hero-video-cont");
                  n.addClass("is-enabled"),
                    document.body.classList.add("hide-scrollbar"),
                    n.animate({ opacity: 1 }, 500),
                    n
                      .find(".videoPlayer .js-source1")
                      .prop("src", le(e).data("video-url")),
                    n
                      .find(".videoPlayer .js-source2")
                      .prop("src", le(e).data("video-url"));
                  var i = n.find(".videoPlayer").get(0);
                  i.load(), i.play();
                });
              }),
            (function (e) {
              document.querySelectorAll(e).length > 0 &&
                document.querySelectorAll(e).forEach(function (e) {
                  e.addEventListener("click", function (e) {
                    e.stopPropagation();
                    var t = le(e.target)
                      .parents(".js-video-section")
                      .find(".js-hero-video-cont");
                    t.removeClass("is-enabled"),
                      document.body.classList.remove("hide-scrollbar"),
                      t.animate({ opacity: 0 }, 500);
                    var n = t.find(".videoPlayer").get(0);
                    n.pause(), (n.currentTime = 0);
                  });
                });
            })(".js-stop-video"));
        })(".videoPlayer"),
        ue(".jsOpenStudyDetails").each(function () {
          var e = ue(this),
            t = e.find(".jsStudyDetails").find(".jsCloseDetails");
          e.on("click", function (e) {
            e.stopPropagation();
          }),
            t.on("click", function (e) {
              e.stopPropagation();
              var t = ue(this).parents(".js-acc-item");
              t.hasClass("is-active") &&
                t.find(".js-acc-button").trigger("click");
            }),
            ue(".jsSeeOurWork")
              .find(".js-tabs-nav-item")
              .on("click", function (e) {
                e.preventDefault(),
                  ue(this)
                    .parents(".jsSeeOurWork")
                    .find(".js-acc-item.is-active")
                    .find(".js-acc-button")
                    .trigger("click");
              });
        }),
        de(".whitepaper__wrapper").length > 0 &&
          (de(".whitepaper__wrapper .whitepaper-close").on(
            "click",
            function () {
              de(".whitepaper__wrapper").fadeOut().removeClass("active");
            }
          ),
          de(".whitepaper").on("click", function (e) {
            e.stopPropagation();
          }),
          de("body").on("click", function () {
            de(".whitepaper__wrapper").hasClass("active") &&
              de(".whitepaper__wrapper").fadeOut().removeClass("active");
          })),
        document.querySelectorAll(".read-more-wrapper").forEach(function (e) {
          var t = e.querySelector(".js-read-more-toggle"),
            n = e.querySelector(".read-more-text"),
            i = (e.classList.contains("is-active"), n ? n.scrollHeight : 0);
          t.addEventListener("mouseenter", function () {
            n &&
              (pe(".read-more-wrapper").removeClass("is-active"),
              pe(".read-more-text").css({ maxHeight: "0" }),
              e.classList.add("is-active"),
              (n.style.maxHeight = "".concat(i, "px")));
          });
        }),
        (r = dsAjax),
        ve("#load_more_projects").on("click", function (e) {
          e.preventDefault();
          var t = ve("#load_more_projects"),
            n = t.attr("data-visible"),
            i = t.attr("data-total"),
            o = t.attr("data-load_more"),
            a = t.attr("data-id"),
            s = ve("#project-list"),
            c = {
              action: "more_blog_projects",
              id: a,
              visible: n,
              loadMore: o,
              projectsJson: s.data("projects"),
            };
          ve.ajax({
            url: r.admin_url,
            data: c,
            type: "POST",
            beforeSend: function (e) {
              t.addClass("loading");
            },
            success: function (e) {
              e
                ? (ve(s).append(e.output),
                  t.attr("data-visible", e.visible),
                  t.removeClass("loading"),
                  e.visible >= i && t.hide())
                : t.hide();
            },
          });
        }),
        (function (e) {
          var t = me(".js-other-insights"),
            n = t.data("offset"),
            i = me(".js-load-more-insights"),
            o = e.category_id,
            r = e.tag_id,
            a = me(".js-show-num-insights"),
            s = t.data("perpage"),
            c = t.data("found-posts"),
            l = 9,
            u = "loadmore-animated";
          i.on("click", function (d) {
            d.preventDefault(),
              (function () {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  o =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 9,
                  s =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null,
                  d =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                i.addClass("loading"),
                  me.ajax({
                    url: "".concat(e.admin_url, "?action=more_insights"),
                    method: "GET",
                    dataType: "json",
                    data: {
                      offset: n,
                      posts_per_page: o,
                      category_id: s,
                      tag_id: r,
                      sc: e.sc,
                      s: e.s,
                      filter: d,
                      ajax: !0,
                    },
                    success: function (e) {
                      me(".js-message-insights").html(null),
                        !1 !== e &&
                          ((l += e.count),
                          d && t.html(null),
                          t
                            .append(e.output)
                            .animate({ opacity: 1 }, 200, function () {
                              a.html(
                                parseInt(a.html(), 10) + parseInt(e.count, 10),
                                10
                              ),
                                me(".js-found-insights").html() === a.html() &&
                                  i.hide(),
                                me(".".concat(u)).animate({ opacity: 1 }, 200),
                                me(".".concat(u)).each(function (e, t) {
                                  me(t).removeClass(".".concat(u));
                                  var n = me(".jsInsightsLoadedMore");
                                  me(".jsMainCont").append(n.html()),
                                    n.remove();
                                });
                            }),
                          i.removeClass("loading"),
                          (0 === e.count || e.count < o || l >= c) &&
                            (i.hide(), t.removeClass("hidden"))),
                        (!1 !== e && !1 !== e.output) ||
                          (me(".js-showing-insights").hide(),
                          i.hide(),
                          me(".js-message-insights").html("No More Posts"));
                    },
                  });
              })((n += t.data("perpage")), s, o);
          });
        })(dsAjax),
        (function (e) {
          var t = he(".js-other-case-studies"),
            n = t.data("offset"),
            i = he(".js-load-more-case-studies"),
            o = he(".js-pagination-case-studies"),
            r = t.data("perpage"),
            a = (t.data("found-posts"), t.data("case-studies")),
            s = "loadmore-animated";
          i.on("click", function (c) {
            c.preventDefault(),
              (function () {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 9,
                  c =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                i.addClass("loading"),
                  he.ajax({
                    url: "".concat(e.admin_url, "?action=more_case_studies"),
                    method: "GET",
                    dataType: "json",
                    data: {
                      offset: n,
                      posts_per_page: r,
                      case_studies: a,
                      ajax: !0,
                    },
                    success: function (e) {
                      he(".js-message-case-studies").html(null),
                        !1 !== e &&
                          (e.count,
                          c && t.html(null),
                          t
                            .append(e.output)
                            .animate({ opacity: 1 }, 200, function () {
                              he(".".concat(s)).animate({ opacity: 1 }, 200),
                                he(".".concat(s)).each(function (e, t) {
                                  he(t).removeClass(".".concat(s));
                                  var n = he(".jsCaseStudiesLoadedMore");
                                  he(".jsMainCont").append(n.html()),
                                    n.remove();
                                });
                            }),
                          i.removeClass("loading"),
                          (0 === e.count || e.count < r) &&
                            (i.hide(), o.hide(), t.removeClass("hidden"))),
                        (!1 !== e && !1 !== e.output) ||
                          (i.hide(), o.hide(), t.removeClass("hidden"));
                    },
                  });
              })((n += t.data("perpage")), r);
          });
        })(dsAjax),
        (function (e) {
          var t = document.querySelector(e),
            n = document.querySelector(".jsSearchForm"),
            i = document.querySelector(".jsSearchProd"),
            o = document.querySelector(".jsSearchBtn"),
            r = ye(".jsAutoSearchParent");
          function a() {
            n.classList.remove("is-active"),
              t.setAttribute("aria-expanded", "false"),
              r.removeClass("active"),
              i.setAttribute("tabindex", "-1"),
              o.setAttribute("tabindex", "-1");
          }
          t &&
            (t.addEventListener("click", function (e) {
              e.preventDefault(),
                "false" === t.getAttribute("aria-expanded")
                  ? (n.classList.add("is-active"),
                    t.setAttribute("aria-expanded", "true"),
                    i.removeAttribute("tabindex"),
                    (i.value = ""),
                    o.removeAttribute("tabindex"),
                    ye(".jsSearchProd").focus())
                  : a();
            }),
            i.addEventListener("focus", function (e) {
              i.value = "";
            })),
            document.addEventListener(
              "click",
              function (e) {
                e.target.closest(".c-site-search") ||
                  (t && "true" === t.getAttribute("aria-expanded") && a());
              },
              !1
            );
        })(".js-searchToggle"),
        (a = we.home_popup),
        (c = we.is_front_page),
        (d = null),
        (f = null),
        ge(document).ready(function () {
          if (document.querySelector(".exitpopup")) {
            var e = function () {
              c ? (d = Se("home-popup")) : (f = Se("other-popup")),
                ((c && !d) || (!c && !f)) &&
                  (ge(".exitpopup_bg").fadeIn(),
                  ge(".exitpopup").fadeIn(),
                  ge(".exitpopup_bg").addClass("visible"),
                  ge(".exitpopup").addClass("visible"),
                  (function (e, t, n) {
                    var i = new Date();
                    i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
                    var o = "expires=".concat(i.toUTCString());
                    document.cookie = ""
                      .concat(e, "=")
                      .concat(t, ";")
                      .concat(o, ";");
                  })(c ? "home-popup" : "other-popup", "1", 7));
            };
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            )
              ? new DialogTrigger(
                  e,
                  { trigger: "scrollUp", percentUp: 10 },
                  { trigger: "scrollDown", percentDown: 50 }
                )
              : new DialogTrigger(e, { trigger: "exitIntent" }),
              ge(".js-exit-popup__close").click(function () {
                ge(".exit-popup").fadeOut(),
                  ge(".exitpopup_bg").fadeOut(),
                  ge(".exitpopup_bg").removeClass("visible"),
                  ge(".exitpopup").removeClass("visible");
              });
          }
          ge("body").click(function (e) {
            ge(e.target).hasClass("exitpopup_bg") &&
              (ge(".exitpopup_bg").fadeOut(),
              ge(".exit-popup").fadeOut(),
              ge(".exitpopup_bg").removeClass("visible"),
              ge(".exitpopup").removeClass("visible"));
          });
        }),
        document.addEventListener(
          "wpcf7submit",
          function (e) {
            a &&
              +a == e.detail.contactFormId &&
              "validation_failed" !== e.detail.apiResponse.status &&
              "mail_failed" !== e.detail.apiResponse.status &&
              (ge(".jsPopupForm").hide(), ge(".jsPopupThankMsg").show());
          },
          !1
        ),
        (p = document.getElementById("backToTop")) &&
          p.addEventListener("click", function () {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
          }),
        (I = document.getElementById("singleProgressBar")) &&
          window.addEventListener("scroll", function () {
            var e;
            (e =
              ((document.body.scrollTop || document.documentElement.scrollTop) /
                (document.documentElement.scrollHeight -
                  document.documentElement.clientHeight)) *
              100),
              (I.style.width = e + "%");
          }),
        je("#js-toggleTrigger").click(function () {
          je("#js-toggleElement ").toggleClass("open"),
            je(this).toggleClass("is-active");
        }),
        je("#js-toggleTrigger").mouseenter(function () {
          je("#js-toggleElement ").addClass("open"),
            je(this).addClass("is-active");
        }),
        je("#js-toggleElement").mouseleave(function () {
          je(this).removeClass("open"),
            je("#js-toggleTrigger").removeClass("is-active");
        }),
        (b = document.querySelectorAll(".js-tbnav")),
        window.innerWidth > 1024 &&
          b.length > 0 &&
          b.forEach(function (e) {
            var t = e.querySelectorAll(".js-tabs-nav-item"),
              n = e.querySelector(".js-tabs-nav-underline");
            t.forEach(function (e, t) {
              e.addEventListener("click", function () {
                !(function (e, t) {
                  e &&
                    t >= 0 &&
                    (e.style.transform = "translate3d(" + 100 * t + "%,0,0)");
                })(n, t);
              });
            });
          }),
        (y = Le(".js-case-study-tabs")).length > 0 &&
          y.each(function (e, t) {
            var n = Le(this);
            n.find(".js-tabs-nav-item").on("click", function (e) {
              var t = Le(this),
                i = t.attr("data-img-index"),
                o = t.parents(".js-tab");
              if (
                o.find(".js-img-tab[data-tab-index='".concat(i, "']")).length >
                0
              ) {
                var r = o
                  .find(".js-img-tab[data-tab-index='".concat(i, "']"))
                  .attr("data-src");
                n.find(".l-tbnav-v1__img").animate(
                  { opacity: 0 },
                  200,
                  function () {
                    n.find(".js-left-img").attr("src", r),
                      n.find(".js-left-img").attr("data-src", r),
                      n.find(".l-tbnav-v1__img").animate({ opacity: 1 }, 200);
                  }
                );
              }
            });
          }),
        (function (e, t) {
          var n = document.querySelector(e);
          if ((document.querySelector(e), n)) {
            var i = document.querySelector(".s-before-after");
            n.addEventListener("click", function (e) {
              e.preventDefault(),
                i.classList.contains("ba-active")
                  ? (i.classList.remove("ba-active"),
                    i.scrollIntoView({ offset: { top: 250 } }))
                  : i.classList.add("ba-active");
            });
          }
        })(".js-view-more"),
        (function () {
          ke(".ba-expander .c-qz-btn").each(function () {
            ke(this).click(function () {
              !(function (e) {
                if (e.hasClass("on"))
                  e.parent().prev().css("max-height", ""),
                    e.removeClass("on"),
                    e.parent().parent().removeClass("is-expanded"),
                    e.parent().prev().get(0).scrollIntoView();
                else {
                  var t = e
                    .parent()
                    .prev()
                    .find(".c-image__media")
                    .outerHeight();
                  e.parent().prev().css("max-height", t),
                    e.addClass("on"),
                    e.parent().parent().addClass("is-expanded");
                }
              })(ke(this));
            });
          });
          var e = ke(location).prop("hash").substr(1);
          ke(".ba-single .js-tabs-panel").each(function () {
            var t = ke(this),
              n = t.find(".ba-single__project"),
              i = t.attr("id"),
              o = ke(".ba-single .js-tabs-nav-item[aria-controls=" + i + "]");
            e &&
              (function (e, t) {
                e.removeClass("is-active"),
                  e.attr("aria-hidden", "false"),
                  t.removeClass("is-active"),
                  t.attr("aria-selected", "false");
              })(t, o),
              n.each(function () {
                var n = this,
                  r = ke(this).find(".ba-single__project-hash").attr("name");
                e == r &&
                  (ke(this).closest(".lm-col").addClass("on"),
                  ke(this).closest(".lm-col").prevAll().addClass("on"),
                  i ==
                    ke(this)
                      .find(".c-qz-btn")
                      .closest(".js-tabs-panel")
                      .attr("id") &&
                    ((function (e, t) {
                      e.addClass("is-active"),
                        e.attr("aria-hidden", "ture"),
                        t.addClass("is-active"),
                        t.attr("aria-selected", "ture");
                    })(t, o),
                    setTimeout(function () {
                      ke(n).find(".c-qz-btn").click();
                    }, 1500),
                    setTimeout(function () {
                      ke(n).find(".c-image").css("max-height", "none");
                    }, 2100)));
              });
          }),
            ke(".lm-ba").each(function () {
              ke(this).click(function () {
                ke(this).closest(".lm-col").next().addClass("on");
              });
            });
        })(),
        (g = document.querySelector(".popup-raq")),
        (L = document.querySelector(".popup-raq__close")),
        (k = document.querySelector("body")),
        (D = "popup"),
        (q = "closed"),
        sessionStorage.getItem(D) !== q &&
          g &&
          setTimeout(function () {
            g.classList.add("is-active"),
              k.classList.add("raq-active"),
              L.addEventListener("click", function () {
                sessionStorage.setItem(D, q),
                  g.classList.remove("is-active"),
                  k.classList.remove("raq-active");
              });
          }, 15e3),
        Ae(".hero .projects").length &&
          setInterval(function () {
            var e = Ae(".js-auto-loop-tabs.is-active"),
              t = Ae(".js-auto-loop-tabs.first");
            e.hasClass("last") ? t.click() : e.next().click();
          }, 4e3),
        new qe(),
        new oe(),
        new ze(),
        new Qe(),
        ce.forEach(function (e, t) {
          var n = "".concat("js-tab-acc", "-").concat(t),
            i = "#".concat(n);
          e.setAttribute("id", n), new se(i);
        }),
        window.matchMedia("(min-width: 1025px)").matches &&
          (pt()({
            threshold: 0.2,
            once: !0,
            targets:
              ".in-view, .a-fade-trans, .s-text-box, .s-blog-section, .l-sign-up, .form-section__inner, .s-analysis, .s-services-custom, .services .l-dcbl, .s-team .bg-text",
          }),
          pt()({ threshold: 0, once: !1, targets: ".in-view-r" }),
          (window.onload = function () {
            for (
              var e = document.getElementsByClassName("services-media"),
                t = function () {
                  var t = e[n].querySelector("video");
                  e[n].addEventListener("mouseover", function (e) {
                    t.play();
                  }),
                    e[n].addEventListener("mouseout", function (e) {
                      t.pause();
                    });
                },
                n = 0;
              n < e.length;
              n++
            )
              t();
          }),
          Ee(".footer-nav > .menu-item").each(function () {
            Ee(".footer-nav > .menu-item").hasClass("current-menu-parent")
              ? (Ee(".footer-nav > .current-menu-parent").addClass("is-hover"),
                Ee(".footer-nav").mouseleave(function () {
                  Ee(".footer-nav > .current-menu-parent").addClass("is-hover");
                }))
              : (Ee(".footer-nav > .menu-item:first-child").addClass(
                  "is-hover"
                ),
                Ee(".footer-nav").mouseleave(function () {
                  Ee(".footer-nav > .menu-item:first-child").addClass(
                    "is-hover"
                  );
                })),
              Ee(this).mouseenter(function () {
                Ee(this).addClass("is-hover");
              }),
              Ee(this).mouseleave(function () {
                Ee(".footer-nav > .menu-item").removeClass("is-hover");
              });
          }));
    });
    var bt = new LazyLoad({ elements_selector: ".lazy" });
    (window.myLazyLoad = bt),
      (vt.event.special.touchstart = {
        setup: function (e, t, n) {
          this.addEventListener("touchstart", n, {
            passive: !t.includes("noPreventDefault"),
          });
        },
      }),
      (vt.event.special.touchmove = {
        setup: function (e, t, n) {
          this.addEventListener("touchmove", n, {
            passive: !t.includes("noPreventDefault"),
          });
        },
      }),
      (vt.event.special.wheel = {
        setup: function (e, t, n) {
          this.addEventListener("wheel", n, { passive: !0 });
        },
      }),
      (vt.event.special.mousewheel = {
        setup: function (e, t, n) {
          this.addEventListener("mousewheel", n, { passive: !0 });
        },
      });
  })();
})();
