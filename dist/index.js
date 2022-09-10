"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("react"),
  r = require("sharply-kit"),
  t = require("react-hook-form"),
  n = require("@hookform/resolvers/yup"),
  a = require("yup"),
  l = require("libphonenumber-js");
function o(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
function i(e) {
  if (e && e.__esModule) return e;
  var r = Object.create(null);
  return (
    e &&
      Object.keys(e).forEach(function (t) {
        if ("default" !== t) {
          var n = Object.getOwnPropertyDescriptor(e, t);
          Object.defineProperty(
            r,
            t,
            n.get
              ? n
              : {
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  },
                }
          );
        }
      }),
    (r.default = e),
    Object.freeze(r)
  );
}
var u,
  d,
  c,
  s = i(e),
  m = o(e),
  f = i(a);
function p() {
  return (p =
    Object.assign ||
    function (e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e;
    }).apply(this, arguments);
}
function v(e) {
  return s.createElement(
    "svg",
    p(
      {
        width: 20,
        height: 18,
        fill: "var(--primary)",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    u ||
      (u = s.createElement("path", {
        d:
          "M19.972 10.132L16.196.65a.393.393 0 00-.51-.22l-15.32 6.1a.385.385 0 00-.157.125.388.388 0 00-.209.34v10.208c0 .217.176.393.393.393h16.489a.393.393 0 00.393-.393V11.63l2.478-.987c.201-.08.3-.308.219-.51zm-3.483 6.68H.785V7.389H16.49v9.423zM6.551 6.606l6.573-2.62c.587.617 1.4.968 2.251.971l.656 1.649H6.55zm10.724 4.18v-3.79a.393.393 0 00-.393-.392h-.006l-.832-2.09a.325.325 0 00-.032-.049.388.388 0 00-.41-.302 2.348 2.348 0 01-2.06-.887.39.39 0 00-.503-.088.448.448 0 00-.055.01L4.958 6.395a.388.388 0 00-.215.21H2.305l13.307-5.298 3.486 8.753-1.823.727z",
        fill: "inherit",
      })),
    d ||
      (d = s.createElement("path", {
        d:
          "M1.85 14.161a2.347 2.347 0 011.586 1.583c.05.167.202.28.376.28a.363.363 0 00.06-.009.365.365 0 00.054.011h9.423a.339.339 0 00.047-.01.366.366 0 00.442-.268v-.002a2.348 2.348 0 011.586-1.585c.184-.057.3-.241.269-.432a.38.38 0 00.011-.058V10.53a.348.348 0 00-.012-.058.387.387 0 00-.269-.432 2.345 2.345 0 01-1.584-1.585.388.388 0 00-.435-.27.37.37 0 00-.055-.01H3.926a.37.37 0 00-.058.011.388.388 0 00-.432.27A2.347 2.347 0 011.85 10.04a.388.388 0 00-.27.432.398.398 0 00-.01.058v3.14a.36.36 0 00.01.055.389.389 0 00.27.436zm.506-3.472a3.115 3.115 0 001.73-1.73h9.103a3.116 3.116 0 001.73 1.73v2.822a3.12 3.12 0 00-1.73 1.73H4.085a3.12 3.12 0 00-1.73-1.73V10.69z",
        fill: "inherit",
      })),
    c ||
      (c = s.createElement("path", {
        d:
          "M8.637 14.456a2.356 2.356 0 100-4.711 2.356 2.356 0 000 4.711zm0-3.926a1.57 1.57 0 110 3.14 1.57 1.57 0 010-3.14zM4.319 12.69a.589.589 0 100-1.179.589.589 0 000 1.178zm0-.786a.196.196 0 110 .393.196.196 0 010-.393zM12.956 12.69a.589.589 0 100-1.179.589.589 0 000 1.178zm0-.786a.196.196 0 110 .393.196.196 0 010-.393z",
        fill: "inherit",
      }))
  );
}
function E(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function y() {
  return (y =
    Object.assign ||
    function (e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e;
    }).apply(this, arguments);
}
function h(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function b(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? h(Object(t), !0).forEach(function (r) {
          E(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : h(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function g(e, r) {
  if (null == e) return {};
  var t,
    n,
    a = (function (e, r) {
      if (null == e) return {};
      var t,
        n,
        a = {},
        l = Object.keys(e);
      for (n = 0; n < l.length; n++)
        (t = l[n]), r.indexOf(t) >= 0 || (a[t] = e[t]);
      return a;
    })(e, r);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (n = 0; n < l.length; n++)
      (t = l[n]),
        r.indexOf(t) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
  }
  return a;
}
function w(e, r) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, r) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
        return;
      var t = [],
        n = !0,
        a = !1,
        l = void 0;
      try {
        for (
          var o, i = e[Symbol.iterator]();
          !(n = (o = i.next()).done) && (t.push(o.value), !r || t.length !== r);
          n = !0
        );
      } catch (e) {
        (a = !0), (l = e);
      } finally {
        try {
          n || null == i.return || i.return();
        } finally {
          if (a) throw l;
        }
      }
      return t;
    })(e, r) ||
    (function (e, r) {
      if (!e) return;
      if ("string" == typeof e) return F(e, r);
      var t = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === t && e.constructor && (t = e.constructor.name);
      if ("Map" === t || "Set" === t) return Array.from(e);
      if (
        "Arguments" === t ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
      )
        return F(e, r);
    })(e, r) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function F(e, r) {
  (null == r || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
var S = function (e) {
  var t = e.amount;
  return null == t
    ? null
    : m.default.createElement(
        r.Card,
        { as: r.Stack, alignItems: "center", spacing: 2, direction: "row" },
        m.default.createElement(
          r.Box,
          {
            alignItems: "center",
            display: "flex",
            flexShrink: 0,
            height: "32px",
            justifyContent: "center",
            sx: {
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
            },
            width: "32px",
          },
          m.default.createElement(r.Box, {
            backgroundColor: "primary",
            sx: {
              height: "100%",
              left: 0,
              opacity: 0.1,
              position: "absolute",
              top: 0,
              width: "100%",
            },
          }),
          m.default.createElement(v, null)
        ),
        m.default.createElement(r.Text, { fontSize: "xs" }, "Delivery Fee"),
        m.default.createElement(
          r.Text,
          { color: "heading", fontWeight: "bold" },
          "₦",
          (function (e) {
            var r =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            if (e && (void 0 !== e || null !== e)) {
              var t = parseFloat(e);
              if (!r && !t) return null;
              var n = w(t.toFixed(2).toString().split("."), 1)[0];
              return "".concat(n.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            }
            return e;
          })(t / 100)
        )
      );
};
function C(e) {
  var r = { exports: {} };
  return e(r, r.exports), r.exports;
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
}
var x = "function" == typeof Symbol && Symbol.for,
  P = x ? Symbol.for("react.element") : 60103,
  O = x ? Symbol.for("react.portal") : 60106,
  N = x ? Symbol.for("react.fragment") : 60107,
  R = x ? Symbol.for("react.strict_mode") : 60108,
  T = x ? Symbol.for("react.profiler") : 60114,
  I = x ? Symbol.for("react.provider") : 60109,
  q = x ? Symbol.for("react.context") : 60110,
  A = x ? Symbol.for("react.async_mode") : 60111,
  k = x ? Symbol.for("react.concurrent_mode") : 60111,
  j = x ? Symbol.for("react.forward_ref") : 60112,
  L = x ? Symbol.for("react.suspense") : 60113,
  D = x ? Symbol.for("react.suspense_list") : 60120,
  $ = x ? Symbol.for("react.memo") : 60115,
  G = x ? Symbol.for("react.lazy") : 60116,
  _ = x ? Symbol.for("react.block") : 60121,
  B = x ? Symbol.for("react.fundamental") : 60117,
  M = x ? Symbol.for("react.responder") : 60118,
  V = x ? Symbol.for("react.scope") : 60119;
function z(e) {
  if ("object" == typeof e && null !== e) {
    var r = e.$$typeof;
    switch (r) {
      case P:
        switch ((e = e.type)) {
          case A:
          case k:
          case N:
          case T:
          case R:
          case L:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case q:
              case j:
              case G:
              case $:
              case I:
                return e;
              default:
                return r;
            }
        }
      case O:
        return r;
    }
  }
}
function W(e) {
  return z(e) === k;
}
var Y = {
    AsyncMode: A,
    ConcurrentMode: k,
    ContextConsumer: q,
    ContextProvider: I,
    Element: P,
    ForwardRef: j,
    Fragment: N,
    Lazy: G,
    Memo: $,
    Portal: O,
    Profiler: T,
    StrictMode: R,
    Suspense: L,
    isAsyncMode: function (e) {
      return W(e) || z(e) === A;
    },
    isConcurrentMode: W,
    isContextConsumer: function (e) {
      return z(e) === q;
    },
    isContextProvider: function (e) {
      return z(e) === I;
    },
    isElement: function (e) {
      return "object" == typeof e && null !== e && e.$$typeof === P;
    },
    isForwardRef: function (e) {
      return z(e) === j;
    },
    isFragment: function (e) {
      return z(e) === N;
    },
    isLazy: function (e) {
      return z(e) === G;
    },
    isMemo: function (e) {
      return z(e) === $;
    },
    isPortal: function (e) {
      return z(e) === O;
    },
    isProfiler: function (e) {
      return z(e) === T;
    },
    isStrictMode: function (e) {
      return z(e) === R;
    },
    isSuspense: function (e) {
      return z(e) === L;
    },
    isValidElementType: function (e) {
      return (
        "string" == typeof e ||
        "function" == typeof e ||
        e === N ||
        e === k ||
        e === T ||
        e === R ||
        e === L ||
        e === D ||
        ("object" == typeof e &&
          null !== e &&
          (e.$$typeof === G ||
            e.$$typeof === $ ||
            e.$$typeof === I ||
            e.$$typeof === q ||
            e.$$typeof === j ||
            e.$$typeof === B ||
            e.$$typeof === M ||
            e.$$typeof === V ||
            e.$$typeof === _))
      );
    },
    typeOf: z,
  },
  U = C(function (e, r) {
    "production" !== process.env.NODE_ENV &&
      (function () {
        var e = "function" == typeof Symbol && Symbol.for,
          t = e ? Symbol.for("react.element") : 60103,
          n = e ? Symbol.for("react.portal") : 60106,
          a = e ? Symbol.for("react.fragment") : 60107,
          l = e ? Symbol.for("react.strict_mode") : 60108,
          o = e ? Symbol.for("react.profiler") : 60114,
          i = e ? Symbol.for("react.provider") : 60109,
          u = e ? Symbol.for("react.context") : 60110,
          d = e ? Symbol.for("react.async_mode") : 60111,
          c = e ? Symbol.for("react.concurrent_mode") : 60111,
          s = e ? Symbol.for("react.forward_ref") : 60112,
          m = e ? Symbol.for("react.suspense") : 60113,
          f = e ? Symbol.for("react.suspense_list") : 60120,
          p = e ? Symbol.for("react.memo") : 60115,
          v = e ? Symbol.for("react.lazy") : 60116,
          E = e ? Symbol.for("react.block") : 60121,
          y = e ? Symbol.for("react.fundamental") : 60117,
          h = e ? Symbol.for("react.responder") : 60118,
          b = e ? Symbol.for("react.scope") : 60119;
        function g(e) {
          if ("object" == typeof e && null !== e) {
            var r = e.$$typeof;
            switch (r) {
              case t:
                var f = e.type;
                switch (f) {
                  case d:
                  case c:
                  case a:
                  case o:
                  case l:
                  case m:
                    return f;
                  default:
                    var E = f && f.$$typeof;
                    switch (E) {
                      case u:
                      case s:
                      case v:
                      case p:
                      case i:
                        return E;
                      default:
                        return r;
                    }
                }
              case n:
                return r;
            }
          }
        }
        var w = d,
          F = c,
          S = u,
          C = i,
          x = t,
          P = s,
          O = a,
          N = v,
          R = p,
          T = n,
          I = o,
          q = l,
          A = m,
          k = !1;
        function j(e) {
          return g(e) === c;
        }
        (r.AsyncMode = w),
          (r.ConcurrentMode = F),
          (r.ContextConsumer = S),
          (r.ContextProvider = C),
          (r.Element = x),
          (r.ForwardRef = P),
          (r.Fragment = O),
          (r.Lazy = N),
          (r.Memo = R),
          (r.Portal = T),
          (r.Profiler = I),
          (r.StrictMode = q),
          (r.Suspense = A),
          (r.isAsyncMode = function (e) {
            return (
              k ||
                ((k = !0),
                console.warn(
                  "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                )),
              j(e) || g(e) === d
            );
          }),
          (r.isConcurrentMode = j),
          (r.isContextConsumer = function (e) {
            return g(e) === u;
          }),
          (r.isContextProvider = function (e) {
            return g(e) === i;
          }),
          (r.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === t;
          }),
          (r.isForwardRef = function (e) {
            return g(e) === s;
          }),
          (r.isFragment = function (e) {
            return g(e) === a;
          }),
          (r.isLazy = function (e) {
            return g(e) === v;
          }),
          (r.isMemo = function (e) {
            return g(e) === p;
          }),
          (r.isPortal = function (e) {
            return g(e) === n;
          }),
          (r.isProfiler = function (e) {
            return g(e) === o;
          }),
          (r.isStrictMode = function (e) {
            return g(e) === l;
          }),
          (r.isSuspense = function (e) {
            return g(e) === m;
          }),
          (r.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === a ||
              e === c ||
              e === o ||
              e === l ||
              e === m ||
              e === f ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === v ||
                  e.$$typeof === p ||
                  e.$$typeof === i ||
                  e.$$typeof === u ||
                  e.$$typeof === s ||
                  e.$$typeof === y ||
                  e.$$typeof === h ||
                  e.$$typeof === b ||
                  e.$$typeof === E))
            );
          }),
          (r.typeOf = g);
      })();
  }),
  H = C(function (e) {
    "production" === process.env.NODE_ENV ? (e.exports = Y) : (e.exports = U);
  }),
  J = Object.getOwnPropertySymbols,
  K = Object.prototype.hasOwnProperty,
  Q = Object.prototype.propertyIsEnumerable;
function X(e) {
  if (null == e)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
var Z = (function () {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
      for (var r = {}, t = 0; t < 10; t++) r["_" + String.fromCharCode(t)] = t;
      if (
        "0123456789" !==
        Object.getOwnPropertyNames(r)
          .map(function (e) {
            return r[e];
          })
          .join("")
      )
        return !1;
      var n = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (e) {
          n[e] = e;
        }),
        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
      );
    } catch (e) {
      return !1;
    }
  })()
    ? Object.assign
    : function (e, r) {
        for (var t, n, a = X(e), l = 1; l < arguments.length; l++) {
          for (var o in (t = Object(arguments[l])))
            K.call(t, o) && (a[o] = t[o]);
          if (J) {
            n = J(t);
            for (var i = 0; i < n.length; i++)
              Q.call(t, n[i]) && (a[n[i]] = t[n[i]]);
          }
        }
        return a;
      },
  ee = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  re = function () {};
if ("production" !== process.env.NODE_ENV) {
  var te = ee,
    ne = {},
    ae = Function.call.bind(Object.prototype.hasOwnProperty);
  re = function (e) {
    var r = "Warning: " + e;
    "undefined" != typeof console && console.error(r);
    try {
      throw new Error(r);
    } catch (e) {}
  };
}
function le(e, r, t, n, a) {
  if ("production" !== process.env.NODE_ENV)
    for (var l in e)
      if (ae(e, l)) {
        var o;
        try {
          if ("function" != typeof e[l]) {
            var i = Error(
              (n || "React class") +
                ": " +
                t +
                " type `" +
                l +
                "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                typeof e[l] +
                "`."
            );
            throw ((i.name = "Invariant Violation"), i);
          }
          o = e[l](r, l, n, t, null, te);
        } catch (e) {
          o = e;
        }
        if (
          (!o ||
            o instanceof Error ||
            re(
              (n || "React class") +
                ": type specification of " +
                t +
                " `" +
                l +
                "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                typeof o +
                ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
            ),
          o instanceof Error && !(o.message in ne))
        ) {
          ne[o.message] = !0;
          var u = a ? a() : "";
          re("Failed " + t + " type: " + o.message + (null != u ? u : ""));
        }
      }
}
le.resetWarningCache = function () {
  "production" !== process.env.NODE_ENV && (ne = {});
};
var oe = le,
  ie = Function.call.bind(Object.prototype.hasOwnProperty),
  ue = function () {};
function de() {
  return null;
}
"production" !== process.env.NODE_ENV &&
  (ue = function (e) {
    var r = "Warning: " + e;
    "undefined" != typeof console && console.error(r);
    try {
      throw new Error(r);
    } catch (e) {}
  });
var ce = function (e, r) {
  var t = "function" == typeof Symbol && Symbol.iterator;
  var n = "<<anonymous>>",
    a = {
      array: u("array"),
      bool: u("boolean"),
      func: u("function"),
      number: u("number"),
      object: u("object"),
      string: u("string"),
      symbol: u("symbol"),
      any: i(de),
      arrayOf: function (e) {
        return i(function (r, t, n, a, l) {
          if ("function" != typeof e)
            return new o(
              "Property `" +
                l +
                "` of component `" +
                n +
                "` has invalid PropType notation inside arrayOf."
            );
          var i = r[t];
          if (!Array.isArray(i))
            return new o(
              "Invalid " +
                a +
                " `" +
                l +
                "` of type `" +
                c(i) +
                "` supplied to `" +
                n +
                "`, expected an array."
            );
          for (var u = 0; u < i.length; u++) {
            var d = e(i, u, n, a, l + "[" + u + "]", ee);
            if (d instanceof Error) return d;
          }
          return null;
        });
      },
      element: i(function (r, t, n, a, l) {
        var i = r[t];
        return e(i)
          ? null
          : new o(
              "Invalid " +
                a +
                " `" +
                l +
                "` of type `" +
                c(i) +
                "` supplied to `" +
                n +
                "`, expected a single ReactElement."
            );
      }),
      elementType: i(function (e, r, t, n, a) {
        var l = e[r];
        return H.isValidElementType(l)
          ? null
          : new o(
              "Invalid " +
                n +
                " `" +
                a +
                "` of type `" +
                c(l) +
                "` supplied to `" +
                t +
                "`, expected a single ReactElement type."
            );
      }),
      instanceOf: function (e) {
        return i(function (r, t, a, l, i) {
          if (!(r[t] instanceof e)) {
            var u = e.name || n;
            return new o(
              "Invalid " +
                l +
                " `" +
                i +
                "` of type `" +
                (((d = r[t]).constructor && d.constructor.name
                  ? d.constructor.name
                  : n) +
                  "` supplied to `") +
                a +
                "`, expected instance of `" +
                u +
                "`."
            );
          }
          var d;
          return null;
        });
      },
      node: i(function (e, r, t, n, a) {
        return d(e[r])
          ? null
          : new o(
              "Invalid " +
                n +
                " `" +
                a +
                "` supplied to `" +
                t +
                "`, expected a ReactNode."
            );
      }),
      objectOf: function (e) {
        return i(function (r, t, n, a, l) {
          if ("function" != typeof e)
            return new o(
              "Property `" +
                l +
                "` of component `" +
                n +
                "` has invalid PropType notation inside objectOf."
            );
          var i = r[t],
            u = c(i);
          if ("object" !== u)
            return new o(
              "Invalid " +
                a +
                " `" +
                l +
                "` of type `" +
                u +
                "` supplied to `" +
                n +
                "`, expected an object."
            );
          for (var d in i)
            if (ie(i, d)) {
              var s = e(i, d, n, a, l + "." + d, ee);
              if (s instanceof Error) return s;
            }
          return null;
        });
      },
      oneOf: function (e) {
        if (!Array.isArray(e))
          return (
            "production" !== process.env.NODE_ENV &&
              ue(
                arguments.length > 1
                  ? "Invalid arguments supplied to oneOf, expected an array, got " +
                      arguments.length +
                      " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                  : "Invalid argument supplied to oneOf, expected an array."
              ),
            de
          );
        function r(r, t, n, a, i) {
          for (var u = r[t], d = 0; d < e.length; d++)
            if (l(u, e[d])) return null;
          var c = JSON.stringify(e, function (e, r) {
            return "symbol" === s(r) ? String(r) : r;
          });
          return new o(
            "Invalid " +
              a +
              " `" +
              i +
              "` of value `" +
              String(u) +
              "` supplied to `" +
              n +
              "`, expected one of " +
              c +
              "."
          );
        }
        return i(r);
      },
      oneOfType: function (e) {
        if (!Array.isArray(e))
          return (
            "production" !== process.env.NODE_ENV &&
              ue(
                "Invalid argument supplied to oneOfType, expected an instance of array."
              ),
            de
          );
        for (var r = 0; r < e.length; r++) {
          var t = e[r];
          if ("function" != typeof t)
            return (
              ue(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                  m(t) +
                  " at index " +
                  r +
                  "."
              ),
              de
            );
        }
        return i(function (r, t, n, a, l) {
          for (var i = 0; i < e.length; i++)
            if (null == (0, e[i])(r, t, n, a, l, ee)) return null;
          return new o(
            "Invalid " + a + " `" + l + "` supplied to `" + n + "`."
          );
        });
      },
      shape: function (e) {
        return i(function (r, t, n, a, l) {
          var i = r[t],
            u = c(i);
          if ("object" !== u)
            return new o(
              "Invalid " +
                a +
                " `" +
                l +
                "` of type `" +
                u +
                "` supplied to `" +
                n +
                "`, expected `object`."
            );
          for (var d in e) {
            var s = e[d];
            if (s) {
              var m = s(i, d, n, a, l + "." + d, ee);
              if (m) return m;
            }
          }
          return null;
        });
      },
      exact: function (e) {
        return i(function (r, t, n, a, l) {
          var i = r[t],
            u = c(i);
          if ("object" !== u)
            return new o(
              "Invalid " +
                a +
                " `" +
                l +
                "` of type `" +
                u +
                "` supplied to `" +
                n +
                "`, expected `object`."
            );
          var d = Z({}, r[t], e);
          for (var s in d) {
            var m = e[s];
            if (!m)
              return new o(
                "Invalid " +
                  a +
                  " `" +
                  l +
                  "` key `" +
                  s +
                  "` supplied to `" +
                  n +
                  "`.\nBad object: " +
                  JSON.stringify(r[t], null, "  ") +
                  "\nValid keys: " +
                  JSON.stringify(Object.keys(e), null, "  ")
              );
            var f = m(i, s, n, a, l + "." + s, ee);
            if (f) return f;
          }
          return null;
        });
      },
    };
  function l(e, r) {
    return e === r ? 0 !== e || 1 / e == 1 / r : e != e && r != r;
  }
  function o(e) {
    (this.message = e), (this.stack = "");
  }
  function i(e) {
    if ("production" !== process.env.NODE_ENV)
      var t = {},
        a = 0;
    function l(l, i, u, d, c, s, m) {
      if (((d = d || n), (s = s || u), m !== ee)) {
        if (r) {
          var f = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((f.name = "Invariant Violation"), f);
        }
        if (
          "production" !== process.env.NODE_ENV &&
          "undefined" != typeof console
        ) {
          var p = d + ":" + u;
          !t[p] &&
            a < 3 &&
            (ue(
              "You are manually calling a React.PropTypes validation function for the `" +
                s +
                "` prop on `" +
                d +
                "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ),
            (t[p] = !0),
            a++);
        }
      }
      return null == i[u]
        ? l
          ? null === i[u]
            ? new o(
                "The " +
                  c +
                  " `" +
                  s +
                  "` is marked as required in `" +
                  d +
                  "`, but its value is `null`."
              )
            : new o(
                "The " +
                  c +
                  " `" +
                  s +
                  "` is marked as required in `" +
                  d +
                  "`, but its value is `undefined`."
              )
          : null
        : e(i, u, d, c, s);
    }
    var i = l.bind(null, !1);
    return (i.isRequired = l.bind(null, !0)), i;
  }
  function u(e) {
    return i(function (r, t, n, a, l, i) {
      var u = r[t];
      return c(u) !== e
        ? new o(
            "Invalid " +
              a +
              " `" +
              l +
              "` of type `" +
              s(u) +
              "` supplied to `" +
              n +
              "`, expected `" +
              e +
              "`."
          )
        : null;
    });
  }
  function d(r) {
    switch (typeof r) {
      case "number":
      case "string":
      case "undefined":
        return !0;
      case "boolean":
        return !r;
      case "object":
        if (Array.isArray(r)) return r.every(d);
        if (null === r || e(r)) return !0;
        var n = (function (e) {
          var r = e && ((t && e[t]) || e["@@iterator"]);
          if ("function" == typeof r) return r;
        })(r);
        if (!n) return !1;
        var a,
          l = n.call(r);
        if (n !== r.entries) {
          for (; !(a = l.next()).done; ) if (!d(a.value)) return !1;
        } else
          for (; !(a = l.next()).done; ) {
            var o = a.value;
            if (o && !d(o[1])) return !1;
          }
        return !0;
      default:
        return !1;
    }
  }
  function c(e) {
    var r = typeof e;
    return Array.isArray(e)
      ? "array"
      : e instanceof RegExp
      ? "object"
      : (function (e, r) {
          return (
            "symbol" === e ||
            (!!r &&
              ("Symbol" === r["@@toStringTag"] ||
                ("function" == typeof Symbol && r instanceof Symbol)))
          );
        })(r, e)
      ? "symbol"
      : r;
  }
  function s(e) {
    if (null == e) return "" + e;
    var r = c(e);
    if ("object" === r) {
      if (e instanceof Date) return "date";
      if (e instanceof RegExp) return "regexp";
    }
    return r;
  }
  function m(e) {
    var r = s(e);
    switch (r) {
      case "array":
      case "object":
        return "an " + r;
      case "boolean":
      case "date":
      case "regexp":
        return "a " + r;
      default:
        return r;
    }
  }
  return (
    (o.prototype = Error.prototype),
    (a.checkPropTypes = oe),
    (a.resetWarningCache = oe.resetWarningCache),
    (a.PropTypes = a),
    a
  );
};
function se() {}
function me() {}
me.resetWarningCache = se;
var fe = C(function (e) {
  if ("production" !== process.env.NODE_ENV) {
    var r = H;
    e.exports = ce(r.isElement, !0);
  } else
    e.exports = (function () {
      function e(e, r, t, n, a, l) {
        if (l !== ee) {
          var o = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((o.name = "Invariant Violation"), o);
        }
      }
      function r() {
        return e;
      }
      e.isRequired = e;
      var t = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: r,
        element: e,
        elementType: e,
        instanceOf: r,
        node: e,
        objectOf: r,
        oneOf: r,
        oneOfType: r,
        shape: r,
        exact: r,
        checkPropTypes: me,
        resetWarningCache: se,
      };
      return (t.PropTypes = t), t;
    })();
});
var pe = function (t) {
  var n,
    a,
    l = t.error,
    o = t.getPrice,
    i = t.label,
    u = t.name,
    d = t.onChange,
    c = t.pricelists,
    s = t.value,
    f = e.useRef(null),
    p = (function () {
      var r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = w(e.useState(r), 2),
        n = t[0],
        a = t[1];
      return {
        isOpen: n,
        toggleModal: function () {
          return a(function (e) {
            return !e;
          });
        },
        closeModal: function () {
          return a(!1);
        },
        openModal: function () {
          return a(!0);
        },
      };
    })(),
    v = p.isOpen,
    E = p.toggleModal,
    y = p.closeModal;
  !(function (r, t) {
    e.useEffect(
      function () {
        function e(e) {
          r.current && !r.current.contains(e.target) && t();
        }
        return (
          document.addEventListener("mousedown", e),
          function () {
            document.removeEventListener("mousedown", e);
          }
        );
      },
      [r, t]
    );
  })(f, function () {
    v && y();
  });
  var h = o(s);
  return m.default.createElement(
    r.Box,
    { sx: { position: "relative" }, ref: f },
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(r.Label, { htmlFor: u }, i),
      m.default.createElement(
        r.Box,
        { onClick: E },
        m.default.createElement(r.Input, {
          id: u,
          name: u,
          placeholder: "Select Area",
          value: s
            ? ""
                .concat(
                  null == h || null === (n = h.from) || void 0 === n
                    ? void 0
                    : n.name,
                  " - "
                )
                .concat(
                  null == h || null === (a = h.to) || void 0 === a
                    ? void 0
                    : a.name
                )
            : "",
          readOnly: !0,
        })
      ),
      m.default.createElement(r.FormError, { error: l })
    ),
    v &&
      m.default.createElement(
        r.Stack,
        {
          alignItems: "stretch",
          as: r.Card,
          flexDirection: "column",
          spacing: 3,
          sx: {
            boxShadow: "0px 1px 2px #E7ECE8",
            left: 0,
            maxHeight: "30rem",
            position: "absolute",
            top: "calc(100% +  0.4rem)",
            zIndex: 10,
            overflow: "auto",
          },
          width: "100%",
        },
        !Boolean(c.length) &&
          m.default.createElement(
            r.Flex,
            {
              alignItems: "center",
              justifyContent: "center",
              py: 3,
              flexDirection: "column",
            },
            m.default.createElement(
              r.Text,
              { textAlign: "center", variant: "thickText" },
              "No delivery areas available"
            )
          ),
        c.map(function (e) {
          var t, n, a, l;
          return m.default.createElement(
            r.Box,
            {
              key: e._id,
              sx: {
                alignItems: "flex-start",
                cursor: "pointer",
                display: "grid",
                gridGap: 2,
                gridTemplateColumns: "1fr auto 1fr",
              },
              onClick: function () {
                d(e._id), y();
              },
            },
            m.default.createElement(
              r.Box,
              null,
              m.default.createElement(
                r.Text,
                { color: "heading" },
                null == e || null === (t = e.from) || void 0 === t
                  ? void 0
                  : t.name
              ),
              m.default.createElement(
                r.Text,
                { color: "heading", fontSize: "xxs" },
                null == e || null === (n = e.from) || void 0 === n
                  ? void 0
                  : n.coverage
              )
            ),
            m.default.createElement(
              r.Box,
              { pt: 5 },
              m.default.createElement(r.Box, {
                width: "13px",
                height: "1px",
                backgroundColor: "heading",
              })
            ),
            m.default.createElement(
              r.Box,
              null,
              m.default.createElement(
                r.Text,
                { color: "heading" },
                null == e || null === (a = e.to) || void 0 === a
                  ? void 0
                  : a.name
              ),
              m.default.createElement(
                r.Text,
                { color: "heading", fontSize: "xxs" },
                null == e || null === (l = e.to) || void 0 === l
                  ? void 0
                  : l.coverage
              )
            ),
            m.default.createElement(
              r.Text,
              { fontWeight: "medium", color: "heading" },
              null == e ? void 0 : e.name
            ),
            m.default.createElement(
              r.Text,
              { fontSize: "xs" },
              null == e ? void 0 : e.coverage
            )
          );
        })
      )
  );
};
(pe.propTypes = {
  getPrice: fe.func,
  error: fe.string.isRequired,
  label: fe.string,
  name: fe.string,
  onChange: fe.func.isRequired,
  pricelists: fe.array,
  value: fe.string.isRequired,
}),
  (pe.defaultProps = {
    getPrice: function () {},
    label: "Delivery Area",
    name: "deliveryArea",
    pricelists: [],
  });
var ve = { $SENDER: "sender", $RECIPIENT: "recipient", $3RD_PARTY: "3rdparty" };
f.addMethod(f.string, "phone", function () {
  return this.test("phone", "Phone number is not a valid number", function (
    e,
    r
  ) {
    var t = r.parent;
    if (e) {
      var n =
          null != t && t.country
            ? JSON.parse(t.country).countryCode.toUpperCase()
            : "NG",
        a = l.parsePhoneNumberFromString(e, n);
      return null == a ? void 0 : a.isValid();
    }
    return !0;
  });
}),
  f.addMethod(f.array, "phone", function () {
    return this.test("phone", "Phone number is not a valid number", function (
      e
    ) {
      if (e) {
        var r = e[0];
        if (r) {
          var t,
            n,
            a =
              (null === (t = e[1]) ||
              void 0 === t ||
              null === (n = t.countryCode) ||
              void 0 === n
                ? void 0
                : n.toUpperCase()) || "NG",
            o = l.parsePhoneNumberFromString(r, a);
          return null == o ? void 0 : o.isValid();
        }
        return !0;
      }
      return !0;
    });
  });
var Ee = function (e, r) {
    var t = r.from[1].value.requestedBy;
    return ![ve.$RECIPIENT, ve.$3RD_PARTY].includes(t) || Boolean(e);
  },
  ye = function (e, r) {
    var t = r.from[1].value.requestedBy;
    return ve.$SENDER !== t || Boolean(e);
  },
  he = function (e) {
    return f
      .object()
      .shape(
        b(
          {
            allowDescription: f.boolean(),
            chargeRecipient: f.boolean(),
            payOnDelivery: f.boolean(),
            requestedBy: f.string(),
            deliveryArea: f.string().required("Delivery area is required"),
            description: f.string(),
            items: f.string().required("Please enter at least one item"),
            recipient: f
              .object()
              .shape({
                address: f
                  .object()
                  .shape({})
                  .typeError("Address is required")
                  .required("Address is required"),
                name: f.string().test("testname", "Name is required", ye),
                phoneNumber: f
                  .array()
                  .phone()
                  .test("testname", "Phone number is required", ye),
              }),
            sender: f
              .object()
              .shape({
                address: f
                  .object()
                  .shape({})
                  .typeError("Address is required")
                  .required("Address is required"),
                name: f.string().test("testname", "Name is required", Ee),
                phoneNumber: f
                  .array()
                  .phone()
                  .test("testname", "Phone number is required", Ee),
                email: f.string().email("Email is invalid"),
              }),
          },
          e ? { rider: f.string().required("Please select rider") } : {}
        )
      );
  },
  be = f
    .object()
    .shape({
      username: f
        .string()
        .required("Email address or phone number is required"),
      password: f
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      rememberMe: f.boolean().required(),
    }),
  ge = function (e) {
    var r = e.isAdmin,
      t = e.requiredSender;
    return f
      .object()
      .shape(
        b(
          {
            allowDescription: f.boolean(),
            chargeRecipient: f.boolean(),
            payOnDelivery: f.boolean(),
            requestedBy: f.string(),
            deliveryArea: f.string().required("Delivery area is required"),
            description: f.string(),
            items: f.string().required("Please enter at least one item"),
            recipient: f
              .object()
              .shape({
                address: f
                  .object()
                  .shape({})
                  .typeError("Address is required")
                  .required("Address is required"),
                email: f.string().email("Email is invalid"),
                name: f.string().required("Name is required"),
                phoneNumber: f
                  .array()
                  .phone()
                  .required("Phone number is required"),
              }),
            sender: f
              .object()
              .shape(
                b(
                  b(
                    {
                      address: f
                        .object()
                        .shape({})
                        .typeError("Address is required")
                        .required("Address is required"),
                    },
                    t
                      ? {
                          name: f.string().required("Name is required"),
                          phoneNumber: f
                            .array()
                            .phone()
                            .required("Phone number is required"),
                          email: f
                            .string()
                            .email("Email is invalid")
                            .required("Email is required"),
                        }
                      : {
                          name: f.string(),
                          phoneNumber: f.array().phone(),
                          email: f.string().email("Email is invalid"),
                        }
                  ),
                  r ? { email: f.string().email("Email is invalid") } : {}
                )
              ),
          },
          r ? { rider: f.string().required("Please select rider") } : {}
        )
      );
  },
  we = f.object().shape({
    password: f
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: f
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .oneOf(
        [f.ref("password"), null],
        "Password and confirm password must match"
      ),
  }),
  Fe = f.object().shape({
    currentPassword: f
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    newPassword: f
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: f
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .oneOf(
        [f.ref("newPassword"), null],
        "New password and confirm password must match"
      ),
  }),
  Se = { boxShadow: "none", flexShrink: 0, mb: 4, mr: 4 },
  Ce = function (a) {
    var l,
      o,
      i,
      u,
      d,
      c,
      s,
      f,
      p,
      v,
      E,
      h,
      b,
      w,
      F,
      C,
      x = a.buttonText,
      P = a.isLoading,
      O = a.onSubmit,
      N = a.pricelists,
      R = a.riders,
      T = a.schema,
      I = t.useForm({
        resolver: n.yupResolver(T || he(!0)),
        defaultValues: {
          allowDescription: !1,
          chargeRecipient: !1,
          requestedBy: "sender",
          items: "",
          payOnDelivery: !0,
          rider: "",
        },
      }),
      q = I.register,
      A = I.handleSubmit,
      k = I.errors,
      j = I.control,
      L = I.watch,
      D = e.useCallback(
        function (e) {
          return N.find(function (r) {
            return r._id === e;
          });
        },
        [N]
      ),
      $ = L("allowDescription"),
      G = L("payOnDelivery"),
      _ = L("deliveryArea"),
      B = L("requestedBy"),
      M = D(_);
    return m.default.createElement(
      r.Stack,
      { as: "form", spacing: 6, onSubmit: A(O) },
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "requestedBy" },
          "Customer is the the?"
        ),
        m.default.createElement(t.Controller, {
          control: j,
          name: "requestedBy",
          render: function (e) {
            var t = e.onChange,
              n = e.value;
            return m.default.createElement(
              r.Flex,
              { flexDirection: "row", flexWrap: "wrap", mb: -4 },
              m.default.createElement(
                r.Card,
                {
                  onClick: function () {
                    return t(ve.$SENDER);
                  },
                  sx: Se,
                },
                m.default.createElement(r.Radio, {
                  active: n === ve.$SENDER,
                  title: "Sender",
                })
              ),
              m.default.createElement(
                r.Card,
                {
                  onClick: function () {
                    return t(ve.$RECIPIENT);
                  },
                  sx: Se,
                },
                m.default.createElement(r.Radio, {
                  active: n === ve.$RECIPIENT,
                  title: "Receiver",
                })
              )
            );
          },
        }),
        m.default.createElement(r.FormError, {
          error:
            null == k || null === (l = k.requestedBy) || void 0 === l
              ? void 0
              : l.message,
        })
      ),
      m.default.createElement(t.Controller, {
        control: j,
        name: "deliveryArea",
        render: function (e) {
          var r,
            t = e.onChange,
            n = e.value;
          return m.default.createElement(pe, {
            error:
              null == k || null === (r = k.deliveryArea) || void 0 === r
                ? void 0
                : r.message,
            onChange: t,
            getPrice: D,
            pricelists: N,
            value: n,
          });
        },
      }),
      B === ve.$RECIPIENT &&
        m.default.createElement(
          m.default.Fragment,
          null,
          m.default.createElement(
            r.FormGroup,
            null,
            m.default.createElement(
              r.Label,
              { htmlFor: "sender.name" },
              "Sender Name"
            ),
            m.default.createElement(r.Input, {
              key: "sender.name",
              id: "sender.name",
              name: "sender.name",
              placeholder: "Type Name",
              ref: q,
            }),
            m.default.createElement(r.FormError, {
              error:
                null == k ||
                null === (o = k.sender) ||
                void 0 === o ||
                null === (i = o.name) ||
                void 0 === i
                  ? void 0
                  : i.message,
            })
          ),
          m.default.createElement(
            r.FormGroup,
            null,
            m.default.createElement(
              r.Label,
              { htmlFor: "sender.phoneNumber" },
              "Sender Number"
            ),
            m.default.createElement(t.Controller, {
              key: "control.sender.phoneNumber",
              control: j,
              name: "sender.phoneNumber",
              render: function (e) {
                var t = e.onChange,
                  n = e.value,
                  a = g(e, ["onChange", "value"]);
                return m.default.createElement(
                  r.Input,
                  y(
                    {
                      id: "sender.phoneNumber",
                      type: "phone",
                      onChange: function () {
                        for (
                          var e = arguments.length, r = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          r[n] = arguments[n];
                        return t(r);
                      },
                    },
                    n ? { value: n[0] } : {},
                    a
                  )
                );
              },
            }),
            m.default.createElement(r.FormError, {
              error:
                null == k ||
                null === (u = k.sender) ||
                void 0 === u ||
                null === (d = u.phoneNumber) ||
                void 0 === d
                  ? void 0
                  : d.message,
            })
          )
        ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "sender.address" },
          "Pick Up Address"
        ),
        m.default.createElement(t.Controller, {
          control: j,
          name: "sender.address",
          render: function (e) {
            return m.default.createElement(
              r.Input,
              y(
                {
                  id: "sender.address",
                  type: "address",
                  name: "sender.address",
                  placeholder: "Type Address",
                },
                e
              )
            );
          },
        }),
        m.default.createElement(r.FormError, {
          error:
            null == k ||
            null === (c = k.sender) ||
            void 0 === c ||
            null === (s = c.address) ||
            void 0 === s
              ? void 0
              : s.message,
        })
      ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "recipient.address" },
          "Receiver Address"
        ),
        m.default.createElement(t.Controller, {
          control: j,
          name: "recipient.address",
          render: function (e) {
            return m.default.createElement(
              r.Input,
              y(
                {
                  id: "recipient.address",
                  type: "address",
                  name: "recipient.address",
                  placeholder: "Type Address",
                },
                e
              )
            );
          },
        }),
        m.default.createElement(r.FormError, {
          error:
            null == k ||
            null === (f = k.recipient) ||
            void 0 === f ||
            null === (p = f.address) ||
            void 0 === p
              ? void 0
              : p.message,
        })
      ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(r.Label, { htmlFor: "items" }, "Item(s)"),
        m.default.createElement(r.Input, {
          key: "items",
          id: "items",
          name: "items",
          placeholder: "Separate with commas",
          ref: q,
        }),
        m.default.createElement(r.FormError, {
          error:
            null == k || null === (v = k.items) || void 0 === v
              ? void 0
              : v.message,
        })
      ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(t.Controller, {
          control: j,
          name: "allowDescription",
          render: function (e) {
            var t = e.onChange,
              n = e.value;
            return m.default.createElement(r.Checkbox, {
              active: n,
              onChange: t,
              title: "Allow Description",
            });
          },
        })
      ),
      $
        ? m.default.createElement(
            r.FormGroup,
            null,
            m.default.createElement(
              r.Label,
              { htmlFor: "description" },
              "Description"
            ),
            m.default.createElement(r.Textarea, {
              id: "description",
              name: "description",
              placeholder: "Type Name",
              ref: q,
              required: !0,
            }),
            m.default.createElement(r.FormError, {
              error:
                null == k || null === (E = k.description) || void 0 === E
                  ? void 0
                  : E.message,
            })
          )
        : null,
      B === ve.$SENDER &&
        m.default.createElement(
          m.default.Fragment,
          null,
          m.default.createElement(
            r.FormGroup,
            null,
            m.default.createElement(
              r.Label,
              { htmlFor: "recipient.name" },
              "Receiver Name"
            ),
            m.default.createElement(r.Input, {
              id: "recipient.name",
              name: "recipient.name",
              placeholder: "Type Name",
              ref: q,
            }),
            m.default.createElement(r.FormError, {
              error:
                null == k ||
                null === (h = k.recipient) ||
                void 0 === h ||
                null === (b = h.name) ||
                void 0 === b
                  ? void 0
                  : b.message,
            })
          ),
          m.default.createElement(
            r.FormGroup,
            null,
            m.default.createElement(
              r.Label,
              { htmlFor: "recipient.phoneNumber" },
              "Receiver Number"
            ),
            m.default.createElement(t.Controller, {
              control: j,
              name: "recipient.phoneNumber",
              render: function (e) {
                var t = e.onChange,
                  n = e.value,
                  a = g(e, ["onChange", "value"]);
                return m.default.createElement(
                  r.Input,
                  y(
                    {
                      id: "recipient.phoneNumber",
                      type: "phone",
                      onChange: function () {
                        for (
                          var e = arguments.length, r = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          r[n] = arguments[n];
                        return t(r);
                      },
                    },
                    n ? { value: n[0] } : {},
                    a
                  )
                );
              },
            }),
            m.default.createElement(r.FormError, {
              error:
                null == k ||
                null === (w = k.recipient) ||
                void 0 === w ||
                null === (F = w.phoneNumber) ||
                void 0 === F
                  ? void 0
                  : F.message,
            })
          )
        ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(t.Controller, {
          control: j,
          name: "payOnDelivery",
          render: function (e) {
            var t = e.onChange,
              n = e.value;
            return m.default.createElement(r.Switch, {
              active: !n,
              onChange: function (e) {
                return t(!e);
              },
              title: "Delivery fee paid",
            });
          },
        })
      ),
      G &&
        m.default.createElement(
          r.FormGroup,
          null,
          m.default.createElement(t.Controller, {
            control: j,
            name: "chargeRecipient",
            render: function (e) {
              var t = e.onChange,
                n = e.value;
              return m.default.createElement(r.Switch, {
                active: n,
                onChange: t,
                title: "The Receiver will be paying cash on delivery",
              });
            },
          })
        ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(r.Label, { htmlFor: "rider" }, "Assign Rider"),
        m.default.createElement(
          r.Select,
          { id: "rider", name: "rider", placeholder: "Select option", ref: q },
          m.default.createElement(
            "option",
            { value: "", disabled: !0 },
            "Select Option"
          ),
          null == R
            ? void 0
            : R.map(function (e) {
                return m.default.createElement(
                  "option",
                  { key: e.id, value: e.id },
                  e.name
                );
              })
        ),
        m.default.createElement(r.FormError, {
          error:
            null == k || null === (C = k.rider) || void 0 === C
              ? void 0
              : C.message,
        })
      ),
      m.default.createElement(S, { amount: null == M ? void 0 : M.amount }),
      m.default.createElement(
        r.Button,
        { defaultRightIcon: !0, isLoading: P, onClick: A(O) },
        x
      )
    );
  };
Ce.defaultProps = {
  buttonText: "Submit Request",
  isLoading: !1,
  onSubmit: function () {},
  pricelists: [],
  riders: [],
  schema: null,
};
var xe = function (a) {
  var l,
    o,
    i,
    u,
    d,
    c,
    s,
    f,
    p,
    v,
    E,
    h,
    b,
    w,
    F,
    C,
    x,
    P,
    O = a.buttonText,
    N = a.isLoading,
    R = a.onSubmit,
    T = a.pricelists,
    I = a.riders,
    q = a.schema,
    A = t.useForm({
      resolver: n.yupResolver(q || ge({ isAdmin: !0, requiredSender: !0 })),
      defaultValues: {
        allowDescription: !1,
        chargeRecipient: !1,
        customer: "sender",
        items: "",
        payOnDelivery: !0,
        rider: "",
      },
    }),
    k = A.register,
    j = A.handleSubmit,
    L = A.errors,
    D = A.control,
    $ = A.watch,
    G = e.useCallback(
      function (e) {
        return T.find(function (r) {
          return r._id === e;
        });
      },
      [T]
    ),
    _ = $("allowDescription"),
    B = $("payOnDelivery"),
    M = $("deliveryArea"),
    V = G(M);
  return m.default.createElement(
    r.Stack,
    { as: "form", spacing: 6, onSubmit: j(R) },
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(
        r.Label,
        { htmlFor: "sender.name" },
        "Senders Name"
      ),
      m.default.createElement(r.Input, {
        id: "sender.name",
        name: "sender.name",
        placeholder: "Type name",
        ref: k,
      }),
      m.default.createElement(r.FormError, {
        error:
          null == L ||
          null === (l = L.sender) ||
          void 0 === l ||
          null === (o = l.name) ||
          void 0 === o
            ? void 0
            : o.message,
      })
    ),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(
        r.Label,
        { htmlFor: "sender.phoneNumber" },
        "Senders number"
      ),
      m.default.createElement(t.Controller, {
        control: D,
        name: "sender.phoneNumber",
        render: function (e) {
          var t = e.onChange,
            n = e.value,
            a = g(e, ["onChange", "value"]);
          return m.default.createElement(
            r.Input,
            y(
              {
                id: "sender.phoneNumber",
                type: "phone",
                onChange: function () {
                  for (
                    var e = arguments.length, r = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    r[n] = arguments[n];
                  return t(r);
                },
              },
              n ? { value: n[0] } : {},
              a
            )
          );
        },
      }),
      m.default.createElement(r.FormError, {
        error:
          null == L ||
          null === (i = L.sender) ||
          void 0 === i ||
          null === (u = i.phoneNumber) ||
          void 0 === u
            ? void 0
            : u.message,
      })
    ),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(
        r.Label,
        { htmlFor: "sender.email" },
        "Senders Email (Optional)"
      ),
      m.default.createElement(r.Input, {
        id: "sender.email",
        name: "sender.email",
        placeholder: "Type Email Address",
        ref: k,
      }),
      m.default.createElement(r.FormError, {
        error:
          null == L ||
          null === (d = L.sender) ||
          void 0 === d ||
          null === (c = d.email) ||
          void 0 === c
            ? void 0
            : c.message,
      })
    ),
    m.default.createElement(t.Controller, {
      control: D,
      name: "deliveryArea",
      render: function (e) {
        var r,
          t = e.onChange,
          n = e.value;
        return m.default.createElement(pe, {
          error:
            null == L || null === (r = L.deliveryArea) || void 0 === r
              ? void 0
              : r.message,
          getPrice: G,
          onChange: t,
          pricelists: T,
          value: n,
        });
      },
    }),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(
        r.Label,
        { htmlFor: "sender.address" },
        "Pick Up Address"
      ),
      m.default.createElement(t.Controller, {
        control: D,
        name: "sender.address",
        render: function (e) {
          return m.default.createElement(
            r.Input,
            y(
              {
                id: "sender.address",
                type: "address",
                name: "sender.address",
                placeholder: "Type Address",
              },
              e
            )
          );
        },
      }),
      m.default.createElement(r.FormError, {
        error:
          null == L ||
          null === (s = L.sender) ||
          void 0 === s ||
          null === (f = s.address) ||
          void 0 === f
            ? void 0
            : f.message,
      })
    ),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(
        r.Label,
        { htmlFor: "recipient.address" },
        "Receiver Address"
      ),
      m.default.createElement(t.Controller, {
        control: D,
        name: "recipient.address",
        render: function (e) {
          return m.default.createElement(
            r.Input,
            y(
              {
                id: "recipient.address",
                type: "address",
                name: "recipient.address",
                placeholder: "Type Address",
              },
              e
            )
          );
        },
      }),
      m.default.createElement(r.FormError, {
        error:
          null == L ||
          null === (p = L.recipient) ||
          void 0 === p ||
          null === (v = p.address) ||
          void 0 === v
            ? void 0
            : v.message,
      })
    ),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(r.Label, { htmlFor: "items" }, "Item(s)"),
      m.default.createElement(r.Input, {
        key: "items",
        id: "items",
        name: "items",
        placeholder: "Separate with commas",
        ref: k,
      }),
      m.default.createElement(r.FormError, {
        error:
          null == L || null === (E = L.items) || void 0 === E
            ? void 0
            : E.message,
      })
    ),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(t.Controller, {
        control: D,
        name: "allowDescription",
        render: function (e) {
          var t = e.onChange,
            n = e.value;
          return m.default.createElement(r.Checkbox, {
            active: n,
            onChange: t,
            title: "Allow Description",
          });
        },
      })
    ),
    _
      ? m.default.createElement(
          r.FormGroup,
          null,
          m.default.createElement(
            r.Label,
            { htmlFor: "description" },
            "Description"
          ),
          m.default.createElement(r.Textarea, {
            id: "description",
            name: "description",
            placeholder: "Type Name",
            ref: k,
            required: !0,
          }),
          m.default.createElement(r.FormError, {
            error:
              null == L || null === (h = L.description) || void 0 === h
                ? void 0
                : h.message,
          })
        )
      : null,
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(
        r.Label,
        { htmlFor: "recipient.name" },
        "Receiver Name"
      ),
      m.default.createElement(r.Input, {
        id: "recipient.name",
        name: "recipient.name",
        placeholder: "Type Name",
        ref: k,
      }),
      m.default.createElement(r.FormError, {
        error:
          null == L ||
          null === (b = L.recipient) ||
          void 0 === b ||
          null === (w = b.name) ||
          void 0 === w
            ? void 0
            : w.message,
      })
    ),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(
        r.Label,
        { htmlFor: "recipient.phoneNumber" },
        "Receiver Number"
      ),
      m.default.createElement(t.Controller, {
        control: D,
        name: "recipient.phoneNumber",
        render: function (e) {
          var t = e.onChange,
            n = e.value,
            a = g(e, ["onChange", "value"]);
          return m.default.createElement(
            r.Input,
            y(
              {
                id: "recipient.phoneNumber",
                type: "phone",
                onChange: function () {
                  for (
                    var e = arguments.length, r = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    r[n] = arguments[n];
                  return t(r);
                },
              },
              n ? { value: n[0] } : {},
              a
            )
          );
        },
      }),
      m.default.createElement(r.FormError, {
        error:
          null == L ||
          null === (F = L.recipient) ||
          void 0 === F ||
          null === (C = F.phoneNumber) ||
          void 0 === C
            ? void 0
            : C.message,
      })
    ),
    m.default.createElement(S, { amount: null == V ? void 0 : V.amount }),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(t.Controller, {
        control: D,
        name: "payOnDelivery",
        render: function (e) {
          var t = e.onChange,
            n = e.value;
          return m.default.createElement(r.Switch, {
            active: !n,
            onChange: function (e) {
              return t(!e);
            },
            title: "Delivery fee paid",
          });
        },
      })
    ),
    B &&
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(t.Controller, {
          control: D,
          name: "chargeRecipient",
          render: function (e) {
            var t = e.onChange,
              n = e.value;
            return m.default.createElement(r.Switch, {
              active: n,
              onChange: t,
              title: "The Receiver will be paying cash on delivery",
            });
          },
        })
      ),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(r.Label, { htmlFor: "rider" }, "Assign Rider"),
      m.default.createElement(
        r.Select,
        { id: "rider", name: "rider", placeholder: "Select option", ref: k },
        m.default.createElement(
          "option",
          { value: "", disabled: !0 },
          "Select Option"
        ),
        null == I
          ? void 0
          : I.map(function (e) {
              return m.default.createElement(
                "option",
                { key: e.id, value: e.id },
                e.name
              );
            })
      ),
      m.default.createElement(r.FormError, {
        error:
          null == L || null === (x = L.rider) || void 0 === x
            ? void 0
            : x.message,
      })
    ),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(t.Controller, {
        control: D,
        name: "customer",
        render: function (e) {
          var t = e.onChange,
            n = e.value;
          return m.default.createElement(
            r.Stack,
            { spacing: 6 },
            m.default.createElement(r.Radio, {
              active: "sender" === n,
              onClick: function () {
                return t("sender");
              },
              subtitle: "Request was made by the sender",
              title: "Save sender’s details",
            }),
            m.default.createElement(r.Radio, {
              active: "recipient" === n,
              onClick: function () {
                return t("recipient");
              },
              subtitle: "Request was made by the receiver",
              title: "Save receiver’s details",
            })
          );
        },
      }),
      m.default.createElement(r.FormError, {
        error:
          null == L || null === (P = L.customer) || void 0 === P
            ? void 0
            : P.message,
      })
    ),
    m.default.createElement(
      r.Button,
      { defaultRightIcon: !0, isLoading: N, onClick: j(R) },
      O
    )
  );
};
xe.defaultProps = {
  buttonText: "Submit Request",
  isLoading: !1,
  onSubmit: function () {},
  pricelists: [],
  riders: [],
  schema: null,
};
var Pe = { boxShadow: "none", flexShrink: 0, mb: 4, mr: 4 },
  Oe = function (a) {
    var l,
      o,
      i,
      u,
      d,
      c,
      s,
      f,
      p,
      v,
      E,
      h = a.buttonText,
      b = a.disablePayOnDelivery,
      w = a.isLoading,
      F = a.onSubmit,
      C = a.pricelists,
      x = a.schema,
      P = t.useForm({
        resolver: n.yupResolver(x || he(!1)),
        defaultValues: {
          allowDescription: !1,
          chargeRecipient: !1,
          requestedBy: "sender",
          items: "",
          rider: "",
        },
      }),
      O = P.register,
      N = P.handleSubmit,
      R = P.errors,
      T = P.control,
      I = P.watch,
      q = e.useCallback(
        function (e) {
          return C.find(function (r) {
            return r._id === e;
          });
        },
        [C]
      ),
      A = I("allowDescription"),
      k = I("deliveryArea"),
      j = I("requestedBy"),
      L = q(k),
      D = function () {
        var e, n, a, l;
        return m.default.createElement(
          m.default.Fragment,
          null,
          m.default.createElement(
            r.FormGroup,
            null,
            m.default.createElement(
              r.Label,
              { htmlFor: "sender.name" },
              "Sender Name"
            ),
            m.default.createElement(r.Input, {
              key: "sender.name",
              id: "sender.name",
              name: "sender.name",
              placeholder: "Type Name",
              ref: O,
            }),
            m.default.createElement(r.FormError, {
              error:
                null == R ||
                null === (e = R.sender) ||
                void 0 === e ||
                null === (n = e.name) ||
                void 0 === n
                  ? void 0
                  : n.message,
            })
          ),
          m.default.createElement(
            r.FormGroup,
            null,
            m.default.createElement(
              r.Label,
              { htmlFor: "sender.phoneNumber" },
              "Sender Number"
            ),
            m.default.createElement(t.Controller, {
              key: "control.sender.phoneNumber",
              control: T,
              name: "sender.phoneNumber",
              render: function (e) {
                var t = e.onChange,
                  n = e.value,
                  a = g(e, ["onChange", "value"]);
                return m.default.createElement(
                  r.Input,
                  y(
                    {
                      id: "sender.phoneNumber",
                      type: "phone",
                      onChange: function () {
                        for (
                          var e = arguments.length, r = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          r[n] = arguments[n];
                        return t(r);
                      },
                    },
                    n ? { value: n[0] } : {},
                    a
                  )
                );
              },
            }),
            m.default.createElement(r.FormError, {
              error:
                null == R ||
                null === (a = R.sender) ||
                void 0 === a ||
                null === (l = a.phoneNumber) ||
                void 0 === l
                  ? void 0
                  : l.message,
            })
          )
        );
      };
    return m.default.createElement(
      r.Stack,
      { as: "form", spacing: 6, onSubmit: N(F) },
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "requestedBy" },
          "You are the?"
        ),
        m.default.createElement(t.Controller, {
          control: T,
          name: "requestedBy",
          render: function (e) {
            var t = e.onChange,
              n = e.value;
            return m.default.createElement(
              r.Flex,
              { flexDirection: "row", flexWrap: "wrap", mb: -4 },
              m.default.createElement(
                r.Card,
                {
                  onClick: function () {
                    return t(ve.$SENDER);
                  },
                  sx: Pe,
                },
                m.default.createElement(r.Radio, {
                  active: n === ve.$SENDER,
                  title: "Sender",
                })
              ),
              m.default.createElement(
                r.Card,
                {
                  onClick: function () {
                    return t(ve.$RECIPIENT);
                  },
                  sx: Pe,
                },
                m.default.createElement(r.Radio, {
                  active: n === ve.$RECIPIENT,
                  title: "Receiver",
                })
              ),
              m.default.createElement(
                r.Card,
                {
                  onClick: function () {
                    return t(ve.$3RD_PARTY);
                  },
                  sx: Pe,
                },
                m.default.createElement(r.Radio, {
                  active: n === ve.$3RD_PARTY,
                  title: "3rd Party",
                })
              )
            );
          },
        }),
        m.default.createElement(r.FormError, {
          error:
            null == R || null === (l = R.requestedBy) || void 0 === l
              ? void 0
              : l.message,
        })
      ),
      m.default.createElement(t.Controller, {
        control: T,
        name: "deliveryArea",
        render: function (e) {
          var r,
            t = e.onChange,
            n = e.value;
          return m.default.createElement(pe, {
            error:
              null == R || null === (r = R.deliveryArea) || void 0 === r
                ? void 0
                : r.message,
            onChange: t,
            getPrice: q,
            pricelists: C,
            value: n,
          });
        },
      }),
      j === ve.$3RD_PARTY ? D() : null,
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "sender.address" },
          "Pick Up Address"
        ),
        m.default.createElement(t.Controller, {
          control: T,
          name: "sender.address",
          render: function (e) {
            return m.default.createElement(
              r.Input,
              y(
                {
                  id: "sender.address",
                  type: "address",
                  name: "sender.address",
                  placeholder: "Type Address",
                },
                e
              )
            );
          },
        }),
        m.default.createElement(r.FormError, {
          error:
            null == R ||
            null === (o = R.sender) ||
            void 0 === o ||
            null === (i = o.address) ||
            void 0 === i
              ? void 0
              : i.message,
        })
      ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "recipient.address" },
          "Receiver Address"
        ),
        m.default.createElement(t.Controller, {
          control: T,
          name: "recipient.address",
          render: function (e) {
            return m.default.createElement(
              r.Input,
              y(
                {
                  id: "recipient.address",
                  type: "address",
                  name: "recipient.address",
                  placeholder: "Type Address",
                },
                e
              )
            );
          },
        }),
        m.default.createElement(r.FormError, {
          error:
            null == R ||
            null === (u = R.recipient) ||
            void 0 === u ||
            null === (d = u.address) ||
            void 0 === d
              ? void 0
              : d.message,
        })
      ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(r.Label, { htmlFor: "items" }, "Item(s)"),
        m.default.createElement(r.Input, {
          key: "items",
          id: "items",
          name: "items",
          placeholder: "Separate with commas",
          ref: O,
        }),
        m.default.createElement(r.FormError, {
          error:
            null == R || null === (c = R.items) || void 0 === c
              ? void 0
              : c.message,
        })
      ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(t.Controller, {
          control: T,
          name: "allowDescription",
          render: function (e) {
            var t = e.onChange,
              n = e.value;
            return m.default.createElement(r.Checkbox, {
              active: n,
              onChange: t,
              title: "Allow Description",
            });
          },
        })
      ),
      A
        ? m.default.createElement(
            r.FormGroup,
            null,
            m.default.createElement(
              r.Label,
              { htmlFor: "description" },
              "Description"
            ),
            m.default.createElement(r.Textarea, {
              id: "description",
              name: "description",
              placeholder: "Type Name",
              ref: O,
              required: !0,
            }),
            m.default.createElement(r.FormError, {
              error:
                null == R || null === (s = R.description) || void 0 === s
                  ? void 0
                  : s.message,
            })
          )
        : null,
      j === ve.$RECIPIENT
        ? D()
        : m.default.createElement(
            m.default.Fragment,
            null,
            m.default.createElement(
              r.FormGroup,
              null,
              m.default.createElement(
                r.Label,
                { htmlFor: "recipient.name" },
                "Receiver Name"
              ),
              m.default.createElement(r.Input, {
                key: "recipient.name",
                id: "recipient.name",
                name: "recipient.name",
                placeholder: "Type Name",
                ref: O,
              }),
              m.default.createElement(r.FormError, {
                error:
                  null == R ||
                  null === (f = R.recipient) ||
                  void 0 === f ||
                  null === (p = f.name) ||
                  void 0 === p
                    ? void 0
                    : p.message,
              })
            ),
            m.default.createElement(
              r.FormGroup,
              null,
              m.default.createElement(
                r.Label,
                { htmlFor: "recipient.phoneNumber" },
                "Receiver Number"
              ),
              m.default.createElement(t.Controller, {
                control: T,
                key: "control.recipient.phoneNumber",
                name: "recipient.phoneNumber",
                render: function (e) {
                  var t = e.onChange,
                    n = e.value,
                    a = g(e, ["onChange", "value"]);
                  return m.default.createElement(
                    r.Input,
                    y(
                      {
                        id: "recipient.phoneNumber",
                        type: "phone",
                        onChange: function () {
                          for (
                            var e = arguments.length, r = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            r[n] = arguments[n];
                          return t(r);
                        },
                      },
                      n ? { value: n[0] } : {},
                      a
                    )
                  );
                },
              }),
              m.default.createElement(r.FormError, {
                error:
                  null == R ||
                  null === (v = R.recipient) ||
                  void 0 === v ||
                  null === (E = v.phoneNumber) ||
                  void 0 === E
                    ? void 0
                    : E.message,
              })
            )
          ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(t.Controller, {
          control: T,
          name: "chargeRecipient",
          render: function (e) {
            var t = e.onChange,
              n = e.value;
            return m.default.createElement(
              m.default.Fragment,
              null,
              b
                ? null
                : m.default.createElement(r.Switch, {
                    active: n,
                    onChange: t,
                    title: "Payment on delivery",
                  })
            );
          },
        })
      ),
      m.default.createElement(S, { amount: null == L ? void 0 : L.amount }),
      m.default.createElement(
        r.Button,
        { defaultRightIcon: !0, isLoading: w, onClick: N(F) },
        h
      )
    );
  };
Oe.defaultProps = {
  buttonText: "Submit Request",
  disablePayOnDelivery: !1,
  isLoading: !1,
  onSubmit: function () {},
  pricelists: [],
  schema: null,
};
var Ne = { boxShadow: "none", flexShrink: 0, mb: 4, mr: 4 },
  Re = function (a) {
    var l,
      o,
      i,
      u,
      d,
      c,
      s,
      f,
      p,
      v,
      E,
      h,
      b,
      w,
      F,
      C,
      x,
      P = a.buttonText,
      O = a.isLoading,
      N = a.onSubmit,
      R = a.pricelists,
      T = a.schema,
      I = t.useForm({
        resolver: n.yupResolver(T || ge({ isAdmin: !1, requiredSender: !0 })),
        defaultValues: {
          allowDescription: !1,
          requestedBy: "sender",
          items: "",
        },
      }),
      q = I.register,
      A = I.handleSubmit,
      k = I.errors,
      j = I.control,
      L = I.watch,
      D = e.useCallback(
        function (e) {
          return R.find(function (r) {
            return r._id === e;
          });
        },
        [R]
      ),
      $ = L("allowDescription"),
      G = L("deliveryArea"),
      _ = D(G);
    return m.default.createElement(
      r.Stack,
      { as: "form", spacing: 6, onSubmit: A(N) },
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "requestedBy" },
          "You are the?"
        ),
        m.default.createElement(t.Controller, {
          control: j,
          name: "requestedBy",
          render: function (e) {
            var t = e.onChange,
              n = e.value;
            return m.default.createElement(
              r.Flex,
              { flexDirection: "row", flexWrap: "wrap", mb: -4 },
              m.default.createElement(
                r.Card,
                {
                  onClick: function () {
                    return t(ve.$SENDER);
                  },
                  sx: Ne,
                },
                m.default.createElement(r.Radio, {
                  active: n === ve.$SENDER,
                  title: "Sender",
                })
              ),
              m.default.createElement(
                r.Card,
                {
                  onClick: function () {
                    return t(ve.$RECIPIENT);
                  },
                  sx: Ne,
                },
                m.default.createElement(r.Radio, {
                  active: n === ve.$RECIPIENT,
                  title: "Receiver",
                })
              ),
              m.default.createElement(
                r.Card,
                {
                  onClick: function () {
                    return t(ve.$3RD_PARTY);
                  },
                  sx: Ne,
                },
                m.default.createElement(r.Radio, {
                  active: n === ve.$3RD_PARTY,
                  title: "3rd Party",
                })
              )
            );
          },
        }),
        m.default.createElement(r.FormError, {
          error:
            null == k || null === (l = k.requestedBy) || void 0 === l
              ? void 0
              : l.message,
        })
      ),
      m.default.createElement(t.Controller, {
        control: j,
        name: "deliveryArea",
        render: function (e) {
          var r,
            t = e.onChange,
            n = e.value;
          return m.default.createElement(pe, {
            error:
              null == k || null === (r = k.deliveryArea) || void 0 === r
                ? void 0
                : r.message,
            getPrice: D,
            onChange: t,
            pricelists: R,
            value: n,
          });
        },
      }),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "sender.name" },
          "Senders Name"
        ),
        m.default.createElement(r.Input, {
          id: "sender.name",
          name: "sender.name",
          placeholder: "Type name",
          ref: q,
        }),
        m.default.createElement(r.FormError, {
          error:
            null == k ||
            null === (o = k.sender) ||
            void 0 === o ||
            null === (i = o.name) ||
            void 0 === i
              ? void 0
              : i.message,
        })
      ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "sender.phoneNumber" },
          "Senders number"
        ),
        m.default.createElement(t.Controller, {
          control: j,
          name: "sender.phoneNumber",
          render: function (e) {
            var t = e.onChange,
              n = e.value,
              a = g(e, ["onChange", "value"]);
            return m.default.createElement(
              r.Input,
              y(
                {
                  id: "sender.phoneNumber",
                  type: "phone",
                  onChange: function () {
                    for (
                      var e = arguments.length, r = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      r[n] = arguments[n];
                    return t(r);
                  },
                },
                n ? { value: n[0] } : {},
                a
              )
            );
          },
        }),
        m.default.createElement(r.FormError, {
          error:
            null == k ||
            null === (u = k.sender) ||
            void 0 === u ||
            null === (d = u.phoneNumber) ||
            void 0 === d
              ? void 0
              : d.message,
        })
      ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "sender.email" },
          "Senders Email"
        ),
        m.default.createElement(r.Input, {
          id: "sender.email",
          name: "sender.email",
          placeholder: "Type Email Address",
          ref: q,
        }),
        m.default.createElement(r.FormError, {
          error:
            null == k ||
            null === (c = k.sender) ||
            void 0 === c ||
            null === (s = c.email) ||
            void 0 === s
              ? void 0
              : s.message,
        })
      ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "sender.address" },
          "Pick Up Address"
        ),
        m.default.createElement(t.Controller, {
          control: j,
          name: "sender.address",
          render: function (e) {
            return m.default.createElement(
              r.Input,
              y(
                {
                  id: "sender.address",
                  type: "address",
                  name: "sender.address",
                  placeholder: "Type Address",
                },
                e
              )
            );
          },
        }),
        m.default.createElement(r.FormError, {
          error:
            null == k ||
            null === (f = k.sender) ||
            void 0 === f ||
            null === (p = f.address) ||
            void 0 === p
              ? void 0
              : p.message,
        })
      ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "recipient.address" },
          "Receiver Address"
        ),
        m.default.createElement(t.Controller, {
          control: j,
          name: "recipient.address",
          render: function (e) {
            return m.default.createElement(
              r.Input,
              y(
                {
                  id: "recipient.address",
                  type: "address",
                  name: "recipient.address",
                  placeholder: "Type Address",
                },
                e
              )
            );
          },
        }),
        m.default.createElement(r.FormError, {
          error:
            null == k ||
            null === (v = k.recipient) ||
            void 0 === v ||
            null === (E = v.address) ||
            void 0 === E
              ? void 0
              : E.message,
        })
      ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(r.Label, { htmlFor: "items" }, "Item(s)"),
        m.default.createElement(r.Input, {
          key: "items",
          id: "items",
          name: "items",
          placeholder: "Separate with commas",
          ref: q,
        }),
        m.default.createElement(r.FormError, {
          error:
            null == k || null === (h = k.items) || void 0 === h
              ? void 0
              : h.message,
        })
      ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(t.Controller, {
          control: j,
          name: "allowDescription",
          render: function (e) {
            var t = e.onChange,
              n = e.value;
            return m.default.createElement(r.Checkbox, {
              active: n,
              onChange: t,
              title: "Allow Description",
            });
          },
        })
      ),
      $
        ? m.default.createElement(
            r.FormGroup,
            null,
            m.default.createElement(
              r.Label,
              { htmlFor: "description" },
              "Description"
            ),
            m.default.createElement(r.Textarea, {
              id: "description",
              name: "description",
              placeholder: "Type Name",
              ref: q,
              required: !0,
            }),
            m.default.createElement(r.FormError, {
              error:
                null == k || null === (b = k.description) || void 0 === b
                  ? void 0
                  : b.message,
            })
          )
        : null,
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "recipient.name" },
          "Receiver Name"
        ),
        m.default.createElement(r.Input, {
          id: "recipient.name",
          name: "recipient.name",
          placeholder: "Type Name",
          ref: q,
        }),
        m.default.createElement(r.FormError, {
          error:
            null == k ||
            null === (w = k.recipient) ||
            void 0 === w ||
            null === (F = w.name) ||
            void 0 === F
              ? void 0
              : F.message,
        })
      ),
      m.default.createElement(
        r.FormGroup,
        null,
        m.default.createElement(
          r.Label,
          { htmlFor: "recipient.phoneNumber" },
          "Receiver Number"
        ),
        m.default.createElement(t.Controller, {
          control: j,
          name: "recipient.phoneNumber",
          render: function (e) {
            var t = e.onChange,
              n = e.value,
              a = g(e, ["onChange", "value"]);
            return m.default.createElement(
              r.Input,
              y(
                {
                  id: "recipient.phoneNumber",
                  type: "phone",
                  onChange: function () {
                    for (
                      var e = arguments.length, r = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      r[n] = arguments[n];
                    return t(r);
                  },
                },
                n ? { value: n[0] } : {},
                a
              )
            );
          },
        }),
        m.default.createElement(r.FormError, {
          error:
            null == k ||
            null === (C = k.recipient) ||
            void 0 === C ||
            null === (x = C.phoneNumber) ||
            void 0 === x
              ? void 0
              : x.message,
        })
      ),
      m.default.createElement(S, { amount: null == _ ? void 0 : _.amount }),
      m.default.createElement(
        r.Button,
        { defaultRightIcon: !0, isLoading: O, onClick: A(N) },
        P
      )
    );
  };
Re.defaultProps = {
  buttonText: "Submit Request",
  extras: null,
  isLoading: !1,
  onSubmit: function () {},
  pricelists: [],
  schema: null,
  type: "client",
};
var Te = function (e) {
  var a,
    l,
    o = e.buttonText,
    i = e.extras,
    u = e.isLoading,
    d = e.onSubmit,
    c = e.schema,
    s = t.useForm({
      resolver: n.yupResolver(c || be),
      defaultValues: { rememberMe: !1 },
    }),
    f = s.register,
    p = s.handleSubmit,
    v = s.errors,
    E = s.control;
  return m.default.createElement(
    r.Stack,
    { as: "form", spacing: 6, onSubmit: p(d) },
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(
        r.Label,
        { htmlFor: "username" },
        "Email Address or Phone Number"
      ),
      m.default.createElement(r.Input, {
        id: "username",
        name: "username",
        placeholder: "Type your email address or Phone Number",
        ref: f,
      }),
      m.default.createElement(r.FormError, {
        error:
          null == v || null === (a = v.username) || void 0 === a
            ? void 0
            : a.message,
      })
    ),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(r.Label, { htmlFor: "password" }, "Password"),
      m.default.createElement(r.Input, {
        id: "password",
        placeholder: "Type your password",
        type: "password",
        name: "password",
        ref: f,
      }),
      m.default.createElement(r.FormError, {
        error:
          null == v || null === (l = v.password) || void 0 === l
            ? void 0
            : l.message,
      })
    ),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(t.Controller, {
        control: E,
        name: "rememberMe",
        render: function (e) {
          var t = e.onChange,
            n = e.value;
          return m.default.createElement(r.Checkbox, {
            active: n,
            onChange: t,
            title: "Keep me logged in",
          });
        },
      })
    ),
    m.default.createElement(
      r.Button,
      { defaultRightIcon: !0, isLoading: u, onClick: p(d) },
      o
    ),
    i
  );
};
Te.defaultProps = {
  buttonText: "Login",
  extras: null,
  isLoading: !1,
  onSubmit: function () {},
  schema: null,
};
var Ie = function (e) {
  var a,
    l,
    o,
    i = e.buttonText,
    u = e.extras,
    d = e.isLoading,
    c = e.onSubmit,
    s = e.schema,
    f = t.useForm({
      resolver: n.yupResolver(s || Fe),
      defaultValues: { rememberMe: !1 },
    }),
    p = f.register,
    v = f.handleSubmit,
    E = f.errors;
  return m.default.createElement(
    r.Stack,
    { as: "form", spacing: 6, onSubmit: v(c) },
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(
        r.Label,
        { htmlFor: "currentPassword" },
        "Current Password"
      ),
      m.default.createElement(r.Input, {
        id: "currentPassword",
        placeholder: "Type your password",
        type: "password",
        name: "currentPassword",
        ref: p,
      }),
      m.default.createElement(r.FormError, {
        error:
          null == E || null === (a = E.currentPassword) || void 0 === a
            ? void 0
            : a.message,
      })
    ),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(
        r.Label,
        { htmlFor: "newPassword" },
        "New Password"
      ),
      m.default.createElement(r.Input, {
        id: "newPassword",
        placeholder: "Type your password",
        type: "password",
        name: "newPassword",
        ref: p,
      }),
      m.default.createElement(r.FormError, {
        error:
          null == E || null === (l = E.newPassword) || void 0 === l
            ? void 0
            : l.message,
      })
    ),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(
        r.Label,
        { htmlFor: "confirmPassword" },
        "Re-enter New Password"
      ),
      m.default.createElement(r.Input, {
        id: "confirmPassword",
        placeholder: "Type your password",
        type: "password",
        name: "confirmPassword",
        ref: p,
      }),
      m.default.createElement(r.FormError, {
        error:
          null == E || null === (o = E.confirmPassword) || void 0 === o
            ? void 0
            : o.message,
      })
    ),
    m.default.createElement(
      r.Button,
      { defaultRightIcon: !0, isLoading: d, onClick: v(c) },
      i
    ),
    u
  );
};
Ie.defaultProps = {
  buttonText: "Update Password",
  extras: null,
  isLoading: !1,
  onSubmit: function () {},
  schema: null,
};
var qe = function (e) {
  var a,
    l,
    o = e.buttonText,
    i = e.extras,
    u = e.isLoading,
    d = e.onSubmit,
    c = e.schema,
    s = t.useForm({
      resolver: n.yupResolver(c || we),
      defaultValues: { rememberMe: !1 },
    }),
    f = s.register,
    p = s.handleSubmit,
    v = s.errors;
  return m.default.createElement(
    r.Stack,
    { as: "form", spacing: 6, onSubmit: p(d) },
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(r.Label, { htmlFor: "password" }, "Password"),
      m.default.createElement(r.Input, {
        id: "password",
        placeholder: "Type your password",
        type: "password",
        name: "password",
        ref: f,
      }),
      m.default.createElement(r.FormError, {
        error:
          null == v || null === (a = v.password) || void 0 === a
            ? void 0
            : a.message,
      })
    ),
    m.default.createElement(
      r.FormGroup,
      null,
      m.default.createElement(
        r.Label,
        { htmlFor: "confirmPassword" },
        "Re-enter Password"
      ),
      m.default.createElement(r.Input, {
        id: "confirmPassword",
        placeholder: "Type your password",
        type: "password",
        name: "confirmPassword",
        ref: f,
      }),
      m.default.createElement(r.FormError, {
        error:
          null == v || null === (l = v.confirmPassword) || void 0 === l
            ? void 0
            : l.message,
      })
    ),
    m.default.createElement(
      r.Button,
      { defaultRightIcon: !0, isLoading: u, onClick: p(d) },
      o
    ),
    i
  );
};
(qe.defaultProps = {
  buttonText: "Reset Password",
  extras: null,
  isLoading: !1,
  onSubmit: function () {},
  schema: null,
}),
  (exports.AdminCustomerOrderForm = Ce),
  (exports.AdminOrderForm = xe),
  (exports.ChangePasswordForm = Ie),
  (exports.CustomerOrderForm = Oe),
  (exports.DeliveryFee = S),
  (exports.GuestOrderForm = Re),
  (exports.LoginForm = Te),
  (exports.PasswordForm = qe),
  (exports.PricePicker = pe),
  (exports.confirmPasswordSchema = Fe),
  (exports.customerOrderSchema = he),
  (exports.loginSchema = be),
  (exports.orderSchema = ge),
  (exports.passwordSchema = we);
