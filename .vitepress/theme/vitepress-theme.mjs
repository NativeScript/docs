import { inBrowser as rr, useData as Pe, useRoute as Kt, useRouter as Hi } from "vitepress";
import { pushScopeId as ba, popScopeId as wa, defineComponent as L, nextTick as Cr, openBlock as g, createBlock as le, createElementBlock as b, normalizeClass as ne, renderSlot as Me, normalizeProps as xa, guardReactiveProps as Oa, withScopeId as ka, resolveComponent as ge, normalizeStyle as Un, withKeys as Sa, createElementVNode as h, Fragment as R, createCommentVNode as W, withCtx as $e, createVNode as H, ref as K, createApp as $a, h as Pa, mergeProps as Ea, toDisplayString as z, isRef as zi, unref as P, getCurrentScope as Ca, onScopeDispose as ja, getCurrentInstance as Vi, onMounted as xt, computed as U, watch as Re, watchEffect as jr, shallowRef as Ia, withModifiers as Be, inject as gt, withDirectives as yt, renderList as G, vModelSelect as Ta, resolveDynamicComponent as Jt, vShow as vn, createStaticVNode as Fi, Transition as qn, createTextVNode as Ne, resolveDirective as Aa } from "vue";
import * as Ve from "vue";
function Fe(e) {
  return e.split("-")[0];
}
function vt(e) {
  return e.split("-")[1];
}
function Gt(e) {
  return ["top", "bottom"].includes(Fe(e)) ? "x" : "y";
}
function Ir(e) {
  return e === "y" ? "height" : "width";
}
function Ur(e) {
  let {
    reference: t,
    floating: n,
    placement: r
  } = e;
  const o = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2;
  let s;
  switch (Fe(r)) {
    case "top":
      s = {
        x: o,
        y: t.y - n.height
      };
      break;
    case "bottom":
      s = {
        x: o,
        y: t.y + t.height
      };
      break;
    case "right":
      s = {
        x: t.x + t.width,
        y: i
      };
      break;
    case "left":
      s = {
        x: t.x - n.width,
        y: i
      };
      break;
    default:
      s = {
        x: t.x,
        y: t.y
      };
  }
  const a = Gt(r), l = Ir(a);
  switch (vt(r)) {
    case "start":
      s[a] = s[a] - (t[l] / 2 - n[l] / 2);
      break;
    case "end":
      s[a] = s[a] + (t[l] / 2 - n[l] / 2);
      break;
  }
  return s;
}
const Na = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n;
  if (process.env.NODE_ENV !== "production" && (s == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), i.filter((d) => {
    let {
      name: v
    } = d;
    return v === "autoPlacement" || v === "flip";
  }).length > 1))
    throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`", "middleware detected. This will lead to an infinite loop. Ensure only", "one of either has been passed to the `middleware` array."].join(" "));
  let a = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: l,
    y: u
  } = Ur({
    ...a,
    placement: r
  }), c = r, p = {}, f = 0;
  for (let d = 0; d < i.length; d++) {
    if (process.env.NODE_ENV !== "production" && (f++, f > 100))
      throw new Error(["Floating UI: The middleware lifecycle appears to be", "running in an infinite loop. This is usually caused by a `reset`", "continually being returned without a break condition."].join(" "));
    const {
      name: v,
      fn: _
    } = i[d], {
      x: w,
      y,
      data: S,
      reset: k
    } = await _({
      x: l,
      y: u,
      initialPlacement: r,
      placement: c,
      strategy: o,
      middlewareData: p,
      rects: a,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (l = w != null ? w : l, u = y != null ? y : u, p = {
      ...p,
      [v]: S != null ? S : {}
    }, k) {
      typeof k == "object" && (k.placement && (c = k.placement), k.rects && (a = k.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : k.rects), {
        x: l,
        y: u
      } = Ur({
        ...a,
        placement: c
      })), d = -1;
      continue;
    }
  }
  return {
    x: l,
    y: u,
    placement: c,
    strategy: o,
    middlewareData: p
  };
};
function Da(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ui(e) {
  return typeof e != "number" ? Da(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function or(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function An(e, t) {
  t === void 0 && (t = {});
  const {
    x: n,
    y: r,
    platform: o,
    rects: i,
    elements: s,
    strategy: a
  } = e, {
    boundary: l = "clippingParents",
    rootBoundary: u = "viewport",
    elementContext: c = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = t, d = Ui(f), _ = s[p ? c === "floating" ? "reference" : "floating" : c], w = await o.getClippingClientRect({
    element: await o.isElement(_) ? _ : _.contextElement || await o.getDocumentElement({
      element: s.floating
    }),
    boundary: l,
    rootBoundary: u
  }), y = or(await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: c === "floating" ? {
      ...i.floating,
      x: n,
      y: r
    } : i.reference,
    offsetParent: await o.getOffsetParent({
      element: s.floating
    }),
    strategy: a
  }));
  return {
    top: w.top - y.top + d.top,
    bottom: y.bottom - w.bottom + d.bottom,
    left: w.left - y.left + d.left,
    right: y.right - w.right + d.right
  };
}
const La = Math.min, lt = Math.max;
function ir(e, t, n) {
  return lt(e, La(t, n));
}
const Ma = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: r = 0
    } = e != null ? e : {}, {
      x: o,
      y: i,
      placement: s,
      rects: a,
      platform: l
    } = t;
    if (n == null)
      return process.env.NODE_ENV !== "production" && console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const u = Ui(r), c = {
      x: o,
      y: i
    }, p = Fe(s), f = Gt(p), d = Ir(f), v = await l.getDimensions({
      element: n
    }), _ = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", y = a.reference[d] + a.reference[f] - c[f] - a.floating[d], S = c[f] - a.reference[f], k = await l.getOffsetParent({
      element: n
    }), O = k ? f === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, $ = y / 2 - S / 2, D = u[_], E = O - v[d] - u[w], A = O / 2 - v[d] / 2 + $, C = ir(D, A, E);
    return {
      data: {
        [f]: C,
        centerOffset: A - C
      }
    };
  }
}), Ra = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function _n(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ra[t]);
}
function qi(e, t) {
  const n = vt(e) === "start", r = Gt(e), o = Ir(r);
  let i = r === "x" ? n ? "right" : "left" : n ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = _n(i)), {
    main: i,
    cross: _n(i)
  };
}
const Ba = {
  start: "end",
  end: "start"
};
function sr(e) {
  return e.replace(/start|end/g, (t) => Ba[t]);
}
const Ha = ["top", "right", "bottom", "left"], za = /* @__PURE__ */ Ha.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
function Va(e, t, n) {
  return (e ? [...n.filter((o) => vt(o) === e), ...n.filter((o) => vt(o) !== e)] : n.filter((o) => Fe(o) === o)).filter((o) => e ? vt(o) === e || (t ? sr(o) !== o : !1) : !0);
}
const Fa = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, r, o, i, s, a;
      const {
        x: l,
        y: u,
        rects: c,
        middlewareData: p,
        placement: f
      } = t, {
        alignment: d = null,
        allowedPlacements: v = za,
        autoAlignment: _ = !0,
        ...w
      } = e;
      if ((n = p.autoPlacement) != null && n.skip)
        return {};
      const y = Va(d, _, v), S = await An(t, w), k = (r = (o = p.autoPlacement) == null ? void 0 : o.index) != null ? r : 0, O = y[k], {
        main: $,
        cross: D
      } = qi(O, c);
      if (f !== O)
        return {
          x: l,
          y: u,
          reset: {
            placement: y[0]
          }
        };
      const E = [S[Fe(O)], S[$], S[D]], A = [...(i = (s = p.autoPlacement) == null ? void 0 : s.overflows) != null ? i : [], {
        placement: O,
        overflows: E
      }], C = y[k + 1];
      if (C)
        return {
          data: {
            index: k + 1,
            overflows: A
          },
          reset: {
            placement: C
          }
        };
      const Z = A.slice().sort((ie, J) => ie.overflows[0] - J.overflows[0]), te = (a = Z.find((ie) => {
        let {
          overflows: J
        } = ie;
        return J.every((de) => de <= 0);
      })) == null ? void 0 : a.placement;
      return {
        data: {
          skip: !0
        },
        reset: {
          placement: te != null ? te : Z[0].placement
        }
      };
    }
  };
};
function Ua(e) {
  const t = _n(e);
  return [sr(e), t, sr(t)];
}
const qa = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a
      } = t;
      if ((n = i.flip) != null && n.skip)
        return {};
      const {
        mainAxis: l = !0,
        crossAxis: u = !0,
        fallbackPlacements: c,
        fallbackStrategy: p = "bestFit",
        flipAlignment: f = !0,
        ...d
      } = e, v = Fe(o), w = c || (v === a || !f ? [_n(a)] : Ua(a)), y = [a, ...w], S = await An(t, d), k = [];
      let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (l && k.push(S[v]), u) {
        const {
          main: A,
          cross: C
        } = qi(o, s);
        k.push(S[A], S[C]);
      }
      if (O = [...O, {
        placement: o,
        overflows: k
      }], !k.every((A) => A <= 0)) {
        var $, D;
        const A = (($ = (D = i.flip) == null ? void 0 : D.index) != null ? $ : 0) + 1, C = y[A];
        if (C)
          return {
            data: {
              index: A,
              overflows: O
            },
            reset: {
              placement: C
            }
          };
        let Z = "bottom";
        switch (p) {
          case "bestFit": {
            var E;
            const te = (E = O.slice().sort((ie, J) => ie.overflows.filter((de) => de > 0).reduce((de, ye) => de + ye, 0) - J.overflows.filter((de) => de > 0).reduce((de, ye) => de + ye, 0))[0]) == null ? void 0 : E.placement;
            te && (Z = te);
            break;
          }
          case "initialPlacement":
            Z = a;
            break;
        }
        return {
          data: {
            skip: !0
          },
          reset: {
            placement: Z
          }
        };
      }
      return {};
    }
  };
};
function Wa(e) {
  let {
    placement: t,
    rects: n,
    value: r
  } = e;
  const o = Fe(t), i = ["left", "top"].includes(o) ? -1 : 1, s = typeof r == "function" ? r({
    ...n,
    placement: t
  }) : r, {
    mainAxis: a,
    crossAxis: l
  } = typeof s == "number" ? {
    mainAxis: s,
    crossAxis: 0
  } : {
    mainAxis: 0,
    crossAxis: 0,
    ...s
  };
  return Gt(o) === "x" ? {
    x: l,
    y: a * i
  } : {
    x: a * i,
    y: l
  };
}
const Ka = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i
      } = t, s = Wa({
        placement: o,
        rects: i,
        value: e
      });
      return {
        x: n + s.x,
        y: r + s.y,
        data: s
      };
    }
  };
};
function Ja(e) {
  return e === "x" ? "y" : "x";
}
const Ga = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (w) => {
            let {
              x: y,
              y: S
            } = w;
            return {
              x: y,
              y: S
            };
          }
        },
        ...l
      } = e, u = {
        x: n,
        y: r
      }, c = await An(t, l), p = Gt(Fe(o)), f = Ja(p);
      let d = u[p], v = u[f];
      if (i) {
        const w = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", S = d + c[w], k = d - c[y];
        d = ir(S, d, k);
      }
      if (s) {
        const w = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", S = v + c[w], k = v - c[y];
        v = ir(S, v, k);
      }
      const _ = a.fn({
        ...t,
        [p]: d,
        [f]: v
      });
      return {
        ..._,
        data: {
          x: _.x - n,
          y: _.y - r
        }
      };
    }
  };
}, Qa = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: r,
        rects: o,
        middlewareData: i
      } = t, {
        apply: s,
        ...a
      } = e;
      if ((n = i.size) != null && n.skip)
        return {};
      const l = await An(t, a), u = Fe(r), c = vt(r) === "end";
      let p, f;
      u === "top" || u === "bottom" ? (p = u, f = c ? "left" : "right") : (f = u, p = c ? "top" : "bottom");
      const d = lt(l.left, 0), v = lt(l.right, 0), _ = lt(l.top, 0), w = lt(l.bottom, 0), y = {
        height: o.floating.height - (["left", "right"].includes(r) ? 2 * (_ !== 0 || w !== 0 ? _ + w : lt(l.top, l.bottom)) : l[p]),
        width: o.floating.width - (["top", "bottom"].includes(r) ? 2 * (d !== 0 || v !== 0 ? d + v : lt(l.left, l.right)) : l[f])
      };
      return s == null || s({
        ...y,
        ...o
      }), {
        data: {
          skip: !0
        },
        reset: {
          rects: !0
        }
      };
    }
  };
};
function Tr(e) {
  return (e == null ? void 0 : e.toString()) === "[object Window]";
}
function Xe(e) {
  if (e == null)
    return window;
  if (!Tr(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Nn(e) {
  return Xe(e).getComputedStyle(e);
}
function He(e) {
  return Tr(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function ze(e) {
  return e instanceof Xe(e).HTMLElement;
}
function gn(e) {
  return e instanceof Xe(e).Element;
}
function Ya(e) {
  return e instanceof Xe(e).Node;
}
function Wi(e) {
  const t = Xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Dn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r
  } = Nn(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function Za(e) {
  return ["table", "td", "th"].includes(He(e));
}
function Ki(e) {
  const t = navigator.userAgent.toLowerCase().includes("firefox"), n = Nn(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
const qr = Math.min, Dt = Math.max, yn = Math.round;
function bt(e, t) {
  t === void 0 && (t = !1);
  const n = e.getBoundingClientRect();
  let r = 1, o = 1;
  return t && ze(e) && (r = e.offsetWidth > 0 && yn(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && yn(n.height) / e.offsetHeight || 1), {
    width: n.width / r,
    height: n.height / o,
    top: n.top / o,
    right: n.right / r,
    bottom: n.bottom / o,
    left: n.left / r,
    x: n.left / r,
    y: n.top / o
  };
}
function et(e) {
  return ((Ya(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ln(e) {
  return Tr(e) ? {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  } : {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ji(e) {
  return bt(et(e)).left + Ln(e).scrollLeft;
}
function Xa(e) {
  const t = bt(e);
  return yn(t.width) !== e.offsetWidth || yn(t.height) !== e.offsetHeight;
}
function el(e, t, n) {
  const r = ze(t), o = et(t), i = bt(e, r && Xa(t));
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((He(t) !== "body" || Dn(o)) && (s = Ln(t)), ze(t)) {
      const l = bt(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      o && (a.x = Ji(o));
  return {
    x: i.left + s.scrollLeft - a.x,
    y: i.top + s.scrollTop - a.y,
    width: i.width,
    height: i.height
  };
}
function Mn(e) {
  return He(e) === "html" ? e : e.assignedSlot || e.parentNode || (Wi(e) ? e.host : null) || et(e);
}
function Wr(e) {
  return !ze(e) || getComputedStyle(e).position === "fixed" ? null : e.offsetParent;
}
function tl(e) {
  let t = Mn(e);
  for (; ze(t) && !["html", "body"].includes(He(t)); ) {
    if (Ki(t))
      return t;
    t = t.parentNode;
  }
  return null;
}
function ar(e) {
  const t = Xe(e);
  let n = Wr(e);
  for (; n && Za(n) && getComputedStyle(n).position === "static"; )
    n = Wr(n);
  return n && (He(n) === "html" || He(n) === "body" && getComputedStyle(n).position === "static" && !Ki(n)) ? t : n || tl(e) || t;
}
function Kr(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function nl(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = ze(n), i = et(n);
  if (n === i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = {
    x: 0,
    y: 0
  };
  if ((o || !o && r !== "fixed") && ((He(n) !== "body" || Dn(i)) && (s = Ln(n)), ze(n))) {
    const l = bt(n, !0);
    a.x = l.x + n.clientLeft, a.y = l.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - s.scrollLeft + a.x,
    y: t.y - s.scrollTop + a.y
  };
}
function rl(e) {
  const t = Xe(e), n = et(e), r = t.visualViewport;
  let o = n.clientWidth, i = n.clientHeight, s = 0, a = 0;
  return r && (o = r.width, i = r.height, Math.abs(t.innerWidth / r.scale - r.width) < 0.01 && (s = r.offsetLeft, a = r.offsetTop)), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function ol(e) {
  var t;
  const n = et(e), r = Ln(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Dt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Dt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let a = -r.scrollLeft + Ji(e);
  const l = -r.scrollTop;
  return Nn(o || n).direction === "rtl" && (a += Dt(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Gi(e) {
  return ["html", "body", "#document"].includes(He(e)) ? e.ownerDocument.body : ze(e) && Dn(e) ? e : Gi(Mn(e));
}
function bn(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Gi(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Xe(r), s = o ? [i].concat(i.visualViewport || [], Dn(r) ? r : []) : r, a = t.concat(s);
  return o ? a : a.concat(bn(Mn(s)));
}
function il(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Wi(n)) {
    let r = t;
    do {
      if (r && e === r)
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function sl(e) {
  const t = bt(e), n = t.top + e.clientTop, r = t.left + e.clientLeft;
  return {
    top: n,
    left: r,
    x: r,
    y: n,
    right: r + e.clientWidth,
    bottom: n + e.clientHeight,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Jr(e, t) {
  return t === "viewport" ? or(rl(e)) : gn(t) ? sl(t) : or(ol(et(e)));
}
function al(e) {
  const t = bn(Mn(e)), r = ["absolute", "fixed"].includes(Nn(e).position) && ze(e) ? ar(e) : e;
  return gn(r) ? t.filter((o) => gn(o) && il(o, r) && He(o) !== "body") : [];
}
function ll(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r
  } = e;
  const i = [...n === "clippingParents" ? al(t) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const c = Jr(t, u);
    return l.top = Dt(c.top, l.top), l.right = qr(c.right, l.right), l.bottom = qr(c.bottom, l.bottom), l.left = Dt(c.left, l.left), l;
  }, Jr(t, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
const cl = {
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: el(t, ar(n), r),
      floating: {
        ...Kr(n),
        x: 0,
        y: 0
      }
    };
  },
  convertOffsetParentRelativeRectToViewportRelativeRect: (e) => nl(e),
  getOffsetParent: (e) => {
    let {
      element: t
    } = e;
    return ar(t);
  },
  isElement: (e) => gn(e),
  getDocumentElement: (e) => {
    let {
      element: t
    } = e;
    return et(t);
  },
  getClippingClientRect: (e) => ll(e),
  getDimensions: (e) => {
    let {
      element: t
    } = e;
    return Kr(t);
  },
  getClientRects: (e) => {
    let {
      element: t
    } = e;
    return t.getClientRects();
  }
}, ul = (e, t, n) => Na(e, t, {
  platform: cl,
  ...n
});
var dl = Object.defineProperty, fl = Object.defineProperties, pl = Object.getOwnPropertyDescriptors, Gr = Object.getOwnPropertySymbols, hl = Object.prototype.hasOwnProperty, ml = Object.prototype.propertyIsEnumerable, Qr = (e, t, n) => t in e ? dl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Te = (e, t) => {
  for (var n in t || (t = {}))
    hl.call(t, n) && Qr(e, n, t[n]);
  if (Gr)
    for (var n of Gr(t))
      ml.call(t, n) && Qr(e, n, t[n]);
  return e;
}, Qt = (e, t) => fl(e, pl(t));
function Qi(e, t) {
  for (const n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? Qi(e[n], t[n]) : e[n] = t[n]);
}
const De = {
  disabled: !1,
  distance: 5,
  skidding: 0,
  container: "body",
  boundary: void 0,
  instantMove: !1,
  disposeTimeout: 5e3,
  popperTriggers: [],
  strategy: "absolute",
  preventOverflow: !0,
  flip: !0,
  shift: !0,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: !0,
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: (e) => [...e, "click"],
      delay: {
        show: 200,
        hide: 0
      },
      handleResize: !1,
      html: !1,
      loadingContent: "..."
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: !0,
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function wt(e, t) {
  let n = De.themes[e] || {}, r;
  do
    r = n[t], typeof r > "u" ? n.$extend ? n = De.themes[n.$extend] || {} : (n = null, r = De[t]) : n = null;
  while (n);
  return r;
}
function vl(e) {
  const t = [e];
  let n = De.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = De.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((r) => `v-popper--theme-${r}`);
}
function Yr(e) {
  const t = [e];
  let n = De.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = De.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let ct = !1;
if (typeof window < "u") {
  ct = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        ct = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Yi = !1;
typeof window < "u" && typeof navigator < "u" && (Yi = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Zi = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Zr = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart"
}, Xr = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend"
};
function eo(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Wn() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Se = [];
let it = null;
const to = {};
function no(e) {
  let t = to[e];
  return t || (t = to[e] = []), t;
}
let lr = function() {
};
typeof window < "u" && (lr = window.Element);
function V(e) {
  return function(t) {
    return wt(t.theme, e);
  };
}
const Kn = "__floating-vue__popper";
var Xi = () => L({
  name: "VPopper",
  provide() {
    return {
      [Kn]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Kn]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: !0
    },
    targetNodes: {
      type: Function,
      required: !0
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: !0
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: V("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: V("positioningDisabled")
    },
    placement: {
      type: String,
      default: V("placement"),
      validator: (e) => Zi.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: V("delay")
    },
    distance: {
      type: [Number, String],
      default: V("distance")
    },
    skidding: {
      type: [Number, String],
      default: V("skidding")
    },
    triggers: {
      type: Array,
      default: V("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: V("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: V("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: V("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: V("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: V("popperHideTriggers")
    },
    container: {
      type: [String, Object, lr, Boolean],
      default: V("container")
    },
    boundary: {
      type: [String, lr],
      default: V("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: V("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: V("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: V("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: V("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: V("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: V("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: V("computeTransformOrigin")
    },
    autoMinSize: {
      type: Boolean,
      default: V("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: V("autoSize")
    },
    autoMaxSize: {
      type: Boolean,
      default: V("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: V("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: V("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: V("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: V("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: V("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: V("flip")
    },
    shift: {
      type: Boolean,
      default: V("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: V("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: V("noAutoFocus")
    }
  },
  emits: [
    "show",
    "hide",
    "update:shown",
    "apply-show",
    "apply-hide",
    "close-group",
    "close-directive",
    "auto-hide",
    "resize",
    "dispose"
  ],
  data() {
    return {
      isShown: !1,
      isMounted: !1,
      skipTransition: !1,
      classes: {
        showFrom: !1,
        showTo: !1,
        hideFrom: !1,
        hideTo: !0
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: !0
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: Qt(Te({}, this.classes), {
          popperClass: this.popperClass
        }),
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[Kn]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: Te(Te({
    shown: "$_autoShowHide",
    disabled(e) {
      e ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    }
  }, [
    "triggers",
    "positioningDisabled"
  ].reduce((e, t) => (e[t] = "$_refreshListeners", e), {})), [
    "placement",
    "distance",
    "skidding",
    "boundary",
    "strategy",
    "overflowPadding",
    "arrowPadding",
    "preventOverflow",
    "shift",
    "shiftCrossAxis",
    "flip"
  ].reduce((e, t) => (e[t] = "$_computePosition", e), {})),
  created() {
    this.$_isDisposed = !0, this.randomId = `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`, this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: e = null, skipDelay: t = !1, force: n = !1 } = {}) {
      var r, o;
      ((r = this.parentPopper) == null ? void 0 : r.lockedChild) && this.parentPopper.lockedChild !== this || (this.$_pendingHide = !1, (n || !this.disabled) && (((o = this.parentPopper) == null ? void 0 : o.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var n;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.$_pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var e, t;
      !this.$_isDisposed || (this.$_isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = (t = (e = this.referenceNode) == null ? void 0 : e.call(this)) != null ? t : this.$el, this.$_targetNodes = this.targetNodes().filter((n) => n.nodeType === n.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.$_isDisposed || (this.$_isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"), this.$emit("dispose"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      var e;
      if (this.$_isDisposed || this.positioningDisabled)
        return;
      const t = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && t.middleware.push(Ka({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const n = this.placement.startsWith("auto");
      if (n ? t.middleware.push(Fa({
        alignment: (e = this.placement.split("-")[1]) != null ? e : ""
      })) : t.placement = this.placement, this.preventOverflow && (this.shift && t.middleware.push(Ga({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !n && this.flip && t.middleware.push(qa({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), t.middleware.push(Ma({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && t.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: o, rects: i, middlewareData: s }) => {
          let a;
          const { centerOffset: l } = s.arrow;
          return o.startsWith("top") || o.startsWith("bottom") ? a = Math.abs(l) > i.reference.width / 2 : a = Math.abs(l) > i.reference.height / 2, {
            data: {
              overflow: a
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const o = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        t.middleware.push({
          name: "autoSize",
          fn: ({ rects: i, placement: s, middlewareData: a }) => {
            var l;
            if ((l = a.autoSize) != null && l.skip)
              return {};
            let u, c;
            return s.startsWith("top") || s.startsWith("bottom") ? u = i.reference.width : c = i.reference.height, this.$_innerNode.style[o === "min" ? "minWidth" : o === "max" ? "maxWidth" : "width"] = u != null ? `${u}px` : null, this.$_innerNode.style[o === "min" ? "minHeight" : o === "max" ? "maxHeight" : "height"] = c != null ? `${c}px` : null, {
              data: {
                skip: !0
              },
              reset: {
                rects: !0
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, t.middleware.push(Qa({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ width: o, height: i }) => {
          this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null, this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null;
        }
      })));
      const r = await ul(this.$_referenceNode, this.$_popperNode, t);
      Object.assign(this.result, {
        x: r.x,
        y: r.y,
        placement: r.placement,
        strategy: r.strategy,
        arrow: Te(Te({}, r.middlewareData.arrow), r.middlewareData.arrowOverflow)
      });
    },
    $_scheduleShow(e = null, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), it && this.instantMove && it.instantMove && it !== this.parentPopper) {
        it.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e = null, t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (it = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Wn(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...bn(this.$_referenceNode),
        ...bn(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), n = this.$_popperNode.querySelector(".v-popper__wrapper"), r = n.parentNode.getBoundingClientRect(), o = t.x + t.width / 2 - (r.left + n.offsetLeft), i = t.y + t.height / 2 - (r.top + n.offsetTop);
        this.result.transformOrigin = `${o}px ${i}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let n = 0; n < Se.length; n++)
          t = Se[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Se.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Yr(this.theme))
        no(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Wn(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, eo(Se, this), Se.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Yr(this.theme)) {
        const r = no(n);
        eo(r, this), r.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      it === this && (it = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = wt(this.theme, "disposeTimeout");
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Wn(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.$_isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const e = (n) => {
        this.isShown && !this.$_hideInProgress || (n.usedByTooltip = !0, !this.$_preventShow && this.show({ event: n }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Zr, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Zr, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Xr, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Xr, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((r) => r.addEventListener(t, n, ct ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, n, r, o) {
      let i = n;
      r != null && (i = typeof r == "function" ? r(i) : r), i.forEach((s) => {
        const a = t[s];
        a && this.$_registerEventListeners(e, a, o);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((n) => {
        const { targetNodes: r, eventType: o, handler: i } = n;
        !e || e === o ? r.forEach((s) => s.removeEventListener(o, i)) : t.push(n);
      }), this.$_events = t;
    },
    $_refreshListeners() {
      this.$_isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(e, t = !1) {
      this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(e, t) {
      for (const n of this.$_targetNodes) {
        const r = n.getAttribute(e);
        r && (n.removeAttribute(e), n.setAttribute(t, r));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const n in e) {
          const r = e[n];
          r == null ? t.removeAttribute(n) : t.setAttribute(n, r);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.$_pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (Lt >= e.left && Lt <= e.right && Mt >= e.top && Mt <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Lt - Je, r = Mt - Ge, i = t.left + t.width / 2 - Je + (t.top + t.height / 2) - Ge + t.width + t.height, s = Je + n * i, a = Ge + r * i;
        return Xt(Je, Ge, s, a, t.left, t.top, t.left, t.bottom) || Xt(Je, Ge, s, a, t.left, t.top, t.right, t.top) || Xt(Je, Ge, s, a, t.right, t.top, t.right, t.bottom) || Xt(Je, Ge, s, a, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
typeof document < "u" && typeof window < "u" && (Yi ? (document.addEventListener("touchstart", ro, ct ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", gl, ct ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", ro, !0), window.addEventListener("click", _l, !0)), window.addEventListener("resize", wl));
function ro(e) {
  for (let t = 0; t < Se.length; t++) {
    const n = Se[t];
    try {
      const r = n.popperNode();
      n.$_mouseDownContains = r.contains(e.target);
    } catch {
    }
  }
}
function _l(e) {
  es(e);
}
function gl(e) {
  es(e, !0);
}
function es(e, t = !1) {
  const n = {};
  for (let r = Se.length - 1; r >= 0; r--) {
    const o = Se[r];
    try {
      const i = o.$_containsGlobalTarget = yl(o, e);
      o.$_pendingHide = !1, requestAnimationFrame(() => {
        if (o.$_pendingHide = !1, !n[o.randomId] && oo(o, i, e)) {
          if (o.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && i) {
            let a = o.parentPopper;
            for (; a; )
              n[a.randomId] = !0, a = a.parentPopper;
            return;
          }
          let s = o.parentPopper;
          for (; s && oo(s, s.$_containsGlobalTarget, e); ) {
            s.$_handleGlobalClose(e, t);
            s = s.parentPopper;
          }
        }
      });
    } catch {
    }
  }
}
function yl(e, t) {
  const n = e.popperNode();
  return e.$_mouseDownContains || n.contains(t.target);
}
function oo(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || bl(e, n) && !t;
}
function bl(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function wl(e) {
  for (let t = 0; t < Se.length; t++)
    Se[t].$_computePosition(e);
}
let Je = 0, Ge = 0, Lt = 0, Mt = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Je = Lt, Ge = Mt, Lt = e.clientX, Mt = e.clientY;
}, ct ? {
  passive: !0
} : void 0);
function Xt(e, t, n, r, o, i, s, a) {
  const l = ((s - o) * (t - i) - (a - i) * (e - o)) / ((a - i) * (n - e) - (s - o) * (r - t)), u = ((n - e) * (t - i) - (r - t) * (e - o)) / ((a - i) * (n - e) - (s - o) * (r - t));
  return l >= 0 && l <= 1 && u >= 0 && u <= 1;
}
var Rn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const xl = {
  extends: Xi()
};
function Ol(e, t, n, r, o, i) {
  return g(), b("div", {
    ref: "reference",
    class: ne(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Me(e.$slots, "default", xa(Oa(e.slotData)))
  ], 2);
}
var kl = /* @__PURE__ */ Rn(xl, [["render", Ol]]);
function Sl() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var n = e.indexOf("Trident/");
  if (n > 0) {
    var r = e.indexOf("rv:");
    return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10);
  }
  var o = e.indexOf("Edge/");
  return o > 0 ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) : -1;
}
let cn;
function cr() {
  cr.init || (cr.init = !0, cn = Sl() !== -1);
}
var Bn = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    cr(), Cr(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", cn && this.$el.appendChild(e), e.data = "about:blank", cn || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!cn && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const $l = /* @__PURE__ */ ka("data-v-b329ee4c");
ba("data-v-b329ee4c");
const Pl = {
  class: "resize-observer",
  tabindex: "-1"
};
wa();
const El = /* @__PURE__ */ $l((e, t, n, r, o, i) => (g(), le("div", Pl)));
Bn.render = El;
Bn.__scopeId = "data-v-b329ee4c";
Bn.__file = "src/components/ResizeObserver.vue";
var ts = (e = "theme") => ({
  computed: {
    themeClass() {
      return vl(this[e]);
    }
  }
});
const Cl = L({
  name: "VPopperContent",
  components: {
    ResizeObserver: Bn
  },
  mixins: [
    ts()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
}), jl = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Il = {
  ref: "inner",
  class: "v-popper__inner"
}, Tl = /* @__PURE__ */ h("div", { class: "v-popper__arrow-outer" }, null, -1), Al = /* @__PURE__ */ h("div", { class: "v-popper__arrow-inner" }, null, -1), Nl = [
  Tl,
  Al
];
function Dl(e, t, n, r, o, i) {
  const s = ge("ResizeObserver");
  return g(), b("div", {
    id: e.popperId,
    ref: "popover",
    class: ne(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: Un(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Sa((a) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    h("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit("hide"))
    }),
    h("div", {
      class: "v-popper__wrapper",
      style: Un(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      h("div", Il, [
        e.mounted ? (g(), b(R, { key: 0 }, [
          h("div", null, [
            Me(e.$slots, "default")
          ]),
          e.handleResize ? (g(), le(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (a) => e.$emit("resize", a))
          })) : W("", !0)
        ], 64)) : W("", !0)
      ], 512),
      h("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: Un(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Nl, 4)
    ], 4)
  ], 46, jl);
}
var ns = /* @__PURE__ */ Rn(Cl, [["render", Dl]]), rs = {
  methods: {
    show(...e) {
      return this.$refs.popper.show(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    }
  }
};
const Ll = L({
  name: "VPopperWrapper",
  components: {
    Popper: kl,
    PopperContent: ns
  },
  mixins: [
    rs,
    ts("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    finalTheme() {
      var e;
      return (e = this.theme) != null ? e : this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function Ml(e, t, n, r, o, i) {
  const s = ge("PopperContent"), a = ge("Popper");
  return g(), le(a, {
    ref: "popper",
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: ne([
      e.themeClass
    ])
  }, {
    default: $e(({
      popperId: l,
      isShown: u,
      shouldMountContent: c,
      skipTransition: p,
      autoHide: f,
      show: d,
      hide: v,
      handleResize: _,
      onResize: w,
      classes: y,
      result: S
    }) => [
      Me(e.$slots, "default", {
        shown: u,
        show: d,
        hide: v
      }),
      H(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: u,
        mounted: c,
        "skip-transition": p,
        "auto-hide": f,
        "handle-resize": _,
        classes: y,
        result: S,
        onHide: v,
        onResize: w
      }, {
        default: $e(() => [
          Me(e.$slots, "popper", {
            shown: u,
            hide: v
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 8, ["theme", "target-nodes", "popper-node", "class"]);
}
var Ar = /* @__PURE__ */ Rn(Ll, [["render", Ml]]);
const Rl = L(Qt(Te({}, Ar), {
  name: "VDropdown",
  vPopperTheme: "dropdown"
})), Bl = L(Qt(Te({}, Ar), {
  name: "VMenu",
  vPopperTheme: "menu"
})), Hl = L(Qt(Te({}, Ar), {
  name: "VTooltip",
  vPopperTheme: "tooltip"
})), zl = L({
  name: "VTooltipDirective",
  components: {
    Popper: Xi(),
    PopperContent: ns
  },
  mixins: [
    rs
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => wt(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => wt(e.theme, "loadingContent")
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(!0);
      },
      immediate: !0
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(e) {
      if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        const t = ++this.$_fetchId, n = this.content(this);
        n.then ? n.then((r) => this.onResult(t, r)) : this.onResult(t, n);
      }
    },
    onResult(e, t) {
      e === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
    },
    onShow() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide() {
      this.$_isShown = !1;
    }
  }
}), Vl = ["innerHTML"], Fl = ["textContent"];
function Ul(e, t, n, r, o, i) {
  const s = ge("PopperContent"), a = ge("Popper");
  return g(), le(a, Ea({ ref: "popper" }, e.$attrs, {
    theme: e.theme,
    "popper-node": () => e.$refs.popperContent.$el,
    onApplyShow: e.onShow,
    onApplyHide: e.onHide
  }), {
    default: $e(({
      popperId: l,
      isShown: u,
      shouldMountContent: c,
      skipTransition: p,
      autoHide: f,
      hide: d,
      handleResize: v,
      onResize: _,
      classes: w,
      result: y
    }) => [
      H(s, {
        ref: "popperContent",
        class: ne({
          "v-popper--tooltip-loading": e.loading
        }),
        "popper-id": l,
        theme: e.theme,
        shown: u,
        mounted: c,
        "skip-transition": p,
        "auto-hide": f,
        "handle-resize": v,
        classes: w,
        result: y,
        onHide: d,
        onResize: _
      }, {
        default: $e(() => [
          e.html ? (g(), b("div", {
            key: 0,
            innerHTML: e.finalContent
          }, null, 8, Vl)) : (g(), b("div", {
            key: 1,
            textContent: z(e.finalContent)
          }, null, 8, Fl))
        ]),
        _: 2
      }, 1032, ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 1
  }, 16, ["theme", "popper-node", "onApplyShow", "onApplyHide"]);
}
var ql = /* @__PURE__ */ Rn(zl, [["render", Ul]]);
const os = "v-popper--has-tooltip";
function Wl(e, t) {
  let n = e.placement;
  if (!n && t)
    for (const r of Zi)
      t[r] && (n = r);
  return n || (n = wt(e.theme || "tooltip", "placement")), n;
}
function is(e, t, n) {
  let r;
  const o = typeof t;
  return o === "string" ? r = { content: t } : t && o === "object" ? r = t : r = { content: !1 }, r.placement = Wl(r, n), r.targetNodes = () => [e], r.referenceNode = () => e, r;
}
let Jn, zt, Kl = 0;
function Jl() {
  if (Jn)
    return;
  zt = K([]), Jn = $a({
    name: "VTooltipDirectiveApp",
    setup() {
      return {
        directives: zt
      };
    },
    render() {
      return this.directives.map((t) => Pa(ql, Qt(Te({}, t.options), {
        shown: t.shown || t.options.shown,
        key: t.id
      })));
    },
    devtools: {
      hide: !0
    }
  });
  const e = document.createElement("div");
  document.body.appendChild(e), Jn.mount(e);
}
function Gl(e, t, n) {
  Jl();
  const r = K(is(e, t, n)), o = K(!1), i = {
    id: Kl++,
    options: r,
    shown: o
  };
  return zt.value.push(i), e.classList && e.classList.add(os), e.$_popper = {
    options: r,
    item: i,
    show() {
      o.value = !0;
    },
    hide() {
      o.value = !1;
    }
  };
}
function ss(e) {
  if (e.$_popper) {
    const t = zt.value.indexOf(e.$_popper.item);
    t !== -1 && zt.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
  }
  e.classList && e.classList.remove(os);
}
function io(e, { value: t, modifiers: n }) {
  const r = is(e, t, n);
  if (!r.content || wt(r.theme || "tooltip", "disabled"))
    ss(e);
  else {
    let o;
    e.$_popper ? (o = e.$_popper, o.options.value = r) : o = Gl(e, t, n), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? o.show() : o.hide());
  }
}
var Ql = {
  beforeMount: io,
  updated: io,
  beforeUnmount(e) {
    ss(e);
  }
};
function so(e) {
  e.addEventListener("click", as), e.addEventListener("touchstart", ls, ct ? {
    passive: !0
  } : !1);
}
function ao(e) {
  e.removeEventListener("click", as), e.removeEventListener("touchstart", ls), e.removeEventListener("touchend", cs), e.removeEventListener("touchcancel", us);
}
function as(e) {
  const t = e.currentTarget;
  e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
}
function ls(e) {
  if (e.changedTouches.length === 1) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !0;
    const n = e.changedTouches[0];
    t.$_vclosepopover_touchPoint = n, t.addEventListener("touchend", cs), t.addEventListener("touchcancel", us);
  }
}
function cs(e) {
  const t = e.currentTarget;
  if (t.$_vclosepopover_touch = !1, e.changedTouches.length === 1) {
    const n = e.changedTouches[0], r = t.$_vclosepopover_touchPoint;
    e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
  }
}
function us(e) {
  const t = e.currentTarget;
  t.$_vclosepopover_touch = !1;
}
var Yl = {
  beforeMount(e, { value: t, modifiers: n }) {
    e.$_closePopoverModifiers = n, (typeof t > "u" || t) && so(e);
  },
  updated(e, { value: t, oldValue: n, modifiers: r }) {
    e.$_closePopoverModifiers = r, t !== n && (typeof t > "u" || t ? so(e) : ao(e));
  },
  beforeUnmount(e) {
    ao(e);
  }
};
function Zl(e, t = {}) {
  e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0, Qi(De, t), e.directive("tooltip", Ql), e.directive("close-popper", Yl), e.component("VTooltip", Hl), e.component("VDropdown", Rl), e.component("VMenu", Bl));
}
const Xl = {
  version: "2.0.0-beta.20",
  install: Zl,
  options: De
};
var lo;
const ds = typeof window < "u", ec = (e) => typeof e == "function", tc = (e) => typeof e == "string", Gn = () => {
};
ds && ((lo = window == null ? void 0 : window.navigator) == null ? void 0 : lo.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function wn(e) {
  return typeof e == "function" ? e() : P(e);
}
function nc(e, t) {
  function n(...r) {
    e(() => t.apply(this, r), { fn: t, thisArg: this, args: r });
  }
  return n;
}
const fs = (e) => e();
function rc(e = fs) {
  const t = K(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  return { isActive: t, pause: n, resume: r, eventFilter: (...i) => {
    t.value && e(...i);
  } };
}
function oc(e) {
  return e;
}
function ps(e) {
  return Ca() ? (ja(e), !0) : !1;
}
function ic(e) {
  return typeof e == "function" ? U(e) : K(e);
}
function hs(e, t = !0) {
  Vi() ? xt(e) : t ? e() : Cr(e);
}
function sc(e = !1, t = {}) {
  const {
    truthyValue: n = !0,
    falsyValue: r = !1
  } = t, o = zi(e), i = K(e);
  function s(a) {
    if (arguments.length)
      return i.value = a, i.value;
    {
      const l = wn(n);
      return i.value = i.value === l ? wn(r) : l, i.value;
    }
  }
  return o ? s : [i, s];
}
var co = Object.getOwnPropertySymbols, ac = Object.prototype.hasOwnProperty, lc = Object.prototype.propertyIsEnumerable, cc = (e, t) => {
  var n = {};
  for (var r in e)
    ac.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && co)
    for (var r of co(e))
      t.indexOf(r) < 0 && lc.call(e, r) && (n[r] = e[r]);
  return n;
};
function uc(e, t, n = {}) {
  const r = n, {
    eventFilter: o = fs
  } = r, i = cc(r, [
    "eventFilter"
  ]);
  return Re(e, nc(o, t), i);
}
var dc = Object.defineProperty, fc = Object.defineProperties, pc = Object.getOwnPropertyDescriptors, xn = Object.getOwnPropertySymbols, ms = Object.prototype.hasOwnProperty, vs = Object.prototype.propertyIsEnumerable, uo = (e, t, n) => t in e ? dc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, hc = (e, t) => {
  for (var n in t || (t = {}))
    ms.call(t, n) && uo(e, n, t[n]);
  if (xn)
    for (var n of xn(t))
      vs.call(t, n) && uo(e, n, t[n]);
  return e;
}, mc = (e, t) => fc(e, pc(t)), vc = (e, t) => {
  var n = {};
  for (var r in e)
    ms.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && xn)
    for (var r of xn(e))
      t.indexOf(r) < 0 && vs.call(e, r) && (n[r] = e[r]);
  return n;
};
function _c(e, t, n = {}) {
  const r = n, {
    eventFilter: o
  } = r, i = vc(r, [
    "eventFilter"
  ]), { eventFilter: s, pause: a, resume: l, isActive: u } = rc(o);
  return { stop: uc(e, t, mc(hc({}, i), {
    eventFilter: s
  })), pause: a, resume: l, isActive: u };
}
function gc(e) {
  var t;
  const n = wn(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Qe = ds ? window : void 0;
function _s(...e) {
  let t, n, r, o;
  if (tc(e[0]) ? ([n, r, o] = e, t = Qe) : [t, n, r, o] = e, !t)
    return Gn;
  let i = Gn;
  const s = Re(() => gc(t), (l) => {
    i(), l && (l.addEventListener(n, r, o), i = () => {
      l.removeEventListener(n, r, o), i = Gn;
    });
  }, { immediate: !0, flush: "post" }), a = () => {
    s(), i();
  };
  return ps(a), a;
}
function yc(e, t = !1) {
  const n = K(), r = () => n.value = Boolean(e());
  return r(), hs(r, t), n;
}
function bc(e, t = {}) {
  const { window: n = Qe } = t, r = yc(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const i = K(!1), s = () => {
    !o || ("removeEventListener" in o ? o.removeEventListener("change", a) : o.removeListener(a));
  }, a = () => {
    !r.value || (s(), o = n.matchMedia(ic(e).value), i.value = o.matches, "addEventListener" in o ? o.addEventListener("change", a) : o.addListener(a));
  };
  return jr(a), ps(() => s()), i;
}
const ur = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, dr = "__vueuse_ssr_handlers__";
ur[dr] = ur[dr] || {};
const wc = ur[dr];
function gs(e, t) {
  return wc[e] || t;
}
function xc(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" || Array.isArray(e) ? "object" : Number.isNaN(e) ? "any" : "number";
}
var Oc = Object.defineProperty, fo = Object.getOwnPropertySymbols, kc = Object.prototype.hasOwnProperty, Sc = Object.prototype.propertyIsEnumerable, po = (e, t, n) => t in e ? Oc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ho = (e, t) => {
  for (var n in t || (t = {}))
    kc.call(t, n) && po(e, n, t[n]);
  if (fo)
    for (var n of fo(t))
      Sc.call(t, n) && po(e, n, t[n]);
  return e;
};
const $c = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
};
function ys(e, t, n, r = {}) {
  var o;
  const {
    flush: i = "pre",
    deep: s = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: l = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: p = Qe,
    eventFilter: f,
    onError: d = (E) => {
      console.error(E);
    }
  } = r, v = (c ? Ia : K)(t);
  if (!n)
    try {
      n = gs("getDefaultStorage", () => {
        var E;
        return (E = Qe) == null ? void 0 : E.localStorage;
      })();
    } catch (E) {
      d(E);
    }
  if (!n)
    return v;
  const _ = wn(t), w = xc(_), y = (o = r.serializer) != null ? o : $c[w], { pause: S, resume: k } = _c(v, () => O(v.value), { flush: i, deep: s, eventFilter: f });
  return p && a && _s(p, "storage", D), D(), v;
  function O(E) {
    try {
      E == null ? n.removeItem(e) : n.setItem(e, y.write(E));
    } catch (A) {
      d(A);
    }
  }
  function $(E) {
    S();
    try {
      const A = E ? E.newValue : n.getItem(e);
      if (A == null)
        return l && _ !== null && n.setItem(e, y.write(_)), _;
      if (!E && u) {
        const C = y.read(A);
        return ec(u) ? u(C, _) : w === "object" && !Array.isArray(C) ? ho(ho({}, _), C) : C;
      } else
        return typeof A != "string" ? A : y.read(A);
    } catch (A) {
      d(A);
    } finally {
      k();
    }
  }
  function D(E) {
    if (!(E && E.storageArea !== n)) {
      if (E && E.key === null) {
        v.value = _;
        return;
      }
      E && E.key !== e || (v.value = $(E));
    }
  }
}
function bs(e) {
  return bc("(prefers-color-scheme: dark)", e);
}
var Pc = Object.defineProperty, mo = Object.getOwnPropertySymbols, Ec = Object.prototype.hasOwnProperty, Cc = Object.prototype.propertyIsEnumerable, vo = (e, t, n) => t in e ? Pc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jc = (e, t) => {
  for (var n in t || (t = {}))
    Ec.call(t, n) && vo(e, n, t[n]);
  if (mo)
    for (var n of mo(t))
      Cc.call(t, n) && vo(e, n, t[n]);
  return e;
};
function Ic(e = {}) {
  const {
    selector: t = "html",
    attribute: n = "class",
    initialValue: r = "auto",
    window: o = Qe,
    storage: i,
    storageKey: s = "vueuse-color-scheme",
    listenToStorageChanges: a = !0,
    storageRef: l,
    emitAuto: u
  } = e, c = jc({
    auto: "",
    light: "light",
    dark: "dark"
  }, e.modes || {}), p = bs({ window: o }), f = U(() => p.value ? "dark" : "light"), d = l || (s == null ? K(r) : ys(s, r, i, { window: o, listenToStorageChanges: a })), v = U({
    get() {
      return d.value === "auto" && !u ? f.value : d.value;
    },
    set(S) {
      d.value = S;
    }
  }), _ = gs("updateHTMLAttrs", (S, k, O) => {
    const $ = o == null ? void 0 : o.document.querySelector(S);
    if (!!$)
      if (k === "class") {
        const D = O.split(/\s/g);
        Object.values(c).flatMap((E) => (E || "").split(/\s/g)).filter(Boolean).forEach((E) => {
          D.includes(E) ? $.classList.add(E) : $.classList.remove(E);
        });
      } else
        $.setAttribute(k, O);
  });
  function w(S) {
    var k;
    const O = S === "auto" ? f.value : S;
    _(t, n, (k = c[O]) != null ? k : O);
  }
  function y(S) {
    e.onChanged ? e.onChanged(S, w) : w(S);
  }
  return Re(v, y, { flush: "post", immediate: !0 }), u && Re(f, () => y(v.value), { flush: "post" }), hs(() => y(v.value)), v;
}
var Tc = Object.defineProperty, Ac = Object.defineProperties, Nc = Object.getOwnPropertyDescriptors, _o = Object.getOwnPropertySymbols, Dc = Object.prototype.hasOwnProperty, Lc = Object.prototype.propertyIsEnumerable, go = (e, t, n) => t in e ? Tc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Mc = (e, t) => {
  for (var n in t || (t = {}))
    Dc.call(t, n) && go(e, n, t[n]);
  if (_o)
    for (var n of _o(t))
      Lc.call(t, n) && go(e, n, t[n]);
  return e;
}, Rc = (e, t) => Ac(e, Nc(t));
function Bc(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: n = "",
    window: r = Qe
  } = e, o = Ic(Rc(Mc({}, e), {
    onChanged: (a, l) => {
      var u;
      e.onChanged ? (u = e.onChanged) == null || u.call(e, a === "dark") : l(a);
    },
    modes: {
      dark: t,
      light: n
    }
  })), i = bs({ window: r });
  return U({
    get() {
      return o.value === "dark";
    },
    set(a) {
      a === i.value ? o.value = "auto" : o.value = a ? "dark" : "light";
    }
  });
}
function Hc(e, t, n = {}) {
  const { window: r = Qe } = n;
  return ys(e, t, r == null ? void 0 : r.localStorage, n);
}
var yo;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(yo || (yo = {}));
var zc = Object.defineProperty, bo = Object.getOwnPropertySymbols, Vc = Object.prototype.hasOwnProperty, Fc = Object.prototype.propertyIsEnumerable, wo = (e, t, n) => t in e ? zc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Uc = (e, t) => {
  for (var n in t || (t = {}))
    Vc.call(t, n) && wo(e, n, t[n]);
  if (bo)
    for (var n of bo(t))
      Fc.call(t, n) && wo(e, n, t[n]);
  return e;
};
const qc = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Uc({
  linear: oc
}, qc);
function Wc({ window: e = Qe } = {}) {
  if (!e)
    return {
      x: K(0),
      y: K(0)
    };
  const t = K(e.pageXOffset), n = K(e.pageYOffset);
  return _s("scroll", () => {
    t.value = e.pageXOffset, n.value = e.pageYOffset;
  }, {
    capture: !1,
    passive: !0
  }), { x: t, y: n };
}
const Kc = {
  key: 0,
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, Jc = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), Gc = [
  Jc
], Qc = {
  key: 1,
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, Yc = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
}, null, -1), Zc = [
  Yc
], ws = /* @__PURE__ */ L({
  __name: "DarkModeToggle",
  setup(e) {
    const t = Bc(), n = sc(t);
    return (r, o) => (g(), b("button", {
      onClick: o[0] || (o[0] = Be((i) => P(n)(), ["prevent"])),
      class: "flex rounded border bg-slate-100 p-2 text-xl text-gray-900 dark:border-white/20 dark:bg-white/10 dark:text-cyan-300"
    }, [
      P(t) ? (g(), b("svg", Kc, Gc)) : (g(), b("svg", Qc, Zc))
    ]));
  }
}), xs = Symbol(), xo = "__CURRENT_FLAVOR__";
function Xc() {
  var n;
  const e = Hc(xo, ""), t = K((n = e.value) != null ? n : void 0);
  return Re(t, () => {
    rr && t.value && localStorage.setItem(xo, t.value);
  }), {
    value: t,
    set(r) {
      t.value = r;
    }
  };
}
function Os() {
  const e = gt(xs);
  if (!e)
    throw new Error("useCurrentFlavor() is called without provider.");
  return e;
}
const eu = { class: "relative flex items-center" }, tu = ["value"], nu = /* @__PURE__ */ L({
  __name: "FlavorDropdown",
  setup(e) {
    const { value: t, set: n } = Os(), r = [
      { name: "Angular", value: "angular" },
      { name: "Vue", value: "vue" },
      { name: "React", value: "react" },
      { name: "Svelte", value: "svelte" },
      { name: "Plain", value: "plain" }
    ].sort((i, s) => i.value.localeCompare(s.value)), o = U({
      get() {
        return t.value;
      },
      set(i) {
        !i || n(i);
      }
    });
    return (i, s) => {
      const a = ge("ClientOnly");
      return g(), b("div", eu, [
        H(a, null, {
          default: $e(() => [
            yt(h("select", {
              class: "form-select w-full rounded border border-slate-200 bg-slate-100 px-4 py-2 dark:border-white/20 dark:bg-white/10 dark:text-white",
              "onUpdate:modelValue": s[0] || (s[0] = (l) => zi(o) ? o.value = l : null)
            }, [
              (g(!0), b(R, null, G(P(r), (l) => (g(), b("option", {
                value: l.value
              }, z(l.name), 9, tu))), 256))
            ], 512), [
              [Ta, P(o)]
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
}), ks = /#.*$/, ru = /(index)?\.(md|html)$/, ou = typeof window < "u", iu = K(ou ? location.hash : "");
function Ot(e, t, n = !1) {
  if (t === void 0)
    return !1;
  if (e = Oo(`/${e}`), n)
    return new RegExp(t).test(e);
  if (Oo(t) !== e)
    return !1;
  const r = t.match(ks);
  return r ? iu.value === r[0] : !0;
}
function Oo(e) {
  return decodeURI(e).replace(ks, "").replace(ru, "");
}
function su(e, t) {
  const n = e.endsWith("/"), r = t.startsWith("/");
  return n && r ? e.slice(0, -1) + t : !n && !r ? `${e}/${t}` : e + t;
}
function Yt() {
  const { theme: e, page: t } = Pe(), n = e.value;
  return U(() => {
    var i, s;
    const o = (i = Object.keys(n.sidebar).find((a) => Ot(t.value.relativePath, a, !0))) != null ? i : "/";
    return (s = n.sidebar[o]) != null ? s : [];
  });
}
function Nr(e) {
  const t = [];
  function n(r, o) {
    for (const i of r) {
      const s = { ...i, link: i == null ? void 0 : i.link, parent: o };
      t.push(s), "items" in i && n(i.items, s);
    }
  }
  for (const r of e)
    n(r.items, r);
  return t;
}
const au = ["label"], lu = ["value", "label", "selected"], cu = /* @__PURE__ */ L({
  __name: "MobileNavigationItem",
  props: {
    depth: {
      type: Number,
      default: 0
    },
    item: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = Kt(), n = U(() => (r) => t.path.includes(r));
    return (r, o) => {
      const i = ge("MobileNavigationItem", !0);
      return g(), b(R, null, [
        e.item.link ? (g(), b("option", {
          key: 1,
          value: e.item.link,
          label: "-".repeat(e.depth * 3) + e.item.text,
          selected: P(n)(e.item.link)
        }, null, 8, lu)) : (g(), b("optgroup", {
          key: 0,
          label: e.item.text
        }, null, 8, au)),
        (g(!0), b(R, null, G(e.item.items, (s) => (g(), le(i, {
          item: s,
          depth: e.depth + 1
        }, null, 8, ["item", "depth"]))), 256))
      ], 64);
    };
  }
}), uu = { class: "border-b dark:border-white/10 lg:hidden" }, du = { class: "mx-auto flex items-center p-4 px-6" }, fu = ["onChange"], pu = /* @__PURE__ */ L({
  __name: "MobileNavigation",
  setup(e) {
    const t = Yt(), n = Hi();
    function r(o) {
      const i = o.target;
      i == null || i.blur();
      try {
        n.go(i == null ? void 0 : i.value);
      } catch {
      }
    }
    return (o, i) => (g(), b("div", uu, [
      h("div", du, [
        H(ws),
        h("select", {
          onChange: Be(r, ["prevent"]),
          class: "form-select ml-2 w-full rounded-md border-slate-200 bg-slate-100 p-2 dark:border-white/20 dark:bg-white/10 dark:text-white",
          title: "Navigation"
        }, [
          (g(!0), b(R, null, G(P(t), (s) => (g(), le(cu, { item: s }, null, 8, ["item"]))), 256))
        ], 40, fu)
      ])
    ]));
  }
}), kt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, hu = {}, mu = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-6 w-6"
}, vu = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
}, null, -1), _u = [
  vu
];
function gu(e, t) {
  return g(), b("svg", mu, _u);
}
const yu = /* @__PURE__ */ kt(hu, [["render", gu]]), bu = {}, wu = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-6 w-6"
}, xu = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
}, null, -1), Ou = [
  xu
];
function ku(e, t) {
  return g(), b("svg", wu, Ou);
}
const Su = /* @__PURE__ */ kt(bu, [["render", ku]]), $u = {}, Pu = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-6 w-6"
}, Eu = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
}, null, -1), Cu = [
  Eu
];
function ju(e, t) {
  return g(), b("svg", Pu, Cu);
}
const Iu = /* @__PURE__ */ kt($u, [["render", ju]]), Tu = {}, Au = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "h-5 w-5"
}, Nu = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
  "clip-rule": "evenodd"
}, null, -1), Du = [
  Nu
];
function Lu(e, t) {
  return g(), b("svg", Au, Du);
}
const un = /* @__PURE__ */ kt(Tu, [["render", Lu]]), Mu = {
  key: 0,
  class: "mt-4"
}, Ru = ["innerHTML"], Bu = ["href", "data-current"], Hu = { class: "flex items-center" }, zu = ["innerHTML"], Vu = /* @__PURE__ */ L({
  __name: "SideBarLink",
  props: {
    item: null,
    depth: { default: 0 }
  },
  setup(e) {
    const t = e, n = {
      file: Su,
      folder: yu,
      cube: Iu,
      chevron_right: un
    }, { page: r, site: o } = Pe(), i = t.item.text, s = p(o.value.base, t.item.link), a = t.item.items, l = U(() => Ot(r.value.relativePath, t.item.link)), u = t.item.icon && n[t.item.icon], c = K(!!t.item.hideChildren);
    function p(f, d) {
      return d === void 0 || d.startsWith("#") ? d : su(f, d);
    }
    return (f, d) => {
      var _, w, y;
      const v = ge("SideBarLink", !0);
      return (_ = e.item) != null && _.hidden ? W("", !0) : (g(), b("li", Mu, [
        !P(s) && P(i) ? (g(), b("p", {
          key: 0,
          onClick: d[0] || (d[0] = Be((S) => c.value = !c.value, ["prevent"])),
          class: "group mt-6 flex cursor-pointer items-center justify-between py-2 text-sm font-semibold tracking-wide text-slate-900 dark:text-white"
        }, [
          h("span", { innerHTML: P(i) }, null, 8, Ru),
          ((w = e.item) == null ? void 0 : w.collapsible) !== !1 ? (g(), le(un, {
            key: 0,
            class: ne(["h-5 w-5 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-cyan-300", {
              "rotate-90 transform": !c.value
            }])
          }, null, 8, ["class"])) : W("", !0)
        ])) : (g(), b("a", {
          key: 1,
          href: P(s),
          "data-current": P(l),
          class: ne(["group flex items-center justify-between", {
            "text-blue-500 dark:text-cyan-400": P(l),
            "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300": !P(l)
          }])
        }, [
          h("div", Hu, [
            h("div", {
              class: ne(["absolute left-0.5 h-1.5 w-1.5 rounded-full", {
                "bg-blue-500 dark:bg-cyan-400": P(l),
                "group-hover:bg-slate-400": !P(l)
              }])
            }, null, 2),
            P(u) ? (g(), le(Jt(P(u)), {
              key: 0,
              class: "mr-2"
            })) : W("", !0),
            h("span", { innerHTML: P(i) }, null, 8, zu)
          ]),
          P(a) && ((y = e.item) == null ? void 0 : y.collapsible) !== !1 ? (g(), b("button", {
            key: 0,
            onClick: d[1] || (d[1] = Be((S) => c.value = !c.value, ["prevent"])),
            class: "px-2 py-0.5"
          }, [
            H(un, {
              class: ne(["h-5 w-5 text-slate-400 hover:text-slate-800 dark:hover:text-cyan-300", {
                "rotate-90 transform": !c.value
              }])
            }, null, 8, ["class"])
          ])) : W("", !0)
        ], 10, Bu)),
        P(a) ? yt((g(), b("ul", {
          key: 2,
          class: ne(["ml-1 pl-4", {
            "border-l-2 border-slate-200 dark:border-slate-700": e.depth === 0
          }])
        }, [
          (g(!0), b(R, null, G(P(a), (S) => (g(), le(v, {
            item: S,
            depth: e.depth + 1
          }, null, 8, ["item", "depth"]))), 256))
        ], 2)), [
          [vn, !c.value]
        ]) : W("", !0)
      ]));
    };
  }
}), Fu = {
  key: 0,
  class: "relative"
}, Uu = /* @__PURE__ */ L({
  __name: "SideBar",
  setup(e) {
    const t = Yt();
    return (n, r) => P(t).length > 0 ? (g(), b("ul", Fu, [
      (g(!0), b(R, null, G(P(t), (o) => (g(), le(Vu, {
        key: o.text,
        item: o
      }, null, 8, ["item"]))), 128))
    ])) : W("", !0);
  }
});
var qu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
const { createElementVNode: Wu, openBlock: Ku, createElementBlock: Ju } = Ve;
var Gu = function(t, n) {
  return Ku(), Ju("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Wu("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
    })
  ]);
};
const { createElementVNode: Qu, openBlock: Yu, createElementBlock: Zu } = Ve;
var Xu = function(t, n) {
  return Yu(), Zu("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Qu("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    })
  ]);
};
const { createElementVNode: ed, openBlock: td, createElementBlock: nd } = Ve;
var rd = function(t, n) {
  return td(), nd("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    ed("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 12.75l6 6 9-13.5"
    })
  ]);
};
const { createElementVNode: od, openBlock: id, createElementBlock: sd } = Ve;
var ad = function(t, n) {
  return id(), sd("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    od("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    })
  ]);
};
const { createElementVNode: ld, openBlock: cd, createElementBlock: ud } = Ve;
var dd = function(t, n) {
  return cd(), ud("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    ld("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
    })
  ]);
};
const { createElementVNode: fd, openBlock: pd, createElementBlock: hd } = Ve;
var md = function(t, n) {
  return pd(), hd("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    fd("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
    })
  ]);
};
const { createElementVNode: vd, openBlock: _d, createElementBlock: gd } = Ve;
var yd = function(t, n) {
  return _d(), gd("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    vd("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    })
  ]);
}, bd = Gu, wd = Xu, xd = rd, Od = ad, kd = dd, Sd = md, $d = yd;
const Pd = { class: "space-y-3" }, Ed = ["href"], Cd = {
  key: 0,
  class: "rounded border border-slate-300 p-1 text-slate-400 dark:border-slate-300/30 dark:text-slate-300/40"
}, jd = { class: "ml-3 font-medium leading-6 tracking-wide" }, Id = /* @__PURE__ */ L({
  __name: "SideBarNav",
  setup(e) {
    const t = {
      AcademicCapIcon: bd,
      DevicePhoneMobileIcon: $d,
      CubeTransparentIcon: Sd,
      CheckIcon: xd,
      CodeBracketIcon: Od,
      CpuChipIcon: kd
    }, { theme: n, page: r } = Pe();
    return (o, i) => (g(), b("ul", Pd, [
      (g(!0), b(R, null, G(P(n).nav, (s) => (g(), b("li", null, [
        h("a", {
          href: s.link,
          class: ne([
            "flex items-center",
            P(Ot)(P(r).relativePath, s.activeMatch, !!s.activeMatch) ? "text-blue-500 dark:text-cyan-400" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          ])
        }, [
          s.icon in t ? (g(), b("div", Cd, [
            (g(), le(Jt(t[s.icon]), { class: "h-5 w-5" }))
          ])) : W("", !0),
          h("span", jd, z(s.text), 1)
        ], 10, Ed)
      ]))), 256))
    ]));
  }
}), Et = (e = "") => ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).VITE_MAIN_URL + e, Td = (e = "") => ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).VITE_DOCS_URL + e, Ad = (e = "") => ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).VITE_BLOG_URL + e, ko = {
  nav: [
    { text: "Docs", link: Td() },
    { text: "Blog", link: Ad() },
    { text: "Community", link: "https://nativescript.org/discord", target: "blank" },
    { text: "Support", link: Et("/support") }
  ],
  flyoutNav: [
    {
      text: "Partners",
      link: Et("/partners"),
      description: "Find partners who can help you with your projects."
    },
    {
      text: "Samples",
      link: Et("/samples"),
      description: "Browse creative samples of NativeScript user experiences."
    },
    {
      text: "Showcase",
      link: Et("/showcase"),
      description: "Browse a few production apps submitted by the community."
    },
    {
      text: "Mentoring",
      link: Et("/mentoring-free-for-beginners"),
      description: "Starting a career in tech?"
    },
    {
      text: "Preview",
      link: "https://preview.nativescript.org/",
      target: "blank",
      description: "Preview NativeScript projects with StackBlitz or locally."
    },
    {
      text: "Governance",
      link: "https://github.com/NativeScript/management/blob/master/nativescript-governance.md",
      target: "blank",
      description: "Learn about the governance model and how you can be a part of it."
    }
  ]
}, Nd = {
  key: 0,
  viewBox: "0 0 532 100",
  xmlns: "http://www.w3.org/2000/svg",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2"
}, Dd = /* @__PURE__ */ Fi('<g transform="translate(-362.21733 -1030)"><path fill="none" d="M362.217 1030h531.337v100H362.217z"></path><clipPath id="a"><path d="M362.217 1030h531.337v100H362.217z"></path></clipPath><g clip-path="url(#a)"><g transform="matrix(.09766 0 0 .09766 362.4350256 1030.0000256)"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z" fill="none"></path><clipPath id="b"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z"></path></clipPath><g clip-path="url(#b)"><path fill="#65adf1" d="M0 0h1024v1024H0z"></path><path d="M843 511.864v1.099c0 .256-.195.468-.451.492-33.364 3.123-59.479 30.233-59.479 64.409v136.941c0 9.569-2.01 18.8-5.64 27.229-10.35 24.071-33.84 41.571-61.16 41.571h-69.2l-.48-.601-269.18-337.32v337.921h-69.68c-36.893 0-66.8-29.908-66.8-66.8V577.864c0-34.175-26.115-61.286-59.479-64.409-.256-.024-.451-.236-.451-.492v-1.099c0-.255.194-.467.449-.492 33.245-3.237 59.221-31.021 59.221-65.117v-139.06c0-9.29 1.9-18.15 5.33-26.181 10.18-23.879 33.87-40.62 61.47-40.62h69.66l.28.35 269.18 337.33v-337.68h69.94c36.893 0 66.8 29.908 66.8 66.801v139.06c0 34.096 25.976 61.88 59.222 65.117.254.025.448.237.448.492" fill="#fff" fill-rule="nonzero"></path></g></g><path d="M527.5797 1056.618v49.436h-9.044l-21.556-31.144h-.34v31.144h-10.472v-49.436h9.18l21.352 31.076h.408v-31.076h10.472zM546.5577 1106.734c-3.536 0-6.46-.884-8.84-2.788-2.312-1.836-3.468-4.556-3.468-8.228 0-2.788.612-4.964 1.972-6.528 1.292-1.564 2.992-2.72 5.1-3.468 2.108-.748 4.42-1.224 6.868-1.428 3.196-.34 5.508-.68 6.868-1.02 1.428-.34 2.108-1.156 2.108-2.312v-.136c0-1.564-.476-2.72-1.428-3.604-.952-.816-2.312-1.224-4.08-1.224-1.836 0-3.332.408-4.42 1.224-1.088.748-1.836 1.836-2.176 3.06l-9.52-.816c.68-3.332 2.448-6.052 5.304-8.024 2.788-1.972 6.392-2.992 10.88-2.992 2.72 0 5.304.476 7.684 1.36 2.38.816 4.352 2.176 5.848 4.012 1.428 1.904 2.176 4.284 2.176 7.208v25.024h-9.724v-5.168h-.34c-.884 1.768-2.244 3.128-4.012 4.216-1.836 1.088-4.08 1.632-6.8 1.632zm2.924-7.072c2.244 0 4.148-.68 5.576-1.972 1.428-1.292 2.176-2.924 2.176-4.896v-3.944c-.408.272-1.02.544-1.904.748-.816.204-1.7.408-2.652.544-1.02.136-1.836.272-2.584.408-1.836.204-3.264.748-4.352 1.496-1.156.748-1.7 1.836-1.7 3.332 0 1.428.544 2.448 1.564 3.196 1.02.748 2.312 1.088 3.876 1.088zM595.1267 1068.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936zM601.8247 1106.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM654.9337 1068.994l-12.988 37.06h-11.56l-12.988-37.06h10.88l7.684 26.52h.408l7.684-26.52h10.88zM675.8657 1106.802c-3.808 0-7.072-.816-9.86-2.38-2.72-1.496-4.828-3.74-6.324-6.596-1.496-2.856-2.244-6.256-2.244-10.132 0-3.808.748-7.208 2.244-10.064 1.496-2.856 3.604-5.1 6.256-6.732 2.72-1.632 5.848-2.448 9.52-2.448 3.264 0 6.188.748 8.84 2.108s4.692 3.468 6.256 6.256c1.564 2.788 2.312 6.324 2.312 10.472v2.856h-25.228c0 2.788.748 4.964 2.244 6.596 1.496 1.564 3.604 2.38 6.12 2.38 1.768 0 3.264-.408 4.488-1.088 1.292-.748 2.176-1.836 2.652-3.196l9.52.612c-.748 3.4-2.584 6.188-5.508 8.228-2.924 2.108-6.732 3.128-11.288 3.128zm-8.228-23.052h15.572c0-2.176-.748-4.012-2.108-5.44-1.428-1.428-3.264-2.176-5.508-2.176s-4.148.748-5.576 2.244c-1.496 1.496-2.244 3.264-2.38 5.372zM726.6387 1070.83c-.204-1.972-1.02-3.468-2.516-4.556s-3.468-1.632-5.984-1.632-4.488.544-5.848 1.564c-1.36 1.088-2.04 2.38-2.04 4.012-.068 1.768.68 3.06 2.244 4.012 1.564.884 3.4 1.632 5.576 2.108l4.42 1.02c2.856.68 5.44 1.632 7.616 2.856 2.244 1.224 4.012 2.788 5.304 4.692 1.292 1.904 1.904 4.284 1.904 7.004 0 4.556-1.7 8.16-5.1 10.812-3.332 2.72-8.024 4.012-14.076 4.012-6.052 0-10.812-1.36-14.416-4.08-3.536-2.72-5.372-6.8-5.508-12.104h10.132c.136 2.448 1.156 4.352 2.924 5.576 1.768 1.224 4.012 1.836 6.732 1.836 2.652 0 4.76-.544 6.392-1.632 1.564-1.156 2.38-2.652 2.38-4.42 0-1.7-.748-2.992-2.176-3.876-1.496-.884-3.536-1.7-6.256-2.312l-5.372-1.36c-4.148-1.02-7.48-2.584-9.86-4.76-2.448-2.176-3.604-5.1-3.604-8.704 0-2.992.748-5.644 2.38-7.888 1.632-2.244 3.876-3.944 6.664-5.236 2.856-1.224 6.052-1.836 9.724-1.836 3.604 0 6.868.612 9.588 1.836 2.72 1.292 4.896 3.06 6.392 5.304 1.564 2.176 2.312 4.828 2.38 7.752h-9.996zM760.8987 1106.802c-3.808 0-7.072-.816-9.792-2.448-2.72-1.632-4.828-3.876-6.324-6.732-1.428-2.924-2.176-6.188-2.176-9.996 0-3.74.748-7.14 2.244-9.996 1.496-2.856 3.536-5.1 6.256-6.732 2.72-1.632 5.984-2.448 9.724-2.448 3.264 0 6.052.612 8.5 1.768 2.448 1.224 4.352 2.856 5.78 4.964 1.428 2.108 2.176 4.624 2.312 7.48h-9.656c-.272-1.836-1.02-3.332-2.176-4.488-1.156-1.088-2.72-1.7-4.556-1.7-2.38 0-4.352.952-5.78 2.924-1.428 1.904-2.176 4.624-2.176 8.092 0 3.536.748 6.324 2.176 8.228 1.428 1.972 3.332 2.924 5.78 2.924 1.768 0 3.264-.544 4.42-1.632 1.224-1.02 1.972-2.584 2.312-4.556h9.656c-.136 2.856-.884 5.304-2.244 7.48-1.428 2.176-3.332 3.876-5.712 5.032-2.448 1.224-5.304 1.836-8.568 1.836zM784.0427 1106.054v-37.06h9.996v6.46h.408c.68-2.312 1.768-4.08 3.4-5.236 1.564-1.224 3.4-1.768 5.508-1.768 1.156 0 2.176.136 3.196.34v9.112c-.476-.136-1.156-.272-1.972-.408-.884-.068-1.632-.136-2.38-.136-2.244 0-4.148.748-5.644 2.176-1.428 1.428-2.176 3.264-2.176 5.508v21.012h-10.336zM811.8367 1106.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM830.3347 1119.994v-51h10.2v6.188h.408c.476-1.02 1.156-2.04 1.972-3.06.884-1.02 2.04-1.904 3.4-2.584 1.428-.68 3.128-1.088 5.168-1.088 2.72 0 5.236.748 7.548 2.176 2.244 1.36 4.08 3.468 5.44 6.324 1.36 2.788 2.04 6.324 2.04 10.608 0 4.148-.612 7.616-1.972 10.472-1.36 2.856-3.128 4.964-5.44 6.46-2.244 1.428-4.76 2.176-7.616 2.176-1.972 0-3.672-.34-5.1-1.02-1.36-.612-2.516-1.496-3.4-2.448-.884-1.02-1.564-2.04-2.04-3.06h-.272v19.856h-10.336zm10.064-32.504c0 3.332.68 5.984 2.04 7.956 1.36 2.04 3.332 2.992 5.78 2.992 2.516 0 4.488-.952 5.78-2.992 1.36-2.04 2.04-4.692 2.04-7.956 0-3.196-.68-5.78-1.972-7.82-1.36-1.972-3.264-2.992-5.848-2.992-2.516 0-4.42.952-5.78 2.924-1.36 1.972-2.04 4.624-2.04 7.888zM893.0617 1068.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936z" fill="#65adf1"></path></g></g>', 1), Ld = [
  Dd
], Md = {
  key: 1,
  viewBox: "0 0 532 100",
  xmlns: "http://www.w3.org/2000/svg",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2"
}, Rd = /* @__PURE__ */ Fi('<g transform="translate(-1641.886 -310)"><path fill="none" d="M1642.22 310h531.337v100H1642.22z"></path><clipPath id="a1"><path d="M1642.22 310h531.337v100H1642.22z"></path></clipPath><g clip-path="url(#a1)"><g transform="matrix(.09766 0 0 .09766 1642.4300256 310.0000256)"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z" fill="none"></path><clipPath id="b"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z"></path></clipPath><g clip-path="url(#b)"><path d="M1024 0H0v1024h1024V0zM843 511.86v1.1c0 .26-.19.47-.45.49-33.36 3.13-59.48 30.24-59.48 64.41v136.95c0 9.56-2.01 18.8-5.64 27.23-10.35 24.07-33.84 41.57-61.16 41.57h-69.2l-.48-.6-269.18-337.33v337.93h-69.68c-36.89 0-66.8-29.91-66.8-66.8V577.86c0-34.17-26.11-61.28-59.48-64.41-.25-.02-.45-.23-.45-.49v-1.1c0-.25.19-.46.45-.49 33.24-3.24 59.22-31.02 59.22-65.11V307.19c0-9.29 1.9-18.14 5.33-26.18 10.18-23.88 33.87-40.62 61.47-40.62h69.66l.28.35 269.18 337.34V240.39h69.94c36.89 0 66.8 29.91 66.8 66.8v139.07c0 34.09 25.98 61.87 59.22 65.11.26.03.45.24.45.49z" fill="#fff"></path></g></g><path d="M1807.579 336.618v49.436h-9.044l-21.556-31.144h-.34v31.144h-10.472v-49.436h9.18l21.352 31.076h.408v-31.076h10.472zM1826.557 386.734c-3.536 0-6.46-.884-8.84-2.788-2.312-1.836-3.468-4.556-3.468-8.228 0-2.788.612-4.964 1.972-6.528 1.292-1.564 2.992-2.72 5.1-3.468 2.108-.748 4.42-1.224 6.868-1.428 3.196-.34 5.508-.68 6.868-1.02 1.428-.34 2.108-1.156 2.108-2.312v-.136c0-1.564-.476-2.72-1.428-3.604-.952-.816-2.312-1.224-4.08-1.224-1.836 0-3.332.408-4.42 1.224-1.088.748-1.836 1.836-2.176 3.06l-9.52-.816c.68-3.332 2.448-6.052 5.304-8.024 2.788-1.972 6.392-2.992 10.88-2.992 2.72 0 5.304.476 7.684 1.36 2.38.816 4.352 2.176 5.848 4.012 1.428 1.904 2.176 4.284 2.176 7.208v25.024h-9.724v-5.168h-.34c-.884 1.768-2.244 3.128-4.012 4.216-1.836 1.088-4.08 1.632-6.8 1.632zm2.924-7.072c2.244 0 4.148-.68 5.576-1.972 1.428-1.292 2.176-2.924 2.176-4.896v-3.944c-.408.272-1.02.544-1.904.748-.816.204-1.7.408-2.652.544-1.02.136-1.836.272-2.584.408-1.836.204-3.264.748-4.352 1.496-1.156.748-1.7 1.836-1.7 3.332 0 1.428.544 2.448 1.564 3.196 1.02.748 2.312 1.088 3.876 1.088zM1875.126 348.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936zM1881.824 386.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM1934.933 348.994l-12.988 37.06h-11.56l-12.988-37.06h10.88l7.684 26.52h.408l7.684-26.52h10.88zM1955.865 386.802c-3.808 0-7.072-.816-9.86-2.38-2.72-1.496-4.828-3.74-6.324-6.596-1.496-2.856-2.244-6.256-2.244-10.132 0-3.808.748-7.208 2.244-10.064 1.496-2.856 3.604-5.1 6.256-6.732 2.72-1.632 5.848-2.448 9.52-2.448 3.264 0 6.188.748 8.84 2.108s4.692 3.468 6.256 6.256c1.564 2.788 2.312 6.324 2.312 10.472v2.856h-25.228c0 2.788.748 4.964 2.244 6.596 1.496 1.564 3.604 2.38 6.12 2.38 1.768 0 3.264-.408 4.488-1.088 1.292-.748 2.176-1.836 2.652-3.196l9.52.612c-.748 3.4-2.584 6.188-5.508 8.228-2.924 2.108-6.732 3.128-11.288 3.128zm-8.228-23.052h15.572c0-2.176-.748-4.012-2.108-5.44-1.428-1.428-3.264-2.176-5.508-2.176s-4.148.748-5.576 2.244c-1.496 1.496-2.244 3.264-2.38 5.372zM2006.638 350.83c-.204-1.972-1.02-3.468-2.516-4.556s-3.468-1.632-5.984-1.632-4.488.544-5.848 1.564c-1.36 1.088-2.04 2.38-2.04 4.012-.068 1.768.68 3.06 2.244 4.012 1.564.884 3.4 1.632 5.576 2.108l4.42 1.02c2.856.68 5.44 1.632 7.616 2.856 2.244 1.224 4.012 2.788 5.304 4.692 1.292 1.904 1.904 4.284 1.904 7.004 0 4.556-1.7 8.16-5.1 10.812-3.332 2.72-8.024 4.012-14.076 4.012-6.052 0-10.812-1.36-14.416-4.08-3.536-2.72-5.372-6.8-5.508-12.104h10.132c.136 2.448 1.156 4.352 2.924 5.576 1.768 1.224 4.012 1.836 6.732 1.836 2.652 0 4.76-.544 6.392-1.632 1.564-1.156 2.38-2.652 2.38-4.42 0-1.7-.748-2.992-2.176-3.876-1.496-.884-3.536-1.7-6.256-2.312l-5.372-1.36c-4.148-1.02-7.48-2.584-9.86-4.76-2.448-2.176-3.604-5.1-3.604-8.704 0-2.992.748-5.644 2.38-7.888 1.632-2.244 3.876-3.944 6.664-5.236 2.856-1.224 6.052-1.836 9.724-1.836 3.604 0 6.868.612 9.588 1.836 2.72 1.292 4.896 3.06 6.392 5.304 1.564 2.176 2.312 4.828 2.38 7.752h-9.996zM2040.898 386.802c-3.808 0-7.072-.816-9.792-2.448-2.72-1.632-4.828-3.876-6.324-6.732-1.428-2.924-2.176-6.188-2.176-9.996 0-3.74.748-7.14 2.244-9.996 1.496-2.856 3.536-5.1 6.256-6.732 2.72-1.632 5.984-2.448 9.724-2.448 3.264 0 6.052.612 8.5 1.768 2.448 1.224 4.352 2.856 5.78 4.964 1.428 2.108 2.176 4.624 2.312 7.48h-9.656c-.272-1.836-1.02-3.332-2.176-4.488-1.156-1.088-2.72-1.7-4.556-1.7-2.38 0-4.352.952-5.78 2.924-1.428 1.904-2.176 4.624-2.176 8.092 0 3.536.748 6.324 2.176 8.228 1.428 1.972 3.332 2.924 5.78 2.924 1.768 0 3.264-.544 4.42-1.632 1.224-1.02 1.972-2.584 2.312-4.556h9.656c-.136 2.856-.884 5.304-2.244 7.48-1.428 2.176-3.332 3.876-5.712 5.032-2.448 1.224-5.304 1.836-8.568 1.836zM2064.042 386.054v-37.06h9.996v6.46h.408c.68-2.312 1.768-4.08 3.4-5.236 1.564-1.224 3.4-1.768 5.508-1.768 1.156 0 2.176.136 3.196.34v9.112c-.476-.136-1.156-.272-1.972-.408-.884-.068-1.632-.136-2.38-.136-2.244 0-4.148.748-5.644 2.176-1.428 1.428-2.176 3.264-2.176 5.508v21.012h-10.336zM2091.836 386.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM2110.334 399.994v-51h10.2v6.188h.408c.476-1.02 1.156-2.04 1.972-3.06.884-1.02 2.04-1.904 3.4-2.584 1.428-.68 3.128-1.088 5.168-1.088 2.72 0 5.236.748 7.548 2.176 2.244 1.36 4.08 3.468 5.44 6.324 1.36 2.788 2.04 6.324 2.04 10.608 0 4.148-.612 7.616-1.972 10.472-1.36 2.856-3.128 4.964-5.44 6.46-2.244 1.428-4.76 2.176-7.616 2.176-1.972 0-3.672-.34-5.1-1.02-1.36-.612-2.516-1.496-3.4-2.448-.884-1.02-1.564-2.04-2.04-3.06h-.272v19.856h-10.336zm10.064-32.504c0 3.332.68 5.984 2.04 7.956 1.36 2.04 3.332 2.992 5.78 2.992 2.516 0 4.488-.952 5.78-2.992 1.36-2.04 2.04-4.692 2.04-7.956 0-3.196-.68-5.78-1.972-7.82-1.36-1.972-3.264-2.992-5.848-2.992-2.516 0-4.42.952-5.78 2.924-1.36 1.972-2.04 4.624-2.04 7.888zM2173.061 348.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936z" fill="#fff" fill-rule="nonzero"></path></g></g>', 1), Bd = [
  Rd
], So = /* @__PURE__ */ L({
  __name: "NativeScriptLogo",
  props: {
    variant: String
  },
  setup(e) {
    return (t, n) => e.variant === "blue" ? (g(), b("svg", Nd, Ld)) : (g(), b("svg", Md, Bd));
  }
});
/*! @docsearch/js 3.3.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
function $o(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $o(Object(n), !0).forEach(function(r) {
      Hd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $o(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Vt(e) {
  return Vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vt(e);
}
function Hd(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function fr() {
  return fr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, fr.apply(this, arguments);
}
function zd(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(s, a) {
    if (s == null)
      return {};
    var l, u, c = {}, p = Object.keys(s);
    for (u = 0; u < p.length; u++)
      l = p[u], a.indexOf(l) >= 0 || (c[l] = s[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function On(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, s, a = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (a.push(i.value), !r || a.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, s = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw s;
        }
      }
      return a;
    }
  }(e, t) || Ss(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function kn(e) {
  return function(t) {
    if (Array.isArray(t))
      return pr(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || Ss(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Ss(e, t) {
  if (e) {
    if (typeof e == "string")
      return pr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pr(e, t) : void 0;
  }
}
function pr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var I, Rt, $s, Po, Ps, Sn = {}, Dr = [], Vd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ae(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Es(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ce(e, t, n) {
  var r, o, i, s = arguments, a = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 3)
    for (n = [n], i = 3; i < arguments.length; i++)
      n.push(s[i]);
  if (n != null && (a.children = n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return Bt(e, a, r, o, null);
}
function Bt(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++I.__v : o };
  return I.vnode != null && I.vnode(i), i;
}
function Ye(e) {
  return e.children;
}
function je(e, t) {
  this.props = e, this.context = t;
}
function Ft(e, t) {
  if (t == null)
    return e.__ ? Ft(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ft(e) : null;
}
function Cs(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Cs(e);
  }
}
function hr(e) {
  (!e.__d && (e.__d = !0) && Rt.push(e) && !$n.__r++ || Po !== I.debounceRendering) && ((Po = I.debounceRendering) || $s)($n);
}
function $n() {
  for (var e; $n.__r = Rt.length; )
    e = Rt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Rt = [], e.some(function(t) {
      var n, r, o, i, s, a;
      t.__d && (s = (i = (n = t).__v).__e, (a = n.__P) && (r = [], (o = Ae({}, i)).__v = i.__v + 1, Lr(a, i, o, n.__n, a.ownerSVGElement !== void 0, i.__h != null ? [s] : null, r, s == null ? Ft(i) : s, i.__h), As(r, i), i.__e != s && Cs(i)));
    });
}
function js(e, t, n, r, o, i, s, a, l, u) {
  var c, p, f, d, v, _, w, y = r && r.__k || Dr, S = y.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((d = n.__k[c] = (d = t[c]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" ? Bt(null, d, null, null, d) : Array.isArray(d) ? Bt(Ye, { children: d }, null, null, null) : d.__b > 0 ? Bt(d.type, d.props, d.key, null, d.__v) : d) != null) {
      if (d.__ = n, d.__b = n.__b + 1, (f = y[c]) === null || f && d.key == f.key && d.type === f.type)
        y[c] = void 0;
      else
        for (p = 0; p < S; p++) {
          if ((f = y[p]) && d.key == f.key && d.type === f.type) {
            y[p] = void 0;
            break;
          }
          f = null;
        }
      Lr(e, d, f = f || Sn, o, i, s, a, l, u), v = d.__e, (p = d.ref) && f.ref != p && (w || (w = []), f.ref && w.push(f.ref, null, d), w.push(p, d.__c || v, d)), v != null ? (_ == null && (_ = v), typeof d.type == "function" && d.__k != null && d.__k === f.__k ? d.__d = l = Is(d, l, e) : l = Ts(e, d, f, y, v, l), u || n.type !== "option" ? typeof n.type == "function" && (n.__d = l) : e.value = "") : l && f.__e == l && l.parentNode != e && (l = Ft(f));
    }
  for (n.__e = _, c = S; c--; )
    y[c] != null && (typeof n.type == "function" && y[c].__e != null && y[c].__e == n.__d && (n.__d = Ft(r, c + 1)), Ds(y[c], y[c]));
  if (w)
    for (c = 0; c < w.length; c++)
      Ns(w[c], w[++c], w[++c]);
}
function Is(e, t, n) {
  var r, o;
  for (r = 0; r < e.__k.length; r++)
    (o = e.__k[r]) && (o.__ = e, t = typeof o.type == "function" ? Is(o, t, n) : Ts(n, o, o, e.__k, o.__e, t));
  return t;
}
function Le(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
    Le(n, t);
  }) : t.push(e)), t;
}
function Ts(e, t, n, r, o, i) {
  var s, a, l;
  if (t.__d !== void 0)
    s = t.__d, t.__d = void 0;
  else if (n == null || o != i || o.parentNode == null)
    e:
      if (i == null || i.parentNode !== e)
        e.appendChild(o), s = null;
      else {
        for (a = i, l = 0; (a = a.nextSibling) && l < r.length; l += 2)
          if (a == o)
            break e;
        e.insertBefore(o, i), s = i;
      }
  return s !== void 0 ? s : o.nextSibling;
}
function Eo(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Vd.test(t) ? n : n + "px";
}
function en(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Eo(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Eo(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? jo : Co, i) : e.removeEventListener(t, i ? jo : Co, i);
    else if (t !== "dangerouslySetInnerHTML") {
      if (o)
        t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function Co(e) {
  this.l[e.type + !1](I.event ? I.event(e) : e);
}
function jo(e) {
  this.l[e.type + !0](I.event ? I.event(e) : e);
}
function Lr(e, t, n, r, o, i, s, a, l) {
  var u, c, p, f, d, v, _, w, y, S, k, O = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, i = [a]), (u = I.__b) && u(t);
  try {
    e:
      if (typeof O == "function") {
        if (w = t.props, y = (u = O.contextType) && r[u.__c], S = u ? y ? y.props.value : u.__ : r, n.__c ? _ = (c = t.__c = n.__c).__ = c.__E : ("prototype" in O && O.prototype.render ? t.__c = c = new O(w, S) : (t.__c = c = new je(w, S), c.constructor = O, c.render = Ud), y && y.sub(c), c.props = w, c.state || (c.state = {}), c.context = S, c.__n = r, p = c.__d = !0, c.__h = []), c.__s == null && (c.__s = c.state), O.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Ae({}, c.__s)), Ae(c.__s, O.getDerivedStateFromProps(w, c.__s))), f = c.props, d = c.state, p)
          O.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (O.getDerivedStateFromProps == null && w !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(w, S), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(w, c.__s, S) === !1 || t.__v === n.__v) {
            c.props = w, c.state = c.__s, t.__v !== n.__v && (c.__d = !1), c.__v = t, t.__e = n.__e, t.__k = n.__k, c.__h.length && s.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(w, c.__s, S), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, d, v);
          });
        }
        c.context = S, c.props = w, c.state = c.__s, (u = I.__r) && u(t), c.__d = !1, c.__v = t, c.__P = e, u = c.render(c.props, c.state, c.context), c.state = c.__s, c.getChildContext != null && (r = Ae(Ae({}, r), c.getChildContext())), p || c.getSnapshotBeforeUpdate == null || (v = c.getSnapshotBeforeUpdate(f, d)), k = u != null && u.type === Ye && u.key == null ? u.props.children : u, js(e, Array.isArray(k) ? k : [k], t, n, r, o, i, s, a, l), c.base = t.__e, t.__h = null, c.__h.length && s.push(c), _ && (c.__E = c.__ = null), c.__e = !1;
      } else
        i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Fd(n.__e, t, n, r, o, i, s, l);
    (u = I.diffed) && u(t);
  } catch ($) {
    t.__v = null, (l || i != null) && (t.__e = a, t.__h = !!l, i[i.indexOf(a)] = null), I.__e($, t, n);
  }
}
function As(e, t) {
  I.__c && I.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      I.__e(r, n.__v);
    }
  });
}
function Fd(e, t, n, r, o, i, s, a) {
  var l, u, c, p, f = n.props, d = t.props, v = t.type, _ = 0;
  if (v === "svg" && (o = !0), i != null) {
    for (; _ < i.length; _++)
      if ((l = i[_]) && (l === e || (v ? l.localName == v : l.nodeType == 3))) {
        e = l, i[_] = null;
        break;
      }
  }
  if (e == null) {
    if (v === null)
      return document.createTextNode(d);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, d.is && d), i = null, a = !1;
  }
  if (v === null)
    f === d || a && e.data === d || (e.data = d);
  else {
    if (i = i && Dr.slice.call(e.childNodes), u = (f = n.props || Sn).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (f = {}, p = 0; p < e.attributes.length; p++)
          f[e.attributes[p].name] = e.attributes[p].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (function(w, y, S, k, O) {
      var $;
      for ($ in S)
        $ === "children" || $ === "key" || $ in y || en(w, $, null, S[$], k);
      for ($ in y)
        O && typeof y[$] != "function" || $ === "children" || $ === "key" || $ === "value" || $ === "checked" || S[$] === y[$] || en(w, $, y[$], S[$], k);
    }(e, d, f, o, a), c)
      t.__k = [];
    else if (_ = t.props.children, js(e, Array.isArray(_) ? _ : [_], t, n, r, o && v !== "foreignObject", i, s, e.firstChild, a), i != null)
      for (_ = i.length; _--; )
        i[_] != null && Es(i[_]);
    a || ("value" in d && (_ = d.value) !== void 0 && (_ !== e.value || v === "progress" && !_) && en(e, "value", _, f.value, !1), "checked" in d && (_ = d.checked) !== void 0 && _ !== e.checked && en(e, "checked", _, f.checked, !1));
  }
  return e;
}
function Ns(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    I.__e(r, n);
  }
}
function Ds(e, t, n) {
  var r, o, i;
  if (I.unmount && I.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Ns(r, null, t)), n || typeof e.type == "function" || (n = (o = e.__e) != null), e.__e = e.__d = void 0, (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        I.__e(s, t);
      }
    r.base = r.__P = null;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Ds(r[i], t, n);
  o != null && Es(o);
}
function Ud(e, t, n) {
  return this.constructor(e, n);
}
function Ut(e, t, n) {
  var r, o, i;
  I.__ && I.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], Lr(t, e = (!r && n || t).__k = Ce(Ye, null, [e]), o || Sn, Sn, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Dr.slice.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r), As(i, e);
}
function Ls(e, t) {
  Ut(e, t, Ls);
}
function qd(e, t, n) {
  var r, o, i, s = arguments, a = Ae({}, e.props);
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 3)
    for (n = [n], i = 3; i < arguments.length; i++)
      n.push(s[i]);
  return n != null && (a.children = n), Bt(e.type, a, r || e.key, o || e.ref, null);
}
I = { __e: function(e, t) {
  for (var n, r, o; t = t.__; )
    if ((n = t.__c) && !n.__)
      try {
        if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), n.componentDidCatch != null && (n.componentDidCatch(e), o = n.__d), o)
          return n.__E = n;
      } catch (i) {
        e = i;
      }
  throw e;
}, __v: 0 }, je.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ae({}, this.state), typeof e == "function" && (e = e(Ae({}, n), this.props)), e && Ae(n, e), e != null && this.__v && (t && this.__h.push(t), hr(this));
}, je.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), hr(this));
}, je.prototype.render = Ye, Rt = [], $s = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $n.__r = 0, Ps = 0;
var St, me, Io, _t = 0, mr = [], To = I.__b, Ao = I.__r, No = I.diffed, Do = I.__c, Lo = I.unmount;
function Zt(e, t) {
  I.__h && I.__h(me, e, _t || t), _t = 0;
  var n = me.__H || (me.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function Ms(e) {
  return _t = 1, Rs(Hs, e);
}
function Rs(e, t, n) {
  var r = Zt(St++, 2);
  return r.t = e, r.__c || (r.__ = [n ? n(t) : Hs(void 0, t), function(o) {
    var i = r.t(r.__[0], o);
    r.__[0] !== i && (r.__ = [i, r.__[1]], r.__c.setState({}));
  }], r.__c = me), r.__;
}
function Bs(e, t) {
  var n = Zt(St++, 3);
  !I.__s && Mr(n.__H, t) && (n.__ = e, n.__H = t, me.__H.__h.push(n));
}
function Mo(e, t) {
  var n = Zt(St++, 4);
  !I.__s && Mr(n.__H, t) && (n.__ = e, n.__H = t, me.__h.push(n));
}
function Qn(e, t) {
  var n = Zt(St++, 7);
  return Mr(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function Wd() {
  mr.forEach(function(e) {
    if (e.__P)
      try {
        e.__H.__h.forEach(dn), e.__H.__h.forEach(vr), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], I.__e(t, e.__v);
      }
  }), mr = [];
}
I.__b = function(e) {
  me = null, To && To(e);
}, I.__r = function(e) {
  Ao && Ao(e), St = 0;
  var t = (me = e.__c).__H;
  t && (t.__h.forEach(dn), t.__h.forEach(vr), t.__h = []);
}, I.diffed = function(e) {
  No && No(e);
  var t = e.__c;
  t && t.__H && t.__H.__h.length && (mr.push(t) !== 1 && Io === I.requestAnimationFrame || ((Io = I.requestAnimationFrame) || function(n) {
    var r, o = function() {
      clearTimeout(i), Ro && cancelAnimationFrame(r), setTimeout(n);
    }, i = setTimeout(o, 100);
    Ro && (r = requestAnimationFrame(o));
  })(Wd)), me = void 0;
}, I.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(dn), n.__h = n.__h.filter(function(r) {
        return !r.__ || vr(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], I.__e(r, n.__v);
    }
  }), Do && Do(e, t);
}, I.unmount = function(e) {
  Lo && Lo(e);
  var t = e.__c;
  if (t && t.__H)
    try {
      t.__H.__.forEach(dn);
    } catch (n) {
      I.__e(n, t.__v);
    }
};
var Ro = typeof requestAnimationFrame == "function";
function dn(e) {
  var t = me;
  typeof e.__c == "function" && e.__c(), me = t;
}
function vr(e) {
  var t = me;
  e.__c = e.__(), me = t;
}
function Mr(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Hs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zs(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function _r(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function gr(e) {
  this.props = e;
}
(gr.prototype = new je()).isPureReactComponent = !0, gr.prototype.shouldComponentUpdate = function(e, t) {
  return _r(this.props, e) || _r(this.state, t);
};
var Bo = I.__b;
I.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Bo && Bo(e);
};
var Kd = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911, Ho = function(e, t) {
  return e == null ? null : Le(Le(e).map(t));
}, Jd = { map: Ho, forEach: Ho, count: function(e) {
  return e ? Le(e).length : 0;
}, only: function(e) {
  var t = Le(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: Le }, Gd = I.__e;
function fn() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Vs(e) {
  var t = e.__.__c;
  return t && t.__e && t.__e(e);
}
function Tt() {
  this.u = null, this.o = null;
}
I.__e = function(e, t, n) {
  if (e.then) {
    for (var r, o = t; o = o.__; )
      if ((r = o.__c) && r.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
  }
  Gd(e, t, n);
}, (fn.prototype = new je()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = Vs(r.__v), i = !1, s = function() {
    i || (i = !0, n.componentWillUnmount = n.__c, o ? o(a) : a());
  };
  n.__c = n.componentWillUnmount, n.componentWillUnmount = function() {
    s(), n.__c && n.__c();
  };
  var a = function() {
    if (!--r.__u) {
      if (r.state.__e) {
        var u = r.state.__e;
        r.__v.__k[0] = function p(f, d, v) {
          return f && (f.__v = null, f.__k = f.__k && f.__k.map(function(_) {
            return p(_, d, v);
          }), f.__c && f.__c.__P === d && (f.__e && v.insertBefore(f.__e, f.__d), f.__c.__e = !0, f.__c.__P = v)), f;
        }(u, u.__c.__P, u.__c.__O);
      }
      var c;
      for (r.setState({ __e: r.__b = null }); c = r.t.pop(); )
        c.forceUpdate();
    }
  }, l = t.__h === !0;
  r.__u++ || l || r.setState({ __e: r.__b = r.__v.__k[0] }), e.then(s, s);
}, fn.prototype.componentWillUnmount = function() {
  this.t = [];
}, fn.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = function i(s, a, l) {
        return s && (s.__c && s.__c.__H && (s.__c.__H.__.forEach(function(u) {
          typeof u.__c == "function" && u.__c();
        }), s.__c.__H = null), (s = zs({}, s)).__c != null && (s.__c.__P === l && (s.__c.__P = a), s.__c = null), s.__k = s.__k && s.__k.map(function(u) {
          return i(u, a, l);
        })), s;
      }(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__e && Ce(Ye, null, e.fallback);
  return o && (o.__h = null), [Ce(Ye, null, t.__e ? null : e.children), o];
};
var zo = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function Qd(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Yd(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    Ut(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), Ut(Ce(Qd, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function Fs(e, t) {
  return Ce(Yd, { __v: e, i: t });
}
(Tt.prototype = new je()).__e = function(e) {
  var t = this, n = Vs(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), zo(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Tt.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Le(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Tt.prototype.componentDidUpdate = Tt.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    zo(e, n, t);
  });
};
var Us = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Zd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Xd = function(e) {
  return (typeof Symbol < "u" && Vt(Symbol()) == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e);
};
function qs(e, t, n) {
  return t.__k == null && (t.textContent = ""), Ut(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
je.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(je.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Vo = I.event;
function ef() {
}
function tf() {
  return this.cancelBubble;
}
function nf() {
  return this.defaultPrevented;
}
I.event = function(e) {
  return Vo && (e = Vo(e)), e.persist = ef, e.isPropagationStopped = tf, e.isDefaultPrevented = nf, e.nativeEvent = e;
};
var Ws, Fo = { configurable: !0, get: function() {
  return this.class;
} }, Uo = I.vnode;
I.vnode = function(e) {
  var t = e.type, n = e.props, r = n;
  if (typeof t == "string") {
    for (var o in r = {}, n) {
      var i = n[o];
      o === "value" && "defaultValue" in n && i == null || (o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && i === !0 ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Xd(n.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : Zd.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i === null && (i = void 0), r[o] = i);
    }
    t == "select" && r.multiple && Array.isArray(r.value) && (r.value = Le(n.children).forEach(function(s) {
      s.props.selected = r.value.indexOf(s.props.value) != -1;
    })), t == "select" && r.defaultValue != null && (r.value = Le(n.children).forEach(function(s) {
      s.props.selected = r.multiple ? r.defaultValue.indexOf(s.props.value) != -1 : r.defaultValue == s.props.value;
    })), e.props = r;
  }
  t && n.class != n.className && (Fo.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", Fo)), e.$$typeof = Us, Uo && Uo(e);
};
var qo = I.__r;
I.__r = function(e) {
  qo && qo(e), Ws = e.__c;
};
var rf = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Ws.__n[e.__c].props.value;
} } } };
(typeof performance > "u" ? "undefined" : Vt(performance)) == "object" && typeof performance.now == "function" && performance.now.bind(performance);
function Wo(e) {
  return !!e && e.$$typeof === Us;
}
var m = { useState: Ms, useReducer: Rs, useEffect: Bs, useLayoutEffect: Mo, useRef: function(e) {
  return _t = 5, Qn(function() {
    return { current: e };
  }, []);
}, useImperativeHandle: function(e, t, n) {
  _t = 6, Mo(function() {
    typeof e == "function" ? e(t()) : e && (e.current = t());
  }, n == null ? n : n.concat(e));
}, useMemo: Qn, useCallback: function(e, t) {
  return _t = 8, Qn(function() {
    return e;
  }, t);
}, useContext: function(e) {
  var t = me.context[e.__c], n = Zt(St++, 9);
  return n.__c = e, t ? (n.__ == null && (n.__ = !0, t.sub(me)), t.props.value) : e.__;
}, useDebugValue: function(e, t) {
  I.useDebugValue && I.useDebugValue(t ? t(e) : e);
}, version: "16.8.0", Children: Jd, render: qs, hydrate: function(e, t, n) {
  return Ls(e, t), typeof n == "function" && n(), e ? e.__c : null;
}, unmountComponentAtNode: function(e) {
  return !!e.__k && (Ut(null, e), !0);
}, createPortal: Fs, createElement: Ce, createContext: function(e, t) {
  var n = { __c: t = "__cC" + Ps++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.some(hr);
    }, this.sub = function(s) {
      o.push(s);
      var a = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        o.splice(o.indexOf(s), 1), a && a.call(s);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}, createFactory: function(e) {
  return Ce.bind(null, e);
}, cloneElement: function(e) {
  return Wo(e) ? qd.apply(null, arguments) : e;
}, createRef: function() {
  return { current: null };
}, Fragment: Ye, isValidElement: Wo, findDOMNode: function(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}, Component: je, PureComponent: gr, memo: function(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : _r(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, Ce(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}, forwardRef: function(e) {
  function t(n, r) {
    var o = zs({}, n);
    return delete o.ref, e(o, (r = n.ref || r) && (Vt(r) != "object" || "current" in r) ? r : null);
  }
  return t.$$typeof = Kd, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}, unstable_batchedUpdates: function(e, t) {
  return e(t);
}, StrictMode: Ye, Suspense: fn, SuspenseList: Tt, lazy: function(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(s) {
      n = s.default || s;
    }, function(s) {
      r = s;
    }), r)
      throw r;
    if (!n)
      throw t;
    return Ce(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: rf };
function of() {
  return m.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, m.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
}
function Ks() {
  return m.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
var sf = ["translations"];
function yr() {
  return yr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yr.apply(this, arguments);
}
function af(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, s, a = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (a.push(i.value), !r || a.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, s = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw s;
        }
      }
      return a;
    }
  }(e, t) || function(n, r) {
    if (!!n) {
      if (typeof n == "string")
        return Ko(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return Ko(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Ko(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function lf(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(s, a) {
    if (s == null)
      return {};
    var l, u, c = {}, p = Object.keys(s);
    for (u = 0; u < p.length; u++)
      l = p[u], a.indexOf(l) >= 0 || (c[l] = s[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var cf = m.forwardRef(function(e, t) {
  var n = e.translations, r = n === void 0 ? {} : n, o = lf(e, sf), i = r.buttonText, s = i === void 0 ? "Search" : i, a = r.buttonAriaLabel, l = a === void 0 ? "Search" : a, u = af(Ms(null), 2), c = u[0], p = u[1];
  return Bs(function() {
    typeof navigator < "u" && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? p("\u2318") : p("Ctrl"));
  }, []), m.createElement("button", yr({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": l }, o, { ref: t }), m.createElement("span", { className: "DocSearch-Button-Container" }, m.createElement(Ks, null), m.createElement("span", { className: "DocSearch-Button-Placeholder" }, s)), m.createElement("span", { className: "DocSearch-Button-Keys" }, c !== null && m.createElement(m.Fragment, null, m.createElement("kbd", { className: "DocSearch-Button-Key" }, c === "Ctrl" ? m.createElement(of, null) : c), m.createElement("kbd", { className: "DocSearch-Button-Key" }, "K"))));
});
function uf(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, s, a = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (a.push(i.value), !r || a.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, s = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw s;
        }
      }
      return a;
    }
  }(e, t) || function(n, r) {
    if (!!n) {
      if (typeof n == "string")
        return Jo(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return Jo(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Jo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function br(e) {
  return br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, br(e);
}
function Pn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  if (process.env.NODE_ENV === "production" || !e || br(e) !== "object")
    return e;
  if (t.has(e))
    return "[Circular]";
  var n = t.add(e);
  return Array.isArray(e) ? e.map(function(r) {
    return Pn(r, n);
  }) : Object.fromEntries(Object.entries(e).map(function(r) {
    var o = uf(r, 2);
    return [o[0], Pn(o[1], n)];
  }));
}
function qt(e) {
  return e.reduce(function(t, n) {
    return t.concat(n);
  }, []);
}
var df = 0;
function wr(e) {
  return e.collections.length === 0 ? 0 : e.collections.reduce(function(t, n) {
    return t + n.items.length;
  }, 0);
}
function Wt(e, t) {
  if (process.env.NODE_ENV !== "production" && !e)
    throw new Error("[Autocomplete] ".concat(typeof t == "function" ? t() : t));
}
var Js = function() {
}, ff = [{ segment: "autocomplete-core", version: "1.7.2" }], Go = { current: {} };
function pf(e) {
  process.env.NODE_ENV !== "production" && function(t, n) {
    if (process.env.NODE_ENV !== "production" && !t) {
      var r = n.trim();
      Go.current[r] || (Go.current[r] = !0, console.warn("[Autocomplete] ".concat(r)));
    }
  }(!e.debug, "The `debug` option is meant for development debugging and should not be used in production.");
}
function pn(e, t) {
  var n = t;
  return { then: function(r, o) {
    return pn(e.then(tn(r, n, e), tn(o, n, e)), n);
  }, catch: function(r) {
    return pn(e.catch(tn(r, n, e)), n);
  }, finally: function(r) {
    return r && n.onCancelList.push(r), pn(e.finally(tn(r && function() {
      return n.onCancelList = [], r();
    }, n, e)), n);
  }, cancel: function() {
    n.isCanceled = !0;
    var r = n.onCancelList;
    n.onCancelList = [], r.forEach(function(o) {
      o();
    });
  }, isCanceled: function() {
    return n.isCanceled === !0;
  } };
}
function Qo(e) {
  return pn(e, { isCanceled: !1, onCancelList: [] });
}
function tn(e, t, n) {
  return e ? function(r) {
    return t.isCanceled ? r : e(r);
  } : n;
}
function Yo(e, t, n, r) {
  if (!n)
    return null;
  if (e < 0 && (t === null || r !== null && t === 0))
    return n + e;
  var o = (t === null ? -1 : t) + e;
  return o <= -1 || o >= n ? r === null ? null : 0 : o;
}
function Zo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function hf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function xr(e) {
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e);
}
function mf(e, t) {
  var n = [];
  return Promise.resolve(e(t)).then(function(r) {
    return Wt(Array.isArray(r), function() {
      return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(xr(r)), `:

`).concat(JSON.stringify(Pn(r), null, 2));
    }), Promise.all(r.filter(function(o) {
      return Boolean(o);
    }).map(function(o) {
      if (Wt(typeof o.sourceId == "string", "A source must provide a `sourceId` string."), n.includes(o.sourceId))
        throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(o.sourceId), " is not unique."));
      n.push(o.sourceId);
      var i = function(s) {
        for (var a = 1; a < arguments.length; a++) {
          var l = arguments[a] != null ? arguments[a] : {};
          a % 2 ? Zo(Object(l), !0).forEach(function(u) {
            hf(s, u, l[u]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l)) : Zo(Object(l)).forEach(function(u) {
            Object.defineProperty(s, u, Object.getOwnPropertyDescriptor(l, u));
          });
        }
        return s;
      }({ getItemInputValue: function(s) {
        return s.state.query;
      }, getItemUrl: function() {
      }, onSelect: function(s) {
        (0, s.setIsOpen)(!1);
      }, onActive: Js }, o);
      return Promise.resolve(i);
    }));
  });
}
function ht(e) {
  var t = function(o) {
    var i = o.collections.map(function(s) {
      return s.items.length;
    }).reduce(function(s, a, l) {
      var u = (s[l - 1] || 0) + a;
      return s.push(u), s;
    }, []).reduce(function(s, a) {
      return a <= o.activeItemId ? s + 1 : s;
    }, 0);
    return o.collections[i];
  }(e);
  if (!t)
    return null;
  var n = t.items[function(o) {
    for (var i = o.state, s = o.collection, a = !1, l = 0, u = 0; a === !1; ) {
      var c = i.collections[l];
      if (c === s) {
        a = !0;
        break;
      }
      u += c.items.length, l++;
    }
    return i.activeItemId - u;
  }({ state: e, collection: t })], r = t.source;
  return { item: n, itemInputValue: r.getItemInputValue({ item: n, state: e }), itemUrl: r.getItemUrl({ item: n, state: e }), source: r };
}
var vf = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
function Xo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function nn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xo(Object(n), !0).forEach(function(r) {
      _f(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ei(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function gf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yf(e, t, n) {
  var r, o = t.initialState;
  return { getState: function() {
    return o;
  }, dispatch: function(i, s) {
    var a = function(l) {
      for (var u = 1; u < arguments.length; u++) {
        var c = arguments[u] != null ? arguments[u] : {};
        u % 2 ? ei(Object(c), !0).forEach(function(p) {
          gf(l, p, c[p]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : ei(Object(c)).forEach(function(p) {
          Object.defineProperty(l, p, Object.getOwnPropertyDescriptor(c, p));
        });
      }
      return l;
    }({}, o);
    o = e(o, { type: i, props: t, payload: s }), n({ state: o, prevState: a });
  }, pendingRequests: (r = [], { add: function(i) {
    return r.push(i), i.finally(function() {
      r = r.filter(function(s) {
        return s !== i;
      });
    });
  }, cancelAll: function() {
    r.forEach(function(i) {
      return i.cancel();
    });
  }, isEmpty: function() {
    return r.length === 0;
  } }) };
}
function ti(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ti(Object(n), !0).forEach(function(r) {
      bf(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ti(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function bf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wf(e) {
  return function(t) {
    if (Array.isArray(t))
      return Yn(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (!!t) {
      if (typeof t == "string")
        return Yn(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return Yn(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Yn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ni(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ni(Object(n), !0).forEach(function(r) {
      xf(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ni(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function xf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ri(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function on(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ri(Object(n), !0).forEach(function(r) {
      Gs(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ri(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Gs(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Or(e) {
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
function Of(e) {
  return function(t) {
    if (Array.isArray(t))
      return Zn(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (!!t) {
      if (typeof t == "string")
        return Zn(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return Zn(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Zn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function oi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ii(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oi(Object(n), !0).forEach(function(r) {
      kf(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function kf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function sn(e) {
  return Boolean(e.execute);
}
function Sf(e, t) {
  return n = e, Boolean(n == null ? void 0 : n.execute) ? ii(ii({}, e), {}, { requests: e.queries.map(function(r) {
    return { query: r, sourceId: t, transformResponse: e.transformResponse };
  }) }) : { items: e, sourceId: t };
  var n;
}
function $f(e) {
  var t = e.reduce(function(n, r) {
    if (!sn(r))
      return n.push(r), n;
    var o = r.searchClient, i = r.execute, s = r.requesterId, a = r.requests, l = n.find(function(p) {
      return sn(r) && sn(p) && p.searchClient === o && Boolean(s) && p.requesterId === s;
    });
    if (l) {
      var u;
      (u = l.items).push.apply(u, Of(a));
    } else {
      var c = { execute: i, requesterId: s, items: a, searchClient: o };
      n.push(c);
    }
    return n;
  }, []).map(function(n) {
    if (!sn(n))
      return Promise.resolve(n);
    var r = n, o = r.execute, i = r.items;
    return o({ searchClient: r.searchClient, requests: i });
  });
  return Promise.all(t).then(function(n) {
    return qt(n);
  });
}
function Pf(e, t) {
  return t.map(function(n) {
    var r = e.filter(function(a) {
      return a.sourceId === n.sourceId;
    }), o = r.map(function(a) {
      return a.items;
    }), i = r[0].transformResponse, s = i ? i(function(a) {
      var l = a.map(function(u) {
        var c;
        return nn(nn({}, u), {}, { hits: (c = u.hits) === null || c === void 0 ? void 0 : c.map(function(p) {
          return nn(nn({}, p), {}, { __autocomplete_indexName: u.index, __autocomplete_queryID: u.queryID });
        }) });
      });
      return { results: l, hits: l.map(function(u) {
        return u.hits;
      }).filter(Boolean), facetHits: l.map(function(u) {
        var c;
        return (c = u.facetHits) === null || c === void 0 ? void 0 : c.map(function(p) {
          return { label: p.value, count: p.count, _highlightResult: { label: { value: p.highlighted } } };
        });
      }).filter(Boolean) };
    }(o)) : o;
    return Wt(Array.isArray(s), function() {
      return 'The `getItems` function from source "'.concat(n.sourceId, '" must return an array of items but returned type ').concat(JSON.stringify(Or(s)), `:

`).concat(JSON.stringify(Pn(s), null, 2), `.

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`);
    }), Wt(s.every(Boolean), 'The `getItems` function from source "'.concat(n.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), `.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`)), { source: n, items: s };
  });
}
var Ef = ["event", "nextState", "props", "query", "refresh", "store"];
function si(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? si(Object(n), !0).forEach(function(r) {
      Cf(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : si(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Cf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function jf(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(s, a) {
    if (s == null)
      return {};
    var l, u, c = {}, p = Object.keys(s);
    for (u = 0; u < p.length; u++)
      l = p[u], a.indexOf(l) >= 0 || (c[l] = s[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var ai, Xn, an, jt = null, li = (ai = -1, Xn = -1, an = void 0, function(e) {
  var t = ++ai;
  return Promise.resolve(e).then(function(n) {
    return an && t < Xn ? an : (Xn = t, an = n, n);
  });
});
function pt(e) {
  var t = e.event, n = e.nextState, r = n === void 0 ? {} : n, o = e.props, i = e.query, s = e.refresh, a = e.store, l = jf(e, Ef);
  jt && o.environment.clearTimeout(jt);
  var u = l.setCollections, c = l.setIsOpen, p = l.setQuery, f = l.setActiveItemId, d = l.setStatus;
  if (p(i), f(o.defaultActiveItemId), !i && o.openOnFocus === !1) {
    var v, _ = a.getState().collections.map(function(S) {
      return Ct(Ct({}, S), {}, { items: [] });
    });
    d("idle"), u(_), c((v = r.isOpen) !== null && v !== void 0 ? v : o.shouldPanelOpen({ state: a.getState() }));
    var w = Qo(li(_).then(function() {
      return Promise.resolve();
    }));
    return a.pendingRequests.add(w);
  }
  d("loading"), jt = o.environment.setTimeout(function() {
    d("stalled");
  }, o.stallThreshold);
  var y = Qo(li(o.getSources(Ct({ query: i, refresh: s, state: a.getState() }, l)).then(function(S) {
    return Promise.all(S.map(function(k) {
      return Promise.resolve(k.getItems(Ct({ query: i, refresh: s, state: a.getState() }, l))).then(function(O) {
        return Sf(O, k.sourceId);
      });
    })).then($f).then(function(k) {
      return Pf(k, S);
    }).then(function(k) {
      return function(O) {
        var $ = O.collections, D = O.props, E = O.state, A = $.reduce(function(C, Z) {
          return on(on({}, C), {}, Gs({}, Z.source.sourceId, on(on({}, Z.source), {}, { getItems: function() {
            return qt(Z.items);
          } })));
        }, {});
        return qt(D.reshape({ sources: Object.values(A), sourcesBySourceId: A, state: E })).filter(Boolean).map(function(C) {
          return { source: C, items: C.getItems() };
        });
      }({ collections: k, props: o, state: a.getState() });
    });
  }))).then(function(S) {
    var k;
    d("idle"), u(S);
    var O = o.shouldPanelOpen({ state: a.getState() });
    c((k = r.isOpen) !== null && k !== void 0 ? k : o.openOnFocus && !i && O || O);
    var $ = ht(a.getState());
    if (a.getState().activeItemId !== null && $) {
      var D = $.item, E = $.itemInputValue, A = $.itemUrl, C = $.source;
      C.onActive(Ct({ event: t, item: D, itemInputValue: E, itemUrl: A, refresh: s, source: C, state: a.getState() }, l));
    }
  }).finally(function() {
    d("idle"), jt && o.environment.clearTimeout(jt);
  });
  return a.pendingRequests.add(y);
}
var If = ["event", "props", "refresh", "store"];
function ci(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ci(Object(n), !0).forEach(function(r) {
      Tf(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ci(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Tf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Af(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(s, a) {
    if (s == null)
      return {};
    var l, u, c = {}, p = Object.keys(s);
    for (u = 0; u < p.length; u++)
      l = p[u], a.indexOf(l) >= 0 || (c[l] = s[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var Nf = ["props", "refresh", "store"], Df = ["inputElement", "formElement", "panelElement"], Lf = ["inputElement"], Mf = ["inputElement", "maxLength"], Rf = ["item", "source"];
function ui(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function he(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ui(Object(n), !0).forEach(function(r) {
      Bf(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ui(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Bf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function It(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(s, a) {
    if (s == null)
      return {};
    var l, u, c = {}, p = Object.keys(s);
    for (u = 0; u < p.length; u++)
      l = p[u], a.indexOf(l) >= 0 || (c[l] = s[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Hf(e) {
  var t = e.props, n = e.refresh, r = e.store, o = It(e, Nf);
  return { getEnvironmentProps: function(i) {
    var s = i.inputElement, a = i.formElement, l = i.panelElement;
    function u(c) {
      !r.getState().isOpen && r.pendingRequests.isEmpty() || c.target === s || [a, l].some(function(p) {
        return f = p, d = c.target, f === d || f.contains(d);
        var f, d;
      }) === !1 && (r.dispatch("blur", null), t.debug || r.pendingRequests.cancelAll());
    }
    return he({ onTouchStart: u, onMouseDown: u, onTouchMove: function(c) {
      r.getState().isOpen !== !1 && s === t.environment.document.activeElement && c.target !== s && s.blur();
    } }, It(i, Df));
  }, getRootProps: function(i) {
    return he({ role: "combobox", "aria-expanded": r.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": r.getState().isOpen ? "".concat(t.id, "-list") : void 0, "aria-labelledby": "".concat(t.id, "-label") }, i);
  }, getFormProps: function(i) {
    return i.inputElement, he({ action: "", noValidate: !0, role: "search", onSubmit: function(s) {
      var a;
      s.preventDefault(), t.onSubmit(he({ event: s, refresh: n, state: r.getState() }, o)), r.dispatch("submit", null), (a = i.inputElement) === null || a === void 0 || a.blur();
    }, onReset: function(s) {
      var a;
      s.preventDefault(), t.onReset(he({ event: s, refresh: n, state: r.getState() }, o)), r.dispatch("reset", null), (a = i.inputElement) === null || a === void 0 || a.focus();
    } }, It(i, Lf));
  }, getLabelProps: function(i) {
    return he({ htmlFor: "".concat(t.id, "-input"), id: "".concat(t.id, "-label") }, i);
  }, getInputProps: function(i) {
    var s;
    function a(_) {
      (t.openOnFocus || Boolean(r.getState().query)) && pt(he({ event: _, props: t, query: r.getState().completion || r.getState().query, refresh: n, store: r }, o)), r.dispatch("focus", null);
    }
    var l = i || {}, u = (l.inputElement, l.maxLength), c = u === void 0 ? 512 : u, p = It(l, Mf), f = ht(r.getState()), d = function(_) {
      return Boolean(_ && _.match(vf));
    }(((s = t.environment.navigator) === null || s === void 0 ? void 0 : s.userAgent) || ""), v = f != null && f.itemUrl && !d ? "go" : "search";
    return he({ "aria-autocomplete": "both", "aria-activedescendant": r.getState().isOpen && r.getState().activeItemId !== null ? "".concat(t.id, "-item-").concat(r.getState().activeItemId) : void 0, "aria-controls": r.getState().isOpen ? "".concat(t.id, "-list") : void 0, "aria-labelledby": "".concat(t.id, "-label"), value: r.getState().completion || r.getState().query, id: "".concat(t.id, "-input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: v, spellCheck: "false", autoFocus: t.autoFocus, placeholder: t.placeholder, maxLength: c, type: "search", onChange: function(_) {
      pt(he({ event: _, props: t, query: _.currentTarget.value.slice(0, c), refresh: n, store: r }, o));
    }, onKeyDown: function(_) {
      (function(w) {
        var y = w.event, S = w.props, k = w.refresh, O = w.store, $ = Af(w, If);
        if (y.key === "ArrowUp" || y.key === "ArrowDown") {
          var D = function() {
            var J = S.environment.document.getElementById("".concat(S.id, "-item-").concat(O.getState().activeItemId));
            J && (J.scrollIntoViewIfNeeded ? J.scrollIntoViewIfNeeded(!1) : J.scrollIntoView(!1));
          }, E = function() {
            var J = ht(O.getState());
            if (O.getState().activeItemId !== null && J) {
              var de = J.item, ye = J.itemInputValue, tt = J.itemUrl, Ue = J.source;
              Ue.onActive(st({ event: y, item: de, itemInputValue: ye, itemUrl: tt, refresh: k, source: Ue, state: O.getState() }, $));
            }
          };
          y.preventDefault(), O.getState().isOpen === !1 && (S.openOnFocus || Boolean(O.getState().query)) ? pt(st({ event: y, props: S, query: O.getState().query, refresh: k, store: O }, $)).then(function() {
            O.dispatch(y.key, { nextActiveItemId: S.defaultActiveItemId }), E(), setTimeout(D, 0);
          }) : (O.dispatch(y.key, {}), E(), D());
        } else if (y.key === "Escape")
          y.preventDefault(), O.dispatch(y.key, null), O.pendingRequests.cancelAll();
        else if (y.key === "Tab")
          O.dispatch("blur", null), O.pendingRequests.cancelAll();
        else if (y.key === "Enter") {
          if (O.getState().activeItemId === null || O.getState().collections.every(function(J) {
            return J.items.length === 0;
          }))
            return void (S.debug || O.pendingRequests.cancelAll());
          y.preventDefault();
          var A = ht(O.getState()), C = A.item, Z = A.itemInputValue, te = A.itemUrl, ie = A.source;
          if (y.metaKey || y.ctrlKey)
            te !== void 0 && (ie.onSelect(st({ event: y, item: C, itemInputValue: Z, itemUrl: te, refresh: k, source: ie, state: O.getState() }, $)), S.navigator.navigateNewTab({ itemUrl: te, item: C, state: O.getState() }));
          else if (y.shiftKey)
            te !== void 0 && (ie.onSelect(st({ event: y, item: C, itemInputValue: Z, itemUrl: te, refresh: k, source: ie, state: O.getState() }, $)), S.navigator.navigateNewWindow({ itemUrl: te, item: C, state: O.getState() }));
          else if (!y.altKey) {
            if (te !== void 0)
              return ie.onSelect(st({ event: y, item: C, itemInputValue: Z, itemUrl: te, refresh: k, source: ie, state: O.getState() }, $)), void S.navigator.navigate({ itemUrl: te, item: C, state: O.getState() });
            pt(st({ event: y, nextState: { isOpen: !1 }, props: S, query: Z, refresh: k, store: O }, $)).then(function() {
              ie.onSelect(st({ event: y, item: C, itemInputValue: Z, itemUrl: te, refresh: k, source: ie, state: O.getState() }, $));
            });
          }
        }
      })(he({ event: _, props: t, refresh: n, store: r }, o));
    }, onFocus: a, onBlur: Js, onClick: function(_) {
      i.inputElement !== t.environment.document.activeElement || r.getState().isOpen || a(_);
    } }, p);
  }, getPanelProps: function(i) {
    return he({ onMouseDown: function(s) {
      s.preventDefault();
    }, onMouseLeave: function() {
      r.dispatch("mouseleave", null);
    } }, i);
  }, getListProps: function(i) {
    return he({ role: "listbox", "aria-labelledby": "".concat(t.id, "-label"), id: "".concat(t.id, "-list") }, i);
  }, getItemProps: function(i) {
    var s = i.item, a = i.source, l = It(i, Rf);
    return he({ id: "".concat(t.id, "-item-").concat(s.__autocomplete_id), role: "option", "aria-selected": r.getState().activeItemId === s.__autocomplete_id, onMouseMove: function(u) {
      if (s.__autocomplete_id !== r.getState().activeItemId) {
        r.dispatch("mousemove", s.__autocomplete_id);
        var c = ht(r.getState());
        if (r.getState().activeItemId !== null && c) {
          var p = c.item, f = c.itemInputValue, d = c.itemUrl, v = c.source;
          v.onActive(he({ event: u, item: p, itemInputValue: f, itemUrl: d, refresh: n, source: v, state: r.getState() }, o));
        }
      }
    }, onMouseDown: function(u) {
      u.preventDefault();
    }, onClick: function(u) {
      var c = a.getItemInputValue({ item: s, state: r.getState() }), p = a.getItemUrl({ item: s, state: r.getState() });
      (p ? Promise.resolve() : pt(he({ event: u, nextState: { isOpen: !1 }, props: t, query: c, refresh: n, store: r }, o))).then(function() {
        a.onSelect(he({ event: u, item: s, itemInputValue: c, itemUrl: p, refresh: n, source: a, state: r.getState() }, o));
      });
    } }, l);
  } };
}
function di(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function zf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? di(Object(n), !0).forEach(function(r) {
      Qs(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : di(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Qs(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Vf(e) {
  var t, n, r, o, i = e.plugins, s = e.options, a = (t = (((n = s.__autocomplete_metadata) === null || n === void 0 ? void 0 : n.userAgents) || [])[0]) === null || t === void 0 ? void 0 : t.segment, l = a ? Qs({}, a, Object.keys(((r = s.__autocomplete_metadata) === null || r === void 0 ? void 0 : r.options) || {})) : {};
  return { plugins: i.map(function(u) {
    return { name: u.name, options: Object.keys(u.__autocomplete_pluginOptions || []) };
  }), options: zf({ "autocomplete-core": Object.keys(s) }, l), ua: ff.concat(((o = s.__autocomplete_metadata) === null || o === void 0 ? void 0 : o.userAgents) || []) };
}
function fi(e) {
  var t, n = e.state;
  return n.isOpen === !1 || n.activeItemId === null ? null : ((t = ht(n)) === null || t === void 0 ? void 0 : t.itemInputValue) || null;
}
function pi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pi(Object(n), !0).forEach(function(r) {
      Ff(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ff(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Uf = function(e, t) {
  switch (t.type) {
    case "setActiveItemId":
    case "mousemove":
      return B(B({}, e), {}, { activeItemId: t.payload });
    case "setQuery":
      return B(B({}, e), {}, { query: t.payload, completion: null });
    case "setCollections":
      return B(B({}, e), {}, { collections: t.payload });
    case "setIsOpen":
      return B(B({}, e), {}, { isOpen: t.payload });
    case "setStatus":
      return B(B({}, e), {}, { status: t.payload });
    case "setContext":
      return B(B({}, e), {}, { context: B(B({}, e.context), t.payload) });
    case "ArrowDown":
      var n = B(B({}, e), {}, { activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : Yo(1, e.activeItemId, wr(e), t.props.defaultActiveItemId) });
      return B(B({}, n), {}, { completion: fi({ state: n }) });
    case "ArrowUp":
      var r = B(B({}, e), {}, { activeItemId: Yo(-1, e.activeItemId, wr(e), t.props.defaultActiveItemId) });
      return B(B({}, r), {}, { completion: fi({ state: r }) });
    case "Escape":
      return e.isOpen ? B(B({}, e), {}, { activeItemId: null, isOpen: !1, completion: null }) : B(B({}, e), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
    case "submit":
      return B(B({}, e), {}, { activeItemId: null, isOpen: !1, status: "idle" });
    case "reset":
      return B(B({}, e), {}, { activeItemId: t.props.openOnFocus === !0 ? t.props.defaultActiveItemId : null, status: "idle", query: "" });
    case "focus":
      return B(B({}, e), {}, { activeItemId: t.props.defaultActiveItemId, isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({ state: e }) });
    case "blur":
      return t.props.debug ? e : B(B({}, e), {}, { isOpen: !1, activeItemId: null });
    case "mouseleave":
      return B(B({}, e), {}, { activeItemId: t.props.defaultActiveItemId });
    default:
      return Wt(!1, "The reducer action ".concat(JSON.stringify(t.type), " is not supported.")), e;
  }
};
function hi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hi(Object(n), !0).forEach(function(r) {
      qf(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function qf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Wf(e) {
  pf(e);
  var t = [], n = function(a, l) {
    var u, c = typeof window < "u" ? window : {}, p = a.plugins || [];
    return ut(ut({ debug: !1, openOnFocus: !1, placeholder: "", autoFocus: !1, defaultActiveItemId: null, stallThreshold: 300, environment: c, shouldPanelOpen: function(f) {
      return wr(f.state) > 0;
    }, reshape: function(f) {
      return f.sources;
    } }, a), {}, { id: (u = a.id) !== null && u !== void 0 ? u : "autocomplete-".concat(df++), plugins: p, initialState: ut({ activeItemId: null, query: "", completion: null, collections: [], isOpen: !1, status: "idle", context: {} }, a.initialState), onStateChange: function(f) {
      var d;
      (d = a.onStateChange) === null || d === void 0 || d.call(a, f), p.forEach(function(v) {
        var _;
        return (_ = v.onStateChange) === null || _ === void 0 ? void 0 : _.call(v, f);
      });
    }, onSubmit: function(f) {
      var d;
      (d = a.onSubmit) === null || d === void 0 || d.call(a, f), p.forEach(function(v) {
        var _;
        return (_ = v.onSubmit) === null || _ === void 0 ? void 0 : _.call(v, f);
      });
    }, onReset: function(f) {
      var d;
      (d = a.onReset) === null || d === void 0 || d.call(a, f), p.forEach(function(v) {
        var _;
        return (_ = v.onReset) === null || _ === void 0 ? void 0 : _.call(v, f);
      });
    }, getSources: function(f) {
      return Promise.all([].concat(wf(p.map(function(d) {
        return d.getSources;
      })), [a.getSources]).filter(Boolean).map(function(d) {
        return mf(d, f);
      })).then(function(d) {
        return qt(d);
      }).then(function(d) {
        return d.map(function(v) {
          return ut(ut({}, v), {}, { onSelect: function(_) {
            v.onSelect(_), l.forEach(function(w) {
              var y;
              return (y = w.onSelect) === null || y === void 0 ? void 0 : y.call(w, _);
            });
          }, onActive: function(_) {
            v.onActive(_), l.forEach(function(w) {
              var y;
              return (y = w.onActive) === null || y === void 0 ? void 0 : y.call(w, _);
            });
          } });
        });
      });
    }, navigator: ut({ navigate: function(f) {
      var d = f.itemUrl;
      c.location.assign(d);
    }, navigateNewTab: function(f) {
      var d = f.itemUrl, v = c.open(d, "_blank", "noopener");
      v == null || v.focus();
    }, navigateNewWindow: function(f) {
      var d = f.itemUrl;
      c.open(d, "_blank", "noopener");
    } }, a.navigator) });
  }(e, t), r = yf(Uf, n, function(a) {
    var l = a.prevState, u = a.state;
    n.onStateChange(at({ prevState: l, state: u, refresh: s }, o));
  }), o = function(a) {
    var l = a.store;
    return { setActiveItemId: function(u) {
      l.dispatch("setActiveItemId", u);
    }, setQuery: function(u) {
      l.dispatch("setQuery", u);
    }, setCollections: function(u) {
      var c = 0, p = u.map(function(f) {
        return rn(rn({}, f), {}, { items: qt(f.items).map(function(d) {
          return rn(rn({}, d), {}, { __autocomplete_id: c++ });
        }) });
      });
      l.dispatch("setCollections", p);
    }, setIsOpen: function(u) {
      l.dispatch("setIsOpen", u);
    }, setStatus: function(u) {
      l.dispatch("setStatus", u);
    }, setContext: function(u) {
      l.dispatch("setContext", u);
    } };
  }({ store: r }), i = Hf(at({ props: n, refresh: s, store: r }, o));
  function s() {
    return pt(at({ event: new Event("input"), nextState: { isOpen: r.getState().isOpen }, props: n, query: r.getState().query, refresh: s, store: r }, o));
  }
  return n.plugins.forEach(function(a) {
    var l;
    return (l = a.subscribe) === null || l === void 0 ? void 0 : l.call(a, at(at({}, o), {}, { refresh: s, onSelect: function(u) {
      t.push({ onSelect: u });
    }, onActive: function(u) {
      t.push({ onActive: u });
    } }));
  }), function(a) {
    var l, u, c = a.metadata, p = a.environment;
    if (!((l = p.navigator) === null || l === void 0 || (u = l.userAgent) === null || u === void 0) && u.includes("Algolia Crawler")) {
      var f = p.document.createElement("meta"), d = p.document.querySelector("head");
      f.name = "algolia:metadata", setTimeout(function() {
        f.content = JSON.stringify(c), d.appendChild(f);
      }, 0);
    }
  }({ metadata: Vf({ plugins: n.plugins, options: e }), environment: n.environment }), at(at({ refresh: s }, i), o);
}
function Kf(e) {
  var t = e.translations, n = (t === void 0 ? {} : t).searchByText, r = n === void 0 ? "Search by" : n;
  return m.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, m.createElement("span", { className: "DocSearch-Label" }, r), m.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, m.createElement("defs", null, m.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), m.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), m.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), m.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), m.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), m.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), m.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), m.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), m.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), m.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
}
function ln(e) {
  return m.createElement("svg", { width: "15", height: "15", "aria-label": e.ariaLabel, role: "img" }, m.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e.children));
}
function Jf(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = n.selectText, o = r === void 0 ? "to select" : r, i = n.selectKeyAriaLabel, s = i === void 0 ? "Enter key" : i, a = n.navigateText, l = a === void 0 ? "to navigate" : a, u = n.navigateUpKeyAriaLabel, c = u === void 0 ? "Arrow up" : u, p = n.navigateDownKeyAriaLabel, f = p === void 0 ? "Arrow down" : p, d = n.closeText, v = d === void 0 ? "to close" : d, _ = n.closeKeyAriaLabel, w = _ === void 0 ? "Escape key" : _, y = n.searchByText, S = y === void 0 ? "Search by" : y;
  return m.createElement(m.Fragment, null, m.createElement("div", { className: "DocSearch-Logo" }, m.createElement(Kf, { translations: { searchByText: S } })), m.createElement("ul", { className: "DocSearch-Commands" }, m.createElement("li", null, m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(ln, { ariaLabel: s }, m.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), m.createElement("span", { className: "DocSearch-Label" }, o)), m.createElement("li", null, m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(ln, { ariaLabel: f }, m.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(ln, { ariaLabel: c }, m.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), m.createElement("span", { className: "DocSearch-Label" }, l)), m.createElement("li", null, m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(ln, { ariaLabel: w }, m.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), m.createElement("span", { className: "DocSearch-Label" }, v))));
}
function Gf(e) {
  var t = e.hit, n = e.children;
  return m.createElement("a", { href: t.url }, n);
}
function Qf() {
  return m.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, m.createElement("g", { fill: "none", fillRule: "evenodd" }, m.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, m.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), m.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, m.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
}
function Yf() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), m.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
}
function kr() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function Zf() {
  return m.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), m.createElement("path", { d: "M8 17l-6-6 6-6" })));
}
var Xf = function() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
};
function ep(e) {
  switch (e.type) {
    case "lvl1":
      return m.createElement(Xf, null);
    case "content":
      return m.createElement(np, null);
    default:
      return m.createElement(tp, null);
  }
}
function tp() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function np() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function mi() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function rp() {
  return m.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
}
function op() {
  return m.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
}
function ip(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = n.titleText, o = r === void 0 ? "Unable to fetch results" : r, i = n.helpText, s = i === void 0 ? "You might want to check your network connection." : i;
  return m.createElement("div", { className: "DocSearch-ErrorScreen" }, m.createElement("div", { className: "DocSearch-Screen-Icon" }, m.createElement(rp, null)), m.createElement("p", { className: "DocSearch-Title" }, o), m.createElement("p", { className: "DocSearch-Help" }, s));
}
var sp = ["translations"];
function ap(e) {
  return function(t) {
    if (Array.isArray(t))
      return er(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (!!t) {
      if (typeof t == "string")
        return er(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return er(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function er(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function lp(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(s, a) {
    if (s == null)
      return {};
    var l, u, c = {}, p = Object.keys(s);
    for (u = 0; u < p.length; u++)
      l = p[u], a.indexOf(l) >= 0 || (c[l] = s[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function cp(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = lp(e, sp), o = n.noResultsText, i = o === void 0 ? "No results for" : o, s = n.suggestedQueryText, a = s === void 0 ? "Try searching for" : s, l = n.reportMissingResultsText, u = l === void 0 ? "Believe this query should return results?" : l, c = n.reportMissingResultsLinkText, p = c === void 0 ? "Let us know." : c, f = r.state.context.searchSuggestions;
  return m.createElement("div", { className: "DocSearch-NoResults" }, m.createElement("div", { className: "DocSearch-Screen-Icon" }, m.createElement(op, null)), m.createElement("p", { className: "DocSearch-Title" }, i, ' "', m.createElement("strong", null, r.state.query), '"'), f && f.length > 0 && m.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, m.createElement("p", { className: "DocSearch-Help" }, a, ":"), m.createElement("ul", null, f.slice(0, 3).reduce(function(d, v) {
    return [].concat(ap(d), [m.createElement("li", { key: v }, m.createElement("button", { className: "DocSearch-Prefill", key: v, type: "button", onClick: function() {
      r.setQuery(v.toLowerCase() + " "), r.refresh(), r.inputRef.current.focus();
    } }, v))]);
  }, []))), r.getMissingResultsUrl && m.createElement("p", { className: "DocSearch-Help" }, "".concat(u, " "), m.createElement("a", { href: r.getMissingResultsUrl({ query: r.state.query }), target: "_blank", rel: "noopener noreferrer" }, p)));
}
var up = ["hit", "attribute", "tagName"];
function vi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vi(Object(n), !0).forEach(function(r) {
      dp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function dp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function fp(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(s, a) {
    if (s == null)
      return {};
    var l, u, c = {}, p = Object.keys(s);
    for (u = 0; u < p.length; u++)
      l = p[u], a.indexOf(l) >= 0 || (c[l] = s[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function gi(e, t) {
  return t.split(".").reduce(function(n, r) {
    return n != null && n[r] ? n[r] : null;
  }, e);
}
function dt(e) {
  var t = e.hit, n = e.attribute, r = e.tagName;
  return Ce(r === void 0 ? "span" : r, _i(_i({}, fp(e, up)), {}, { dangerouslySetInnerHTML: { __html: gi(t, "_snippetResult.".concat(n, ".value")) || gi(t, n) } }));
}
function yi(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, s, a = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (a.push(i.value), !r || a.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, s = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw s;
        }
      }
      return a;
    }
  }(e, t) || function(n, r) {
    if (!!n) {
      if (typeof n == "string")
        return bi(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return bi(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function bi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function En() {
  return En = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, En.apply(this, arguments);
}
function Sr(e) {
  return e.collection && e.collection.items.length !== 0 ? m.createElement("section", { className: "DocSearch-Hits" }, m.createElement("div", { className: "DocSearch-Hit-source" }, e.title), m.createElement("ul", e.getListProps(), e.collection.items.map(function(t, n) {
    return m.createElement(pp, En({ key: [e.title, t.objectID].join(":"), item: t, index: n }, e));
  }))) : null;
}
function pp(e) {
  var t = e.item, n = e.index, r = e.renderIcon, o = e.renderAction, i = e.getItemProps, s = e.onItemClick, a = e.collection, l = e.hitComponent, u = yi(m.useState(!1), 2), c = u[0], p = u[1], f = yi(m.useState(!1), 2), d = f[0], v = f[1], _ = m.useRef(null), w = l;
  return m.createElement("li", En({ className: ["DocSearch-Hit", t.__docsearch_parent && "DocSearch-Hit--Child", c && "DocSearch-Hit--deleting", d && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
    _.current && _.current();
  } }, i({ item: t, source: a.source, onClick: function() {
    s(t);
  } })), m.createElement(w, { hit: t }, m.createElement("div", { className: "DocSearch-Hit-Container" }, r({ item: t, index: n }), t.hierarchy[t.type] && t.type === "lvl1" && m.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, m.createElement(dt, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.lvl1" }), t.content && m.createElement(dt, { className: "DocSearch-Hit-path", hit: t, attribute: "content" })), t.hierarchy[t.type] && (t.type === "lvl2" || t.type === "lvl3" || t.type === "lvl4" || t.type === "lvl5" || t.type === "lvl6") && m.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, m.createElement(dt, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.".concat(t.type) }), m.createElement(dt, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })), t.type === "content" && m.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, m.createElement(dt, { className: "DocSearch-Hit-title", hit: t, attribute: "content" }), m.createElement(dt, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })), o({ item: t, runDeleteTransition: function(y) {
    p(!0), _.current = y;
  }, runFavoriteTransition: function(y) {
    v(!0), _.current = y;
  } }))));
}
function wi(e, t) {
  return e.reduce(function(n, r) {
    var o = t(r);
    return n.hasOwnProperty(o) || (n[o] = []), n[o].length < 5 && n[o].push(r), n;
  }, {});
}
function xi(e) {
  return e;
}
function hp() {
}
var Ys = /(<mark>|<\/mark>)/g, mp = RegExp(Ys.source);
function Zs(e) {
  var t, n, r, o, i, s = e;
  if (!s.__docsearch_parent && !e._highlightResult)
    return e.hierarchy.lvl0;
  var a = ((s.__docsearch_parent ? (t = s.__docsearch_parent) === null || t === void 0 || (n = t._highlightResult) === null || n === void 0 || (r = n.hierarchy) === null || r === void 0 ? void 0 : r.lvl0 : (o = e._highlightResult) === null || o === void 0 || (i = o.hierarchy) === null || i === void 0 ? void 0 : i.lvl0) || {}).value;
  return a && mp.test(a) ? a.replace(Ys, "") : a;
}
function $r() {
  return $r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $r.apply(this, arguments);
}
function vp(e) {
  return m.createElement("div", { className: "DocSearch-Dropdown-Container" }, e.state.collections.map(function(t) {
    if (t.items.length === 0)
      return null;
    var n = Zs(t.items[0]);
    return m.createElement(Sr, $r({}, e, { key: t.source.sourceId, title: n, collection: t, renderIcon: function(r) {
      var o, i = r.item, s = r.index;
      return m.createElement(m.Fragment, null, i.__docsearch_parent && m.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, m.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, i.__docsearch_parent !== ((o = t.items[s + 1]) === null || o === void 0 ? void 0 : o.__docsearch_parent) ? m.createElement("path", { d: "M8 6v21M20 27H8.3" }) : m.createElement("path", { d: "M8 6v42M20 27H8.3" }))), m.createElement("div", { className: "DocSearch-Hit-icon" }, m.createElement(ep, { type: i.type })));
    }, renderAction: function() {
      return m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement(Zf, null));
    } }));
  }), e.resultsFooterComponent && m.createElement("section", { className: "DocSearch-HitsFooter" }, m.createElement(e.resultsFooterComponent, { state: e.state })));
}
var _p = ["translations"];
function Cn() {
  return Cn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Cn.apply(this, arguments);
}
function gp(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(s, a) {
    if (s == null)
      return {};
    var l, u, c = {}, p = Object.keys(s);
    for (u = 0; u < p.length; u++)
      l = p[u], a.indexOf(l) >= 0 || (c[l] = s[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function yp(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = gp(e, _p), o = n.recentSearchesTitle, i = o === void 0 ? "Recent" : o, s = n.noRecentSearchesText, a = s === void 0 ? "No recent searches" : s, l = n.saveRecentSearchButtonTitle, u = l === void 0 ? "Save this search" : l, c = n.removeRecentSearchButtonTitle, p = c === void 0 ? "Remove this search from history" : c, f = n.favoriteSearchesTitle, d = f === void 0 ? "Favorite" : f, v = n.removeFavoriteSearchButtonTitle, _ = v === void 0 ? "Remove this search from favorites" : v;
  return r.state.status === "idle" && r.hasCollections === !1 ? r.disableUserPersonalization ? null : m.createElement("div", { className: "DocSearch-StartScreen" }, m.createElement("p", { className: "DocSearch-Help" }, a)) : r.hasCollections === !1 ? null : m.createElement("div", { className: "DocSearch-Dropdown-Container" }, m.createElement(Sr, Cn({}, r, { title: i, collection: r.state.collections[0], renderIcon: function() {
    return m.createElement("div", { className: "DocSearch-Hit-icon" }, m.createElement(Yf, null));
  }, renderAction: function(w) {
    var y = w.item, S = w.runFavoriteTransition, k = w.runDeleteTransition;
    return m.createElement(m.Fragment, null, m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement("button", { className: "DocSearch-Hit-action-button", title: u, type: "submit", onClick: function(O) {
      O.preventDefault(), O.stopPropagation(), S(function() {
        r.favoriteSearches.add(y), r.recentSearches.remove(y), r.refresh();
      });
    } }, m.createElement(mi, null))), m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement("button", { className: "DocSearch-Hit-action-button", title: p, type: "submit", onClick: function(O) {
      O.preventDefault(), O.stopPropagation(), k(function() {
        r.recentSearches.remove(y), r.refresh();
      });
    } }, m.createElement(kr, null))));
  } })), m.createElement(Sr, Cn({}, r, { title: d, collection: r.state.collections[1], renderIcon: function() {
    return m.createElement("div", { className: "DocSearch-Hit-icon" }, m.createElement(mi, null));
  }, renderAction: function(w) {
    var y = w.item, S = w.runDeleteTransition;
    return m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement("button", { className: "DocSearch-Hit-action-button", title: _, type: "submit", onClick: function(k) {
      k.preventDefault(), k.stopPropagation(), S(function() {
        r.favoriteSearches.remove(y), r.refresh();
      });
    } }, m.createElement(kr, null)));
  } })));
}
var bp = ["translations"];
function jn() {
  return jn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, jn.apply(this, arguments);
}
function wp(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(s, a) {
    if (s == null)
      return {};
    var l, u, c = {}, p = Object.keys(s);
    for (u = 0; u < p.length; u++)
      l = p[u], a.indexOf(l) >= 0 || (c[l] = s[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var xp = m.memo(function(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = wp(e, bp);
  if (r.state.status === "error")
    return m.createElement(ip, { translations: n == null ? void 0 : n.errorScreen });
  var o = r.state.collections.some(function(i) {
    return i.items.length > 0;
  });
  return r.state.query ? o === !1 ? m.createElement(cp, jn({}, r, { translations: n == null ? void 0 : n.noResultsScreen })) : m.createElement(vp, r) : m.createElement(yp, jn({}, r, { hasCollections: o, translations: n == null ? void 0 : n.startScreen }));
}, function(e, t) {
  return t.state.status === "loading" || t.state.status === "stalled";
}), Op = ["translations"];
function In() {
  return In = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, In.apply(this, arguments);
}
function kp(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(s, a) {
    if (s == null)
      return {};
    var l, u, c = {}, p = Object.keys(s);
    for (u = 0; u < p.length; u++)
      l = p[u], a.indexOf(l) >= 0 || (c[l] = s[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Sp(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = kp(e, Op), o = n.resetButtonTitle, i = o === void 0 ? "Clear the query" : o, s = n.resetButtonAriaLabel, a = s === void 0 ? "Clear the query" : s, l = n.cancelButtonText, u = l === void 0 ? "Cancel" : l, c = n.cancelButtonAriaLabel, p = c === void 0 ? "Cancel" : c, f = r.getFormProps({ inputElement: r.inputRef.current }).onReset;
  return m.useEffect(function() {
    r.autoFocus && r.inputRef.current && r.inputRef.current.focus();
  }, [r.autoFocus, r.inputRef]), m.useEffect(function() {
    r.isFromSelection && r.inputRef.current && r.inputRef.current.select();
  }, [r.isFromSelection, r.inputRef]), m.createElement(m.Fragment, null, m.createElement("form", { className: "DocSearch-Form", onSubmit: function(d) {
    d.preventDefault();
  }, onReset: f }, m.createElement("label", In({ className: "DocSearch-MagnifierLabel" }, r.getLabelProps()), m.createElement(Ks, null)), m.createElement("div", { className: "DocSearch-LoadingIndicator" }, m.createElement(Qf, null)), m.createElement("input", In({ className: "DocSearch-Input", ref: r.inputRef }, r.getInputProps({ inputElement: r.inputRef.current, autoFocus: r.autoFocus, maxLength: 64 }))), m.createElement("button", { type: "reset", title: i, className: "DocSearch-Reset", "aria-label": a, hidden: !r.state.query }, m.createElement(kr, null))), m.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": p, onClick: r.onClose }, u));
}
var $p = ["_highlightResult", "_snippetResult"];
function Pp(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(s, a) {
    if (s == null)
      return {};
    var l, u, c = {}, p = Object.keys(s);
    for (u = 0; u < p.length; u++)
      l = p[u], a.indexOf(l) >= 0 || (c[l] = s[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Ep(e) {
  return function() {
    var t = "__TEST_KEY__";
    try {
      return localStorage.setItem(t, ""), localStorage.removeItem(t), !0;
    } catch {
      return !1;
    }
  }() === !1 ? { setItem: function() {
  }, getItem: function() {
    return [];
  } } : { setItem: function(t) {
    return window.localStorage.setItem(e, JSON.stringify(t));
  }, getItem: function() {
    var t = window.localStorage.getItem(e);
    return t ? JSON.parse(t) : [];
  } };
}
function Oi(e) {
  var t = e.key, n = e.limit, r = n === void 0 ? 5 : n, o = Ep(t), i = o.getItem().slice(0, r);
  return { add: function(s) {
    var a = s, l = (a._highlightResult, a._snippetResult, Pp(a, $p)), u = i.findIndex(function(c) {
      return c.objectID === l.objectID;
    });
    u > -1 && i.splice(u, 1), i.unshift(l), i = i.slice(0, r), o.setItem(i);
  }, remove: function(s) {
    i = i.filter(function(a) {
      return a.objectID !== s.objectID;
    }), o.setItem(i);
  }, getAll: function() {
    return i;
  } };
}
var Cp = ["facetName", "facetQuery"];
function jp(e) {
  var t, n = "algoliasearch-client-js-".concat(e.key), r = function() {
    return t === void 0 && (t = e.localStorage || window.localStorage), t;
  }, o = function() {
    return JSON.parse(r().getItem(n) || "{}");
  };
  return { get: function(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return Promise.resolve().then(function() {
      var l = JSON.stringify(i), u = o()[l];
      return Promise.all([u || s(), u !== void 0]);
    }).then(function(l) {
      var u = On(l, 2), c = u[0], p = u[1];
      return Promise.all([c, p || a.miss(c)]);
    }).then(function(l) {
      return On(l, 1)[0];
    });
  }, set: function(i, s) {
    return Promise.resolve().then(function() {
      var a = o();
      return a[JSON.stringify(i)] = s, r().setItem(n, JSON.stringify(a)), s;
    });
  }, delete: function(i) {
    return Promise.resolve().then(function() {
      var s = o();
      delete s[JSON.stringify(i)], r().setItem(n, JSON.stringify(s));
    });
  }, clear: function() {
    return Promise.resolve().then(function() {
      r().removeItem(n);
    });
  } };
}
function At(e) {
  var t = kn(e.caches), n = t.shift();
  return n === void 0 ? { get: function(r, o) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return o().then(function(s) {
      return Promise.all([s, i.miss(s)]);
    }).then(function(s) {
      return On(s, 1)[0];
    });
  }, set: function(r, o) {
    return Promise.resolve(o);
  }, delete: function(r) {
    return Promise.resolve();
  }, clear: function() {
    return Promise.resolve();
  } } : { get: function(r, o) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return n.get(r, o, i).catch(function() {
      return At({ caches: t }).get(r, o, i);
    });
  }, set: function(r, o) {
    return n.set(r, o).catch(function() {
      return At({ caches: t }).set(r, o);
    });
  }, delete: function(r) {
    return n.delete(r).catch(function() {
      return At({ caches: t }).delete(r);
    });
  }, clear: function() {
    return n.clear().catch(function() {
      return At({ caches: t }).clear();
    });
  } };
}
function tr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 }, t = {};
  return { get: function(n, r) {
    var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } }, i = JSON.stringify(n);
    if (i in t)
      return Promise.resolve(e.serializable ? JSON.parse(t[i]) : t[i]);
    var s = r(), a = o && o.miss || function() {
      return Promise.resolve();
    };
    return s.then(function(l) {
      return a(l);
    }).then(function() {
      return s;
    });
  }, set: function(n, r) {
    return t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r, Promise.resolve(r);
  }, delete: function(n) {
    return delete t[JSON.stringify(n)], Promise.resolve();
  }, clear: function() {
    return t = {}, Promise.resolve();
  } };
}
function Ip(e) {
  for (var t = e.length - 1; t > 0; t--) {
    var n = Math.floor(Math.random() * (t + 1)), r = e[t];
    e[t] = e[n], e[n] = r;
  }
  return e;
}
function Xs(e, t) {
  return t && Object.keys(t).forEach(function(n) {
    e[n] = t[n](e);
  }), e;
}
function Hn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0;
  return e.replace(/%s/g, function() {
    return encodeURIComponent(n[o++]);
  });
}
var hn = { WithinQueryParameters: 0, WithinHeaders: 1 };
function ki(e, t) {
  var n = e || {}, r = n.data || {};
  return Object.keys(n).forEach(function(o) {
    ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(o) === -1 && (r[o] = n[o]);
  }), { data: Object.entries(r).length > 0 ? r : void 0, timeout: n.timeout || t, headers: n.headers || {}, queryParameters: n.queryParameters || {}, cacheable: n.cacheable };
}
var mt = { Read: 1, Write: 2, Any: 3 }, ea = 1, Tp = 2, ta = 3;
function na(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ea;
  return q(q({}, e), {}, { status: t, lastUpdate: Date.now() });
}
function ra(e) {
  return typeof e == "string" ? { protocol: "https", url: e, accept: mt.Any } : { protocol: e.protocol || "https", url: e.url, accept: e.accept || mt.Any };
}
var Si = "GET", zn = "POST";
function Ap(e, t) {
  return Promise.all(t.map(function(n) {
    return e.get(n, function() {
      return Promise.resolve(na(n));
    });
  })).then(function(n) {
    var r = n.filter(function(s) {
      return function(a) {
        return a.status === ea || Date.now() - a.lastUpdate > 12e4;
      }(s);
    }), o = n.filter(function(s) {
      return function(a) {
        return a.status === ta && Date.now() - a.lastUpdate <= 12e4;
      }(s);
    }), i = [].concat(kn(r), kn(o));
    return { getTimeout: function(s, a) {
      return (o.length === 0 && s === 0 ? 1 : o.length + 3 + s) * a;
    }, statelessHosts: i.length > 0 ? i.map(function(s) {
      return ra(s);
    }) : t };
  });
}
function $i(e, t, n, r) {
  var o = [], i = function(f, d) {
    if (!(f.method === Si || f.data === void 0 && d.data === void 0)) {
      var v = Array.isArray(f.data) ? f.data : q(q({}, f.data), d.data);
      return JSON.stringify(v);
    }
  }(n, r), s = function(f, d) {
    var v = q(q({}, f.headers), d.headers), _ = {};
    return Object.keys(v).forEach(function(w) {
      var y = v[w];
      _[w.toLowerCase()] = y;
    }), _;
  }(e, r), a = n.method, l = n.method !== Si ? {} : q(q({}, n.data), r.data), u = q(q(q({ "x-algolia-agent": e.userAgent.value }, e.queryParameters), l), r.queryParameters), c = 0, p = function f(d, v) {
    var _ = d.pop();
    if (_ === void 0)
      throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: Pi(o) };
    var w = { data: i, headers: s, method: a, url: Dp(_, n.path, u), connectTimeout: v(c, e.timeouts.connect), responseTimeout: v(c, r.timeout) }, y = function(k) {
      var O = { request: w, response: k, host: _, triesLeft: d.length };
      return o.push(O), O;
    }, S = { onSucess: function(k) {
      return function(O) {
        try {
          return JSON.parse(O.content);
        } catch ($) {
          throw function(D, E) {
            return { name: "DeserializationError", message: D, response: E };
          }($.message, O);
        }
      }(k);
    }, onRetry: function(k) {
      var O = y(k);
      return k.isTimedOut && c++, Promise.all([e.logger.info("Retryable failure", ia(O)), e.hostsCache.set(_, na(_, k.isTimedOut ? ta : Tp))]).then(function() {
        return f(d, v);
      });
    }, onFail: function(k) {
      throw y(k), function(O, $) {
        var D = O.content, E = O.status, A = D;
        try {
          A = JSON.parse(D).message;
        } catch {
        }
        return function(C, Z, te) {
          return { name: "ApiError", message: C, status: Z, transporterStackTrace: te };
        }(A, E, $);
      }(k, Pi(o));
    } };
    return e.requester.send(w).then(function(k) {
      return function(O, $) {
        return function(D) {
          var E = D.status;
          return D.isTimedOut || function(A) {
            var C = A.isTimedOut, Z = A.status;
            return !C && ~~Z == 0;
          }(D) || ~~(E / 100) != 2 && ~~(E / 100) != 4;
        }(O) ? $.onRetry(O) : ~~(O.status / 100) == 2 ? $.onSucess(O) : $.onFail(O);
      }(k, S);
    });
  };
  return Ap(e.hostsCache, t).then(function(f) {
    return p(kn(f.statelessHosts).reverse(), f.getTimeout);
  });
}
function Np(e) {
  var t = { value: "Algolia for JavaScript (".concat(e, ")"), add: function(n) {
    var r = "; ".concat(n.segment).concat(n.version !== void 0 ? " (".concat(n.version, ")") : "");
    return t.value.indexOf(r) === -1 && (t.value = "".concat(t.value).concat(r)), t;
  } };
  return t;
}
function Dp(e, t, n) {
  var r = oa(n), o = "".concat(e.protocol, "://").concat(e.url, "/").concat(t.charAt(0) === "/" ? t.substr(1) : t);
  return r.length && (o += "?".concat(r)), o;
}
function oa(e) {
  return Object.keys(e).map(function(t) {
    return Hn("%s=%s", t, (n = e[t], Object.prototype.toString.call(n) === "[object Object]" || Object.prototype.toString.call(n) === "[object Array]" ? JSON.stringify(e[t]) : e[t]));
    var n;
  }).join("&");
}
function Pi(e) {
  return e.map(function(t) {
    return ia(t);
  });
}
function ia(e) {
  var t = e.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return q(q({}, e), {}, { request: q(q({}, e.request), {}, { headers: q(q({}, e.request.headers), t) }) });
}
var Lp = function(e) {
  var t = e.appId, n = function(i, s, a) {
    var l = { "x-algolia-api-key": a, "x-algolia-application-id": s };
    return { headers: function() {
      return i === hn.WithinHeaders ? l : {};
    }, queryParameters: function() {
      return i === hn.WithinQueryParameters ? l : {};
    } };
  }(e.authMode !== void 0 ? e.authMode : hn.WithinHeaders, t, e.apiKey), r = function(i) {
    var s = i.hostsCache, a = i.logger, l = i.requester, u = i.requestsCache, c = i.responsesCache, p = i.timeouts, f = i.userAgent, d = i.hosts, v = i.queryParameters, _ = { hostsCache: s, logger: a, requester: l, requestsCache: u, responsesCache: c, timeouts: p, userAgent: f, headers: i.headers, queryParameters: v, hosts: d.map(function(w) {
      return ra(w);
    }), read: function(w, y) {
      var S = ki(y, _.timeouts.read), k = function() {
        return $i(_, _.hosts.filter(function($) {
          return ($.accept & mt.Read) != 0;
        }), w, S);
      };
      if ((S.cacheable !== void 0 ? S.cacheable : w.cacheable) !== !0)
        return k();
      var O = { request: w, mappedRequestOptions: S, transporter: { queryParameters: _.queryParameters, headers: _.headers } };
      return _.responsesCache.get(O, function() {
        return _.requestsCache.get(O, function() {
          return _.requestsCache.set(O, k()).then(function($) {
            return Promise.all([_.requestsCache.delete(O), $]);
          }, function($) {
            return Promise.all([_.requestsCache.delete(O), Promise.reject($)]);
          }).then(function($) {
            var D = On($, 2);
            return D[0], D[1];
          });
        });
      }, { miss: function($) {
        return _.responsesCache.set(O, $);
      } });
    }, write: function(w, y) {
      return $i(_, _.hosts.filter(function(S) {
        return (S.accept & mt.Write) != 0;
      }), w, ki(y, _.timeouts.write));
    } };
    return _;
  }(q(q({ hosts: [{ url: "".concat(t, "-dsn.algolia.net"), accept: mt.Read }, { url: "".concat(t, ".algolia.net"), accept: mt.Write }].concat(Ip([{ url: "".concat(t, "-1.algolianet.com") }, { url: "".concat(t, "-2.algolianet.com") }, { url: "".concat(t, "-3.algolianet.com") }])) }, e), {}, { headers: q(q(q({}, n.headers()), { "content-type": "application/x-www-form-urlencoded" }), e.headers), queryParameters: q(q({}, n.queryParameters()), e.queryParameters) })), o = { transporter: r, appId: t, addAlgoliaAgent: function(i, s) {
    r.userAgent.add({ segment: i, version: s });
  }, clearCache: function() {
    return Promise.all([r.requestsCache.clear(), r.responsesCache.clear()]).then(function() {
    });
  } };
  return Xs(o, e.methods);
}, sa = function(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = { transporter: e.transporter, appId: e.appId, indexName: t };
    return Xs(r, n.methods);
  };
}, Ei = function(e) {
  return function(t, n) {
    var r = t.map(function(o) {
      return q(q({}, o), {}, { params: oa(o.params || {}) });
    });
    return e.transporter.read({ method: zn, path: "1/indexes/*/queries", data: { requests: r }, cacheable: !0 }, n);
  };
}, Ci = function(e) {
  return function(t, n) {
    return Promise.all(t.map(function(r) {
      var o = r.params, i = o.facetName, s = o.facetQuery, a = zd(o, Cp);
      return sa(e)(r.indexName, { methods: { searchForFacetValues: aa } }).searchForFacetValues(i, s, q(q({}, n), a));
    }));
  };
}, Mp = function(e) {
  return function(t, n, r) {
    return e.transporter.read({ method: zn, path: Hn("1/answers/%s/prediction", e.indexName), data: { query: t, queryLanguages: n }, cacheable: !0 }, r);
  };
}, Rp = function(e) {
  return function(t, n) {
    return e.transporter.read({ method: zn, path: Hn("1/indexes/%s/query", e.indexName), data: { query: t }, cacheable: !0 }, n);
  };
}, aa = function(e) {
  return function(t, n, r) {
    return e.transporter.read({ method: zn, path: Hn("1/indexes/%s/facets/%s/query", e.indexName, t), data: { facetQuery: n }, cacheable: !0 }, r);
  };
}, Bp = 1, Hp = 2, zp = 3;
function la(e, t, n) {
  var r, o = { appId: e, apiKey: t, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(i) {
    return new Promise(function(s) {
      var a = new XMLHttpRequest();
      a.open(i.method, i.url, !0), Object.keys(i.headers).forEach(function(p) {
        return a.setRequestHeader(p, i.headers[p]);
      });
      var l, u = function(p, f) {
        return setTimeout(function() {
          a.abort(), s({ status: 0, content: f, isTimedOut: !0 });
        }, 1e3 * p);
      }, c = u(i.connectTimeout, "Connection timeout");
      a.onreadystatechange = function() {
        a.readyState > a.OPENED && l === void 0 && (clearTimeout(c), l = u(i.responseTimeout, "Socket timeout"));
      }, a.onerror = function() {
        a.status === 0 && (clearTimeout(c), clearTimeout(l), s({ content: a.responseText || "Network request failed", status: a.status, isTimedOut: !1 }));
      }, a.onload = function() {
        clearTimeout(c), clearTimeout(l), s({ content: a.responseText, status: a.status, isTimedOut: !1 });
      }, a.send(i.data);
    });
  } }, logger: (r = zp, { debug: function(i, s) {
    return Bp >= r && console.debug(i, s), Promise.resolve();
  }, info: function(i, s) {
    return Hp >= r && console.info(i, s), Promise.resolve();
  }, error: function(i, s) {
    return console.error(i, s), Promise.resolve();
  } }), responsesCache: tr(), requestsCache: tr({ serializable: !1 }), hostsCache: At({ caches: [jp({ key: "".concat("4.8.5", "-").concat(e) }), tr()] }), userAgent: Np("4.8.5").add({ segment: "Browser", version: "lite" }), authMode: hn.WithinQueryParameters };
  return Lp(q(q(q({}, o), n), {}, { methods: { search: Ei, searchForFacetValues: Ci, multipleQueries: Ei, multipleSearchForFacetValues: Ci, initIndex: function(i) {
    return function(s) {
      return sa(i)(s, { methods: { search: Rp, searchForFacetValues: aa, findAnswers: Mp } });
    };
  } } }));
}
la.version = "4.8.5";
var Vp = ["footer", "searchBox"];
function Ht() {
  return Ht = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ht.apply(this, arguments);
}
function ji(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ji(Object(n), !0).forEach(function(r) {
      Fp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ji(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Fp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Up(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, s, a = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (a.push(i.value), !r || a.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, s = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw s;
        }
      }
      return a;
    }
  }(e, t) || function(n, r) {
    if (!!n) {
      if (typeof n == "string")
        return Ii(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return Ii(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Ii(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function qp(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(s, a) {
    if (s == null)
      return {};
    var l, u, c = {}, p = Object.keys(s);
    for (u = 0; u < p.length; u++)
      l = p[u], a.indexOf(l) >= 0 || (c[l] = s[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Wp(e) {
  var t = e.appId, n = e.apiKey, r = e.indexName, o = e.placeholder, i = o === void 0 ? "Search docs" : o, s = e.searchParameters, a = e.onClose, l = a === void 0 ? hp : a, u = e.transformItems, c = u === void 0 ? xi : u, p = e.hitComponent, f = p === void 0 ? Gf : p, d = e.resultsFooterComponent, v = d === void 0 ? function() {
    return null;
  } : d, _ = e.navigator, w = e.initialScrollY, y = w === void 0 ? 0 : w, S = e.transformSearchClient, k = S === void 0 ? xi : S, O = e.disableUserPersonalization, $ = O !== void 0 && O, D = e.initialQuery, E = D === void 0 ? "" : D, A = e.translations, C = A === void 0 ? {} : A, Z = e.getMissingResultsUrl, te = C.footer, ie = C.searchBox, J = qp(C, Vp), de = Up(m.useState({ query: "", collections: [], completion: null, context: {}, isOpen: !1, activeItemId: null, status: "idle" }), 2), ye = de[0], tt = de[1], Ue = m.useRef(null), Ee = m.useRef(null), qe = m.useRef(null), nt = m.useRef(null), T = m.useRef(null), x = m.useRef(10), j = m.useRef(typeof window < "u" ? window.getSelection().toString().slice(0, 64) : "").current, M = m.useRef(E || j).current, re = function(N, F, oe) {
    return m.useMemo(function() {
      var se = la(N, F);
      return se.addAlgoliaAgent("docsearch", "3.3.0"), /docsearch.js \(.*\)/.test(se.transporter.userAgent.value) === !1 && se.addAlgoliaAgent("docsearch-react", "3.3.0"), oe(se);
    }, [N, F, oe]);
  }(t, n, k), Q = m.useRef(Oi({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r), limit: 10 })).current, Y = m.useRef(Oi({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r), limit: Q.getAll().length === 0 ? 7 : 4 })).current, xe = m.useCallback(function(N) {
    if (!$) {
      var F = N.type === "content" ? N.__docsearch_parent : N;
      F && Q.getAll().findIndex(function(oe) {
        return oe.objectID === F.objectID;
      }) === -1 && Y.add(F);
    }
  }, [Q, Y, $]), ve = m.useMemo(function() {
    return Wf({ id: "docsearch", defaultActiveItemId: 0, placeholder: i, openOnFocus: !0, initialState: { query: M, context: { searchSuggestions: [] } }, navigator: _, onStateChange: function(N) {
      tt(N.state);
    }, getSources: function(N) {
      var F = N.query, oe = N.state, se = N.setContext, be = N.setStatus;
      return F ? re.search([{ query: F, indexName: r, params: nr({ attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(x.current), "hierarchy.lvl2:".concat(x.current), "hierarchy.lvl3:".concat(x.current), "hierarchy.lvl4:".concat(x.current), "hierarchy.lvl5:".concat(x.current), "hierarchy.lvl6:".concat(x.current), "content:".concat(x.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20 }, s) }]).catch(function(X) {
        throw X.name === "RetryError" && be("error"), X;
      }).then(function(X) {
        var ae = X.results[0], fe = ae.hits, Ie = ae.nbHits, rt = wi(fe, function(ot) {
          return Zs(ot);
        });
        return oe.context.searchSuggestions.length < Object.keys(rt).length && se({ searchSuggestions: Object.keys(rt) }), se({ nbHits: Ie }), Object.values(rt).map(function(ot, $t) {
          return { sourceId: "hits".concat($t), onSelect: function(Oe) {
            var Ke = Oe.item, ke = Oe.event;
            xe(Ke), ke.shiftKey || ke.ctrlKey || ke.metaKey || l();
          }, getItemUrl: function(Oe) {
            return Oe.item.url;
          }, getItems: function() {
            return Object.values(wi(ot, function(Oe) {
              return Oe.hierarchy.lvl1;
            })).map(c).map(function(Oe) {
              return Oe.map(function(Ke) {
                return nr(nr({}, Ke), {}, { __docsearch_parent: Ke.type !== "lvl1" && Oe.find(function(ke) {
                  return ke.type === "lvl1" && ke.hierarchy.lvl1 === Ke.hierarchy.lvl1;
                }) });
              });
            }).flat();
          } };
        });
      }) : $ ? [] : [{ sourceId: "recentSearches", onSelect: function(X) {
        var ae = X.item, fe = X.event;
        xe(ae), fe.shiftKey || fe.ctrlKey || fe.metaKey || l();
      }, getItemUrl: function(X) {
        return X.item.url;
      }, getItems: function() {
        return Y.getAll();
      } }, { sourceId: "favoriteSearches", onSelect: function(X) {
        var ae = X.item, fe = X.event;
        xe(ae), fe.shiftKey || fe.ctrlKey || fe.metaKey || l();
      }, getItemUrl: function(X) {
        return X.item.url;
      }, getItems: function() {
        return Q.getAll();
      } }];
    } });
  }, [r, s, re, l, Y, Q, xe, M, i, _, c, $]), _e = ve.getEnvironmentProps, ce = ve.getRootProps, We = ve.refresh;
  return function(N) {
    var F = N.getEnvironmentProps, oe = N.panelElement, se = N.formElement, be = N.inputElement;
    m.useEffect(function() {
      if (oe && se && be) {
        var X = F({ panelElement: oe, formElement: se, inputElement: be }), ae = X.onTouchStart, fe = X.onTouchMove;
        return window.addEventListener("touchstart", ae), window.addEventListener("touchmove", fe), function() {
          window.removeEventListener("touchstart", ae), window.removeEventListener("touchmove", fe);
        };
      }
    }, [F, oe, se, be]);
  }({ getEnvironmentProps: _e, panelElement: nt.current, formElement: qe.current, inputElement: T.current }), function(N) {
    var F = N.container;
    m.useEffect(function() {
      if (F) {
        var oe = F.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), se = oe[0], be = oe[oe.length - 1];
        return F.addEventListener("keydown", X), function() {
          F.removeEventListener("keydown", X);
        };
      }
      function X(ae) {
        ae.key === "Tab" && (ae.shiftKey ? document.activeElement === se && (ae.preventDefault(), be.focus()) : document.activeElement === be && (ae.preventDefault(), se.focus()));
      }
    }, [F]);
  }({ container: Ue.current }), m.useEffect(function() {
    return document.body.classList.add("DocSearch--active"), function() {
      var N, F;
      document.body.classList.remove("DocSearch--active"), (N = (F = window).scrollTo) === null || N === void 0 || N.call(F, 0, y);
    };
  }, []), m.useEffect(function() {
    window.matchMedia("(max-width: 768px)").matches && (x.current = 5);
  }, []), m.useEffect(function() {
    nt.current && (nt.current.scrollTop = 0);
  }, [ye.query]), m.useEffect(function() {
    M.length > 0 && (We(), T.current && T.current.focus());
  }, [M, We]), m.useEffect(function() {
    function N() {
      if (Ee.current) {
        var F = 0.01 * window.innerHeight;
        Ee.current.style.setProperty("--docsearch-vh", "".concat(F, "px"));
      }
    }
    return N(), window.addEventListener("resize", N), function() {
      window.removeEventListener("resize", N);
    };
  }, []), m.createElement("div", Ht({ ref: Ue }, ce({ "aria-expanded": !0 }), { className: ["DocSearch", "DocSearch-Container", ye.status === "stalled" && "DocSearch-Container--Stalled", ye.status === "error" && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(N) {
    N.target === N.currentTarget && l();
  } }), m.createElement("div", { className: "DocSearch-Modal", ref: Ee }, m.createElement("header", { className: "DocSearch-SearchBar", ref: qe }, m.createElement(Sp, Ht({}, ve, { state: ye, autoFocus: M.length === 0, inputRef: T, isFromSelection: Boolean(M) && M === j, translations: ie, onClose: l }))), m.createElement("div", { className: "DocSearch-Dropdown", ref: nt }, m.createElement(xp, Ht({}, ve, { indexName: r, state: ye, hitComponent: f, resultsFooterComponent: v, disableUserPersonalization: $, recentSearches: Y, favoriteSearches: Q, inputRef: T, translations: J, getMissingResultsUrl: Z, onItemClick: function(N) {
    xe(N), l();
  } }))), m.createElement("footer", { className: "DocSearch-Footer" }, m.createElement(Jf, { translations: te }))));
}
function Pr() {
  return Pr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Pr.apply(this, arguments);
}
function Ti(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, s, a = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (a.push(i.value), !r || a.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, s = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw s;
        }
      }
      return a;
    }
  }(e, t) || function(n, r) {
    if (!!n) {
      if (typeof n == "string")
        return Ai(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return Ai(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Ai(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Kp(e) {
  var t, n, r = m.useRef(null), o = Ti(m.useState(!1), 2), i = o[0], s = o[1], a = Ti(m.useState((e == null ? void 0 : e.initialQuery) || void 0), 2), l = a[0], u = a[1], c = m.useCallback(function() {
    s(!0);
  }, [s]), p = m.useCallback(function() {
    s(!1);
  }, [s]);
  return function(f) {
    var d = f.isOpen, v = f.onOpen, _ = f.onClose, w = f.onInput, y = f.searchButtonRef;
    m.useEffect(function() {
      function S(k) {
        (k.keyCode === 27 && d || k.key.toLowerCase() === "k" && (k.metaKey || k.ctrlKey) || !function(O) {
          var $ = O.target, D = $.tagName;
          return $.isContentEditable || D === "INPUT" || D === "SELECT" || D === "TEXTAREA";
        }(k) && k.key === "/" && !d) && (k.preventDefault(), d ? _() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || v()), y && y.current === document.activeElement && w && /[a-zA-Z0-9]/.test(String.fromCharCode(k.keyCode)) && w(k);
      }
      return window.addEventListener("keydown", S), function() {
        window.removeEventListener("keydown", S);
      };
    }, [d, v, _, w, y]);
  }({ isOpen: i, onOpen: c, onClose: p, onInput: m.useCallback(function(f) {
    s(!0), u(f.key);
  }, [s, u]), searchButtonRef: r }), m.createElement(m.Fragment, null, m.createElement(cf, { ref: r, translations: e == null || (t = e.translations) === null || t === void 0 ? void 0 : t.button, onClick: c }), i && Fs(m.createElement(Wp, Pr({}, e, { initialScrollY: window.scrollY, initialQuery: l, translations: e == null || (n = e.translations) === null || n === void 0 ? void 0 : n.modal, onClose: p })), document.body));
}
function Jp(e) {
  qs(m.createElement(Kp, fr({}, e, { transformSearchClient: function(t) {
    return t.addAlgoliaAgent("docsearch.js", "3.3.0"), e.transformSearchClient ? e.transformSearchClient(t) : t;
  } })), function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
    return typeof t == "string" ? n.document.querySelector(t) : t;
  }(e.container, e.environment));
}
const Gp = {
  class: "algolia-search-box",
  id: "docsearch"
}, Qp = /* @__PURE__ */ L({
  __name: "AlgoliaSearchBox",
  props: {
    options: null
  },
  setup(e) {
    const t = e, n = gt("useRouter"), r = gt("useRoute"), o = Vi(), i = n(), s = r();
    Re(
      () => t.options,
      (f) => {
        l(f);
      }
    ), xt(() => {
      p(t.options);
    });
    function a(f) {
      const { pathname: d, hash: v } = new URL(f);
      return d + v;
    }
    function l(f) {
      o && o.vnode.el && (o.vnode.el.innerHTML = '<div class="algolia-search-box" id="docsearch"></div>', p(f));
    }
    function u(f) {
      if (f.startsWith("http"))
        return window.location.assign(f);
      window.location.assign(window.location.origin + f);
    }
    function c(f) {
      const d = (() => f.includes("api-reference") || f.includes("docs.") && !f.startsWith(window.location.origin) ? f : f.startsWith("http") ? a(f) : f)();
      return window != null && window.__DEBUG && console.log(`getTargetUrl('${f}') -> ${d}`), d;
    }
    function p(f) {
      Jp(
        Object.assign({}, f, {
          container: "#docsearch",
          searchParameters: Object.assign({}, f.searchParameters),
          navigator: {
            navigate: ({ suggestionUrl: d }) => {
              const v = c(d);
              if (v.startsWith("http") || s.path === v)
                return u(v);
              i.go(v);
            }
          },
          transformItems: (d) => d.map((v) => Object.assign({}, v, {
            url: c(v.url)
          })),
          hitComponent({ hit: d, children: v }) {
            return {
              __v: null,
              type: "a",
              ref: void 0,
              constructor: void 0,
              key: void 0,
              props: { href: d.url, children: v }
            };
          }
        })
      );
    }
    return (f, d) => (g(), b("div", Gp));
  }
});
const Yp = /* @__PURE__ */ h("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ h("path", {
    "fill-rule": "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    "clip-rule": "evenodd"
  })
], -1), Zp = /* @__PURE__ */ h("span", { class: "ml-2" }, "Search", -1), Xp = { class: "sr-only" }, eh = {
  class: "absolute right-3 text-sm font-semibold",
  "aria-hidden": "true"
}, th = /* @__PURE__ */ L({
  __name: "SearchButton",
  setup(e) {
    const t = typeof navigator < "u" ? navigator.platform : "", n = /(Mac|iPhone|iPod|iPad)/i.test(t) ? "\u2318" : "Ctrl ", r = /(Mac|iPhone|iPod|iPad)/i.test(t) ? "Command" : "Control", o = () => {
      document.querySelector(
        "#docsearch .DocSearch-Button"
      ).click();
    }, i = {
      appId: "110JARHFDU",
      apiKey: "310ff6509ce699c2ac968fc825224f26",
      indexName: "nativescript-new",
      debug: !0
    };
    return (s, a) => {
      const l = ge("ClientOnly");
      return g(), b(R, null, [
        H(l, null, {
          default: $e(() => [
            H(Qp, {
              options: i,
              class: "sr-only"
            })
          ]),
          _: 1
        }),
        h("div", {
          class: "relative flex cursor-pointer items-center rounded-md bg-white/20 px-3 py-1.5 pr-20 text-white transition-shadow hover:shadow-md dark:bg-white/10 dark:ring-1 dark:ring-slate-300/10 dark:hover:ring-cyan-400/50",
          onClick: o
        }, [
          Yp,
          Zp,
          H(l, null, {
            default: $e(() => [
              h("span", Xp, "Press " + z(P(r)) + "+K to open quick search", 1),
              h("span", eh, z(P(n)) + "K", 1)
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
}), nh = /* @__PURE__ */ h("a", {
  href: "https://blog.nativescript.org/nativescript-preview-announcement",
  class: "flex flex-col content-center items-center justify-center bg-white px-4 py-2 text-white dark:border-b dark:border-white/10 dark:bg-transparent md:flex-row"
}, [
  /* @__PURE__ */ h("span", { class: "text-sm font-medium text-gray-800 dark:text-white" }, [
    /* @__PURE__ */ h("b", null, "Preview 2.0"),
    /* @__PURE__ */ Ne(" is now in Public Beta!")
  ]),
  /* @__PURE__ */ h("div", { class: "ml-2 text-sm font-bold text-gray-900 underline dark:text-white" }, [
    /* @__PURE__ */ Ne("Read the Announcement "),
    /* @__PURE__ */ h("span", { "aria-hidden": "true" }, "\u2192")
  ])
], -1), rh = { class: "nav-bar top-0 z-10 lg:sticky" }, oh = { class: "bg-ns-blue py-4 backdrop-blur dark:bg-slate-900 dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/80" }, ih = {
  class: "relative mx-auto flex items-center justify-between px-4 sm:px-6 2xl:container",
  "aria-label": "Global"
}, sh = { class: "flex flex-1 items-center" }, ah = { class: "flex w-full items-center justify-between lg:w-auto" }, lh = ["href"], ch = /* @__PURE__ */ h("span", { class: "sr-only" }, "NativeScript", -1), uh = { class: "-mr-1 flex items-center lg:hidden" }, dh = /* @__PURE__ */ h("span", { class: "sr-only" }, "Open main menu", -1), fh = /* @__PURE__ */ h("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M4 6h16M4 12h16M4 18h16"
  })
], -1), ph = [
  dh,
  fh
], hh = { class: "ml-10 hidden space-x-8 lg:flex" }, mh = { class: "flex flex-1 justify-center px-2 lg:justify-end" }, vh = { class: "w-full max-w-xl xl:max-w-xs" }, _h = { class: "hidden lg:flex lg:items-center lg:space-x-6" }, gh = ["href", "target"], yh = { class: "relative" }, bh = ["aria-expanded"], wh = /* @__PURE__ */ h("span", { class: "sr-only" }, "Open additional menu", -1), xh = /* @__PURE__ */ h("svg", {
  class: "h-6 w-6",
  role: "presentation",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
  })
], -1), Oh = [
  wh,
  xh
], kh = {
  key: 0,
  class: "absolute left-24 z-10 mt-3 w-screen max-w-xs -translate-x-full transform px-2 sm:px-0"
}, Sh = { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:shadow-none dark:ring-slate-300/10" }, $h = { class: "relative grid gap-6 bg-white px-5 py-6 dark:bg-slate-800 sm:gap-8 sm:p-8" }, Ph = ["href", "target"], Eh = { class: "text-base font-medium text-gray-900 dark:text-slate-200" }, Ch = { class: "mt-1 text-sm text-gray-500 dark:text-slate-400" }, jh = /* @__PURE__ */ h("a", {
  href: "https://github.com/NativeScript/NativeScript",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "inline-flex items-center justify-center rounded-md p-2 text-gray-900 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent dark:text-white dark:hover:text-amber-200",
  "aria-expanded": "false"
}, [
  /* @__PURE__ */ h("span", { class: "sr-only" }, "Open NativeScript GitHub"),
  /* @__PURE__ */ h("svg", {
    class: "h-6 w-6",
    role: "presentation",
    viewBox: "0 0 16 16",
    fill: "currentColor"
  }, [
    /* @__PURE__ */ h("path", {
      "fill-rule": "evenodd",
      d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    })
  ])
], -1), Ih = {
  key: 0,
  class: "absolute inset-x-0 top-0 z-20 origin-top transform p-2 transition lg:hidden"
}, Th = { class: "overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5" }, Ah = { class: "flex items-center justify-between px-5 pt-4" }, Nh = { class: "-mr-3" }, Dh = /* @__PURE__ */ h("span", { class: "sr-only" }, "Close menu", -1), Lh = /* @__PURE__ */ h("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Mh = [
  Dh,
  Lh
], Rh = { class: "pt-5 pb-6" }, Bh = { class: "space-y-1 px-2" }, Hh = ["href", "target"], zh = ["href", "target"], Vh = { class: "mt-6 px-5" }, Fh = { class: "w-full" }, Uh = /* @__PURE__ */ h("div", { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" }, [
  /* @__PURE__ */ h("svg", {
    class: "h-5 w-5",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ h("path", {
      "fill-rule": "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      "clip-rule": "evenodd"
    })
  ])
], -1), qh = /* @__PURE__ */ h("button", { class: "block w-full rounded-md bg-ns-blue py-3 pl-10 text-left" }, "Search Anything", -1), Wh = [
  Uh,
  qh
], Kh = /* @__PURE__ */ L({
  __name: "Header",
  props: {
    nav: {
      type: Array,
      default() {
        return ko.nav;
      }
    },
    flyoutNav: {
      type: Array,
      default() {
        return ko.flyoutNav;
      }
    },
    mainURL: {
      default: "/",
      type: String
    }
  },
  setup(e) {
    const t = K(!1), n = K(!1);
    return (r, o) => (g(), b(R, null, [
      nh,
      h("header", rh, [
        h("div", oh, [
          h("nav", ih, [
            h("div", sh, [
              h("div", ah, [
                h("a", { href: e.mainURL }, [
                  ch,
                  H(So, {
                    class: "h-8 w-auto sm:h-10",
                    "aria-hidden": "true"
                  })
                ], 8, lh),
                h("div", uh, [
                  h("button", {
                    onClick: o[0] || (o[0] = (i) => t.value = !0),
                    type: "button",
                    class: "focus-ring-inset inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",
                    "aria-expanded": "false"
                  }, ph)
                ])
              ]),
              h("div", hh, [
                h("div", mh, [
                  h("div", vh, [
                    H(th)
                  ])
                ])
              ])
            ]),
            h("div", _h, [
              (g(!0), b(R, null, G(e.nav, (i, s) => (g(), b("a", {
                key: s,
                href: i.link,
                target: i.target,
                class: "border-b-4 border-transparent text-base font-medium text-white hover:border-blue-100"
              }, z(i.text), 9, gh))), 128)),
              h("div", yh, [
                h("button", {
                  onClick: o[1] || (o[1] = Be((i) => n.value = !n.value, ["prevent"])),
                  class: ne(["relative z-20 inline-flex items-center justify-center rounded-md p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent", {
                    "bg-white text-gray-900": n.value,
                    "text-white hover:text-gray-900 dark:hover:text-slate-400": !n.value
                  }]),
                  role: "button",
                  "aria-expanded": n.value
                }, Oh, 10, bh),
                H(qn, {
                  "enter-from-class": "opacity-0",
                  "enter-to-class": "opacity-100",
                  "leave-from-class": "opacity-100",
                  "leave-to-class": "opacity-0"
                }, {
                  default: $e(() => [
                    n.value ? (g(), b("button", {
                      key: 0,
                      tabindex: "-1",
                      onClick: o[2] || (o[2] = (i) => n.value = !1),
                      class: "fixed inset-0 z-10 h-screen w-screen cursor-default bg-slate-300/40 transition duration-200 dark:bg-slate-900/70"
                    })) : W("", !0)
                  ]),
                  _: 1
                }),
                H(qn, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "translate-y-1 opacity-0",
                  "enter-to-class": "translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "translate-y-0 opacity-100",
                  "leave-to-class": "translate-y-1 opacity-0"
                }, {
                  default: $e(() => [
                    n.value ? (g(), b("div", kh, [
                      h("div", Sh, [
                        h("div", $h, [
                          (g(!0), b(R, null, G(e.flyoutNav, (i, s) => (g(), b("a", {
                            key: s,
                            href: i.link,
                            target: i.target,
                            class: "-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-slate-700/50"
                          }, [
                            h("p", Eh, z(i.text), 1),
                            h("p", Ch, z(i.description), 1)
                          ], 8, Ph))), 128))
                        ])
                      ])
                    ])) : W("", !0)
                  ]),
                  _: 1
                })
              ]),
              jh
            ])
          ])
        ]),
        H(qn, {
          "enter-active-class": "duration-150 ease-out",
          "enter-from-class": "scale-95 opacity-0",
          "enter-to-class": "scale-100 opacity-100",
          "leave-active-class": "duration-100 ease-in",
          "leave-from-class": "scale-100 opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: $e(() => [
            t.value ? (g(), b("div", Ih, [
              h("div", Th, [
                h("div", Ah, [
                  h("div", null, [
                    H(So, {
                      class: "h-8 w-auto",
                      variant: "blue",
                      "aria-hidden": "true"
                    })
                  ]),
                  h("div", Nh, [
                    h("button", {
                      onClick: o[3] || (o[3] = (i) => t.value = !1),
                      type: "button",
                      class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    }, Mh)
                  ])
                ]),
                h("div", Rh, [
                  h("div", Bh, [
                    (g(!0), b(R, null, G(e.nav, (i, s) => (g(), b("a", {
                      key: s,
                      onClick: o[4] || (o[4] = (a) => t.value = !1),
                      href: i.link,
                      target: i.target,
                      class: "block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    }, z(i.text), 9, Hh))), 128)),
                    (g(!0), b(R, null, G(e.flyoutNav, (i, s) => (g(), b("a", {
                      key: s,
                      onClick: o[5] || (o[5] = (a) => t.value = !1),
                      href: i.link,
                      target: i.target,
                      class: "block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    }, z(i.text), 9, zh))), 128))
                  ]),
                  h("div", Vh, [
                    h("div", Fh, [
                      h("div", {
                        onClickCapture: o[6] || (o[6] = (...i) => r.openSearch && r.openSearch(...i)),
                        class: "relative text-white"
                      }, Wh, 32)
                    ])
                  ])
                ])
              ])
            ])) : W("", !0)
          ]),
          _: 1
        })
      ])
    ], 64));
  }
});
const Jh = {}, Gh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "h-5 w-5"
}, Qh = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
  "clip-rule": "evenodd"
}, null, -1), Yh = [
  Qh
];
function Zh(e, t) {
  return g(), b("svg", Gh, Yh);
}
const Xh = /* @__PURE__ */ kt(Jh, [["render", Zh]]), e0 = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, t0 = {
  role: "list",
  class: "flex items-center space-x-3"
}, n0 = {
  href: "/",
  class: "text-slate-400 hover:text-slate-500 dark:hover:text-cyan-300"
}, r0 = /* @__PURE__ */ h("span", { class: "sr-only" }, "Home", -1), o0 = { class: "flex items-center" }, i0 = /* @__PURE__ */ L({
  __name: "Breadcrumbs",
  setup(e) {
    const t = Yt(), { page: n } = Pe(), r = U(() => Nr(t.value)), o = U(() => {
      const i = [];
      let s = r.value.find((a) => Ot(n.value.relativePath, a.link));
      if (!s) {
        const { category: a, categoryLink: l } = n.value.frontmatter;
        return [
          ...a ? [
            {
              name: a,
              href: l
            }
          ] : [],
          {
            name: n.value.title,
            href: n.value.relativePath,
            current: !0
          }
        ];
      }
      for (i.push({
        name: s.text,
        href: s.link,
        current: !0
      }); s = s.parent; ) {
        let a;
        s.hidden ? !s.href && s.parent : a = s.link, i.unshift({
          name: s.text,
          href: a,
          current: !1
        });
      }
      return i;
    });
    return (i, s) => (g(), b("nav", e0, [
      h("ol", t0, [
        h("li", null, [
          h("div", null, [
            h("a", n0, [
              H(Xh, {
                class: "flex-shrink-0",
                "aria-hidden": "true"
              }),
              r0
            ])
          ])
        ]),
        (g(!0), b(R, null, G(P(o), (a) => (g(), b("li", {
          key: a.name
        }, [
          h("div", o0, [
            H(un, {
              class: "flex-shrink-0 text-slate-400 dark:text-slate-500",
              "aria-hidden": "true"
            }),
            (g(), le(Jt(a.href ? "a" : "div"), {
              href: a.href,
              class: ne([
                "ml-3 text-sm font-medium text-slate-500 dark:text-slate-400",
                a.href ? "hover:text-slate-700 dark:hover:text-cyan-300" : ""
              ]),
              "aria-current": a.current ? "page" : void 0
            }, {
              default: $e(() => [
                Ne(z(a.name), 1)
              ]),
              _: 2
            }, 1032, ["href", "class", "aria-current"]))
          ])
        ]))), 128))
      ])
    ]));
  }
}), s0 = /* @__PURE__ */ h("h4", { class: "text-sm font-bold text-gray-900 dark:text-white" }, " Contributors ", -1), a0 = { class: "mt-2 flex -space-x-1 overflow-hidden" }, l0 = ["href"], c0 = ["src", "alt"], u0 = /* @__PURE__ */ L({
  __name: "ContributorsList",
  setup(e) {
    const { page: t } = Pe();
    U(() => {
      var r;
      return (r = t.value.contributors) == null ? void 0 : r.authors;
    });
    const n = [
      {
        username: "rigor789",
        avatarURL: "https://github.com/rigor789.png?size=24",
        profileURL: "https://github.com/rigor789"
      },
      {
        username: "NathanWalker",
        avatarURL: "https://github.com/NathanWalker.png?size=24",
        profileURL: "https://github.com/NathanWalker"
      },
      {
        username: "Edusperoni",
        avatarURL: "https://github.com/Edusperoni.png?size=24",
        profileURL: "https://github.com/Edusperoni"
      },
      {
        username: "triniwiz",
        avatarURL: "https://github.com/triniwiz.png?size=24",
        profileURL: "https://github.com/triniwiz"
      },
      {
        username: "Ombuweb",
        avatarURL: "https://github.com/Ombuweb.png?size=24",
        profileURL: "https://github.com/Ombuweb"
      }
    ];
    return (r, o) => {
      const i = Aa("tooltip");
      return g(), b("div", null, [
        s0,
        h("div", a0, [
          (g(), b(R, null, G(n, (s) => yt(h("a", {
            href: s.profileURL,
            target: "_blank"
          }, [
            h("img", {
              class: "inline-block h-6 w-6 cursor-pointer rounded-full ring-2 ring-white dark:ring-slate-800",
              src: s.avatarURL,
              alt: s.username
            }, null, 8, c0)
          ], 8, l0), [
            [i, s.username]
          ])), 64))
        ])
      ]);
    };
  }
}), d0 = { class: "text-xs text-slate-500" }, f0 = ["datatime"], p0 = /* @__PURE__ */ L({
  __name: "LastUpdatedLabel",
  setup(e) {
    const { theme: t, page: n } = Pe(), r = U(() => {
      if (!!n.value.lastUpdated)
        return new Date(n.value.lastUpdated);
    }), o = U(() => {
      var s;
      return (s = r.value) == null ? void 0 : s.toISOString();
    }), i = K();
    return xt(() => {
      jr(() => {
        var s;
        i.value = (s = r.value) == null ? void 0 : s.toLocaleString(window.navigator.language);
      });
    }), (s, a) => {
      var l;
      return yt((g(), b("p", d0, [
        Ne(z((l = P(t).lastUpdatedText) != null ? l : "Last updated") + ": ", 1),
        h("time", { datatime: P(o) }, z(i.value), 9, f0)
      ], 512)), [
        [vn, i.value]
      ]);
    };
  }
});
var ca = { exports: {} };
/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(qu, function() {
    function n(T) {
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? n = function(x) {
        return typeof x;
      } : n = function(x) {
        return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
      }, n(T);
    }
    function r() {
      return r = Object.assign || function(T) {
        for (var x = 1; x < arguments.length; x++) {
          var j = arguments[x];
          for (var M in j)
            Object.prototype.hasOwnProperty.call(j, M) && (T[M] = j[M]);
        }
        return T;
      }, r.apply(this, arguments);
    }
    var o = 4, i = 1e-3, s = 1e-7, a = 10, l = 11, u = 1 / (l - 1), c = typeof Float32Array == "function";
    function p(T, x) {
      return 1 - 3 * x + 3 * T;
    }
    function f(T, x) {
      return 3 * x - 6 * T;
    }
    function d(T) {
      return 3 * T;
    }
    function v(T, x, j) {
      return ((p(x, j) * T + f(x, j)) * T + d(x)) * T;
    }
    function _(T, x, j) {
      return 3 * p(x, j) * T * T + 2 * f(x, j) * T + d(x);
    }
    function w(T, x, j, M, re) {
      var Q, Y, xe = 0;
      do
        Y = x + (j - x) / 2, Q = v(Y, M, re) - T, Q > 0 ? j = Y : x = Y;
      while (Math.abs(Q) > s && ++xe < a);
      return Y;
    }
    function y(T, x, j, M) {
      for (var re = 0; re < o; ++re) {
        var Q = _(x, j, M);
        if (Q === 0)
          return x;
        var Y = v(x, j, M) - T;
        x -= Y / Q;
      }
      return x;
    }
    function S(T) {
      return T;
    }
    var k = function(x, j, M, re) {
      if (!(0 <= x && x <= 1 && 0 <= M && M <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      if (x === j && M === re)
        return S;
      for (var Q = c ? new Float32Array(l) : new Array(l), Y = 0; Y < l; ++Y)
        Q[Y] = v(Y * u, x, M);
      function xe(ve) {
        for (var _e = 0, ce = 1, We = l - 1; ce !== We && Q[ce] <= ve; ++ce)
          _e += u;
        --ce;
        var N = (ve - Q[ce]) / (Q[ce + 1] - Q[ce]), F = _e + N * u, oe = _(F, x, M);
        return oe >= i ? y(ve, F, x, M) : oe === 0 ? F : w(ve, _e, _e + u, x, M);
      }
      return function(_e) {
        return _e === 0 ? 0 : _e === 1 ? 1 : v(xe(_e), j, re);
      };
    }, O = {
      ease: [0.25, 0.1, 0.25, 1],
      linear: [0, 0, 1, 1],
      "ease-in": [0.42, 0, 1, 1],
      "ease-out": [0, 0, 0.58, 1],
      "ease-in-out": [0.42, 0, 0.58, 1]
    }, $ = !1;
    try {
      var D = Object.defineProperty({}, "passive", {
        get: function() {
          $ = !0;
        }
      });
      window.addEventListener("test", null, D);
    } catch {
    }
    var E = {
      $: function(x) {
        return typeof x != "string" ? x : document.querySelector(x);
      },
      on: function(x, j, M) {
        var re = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
          passive: !1
        };
        j instanceof Array || (j = [j]);
        for (var Q = 0; Q < j.length; Q++)
          x.addEventListener(j[Q], M, $ ? re : !1);
      },
      off: function(x, j, M) {
        j instanceof Array || (j = [j]);
        for (var re = 0; re < j.length; re++)
          x.removeEventListener(j[re], M);
      },
      cumulativeOffset: function(x) {
        var j = 0, M = 0;
        do
          j += x.offsetTop || 0, M += x.offsetLeft || 0, x = x.offsetParent;
        while (x);
        return {
          top: j,
          left: M
        };
      }
    }, A = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"], C = {
      container: "body",
      duration: 500,
      lazy: !0,
      easing: "ease",
      offset: 0,
      force: !0,
      cancelable: !0,
      onStart: !1,
      onDone: !1,
      onCancel: !1,
      x: !1,
      y: !0
    };
    function Z(T) {
      C = r({}, C, T);
    }
    var te = function() {
      var x, j, M, re, Q, Y, xe, ve, _e, ce, We, N, F, oe, se, be, X, ae, fe, Ie, rt, ot, $t, Oe = function(ue) {
        !ve || ($t = ue, Ie = !0);
      }, Ke, ke, Fn, Pt;
      function ha(pe) {
        var ue = pe.scrollTop;
        return pe.tagName.toLowerCase() === "body" && (ue = ue || document.documentElement.scrollTop), ue;
      }
      function ma(pe) {
        var ue = pe.scrollLeft;
        return pe.tagName.toLowerCase() === "body" && (ue = ue || document.documentElement.scrollLeft), ue;
      }
      function Rr() {
        rt = E.cumulativeOffset(j), ot = E.cumulativeOffset(x), N && (se = ot.left - rt.left + Y, ae = se - oe), F && (X = ot.top - rt.top + Y, fe = X - be);
      }
      function Br(pe) {
        if (Ie)
          return Hr();
        ke || (ke = pe), Q || Rr(), Fn = pe - ke, Pt = Math.min(Fn / M, 1), Pt = Ke(Pt), zr(j, be + fe * Pt, oe + ae * Pt), Fn < M ? window.requestAnimationFrame(Br) : Hr();
      }
      function Hr() {
        Ie || zr(j, X, se), ke = !1, E.off(j, A, Oe), Ie && We && We($t, x), !Ie && ce && ce(x);
      }
      function zr(pe, ue, ee) {
        F && (pe.scrollTop = ue), N && (pe.scrollLeft = ee), pe.tagName.toLowerCase() === "body" && (F && (document.documentElement.scrollTop = ue), N && (document.documentElement.scrollLeft = ee));
      }
      function va(pe, ue) {
        var ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (n(ue) === "object" ? ee = ue : typeof ue == "number" && (ee.duration = ue), x = E.$(pe), !x)
          return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + pe);
        if (j = E.$(ee.container || C.container), M = ee.hasOwnProperty("duration") ? ee.duration : C.duration, Q = ee.hasOwnProperty("lazy") ? ee.lazy : C.lazy, re = ee.easing || C.easing, Y = ee.hasOwnProperty("offset") ? ee.offset : C.offset, xe = ee.hasOwnProperty("force") ? ee.force !== !1 : C.force, ve = ee.hasOwnProperty("cancelable") ? ee.cancelable !== !1 : C.cancelable, _e = ee.onStart || C.onStart, ce = ee.onDone || C.onDone, We = ee.onCancel || C.onCancel, N = ee.x === void 0 ? C.x : ee.x, F = ee.y === void 0 ? C.y : ee.y, typeof Y == "function" && (Y = Y(x, j)), oe = ma(j), be = ha(j), Rr(), Ie = !1, !xe) {
          var _a = j.tagName.toLowerCase() === "body" ? document.documentElement.clientHeight || window.innerHeight : j.offsetHeight, Vr = be, ga = Vr + _a, Fr = X - Y, ya = Fr + x.offsetHeight;
          if (Fr >= Vr && ya <= ga) {
            ce && ce(x);
            return;
          }
        }
        if (_e && _e(x), !fe && !ae) {
          ce && ce(x);
          return;
        }
        return typeof re == "string" && (re = O[re] || O.ease), Ke = k.apply(k, re), E.on(j, A, Oe, {
          passive: !0
        }), window.requestAnimationFrame(Br), function() {
          $t = null, Ie = !0;
        };
      }
      return va;
    }, ie = te(), J = [];
    function de(T) {
      for (var x = 0; x < J.length; ++x)
        if (J[x].el === T)
          return J.splice(x, 1), !0;
      return !1;
    }
    function ye(T) {
      for (var x = 0; x < J.length; ++x)
        if (J[x].el === T)
          return J[x];
    }
    function tt(T) {
      var x = ye(T);
      return x || (J.push(x = {
        el: T,
        binding: {}
      }), x);
    }
    function Ue(T) {
      var x = tt(this).binding;
      if (!!x.value) {
        if (T.preventDefault(), typeof x.value == "string")
          return ie(x.value);
        ie(x.value.el || x.value.element, x.value);
      }
    }
    var Ee = {
      bind: function(x, j) {
        tt(x).binding = j, E.on(x, "click", Ue);
      },
      unbind: function(x) {
        de(x), E.off(x, "click", Ue);
      },
      update: function(x, j) {
        tt(x).binding = j;
      }
    }, qe = {
      bind: Ee.bind,
      unbind: Ee.unbind,
      update: Ee.update,
      beforeMount: Ee.bind,
      unmounted: Ee.unbind,
      updated: Ee.update,
      scrollTo: ie,
      bindings: J
    }, nt = function(x, j) {
      j && Z(j), x.directive("scroll-to", qe);
      var M = x.config.globalProperties || x.prototype;
      M.$scrollTo = qe.scrollTo;
    };
    return typeof window < "u" && window.Vue && (window.VueScrollTo = qe, window.VueScrollTo.setDefaults = Z, window.VueScrollTo.scroller = te, window.Vue.use && window.Vue.use(nt)), qe.install = nt, qe;
  });
})(ca);
const ua = ca.exports, h0 = /* @__PURE__ */ h("div", { class: "text-sm font-semibold leading-6 text-gray-900 dark:text-white" }, " On this page ", -1), m0 = { class: "mt-4 text-sm leading-6 text-slate-700 dark:text-slate-400" }, v0 = ["onClick"], _0 = ["href"], g0 = { key: 0 }, y0 = { class: "" }, b0 = ["href"], w0 = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "h-6 w-6 overflow-visible p-1 text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
}, [
  /* @__PURE__ */ h("path", {
    "fill-rule": "evenodd",
    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
    "clip-rule": "evenodd"
  })
], -1), x0 = /* @__PURE__ */ L({
  __name: "OnThisPage",
  setup(e) {
    const { page: t } = Pe(), n = U(() => t.value.headers), r = U(() => n.value.flatMap((p) => [
      p.link,
      ...p.children.map((f) => f.link)
    ]).map((p) => {
      if (p.charAt(0) === "#")
        return p.substring(1);
    }).filter(Boolean));
    function o(p) {
      if (!rr)
        return -1;
      let f = document.getElementById(p);
      if (!f)
        return -1;
      let d = window.getComputedStyle(f), v = parseFloat(d.scrollMarginTop), _ = parseFloat(d.marginTop);
      return window.scrollY + f.getBoundingClientRect().top - v - _ - 5;
    }
    const i = K(r.value[0]), { y: s } = Wc();
    jr(() => {
      let p;
      for (const f of r.value)
        s.value >= o(f) && (p = f);
      i.value = p != null ? p : r.value[0];
    });
    function a(p) {
      return rr ? p.link.substring(1) === i.value ? !0 : p.children ? p.children.findIndex(a) > -1 : !1 : !1;
    }
    function l({ target: p }) {
      const f = "#" + p.href.split("#")[1], d = document.querySelector(
        decodeURIComponent(f)
      );
      d == null || d.focus();
    }
    const u = U(() => (p) => {
      const f = a(p) ? "text-blue-500 dark:text-cyan-400" : "hover:text-slate-900 dark:hover:text-slate-300", d = p.title.includes(" ") ? "break-words" : "break-all";
      return f + " " + d;
    }), c = () => {
      ua.scrollTo("#top", 200, {
        force: !0
      });
    };
    return (p, f) => (g(), b(R, null, [
      h0,
      h("ol", m0, [
        h("li", null, [
          h("button", {
            href: "#top",
            onClick: Be(c, ["prevent"]),
            class: "block py-1 font-medium opacity-50 transition-opacity hover:text-slate-900 hover:opacity-100 dark:hover:text-slate-300"
          }, " \u2191 Top ", 8, v0)
        ]),
        (g(!0), b(R, null, G(P(n), (d) => (g(), b("li", null, [
          h("a", {
            href: d.link,
            onClick: l,
            class: ne([
              "block py-1 font-medium",
              a(d) ? "text-blue-500 dark:text-cyan-400" : "hover:text-slate-900 dark:hover:text-slate-300"
            ])
          }, z(d.title), 11, _0),
          d.children ? (g(), b("ol", g0, [
            (g(!0), b(R, null, G(d.children, (v) => (g(), b("li", y0, [
              h("a", {
                href: v.link,
                onClick: l,
                class: ne(["group flex items-start py-1", P(u)(v)])
              }, [
                w0,
                Ne(" " + z(v.title), 1)
              ], 10, b0)
            ]))), 256))
          ])) : W("", !0)
        ]))), 256))
      ])
    ], 64));
  }
});
function O0() {
  const { frontmatter: e, page: t } = Pe();
  return U(() => {
    var a, l;
    const n = Yt(), r = Nr(n.value).filter(
      (u) => !!u.link
    ), o = r.findIndex((u) => Ot(t.value.relativePath, u.link)), i = e.value.prev ? r.find((u) => u.link === e.value.prev) : r[o - 1], s = e.value.next ? r.find((u) => u.link === e.value.next) : r[o + 1];
    return {
      prev: e.value.prev !== !1 && i && { ...i, text: (a = e.value.prevText) != null ? a : i.text },
      next: e.value.next !== !1 && s && { ...s, text: (l = e.value.nextText) != null ? l : s.text }
    };
  });
}
const k0 = { class: "mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800" }, S0 = { key: 0 }, $0 = /* @__PURE__ */ h("dt", { class: "font-display text-sm font-medium text-slate-900 dark:text-white" }, " Previous ", -1), P0 = { class: "mt-1" }, E0 = ["href"], C0 = /* @__PURE__ */ h("span", { "aria-hidden": "true" }, "\u2190", -1), j0 = ["innerHTML"], I0 = {
  key: 1,
  class: "ml-auto text-right"
}, T0 = /* @__PURE__ */ h("dt", { class: "font-display text-sm font-medium text-slate-900 dark:text-white" }, " Next ", -1), A0 = { class: "mt-1" }, N0 = ["href"], D0 = ["innerHTML"], L0 = /* @__PURE__ */ h("span", { "aria-hidden": "true" }, "\u2192", -1), M0 = /* @__PURE__ */ L({
  __name: "PrevNextLinks",
  setup(e) {
    const t = O0();
    return (n, r) => (g(), b("dl", k0, [
      P(t).prev ? (g(), b("div", S0, [
        $0,
        h("dd", P0, [
          h("a", {
            href: P(t).prev.link,
            class: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          }, [
            C0,
            h("span", {
              innerHTML: P(t).prev.text
            }, null, 8, j0)
          ], 8, E0)
        ])
      ])) : W("", !0),
      P(t).next ? (g(), b("div", I0, [
        T0,
        h("dd", A0, [
          h("a", {
            href: P(t).next.link,
            class: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          }, [
            h("span", {
              innerHTML: P(t).next.text
            }, null, 8, D0),
            L0
          ], 8, N0)
        ])
      ])) : W("", !0)
    ]));
  }
});
function R0() {
  const { theme: e, page: t } = Pe(), n = Kt();
  return U(() => {
    const { text: r = "Edit this page", pattern: o } = e.value.editLink || {}, { relativePath: i } = t.value, s = n.path;
    return { url: o.replace(/:path/g, s).replace(/:filePath/g, i), text: r };
  });
}
const B0 = {
  id: "content",
  class: "static max-h-full w-full min-w-0 flex-auto overflow-y-visible"
}, H0 = { class: "flex w-full" }, z0 = { class: "min-w-0 flex-auto" }, V0 = { class: "mt-4 flex h-[42px] items-center" }, F0 = { class: "px-6 pt-10 pb-[70vh] xl:px-10" }, U0 = {
  key: 0,
  id: "header"
}, q0 = {
  key: 0,
  class: "mb-2 text-base font-semibold leading-6 text-blue-500 dark:text-cyan-400"
}, W0 = { class: "text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl" }, K0 = { class: "mt-2 text-lg text-slate-700 dark:text-slate-400" }, J0 = { class: "hidden w-72 flex-none xl:block" }, G0 = { class: "h-sidebar sticky top-[72px] overflow-y-auto overflow-x-hidden" }, Q0 = { class: "pt-16 pb-10 pr-3" }, Y0 = ["href"], Z0 = /* @__PURE__ */ L({
  __name: "default",
  setup(e) {
    const { page: t } = Pe(), n = R0(), r = Yt(), o = U(() => Nr(r.value)), i = U(() => o.value.find(
      (l) => Ot(t.value.relativePath, l.link)
    )), s = U(() => {
      var l, u;
      return t.value.title ? t.value.title : (u = (l = i.value) == null ? void 0 : l.text) != null ? u : !1;
    }), a = U(() => {
      var u;
      if (t.value.frontmatter.category)
        return t.value.frontmatter.category;
      let l = i.value;
      for (; l != null && l.parent; )
        l = l.parent;
      return (u = l == null ? void 0 : l.text) != null ? u : !1;
    });
    return (l, u) => {
      const c = ge("Content");
      return g(), b("div", B0, [
        h("div", H0, [
          h("div", z0, [
            h("div", V0, [
              H(i0, { class: "px-6 xl:px-10" })
            ]),
            h("div", F0, [
              P(s) ? (g(), b("header", U0, [
                P(a) ? (g(), b("p", q0, z(P(a)), 1)) : W("", !0),
                h("h1", W0, z(P(s)), 1),
                h("p", K0, z(P(t).description), 1)
              ])) : W("", !0),
              H(c, { class: "prose-headings:font-display prose prose-slate mx-auto max-w-none prose-a:font-semibold prose-lead:text-slate-500 dark:prose-invert dark:prose-a:text-cyan-400 dark:prose-hr:border-slate-800 dark:prose-lead:text-slate-400" }),
              H(M0)
            ])
          ]),
          h("div", J0, [
            h("div", G0, [
              h("div", Q0, [
                H(x0),
                P(t).frontmatter.layout !== "api" ? (g(), b(R, { key: 0 }, [
                  H(u0, { class: "mt-4" }),
                  h("a", {
                    href: P(n).url,
                    target: "_blank",
                    class: "mt-4 block rounded-md border border-gray-400 bg-white px-4 py-2 text-center text-sm text-gray-700 hover:border-gray-600 hover:text-gray-900 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-white/40"
                  }, z(P(n).text), 9, Y0),
                  H(p0, { class: "mt-2" })
                ], 64)) : W("", !0)
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), X0 = {
  id: "content",
  class: "static max-h-full w-full min-w-0 flex-auto overflow-y-visible"
}, e1 = { class: "flex w-full" }, t1 = { class: "min-w-0 flex-auto" }, n1 = { class: "px-6 pt-10 xl:px-10" }, r1 = /* @__PURE__ */ h("header", { id: "header" }, [
  /* @__PURE__ */ h("h1", { class: "text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl" }, " 404 "),
  /* @__PURE__ */ h("h2", { class: "mt-2 text-xl font-semibold text-slate-900 dark:text-slate-400 sm:text-3xl" }, " Page Not Found ")
], -1), o1 = { class: "prose-headings:font-display prose prose-slate mx-auto mt-4 max-w-none prose-a:font-semibold prose-lead:text-slate-500 dark:prose-invert dark:prose-a:text-cyan-400 dark:prose-hr:border-slate-800 dark:prose-lead:text-slate-400" }, i1 = /* @__PURE__ */ h("p", null, " This page doesn't exist or has been removed. Perhaps not included in the docs yet? ", -1), s1 = /* @__PURE__ */ h("a", {
  href: "/",
  class: "rounded-md bg-blue-500 px-4 py-2 text-lg text-white no-underline"
}, "Go Home", -1), a1 = /* @__PURE__ */ h("p", null, "Here are some links that may be what you are looking for:", -1), l1 = ["href"], Tn = /* @__PURE__ */ L({
  __name: "NotFound",
  setup(e) {
    const t = Kt(), n = K([]);
    return console.log(t.path), xt(() => {
      n.value.push(`https://v7.docs.nativescript.org${t.path}`), n.value.push(`https://v6.docs.nativescript.org${t.path}`), n.value.push("https://v7.docs.nativescript.org"), n.value.push("https://v6.docs.nativescript.org");
    }), (r, o) => (g(), b("div", X0, [
      h("div", e1, [
        h("div", t1, [
          h("div", n1, [
            r1,
            h("div", o1, [
              i1,
              s1,
              a1,
              h("ul", null, [
                (g(!0), b(R, null, G(n.value, (i) => (g(), b("li", { key: i }, [
                  h("a", {
                    href: i,
                    target: "_blank"
                  }, z(i), 9, l1)
                ]))), 128))
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), c1 = {
  id: "top",
  class: "min-h-screen font-sans antialiased"
}, u1 = { class: "mx-auto lg:px-6 2xl:container" }, d1 = { class: "flex" }, f1 = { class: "hidden lg:relative lg:block lg:flex-none" }, p1 = /* @__PURE__ */ h("div", { class: "absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" }, null, -1), h1 = /* @__PURE__ */ h("div", { class: "absolute top-12 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" }, null, -1), m1 = /* @__PURE__ */ h("div", { class: "absolute top-24 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" }, null, -1), v1 = { class: "h-sidebar sticky top-[72px] overflow-y-auto overflow-x-hidden overscroll-contain" }, _1 = { class: "w-64 pt-4 pr-4 pb-10 xl:w-72" }, g1 = { class: "flex items-center" }, y1 = /* @__PURE__ */ L({
  __name: "Layout",
  setup(e) {
    const { theme: t } = Pe(), n = Kt();
    return (r, o) => (g(), b("div", c1, [
      H(P(Kh), {
        mainURL: P(t).mainURL
      }, null, 8, ["mainURL"]),
      H(pu),
      h("div", u1, [
        h("div", d1, [
          h("div", f1, [
            p1,
            h1,
            m1,
            h("div", v1, [
              h("div", _1, [
                h("div", g1, [
                  H(ws),
                  H(nu, { class: "ml-2 flex-1" })
                ]),
                H(Id, { class: "mt-6" }),
                H(Uu, { class: "mt-8" })
              ])
            ])
          ]),
          P(n).component === Tn ? (g(), le(Tn, { key: 0 })) : (g(), le(Z0, { key: 1 }))
        ])
      ])
    ]));
  }
});
const b1 = { class: "mt-10 mb-16" }, w1 = { class: "border-b border-gray-200 dark:border-white/5" }, x1 = { class: "z-10 -mb-px flex" }, O1 = ["onClick"], k1 = /* @__PURE__ */ L({
  __name: "FlavorTabs",
  setup(e) {
    const { value: t, set: n } = Os(), r = K([]), o = K(), i = K(), s = () => {
      var l;
      i.value && (r.value = [], Array.from(i.value.children).map((u, c) => {
        u.classList.add("hidden"), r.value.push({
          title: u.dataset.tabTitle,
          index: c,
          show() {
            u.classList.remove("hidden");
          },
          hide() {
            u.classList.add("hidden");
          }
        });
      }), r.value.sort(function(u, c) {
        return u.title.localeCompare(c.title);
      }), o.value = (l = r.value.find((u) => u.title === t.value)) != null ? l : r.value[0]);
    };
    xt(() => {
      s();
    }), Re(o, (l, u) => {
      u == null || u.hide(), l == null || l.show();
    }), Re(t, () => {
      var u;
      const l = (u = r.value.find((c) => c.title.toLowerCase() === t.value)) != null ? u : r.value[0];
      o.value = l;
    });
    function a(l, u) {
      const c = l.target, p = Math.round(c.getBoundingClientRect().top);
      o.value = u, n(u.title.toLowerCase()), Cr(() => {
        ua.scrollTo(c, 0, {
          offset: -p,
          force: !0,
          cancelable: !1
        });
      });
    }
    return (l, u) => (g(), b("div", b1, [
      h("div", w1, [
        h("div", x1, [
          (g(!0), b(R, null, G(r.value, (c) => (g(), b("button", {
            key: c.index,
            class: ne(["whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium uppercase focus:outline-none", {
              "border-ns-blue text-ns-blue focus:border-ns-blue dark:border-cyan-300 dark:text-cyan-300 dark:focus:border-cyan-300": o.value === c,
              "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 dark:text-white/90": o.value !== c
            }]),
            onClick: Be((p) => a(p, c), ["prevent"])
          }, z(c.title), 11, O1))), 128))
        ])
      ]),
      h("div", {
        class: "tab-container relative -mt-px rounded-md rounded-t-none border px-4 shadow-lg dark:border-transparent dark:shadow-cyan-300/5",
        ref_key: "tabContainer",
        ref: i
      }, [
        Me(l.$slots, "default")
      ], 512)
    ]));
  }
}), S1 = { class: "mt-10 mb-4" }, $1 = { class: "" }, P1 = { class: "z-10 flex rounded-t-md border border-white/10 bg-gray-900 dark:bg-transparent" }, E1 = ["onClick"], C1 = /* @__PURE__ */ L({
  __name: "CodeTabs",
  setup(e) {
    const t = K(0), n = K(), r = K([]), o = () => {
      n.value && (r.value = [], Array.from(n.value.children).map((i, s) => {
        s !== t.value && i.classList.add("hidden"), r.value.push({
          title: i.dataset.tabTitle,
          index: s
        });
      }));
    };
    return xt(() => {
      o();
    }), Re(t, (i, s) => {
      var a, l;
      (a = n.value) == null || a.children[s].classList.add("hidden"), (l = n.value) == null || l.children[i].classList.remove("hidden");
    }), (i, s) => (g(), b("div", S1, [
      h("div", $1, [
        h("div", P1, [
          (g(!0), b(R, null, G(r.value, (a) => (g(), b("button", {
            key: a.index,
            class: ne(["whitespace-nowrap border-b px-6 py-3 text-sm font-medium focus:outline-none", {
              "border-cyan-300 text-cyan-200 focus:border-cyan-300": t.value === a.index,
              "border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-100 focus:border-gray-300": t.value !== a.index
            }]),
            onClick: Be((l) => t.value = a.index, ["prevent"])
          }, z(a.title), 11, E1))), 128))
        ])
      ]),
      h("div", {
        class: "code-tab-container",
        ref_key: "tabContainer",
        ref: n
      }, [
        Me(i.$slots, "default")
      ], 512)
    ]));
  }
});
const j1 = { class: "flex flex-col" }, I1 = {
  key: 0,
  class: "flex h-5 items-center justify-center"
}, T1 = /* @__PURE__ */ h("div", { class: "h-5 w-20 rounded-full ring-1 ring-ns-blue dark:ring-cyan-700" }, null, -1), A1 = /* @__PURE__ */ h("div", { class: "ml-4 h-5 w-5 rounded-full ring-1 ring-ns-blue dark:ring-cyan-700" }, null, -1), N1 = [
  T1,
  A1
], D1 = {
  key: 1,
  class: "flex h-5 items-center justify-center"
}, L1 = /* @__PURE__ */ h("span", { class: "flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-ns-blue dark:ring-cyan-700" }, [
  /* @__PURE__ */ h("span", { class: "absolute h-0.5 w-0.5 rounded-full bg-ns-blue dark:bg-white" })
], -1), M1 = [
  L1
], R1 = /* @__PURE__ */ L({
  __name: "DeviceFrame",
  props: {
    type: String
  },
  setup(e) {
    return (t, n) => (g(), b("div", {
      class: ne(["device not-prose mr-6 inline-flex rounded-[36px] p-4 ring-1 ring-ns-blue dark:ring-cyan-700", {
        "rounded-[36px]": e.type === "ios",
        "rounded-[16px]": e.type === "android"
      }])
    }, [
      h("div", j1, [
        e.type === "ios" ? (g(), b("div", I1, N1)) : e.type === "android" ? (g(), b("div", D1, M1)) : W("", !0),
        h("div", {
          class: ne(["relative mt-4 overflow-hidden ring-1 ring-ns-blue dark:ring-cyan-700", {
            "rounded-b-[20px]": e.type === "ios",
            "rounded-b-[4px]": e.type === "android"
          }])
        }, [
          Me(t.$slots, "default")
        ], 2)
      ])
    ], 2));
  }
});
const B1 = /* @__PURE__ */ L({
  __name: "Heading",
  props: {
    ignore: { type: Boolean }
  },
  setup(e) {
    return (t, n) => Me(t.$slots, "default");
  }
}), H1 = { class: "not-prose" }, z1 = ["href"], V1 = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "ml-3 h-5 w-5"
}, [
  /* @__PURE__ */ h("path", {
    "fill-rule": "evenodd",
    d: "M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z",
    "clip-rule": "evenodd"
  }),
  /* @__PURE__ */ h("path", {
    "fill-rule": "evenodd",
    d: "M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z",
    "clip-rule": "evenodd"
  })
], -1), F1 = /* @__PURE__ */ L({
  __name: "ExternalButtonLink",
  props: {
    href: null,
    text: null
  },
  setup(e) {
    return (t, n) => (g(), b("div", H1, [
      h("a", {
        href: e.href,
        target: "_blank",
        class: "inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-400 dark:bg-cyan-500 dark:text-slate-900 dark:hover:bg-cyan-400"
      }, [
        Ne(z(e.text) + " ", 1),
        V1
      ], 8, z1)
    ]));
  }
}), U1 = {}, q1 = {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "xml:space": "preserve",
  "xmlns:serif": "http://www.serif.com/",
  style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
}, W1 = /* @__PURE__ */ h("g", { transform: "matrix(1,0,0,1,-2248,0)" }, [
  /* @__PURE__ */ h("g", {
    id: "NativeScript_Logo_White_Blue_Rounded",
    transform: "matrix(1,0,0,1,2248,0)"
  }, [
    /* @__PURE__ */ h("path", {
      d: "M1024,256C1024,114.71 909.29,0 768,0L256,0C114.71,0 0,114.71 0,256L0,768C0,909.29 114.71,1024 256,1024L768,1024C909.29,1024 1024,909.29 1024,768L1024,256Z",
      style: { fill: "none" }
    }),
    /* @__PURE__ */ h("clipPath", { id: "_clip1" }, [
      /* @__PURE__ */ h("path", { d: "M1024,256C1024,114.71 909.29,0 768,0L256,0C114.71,0 0,114.71 0,256L0,768C0,909.29 114.71,1024 256,1024L768,1024C909.29,1024 1024,909.29 1024,768L1024,256Z" })
    ]),
    /* @__PURE__ */ h("g", { "clip-path": "url(#_clip1)" }, [
      /* @__PURE__ */ h("g", { id: "Background" }, [
        /* @__PURE__ */ h("rect", {
          x: "0",
          y: "0",
          width: "1024",
          height: "1024",
          style: { fill: "rgb(101, 173, 241)" }
        })
      ]),
      /* @__PURE__ */ h("g", { transform: "matrix(1,0,0,1,843,512.135)" }, [
        /* @__PURE__ */ h("g", {
          id: "NativeScript-Logo",
          "serif:id": "NativeScript Logo"
        }, [
          /* @__PURE__ */ h("path", {
            d: "M0,-0.271L0,0.828C0,1.084 -0.195,1.296 -0.451,1.32C-33.815,4.443 -59.93,31.553 -59.93,65.729L-59.93,202.67C-59.93,212.239 -61.94,221.47 -65.57,229.899C-75.92,253.97 -99.41,271.47 -126.73,271.47L-195.93,271.47L-196.41,270.869L-465.59,-66.451L-465.59,271.47L-535.27,271.47C-572.163,271.47 -602.07,241.562 -602.07,204.67L-602.07,65.729C-602.07,31.554 -628.185,4.443 -661.549,1.32C-661.805,1.296 -662,1.084 -662,0.828L-662,-0.271C-662,-0.526 -661.806,-0.738 -661.551,-0.763C-628.306,-4 -602.33,-31.784 -602.33,-65.88L-602.33,-204.94C-602.33,-214.23 -600.43,-223.09 -597,-231.121C-586.82,-255 -563.13,-271.741 -535.53,-271.741L-465.87,-271.741L-465.59,-271.391L-196.41,65.939L-196.41,-271.741L-126.47,-271.741C-89.577,-271.741 -59.67,-241.833 -59.67,-204.94L-59.67,-65.88C-59.67,-31.784 -33.694,-4 -0.448,-0.763C-0.194,-0.738 0,-0.526 0,-0.271",
            style: { fill: "white", "fill-rule": "nonzero" }
          })
        ])
      ])
    ])
  ])
], -1), K1 = [
  W1
];
function J1(e, t) {
  return g(), b("svg", q1, K1);
}
const ft = /* @__PURE__ */ kt(U1, [["render", J1]]), G1 = { class: "not-prose -mx-4 grid grid-cols-4 gap-4" }, Q1 = ["href"], Y1 = { class: "ml-4" }, Z1 = /* @__PURE__ */ h("div", { class: "text-lg font-semibold" }, "NativeScript", -1), X1 = { class: "text-sm" }, e2 = /* @__PURE__ */ L({
  __name: "StackBlitzLinks",
  setup(e) {
    const t = [
      {
        name: "TypeScript",
        link: "https://nativescript.new/",
        icon: ft
      },
      {
        name: "JavaScript",
        link: "https://nativescript.new/js",
        icon: ft
      },
      {
        name: "Angular",
        link: "https://nativescript.new/angular",
        icon: ft
      },
      {
        name: "Vue",
        link: "https://nativescript.new/vue",
        icon: ft
      },
      {
        name: "React",
        link: "https://nativescript.new/react",
        icon: ft
      },
      {
        name: "Svelte",
        link: "https://nativescript.new/Svelte",
        icon: ft
      }
    ];
    return (n, r) => (g(), b("div", G1, [
      (g(), b(R, null, G(t, (o) => h("a", {
        href: o.link,
        target: "blank",
        class: "flex items-center rounded-md px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5"
      }, [
        h("div", null, [
          (g(), le(Jt(o.icon), { class: "h-10 w-10" }))
        ]),
        h("div", Y1, [
          Z1,
          h("div", X1, z(o.name), 1)
        ])
      ], 8, Q1)), 64))
    ]));
  }
}), t2 = /* @__PURE__ */ L({
  __name: "APIRefFlags",
  props: {
    flags: null
  },
  setup(e) {
    const t = e, n = {
      isPrivate: {
        text: "Private",
        class: "bg-red-100 text-red-800"
      },
      isStatic: {
        text: "Static",
        class: "bg-pink-100 text-pink-800"
      },
      isProtected: {
        text: "Protected",
        class: "bg-sky-100 text-sky-800"
      },
      isReadonly: {
        text: "Readonly",
        class: "bg-yellow-100 text-yellow-800"
      },
      isAbstract: {
        text: "Abstract",
        class: "bg-lime-100 text-lime-800"
      }
    }, r = U(() => Object.keys(t.flags).map((o) => n[o]).filter(Boolean));
    return (o, i) => (g(!0), b(R, null, G(P(r), (s) => (g(), b("span", {
      class: ne(["inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium", s.class])
    }, z(s.text), 3))), 256));
  }
}), n2 = { class: "flex items-baseline" }, r2 = {
  key: 0,
  class: "ml-2"
}, o2 = { class: "space-y-4" }, i2 = { class: "pb-2" }, s2 = { class: "relative" }, a2 = ["id", "href"], l2 = ["innerHTML"], c2 = { class: "text-right text-sm text-slate-500" }, u2 = { key: 0 }, d2 = ["href"], f2 = ["href"], p2 = {
  key: 0,
  class: "prose prose-slate flex min-w-full items-center dark:prose-invert sm:pl-0"
}, h2 = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "h-4 w-4"
}, [
  /* @__PURE__ */ h("path", {
    "fill-rule": "evenodd",
    d: "M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z",
    "clip-rule": "evenodd"
  })
], -1), m2 = { class: "ml-2" }, v2 = ["innerHTML"], _2 = /* @__PURE__ */ L({
  __name: "APIRef",
  props: {
    for: null
  },
  setup(e) {
    const t = e, n = gt("API_DATA"), r = U(() => {
      var a;
      return (a = n == null ? void 0 : n.reflections) == null ? void 0 : a[Number(t.for)];
    });
    function o(a) {
      let l = a.fileName;
      return a.line && (l += ":" + a.line, a.character && (l += ":" + a.character)), l;
    }
    function i(a) {
      var l;
      return ((l = a.fileName) == null ? void 0 : l.replace(
        "@nativescript/core",
        "https://unpkg.com/browse/@nativescript/core/"
      )) + `#L${a.line}`;
    }
    function s(a) {
      if (!!a)
        return new URL("https://localhost" + a).hash;
    }
    return (a, l) => {
      var p, f;
      const u = ge("APIRefComment"), c = ge("APIRefParameters");
      return g(), b(R, null, [
        h("div", n2, [
          Me(a.$slots, "title"),
          (p = P(r)) != null && p.flags ? (g(), b("div", r2, [
            H(t2, {
              flags: P(r).flags
            }, null, 8, ["flags"])
          ])) : W("", !0)
        ]),
        h("div", o2, [
          (g(!0), b(R, null, G((f = P(r)) == null ? void 0 : f.signatures, (d) => {
            var v, _;
            return g(), b("div", i2, [
              h("div", s2, [
                d.url ? (g(), b("a", {
                  key: 0,
                  id: s(d.url),
                  href: s(d.url),
                  class: "not-prose absolute inset-y-0 -left-6 flex items-center"
                }, null, 8, a2)) : W("", !0),
                h("pre", {
                  innerHTML: d.code,
                  class: "mt-4 mb-0 [&_a]:text-blue-400 [&_a]:no-underline"
                }, null, 8, l2)
              ]),
              h("div", {
                class: ne(["pt-2", {
                  "rouded-b-md bg-slate-50 px-4 pb-4": ((_ = (v = P(r)) == null ? void 0 : v.signatures) == null ? void 0 : _.length) > 1
                }])
              }, [
                h("div", c2, [
                  d.inheritedFrom ? (g(), b("div", u2, [
                    Ne(" inherited from "),
                    h("a", {
                      href: d.inheritedFrom.url
                    }, z(d.inheritedFrom.name), 9, d2)
                  ])) : W("", !0),
                  (g(!0), b(R, null, G(d.sources, (w) => (g(), b("div", null, [
                    Ne(" defined in "),
                    h("a", {
                      href: i(w),
                      target: "_blank"
                    }, z(o(w)), 9, f2)
                  ]))), 256))
                ]),
                H(u, {
                  comment: d == null ? void 0 : d.comment
                }, null, 8, ["comment"]),
                H(c, {
                  parameters: d.parameters
                }, null, 8, ["parameters"]),
                d.returns ? (g(), b("div", p2, [
                  h2,
                  h("span", m2, [
                    Ne(" Returns "),
                    h("i", {
                      class: "font-semibold italic",
                      innerHTML: d.returns
                    }, null, 8, v2)
                  ])
                ])) : W("", !0)
              ], 2)
            ]);
          }), 256))
        ])
      ], 64);
    };
  }
}), g2 = {
  key: 0,
  class: "not-prose mt-4"
}, y2 = /* @__PURE__ */ L({
  __name: "APIRefComment",
  props: {
    comment: null,
    commentBase64: null
  },
  setup(e) {
    const t = e, n = U(() => {
      if (t.commentBase64)
        try {
          return JSON.parse(atob(t.commentBase64));
        } catch (o) {
          console.log(o);
        }
      return t.comment;
    }), r = {
      text: {
        tag: "span",
        class: ""
      },
      code: {
        tag: "code",
        class: "font-bold"
      },
      "inline-tag": {
        tag: "span",
        class: "italic underline"
      }
    };
    return (o, i) => {
      var s;
      return P(n) ? (g(), b("div", g2, [
        (g(!0), b(R, null, G((s = P(n)) == null ? void 0 : s.summary, (a) => (g(), le(Jt(r[a.kind].tag), {
          class: ne(r[a.kind].class),
          innerHTML: a.text
        }, null, 8, ["class", "innerHTML"]))), 256))
      ])) : W("", !0);
    };
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const b2 = () => {
}, w2 = Object.assign, x2 = Array.isArray, O2 = (e) => typeof e == "function", k2 = (e) => typeof e == "symbol";
let S2;
function $2(e, t = S2) {
  t && t.active && t.effects.push(e);
}
const Ni = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, da = (e) => (e.w & Ze) > 0, fa = (e) => (e.n & Ze) > 0, P2 = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ze;
}, E2 = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      da(o) && !fa(o) ? o.delete(e) : t[n++] = o, o.w &= ~Ze, o.n &= ~Ze;
    }
    t.length = n;
  }
};
let Nt = 0, Ze = 1;
const Er = 30;
let we;
Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class C2 {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, $2(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = we, n = mn;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = we, we = this, mn = !0, Ze = 1 << ++Nt, Nt <= Er ? P2(this) : Di(this), this.fn();
    } finally {
      Nt <= Er && E2(this), Ze = 1 << --Nt, we = this.parent, mn = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    we === this ? this.deferStop = !0 : this.active && (Di(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Di(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let mn = !0;
function Li(e, t) {
  let n = !1;
  Nt <= Er ? fa(e) || (e.n |= Ze, n = !da(e)) : n = !e.has(we), n && (e.add(we), we.deps.push(e), process.env.NODE_ENV !== "production" && we.onTrack && we.onTrack(Object.assign({ effect: we }, t)));
}
function Mi(e, t) {
  const n = x2(e) ? e : [...e];
  for (const r of n)
    r.computed && Ri(r, t);
  for (const r of n)
    r.computed || Ri(r, t);
}
function Ri(e, t) {
  (e !== we || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(w2({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(k2)
);
function Vn(e) {
  const t = e && e.__v_raw;
  return t ? Vn(t) : e;
}
function j2(e) {
  mn && we && (e = Vn(e), process.env.NODE_ENV !== "production" ? Li(e.dep || (e.dep = Ni()), {
    target: e,
    type: "get",
    key: "value"
  }) : Li(e.dep || (e.dep = Ni())));
}
function I2(e, t) {
  e = Vn(e), e.dep && (process.env.NODE_ENV !== "production" ? Mi(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Mi(e.dep));
}
var pa;
class T2 {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[pa] = !1, this._dirty = !0, this.effect = new C2(t, () => {
      this._dirty || (this._dirty = !0, I2(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = Vn(this);
    return j2(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
pa = "__v_isReadonly";
function A2(e, t, n = !1) {
  let r, o;
  const i = O2(e);
  i ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : b2) : (r = e.get, o = e.set);
  const s = new T2(r, o, i || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
const N2 = { class: "flex items-start" }, D2 = { class: "columns-1 gap-8 sm:columns-2 md:columns-3 lg:columns-4" }, L2 = ["href"], M2 = {
  key: 1,
  class: "block font-bold text-slate-800 dark:text-slate-300"
}, R2 = /* @__PURE__ */ L({
  __name: "APIRefHierarchyItem",
  props: {
    hierarchy: null,
    root: { type: Boolean }
  },
  setup(e) {
    const t = e, n = A2(() => {
      const r = t.hierarchy.at(0);
      return r ? Array.isArray(r) ? r : [r] : !1;
    });
    return (r, o) => {
      const i = ge("APIRefHierarchyItem", !0);
      return P(n) ? (g(), b("div", {
        key: 0,
        class: ne({ "pl-4": !e.root })
      }, [
        h("div", N2, [
          e.root ? W("", !0) : (g(), le(P(wd), {
            key: 0,
            class: "mt-0.5 mr-2 h-5 w-5 rotate-180 transform"
          })),
          h("div", D2, [
            (g(!0), b(R, null, G(P(n), (s) => (g(), b(R, null, [
              s.link ? (g(), b("a", {
                key: 0,
                href: s.link,
                class: "block text-blue-500 no-underline hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-600"
              }, z(s.text), 9, L2)) : (g(), b("span", M2, z(s.text), 1))
            ], 64))), 256))
          ])
        ]),
        e.hierarchy.length ? (g(), le(i, {
          key: 0,
          hierarchy: e.hierarchy.slice(1)
        }, null, 8, ["hierarchy"])) : W("", !0)
      ], 2)) : W("", !0);
    };
  }
}), B2 = { class: "mt-6 font-medium" }, H2 = /* @__PURE__ */ L({
  __name: "APIRefHierarchy",
  props: {
    hierarchy: { default: () => [
      { text: "ViewBase", link: "//#" },
      { text: "View", link: "//#" },
      { text: "ActionBar" }
    ] }
  },
  setup(e) {
    const t = e, n = gt("API_DATA"), r = U(() => {
      var o;
      return (o = n == null ? void 0 : n.hierarchy) != null ? o : t.hierarchy;
    });
    return (o, i) => (g(), b("div", B2, [
      H(R2, {
        hierarchy: P(r),
        root: !0
      }, null, 8, ["hierarchy"])
    ]));
  }
}), z2 = {
  key: 0,
  class: "not-prose mt-4"
}, V2 = { class: "not-prose mt-4" }, F2 = { class: "-mx-4 overflow-x-auto sm:mx-0" }, U2 = { class: "inline-block min-w-full" }, q2 = { class: "w- w-full min-w-[540px] border-b border-slate-200 text-left dark:border-slate-700 sm:min-w-full" }, W2 = { class: "divide-y divide-slate-200 dark:divide-slate-700" }, K2 = /* @__PURE__ */ h("tr", { class: "w-1/4 text-slate-900 dark:text-slate-400" }, [
  /* @__PURE__ */ h("td", { class: "w-1/6 whitespace-nowrap py-2 pl-4 text-sm font-medium sm:pl-0" }, " Parameter "),
  /* @__PURE__ */ h("td", { class: "w-1/6 whitespace-nowrap py-2 text-sm font-medium" }, " Default "),
  /* @__PURE__ */ h("td", { class: "w-2/3 whitespace-nowrap py-2 text-sm font-medium" }, " Description ")
], -1), J2 = { class: "" }, G2 = { class: "prose-sm prose prose-slate py-3 pl-4 align-baseline dark:prose-invert sm:pl-0" }, Q2 = ["innerHTML"], Y2 = { class: "prose-sm prose prose-slate py-3 align-baseline dark:prose-invert" }, Z2 = { class: "" }, X2 = { class: "py-3 align-baseline" }, em = { class: "prose-sm prose prose-slate my-0 space-x-5 whitespace-nowrap dark:prose-invert [&_a]:text-blue-500 dark:[&_a]:text-cyan-400" }, tm = ["innerHTML"], nm = { class: "prose-sm prose prose-slate dark:prose-invert" }, rm = /* @__PURE__ */ L({
  __name: "APIRefParameters",
  props: {
    parameters: null
  },
  setup(e) {
    return (t, n) => {
      var o;
      const r = ge("APIRefComment");
      return (o = e.parameters) != null && o.length ? (g(), b("div", z2, [
        h("div", V2, [
          h("div", F2, [
            h("div", U2, [
              h("table", q2, [
                h("tbody", W2, [
                  K2,
                  (g(!0), b(R, null, G(e.parameters, (i) => (g(), b("tr", J2, [
                    h("td", G2, [
                      h("code", {
                        innerHTML: i.name
                      }, null, 8, Q2)
                    ]),
                    h("td", Y2, [
                      h("span", Z2, [
                        h("code", null, z(i.defaultValue), 1)
                      ])
                    ]),
                    h("td", X2, [
                      h("div", em, [
                        h("span", null, [
                          h("code", {
                            class: "font-bold",
                            innerHTML: i.type
                          }, null, 8, tm)
                        ])
                      ]),
                      h("div", nm, [
                        h("p", null, [
                          H(r, {
                            comment: i.comment,
                            class: "m-0"
                          }, null, 8, ["comment"])
                        ])
                      ])
                    ])
                  ]))), 256))
                ])
              ])
            ])
          ])
        ])
      ])) : W("", !0);
    };
  }
}), { createElementVNode: om, openBlock: im, createElementBlock: sm } = Ve;
var am = function(t, n) {
  return im(), sm("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    om("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: lm, openBlock: cm, createElementBlock: um } = Ve;
var dm = function(t, n) {
  return cm(), um("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    lm("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z",
      "clip-rule": "evenodd"
    })
  ]);
}, fm = am, Bi = dm;
const pm = { key: 0 }, hm = { key: 0 }, mm = { class: "columns-1 gap-4 sm:columns-2 2xl:columns-3" }, vm = ["href"], _m = ["innerHTML"], gm = { class: "-mx-4 mt-4 rounded-lg border border-slate-200 dark:border-slate-700" }, ym = ["onClick"], bm = { class: "ml-2" }, wm = ["href", "innerHTML"], xm = ["innerHTML"], Om = { class: "flex-1 text-right text-xs" }, km = { class: "columns-1 p-4 sm:columns-2 2xl:columns-3" }, Sm = ["href"], $m = ["innerHTML"], Pm = /* @__PURE__ */ L({
  __name: "APIRefSummary",
  setup(e) {
    const t = gt("API_DATA"), n = U(() => (c) => c.items.map((p) => {
      var f;
      return (f = t == null ? void 0 : t.reflections) == null ? void 0 : f[p];
    }).filter(Boolean)), r = U(() => (c) => n.value(c).filter((p) => p.type === "Constructor" || !p.inheritedFrom)), o = U(() => (c) => Object.values(
      n.value(c).filter((p) => p.type !== "Constructor" && !!p.inheritedFrom).reduce((p, f) => {
        var v;
        let d = f.inheritedFrom.fromName;
        return d || (d = "&laquo;External&raquo;"), (v = p[d]) != null || (p[d] = {
          name: d,
          url: f.inheritedFrom.fromUrl,
          items: []
        }), p[d].items.push(f), p;
      }, {})
    )), i = U(() => (c) => {
      var f, d;
      const p = (f = c.signatures) == null ? void 0 : f.find((v) => {
        var _;
        return !!((_ = v.inheritedFrom) != null && _.url);
      });
      return (d = p == null ? void 0 : p.inheritedFrom) == null ? void 0 : d.url;
    }), s = K(/* @__PURE__ */ new Set());
    U(() => (c) => s.value.has(c.title));
    const a = K(/* @__PURE__ */ new Set());
    function l(c) {
      a.value.has(c) ? a.value.delete(c) : a.value.add(c);
    }
    const u = U(() => (c) => a.value.has(c));
    return (c, p) => P(t) ? (g(), b("div", pm, [
      (g(!0), b(R, null, G(P(t).summary, (f) => (g(), b(R, null, [
        P(r)(f).length ? (g(), b("div", hm, [
          h("h4", null, z(f.title), 1),
          h("dl", mm, [
            (g(!0), b(R, null, G(P(r)(f), (d) => (g(), b("dd", null, [
              h("a", {
                href: d.url,
                class: "flex items-center text-blue-500 no-underline hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-600"
              }, [
                H(P(Bi), { class: "mr-1.5 h-5 w-5 flex-shrink-0" }),
                h("span", {
                  innerHTML: d.name
                }, null, 8, _m)
              ], 8, vm)
            ]))), 256))
          ]),
          yt(h("div", gm, [
            (g(!0), b(R, null, G(P(o)(f), (d) => (g(), b("div", null, [
              h("div", {
                onClick: Be((v) => l(`${f.title}-${d.name}`), ["prevent"]),
                class: "flex cursor-pointer items-center border-b px-4 py-2 text-slate-700 dark:text-slate-400"
              }, [
                H(P(fm), {
                  class: ne(["h-4 w-4", {
                    "rotate-90": P(u)(`${f.title}-${d.name}`)
                  }])
                }, null, 8, ["class"]),
                h("span", bm, z(d.items.length) + " " + z(f.title.toLowerCase()) + " inherited from ", 1),
                d.url ? (g(), b("a", {
                  key: 0,
                  class: "ml-1 text-blue-500 no-underline hover:underline",
                  href: d.url,
                  innerHTML: d.name
                }, null, 8, wm)) : (g(), b("span", {
                  key: 1,
                  class: "ml-1 font-bold",
                  innerHTML: d.name
                }, null, 8, xm)),
                h("div", Om, z(P(u)(`${f.title}-${d.name}`) ? "Click to collapse" : "Click to expand"), 1)
              ], 8, ym),
              yt(h("dl", km, [
                (g(!0), b(R, null, G(d.items, (v) => (g(), b("dd", null, [
                  h("a", {
                    href: P(i)(v),
                    class: "flex items-center text-blue-500 no-underline hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-600"
                  }, [
                    H(P(Bi), { class: "mr-1.5 h-5 w-5 flex-shrink-0" }),
                    h("span", {
                      innerHTML: v.name
                    }, null, 8, $m)
                  ], 8, Sm)
                ]))), 256))
              ], 512), [
                [vn, P(u)(`${f.title}-${d.name}`)]
              ])
            ]))), 256))
          ], 512), [
            [vn, P(o)(f).length]
          ])
        ])) : W("", !0)
      ], 64))), 256))
    ])) : W("", !0);
  }
}), jm = (e) => ({
  Layout: y1,
  NotFound: Tn,
  enhanceApp(t) {
    const { app: n, router: r, siteData: o } = t;
    n.component("FlavorTabs", k1), n.component("CodeTabs", C1), n.component("NotFound", Tn), n.component("DeviceFrame", R1), n.component("Heading", B1), n.component("ExternalButtonLink", F1), n.component("StackBlitzLinks", e2), n.component("APIRef", _2), n.component("APIRefComment", y2), n.component("APIRefHierarchy", H2), n.component("APIRefParameters", rm), n.component("APIRefSummary", Pm), n.provide("useRouter", Hi), n.provide("useRoute", Kt), n.provide(xs, Xc()), n.use(Xl, {
      instantMove: !0,
      distance: 10,
      themes: {
        tooltip: {
          delay: {
            show: 0
          }
        }
      }
    }), e && e(t);
  }
});
export {
  jm as default
};
