import { inBrowser as lr, useData as Ee, useRoute as Jt, useRouter as Gi } from "vitepress";
import { pushScopeId as Ma, popScopeId as Ra, defineComponent as N, nextTick as Dr, openBlock as g, createBlock as se, createElementBlock as w, normalizeClass as Q, renderSlot as Pe, normalizeProps as Ha, guardReactiveProps as Ba, withScopeId as za, resolveComponent as ge, normalizeStyle as Jn, withKeys as Va, createElementVNode as h, Fragment as R, createCommentVNode as K, withCtx as xe, createVNode as V, ref as B, createApp as Fa, h as yn, mergeProps as Ua, toDisplayString as F, cloneVNode as qa, onMounted as Fe, watchEffect as Ln, computed as M, provide as Lr, onUnmounted as Qi, unref as $, inject as Re, getCurrentInstance as Yi, getCurrentScope as Wa, onScopeDispose as Ka, watch as He, shallowRef as Ja, isRef as Zi, withDirectives as wt, renderList as G, vModelSelect as Ga, withModifiers as Ye, resolveDynamicComponent as Gt, vShow as bn, createStaticVNode as Xi, Transition as Gn, createTextVNode as De, resolveDirective as Qa } from "vue";
import * as Ve from "vue";

function Ue(e) {
  return e.split("-")[0];
}
function yt(e) {
  return e.split("-")[1];
}
function Qt(e) {
  return ["top", "bottom"].includes(Ue(e)) ? "x" : "y";
}
function Mr(e) {
  return e === "y" ? "height" : "width";
}
function Yr(e) {
  let {
    reference: t,
    floating: n,
    placement: r
  } = e;
  const o = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2;
  let s;
  switch (Ue(r)) {
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
  const a = Qt(r), l = Mr(a);
  switch (yt(r)) {
    case "start":
      s[a] = s[a] - (t[l] / 2 - n[l] / 2);
      break;
    case "end":
      s[a] = s[a] + (t[l] / 2 - n[l] / 2);
      break;
  }
  return s;
}
const Ya = async (e, t, n) => {
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
  } = Yr({
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
      x: b,
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
    if (l = b != null ? b : l, u = y != null ? y : u, p = {
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
      } = Yr({
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
function Za(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function es(e) {
  return typeof e != "number" ? Za(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function cr(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function Mn(e, t) {
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
  } = t, d = es(f), _ = s[p ? c === "floating" ? "reference" : "floating" : c], b = await o.getClippingClientRect({
    element: await o.isElement(_) ? _ : _.contextElement || await o.getDocumentElement({
      element: s.floating
    }),
    boundary: l,
    rootBoundary: u
  }), y = cr(await o.convertOffsetParentRelativeRectToViewportRelativeRect({
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
    top: b.top - y.top + d.top,
    bottom: y.bottom - b.bottom + d.bottom,
    left: b.left - y.left + d.left,
    right: y.right - b.right + d.right
  };
}
const Xa = Math.min, ut = Math.max;
function ur(e, t, n) {
  return ut(e, Xa(t, n));
}
const el = (e) => ({
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
    const u = es(r), c = {
      x: o,
      y: i
    }, p = Ue(s), f = Qt(p), d = Mr(f), v = await l.getDimensions({
      element: n
    }), _ = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", y = a.reference[d] + a.reference[f] - c[f] - a.floating[d], S = c[f] - a.reference[f], k = await l.getOffsetParent({
      element: n
    }), x = k ? f === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, P = y / 2 - S / 2, L = u[_], E = x - v[d] - u[b], A = x / 2 - v[d] / 2 + P, C = ur(L, A, E);
    return {
      data: {
        [f]: C,
        centerOffset: A - C
      }
    };
  }
}), tl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function wn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => tl[t]);
}
function ts(e, t) {
  const n = yt(e) === "start", r = Qt(e), o = Mr(r);
  let i = r === "x" ? n ? "right" : "left" : n ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = wn(i)), {
    main: i,
    cross: wn(i)
  };
}
const nl = {
  start: "end",
  end: "start"
};
function dr(e) {
  return e.replace(/start|end/g, (t) => nl[t]);
}
const rl = ["top", "right", "bottom", "left"], ol = /* @__PURE__ */ rl.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
function il(e, t, n) {
  return (e ? [...n.filter((o) => yt(o) === e), ...n.filter((o) => yt(o) !== e)] : n.filter((o) => Ue(o) === o)).filter((o) => e ? yt(o) === e || (t ? dr(o) !== o : !1) : !0);
}
const sl = function(e) {
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
        allowedPlacements: v = ol,
        autoAlignment: _ = !0,
        ...b
      } = e;
      if ((n = p.autoPlacement) != null && n.skip)
        return {};
      const y = il(d, _, v), S = await Mn(t, b), k = (r = (o = p.autoPlacement) == null ? void 0 : o.index) != null ? r : 0, x = y[k], {
        main: P,
        cross: L
      } = ts(x, c);
      if (f !== x)
        return {
          x: l,
          y: u,
          reset: {
            placement: y[0]
          }
        };
      const E = [S[Ue(x)], S[P], S[L]], A = [...(i = (s = p.autoPlacement) == null ? void 0 : s.overflows) != null ? i : [], {
        placement: x,
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
      const X = A.slice().sort((ie, J) => ie.overflows[0] - J.overflows[0]), ne = (a = X.find((ie) => {
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
          placement: ne != null ? ne : X[0].placement
        }
      };
    }
  };
};
function al(e) {
  const t = wn(e);
  return [dr(e), t, dr(t)];
}
const ll = function(e) {
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
      } = e, v = Ue(o), b = c || (v === a || !f ? [wn(a)] : al(a)), y = [a, ...b], S = await Mn(t, d), k = [];
      let x = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (l && k.push(S[v]), u) {
        const {
          main: A,
          cross: C
        } = ts(o, s);
        k.push(S[A], S[C]);
      }
      if (x = [...x, {
        placement: o,
        overflows: k
      }], !k.every((A) => A <= 0)) {
        var P, L;
        const A = ((P = (L = i.flip) == null ? void 0 : L.index) != null ? P : 0) + 1, C = y[A];
        if (C)
          return {
            data: {
              index: A,
              overflows: x
            },
            reset: {
              placement: C
            }
          };
        let X = "bottom";
        switch (p) {
          case "bestFit": {
            var E;
            const ne = (E = x.slice().sort((ie, J) => ie.overflows.filter((de) => de > 0).reduce((de, ye) => de + ye, 0) - J.overflows.filter((de) => de > 0).reduce((de, ye) => de + ye, 0))[0]) == null ? void 0 : E.placement;
            ne && (X = ne);
            break;
          }
          case "initialPlacement":
            X = a;
            break;
        }
        return {
          data: {
            skip: !0
          },
          reset: {
            placement: X
          }
        };
      }
      return {};
    }
  };
};
function cl(e) {
  let {
    placement: t,
    rects: n,
    value: r
  } = e;
  const o = Ue(t), i = ["left", "top"].includes(o) ? -1 : 1, s = typeof r == "function" ? r({
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
  return Qt(o) === "x" ? {
    x: l,
    y: a * i
  } : {
    x: a * i,
    y: l
  };
}
const ul = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i
      } = t, s = cl({
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
function dl(e) {
  return e === "x" ? "y" : "x";
}
const fl = function(e) {
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
          fn: (b) => {
            let {
              x: y,
              y: S
            } = b;
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
      }, c = await Mn(t, l), p = Qt(Ue(o)), f = dl(p);
      let d = u[p], v = u[f];
      if (i) {
        const b = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", S = d + c[b], k = d - c[y];
        d = ur(S, d, k);
      }
      if (s) {
        const b = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", S = v + c[b], k = v - c[y];
        v = ur(S, v, k);
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
}, pl = function(e) {
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
      const l = await Mn(t, a), u = Ue(r), c = yt(r) === "end";
      let p, f;
      u === "top" || u === "bottom" ? (p = u, f = c ? "left" : "right") : (f = u, p = c ? "top" : "bottom");
      const d = ut(l.left, 0), v = ut(l.right, 0), _ = ut(l.top, 0), b = ut(l.bottom, 0), y = {
        height: o.floating.height - (["left", "right"].includes(r) ? 2 * (_ !== 0 || b !== 0 ? _ + b : ut(l.top, l.bottom)) : l[p]),
        width: o.floating.width - (["top", "bottom"].includes(r) ? 2 * (d !== 0 || v !== 0 ? d + v : ut(l.left, l.right)) : l[f])
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
function Rr(e) {
  return (e == null ? void 0 : e.toString()) === "[object Window]";
}
function tt(e) {
  if (e == null)
    return window;
  if (!Rr(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Rn(e) {
  return tt(e).getComputedStyle(e);
}
function Be(e) {
  return Rr(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function ze(e) {
  return e instanceof tt(e).HTMLElement;
}
function xn(e) {
  return e instanceof tt(e).Element;
}
function hl(e) {
  return e instanceof tt(e).Node;
}
function ns(e) {
  const t = tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Hn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r
  } = Rn(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function ml(e) {
  return ["table", "td", "th"].includes(Be(e));
}
function rs(e) {
  const t = navigator.userAgent.toLowerCase().includes("firefox"), n = Rn(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
const Zr = Math.min, Lt = Math.max, On = Math.round;
function xt(e, t) {
  t === void 0 && (t = !1);
  const n = e.getBoundingClientRect();
  let r = 1, o = 1;
  return t && ze(e) && (r = e.offsetWidth > 0 && On(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && On(n.height) / e.offsetHeight || 1), {
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
function nt(e) {
  return ((hl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Bn(e) {
  return Rr(e) ? {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  } : {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function os(e) {
  return xt(nt(e)).left + Bn(e).scrollLeft;
}
function vl(e) {
  const t = xt(e);
  return On(t.width) !== e.offsetWidth || On(t.height) !== e.offsetHeight;
}
function _l(e, t, n) {
  const r = ze(t), o = nt(t), i = xt(e, r && vl(t));
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((Be(t) !== "body" || Hn(o)) && (s = Bn(t)), ze(t)) {
      const l = xt(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      o && (a.x = os(o));
  return {
    x: i.left + s.scrollLeft - a.x,
    y: i.top + s.scrollTop - a.y,
    width: i.width,
    height: i.height
  };
}
function zn(e) {
  return Be(e) === "html" ? e : e.assignedSlot || e.parentNode || (ns(e) ? e.host : null) || nt(e);
}
function Xr(e) {
  return !ze(e) || getComputedStyle(e).position === "fixed" ? null : e.offsetParent;
}
function gl(e) {
  let t = zn(e);
  for (; ze(t) && !["html", "body"].includes(Be(t)); ) {
    if (rs(t))
      return t;
    t = t.parentNode;
  }
  return null;
}
function fr(e) {
  const t = tt(e);
  let n = Xr(e);
  for (; n && ml(n) && getComputedStyle(n).position === "static"; )
    n = Xr(n);
  return n && (Be(n) === "html" || Be(n) === "body" && getComputedStyle(n).position === "static" && !rs(n)) ? t : n || gl(e) || t;
}
function eo(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function yl(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = ze(n), i = nt(n);
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
  if ((o || !o && r !== "fixed") && ((Be(n) !== "body" || Hn(i)) && (s = Bn(n)), ze(n))) {
    const l = xt(n, !0);
    a.x = l.x + n.clientLeft, a.y = l.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - s.scrollLeft + a.x,
    y: t.y - s.scrollTop + a.y
  };
}
function bl(e) {
  const t = tt(e), n = nt(e), r = t.visualViewport;
  let o = n.clientWidth, i = n.clientHeight, s = 0, a = 0;
  return r && (o = r.width, i = r.height, Math.abs(t.innerWidth / r.scale - r.width) < 0.01 && (s = r.offsetLeft, a = r.offsetTop)), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function wl(e) {
  var t;
  const n = nt(e), r = Bn(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Lt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Lt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let a = -r.scrollLeft + os(e);
  const l = -r.scrollTop;
  return Rn(o || n).direction === "rtl" && (a += Lt(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function is(e) {
  return ["html", "body", "#document"].includes(Be(e)) ? e.ownerDocument.body : ze(e) && Hn(e) ? e : is(zn(e));
}
function kn(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = is(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = tt(r), s = o ? [i].concat(i.visualViewport || [], Hn(r) ? r : []) : r, a = t.concat(s);
  return o ? a : a.concat(kn(zn(s)));
}
function xl(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ns(n)) {
    let r = t;
    do {
      if (r && e === r)
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ol(e) {
  const t = xt(e), n = t.top + e.clientTop, r = t.left + e.clientLeft;
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
function to(e, t) {
  return t === "viewport" ? cr(bl(e)) : xn(t) ? Ol(t) : cr(wl(nt(e)));
}
function kl(e) {
  const t = kn(zn(e)), r = ["absolute", "fixed"].includes(Rn(e).position) && ze(e) ? fr(e) : e;
  return xn(r) ? t.filter((o) => xn(o) && xl(o, r) && Be(o) !== "body") : [];
}
function Sl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r
  } = e;
  const i = [...n === "clippingParents" ? kl(t) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const c = to(t, u);
    return l.top = Lt(c.top, l.top), l.right = Zr(c.right, l.right), l.bottom = Zr(c.bottom, l.bottom), l.left = Lt(c.left, l.left), l;
  }, to(t, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
const $l = {
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: _l(t, fr(n), r),
      floating: {
        ...eo(n),
        x: 0,
        y: 0
      }
    };
  },
  convertOffsetParentRelativeRectToViewportRelativeRect: (e) => yl(e),
  getOffsetParent: (e) => {
    let {
      element: t
    } = e;
    return fr(t);
  },
  isElement: (e) => xn(e),
  getDocumentElement: (e) => {
    let {
      element: t
    } = e;
    return nt(t);
  },
  getClippingClientRect: (e) => Sl(e),
  getDimensions: (e) => {
    let {
      element: t
    } = e;
    return eo(t);
  },
  getClientRects: (e) => {
    let {
      element: t
    } = e;
    return t.getClientRects();
  }
}, Pl = (e, t, n) => Ya(e, t, {
  platform: $l,
  ...n
});
var El = Object.defineProperty, Cl = Object.defineProperties, jl = Object.getOwnPropertyDescriptors, no = Object.getOwnPropertySymbols, Tl = Object.prototype.hasOwnProperty, Il = Object.prototype.propertyIsEnumerable, ro = (e, t, n) => t in e ? El(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ae = (e, t) => {
  for (var n in t || (t = {}))
    Tl.call(t, n) && ro(e, n, t[n]);
  if (no)
    for (var n of no(t))
      Il.call(t, n) && ro(e, n, t[n]);
  return e;
}, Yt = (e, t) => Cl(e, jl(t));
function ss(e, t) {
  for (const n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? ss(e[n], t[n]) : e[n] = t[n]);
}
const Le = {
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
function Ot(e, t) {
  let n = Le.themes[e] || {}, r;
  do
    r = n[t], typeof r > "u" ? n.$extend ? n = Le.themes[n.$extend] || {} : (n = null, r = Le[t]) : n = null;
  while (n);
  return r;
}
function Al(e) {
  const t = [e];
  let n = Le.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Le.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((r) => `v-popper--theme-${r}`);
}
function oo(e) {
  const t = [e];
  let n = Le.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Le.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let dt = !1;
if (typeof window < "u") {
  dt = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        dt = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let as = !1;
typeof window < "u" && typeof navigator < "u" && (as = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const ls = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), io = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart"
}, so = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend"
};
function ao(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Qn() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const $e = [];
let at = null;
const lo = {};
function co(e) {
  let t = lo[e];
  return t || (t = lo[e] = []), t;
}
let pr = function() {
};
typeof window < "u" && (pr = window.Element);
function U(e) {
  return function(t) {
    return Ot(t.theme, e);
  };
}
const Yn = "__floating-vue__popper";
var cs = () => N({
  name: "VPopper",
  provide() {
    return {
      [Yn]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Yn]: { default: null }
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
      default: U("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: U("positioningDisabled")
    },
    placement: {
      type: String,
      default: U("placement"),
      validator: (e) => ls.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: U("delay")
    },
    distance: {
      type: [Number, String],
      default: U("distance")
    },
    skidding: {
      type: [Number, String],
      default: U("skidding")
    },
    triggers: {
      type: Array,
      default: U("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: U("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: U("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: U("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: U("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: U("popperHideTriggers")
    },
    container: {
      type: [String, Object, pr, Boolean],
      default: U("container")
    },
    boundary: {
      type: [String, pr],
      default: U("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: U("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: U("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: U("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: U("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: U("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: U("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: U("computeTransformOrigin")
    },
    autoMinSize: {
      type: Boolean,
      default: U("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: U("autoSize")
    },
    autoMaxSize: {
      type: Boolean,
      default: U("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: U("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: U("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: U("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: U("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: U("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: U("flip")
    },
    shift: {
      type: Boolean,
      default: U("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: U("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: U("noAutoFocus")
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
        classes: Yt(Ae({}, this.classes), {
          popperClass: this.popperClass
        }),
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[Yn]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: Ae(Ae({
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
      (this.distance || this.skidding) && t.middleware.push(ul({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const n = this.placement.startsWith("auto");
      if (n ? t.middleware.push(sl({
        alignment: (e = this.placement.split("-")[1]) != null ? e : ""
      })) : t.placement = this.placement, this.preventOverflow && (this.shift && t.middleware.push(fl({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !n && this.flip && t.middleware.push(ll({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), t.middleware.push(el({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, t.middleware.push(pl({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ width: o, height: i }) => {
          this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null, this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null;
        }
      })));
      const r = await Pl(this.$_referenceNode, this.$_popperNode, t);
      Object.assign(this.result, {
        x: r.x,
        y: r.y,
        placement: r.placement,
        strategy: r.strategy,
        arrow: Ae(Ae({}, r.middlewareData.arrow), r.middlewareData.arrowOverflow)
      });
    },
    $_scheduleShow(e = null, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), at && this.instantMove && at.instantMove && at !== this.parentPopper) {
        at.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e = null, t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (at = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Qn(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...kn(this.$_referenceNode),
        ...kn(this.$_popperNode)
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
        for (let n = 0; n < $e.length; n++)
          t = $e[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      $e.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of oo(this.theme))
        co(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Qn(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, ao($e, this), $e.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of oo(this.theme)) {
        const r = co(n);
        ao(r, this), r.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      at === this && (at = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = Ot(this.theme, "disposeTimeout");
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Qn(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, io, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], io, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, so, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], so, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((r) => r.addEventListener(t, n, dt ? {
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
      if (Mt >= e.left && Mt <= e.right && Rt >= e.top && Rt <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Mt - Ge, r = Rt - Qe, i = t.left + t.width / 2 - Ge + (t.top + t.height / 2) - Qe + t.width + t.height, s = Ge + n * i, a = Qe + r * i;
        return nn(Ge, Qe, s, a, t.left, t.top, t.left, t.bottom) || nn(Ge, Qe, s, a, t.left, t.top, t.right, t.top) || nn(Ge, Qe, s, a, t.right, t.top, t.right, t.bottom) || nn(Ge, Qe, s, a, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
typeof document < "u" && typeof window < "u" && (as ? (document.addEventListener("touchstart", uo, dt ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", Dl, dt ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", uo, !0), window.addEventListener("click", Nl, !0)), window.addEventListener("resize", Rl));
function uo(e) {
  for (let t = 0; t < $e.length; t++) {
    const n = $e[t];
    try {
      const r = n.popperNode();
      n.$_mouseDownContains = r.contains(e.target);
    } catch {
    }
  }
}
function Nl(e) {
  us(e);
}
function Dl(e) {
  us(e, !0);
}
function us(e, t = !1) {
  const n = {};
  for (let r = $e.length - 1; r >= 0; r--) {
    const o = $e[r];
    try {
      const i = o.$_containsGlobalTarget = Ll(o, e);
      o.$_pendingHide = !1, requestAnimationFrame(() => {
        if (o.$_pendingHide = !1, !n[o.randomId] && fo(o, i, e)) {
          if (o.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && i) {
            let a = o.parentPopper;
            for (; a; )
              n[a.randomId] = !0, a = a.parentPopper;
            return;
          }
          let s = o.parentPopper;
          for (; s && fo(s, s.$_containsGlobalTarget, e); ) {
            s.$_handleGlobalClose(e, t);
            s = s.parentPopper;
          }
        }
      });
    } catch {
    }
  }
}
function Ll(e, t) {
  const n = e.popperNode();
  return e.$_mouseDownContains || n.contains(t.target);
}
function fo(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || Ml(e, n) && !t;
}
function Ml(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function Rl(e) {
  for (let t = 0; t < $e.length; t++)
    $e[t].$_computePosition(e);
}
let Ge = 0, Qe = 0, Mt = 0, Rt = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ge = Mt, Qe = Rt, Mt = e.clientX, Rt = e.clientY;
}, dt ? {
  passive: !0
} : void 0);
function nn(e, t, n, r, o, i, s, a) {
  const l = ((s - o) * (t - i) - (a - i) * (e - o)) / ((a - i) * (n - e) - (s - o) * (r - t)), u = ((n - e) * (t - i) - (r - t) * (e - o)) / ((a - i) * (n - e) - (s - o) * (r - t));
  return l >= 0 && l <= 1 && u >= 0 && u <= 1;
}
var Vn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const Hl = {
  extends: cs()
};
function Bl(e, t, n, r, o, i) {
  return g(), w("div", {
    ref: "reference",
    class: Q(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Pe(e.$slots, "default", Ha(Ba(e.slotData)))
  ], 2);
}
var zl = /* @__PURE__ */ Vn(Hl, [["render", Bl]]);
function Vl() {
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
let fn;
function hr() {
  hr.init || (hr.init = !0, fn = Vl() !== -1);
}
var Fn = {
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
    hr(), Dr(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", fn && this.$el.appendChild(e), e.data = "about:blank", fn || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!fn && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Fl = /* @__PURE__ */ za("data-v-b329ee4c");
Ma("data-v-b329ee4c");
const Ul = {
  class: "resize-observer",
  tabindex: "-1"
};
Ra();
const ql = /* @__PURE__ */ Fl((e, t, n, r, o, i) => (g(), se("div", Ul)));
Fn.render = ql;
Fn.__scopeId = "data-v-b329ee4c";
Fn.__file = "src/components/ResizeObserver.vue";
var ds = (e = "theme") => ({
  computed: {
    themeClass() {
      return Al(this[e]);
    }
  }
});
const Wl = N({
  name: "VPopperContent",
  components: {
    ResizeObserver: Fn
  },
  mixins: [
    ds()
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
}), Kl = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Jl = {
  ref: "inner",
  class: "v-popper__inner"
}, Gl = /* @__PURE__ */ h("div", { class: "v-popper__arrow-outer" }, null, -1), Ql = /* @__PURE__ */ h("div", { class: "v-popper__arrow-inner" }, null, -1), Yl = [
  Gl,
  Ql
];
function Zl(e, t, n, r, o, i) {
  const s = ge("ResizeObserver");
  return g(), w("div", {
    id: e.popperId,
    ref: "popover",
    class: Q(["v-popper__popper", [
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
    style: Jn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Va((a) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    h("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit("hide"))
    }),
    h("div", {
      class: "v-popper__wrapper",
      style: Jn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      h("div", Jl, [
        e.mounted ? (g(), w(R, { key: 0 }, [
          h("div", null, [
            Pe(e.$slots, "default")
          ]),
          e.handleResize ? (g(), se(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (a) => e.$emit("resize", a))
          })) : K("", !0)
        ], 64)) : K("", !0)
      ], 512),
      h("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: Jn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Yl, 4)
    ], 4)
  ], 46, Kl);
}
var fs = /* @__PURE__ */ Vn(Wl, [["render", Zl]]), ps = {
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
const Xl = N({
  name: "VPopperWrapper",
  components: {
    Popper: zl,
    PopperContent: fs
  },
  mixins: [
    ps,
    ds("finalTheme")
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
function ec(e, t, n, r, o, i) {
  const s = ge("PopperContent"), a = ge("Popper");
  return g(), se(a, {
    ref: "popper",
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: Q([
      e.themeClass
    ])
  }, {
    default: xe(({
      popperId: l,
      isShown: u,
      shouldMountContent: c,
      skipTransition: p,
      autoHide: f,
      show: d,
      hide: v,
      handleResize: _,
      onResize: b,
      classes: y,
      result: S
    }) => [
      Pe(e.$slots, "default", {
        shown: u,
        show: d,
        hide: v
      }),
      V(s, {
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
        onResize: b
      }, {
        default: xe(() => [
          Pe(e.$slots, "popper", {
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
var Hr = /* @__PURE__ */ Vn(Xl, [["render", ec]]);
const tc = N(Yt(Ae({}, Hr), {
  name: "VDropdown",
  vPopperTheme: "dropdown"
})), nc = N(Yt(Ae({}, Hr), {
  name: "VMenu",
  vPopperTheme: "menu"
})), rc = N(Yt(Ae({}, Hr), {
  name: "VTooltip",
  vPopperTheme: "tooltip"
})), oc = N({
  name: "VTooltipDirective",
  components: {
    Popper: cs(),
    PopperContent: fs
  },
  mixins: [
    ps
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => Ot(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => Ot(e.theme, "loadingContent")
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
}), ic = ["innerHTML"], sc = ["textContent"];
function ac(e, t, n, r, o, i) {
  const s = ge("PopperContent"), a = ge("Popper");
  return g(), se(a, Ua({ ref: "popper" }, e.$attrs, {
    theme: e.theme,
    "popper-node": () => e.$refs.popperContent.$el,
    onApplyShow: e.onShow,
    onApplyHide: e.onHide
  }), {
    default: xe(({
      popperId: l,
      isShown: u,
      shouldMountContent: c,
      skipTransition: p,
      autoHide: f,
      hide: d,
      handleResize: v,
      onResize: _,
      classes: b,
      result: y
    }) => [
      V(s, {
        ref: "popperContent",
        class: Q({
          "v-popper--tooltip-loading": e.loading
        }),
        "popper-id": l,
        theme: e.theme,
        shown: u,
        mounted: c,
        "skip-transition": p,
        "auto-hide": f,
        "handle-resize": v,
        classes: b,
        result: y,
        onHide: d,
        onResize: _
      }, {
        default: xe(() => [
          e.html ? (g(), w("div", {
            key: 0,
            innerHTML: e.finalContent
          }, null, 8, ic)) : (g(), w("div", {
            key: 1,
            textContent: F(e.finalContent)
          }, null, 8, sc))
        ]),
        _: 2
      }, 1032, ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 1
  }, 16, ["theme", "popper-node", "onApplyShow", "onApplyHide"]);
}
var lc = /* @__PURE__ */ Vn(oc, [["render", ac]]);
const hs = "v-popper--has-tooltip";
function cc(e, t) {
  let n = e.placement;
  if (!n && t)
    for (const r of ls)
      t[r] && (n = r);
  return n || (n = Ot(e.theme || "tooltip", "placement")), n;
}
function ms(e, t, n) {
  let r;
  const o = typeof t;
  return o === "string" ? r = { content: t } : t && o === "object" ? r = t : r = { content: !1 }, r.placement = cc(r, n), r.targetNodes = () => [e], r.referenceNode = () => e, r;
}
let Zn, Vt, uc = 0;
function dc() {
  if (Zn)
    return;
  Vt = B([]), Zn = Fa({
    name: "VTooltipDirectiveApp",
    setup() {
      return {
        directives: Vt
      };
    },
    render() {
      return this.directives.map((t) => yn(lc, Yt(Ae({}, t.options), {
        shown: t.shown || t.options.shown,
        key: t.id
      })));
    },
    devtools: {
      hide: !0
    }
  });
  const e = document.createElement("div");
  document.body.appendChild(e), Zn.mount(e);
}
function fc(e, t, n) {
  dc();
  const r = B(ms(e, t, n)), o = B(!1), i = {
    id: uc++,
    options: r,
    shown: o
  };
  return Vt.value.push(i), e.classList && e.classList.add(hs), e.$_popper = {
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
function vs(e) {
  if (e.$_popper) {
    const t = Vt.value.indexOf(e.$_popper.item);
    t !== -1 && Vt.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
  }
  e.classList && e.classList.remove(hs);
}
function po(e, { value: t, modifiers: n }) {
  const r = ms(e, t, n);
  if (!r.content || Ot(r.theme || "tooltip", "disabled"))
    vs(e);
  else {
    let o;
    e.$_popper ? (o = e.$_popper, o.options.value = r) : o = fc(e, t, n), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? o.show() : o.hide());
  }
}
var pc = {
  beforeMount: po,
  updated: po,
  beforeUnmount(e) {
    vs(e);
  }
};
function ho(e) {
  e.addEventListener("click", _s), e.addEventListener("touchstart", gs, dt ? {
    passive: !0
  } : !1);
}
function mo(e) {
  e.removeEventListener("click", _s), e.removeEventListener("touchstart", gs), e.removeEventListener("touchend", ys), e.removeEventListener("touchcancel", bs);
}
function _s(e) {
  const t = e.currentTarget;
  e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
}
function gs(e) {
  if (e.changedTouches.length === 1) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !0;
    const n = e.changedTouches[0];
    t.$_vclosepopover_touchPoint = n, t.addEventListener("touchend", ys), t.addEventListener("touchcancel", bs);
  }
}
function ys(e) {
  const t = e.currentTarget;
  if (t.$_vclosepopover_touch = !1, e.changedTouches.length === 1) {
    const n = e.changedTouches[0], r = t.$_vclosepopover_touchPoint;
    e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
  }
}
function bs(e) {
  const t = e.currentTarget;
  t.$_vclosepopover_touch = !1;
}
var hc = {
  beforeMount(e, { value: t, modifiers: n }) {
    e.$_closePopoverModifiers = n, (typeof t > "u" || t) && ho(e);
  },
  updated(e, { value: t, oldValue: n, modifiers: r }) {
    e.$_closePopoverModifiers = r, t !== n && (typeof t > "u" || t ? ho(e) : mo(e));
  },
  beforeUnmount(e) {
    mo(e);
  }
};
function mc(e, t = {}) {
  e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0, ss(Le, t), e.directive("tooltip", pc), e.directive("close-popper", hc), e.component("VTooltip", rc), e.component("VDropdown", tc), e.component("VMenu", nc));
}
const vc = {
  version: "2.0.0-beta.20",
  install: mc,
  options: Le
};
function ws(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, ws), r;
}
var _c = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(_c || {}), gc = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(gc || {});
function Zt({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...o }) {
  var i;
  let s = yc(r, n), a = Object.assign(o, { props: s });
  if (e || t & 2 && s.static)
    return Xn(a);
  if (t & 1) {
    let l = (i = s.unmount) == null || i ? 0 : 1;
    return ws(l, { [0]() {
      return null;
    }, [1]() {
      return Xn({ ...o, props: { ...s, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Xn(a);
}
function Xn({ props: e, attrs: t, slots: n, slot: r, name: o }) {
  var i;
  let { as: s, ...a } = Os(e, ["unmount", "static"]), l = (i = n.default) == null ? void 0 : i.call(n, r), u = {};
  if (r) {
    let c = !1, p = [];
    for (let [f, d] of Object.entries(r))
      typeof d == "boolean" && (c = !0), d === !0 && p.push(f);
    c && (u["data-headlessui-state"] = p.join(" "));
  }
  if (s === "template") {
    if (l = xs(l != null ? l : []), Object.keys(a).length > 0 || Object.keys(t).length > 0) {
      let [c, ...p] = l != null ? l : [];
      if (!wc(c) || p.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(a).concat(Object.keys(t)).sort((f, d) => f.localeCompare(d)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      return qa(c, Object.assign({}, a, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return yn(s, Object.assign({}, a, u), { default: () => l });
}
function xs(e) {
  return e.flatMap((t) => t.type === R ? xs(t.children) : [t]);
}
function yc(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, { [r](o, ...i) {
      let s = n[r];
      for (let a of s) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        a(o, ...i);
      }
    } });
  return t;
}
function bc(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function Os(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function wc(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let xc = 0;
function Oc() {
  return ++xc;
}
function Br() {
  return Oc();
}
var mr = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(mr || {});
function er(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
function vo(e, t) {
  if (e)
    return e;
  let n = t != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function kc(e, t) {
  let n = B(vo(e.value.type, e.value.as));
  return Fe(() => {
    n.value = vo(e.value.type, e.value.as);
  }), Ln(() => {
    var r;
    n.value || !er(t) || er(t) instanceof HTMLButtonElement && !((r = er(t)) != null && r.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var ks = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(ks || {});
let Sc = N({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: r, ...o } = e, i = { "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return Zt({ ourProps: i, theirProps: o, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function $c(e) {
  var t;
  let n = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (n) {
    for (let r of n.elements)
      if (r.tagName === "INPUT" && r.type === "submit" || r.tagName === "BUTTON" && r.type === "submit" || r.nodeName === "INPUT" && r.type === "image") {
        r.click();
        return;
      }
  }
}
function Pc(e, t, n) {
  let r = B(n == null ? void 0 : n.value), o = M(() => e.value !== void 0);
  return [M(() => o.value ? e.value : r.value), function(i) {
    return o.value || (r.value = i), t == null ? void 0 : t(i);
  }];
}
let Ss = Symbol("DescriptionContext");
function Ec() {
  let e = Re(Ss, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Cc({ slot: e = B({}), name: t = "Description", props: n = {} } = {}) {
  let r = B([]);
  function o(i) {
    return r.value.push(i), () => {
      let s = r.value.indexOf(i);
      s !== -1 && r.value.splice(s, 1);
    };
  }
  return Lr(Ss, { register: o, slot: e, name: t, props: n }), M(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
let iv = N({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: n }) {
  let r = Ec(), o = `headlessui-description-${Br()}`;
  return Fe(() => Qi(r.register(o))), () => {
    let { name: i = "Description", slot: s = B({}), props: a = {} } = r, l = e, u = { ...Object.entries(a).reduce((c, [p, f]) => Object.assign(c, { [p]: $(f) }), {}), id: o };
    return Zt({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: n, name: i });
  };
} }), $s = Symbol("LabelContext");
function Ps() {
  let e = Re($s, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ps), t;
  }
  return e;
}
function jc({ slot: e = {}, name: t = "Label", props: n = {} } = {}) {
  let r = B([]);
  function o(i) {
    return r.value.push(i), () => {
      let s = r.value.indexOf(i);
      s !== -1 && r.value.splice(s, 1);
    };
  }
  return Lr($s, { register: o, slot: e, name: t, props: n }), M(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
let sv = N({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: n }) {
  let r = Ps(), o = `headlessui-label-${Br()}`;
  return Fe(() => Qi(r.register(o))), () => {
    let { name: i = "Label", slot: s = {}, props: a = {} } = r, { passive: l, ...u } = e, c = { ...Object.entries(a).reduce((p, [f, d]) => Object.assign(p, { [f]: $(d) }), {}), id: o };
    return l && (delete c.onClick, delete u.onClick), Zt({ ourProps: c, theirProps: u, slot: s, attrs: n, slots: t, name: i });
  };
} }), Es = Symbol("GroupContext");
N({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let r = B(null), o = jc({ name: "SwitchLabel", props: { onClick() {
    !r.value || (r.value.click(), r.value.focus({ preventScroll: !0 }));
  } } }), i = Cc({ name: "SwitchDescription" });
  return Lr(Es, { switchRef: r, labelledby: o, describedby: i }), () => Zt({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: n, name: "SwitchGroup" });
} });
let Tc = N({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, default: !1 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 } }, inheritAttrs: !1, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  let i = Re(Es, null), s = `headlessui-switch-${Br()}`, [a, l] = Pc(M(() => e.modelValue), (b) => t("update:modelValue", b), M(() => e.defaultChecked));
  function u() {
    l(!a.value);
  }
  let c = B(null), p = i === null ? c : i.switchRef, f = kc(M(() => ({ as: e.as, type: n.type })), p);
  o({ el: p, $el: p });
  function d(b) {
    b.preventDefault(), u();
  }
  function v(b) {
    b.key === mr.Space ? (b.preventDefault(), u()) : b.key === mr.Enter && $c(b.currentTarget);
  }
  function _(b) {
    b.preventDefault();
  }
  return () => {
    let { name: b, value: y, ...S } = e, k = { checked: a.value }, x = { id: s, ref: p, role: "switch", type: f.value, tabIndex: 0, "aria-checked": a.value, "aria-labelledby": i == null ? void 0 : i.labelledby.value, "aria-describedby": i == null ? void 0 : i.describedby.value, onClick: d, onKeyup: v, onKeypress: _ };
    return yn(R, [b != null && a.value != null ? yn(Sc, bc({ features: ks.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: a.value, name: b, value: y })) : null, Zt({ ourProps: x, theirProps: { ...n, ...Os(S, ["modelValue", "defaultChecked"]) }, slot: k, attrs: n, slots: r, name: "Switch" })]);
  };
} });
var _o;
const Xt = typeof window < "u", Ic = (e) => typeof e == "function", Ac = (e) => typeof e == "string", Nc = () => {
};
Xt && ((_o = window == null ? void 0 : window.navigator) == null ? void 0 : _o.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Cs(e) {
  return typeof e == "function" ? e() : $(e);
}
function Dc(e, t) {
  function n(...r) {
    e(() => t.apply(this, r), { fn: t, thisArg: this, args: r });
  }
  return n;
}
const js = (e) => e();
function Lc(e = js) {
  const t = B(!0);
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
function Mc(e) {
  return e;
}
function Ts(e) {
  return Wa() ? (Ka(e), !0) : !1;
}
function Rc(e) {
  return typeof e == "function" ? M(e) : B(e);
}
function Is(e, t = !0) {
  Yi() ? Fe(e) : t ? e() : Dr(e);
}
var go = Object.getOwnPropertySymbols, Hc = Object.prototype.hasOwnProperty, Bc = Object.prototype.propertyIsEnumerable, zc = (e, t) => {
  var n = {};
  for (var r in e)
    Hc.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && go)
    for (var r of go(e))
      t.indexOf(r) < 0 && Bc.call(e, r) && (n[r] = e[r]);
  return n;
};
function Vc(e, t, n = {}) {
  const r = n, {
    eventFilter: o = js
  } = r, i = zc(r, [
    "eventFilter"
  ]);
  return He(e, Dc(o, t), i);
}
var Fc = Object.defineProperty, Uc = Object.defineProperties, qc = Object.getOwnPropertyDescriptors, Sn = Object.getOwnPropertySymbols, As = Object.prototype.hasOwnProperty, Ns = Object.prototype.propertyIsEnumerable, yo = (e, t, n) => t in e ? Fc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Wc = (e, t) => {
  for (var n in t || (t = {}))
    As.call(t, n) && yo(e, n, t[n]);
  if (Sn)
    for (var n of Sn(t))
      Ns.call(t, n) && yo(e, n, t[n]);
  return e;
}, Kc = (e, t) => Uc(e, qc(t)), Jc = (e, t) => {
  var n = {};
  for (var r in e)
    As.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Sn)
    for (var r of Sn(e))
      t.indexOf(r) < 0 && Ns.call(e, r) && (n[r] = e[r]);
  return n;
};
function Gc(e, t, n = {}) {
  const r = n, {
    eventFilter: o
  } = r, i = Jc(r, [
    "eventFilter"
  ]), { eventFilter: s, pause: a, resume: l, isActive: u } = Lc(o);
  return { stop: Vc(e, t, Kc(Wc({}, i), {
    eventFilter: s
  })), pause: a, resume: l, isActive: u };
}
function Qc(e) {
  var t;
  const n = Cs(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ze = Xt ? window : void 0;
Xt && window.document;
Xt && window.navigator;
Xt && window.location;
function Ds(...e) {
  let t, n, r, o;
  if (Ac(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Ze) : [t, n, r, o] = e, !t)
    return Nc;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], s = () => {
    i.forEach((c) => c()), i.length = 0;
  }, a = (c, p, f) => (c.addEventListener(p, f, o), () => c.removeEventListener(p, f, o)), l = He(() => Qc(t), (c) => {
    s(), c && i.push(...n.flatMap((p) => r.map((f) => a(c, p, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return Ts(u), u;
}
function Yc(e, t = !1) {
  const n = B(), r = () => n.value = Boolean(e());
  return r(), Is(r, t), n;
}
function Zc(e, t = {}) {
  const { window: n = Ze } = t, r = Yc(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const i = B(!1), s = () => {
    !o || ("removeEventListener" in o ? o.removeEventListener("change", a) : o.removeListener(a));
  }, a = () => {
    !r.value || (s(), o = n.matchMedia(Rc(e).value), i.value = o.matches, "addEventListener" in o ? o.addEventListener("change", a) : o.addListener(a));
  };
  return Ln(a), Ts(() => s()), i;
}
const vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _r = "__vueuse_ssr_handlers__";
vr[_r] = vr[_r] || {};
const Xc = vr[_r];
function Ls(e, t) {
  return Xc[e] || t;
}
function eu(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var tu = Object.defineProperty, bo = Object.getOwnPropertySymbols, nu = Object.prototype.hasOwnProperty, ru = Object.prototype.propertyIsEnumerable, wo = (e, t, n) => t in e ? tu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xo = (e, t) => {
  for (var n in t || (t = {}))
    nu.call(t, n) && wo(e, n, t[n]);
  if (bo)
    for (var n of bo(t))
      ru.call(t, n) && wo(e, n, t[n]);
  return e;
};
const ou = {
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
function Ms(e, t, n, r = {}) {
  var o;
  const {
    flush: i = "pre",
    deep: s = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: l = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: p = Ze,
    eventFilter: f,
    onError: d = (E) => {
      console.error(E);
    }
  } = r, v = (c ? Ja : B)(t);
  if (!n)
    try {
      n = Ls("getDefaultStorage", () => {
        var E;
        return (E = Ze) == null ? void 0 : E.localStorage;
      })();
    } catch (E) {
      d(E);
    }
  if (!n)
    return v;
  const _ = Cs(t), b = eu(_), y = (o = r.serializer) != null ? o : ou[b], { pause: S, resume: k } = Gc(v, () => x(v.value), { flush: i, deep: s, eventFilter: f });
  return p && a && Ds(p, "storage", L), L(), v;
  function x(E) {
    try {
      E == null ? n.removeItem(e) : n.setItem(e, y.write(E));
    } catch (A) {
      d(A);
    }
  }
  function P(E) {
    S();
    try {
      const A = E ? E.newValue : n.getItem(e);
      if (A == null)
        return l && _ !== null && n.setItem(e, y.write(_)), _;
      if (!E && u) {
        const C = y.read(A);
        return Ic(u) ? u(C, _) : b === "object" && !Array.isArray(C) ? xo(xo({}, _), C) : C;
      } else
        return typeof A != "string" ? A : y.read(A);
    } catch (A) {
      d(A);
    } finally {
      k();
    }
  }
  function L(E) {
    if (!(E && E.storageArea !== n)) {
      if (E && E.key === null) {
        v.value = _;
        return;
      }
      E && E.key !== e || (v.value = P(E));
    }
  }
}
function Rs(e) {
  return Zc("(prefers-color-scheme: dark)", e);
}
var iu = Object.defineProperty, Oo = Object.getOwnPropertySymbols, su = Object.prototype.hasOwnProperty, au = Object.prototype.propertyIsEnumerable, ko = (e, t, n) => t in e ? iu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, lu = (e, t) => {
  for (var n in t || (t = {}))
    su.call(t, n) && ko(e, n, t[n]);
  if (Oo)
    for (var n of Oo(t))
      au.call(t, n) && ko(e, n, t[n]);
  return e;
};
function cu(e = {}) {
  const {
    selector: t = "html",
    attribute: n = "class",
    initialValue: r = "auto",
    window: o = Ze,
    storage: i,
    storageKey: s = "vueuse-color-scheme",
    listenToStorageChanges: a = !0,
    storageRef: l,
    emitAuto: u
  } = e, c = lu({
    auto: "",
    light: "light",
    dark: "dark"
  }, e.modes || {}), p = Rs({ window: o }), f = M(() => p.value ? "dark" : "light"), d = l || (s == null ? B(r) : Ms(s, r, i, { window: o, listenToStorageChanges: a })), v = M({
    get() {
      return d.value === "auto" && !u ? f.value : d.value;
    },
    set(S) {
      d.value = S;
    }
  }), _ = Ls("updateHTMLAttrs", (S, k, x) => {
    const P = o == null ? void 0 : o.document.querySelector(S);
    if (!!P)
      if (k === "class") {
        const L = x.split(/\s/g);
        Object.values(c).flatMap((E) => (E || "").split(/\s/g)).filter(Boolean).forEach((E) => {
          L.includes(E) ? P.classList.add(E) : P.classList.remove(E);
        });
      } else
        P.setAttribute(k, x);
  });
  function b(S) {
    var k;
    const x = S === "auto" ? f.value : S;
    _(t, n, (k = c[x]) != null ? k : x);
  }
  function y(S) {
    e.onChanged ? e.onChanged(S, b) : b(S);
  }
  return He(v, y, { flush: "post", immediate: !0 }), u && He(f, () => y(v.value), { flush: "post" }), Is(() => y(v.value)), v;
}
var uu = Object.defineProperty, du = Object.defineProperties, fu = Object.getOwnPropertyDescriptors, So = Object.getOwnPropertySymbols, pu = Object.prototype.hasOwnProperty, hu = Object.prototype.propertyIsEnumerable, $o = (e, t, n) => t in e ? uu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, mu = (e, t) => {
  for (var n in t || (t = {}))
    pu.call(t, n) && $o(e, n, t[n]);
  if (So)
    for (var n of So(t))
      hu.call(t, n) && $o(e, n, t[n]);
  return e;
}, vu = (e, t) => du(e, fu(t));
function _u(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: n = "",
    window: r = Ze
  } = e, o = cu(vu(mu({}, e), {
    onChanged: (a, l) => {
      var u;
      e.onChanged ? (u = e.onChanged) == null || u.call(e, a === "dark") : l(a);
    },
    modes: {
      dark: t,
      light: n
    }
  })), i = Rs({ window: r });
  return M({
    get() {
      return o.value === "dark";
    },
    set(a) {
      a === i.value ? o.value = "auto" : o.value = a ? "dark" : "light";
    }
  });
}
function gu(e, t, n = {}) {
  const { window: r = Ze } = n;
  return Ms(e, t, r == null ? void 0 : r.localStorage, n);
}
var Po;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Po || (Po = {}));
var yu = Object.defineProperty, Eo = Object.getOwnPropertySymbols, bu = Object.prototype.hasOwnProperty, wu = Object.prototype.propertyIsEnumerable, Co = (e, t, n) => t in e ? yu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xu = (e, t) => {
  for (var n in t || (t = {}))
    bu.call(t, n) && Co(e, n, t[n]);
  if (Eo)
    for (var n of Eo(t))
      wu.call(t, n) && Co(e, n, t[n]);
  return e;
};
const Ou = {
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
xu({
  linear: Mc
}, Ou);
function ku({ window: e = Ze } = {}) {
  if (!e)
    return {
      x: B(0),
      y: B(0)
    };
  const t = B(e.pageXOffset), n = B(e.pageYOffset);
  return Ds("scroll", () => {
    t.value = e.pageXOffset, n.value = e.pageYOffset;
  }, {
    capture: !1,
    passive: !0
  }), { x: t, y: n };
}
const ft = _u(), Su = /* @__PURE__ */ h("span", { class: "sr-only" }, "Toggle Dark Mode", -1), $u = /* @__PURE__ */ h("svg", {
  class: "h-4 w-4 text-gray-500",
  fill: "currentColor",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" })
], -1), Pu = [
  $u
], Eu = /* @__PURE__ */ h("svg", {
  class: "h-3 w-3 text-gray-900",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "fill-rule": "evenodd",
    d: "M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z",
    "clip-rule": "evenodd"
  })
], -1), Cu = [
  Eu
], ju = /* @__PURE__ */ N({
  __name: "DarkModeToggle",
  setup(e) {
    return (t, n) => (g(), se($(Tc), {
      modelValue: $(ft),
      "onUpdate:modelValue": n[0] || (n[0] = (r) => Zi(ft) ? ft.value = r : null),
      class: Q([
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-white/20 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-transparent dark:bg-white/10"
      ])
    }, {
      default: xe(() => [
        Su,
        h("span", {
          class: Q([
            $(ft) ? "translate-x-5" : "translate-x-0",
            "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          ])
        }, [
          h("span", {
            class: Q([
              $(ft) ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            ]),
            "aria-hidden": "true"
          }, Pu, 2),
          h("span", {
            class: Q([
              $(ft) ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            ]),
            "aria-hidden": "true"
          }, Cu, 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Hs = Symbol(), jo = "__CURRENT_FLAVOR__";
function Tu() {
  var n;
  const e = gu(jo, ""), t = B((n = e.value) != null ? n : void 0);
  return He(t, () => {
    lr && t.value && localStorage.setItem(jo, t.value);
  }), {
    value: t,
    set(r) {
      t.value = r;
    }
  };
}
function Bs() {
  const e = Re(Hs);
  if (!e)
    throw new Error("useCurrentFlavor() is called without provider.");
  return e;
}
const Iu = { class: "relative flex items-center" }, Au = ["value"], Nu = /* @__PURE__ */ N({
  __name: "FlavorDropdown",
  setup(e) {
    const { value: t, set: n } = Bs(), r = [
      { name: "Angular", value: "angular" },
      { name: "Vue", value: "vue" },
      { name: "React", value: "react" },
      { name: "Svelte", value: "svelte" },
      { name: "Plain", value: "plain" }
    ].sort((i, s) => i.value.localeCompare(s.value)), o = M({
      get() {
        return t.value;
      },
      set(i) {
        !i || n(i);
      }
    });
    return (i, s) => {
      const a = ge("ClientOnly");
      return g(), w("div", Iu, [
        V(a, null, {
          default: xe(() => [
            wt(h("select", {
              class: "form-select w-full rounded border border-slate-200 bg-slate-100 px-4 py-2 dark:border-white/20 dark:bg-white/10 dark:text-white",
              "onUpdate:modelValue": s[0] || (s[0] = (l) => Zi(o) ? o.value = l : null)
            }, [
              (g(!0), w(R, null, G($(r), (l) => (g(), w("option", {
                value: l.value
              }, F(l.name), 9, Au))), 256))
            ], 512), [
              [Ga, $(o)]
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
}), zs = /#.*$/, Du = /(index)?\.(md|html)$/, Lu = typeof window < "u", Mu = B(Lu ? location.hash : "");
function kt(e, t, n = !1) {
  if (t === void 0)
    return !1;
  if (e = To(`/${e}`), n)
    return new RegExp(t).test(e);
  if (To(t) !== e)
    return !1;
  const r = t.match(zs);
  return r ? Mu.value === r[0] : !0;
}
function To(e) {
  return decodeURI(e).replace(zs, "").replace(Du, "");
}
function Ru(e, t) {
  const n = e.endsWith("/"), r = t.startsWith("/");
  return n && r ? e.slice(0, -1) + t : !n && !r ? `${e}/${t}` : e + t;
}
function en() {
  const { theme: e, page: t } = Ee(), n = e.value;
  return M(() => {
    var i, s;
    const o = (i = Object.keys(n.sidebar).find((a) => kt(t.value.relativePath, a, !0))) != null ? i : "/";
    return (s = n.sidebar[o]) != null ? s : [];
  });
}
function zr(e) {
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
const Hu = ["label"], Bu = ["value", "label", "selected"], zu = /* @__PURE__ */ N({
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
    const t = Jt(), n = M(() => (r) => t.path.includes(r));
    return (r, o) => {
      const i = ge("MobileNavigationItem", !0);
      return g(), w(R, null, [
        e.item.link ? (g(), w("option", {
          key: 1,
          value: e.item.link,
          label: "-".repeat(e.depth * 3) + e.item.text,
          selected: $(n)(e.item.link)
        }, null, 8, Bu)) : (g(), w("optgroup", {
          key: 0,
          label: e.item.text
        }, null, 8, Hu)),
        (g(!0), w(R, null, G(e.item.items, (s) => (g(), se(i, {
          item: s,
          depth: e.depth + 1
        }, null, 8, ["item", "depth"]))), 256))
      ], 64);
    };
  }
}), Vu = { class: "border-b dark:border-white/10 lg:hidden" }, Fu = { class: "mx-auto flex items-center p-4 sm:px-6" }, Uu = ["onChange"], qu = /* @__PURE__ */ N({
  __name: "MobileNavigation",
  setup(e) {
    const t = en(), n = Gi();
    function r(o) {
      const i = o.target;
      i == null || i.blur();
      try {
        n.go(i == null ? void 0 : i.value);
      } catch {
      }
    }
    return (o, i) => (g(), w("div", Vu, [
      h("div", Fu, [
        h("select", {
          onChange: Ye(r, ["prevent"]),
          class: "form-select w-full rounded-md border-slate-200 bg-slate-100 p-2 dark:border-white/20 dark:bg-white/10 dark:text-white",
          title: "Navigation"
        }, [
          (g(!0), w(R, null, G($(t), (s) => (g(), se(zu, { item: s }, null, 8, ["item"]))), 256))
        ], 40, Uu)
      ])
    ]));
  }
}), St = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Wu = {}, Ku = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-6 w-6"
}, Ju = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
}, null, -1), Gu = [
  Ju
];
function Qu(e, t) {
  return g(), w("svg", Ku, Gu);
}
const Yu = /* @__PURE__ */ St(Wu, [["render", Qu]]), Zu = {}, Xu = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-6 w-6"
}, ed = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
}, null, -1), td = [
  ed
];
function nd(e, t) {
  return g(), w("svg", Xu, td);
}
const rd = /* @__PURE__ */ St(Zu, [["render", nd]]), od = {}, id = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-6 w-6"
}, sd = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
}, null, -1), ad = [
  sd
];
function ld(e, t) {
  return g(), w("svg", id, ad);
}
const cd = /* @__PURE__ */ St(od, [["render", ld]]), ud = {}, dd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "h-5 w-5"
}, fd = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
  "clip-rule": "evenodd"
}, null, -1), pd = [
  fd
];
function hd(e, t) {
  return g(), w("svg", dd, pd);
}
const pn = /* @__PURE__ */ St(ud, [["render", hd]]), md = {
  key: 0,
  class: "mt-4"
}, vd = ["innerHTML"], _d = ["href", "data-current"], gd = { class: "flex items-center" }, yd = ["innerHTML"], bd = /* @__PURE__ */ N({
  __name: "SideBarLink",
  props: {
    item: null,
    depth: { default: 0 }
  },
  setup(e) {
    const t = e, n = {
      file: rd,
      folder: Yu,
      cube: cd,
      chevron_right: pn
    }, { page: r, site: o } = Ee(), i = t.item.text, s = p(o.value.base, t.item.link), a = t.item.items, l = M(() => kt(r.value.relativePath, t.item.link)), u = t.item.icon && n[t.item.icon], c = B(!!t.item.hideChildren);
    function p(f, d) {
      return d === void 0 || d.startsWith("#") ? d : Ru(f, d);
    }
    return (f, d) => {
      var _, b, y;
      const v = ge("SideBarLink", !0);
      return (_ = e.item) != null && _.hidden ? K("", !0) : (g(), w("li", md, [
        !$(s) && $(i) ? (g(), w("p", {
          key: 0,
          onClick: d[0] || (d[0] = Ye((S) => c.value = !c.value, ["prevent"])),
          class: "group mt-6 flex cursor-pointer items-center justify-between py-2 text-sm font-semibold tracking-wide text-slate-900 dark:text-white"
        }, [
          h("span", { innerHTML: $(i) }, null, 8, vd),
          ((b = e.item) == null ? void 0 : b.collapsible) !== !1 ? (g(), se(pn, {
            key: 0,
            class: Q(["h-5 w-5 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-cyan-300", {
              "rotate-90 transform": !c.value
            }])
          }, null, 8, ["class"])) : K("", !0)
        ])) : (g(), w("a", {
          key: 1,
          href: $(s),
          "data-current": $(l),
          class: Q(["group flex items-center justify-between", {
            "text-blue-500 dark:text-cyan-400": $(l),
            "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300": !$(l)
          }])
        }, [
          h("div", gd, [
            h("div", {
              class: Q(["absolute left-0.5 h-1.5 w-1.5 rounded-full", {
                "bg-blue-500 dark:bg-cyan-400": $(l),
                "group-hover:bg-slate-400": !$(l)
              }])
            }, null, 2),
            $(u) ? (g(), se(Gt($(u)), {
              key: 0,
              class: "mr-2"
            })) : K("", !0),
            h("span", { innerHTML: $(i) }, null, 8, yd)
          ]),
          $(a) && ((y = e.item) == null ? void 0 : y.collapsible) !== !1 ? (g(), w("button", {
            key: 0,
            onClick: d[1] || (d[1] = Ye((S) => c.value = !c.value, ["prevent"])),
            class: "px-2 py-0.5"
          }, [
            V(pn, {
              class: Q(["h-5 w-5 text-slate-400 hover:text-slate-800 dark:hover:text-cyan-300", {
                "rotate-90 transform": !c.value
              }])
            }, null, 8, ["class"])
          ])) : K("", !0)
        ], 10, _d)),
        $(a) ? wt((g(), w("ul", {
          key: 2,
          class: Q(["ml-1 pl-4", {
            "border-l-2 border-slate-200 dark:border-slate-700": e.depth === 0
          }])
        }, [
          (g(!0), w(R, null, G($(a), (S) => (g(), se(v, {
            item: S,
            depth: e.depth + 1
          }, null, 8, ["item", "depth"]))), 256))
        ], 2)), [
          [bn, !c.value]
        ]) : K("", !0)
      ]));
    };
  }
}), wd = {
  key: 0,
  class: "relative"
}, xd = /* @__PURE__ */ N({
  __name: "SideBar",
  setup(e) {
    const t = en();
    return (n, r) => $(t).length > 0 ? (g(), w("ul", wd, [
      (g(!0), w(R, null, G($(t), (o) => (g(), se(bd, {
        key: o.text,
        item: o
      }, null, 8, ["item"]))), 128))
    ])) : K("", !0);
  }
});
var Od = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
const { createElementVNode: kd, openBlock: Sd, createElementBlock: $d } = Ve;
var Pd = function(t, n) {
  return Sd(), $d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    kd("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
    })
  ]);
};
const { createElementVNode: Ed, openBlock: Cd, createElementBlock: jd } = Ve;
var Td = function(t, n) {
  return Cd(), jd("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Ed("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    })
  ]);
};
const { createElementVNode: Id, openBlock: Ad, createElementBlock: Nd } = Ve;
var Dd = function(t, n) {
  return Ad(), Nd("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Id("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 12.75l6 6 9-13.5"
    })
  ]);
};
const { createElementVNode: Ld, openBlock: Md, createElementBlock: Rd } = Ve;
var Hd = function(t, n) {
  return Md(), Rd("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Ld("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    })
  ]);
};
const { createElementVNode: Bd, openBlock: zd, createElementBlock: Vd } = Ve;
var Fd = function(t, n) {
  return zd(), Vd("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Bd("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
    })
  ]);
};
const { createElementVNode: Ud, openBlock: qd, createElementBlock: Wd } = Ve;
var Kd = function(t, n) {
  return qd(), Wd("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Ud("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
    })
  ]);
};
const { createElementVNode: Jd, openBlock: Gd, createElementBlock: Qd } = Ve;
var Yd = function(t, n) {
  return Gd(), Qd("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Jd("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    })
  ]);
}, Zd = Pd, Xd = Td, ef = Dd, tf = Hd, nf = Fd, rf = Kd, of = Yd;
const sf = { class: "space-y-3" }, af = ["href"], lf = {
  key: 0,
  class: "rounded border border-slate-300 p-1 text-slate-400 dark:border-slate-300/30 dark:text-slate-300/40"
}, cf = { class: "ml-3 font-medium leading-6 tracking-wide" }, uf = /* @__PURE__ */ N({
  __name: "SideBarNav",
  setup(e) {
    const t = {
      AcademicCapIcon: Zd,
      DevicePhoneMobileIcon: of,
      CubeTransparentIcon: rf,
      CheckIcon: ef,
      CodeBracketIcon: tf,
      CpuChipIcon: nf
    }, { theme: n, page: r } = Ee();
    return (o, i) => (g(), w("ul", sf, [
      (g(!0), w(R, null, G($(n).nav, (s) => (g(), w("li", null, [
        h("a", {
          href: s.link,
          class: Q([
            "flex items-center",
            $(kt)($(r).relativePath, s.activeMatch, !!s.activeMatch) ? "text-blue-500 dark:text-cyan-400" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          ])
        }, [
          s.icon in t ? (g(), w("div", lf, [
            (g(), se(Gt(t[s.icon]), { class: "h-5 w-5" }))
          ])) : K("", !0),
          h("span", cf, F(s.text), 1)
        ], 10, af)
      ]))), 256))
    ]));
  }
}), Ct = (e = "") => ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).VITE_MAIN_URL + e, df = (e = "") => ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).VITE_DOCS_URL + e, ff = (e = "") => ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).VITE_BLOG_URL + e, Io = {
  nav: [
    { text: "Docs", link: df() },
    { text: "Blog", link: ff() },
    { text: "Community", link: "https://nativescript.org/discord", target: "blank" },
    { text: "Support", link: Ct("/support") }
  ],
  flyoutNav: [
    {
      text: "Partners",
      link: Ct("/partners"),
      description: "Find partners who can help you with your projects."
    },
    {
      text: "Samples",
      link: Ct("/samples"),
      description: "Browse creative samples of NativeScript user experiences."
    },
    {
      text: "Showcase",
      link: Ct("/showcase"),
      description: "Browse a few production apps submitted by the community."
    },
    {
      text: "Mentoring",
      link: Ct("/mentoring-free-for-beginners"),
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
}, pf = {
  key: 0,
  viewBox: "0 0 532 100",
  xmlns: "http://www.w3.org/2000/svg",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2"
}, hf = /* @__PURE__ */ Xi('<g transform="translate(-362.21733 -1030)"><path fill="none" d="M362.217 1030h531.337v100H362.217z"></path><clipPath id="a"><path d="M362.217 1030h531.337v100H362.217z"></path></clipPath><g clip-path="url(#a)"><g transform="matrix(.09766 0 0 .09766 362.4350256 1030.0000256)"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z" fill="none"></path><clipPath id="b"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z"></path></clipPath><g clip-path="url(#b)"><path fill="#65adf1" d="M0 0h1024v1024H0z"></path><path d="M843 511.864v1.099c0 .256-.195.468-.451.492-33.364 3.123-59.479 30.233-59.479 64.409v136.941c0 9.569-2.01 18.8-5.64 27.229-10.35 24.071-33.84 41.571-61.16 41.571h-69.2l-.48-.601-269.18-337.32v337.921h-69.68c-36.893 0-66.8-29.908-66.8-66.8V577.864c0-34.175-26.115-61.286-59.479-64.409-.256-.024-.451-.236-.451-.492v-1.099c0-.255.194-.467.449-.492 33.245-3.237 59.221-31.021 59.221-65.117v-139.06c0-9.29 1.9-18.15 5.33-26.181 10.18-23.879 33.87-40.62 61.47-40.62h69.66l.28.35 269.18 337.33v-337.68h69.94c36.893 0 66.8 29.908 66.8 66.801v139.06c0 34.096 25.976 61.88 59.222 65.117.254.025.448.237.448.492" fill="#fff" fill-rule="nonzero"></path></g></g><path d="M527.5797 1056.618v49.436h-9.044l-21.556-31.144h-.34v31.144h-10.472v-49.436h9.18l21.352 31.076h.408v-31.076h10.472zM546.5577 1106.734c-3.536 0-6.46-.884-8.84-2.788-2.312-1.836-3.468-4.556-3.468-8.228 0-2.788.612-4.964 1.972-6.528 1.292-1.564 2.992-2.72 5.1-3.468 2.108-.748 4.42-1.224 6.868-1.428 3.196-.34 5.508-.68 6.868-1.02 1.428-.34 2.108-1.156 2.108-2.312v-.136c0-1.564-.476-2.72-1.428-3.604-.952-.816-2.312-1.224-4.08-1.224-1.836 0-3.332.408-4.42 1.224-1.088.748-1.836 1.836-2.176 3.06l-9.52-.816c.68-3.332 2.448-6.052 5.304-8.024 2.788-1.972 6.392-2.992 10.88-2.992 2.72 0 5.304.476 7.684 1.36 2.38.816 4.352 2.176 5.848 4.012 1.428 1.904 2.176 4.284 2.176 7.208v25.024h-9.724v-5.168h-.34c-.884 1.768-2.244 3.128-4.012 4.216-1.836 1.088-4.08 1.632-6.8 1.632zm2.924-7.072c2.244 0 4.148-.68 5.576-1.972 1.428-1.292 2.176-2.924 2.176-4.896v-3.944c-.408.272-1.02.544-1.904.748-.816.204-1.7.408-2.652.544-1.02.136-1.836.272-2.584.408-1.836.204-3.264.748-4.352 1.496-1.156.748-1.7 1.836-1.7 3.332 0 1.428.544 2.448 1.564 3.196 1.02.748 2.312 1.088 3.876 1.088zM595.1267 1068.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936zM601.8247 1106.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM654.9337 1068.994l-12.988 37.06h-11.56l-12.988-37.06h10.88l7.684 26.52h.408l7.684-26.52h10.88zM675.8657 1106.802c-3.808 0-7.072-.816-9.86-2.38-2.72-1.496-4.828-3.74-6.324-6.596-1.496-2.856-2.244-6.256-2.244-10.132 0-3.808.748-7.208 2.244-10.064 1.496-2.856 3.604-5.1 6.256-6.732 2.72-1.632 5.848-2.448 9.52-2.448 3.264 0 6.188.748 8.84 2.108s4.692 3.468 6.256 6.256c1.564 2.788 2.312 6.324 2.312 10.472v2.856h-25.228c0 2.788.748 4.964 2.244 6.596 1.496 1.564 3.604 2.38 6.12 2.38 1.768 0 3.264-.408 4.488-1.088 1.292-.748 2.176-1.836 2.652-3.196l9.52.612c-.748 3.4-2.584 6.188-5.508 8.228-2.924 2.108-6.732 3.128-11.288 3.128zm-8.228-23.052h15.572c0-2.176-.748-4.012-2.108-5.44-1.428-1.428-3.264-2.176-5.508-2.176s-4.148.748-5.576 2.244c-1.496 1.496-2.244 3.264-2.38 5.372zM726.6387 1070.83c-.204-1.972-1.02-3.468-2.516-4.556s-3.468-1.632-5.984-1.632-4.488.544-5.848 1.564c-1.36 1.088-2.04 2.38-2.04 4.012-.068 1.768.68 3.06 2.244 4.012 1.564.884 3.4 1.632 5.576 2.108l4.42 1.02c2.856.68 5.44 1.632 7.616 2.856 2.244 1.224 4.012 2.788 5.304 4.692 1.292 1.904 1.904 4.284 1.904 7.004 0 4.556-1.7 8.16-5.1 10.812-3.332 2.72-8.024 4.012-14.076 4.012-6.052 0-10.812-1.36-14.416-4.08-3.536-2.72-5.372-6.8-5.508-12.104h10.132c.136 2.448 1.156 4.352 2.924 5.576 1.768 1.224 4.012 1.836 6.732 1.836 2.652 0 4.76-.544 6.392-1.632 1.564-1.156 2.38-2.652 2.38-4.42 0-1.7-.748-2.992-2.176-3.876-1.496-.884-3.536-1.7-6.256-2.312l-5.372-1.36c-4.148-1.02-7.48-2.584-9.86-4.76-2.448-2.176-3.604-5.1-3.604-8.704 0-2.992.748-5.644 2.38-7.888 1.632-2.244 3.876-3.944 6.664-5.236 2.856-1.224 6.052-1.836 9.724-1.836 3.604 0 6.868.612 9.588 1.836 2.72 1.292 4.896 3.06 6.392 5.304 1.564 2.176 2.312 4.828 2.38 7.752h-9.996zM760.8987 1106.802c-3.808 0-7.072-.816-9.792-2.448-2.72-1.632-4.828-3.876-6.324-6.732-1.428-2.924-2.176-6.188-2.176-9.996 0-3.74.748-7.14 2.244-9.996 1.496-2.856 3.536-5.1 6.256-6.732 2.72-1.632 5.984-2.448 9.724-2.448 3.264 0 6.052.612 8.5 1.768 2.448 1.224 4.352 2.856 5.78 4.964 1.428 2.108 2.176 4.624 2.312 7.48h-9.656c-.272-1.836-1.02-3.332-2.176-4.488-1.156-1.088-2.72-1.7-4.556-1.7-2.38 0-4.352.952-5.78 2.924-1.428 1.904-2.176 4.624-2.176 8.092 0 3.536.748 6.324 2.176 8.228 1.428 1.972 3.332 2.924 5.78 2.924 1.768 0 3.264-.544 4.42-1.632 1.224-1.02 1.972-2.584 2.312-4.556h9.656c-.136 2.856-.884 5.304-2.244 7.48-1.428 2.176-3.332 3.876-5.712 5.032-2.448 1.224-5.304 1.836-8.568 1.836zM784.0427 1106.054v-37.06h9.996v6.46h.408c.68-2.312 1.768-4.08 3.4-5.236 1.564-1.224 3.4-1.768 5.508-1.768 1.156 0 2.176.136 3.196.34v9.112c-.476-.136-1.156-.272-1.972-.408-.884-.068-1.632-.136-2.38-.136-2.244 0-4.148.748-5.644 2.176-1.428 1.428-2.176 3.264-2.176 5.508v21.012h-10.336zM811.8367 1106.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM830.3347 1119.994v-51h10.2v6.188h.408c.476-1.02 1.156-2.04 1.972-3.06.884-1.02 2.04-1.904 3.4-2.584 1.428-.68 3.128-1.088 5.168-1.088 2.72 0 5.236.748 7.548 2.176 2.244 1.36 4.08 3.468 5.44 6.324 1.36 2.788 2.04 6.324 2.04 10.608 0 4.148-.612 7.616-1.972 10.472-1.36 2.856-3.128 4.964-5.44 6.46-2.244 1.428-4.76 2.176-7.616 2.176-1.972 0-3.672-.34-5.1-1.02-1.36-.612-2.516-1.496-3.4-2.448-.884-1.02-1.564-2.04-2.04-3.06h-.272v19.856h-10.336zm10.064-32.504c0 3.332.68 5.984 2.04 7.956 1.36 2.04 3.332 2.992 5.78 2.992 2.516 0 4.488-.952 5.78-2.992 1.36-2.04 2.04-4.692 2.04-7.956 0-3.196-.68-5.78-1.972-7.82-1.36-1.972-3.264-2.992-5.848-2.992-2.516 0-4.42.952-5.78 2.924-1.36 1.972-2.04 4.624-2.04 7.888zM893.0617 1068.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936z" fill="#65adf1"></path></g></g>', 1), mf = [
  hf
], vf = {
  key: 1,
  viewBox: "0 0 532 100",
  xmlns: "http://www.w3.org/2000/svg",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2"
}, _f = /* @__PURE__ */ Xi('<g transform="translate(-1641.886 -310)"><path fill="none" d="M1642.22 310h531.337v100H1642.22z"></path><clipPath id="a1"><path d="M1642.22 310h531.337v100H1642.22z"></path></clipPath><g clip-path="url(#a1)"><g transform="matrix(.09766 0 0 .09766 1642.4300256 310.0000256)"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z" fill="none"></path><clipPath id="b"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z"></path></clipPath><g clip-path="url(#b)"><path d="M1024 0H0v1024h1024V0zM843 511.86v1.1c0 .26-.19.47-.45.49-33.36 3.13-59.48 30.24-59.48 64.41v136.95c0 9.56-2.01 18.8-5.64 27.23-10.35 24.07-33.84 41.57-61.16 41.57h-69.2l-.48-.6-269.18-337.33v337.93h-69.68c-36.89 0-66.8-29.91-66.8-66.8V577.86c0-34.17-26.11-61.28-59.48-64.41-.25-.02-.45-.23-.45-.49v-1.1c0-.25.19-.46.45-.49 33.24-3.24 59.22-31.02 59.22-65.11V307.19c0-9.29 1.9-18.14 5.33-26.18 10.18-23.88 33.87-40.62 61.47-40.62h69.66l.28.35 269.18 337.34V240.39h69.94c36.89 0 66.8 29.91 66.8 66.8v139.07c0 34.09 25.98 61.87 59.22 65.11.26.03.45.24.45.49z" fill="#fff"></path></g></g><path d="M1807.579 336.618v49.436h-9.044l-21.556-31.144h-.34v31.144h-10.472v-49.436h9.18l21.352 31.076h.408v-31.076h10.472zM1826.557 386.734c-3.536 0-6.46-.884-8.84-2.788-2.312-1.836-3.468-4.556-3.468-8.228 0-2.788.612-4.964 1.972-6.528 1.292-1.564 2.992-2.72 5.1-3.468 2.108-.748 4.42-1.224 6.868-1.428 3.196-.34 5.508-.68 6.868-1.02 1.428-.34 2.108-1.156 2.108-2.312v-.136c0-1.564-.476-2.72-1.428-3.604-.952-.816-2.312-1.224-4.08-1.224-1.836 0-3.332.408-4.42 1.224-1.088.748-1.836 1.836-2.176 3.06l-9.52-.816c.68-3.332 2.448-6.052 5.304-8.024 2.788-1.972 6.392-2.992 10.88-2.992 2.72 0 5.304.476 7.684 1.36 2.38.816 4.352 2.176 5.848 4.012 1.428 1.904 2.176 4.284 2.176 7.208v25.024h-9.724v-5.168h-.34c-.884 1.768-2.244 3.128-4.012 4.216-1.836 1.088-4.08 1.632-6.8 1.632zm2.924-7.072c2.244 0 4.148-.68 5.576-1.972 1.428-1.292 2.176-2.924 2.176-4.896v-3.944c-.408.272-1.02.544-1.904.748-.816.204-1.7.408-2.652.544-1.02.136-1.836.272-2.584.408-1.836.204-3.264.748-4.352 1.496-1.156.748-1.7 1.836-1.7 3.332 0 1.428.544 2.448 1.564 3.196 1.02.748 2.312 1.088 3.876 1.088zM1875.126 348.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936zM1881.824 386.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM1934.933 348.994l-12.988 37.06h-11.56l-12.988-37.06h10.88l7.684 26.52h.408l7.684-26.52h10.88zM1955.865 386.802c-3.808 0-7.072-.816-9.86-2.38-2.72-1.496-4.828-3.74-6.324-6.596-1.496-2.856-2.244-6.256-2.244-10.132 0-3.808.748-7.208 2.244-10.064 1.496-2.856 3.604-5.1 6.256-6.732 2.72-1.632 5.848-2.448 9.52-2.448 3.264 0 6.188.748 8.84 2.108s4.692 3.468 6.256 6.256c1.564 2.788 2.312 6.324 2.312 10.472v2.856h-25.228c0 2.788.748 4.964 2.244 6.596 1.496 1.564 3.604 2.38 6.12 2.38 1.768 0 3.264-.408 4.488-1.088 1.292-.748 2.176-1.836 2.652-3.196l9.52.612c-.748 3.4-2.584 6.188-5.508 8.228-2.924 2.108-6.732 3.128-11.288 3.128zm-8.228-23.052h15.572c0-2.176-.748-4.012-2.108-5.44-1.428-1.428-3.264-2.176-5.508-2.176s-4.148.748-5.576 2.244c-1.496 1.496-2.244 3.264-2.38 5.372zM2006.638 350.83c-.204-1.972-1.02-3.468-2.516-4.556s-3.468-1.632-5.984-1.632-4.488.544-5.848 1.564c-1.36 1.088-2.04 2.38-2.04 4.012-.068 1.768.68 3.06 2.244 4.012 1.564.884 3.4 1.632 5.576 2.108l4.42 1.02c2.856.68 5.44 1.632 7.616 2.856 2.244 1.224 4.012 2.788 5.304 4.692 1.292 1.904 1.904 4.284 1.904 7.004 0 4.556-1.7 8.16-5.1 10.812-3.332 2.72-8.024 4.012-14.076 4.012-6.052 0-10.812-1.36-14.416-4.08-3.536-2.72-5.372-6.8-5.508-12.104h10.132c.136 2.448 1.156 4.352 2.924 5.576 1.768 1.224 4.012 1.836 6.732 1.836 2.652 0 4.76-.544 6.392-1.632 1.564-1.156 2.38-2.652 2.38-4.42 0-1.7-.748-2.992-2.176-3.876-1.496-.884-3.536-1.7-6.256-2.312l-5.372-1.36c-4.148-1.02-7.48-2.584-9.86-4.76-2.448-2.176-3.604-5.1-3.604-8.704 0-2.992.748-5.644 2.38-7.888 1.632-2.244 3.876-3.944 6.664-5.236 2.856-1.224 6.052-1.836 9.724-1.836 3.604 0 6.868.612 9.588 1.836 2.72 1.292 4.896 3.06 6.392 5.304 1.564 2.176 2.312 4.828 2.38 7.752h-9.996zM2040.898 386.802c-3.808 0-7.072-.816-9.792-2.448-2.72-1.632-4.828-3.876-6.324-6.732-1.428-2.924-2.176-6.188-2.176-9.996 0-3.74.748-7.14 2.244-9.996 1.496-2.856 3.536-5.1 6.256-6.732 2.72-1.632 5.984-2.448 9.724-2.448 3.264 0 6.052.612 8.5 1.768 2.448 1.224 4.352 2.856 5.78 4.964 1.428 2.108 2.176 4.624 2.312 7.48h-9.656c-.272-1.836-1.02-3.332-2.176-4.488-1.156-1.088-2.72-1.7-4.556-1.7-2.38 0-4.352.952-5.78 2.924-1.428 1.904-2.176 4.624-2.176 8.092 0 3.536.748 6.324 2.176 8.228 1.428 1.972 3.332 2.924 5.78 2.924 1.768 0 3.264-.544 4.42-1.632 1.224-1.02 1.972-2.584 2.312-4.556h9.656c-.136 2.856-.884 5.304-2.244 7.48-1.428 2.176-3.332 3.876-5.712 5.032-2.448 1.224-5.304 1.836-8.568 1.836zM2064.042 386.054v-37.06h9.996v6.46h.408c.68-2.312 1.768-4.08 3.4-5.236 1.564-1.224 3.4-1.768 5.508-1.768 1.156 0 2.176.136 3.196.34v9.112c-.476-.136-1.156-.272-1.972-.408-.884-.068-1.632-.136-2.38-.136-2.244 0-4.148.748-5.644 2.176-1.428 1.428-2.176 3.264-2.176 5.508v21.012h-10.336zM2091.836 386.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM2110.334 399.994v-51h10.2v6.188h.408c.476-1.02 1.156-2.04 1.972-3.06.884-1.02 2.04-1.904 3.4-2.584 1.428-.68 3.128-1.088 5.168-1.088 2.72 0 5.236.748 7.548 2.176 2.244 1.36 4.08 3.468 5.44 6.324 1.36 2.788 2.04 6.324 2.04 10.608 0 4.148-.612 7.616-1.972 10.472-1.36 2.856-3.128 4.964-5.44 6.46-2.244 1.428-4.76 2.176-7.616 2.176-1.972 0-3.672-.34-5.1-1.02-1.36-.612-2.516-1.496-3.4-2.448-.884-1.02-1.564-2.04-2.04-3.06h-.272v19.856h-10.336zm10.064-32.504c0 3.332.68 5.984 2.04 7.956 1.36 2.04 3.332 2.992 5.78 2.992 2.516 0 4.488-.952 5.78-2.992 1.36-2.04 2.04-4.692 2.04-7.956 0-3.196-.68-5.78-1.972-7.82-1.36-1.972-3.264-2.992-5.848-2.992-2.516 0-4.42.952-5.78 2.924-1.36 1.972-2.04 4.624-2.04 7.888zM2173.061 348.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936z" fill="#fff" fill-rule="nonzero"></path></g></g>', 1), gf = [
  _f
], Ao = /* @__PURE__ */ N({
  __name: "NativeScriptLogo",
  props: {
    variant: String
  },
  setup(e) {
    return (t, n) => e.variant === "blue" ? (g(), w("svg", pf, mf)) : (g(), w("svg", vf, gf));
  }
});
/*! @docsearch/js 3.2.2 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
function No(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? No(Object(n), !0).forEach(function(r) {
      yf(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : No(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ft(e) {
  return Ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ft(e);
}
function yf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function gr() {
  return gr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gr.apply(this, arguments);
}
function bf(e, t) {
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
function $n(e, t) {
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
  }(e, t) || Vs(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Pn(e) {
  return function(t) {
    if (Array.isArray(t))
      return yr(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || Vs(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Vs(e, t) {
  if (e) {
    if (typeof e == "string")
      return yr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yr(e, t) : void 0;
  }
}
function yr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var T, Ht, Fs, Do, Us, En = {}, Vr = [], wf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ne(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function qs(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function je(e, t, n) {
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
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++T.__v : o };
  return T.vnode != null && T.vnode(i), i;
}
function Xe(e) {
  return e.children;
}
function Te(e, t) {
  this.props = e, this.context = t;
}
function Ut(e, t) {
  if (t == null)
    return e.__ ? Ut(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ut(e) : null;
}
function Ws(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Ws(e);
  }
}
function br(e) {
  (!e.__d && (e.__d = !0) && Ht.push(e) && !Cn.__r++ || Do !== T.debounceRendering) && ((Do = T.debounceRendering) || Fs)(Cn);
}
function Cn() {
  for (var e; Cn.__r = Ht.length; )
    e = Ht.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), Ht = [], e.some(function(t) {
      var n, r, o, i, s, a;
      t.__d && (s = (i = (n = t).__v).__e, (a = n.__P) && (r = [], (o = Ne({}, i)).__v = i.__v + 1, Fr(a, i, o, n.__n, a.ownerSVGElement !== void 0, i.__h != null ? [s] : null, r, s == null ? Ut(i) : s, i.__h), Qs(r, i), i.__e != s && Ws(i)));
    });
}
function Ks(e, t, n, r, o, i, s, a, l, u) {
  var c, p, f, d, v, _, b, y = r && r.__k || Vr, S = y.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((d = n.__k[c] = (d = t[c]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" ? Bt(null, d, null, null, d) : Array.isArray(d) ? Bt(Xe, { children: d }, null, null, null) : d.__b > 0 ? Bt(d.type, d.props, d.key, null, d.__v) : d) != null) {
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
      Fr(e, d, f = f || En, o, i, s, a, l, u), v = d.__e, (p = d.ref) && f.ref != p && (b || (b = []), f.ref && b.push(f.ref, null, d), b.push(p, d.__c || v, d)), v != null ? (_ == null && (_ = v), typeof d.type == "function" && d.__k != null && d.__k === f.__k ? d.__d = l = Js(d, l, e) : l = Gs(e, d, f, y, v, l), u || n.type !== "option" ? typeof n.type == "function" && (n.__d = l) : e.value = "") : l && f.__e == l && l.parentNode != e && (l = Ut(f));
    }
  for (n.__e = _, c = S; c--; )
    y[c] != null && (typeof n.type == "function" && y[c].__e != null && y[c].__e == n.__d && (n.__d = Ut(r, c + 1)), Zs(y[c], y[c]));
  if (b)
    for (c = 0; c < b.length; c++)
      Ys(b[c], b[++c], b[++c]);
}
function Js(e, t, n) {
  var r, o;
  for (r = 0; r < e.__k.length; r++)
    (o = e.__k[r]) && (o.__ = e, t = typeof o.type == "function" ? Js(o, t, n) : Gs(n, o, o, e.__k, o.__e, t));
  return t;
}
function Me(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
    Me(n, t);
  }) : t.push(e)), t;
}
function Gs(e, t, n, r, o, i) {
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
function Lo(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || wf.test(t) ? n : n + "px";
}
function rn(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Lo(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Lo(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? Ro : Mo, i) : e.removeEventListener(t, i ? Ro : Mo, i);
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
function Mo(e) {
  this.l[e.type + !1](T.event ? T.event(e) : e);
}
function Ro(e) {
  this.l[e.type + !0](T.event ? T.event(e) : e);
}
function Fr(e, t, n, r, o, i, s, a, l) {
  var u, c, p, f, d, v, _, b, y, S, k, x = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, i = [a]), (u = T.__b) && u(t);
  try {
    e:
      if (typeof x == "function") {
        if (b = t.props, y = (u = x.contextType) && r[u.__c], S = u ? y ? y.props.value : u.__ : r, n.__c ? _ = (c = t.__c = n.__c).__ = c.__E : ("prototype" in x && x.prototype.render ? t.__c = c = new x(b, S) : (t.__c = c = new Te(b, S), c.constructor = x, c.render = Of), y && y.sub(c), c.props = b, c.state || (c.state = {}), c.context = S, c.__n = r, p = c.__d = !0, c.__h = []), c.__s == null && (c.__s = c.state), x.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Ne({}, c.__s)), Ne(c.__s, x.getDerivedStateFromProps(b, c.__s))), f = c.props, d = c.state, p)
          x.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (x.getDerivedStateFromProps == null && b !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(b, S), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(b, c.__s, S) === !1 || t.__v === n.__v) {
            c.props = b, c.state = c.__s, t.__v !== n.__v && (c.__d = !1), c.__v = t, t.__e = n.__e, t.__k = n.__k, c.__h.length && s.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(b, c.__s, S), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, d, v);
          });
        }
        c.context = S, c.props = b, c.state = c.__s, (u = T.__r) && u(t), c.__d = !1, c.__v = t, c.__P = e, u = c.render(c.props, c.state, c.context), c.state = c.__s, c.getChildContext != null && (r = Ne(Ne({}, r), c.getChildContext())), p || c.getSnapshotBeforeUpdate == null || (v = c.getSnapshotBeforeUpdate(f, d)), k = u != null && u.type === Xe && u.key == null ? u.props.children : u, Ks(e, Array.isArray(k) ? k : [k], t, n, r, o, i, s, a, l), c.base = t.__e, t.__h = null, c.__h.length && s.push(c), _ && (c.__E = c.__ = null), c.__e = !1;
      } else
        i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = xf(n.__e, t, n, r, o, i, s, l);
    (u = T.diffed) && u(t);
  } catch (P) {
    t.__v = null, (l || i != null) && (t.__e = a, t.__h = !!l, i[i.indexOf(a)] = null), T.__e(P, t, n);
  }
}
function Qs(e, t) {
  T.__c && T.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      T.__e(r, n.__v);
    }
  });
}
function xf(e, t, n, r, o, i, s, a) {
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
    if (i = i && Vr.slice.call(e.childNodes), u = (f = n.props || En).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (f = {}, p = 0; p < e.attributes.length; p++)
          f[e.attributes[p].name] = e.attributes[p].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (function(b, y, S, k, x) {
      var P;
      for (P in S)
        P === "children" || P === "key" || P in y || rn(b, P, null, S[P], k);
      for (P in y)
        x && typeof y[P] != "function" || P === "children" || P === "key" || P === "value" || P === "checked" || S[P] === y[P] || rn(b, P, y[P], S[P], k);
    }(e, d, f, o, a), c)
      t.__k = [];
    else if (_ = t.props.children, Ks(e, Array.isArray(_) ? _ : [_], t, n, r, o && v !== "foreignObject", i, s, e.firstChild, a), i != null)
      for (_ = i.length; _--; )
        i[_] != null && qs(i[_]);
    a || ("value" in d && (_ = d.value) !== void 0 && (_ !== e.value || v === "progress" && !_) && rn(e, "value", _, f.value, !1), "checked" in d && (_ = d.checked) !== void 0 && _ !== e.checked && rn(e, "checked", _, f.checked, !1));
  }
  return e;
}
function Ys(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    T.__e(r, n);
  }
}
function Zs(e, t, n) {
  var r, o, i;
  if (T.unmount && T.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Ys(r, null, t)), n || typeof e.type == "function" || (n = (o = e.__e) != null), e.__e = e.__d = void 0, (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        T.__e(s, t);
      }
    r.base = r.__P = null;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Zs(r[i], t, n);
  o != null && qs(o);
}
function Of(e, t, n) {
  return this.constructor(e, n);
}
function qt(e, t, n) {
  var r, o, i;
  T.__ && T.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], Fr(t, e = (!r && n || t).__k = je(Xe, null, [e]), o || En, En, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Vr.slice.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r), Qs(i, e);
}
function Xs(e, t) {
  qt(e, t, Xs);
}
function kf(e, t, n) {
  var r, o, i, s = arguments, a = Ne({}, e.props);
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 3)
    for (n = [n], i = 3; i < arguments.length; i++)
      n.push(s[i]);
  return n != null && (a.children = n), Bt(e.type, a, r || e.key, o || e.ref, null);
}
T = { __e: function(e, t) {
  for (var n, r, o; t = t.__; )
    if ((n = t.__c) && !n.__)
      try {
        if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), n.componentDidCatch != null && (n.componentDidCatch(e), o = n.__d), o)
          return n.__E = n;
      } catch (i) {
        e = i;
      }
  throw e;
}, __v: 0 }, Te.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ne({}, this.state), typeof e == "function" && (e = e(Ne({}, n), this.props)), e && Ne(n, e), e != null && this.__v && (t && this.__h.push(t), br(this));
}, Te.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), br(this));
}, Te.prototype.render = Xe, Ht = [], Fs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Cn.__r = 0, Us = 0;
var $t, me, Ho, bt = 0, wr = [], Bo = T.__b, zo = T.__r, Vo = T.diffed, Fo = T.__c, Uo = T.unmount;
function tn(e, t) {
  T.__h && T.__h(me, e, bt || t), bt = 0;
  var n = me.__H || (me.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function ea(e) {
  return bt = 1, ta(ra, e);
}
function ta(e, t, n) {
  var r = tn($t++, 2);
  return r.t = e, r.__c || (r.__ = [n ? n(t) : ra(void 0, t), function(o) {
    var i = r.t(r.__[0], o);
    r.__[0] !== i && (r.__ = [i, r.__[1]], r.__c.setState({}));
  }], r.__c = me), r.__;
}
function na(e, t) {
  var n = tn($t++, 3);
  !T.__s && Ur(n.__H, t) && (n.__ = e, n.__H = t, me.__H.__h.push(n));
}
function qo(e, t) {
  var n = tn($t++, 4);
  !T.__s && Ur(n.__H, t) && (n.__ = e, n.__H = t, me.__h.push(n));
}
function tr(e, t) {
  var n = tn($t++, 7);
  return Ur(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function Sf() {
  wr.forEach(function(e) {
    if (e.__P)
      try {
        e.__H.__h.forEach(hn), e.__H.__h.forEach(xr), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], T.__e(t, e.__v);
      }
  }), wr = [];
}
T.__b = function(e) {
  me = null, Bo && Bo(e);
}, T.__r = function(e) {
  zo && zo(e), $t = 0;
  var t = (me = e.__c).__H;
  t && (t.__h.forEach(hn), t.__h.forEach(xr), t.__h = []);
}, T.diffed = function(e) {
  Vo && Vo(e);
  var t = e.__c;
  t && t.__H && t.__H.__h.length && (wr.push(t) !== 1 && Ho === T.requestAnimationFrame || ((Ho = T.requestAnimationFrame) || function(n) {
    var r, o = function() {
      clearTimeout(i), Wo && cancelAnimationFrame(r), setTimeout(n);
    }, i = setTimeout(o, 100);
    Wo && (r = requestAnimationFrame(o));
  })(Sf)), me = void 0;
}, T.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(hn), n.__h = n.__h.filter(function(r) {
        return !r.__ || xr(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], T.__e(r, n.__v);
    }
  }), Fo && Fo(e, t);
}, T.unmount = function(e) {
  Uo && Uo(e);
  var t = e.__c;
  if (t && t.__H)
    try {
      t.__H.__.forEach(hn);
    } catch (n) {
      T.__e(n, t.__v);
    }
};
var Wo = typeof requestAnimationFrame == "function";
function hn(e) {
  var t = me;
  typeof e.__c == "function" && e.__c(), me = t;
}
function xr(e) {
  var t = me;
  e.__c = e.__(), me = t;
}
function Ur(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function ra(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oa(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Or(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function kr(e) {
  this.props = e;
}
(kr.prototype = new Te()).isPureReactComponent = !0, kr.prototype.shouldComponentUpdate = function(e, t) {
  return Or(this.props, e) || Or(this.state, t);
};
var Ko = T.__b;
T.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ko && Ko(e);
};
var $f = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911, Jo = function(e, t) {
  return e == null ? null : Me(Me(e).map(t));
}, Pf = { map: Jo, forEach: Jo, count: function(e) {
  return e ? Me(e).length : 0;
}, only: function(e) {
  var t = Me(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: Me }, Ef = T.__e;
function mn() {
  this.__u = 0, this.t = null, this.__b = null;
}
function ia(e) {
  var t = e.__.__c;
  return t && t.__e && t.__e(e);
}
function At() {
  this.u = null, this.o = null;
}
T.__e = function(e, t, n) {
  if (e.then) {
    for (var r, o = t; o = o.__; )
      if ((r = o.__c) && r.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
  }
  Ef(e, t, n);
}, (mn.prototype = new Te()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = ia(r.__v), i = !1, s = function() {
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
}, mn.prototype.componentWillUnmount = function() {
  this.t = [];
}, mn.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = function i(s, a, l) {
        return s && (s.__c && s.__c.__H && (s.__c.__H.__.forEach(function(u) {
          typeof u.__c == "function" && u.__c();
        }), s.__c.__H = null), (s = oa({}, s)).__c != null && (s.__c.__P === l && (s.__c.__P = a), s.__c = null), s.__k = s.__k && s.__k.map(function(u) {
          return i(u, a, l);
        })), s;
      }(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__e && je(Xe, null, e.fallback);
  return o && (o.__h = null), [je(Xe, null, t.__e ? null : e.children), o];
};
var Go = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function Cf(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function jf(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    qt(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), qt(je(Cf, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function sa(e, t) {
  return je(jf, { __v: e, i: t });
}
(At.prototype = new Te()).__e = function(e) {
  var t = this, n = ia(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Go(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, At.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Me(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, At.prototype.componentDidUpdate = At.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Go(e, n, t);
  });
};
var aa = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Tf = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, If = function(e) {
  return (typeof Symbol < "u" && Ft(Symbol()) == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e);
};
function la(e, t, n) {
  return t.__k == null && (t.textContent = ""), qt(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
Te.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Te.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Qo = T.event;
function Af() {
}
function Nf() {
  return this.cancelBubble;
}
function Df() {
  return this.defaultPrevented;
}
T.event = function(e) {
  return Qo && (e = Qo(e)), e.persist = Af, e.isPropagationStopped = Nf, e.isDefaultPrevented = Df, e.nativeEvent = e;
};
var ca, Yo = { configurable: !0, get: function() {
  return this.class;
} }, Zo = T.vnode;
T.vnode = function(e) {
  var t = e.type, n = e.props, r = n;
  if (typeof t == "string") {
    for (var o in r = {}, n) {
      var i = n[o];
      o === "value" && "defaultValue" in n && i == null || (o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && i === !0 ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !If(n.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : Tf.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i === null && (i = void 0), r[o] = i);
    }
    t == "select" && r.multiple && Array.isArray(r.value) && (r.value = Me(n.children).forEach(function(s) {
      s.props.selected = r.value.indexOf(s.props.value) != -1;
    })), t == "select" && r.defaultValue != null && (r.value = Me(n.children).forEach(function(s) {
      s.props.selected = r.multiple ? r.defaultValue.indexOf(s.props.value) != -1 : r.defaultValue == s.props.value;
    })), e.props = r;
  }
  t && n.class != n.className && (Yo.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", Yo)), e.$$typeof = aa, Zo && Zo(e);
};
var Xo = T.__r;
T.__r = function(e) {
  Xo && Xo(e), ca = e.__c;
};
var Lf = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return ca.__n[e.__c].props.value;
} } } };
(typeof performance > "u" ? "undefined" : Ft(performance)) == "object" && typeof performance.now == "function" && performance.now.bind(performance);
function ei(e) {
  return !!e && e.$$typeof === aa;
}
var m = { useState: ea, useReducer: ta, useEffect: na, useLayoutEffect: qo, useRef: function(e) {
  return bt = 5, tr(function() {
    return { current: e };
  }, []);
}, useImperativeHandle: function(e, t, n) {
  bt = 6, qo(function() {
    typeof e == "function" ? e(t()) : e && (e.current = t());
  }, n == null ? n : n.concat(e));
}, useMemo: tr, useCallback: function(e, t) {
  return bt = 8, tr(function() {
    return e;
  }, t);
}, useContext: function(e) {
  var t = me.context[e.__c], n = tn($t++, 9);
  return n.__c = e, t ? (n.__ == null && (n.__ = !0, t.sub(me)), t.props.value) : e.__;
}, useDebugValue: function(e, t) {
  T.useDebugValue && T.useDebugValue(t ? t(e) : e);
}, version: "16.8.0", Children: Pf, render: la, hydrate: function(e, t, n) {
  return Xs(e, t), typeof n == "function" && n(), e ? e.__c : null;
}, unmountComponentAtNode: function(e) {
  return !!e.__k && (qt(null, e), !0);
}, createPortal: sa, createElement: je, createContext: function(e, t) {
  var n = { __c: t = "__cC" + Us++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.some(br);
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
  return je.bind(null, e);
}, cloneElement: function(e) {
  return ei(e) ? kf.apply(null, arguments) : e;
}, createRef: function() {
  return { current: null };
}, Fragment: Xe, isValidElement: ei, findDOMNode: function(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}, Component: Te, PureComponent: kr, memo: function(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : Or(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, je(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}, forwardRef: function(e) {
  function t(n, r) {
    var o = oa({}, n);
    return delete o.ref, e(o, (r = n.ref || r) && (Ft(r) != "object" || "current" in r) ? r : null);
  }
  return t.$$typeof = $f, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}, unstable_batchedUpdates: function(e, t) {
  return e(t);
}, StrictMode: Xe, Suspense: mn, SuspenseList: At, lazy: function(e) {
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
    return je(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Lf };
function Mf() {
  return m.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, m.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
}
function ua() {
  return m.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
var Rf = ["translations"];
function Sr() {
  return Sr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Sr.apply(this, arguments);
}
function Hf(e, t) {
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
        return ti(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return ti(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function ti(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Bf(e, t) {
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
var zf = m.forwardRef(function(e, t) {
  var n = e.translations, r = n === void 0 ? {} : n, o = Bf(e, Rf), i = r.buttonText, s = i === void 0 ? "Search" : i, a = r.buttonAriaLabel, l = a === void 0 ? "Search" : a, u = Hf(ea(null), 2), c = u[0], p = u[1];
  return na(function() {
    typeof navigator < "u" && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? p("\u2318") : p("Ctrl"));
  }, []), m.createElement("button", Sr({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": l }, o, { ref: t }), m.createElement("span", { className: "DocSearch-Button-Container" }, m.createElement(ua, null), m.createElement("span", { className: "DocSearch-Button-Placeholder" }, s)), m.createElement("span", { className: "DocSearch-Button-Keys" }, c !== null && m.createElement(m.Fragment, null, m.createElement("kbd", { className: "DocSearch-Button-Key" }, c === "Ctrl" ? m.createElement(Mf, null) : c), m.createElement("kbd", { className: "DocSearch-Button-Key" }, "K"))));
});
function Vf(e, t) {
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
        return ni(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return ni(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function ni(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function $r(e) {
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e);
}
function jn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  if (process.env.NODE_ENV === "production" || !e || $r(e) !== "object")
    return e;
  if (t.has(e))
    return "[Circular]";
  var n = t.add(e);
  return Array.isArray(e) ? e.map(function(r) {
    return jn(r, n);
  }) : Object.fromEntries(Object.entries(e).map(function(r) {
    var o = Vf(r, 2);
    return [o[0], jn(o[1], n)];
  }));
}
function Wt(e) {
  return e.reduce(function(t, n) {
    return t.concat(n);
  }, []);
}
var Ff = 0;
function Pr(e) {
  return e.collections.length === 0 ? 0 : e.collections.reduce(function(t, n) {
    return t + n.items.length;
  }, 0);
}
function Kt(e, t) {
  if (process.env.NODE_ENV !== "production" && !e)
    throw new Error("[Autocomplete] ".concat(typeof t == "function" ? t() : t));
}
var da = function() {
}, Uf = [{ segment: "autocomplete-core", version: "1.7.1" }], ri = { current: {} };
function qf(e) {
  process.env.NODE_ENV !== "production" && function(t, n) {
    if (process.env.NODE_ENV !== "production" && !t) {
      var r = n.trim();
      ri.current[r] || (ri.current[r] = !0, console.warn("[Autocomplete] ".concat(r)));
    }
  }(!e.debug, "The `debug` option is meant for development debugging and should not be used in production.");
}
function vn(e, t) {
  var n = t;
  return { then: function(r, o) {
    return vn(e.then(on(r, n, e), on(o, n, e)), n);
  }, catch: function(r) {
    return vn(e.catch(on(r, n, e)), n);
  }, finally: function(r) {
    return r && n.onCancelList.push(r), vn(e.finally(on(r && function() {
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
function oi(e) {
  return vn(e, { isCanceled: !1, onCancelList: [] });
}
function on(e, t, n) {
  return e ? function(r) {
    return t.isCanceled ? r : e(r);
  } : n;
}
function ii(e, t, n, r) {
  if (!n)
    return null;
  if (e < 0 && (t === null || r !== null && t === 0))
    return n + e;
  var o = (t === null ? -1 : t) + e;
  return o <= -1 || o >= n ? r === null ? null : 0 : o;
}
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
function Wf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Er(e) {
  return Er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Er(e);
}
function Kf(e, t) {
  var n = [];
  return Promise.resolve(e(t)).then(function(r) {
    return Kt(Array.isArray(r), function() {
      return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(Er(r)), `:

`).concat(JSON.stringify(jn(r), null, 2));
    }), Promise.all(r.filter(function(o) {
      return Boolean(o);
    }).map(function(o) {
      if (Kt(typeof o.sourceId == "string", "A source must provide a `sourceId` string."), n.includes(o.sourceId))
        throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(o.sourceId), " is not unique."));
      n.push(o.sourceId);
      var i = function(s) {
        for (var a = 1; a < arguments.length; a++) {
          var l = arguments[a] != null ? arguments[a] : {};
          a % 2 ? si(Object(l), !0).forEach(function(u) {
            Wf(s, u, l[u]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l)) : si(Object(l)).forEach(function(u) {
            Object.defineProperty(s, u, Object.getOwnPropertyDescriptor(l, u));
          });
        }
        return s;
      }({ getItemInputValue: function(s) {
        return s.state.query;
      }, getItemUrl: function() {
      }, onSelect: function(s) {
        (0, s.setIsOpen)(!1);
      }, onActive: da }, o);
      return Promise.resolve(i);
    }));
  });
}
function _t(e) {
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
var Jf = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
function ai(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function sn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ai(Object(n), !0).forEach(function(r) {
      Gf(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ai(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Gf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function li(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Qf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Yf(e, t, n) {
  var r, o = t.initialState;
  return { getState: function() {
    return o;
  }, dispatch: function(i, s) {
    var a = function(l) {
      for (var u = 1; u < arguments.length; u++) {
        var c = arguments[u] != null ? arguments[u] : {};
        u % 2 ? li(Object(c), !0).forEach(function(p) {
          Qf(l, p, c[p]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : li(Object(c)).forEach(function(p) {
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
function an(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ci(Object(n), !0).forEach(function(r) {
      Zf(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ci(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Zf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Xf(e) {
  return function(t) {
    if (Array.isArray(t))
      return nr(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (!!t) {
      if (typeof t == "string")
        return nr(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return nr(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function nr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
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
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ui(Object(n), !0).forEach(function(r) {
      ep(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ui(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ep(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
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
function ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? di(Object(n), !0).forEach(function(r) {
      fa(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : di(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function fa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Cr(e) {
  return Cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cr(e);
}
function tp(e) {
  return function(t) {
    if (Array.isArray(t))
      return rr(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (!!t) {
      if (typeof t == "string")
        return rr(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return rr(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function rr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function fi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function pi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fi(Object(n), !0).forEach(function(r) {
      np(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function np(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function cn(e) {
  return Boolean(e.execute);
}
function rp(e, t) {
  return n = e, Boolean(n == null ? void 0 : n.execute) ? pi(pi({}, e), {}, { requests: e.queries.map(function(r) {
    return { query: r, sourceId: t, transformResponse: e.transformResponse };
  }) }) : { items: e, sourceId: t };
  var n;
}
function op(e) {
  var t = e.reduce(function(n, r) {
    if (!cn(r))
      return n.push(r), n;
    var o = r.searchClient, i = r.execute, s = r.requesterId, a = r.requests, l = n.find(function(p) {
      return cn(r) && cn(p) && p.searchClient === o && Boolean(s) && p.requesterId === s;
    });
    if (l) {
      var u;
      (u = l.items).push.apply(u, tp(a));
    } else {
      var c = { execute: i, requesterId: s, items: a, searchClient: o };
      n.push(c);
    }
    return n;
  }, []).map(function(n) {
    if (!cn(n))
      return Promise.resolve(n);
    var r = n, o = r.execute, i = r.items;
    return o({ searchClient: r.searchClient, requests: i });
  });
  return Promise.all(t).then(function(n) {
    return Wt(n);
  });
}
function ip(e, t) {
  return t.map(function(n) {
    var r = e.filter(function(a) {
      return a.sourceId === n.sourceId;
    }), o = r.map(function(a) {
      return a.items;
    }), i = r[0].transformResponse, s = i ? i(function(a) {
      var l = a.map(function(u) {
        var c;
        return sn(sn({}, u), {}, { hits: (c = u.hits) === null || c === void 0 ? void 0 : c.map(function(p) {
          return sn(sn({}, p), {}, { __autocomplete_indexName: u.index, __autocomplete_queryID: u.queryID });
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
    return Kt(Array.isArray(s), function() {
      return 'The `getItems` function from source "'.concat(n.sourceId, '" must return an array of items but returned type ').concat(JSON.stringify(Cr(s)), `:

`).concat(JSON.stringify(jn(s), null, 2), `.

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`);
    }), Kt(s.every(Boolean), 'The `getItems` function from source "'.concat(n.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), `.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`)), { source: n, items: s };
  });
}
var sp = ["event", "nextState", "props", "query", "refresh", "store"];
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
function jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hi(Object(n), !0).forEach(function(r) {
      ap(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ap(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
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
var mi, or, un, Tt = null, vi = (mi = -1, or = -1, un = void 0, function(e) {
  var t = ++mi;
  return Promise.resolve(e).then(function(n) {
    return un && t < or ? un : (or = t, un = n, n);
  });
});
function vt(e) {
  var t = e.event, n = e.nextState, r = n === void 0 ? {} : n, o = e.props, i = e.query, s = e.refresh, a = e.store, l = lp(e, sp);
  Tt && o.environment.clearTimeout(Tt);
  var u = l.setCollections, c = l.setIsOpen, p = l.setQuery, f = l.setActiveItemId, d = l.setStatus;
  if (p(i), f(o.defaultActiveItemId), !i && o.openOnFocus === !1) {
    var v, _ = a.getState().collections.map(function(S) {
      return jt(jt({}, S), {}, { items: [] });
    });
    d("idle"), u(_), c((v = r.isOpen) !== null && v !== void 0 ? v : o.shouldPanelOpen({ state: a.getState() }));
    var b = oi(vi(_).then(function() {
      return Promise.resolve();
    }));
    return a.pendingRequests.add(b);
  }
  d("loading"), Tt = o.environment.setTimeout(function() {
    d("stalled");
  }, o.stallThreshold);
  var y = oi(vi(o.getSources(jt({ query: i, refresh: s, state: a.getState() }, l)).then(function(S) {
    return Promise.all(S.map(function(k) {
      return Promise.resolve(k.getItems(jt({ query: i, refresh: s, state: a.getState() }, l))).then(function(x) {
        return rp(x, k.sourceId);
      });
    })).then(op).then(function(k) {
      return ip(k, S);
    }).then(function(k) {
      return function(x) {
        var P = x.collections, L = x.props, E = x.state, A = P.reduce(function(C, X) {
          return ln(ln({}, C), {}, fa({}, X.source.sourceId, ln(ln({}, X.source), {}, { getItems: function() {
            return Wt(X.items);
          } })));
        }, {});
        return Wt(L.reshape({ sources: Object.values(A), sourcesBySourceId: A, state: E })).filter(Boolean).map(function(C) {
          return { source: C, items: C.getItems() };
        });
      }({ collections: k, props: o, state: a.getState() });
    });
  }))).then(function(S) {
    var k;
    d("idle"), u(S);
    var x = o.shouldPanelOpen({ state: a.getState() });
    c((k = r.isOpen) !== null && k !== void 0 ? k : o.openOnFocus && !i && x || x);
    var P = _t(a.getState());
    if (a.getState().activeItemId !== null && P) {
      var L = P.item, E = P.itemInputValue, A = P.itemUrl, C = P.source;
      C.onActive(jt({ event: t, item: L, itemInputValue: E, itemUrl: A, refresh: s, source: C, state: a.getState() }, l));
    }
  }).finally(function() {
    d("idle"), Tt && o.environment.clearTimeout(Tt);
  });
  return a.pendingRequests.add(y);
}
var cp = ["event", "props", "refresh", "store"];
function _i(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _i(Object(n), !0).forEach(function(r) {
      up(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _i(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function up(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function dp(e, t) {
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
var fp = ["props", "refresh", "store"], pp = ["inputElement", "formElement", "panelElement"], hp = ["inputElement"], mp = ["inputElement", "maxLength"], vp = ["item", "source"];
function gi(e, t) {
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
    t % 2 ? gi(Object(n), !0).forEach(function(r) {
      _p(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _p(e, t, n) {
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
function gp(e) {
  var t = e.props, n = e.refresh, r = e.store, o = It(e, fp);
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
    } }, It(i, pp));
  }, getRootProps: function(i) {
    return he({ role: "combobox", "aria-expanded": r.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": r.getState().isOpen ? "".concat(t.id, "-list") : void 0, "aria-labelledby": "".concat(t.id, "-label") }, i);
  }, getFormProps: function(i) {
    return i.inputElement, he({ action: "", noValidate: !0, role: "search", onSubmit: function(s) {
      var a;
      s.preventDefault(), t.onSubmit(he({ event: s, refresh: n, state: r.getState() }, o)), r.dispatch("submit", null), (a = i.inputElement) === null || a === void 0 || a.blur();
    }, onReset: function(s) {
      var a;
      s.preventDefault(), t.onReset(he({ event: s, refresh: n, state: r.getState() }, o)), r.dispatch("reset", null), (a = i.inputElement) === null || a === void 0 || a.focus();
    } }, It(i, hp));
  }, getLabelProps: function(i) {
    return he({ htmlFor: "".concat(t.id, "-input"), id: "".concat(t.id, "-label") }, i);
  }, getInputProps: function(i) {
    var s;
    function a(_) {
      (t.openOnFocus || Boolean(r.getState().query)) && vt(he({ event: _, props: t, query: r.getState().completion || r.getState().query, refresh: n, store: r }, o)), r.dispatch("focus", null);
    }
    var l = i || {}, u = (l.inputElement, l.maxLength), c = u === void 0 ? 512 : u, p = It(l, mp), f = _t(r.getState()), d = function(_) {
      return Boolean(_ && _.match(Jf));
    }(((s = t.environment.navigator) === null || s === void 0 ? void 0 : s.userAgent) || ""), v = f != null && f.itemUrl && !d ? "go" : "search";
    return he({ "aria-autocomplete": "both", "aria-activedescendant": r.getState().isOpen && r.getState().activeItemId !== null ? "".concat(t.id, "-item-").concat(r.getState().activeItemId) : void 0, "aria-controls": r.getState().isOpen ? "".concat(t.id, "-list") : void 0, "aria-labelledby": "".concat(t.id, "-label"), value: r.getState().completion || r.getState().query, id: "".concat(t.id, "-input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: v, spellCheck: "false", autoFocus: t.autoFocus, placeholder: t.placeholder, maxLength: c, type: "search", onChange: function(_) {
      vt(he({ event: _, props: t, query: _.currentTarget.value.slice(0, c), refresh: n, store: r }, o));
    }, onKeyDown: function(_) {
      (function(b) {
        var y = b.event, S = b.props, k = b.refresh, x = b.store, P = dp(b, cp);
        if (y.key === "ArrowUp" || y.key === "ArrowDown") {
          var L = function() {
            var J = S.environment.document.getElementById("".concat(S.id, "-item-").concat(x.getState().activeItemId));
            J && (J.scrollIntoViewIfNeeded ? J.scrollIntoViewIfNeeded(!1) : J.scrollIntoView(!1));
          }, E = function() {
            var J = _t(x.getState());
            if (x.getState().activeItemId !== null && J) {
              var de = J.item, ye = J.itemInputValue, rt = J.itemUrl, qe = J.source;
              qe.onActive(lt({ event: y, item: de, itemInputValue: ye, itemUrl: rt, refresh: k, source: qe, state: x.getState() }, P));
            }
          };
          y.preventDefault(), x.getState().isOpen === !1 && (S.openOnFocus || Boolean(x.getState().query)) ? vt(lt({ event: y, props: S, query: x.getState().query, refresh: k, store: x }, P)).then(function() {
            x.dispatch(y.key, { nextActiveItemId: S.defaultActiveItemId }), E(), setTimeout(L, 0);
          }) : (x.dispatch(y.key, {}), E(), L());
        } else if (y.key === "Escape")
          y.preventDefault(), x.dispatch(y.key, null), x.pendingRequests.cancelAll();
        else if (y.key === "Tab")
          x.dispatch("blur", null), x.pendingRequests.cancelAll();
        else if (y.key === "Enter") {
          if (x.getState().activeItemId === null || x.getState().collections.every(function(J) {
            return J.items.length === 0;
          }))
            return void (S.debug || x.pendingRequests.cancelAll());
          y.preventDefault();
          var A = _t(x.getState()), C = A.item, X = A.itemInputValue, ne = A.itemUrl, ie = A.source;
          if (y.metaKey || y.ctrlKey)
            ne !== void 0 && (ie.onSelect(lt({ event: y, item: C, itemInputValue: X, itemUrl: ne, refresh: k, source: ie, state: x.getState() }, P)), S.navigator.navigateNewTab({ itemUrl: ne, item: C, state: x.getState() }));
          else if (y.shiftKey)
            ne !== void 0 && (ie.onSelect(lt({ event: y, item: C, itemInputValue: X, itemUrl: ne, refresh: k, source: ie, state: x.getState() }, P)), S.navigator.navigateNewWindow({ itemUrl: ne, item: C, state: x.getState() }));
          else if (!y.altKey) {
            if (ne !== void 0)
              return ie.onSelect(lt({ event: y, item: C, itemInputValue: X, itemUrl: ne, refresh: k, source: ie, state: x.getState() }, P)), void S.navigator.navigate({ itemUrl: ne, item: C, state: x.getState() });
            vt(lt({ event: y, nextState: { isOpen: !1 }, props: S, query: X, refresh: k, store: x }, P)).then(function() {
              ie.onSelect(lt({ event: y, item: C, itemInputValue: X, itemUrl: ne, refresh: k, source: ie, state: x.getState() }, P));
            });
          }
        }
      })(he({ event: _, props: t, refresh: n, store: r }, o));
    }, onFocus: a, onBlur: da, onClick: function(_) {
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
    var s = i.item, a = i.source, l = It(i, vp);
    return he({ id: "".concat(t.id, "-item-").concat(s.__autocomplete_id), role: "option", "aria-selected": r.getState().activeItemId === s.__autocomplete_id, onMouseMove: function(u) {
      if (s.__autocomplete_id !== r.getState().activeItemId) {
        r.dispatch("mousemove", s.__autocomplete_id);
        var c = _t(r.getState());
        if (r.getState().activeItemId !== null && c) {
          var p = c.item, f = c.itemInputValue, d = c.itemUrl, v = c.source;
          v.onActive(he({ event: u, item: p, itemInputValue: f, itemUrl: d, refresh: n, source: v, state: r.getState() }, o));
        }
      }
    }, onMouseDown: function(u) {
      u.preventDefault();
    }, onClick: function(u) {
      var c = a.getItemInputValue({ item: s, state: r.getState() }), p = a.getItemUrl({ item: s, state: r.getState() });
      (p ? Promise.resolve() : vt(he({ event: u, nextState: { isOpen: !1 }, props: t, query: c, refresh: n, store: r }, o))).then(function() {
        a.onSelect(he({ event: u, item: s, itemInputValue: c, itemUrl: p, refresh: n, source: a, state: r.getState() }, o));
      });
    } }, l);
  } };
}
function yi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function yp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yi(Object(n), !0).forEach(function(r) {
      pa(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function pa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function bp(e) {
  var t, n, r, o, i = e.plugins, s = e.options, a = (t = (((n = s.__autocomplete_metadata) === null || n === void 0 ? void 0 : n.userAgents) || [])[0]) === null || t === void 0 ? void 0 : t.segment, l = a ? pa({}, a, Object.keys(((r = s.__autocomplete_metadata) === null || r === void 0 ? void 0 : r.options) || {})) : {};
  return { plugins: i.map(function(u) {
    return { name: u.name, options: Object.keys(u.__autocomplete_pluginOptions || []) };
  }), options: yp({ "autocomplete-core": Object.keys(s) }, l), ua: Uf.concat(((o = s.__autocomplete_metadata) === null || o === void 0 ? void 0 : o.userAgents) || []) };
}
function bi(e) {
  var t, n = e.state;
  return n.isOpen === !1 || n.activeItemId === null ? null : ((t = _t(n)) === null || t === void 0 ? void 0 : t.itemInputValue) || null;
}
function wi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wi(Object(n), !0).forEach(function(r) {
      wp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function wp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var xp = function(e, t) {
  switch (t.type) {
    case "setActiveItemId":
    case "mousemove":
      return z(z({}, e), {}, { activeItemId: t.payload });
    case "setQuery":
      return z(z({}, e), {}, { query: t.payload, completion: null });
    case "setCollections":
      return z(z({}, e), {}, { collections: t.payload });
    case "setIsOpen":
      return z(z({}, e), {}, { isOpen: t.payload });
    case "setStatus":
      return z(z({}, e), {}, { status: t.payload });
    case "setContext":
      return z(z({}, e), {}, { context: z(z({}, e.context), t.payload) });
    case "ArrowDown":
      var n = z(z({}, e), {}, { activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : ii(1, e.activeItemId, Pr(e), t.props.defaultActiveItemId) });
      return z(z({}, n), {}, { completion: bi({ state: n }) });
    case "ArrowUp":
      var r = z(z({}, e), {}, { activeItemId: ii(-1, e.activeItemId, Pr(e), t.props.defaultActiveItemId) });
      return z(z({}, r), {}, { completion: bi({ state: r }) });
    case "Escape":
      return e.isOpen ? z(z({}, e), {}, { activeItemId: null, isOpen: !1, completion: null }) : z(z({}, e), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
    case "submit":
      return z(z({}, e), {}, { activeItemId: null, isOpen: !1, status: "idle" });
    case "reset":
      return z(z({}, e), {}, { activeItemId: t.props.openOnFocus === !0 ? t.props.defaultActiveItemId : null, status: "idle", query: "" });
    case "focus":
      return z(z({}, e), {}, { activeItemId: t.props.defaultActiveItemId, isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({ state: e }) });
    case "blur":
      return t.props.debug ? e : z(z({}, e), {}, { isOpen: !1, activeItemId: null });
    case "mouseleave":
      return z(z({}, e), {}, { activeItemId: t.props.defaultActiveItemId });
    default:
      return Kt(!1, "The reducer action ".concat(JSON.stringify(t.type), " is not supported.")), e;
  }
};
function xi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xi(Object(n), !0).forEach(function(r) {
      Op(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Op(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function kp(e) {
  qf(e);
  var t = [], n = function(a, l) {
    var u, c = typeof window < "u" ? window : {}, p = a.plugins || [];
    return pt(pt({ debug: !1, openOnFocus: !1, placeholder: "", autoFocus: !1, defaultActiveItemId: null, stallThreshold: 300, environment: c, shouldPanelOpen: function(f) {
      return Pr(f.state) > 0;
    }, reshape: function(f) {
      return f.sources;
    } }, a), {}, { id: (u = a.id) !== null && u !== void 0 ? u : "autocomplete-".concat(Ff++), plugins: p, initialState: pt({ activeItemId: null, query: "", completion: null, collections: [], isOpen: !1, status: "idle", context: {} }, a.initialState), onStateChange: function(f) {
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
      return Promise.all([].concat(Xf(p.map(function(d) {
        return d.getSources;
      })), [a.getSources]).filter(Boolean).map(function(d) {
        return Kf(d, f);
      })).then(function(d) {
        return Wt(d);
      }).then(function(d) {
        return d.map(function(v) {
          return pt(pt({}, v), {}, { onSelect: function(_) {
            v.onSelect(_), l.forEach(function(b) {
              var y;
              return (y = b.onSelect) === null || y === void 0 ? void 0 : y.call(b, _);
            });
          }, onActive: function(_) {
            v.onActive(_), l.forEach(function(b) {
              var y;
              return (y = b.onActive) === null || y === void 0 ? void 0 : y.call(b, _);
            });
          } });
        });
      });
    }, navigator: pt({ navigate: function(f) {
      var d = f.itemUrl;
      c.location.assign(d);
    }, navigateNewTab: function(f) {
      var d = f.itemUrl, v = c.open(d, "_blank", "noopener");
      v == null || v.focus();
    }, navigateNewWindow: function(f) {
      var d = f.itemUrl;
      c.open(d, "_blank", "noopener");
    } }, a.navigator) });
  }(e, t), r = Yf(xp, n, function(a) {
    var l = a.prevState, u = a.state;
    n.onStateChange(ct({ prevState: l, state: u, refresh: s }, o));
  }), o = function(a) {
    var l = a.store;
    return { setActiveItemId: function(u) {
      l.dispatch("setActiveItemId", u);
    }, setQuery: function(u) {
      l.dispatch("setQuery", u);
    }, setCollections: function(u) {
      var c = 0, p = u.map(function(f) {
        return an(an({}, f), {}, { items: Wt(f.items).map(function(d) {
          return an(an({}, d), {}, { __autocomplete_id: c++ });
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
  }({ store: r }), i = gp(ct({ props: n, refresh: s, store: r }, o));
  function s() {
    return vt(ct({ event: new Event("input"), nextState: { isOpen: r.getState().isOpen }, props: n, query: r.getState().query, refresh: s, store: r }, o));
  }
  return n.plugins.forEach(function(a) {
    var l;
    return (l = a.subscribe) === null || l === void 0 ? void 0 : l.call(a, ct(ct({}, o), {}, { refresh: s, onSelect: function(u) {
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
  }({ metadata: bp({ plugins: n.plugins, options: e }), environment: n.environment }), ct(ct({ refresh: s }, i), o);
}
function Sp(e) {
  var t = e.translations, n = (t === void 0 ? {} : t).searchByText, r = n === void 0 ? "Search by" : n;
  return m.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, m.createElement("span", { className: "DocSearch-Label" }, r), m.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, m.createElement("defs", null, m.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), m.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), m.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), m.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), m.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), m.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), m.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), m.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), m.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), m.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
}
function dn(e) {
  return m.createElement("svg", { width: "15", height: "15", "aria-label": e.ariaLabel, role: "img" }, m.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e.children));
}
function $p(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = n.selectText, o = r === void 0 ? "to select" : r, i = n.selectKeyAriaLabel, s = i === void 0 ? "Enter key" : i, a = n.navigateText, l = a === void 0 ? "to navigate" : a, u = n.navigateUpKeyAriaLabel, c = u === void 0 ? "Arrow up" : u, p = n.navigateDownKeyAriaLabel, f = p === void 0 ? "Arrow down" : p, d = n.closeText, v = d === void 0 ? "to close" : d, _ = n.closeKeyAriaLabel, b = _ === void 0 ? "Escape key" : _, y = n.searchByText, S = y === void 0 ? "Search by" : y;
  return m.createElement(m.Fragment, null, m.createElement("div", { className: "DocSearch-Logo" }, m.createElement(Sp, { translations: { searchByText: S } })), m.createElement("ul", { className: "DocSearch-Commands" }, m.createElement("li", null, m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(dn, { ariaLabel: s }, m.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), m.createElement("span", { className: "DocSearch-Label" }, o)), m.createElement("li", null, m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(dn, { ariaLabel: f }, m.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(dn, { ariaLabel: c }, m.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), m.createElement("span", { className: "DocSearch-Label" }, l)), m.createElement("li", null, m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(dn, { ariaLabel: b }, m.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), m.createElement("span", { className: "DocSearch-Label" }, v))));
}
function Pp(e) {
  var t = e.hit, n = e.children;
  return m.createElement("a", { href: t.url }, n);
}
function Ep() {
  return m.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, m.createElement("g", { fill: "none", fillRule: "evenodd" }, m.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, m.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), m.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, m.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
}
function Cp() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), m.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
}
function jr() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function jp() {
  return m.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), m.createElement("path", { d: "M8 17l-6-6 6-6" })));
}
var Tp = function() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
};
function Ip(e) {
  switch (e.type) {
    case "lvl1":
      return m.createElement(Tp, null);
    case "content":
      return m.createElement(Np, null);
    default:
      return m.createElement(Ap, null);
  }
}
function Ap() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function Np() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function Oi() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function Dp() {
  return m.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
}
function Lp() {
  return m.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
}
function Mp(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = n.titleText, o = r === void 0 ? "Unable to fetch results" : r, i = n.helpText, s = i === void 0 ? "You might want to check your network connection." : i;
  return m.createElement("div", { className: "DocSearch-ErrorScreen" }, m.createElement("div", { className: "DocSearch-Screen-Icon" }, m.createElement(Dp, null)), m.createElement("p", { className: "DocSearch-Title" }, o), m.createElement("p", { className: "DocSearch-Help" }, s));
}
var Rp = ["translations"];
function Hp(e) {
  return function(t) {
    if (Array.isArray(t))
      return ir(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (!!t) {
      if (typeof t == "string")
        return ir(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return ir(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function ir(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Bp(e, t) {
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
function zp(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = Bp(e, Rp), o = n.noResultsText, i = o === void 0 ? "No results for" : o, s = n.suggestedQueryText, a = s === void 0 ? "Try searching for" : s, l = n.reportMissingResultsText, u = l === void 0 ? "Believe this query should return results?" : l, c = n.reportMissingResultsLinkText, p = c === void 0 ? "Let us know." : c, f = r.state.context.searchSuggestions;
  return m.createElement("div", { className: "DocSearch-NoResults" }, m.createElement("div", { className: "DocSearch-Screen-Icon" }, m.createElement(Lp, null)), m.createElement("p", { className: "DocSearch-Title" }, i, ' "', m.createElement("strong", null, r.state.query), '"'), f && f.length > 0 && m.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, m.createElement("p", { className: "DocSearch-Help" }, a, ":"), m.createElement("ul", null, f.slice(0, 3).reduce(function(d, v) {
    return [].concat(Hp(d), [m.createElement("li", { key: v }, m.createElement("button", { className: "DocSearch-Prefill", key: v, type: "button", onClick: function() {
      r.setQuery(v.toLowerCase() + " "), r.refresh(), r.inputRef.current.focus();
    } }, v))]);
  }, []))), r.getMissingResultsUrl && m.createElement("p", { className: "DocSearch-Help" }, "".concat(u, " "), m.createElement("a", { href: r.getMissingResultsUrl({ query: r.state.query }), target: "_blank", rel: "noopener noreferrer" }, p)));
}
var Vp = ["hit", "attribute", "tagName"];
function ki(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ki(Object(n), !0).forEach(function(r) {
      Fp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ki(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Fp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Up(e, t) {
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
function $i(e, t) {
  return t.split(".").reduce(function(n, r) {
    return n != null && n[r] ? n[r] : null;
  }, e);
}
function ht(e) {
  var t = e.hit, n = e.attribute, r = e.tagName;
  return je(r === void 0 ? "span" : r, Si(Si({}, Up(e, Vp)), {}, { dangerouslySetInnerHTML: { __html: $i(t, "_snippetResult.".concat(n, ".value")) || $i(t, n) } }));
}
function Pi(e, t) {
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
        return Ei(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return Ei(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Ei(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Tn() {
  return Tn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tn.apply(this, arguments);
}
function Tr(e) {
  return e.collection && e.collection.items.length !== 0 ? m.createElement("section", { className: "DocSearch-Hits" }, m.createElement("div", { className: "DocSearch-Hit-source" }, e.title), m.createElement("ul", e.getListProps(), e.collection.items.map(function(t, n) {
    return m.createElement(qp, Tn({ key: [e.title, t.objectID].join(":"), item: t, index: n }, e));
  }))) : null;
}
function qp(e) {
  var t = e.item, n = e.index, r = e.renderIcon, o = e.renderAction, i = e.getItemProps, s = e.onItemClick, a = e.collection, l = e.hitComponent, u = Pi(m.useState(!1), 2), c = u[0], p = u[1], f = Pi(m.useState(!1), 2), d = f[0], v = f[1], _ = m.useRef(null), b = l;
  return m.createElement("li", Tn({ className: ["DocSearch-Hit", t.__docsearch_parent && "DocSearch-Hit--Child", c && "DocSearch-Hit--deleting", d && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
    _.current && _.current();
  } }, i({ item: t, source: a.source, onClick: function() {
    s(t);
  } })), m.createElement(b, { hit: t }, m.createElement("div", { className: "DocSearch-Hit-Container" }, r({ item: t, index: n }), t.hierarchy[t.type] && t.type === "lvl1" && m.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, m.createElement(ht, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.lvl1" }), t.content && m.createElement(ht, { className: "DocSearch-Hit-path", hit: t, attribute: "content" })), t.hierarchy[t.type] && (t.type === "lvl2" || t.type === "lvl3" || t.type === "lvl4" || t.type === "lvl5" || t.type === "lvl6") && m.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, m.createElement(ht, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.".concat(t.type) }), m.createElement(ht, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })), t.type === "content" && m.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, m.createElement(ht, { className: "DocSearch-Hit-title", hit: t, attribute: "content" }), m.createElement(ht, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })), o({ item: t, runDeleteTransition: function(y) {
    p(!0), _.current = y;
  }, runFavoriteTransition: function(y) {
    v(!0), _.current = y;
  } }))));
}
function Ci(e, t) {
  return e.reduce(function(n, r) {
    var o = t(r);
    return n.hasOwnProperty(o) || (n[o] = []), n[o].length < 5 && n[o].push(r), n;
  }, {});
}
function ji(e) {
  return e;
}
function Wp() {
}
var ha = /(<mark>|<\/mark>)/g, Kp = RegExp(ha.source);
function ma(e) {
  var t, n, r, o, i, s = e;
  if (!s.__docsearch_parent && !e._highlightResult)
    return e.hierarchy.lvl0;
  var a = ((s.__docsearch_parent ? (t = s.__docsearch_parent) === null || t === void 0 || (n = t._highlightResult) === null || n === void 0 || (r = n.hierarchy) === null || r === void 0 ? void 0 : r.lvl0 : (o = e._highlightResult) === null || o === void 0 || (i = o.hierarchy) === null || i === void 0 ? void 0 : i.lvl0) || {}).value;
  return a && Kp.test(a) ? a.replace(ha, "") : a;
}
function Ir() {
  return Ir = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ir.apply(this, arguments);
}
function Jp(e) {
  return m.createElement("div", { className: "DocSearch-Dropdown-Container" }, e.state.collections.map(function(t) {
    if (t.items.length === 0)
      return null;
    var n = ma(t.items[0]);
    return m.createElement(Tr, Ir({}, e, { key: t.source.sourceId, title: n, collection: t, renderIcon: function(r) {
      var o, i = r.item, s = r.index;
      return m.createElement(m.Fragment, null, i.__docsearch_parent && m.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, m.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, i.__docsearch_parent !== ((o = t.items[s + 1]) === null || o === void 0 ? void 0 : o.__docsearch_parent) ? m.createElement("path", { d: "M8 6v21M20 27H8.3" }) : m.createElement("path", { d: "M8 6v42M20 27H8.3" }))), m.createElement("div", { className: "DocSearch-Hit-icon" }, m.createElement(Ip, { type: i.type })));
    }, renderAction: function() {
      return m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement(jp, null));
    } }));
  }), e.resultsFooterComponent && m.createElement("section", { className: "DocSearch-HitsFooter" }, m.createElement(e.resultsFooterComponent, { state: e.state })));
}
var Gp = ["translations"];
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
function Qp(e, t) {
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
function Yp(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = Qp(e, Gp), o = n.recentSearchesTitle, i = o === void 0 ? "Recent" : o, s = n.noRecentSearchesText, a = s === void 0 ? "No recent searches" : s, l = n.saveRecentSearchButtonTitle, u = l === void 0 ? "Save this search" : l, c = n.removeRecentSearchButtonTitle, p = c === void 0 ? "Remove this search from history" : c, f = n.favoriteSearchesTitle, d = f === void 0 ? "Favorite" : f, v = n.removeFavoriteSearchButtonTitle, _ = v === void 0 ? "Remove this search from favorites" : v;
  return r.state.status === "idle" && r.hasCollections === !1 ? r.disableUserPersonalization ? null : m.createElement("div", { className: "DocSearch-StartScreen" }, m.createElement("p", { className: "DocSearch-Help" }, a)) : r.hasCollections === !1 ? null : m.createElement("div", { className: "DocSearch-Dropdown-Container" }, m.createElement(Tr, In({}, r, { title: i, collection: r.state.collections[0], renderIcon: function() {
    return m.createElement("div", { className: "DocSearch-Hit-icon" }, m.createElement(Cp, null));
  }, renderAction: function(b) {
    var y = b.item, S = b.runFavoriteTransition, k = b.runDeleteTransition;
    return m.createElement(m.Fragment, null, m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement("button", { className: "DocSearch-Hit-action-button", title: u, type: "submit", onClick: function(x) {
      x.preventDefault(), x.stopPropagation(), S(function() {
        r.favoriteSearches.add(y), r.recentSearches.remove(y), r.refresh();
      });
    } }, m.createElement(Oi, null))), m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement("button", { className: "DocSearch-Hit-action-button", title: p, type: "submit", onClick: function(x) {
      x.preventDefault(), x.stopPropagation(), k(function() {
        r.recentSearches.remove(y), r.refresh();
      });
    } }, m.createElement(jr, null))));
  } })), m.createElement(Tr, In({}, r, { title: d, collection: r.state.collections[1], renderIcon: function() {
    return m.createElement("div", { className: "DocSearch-Hit-icon" }, m.createElement(Oi, null));
  }, renderAction: function(b) {
    var y = b.item, S = b.runDeleteTransition;
    return m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement("button", { className: "DocSearch-Hit-action-button", title: _, type: "submit", onClick: function(k) {
      k.preventDefault(), k.stopPropagation(), S(function() {
        r.favoriteSearches.remove(y), r.refresh();
      });
    } }, m.createElement(jr, null)));
  } })));
}
var Zp = ["translations"];
function An() {
  return An = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, An.apply(this, arguments);
}
function Xp(e, t) {
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
var eh = m.memo(function(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = Xp(e, Zp);
  if (r.state.status === "error")
    return m.createElement(Mp, { translations: n == null ? void 0 : n.errorScreen });
  var o = r.state.collections.some(function(i) {
    return i.items.length > 0;
  });
  return r.state.query ? o === !1 ? m.createElement(zp, An({}, r, { translations: n == null ? void 0 : n.noResultsScreen })) : m.createElement(Jp, r) : m.createElement(Yp, An({}, r, { hasCollections: o, translations: n == null ? void 0 : n.startScreen }));
}, function(e, t) {
  return t.state.status === "loading" || t.state.status === "stalled";
}), th = ["translations"];
function Nn() {
  return Nn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Nn.apply(this, arguments);
}
function nh(e, t) {
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
function rh(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = nh(e, th), o = n.resetButtonTitle, i = o === void 0 ? "Clear the query" : o, s = n.resetButtonAriaLabel, a = s === void 0 ? "Clear the query" : s, l = n.cancelButtonText, u = l === void 0 ? "Cancel" : l, c = n.cancelButtonAriaLabel, p = c === void 0 ? "Cancel" : c, f = r.getFormProps({ inputElement: r.inputRef.current }).onReset;
  return m.useEffect(function() {
    r.autoFocus && r.inputRef.current && r.inputRef.current.focus();
  }, [r.autoFocus, r.inputRef]), m.useEffect(function() {
    r.isFromSelection && r.inputRef.current && r.inputRef.current.select();
  }, [r.isFromSelection, r.inputRef]), m.createElement(m.Fragment, null, m.createElement("form", { className: "DocSearch-Form", onSubmit: function(d) {
    d.preventDefault();
  }, onReset: f }, m.createElement("label", Nn({ className: "DocSearch-MagnifierLabel" }, r.getLabelProps()), m.createElement(ua, null)), m.createElement("div", { className: "DocSearch-LoadingIndicator" }, m.createElement(Ep, null)), m.createElement("input", Nn({ className: "DocSearch-Input", ref: r.inputRef }, r.getInputProps({ inputElement: r.inputRef.current, autoFocus: r.autoFocus, maxLength: 64 }))), m.createElement("button", { type: "reset", title: i, className: "DocSearch-Reset", "aria-label": a, hidden: !r.state.query }, m.createElement(jr, null))), m.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": p, onClick: r.onClose }, u));
}
var oh = ["_highlightResult", "_snippetResult"];
function ih(e, t) {
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
function sh(e) {
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
function Ti(e) {
  var t = e.key, n = e.limit, r = n === void 0 ? 5 : n, o = sh(t), i = o.getItem().slice(0, r);
  return { add: function(s) {
    var a = s, l = (a._highlightResult, a._snippetResult, ih(a, oh)), u = i.findIndex(function(c) {
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
var ah = ["facetName", "facetQuery"];
function lh(e) {
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
      var u = $n(l, 2), c = u[0], p = u[1];
      return Promise.all([c, p || a.miss(c)]);
    }).then(function(l) {
      return $n(l, 1)[0];
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
function Nt(e) {
  var t = Pn(e.caches), n = t.shift();
  return n === void 0 ? { get: function(r, o) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return o().then(function(s) {
      return Promise.all([s, i.miss(s)]);
    }).then(function(s) {
      return $n(s, 1)[0];
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
      return Nt({ caches: t }).get(r, o, i);
    });
  }, set: function(r, o) {
    return n.set(r, o).catch(function() {
      return Nt({ caches: t }).set(r, o);
    });
  }, delete: function(r) {
    return n.delete(r).catch(function() {
      return Nt({ caches: t }).delete(r);
    });
  }, clear: function() {
    return n.clear().catch(function() {
      return Nt({ caches: t }).clear();
    });
  } };
}
function sr() {
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
function ch(e) {
  for (var t = e.length - 1; t > 0; t--) {
    var n = Math.floor(Math.random() * (t + 1)), r = e[t];
    e[t] = e[n], e[n] = r;
  }
  return e;
}
function va(e, t) {
  return t && Object.keys(t).forEach(function(n) {
    e[n] = t[n](e);
  }), e;
}
function Un(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0;
  return e.replace(/%s/g, function() {
    return encodeURIComponent(n[o++]);
  });
}
var _n = { WithinQueryParameters: 0, WithinHeaders: 1 };
function Ii(e, t) {
  var n = e || {}, r = n.data || {};
  return Object.keys(n).forEach(function(o) {
    ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(o) === -1 && (r[o] = n[o]);
  }), { data: Object.entries(r).length > 0 ? r : void 0, timeout: n.timeout || t, headers: n.headers || {}, queryParameters: n.queryParameters || {}, cacheable: n.cacheable };
}
var gt = { Read: 1, Write: 2, Any: 3 }, _a = 1, uh = 2, ga = 3;
function ya(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _a;
  return W(W({}, e), {}, { status: t, lastUpdate: Date.now() });
}
function ba(e) {
  return typeof e == "string" ? { protocol: "https", url: e, accept: gt.Any } : { protocol: e.protocol || "https", url: e.url, accept: e.accept || gt.Any };
}
var Ai = "GET", qn = "POST";
function dh(e, t) {
  return Promise.all(t.map(function(n) {
    return e.get(n, function() {
      return Promise.resolve(ya(n));
    });
  })).then(function(n) {
    var r = n.filter(function(s) {
      return function(a) {
        return a.status === _a || Date.now() - a.lastUpdate > 12e4;
      }(s);
    }), o = n.filter(function(s) {
      return function(a) {
        return a.status === ga && Date.now() - a.lastUpdate <= 12e4;
      }(s);
    }), i = [].concat(Pn(r), Pn(o));
    return { getTimeout: function(s, a) {
      return (o.length === 0 && s === 0 ? 1 : o.length + 3 + s) * a;
    }, statelessHosts: i.length > 0 ? i.map(function(s) {
      return ba(s);
    }) : t };
  });
}
function Ni(e, t, n, r) {
  var o = [], i = function(f, d) {
    if (!(f.method === Ai || f.data === void 0 && d.data === void 0)) {
      var v = Array.isArray(f.data) ? f.data : W(W({}, f.data), d.data);
      return JSON.stringify(v);
    }
  }(n, r), s = function(f, d) {
    var v = W(W({}, f.headers), d.headers), _ = {};
    return Object.keys(v).forEach(function(b) {
      var y = v[b];
      _[b.toLowerCase()] = y;
    }), _;
  }(e, r), a = n.method, l = n.method !== Ai ? {} : W(W({}, n.data), r.data), u = W(W(W({ "x-algolia-agent": e.userAgent.value }, e.queryParameters), l), r.queryParameters), c = 0, p = function f(d, v) {
    var _ = d.pop();
    if (_ === void 0)
      throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: Di(o) };
    var b = { data: i, headers: s, method: a, url: ph(_, n.path, u), connectTimeout: v(c, e.timeouts.connect), responseTimeout: v(c, r.timeout) }, y = function(k) {
      var x = { request: b, response: k, host: _, triesLeft: d.length };
      return o.push(x), x;
    }, S = { onSucess: function(k) {
      return function(x) {
        try {
          return JSON.parse(x.content);
        } catch (P) {
          throw function(L, E) {
            return { name: "DeserializationError", message: L, response: E };
          }(P.message, x);
        }
      }(k);
    }, onRetry: function(k) {
      var x = y(k);
      return k.isTimedOut && c++, Promise.all([e.logger.info("Retryable failure", xa(x)), e.hostsCache.set(_, ya(_, k.isTimedOut ? ga : uh))]).then(function() {
        return f(d, v);
      });
    }, onFail: function(k) {
      throw y(k), function(x, P) {
        var L = x.content, E = x.status, A = L;
        try {
          A = JSON.parse(L).message;
        } catch {
        }
        return function(C, X, ne) {
          return { name: "ApiError", message: C, status: X, transporterStackTrace: ne };
        }(A, E, P);
      }(k, Di(o));
    } };
    return e.requester.send(b).then(function(k) {
      return function(x, P) {
        return function(L) {
          var E = L.status;
          return L.isTimedOut || function(A) {
            var C = A.isTimedOut, X = A.status;
            return !C && ~~X == 0;
          }(L) || ~~(E / 100) != 2 && ~~(E / 100) != 4;
        }(x) ? P.onRetry(x) : ~~(x.status / 100) == 2 ? P.onSucess(x) : P.onFail(x);
      }(k, S);
    });
  };
  return dh(e.hostsCache, t).then(function(f) {
    return p(Pn(f.statelessHosts).reverse(), f.getTimeout);
  });
}
function fh(e) {
  var t = { value: "Algolia for JavaScript (".concat(e, ")"), add: function(n) {
    var r = "; ".concat(n.segment).concat(n.version !== void 0 ? " (".concat(n.version, ")") : "");
    return t.value.indexOf(r) === -1 && (t.value = "".concat(t.value).concat(r)), t;
  } };
  return t;
}
function ph(e, t, n) {
  var r = wa(n), o = "".concat(e.protocol, "://").concat(e.url, "/").concat(t.charAt(0) === "/" ? t.substr(1) : t);
  return r.length && (o += "?".concat(r)), o;
}
function wa(e) {
  return Object.keys(e).map(function(t) {
    return Un("%s=%s", t, (n = e[t], Object.prototype.toString.call(n) === "[object Object]" || Object.prototype.toString.call(n) === "[object Array]" ? JSON.stringify(e[t]) : e[t]));
    var n;
  }).join("&");
}
function Di(e) {
  return e.map(function(t) {
    return xa(t);
  });
}
function xa(e) {
  var t = e.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return W(W({}, e), {}, { request: W(W({}, e.request), {}, { headers: W(W({}, e.request.headers), t) }) });
}
var hh = function(e) {
  var t = e.appId, n = function(i, s, a) {
    var l = { "x-algolia-api-key": a, "x-algolia-application-id": s };
    return { headers: function() {
      return i === _n.WithinHeaders ? l : {};
    }, queryParameters: function() {
      return i === _n.WithinQueryParameters ? l : {};
    } };
  }(e.authMode !== void 0 ? e.authMode : _n.WithinHeaders, t, e.apiKey), r = function(i) {
    var s = i.hostsCache, a = i.logger, l = i.requester, u = i.requestsCache, c = i.responsesCache, p = i.timeouts, f = i.userAgent, d = i.hosts, v = i.queryParameters, _ = { hostsCache: s, logger: a, requester: l, requestsCache: u, responsesCache: c, timeouts: p, userAgent: f, headers: i.headers, queryParameters: v, hosts: d.map(function(b) {
      return ba(b);
    }), read: function(b, y) {
      var S = Ii(y, _.timeouts.read), k = function() {
        return Ni(_, _.hosts.filter(function(P) {
          return (P.accept & gt.Read) != 0;
        }), b, S);
      };
      if ((S.cacheable !== void 0 ? S.cacheable : b.cacheable) !== !0)
        return k();
      var x = { request: b, mappedRequestOptions: S, transporter: { queryParameters: _.queryParameters, headers: _.headers } };
      return _.responsesCache.get(x, function() {
        return _.requestsCache.get(x, function() {
          return _.requestsCache.set(x, k()).then(function(P) {
            return Promise.all([_.requestsCache.delete(x), P]);
          }, function(P) {
            return Promise.all([_.requestsCache.delete(x), Promise.reject(P)]);
          }).then(function(P) {
            var L = $n(P, 2);
            return L[0], L[1];
          });
        });
      }, { miss: function(P) {
        return _.responsesCache.set(x, P);
      } });
    }, write: function(b, y) {
      return Ni(_, _.hosts.filter(function(S) {
        return (S.accept & gt.Write) != 0;
      }), b, Ii(y, _.timeouts.write));
    } };
    return _;
  }(W(W({ hosts: [{ url: "".concat(t, "-dsn.algolia.net"), accept: gt.Read }, { url: "".concat(t, ".algolia.net"), accept: gt.Write }].concat(ch([{ url: "".concat(t, "-1.algolianet.com") }, { url: "".concat(t, "-2.algolianet.com") }, { url: "".concat(t, "-3.algolianet.com") }])) }, e), {}, { headers: W(W(W({}, n.headers()), { "content-type": "application/x-www-form-urlencoded" }), e.headers), queryParameters: W(W({}, n.queryParameters()), e.queryParameters) })), o = { transporter: r, appId: t, addAlgoliaAgent: function(i, s) {
    r.userAgent.add({ segment: i, version: s });
  }, clearCache: function() {
    return Promise.all([r.requestsCache.clear(), r.responsesCache.clear()]).then(function() {
    });
  } };
  return va(o, e.methods);
}, Oa = function(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = { transporter: e.transporter, appId: e.appId, indexName: t };
    return va(r, n.methods);
  };
}, Li = function(e) {
  return function(t, n) {
    var r = t.map(function(o) {
      return W(W({}, o), {}, { params: wa(o.params || {}) });
    });
    return e.transporter.read({ method: qn, path: "1/indexes/*/queries", data: { requests: r }, cacheable: !0 }, n);
  };
}, Mi = function(e) {
  return function(t, n) {
    return Promise.all(t.map(function(r) {
      var o = r.params, i = o.facetName, s = o.facetQuery, a = bf(o, ah);
      return Oa(e)(r.indexName, { methods: { searchForFacetValues: ka } }).searchForFacetValues(i, s, W(W({}, n), a));
    }));
  };
}, mh = function(e) {
  return function(t, n, r) {
    return e.transporter.read({ method: qn, path: Un("1/answers/%s/prediction", e.indexName), data: { query: t, queryLanguages: n }, cacheable: !0 }, r);
  };
}, vh = function(e) {
  return function(t, n) {
    return e.transporter.read({ method: qn, path: Un("1/indexes/%s/query", e.indexName), data: { query: t }, cacheable: !0 }, n);
  };
}, ka = function(e) {
  return function(t, n, r) {
    return e.transporter.read({ method: qn, path: Un("1/indexes/%s/facets/%s/query", e.indexName, t), data: { facetQuery: n }, cacheable: !0 }, r);
  };
}, _h = 1, gh = 2, yh = 3;
function Sa(e, t, n) {
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
  } }, logger: (r = yh, { debug: function(i, s) {
    return _h >= r && console.debug(i, s), Promise.resolve();
  }, info: function(i, s) {
    return gh >= r && console.info(i, s), Promise.resolve();
  }, error: function(i, s) {
    return console.error(i, s), Promise.resolve();
  } }), responsesCache: sr(), requestsCache: sr({ serializable: !1 }), hostsCache: Nt({ caches: [lh({ key: "".concat("4.8.5", "-").concat(e) }), sr()] }), userAgent: fh("4.8.5").add({ segment: "Browser", version: "lite" }), authMode: _n.WithinQueryParameters };
  return hh(W(W(W({}, o), n), {}, { methods: { search: Li, searchForFacetValues: Mi, multipleQueries: Li, multipleSearchForFacetValues: Mi, initIndex: function(i) {
    return function(s) {
      return Oa(i)(s, { methods: { search: vh, searchForFacetValues: ka, findAnswers: mh } });
    };
  } } }));
}
Sa.version = "4.8.5";
var bh = ["footer", "searchBox"];
function zt() {
  return zt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zt.apply(this, arguments);
}
function Ri(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ar(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ri(Object(n), !0).forEach(function(r) {
      wh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ri(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function wh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function xh(e, t) {
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
        return Hi(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return Hi(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Hi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Oh(e, t) {
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
function kh(e) {
  var t = e.appId, n = e.apiKey, r = e.indexName, o = e.placeholder, i = o === void 0 ? "Search docs" : o, s = e.searchParameters, a = e.onClose, l = a === void 0 ? Wp : a, u = e.transformItems, c = u === void 0 ? ji : u, p = e.hitComponent, f = p === void 0 ? Pp : p, d = e.resultsFooterComponent, v = d === void 0 ? function() {
    return null;
  } : d, _ = e.navigator, b = e.initialScrollY, y = b === void 0 ? 0 : b, S = e.transformSearchClient, k = S === void 0 ? ji : S, x = e.disableUserPersonalization, P = x !== void 0 && x, L = e.initialQuery, E = L === void 0 ? "" : L, A = e.translations, C = A === void 0 ? {} : A, X = e.getMissingResultsUrl, ne = C.footer, ie = C.searchBox, J = Oh(C, bh), de = xh(m.useState({ query: "", collections: [], completion: null, context: {}, isOpen: !1, activeItemId: null, status: "idle" }), 2), ye = de[0], rt = de[1], qe = m.useRef(null), Ce = m.useRef(null), We = m.useRef(null), ot = m.useRef(null), I = m.useRef(null), O = m.useRef(10), j = m.useRef(typeof window < "u" ? window.getSelection().toString().slice(0, 64) : "").current, H = m.useRef(E || j).current, re = function(D, q, oe) {
    return m.useMemo(function() {
      var ae = Sa(D, q);
      return ae.addAlgoliaAgent("docsearch", "3.2.2"), /docsearch.js \(.*\)/.test(ae.transporter.userAgent.value) === !1 && ae.addAlgoliaAgent("docsearch-react", "3.2.2"), oe(ae);
    }, [D, q, oe]);
  }(t, n, k), Y = m.useRef(Ti({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r), limit: 10 })).current, Z = m.useRef(Ti({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r), limit: Y.getAll().length === 0 ? 7 : 4 })).current, Oe = m.useCallback(function(D) {
    if (!P) {
      var q = D.type === "content" ? D.__docsearch_parent : D;
      q && Y.getAll().findIndex(function(oe) {
        return oe.objectID === q.objectID;
      }) === -1 && Z.add(q);
    }
  }, [Y, Z, P]), ve = m.useMemo(function() {
    return kp({ id: "docsearch", defaultActiveItemId: 0, placeholder: i, openOnFocus: !0, initialState: { query: H, context: { searchSuggestions: [] } }, navigator: _, onStateChange: function(D) {
      rt(D.state);
    }, getSources: function(D) {
      var q = D.query, oe = D.state, ae = D.setContext, be = D.setStatus;
      return q ? re.search([{ query: q, indexName: r, params: ar({ attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(O.current), "hierarchy.lvl2:".concat(O.current), "hierarchy.lvl3:".concat(O.current), "hierarchy.lvl4:".concat(O.current), "hierarchy.lvl5:".concat(O.current), "hierarchy.lvl6:".concat(O.current), "content:".concat(O.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20 }, s) }]).catch(function(ee) {
        throw ee.name === "RetryError" && be("error"), ee;
      }).then(function(ee) {
        var le = ee.results[0], fe = le.hits, Ie = le.nbHits, it = Ci(fe, function(st) {
          return ma(st);
        });
        return oe.context.searchSuggestions.length < Object.keys(it).length && ae({ searchSuggestions: Object.keys(it) }), ae({ nbHits: Ie }), Object.values(it).map(function(st, Pt) {
          return { sourceId: "hits".concat(Pt), onSelect: function(ke) {
            var Je = ke.item, Se = ke.event;
            Oe(Je), Se.shiftKey || Se.ctrlKey || Se.metaKey || l();
          }, getItemUrl: function(ke) {
            return ke.item.url;
          }, getItems: function() {
            return Object.values(Ci(st, function(ke) {
              return ke.hierarchy.lvl1;
            })).map(c).map(function(ke) {
              return ke.map(function(Je) {
                return ar(ar({}, Je), {}, { __docsearch_parent: Je.type !== "lvl1" && ke.find(function(Se) {
                  return Se.type === "lvl1" && Se.hierarchy.lvl1 === Je.hierarchy.lvl1;
                }) });
              });
            }).flat();
          } };
        });
      }) : P ? [] : [{ sourceId: "recentSearches", onSelect: function(ee) {
        var le = ee.item, fe = ee.event;
        Oe(le), fe.shiftKey || fe.ctrlKey || fe.metaKey || l();
      }, getItemUrl: function(ee) {
        return ee.item.url;
      }, getItems: function() {
        return Z.getAll();
      } }, { sourceId: "favoriteSearches", onSelect: function(ee) {
        var le = ee.item, fe = ee.event;
        Oe(le), fe.shiftKey || fe.ctrlKey || fe.metaKey || l();
      }, getItemUrl: function(ee) {
        return ee.item.url;
      }, getItems: function() {
        return Y.getAll();
      } }];
    } });
  }, [r, s, re, l, Z, Y, Oe, H, i, _, c, P]), _e = ve.getEnvironmentProps, ce = ve.getRootProps, Ke = ve.refresh;
  return function(D) {
    var q = D.getEnvironmentProps, oe = D.panelElement, ae = D.formElement, be = D.inputElement;
    m.useEffect(function() {
      if (oe && ae && be) {
        var ee = q({ panelElement: oe, formElement: ae, inputElement: be }), le = ee.onTouchStart, fe = ee.onTouchMove;
        return window.addEventListener("touchstart", le), window.addEventListener("touchmove", fe), function() {
          window.removeEventListener("touchstart", le), window.removeEventListener("touchmove", fe);
        };
      }
    }, [q, oe, ae, be]);
  }({ getEnvironmentProps: _e, panelElement: ot.current, formElement: We.current, inputElement: I.current }), function(D) {
    var q = D.container;
    m.useEffect(function() {
      if (q) {
        var oe = q.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), ae = oe[0], be = oe[oe.length - 1];
        return q.addEventListener("keydown", ee), function() {
          q.removeEventListener("keydown", ee);
        };
      }
      function ee(le) {
        le.key === "Tab" && (le.shiftKey ? document.activeElement === ae && (le.preventDefault(), be.focus()) : document.activeElement === be && (le.preventDefault(), ae.focus()));
      }
    }, [q]);
  }({ container: qe.current }), m.useEffect(function() {
    return document.body.classList.add("DocSearch--active"), function() {
      var D, q;
      document.body.classList.remove("DocSearch--active"), (D = (q = window).scrollTo) === null || D === void 0 || D.call(q, 0, y);
    };
  }, []), m.useEffect(function() {
    window.matchMedia("(max-width: 768px)").matches && (O.current = 5);
  }, []), m.useEffect(function() {
    ot.current && (ot.current.scrollTop = 0);
  }, [ye.query]), m.useEffect(function() {
    H.length > 0 && (Ke(), I.current && I.current.focus());
  }, [H, Ke]), m.useEffect(function() {
    function D() {
      if (Ce.current) {
        var q = 0.01 * window.innerHeight;
        Ce.current.style.setProperty("--docsearch-vh", "".concat(q, "px"));
      }
    }
    return D(), window.addEventListener("resize", D), function() {
      window.removeEventListener("resize", D);
    };
  }, []), m.createElement("div", zt({ ref: qe }, ce({ "aria-expanded": !0 }), { className: ["DocSearch", "DocSearch-Container", ye.status === "stalled" && "DocSearch-Container--Stalled", ye.status === "error" && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(D) {
    D.target === D.currentTarget && l();
  } }), m.createElement("div", { className: "DocSearch-Modal", ref: Ce }, m.createElement("header", { className: "DocSearch-SearchBar", ref: We }, m.createElement(rh, zt({}, ve, { state: ye, autoFocus: H.length === 0, inputRef: I, isFromSelection: Boolean(H) && H === j, translations: ie, onClose: l }))), m.createElement("div", { className: "DocSearch-Dropdown", ref: ot }, m.createElement(eh, zt({}, ve, { indexName: r, state: ye, hitComponent: f, resultsFooterComponent: v, disableUserPersonalization: P, recentSearches: Z, favoriteSearches: Y, inputRef: I, translations: J, getMissingResultsUrl: X, onItemClick: function(D) {
    Oe(D), l();
  } }))), m.createElement("footer", { className: "DocSearch-Footer" }, m.createElement($p, { translations: ne }))));
}
function Ar() {
  return Ar = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ar.apply(this, arguments);
}
function Bi(e, t) {
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
        return zi(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return zi(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function zi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Sh(e) {
  var t, n, r = m.useRef(null), o = Bi(m.useState(!1), 2), i = o[0], s = o[1], a = Bi(m.useState((e == null ? void 0 : e.initialQuery) || void 0), 2), l = a[0], u = a[1], c = m.useCallback(function() {
    s(!0);
  }, [s]), p = m.useCallback(function() {
    s(!1);
  }, [s]);
  return function(f) {
    var d = f.isOpen, v = f.onOpen, _ = f.onClose, b = f.onInput, y = f.searchButtonRef;
    m.useEffect(function() {
      function S(k) {
        (k.keyCode === 27 && d || k.key === "k" && (k.metaKey || k.ctrlKey) || !function(x) {
          var P = x.target, L = P.tagName;
          return P.isContentEditable || L === "INPUT" || L === "SELECT" || L === "TEXTAREA";
        }(k) && k.key === "/" && !d) && (k.preventDefault(), d ? _() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || v()), y && y.current === document.activeElement && b && /[a-zA-Z0-9]/.test(String.fromCharCode(k.keyCode)) && b(k);
      }
      return window.addEventListener("keydown", S), function() {
        window.removeEventListener("keydown", S);
      };
    }, [d, v, _, b, y]);
  }({ isOpen: i, onOpen: c, onClose: p, onInput: m.useCallback(function(f) {
    s(!0), u(f.key);
  }, [s, u]), searchButtonRef: r }), m.createElement(m.Fragment, null, m.createElement(zf, { ref: r, translations: e == null || (t = e.translations) === null || t === void 0 ? void 0 : t.button, onClick: c }), i && sa(m.createElement(kh, Ar({}, e, { initialScrollY: window.scrollY, initialQuery: l, translations: e == null || (n = e.translations) === null || n === void 0 ? void 0 : n.modal, onClose: p })), document.body));
}
function $h(e) {
  la(m.createElement(Sh, gr({}, e, { transformSearchClient: function(t) {
    return t.addAlgoliaAgent("docsearch.js", "3.2.2"), e.transformSearchClient ? e.transformSearchClient(t) : t;
  } })), function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
    return typeof t == "string" ? n.document.querySelector(t) : t;
  }(e.container, e.environment));
}
const Ph = {
  class: "algolia-search-box",
  id: "docsearch"
}, Eh = /* @__PURE__ */ N({
  __name: "AlgoliaSearchBox",
  props: {
    options: null
  },
  setup(e) {
    const t = e, n = Re("useRouter"), r = Re("useRoute"), o = Yi(), i = n(), s = r();
    He(
      () => t.options,
      (f) => {
        l(f);
      }
    ), Fe(() => {
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
      $h(
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
    return (f, d) => (g(), w("div", Ph));
  }
});
const Ch = /* @__PURE__ */ h("svg", {
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
], -1), jh = /* @__PURE__ */ h("span", { class: "ml-2" }, "Search", -1), Th = { class: "sr-only" }, Ih = {
  class: "absolute right-3 hidden text-sm font-semibold lg:block",
  "aria-hidden": "true"
}, Vi = /* @__PURE__ */ N({
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
      return g(), w(R, null, [
        V(l, null, {
          default: xe(() => [
            V(Eh, {
              options: i,
              class: "sr-only"
            })
          ]),
          _: 1
        }),
        h("div", {
          class: "relative flex cursor-pointer items-center rounded-md bg-white/20 px-3 py-1.5 pr-4 text-white transition-shadow hover:shadow-md dark:bg-white/10 dark:ring-1 dark:ring-slate-300/10 dark:hover:ring-cyan-400/50 lg:pr-20",
          onClick: o
        }, [
          Ch,
          jh,
          V(l, null, {
            default: xe(() => [
              h("span", Th, "Press " + F($(r)) + "+K to open quick search", 1),
              h("span", Ih, F($(n)) + "K", 1)
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
}), Ah = /* @__PURE__ */ h("a", {
  href: "https://blog.nativescript.org/nativescript-preview-announcement",
  class: "flex flex-col content-center items-center justify-center bg-white px-4 py-2 text-white dark:border-b dark:border-white/10 dark:bg-transparent md:flex-row"
}, [
  /* @__PURE__ */ h("span", { class: "text-sm font-medium text-gray-800 dark:text-white" }, [
    /* @__PURE__ */ h("b", null, "Preview 2.0"),
    /* @__PURE__ */ De(" is now in Public Beta!")
  ]),
  /* @__PURE__ */ h("div", { class: "ml-2 text-sm font-bold text-gray-900 underline dark:text-white" }, [
    /* @__PURE__ */ De(" Read the Announcement "),
    /* @__PURE__ */ h("span", { "aria-hidden": "true" }, "\u2192")
  ])
], -1), Nh = { class: "nav-bar top-0 z-10 lg:sticky" }, Dh = { class: "bg-ns-blue py-4 backdrop-blur dark:bg-slate-900 dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/80" }, Lh = {
  class: "relative mx-auto flex items-center justify-between px-4 sm:px-6 2xl:container",
  "aria-label": "Global"
}, Mh = { class: "flex flex-1 items-center" }, Rh = { class: "flex w-full items-center justify-between lg:w-auto" }, Hh = ["href"], Bh = /* @__PURE__ */ h("span", { class: "sr-only" }, "NativeScript", -1), zh = { class: "flex items-center space-x-4 lg:hidden" }, Vh = { class: "-mr-1 flex items-center" }, Fh = ["aria-expanded"], Uh = /* @__PURE__ */ h("span", { class: "sr-only" }, "Open main menu", -1), qh = /* @__PURE__ */ h("svg", {
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
], -1), Wh = [
  Uh,
  qh
], Kh = { class: "ml-10 hidden space-x-8 lg:flex" }, Jh = { class: "flex flex-1 justify-center px-2 lg:justify-end" }, Gh = { class: "w-full max-w-xl xl:max-w-xs" }, Qh = { class: "hidden lg:flex lg:items-center lg:space-x-6" }, Yh = ["href", "target"], Zh = { class: "relative" }, Xh = ["aria-expanded"], e0 = /* @__PURE__ */ h("span", { class: "sr-only" }, "Open additional menu", -1), t0 = /* @__PURE__ */ h("svg", {
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
], -1), n0 = [
  e0,
  t0
], r0 = {
  key: 0,
  class: "absolute left-24 z-10 mt-3 w-screen max-w-xs -translate-x-full transform px-2 sm:px-0"
}, o0 = { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:shadow-none dark:ring-slate-300/10" }, i0 = { class: "relative grid gap-6 bg-white px-5 py-6 dark:bg-slate-800 sm:gap-8 sm:p-8" }, s0 = ["href", "target"], a0 = { class: "text-base font-medium text-gray-900 dark:text-slate-200" }, l0 = { class: "mt-1 text-sm text-gray-500 dark:text-slate-400" }, c0 = /* @__PURE__ */ h("a", {
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
], -1), u0 = {
  key: 0,
  class: "absolute inset-x-0 top-0 z-20 origin-top transform p-2 transition lg:hidden"
}, d0 = { class: "overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5" }, f0 = { class: "flex items-center justify-between px-5 pt-4" }, p0 = { class: "-mr-3" }, h0 = /* @__PURE__ */ h("span", { class: "sr-only" }, "Close menu", -1), m0 = /* @__PURE__ */ h("svg", {
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
], -1), v0 = [
  h0,
  m0
], _0 = { class: "pt-5 pb-6" }, g0 = { class: "space-y-1 px-2" }, y0 = ["href", "target"], b0 = /* @__PURE__ */ h("hr", { class: "-mx-2" }, null, -1), w0 = ["href", "target"], x0 = /* @__PURE__ */ N({
  __name: "Header",
  props: {
    nav: {
      type: Array,
      default() {
        return Io.nav;
      }
    },
    flyoutNav: {
      type: Array,
      default() {
        return Io.flyoutNav;
      }
    },
    mainURL: {
      default: "/",
      type: String
    }
  },
  setup(e) {
    const t = B(!1), n = B(!1);
    return (r, o) => (g(), w(R, null, [
      Ah,
      h("header", Nh, [
        h("div", Dh, [
          h("nav", Lh, [
            h("div", Mh, [
              h("div", Rh, [
                h("a", { href: e.mainURL }, [
                  Bh,
                  V(Ao, {
                    class: "h-8 w-auto sm:h-10",
                    "aria-hidden": "true"
                  })
                ], 8, Hh),
                h("div", zh, [
                  V(Vi),
                  Pe(r.$slots, "right"),
                  h("div", Vh, [
                    h("button", {
                      onClick: o[0] || (o[0] = (i) => t.value = !0),
                      type: "button",
                      class: "-mx-2 inline-flex items-center justify-center rounded-md p-2 text-white focus:bg-white/20 dark:focus:bg-white/10",
                      "aria-expanded": t.value
                    }, Wh, 8, Fh)
                  ])
                ])
              ]),
              h("div", Kh, [
                h("div", Jh, [
                  h("div", Gh, [
                    V(Vi)
                  ])
                ])
              ])
            ]),
            h("div", Qh, [
              (g(!0), w(R, null, G(e.nav, (i, s) => (g(), w("a", {
                key: s,
                href: i.link,
                target: i.target,
                class: "border-b-4 border-transparent text-base font-medium text-white hover:border-blue-100"
              }, F(i.text), 9, Yh))), 128)),
              h("div", Zh, [
                h("button", {
                  onClick: o[1] || (o[1] = Ye((i) => n.value = !n.value, ["prevent"])),
                  class: Q(["relative z-20 inline-flex items-center justify-center rounded-md p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent", {
                    "bg-white text-gray-900": n.value,
                    "text-white hover:text-gray-900 dark:hover:text-slate-400": !n.value
                  }]),
                  role: "button",
                  "aria-expanded": n.value
                }, n0, 10, Xh),
                V(Gn, {
                  "enter-from-class": "opacity-0",
                  "enter-to-class": "opacity-100",
                  "leave-from-class": "opacity-100",
                  "leave-to-class": "opacity-0"
                }, {
                  default: xe(() => [
                    n.value ? (g(), w("button", {
                      key: 0,
                      tabindex: "-1",
                      onClick: o[2] || (o[2] = (i) => n.value = !1),
                      class: "fixed inset-0 z-10 h-screen w-screen cursor-default bg-slate-300/40 transition duration-200 dark:bg-slate-900/70"
                    })) : K("", !0)
                  ]),
                  _: 1
                }),
                V(Gn, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "translate-y-1 opacity-0",
                  "enter-to-class": "translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "translate-y-0 opacity-100",
                  "leave-to-class": "translate-y-1 opacity-0"
                }, {
                  default: xe(() => [
                    n.value ? (g(), w("div", r0, [
                      h("div", o0, [
                        h("div", i0, [
                          (g(!0), w(R, null, G(e.flyoutNav, (i, s) => (g(), w("a", {
                            key: s,
                            href: i.link,
                            target: i.target,
                            class: "-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-slate-700/50"
                          }, [
                            h("p", a0, F(i.text), 1),
                            h("p", l0, F(i.description), 1)
                          ], 8, s0))), 128))
                        ])
                      ])
                    ])) : K("", !0)
                  ]),
                  _: 1
                })
              ]),
              Pe(r.$slots, "right"),
              c0
            ])
          ])
        ]),
        V(Gn, {
          "enter-active-class": "duration-150 ease-out",
          "enter-from-class": "scale-95 opacity-0",
          "enter-to-class": "scale-100 opacity-100",
          "leave-active-class": "duration-100 ease-in",
          "leave-from-class": "scale-100 opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: xe(() => [
            t.value ? (g(), w("div", u0, [
              h("div", d0, [
                h("div", f0, [
                  h("div", null, [
                    V(Ao, {
                      class: "h-8 w-auto",
                      variant: "blue",
                      "aria-hidden": "true"
                    })
                  ]),
                  h("div", p0, [
                    h("button", {
                      onClick: o[3] || (o[3] = (i) => t.value = !1),
                      type: "button",
                      class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    }, v0)
                  ])
                ]),
                h("div", _0, [
                  h("div", g0, [
                    (g(!0), w(R, null, G(e.nav, (i, s) => (g(), w("a", {
                      key: s,
                      onClick: o[4] || (o[4] = (a) => t.value = !1),
                      href: i.link,
                      target: i.target,
                      class: "block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    }, F(i.text), 9, y0))), 128)),
                    b0,
                    (g(!0), w(R, null, G(e.flyoutNav, (i, s) => (g(), w("a", {
                      key: s,
                      onClick: o[5] || (o[5] = (a) => t.value = !1),
                      href: i.link,
                      target: i.target,
                      class: "block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    }, F(i.text), 9, w0))), 128))
                  ])
                ])
              ])
            ])) : K("", !0)
          ]),
          _: 1
        })
      ])
    ], 64));
  }
});
const O0 = {}, k0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "h-5 w-5"
}, S0 = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
  "clip-rule": "evenodd"
}, null, -1), $0 = [
  S0
];
function P0(e, t) {
  return g(), w("svg", k0, $0);
}
const E0 = /* @__PURE__ */ St(O0, [["render", P0]]), C0 = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, j0 = {
  role: "list",
  class: "flex items-center space-x-3"
}, T0 = {
  href: "/",
  class: "text-slate-400 hover:text-slate-500 dark:hover:text-cyan-300"
}, I0 = /* @__PURE__ */ h("span", { class: "sr-only" }, "Home", -1), A0 = { class: "flex items-center" }, N0 = /* @__PURE__ */ N({
  __name: "Breadcrumbs",
  setup(e) {
    const t = en(), { page: n } = Ee(), r = M(() => zr(t.value)), o = M(() => {
      const i = [];
      let s = r.value.find((a) => kt(n.value.relativePath, a.link));
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
    return (i, s) => (g(), w("nav", C0, [
      h("ol", j0, [
        h("li", null, [
          h("div", null, [
            h("a", T0, [
              V(E0, {
                class: "flex-shrink-0",
                "aria-hidden": "true"
              }),
              I0
            ])
          ])
        ]),
        (g(!0), w(R, null, G($(o), (a) => (g(), w("li", {
          key: a.name
        }, [
          h("div", A0, [
            V(pn, {
              class: "flex-shrink-0 text-slate-400 dark:text-slate-500",
              "aria-hidden": "true"
            }),
            (g(), se(Gt(a.href ? "a" : "div"), {
              href: a.href,
              class: Q([
                "ml-3 text-sm font-medium text-slate-500 dark:text-slate-400",
                a.href ? "hover:text-slate-700 dark:hover:text-cyan-300" : ""
              ]),
              "aria-current": a.current ? "page" : void 0
            }, {
              default: xe(() => [
                De(F(a.name), 1)
              ]),
              _: 2
            }, 1032, ["href", "class", "aria-current"]))
          ])
        ]))), 128))
      ])
    ]));
  }
}), D0 = /* @__PURE__ */ h("h4", { class: "text-sm font-bold text-gray-900 dark:text-white" }, " Contributors ", -1), L0 = { class: "mt-2 flex -space-x-1 overflow-hidden" }, M0 = ["href"], R0 = ["src", "alt"], H0 = /* @__PURE__ */ N({
  __name: "ContributorsList",
  setup(e) {
    const { page: t } = Ee();
    M(() => {
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
      const i = Qa("tooltip");
      return g(), w("div", null, [
        D0,
        h("div", L0, [
          (g(), w(R, null, G(n, (s) => wt(h("a", {
            href: s.profileURL,
            target: "_blank"
          }, [
            h("img", {
              class: "inline-block h-6 w-6 cursor-pointer rounded-full ring-2 ring-white dark:ring-slate-800",
              src: s.avatarURL,
              alt: s.username
            }, null, 8, R0)
          ], 8, M0), [
            [i, s.username]
          ])), 64))
        ])
      ]);
    };
  }
}), B0 = { class: "text-xs text-slate-500" }, z0 = ["datatime"], V0 = /* @__PURE__ */ N({
  __name: "LastUpdatedLabel",
  setup(e) {
    const { theme: t, page: n } = Ee(), r = M(() => {
      if (!!n.value.lastUpdated)
        return new Date(n.value.lastUpdated);
    }), o = M(() => {
      var s;
      return (s = r.value) == null ? void 0 : s.toISOString();
    }), i = B();
    return Fe(() => {
      Ln(() => {
        var s;
        i.value = (s = r.value) == null ? void 0 : s.toLocaleString(window.navigator.language);
      });
    }), (s, a) => {
      var l;
      return wt((g(), w("p", B0, [
        De(F((l = $(t).lastUpdatedText) != null ? l : "Last updated") + ": ", 1),
        h("time", { datatime: $(o) }, F(i.value), 9, z0)
      ], 512)), [
        [bn, i.value]
      ]);
    };
  }
});
var $a = { exports: {} };
/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Od, function() {
    function n(I) {
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? n = function(O) {
        return typeof O;
      } : n = function(O) {
        return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
      }, n(I);
    }
    function r() {
      return r = Object.assign || function(I) {
        for (var O = 1; O < arguments.length; O++) {
          var j = arguments[O];
          for (var H in j)
            Object.prototype.hasOwnProperty.call(j, H) && (I[H] = j[H]);
        }
        return I;
      }, r.apply(this, arguments);
    }
    var o = 4, i = 1e-3, s = 1e-7, a = 10, l = 11, u = 1 / (l - 1), c = typeof Float32Array == "function";
    function p(I, O) {
      return 1 - 3 * O + 3 * I;
    }
    function f(I, O) {
      return 3 * O - 6 * I;
    }
    function d(I) {
      return 3 * I;
    }
    function v(I, O, j) {
      return ((p(O, j) * I + f(O, j)) * I + d(O)) * I;
    }
    function _(I, O, j) {
      return 3 * p(O, j) * I * I + 2 * f(O, j) * I + d(O);
    }
    function b(I, O, j, H, re) {
      var Y, Z, Oe = 0;
      do
        Z = O + (j - O) / 2, Y = v(Z, H, re) - I, Y > 0 ? j = Z : O = Z;
      while (Math.abs(Y) > s && ++Oe < a);
      return Z;
    }
    function y(I, O, j, H) {
      for (var re = 0; re < o; ++re) {
        var Y = _(O, j, H);
        if (Y === 0)
          return O;
        var Z = v(O, j, H) - I;
        O -= Z / Y;
      }
      return O;
    }
    function S(I) {
      return I;
    }
    var k = function(O, j, H, re) {
      if (!(0 <= O && O <= 1 && 0 <= H && H <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      if (O === j && H === re)
        return S;
      for (var Y = c ? new Float32Array(l) : new Array(l), Z = 0; Z < l; ++Z)
        Y[Z] = v(Z * u, O, H);
      function Oe(ve) {
        for (var _e = 0, ce = 1, Ke = l - 1; ce !== Ke && Y[ce] <= ve; ++ce)
          _e += u;
        --ce;
        var D = (ve - Y[ce]) / (Y[ce + 1] - Y[ce]), q = _e + D * u, oe = _(q, O, H);
        return oe >= i ? y(ve, q, O, H) : oe === 0 ? q : b(ve, _e, _e + u, O, H);
      }
      return function(_e) {
        return _e === 0 ? 0 : _e === 1 ? 1 : v(Oe(_e), j, re);
      };
    }, x = {
      ease: [0.25, 0.1, 0.25, 1],
      linear: [0, 0, 1, 1],
      "ease-in": [0.42, 0, 1, 1],
      "ease-out": [0, 0, 0.58, 1],
      "ease-in-out": [0.42, 0, 0.58, 1]
    }, P = !1;
    try {
      var L = Object.defineProperty({}, "passive", {
        get: function() {
          P = !0;
        }
      });
      window.addEventListener("test", null, L);
    } catch {
    }
    var E = {
      $: function(O) {
        return typeof O != "string" ? O : document.querySelector(O);
      },
      on: function(O, j, H) {
        var re = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
          passive: !1
        };
        j instanceof Array || (j = [j]);
        for (var Y = 0; Y < j.length; Y++)
          O.addEventListener(j[Y], H, P ? re : !1);
      },
      off: function(O, j, H) {
        j instanceof Array || (j = [j]);
        for (var re = 0; re < j.length; re++)
          O.removeEventListener(j[re], H);
      },
      cumulativeOffset: function(O) {
        var j = 0, H = 0;
        do
          j += O.offsetTop || 0, H += O.offsetLeft || 0, O = O.offsetParent;
        while (O);
        return {
          top: j,
          left: H
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
    function X(I) {
      C = r({}, C, I);
    }
    var ne = function() {
      var O, j, H, re, Y, Z, Oe, ve, _e, ce, Ke, D, q, oe, ae, be, ee, le, fe, Ie, it, st, Pt, ke = function(ue) {
        !ve || (Pt = ue, Ie = !0);
      }, Je, Se, Kn, Et;
      function Ta(pe) {
        var ue = pe.scrollTop;
        return pe.tagName.toLowerCase() === "body" && (ue = ue || document.documentElement.scrollTop), ue;
      }
      function Ia(pe) {
        var ue = pe.scrollLeft;
        return pe.tagName.toLowerCase() === "body" && (ue = ue || document.documentElement.scrollLeft), ue;
      }
      function qr() {
        it = E.cumulativeOffset(j), st = E.cumulativeOffset(O), D && (ae = st.left - it.left + Z, le = ae - oe), q && (ee = st.top - it.top + Z, fe = ee - be);
      }
      function Wr(pe) {
        if (Ie)
          return Kr();
        Se || (Se = pe), Y || qr(), Kn = pe - Se, Et = Math.min(Kn / H, 1), Et = Je(Et), Jr(j, be + fe * Et, oe + le * Et), Kn < H ? window.requestAnimationFrame(Wr) : Kr();
      }
      function Kr() {
        Ie || Jr(j, ee, ae), Se = !1, E.off(j, A, ke), Ie && Ke && Ke(Pt, O), !Ie && ce && ce(O);
      }
      function Jr(pe, ue, te) {
        q && (pe.scrollTop = ue), D && (pe.scrollLeft = te), pe.tagName.toLowerCase() === "body" && (q && (document.documentElement.scrollTop = ue), D && (document.documentElement.scrollLeft = te));
      }
      function Aa(pe, ue) {
        var te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (n(ue) === "object" ? te = ue : typeof ue == "number" && (te.duration = ue), O = E.$(pe), !O)
          return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + pe);
        if (j = E.$(te.container || C.container), H = te.hasOwnProperty("duration") ? te.duration : C.duration, Y = te.hasOwnProperty("lazy") ? te.lazy : C.lazy, re = te.easing || C.easing, Z = te.hasOwnProperty("offset") ? te.offset : C.offset, Oe = te.hasOwnProperty("force") ? te.force !== !1 : C.force, ve = te.hasOwnProperty("cancelable") ? te.cancelable !== !1 : C.cancelable, _e = te.onStart || C.onStart, ce = te.onDone || C.onDone, Ke = te.onCancel || C.onCancel, D = te.x === void 0 ? C.x : te.x, q = te.y === void 0 ? C.y : te.y, typeof Z == "function" && (Z = Z(O, j)), oe = Ia(j), be = Ta(j), qr(), Ie = !1, !Oe) {
          var Na = j.tagName.toLowerCase() === "body" ? document.documentElement.clientHeight || window.innerHeight : j.offsetHeight, Gr = be, Da = Gr + Na, Qr = ee - Z, La = Qr + O.offsetHeight;
          if (Qr >= Gr && La <= Da) {
            ce && ce(O);
            return;
          }
        }
        if (_e && _e(O), !fe && !le) {
          ce && ce(O);
          return;
        }
        return typeof re == "string" && (re = x[re] || x.ease), Je = k.apply(k, re), E.on(j, A, ke, {
          passive: !0
        }), window.requestAnimationFrame(Wr), function() {
          Pt = null, Ie = !0;
        };
      }
      return Aa;
    }, ie = ne(), J = [];
    function de(I) {
      for (var O = 0; O < J.length; ++O)
        if (J[O].el === I)
          return J.splice(O, 1), !0;
      return !1;
    }
    function ye(I) {
      for (var O = 0; O < J.length; ++O)
        if (J[O].el === I)
          return J[O];
    }
    function rt(I) {
      var O = ye(I);
      return O || (J.push(O = {
        el: I,
        binding: {}
      }), O);
    }
    function qe(I) {
      var O = rt(this).binding;
      if (!!O.value) {
        if (I.preventDefault(), typeof O.value == "string")
          return ie(O.value);
        ie(O.value.el || O.value.element, O.value);
      }
    }
    var Ce = {
      bind: function(O, j) {
        rt(O).binding = j, E.on(O, "click", qe);
      },
      unbind: function(O) {
        de(O), E.off(O, "click", qe);
      },
      update: function(O, j) {
        rt(O).binding = j;
      }
    }, We = {
      bind: Ce.bind,
      unbind: Ce.unbind,
      update: Ce.update,
      beforeMount: Ce.bind,
      unmounted: Ce.unbind,
      updated: Ce.update,
      scrollTo: ie,
      bindings: J
    }, ot = function(O, j) {
      j && X(j), O.directive("scroll-to", We);
      var H = O.config.globalProperties || O.prototype;
      H.$scrollTo = We.scrollTo;
    };
    return typeof window < "u" && window.Vue && (window.VueScrollTo = We, window.VueScrollTo.setDefaults = X, window.VueScrollTo.scroller = ne, window.Vue.use && window.Vue.use(ot)), We.install = ot, We;
  });
})($a);
const Pa = $a.exports, F0 = /* @__PURE__ */ h("div", { class: "text-sm font-semibold leading-6 text-gray-900 dark:text-white" }, " On this page ", -1), U0 = { class: "mt-4 text-sm leading-6 text-slate-700 dark:text-slate-400" }, q0 = ["onClick"], W0 = ["href"], K0 = { key: 0 }, J0 = { class: "" }, G0 = ["href"], Q0 = /* @__PURE__ */ h("svg", {
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
], -1), Y0 = /* @__PURE__ */ N({
  __name: "OnThisPage",
  setup(e) {
    const { page: t } = Ee(), n = M(() => t.value.headers), r = M(() => n.value.flatMap((p) => [
      p.link,
      ...p.children.map((f) => f.link)
    ]).map((p) => {
      if (p.charAt(0) === "#")
        return p.substring(1);
    }).filter(Boolean));
    function o(p) {
      if (!lr)
        return -1;
      let f = document.getElementById(p);
      if (!f)
        return -1;
      let d = window.getComputedStyle(f), v = parseFloat(d.scrollMarginTop), _ = parseFloat(d.marginTop);
      return window.scrollY + f.getBoundingClientRect().top - v - _ - 5;
    }
    const i = B(r.value[0]), { y: s } = ku();
    Ln(() => {
      let p;
      for (const f of r.value)
        s.value >= o(f) && (p = f);
      i.value = p != null ? p : r.value[0];
    });
    function a(p) {
      return lr ? p.link.substring(1) === i.value ? !0 : p.children ? p.children.findIndex(a) > -1 : !1 : !1;
    }
    function l({ target: p }) {
      const f = "#" + p.href.split("#")[1], d = document.querySelector(
        decodeURIComponent(f)
      );
      d == null || d.focus();
    }
    const u = M(() => (p) => {
      const f = a(p) ? "text-blue-500 dark:text-cyan-400" : "hover:text-slate-900 dark:hover:text-slate-300", d = p.title.includes(" ") ? "break-words" : "break-all";
      return f + " " + d;
    }), c = () => {
      Pa.scrollTo("#top", 200, {
        force: !0
      });
    };
    return (p, f) => (g(), w(R, null, [
      F0,
      h("ol", U0, [
        h("li", null, [
          h("button", {
            href: "#top",
            onClick: Ye(c, ["prevent"]),
            class: "block py-1 font-medium opacity-50 transition-opacity hover:text-slate-900 hover:opacity-100 dark:hover:text-slate-300"
          }, " \u2191 Top ", 8, q0)
        ]),
        (g(!0), w(R, null, G($(n), (d) => (g(), w("li", null, [
          h("a", {
            href: d.link,
            onClick: l,
            class: Q([
              "block py-1 font-medium",
              a(d) ? "text-blue-500 dark:text-cyan-400" : "hover:text-slate-900 dark:hover:text-slate-300"
            ])
          }, F(d.title), 11, W0),
          d.children ? (g(), w("ol", K0, [
            (g(!0), w(R, null, G(d.children, (v) => (g(), w("li", J0, [
              h("a", {
                href: v.link,
                onClick: l,
                class: Q(["group flex items-start py-1", $(u)(v)])
              }, [
                Q0,
                De(" " + F(v.title), 1)
              ], 10, G0)
            ]))), 256))
          ])) : K("", !0)
        ]))), 256))
      ])
    ], 64));
  }
});
function Z0() {
  const { frontmatter: e, page: t } = Ee();
  return M(() => {
    var a, l;
    const n = en(), r = zr(n.value).filter(
      (u) => !!u.link
    ), o = r.findIndex((u) => kt(t.value.relativePath, u.link)), i = e.value.prev ? r.find((u) => u.link === e.value.prev) : r[o - 1], s = e.value.next ? r.find((u) => u.link === e.value.next) : r[o + 1];
    return {
      prev: e.value.prev !== !1 && i && { ...i, text: (a = e.value.prevText) != null ? a : i.text },
      next: e.value.next !== !1 && s && { ...s, text: (l = e.value.nextText) != null ? l : s.text }
    };
  });
}
const X0 = { class: "mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800" }, e1 = { key: 0 }, t1 = /* @__PURE__ */ h("dt", { class: "font-display text-sm font-medium text-slate-900 dark:text-white" }, " Previous ", -1), n1 = { class: "mt-1" }, r1 = ["href"], o1 = /* @__PURE__ */ h("span", { "aria-hidden": "true" }, "\u2190", -1), i1 = ["innerHTML"], s1 = {
  key: 1,
  class: "ml-auto text-right"
}, a1 = /* @__PURE__ */ h("dt", { class: "font-display text-sm font-medium text-slate-900 dark:text-white" }, " Next ", -1), l1 = { class: "mt-1" }, c1 = ["href"], u1 = ["innerHTML"], d1 = /* @__PURE__ */ h("span", { "aria-hidden": "true" }, "\u2192", -1), f1 = /* @__PURE__ */ N({
  __name: "PrevNextLinks",
  setup(e) {
    const t = Z0();
    return (n, r) => (g(), w("dl", X0, [
      $(t).prev ? (g(), w("div", e1, [
        t1,
        h("dd", n1, [
          h("a", {
            href: $(t).prev.link,
            class: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          }, [
            o1,
            h("span", {
              innerHTML: $(t).prev.text
            }, null, 8, i1)
          ], 8, r1)
        ])
      ])) : K("", !0),
      $(t).next ? (g(), w("div", s1, [
        a1,
        h("dd", l1, [
          h("a", {
            href: $(t).next.link,
            class: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          }, [
            h("span", {
              innerHTML: $(t).next.text
            }, null, 8, u1),
            d1
          ], 8, c1)
        ])
      ])) : K("", !0)
    ]));
  }
});
function p1() {
  const { theme: e, page: t } = Ee(), n = Jt();
  return M(() => {
    const { text: r = "Edit this page", pattern: o } = e.value.editLink || {}, { relativePath: i } = t.value, s = n.path;
    return { url: o.replace(/:path/g, s).replace(/:filePath/g, i), text: r };
  });
}
const h1 = {
  id: "content",
  class: "static max-h-full w-full min-w-0 flex-auto overflow-y-visible"
}, m1 = { class: "flex w-full" }, v1 = { class: "min-w-0 flex-auto" }, _1 = { class: "mt-4 flex h-[42px] items-center" }, g1 = { class: "px-6 pt-10 pb-[70vh] xl:px-10" }, y1 = {
  key: 0,
  id: "header"
}, b1 = {
  key: 0,
  class: "mb-2 text-base font-semibold leading-6 text-blue-500 dark:text-cyan-400"
}, w1 = { class: "text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl" }, x1 = { class: "mt-2 text-lg text-slate-700 dark:text-slate-400" }, O1 = { class: "hidden w-72 flex-none xl:block" }, k1 = { class: "h-sidebar sticky top-[72px] overflow-y-auto overflow-x-hidden" }, S1 = { class: "pt-16 pb-10 pr-3" }, $1 = ["href"], P1 = /* @__PURE__ */ N({
  __name: "default",
  setup(e) {
    const { page: t } = Ee(), n = p1(), r = en(), o = M(() => zr(r.value)), i = M(() => o.value.find(
      (l) => kt(t.value.relativePath, l.link)
    )), s = M(() => {
      var l, u;
      return t.value.title ? t.value.title : (u = (l = i.value) == null ? void 0 : l.text) != null ? u : !1;
    }), a = M(() => {
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
      return g(), w("div", h1, [
        h("div", m1, [
          h("div", v1, [
            h("div", _1, [
              V(N0, { class: "px-6 xl:px-10" })
            ]),
            h("div", g1, [
              $(s) ? (g(), w("header", y1, [
                $(a) ? (g(), w("p", b1, F($(a)), 1)) : K("", !0),
                h("h1", w1, F($(s)), 1),
                h("p", x1, F($(t).description), 1)
              ])) : K("", !0),
              V(c, { class: "prose-headings:font-display prose prose-slate mx-auto max-w-none prose-a:font-semibold prose-lead:text-slate-500 dark:prose-invert dark:prose-a:text-cyan-400 dark:prose-hr:border-slate-800 dark:prose-lead:text-slate-400" }),
              V(f1)
            ])
          ]),
          h("div", O1, [
            h("div", k1, [
              h("div", S1, [
                V(Y0),
                $(t).frontmatter.layout !== "api" ? (g(), w(R, { key: 0 }, [
                  V(H0, { class: "mt-4" }),
                  h("a", {
                    href: $(n).url,
                    target: "_blank",
                    class: "mt-4 block rounded-md border border-gray-400 bg-white px-4 py-2 text-center text-sm text-gray-700 hover:border-gray-600 hover:text-gray-900 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-white/40"
                  }, F($(n).text), 9, $1),
                  V(V0, { class: "mt-2" })
                ], 64)) : K("", !0)
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), E1 = {
  id: "content",
  class: "static max-h-full w-full min-w-0 flex-auto overflow-y-visible"
}, C1 = { class: "flex w-full" }, j1 = { class: "min-w-0 flex-auto" }, T1 = { class: "px-6 pt-10 xl:px-10" }, I1 = /* @__PURE__ */ h("header", { id: "header" }, [
  /* @__PURE__ */ h("h1", { class: "text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl" }, " 404 "),
  /* @__PURE__ */ h("h2", { class: "mt-2 text-xl font-semibold text-slate-900 dark:text-slate-400 sm:text-3xl" }, " Page Not Found ")
], -1), A1 = { class: "prose-headings:font-display prose prose-slate mx-auto mt-4 max-w-none prose-a:font-semibold prose-lead:text-slate-500 dark:prose-invert dark:prose-a:text-cyan-400 dark:prose-hr:border-slate-800 dark:prose-lead:text-slate-400" }, N1 = /* @__PURE__ */ h("p", null, " This page doesn't exist or has been removed. Perhaps not included in the docs yet? ", -1), D1 = /* @__PURE__ */ h("a", {
  href: "/",
  class: "rounded-md bg-blue-500 px-4 py-2 text-lg text-white no-underline"
}, "Go Home", -1), L1 = /* @__PURE__ */ h("p", null, "Here are some links that may be what you are looking for:", -1), M1 = ["href"], Dn = /* @__PURE__ */ N({
  __name: "NotFound",
  setup(e) {
    const t = Jt(), n = B([]);
    return console.log(t.path), Fe(() => {
      n.value.push(`https://v7.docs.nativescript.org${t.path}`), n.value.push(`https://v6.docs.nativescript.org${t.path}`), n.value.push("https://v7.docs.nativescript.org"), n.value.push("https://v6.docs.nativescript.org");
    }), (r, o) => (g(), w("div", E1, [
      h("div", C1, [
        h("div", j1, [
          h("div", T1, [
            I1,
            h("div", A1, [
              N1,
              D1,
              L1,
              h("ul", null, [
                (g(!0), w(R, null, G(n.value, (i) => (g(), w("li", { key: i }, [
                  h("a", {
                    href: i,
                    target: "_blank"
                  }, F(i), 9, M1)
                ]))), 128))
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), R1 = {
  id: "top",
  class: "min-h-screen font-sans antialiased"
}, H1 = { class: "mx-auto lg:px-6 2xl:container" }, B1 = { class: "flex" }, z1 = { class: "hidden lg:relative lg:block lg:flex-none" }, V1 = /* @__PURE__ */ h("div", { class: "absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" }, null, -1), F1 = /* @__PURE__ */ h("div", { class: "absolute top-12 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" }, null, -1), U1 = /* @__PURE__ */ h("div", { class: "absolute top-24 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" }, null, -1), q1 = { class: "h-sidebar sticky top-[72px] overflow-y-auto overflow-x-hidden overscroll-contain" }, W1 = { class: "w-64 pt-4 pr-4 pb-10 xl:w-72" }, K1 = { class: "flex items-center" }, J1 = /* @__PURE__ */ N({
  __name: "Layout",
  setup(e) {
    const { theme: t } = Ee(), n = Jt();
    return (r, o) => (g(), w("div", R1, [
      V($(x0), {
        mainURL: $(t).mainURL
      }, {
        right: xe(() => [
          V(ju)
        ]),
        _: 1
      }, 8, ["mainURL"]),
      V(qu),
      h("div", H1, [
        h("div", B1, [
          h("div", z1, [
            V1,
            F1,
            U1,
            h("div", q1, [
              h("div", W1, [
                h("div", K1, [
                  V(Nu, { class: "flex-1" })
                ]),
                V(uf, { class: "mt-6" }),
                V(xd, { class: "mt-8" })
              ])
            ])
          ]),
          $(n).component === Dn ? (g(), se(Dn, { key: 0 })) : (g(), se(P1, { key: 1 }))
        ])
      ])
    ]));
  }
});
const G1 = { class: "mt-10 mb-16" }, Q1 = { class: "border-b border-gray-200 dark:border-white/5" }, Y1 = { class: "z-10 -mb-px flex" }, Z1 = ["onClick"], X1 = /* @__PURE__ */ N({
  __name: "FlavorTabs",
  setup(e) {
    const { value: t, set: n } = Bs(), r = B([]), o = B(), i = B(), s = () => {
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
    Fe(() => {
      s();
    }), He(o, (l, u) => {
      u == null || u.hide(), l == null || l.show();
    }), He(t, () => {
      var u;
      const l = (u = r.value.find((c) => c.title.toLowerCase() === t.value)) != null ? u : r.value[0];
      o.value = l;
    });
    function a(l, u) {
      const c = l.target, p = Math.round(c.getBoundingClientRect().top);
      o.value = u, n(u.title.toLowerCase()), Dr(() => {
        Pa.scrollTo(c, 0, {
          offset: -p,
          force: !0,
          cancelable: !1
        });
      });
    }
    return (l, u) => (g(), w("div", G1, [
      h("div", Q1, [
        h("div", Y1, [
          (g(!0), w(R, null, G(r.value, (c) => (g(), w("button", {
            key: c.index,
            class: Q(["whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium uppercase focus:outline-none", {
              "border-ns-blue text-ns-blue focus:border-ns-blue dark:border-cyan-300 dark:text-cyan-300 dark:focus:border-cyan-300": o.value === c,
              "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 dark:text-white/90": o.value !== c
            }]),
            onClick: Ye((p) => a(p, c), ["prevent"])
          }, F(c.title), 11, Z1))), 128))
        ])
      ]),
      h("div", {
        class: "tab-container relative -mt-px rounded-md rounded-t-none border px-4 shadow-lg dark:border-transparent dark:shadow-cyan-300/5",
        ref_key: "tabContainer",
        ref: i
      }, [
        Pe(l.$slots, "default")
      ], 512)
    ]));
  }
}), em = { class: "mt-10 mb-4" }, tm = { class: "" }, nm = { class: "z-10 flex rounded-t-md border border-white/10 bg-gray-900 dark:bg-transparent" }, rm = ["onClick"], om = /* @__PURE__ */ N({
  __name: "CodeTabs",
  setup(e) {
    const t = B(0), n = B(), r = B([]), o = () => {
      n.value && (r.value = [], Array.from(n.value.children).map((i, s) => {
        s !== t.value && i.classList.add("hidden"), r.value.push({
          title: i.dataset.tabTitle,
          index: s
        });
      }));
    };
    return Fe(() => {
      o();
    }), He(t, (i, s) => {
      var a, l;
      (a = n.value) == null || a.children[s].classList.add("hidden"), (l = n.value) == null || l.children[i].classList.remove("hidden");
    }), (i, s) => (g(), w("div", em, [
      h("div", tm, [
        h("div", nm, [
          (g(!0), w(R, null, G(r.value, (a) => (g(), w("button", {
            key: a.index,
            class: Q(["whitespace-nowrap border-b px-6 py-3 text-sm font-medium focus:outline-none", {
              "border-cyan-300 text-cyan-200 focus:border-cyan-300": t.value === a.index,
              "border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-100 focus:border-gray-300": t.value !== a.index
            }]),
            onClick: Ye((l) => t.value = a.index, ["prevent"])
          }, F(a.title), 11, rm))), 128))
        ])
      ]),
      h("div", {
        class: "code-tab-container",
        ref_key: "tabContainer",
        ref: n
      }, [
        Pe(i.$slots, "default")
      ], 512)
    ]));
  }
});
const im = { class: "flex flex-col" }, sm = {
  key: 0,
  class: "flex h-5 items-center justify-center"
}, am = /* @__PURE__ */ h("div", { class: "h-5 w-20 rounded-full ring-1 ring-ns-blue dark:ring-cyan-700" }, null, -1), lm = /* @__PURE__ */ h("div", { class: "ml-4 h-5 w-5 rounded-full ring-1 ring-ns-blue dark:ring-cyan-700" }, null, -1), cm = [
  am,
  lm
], um = {
  key: 1,
  class: "flex h-5 items-center justify-center"
}, dm = /* @__PURE__ */ h("span", { class: "flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-ns-blue dark:ring-cyan-700" }, [
  /* @__PURE__ */ h("span", { class: "absolute h-0.5 w-0.5 rounded-full bg-ns-blue dark:bg-white" })
], -1), fm = [
  dm
], pm = /* @__PURE__ */ N({
  __name: "DeviceFrame",
  props: {
    type: String
  },
  setup(e) {
    return (t, n) => (g(), w("div", {
      class: Q(["device not-prose mr-6 inline-flex rounded-[36px] p-4 ring-1 ring-ns-blue dark:ring-cyan-700", {
        "rounded-[36px]": e.type === "ios",
        "rounded-[16px]": e.type === "android"
      }])
    }, [
      h("div", im, [
        e.type === "ios" ? (g(), w("div", sm, cm)) : e.type === "android" ? (g(), w("div", um, fm)) : K("", !0),
        h("div", {
          class: Q(["relative mt-4 overflow-hidden ring-1 ring-ns-blue dark:ring-cyan-700", {
            "rounded-b-[20px]": e.type === "ios",
            "rounded-b-[4px]": e.type === "android"
          }])
        }, [
          Pe(t.$slots, "default")
        ], 2)
      ])
    ], 2));
  }
});
const hm = /* @__PURE__ */ N({
  __name: "Heading",
  props: {
    ignore: { type: Boolean }
  },
  setup(e) {
    return (t, n) => Pe(t.$slots, "default");
  }
}), mm = { class: "not-prose" }, vm = ["href"], _m = /* @__PURE__ */ h("svg", {
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
], -1), gm = /* @__PURE__ */ N({
  __name: "ExternalButtonLink",
  props: {
    href: null,
    text: null
  },
  setup(e) {
    return (t, n) => (g(), w("div", mm, [
      h("a", {
        href: e.href,
        target: "_blank",
        class: "inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-400 dark:bg-cyan-500 dark:text-slate-900 dark:hover:bg-cyan-400"
      }, [
        De(F(e.text) + " ", 1),
        _m
      ], 8, vm)
    ]));
  }
}), ym = {}, bm = {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "xml:space": "preserve",
  "xmlns:serif": "http://www.serif.com/",
  style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
}, wm = /* @__PURE__ */ h("g", { transform: "matrix(1,0,0,1,-2248,0)" }, [
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
], -1), xm = [
  wm
];
function Om(e, t) {
  return g(), w("svg", bm, xm);
}
const mt = /* @__PURE__ */ St(ym, [["render", Om]]), km = { class: "not-prose -mx-4 grid grid-cols-4 gap-4" }, Sm = ["href"], $m = { class: "ml-4" }, Pm = /* @__PURE__ */ h("div", { class: "text-lg font-semibold" }, "NativeScript", -1), Em = { class: "text-sm" }, Cm = /* @__PURE__ */ N({
  __name: "StackBlitzLinks",
  setup(e) {
    const t = [
      {
        name: "TypeScript",
        link: "https://nativescript.new/",
        icon: mt
      },
      {
        name: "JavaScript",
        link: "https://nativescript.new/js",
        icon: mt
      },
      {
        name: "Angular",
        link: "https://nativescript.new/angular",
        icon: mt
      },
      {
        name: "Vue",
        link: "https://nativescript.new/vue",
        icon: mt
      },
      {
        name: "React",
        link: "https://nativescript.new/react",
        icon: mt
      },
      {
        name: "Svelte",
        link: "https://nativescript.new/Svelte",
        icon: mt
      }
    ];
    return (n, r) => (g(), w("div", km, [
      (g(), w(R, null, G(t, (o) => h("a", {
        href: o.link,
        target: "blank",
        class: "flex items-center rounded-md px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5"
      }, [
        h("div", null, [
          (g(), se(Gt(o.icon), { class: "h-10 w-10" }))
        ]),
        h("div", $m, [
          Pm,
          h("div", Em, F(o.name), 1)
        ])
      ], 8, Sm)), 64))
    ]));
  }
}), jm = /* @__PURE__ */ N({
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
    }, r = M(() => Object.keys(t.flags).map((o) => n[o]).filter(Boolean));
    return (o, i) => (g(!0), w(R, null, G($(r), (s) => (g(), w("span", {
      class: Q(["inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium", s.class])
    }, F(s.text), 3))), 256));
  }
}), Tm = { class: "flex items-baseline" }, Im = {
  key: 0,
  class: "ml-2"
}, Am = { class: "space-y-4" }, Nm = { class: "pb-2" }, Dm = { class: "relative" }, Lm = ["id", "href"], Mm = ["innerHTML"], Rm = { class: "text-right text-sm text-slate-500" }, Hm = { key: 0 }, Bm = ["href"], zm = ["href"], Vm = {
  key: 0,
  class: "prose prose-slate flex min-w-full items-center dark:prose-invert sm:pl-0"
}, Fm = /* @__PURE__ */ h("svg", {
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
], -1), Um = { class: "ml-2" }, qm = ["innerHTML"], Wm = /* @__PURE__ */ N({
  __name: "APIRef",
  props: {
    for: null
  },
  setup(e) {
    const t = e, n = Re("API_DATA"), r = M(() => {
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
      return g(), w(R, null, [
        h("div", Tm, [
          Pe(a.$slots, "title"),
          (p = $(r)) != null && p.flags ? (g(), w("div", Im, [
            V(jm, {
              flags: $(r).flags
            }, null, 8, ["flags"])
          ])) : K("", !0)
        ]),
        h("div", Am, [
          (g(!0), w(R, null, G((f = $(r)) == null ? void 0 : f.signatures, (d) => {
            var v, _;
            return g(), w("div", Nm, [
              h("div", Dm, [
                d.url ? (g(), w("a", {
                  key: 0,
                  id: s(d.url),
                  href: s(d.url),
                  class: "not-prose absolute inset-y-0 -left-6 flex items-center"
                }, null, 8, Lm)) : K("", !0),
                h("pre", {
                  innerHTML: d.code,
                  class: "mt-4 mb-0 [&_a]:text-blue-400 [&_a]:no-underline"
                }, null, 8, Mm)
              ]),
              h("div", {
                class: Q(["pt-2", {
                  "rouded-b-md bg-slate-50 px-4 pb-4": ((_ = (v = $(r)) == null ? void 0 : v.signatures) == null ? void 0 : _.length) > 1
                }])
              }, [
                h("div", Rm, [
                  d.inheritedFrom ? (g(), w("div", Hm, [
                    De(" inherited from "),
                    h("a", {
                      href: d.inheritedFrom.url
                    }, F(d.inheritedFrom.name), 9, Bm)
                  ])) : K("", !0),
                  (g(!0), w(R, null, G(d.sources, (b) => (g(), w("div", null, [
                    De(" defined in "),
                    h("a", {
                      href: i(b),
                      target: "_blank"
                    }, F(o(b)), 9, zm)
                  ]))), 256))
                ]),
                V(u, {
                  comment: d == null ? void 0 : d.comment
                }, null, 8, ["comment"]),
                V(c, {
                  parameters: d.parameters
                }, null, 8, ["parameters"]),
                d.returns ? (g(), w("div", Vm, [
                  Fm,
                  h("span", Um, [
                    De(" Returns "),
                    h("i", {
                      class: "font-semibold italic",
                      innerHTML: d.returns
                    }, null, 8, qm)
                  ])
                ])) : K("", !0)
              ], 2)
            ]);
          }), 256))
        ])
      ], 64);
    };
  }
}), Km = {
  key: 0,
  class: "not-prose mt-4"
}, Jm = /* @__PURE__ */ N({
  __name: "APIRefComment",
  props: {
    comment: null,
    commentBase64: null
  },
  setup(e) {
    const t = e, n = M(() => {
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
      return $(n) ? (g(), w("div", Km, [
        (g(!0), w(R, null, G((s = $(n)) == null ? void 0 : s.summary, (a) => (g(), se(Gt(r[a.kind].tag), {
          class: Q(r[a.kind].class),
          innerHTML: a.text
        }, null, 8, ["class", "innerHTML"]))), 256))
      ])) : K("", !0);
    };
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Gm = () => {
}, Qm = Object.assign, Ym = Array.isArray, Zm = (e) => typeof e == "function", Xm = (e) => typeof e == "symbol";
let e2;
function t2(e, t = e2) {
  t && t.active && t.effects.push(e);
}
const Fi = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Ea = (e) => (e.w & et) > 0, Ca = (e) => (e.n & et) > 0, n2 = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= et;
}, r2 = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      Ea(o) && !Ca(o) ? o.delete(e) : t[n++] = o, o.w &= ~et, o.n &= ~et;
    }
    t.length = n;
  }
};
let Dt = 0, et = 1;
const Nr = 30;
let we;
Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class o2 {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, t2(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = we, n = gn;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = we, we = this, gn = !0, et = 1 << ++Dt, Dt <= Nr ? n2(this) : Ui(this), this.fn();
    } finally {
      Dt <= Nr && r2(this), et = 1 << --Dt, we = this.parent, gn = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    we === this ? this.deferStop = !0 : this.active && (Ui(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ui(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let gn = !0;
function qi(e, t) {
  let n = !1;
  Dt <= Nr ? Ca(e) || (e.n |= et, n = !Ea(e)) : n = !e.has(we), n && (e.add(we), we.deps.push(e), process.env.NODE_ENV !== "production" && we.onTrack && we.onTrack(Object.assign({ effect: we }, t)));
}
function Wi(e, t) {
  const n = Ym(e) ? e : [...e];
  for (const r of n)
    r.computed && Ki(r, t);
  for (const r of n)
    r.computed || Ki(r, t);
}
function Ki(e, t) {
  (e !== we || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Qm({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xm)
);
function Wn(e) {
  const t = e && e.__v_raw;
  return t ? Wn(t) : e;
}
function i2(e) {
  gn && we && (e = Wn(e), process.env.NODE_ENV !== "production" ? qi(e.dep || (e.dep = Fi()), {
    target: e,
    type: "get",
    key: "value"
  }) : qi(e.dep || (e.dep = Fi())));
}
function s2(e, t) {
  e = Wn(e), e.dep && (process.env.NODE_ENV !== "production" ? Wi(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Wi(e.dep));
}
var ja;
class a2 {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[ja] = !1, this._dirty = !0, this.effect = new o2(t, () => {
      this._dirty || (this._dirty = !0, s2(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = Wn(this);
    return i2(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
ja = "__v_isReadonly";
function l2(e, t, n = !1) {
  let r, o;
  const i = Zm(e);
  i ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Gm) : (r = e.get, o = e.set);
  const s = new a2(r, o, i || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
const c2 = { class: "flex items-start" }, u2 = { class: "columns-1 gap-8 sm:columns-2 md:columns-3 lg:columns-4" }, d2 = ["href"], f2 = {
  key: 1,
  class: "block font-bold text-slate-800 dark:text-slate-300"
}, p2 = /* @__PURE__ */ N({
  __name: "APIRefHierarchyItem",
  props: {
    hierarchy: null,
    root: { type: Boolean }
  },
  setup(e) {
    const t = e, n = l2(() => {
      const r = t.hierarchy.at(0);
      return r ? Array.isArray(r) ? r : [r] : !1;
    });
    return (r, o) => {
      const i = ge("APIRefHierarchyItem", !0);
      return $(n) ? (g(), w("div", {
        key: 0,
        class: Q({ "pl-4": !e.root })
      }, [
        h("div", c2, [
          e.root ? K("", !0) : (g(), se($(Xd), {
            key: 0,
            class: "mt-0.5 mr-2 h-5 w-5 rotate-180 transform"
          })),
          h("div", u2, [
            (g(!0), w(R, null, G($(n), (s) => (g(), w(R, null, [
              s.link ? (g(), w("a", {
                key: 0,
                href: s.link,
                class: "block text-blue-500 no-underline hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-600"
              }, F(s.text), 9, d2)) : (g(), w("span", f2, F(s.text), 1))
            ], 64))), 256))
          ])
        ]),
        e.hierarchy.length ? (g(), se(i, {
          key: 0,
          hierarchy: e.hierarchy.slice(1)
        }, null, 8, ["hierarchy"])) : K("", !0)
      ], 2)) : K("", !0);
    };
  }
}), h2 = { class: "mt-6 font-medium" }, m2 = /* @__PURE__ */ N({
  __name: "APIRefHierarchy",
  props: {
    hierarchy: { default: () => [
      { text: "ViewBase", link: "//#" },
      { text: "View", link: "//#" },
      { text: "ActionBar" }
    ] }
  },
  setup(e) {
    const t = e, n = Re("API_DATA"), r = M(() => {
      var o;
      return (o = n == null ? void 0 : n.hierarchy) != null ? o : t.hierarchy;
    });
    return (o, i) => (g(), w("div", h2, [
      V(p2, {
        hierarchy: $(r),
        root: !0
      }, null, 8, ["hierarchy"])
    ]));
  }
}), v2 = {
  key: 0,
  class: "not-prose mt-4"
}, _2 = { class: "not-prose mt-4" }, g2 = { class: "-mx-4 overflow-x-auto sm:mx-0" }, y2 = { class: "inline-block min-w-full" }, b2 = { class: "w- w-full min-w-[540px] border-b border-slate-200 text-left dark:border-slate-700 sm:min-w-full" }, w2 = { class: "divide-y divide-slate-200 dark:divide-slate-700" }, x2 = /* @__PURE__ */ h("tr", { class: "w-1/4 text-slate-900 dark:text-slate-400" }, [
  /* @__PURE__ */ h("td", { class: "w-1/6 whitespace-nowrap py-2 pl-4 text-sm font-medium sm:pl-0" }, " Parameter "),
  /* @__PURE__ */ h("td", { class: "w-1/6 whitespace-nowrap py-2 text-sm font-medium" }, " Default "),
  /* @__PURE__ */ h("td", { class: "w-2/3 whitespace-nowrap py-2 text-sm font-medium" }, " Description ")
], -1), O2 = { class: "" }, k2 = { class: "prose-sm prose prose-slate py-3 pl-4 align-baseline dark:prose-invert sm:pl-0" }, S2 = ["innerHTML"], $2 = { class: "prose-sm prose prose-slate py-3 align-baseline dark:prose-invert" }, P2 = { class: "" }, E2 = { class: "py-3 align-baseline" }, C2 = { class: "prose-sm prose prose-slate my-0 space-x-5 whitespace-nowrap dark:prose-invert [&_a]:text-blue-500 dark:[&_a]:text-cyan-400" }, j2 = ["innerHTML"], T2 = { class: "prose-sm prose prose-slate dark:prose-invert" }, I2 = /* @__PURE__ */ N({
  __name: "APIRefParameters",
  props: {
    parameters: null
  },
  setup(e) {
    return (t, n) => {
      var o;
      const r = ge("APIRefComment");
      return (o = e.parameters) != null && o.length ? (g(), w("div", v2, [
        h("div", _2, [
          h("div", g2, [
            h("div", y2, [
              h("table", b2, [
                h("tbody", w2, [
                  x2,
                  (g(!0), w(R, null, G(e.parameters, (i) => (g(), w("tr", O2, [
                    h("td", k2, [
                      h("code", {
                        innerHTML: i.name
                      }, null, 8, S2)
                    ]),
                    h("td", $2, [
                      h("span", P2, [
                        h("code", null, F(i.defaultValue), 1)
                      ])
                    ]),
                    h("td", E2, [
                      h("div", C2, [
                        h("span", null, [
                          h("code", {
                            class: "font-bold",
                            innerHTML: i.type
                          }, null, 8, j2)
                        ])
                      ]),
                      h("div", T2, [
                        h("p", null, [
                          V(r, {
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
      ])) : K("", !0);
    };
  }
}), { createElementVNode: A2, openBlock: N2, createElementBlock: D2 } = Ve;
var L2 = function(t, n) {
  return N2(), D2("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    A2("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: M2, openBlock: R2, createElementBlock: H2 } = Ve;
var B2 = function(t, n) {
  return R2(), H2("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    M2("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z",
      "clip-rule": "evenodd"
    })
  ]);
}, z2 = L2, Ji = B2;
const V2 = { key: 0 }, F2 = { key: 0 }, U2 = { class: "columns-1 gap-4 sm:columns-2 2xl:columns-3" }, q2 = ["href"], W2 = ["innerHTML"], K2 = { class: "-mx-4 mt-4 rounded-lg border border-slate-200 dark:border-slate-700" }, J2 = ["onClick"], G2 = { class: "ml-2" }, Q2 = ["href", "innerHTML"], Y2 = ["innerHTML"], Z2 = { class: "flex-1 text-right text-xs" }, X2 = { class: "columns-1 p-4 sm:columns-2 2xl:columns-3" }, ev = ["href"], tv = ["innerHTML"], nv = /* @__PURE__ */ N({
  __name: "APIRefSummary",
  setup(e) {
    const t = Re("API_DATA"), n = M(() => (c) => c.items.map((p) => {
      var f;
      return (f = t == null ? void 0 : t.reflections) == null ? void 0 : f[p];
    }).filter(Boolean)), r = M(() => (c) => n.value(c).filter((p) => p.type === "Constructor" || !p.inheritedFrom)), o = M(() => (c) => Object.values(
      n.value(c).filter((p) => p.type !== "Constructor" && !!p.inheritedFrom).reduce((p, f) => {
        var v;
        let d = f.inheritedFrom.fromName;
        return d || (d = "&laquo;External&raquo;"), (v = p[d]) != null || (p[d] = {
          name: d,
          url: f.inheritedFrom.fromUrl,
          items: []
        }), p[d].items.push(f), p;
      }, {})
    )), i = M(() => (c) => {
      var f, d;
      const p = (f = c.signatures) == null ? void 0 : f.find((v) => {
        var _;
        return !!((_ = v.inheritedFrom) != null && _.url);
      });
      return (d = p == null ? void 0 : p.inheritedFrom) == null ? void 0 : d.url;
    }), s = B(/* @__PURE__ */ new Set());
    M(() => (c) => s.value.has(c.title));
    const a = B(/* @__PURE__ */ new Set());
    function l(c) {
      a.value.has(c) ? a.value.delete(c) : a.value.add(c);
    }
    const u = M(() => (c) => a.value.has(c));
    return (c, p) => $(t) ? (g(), w("div", V2, [
      (g(!0), w(R, null, G($(t).summary, (f) => (g(), w(R, null, [
        $(r)(f).length ? (g(), w("div", F2, [
          h("h4", null, F(f.title), 1),
          h("dl", U2, [
            (g(!0), w(R, null, G($(r)(f), (d) => (g(), w("dd", null, [
              h("a", {
                href: d.url,
                class: "flex items-center text-blue-500 no-underline hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-600"
              }, [
                V($(Ji), { class: "mr-1.5 h-5 w-5 flex-shrink-0" }),
                h("span", {
                  innerHTML: d.name
                }, null, 8, W2)
              ], 8, q2)
            ]))), 256))
          ]),
          wt(h("div", K2, [
            (g(!0), w(R, null, G($(o)(f), (d) => (g(), w("div", null, [
              h("div", {
                onClick: Ye((v) => l(`${f.title}-${d.name}`), ["prevent"]),
                class: "flex cursor-pointer items-center border-b px-4 py-2 text-slate-700 dark:text-slate-400"
              }, [
                V($(z2), {
                  class: Q(["h-4 w-4", {
                    "rotate-90": $(u)(`${f.title}-${d.name}`)
                  }])
                }, null, 8, ["class"]),
                h("span", G2, F(d.items.length) + " " + F(f.title.toLowerCase()) + " inherited from ", 1),
                d.url ? (g(), w("a", {
                  key: 0,
                  class: "ml-1 text-blue-500 no-underline hover:underline",
                  href: d.url,
                  innerHTML: d.name
                }, null, 8, Q2)) : (g(), w("span", {
                  key: 1,
                  class: "ml-1 font-bold",
                  innerHTML: d.name
                }, null, 8, Y2)),
                h("div", Z2, F($(u)(`${f.title}-${d.name}`) ? "Click to collapse" : "Click to expand"), 1)
              ], 8, J2),
              wt(h("dl", X2, [
                (g(!0), w(R, null, G(d.items, (v) => (g(), w("dd", null, [
                  h("a", {
                    href: $(i)(v),
                    class: "flex items-center text-blue-500 no-underline hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-600"
                  }, [
                    V($(Ji), { class: "mr-1.5 h-5 w-5 flex-shrink-0" }),
                    h("span", {
                      innerHTML: v.name
                    }, null, 8, tv)
                  ], 8, ev)
                ]))), 256))
              ], 512), [
                [bn, $(u)(`${f.title}-${d.name}`)]
              ])
            ]))), 256))
          ], 512), [
            [bn, $(o)(f).length]
          ])
        ])) : K("", !0)
      ], 64))), 256))
    ])) : K("", !0);
  }
}), av = (e) => ({
  Layout: J1,
  NotFound: Dn,
  enhanceApp(t) {
    const { app: n, router: r, siteData: o } = t;
    n.component("FlavorTabs", X1), n.component("CodeTabs", om), n.component("NotFound", Dn), n.component("DeviceFrame", pm), n.component("Heading", hm), n.component("ExternalButtonLink", gm), n.component("StackBlitzLinks", Cm), n.component("APIRef", Wm), n.component("APIRefComment", Jm), n.component("APIRefHierarchy", m2), n.component("APIRefParameters", I2), n.component("APIRefSummary", nv), n.provide("useRouter", Gi), n.provide("useRoute", Jt), n.provide(Hs, Tu()), n.use(vc, {
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
  av as default
};
