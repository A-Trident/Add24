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
  