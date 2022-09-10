import * as e from "react";
import r, {
  useState as n,
  useEffect as t,
  useRef as a,
  useCallback as o,
} from "react";
import {
  Card as l,
  Stack as i,
  Box as c,
  Text as s,
  FormGroup as u,
  Label as d,
  Input as m,
  FormError as p,
  Flex as f,
  Radio as v,
  Checkbox as y,
  Textarea as h,
  Switch as E,
  Select as g,
  Button as b,
} from "sharply-kit";
import { useForm as w, Controller as S } from "react-hook-form";
import { yupResolver as P } from "@hookform/resolvers/yup";
import * as C from "yup";
import { parsePhoneNumberFromString as N } from "libphonenumber-js";
var x, O, R;
function T() {
  return (T =
    Object.assign ||
    function (e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = arguments[r];
        for (var t in n)
          Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
      }
      return e;
    }).apply(this, arguments);
}
function A(r) {
  return e.createElement(
    "svg",
    T(
      {
        width: 20,
        height: 18,
        fill: "var(--primary)",
        xmlns: "http://www.w3.org/2000/svg",
      },
      r
    ),
    x ||
      (x = e.createElement("path", {
        d:
          "M19.972 10.132L16.196.65a.393.393 0 00-.51-.22l-15.32 6.1a.385.385 0 00-.157.125.388.388 0 00-.209.34v10.208c0 .217.176.393.393.393h16.489a.393.393 0 00.393-.393V11.63l2.478-.987c.201-.08.3-.308.219-.51zm-3.483 6.68H.785V7.389H16.49v9.423zM6.551 6.606l6.573-2.62c.587.617 1.4.968 2.251.971l.656 1.649H6.55zm10.724 4.18v-3.79a.393.393 0 00-.393-.392h-.006l-.832-2.09a.325.325 0 00-.032-.049.388.388 0 00-.41-.302 2.348 2.348 0 01-2.06-.887.39.39 0 00-.503-.088.448.448 0 00-.055.01L4.958 6.395a.388.388 0 00-.215.21H2.305l13.307-5.298 3.486 8.753-1.823.727z",
        fill: "inherit",
      })),
    O ||
      (O = e.createElement("path", {
        d:
          "M1.85 14.161a2.347 2.347 0 011.586 1.583c.05.167.202.28.376.28a.363.363 0 00.06-.009.365.365 0 00.054.011h9.423a.339.339 0 00.047-.01.366.366 0 00.442-.268v-.002a2.348 2.348 0 011.586-1.585c.184-.057.3-.241.269-.432a.38.38 0 00.011-.058V10.53a.348.348 0 00-.012-.058.387.387 0 00-.269-.432 2.345 2.345 0 01-1.584-1.585.388.388 0 00-.435-.27.37.37 0 00-.055-.01H3.926a.37.37 0 00-.058.011.388.388 0 00-.432.27A2.347 2.347 0 011.85 10.04a.388.388 0 00-.27.432.398.398 0 00-.01.058v3.14a.36.36 0 00.01.055.389.389 0 00.27.436zm.506-3.472a3.115 3.115 0 001.73-1.73h9.103a3.116 3.116 0 001.73 1.73v2.822a3.12 3.12 0 00-1.73 1.73H4.085a3.12 3.12 0 00-1.73-1.73V10.69z",
        fill: "inherit",
      })),
    R ||
      (R = e.createElement("path", {
        d:
          "M8.637 14.456a2.356 2.356 0 100-4.711 2.356 2.356 0 000 4.711zm0-3.926a1.57 1.57 0 110 3.14 1.57 1.57 0 010-3.14zM4.319 12.69a.589.589 0 100-1.179.589.589 0 000 1.178zm0-.786a.196.196 0 110 .393.196.196 0 010-.393zM12.956 12.69a.589.589 0 100-1.179.589.589 0 000 1.178zm0-.786a.196.196 0 110 .393.196.196 0 010-.393z",
        fill: "inherit",
      }))
  );
}
function q(e, r, n) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = n),
    e
  );
}
function j() {
  return (j =
    Object.assign ||
    function (e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = arguments[r];
        for (var t in n)
          Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
      }
      return e;
    }).apply(this, arguments);
}
function D(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r &&
      (t = t.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      n.push.apply(n, t);
  }
  return n;
}
function $(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? D(Object(n), !0).forEach(function (r) {
          q(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : D(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function k(e, r) {
  if (null == e) return {};
  var n,
    t,
    a = (function (e, r) {
      if (null == e) return {};
      var n,
        t,
        a = {},
        o = Object.keys(e);
      for (t = 0; t < o.length; t++)
        (n = o[t]), r.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    })(e, r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (t = 0; t < o.length; t++)
      (n = o[t]),
        r.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
  }
  return a;
}
function I(e, r) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, r) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
        return;
      var n = [],
        t = !0,
        a = !1,
        o = void 0;
      try {
        for (
          var l, i = e[Symbol.iterator]();
          !(t = (l = i.next()).done) && (n.push(l.value), !r || n.length !== r);
          t = !0
        );
      } catch (e) {
        (a = !0), (o = e);
      } finally {
        try {
          t || null == i.return || i.return();
        } finally {
          if (a) throw o;
        }
      }
      return n;
    })(e, r) ||
    (function (e, r) {
      if (!e) return;
      if ("string" == typeof e) return F(e, r);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if (
        "Arguments" === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
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
  for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
  return t;
}
var _ = function (e) {
  var n = e.amount;
  return null == n
    ? null
    : r.createElement(
        l,
        { as: i, alignItems: "center", spacing: 2, direction: "row" },
        r.createElement(
          c,
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
          r.createElement(c, {
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
          r.createElement(A, null)
        ),
        r.createElement(s, { fontSize: "xs" }, "Delivery Fee"),
        r.createElement(
          s,
          { color: "heading", fontWeight: "bold" },
          "₦",
          (function (e) {
            var r =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            if (e && (void 0 !== e || null !== e)) {
              var n = parseFloat(e);
              if (!r && !n) return null;
              var t = I(n.toFixed(2).toString().split("."), 1)[0];
              return "".concat(t.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            }
            return e;
          })(n / 100)
        )
      );
};
function M(e) {
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
var L = "function" == typeof Symbol && Symbol.for,
  V = L ? Symbol.for("react.element") : 60103,
  z = L ? Symbol.for("react.portal") : 60106,
  B = L ? Symbol.for("react.fragment") : 60107,
  W = L ? Symbol.for("react.strict_mode") : 60108,
  Y = L ? Symbol.for("react.profiler") : 60114,
  U = L ? Symbol.for("react.provider") : 60109,
  H = L ? Symbol.for("react.context") : 60110,
  J = L ? Symbol.for("react.async_mode") : 60111,
  G = L ? Symbol.for("react.concurrent_mode") : 60111,
  K = L ? Symbol.for("react.forward_ref") : 60112,
  Q = L ? Symbol.for("react.suspense") : 60113,
  X = L ? Symbol.for("react.suspense_list") : 60120,
  Z = L ? Symbol.for("react.memo") : 60115,
  ee = L ? Symbol.for("react.lazy") : 60116,
  re = L ? Symbol.for("react.block") : 60121,
  ne = L ? Symbol.for("react.fundamental") : 60117,
  te = L ? Symbol.for("react.responder") : 60118,
  ae = L ? Symbol.for("react.scope") : 60119;
function oe(e) {
  if ("object" == typeof e && null !== e) {
    var r = e.$$typeof;
    switch (r) {
      case V:
        switch ((e = e.type)) {
          case J:
          case G:
          case B:
          case Y:
          case W:
          case Q:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case H:
              case K:
              case ee:
              case Z:
              case U:
                return e;
              default:
                return r;
            }
        }
      case z:
        return r;
    }
  }
}
function le(e) {
  return oe(e) === G;
}
var ie = {
    AsyncMode: J,
    ConcurrentMode: G,
    ContextConsumer: H,
    ContextProvider: U,
    Element: V,
    ForwardRef: K,
    Fragment: B,
    Lazy: ee,
    Memo: Z,
    Portal: z,
    Profiler: Y,
    StrictMode: W,
    Suspense: Q,
    isAsyncMode: function (e) {
      return le(e) || oe(e) === J;
    },
    isConcurrentMode: le,
    isContextConsumer: function (e) {
      return oe(e) === H;
    },
    isContextProvider: function (e) {
      return oe(e) === U;
    },
    isElement: function (e) {
      return "object" == typeof e && null !== e && e.$$typeof === V;
    },
    isForwardRef: function (e) {
      return oe(e) === K;
    },
    isFragment: function (e) {
      return oe(e) === B;
    },
    isLazy: function (e) {
      return oe(e) === ee;
    },
    isMemo: function (e) {
      return oe(e) === Z;
    },
    isPortal: function (e) {
      return oe(e) === z;
    },
    isProfiler: function (e) {
      return oe(e) === Y;
    },
    isStrictMode: function (e) {
      return oe(e) === W;
    },
    isSuspense: function (e) {
      return oe(e) === Q;
    },
    isValidElementType: function (e) {
      return (
        "string" == typeof e ||
        "function" == typeof e ||
        e === B ||
        e === G ||
        e === Y ||
        e === W ||
        e === Q ||
        e === X ||
        ("object" == typeof e &&
          null !== e &&
          (e.$$typeof === ee ||
            e.$$typeof === Z ||
            e.$$typeof === U ||
            e.$$typeof === H ||
            e.$$typeof === K ||
            e.$$typeof === ne ||
            e.$$typeof === te ||
            e.$$typeof === ae ||
            e.$$typeof === re))
      );
    },
    typeOf: oe,
  },
  ce = M(function (e, r) {
    "production" !== process.env.NODE_ENV &&
      (function () {
        var e = "function" == typeof Symbol && Symbol.for,
          n = e ? Symbol.for("react.element") : 60103,
          t = e ? Symbol.for("react.portal") : 60106,
          a = e ? Symbol.for("react.fragment") : 60107,
          o = e ? Symbol.for("react.strict_mode") : 60108,
          l = e ? Symbol.for("react.profiler") : 60114,
          i = e ? Symbol.for("react.provider") : 60109,
          c = e ? Symbol.for("react.context") : 60110,
          s = e ? Symbol.for("react.async_mode") : 60111,
          u = e ? Symbol.for("react.concurrent_mode") : 60111,
          d = e ? Symbol.for("react.forward_ref") : 60112,
          m = e ? Symbol.for("react.suspense") : 60113,
          p = e ? Symbol.for("react.suspense_list") : 60120,
          f = e ? Symbol.for("react.memo") : 60115,
          v = e ? Symbol.for("react.lazy") : 60116,
          y = e ? Symbol.for("react.block") : 60121,
          h = e ? Symbol.for("react.fundamental") : 60117,
          E = e ? Symbol.for("react.responder") : 60118,
          g = e ? Symbol.for("react.scope") : 60119;
        function b(e) {
          if ("object" == typeof e && null !== e) {
            var r = e.$$typeof;
            switch (r) {
              case n:
                var p = e.type;
                switch (p) {
                  case s:
                  case u:
                  case a:
                  case l:
                  case o:
                  case m:
                    return p;
                  default:
                    var y = p && p.$$typeof;
                    switch (y) {
                      case c:
                      case d:
                      case v:
                      case f:
                      case i:
                        return y;
                      default:
                        return r;
                    }
                }
              case t:
                return r;
            }
          }
        }
        var w = s,
          S = u,
          P = c,
          C = i,
          N = n,
          x = d,
          O = a,
          R = v,
          T = f,
          A = t,
          q = l,
          j = o,
          D = m,
          $ = !1;
        function k(e) {
          return b(e) === u;
        }
        (r.AsyncMode = w),
          (r.ConcurrentMode = S),
          (r.ContextConsumer = P),
          (r.ContextProvider = C),
          (r.Element = N),
          (r.ForwardRef = x),
          (r.Fragment = O),
          (r.Lazy = R),
          (r.Memo = T),
          (r.Portal = A),
          (r.Profiler = q),
          (r.StrictMode = j),
          (r.Suspense = D),
          (r.isAsyncMode = function (e) {
            return (
              $ ||
                (($ = !0),
                console.warn(
                  "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                )),
              k(e) || b(e) === s
            );
          }),
          (r.isConcurrentMode = k),
          (r.isContextConsumer = function (e) {
            return b(e) === c;
          }),
          (r.isContextProvider = function (e) {
            return b(e) === i;
          }),
          (r.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === n;
          }),
          (r.isForwardRef = function (e) {
            return b(e) === d;
          }),
          (r.isFragment = function (e) {
            return b(e) === a;
          }),
          (r.isLazy = function (e) {
            return b(e) === v;
          }),
          (r.isMemo = function (e) {
            return b(e) === f;
          }),
          (r.isPortal = function (e) {
            return b(e) === t;
          }),
          (r.isProfiler = function (e) {
            return b(e) === l;
          }),
          (r.isStrictMode = function (e) {
            return b(e) === o;
          }),
          (r.isSuspense = function (e) {
            return b(e) === m;
          }),
          (r.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === a ||
              e === u ||
              e === l ||
              e === o ||
              e === m ||
              e === p ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === v ||
                  e.$$typeof === f ||
                  e.$$typeof === i ||
                  e.$$typeof === c ||
                  e.$$typeof === d ||
                  e.$$typeof === h ||
                  e.$$typeof === E ||
                  e.$$typeof === g ||
                  e.$$typeof === y))
            );
          }),
          (r.typeOf = b);
      })();
  }),
  se = M(function (e) {
    "production" === process.env.NODE_ENV ? (e.exports = ie) : (e.exports = ce);
  }),
  ue = Object.getOwnPropertySymbols,
  de = Object.prototype.hasOwnProperty,
  me = Object.prototype.propertyIsEnumerable;
function pe(e) {
  if (null == e)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
var fe = (function () {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
      for (var r = {}, n = 0; n < 10; n++) r["_" + String.fromCharCode(n)] = n;
      if (
        "0123456789" !==
        Object.getOwnPropertyNames(r)
          .map(function (e) {
            return r[e];
          })
          .join("")
      )
        return !1;
      var t = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (e) {
          t[e] = e;
        }),
        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, t)).join("")
      );
    } catch (e) {
      return !1;
    }
  })()
    ? Object.assign
    : function (e, r) {
        for (var n, t, a = pe(e), o = 1; o < arguments.length; o++) {
          for (var l in (n = Object(arguments[o])))
            de.call(n, l) && (a[l] = n[l]);
          if (ue) {
            t = ue(n);
            for (var i = 0; i < t.length; i++)
              me.call(n, t[i]) && (a[t[i]] = n[t[i]]);
          }
        }
        return a;
      },
  ve = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  ye = function () {};
if ("production" !== process.env.NODE_ENV) {
  var he = ve,
    Ee = {},
    ge = Function.call.bind(Object.prototype.hasOwnProperty);
  ye = function (e) {
    var r = "Warning: " + e;
    "undefined" != typeof console && console.error(r);
    try {
      throw new Error(r);
    } catch (e) {}
  };
}
function be(e, r, n, t, a) {
  if ("production" !== process.env.NODE_ENV)
    for (var o in e)
      if (ge(e, o)) {
        var l;
        try {
          if ("function" != typeof e[o]) {
            var i = Error(
              (t || "React class") +
                ": " +
                n +
                " type `" +
                o +
                "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                typeof e[o] +
                "`."
            );
            throw ((i.name = "Invariant Violation"), i);
          }
          l = e[o](r, o, t, n, null, he);
        } catch (e) {
          l = e;
        }
        if (
          (!l ||
            l instanceof Error ||
            ye(
              (t || "React class") +
                ": type specification of " +
                n +
                " `" +
                o +
                "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                typeof l +
                ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
            ),
          l instanceof Error && !(l.message in Ee))
        ) {
          Ee[l.message] = !0;
          var c = a ? a() : "";
          ye("Failed " + n + " type: " + l.message + (null != c ? c : ""));
        }
      }
}
be.resetWarningCache = function () {
  "production" !== process.env.NODE_ENV && (Ee = {});
};
var we = be,
  Se = Function.call.bind(Object.prototype.hasOwnProperty),
  Pe = function () {};
function Ce() {
  return null;
}
"production" !== process.env.NODE_ENV &&
  (Pe = function (e) {
    var r = "Warning: " + e;
    "undefined" != typeof console && console.error(r);
    try {
      throw new Error(r);
    } catch (e) {}
  });
var Ne = function (e, r) {
  var n = "function" == typeof Symbol && Symbol.iterator;
  var t = "<<anonymous>>",
    a = {
      array: c("array"),
      bool: c("boolean"),
      func: c("function"),
      number: c("number"),
      object: c("object"),
      string: c("string"),
      symbol: c("symbol"),
      any: i(Ce),
      arrayOf: function (e) {
        return i(function (r, n, t, a, o) {
          if ("function" != typeof e)
            return new l(
              "Property `" +
                o +
                "` of component `" +
                t +
                "` has invalid PropType notation inside arrayOf."
            );
          var i = r[n];
          if (!Array.isArray(i))
            return new l(
              "Invalid " +
                a +
                " `" +
                o +
                "` of type `" +
                u(i) +
                "` supplied to `" +
                t +
                "`, expected an array."
            );
          for (var c = 0; c < i.length; c++) {
            var s = e(i, c, t, a, o + "[" + c + "]", ve);
            if (s instanceof Error) return s;
          }
          return null;
        });
      },
      element: i(function (r, n, t, a, o) {
        var i = r[n];
        return e(i)
          ? null
          : new l(
              "Invalid " +
                a +
                " `" +
                o +
                "` of type `" +
                u(i) +
                "` supplied to `" +
                t +
                "`, expected a single ReactElement."
            );
      }),
      elementType: i(function (e, r, n, t, a) {
        var o = e[r];
        return se.isValidElementType(o)
          ? null
          : new l(
              "Invalid " +
                t +
                " `" +
                a +
                "` of type `" +
                u(o) +
                "` supplied to `" +
                n +
                "`, expected a single ReactElement type."
            );
      }),
      instanceOf: function (e) {
        return i(function (r, n, a, o, i) {
          if (!(r[n] instanceof e)) {
            var c = e.name || t;
            return new l(
              "Invalid " +
                o +
                " `" +
                i +
                "` of type `" +
                (((s = r[n]).constructor && s.constructor.name
                  ? s.constructor.name
                  : t) +
                  "` supplied to `") +
                a +
                "`, expected instance of `" +
                c +
                "`."
            );
          }
          var s;
          return null;
        });
      },
      node: i(function (e, r, n, t, a) {
        return s(e[r])
          ? null
          : new l(
              "Invalid " +
                t +
                " `" +
                a +
                "` supplied to `" +
                n +
                "`, expected a ReactNode."
            );
      }),
      objectOf: function (e) {
        return i(function (r, n, t, a, o) {
          if ("function" != typeof e)
            return new l(
              "Property `" +
                o +
                "` of component `" +
                t +
                "` has invalid PropType notation inside objectOf."
            );
          var i = r[n],
            c = u(i);
          if ("object" !== c)
            return new l(
              "Invalid " +
                a +
                " `" +
                o +
                "` of type `" +
                c +
                "` supplied to `" +
                t +
                "`, expected an object."
            );
          for (var s in i)
            if (Se(i, s)) {
              var d = e(i, s, t, a, o + "." + s, ve);
              if (d instanceof Error) return d;
            }
          return null;
        });
      },
      oneOf: function (e) {
        if (!Array.isArray(e))
          return (
            "production" !== process.env.NODE_ENV &&
              Pe(
                arguments.length > 1
                  ? "Invalid arguments supplied to oneOf, expected an array, got " +
                      arguments.length +
                      " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                  : "Invalid argument supplied to oneOf, expected an array."
              ),
            Ce
          );
        function r(r, n, t, a, i) {
          for (var c = r[n], s = 0; s < e.length; s++)
            if (o(c, e[s])) return null;
          var u = JSON.stringify(e, function (e, r) {
            return "symbol" === d(r) ? String(r) : r;
          });
          return new l(
            "Invalid " +
              a +
              " `" +
              i +
              "` of value `" +
              String(c) +
              "` supplied to `" +
              t +
              "`, expected one of " +
              u +
              "."
          );
        }
        return i(r);
      },
      oneOfType: function (e) {
        if (!Array.isArray(e))
          return (
            "production" !== process.env.NODE_ENV &&
              Pe(
                "Invalid argument supplied to oneOfType, expected an instance of array."
              ),
            Ce
          );
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          if ("function" != typeof n)
            return (
              Pe(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                  m(n) +
                  " at index " +
                  r +
                  "."
              ),
              Ce
            );
        }
        return i(function (r, n, t, a, o) {
          for (var i = 0; i < e.length; i++)
            if (null == (0, e[i])(r, n, t, a, o, ve)) return null;
          return new l(
            "Invalid " + a + " `" + o + "` supplied to `" + t + "`."
          );
        });
      },
      shape: function (e) {
        return i(function (r, n, t, a, o) {
          var i = r[n],
            c = u(i);
          if ("object" !== c)
            return new l(
              "Invalid " +
                a +
                " `" +
                o +
                "` of type `" +
                c +
                "` supplied to `" +
                t +
                "`, expected `object`."
            );
          for (var s in e) {
            var d = e[s];
            if (d) {
              var m = d(i, s, t, a, o + "." + s, ve);
              if (m) return m;
            }
          }
          return null;
        });
      },
      exact: function (e) {
        return i(function (r, n, t, a, o) {
          var i = r[n],
            c = u(i);
          if ("object" !== c)
            return new l(
              "Invalid " +
                a +
                " `" +
                o +
                "` of type `" +
                c +
                "` supplied to `" +
                t +
                "`, expected `object`."
            );
          var s = fe({}, r[n], e);
          for (var d in s) {
            var m = e[d];
            if (!m)
              return new l(
                "Invalid " +
                  a +
                  " `" +
                  o +
                  "` key `" +
                  d +
                  "` supplied to `" +
                  t +
                  "`.\nBad object: " +
                  JSON.stringify(r[n], null, "  ") +
                  "\nValid keys: " +
                  JSON.stringify(Object.keys(e), null, "  ")
              );
            var p = m(i, d, t, a, o + "." + d, ve);
            if (p) return p;
          }
          return null;
        });
      },
    };
  function o(e, r) {
    return e === r ? 0 !== e || 1 / e == 1 / r : e != e && r != r;
  }
  function l(e) {
    (this.message = e), (this.stack = "");
  }
  function i(e) {
    if ("production" !== process.env.NODE_ENV)
      var n = {},
        a = 0;
    function o(o, i, c, s, u, d, m) {
      if (((s = s || t), (d = d || c), m !== ve)) {
        if (r) {
          var p = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((p.name = "Invariant Violation"), p);
        }
        if (
          "production" !== process.env.NODE_ENV &&
          "undefined" != typeof console
        ) {
          var f = s + ":" + c;
          !n[f] &&
            a < 3 &&
            (Pe(
              "You are manually calling a React.PropTypes validation function for the `" +
                d +
                "` prop on `" +
                s +
                "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ),
            (n[f] = !0),
            a++);
        }
      }
      return null == i[c]
        ? o
          ? null === i[c]
            ? new l(
                "The " +
                  u +
                  " `" +
                  d +
                  "` is marked as required in `" +
                  s +
                  "`, but its value is `null`."
              )
            : new l(
                "The " +
                  u +
                  " `" +
                  d +
                  "` is marked as required in `" +
                  s +
                  "`, but its value is `undefined`."
              )
          : null
        : e(i, c, s, u, d);
    }
    var i = o.bind(null, !1);
    return (i.isRequired = o.bind(null, !0)), i;
  }
  function c(e) {
    return i(function (r, n, t, a, o, i) {
      var c = r[n];
      return u(c) !== e
        ? new l(
            "Invalid " +
              a +
              " `" +
              o +
              "` of type `" +
              d(c) +
              "` supplied to `" +
              t +
              "`, expected `" +
              e +
              "`."
          )
        : null;
    });
  }
  function s(r) {
    switch (typeof r) {
      case "number":
      case "string":
      case "undefined":
        return !0;
      case "boolean":
        return !r;
      case "object":
        if (Array.isArray(r)) return r.every(s);
        if (null === r || e(r)) return !0;
        var t = (function (e) {
          var r = e && ((n && e[n]) || e["@@iterator"]);
          if ("function" == typeof r) return r;
        })(r);
        if (!t) return !1;
        var a,
          o = t.call(r);
        if (t !== r.entries) {
          for (; !(a = o.next()).done; ) if (!s(a.value)) return !1;
        } else
          for (; !(a = o.next()).done; ) {
            var l = a.value;
            if (l && !s(l[1])) return !1;
          }
        return !0;
      default:
        return !1;
    }
  }
  function u(e) {
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
  function d(e) {
    if (null == e) return "" + e;
    var r = u(e);
    if ("object" === r) {
      if (e instanceof Date) return "date";
      if (e instanceof RegExp) return "regexp";
    }
    return r;
  }
  function m(e) {
    var r = d(e);
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
    (l.prototype = Error.prototype),
    (a.checkPropTypes = we),
    (a.resetWarningCache = we.resetWarningCache),
    (a.PropTypes = a),
    a
  );
};
function xe() {}
function Oe() {}
Oe.resetWarningCache = xe;
var Re = M(function (e) {
  if ("production" !== process.env.NODE_ENV) {
    var r = se;
    e.exports = Ne(r.isElement, !0);
  } else
    e.exports = (function () {
      function e(e, r, n, t, a, o) {
        if (o !== ve) {
          var l = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((l.name = "Invariant Violation"), l);
        }
      }
      function r() {
        return e;
      }
      e.isRequired = e;
      var n = {
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
        checkPropTypes: Oe,
        resetWarningCache: xe,
      };
      return (n.PropTypes = n), n;
    })();
});
var Te = function (e) {
  var o,
    v,
    y = e.error,
    h = e.getPrice,
    E = e.label,
    g = e.name,
    b = e.onChange,
    w = e.pricelists,
    S = e.value,
    P = a(null),
    C = (function () {
      var e = I(
          n(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]),
          2
        ),
        r = e[0],
        t = e[1];
      return {
        isOpen: r,
        toggleModal: function () {
          return t(function (e) {
            return !e;
          });
        },
        closeModal: function () {
          return t(!1);
        },
        openModal: function () {
          return t(!0);
        },
      };
    })(),
    N = C.isOpen,
    x = C.toggleModal,
    O = C.closeModal;
  !(function (e, r) {
    t(
      function () {
        function n(n) {
          e.current && !e.current.contains(n.target) && r();
        }
        return (
          document.addEventListener("mousedown", n),
          function () {
            document.removeEventListener("mousedown", n);
          }
        );
      },
      [e, r]
    );
  })(P, function () {
    N && O();
  });
  var R = h(S);
  return r.createElement(
    c,
    { sx: { position: "relative" }, ref: P },
    r.createElement(
      u,
      null,
      r.createElement(d, { htmlFor: g }, E),
      r.createElement(
        c,
        { onClick: x },
        r.createElement(m, {
          id: g,
          name: g,
          placeholder: "Select Area",
          value: S
            ? ""
                .concat(
                  null == R || null === (o = R.from) || void 0 === o
                    ? void 0
                    : o.name,
                  " - "
                )
                .concat(
                  null == R || null === (v = R.to) || void 0 === v
                    ? void 0
                    : v.name
                )
            : "",
          readOnly: !0,
        })
      ),
      r.createElement(p, { error: y })
    ),
    N &&
      r.createElement(
        i,
        {
          alignItems: "stretch",
          as: l,
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
        !Boolean(w.length) &&
          r.createElement(
            f,
            {
              alignItems: "center",
              justifyContent: "center",
              py: 3,
              flexDirection: "column",
            },
            r.createElement(
              s,
              { textAlign: "center", variant: "thickText" },
              "No delivery areas available"
            )
          ),
        w.map(function (e) {
          var n, t, a, o;
          return r.createElement(
            c,
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
                b(e._id), O();
              },
            },
            r.createElement(
              c,
              null,
              r.createElement(
                s,
                { color: "heading" },
                null == e || null === (n = e.from) || void 0 === n
                  ? void 0
                  : n.name
              ),
              r.createElement(
                s,
                { color: "heading", fontSize: "xxs" },
                null == e || null === (t = e.from) || void 0 === t
                  ? void 0
                  : t.coverage
              )
            ),
            r.createElement(
              c,
              { pt: 5 },
              r.createElement(c, {
                width: "13px",
                height: "1px",
                backgroundColor: "heading",
              })
            ),
            r.createElement(
              c,
              null,
              r.createElement(
                s,
                { color: "heading" },
                null == e || null === (a = e.to) || void 0 === a
                  ? void 0
                  : a.name
              ),
              r.createElement(
                s,
                { color: "heading", fontSize: "xxs" },
                null == e || null === (o = e.to) || void 0 === o
                  ? void 0
                  : o.coverage
              )
            ),
            r.createElement(
              s,
              { fontWeight: "medium", color: "heading" },
              null == e ? void 0 : e.name
            ),
            r.createElement(
              s,
              { fontSize: "xs" },
              null == e ? void 0 : e.coverage
            )
          );
        })
      )
  );
};
(Te.propTypes = {
  getPrice: Re.func,
  error: Re.string.isRequired,
  label: Re.string,
  name: Re.string,
  onChange: Re.func.isRequired,
  pricelists: Re.array,
  value: Re.string.isRequired,
}),
  (Te.defaultProps = {
    getPrice: function () {},
    label: "Delivery Area",
    name: "deliveryArea",
    pricelists: [],
  });
var Ae = { $SENDER: "sender", $RECIPIENT: "recipient", $3RD_PARTY: "3rdparty" };
C.addMethod(C.string, "phone", function () {
  return this.test("phone", "Phone number is not a valid number", function (
    e,
    r
  ) {
    var n = r.parent;
    if (e) {
      var t =
          null != n && n.country
            ? JSON.parse(n.country).countryCode.toUpperCase()
            : "NG",
        a = N(e, t);
      return null == a ? void 0 : a.isValid();
    }
    return !0;
  });
}),
  C.addMethod(C.array, "phone", function () {
    return this.test("phone", "Phone number is not a valid number", function (
      e
    ) {
      if (e) {
        var r = e[0];
        if (r) {
          var n,
            t,
            a =
              (null === (n = e[1]) ||
              void 0 === n ||
              null === (t = n.countryCode) ||
              void 0 === t
                ? void 0
                : t.toUpperCase()) || "NG",
            o = N(r, a);
          return null == o ? void 0 : o.isValid();
        }
        return !0;
      }
      return !0;
    });
  });
var qe = function (e, r) {
    var n = r.from[1].value.requestedBy;
    return ![Ae.$RECIPIENT, Ae.$3RD_PARTY].includes(n) || Boolean(e);
  },
  je = function (e, r) {
    var n = r.from[1].value.requestedBy;
    return Ae.$SENDER !== n || Boolean(e);
  },
  De = function (e) {
    return C.object().shape(
      $(
        {
          allowDescription: C.boolean(),
          chargeRecipient: C.boolean(),
          payOnDelivery: C.boolean(),
          requestedBy: C.string(),
          deliveryArea: C.string().required("Delivery area is required"),
          description: C.string(),
          items: C.string().required("Please enter at least one item"),
          recipient: C.object().shape({
            address: C.object()
              .shape({})
              .typeError("Address is required")
              .required("Address is required"),
            name: C.string().test("testname", "Name is required", je),
            phoneNumber: C.array()
              .phone()
              .test("testname", "Phone number is required", je),
          }),
          sender: C.object().shape({
            address: C.object()
              .shape({})
              .typeError("Address is required")
              .required("Address is required"),
            name: C.string().test("testname", "Name is required", qe),
            phoneNumber: C.array()
              .phone()
              .test("testname", "Phone number is required", qe),
            email: C.string().email("Email is invalid"),
          }),
        },
        e ? { rider: C.string().required("Please select rider") } : {}
      )
    );
  },
  $e = C.object().shape({
    username: C.string().required("Email address or phone number is required"),
    password: C.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    rememberMe: C.boolean().required(),
  }),
  ke = function (e) {
    var r = e.isAdmin,
      n = e.requiredSender;
    return C.object().shape(
      $(
        {
          allowDescription: C.boolean(),
          chargeRecipient: C.boolean(),
          payOnDelivery: C.boolean(),
          requestedBy: C.string(),
          deliveryArea: C.string().required("Delivery area is required"),
          description: C.string(),
          items: C.string().required("Please enter at least one item"),
          recipient: C.object().shape({
            address: C.object()
              .shape({})
              .typeError("Address is required")
              .required("Address is required"),
            email: C.string().email("Email is invalid"),
            name: C.string().required("Name is required"),
            phoneNumber: C.array().phone().required("Phone number is required"),
          }),
          sender: C.object().shape(
            $(
              $(
                {
                  address: C.object()
                    .shape({})
                    .typeError("Address is required")
                    .required("Address is required"),
                },
                n
                  ? {
                      name: C.string().required("Name is required"),
                      phoneNumber: C.array()
                        .phone()
                        .required("Phone number is required"),
                      email: C.string()
                        .email("Email is invalid")
                        .required("Email is required"),
                    }
                  : {
                      name: C.string(),
                      phoneNumber: C.array().phone(),
                      email: C.string().email("Email is invalid"),
                    }
              ),
              r ? { email: C.string().email("Email is invalid") } : {}
            )
          ),
        },
        r ? { rider: C.string().required("Please select rider") } : {}
      )
    );
  },
  Ie = C.object().shape({
    password: C.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: C.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .oneOf(
        [C.ref("password"), null],
        "Password and confirm password must match"
      ),
  }),
  Fe = C.object().shape({
    currentPassword: C.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    newPassword: C.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: C.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .oneOf(
        [C.ref("newPassword"), null],
        "New password and confirm password must match"
      ),
  }),
  _e = { boxShadow: "none", flexShrink: 0, mb: 4, mr: 4 },
  Me = function (e) {
    var n,
      t,
      a,
      c,
      s,
      C,
      N,
      x,
      O,
      R,
      T,
      A,
      q,
      D,
      $,
      I,
      F = e.buttonText,
      M = e.isLoading,
      L = e.onSubmit,
      V = e.pricelists,
      z = e.riders,
      B = e.schema,
      W = w({
        resolver: P(B || De(!0)),
        defaultValues: {
          allowDescription: !1,
          chargeRecipient: !1,
          requestedBy: "sender",
          items: "",
          payOnDelivery: !0,
          rider: "",
        },
      }),
      Y = W.register,
      U = W.handleSubmit,
      H = W.errors,
      J = W.control,
      G = W.watch,
      K = o(
        function (e) {
          return V.find(function (r) {
            return r._id === e;
          });
        },
        [V]
      ),
      Q = G("allowDescription"),
      X = G("payOnDelivery"),
      Z = G("deliveryArea"),
      ee = G("requestedBy"),
      re = K(Z);
    return r.createElement(
      i,
      { as: "form", spacing: 6, onSubmit: U(L) },
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "requestedBy" }, "Customer is the the?"),
        r.createElement(S, {
          control: J,
          name: "requestedBy",
          render: function (e) {
            var n = e.onChange,
              t = e.value;
            return r.createElement(
              f,
              { flexDirection: "row", flexWrap: "wrap", mb: -4 },
              r.createElement(
                l,
                {
                  onClick: function () {
                    return n(Ae.$SENDER);
                  },
                  sx: _e,
                },
                r.createElement(v, {
                  active: t === Ae.$SENDER,
                  title: "Sender",
                })
              ),
              r.createElement(
                l,
                {
                  onClick: function () {
                    return n(Ae.$RECIPIENT);
                  },
                  sx: _e,
                },
                r.createElement(v, {
                  active: t === Ae.$RECIPIENT,
                  title: "Receiver",
                })
              )
            );
          },
        }),
        r.createElement(p, {
          error:
            null == H || null === (n = H.requestedBy) || void 0 === n
              ? void 0
              : n.message,
        })
      ),
      r.createElement(S, {
        control: J,
        name: "deliveryArea",
        render: function (e) {
          var n,
            t = e.onChange,
            a = e.value;
          return r.createElement(Te, {
            error:
              null == H || null === (n = H.deliveryArea) || void 0 === n
                ? void 0
                : n.message,
            onChange: t,
            getPrice: K,
            pricelists: V,
            value: a,
          });
        },
      }),
      ee === Ae.$RECIPIENT &&
        r.createElement(
          r.Fragment,
          null,
          r.createElement(
            u,
            null,
            r.createElement(d, { htmlFor: "sender.name" }, "Sender Name"),
            r.createElement(m, {
              key: "sender.name",
              id: "sender.name",
              name: "sender.name",
              placeholder: "Type Name",
              ref: Y,
            }),
            r.createElement(p, {
              error:
                null == H ||
                null === (t = H.sender) ||
                void 0 === t ||
                null === (a = t.name) ||
                void 0 === a
                  ? void 0
                  : a.message,
            })
          ),
          r.createElement(
            u,
            null,
            r.createElement(
              d,
              { htmlFor: "sender.phoneNumber" },
              "Sender Number"
            ),
            r.createElement(S, {
              key: "control.sender.phoneNumber",
              control: J,
              name: "sender.phoneNumber",
              render: function (e) {
                var n = e.onChange,
                  t = e.value,
                  a = k(e, ["onChange", "value"]);
                return r.createElement(
                  m,
                  j(
                    {
                      id: "sender.phoneNumber",
                      type: "phone",
                      onChange: function () {
                        for (
                          var e = arguments.length, r = new Array(e), t = 0;
                          t < e;
                          t++
                        )
                          r[t] = arguments[t];
                        return n(r);
                      },
                    },
                    t ? { value: t[0] } : {},
                    a
                  )
                );
              },
            }),
            r.createElement(p, {
              error:
                null == H ||
                null === (c = H.sender) ||
                void 0 === c ||
                null === (s = c.phoneNumber) ||
                void 0 === s
                  ? void 0
                  : s.message,
            })
          )
        ),
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "sender.address" }, "Pick Up Address"),
        r.createElement(S, {
          control: J,
          name: "sender.address",
          render: function (e) {
            return r.createElement(
              m,
              j(
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
        r.createElement(p, {
          error:
            null == H ||
            null === (C = H.sender) ||
            void 0 === C ||
            null === (N = C.address) ||
            void 0 === N
              ? void 0
              : N.message,
        })
      ),
      r.createElement(
        u,
        null,
        r.createElement(
          d,
          { htmlFor: "recipient.address" },
          "Receiver Address"
        ),
        r.createElement(S, {
          control: J,
          name: "recipient.address",
          render: function (e) {
            return r.createElement(
              m,
              j(
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
        r.createElement(p, {
          error:
            null == H ||
            null === (x = H.recipient) ||
            void 0 === x ||
            null === (O = x.address) ||
            void 0 === O
              ? void 0
              : O.message,
        })
      ),
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "items" }, "Item(s)"),
        r.createElement(m, {
          key: "items",
          id: "items",
          name: "items",
          placeholder: "Separate with commas",
          ref: Y,
        }),
        r.createElement(p, {
          error:
            null == H || null === (R = H.items) || void 0 === R
              ? void 0
              : R.message,
        })
      ),
      r.createElement(
        u,
        null,
        r.createElement(S, {
          control: J,
          name: "allowDescription",
          render: function (e) {
            var n = e.onChange,
              t = e.value;
            return r.createElement(y, {
              active: t,
              onChange: n,
              title: "Allow Description",
            });
          },
        })
      ),
      Q
        ? r.createElement(
            u,
            null,
            r.createElement(d, { htmlFor: "description" }, "Description"),
            r.createElement(h, {
              id: "description",
              name: "description",
              placeholder: "Type Name",
              ref: Y,
              required: !0,
            }),
            r.createElement(p, {
              error:
                null == H || null === (T = H.description) || void 0 === T
                  ? void 0
                  : T.message,
            })
          )
        : null,
      ee === Ae.$SENDER &&
        r.createElement(
          r.Fragment,
          null,
          r.createElement(
            u,
            null,
            r.createElement(d, { htmlFor: "recipient.name" }, "Receiver Name"),
            r.createElement(m, {
              id: "recipient.name",
              name: "recipient.name",
              placeholder: "Type Name",
              ref: Y,
            }),
            r.createElement(p, {
              error:
                null == H ||
                null === (A = H.recipient) ||
                void 0 === A ||
                null === (q = A.name) ||
                void 0 === q
                  ? void 0
                  : q.message,
            })
          ),
          r.createElement(
            u,
            null,
            r.createElement(
              d,
              { htmlFor: "recipient.phoneNumber" },
              "Receiver Number"
            ),
            r.createElement(S, {
              control: J,
              name: "recipient.phoneNumber",
              render: function (e) {
                var n = e.onChange,
                  t = e.value,
                  a = k(e, ["onChange", "value"]);
                return r.createElement(
                  m,
                  j(
                    {
                      id: "recipient.phoneNumber",
                      type: "phone",
                      onChange: function () {
                        for (
                          var e = arguments.length, r = new Array(e), t = 0;
                          t < e;
                          t++
                        )
                          r[t] = arguments[t];
                        return n(r);
                      },
                    },
                    t ? { value: t[0] } : {},
                    a
                  )
                );
              },
            }),
            r.createElement(p, {
              error:
                null == H ||
                null === (D = H.recipient) ||
                void 0 === D ||
                null === ($ = D.phoneNumber) ||
                void 0 === $
                  ? void 0
                  : $.message,
            })
          )
        ),
      r.createElement(
        u,
        null,
        r.createElement(S, {
          control: J,
          name: "payOnDelivery",
          render: function (e) {
            var n = e.onChange,
              t = e.value;
            return r.createElement(E, {
              active: !t,
              onChange: function (e) {
                return n(!e);
              },
              title: "Delivery fee paid",
            });
          },
        })
      ),
      X &&
        r.createElement(
          u,
          null,
          r.createElement(S, {
            control: J,
            name: "chargeRecipient",
            render: function (e) {
              var n = e.onChange,
                t = e.value;
              return r.createElement(E, {
                active: t,
                onChange: n,
                title: "The Receiver will be paying cash on delivery",
              });
            },
          })
        ),
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "rider" }, "Assign Rider"),
        r.createElement(
          g,
          { id: "rider", name: "rider", placeholder: "Select option", ref: Y },
          r.createElement(
            "option",
            { value: "", disabled: !0 },
            "Select Option"
          ),
          null == z
            ? void 0
            : z.map(function (e) {
                return r.createElement(
                  "option",
                  { key: e.id, value: e.id },
                  e.name
                );
              })
        ),
        r.createElement(p, {
          error:
            null == H || null === (I = H.rider) || void 0 === I
              ? void 0
              : I.message,
        })
      ),
      r.createElement(_, { amount: null == re ? void 0 : re.amount }),
      r.createElement(
        b,
        { defaultRightIcon: !0, isLoading: M, onClick: U(L) },
        F
      )
    );
  };
Me.defaultProps = {
  buttonText: "Submit Request",
  isLoading: !1,
  onSubmit: function () {},
  pricelists: [],
  riders: [],
  schema: null,
};
var Le = function (e) {
  var n,
    t,
    a,
    l,
    c,
    s,
    f,
    C,
    N,
    x,
    O,
    R,
    T,
    A,
    q,
    D,
    $,
    I,
    F = e.buttonText,
    M = e.isLoading,
    L = e.onSubmit,
    V = e.pricelists,
    z = e.riders,
    B = e.schema,
    W = w({
      resolver: P(B || ke({ isAdmin: !0, requiredSender: !0 })),
      defaultValues: {
        allowDescription: !1,
        chargeRecipient: !1,
        customer: "sender",
        items: "",
        payOnDelivery: !0,
        rider: "",
      },
    }),
    Y = W.register,
    U = W.handleSubmit,
    H = W.errors,
    J = W.control,
    G = W.watch,
    K = o(
      function (e) {
        return V.find(function (r) {
          return r._id === e;
        });
      },
      [V]
    ),
    Q = G("allowDescription"),
    X = G("payOnDelivery"),
    Z = G("deliveryArea"),
    ee = K(Z);
  return r.createElement(
    i,
    { as: "form", spacing: 6, onSubmit: U(L) },
    r.createElement(
      u,
      null,
      r.createElement(d, { htmlFor: "sender.name" }, "Senders Name"),
      r.createElement(m, {
        id: "sender.name",
        name: "sender.name",
        placeholder: "Type name",
        ref: Y,
      }),
      r.createElement(p, {
        error:
          null == H ||
          null === (n = H.sender) ||
          void 0 === n ||
          null === (t = n.name) ||
          void 0 === t
            ? void 0
            : t.message,
      })
    ),
    r.createElement(
      u,
      null,
      r.createElement(d, { htmlFor: "sender.phoneNumber" }, "Senders number"),
      r.createElement(S, {
        control: J,
        name: "sender.phoneNumber",
        render: function (e) {
          var n = e.onChange,
            t = e.value,
            a = k(e, ["onChange", "value"]);
          return r.createElement(
            m,
            j(
              {
                id: "sender.phoneNumber",
                type: "phone",
                onChange: function () {
                  for (
                    var e = arguments.length, r = new Array(e), t = 0;
                    t < e;
                    t++
                  )
                    r[t] = arguments[t];
                  return n(r);
                },
              },
              t ? { value: t[0] } : {},
              a
            )
          );
        },
      }),
      r.createElement(p, {
        error:
          null == H ||
          null === (a = H.sender) ||
          void 0 === a ||
          null === (l = a.phoneNumber) ||
          void 0 === l
            ? void 0
            : l.message,
      })
    ),
    r.createElement(
      u,
      null,
      r.createElement(
        d,
        { htmlFor: "sender.email" },
        "Senders Email (Optional)"
      ),
      r.createElement(m, {
        id: "sender.email",
        name: "sender.email",
        placeholder: "Type Email Address",
        ref: Y,
      }),
      r.createElement(p, {
        error:
          null == H ||
          null === (c = H.sender) ||
          void 0 === c ||
          null === (s = c.email) ||
          void 0 === s
            ? void 0
            : s.message,
      })
    ),
    r.createElement(S, {
      control: J,
      name: "deliveryArea",
      render: function (e) {
        var n,
          t = e.onChange,
          a = e.value;
        return r.createElement(Te, {
          error:
            null == H || null === (n = H.deliveryArea) || void 0 === n
              ? void 0
              : n.message,
          getPrice: K,
          onChange: t,
          pricelists: V,
          value: a,
        });
      },
    }),
    r.createElement(
      u,
      null,
      r.createElement(d, { htmlFor: "sender.address" }, "Pick Up Address"),
      r.createElement(S, {
        control: J,
        name: "sender.address",
        render: function (e) {
          return r.createElement(
            m,
            j(
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
      r.createElement(p, {
        error:
          null == H ||
          null === (f = H.sender) ||
          void 0 === f ||
          null === (C = f.address) ||
          void 0 === C
            ? void 0
            : C.message,
      })
    ),
    r.createElement(
      u,
      null,
      r.createElement(d, { htmlFor: "recipient.address" }, "Receiver Address"),
      r.createElement(S, {
        control: J,
        name: "recipient.address",
        render: function (e) {
          return r.createElement(
            m,
            j(
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
      r.createElement(p, {
        error:
          null == H ||
          null === (N = H.recipient) ||
          void 0 === N ||
          null === (x = N.address) ||
          void 0 === x
            ? void 0
            : x.message,
      })
    ),
    r.createElement(
      u,
      null,
      r.createElement(d, { htmlFor: "items" }, "Item(s)"),
      r.createElement(m, {
        key: "items",
        id: "items",
        name: "items",
        placeholder: "Separate with commas",
        ref: Y,
      }),
      r.createElement(p, {
        error:
          null == H || null === (O = H.items) || void 0 === O
            ? void 0
            : O.message,
      })
    ),
    r.createElement(
      u,
      null,
      r.createElement(S, {
        control: J,
        name: "allowDescription",
        render: function (e) {
          var n = e.onChange,
            t = e.value;
          return r.createElement(y, {
            active: t,
            onChange: n,
            title: "Allow Description",
          });
        },
      })
    ),
    Q
      ? r.createElement(
          u,
          null,
          r.createElement(d, { htmlFor: "description" }, "Description"),
          r.createElement(h, {
            id: "description",
            name: "description",
            placeholder: "Type Name",
            ref: Y,
            required: !0,
          }),
          r.createElement(p, {
            error:
              null == H || null === (R = H.description) || void 0 === R
                ? void 0
                : R.message,
          })
        )
      : null,
    r.createElement(
      u,
      null,
      r.createElement(d, { htmlFor: "recipient.name" }, "Receiver Name"),
      r.createElement(m, {
        id: "recipient.name",
        name: "recipient.name",
        placeholder: "Type Name",
        ref: Y,
      }),
      r.createElement(p, {
        error:
          null == H ||
          null === (T = H.recipient) ||
          void 0 === T ||
          null === (A = T.name) ||
          void 0 === A
            ? void 0
            : A.message,
      })
    ),
    r.createElement(
      u,
      null,
      r.createElement(
        d,
        { htmlFor: "recipient.phoneNumber" },
        "Receiver Number"
      ),
      r.createElement(S, {
        control: J,
        name: "recipient.phoneNumber",
        render: function (e) {
          var n = e.onChange,
            t = e.value,
            a = k(e, ["onChange", "value"]);
          return r.createElement(
            m,
            j(
              {
                id: "recipient.phoneNumber",
                type: "phone",
                onChange: function () {
                  for (
                    var e = arguments.length, r = new Array(e), t = 0;
                    t < e;
                    t++
                  )
                    r[t] = arguments[t];
                  return n(r);
                },
              },
              t ? { value: t[0] } : {},
              a
            )
          );
        },
      }),
      r.createElement(p, {
        error:
          null == H ||
          null === (q = H.recipient) ||
          void 0 === q ||
          null === (D = q.phoneNumber) ||
          void 0 === D
            ? void 0
            : D.message,
      })
    ),
    r.createElement(_, { amount: null == ee ? void 0 : ee.amount }),
    r.createElement(
      u,
      null,
      r.createElement(S, {
        control: J,
        name: "payOnDelivery",
        render: function (e) {
          var n = e.onChange,
            t = e.value;
          return r.createElement(E, {
            active: !t,
            onChange: function (e) {
              return n(!e);
            },
            title: "Delivery fee paid",
          });
        },
      })
    ),
    X &&
      r.createElement(
        u,
        null,
        r.createElement(S, {
          control: J,
          name: "chargeRecipient",
          render: function (e) {
            var n = e.onChange,
              t = e.value;
            return r.createElement(E, {
              active: t,
              onChange: n,
              title: "The Receiver will be paying cash on delivery",
            });
          },
        })
      ),
    r.createElement(
      u,
      null,
      r.createElement(d, { htmlFor: "rider" }, "Assign Rider"),
      r.createElement(
        g,
        { id: "rider", name: "rider", placeholder: "Select option", ref: Y },
        r.createElement("option", { value: "", disabled: !0 }, "Select Option"),
        null == z
          ? void 0
          : z.map(function (e) {
              return r.createElement(
                "option",
                { key: e.id, value: e.id },
                e.name
              );
            })
      ),
      r.createElement(p, {
        error:
          null == H || null === ($ = H.rider) || void 0 === $
            ? void 0
            : $.message,
      })
    ),
    r.createElement(
      u,
      null,
      r.createElement(S, {
        control: J,
        name: "customer",
        render: function (e) {
          var n = e.onChange,
            t = e.value;
          return r.createElement(
            i,
            { spacing: 6 },
            r.createElement(v, {
              active: "sender" === t,
              onClick: function () {
                return n("sender");
              },
              subtitle: "Request was made by the sender",
              title: "Save sender’s details",
            }),
            r.createElement(v, {
              active: "recipient" === t,
              onClick: function () {
                return n("recipient");
              },
              subtitle: "Request was made by the receiver",
              title: "Save receiver’s details",
            })
          );
        },
      }),
      r.createElement(p, {
        error:
          null == H || null === (I = H.customer) || void 0 === I
            ? void 0
            : I.message,
      })
    ),
    r.createElement(b, { defaultRightIcon: !0, isLoading: M, onClick: U(L) }, F)
  );
};
Le.defaultProps = {
  buttonText: "Submit Request",
  isLoading: !1,
  onSubmit: function () {},
  pricelists: [],
  riders: [],
  schema: null,
};
var Ve = { boxShadow: "none", flexShrink: 0, mb: 4, mr: 4 },
  ze = function (e) {
    var n,
      t,
      a,
      c,
      s,
      g,
      C,
      N,
      x,
      O,
      R,
      T = e.buttonText,
      A = e.disablePayOnDelivery,
      q = e.isLoading,
      D = e.onSubmit,
      $ = e.pricelists,
      I = e.schema,
      F = w({
        resolver: P(I || De(!1)),
        defaultValues: {
          allowDescription: !1,
          chargeRecipient: !1,
          requestedBy: "sender",
          items: "",
          rider: "",
        },
      }),
      M = F.register,
      L = F.handleSubmit,
      V = F.errors,
      z = F.control,
      B = F.watch,
      W = o(
        function (e) {
          return $.find(function (r) {
            return r._id === e;
          });
        },
        [$]
      ),
      Y = B("allowDescription"),
      U = B("deliveryArea"),
      H = B("requestedBy"),
      J = W(U),
      G = function () {
        var e, n, t, a;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            u,
            null,
            r.createElement(d, { htmlFor: "sender.name" }, "Sender Name"),
            r.createElement(m, {
              key: "sender.name",
              id: "sender.name",
              name: "sender.name",
              placeholder: "Type Name",
              ref: M,
            }),
            r.createElement(p, {
              error:
                null == V ||
                null === (e = V.sender) ||
                void 0 === e ||
                null === (n = e.name) ||
                void 0 === n
                  ? void 0
                  : n.message,
            })
          ),
          r.createElement(
            u,
            null,
            r.createElement(
              d,
              { htmlFor: "sender.phoneNumber" },
              "Sender Number"
            ),
            r.createElement(S, {
              key: "control.sender.phoneNumber",
              control: z,
              name: "sender.phoneNumber",
              render: function (e) {
                var n = e.onChange,
                  t = e.value,
                  a = k(e, ["onChange", "value"]);
                return r.createElement(
                  m,
                  j(
                    {
                      id: "sender.phoneNumber",
                      type: "phone",
                      onChange: function () {
                        for (
                          var e = arguments.length, r = new Array(e), t = 0;
                          t < e;
                          t++
                        )
                          r[t] = arguments[t];
                        return n(r);
                      },
                    },
                    t ? { value: t[0] } : {},
                    a
                  )
                );
              },
            }),
            r.createElement(p, {
              error:
                null == V ||
                null === (t = V.sender) ||
                void 0 === t ||
                null === (a = t.phoneNumber) ||
                void 0 === a
                  ? void 0
                  : a.message,
            })
          )
        );
      };
    return r.createElement(
      i,
      { as: "form", spacing: 6, onSubmit: L(D) },
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "requestedBy" }, "You are the?"),
        r.createElement(S, {
          control: z,
          name: "requestedBy",
          render: function (e) {
            var n = e.onChange,
              t = e.value;
            return r.createElement(
              f,
              { flexDirection: "row", flexWrap: "wrap", mb: -4 },
              r.createElement(
                l,
                {
                  onClick: function () {
                    return n(Ae.$SENDER);
                  },
                  sx: Ve,
                },
                r.createElement(v, {
                  active: t === Ae.$SENDER,
                  title: "Sender",
                })
              ),
              r.createElement(
                l,
                {
                  onClick: function () {
                    return n(Ae.$RECIPIENT);
                  },
                  sx: Ve,
                },
                r.createElement(v, {
                  active: t === Ae.$RECIPIENT,
                  title: "Receiver",
                })
              ),
              r.createElement(
                l,
                {
                  onClick: function () {
                    return n(Ae.$3RD_PARTY);
                  },
                  sx: Ve,
                },
                r.createElement(v, {
                  active: t === Ae.$3RD_PARTY,
                  title: "3rd Party",
                })
              )
            );
          },
        }),
        r.createElement(p, {
          error:
            null == V || null === (n = V.requestedBy) || void 0 === n
              ? void 0
              : n.message,
        })
      ),
      r.createElement(S, {
        control: z,
        name: "deliveryArea",
        render: function (e) {
          var n,
            t = e.onChange,
            a = e.value;
          return r.createElement(Te, {
            error:
              null == V || null === (n = V.deliveryArea) || void 0 === n
                ? void 0
                : n.message,
            onChange: t,
            getPrice: W,
            pricelists: $,
            value: a,
          });
        },
      }),
      H === Ae.$3RD_PARTY ? G() : null,
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "sender.address" }, "Pick Up Address"),
        r.createElement(S, {
          control: z,
          name: "sender.address",
          render: function (e) {
            return r.createElement(
              m,
              j(
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
        r.createElement(p, {
          error:
            null == V ||
            null === (t = V.sender) ||
            void 0 === t ||
            null === (a = t.address) ||
            void 0 === a
              ? void 0
              : a.message,
        })
      ),
      r.createElement(
        u,
        null,
        r.createElement(
          d,
          { htmlFor: "recipient.address" },
          "Receiver Address"
        ),
        r.createElement(S, {
          control: z,
          name: "recipient.address",
          render: function (e) {
            return r.createElement(
              m,
              j(
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
        r.createElement(p, {
          error:
            null == V ||
            null === (c = V.recipient) ||
            void 0 === c ||
            null === (s = c.address) ||
            void 0 === s
              ? void 0
              : s.message,
        })
      ),
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "items" }, "Item(s)"),
        r.createElement(m, {
          key: "items",
          id: "items",
          name: "items",
          placeholder: "Separate with commas",
          ref: M,
        }),
        r.createElement(p, {
          error:
            null == V || null === (g = V.items) || void 0 === g
              ? void 0
              : g.message,
        })
      ),
      r.createElement(
        u,
        null,
        r.createElement(S, {
          control: z,
          name: "allowDescription",
          render: function (e) {
            var n = e.onChange,
              t = e.value;
            return r.createElement(y, {
              active: t,
              onChange: n,
              title: "Allow Description",
            });
          },
        })
      ),
      Y
        ? r.createElement(
            u,
            null,
            r.createElement(d, { htmlFor: "description" }, "Description"),
            r.createElement(h, {
              id: "description",
              name: "description",
              placeholder: "Type Name",
              ref: M,
              required: !0,
            }),
            r.createElement(p, {
              error:
                null == V || null === (C = V.description) || void 0 === C
                  ? void 0
                  : C.message,
            })
          )
        : null,
      H === Ae.$RECIPIENT
        ? G()
        : r.createElement(
            r.Fragment,
            null,
            r.createElement(
              u,
              null,
              r.createElement(
                d,
                { htmlFor: "recipient.name" },
                "Receiver Name"
              ),
              r.createElement(m, {
                key: "recipient.name",
                id: "recipient.name",
                name: "recipient.name",
                placeholder: "Type Name",
                ref: M,
              }),
              r.createElement(p, {
                error:
                  null == V ||
                  null === (N = V.recipient) ||
                  void 0 === N ||
                  null === (x = N.name) ||
                  void 0 === x
                    ? void 0
                    : x.message,
              })
            ),
            r.createElement(
              u,
              null,
              r.createElement(
                d,
                { htmlFor: "recipient.phoneNumber" },
                "Receiver Number"
              ),
              r.createElement(S, {
                control: z,
                key: "control.recipient.phoneNumber",
                name: "recipient.phoneNumber",
                render: function (e) {
                  var n = e.onChange,
                    t = e.value,
                    a = k(e, ["onChange", "value"]);
                  return r.createElement(
                    m,
                    j(
                      {
                        id: "recipient.phoneNumber",
                        type: "phone",
                        onChange: function () {
                          for (
                            var e = arguments.length, r = new Array(e), t = 0;
                            t < e;
                            t++
                          )
                            r[t] = arguments[t];
                          return n(r);
                        },
                      },
                      t ? { value: t[0] } : {},
                      a
                    )
                  );
                },
              }),
              r.createElement(p, {
                error:
                  null == V ||
                  null === (O = V.recipient) ||
                  void 0 === O ||
                  null === (R = O.phoneNumber) ||
                  void 0 === R
                    ? void 0
                    : R.message,
              })
            )
          ),
      r.createElement(
        u,
        null,
        r.createElement(S, {
          control: z,
          name: "chargeRecipient",
          render: function (e) {
            var n = e.onChange,
              t = e.value;
            return r.createElement(
              r.Fragment,
              null,
              A
                ? null
                : r.createElement(E, {
                    active: t,
                    onChange: n,
                    title: "Payment on delivery",
                  })
            );
          },
        })
      ),
      r.createElement(_, { amount: null == J ? void 0 : J.amount }),
      r.createElement(
        b,
        { defaultRightIcon: !0, isLoading: q, onClick: L(D) },
        T
      )
    );
  };
ze.defaultProps = {
  buttonText: "Submit Request",
  disablePayOnDelivery: !1,
  isLoading: !1,
  onSubmit: function () {},
  pricelists: [],
  schema: null,
};
var Be = { boxShadow: "none", flexShrink: 0, mb: 4, mr: 4 },
  We = function (e) {
    var n,
      t,
      a,
      c,
      s,
      E,
      g,
      C,
      N,
      x,
      O,
      R,
      T,
      A,
      q,
      D,
      $,
      I = e.buttonText,
      F = e.isLoading,
      M = e.onSubmit,
      L = e.pricelists,
      V = e.schema,
      z = w({
        resolver: P(V || ke({ isAdmin: !1, requiredSender: !0 })),
        defaultValues: {
          allowDescription: !1,
          requestedBy: "sender",
          items: "",
        },
      }),
      B = z.register,
      W = z.handleSubmit,
      Y = z.errors,
      U = z.control,
      H = z.watch,
      J = o(
        function (e) {
          return L.find(function (r) {
            return r._id === e;
          });
        },
        [L]
      ),
      G = H("allowDescription"),
      K = H("deliveryArea"),
      Q = J(K);
    return r.createElement(
      i,
      { as: "form", spacing: 6, onSubmit: W(M) },
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "requestedBy" }, "You are the?"),
        r.createElement(S, {
          control: U,
          name: "requestedBy",
          render: function (e) {
            var n = e.onChange,
              t = e.value;
            return r.createElement(
              f,
              { flexDirection: "row", flexWrap: "wrap", mb: -4 },
              r.createElement(
                l,
                {
                  onClick: function () {
                    return n(Ae.$SENDER);
                  },
                  sx: Be,
                },
                r.createElement(v, {
                  active: t === Ae.$SENDER,
                  title: "Sender",
                })
              ),
              r.createElement(
                l,
                {
                  onClick: function () {
                    return n(Ae.$RECIPIENT);
                  },
                  sx: Be,
                },
                r.createElement(v, {
                  active: t === Ae.$RECIPIENT,
                  title: "Receiver",
                })
              ),
              r.createElement(
                l,
                {
                  onClick: function () {
                    return n(Ae.$3RD_PARTY);
                  },
                  sx: Be,
                },
                r.createElement(v, {
                  active: t === Ae.$3RD_PARTY,
                  title: "3rd Party",
                })
              )
            );
          },
        }),
        r.createElement(p, {
          error:
            null == Y || null === (n = Y.requestedBy) || void 0 === n
              ? void 0
              : n.message,
        })
      ),
      r.createElement(S, {
        control: U,
        name: "deliveryArea",
        render: function (e) {
          var n,
            t = e.onChange,
            a = e.value;
          return r.createElement(Te, {
            error:
              null == Y || null === (n = Y.deliveryArea) || void 0 === n
                ? void 0
                : n.message,
            getPrice: J,
            onChange: t,
            pricelists: L,
            value: a,
          });
        },
      }),
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "sender.name" }, "Senders Name"),
        r.createElement(m, {
          id: "sender.name",
          name: "sender.name",
          placeholder: "Type name",
          ref: B,
        }),
        r.createElement(p, {
          error:
            null == Y ||
            null === (t = Y.sender) ||
            void 0 === t ||
            null === (a = t.name) ||
            void 0 === a
              ? void 0
              : a.message,
        })
      ),
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "sender.phoneNumber" }, "Senders number"),
        r.createElement(S, {
          control: U,
          name: "sender.phoneNumber",
          render: function (e) {
            var n = e.onChange,
              t = e.value,
              a = k(e, ["onChange", "value"]);
            return r.createElement(
              m,
              j(
                {
                  id: "sender.phoneNumber",
                  type: "phone",
                  onChange: function () {
                    for (
                      var e = arguments.length, r = new Array(e), t = 0;
                      t < e;
                      t++
                    )
                      r[t] = arguments[t];
                    return n(r);
                  },
                },
                t ? { value: t[0] } : {},
                a
              )
            );
          },
        }),
        r.createElement(p, {
          error:
            null == Y ||
            null === (c = Y.sender) ||
            void 0 === c ||
            null === (s = c.phoneNumber) ||
            void 0 === s
              ? void 0
              : s.message,
        })
      ),
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "sender.email" }, "Senders Email"),
        r.createElement(m, {
          id: "sender.email",
          name: "sender.email",
          placeholder: "Type Email Address",
          ref: B,
        }),
        r.createElement(p, {
          error:
            null == Y ||
            null === (E = Y.sender) ||
            void 0 === E ||
            null === (g = E.email) ||
            void 0 === g
              ? void 0
              : g.message,
        })
      ),
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "sender.address" }, "Pick Up Address"),
        r.createElement(S, {
          control: U,
          name: "sender.address",
          render: function (e) {
            return r.createElement(
              m,
              j(
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
        r.createElement(p, {
          error:
            null == Y ||
            null === (C = Y.sender) ||
            void 0 === C ||
            null === (N = C.address) ||
            void 0 === N
              ? void 0
              : N.message,
        })
      ),
      r.createElement(
        u,
        null,
        r.createElement(
          d,
          { htmlFor: "recipient.address" },
          "Receiver Address"
        ),
        r.createElement(S, {
          control: U,
          name: "recipient.address",
          render: function (e) {
            return r.createElement(
              m,
              j(
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
        r.createElement(p, {
          error:
            null == Y ||
            null === (x = Y.recipient) ||
            void 0 === x ||
            null === (O = x.address) ||
            void 0 === O
              ? void 0
              : O.message,
        })
      ),
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "items" }, "Item(s)"),
        r.createElement(m, {
          key: "items",
          id: "items",
          name: "items",
          placeholder: "Separate with commas",
          ref: B,
        }),
        r.createElement(p, {
          error:
            null == Y || null === (R = Y.items) || void 0 === R
              ? void 0
              : R.message,
        })
      ),
      r.createElement(
        u,
        null,
        r.createElement(S, {
          control: U,
          name: "allowDescription",
          render: function (e) {
            var n = e.onChange,
              t = e.value;
            return r.createElement(y, {
              active: t,
              onChange: n,
              title: "Allow Description",
            });
          },
        })
      ),
      G
        ? r.createElement(
            u,
            null,
            r.createElement(d, { htmlFor: "description" }, "Description"),
            r.createElement(h, {
              id: "description",
              name: "description",
              placeholder: "Type Name",
              ref: B,
              required: !0,
            }),
            r.createElement(p, {
              error:
                null == Y || null === (T = Y.description) || void 0 === T
                  ? void 0
                  : T.message,
            })
          )
        : null,
      r.createElement(
        u,
        null,
        r.createElement(d, { htmlFor: "recipient.name" }, "Receiver Name"),
        r.createElement(m, {
          id: "recipient.name",
          name: "recipient.name",
          placeholder: "Type Name",
          ref: B,
        }),
        r.createElement(p, {
          error:
            null == Y ||
            null === (A = Y.recipient) ||
            void 0 === A ||
            null === (q = A.name) ||
            void 0 === q
              ? void 0
              : q.message,
        })
      ),
      r.createElement(
        u,
        null,
        r.createElement(
          d,
          { htmlFor: "recipient.phoneNumber" },
          "Receiver Number"
        ),
        r.createElement(S, {
          control: U,
          name: "recipient.phoneNumber",
          render: function (e) {
            var n = e.onChange,
              t = e.value,
              a = k(e, ["onChange", "value"]);
            return r.createElement(
              m,
              j(
                {
                  id: "recipient.phoneNumber",
                  type: "phone",
                  onChange: function () {
                    for (
                      var e = arguments.length, r = new Array(e), t = 0;
                      t < e;
                      t++
                    )
                      r[t] = arguments[t];
                    return n(r);
                  },
                },
                t ? { value: t[0] } : {},
                a
              )
            );
          },
        }),
        r.createElement(p, {
          error:
            null == Y ||
            null === (D = Y.recipient) ||
            void 0 === D ||
            null === ($ = D.phoneNumber) ||
            void 0 === $
              ? void 0
              : $.message,
        })
      ),
      r.createElement(_, { amount: null == Q ? void 0 : Q.amount }),
      r.createElement(
        b,
        { defaultRightIcon: !0, isLoading: F, onClick: W(M) },
        I
      )
    );
  };
We.defaultProps = {
  buttonText: "Submit Request",
  extras: null,
  isLoading: !1,
  onSubmit: function () {},
  pricelists: [],
  schema: null,
  type: "client",
};
var Ye = function (e) {
  var n,
    t,
    a = e.buttonText,
    o = e.extras,
    l = e.isLoading,
    c = e.onSubmit,
    s = e.schema,
    f = w({ resolver: P(s || $e), defaultValues: { rememberMe: !1 } }),
    v = f.register,
    h = f.handleSubmit,
    E = f.errors,
    g = f.control;
  return r.createElement(
    i,
    { as: "form", spacing: 6, onSubmit: h(c) },
    r.createElement(
      u,
      null,
      r.createElement(
        d,
        { htmlFor: "username" },
        "Email Address or Phone Number"
      ),
      r.createElement(m, {
        id: "username",
        name: "username",
        placeholder: "Type your email address or Phone Number",
        ref: v,
      }),
      r.createElement(p, {
        error:
          null == E || null === (n = E.username) || void 0 === n
            ? void 0
            : n.message,
      })
    ),
    r.createElement(
      u,
      null,
      r.createElement(d, { htmlFor: "password" }, "Password"),
      r.createElement(m, {
        id: "password",
        placeholder: "Type your password",
        type: "password",
        name: "password",
        ref: v,
      }),
      r.createElement(p, {
        error:
          null == E || null === (t = E.password) || void 0 === t
            ? void 0
            : t.message,
      })
    ),
    r.createElement(
      u,
      null,
      r.createElement(S, {
        control: g,
        name: "rememberMe",
        render: function (e) {
          var n = e.onChange,
            t = e.value;
          return r.createElement(y, {
            active: t,
            onChange: n,
            title: "Keep me logged in",
          });
        },
      })
    ),
    r.createElement(
      b,
      { defaultRightIcon: !0, isLoading: l, onClick: h(c) },
      a
    ),
    o
  );
};
Ye.defaultProps = {
  buttonText: "Login",
  extras: null,
  isLoading: !1,
  onSubmit: function () {},
  schema: null,
};
var Ue = function (e) {
  var n,
    t,
    a,
    o = e.buttonText,
    l = e.extras,
    c = e.isLoading,
    s = e.onSubmit,
    f = e.schema,
    v = w({ resolver: P(f || Fe), defaultValues: { rememberMe: !1 } }),
    y = v.register,
    h = v.handleSubmit,
    E = v.errors;
  return r.createElement(
    i,
    { as: "form", spacing: 6, onSubmit: h(s) },
    r.createElement(
      u,
      null,
      r.createElement(d, { htmlFor: "currentPassword" }, "Current Password"),
      r.createElement(m, {
        id: "currentPassword",
        placeholder: "Type your password",
        type: "password",
        name: "currentPassword",
        ref: y,
      }),
      r.createElement(p, {
        error:
          null == E || null === (n = E.currentPassword) || void 0 === n
            ? void 0
            : n.message,
      })
    ),
    r.createElement(
      u,
      null,
      r.createElement(d, { htmlFor: "newPassword" }, "New Password"),
      r.createElement(m, {
        id: "newPassword",
        placeholder: "Type your password",
        type: "password",
        name: "newPassword",
        ref: y,
      }),
      r.createElement(p, {
        error:
          null == E || null === (t = E.newPassword) || void 0 === t
            ? void 0
            : t.message,
      })
    ),
    r.createElement(
      u,
      null,
      r.createElement(
        d,
        { htmlFor: "confirmPassword" },
        "Re-enter New Password"
      ),
      r.createElement(m, {
        id: "confirmPassword",
        placeholder: "Type your password",
        type: "password",
        name: "confirmPassword",
        ref: y,
      }),
      r.createElement(p, {
        error:
          null == E || null === (a = E.confirmPassword) || void 0 === a
            ? void 0
            : a.message,
      })
    ),
    r.createElement(
      b,
      { defaultRightIcon: !0, isLoading: c, onClick: h(s) },
      o
    ),
    l
  );
};
Ue.defaultProps = {
  buttonText: "Update Password",
  extras: null,
  isLoading: !1,
  onSubmit: function () {},
  schema: null,
};
var He = function (e) {
  var n,
    t,
    a = e.buttonText,
    o = e.extras,
    l = e.isLoading,
    c = e.onSubmit,
    s = e.schema,
    f = w({ resolver: P(s || Ie), defaultValues: { rememberMe: !1 } }),
    v = f.register,
    y = f.handleSubmit,
    h = f.errors;
  return r.createElement(
    i,
    { as: "form", spacing: 6, onSubmit: y(c) },
    r.createElement(
      u,
      null,
      r.createElement(d, { htmlFor: "password" }, "Password"),
      r.createElement(m, {
        id: "password",
        placeholder: "Type your password",
        type: "password",
        name: "password",
        ref: v,
      }),
      r.createElement(p, {
        error:
          null == h || null === (n = h.password) || void 0 === n
            ? void 0
            : n.message,
      })
    ),
    r.createElement(
      u,
      null,
      r.createElement(d, { htmlFor: "confirmPassword" }, "Re-enter Password"),
      r.createElement(m, {
        id: "confirmPassword",
        placeholder: "Type your password",
        type: "password",
        name: "confirmPassword",
        ref: v,
      }),
      r.createElement(p, {
        error:
          null == h || null === (t = h.confirmPassword) || void 0 === t
            ? void 0
            : t.message,
      })
    ),
    r.createElement(
      b,
      { defaultRightIcon: !0, isLoading: l, onClick: y(c) },
      a
    ),
    o
  );
};
He.defaultProps = {
  buttonText: "Reset Password",
  extras: null,
  isLoading: !1,
  onSubmit: function () {},
  schema: null,
};
export {
  Me as AdminCustomerOrderForm,
  Le as AdminOrderForm,
  Ue as ChangePasswordForm,
  ze as CustomerOrderForm,
  _ as DeliveryFee,
  We as GuestOrderForm,
  Ye as LoginForm,
  He as PasswordForm,
  Te as PricePicker,
  Fe as confirmPasswordSchema,
  De as customerOrderSchema,
  $e as loginSchema,
  ke as orderSchema,
  Ie as passwordSchema,
};
