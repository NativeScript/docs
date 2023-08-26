import { inBrowser as Ir, useData as Ne, useRoute as pn, useRouter as Cl } from "vitepress";
import { pushScopeId as jl, popScopeId as Tl, defineComponent as D, nextTick as or, openBlock as _, createBlock as ce, createElementBlock as w, normalizeClass as Z, renderSlot as De, normalizeProps as Al, guardReactiveProps as Il, withScopeId as Dl, resolveComponent as xe, normalizeStyle as _r, withKeys as Nl, createElementVNode as h, Fragment as F, createCommentVNode as J, withCtx as pe, createVNode as B, ref as T, createApp as Ll, h as fe, mergeProps as Ml, toDisplayString as U, cloneVNode as Rl, inject as he, provide as Be, onMounted as se, watchEffect as Oe, computed as A, watch as $e, onUnmounted as Ze, Teleport as Bl, reactive as Hl, unref as $, getCurrentInstance as Ia, getCurrentScope as Fl, onScopeDispose as zl, shallowRef as Vl, isRef as Da, withDirectives as Lt, renderList as X, vModelSelect as Ul, withModifiers as wt, resolveDynamicComponent as hn, vShow as Bn, createStaticVNode as Na, Transition as yr, createTextVNode as Ae, resolveDirective as ql } from "vue";
import * as Ye from "vue";
function Xe(e) {
  return e.split("-")[0];
}
function Dt(e) {
  return e.split("-")[1];
}
function mn(e) {
  return ["top", "bottom"].includes(Xe(e)) ? "x" : "y";
}
function ho(e) {
  return e === "y" ? "height" : "width";
}
function Ao(e) {
  let {
    reference: t,
    floating: n,
    placement: r
  } = e;
  const o = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2;
  let a;
  switch (Xe(r)) {
    case "top":
      a = {
        x: o,
        y: t.y - n.height
      };
      break;
    case "bottom":
      a = {
        x: o,
        y: t.y + t.height
      };
      break;
    case "right":
      a = {
        x: t.x + t.width,
        y: i
      };
      break;
    case "left":
      a = {
        x: t.x - n.width,
        y: i
      };
      break;
    default:
      a = {
        x: t.x,
        y: t.y
      };
  }
  const s = mn(r), l = ho(s);
  switch (Dt(r)) {
    case "start":
      a[s] = a[s] - (t[l] / 2 - n[l] / 2);
      break;
    case "end":
      a[s] = a[s] + (t[l] / 2 - n[l] / 2);
      break;
  }
  return a;
}
const Wl = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n;
  if (process.env.NODE_ENV !== "production" && (a == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), i.filter((d) => {
    let {
      name: v
    } = d;
    return v === "autoPlacement" || v === "flip";
  }).length > 1))
    throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`", "middleware detected. This will lead to an infinite loop. Ensure only", "one of either has been passed to the `middleware` array."].join(" "));
  let s = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: l,
    y: u
  } = Ao({
    ...s,
    placement: r
  }), c = r, p = {}, f = 0;
  for (let d = 0; d < i.length; d++) {
    if (process.env.NODE_ENV !== "production" && (f++, f > 100))
      throw new Error(["Floating UI: The middleware lifecycle appears to be", "running in an infinite loop. This is usually caused by a `reset`", "continually being returned without a break condition."].join(" "));
    const {
      name: v,
      fn: g
    } = i[d], {
      x: y,
      y: b,
      data: k,
      reset: S
    } = await g({
      x: l,
      y: u,
      initialPlacement: r,
      placement: c,
      strategy: o,
      middlewareData: p,
      rects: s,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (l = y != null ? y : l, u = b != null ? b : u, p = {
      ...p,
      [v]: k != null ? k : {}
    }, S) {
      typeof S == "object" && (S.placement && (c = S.placement), S.rects && (s = S.rects === !0 ? await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : S.rects), {
        x: l,
        y: u
      } = Ao({
        ...s,
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
function Kl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function La(e) {
  return typeof e != "number" ? Kl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Dr(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function ir(e, t) {
  t === void 0 && (t = {});
  const {
    x: n,
    y: r,
    platform: o,
    rects: i,
    elements: a,
    strategy: s
  } = e, {
    boundary: l = "clippingParents",
    rootBoundary: u = "viewport",
    elementContext: c = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = t, d = La(f), g = a[p ? c === "floating" ? "reference" : "floating" : c], y = await o.getClippingClientRect({
    element: await o.isElement(g) ? g : g.contextElement || await o.getDocumentElement({
      element: a.floating
    }),
    boundary: l,
    rootBoundary: u
  }), b = Dr(await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: c === "floating" ? {
      ...i.floating,
      x: n,
      y: r
    } : i.reference,
    offsetParent: await o.getOffsetParent({
      element: a.floating
    }),
    strategy: s
  }));
  return {
    top: y.top - b.top + d.top,
    bottom: b.bottom - y.bottom + d.bottom,
    left: y.left - b.left + d.left,
    right: b.right - y.right + d.right
  };
}
const Jl = Math.min, bt = Math.max;
function Nr(e, t, n) {
  return bt(e, Jl(t, n));
}
const Gl = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: r = 0
    } = e != null ? e : {}, {
      x: o,
      y: i,
      placement: a,
      rects: s,
      platform: l
    } = t;
    if (n == null)
      return process.env.NODE_ENV !== "production" && console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const u = La(r), c = {
      x: o,
      y: i
    }, p = Xe(a), f = mn(p), d = ho(f), v = await l.getDimensions({
      element: n
    }), g = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", b = s.reference[d] + s.reference[f] - c[f] - s.floating[d], k = c[f] - s.reference[f], S = await l.getOffsetParent({
      element: n
    }), x = S ? f === "y" ? S.clientHeight || 0 : S.clientWidth || 0 : 0, P = b / 2 - k / 2, M = u[g], E = x - v[d] - u[y], j = x / 2 - v[d] / 2 + P, C = Nr(M, j, E);
    return {
      data: {
        [f]: C,
        centerOffset: j - C
      }
    };
  }
}), Ql = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Hn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ql[t]);
}
function Ma(e, t) {
  const n = Dt(e) === "start", r = mn(e), o = ho(r);
  let i = r === "x" ? n ? "right" : "left" : n ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = Hn(i)), {
    main: i,
    cross: Hn(i)
  };
}
const Yl = {
  start: "end",
  end: "start"
};
function Lr(e) {
  return e.replace(/start|end/g, (t) => Yl[t]);
}
const Zl = ["top", "right", "bottom", "left"], Xl = /* @__PURE__ */ Zl.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
function ec(e, t, n) {
  return (e ? [...n.filter((o) => Dt(o) === e), ...n.filter((o) => Dt(o) !== e)] : n.filter((o) => Xe(o) === o)).filter((o) => e ? Dt(o) === e || (t ? Lr(o) !== o : !1) : !0);
}
const tc = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, r, o, i, a, s;
      const {
        x: l,
        y: u,
        rects: c,
        middlewareData: p,
        placement: f
      } = t, {
        alignment: d = null,
        allowedPlacements: v = Xl,
        autoAlignment: g = !0,
        ...y
      } = e;
      if ((n = p.autoPlacement) != null && n.skip)
        return {};
      const b = ec(d, g, v), k = await ir(t, y), S = (r = (o = p.autoPlacement) == null ? void 0 : o.index) != null ? r : 0, x = b[S], {
        main: P,
        cross: M
      } = Ma(x, c);
      if (f !== x)
        return {
          x: l,
          y: u,
          reset: {
            placement: b[0]
          }
        };
      const E = [k[Xe(x)], k[P], k[M]], j = [...(i = (a = p.autoPlacement) == null ? void 0 : a.overflows) != null ? i : [], {
        placement: x,
        overflows: E
      }], C = b[S + 1];
      if (C)
        return {
          data: {
            index: S + 1,
            overflows: j
          },
          reset: {
            placement: C
          }
        };
      const R = j.slice().sort((Y, W) => Y.overflows[0] - W.overflows[0]), H = (s = R.find((Y) => {
        let {
          overflows: W
        } = Y;
        return W.every((ee) => ee <= 0);
      })) == null ? void 0 : s.placement;
      return {
        data: {
          skip: !0
        },
        reset: {
          placement: H != null ? H : R[0].placement
        }
      };
    }
  };
};
function nc(e) {
  const t = Hn(e);
  return [Lr(e), t, Lr(t)];
}
const rc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s
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
      } = e, v = Xe(o), y = c || (v === s || !f ? [Hn(s)] : nc(s)), b = [s, ...y], k = await ir(t, d), S = [];
      let x = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (l && S.push(k[v]), u) {
        const {
          main: j,
          cross: C
        } = Ma(o, a);
        S.push(k[j], k[C]);
      }
      if (x = [...x, {
        placement: o,
        overflows: S
      }], !S.every((j) => j <= 0)) {
        var P, M;
        const j = ((P = (M = i.flip) == null ? void 0 : M.index) != null ? P : 0) + 1, C = b[j];
        if (C)
          return {
            data: {
              index: j,
              overflows: x
            },
            reset: {
              placement: C
            }
          };
        let R = "bottom";
        switch (p) {
          case "bestFit": {
            var E;
            const H = (E = x.slice().sort((Y, W) => Y.overflows.filter((ee) => ee > 0).reduce((ee, le) => ee + le, 0) - W.overflows.filter((ee) => ee > 0).reduce((ee, le) => ee + le, 0))[0]) == null ? void 0 : E.placement;
            H && (R = H);
            break;
          }
          case "initialPlacement":
            R = s;
            break;
        }
        return {
          data: {
            skip: !0
          },
          reset: {
            placement: R
          }
        };
      }
      return {};
    }
  };
};
function oc(e) {
  let {
    placement: t,
    rects: n,
    value: r
  } = e;
  const o = Xe(t), i = ["left", "top"].includes(o) ? -1 : 1, a = typeof r == "function" ? r({
    ...n,
    placement: t
  }) : r, {
    mainAxis: s,
    crossAxis: l
  } = typeof a == "number" ? {
    mainAxis: a,
    crossAxis: 0
  } : {
    mainAxis: 0,
    crossAxis: 0,
    ...a
  };
  return mn(o) === "x" ? {
    x: l,
    y: s * i
  } : {
    x: s * i,
    y: l
  };
}
const ic = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i
      } = t, a = oc({
        placement: o,
        rects: i,
        value: e
      });
      return {
        x: n + a.x,
        y: r + a.y,
        data: a
      };
    }
  };
};
function ac(e) {
  return e === "x" ? "y" : "x";
}
const sc = function(e) {
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
        crossAxis: a = !1,
        limiter: s = {
          fn: (y) => {
            let {
              x: b,
              y: k
            } = y;
            return {
              x: b,
              y: k
            };
          }
        },
        ...l
      } = e, u = {
        x: n,
        y: r
      }, c = await ir(t, l), p = mn(Xe(o)), f = ac(p);
      let d = u[p], v = u[f];
      if (i) {
        const y = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", k = d + c[y], S = d - c[b];
        d = Nr(k, d, S);
      }
      if (a) {
        const y = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", k = v + c[y], S = v - c[b];
        v = Nr(k, v, S);
      }
      const g = s.fn({
        ...t,
        [p]: d,
        [f]: v
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r
        }
      };
    }
  };
}, lc = function(e) {
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
        apply: a,
        ...s
      } = e;
      if ((n = i.size) != null && n.skip)
        return {};
      const l = await ir(t, s), u = Xe(r), c = Dt(r) === "end";
      let p, f;
      u === "top" || u === "bottom" ? (p = u, f = c ? "left" : "right") : (f = u, p = c ? "top" : "bottom");
      const d = bt(l.left, 0), v = bt(l.right, 0), g = bt(l.top, 0), y = bt(l.bottom, 0), b = {
        height: o.floating.height - (["left", "right"].includes(r) ? 2 * (g !== 0 || y !== 0 ? g + y : bt(l.top, l.bottom)) : l[p]),
        width: o.floating.width - (["top", "bottom"].includes(r) ? 2 * (d !== 0 || v !== 0 ? d + v : bt(l.left, l.right)) : l[f])
      };
      return a == null || a({
        ...b,
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
function mo(e) {
  return (e == null ? void 0 : e.toString()) === "[object Window]";
}
function dt(e) {
  if (e == null)
    return window;
  if (!mo(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ar(e) {
  return dt(e).getComputedStyle(e);
}
function Ge(e) {
  return mo(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function Qe(e) {
  return e instanceof dt(e).HTMLElement;
}
function Fn(e) {
  return e instanceof dt(e).Element;
}
function cc(e) {
  return e instanceof dt(e).Node;
}
function Ra(e) {
  const t = dt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function sr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r
  } = ar(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function uc(e) {
  return ["table", "td", "th"].includes(Ge(e));
}
function Ba(e) {
  const t = navigator.userAgent.toLowerCase().includes("firefox"), n = ar(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
const Io = Math.min, Yt = Math.max, zn = Math.round;
function Mt(e, t) {
  t === void 0 && (t = !1);
  const n = e.getBoundingClientRect();
  let r = 1, o = 1;
  return t && Qe(e) && (r = e.offsetWidth > 0 && zn(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && zn(n.height) / e.offsetHeight || 1), {
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
function ft(e) {
  return ((cc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function lr(e) {
  return mo(e) ? {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  } : {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ha(e) {
  return Mt(ft(e)).left + lr(e).scrollLeft;
}
function dc(e) {
  const t = Mt(e);
  return zn(t.width) !== e.offsetWidth || zn(t.height) !== e.offsetHeight;
}
function fc(e, t, n) {
  const r = Qe(t), o = ft(t), i = Mt(e, r && dc(t));
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((Ge(t) !== "body" || sr(o)) && (a = lr(t)), Qe(t)) {
      const l = Mt(t, !0);
      s.x = l.x + t.clientLeft, s.y = l.y + t.clientTop;
    } else
      o && (s.x = Ha(o));
  return {
    x: i.left + a.scrollLeft - s.x,
    y: i.top + a.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function cr(e) {
  return Ge(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ra(e) ? e.host : null) || ft(e);
}
function Do(e) {
  return !Qe(e) || getComputedStyle(e).position === "fixed" ? null : e.offsetParent;
}
function pc(e) {
  let t = cr(e);
  for (; Qe(t) && !["html", "body"].includes(Ge(t)); ) {
    if (Ba(t))
      return t;
    t = t.parentNode;
  }
  return null;
}
function Mr(e) {
  const t = dt(e);
  let n = Do(e);
  for (; n && uc(n) && getComputedStyle(n).position === "static"; )
    n = Do(n);
  return n && (Ge(n) === "html" || Ge(n) === "body" && getComputedStyle(n).position === "static" && !Ba(n)) ? t : n || pc(e) || t;
}
function No(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function hc(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = Qe(n), i = ft(n);
  if (n === i)
    return t;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = {
    x: 0,
    y: 0
  };
  if ((o || !o && r !== "fixed") && ((Ge(n) !== "body" || sr(i)) && (a = lr(n)), Qe(n))) {
    const l = Mt(n, !0);
    s.x = l.x + n.clientLeft, s.y = l.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - a.scrollLeft + s.x,
    y: t.y - a.scrollTop + s.y
  };
}
function mc(e) {
  const t = dt(e), n = ft(e), r = t.visualViewport;
  let o = n.clientWidth, i = n.clientHeight, a = 0, s = 0;
  return r && (o = r.width, i = r.height, Math.abs(t.innerWidth / r.scale - r.width) < 0.01 && (a = r.offsetLeft, s = r.offsetTop)), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function vc(e) {
  var t;
  const n = ft(e), r = lr(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Yt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Yt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let s = -r.scrollLeft + Ha(e);
  const l = -r.scrollTop;
  return ar(o || n).direction === "rtl" && (s += Yt(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Fa(e) {
  return ["html", "body", "#document"].includes(Ge(e)) ? e.ownerDocument.body : Qe(e) && sr(e) ? e : Fa(cr(e));
}
function Vn(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Fa(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = dt(r), a = o ? [i].concat(i.visualViewport || [], sr(r) ? r : []) : r, s = t.concat(a);
  return o ? s : s.concat(Vn(cr(a)));
}
function gc(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ra(n)) {
    let r = t;
    do {
      if (r && e === r)
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function _c(e) {
  const t = Mt(e), n = t.top + e.clientTop, r = t.left + e.clientLeft;
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
function Lo(e, t) {
  return t === "viewport" ? Dr(mc(e)) : Fn(t) ? _c(t) : Dr(vc(ft(e)));
}
function yc(e) {
  const t = Vn(cr(e)), r = ["absolute", "fixed"].includes(ar(e).position) && Qe(e) ? Mr(e) : e;
  return Fn(r) ? t.filter((o) => Fn(o) && gc(o, r) && Ge(o) !== "body") : [];
}
function bc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r
  } = e;
  const i = [...n === "clippingParents" ? yc(t) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = Lo(t, u);
    return l.top = Yt(c.top, l.top), l.right = Io(c.right, l.right), l.bottom = Io(c.bottom, l.bottom), l.left = Yt(c.left, l.left), l;
  }, Lo(t, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
const wc = {
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: fc(t, Mr(n), r),
      floating: {
        ...No(n),
        x: 0,
        y: 0
      }
    };
  },
  convertOffsetParentRelativeRectToViewportRelativeRect: (e) => hc(e),
  getOffsetParent: (e) => {
    let {
      element: t
    } = e;
    return Mr(t);
  },
  isElement: (e) => Fn(e),
  getDocumentElement: (e) => {
    let {
      element: t
    } = e;
    return ft(t);
  },
  getClippingClientRect: (e) => bc(e),
  getDimensions: (e) => {
    let {
      element: t
    } = e;
    return No(t);
  },
  getClientRects: (e) => {
    let {
      element: t
    } = e;
    return t.getClientRects();
  }
}, xc = (e, t, n) => Wl(e, t, {
  platform: wc,
  ...n
});
var Oc = Object.defineProperty, Sc = Object.defineProperties, kc = Object.getOwnPropertyDescriptors, Mo = Object.getOwnPropertySymbols, $c = Object.prototype.hasOwnProperty, Pc = Object.prototype.propertyIsEnumerable, Ro = (e, t, n) => t in e ? Oc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, qe = (e, t) => {
  for (var n in t || (t = {}))
    $c.call(t, n) && Ro(e, n, t[n]);
  if (Mo)
    for (var n of Mo(t))
      Pc.call(t, n) && Ro(e, n, t[n]);
  return e;
}, vn = (e, t) => Sc(e, kc(t));
function za(e, t) {
  for (const n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? za(e[n], t[n]) : e[n] = t[n]);
}
const Ke = {
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
function Rt(e, t) {
  let n = Ke.themes[e] || {}, r;
  do
    r = n[t], typeof r > "u" ? n.$extend ? n = Ke.themes[n.$extend] || {} : (n = null, r = Ke[t]) : n = null;
  while (n);
  return r;
}
function Ec(e) {
  const t = [e];
  let n = Ke.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Ke.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((r) => `v-popper--theme-${r}`);
}
function Bo(e) {
  const t = [e];
  let n = Ke.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Ke.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let xt = !1;
if (typeof window < "u") {
  xt = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        xt = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Va = !1;
typeof window < "u" && typeof navigator < "u" && (Va = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Ua = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Ho = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart"
}, Fo = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend"
};
function zo(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function br() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Me = [];
let vt = null;
const Vo = {};
function Uo(e) {
  let t = Vo[e];
  return t || (t = Vo[e] = []), t;
}
let Rr = function() {
};
typeof window < "u" && (Rr = window.Element);
function K(e) {
  return function(t) {
    return Rt(t.theme, e);
  };
}
const wr = "__floating-vue__popper";
var qa = () => D({
  name: "VPopper",
  provide() {
    return {
      [wr]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [wr]: { default: null }
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
      default: K("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: K("positioningDisabled")
    },
    placement: {
      type: String,
      default: K("placement"),
      validator: (e) => Ua.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: K("delay")
    },
    distance: {
      type: [Number, String],
      default: K("distance")
    },
    skidding: {
      type: [Number, String],
      default: K("skidding")
    },
    triggers: {
      type: Array,
      default: K("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: K("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: K("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: K("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: K("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: K("popperHideTriggers")
    },
    container: {
      type: [String, Object, Rr, Boolean],
      default: K("container")
    },
    boundary: {
      type: [String, Rr],
      default: K("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: K("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: K("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: K("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: K("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: K("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: K("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: K("computeTransformOrigin")
    },
    autoMinSize: {
      type: Boolean,
      default: K("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: K("autoSize")
    },
    autoMaxSize: {
      type: Boolean,
      default: K("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: K("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: K("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: K("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: K("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: K("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: K("flip")
    },
    shift: {
      type: Boolean,
      default: K("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: K("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: K("noAutoFocus")
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
        classes: vn(qe({}, this.classes), {
          popperClass: this.popperClass
        }),
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[wr]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: qe(qe({
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
      (this.distance || this.skidding) && t.middleware.push(ic({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const n = this.placement.startsWith("auto");
      if (n ? t.middleware.push(tc({
        alignment: (e = this.placement.split("-")[1]) != null ? e : ""
      })) : t.placement = this.placement, this.preventOverflow && (this.shift && t.middleware.push(sc({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !n && this.flip && t.middleware.push(rc({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), t.middleware.push(Gl({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && t.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: o, rects: i, middlewareData: a }) => {
          let s;
          const { centerOffset: l } = a.arrow;
          return o.startsWith("top") || o.startsWith("bottom") ? s = Math.abs(l) > i.reference.width / 2 : s = Math.abs(l) > i.reference.height / 2, {
            data: {
              overflow: s
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const o = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        t.middleware.push({
          name: "autoSize",
          fn: ({ rects: i, placement: a, middlewareData: s }) => {
            var l;
            if ((l = s.autoSize) != null && l.skip)
              return {};
            let u, c;
            return a.startsWith("top") || a.startsWith("bottom") ? u = i.reference.width : c = i.reference.height, this.$_innerNode.style[o === "min" ? "minWidth" : o === "max" ? "maxWidth" : "width"] = u != null ? `${u}px` : null, this.$_innerNode.style[o === "min" ? "minHeight" : o === "max" ? "maxHeight" : "height"] = c != null ? `${c}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, t.middleware.push(lc({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ width: o, height: i }) => {
          this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null, this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null;
        }
      })));
      const r = await xc(this.$_referenceNode, this.$_popperNode, t);
      Object.assign(this.result, {
        x: r.x,
        y: r.y,
        placement: r.placement,
        strategy: r.strategy,
        arrow: qe(qe({}, r.middlewareData.arrow), r.middlewareData.arrowOverflow)
      });
    },
    $_scheduleShow(e = null, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), vt && this.instantMove && vt.instantMove && vt !== this.parentPopper) {
        vt.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e = null, t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (vt = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await br(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Vn(this.$_referenceNode),
        ...Vn(this.$_popperNode)
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
        for (let n = 0; n < Me.length; n++)
          t = Me[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Me.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Bo(this.theme))
        Uo(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await br(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, zo(Me, this), Me.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Bo(this.theme)) {
        const r = Uo(n);
        zo(r, this), r.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      vt === this && (vt = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = Rt(this.theme, "disposeTimeout");
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await br(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Ho, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Ho, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Fo, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Fo, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((r) => r.addEventListener(t, n, xt ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, n, r, o) {
      let i = n;
      r != null && (i = typeof r == "function" ? r(i) : r), i.forEach((a) => {
        const s = t[a];
        s && this.$_registerEventListeners(e, s, o);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((n) => {
        const { targetNodes: r, eventType: o, handler: i } = n;
        !e || e === o ? r.forEach((a) => a.removeEventListener(o, i)) : t.push(n);
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
      if (Zt >= e.left && Zt <= e.right && Xt >= e.top && Xt <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Zt - ot, r = Xt - it, i = t.left + t.width / 2 - ot + (t.top + t.height / 2) - it + t.width + t.height, a = ot + n * i, s = it + r * i;
        return wn(ot, it, a, s, t.left, t.top, t.left, t.bottom) || wn(ot, it, a, s, t.left, t.top, t.right, t.top) || wn(ot, it, a, s, t.right, t.top, t.right, t.bottom) || wn(ot, it, a, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
typeof document < "u" && typeof window < "u" && (Va ? (document.addEventListener("touchstart", qo, xt ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", jc, xt ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", qo, !0), window.addEventListener("click", Cc, !0)), window.addEventListener("resize", Ic));
function qo(e) {
  for (let t = 0; t < Me.length; t++) {
    const n = Me[t];
    try {
      const r = n.popperNode();
      n.$_mouseDownContains = r.contains(e.target);
    } catch {
    }
  }
}
function Cc(e) {
  Wa(e);
}
function jc(e) {
  Wa(e, !0);
}
function Wa(e, t = !1) {
  const n = {};
  for (let r = Me.length - 1; r >= 0; r--) {
    const o = Me[r];
    try {
      const i = o.$_containsGlobalTarget = Tc(o, e);
      o.$_pendingHide = !1, requestAnimationFrame(() => {
        if (o.$_pendingHide = !1, !n[o.randomId] && Wo(o, i, e)) {
          if (o.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && i) {
            let s = o.parentPopper;
            for (; s; )
              n[s.randomId] = !0, s = s.parentPopper;
            return;
          }
          let a = o.parentPopper;
          for (; a && Wo(a, a.$_containsGlobalTarget, e); ) {
            a.$_handleGlobalClose(e, t);
            a = a.parentPopper;
          }
        }
      });
    } catch {
    }
  }
}
function Tc(e, t) {
  const n = e.popperNode();
  return e.$_mouseDownContains || n.contains(t.target);
}
function Wo(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || Ac(e, n) && !t;
}
function Ac(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function Ic(e) {
  for (let t = 0; t < Me.length; t++)
    Me[t].$_computePosition(e);
}
let ot = 0, it = 0, Zt = 0, Xt = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  ot = Zt, it = Xt, Zt = e.clientX, Xt = e.clientY;
}, xt ? {
  passive: !0
} : void 0);
function wn(e, t, n, r, o, i, a, s) {
  const l = ((a - o) * (t - i) - (s - i) * (e - o)) / ((s - i) * (n - e) - (a - o) * (r - t)), u = ((n - e) * (t - i) - (r - t) * (e - o)) / ((s - i) * (n - e) - (a - o) * (r - t));
  return l >= 0 && l <= 1 && u >= 0 && u <= 1;
}
var ur = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const Dc = {
  extends: qa()
};
function Nc(e, t, n, r, o, i) {
  return _(), w("div", {
    ref: "reference",
    class: Z(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    De(e.$slots, "default", Al(Il(e.slotData)))
  ], 2);
}
var Lc = /* @__PURE__ */ ur(Dc, [["render", Nc]]);
function Mc() {
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
let An;
function Br() {
  Br.init || (Br.init = !0, An = Mc() !== -1);
}
var dr = {
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
    Br(), or(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", An && this.$el.appendChild(e), e.data = "about:blank", An || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!An && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Rc = /* @__PURE__ */ Dl("data-v-b329ee4c");
jl("data-v-b329ee4c");
const Bc = {
  class: "resize-observer",
  tabindex: "-1"
};
Tl();
const Hc = /* @__PURE__ */ Rc((e, t, n, r, o, i) => (_(), ce("div", Bc)));
dr.render = Hc;
dr.__scopeId = "data-v-b329ee4c";
dr.__file = "src/components/ResizeObserver.vue";
var Ka = (e = "theme") => ({
  computed: {
    themeClass() {
      return Ec(this[e]);
    }
  }
});
const Fc = D({
  name: "VPopperContent",
  components: {
    ResizeObserver: dr
  },
  mixins: [
    Ka()
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
}), zc = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Vc = {
  ref: "inner",
  class: "v-popper__inner"
}, Uc = /* @__PURE__ */ h("div", { class: "v-popper__arrow-outer" }, null, -1), qc = /* @__PURE__ */ h("div", { class: "v-popper__arrow-inner" }, null, -1), Wc = [
  Uc,
  qc
];
function Kc(e, t, n, r, o, i) {
  const a = xe("ResizeObserver");
  return _(), w("div", {
    id: e.popperId,
    ref: "popover",
    class: Z(["v-popper__popper", [
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
    style: _r(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Nl((s) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    h("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (s) => e.autoHide && e.$emit("hide"))
    }),
    h("div", {
      class: "v-popper__wrapper",
      style: _r(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      h("div", Vc, [
        e.mounted ? (_(), w(F, { key: 0 }, [
          h("div", null, [
            De(e.$slots, "default")
          ]),
          e.handleResize ? (_(), ce(a, {
            key: 0,
            onNotify: t[1] || (t[1] = (s) => e.$emit("resize", s))
          })) : J("", !0)
        ], 64)) : J("", !0)
      ], 512),
      h("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: _r(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Wc, 4)
    ], 4)
  ], 46, zc);
}
var Ja = /* @__PURE__ */ ur(Fc, [["render", Kc]]), Ga = {
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
const Jc = D({
  name: "VPopperWrapper",
  components: {
    Popper: Lc,
    PopperContent: Ja
  },
  mixins: [
    Ga,
    Ka("finalTheme")
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
function Gc(e, t, n, r, o, i) {
  const a = xe("PopperContent"), s = xe("Popper");
  return _(), ce(s, {
    ref: "popper",
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: Z([
      e.themeClass
    ])
  }, {
    default: pe(({
      popperId: l,
      isShown: u,
      shouldMountContent: c,
      skipTransition: p,
      autoHide: f,
      show: d,
      hide: v,
      handleResize: g,
      onResize: y,
      classes: b,
      result: k
    }) => [
      De(e.$slots, "default", {
        shown: u,
        show: d,
        hide: v
      }),
      B(a, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: u,
        mounted: c,
        "skip-transition": p,
        "auto-hide": f,
        "handle-resize": g,
        classes: b,
        result: k,
        onHide: v,
        onResize: y
      }, {
        default: pe(() => [
          De(e.$slots, "popper", {
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
var vo = /* @__PURE__ */ ur(Jc, [["render", Gc]]);
const Qc = D(vn(qe({}, vo), {
  name: "VDropdown",
  vPopperTheme: "dropdown"
})), Yc = D(vn(qe({}, vo), {
  name: "VMenu",
  vPopperTheme: "menu"
})), Zc = D(vn(qe({}, vo), {
  name: "VTooltip",
  vPopperTheme: "tooltip"
})), Xc = D({
  name: "VTooltipDirective",
  components: {
    Popper: qa(),
    PopperContent: Ja
  },
  mixins: [
    Ga
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => Rt(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => Rt(e.theme, "loadingContent")
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
}), eu = ["innerHTML"], tu = ["textContent"];
function nu(e, t, n, r, o, i) {
  const a = xe("PopperContent"), s = xe("Popper");
  return _(), ce(s, Ml({ ref: "popper" }, e.$attrs, {
    theme: e.theme,
    "popper-node": () => e.$refs.popperContent.$el,
    onApplyShow: e.onShow,
    onApplyHide: e.onHide
  }), {
    default: pe(({
      popperId: l,
      isShown: u,
      shouldMountContent: c,
      skipTransition: p,
      autoHide: f,
      hide: d,
      handleResize: v,
      onResize: g,
      classes: y,
      result: b
    }) => [
      B(a, {
        ref: "popperContent",
        class: Z({
          "v-popper--tooltip-loading": e.loading
        }),
        "popper-id": l,
        theme: e.theme,
        shown: u,
        mounted: c,
        "skip-transition": p,
        "auto-hide": f,
        "handle-resize": v,
        classes: y,
        result: b,
        onHide: d,
        onResize: g
      }, {
        default: pe(() => [
          e.html ? (_(), w("div", {
            key: 0,
            innerHTML: e.finalContent
          }, null, 8, eu)) : (_(), w("div", {
            key: 1,
            textContent: U(e.finalContent)
          }, null, 8, tu))
        ]),
        _: 2
      }, 1032, ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 1
  }, 16, ["theme", "popper-node", "onApplyShow", "onApplyHide"]);
}
var ru = /* @__PURE__ */ ur(Xc, [["render", nu]]);
const Qa = "v-popper--has-tooltip";
function ou(e, t) {
  let n = e.placement;
  if (!n && t)
    for (const r of Ua)
      t[r] && (n = r);
  return n || (n = Rt(e.theme || "tooltip", "placement")), n;
}
function Ya(e, t, n) {
  let r;
  const o = typeof t;
  return o === "string" ? r = { content: t } : t && o === "object" ? r = t : r = { content: !1 }, r.placement = ou(r, n), r.targetNodes = () => [e], r.referenceNode = () => e, r;
}
let xr, on, iu = 0;
function au() {
  if (xr)
    return;
  on = T([]), xr = Ll({
    name: "VTooltipDirectiveApp",
    setup() {
      return {
        directives: on
      };
    },
    render() {
      return this.directives.map((t) => fe(ru, vn(qe({}, t.options), {
        shown: t.shown || t.options.shown,
        key: t.id
      })));
    },
    devtools: {
      hide: !0
    }
  });
  const e = document.createElement("div");
  document.body.appendChild(e), xr.mount(e);
}
function su(e, t, n) {
  au();
  const r = T(Ya(e, t, n)), o = T(!1), i = {
    id: iu++,
    options: r,
    shown: o
  };
  return on.value.push(i), e.classList && e.classList.add(Qa), e.$_popper = {
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
function Za(e) {
  if (e.$_popper) {
    const t = on.value.indexOf(e.$_popper.item);
    t !== -1 && on.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
  }
  e.classList && e.classList.remove(Qa);
}
function Ko(e, { value: t, modifiers: n }) {
  const r = Ya(e, t, n);
  if (!r.content || Rt(r.theme || "tooltip", "disabled"))
    Za(e);
  else {
    let o;
    e.$_popper ? (o = e.$_popper, o.options.value = r) : o = su(e, t, n), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? o.show() : o.hide());
  }
}
var lu = {
  beforeMount: Ko,
  updated: Ko,
  beforeUnmount(e) {
    Za(e);
  }
};
function Jo(e) {
  e.addEventListener("click", Xa), e.addEventListener("touchstart", es, xt ? {
    passive: !0
  } : !1);
}
function Go(e) {
  e.removeEventListener("click", Xa), e.removeEventListener("touchstart", es), e.removeEventListener("touchend", ts), e.removeEventListener("touchcancel", ns);
}
function Xa(e) {
  const t = e.currentTarget;
  e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
}
function es(e) {
  if (e.changedTouches.length === 1) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !0;
    const n = e.changedTouches[0];
    t.$_vclosepopover_touchPoint = n, t.addEventListener("touchend", ts), t.addEventListener("touchcancel", ns);
  }
}
function ts(e) {
  const t = e.currentTarget;
  if (t.$_vclosepopover_touch = !1, e.changedTouches.length === 1) {
    const n = e.changedTouches[0], r = t.$_vclosepopover_touchPoint;
    e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
  }
}
function ns(e) {
  const t = e.currentTarget;
  t.$_vclosepopover_touch = !1;
}
var cu = {
  beforeMount(e, { value: t, modifiers: n }) {
    e.$_closePopoverModifiers = n, (typeof t > "u" || t) && Jo(e);
  },
  updated(e, { value: t, oldValue: n, modifiers: r }) {
    e.$_closePopoverModifiers = r, t !== n && (typeof t > "u" || t ? Jo(e) : Go(e));
  },
  beforeUnmount(e) {
    Go(e);
  }
};
function uu(e, t = {}) {
  e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0, za(Ke, t), e.directive("tooltip", lu), e.directive("close-popper", cu), e.component("VTooltip", Zc), e.component("VDropdown", Qc), e.component("VMenu", Yc));
}
const du = {
  version: "2.0.0-beta.20",
  install: uu,
  options: Ke
};
function Re(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Re), r;
}
var Un = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Un || {}), st = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(st || {});
function be({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...o }) {
  var i;
  let a = fu(r, n), s = Object.assign(o, { props: a });
  if (e || t & 2 && a.static)
    return Or(s);
  if (t & 1) {
    let l = (i = a.unmount) == null || i ? 0 : 1;
    return Re(l, { [0]() {
      return null;
    }, [1]() {
      return Or({ ...o, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Or(s);
}
function Or({ props: e, attrs: t, slots: n, slot: r, name: o }) {
  var i;
  let { as: a, ...s } = go(e, ["unmount", "static"]), l = (i = n.default) == null ? void 0 : i.call(n, r), u = {};
  if (r) {
    let c = !1, p = [];
    for (let [f, d] of Object.entries(r))
      typeof d == "boolean" && (c = !0), d === !0 && p.push(f);
    c && (u["data-headlessui-state"] = p.join(" "));
  }
  if (a === "template") {
    if (l = rs(l != null ? l : []), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...p] = l != null ? l : [];
      if (!hu(c) || p.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((f, d) => f.localeCompare(d)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      return Rl(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return fe(a, Object.assign({}, s, u), { default: () => l });
}
function rs(e) {
  return e.flatMap((t) => t.type === F ? rs(t.children) : [t]);
}
function fu(...e) {
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
      let a = n[r];
      for (let s of a) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        s(o, ...i);
      }
    } });
  return t;
}
function pu(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function go(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function hu(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let mu = 0;
function vu() {
  return ++mu;
}
function et() {
  return vu();
}
var qn = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(qn || {});
function Ie(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let os = Symbol("Context");
var Ot = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ot || {});
function gu() {
  return _o() !== null;
}
function _o() {
  return he(os, null);
}
function _u(e) {
  Be(os, e);
}
function Qo(e, t) {
  if (e)
    return e;
  let n = t != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function yu(e, t) {
  let n = T(Qo(e.value.type, e.value.as));
  return se(() => {
    n.value = Qo(e.value.type, e.value.as);
  }), Oe(() => {
    var r;
    n.value || !Ie(t) || Ie(t) instanceof HTMLButtonElement && !((r = Ie(t)) != null && r.hasAttribute("type")) && (n.value = "button");
  }), n;
}
const fr = typeof window > "u" || typeof document > "u";
function Bt(e) {
  if (fr)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = Ie(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let Hr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var an = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(an || {}), is = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(is || {}), bu = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(bu || {});
function wu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Hr));
}
var as = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(as || {});
function xu(e, t = 0) {
  var n;
  return e === ((n = Bt(e)) == null ? void 0 : n.body) ? !1 : Re(t, { [0]() {
    return e.matches(Hr);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Hr))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
function en(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Ou = ["textarea", "input"].join(",");
function Su(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Ou)) != null ? n : !1;
}
function ku(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null)
      return 0;
    let a = o.compareDocumentPosition(i);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Fr(e, t, n = !0, r = null) {
  var o;
  let i = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? o : document, a = Array.isArray(e) ? n ? ku(e) : e : wu(e);
  r = r != null ? r : i.activeElement;
  let s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, a.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, a.indexOf(r)) + 1;
    if (t & 8)
      return a.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, p = a.length, f;
  do {
    if (c >= p || c + p <= 0)
      return 0;
    let d = l + c;
    if (t & 16)
      d = (d + p) % p;
    else {
      if (d < 0)
        return 3;
      if (d >= p)
        return 1;
    }
    f = a[d], f == null || f.focus(u), c += s;
  } while (f !== i.activeElement);
  return t & 6 && Su(f) && f.select(), f.hasAttribute("tabindex") || f.setAttribute("tabindex", "0"), 2;
}
function Sr(e, t, n) {
  fr || Oe((r) => {
    document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
  });
}
function $u(e, t, n = A(() => !0)) {
  function r(i, a) {
    if (!n.value || i.defaultPrevented)
      return;
    let s = a(i);
    if (s === null || !s.getRootNode().contains(s))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : Ie(u);
      if (c != null && c.contains(s))
        return;
    }
    return !xu(s, as.Loose) && s.tabIndex !== -1 && i.preventDefault(), t(i, s);
  }
  let o = T(null);
  Sr("mousedown", (i) => {
    var a, s;
    n.value && (o.value = ((s = (a = i.composedPath) == null ? void 0 : a.call(i)) == null ? void 0 : s[0]) || i.target);
  }, !0), Sr("click", (i) => {
    !o.value || (r(i, () => o.value), o.value = null);
  }, !0), Sr("blur", (i) => r(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var sn = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(sn || {});
let Wn = D({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: r, ...o } = e, i = { "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return be({ ourProps: i, theirProps: o, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function Pu(e) {
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
function Eu(e, t, n) {
  let r = T(n == null ? void 0 : n.value), o = A(() => e.value !== void 0);
  return [A(() => o.value ? e.value : r.value), function(i) {
    return o.value || (r.value = i), t == null ? void 0 : t(i);
  }];
}
function Cu(e, t, n) {
  fr || Oe((r) => {
    window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
  });
}
var zr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(zr || {});
function ju() {
  let e = T(0);
  return Cu("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function ss(e, t, n, r) {
  fr || Oe((o) => {
    e = e != null ? e : window, e.addEventListener(t, n, r), o(() => e.removeEventListener(t, n, r));
  });
}
function Tu(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var ls = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(ls || {});
let Vt = Object.assign(D({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: T(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = T(null);
  r({ el: o, $el: o });
  let i = A(() => Bt(o));
  Au({ ownerDocument: i }, A(() => Boolean(e.features & 16)));
  let a = Iu({ ownerDocument: i, container: o, initialFocus: A(() => e.initialFocus) }, A(() => Boolean(e.features & 2)));
  Du({ ownerDocument: i, container: o, containers: e.containers, previousActiveElement: a }, A(() => Boolean(e.features & 8)));
  let s = ju();
  function l() {
    let u = Ie(o);
    !u || Re(s.value, { [zr.Forwards]: () => Fr(u, an.First), [zr.Backwards]: () => Fr(u, an.Last) });
  }
  return () => {
    let u = {}, c = { ref: o }, { features: p, initialFocus: f, containers: d, ...v } = e;
    return fe(F, [Boolean(p & 4) && fe(Wn, { as: "button", type: "button", onFocus: l, features: sn.Focusable }), be({ ourProps: c, theirProps: { ...t, ...v }, slot: u, attrs: t, slots: n, name: "FocusTrap" }), Boolean(p & 4) && fe(Wn, { as: "button", type: "button", onFocus: l, features: sn.Focusable })]);
  };
} }), { features: ls });
function Au({ ownerDocument: e }, t) {
  let n = T(null);
  function r() {
    var i;
    n.value || (n.value = (i = e.value) == null ? void 0 : i.activeElement);
  }
  function o() {
    !n.value || (en(n.value), n.value = null);
  }
  se(() => {
    $e(t, (i, a) => {
      i !== a && (i ? r() : o());
    }, { immediate: !0 });
  }), Ze(o);
}
function Iu({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let o = T(null), i = T(!1);
  return se(() => i.value = !0), Ze(() => i.value = !1), se(() => {
    $e([t, n, r], (a, s) => {
      if (a.every((u, c) => (s == null ? void 0 : s[c]) === u) || !r.value)
        return;
      let l = Ie(t);
      !l || Tu(() => {
        var u, c;
        if (!i.value)
          return;
        let p = Ie(n), f = (u = e.value) == null ? void 0 : u.activeElement;
        if (p) {
          if (p === f) {
            o.value = f;
            return;
          }
        } else if (l.contains(f)) {
          o.value = f;
          return;
        }
        p ? en(p) : Fr(l, an.First | an.NoScroll) === is.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), o;
}
function Du({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, o) {
  var i;
  ss((i = e.value) == null ? void 0 : i.defaultView, "focus", (a) => {
    if (!o.value)
      return;
    let s = new Set(n == null ? void 0 : n.value);
    s.add(t);
    let l = r.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? Nu(s, u) ? (r.value = u, en(u)) : (a.preventDefault(), a.stopPropagation(), en(l)) : en(r.value);
  }, !0);
}
function Nu(e, t) {
  var n;
  for (let r of e)
    if ((n = r.value) != null && n.contains(t))
      return !0;
  return !1;
}
let Yo = "body > *", $t = /* @__PURE__ */ new Set(), at = /* @__PURE__ */ new Map();
function Zo(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function Xo(e) {
  let t = at.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Lu(e, t = T(!0)) {
  Oe((n) => {
    if (!t.value || !e.value)
      return;
    let r = e.value, o = Bt(r);
    if (o) {
      $t.add(r);
      for (let i of at.keys())
        i.contains(r) && (Xo(i), at.delete(i));
      o.querySelectorAll(Yo).forEach((i) => {
        if (i instanceof HTMLElement) {
          for (let a of $t)
            if (i.contains(a))
              return;
          $t.size === 1 && (at.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), Zo(i));
        }
      }), n(() => {
        if ($t.delete(r), $t.size > 0)
          o.querySelectorAll(Yo).forEach((i) => {
            if (i instanceof HTMLElement && !at.has(i)) {
              for (let a of $t)
                if (i.contains(a))
                  return;
              at.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), Zo(i);
            }
          });
        else
          for (let i of at.keys())
            Xo(i), at.delete(i);
      });
    }
  });
}
let cs = Symbol("ForcePortalRootContext");
function Mu() {
  return he(cs, !1);
}
let Vr = D({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return Be(cs, e.force), () => {
    let { force: r, ...o } = e;
    return be({ theirProps: o, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function Ru(e) {
  let t = Bt(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n)
    return n;
  let r = t.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(r);
}
let us = D({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let r = T(null), o = A(() => Bt(r)), i = Mu(), a = he(ds, null), s = T(i === !0 || a == null ? Ru(r.value) : a.resolveTarget());
  return Oe(() => {
    i || a != null && (s.value = a.resolveTarget());
  }), Ze(() => {
    var l, u;
    let c = (l = o.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: r, "data-headlessui-portal": "" };
    return fe(Bl, { to: s.value }, be({ ourProps: l, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), ds = Symbol("PortalGroupContext"), Bu = D({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let r = Hl({ resolveTarget() {
    return e.target;
  } });
  return Be(ds, r), () => {
    let { target: o, ...i } = e;
    return be({ theirProps: i, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), fs = Symbol("StackContext");
var Ur = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ur || {});
function Hu() {
  return he(fs, () => {
  });
}
function Fu({ type: e, enabled: t, element: n, onUpdate: r }) {
  let o = Hu();
  function i(...a) {
    r == null || r(...a), o(...a);
  }
  se(() => {
    $e(t, (a, s) => {
      a ? i(0, e, n) : s === !0 && i(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), Ze(() => {
    t.value && i(1, e, n);
  }), Be(fs, i);
}
let ps = Symbol("DescriptionContext");
function zu() {
  let e = he(ps, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function hs({ slot: e = T({}), name: t = "Description", props: n = {} } = {}) {
  let r = T([]);
  function o(i) {
    return r.value.push(i), () => {
      let a = r.value.indexOf(i);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return Be(ps, { register: o, slot: e, name: t, props: n }), A(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
let qg = D({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: n }) {
  let r = zu(), o = `headlessui-description-${et()}`;
  return se(() => Ze(r.register(o))), () => {
    let { name: i = "Description", slot: a = T({}), props: s = {} } = r, l = e, u = { ...Object.entries(s).reduce((c, [p, f]) => Object.assign(c, { [p]: $(f) }), {}), id: o };
    return be({ ourProps: u, theirProps: l, slot: a.value, attrs: t, slots: n, name: i });
  };
} });
function yo() {
  let e = [], t = [], n = { enqueue(r) {
    t.push(r);
  }, addEventListener(r, o, i, a) {
    return r.addEventListener(o, i, a), n.add(() => r.removeEventListener(o, i, a));
  }, requestAnimationFrame(...r) {
    let o = requestAnimationFrame(...r);
    n.add(() => cancelAnimationFrame(o));
  }, nextFrame(...r) {
    n.requestAnimationFrame(() => {
      n.requestAnimationFrame(...r);
    });
  }, setTimeout(...r) {
    let o = setTimeout(...r);
    n.add(() => clearTimeout(o));
  }, add(r) {
    e.push(r);
  }, dispose() {
    for (let r of e.splice(0))
      r();
  }, async workQueue() {
    for (let r of t.splice(0))
      await r();
  } };
  return n;
}
function Vu() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var Uu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Uu || {});
let qr = Symbol("DialogContext");
function gn(e) {
  let t = he(qr, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, gn), n;
  }
  return t;
}
let xn = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", qu = D({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: xn }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  var i;
  let a = T(!1);
  se(() => {
    a.value = !0;
  });
  let s = T(0), l = _o(), u = A(() => e.open === xn && l !== null ? Re(l.value, { [Ot.Open]: !0, [Ot.Closed]: !1 }) : e.open), c = T(/* @__PURE__ */ new Set()), p = T(null), f = T(null), d = A(() => Bt(p));
  if (o({ el: p, $el: p }), !(e.open !== xn || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === xn ? void 0 : e.open}`);
  let v = A(() => a.value && u.value ? 0 : 1), g = A(() => v.value === 0), y = A(() => s.value > 1), b = he(qr, null) !== null, k = A(() => y.value ? "parent" : "leaf");
  Lu(p, A(() => y.value ? g.value : !1)), Fu({ type: "Dialog", enabled: A(() => v.value === 0), element: p, onUpdate: (E, j, C) => {
    if (j === "Dialog")
      return Re(E, { [Ur.Add]() {
        c.value.add(C), s.value += 1;
      }, [Ur.Remove]() {
        c.value.delete(C), s.value -= 1;
      } });
  } });
  let S = hs({ name: "DialogDescription", slot: A(() => ({ open: u.value })) }), x = `headlessui-dialog-${et()}`, P = T(null), M = { titleId: P, panelRef: T(null), dialogState: v, setTitleId(E) {
    P.value !== E && (P.value = E);
  }, close() {
    t("close", !1);
  } };
  return Be(qr, M), $u(() => {
    var E, j, C;
    return [...Array.from((j = (E = d.value) == null ? void 0 : E.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? j : []).filter((R) => !(!(R instanceof HTMLElement) || R.contains(Ie(f)) || M.panelRef.value && R.contains(M.panelRef.value))), (C = M.panelRef.value) != null ? C : p.value];
  }, (E, j) => {
    M.close(), or(() => j == null ? void 0 : j.focus());
  }, A(() => v.value === 0 && !y.value)), ss((i = d.value) == null ? void 0 : i.defaultView, "keydown", (E) => {
    E.defaultPrevented || E.key === qn.Escape && v.value === 0 && (y.value || (E.preventDefault(), E.stopPropagation(), M.close()));
  }), Oe((E) => {
    var j;
    if (v.value !== 0 || b)
      return;
    let C = d.value;
    if (!C)
      return;
    let R = yo();
    function H(ee, le, He) {
      let Ce = ee.style.getPropertyValue(le);
      return Object.assign(ee.style, { [le]: He }), R.add(() => {
        Object.assign(ee.style, { [le]: Ce });
      });
    }
    let Y = C == null ? void 0 : C.documentElement, W = ((j = C.defaultView) != null ? j : window).innerWidth - Y.clientWidth;
    if (H(Y, "overflow", "hidden"), W > 0) {
      let ee = Y.clientWidth - Y.offsetWidth, le = W - ee;
      H(Y, "paddingRight", `${le}px`);
    }
    if (Vu()) {
      let ee = window.pageYOffset;
      H(Y, "position", "fixed"), H(Y, "marginTop", `-${ee}px`), H(Y, "width", "100%"), R.add(() => window.scrollTo(0, ee));
    }
    E(R.dispose);
  }), Oe((E) => {
    if (v.value !== 0)
      return;
    let j = Ie(p);
    if (!j)
      return;
    let C = new IntersectionObserver((R) => {
      for (let H of R)
        H.boundingClientRect.x === 0 && H.boundingClientRect.y === 0 && H.boundingClientRect.width === 0 && H.boundingClientRect.height === 0 && M.close();
    });
    C.observe(j), E(() => C.disconnect());
  }), () => {
    let E = { ...n, ref: p, id: x, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": P.value, "aria-describedby": S.value }, { open: j, initialFocus: C, ...R } = e, H = { open: v.value === 0 };
    return fe(Vr, { force: !0 }, () => [fe(us, () => fe(Bu, { target: p.value }, () => fe(Vr, { force: !1 }, () => fe(Vt, { initialFocus: C, containers: c, features: g.value ? Re(k.value, { parent: Vt.features.RestoreFocus, leaf: Vt.features.All & ~Vt.features.FocusLock }) : Vt.features.None }, () => be({ ourProps: E, theirProps: R, slot: H, attrs: n, slots: r, visible: v.value === 0, features: Un.RenderStrategy | Un.Static, name: "Dialog" }))))), fe(Wn, { features: sn.Hidden, ref: f })]);
  };
} });
D({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: n }) {
  let r = gn("DialogOverlay"), o = `headlessui-dialog-overlay-${et()}`;
  function i(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), r.close());
  }
  return () => be({ ourProps: { id: o, "aria-hidden": !0, onClick: i }, theirProps: e, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
} });
D({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = gn("DialogBackdrop"), i = `headlessui-dialog-backdrop-${et()}`, a = T(null);
  return r({ el: a, $el: a }), se(() => {
    if (o.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: i, ref: a, "aria-hidden": !0 };
    return fe(Vr, { force: !0 }, () => fe(us, () => be({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
let Wu = D({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = gn("DialogPanel"), i = `headlessui-dialog-panel-${et()}`;
  r({ el: o.panelRef, $el: o.panelRef });
  function a(s) {
    s.stopPropagation();
  }
  return () => {
    let s = { id: i, ref: o.panelRef, onClick: a };
    return be({ ourProps: s, theirProps: e, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} });
D({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: n }) {
  let r = gn("DialogTitle"), o = `headlessui-dialog-title-${et()}`;
  return se(() => {
    r.setTitleId(o), Ze(() => r.setTitleId(null));
  }), () => be({ ourProps: { id: o }, theirProps: e, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
} });
let ms = Symbol("LabelContext");
function vs() {
  let e = he(ms, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, vs), t;
  }
  return e;
}
function Ku({ slot: e = {}, name: t = "Label", props: n = {} } = {}) {
  let r = T([]);
  function o(i) {
    return r.value.push(i), () => {
      let a = r.value.indexOf(i);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return Be(ms, { register: o, slot: e, name: t, props: n }), A(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
let Wg = D({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: n }) {
  let r = vs(), o = `headlessui-label-${et()}`;
  return se(() => Ze(r.register(o))), () => {
    let { name: i = "Label", slot: a = {}, props: s = {} } = r, { passive: l, ...u } = e, c = { ...Object.entries(s).reduce((p, [f, d]) => Object.assign(p, { [f]: $(d) }), {}), id: o };
    return l && (delete c.onClick, delete u.onClick), be({ ourProps: c, theirProps: u, slot: a, attrs: n, slots: t, name: i });
  };
} }), gs = Symbol("GroupContext");
D({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let r = T(null), o = Ku({ name: "SwitchLabel", props: { onClick() {
    !r.value || (r.value.click(), r.value.focus({ preventScroll: !0 }));
  } } }), i = hs({ name: "SwitchDescription" });
  return Be(gs, { switchRef: r, labelledby: o, describedby: i }), () => be({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: n, name: "SwitchGroup" });
} });
let Ju = D({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, default: !1 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 } }, inheritAttrs: !1, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  let i = he(gs, null), a = `headlessui-switch-${et()}`, [s, l] = Eu(A(() => e.modelValue), (y) => t("update:modelValue", y), A(() => e.defaultChecked));
  function u() {
    l(!s.value);
  }
  let c = T(null), p = i === null ? c : i.switchRef, f = yu(A(() => ({ as: e.as, type: n.type })), p);
  o({ el: p, $el: p });
  function d(y) {
    y.preventDefault(), u();
  }
  function v(y) {
    y.key === qn.Space ? (y.preventDefault(), u()) : y.key === qn.Enter && Pu(y.currentTarget);
  }
  function g(y) {
    y.preventDefault();
  }
  return () => {
    let { name: y, value: b, ...k } = e, S = { checked: s.value }, x = { id: a, ref: p, role: "switch", type: f.value, tabIndex: 0, "aria-checked": s.value, "aria-labelledby": i == null ? void 0 : i.labelledby.value, "aria-describedby": i == null ? void 0 : i.describedby.value, onClick: d, onKeyup: v, onKeypress: g };
    return fe(F, [y != null && s.value != null ? fe(Wn, pu({ features: sn.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: s.value, name: y, value: b })) : null, be({ ourProps: x, theirProps: { ...n, ...go(k, ["modelValue", "defaultChecked"]) }, slot: S, attrs: n, slots: r, name: "Switch" })]);
  };
} });
function Gu(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function kr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function On(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Wr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Wr || {});
function Qu(e, t) {
  let n = yo();
  if (!e)
    return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e), [i, a] = [r, o].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return i !== 0 ? n.setTimeout(() => t("finished"), i + a) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function ei(e, t, n, r, o, i) {
  let a = yo(), s = i !== void 0 ? Gu(i) : () => {
  };
  return On(e, ...o), kr(e, ...t, ...n), a.nextFrame(() => {
    On(e, ...n), kr(e, ...r), a.add(Qu(e, (l) => (On(e, ...r, ...t), kr(e, ...o), s(l))));
  }), a.add(() => On(e, ...t, ...n, ...r, ...o)), a.add(() => s("cancelled")), a.dispose;
}
function gt(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let bo = Symbol("TransitionContext");
var Yu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Yu || {});
function Zu() {
  return he(bo, null) !== null;
}
function Xu() {
  let e = he(bo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ed() {
  let e = he(wo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let wo = Symbol("NestingContext");
function pr(e) {
  return "children" in e ? pr(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function _s(e) {
  let t = T([]), n = T(!1);
  se(() => n.value = !0), Ze(() => n.value = !1);
  function r(i, a = st.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === i);
    s !== -1 && (Re(a, { [st.Unmount]() {
      t.value.splice(s, 1);
    }, [st.Hidden]() {
      t.value[s].state = "hidden";
    } }), !pr(t) && n.value && (e == null || e()));
  }
  function o(i) {
    let a = t.value.find(({ id: s }) => s === i);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: i, state: "visible" }), () => r(i, st.Unmount);
  }
  return { children: t, register: o, unregister: r };
}
let ys = Un.RenderStrategy, Kr = D({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  if (!Zu() && gu())
    return () => fe(bs, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, r);
  let i = T(null), a = T("visible"), s = A(() => e.unmount ? st.Unmount : st.Hidden);
  o({ el: i, $el: i });
  let { show: l, appear: u } = Xu(), { register: c, unregister: p } = ed(), f = { value: !0 }, d = et(), v = { value: !1 }, g = _s(() => {
    v.value || (a.value = "hidden", p(d), t("afterLeave"));
  });
  se(() => {
    let j = c(d);
    Ze(j);
  }), Oe(() => {
    if (s.value === st.Hidden && !!d) {
      if (l && a.value !== "visible") {
        a.value = "visible";
        return;
      }
      Re(a.value, { hidden: () => p(d), visible: () => c(d) });
    }
  });
  let y = gt(e.enter), b = gt(e.enterFrom), k = gt(e.enterTo), S = gt(e.entered), x = gt(e.leave), P = gt(e.leaveFrom), M = gt(e.leaveTo);
  se(() => {
    Oe(() => {
      if (a.value === "visible") {
        let j = Ie(i);
        if (j instanceof Comment && j.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function E(j) {
    let C = f.value && !u.value, R = Ie(i);
    !R || !(R instanceof HTMLElement) || C || (v.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), j(l.value ? ei(R, y, b, k, S, (H) => {
      v.value = !1, H === Wr.Finished && t("afterEnter");
    }) : ei(R, x, P, M, S, (H) => {
      v.value = !1, H === Wr.Finished && (pr(g) || (a.value = "hidden", p(d), t("afterLeave")));
    })));
  }
  return se(() => {
    $e([l], (j, C, R) => {
      E(R), f.value = !1;
    }, { immediate: !0 });
  }), Be(wo, g), _u(A(() => Re(a.value, { visible: Ot.Open, hidden: Ot.Closed }))), () => {
    let { appear: j, show: C, enter: R, enterFrom: H, enterTo: Y, entered: W, leave: ee, leaveFrom: le, leaveTo: He, ...Ce } = e;
    return be({ theirProps: Ce, ourProps: { ref: i }, slot: {}, slots: r, attrs: n, features: ys, visible: a.value === "visible", name: "TransitionChild" });
  };
} }), td = Kr, bs = D({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r }) {
  let o = _o(), i = A(() => e.show === null && o !== null ? Re(o.value, { [Ot.Open]: !0, [Ot.Closed]: !1 }) : e.show);
  Oe(() => {
    if (![!0, !1].includes(i.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = T(i.value ? "visible" : "hidden"), s = _s(() => {
    a.value = "hidden";
  }), l = T(!0), u = { show: i, appear: A(() => e.appear || !l.value) };
  return se(() => {
    Oe(() => {
      l.value = !1, i.value ? a.value = "visible" : pr(s) || (a.value = "hidden");
    });
  }), Be(wo, s), Be(bo, u), () => {
    let c = go(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p = { unmount: e.unmount };
    return be({ ourProps: { ...p, as: "template" }, theirProps: {}, slot: {}, slots: { ...r, default: () => [fe(td, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...p, ...c }, r.default)] }, attrs: {}, features: ys, visible: a.value === "visible", name: "Transition" });
  };
} });
var ti;
const _n = typeof window < "u", nd = (e) => typeof e == "function", rd = (e) => typeof e == "string", od = () => {
};
_n && ((ti = window == null ? void 0 : window.navigator) == null ? void 0 : ti.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ws(e) {
  return typeof e == "function" ? e() : $(e);
}
function id(e, t) {
  function n(...r) {
    e(() => t.apply(this, r), { fn: t, thisArg: this, args: r });
  }
  return n;
}
const xs = (e) => e();
function ad(e = xs) {
  const t = T(!0);
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
function sd(e) {
  return e;
}
function Os(e) {
  return Fl() ? (zl(e), !0) : !1;
}
function ld(e) {
  return typeof e == "function" ? A(e) : T(e);
}
function Ss(e, t = !0) {
  Ia() ? se(e) : t ? e() : or(e);
}
var ni = Object.getOwnPropertySymbols, cd = Object.prototype.hasOwnProperty, ud = Object.prototype.propertyIsEnumerable, dd = (e, t) => {
  var n = {};
  for (var r in e)
    cd.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ni)
    for (var r of ni(e))
      t.indexOf(r) < 0 && ud.call(e, r) && (n[r] = e[r]);
  return n;
};
function fd(e, t, n = {}) {
  const r = n, {
    eventFilter: o = xs
  } = r, i = dd(r, [
    "eventFilter"
  ]);
  return $e(e, id(o, t), i);
}
var pd = Object.defineProperty, hd = Object.defineProperties, md = Object.getOwnPropertyDescriptors, Kn = Object.getOwnPropertySymbols, ks = Object.prototype.hasOwnProperty, $s = Object.prototype.propertyIsEnumerable, ri = (e, t, n) => t in e ? pd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vd = (e, t) => {
  for (var n in t || (t = {}))
    ks.call(t, n) && ri(e, n, t[n]);
  if (Kn)
    for (var n of Kn(t))
      $s.call(t, n) && ri(e, n, t[n]);
  return e;
}, gd = (e, t) => hd(e, md(t)), _d = (e, t) => {
  var n = {};
  for (var r in e)
    ks.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Kn)
    for (var r of Kn(e))
      t.indexOf(r) < 0 && $s.call(e, r) && (n[r] = e[r]);
  return n;
};
function yd(e, t, n = {}) {
  const r = n, {
    eventFilter: o
  } = r, i = _d(r, [
    "eventFilter"
  ]), { eventFilter: a, pause: s, resume: l, isActive: u } = ad(o);
  return { stop: fd(e, t, gd(vd({}, i), {
    eventFilter: a
  })), pause: s, resume: l, isActive: u };
}
function bd(e) {
  var t;
  const n = ws(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const lt = _n ? window : void 0;
_n && window.document;
_n && window.navigator;
_n && window.location;
function Ps(...e) {
  let t, n, r, o;
  if (rd(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = lt) : [t, n, r, o] = e, !t)
    return od;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], a = () => {
    i.forEach((c) => c()), i.length = 0;
  }, s = (c, p, f) => (c.addEventListener(p, f, o), () => c.removeEventListener(p, f, o)), l = $e(() => bd(t), (c) => {
    a(), c && i.push(...n.flatMap((p) => r.map((f) => s(c, p, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), a();
  };
  return Os(u), u;
}
function wd(e, t = !1) {
  const n = T(), r = () => n.value = Boolean(e());
  return r(), Ss(r, t), n;
}
function xd(e, t = {}) {
  const { window: n = lt } = t, r = wd(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const i = T(!1), a = () => {
    !o || ("removeEventListener" in o ? o.removeEventListener("change", s) : o.removeListener(s));
  }, s = () => {
    !r.value || (a(), o = n.matchMedia(ld(e).value), i.value = o.matches, "addEventListener" in o ? o.addEventListener("change", s) : o.addListener(s));
  };
  return Oe(s), Os(() => a()), i;
}
const Jr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gr = "__vueuse_ssr_handlers__";
Jr[Gr] = Jr[Gr] || {};
const Od = Jr[Gr];
function Es(e, t) {
  return Od[e] || t;
}
function Sd(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var kd = Object.defineProperty, oi = Object.getOwnPropertySymbols, $d = Object.prototype.hasOwnProperty, Pd = Object.prototype.propertyIsEnumerable, ii = (e, t, n) => t in e ? kd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ai = (e, t) => {
  for (var n in t || (t = {}))
    $d.call(t, n) && ii(e, n, t[n]);
  if (oi)
    for (var n of oi(t))
      Pd.call(t, n) && ii(e, n, t[n]);
  return e;
};
const Ed = {
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
function Cs(e, t, n, r = {}) {
  var o;
  const {
    flush: i = "pre",
    deep: a = !0,
    listenToStorageChanges: s = !0,
    writeDefaults: l = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: p = lt,
    eventFilter: f,
    onError: d = (E) => {
      console.error(E);
    }
  } = r, v = (c ? Vl : T)(t);
  if (!n)
    try {
      n = Es("getDefaultStorage", () => {
        var E;
        return (E = lt) == null ? void 0 : E.localStorage;
      })();
    } catch (E) {
      d(E);
    }
  if (!n)
    return v;
  const g = ws(t), y = Sd(g), b = (o = r.serializer) != null ? o : Ed[y], { pause: k, resume: S } = yd(v, () => x(v.value), { flush: i, deep: a, eventFilter: f });
  return p && s && Ps(p, "storage", M), M(), v;
  function x(E) {
    try {
      E == null ? n.removeItem(e) : n.setItem(e, b.write(E));
    } catch (j) {
      d(j);
    }
  }
  function P(E) {
    k();
    try {
      const j = E ? E.newValue : n.getItem(e);
      if (j == null)
        return l && g !== null && n.setItem(e, b.write(g)), g;
      if (!E && u) {
        const C = b.read(j);
        return nd(u) ? u(C, g) : y === "object" && !Array.isArray(C) ? ai(ai({}, g), C) : C;
      } else
        return typeof j != "string" ? j : b.read(j);
    } catch (j) {
      d(j);
    } finally {
      S();
    }
  }
  function M(E) {
    if (!(E && E.storageArea !== n)) {
      if (E && E.key === null) {
        v.value = g;
        return;
      }
      E && E.key !== e || (v.value = P(E));
    }
  }
}
function js(e) {
  return xd("(prefers-color-scheme: dark)", e);
}
var Cd = Object.defineProperty, si = Object.getOwnPropertySymbols, jd = Object.prototype.hasOwnProperty, Td = Object.prototype.propertyIsEnumerable, li = (e, t, n) => t in e ? Cd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ad = (e, t) => {
  for (var n in t || (t = {}))
    jd.call(t, n) && li(e, n, t[n]);
  if (si)
    for (var n of si(t))
      Td.call(t, n) && li(e, n, t[n]);
  return e;
};
function Id(e = {}) {
  const {
    selector: t = "html",
    attribute: n = "class",
    initialValue: r = "auto",
    window: o = lt,
    storage: i,
    storageKey: a = "vueuse-color-scheme",
    listenToStorageChanges: s = !0,
    storageRef: l,
    emitAuto: u
  } = e, c = Ad({
    auto: "",
    light: "light",
    dark: "dark"
  }, e.modes || {}), p = js({ window: o }), f = A(() => p.value ? "dark" : "light"), d = l || (a == null ? T(r) : Cs(a, r, i, { window: o, listenToStorageChanges: s })), v = A({
    get() {
      return d.value === "auto" && !u ? f.value : d.value;
    },
    set(k) {
      d.value = k;
    }
  }), g = Es("updateHTMLAttrs", (k, S, x) => {
    const P = o == null ? void 0 : o.document.querySelector(k);
    if (!!P)
      if (S === "class") {
        const M = x.split(/\s/g);
        Object.values(c).flatMap((E) => (E || "").split(/\s/g)).filter(Boolean).forEach((E) => {
          M.includes(E) ? P.classList.add(E) : P.classList.remove(E);
        });
      } else
        P.setAttribute(S, x);
  });
  function y(k) {
    var S;
    const x = k === "auto" ? f.value : k;
    g(t, n, (S = c[x]) != null ? S : x);
  }
  function b(k) {
    e.onChanged ? e.onChanged(k, y) : y(k);
  }
  return $e(v, b, { flush: "post", immediate: !0 }), u && $e(f, () => b(v.value), { flush: "post" }), Ss(() => b(v.value)), v;
}
var Dd = Object.defineProperty, Nd = Object.defineProperties, Ld = Object.getOwnPropertyDescriptors, ci = Object.getOwnPropertySymbols, Md = Object.prototype.hasOwnProperty, Rd = Object.prototype.propertyIsEnumerable, ui = (e, t, n) => t in e ? Dd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Bd = (e, t) => {
  for (var n in t || (t = {}))
    Md.call(t, n) && ui(e, n, t[n]);
  if (ci)
    for (var n of ci(t))
      Rd.call(t, n) && ui(e, n, t[n]);
  return e;
}, Hd = (e, t) => Nd(e, Ld(t));
function Fd(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: n = "",
    window: r = lt
  } = e, o = Id(Hd(Bd({}, e), {
    onChanged: (s, l) => {
      var u;
      e.onChanged ? (u = e.onChanged) == null || u.call(e, s === "dark") : l(s);
    },
    modes: {
      dark: t,
      light: n
    }
  })), i = js({ window: r });
  return A({
    get() {
      return o.value === "dark";
    },
    set(s) {
      s === i.value ? o.value = "auto" : o.value = s ? "dark" : "light";
    }
  });
}
function zd(e, t, n = {}) {
  const { window: r = lt } = n;
  return Cs(e, t, r == null ? void 0 : r.localStorage, n);
}
var di;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(di || (di = {}));
var Vd = Object.defineProperty, fi = Object.getOwnPropertySymbols, Ud = Object.prototype.hasOwnProperty, qd = Object.prototype.propertyIsEnumerable, pi = (e, t, n) => t in e ? Vd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Wd = (e, t) => {
  for (var n in t || (t = {}))
    Ud.call(t, n) && pi(e, n, t[n]);
  if (fi)
    for (var n of fi(t))
      qd.call(t, n) && pi(e, n, t[n]);
  return e;
};
const Kd = {
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
Wd({
  linear: sd
}, Kd);
function Jd({ window: e = lt } = {}) {
  if (!e)
    return {
      x: T(0),
      y: T(0)
    };
  const t = T(e.pageXOffset), n = T(e.pageYOffset);
  return Ps("scroll", () => {
    t.value = e.pageXOffset, n.value = e.pageYOffset;
  }, {
    capture: !1,
    passive: !0
  }), { x: t, y: n };
}
const Pt = Fd(), Gd = /* @__PURE__ */ h("span", { class: "sr-only" }, "Toggle Dark Mode", -1), Qd = /* @__PURE__ */ h("svg", {
  class: "h-4 w-4 text-gray-500",
  fill: "currentColor",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" })
], -1), Yd = [
  Qd
], Zd = /* @__PURE__ */ h("svg", {
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
], -1), Xd = [
  Zd
], ef = /* @__PURE__ */ D({
  __name: "DarkModeToggle",
  setup(e) {
    return (t, n) => {
      const r = xe("ClientOnly");
      return _(), ce(r, null, {
        default: pe(() => [
          B($(Ju), {
            modelValue: $(Pt),
            "onUpdate:modelValue": n[0] || (n[0] = (o) => Da(Pt) ? Pt.value = o : null),
            class: Z([
              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-white/20 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-transparent dark:bg-white/10"
            ])
          }, {
            default: pe(() => [
              Gd,
              h("span", {
                class: Z([
                  $(Pt) ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                ])
              }, [
                h("span", {
                  class: Z([
                    $(Pt) ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ]),
                  "aria-hidden": "true"
                }, Yd, 2),
                h("span", {
                  class: Z([
                    $(Pt) ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ]),
                  "aria-hidden": "true"
                }, Xd, 2)
              ], 2)
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
}), Ts = Symbol(), hi = "__CURRENT_FLAVOR__";
function tf() {
  var n;
  const e = zd(hi, ""), t = T((n = e.value) != null ? n : void 0);
  return $e(t, () => {
    Ir && t.value && localStorage.setItem(hi, t.value);
  }), {
    value: t,
    set(r) {
      t.value = r;
    }
  };
}
function As() {
  const e = he(Ts);
  if (!e)
    throw new Error("useCurrentFlavor() is called without provider.");
  return e;
}
const nf = { class: "relative flex items-center" }, rf = ["value"], of = /* @__PURE__ */ D({
  __name: "FlavorDropdown",
  setup(e) {
    const { value: t, set: n } = As(), r = [
      { name: "Angular", value: "angular" },
      { name: "Vue", value: "vue" },
      { name: "React", value: "react" },
      { name: "Svelte", value: "svelte" },
      { name: "Plain", value: "plain" }
    ].sort((i, a) => i.value.localeCompare(a.value)), o = A({
      get() {
        return t.value;
      },
      set(i) {
        !i || n(i);
      }
    });
    return (i, a) => {
      const s = xe("ClientOnly");
      return _(), w("div", nf, [
        B(s, null, {
          default: pe(() => [
            Lt(h("select", {
              class: "form-select w-full rounded border border-slate-200 bg-slate-100 px-4 py-2 dark:border-white/20 dark:bg-white/10 dark:text-white",
              "onUpdate:modelValue": a[0] || (a[0] = (l) => Da(o) ? o.value = l : null)
            }, [
              (_(!0), w(F, null, X($(r), (l) => (_(), w("option", {
                value: l.value
              }, U(l.name), 9, rf))), 256))
            ], 512), [
              [Ul, $(o)]
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
function af(e, t) {
  return _(), w("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
    })
  ]);
}
const Is = /#.*$/, sf = /(index)?\.(md|html)$/, lf = typeof window < "u", cf = T(lf ? location.hash : "");
function St(e, t, n = !1) {
  if (t === void 0)
    return !1;
  if (e = mi(`/${e}`), n)
    return new RegExp(t).test(e);
  if (mi(t) !== e)
    return !1;
  const r = t.match(Is);
  return r ? cf.value === r[0] : !0;
}
function mi(e) {
  return decodeURI(e).replace(Is, "").replace(sf, "");
}
function uf(e, t) {
  const n = e.endsWith("/"), r = t.startsWith("/");
  return n && r ? e.slice(0, -1) + t : !n && !r ? `${e}/${t}` : e + t;
}
function yn() {
  const { theme: e, page: t } = Ne(), n = e.value;
  return A(() => {
    var i, a;
    const o = (i = Object.keys(n.sidebar).find((s) => St(t.value.relativePath, s, !0))) != null ? i : "/";
    return (a = n.sidebar[o]) != null ? a : [];
  });
}
function xo(e) {
  const t = [];
  function n(r, o) {
    for (const i of r) {
      const a = { ...i, link: i == null ? void 0 : i.link, parent: o };
      t.push(a), "items" in i && n(i.items, a);
    }
  }
  for (const r of e)
    n(r.items, r);
  return t;
}
const df = {
  key: 0,
  class: "flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700 dark:text-white"
}, ff = { key: 1 }, pf = ["href"], hf = {
  key: 2,
  class: "ml-2 px-2"
}, mf = /* @__PURE__ */ D({
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
    const { page: t } = Ne();
    return (n, r) => {
      var i;
      const o = xe("MobileNavigationItem", !0);
      return _(), w(F, null, [
        e.item.link ? (_(), w("li", ff, [
          h("a", {
            href: e.item.link,
            class: Z([
              "block rounded-md py-2 pr-2 pl-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-white/10",
              $(St)(
                $(t).relativePath,
                e.item.activeMatch || e.item.link,
                !!e.item.activeMatch
              ) ? "font-semibold text-blue-700 dark:text-cyan-400" : "text-gray-700 dark:text-gray-200"
            ])
          }, U(e.item.text), 11, pf)
        ])) : (_(), w("li", df, U(e.item.text), 1)),
        (i = e.item.items) != null && i.length ? (_(), w("ul", hf, [
          (_(!0), w(F, null, X(e.item.items, (a) => (_(), ce(o, { item: a }, null, 8, ["item"]))), 256))
        ])) : J("", !0)
      ], 64);
    };
  }
}), vf = { class: "sticky top-0 dark:-top-px z-10 border-b dark:border-t bg-gray-50 px-4 py-2 dark:border-white/10 dark:bg-gray-900 lg:hidden" }, gf = /* @__PURE__ */ h("span", { class: "ml-2 text-xs" }, "Menu", -1), _f = { class: "fixed inset-0 overflow-hidden" }, yf = { class: "absolute inset-0 overflow-hidden" }, bf = { class: "pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-24" }, wf = { class: "flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl dark:bg-gray-900 dark:shadow-cyan-400/20" }, xf = { class: "relative flex-1 px-4 sm:px-6" }, Of = {
  role: "list",
  class: "space-y-1"
}, Sf = /* @__PURE__ */ D({
  __name: "MobileNavigation",
  setup(e) {
    const t = T(!1), n = pn();
    $e(
      () => n.path,
      () => {
        t.value = !1;
      }
    );
    const r = yn();
    return (o, i) => (_(), w(F, null, [
      h("div", vf, [
        h("button", {
          type: "button",
          class: "flex items-center text-gray-900 dark:text-white",
          onClick: i[0] || (i[0] = (a) => t.value = !0)
        }, [
          B($(af), { class: "h-5 w-5 text-gray-400 dark:text-white/50" }),
          gf
        ])
      ]),
      B($(bs), {
        as: "template",
        show: t.value
      }, {
        default: pe(() => [
          B($(qu), {
            as: "div",
            class: "relative z-20",
            onClose: i[1] || (i[1] = (a) => t.value = !1)
          }, {
            default: pe(() => [
              B($(Kr), {
                as: "div",
                class: "fixed inset-0 bg-gray-200/80 dark:bg-gray-900/70",
                enter: "transition-opacity ease-in-out duration-300",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "transition-opacity ease-in-out duration-300",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }),
              h("div", _f, [
                h("div", yf, [
                  h("div", bf, [
                    B($(Kr), {
                      as: "template",
                      enter: "transform transition ease-in-out duration-300",
                      "enter-from": "-translate-x-full",
                      "enter-to": "translate-x-0",
                      leave: "transform transition ease-in-out duration-300",
                      "leave-from": "translate-x-0",
                      "leave-to": "-translate-x-full"
                    }, {
                      default: pe(() => [
                        B($(Wu), { class: "pointer-events-auto w-screen max-w-md" }, {
                          default: pe(() => [
                            h("div", wf, [
                              h("div", xf, [
                                h("ul", Of, [
                                  (_(!0), w(F, null, X($(r), (a) => (_(), ce(mf, { item: a }, null, 8, ["item"]))), 256))
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), kt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, kf = {}, $f = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-6 w-6"
}, Pf = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
}, null, -1), Ef = [
  Pf
];
function Cf(e, t) {
  return _(), w("svg", $f, Ef);
}
const jf = /* @__PURE__ */ kt(kf, [["render", Cf]]), Tf = {}, Af = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-6 w-6"
}, If = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
}, null, -1), Df = [
  If
];
function Nf(e, t) {
  return _(), w("svg", Af, Df);
}
const Lf = /* @__PURE__ */ kt(Tf, [["render", Nf]]), Mf = {}, Rf = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-6 w-6"
}, Bf = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
}, null, -1), Hf = [
  Bf
];
function Ff(e, t) {
  return _(), w("svg", Rf, Hf);
}
const zf = /* @__PURE__ */ kt(Mf, [["render", Ff]]), Vf = {}, Uf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "h-5 w-5"
}, qf = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
  "clip-rule": "evenodd"
}, null, -1), Wf = [
  qf
];
function Kf(e, t) {
  return _(), w("svg", Uf, Wf);
}
const In = /* @__PURE__ */ kt(Vf, [["render", Kf]]), Jf = {
  key: 0,
  class: "mt-4"
}, Gf = ["innerHTML"], Qf = ["href", "data-current"], Yf = { class: "flex items-center" }, Zf = ["innerHTML"], Xf = /* @__PURE__ */ D({
  __name: "SideBarLink",
  props: {
    item: null,
    depth: { default: 0 }
  },
  setup(e) {
    const t = e, n = {
      file: Lf,
      folder: jf,
      cube: zf,
      chevron_right: In
    }, { page: r, site: o } = Ne(), i = t.item.text, a = p(o.value.base, t.item.link), s = t.item.items, l = A(() => St(r.value.relativePath, t.item.link)), u = t.item.icon && n[t.item.icon], c = T(!!t.item.hideChildren);
    function p(f, d) {
      return d === void 0 || d.startsWith("#") ? d : uf(f, d);
    }
    return (f, d) => {
      var g, y, b;
      const v = xe("SideBarLink", !0);
      return (g = e.item) != null && g.hidden ? J("", !0) : (_(), w("li", Jf, [
        !$(a) && $(i) ? (_(), w("p", {
          key: 0,
          onClick: d[0] || (d[0] = wt((k) => c.value = !c.value, ["prevent"])),
          class: "group mt-6 flex cursor-pointer items-center justify-between py-2 text-sm font-semibold tracking-wide text-slate-900 dark:text-white"
        }, [
          h("span", { innerHTML: $(i) }, null, 8, Gf),
          ((y = e.item) == null ? void 0 : y.collapsible) !== !1 ? (_(), ce(In, {
            key: 0,
            class: Z(["h-5 w-5 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-cyan-300", {
              "rotate-90 transform": !c.value
            }])
          }, null, 8, ["class"])) : J("", !0)
        ])) : (_(), w("a", {
          key: 1,
          href: $(a),
          "data-current": $(l),
          class: Z(["group flex items-center justify-between", {
            "text-blue-500 dark:text-cyan-400": $(l),
            "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300": !$(l)
          }])
        }, [
          h("div", Yf, [
            h("div", {
              class: Z(["absolute left-0.5 h-1.5 w-1.5 rounded-full", {
                "bg-blue-500 dark:bg-cyan-400": $(l),
                "group-hover:bg-slate-400": !$(l)
              }])
            }, null, 2),
            $(u) ? (_(), ce(hn($(u)), {
              key: 0,
              class: "mr-2"
            })) : J("", !0),
            h("span", { innerHTML: $(i) }, null, 8, Zf)
          ]),
          $(s) && ((b = e.item) == null ? void 0 : b.collapsible) !== !1 ? (_(), w("button", {
            key: 0,
            onClick: d[1] || (d[1] = wt((k) => c.value = !c.value, ["prevent"])),
            class: "px-2 py-0.5"
          }, [
            B(In, {
              class: Z(["h-5 w-5 text-slate-400 hover:text-slate-800 dark:hover:text-cyan-300", {
                "rotate-90 transform": !c.value
              }])
            }, null, 8, ["class"])
          ])) : J("", !0)
        ], 10, Qf)),
        $(s) ? Lt((_(), w("ul", {
          key: 2,
          class: Z(["ml-1 pl-4", {
            "border-l-2 border-slate-200 dark:border-slate-700": e.depth === 0
          }])
        }, [
          (_(!0), w(F, null, X($(s), (k) => (_(), ce(v, {
            item: k,
            depth: e.depth + 1
          }, null, 8, ["item", "depth"]))), 256))
        ], 2)), [
          [Bn, !c.value]
        ]) : J("", !0)
      ]));
    };
  }
}), ep = {
  key: 0,
  class: "relative"
}, tp = /* @__PURE__ */ D({
  __name: "SideBar",
  setup(e) {
    const t = yn();
    return (n, r) => $(t).length > 0 ? (_(), w("ul", ep, [
      (_(!0), w(F, null, X($(t), (o) => (_(), ce(Xf, {
        key: o.text,
        item: o
      }, null, 8, ["item"]))), 128))
    ])) : J("", !0);
  }
});
var np = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
const { createElementVNode: rp, openBlock: op, createElementBlock: ip } = Ye;
var ap = function(t, n) {
  return op(), ip("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    rp("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
    })
  ]);
};
const { createElementVNode: sp, openBlock: lp, createElementBlock: cp } = Ye;
var up = function(t, n) {
  return lp(), cp("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    sp("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    })
  ]);
};
const { createElementVNode: dp, openBlock: fp, createElementBlock: pp } = Ye;
var hp = function(t, n) {
  return fp(), pp("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    dp("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 12.75l6 6 9-13.5"
    })
  ]);
};
const { createElementVNode: mp, openBlock: vp, createElementBlock: gp } = Ye;
var _p = function(t, n) {
  return vp(), gp("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    mp("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    })
  ]);
};
const { createElementVNode: yp, openBlock: bp, createElementBlock: wp } = Ye;
var xp = function(t, n) {
  return bp(), wp("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    yp("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
    })
  ]);
};
const { createElementVNode: Op, openBlock: Sp, createElementBlock: kp } = Ye;
var $p = function(t, n) {
  return Sp(), kp("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Op("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
    })
  ]);
};
const { createElementVNode: Pp, openBlock: Ep, createElementBlock: Cp } = Ye;
var jp = function(t, n) {
  return Ep(), Cp("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Pp("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    })
  ]);
}, Tp = ap, Ap = up, Ip = hp, Dp = _p, Np = xp, Lp = $p, Mp = jp;
const Rp = { class: "space-y-3" }, Bp = ["href"], Hp = {
  key: 0,
  class: "rounded border border-slate-300 p-1 text-slate-400 dark:border-slate-300/30 dark:text-slate-300/40"
}, Fp = { class: "ml-3 font-medium leading-6 tracking-wide" }, zp = /* @__PURE__ */ D({
  __name: "SideBarNav",
  setup(e) {
    const t = {
      AcademicCapIcon: Tp,
      DevicePhoneMobileIcon: Mp,
      CubeTransparentIcon: Lp,
      CheckIcon: Ip,
      CodeBracketIcon: Dp,
      CpuChipIcon: Np
    }, { theme: n, page: r } = Ne();
    return (o, i) => (_(), w("ul", Rp, [
      (_(!0), w(F, null, X($(n).nav, (a) => (_(), w("li", null, [
        h("a", {
          href: a.link,
          class: Z([
            "flex items-center",
            $(St)($(r).relativePath, a.activeMatch, !!a.activeMatch) ? "text-blue-500 dark:text-cyan-400" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          ])
        }, [
          a.icon in t ? (_(), w("div", Hp, [
            (_(), ce(hn(t[a.icon]), { class: "h-5 w-5" }))
          ])) : J("", !0),
          h("span", Fp, U(a.text), 1)
        ], 10, Bp)
      ]))), 256))
    ]));
  }
}), Ut = (e = "") => ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).VITE_MAIN_URL + e, Vp = (e = "") => ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).VITE_DOCS_URL + e, Up = (e = "") => ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).VITE_BLOG_URL + e, vi = {
  nav: [
    { text: "Docs", link: Vp() },
    { text: "Blog", link: Up() },
    { text: "Community", link: "https://nativescript.org/discord", target: "blank" },
    { text: "Support", link: Ut("/support") }
  ],
  flyoutNav: [
    {
      text: "Partners",
      link: Ut("/partners"),
      description: "Find partners who can help you with your projects."
    },
    {
      text: "Samples",
      link: Ut("/samples"),
      description: "Browse creative samples of NativeScript user experiences."
    },
    {
      text: "Showcase",
      link: Ut("/showcase"),
      description: "Browse a few production apps submitted by the community."
    },
    {
      text: "Mentoring",
      link: Ut("/mentoring-free-for-beginners"),
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
}, qp = {
  key: 0,
  viewBox: "0 0 532 100",
  xmlns: "http://www.w3.org/2000/svg",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2"
}, Wp = /* @__PURE__ */ Na('<g transform="translate(-362.21733 -1030)"><path fill="none" d="M362.217 1030h531.337v100H362.217z"></path><clipPath id="a"><path d="M362.217 1030h531.337v100H362.217z"></path></clipPath><g clip-path="url(#a)"><g transform="matrix(.09766 0 0 .09766 362.4350256 1030.0000256)"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z" fill="none"></path><clipPath id="b"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z"></path></clipPath><g clip-path="url(#b)"><path fill="#65adf1" d="M0 0h1024v1024H0z"></path><path d="M843 511.864v1.099c0 .256-.195.468-.451.492-33.364 3.123-59.479 30.233-59.479 64.409v136.941c0 9.569-2.01 18.8-5.64 27.229-10.35 24.071-33.84 41.571-61.16 41.571h-69.2l-.48-.601-269.18-337.32v337.921h-69.68c-36.893 0-66.8-29.908-66.8-66.8V577.864c0-34.175-26.115-61.286-59.479-64.409-.256-.024-.451-.236-.451-.492v-1.099c0-.255.194-.467.449-.492 33.245-3.237 59.221-31.021 59.221-65.117v-139.06c0-9.29 1.9-18.15 5.33-26.181 10.18-23.879 33.87-40.62 61.47-40.62h69.66l.28.35 269.18 337.33v-337.68h69.94c36.893 0 66.8 29.908 66.8 66.801v139.06c0 34.096 25.976 61.88 59.222 65.117.254.025.448.237.448.492" fill="#fff" fill-rule="nonzero"></path></g></g><path d="M527.5797 1056.618v49.436h-9.044l-21.556-31.144h-.34v31.144h-10.472v-49.436h9.18l21.352 31.076h.408v-31.076h10.472zM546.5577 1106.734c-3.536 0-6.46-.884-8.84-2.788-2.312-1.836-3.468-4.556-3.468-8.228 0-2.788.612-4.964 1.972-6.528 1.292-1.564 2.992-2.72 5.1-3.468 2.108-.748 4.42-1.224 6.868-1.428 3.196-.34 5.508-.68 6.868-1.02 1.428-.34 2.108-1.156 2.108-2.312v-.136c0-1.564-.476-2.72-1.428-3.604-.952-.816-2.312-1.224-4.08-1.224-1.836 0-3.332.408-4.42 1.224-1.088.748-1.836 1.836-2.176 3.06l-9.52-.816c.68-3.332 2.448-6.052 5.304-8.024 2.788-1.972 6.392-2.992 10.88-2.992 2.72 0 5.304.476 7.684 1.36 2.38.816 4.352 2.176 5.848 4.012 1.428 1.904 2.176 4.284 2.176 7.208v25.024h-9.724v-5.168h-.34c-.884 1.768-2.244 3.128-4.012 4.216-1.836 1.088-4.08 1.632-6.8 1.632zm2.924-7.072c2.244 0 4.148-.68 5.576-1.972 1.428-1.292 2.176-2.924 2.176-4.896v-3.944c-.408.272-1.02.544-1.904.748-.816.204-1.7.408-2.652.544-1.02.136-1.836.272-2.584.408-1.836.204-3.264.748-4.352 1.496-1.156.748-1.7 1.836-1.7 3.332 0 1.428.544 2.448 1.564 3.196 1.02.748 2.312 1.088 3.876 1.088zM595.1267 1068.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936zM601.8247 1106.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM654.9337 1068.994l-12.988 37.06h-11.56l-12.988-37.06h10.88l7.684 26.52h.408l7.684-26.52h10.88zM675.8657 1106.802c-3.808 0-7.072-.816-9.86-2.38-2.72-1.496-4.828-3.74-6.324-6.596-1.496-2.856-2.244-6.256-2.244-10.132 0-3.808.748-7.208 2.244-10.064 1.496-2.856 3.604-5.1 6.256-6.732 2.72-1.632 5.848-2.448 9.52-2.448 3.264 0 6.188.748 8.84 2.108s4.692 3.468 6.256 6.256c1.564 2.788 2.312 6.324 2.312 10.472v2.856h-25.228c0 2.788.748 4.964 2.244 6.596 1.496 1.564 3.604 2.38 6.12 2.38 1.768 0 3.264-.408 4.488-1.088 1.292-.748 2.176-1.836 2.652-3.196l9.52.612c-.748 3.4-2.584 6.188-5.508 8.228-2.924 2.108-6.732 3.128-11.288 3.128zm-8.228-23.052h15.572c0-2.176-.748-4.012-2.108-5.44-1.428-1.428-3.264-2.176-5.508-2.176s-4.148.748-5.576 2.244c-1.496 1.496-2.244 3.264-2.38 5.372zM726.6387 1070.83c-.204-1.972-1.02-3.468-2.516-4.556s-3.468-1.632-5.984-1.632-4.488.544-5.848 1.564c-1.36 1.088-2.04 2.38-2.04 4.012-.068 1.768.68 3.06 2.244 4.012 1.564.884 3.4 1.632 5.576 2.108l4.42 1.02c2.856.68 5.44 1.632 7.616 2.856 2.244 1.224 4.012 2.788 5.304 4.692 1.292 1.904 1.904 4.284 1.904 7.004 0 4.556-1.7 8.16-5.1 10.812-3.332 2.72-8.024 4.012-14.076 4.012-6.052 0-10.812-1.36-14.416-4.08-3.536-2.72-5.372-6.8-5.508-12.104h10.132c.136 2.448 1.156 4.352 2.924 5.576 1.768 1.224 4.012 1.836 6.732 1.836 2.652 0 4.76-.544 6.392-1.632 1.564-1.156 2.38-2.652 2.38-4.42 0-1.7-.748-2.992-2.176-3.876-1.496-.884-3.536-1.7-6.256-2.312l-5.372-1.36c-4.148-1.02-7.48-2.584-9.86-4.76-2.448-2.176-3.604-5.1-3.604-8.704 0-2.992.748-5.644 2.38-7.888 1.632-2.244 3.876-3.944 6.664-5.236 2.856-1.224 6.052-1.836 9.724-1.836 3.604 0 6.868.612 9.588 1.836 2.72 1.292 4.896 3.06 6.392 5.304 1.564 2.176 2.312 4.828 2.38 7.752h-9.996zM760.8987 1106.802c-3.808 0-7.072-.816-9.792-2.448-2.72-1.632-4.828-3.876-6.324-6.732-1.428-2.924-2.176-6.188-2.176-9.996 0-3.74.748-7.14 2.244-9.996 1.496-2.856 3.536-5.1 6.256-6.732 2.72-1.632 5.984-2.448 9.724-2.448 3.264 0 6.052.612 8.5 1.768 2.448 1.224 4.352 2.856 5.78 4.964 1.428 2.108 2.176 4.624 2.312 7.48h-9.656c-.272-1.836-1.02-3.332-2.176-4.488-1.156-1.088-2.72-1.7-4.556-1.7-2.38 0-4.352.952-5.78 2.924-1.428 1.904-2.176 4.624-2.176 8.092 0 3.536.748 6.324 2.176 8.228 1.428 1.972 3.332 2.924 5.78 2.924 1.768 0 3.264-.544 4.42-1.632 1.224-1.02 1.972-2.584 2.312-4.556h9.656c-.136 2.856-.884 5.304-2.244 7.48-1.428 2.176-3.332 3.876-5.712 5.032-2.448 1.224-5.304 1.836-8.568 1.836zM784.0427 1106.054v-37.06h9.996v6.46h.408c.68-2.312 1.768-4.08 3.4-5.236 1.564-1.224 3.4-1.768 5.508-1.768 1.156 0 2.176.136 3.196.34v9.112c-.476-.136-1.156-.272-1.972-.408-.884-.068-1.632-.136-2.38-.136-2.244 0-4.148.748-5.644 2.176-1.428 1.428-2.176 3.264-2.176 5.508v21.012h-10.336zM811.8367 1106.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM830.3347 1119.994v-51h10.2v6.188h.408c.476-1.02 1.156-2.04 1.972-3.06.884-1.02 2.04-1.904 3.4-2.584 1.428-.68 3.128-1.088 5.168-1.088 2.72 0 5.236.748 7.548 2.176 2.244 1.36 4.08 3.468 5.44 6.324 1.36 2.788 2.04 6.324 2.04 10.608 0 4.148-.612 7.616-1.972 10.472-1.36 2.856-3.128 4.964-5.44 6.46-2.244 1.428-4.76 2.176-7.616 2.176-1.972 0-3.672-.34-5.1-1.02-1.36-.612-2.516-1.496-3.4-2.448-.884-1.02-1.564-2.04-2.04-3.06h-.272v19.856h-10.336zm10.064-32.504c0 3.332.68 5.984 2.04 7.956 1.36 2.04 3.332 2.992 5.78 2.992 2.516 0 4.488-.952 5.78-2.992 1.36-2.04 2.04-4.692 2.04-7.956 0-3.196-.68-5.78-1.972-7.82-1.36-1.972-3.264-2.992-5.848-2.992-2.516 0-4.42.952-5.78 2.924-1.36 1.972-2.04 4.624-2.04 7.888zM893.0617 1068.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936z" fill="#65adf1"></path></g></g>', 1), Kp = [
  Wp
], Jp = {
  key: 1,
  viewBox: "0 0 532 100",
  xmlns: "http://www.w3.org/2000/svg",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2"
}, Gp = /* @__PURE__ */ Na('<g transform="translate(-1641.886 -310)"><path fill="none" d="M1642.22 310h531.337v100H1642.22z"></path><clipPath id="a1"><path d="M1642.22 310h531.337v100H1642.22z"></path></clipPath><g clip-path="url(#a1)"><g transform="matrix(.09766 0 0 .09766 1642.4300256 310.0000256)"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z" fill="none"></path><clipPath id="b"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z"></path></clipPath><g clip-path="url(#b)"><path d="M1024 0H0v1024h1024V0zM843 511.86v1.1c0 .26-.19.47-.45.49-33.36 3.13-59.48 30.24-59.48 64.41v136.95c0 9.56-2.01 18.8-5.64 27.23-10.35 24.07-33.84 41.57-61.16 41.57h-69.2l-.48-.6-269.18-337.33v337.93h-69.68c-36.89 0-66.8-29.91-66.8-66.8V577.86c0-34.17-26.11-61.28-59.48-64.41-.25-.02-.45-.23-.45-.49v-1.1c0-.25.19-.46.45-.49 33.24-3.24 59.22-31.02 59.22-65.11V307.19c0-9.29 1.9-18.14 5.33-26.18 10.18-23.88 33.87-40.62 61.47-40.62h69.66l.28.35 269.18 337.34V240.39h69.94c36.89 0 66.8 29.91 66.8 66.8v139.07c0 34.09 25.98 61.87 59.22 65.11.26.03.45.24.45.49z" fill="#fff"></path></g></g><path d="M1807.579 336.618v49.436h-9.044l-21.556-31.144h-.34v31.144h-10.472v-49.436h9.18l21.352 31.076h.408v-31.076h10.472zM1826.557 386.734c-3.536 0-6.46-.884-8.84-2.788-2.312-1.836-3.468-4.556-3.468-8.228 0-2.788.612-4.964 1.972-6.528 1.292-1.564 2.992-2.72 5.1-3.468 2.108-.748 4.42-1.224 6.868-1.428 3.196-.34 5.508-.68 6.868-1.02 1.428-.34 2.108-1.156 2.108-2.312v-.136c0-1.564-.476-2.72-1.428-3.604-.952-.816-2.312-1.224-4.08-1.224-1.836 0-3.332.408-4.42 1.224-1.088.748-1.836 1.836-2.176 3.06l-9.52-.816c.68-3.332 2.448-6.052 5.304-8.024 2.788-1.972 6.392-2.992 10.88-2.992 2.72 0 5.304.476 7.684 1.36 2.38.816 4.352 2.176 5.848 4.012 1.428 1.904 2.176 4.284 2.176 7.208v25.024h-9.724v-5.168h-.34c-.884 1.768-2.244 3.128-4.012 4.216-1.836 1.088-4.08 1.632-6.8 1.632zm2.924-7.072c2.244 0 4.148-.68 5.576-1.972 1.428-1.292 2.176-2.924 2.176-4.896v-3.944c-.408.272-1.02.544-1.904.748-.816.204-1.7.408-2.652.544-1.02.136-1.836.272-2.584.408-1.836.204-3.264.748-4.352 1.496-1.156.748-1.7 1.836-1.7 3.332 0 1.428.544 2.448 1.564 3.196 1.02.748 2.312 1.088 3.876 1.088zM1875.126 348.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936zM1881.824 386.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM1934.933 348.994l-12.988 37.06h-11.56l-12.988-37.06h10.88l7.684 26.52h.408l7.684-26.52h10.88zM1955.865 386.802c-3.808 0-7.072-.816-9.86-2.38-2.72-1.496-4.828-3.74-6.324-6.596-1.496-2.856-2.244-6.256-2.244-10.132 0-3.808.748-7.208 2.244-10.064 1.496-2.856 3.604-5.1 6.256-6.732 2.72-1.632 5.848-2.448 9.52-2.448 3.264 0 6.188.748 8.84 2.108s4.692 3.468 6.256 6.256c1.564 2.788 2.312 6.324 2.312 10.472v2.856h-25.228c0 2.788.748 4.964 2.244 6.596 1.496 1.564 3.604 2.38 6.12 2.38 1.768 0 3.264-.408 4.488-1.088 1.292-.748 2.176-1.836 2.652-3.196l9.52.612c-.748 3.4-2.584 6.188-5.508 8.228-2.924 2.108-6.732 3.128-11.288 3.128zm-8.228-23.052h15.572c0-2.176-.748-4.012-2.108-5.44-1.428-1.428-3.264-2.176-5.508-2.176s-4.148.748-5.576 2.244c-1.496 1.496-2.244 3.264-2.38 5.372zM2006.638 350.83c-.204-1.972-1.02-3.468-2.516-4.556s-3.468-1.632-5.984-1.632-4.488.544-5.848 1.564c-1.36 1.088-2.04 2.38-2.04 4.012-.068 1.768.68 3.06 2.244 4.012 1.564.884 3.4 1.632 5.576 2.108l4.42 1.02c2.856.68 5.44 1.632 7.616 2.856 2.244 1.224 4.012 2.788 5.304 4.692 1.292 1.904 1.904 4.284 1.904 7.004 0 4.556-1.7 8.16-5.1 10.812-3.332 2.72-8.024 4.012-14.076 4.012-6.052 0-10.812-1.36-14.416-4.08-3.536-2.72-5.372-6.8-5.508-12.104h10.132c.136 2.448 1.156 4.352 2.924 5.576 1.768 1.224 4.012 1.836 6.732 1.836 2.652 0 4.76-.544 6.392-1.632 1.564-1.156 2.38-2.652 2.38-4.42 0-1.7-.748-2.992-2.176-3.876-1.496-.884-3.536-1.7-6.256-2.312l-5.372-1.36c-4.148-1.02-7.48-2.584-9.86-4.76-2.448-2.176-3.604-5.1-3.604-8.704 0-2.992.748-5.644 2.38-7.888 1.632-2.244 3.876-3.944 6.664-5.236 2.856-1.224 6.052-1.836 9.724-1.836 3.604 0 6.868.612 9.588 1.836 2.72 1.292 4.896 3.06 6.392 5.304 1.564 2.176 2.312 4.828 2.38 7.752h-9.996zM2040.898 386.802c-3.808 0-7.072-.816-9.792-2.448-2.72-1.632-4.828-3.876-6.324-6.732-1.428-2.924-2.176-6.188-2.176-9.996 0-3.74.748-7.14 2.244-9.996 1.496-2.856 3.536-5.1 6.256-6.732 2.72-1.632 5.984-2.448 9.724-2.448 3.264 0 6.052.612 8.5 1.768 2.448 1.224 4.352 2.856 5.78 4.964 1.428 2.108 2.176 4.624 2.312 7.48h-9.656c-.272-1.836-1.02-3.332-2.176-4.488-1.156-1.088-2.72-1.7-4.556-1.7-2.38 0-4.352.952-5.78 2.924-1.428 1.904-2.176 4.624-2.176 8.092 0 3.536.748 6.324 2.176 8.228 1.428 1.972 3.332 2.924 5.78 2.924 1.768 0 3.264-.544 4.42-1.632 1.224-1.02 1.972-2.584 2.312-4.556h9.656c-.136 2.856-.884 5.304-2.244 7.48-1.428 2.176-3.332 3.876-5.712 5.032-2.448 1.224-5.304 1.836-8.568 1.836zM2064.042 386.054v-37.06h9.996v6.46h.408c.68-2.312 1.768-4.08 3.4-5.236 1.564-1.224 3.4-1.768 5.508-1.768 1.156 0 2.176.136 3.196.34v9.112c-.476-.136-1.156-.272-1.972-.408-.884-.068-1.632-.136-2.38-.136-2.244 0-4.148.748-5.644 2.176-1.428 1.428-2.176 3.264-2.176 5.508v21.012h-10.336zM2091.836 386.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM2110.334 399.994v-51h10.2v6.188h.408c.476-1.02 1.156-2.04 1.972-3.06.884-1.02 2.04-1.904 3.4-2.584 1.428-.68 3.128-1.088 5.168-1.088 2.72 0 5.236.748 7.548 2.176 2.244 1.36 4.08 3.468 5.44 6.324 1.36 2.788 2.04 6.324 2.04 10.608 0 4.148-.612 7.616-1.972 10.472-1.36 2.856-3.128 4.964-5.44 6.46-2.244 1.428-4.76 2.176-7.616 2.176-1.972 0-3.672-.34-5.1-1.02-1.36-.612-2.516-1.496-3.4-2.448-.884-1.02-1.564-2.04-2.04-3.06h-.272v19.856h-10.336zm10.064-32.504c0 3.332.68 5.984 2.04 7.956 1.36 2.04 3.332 2.992 5.78 2.992 2.516 0 4.488-.952 5.78-2.992 1.36-2.04 2.04-4.692 2.04-7.956 0-3.196-.68-5.78-1.972-7.82-1.36-1.972-3.264-2.992-5.848-2.992-2.516 0-4.42.952-5.78 2.924-1.36 1.972-2.04 4.624-2.04 7.888zM2173.061 348.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936z" fill="#fff" fill-rule="nonzero"></path></g></g>', 1), Qp = [
  Gp
], gi = /* @__PURE__ */ D({
  __name: "NativeScriptLogo",
  props: {
    variant: String
  },
  setup(e) {
    return (t, n) => e.variant === "blue" ? (_(), w("svg", qp, Kp)) : (_(), w("svg", Jp, Qp));
  }
});
/*! @docsearch/js 3.2.2 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
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
function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _i(Object(n), !0).forEach(function(r) {
      Yp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _i(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ln(e) {
  return ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ln(e);
}
function Yp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Qr() {
  return Qr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qr.apply(this, arguments);
}
function Zp(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, p = Object.keys(a);
    for (u = 0; u < p.length; u++)
      l = p[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Jn(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, a, s = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (s.push(i.value), !r || s.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, a = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw a;
        }
      }
      return s;
    }
  }(e, t) || Ds(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Gn(e) {
  return function(t) {
    if (Array.isArray(t))
      return Yr(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || Ds(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Ds(e, t) {
  if (e) {
    if (typeof e == "string")
      return Yr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Yr(e, t) : void 0;
  }
}
function Yr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var N, tn, Ns, yi, Ls, Qn = {}, Oo = [], Xp = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function We(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ms(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ze(e, t, n) {
  var r, o, i, a = arguments, s = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 3)
    for (n = [n], i = 3; i < arguments.length; i++)
      n.push(a[i]);
  if (n != null && (s.children = n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return nn(e, s, r, o, null);
}
function nn(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++N.__v : o };
  return N.vnode != null && N.vnode(i), i;
}
function ct(e) {
  return e.children;
}
function Ve(e, t) {
  this.props = e, this.context = t;
}
function cn(e, t) {
  if (t == null)
    return e.__ ? cn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? cn(e) : null;
}
function Rs(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Rs(e);
  }
}
function Zr(e) {
  (!e.__d && (e.__d = !0) && tn.push(e) && !Yn.__r++ || yi !== N.debounceRendering) && ((yi = N.debounceRendering) || Ns)(Yn);
}
function Yn() {
  for (var e; Yn.__r = tn.length; )
    e = tn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), tn = [], e.some(function(t) {
      var n, r, o, i, a, s;
      t.__d && (a = (i = (n = t).__v).__e, (s = n.__P) && (r = [], (o = We({}, i)).__v = i.__v + 1, So(s, i, o, n.__n, s.ownerSVGElement !== void 0, i.__h != null ? [a] : null, r, a == null ? cn(i) : a, i.__h), zs(r, i), i.__e != a && Rs(i)));
    });
}
function Bs(e, t, n, r, o, i, a, s, l, u) {
  var c, p, f, d, v, g, y, b = r && r.__k || Oo, k = b.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((d = n.__k[c] = (d = t[c]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" ? nn(null, d, null, null, d) : Array.isArray(d) ? nn(ct, { children: d }, null, null, null) : d.__b > 0 ? nn(d.type, d.props, d.key, null, d.__v) : d) != null) {
      if (d.__ = n, d.__b = n.__b + 1, (f = b[c]) === null || f && d.key == f.key && d.type === f.type)
        b[c] = void 0;
      else
        for (p = 0; p < k; p++) {
          if ((f = b[p]) && d.key == f.key && d.type === f.type) {
            b[p] = void 0;
            break;
          }
          f = null;
        }
      So(e, d, f = f || Qn, o, i, a, s, l, u), v = d.__e, (p = d.ref) && f.ref != p && (y || (y = []), f.ref && y.push(f.ref, null, d), y.push(p, d.__c || v, d)), v != null ? (g == null && (g = v), typeof d.type == "function" && d.__k != null && d.__k === f.__k ? d.__d = l = Hs(d, l, e) : l = Fs(e, d, f, b, v, l), u || n.type !== "option" ? typeof n.type == "function" && (n.__d = l) : e.value = "") : l && f.__e == l && l.parentNode != e && (l = cn(f));
    }
  for (n.__e = g, c = k; c--; )
    b[c] != null && (typeof n.type == "function" && b[c].__e != null && b[c].__e == n.__d && (n.__d = cn(r, c + 1)), Us(b[c], b[c]));
  if (y)
    for (c = 0; c < y.length; c++)
      Vs(y[c], y[++c], y[++c]);
}
function Hs(e, t, n) {
  var r, o;
  for (r = 0; r < e.__k.length; r++)
    (o = e.__k[r]) && (o.__ = e, t = typeof o.type == "function" ? Hs(o, t, n) : Fs(n, o, o, e.__k, o.__e, t));
  return t;
}
function Je(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
    Je(n, t);
  }) : t.push(e)), t;
}
function Fs(e, t, n, r, o, i) {
  var a, s, l;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || o != i || o.parentNode == null)
    e:
      if (i == null || i.parentNode !== e)
        e.appendChild(o), a = null;
      else {
        for (s = i, l = 0; (s = s.nextSibling) && l < r.length; l += 2)
          if (s == o)
            break e;
        e.insertBefore(o, i), a = i;
      }
  return a !== void 0 ? a : o.nextSibling;
}
function bi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Xp.test(t) ? n : n + "px";
}
function Sn(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || bi(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || bi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? xi : wi, i) : e.removeEventListener(t, i ? xi : wi, i);
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
function wi(e) {
  this.l[e.type + !1](N.event ? N.event(e) : e);
}
function xi(e) {
  this.l[e.type + !0](N.event ? N.event(e) : e);
}
function So(e, t, n, r, o, i, a, s, l) {
  var u, c, p, f, d, v, g, y, b, k, S, x = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, s = t.__e = n.__e, t.__h = null, i = [s]), (u = N.__b) && u(t);
  try {
    e:
      if (typeof x == "function") {
        if (y = t.props, b = (u = x.contextType) && r[u.__c], k = u ? b ? b.props.value : u.__ : r, n.__c ? g = (c = t.__c = n.__c).__ = c.__E : ("prototype" in x && x.prototype.render ? t.__c = c = new x(y, k) : (t.__c = c = new Ve(y, k), c.constructor = x, c.render = th), b && b.sub(c), c.props = y, c.state || (c.state = {}), c.context = k, c.__n = r, p = c.__d = !0, c.__h = []), c.__s == null && (c.__s = c.state), x.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = We({}, c.__s)), We(c.__s, x.getDerivedStateFromProps(y, c.__s))), f = c.props, d = c.state, p)
          x.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (x.getDerivedStateFromProps == null && y !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(y, k), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(y, c.__s, k) === !1 || t.__v === n.__v) {
            c.props = y, c.state = c.__s, t.__v !== n.__v && (c.__d = !1), c.__v = t, t.__e = n.__e, t.__k = n.__k, c.__h.length && a.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(y, c.__s, k), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, d, v);
          });
        }
        c.context = k, c.props = y, c.state = c.__s, (u = N.__r) && u(t), c.__d = !1, c.__v = t, c.__P = e, u = c.render(c.props, c.state, c.context), c.state = c.__s, c.getChildContext != null && (r = We(We({}, r), c.getChildContext())), p || c.getSnapshotBeforeUpdate == null || (v = c.getSnapshotBeforeUpdate(f, d)), S = u != null && u.type === ct && u.key == null ? u.props.children : u, Bs(e, Array.isArray(S) ? S : [S], t, n, r, o, i, a, s, l), c.base = t.__e, t.__h = null, c.__h.length && a.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = eh(n.__e, t, n, r, o, i, a, l);
    (u = N.diffed) && u(t);
  } catch (P) {
    t.__v = null, (l || i != null) && (t.__e = s, t.__h = !!l, i[i.indexOf(s)] = null), N.__e(P, t, n);
  }
}
function zs(e, t) {
  N.__c && N.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      N.__e(r, n.__v);
    }
  });
}
function eh(e, t, n, r, o, i, a, s) {
  var l, u, c, p, f = n.props, d = t.props, v = t.type, g = 0;
  if (v === "svg" && (o = !0), i != null) {
    for (; g < i.length; g++)
      if ((l = i[g]) && (l === e || (v ? l.localName == v : l.nodeType == 3))) {
        e = l, i[g] = null;
        break;
      }
  }
  if (e == null) {
    if (v === null)
      return document.createTextNode(d);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, d.is && d), i = null, s = !1;
  }
  if (v === null)
    f === d || s && e.data === d || (e.data = d);
  else {
    if (i = i && Oo.slice.call(e.childNodes), u = (f = n.props || Qn).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !s) {
      if (i != null)
        for (f = {}, p = 0; p < e.attributes.length; p++)
          f[e.attributes[p].name] = e.attributes[p].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (function(y, b, k, S, x) {
      var P;
      for (P in k)
        P === "children" || P === "key" || P in b || Sn(y, P, null, k[P], S);
      for (P in b)
        x && typeof b[P] != "function" || P === "children" || P === "key" || P === "value" || P === "checked" || k[P] === b[P] || Sn(y, P, b[P], k[P], S);
    }(e, d, f, o, s), c)
      t.__k = [];
    else if (g = t.props.children, Bs(e, Array.isArray(g) ? g : [g], t, n, r, o && v !== "foreignObject", i, a, e.firstChild, s), i != null)
      for (g = i.length; g--; )
        i[g] != null && Ms(i[g]);
    s || ("value" in d && (g = d.value) !== void 0 && (g !== e.value || v === "progress" && !g) && Sn(e, "value", g, f.value, !1), "checked" in d && (g = d.checked) !== void 0 && g !== e.checked && Sn(e, "checked", g, f.checked, !1));
  }
  return e;
}
function Vs(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    N.__e(r, n);
  }
}
function Us(e, t, n) {
  var r, o, i;
  if (N.unmount && N.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Vs(r, null, t)), n || typeof e.type == "function" || (n = (o = e.__e) != null), e.__e = e.__d = void 0, (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (a) {
        N.__e(a, t);
      }
    r.base = r.__P = null;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && Us(r[i], t, n);
  o != null && Ms(o);
}
function th(e, t, n) {
  return this.constructor(e, n);
}
function un(e, t, n) {
  var r, o, i;
  N.__ && N.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], So(t, e = (!r && n || t).__k = ze(ct, null, [e]), o || Qn, Qn, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Oo.slice.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r), zs(i, e);
}
function qs(e, t) {
  un(e, t, qs);
}
function nh(e, t, n) {
  var r, o, i, a = arguments, s = We({}, e.props);
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 3)
    for (n = [n], i = 3; i < arguments.length; i++)
      n.push(a[i]);
  return n != null && (s.children = n), nn(e.type, s, r || e.key, o || e.ref, null);
}
N = { __e: function(e, t) {
  for (var n, r, o; t = t.__; )
    if ((n = t.__c) && !n.__)
      try {
        if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), n.componentDidCatch != null && (n.componentDidCatch(e), o = n.__d), o)
          return n.__E = n;
      } catch (i) {
        e = i;
      }
  throw e;
}, __v: 0 }, Ve.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = We({}, this.state), typeof e == "function" && (e = e(We({}, n), this.props)), e && We(n, e), e != null && this.__v && (t && this.__h.push(t), Zr(this));
}, Ve.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Zr(this));
}, Ve.prototype.render = ct, tn = [], Ns = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Yn.__r = 0, Ls = 0;
var Ht, we, Oi, Nt = 0, Xr = [], Si = N.__b, ki = N.__r, $i = N.diffed, Pi = N.__c, Ei = N.unmount;
function bn(e, t) {
  N.__h && N.__h(we, e, Nt || t), Nt = 0;
  var n = we.__H || (we.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function Ws(e) {
  return Nt = 1, Ks(Gs, e);
}
function Ks(e, t, n) {
  var r = bn(Ht++, 2);
  return r.t = e, r.__c || (r.__ = [n ? n(t) : Gs(void 0, t), function(o) {
    var i = r.t(r.__[0], o);
    r.__[0] !== i && (r.__ = [i, r.__[1]], r.__c.setState({}));
  }], r.__c = we), r.__;
}
function Js(e, t) {
  var n = bn(Ht++, 3);
  !N.__s && ko(n.__H, t) && (n.__ = e, n.__H = t, we.__H.__h.push(n));
}
function Ci(e, t) {
  var n = bn(Ht++, 4);
  !N.__s && ko(n.__H, t) && (n.__ = e, n.__H = t, we.__h.push(n));
}
function $r(e, t) {
  var n = bn(Ht++, 7);
  return ko(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function rh() {
  Xr.forEach(function(e) {
    if (e.__P)
      try {
        e.__H.__h.forEach(Dn), e.__H.__h.forEach(eo), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], N.__e(t, e.__v);
      }
  }), Xr = [];
}
N.__b = function(e) {
  we = null, Si && Si(e);
}, N.__r = function(e) {
  ki && ki(e), Ht = 0;
  var t = (we = e.__c).__H;
  t && (t.__h.forEach(Dn), t.__h.forEach(eo), t.__h = []);
}, N.diffed = function(e) {
  $i && $i(e);
  var t = e.__c;
  t && t.__H && t.__H.__h.length && (Xr.push(t) !== 1 && Oi === N.requestAnimationFrame || ((Oi = N.requestAnimationFrame) || function(n) {
    var r, o = function() {
      clearTimeout(i), ji && cancelAnimationFrame(r), setTimeout(n);
    }, i = setTimeout(o, 100);
    ji && (r = requestAnimationFrame(o));
  })(rh)), we = void 0;
}, N.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Dn), n.__h = n.__h.filter(function(r) {
        return !r.__ || eo(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], N.__e(r, n.__v);
    }
  }), Pi && Pi(e, t);
}, N.unmount = function(e) {
  Ei && Ei(e);
  var t = e.__c;
  if (t && t.__H)
    try {
      t.__H.__.forEach(Dn);
    } catch (n) {
      N.__e(n, t.__v);
    }
};
var ji = typeof requestAnimationFrame == "function";
function Dn(e) {
  var t = we;
  typeof e.__c == "function" && e.__c(), we = t;
}
function eo(e) {
  var t = we;
  e.__c = e.__(), we = t;
}
function ko(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Gs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qs(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function to(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function no(e) {
  this.props = e;
}
(no.prototype = new Ve()).isPureReactComponent = !0, no.prototype.shouldComponentUpdate = function(e, t) {
  return to(this.props, e) || to(this.state, t);
};
var Ti = N.__b;
N.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ti && Ti(e);
};
var oh = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911, Ai = function(e, t) {
  return e == null ? null : Je(Je(e).map(t));
}, ih = { map: Ai, forEach: Ai, count: function(e) {
  return e ? Je(e).length : 0;
}, only: function(e) {
  var t = Je(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: Je }, ah = N.__e;
function Nn() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Ys(e) {
  var t = e.__.__c;
  return t && t.__e && t.__e(e);
}
function Jt() {
  this.u = null, this.o = null;
}
N.__e = function(e, t, n) {
  if (e.then) {
    for (var r, o = t; o = o.__; )
      if ((r = o.__c) && r.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
  }
  ah(e, t, n);
}, (Nn.prototype = new Ve()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = Ys(r.__v), i = !1, a = function() {
    i || (i = !0, n.componentWillUnmount = n.__c, o ? o(s) : s());
  };
  n.__c = n.componentWillUnmount, n.componentWillUnmount = function() {
    a(), n.__c && n.__c();
  };
  var s = function() {
    if (!--r.__u) {
      if (r.state.__e) {
        var u = r.state.__e;
        r.__v.__k[0] = function p(f, d, v) {
          return f && (f.__v = null, f.__k = f.__k && f.__k.map(function(g) {
            return p(g, d, v);
          }), f.__c && f.__c.__P === d && (f.__e && v.insertBefore(f.__e, f.__d), f.__c.__e = !0, f.__c.__P = v)), f;
        }(u, u.__c.__P, u.__c.__O);
      }
      var c;
      for (r.setState({ __e: r.__b = null }); c = r.t.pop(); )
        c.forceUpdate();
    }
  }, l = t.__h === !0;
  r.__u++ || l || r.setState({ __e: r.__b = r.__v.__k[0] }), e.then(a, a);
}, Nn.prototype.componentWillUnmount = function() {
  this.t = [];
}, Nn.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = function i(a, s, l) {
        return a && (a.__c && a.__c.__H && (a.__c.__H.__.forEach(function(u) {
          typeof u.__c == "function" && u.__c();
        }), a.__c.__H = null), (a = Qs({}, a)).__c != null && (a.__c.__P === l && (a.__c.__P = s), a.__c = null), a.__k = a.__k && a.__k.map(function(u) {
          return i(u, s, l);
        })), a;
      }(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__e && ze(ct, null, e.fallback);
  return o && (o.__h = null), [ze(ct, null, t.__e ? null : e.children), o];
};
var Ii = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function sh(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function lh(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    un(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), un(ze(sh, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function Zs(e, t) {
  return ze(lh, { __v: e, i: t });
}
(Jt.prototype = new Ve()).__e = function(e) {
  var t = this, n = Ys(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Ii(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Jt.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Je(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Jt.prototype.componentDidUpdate = Jt.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Ii(e, n, t);
  });
};
var Xs = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ch = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, uh = function(e) {
  return (typeof Symbol < "u" && ln(Symbol()) == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e);
};
function el(e, t, n) {
  return t.__k == null && (t.textContent = ""), un(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
Ve.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Ve.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Di = N.event;
function dh() {
}
function fh() {
  return this.cancelBubble;
}
function ph() {
  return this.defaultPrevented;
}
N.event = function(e) {
  return Di && (e = Di(e)), e.persist = dh, e.isPropagationStopped = fh, e.isDefaultPrevented = ph, e.nativeEvent = e;
};
var tl, Ni = { configurable: !0, get: function() {
  return this.class;
} }, Li = N.vnode;
N.vnode = function(e) {
  var t = e.type, n = e.props, r = n;
  if (typeof t == "string") {
    for (var o in r = {}, n) {
      var i = n[o];
      o === "value" && "defaultValue" in n && i == null || (o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && i === !0 ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !uh(n.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : ch.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i === null && (i = void 0), r[o] = i);
    }
    t == "select" && r.multiple && Array.isArray(r.value) && (r.value = Je(n.children).forEach(function(a) {
      a.props.selected = r.value.indexOf(a.props.value) != -1;
    })), t == "select" && r.defaultValue != null && (r.value = Je(n.children).forEach(function(a) {
      a.props.selected = r.multiple ? r.defaultValue.indexOf(a.props.value) != -1 : r.defaultValue == a.props.value;
    })), e.props = r;
  }
  t && n.class != n.className && (Ni.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", Ni)), e.$$typeof = Xs, Li && Li(e);
};
var Mi = N.__r;
N.__r = function(e) {
  Mi && Mi(e), tl = e.__c;
};
var hh = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return tl.__n[e.__c].props.value;
} } } };
(typeof performance > "u" ? "undefined" : ln(performance)) == "object" && typeof performance.now == "function" && performance.now.bind(performance);
function Ri(e) {
  return !!e && e.$$typeof === Xs;
}
var m = { useState: Ws, useReducer: Ks, useEffect: Js, useLayoutEffect: Ci, useRef: function(e) {
  return Nt = 5, $r(function() {
    return { current: e };
  }, []);
}, useImperativeHandle: function(e, t, n) {
  Nt = 6, Ci(function() {
    typeof e == "function" ? e(t()) : e && (e.current = t());
  }, n == null ? n : n.concat(e));
}, useMemo: $r, useCallback: function(e, t) {
  return Nt = 8, $r(function() {
    return e;
  }, t);
}, useContext: function(e) {
  var t = we.context[e.__c], n = bn(Ht++, 9);
  return n.__c = e, t ? (n.__ == null && (n.__ = !0, t.sub(we)), t.props.value) : e.__;
}, useDebugValue: function(e, t) {
  N.useDebugValue && N.useDebugValue(t ? t(e) : e);
}, version: "16.8.0", Children: ih, render: el, hydrate: function(e, t, n) {
  return qs(e, t), typeof n == "function" && n(), e ? e.__c : null;
}, unmountComponentAtNode: function(e) {
  return !!e.__k && (un(null, e), !0);
}, createPortal: Zs, createElement: ze, createContext: function(e, t) {
  var n = { __c: t = "__cC" + Ls++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(Zr);
    }, this.sub = function(a) {
      o.push(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        o.splice(o.indexOf(a), 1), s && s.call(a);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}, createFactory: function(e) {
  return ze.bind(null, e);
}, cloneElement: function(e) {
  return Ri(e) ? nh.apply(null, arguments) : e;
}, createRef: function() {
  return { current: null };
}, Fragment: ct, isValidElement: Ri, findDOMNode: function(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}, Component: Ve, PureComponent: no, memo: function(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : to(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, ze(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}, forwardRef: function(e) {
  function t(n, r) {
    var o = Qs({}, n);
    return delete o.ref, e(o, (r = n.ref || r) && (ln(r) != "object" || "current" in r) ? r : null);
  }
  return t.$$typeof = oh, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}, unstable_batchedUpdates: function(e, t) {
  return e(t);
}, StrictMode: ct, Suspense: Nn, SuspenseList: Jt, lazy: function(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(a) {
      n = a.default || a;
    }, function(a) {
      r = a;
    }), r)
      throw r;
    if (!n)
      throw t;
    return ze(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hh };
function mh() {
  return m.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, m.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
}
function nl() {
  return m.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
var vh = ["translations"];
function ro() {
  return ro = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ro.apply(this, arguments);
}
function gh(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, a, s = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (s.push(i.value), !r || s.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, a = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw a;
        }
      }
      return s;
    }
  }(e, t) || function(n, r) {
    if (!!n) {
      if (typeof n == "string")
        return Bi(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return Bi(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Bi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function _h(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, p = Object.keys(a);
    for (u = 0; u < p.length; u++)
      l = p[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var yh = m.forwardRef(function(e, t) {
  var n = e.translations, r = n === void 0 ? {} : n, o = _h(e, vh), i = r.buttonText, a = i === void 0 ? "Search" : i, s = r.buttonAriaLabel, l = s === void 0 ? "Search" : s, u = gh(Ws(null), 2), c = u[0], p = u[1];
  return Js(function() {
    typeof navigator < "u" && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? p("\u2318") : p("Ctrl"));
  }, []), m.createElement("button", ro({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": l }, o, { ref: t }), m.createElement("span", { className: "DocSearch-Button-Container" }, m.createElement(nl, null), m.createElement("span", { className: "DocSearch-Button-Placeholder" }, a)), m.createElement("span", { className: "DocSearch-Button-Keys" }, c !== null && m.createElement(m.Fragment, null, m.createElement("kbd", { className: "DocSearch-Button-Key" }, c === "Ctrl" ? m.createElement(mh, null) : c), m.createElement("kbd", { className: "DocSearch-Button-Key" }, "K"))));
});
function bh(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, a, s = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (s.push(i.value), !r || s.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, a = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw a;
        }
      }
      return s;
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
function oo(e) {
  return oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oo(e);
}
function Zn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  if (process.env.NODE_ENV === "production" || !e || oo(e) !== "object")
    return e;
  if (t.has(e))
    return "[Circular]";
  var n = t.add(e);
  return Array.isArray(e) ? e.map(function(r) {
    return Zn(r, n);
  }) : Object.fromEntries(Object.entries(e).map(function(r) {
    var o = bh(r, 2);
    return [o[0], Zn(o[1], n)];
  }));
}
function dn(e) {
  return e.reduce(function(t, n) {
    return t.concat(n);
  }, []);
}
var wh = 0;
function io(e) {
  return e.collections.length === 0 ? 0 : e.collections.reduce(function(t, n) {
    return t + n.items.length;
  }, 0);
}
function fn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e)
    throw new Error("[Autocomplete] ".concat(typeof t == "function" ? t() : t));
}
var rl = function() {
}, xh = [{ segment: "autocomplete-core", version: "1.7.1" }], Fi = { current: {} };
function Oh(e) {
  process.env.NODE_ENV !== "production" && function(t, n) {
    if (process.env.NODE_ENV !== "production" && !t) {
      var r = n.trim();
      Fi.current[r] || (Fi.current[r] = !0, console.warn("[Autocomplete] ".concat(r)));
    }
  }(!e.debug, "The `debug` option is meant for development debugging and should not be used in production.");
}
function Ln(e, t) {
  var n = t;
  return { then: function(r, o) {
    return Ln(e.then(kn(r, n, e), kn(o, n, e)), n);
  }, catch: function(r) {
    return Ln(e.catch(kn(r, n, e)), n);
  }, finally: function(r) {
    return r && n.onCancelList.push(r), Ln(e.finally(kn(r && function() {
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
function zi(e) {
  return Ln(e, { isCanceled: !1, onCancelList: [] });
}
function kn(e, t, n) {
  return e ? function(r) {
    return t.isCanceled ? r : e(r);
  } : n;
}
function Vi(e, t, n, r) {
  if (!n)
    return null;
  if (e < 0 && (t === null || r !== null && t === 0))
    return n + e;
  var o = (t === null ? -1 : t) + e;
  return o <= -1 || o >= n ? r === null ? null : 0 : o;
}
function Ui(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Sh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ao(e) {
  return ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ao(e);
}
function kh(e, t) {
  var n = [];
  return Promise.resolve(e(t)).then(function(r) {
    return fn(Array.isArray(r), function() {
      return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(ao(r)), `:

`).concat(JSON.stringify(Zn(r), null, 2));
    }), Promise.all(r.filter(function(o) {
      return Boolean(o);
    }).map(function(o) {
      if (fn(typeof o.sourceId == "string", "A source must provide a `sourceId` string."), n.includes(o.sourceId))
        throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(o.sourceId), " is not unique."));
      n.push(o.sourceId);
      var i = function(a) {
        for (var s = 1; s < arguments.length; s++) {
          var l = arguments[s] != null ? arguments[s] : {};
          s % 2 ? Ui(Object(l), !0).forEach(function(u) {
            Sh(a, u, l[u]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l)) : Ui(Object(l)).forEach(function(u) {
            Object.defineProperty(a, u, Object.getOwnPropertyDescriptor(l, u));
          });
        }
        return a;
      }({ getItemInputValue: function(a) {
        return a.state.query;
      }, getItemUrl: function() {
      }, onSelect: function(a) {
        (0, a.setIsOpen)(!1);
      }, onActive: rl }, o);
      return Promise.resolve(i);
    }));
  });
}
function At(e) {
  var t = function(o) {
    var i = o.collections.map(function(a) {
      return a.items.length;
    }).reduce(function(a, s, l) {
      var u = (a[l - 1] || 0) + s;
      return a.push(u), a;
    }, []).reduce(function(a, s) {
      return s <= o.activeItemId ? a + 1 : a;
    }, 0);
    return o.collections[i];
  }(e);
  if (!t)
    return null;
  var n = t.items[function(o) {
    for (var i = o.state, a = o.collection, s = !1, l = 0, u = 0; s === !1; ) {
      var c = i.collections[l];
      if (c === a) {
        s = !0;
        break;
      }
      u += c.items.length, l++;
    }
    return i.activeItemId - u;
  }({ state: e, collection: t })], r = t.source;
  return { item: n, itemInputValue: r.getItemInputValue({ item: n, state: e }), itemUrl: r.getItemUrl({ item: n, state: e }), source: r };
}
var $h = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
function qi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $n(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qi(Object(n), !0).forEach(function(r) {
      Ph(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ph(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Wi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Eh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ch(e, t, n) {
  var r, o = t.initialState;
  return { getState: function() {
    return o;
  }, dispatch: function(i, a) {
    var s = function(l) {
      for (var u = 1; u < arguments.length; u++) {
        var c = arguments[u] != null ? arguments[u] : {};
        u % 2 ? Wi(Object(c), !0).forEach(function(p) {
          Eh(l, p, c[p]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : Wi(Object(c)).forEach(function(p) {
          Object.defineProperty(l, p, Object.getOwnPropertyDescriptor(c, p));
        });
      }
      return l;
    }({}, o);
    o = e(o, { type: i, props: t, payload: a }), n({ state: o, prevState: s });
  }, pendingRequests: (r = [], { add: function(i) {
    return r.push(i), i.finally(function() {
      r = r.filter(function(a) {
        return a !== i;
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
function Ki(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ki(Object(n), !0).forEach(function(r) {
      jh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ki(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function jh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Th(e) {
  return function(t) {
    if (Array.isArray(t))
      return Pr(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (!!t) {
      if (typeof t == "string")
        return Pr(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return Pr(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Pr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Ji(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ji(Object(n), !0).forEach(function(r) {
      Ah(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ji(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ah(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Gi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function En(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gi(Object(n), !0).forEach(function(r) {
      ol(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ol(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function so(e) {
  return so = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, so(e);
}
function Ih(e) {
  return function(t) {
    if (Array.isArray(t))
      return Er(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (!!t) {
      if (typeof t == "string")
        return Er(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return Er(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Er(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Qi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qi(Object(n), !0).forEach(function(r) {
      Dh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Dh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Cn(e) {
  return Boolean(e.execute);
}
function Nh(e, t) {
  return n = e, Boolean(n == null ? void 0 : n.execute) ? Yi(Yi({}, e), {}, { requests: e.queries.map(function(r) {
    return { query: r, sourceId: t, transformResponse: e.transformResponse };
  }) }) : { items: e, sourceId: t };
  var n;
}
function Lh(e) {
  var t = e.reduce(function(n, r) {
    if (!Cn(r))
      return n.push(r), n;
    var o = r.searchClient, i = r.execute, a = r.requesterId, s = r.requests, l = n.find(function(p) {
      return Cn(r) && Cn(p) && p.searchClient === o && Boolean(a) && p.requesterId === a;
    });
    if (l) {
      var u;
      (u = l.items).push.apply(u, Ih(s));
    } else {
      var c = { execute: i, requesterId: a, items: s, searchClient: o };
      n.push(c);
    }
    return n;
  }, []).map(function(n) {
    if (!Cn(n))
      return Promise.resolve(n);
    var r = n, o = r.execute, i = r.items;
    return o({ searchClient: r.searchClient, requests: i });
  });
  return Promise.all(t).then(function(n) {
    return dn(n);
  });
}
function Mh(e, t) {
  return t.map(function(n) {
    var r = e.filter(function(s) {
      return s.sourceId === n.sourceId;
    }), o = r.map(function(s) {
      return s.items;
    }), i = r[0].transformResponse, a = i ? i(function(s) {
      var l = s.map(function(u) {
        var c;
        return $n($n({}, u), {}, { hits: (c = u.hits) === null || c === void 0 ? void 0 : c.map(function(p) {
          return $n($n({}, p), {}, { __autocomplete_indexName: u.index, __autocomplete_queryID: u.queryID });
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
    return fn(Array.isArray(a), function() {
      return 'The `getItems` function from source "'.concat(n.sourceId, '" must return an array of items but returned type ').concat(JSON.stringify(so(a)), `:

`).concat(JSON.stringify(Zn(a), null, 2), `.

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`);
    }), fn(a.every(Boolean), 'The `getItems` function from source "'.concat(n.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), `.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`)), { source: n, items: a };
  });
}
var Rh = ["event", "nextState", "props", "query", "refresh", "store"];
function Zi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zi(Object(n), !0).forEach(function(r) {
      Bh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Bh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Hh(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, p = Object.keys(a);
    for (u = 0; u < p.length; u++)
      l = p[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var Xi, Cr, jn, Wt = null, ea = (Xi = -1, Cr = -1, jn = void 0, function(e) {
  var t = ++Xi;
  return Promise.resolve(e).then(function(n) {
    return jn && t < Cr ? jn : (Cr = t, jn = n, n);
  });
});
function Tt(e) {
  var t = e.event, n = e.nextState, r = n === void 0 ? {} : n, o = e.props, i = e.query, a = e.refresh, s = e.store, l = Hh(e, Rh);
  Wt && o.environment.clearTimeout(Wt);
  var u = l.setCollections, c = l.setIsOpen, p = l.setQuery, f = l.setActiveItemId, d = l.setStatus;
  if (p(i), f(o.defaultActiveItemId), !i && o.openOnFocus === !1) {
    var v, g = s.getState().collections.map(function(k) {
      return qt(qt({}, k), {}, { items: [] });
    });
    d("idle"), u(g), c((v = r.isOpen) !== null && v !== void 0 ? v : o.shouldPanelOpen({ state: s.getState() }));
    var y = zi(ea(g).then(function() {
      return Promise.resolve();
    }));
    return s.pendingRequests.add(y);
  }
  d("loading"), Wt = o.environment.setTimeout(function() {
    d("stalled");
  }, o.stallThreshold);
  var b = zi(ea(o.getSources(qt({ query: i, refresh: a, state: s.getState() }, l)).then(function(k) {
    return Promise.all(k.map(function(S) {
      return Promise.resolve(S.getItems(qt({ query: i, refresh: a, state: s.getState() }, l))).then(function(x) {
        return Nh(x, S.sourceId);
      });
    })).then(Lh).then(function(S) {
      return Mh(S, k);
    }).then(function(S) {
      return function(x) {
        var P = x.collections, M = x.props, E = x.state, j = P.reduce(function(C, R) {
          return En(En({}, C), {}, ol({}, R.source.sourceId, En(En({}, R.source), {}, { getItems: function() {
            return dn(R.items);
          } })));
        }, {});
        return dn(M.reshape({ sources: Object.values(j), sourcesBySourceId: j, state: E })).filter(Boolean).map(function(C) {
          return { source: C, items: C.getItems() };
        });
      }({ collections: S, props: o, state: s.getState() });
    });
  }))).then(function(k) {
    var S;
    d("idle"), u(k);
    var x = o.shouldPanelOpen({ state: s.getState() });
    c((S = r.isOpen) !== null && S !== void 0 ? S : o.openOnFocus && !i && x || x);
    var P = At(s.getState());
    if (s.getState().activeItemId !== null && P) {
      var M = P.item, E = P.itemInputValue, j = P.itemUrl, C = P.source;
      C.onActive(qt({ event: t, item: M, itemInputValue: E, itemUrl: j, refresh: a, source: C, state: s.getState() }, l));
    }
  }).finally(function() {
    d("idle"), Wt && o.environment.clearTimeout(Wt);
  });
  return s.pendingRequests.add(b);
}
var Fh = ["event", "props", "refresh", "store"];
function ta(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ta(Object(n), !0).forEach(function(r) {
      zh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ta(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function zh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Vh(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, p = Object.keys(a);
    for (u = 0; u < p.length; u++)
      l = p[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var Uh = ["props", "refresh", "store"], qh = ["inputElement", "formElement", "panelElement"], Wh = ["inputElement"], Kh = ["inputElement", "maxLength"], Jh = ["item", "source"];
function na(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? na(Object(n), !0).forEach(function(r) {
      Gh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : na(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Gh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Kt(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, p = Object.keys(a);
    for (u = 0; u < p.length; u++)
      l = p[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Qh(e) {
  var t = e.props, n = e.refresh, r = e.store, o = Kt(e, Uh);
  return { getEnvironmentProps: function(i) {
    var a = i.inputElement, s = i.formElement, l = i.panelElement;
    function u(c) {
      !r.getState().isOpen && r.pendingRequests.isEmpty() || c.target === a || [s, l].some(function(p) {
        return f = p, d = c.target, f === d || f.contains(d);
        var f, d;
      }) === !1 && (r.dispatch("blur", null), t.debug || r.pendingRequests.cancelAll());
    }
    return ye({ onTouchStart: u, onMouseDown: u, onTouchMove: function(c) {
      r.getState().isOpen !== !1 && a === t.environment.document.activeElement && c.target !== a && a.blur();
    } }, Kt(i, qh));
  }, getRootProps: function(i) {
    return ye({ role: "combobox", "aria-expanded": r.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": r.getState().isOpen ? "".concat(t.id, "-list") : void 0, "aria-labelledby": "".concat(t.id, "-label") }, i);
  }, getFormProps: function(i) {
    return i.inputElement, ye({ action: "", noValidate: !0, role: "search", onSubmit: function(a) {
      var s;
      a.preventDefault(), t.onSubmit(ye({ event: a, refresh: n, state: r.getState() }, o)), r.dispatch("submit", null), (s = i.inputElement) === null || s === void 0 || s.blur();
    }, onReset: function(a) {
      var s;
      a.preventDefault(), t.onReset(ye({ event: a, refresh: n, state: r.getState() }, o)), r.dispatch("reset", null), (s = i.inputElement) === null || s === void 0 || s.focus();
    } }, Kt(i, Wh));
  }, getLabelProps: function(i) {
    return ye({ htmlFor: "".concat(t.id, "-input"), id: "".concat(t.id, "-label") }, i);
  }, getInputProps: function(i) {
    var a;
    function s(g) {
      (t.openOnFocus || Boolean(r.getState().query)) && Tt(ye({ event: g, props: t, query: r.getState().completion || r.getState().query, refresh: n, store: r }, o)), r.dispatch("focus", null);
    }
    var l = i || {}, u = (l.inputElement, l.maxLength), c = u === void 0 ? 512 : u, p = Kt(l, Kh), f = At(r.getState()), d = function(g) {
      return Boolean(g && g.match($h));
    }(((a = t.environment.navigator) === null || a === void 0 ? void 0 : a.userAgent) || ""), v = f != null && f.itemUrl && !d ? "go" : "search";
    return ye({ "aria-autocomplete": "both", "aria-activedescendant": r.getState().isOpen && r.getState().activeItemId !== null ? "".concat(t.id, "-item-").concat(r.getState().activeItemId) : void 0, "aria-controls": r.getState().isOpen ? "".concat(t.id, "-list") : void 0, "aria-labelledby": "".concat(t.id, "-label"), value: r.getState().completion || r.getState().query, id: "".concat(t.id, "-input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: v, spellCheck: "false", autoFocus: t.autoFocus, placeholder: t.placeholder, maxLength: c, type: "search", onChange: function(g) {
      Tt(ye({ event: g, props: t, query: g.currentTarget.value.slice(0, c), refresh: n, store: r }, o));
    }, onKeyDown: function(g) {
      (function(y) {
        var b = y.event, k = y.props, S = y.refresh, x = y.store, P = Vh(y, Fh);
        if (b.key === "ArrowUp" || b.key === "ArrowDown") {
          var M = function() {
            var W = k.environment.document.getElementById("".concat(k.id, "-item-").concat(x.getState().activeItemId));
            W && (W.scrollIntoViewIfNeeded ? W.scrollIntoViewIfNeeded(!1) : W.scrollIntoView(!1));
          }, E = function() {
            var W = At(x.getState());
            if (x.getState().activeItemId !== null && W) {
              var ee = W.item, le = W.itemInputValue, He = W.itemUrl, Ce = W.source;
              Ce.onActive(_t({ event: b, item: ee, itemInputValue: le, itemUrl: He, refresh: S, source: Ce, state: x.getState() }, P));
            }
          };
          b.preventDefault(), x.getState().isOpen === !1 && (k.openOnFocus || Boolean(x.getState().query)) ? Tt(_t({ event: b, props: k, query: x.getState().query, refresh: S, store: x }, P)).then(function() {
            x.dispatch(b.key, { nextActiveItemId: k.defaultActiveItemId }), E(), setTimeout(M, 0);
          }) : (x.dispatch(b.key, {}), E(), M());
        } else if (b.key === "Escape")
          b.preventDefault(), x.dispatch(b.key, null), x.pendingRequests.cancelAll();
        else if (b.key === "Tab")
          x.dispatch("blur", null), x.pendingRequests.cancelAll();
        else if (b.key === "Enter") {
          if (x.getState().activeItemId === null || x.getState().collections.every(function(W) {
            return W.items.length === 0;
          }))
            return void (k.debug || x.pendingRequests.cancelAll());
          b.preventDefault();
          var j = At(x.getState()), C = j.item, R = j.itemInputValue, H = j.itemUrl, Y = j.source;
          if (b.metaKey || b.ctrlKey)
            H !== void 0 && (Y.onSelect(_t({ event: b, item: C, itemInputValue: R, itemUrl: H, refresh: S, source: Y, state: x.getState() }, P)), k.navigator.navigateNewTab({ itemUrl: H, item: C, state: x.getState() }));
          else if (b.shiftKey)
            H !== void 0 && (Y.onSelect(_t({ event: b, item: C, itemInputValue: R, itemUrl: H, refresh: S, source: Y, state: x.getState() }, P)), k.navigator.navigateNewWindow({ itemUrl: H, item: C, state: x.getState() }));
          else if (!b.altKey) {
            if (H !== void 0)
              return Y.onSelect(_t({ event: b, item: C, itemInputValue: R, itemUrl: H, refresh: S, source: Y, state: x.getState() }, P)), void k.navigator.navigate({ itemUrl: H, item: C, state: x.getState() });
            Tt(_t({ event: b, nextState: { isOpen: !1 }, props: k, query: R, refresh: S, store: x }, P)).then(function() {
              Y.onSelect(_t({ event: b, item: C, itemInputValue: R, itemUrl: H, refresh: S, source: Y, state: x.getState() }, P));
            });
          }
        }
      })(ye({ event: g, props: t, refresh: n, store: r }, o));
    }, onFocus: s, onBlur: rl, onClick: function(g) {
      i.inputElement !== t.environment.document.activeElement || r.getState().isOpen || s(g);
    } }, p);
  }, getPanelProps: function(i) {
    return ye({ onMouseDown: function(a) {
      a.preventDefault();
    }, onMouseLeave: function() {
      r.dispatch("mouseleave", null);
    } }, i);
  }, getListProps: function(i) {
    return ye({ role: "listbox", "aria-labelledby": "".concat(t.id, "-label"), id: "".concat(t.id, "-list") }, i);
  }, getItemProps: function(i) {
    var a = i.item, s = i.source, l = Kt(i, Jh);
    return ye({ id: "".concat(t.id, "-item-").concat(a.__autocomplete_id), role: "option", "aria-selected": r.getState().activeItemId === a.__autocomplete_id, onMouseMove: function(u) {
      if (a.__autocomplete_id !== r.getState().activeItemId) {
        r.dispatch("mousemove", a.__autocomplete_id);
        var c = At(r.getState());
        if (r.getState().activeItemId !== null && c) {
          var p = c.item, f = c.itemInputValue, d = c.itemUrl, v = c.source;
          v.onActive(ye({ event: u, item: p, itemInputValue: f, itemUrl: d, refresh: n, source: v, state: r.getState() }, o));
        }
      }
    }, onMouseDown: function(u) {
      u.preventDefault();
    }, onClick: function(u) {
      var c = s.getItemInputValue({ item: a, state: r.getState() }), p = s.getItemUrl({ item: a, state: r.getState() });
      (p ? Promise.resolve() : Tt(ye({ event: u, nextState: { isOpen: !1 }, props: t, query: c, refresh: n, store: r }, o))).then(function() {
        s.onSelect(ye({ event: u, item: a, itemInputValue: c, itemUrl: p, refresh: n, source: s, state: r.getState() }, o));
      });
    } }, l);
  } };
}
function ra(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ra(Object(n), !0).forEach(function(r) {
      il(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ra(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function il(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Zh(e) {
  var t, n, r, o, i = e.plugins, a = e.options, s = (t = (((n = a.__autocomplete_metadata) === null || n === void 0 ? void 0 : n.userAgents) || [])[0]) === null || t === void 0 ? void 0 : t.segment, l = s ? il({}, s, Object.keys(((r = a.__autocomplete_metadata) === null || r === void 0 ? void 0 : r.options) || {})) : {};
  return { plugins: i.map(function(u) {
    return { name: u.name, options: Object.keys(u.__autocomplete_pluginOptions || []) };
  }), options: Yh({ "autocomplete-core": Object.keys(a) }, l), ua: xh.concat(((o = a.__autocomplete_metadata) === null || o === void 0 ? void 0 : o.userAgents) || []) };
}
function oa(e) {
  var t, n = e.state;
  return n.isOpen === !1 || n.activeItemId === null ? null : ((t = At(n)) === null || t === void 0 ? void 0 : t.itemInputValue) || null;
}
function ia(e, t) {
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
    t % 2 ? ia(Object(n), !0).forEach(function(r) {
      Xh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ia(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Xh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var e0 = function(e, t) {
  switch (t.type) {
    case "setActiveItemId":
    case "mousemove":
      return q(q({}, e), {}, { activeItemId: t.payload });
    case "setQuery":
      return q(q({}, e), {}, { query: t.payload, completion: null });
    case "setCollections":
      return q(q({}, e), {}, { collections: t.payload });
    case "setIsOpen":
      return q(q({}, e), {}, { isOpen: t.payload });
    case "setStatus":
      return q(q({}, e), {}, { status: t.payload });
    case "setContext":
      return q(q({}, e), {}, { context: q(q({}, e.context), t.payload) });
    case "ArrowDown":
      var n = q(q({}, e), {}, { activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : Vi(1, e.activeItemId, io(e), t.props.defaultActiveItemId) });
      return q(q({}, n), {}, { completion: oa({ state: n }) });
    case "ArrowUp":
      var r = q(q({}, e), {}, { activeItemId: Vi(-1, e.activeItemId, io(e), t.props.defaultActiveItemId) });
      return q(q({}, r), {}, { completion: oa({ state: r }) });
    case "Escape":
      return e.isOpen ? q(q({}, e), {}, { activeItemId: null, isOpen: !1, completion: null }) : q(q({}, e), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
    case "submit":
      return q(q({}, e), {}, { activeItemId: null, isOpen: !1, status: "idle" });
    case "reset":
      return q(q({}, e), {}, { activeItemId: t.props.openOnFocus === !0 ? t.props.defaultActiveItemId : null, status: "idle", query: "" });
    case "focus":
      return q(q({}, e), {}, { activeItemId: t.props.defaultActiveItemId, isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({ state: e }) });
    case "blur":
      return t.props.debug ? e : q(q({}, e), {}, { isOpen: !1, activeItemId: null });
    case "mouseleave":
      return q(q({}, e), {}, { activeItemId: t.props.defaultActiveItemId });
    default:
      return fn(!1, "The reducer action ".concat(JSON.stringify(t.type), " is not supported.")), e;
  }
};
function aa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? aa(Object(n), !0).forEach(function(r) {
      t0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : aa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function t0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function n0(e) {
  Oh(e);
  var t = [], n = function(s, l) {
    var u, c = typeof window < "u" ? window : {}, p = s.plugins || [];
    return Et(Et({ debug: !1, openOnFocus: !1, placeholder: "", autoFocus: !1, defaultActiveItemId: null, stallThreshold: 300, environment: c, shouldPanelOpen: function(f) {
      return io(f.state) > 0;
    }, reshape: function(f) {
      return f.sources;
    } }, s), {}, { id: (u = s.id) !== null && u !== void 0 ? u : "autocomplete-".concat(wh++), plugins: p, initialState: Et({ activeItemId: null, query: "", completion: null, collections: [], isOpen: !1, status: "idle", context: {} }, s.initialState), onStateChange: function(f) {
      var d;
      (d = s.onStateChange) === null || d === void 0 || d.call(s, f), p.forEach(function(v) {
        var g;
        return (g = v.onStateChange) === null || g === void 0 ? void 0 : g.call(v, f);
      });
    }, onSubmit: function(f) {
      var d;
      (d = s.onSubmit) === null || d === void 0 || d.call(s, f), p.forEach(function(v) {
        var g;
        return (g = v.onSubmit) === null || g === void 0 ? void 0 : g.call(v, f);
      });
    }, onReset: function(f) {
      var d;
      (d = s.onReset) === null || d === void 0 || d.call(s, f), p.forEach(function(v) {
        var g;
        return (g = v.onReset) === null || g === void 0 ? void 0 : g.call(v, f);
      });
    }, getSources: function(f) {
      return Promise.all([].concat(Th(p.map(function(d) {
        return d.getSources;
      })), [s.getSources]).filter(Boolean).map(function(d) {
        return kh(d, f);
      })).then(function(d) {
        return dn(d);
      }).then(function(d) {
        return d.map(function(v) {
          return Et(Et({}, v), {}, { onSelect: function(g) {
            v.onSelect(g), l.forEach(function(y) {
              var b;
              return (b = y.onSelect) === null || b === void 0 ? void 0 : b.call(y, g);
            });
          }, onActive: function(g) {
            v.onActive(g), l.forEach(function(y) {
              var b;
              return (b = y.onActive) === null || b === void 0 ? void 0 : b.call(y, g);
            });
          } });
        });
      });
    }, navigator: Et({ navigate: function(f) {
      var d = f.itemUrl;
      c.location.assign(d);
    }, navigateNewTab: function(f) {
      var d = f.itemUrl, v = c.open(d, "_blank", "noopener");
      v == null || v.focus();
    }, navigateNewWindow: function(f) {
      var d = f.itemUrl;
      c.open(d, "_blank", "noopener");
    } }, s.navigator) });
  }(e, t), r = Ch(e0, n, function(s) {
    var l = s.prevState, u = s.state;
    n.onStateChange(yt({ prevState: l, state: u, refresh: a }, o));
  }), o = function(s) {
    var l = s.store;
    return { setActiveItemId: function(u) {
      l.dispatch("setActiveItemId", u);
    }, setQuery: function(u) {
      l.dispatch("setQuery", u);
    }, setCollections: function(u) {
      var c = 0, p = u.map(function(f) {
        return Pn(Pn({}, f), {}, { items: dn(f.items).map(function(d) {
          return Pn(Pn({}, d), {}, { __autocomplete_id: c++ });
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
  }({ store: r }), i = Qh(yt({ props: n, refresh: a, store: r }, o));
  function a() {
    return Tt(yt({ event: new Event("input"), nextState: { isOpen: r.getState().isOpen }, props: n, query: r.getState().query, refresh: a, store: r }, o));
  }
  return n.plugins.forEach(function(s) {
    var l;
    return (l = s.subscribe) === null || l === void 0 ? void 0 : l.call(s, yt(yt({}, o), {}, { refresh: a, onSelect: function(u) {
      t.push({ onSelect: u });
    }, onActive: function(u) {
      t.push({ onActive: u });
    } }));
  }), function(s) {
    var l, u, c = s.metadata, p = s.environment;
    if (!((l = p.navigator) === null || l === void 0 || (u = l.userAgent) === null || u === void 0) && u.includes("Algolia Crawler")) {
      var f = p.document.createElement("meta"), d = p.document.querySelector("head");
      f.name = "algolia:metadata", setTimeout(function() {
        f.content = JSON.stringify(c), d.appendChild(f);
      }, 0);
    }
  }({ metadata: Zh({ plugins: n.plugins, options: e }), environment: n.environment }), yt(yt({ refresh: a }, i), o);
}
function r0(e) {
  var t = e.translations, n = (t === void 0 ? {} : t).searchByText, r = n === void 0 ? "Search by" : n;
  return m.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, m.createElement("span", { className: "DocSearch-Label" }, r), m.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, m.createElement("defs", null, m.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), m.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), m.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), m.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), m.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), m.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), m.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), m.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), m.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), m.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
}
function Tn(e) {
  return m.createElement("svg", { width: "15", height: "15", "aria-label": e.ariaLabel, role: "img" }, m.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e.children));
}
function o0(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = n.selectText, o = r === void 0 ? "to select" : r, i = n.selectKeyAriaLabel, a = i === void 0 ? "Enter key" : i, s = n.navigateText, l = s === void 0 ? "to navigate" : s, u = n.navigateUpKeyAriaLabel, c = u === void 0 ? "Arrow up" : u, p = n.navigateDownKeyAriaLabel, f = p === void 0 ? "Arrow down" : p, d = n.closeText, v = d === void 0 ? "to close" : d, g = n.closeKeyAriaLabel, y = g === void 0 ? "Escape key" : g, b = n.searchByText, k = b === void 0 ? "Search by" : b;
  return m.createElement(m.Fragment, null, m.createElement("div", { className: "DocSearch-Logo" }, m.createElement(r0, { translations: { searchByText: k } })), m.createElement("ul", { className: "DocSearch-Commands" }, m.createElement("li", null, m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(Tn, { ariaLabel: a }, m.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), m.createElement("span", { className: "DocSearch-Label" }, o)), m.createElement("li", null, m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(Tn, { ariaLabel: f }, m.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(Tn, { ariaLabel: c }, m.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), m.createElement("span", { className: "DocSearch-Label" }, l)), m.createElement("li", null, m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(Tn, { ariaLabel: y }, m.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), m.createElement("span", { className: "DocSearch-Label" }, v))));
}
function i0(e) {
  var t = e.hit, n = e.children;
  return m.createElement("a", { href: t.url }, n);
}
function a0() {
  return m.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, m.createElement("g", { fill: "none", fillRule: "evenodd" }, m.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, m.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), m.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, m.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
}
function s0() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), m.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
}
function lo() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function l0() {
  return m.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), m.createElement("path", { d: "M8 17l-6-6 6-6" })));
}
var c0 = function() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
};
function u0(e) {
  switch (e.type) {
    case "lvl1":
      return m.createElement(c0, null);
    case "content":
      return m.createElement(f0, null);
    default:
      return m.createElement(d0, null);
  }
}
function d0() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function f0() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function sa() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function p0() {
  return m.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
}
function h0() {
  return m.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
}
function m0(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = n.titleText, o = r === void 0 ? "Unable to fetch results" : r, i = n.helpText, a = i === void 0 ? "You might want to check your network connection." : i;
  return m.createElement("div", { className: "DocSearch-ErrorScreen" }, m.createElement("div", { className: "DocSearch-Screen-Icon" }, m.createElement(p0, null)), m.createElement("p", { className: "DocSearch-Title" }, o), m.createElement("p", { className: "DocSearch-Help" }, a));
}
var v0 = ["translations"];
function g0(e) {
  return function(t) {
    if (Array.isArray(t))
      return jr(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (!!t) {
      if (typeof t == "string")
        return jr(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return jr(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function jr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function _0(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, p = Object.keys(a);
    for (u = 0; u < p.length; u++)
      l = p[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function y0(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = _0(e, v0), o = n.noResultsText, i = o === void 0 ? "No results for" : o, a = n.suggestedQueryText, s = a === void 0 ? "Try searching for" : a, l = n.reportMissingResultsText, u = l === void 0 ? "Believe this query should return results?" : l, c = n.reportMissingResultsLinkText, p = c === void 0 ? "Let us know." : c, f = r.state.context.searchSuggestions;
  return m.createElement("div", { className: "DocSearch-NoResults" }, m.createElement("div", { className: "DocSearch-Screen-Icon" }, m.createElement(h0, null)), m.createElement("p", { className: "DocSearch-Title" }, i, ' "', m.createElement("strong", null, r.state.query), '"'), f && f.length > 0 && m.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, m.createElement("p", { className: "DocSearch-Help" }, s, ":"), m.createElement("ul", null, f.slice(0, 3).reduce(function(d, v) {
    return [].concat(g0(d), [m.createElement("li", { key: v }, m.createElement("button", { className: "DocSearch-Prefill", key: v, type: "button", onClick: function() {
      r.setQuery(v.toLowerCase() + " "), r.refresh(), r.inputRef.current.focus();
    } }, v))]);
  }, []))), r.getMissingResultsUrl && m.createElement("p", { className: "DocSearch-Help" }, "".concat(u, " "), m.createElement("a", { href: r.getMissingResultsUrl({ query: r.state.query }), target: "_blank", rel: "noopener noreferrer" }, p)));
}
var b0 = ["hit", "attribute", "tagName"];
function la(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ca(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? la(Object(n), !0).forEach(function(r) {
      w0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : la(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function w0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function x0(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, p = Object.keys(a);
    for (u = 0; u < p.length; u++)
      l = p[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function ua(e, t) {
  return t.split(".").reduce(function(n, r) {
    return n != null && n[r] ? n[r] : null;
  }, e);
}
function Ct(e) {
  var t = e.hit, n = e.attribute, r = e.tagName;
  return ze(r === void 0 ? "span" : r, ca(ca({}, x0(e, b0)), {}, { dangerouslySetInnerHTML: { __html: ua(t, "_snippetResult.".concat(n, ".value")) || ua(t, n) } }));
}
function da(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, a, s = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (s.push(i.value), !r || s.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, a = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw a;
        }
      }
      return s;
    }
  }(e, t) || function(n, r) {
    if (!!n) {
      if (typeof n == "string")
        return fa(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return fa(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function fa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Xn() {
  return Xn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xn.apply(this, arguments);
}
function co(e) {
  return e.collection && e.collection.items.length !== 0 ? m.createElement("section", { className: "DocSearch-Hits" }, m.createElement("div", { className: "DocSearch-Hit-source" }, e.title), m.createElement("ul", e.getListProps(), e.collection.items.map(function(t, n) {
    return m.createElement(O0, Xn({ key: [e.title, t.objectID].join(":"), item: t, index: n }, e));
  }))) : null;
}
function O0(e) {
  var t = e.item, n = e.index, r = e.renderIcon, o = e.renderAction, i = e.getItemProps, a = e.onItemClick, s = e.collection, l = e.hitComponent, u = da(m.useState(!1), 2), c = u[0], p = u[1], f = da(m.useState(!1), 2), d = f[0], v = f[1], g = m.useRef(null), y = l;
  return m.createElement("li", Xn({ className: ["DocSearch-Hit", t.__docsearch_parent && "DocSearch-Hit--Child", c && "DocSearch-Hit--deleting", d && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
    g.current && g.current();
  } }, i({ item: t, source: s.source, onClick: function() {
    a(t);
  } })), m.createElement(y, { hit: t }, m.createElement("div", { className: "DocSearch-Hit-Container" }, r({ item: t, index: n }), t.hierarchy[t.type] && t.type === "lvl1" && m.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, m.createElement(Ct, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.lvl1" }), t.content && m.createElement(Ct, { className: "DocSearch-Hit-path", hit: t, attribute: "content" })), t.hierarchy[t.type] && (t.type === "lvl2" || t.type === "lvl3" || t.type === "lvl4" || t.type === "lvl5" || t.type === "lvl6") && m.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, m.createElement(Ct, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.".concat(t.type) }), m.createElement(Ct, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })), t.type === "content" && m.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, m.createElement(Ct, { className: "DocSearch-Hit-title", hit: t, attribute: "content" }), m.createElement(Ct, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })), o({ item: t, runDeleteTransition: function(b) {
    p(!0), g.current = b;
  }, runFavoriteTransition: function(b) {
    v(!0), g.current = b;
  } }))));
}
function pa(e, t) {
  return e.reduce(function(n, r) {
    var o = t(r);
    return n.hasOwnProperty(o) || (n[o] = []), n[o].length < 5 && n[o].push(r), n;
  }, {});
}
function ha(e) {
  return e;
}
function S0() {
}
var al = /(<mark>|<\/mark>)/g, k0 = RegExp(al.source);
function sl(e) {
  var t, n, r, o, i, a = e;
  if (!a.__docsearch_parent && !e._highlightResult)
    return e.hierarchy.lvl0;
  var s = ((a.__docsearch_parent ? (t = a.__docsearch_parent) === null || t === void 0 || (n = t._highlightResult) === null || n === void 0 || (r = n.hierarchy) === null || r === void 0 ? void 0 : r.lvl0 : (o = e._highlightResult) === null || o === void 0 || (i = o.hierarchy) === null || i === void 0 ? void 0 : i.lvl0) || {}).value;
  return s && k0.test(s) ? s.replace(al, "") : s;
}
function uo() {
  return uo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, uo.apply(this, arguments);
}
function $0(e) {
  return m.createElement("div", { className: "DocSearch-Dropdown-Container" }, e.state.collections.map(function(t) {
    if (t.items.length === 0)
      return null;
    var n = sl(t.items[0]);
    return m.createElement(co, uo({}, e, { key: t.source.sourceId, title: n, collection: t, renderIcon: function(r) {
      var o, i = r.item, a = r.index;
      return m.createElement(m.Fragment, null, i.__docsearch_parent && m.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, m.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, i.__docsearch_parent !== ((o = t.items[a + 1]) === null || o === void 0 ? void 0 : o.__docsearch_parent) ? m.createElement("path", { d: "M8 6v21M20 27H8.3" }) : m.createElement("path", { d: "M8 6v42M20 27H8.3" }))), m.createElement("div", { className: "DocSearch-Hit-icon" }, m.createElement(u0, { type: i.type })));
    }, renderAction: function() {
      return m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement(l0, null));
    } }));
  }), e.resultsFooterComponent && m.createElement("section", { className: "DocSearch-HitsFooter" }, m.createElement(e.resultsFooterComponent, { state: e.state })));
}
var P0 = ["translations"];
function er() {
  return er = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, er.apply(this, arguments);
}
function E0(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, p = Object.keys(a);
    for (u = 0; u < p.length; u++)
      l = p[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function C0(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = E0(e, P0), o = n.recentSearchesTitle, i = o === void 0 ? "Recent" : o, a = n.noRecentSearchesText, s = a === void 0 ? "No recent searches" : a, l = n.saveRecentSearchButtonTitle, u = l === void 0 ? "Save this search" : l, c = n.removeRecentSearchButtonTitle, p = c === void 0 ? "Remove this search from history" : c, f = n.favoriteSearchesTitle, d = f === void 0 ? "Favorite" : f, v = n.removeFavoriteSearchButtonTitle, g = v === void 0 ? "Remove this search from favorites" : v;
  return r.state.status === "idle" && r.hasCollections === !1 ? r.disableUserPersonalization ? null : m.createElement("div", { className: "DocSearch-StartScreen" }, m.createElement("p", { className: "DocSearch-Help" }, s)) : r.hasCollections === !1 ? null : m.createElement("div", { className: "DocSearch-Dropdown-Container" }, m.createElement(co, er({}, r, { title: i, collection: r.state.collections[0], renderIcon: function() {
    return m.createElement("div", { className: "DocSearch-Hit-icon" }, m.createElement(s0, null));
  }, renderAction: function(y) {
    var b = y.item, k = y.runFavoriteTransition, S = y.runDeleteTransition;
    return m.createElement(m.Fragment, null, m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement("button", { className: "DocSearch-Hit-action-button", title: u, type: "submit", onClick: function(x) {
      x.preventDefault(), x.stopPropagation(), k(function() {
        r.favoriteSearches.add(b), r.recentSearches.remove(b), r.refresh();
      });
    } }, m.createElement(sa, null))), m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement("button", { className: "DocSearch-Hit-action-button", title: p, type: "submit", onClick: function(x) {
      x.preventDefault(), x.stopPropagation(), S(function() {
        r.recentSearches.remove(b), r.refresh();
      });
    } }, m.createElement(lo, null))));
  } })), m.createElement(co, er({}, r, { title: d, collection: r.state.collections[1], renderIcon: function() {
    return m.createElement("div", { className: "DocSearch-Hit-icon" }, m.createElement(sa, null));
  }, renderAction: function(y) {
    var b = y.item, k = y.runDeleteTransition;
    return m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement("button", { className: "DocSearch-Hit-action-button", title: g, type: "submit", onClick: function(S) {
      S.preventDefault(), S.stopPropagation(), k(function() {
        r.favoriteSearches.remove(b), r.refresh();
      });
    } }, m.createElement(lo, null)));
  } })));
}
var j0 = ["translations"];
function tr() {
  return tr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tr.apply(this, arguments);
}
function T0(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, p = Object.keys(a);
    for (u = 0; u < p.length; u++)
      l = p[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var A0 = m.memo(function(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = T0(e, j0);
  if (r.state.status === "error")
    return m.createElement(m0, { translations: n == null ? void 0 : n.errorScreen });
  var o = r.state.collections.some(function(i) {
    return i.items.length > 0;
  });
  return r.state.query ? o === !1 ? m.createElement(y0, tr({}, r, { translations: n == null ? void 0 : n.noResultsScreen })) : m.createElement($0, r) : m.createElement(C0, tr({}, r, { hasCollections: o, translations: n == null ? void 0 : n.startScreen }));
}, function(e, t) {
  return t.state.status === "loading" || t.state.status === "stalled";
}), I0 = ["translations"];
function nr() {
  return nr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, nr.apply(this, arguments);
}
function D0(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, p = Object.keys(a);
    for (u = 0; u < p.length; u++)
      l = p[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function N0(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = D0(e, I0), o = n.resetButtonTitle, i = o === void 0 ? "Clear the query" : o, a = n.resetButtonAriaLabel, s = a === void 0 ? "Clear the query" : a, l = n.cancelButtonText, u = l === void 0 ? "Cancel" : l, c = n.cancelButtonAriaLabel, p = c === void 0 ? "Cancel" : c, f = r.getFormProps({ inputElement: r.inputRef.current }).onReset;
  return m.useEffect(function() {
    r.autoFocus && r.inputRef.current && r.inputRef.current.focus();
  }, [r.autoFocus, r.inputRef]), m.useEffect(function() {
    r.isFromSelection && r.inputRef.current && r.inputRef.current.select();
  }, [r.isFromSelection, r.inputRef]), m.createElement(m.Fragment, null, m.createElement("form", { className: "DocSearch-Form", onSubmit: function(d) {
    d.preventDefault();
  }, onReset: f }, m.createElement("label", nr({ className: "DocSearch-MagnifierLabel" }, r.getLabelProps()), m.createElement(nl, null)), m.createElement("div", { className: "DocSearch-LoadingIndicator" }, m.createElement(a0, null)), m.createElement("input", nr({ className: "DocSearch-Input", ref: r.inputRef }, r.getInputProps({ inputElement: r.inputRef.current, autoFocus: r.autoFocus, maxLength: 64 }))), m.createElement("button", { type: "reset", title: i, className: "DocSearch-Reset", "aria-label": s, hidden: !r.state.query }, m.createElement(lo, null))), m.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": p, onClick: r.onClose }, u));
}
var L0 = ["_highlightResult", "_snippetResult"];
function M0(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, p = Object.keys(a);
    for (u = 0; u < p.length; u++)
      l = p[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function R0(e) {
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
function ma(e) {
  var t = e.key, n = e.limit, r = n === void 0 ? 5 : n, o = R0(t), i = o.getItem().slice(0, r);
  return { add: function(a) {
    var s = a, l = (s._highlightResult, s._snippetResult, M0(s, L0)), u = i.findIndex(function(c) {
      return c.objectID === l.objectID;
    });
    u > -1 && i.splice(u, 1), i.unshift(l), i = i.slice(0, r), o.setItem(i);
  }, remove: function(a) {
    i = i.filter(function(s) {
      return s.objectID !== a.objectID;
    }), o.setItem(i);
  }, getAll: function() {
    return i;
  } };
}
var B0 = ["facetName", "facetQuery"];
function H0(e) {
  var t, n = "algoliasearch-client-js-".concat(e.key), r = function() {
    return t === void 0 && (t = e.localStorage || window.localStorage), t;
  }, o = function() {
    return JSON.parse(r().getItem(n) || "{}");
  };
  return { get: function(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return Promise.resolve().then(function() {
      var l = JSON.stringify(i), u = o()[l];
      return Promise.all([u || a(), u !== void 0]);
    }).then(function(l) {
      var u = Jn(l, 2), c = u[0], p = u[1];
      return Promise.all([c, p || s.miss(c)]);
    }).then(function(l) {
      return Jn(l, 1)[0];
    });
  }, set: function(i, a) {
    return Promise.resolve().then(function() {
      var s = o();
      return s[JSON.stringify(i)] = a, r().setItem(n, JSON.stringify(s)), a;
    });
  }, delete: function(i) {
    return Promise.resolve().then(function() {
      var a = o();
      delete a[JSON.stringify(i)], r().setItem(n, JSON.stringify(a));
    });
  }, clear: function() {
    return Promise.resolve().then(function() {
      r().removeItem(n);
    });
  } };
}
function Gt(e) {
  var t = Gn(e.caches), n = t.shift();
  return n === void 0 ? { get: function(r, o) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return o().then(function(a) {
      return Promise.all([a, i.miss(a)]);
    }).then(function(a) {
      return Jn(a, 1)[0];
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
      return Gt({ caches: t }).get(r, o, i);
    });
  }, set: function(r, o) {
    return n.set(r, o).catch(function() {
      return Gt({ caches: t }).set(r, o);
    });
  }, delete: function(r) {
    return n.delete(r).catch(function() {
      return Gt({ caches: t }).delete(r);
    });
  }, clear: function() {
    return n.clear().catch(function() {
      return Gt({ caches: t }).clear();
    });
  } };
}
function Tr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 }, t = {};
  return { get: function(n, r) {
    var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } }, i = JSON.stringify(n);
    if (i in t)
      return Promise.resolve(e.serializable ? JSON.parse(t[i]) : t[i]);
    var a = r(), s = o && o.miss || function() {
      return Promise.resolve();
    };
    return a.then(function(l) {
      return s(l);
    }).then(function() {
      return a;
    });
  }, set: function(n, r) {
    return t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r, Promise.resolve(r);
  }, delete: function(n) {
    return delete t[JSON.stringify(n)], Promise.resolve();
  }, clear: function() {
    return t = {}, Promise.resolve();
  } };
}
function F0(e) {
  for (var t = e.length - 1; t > 0; t--) {
    var n = Math.floor(Math.random() * (t + 1)), r = e[t];
    e[t] = e[n], e[n] = r;
  }
  return e;
}
function ll(e, t) {
  return t && Object.keys(t).forEach(function(n) {
    e[n] = t[n](e);
  }), e;
}
function hr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0;
  return e.replace(/%s/g, function() {
    return encodeURIComponent(n[o++]);
  });
}
var Mn = { WithinQueryParameters: 0, WithinHeaders: 1 };
function va(e, t) {
  var n = e || {}, r = n.data || {};
  return Object.keys(n).forEach(function(o) {
    ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(o) === -1 && (r[o] = n[o]);
  }), { data: Object.entries(r).length > 0 ? r : void 0, timeout: n.timeout || t, headers: n.headers || {}, queryParameters: n.queryParameters || {}, cacheable: n.cacheable };
}
var It = { Read: 1, Write: 2, Any: 3 }, cl = 1, z0 = 2, ul = 3;
function dl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : cl;
  return Q(Q({}, e), {}, { status: t, lastUpdate: Date.now() });
}
function fl(e) {
  return typeof e == "string" ? { protocol: "https", url: e, accept: It.Any } : { protocol: e.protocol || "https", url: e.url, accept: e.accept || It.Any };
}
var ga = "GET", mr = "POST";
function V0(e, t) {
  return Promise.all(t.map(function(n) {
    return e.get(n, function() {
      return Promise.resolve(dl(n));
    });
  })).then(function(n) {
    var r = n.filter(function(a) {
      return function(s) {
        return s.status === cl || Date.now() - s.lastUpdate > 12e4;
      }(a);
    }), o = n.filter(function(a) {
      return function(s) {
        return s.status === ul && Date.now() - s.lastUpdate <= 12e4;
      }(a);
    }), i = [].concat(Gn(r), Gn(o));
    return { getTimeout: function(a, s) {
      return (o.length === 0 && a === 0 ? 1 : o.length + 3 + a) * s;
    }, statelessHosts: i.length > 0 ? i.map(function(a) {
      return fl(a);
    }) : t };
  });
}
function _a(e, t, n, r) {
  var o = [], i = function(f, d) {
    if (!(f.method === ga || f.data === void 0 && d.data === void 0)) {
      var v = Array.isArray(f.data) ? f.data : Q(Q({}, f.data), d.data);
      return JSON.stringify(v);
    }
  }(n, r), a = function(f, d) {
    var v = Q(Q({}, f.headers), d.headers), g = {};
    return Object.keys(v).forEach(function(y) {
      var b = v[y];
      g[y.toLowerCase()] = b;
    }), g;
  }(e, r), s = n.method, l = n.method !== ga ? {} : Q(Q({}, n.data), r.data), u = Q(Q(Q({ "x-algolia-agent": e.userAgent.value }, e.queryParameters), l), r.queryParameters), c = 0, p = function f(d, v) {
    var g = d.pop();
    if (g === void 0)
      throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: ya(o) };
    var y = { data: i, headers: a, method: s, url: q0(g, n.path, u), connectTimeout: v(c, e.timeouts.connect), responseTimeout: v(c, r.timeout) }, b = function(S) {
      var x = { request: y, response: S, host: g, triesLeft: d.length };
      return o.push(x), x;
    }, k = { onSucess: function(S) {
      return function(x) {
        try {
          return JSON.parse(x.content);
        } catch (P) {
          throw function(M, E) {
            return { name: "DeserializationError", message: M, response: E };
          }(P.message, x);
        }
      }(S);
    }, onRetry: function(S) {
      var x = b(S);
      return S.isTimedOut && c++, Promise.all([e.logger.info("Retryable failure", hl(x)), e.hostsCache.set(g, dl(g, S.isTimedOut ? ul : z0))]).then(function() {
        return f(d, v);
      });
    }, onFail: function(S) {
      throw b(S), function(x, P) {
        var M = x.content, E = x.status, j = M;
        try {
          j = JSON.parse(M).message;
        } catch {
        }
        return function(C, R, H) {
          return { name: "ApiError", message: C, status: R, transporterStackTrace: H };
        }(j, E, P);
      }(S, ya(o));
    } };
    return e.requester.send(y).then(function(S) {
      return function(x, P) {
        return function(M) {
          var E = M.status;
          return M.isTimedOut || function(j) {
            var C = j.isTimedOut, R = j.status;
            return !C && ~~R == 0;
          }(M) || ~~(E / 100) != 2 && ~~(E / 100) != 4;
        }(x) ? P.onRetry(x) : ~~(x.status / 100) == 2 ? P.onSucess(x) : P.onFail(x);
      }(S, k);
    });
  };
  return V0(e.hostsCache, t).then(function(f) {
    return p(Gn(f.statelessHosts).reverse(), f.getTimeout);
  });
}
function U0(e) {
  var t = { value: "Algolia for JavaScript (".concat(e, ")"), add: function(n) {
    var r = "; ".concat(n.segment).concat(n.version !== void 0 ? " (".concat(n.version, ")") : "");
    return t.value.indexOf(r) === -1 && (t.value = "".concat(t.value).concat(r)), t;
  } };
  return t;
}
function q0(e, t, n) {
  var r = pl(n), o = "".concat(e.protocol, "://").concat(e.url, "/").concat(t.charAt(0) === "/" ? t.substr(1) : t);
  return r.length && (o += "?".concat(r)), o;
}
function pl(e) {
  return Object.keys(e).map(function(t) {
    return hr("%s=%s", t, (n = e[t], Object.prototype.toString.call(n) === "[object Object]" || Object.prototype.toString.call(n) === "[object Array]" ? JSON.stringify(e[t]) : e[t]));
    var n;
  }).join("&");
}
function ya(e) {
  return e.map(function(t) {
    return hl(t);
  });
}
function hl(e) {
  var t = e.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return Q(Q({}, e), {}, { request: Q(Q({}, e.request), {}, { headers: Q(Q({}, e.request.headers), t) }) });
}
var W0 = function(e) {
  var t = e.appId, n = function(i, a, s) {
    var l = { "x-algolia-api-key": s, "x-algolia-application-id": a };
    return { headers: function() {
      return i === Mn.WithinHeaders ? l : {};
    }, queryParameters: function() {
      return i === Mn.WithinQueryParameters ? l : {};
    } };
  }(e.authMode !== void 0 ? e.authMode : Mn.WithinHeaders, t, e.apiKey), r = function(i) {
    var a = i.hostsCache, s = i.logger, l = i.requester, u = i.requestsCache, c = i.responsesCache, p = i.timeouts, f = i.userAgent, d = i.hosts, v = i.queryParameters, g = { hostsCache: a, logger: s, requester: l, requestsCache: u, responsesCache: c, timeouts: p, userAgent: f, headers: i.headers, queryParameters: v, hosts: d.map(function(y) {
      return fl(y);
    }), read: function(y, b) {
      var k = va(b, g.timeouts.read), S = function() {
        return _a(g, g.hosts.filter(function(P) {
          return (P.accept & It.Read) != 0;
        }), y, k);
      };
      if ((k.cacheable !== void 0 ? k.cacheable : y.cacheable) !== !0)
        return S();
      var x = { request: y, mappedRequestOptions: k, transporter: { queryParameters: g.queryParameters, headers: g.headers } };
      return g.responsesCache.get(x, function() {
        return g.requestsCache.get(x, function() {
          return g.requestsCache.set(x, S()).then(function(P) {
            return Promise.all([g.requestsCache.delete(x), P]);
          }, function(P) {
            return Promise.all([g.requestsCache.delete(x), Promise.reject(P)]);
          }).then(function(P) {
            var M = Jn(P, 2);
            return M[0], M[1];
          });
        });
      }, { miss: function(P) {
        return g.responsesCache.set(x, P);
      } });
    }, write: function(y, b) {
      return _a(g, g.hosts.filter(function(k) {
        return (k.accept & It.Write) != 0;
      }), y, va(b, g.timeouts.write));
    } };
    return g;
  }(Q(Q({ hosts: [{ url: "".concat(t, "-dsn.algolia.net"), accept: It.Read }, { url: "".concat(t, ".algolia.net"), accept: It.Write }].concat(F0([{ url: "".concat(t, "-1.algolianet.com") }, { url: "".concat(t, "-2.algolianet.com") }, { url: "".concat(t, "-3.algolianet.com") }])) }, e), {}, { headers: Q(Q(Q({}, n.headers()), { "content-type": "application/x-www-form-urlencoded" }), e.headers), queryParameters: Q(Q({}, n.queryParameters()), e.queryParameters) })), o = { transporter: r, appId: t, addAlgoliaAgent: function(i, a) {
    r.userAgent.add({ segment: i, version: a });
  }, clearCache: function() {
    return Promise.all([r.requestsCache.clear(), r.responsesCache.clear()]).then(function() {
    });
  } };
  return ll(o, e.methods);
}, ml = function(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = { transporter: e.transporter, appId: e.appId, indexName: t };
    return ll(r, n.methods);
  };
}, ba = function(e) {
  return function(t, n) {
    var r = t.map(function(o) {
      return Q(Q({}, o), {}, { params: pl(o.params || {}) });
    });
    return e.transporter.read({ method: mr, path: "1/indexes/*/queries", data: { requests: r }, cacheable: !0 }, n);
  };
}, wa = function(e) {
  return function(t, n) {
    return Promise.all(t.map(function(r) {
      var o = r.params, i = o.facetName, a = o.facetQuery, s = Zp(o, B0);
      return ml(e)(r.indexName, { methods: { searchForFacetValues: vl } }).searchForFacetValues(i, a, Q(Q({}, n), s));
    }));
  };
}, K0 = function(e) {
  return function(t, n, r) {
    return e.transporter.read({ method: mr, path: hr("1/answers/%s/prediction", e.indexName), data: { query: t, queryLanguages: n }, cacheable: !0 }, r);
  };
}, J0 = function(e) {
  return function(t, n) {
    return e.transporter.read({ method: mr, path: hr("1/indexes/%s/query", e.indexName), data: { query: t }, cacheable: !0 }, n);
  };
}, vl = function(e) {
  return function(t, n, r) {
    return e.transporter.read({ method: mr, path: hr("1/indexes/%s/facets/%s/query", e.indexName, t), data: { facetQuery: n }, cacheable: !0 }, r);
  };
}, G0 = 1, Q0 = 2, Y0 = 3;
function gl(e, t, n) {
  var r, o = { appId: e, apiKey: t, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(i) {
    return new Promise(function(a) {
      var s = new XMLHttpRequest();
      s.open(i.method, i.url, !0), Object.keys(i.headers).forEach(function(p) {
        return s.setRequestHeader(p, i.headers[p]);
      });
      var l, u = function(p, f) {
        return setTimeout(function() {
          s.abort(), a({ status: 0, content: f, isTimedOut: !0 });
        }, 1e3 * p);
      }, c = u(i.connectTimeout, "Connection timeout");
      s.onreadystatechange = function() {
        s.readyState > s.OPENED && l === void 0 && (clearTimeout(c), l = u(i.responseTimeout, "Socket timeout"));
      }, s.onerror = function() {
        s.status === 0 && (clearTimeout(c), clearTimeout(l), a({ content: s.responseText || "Network request failed", status: s.status, isTimedOut: !1 }));
      }, s.onload = function() {
        clearTimeout(c), clearTimeout(l), a({ content: s.responseText, status: s.status, isTimedOut: !1 });
      }, s.send(i.data);
    });
  } }, logger: (r = Y0, { debug: function(i, a) {
    return G0 >= r && console.debug(i, a), Promise.resolve();
  }, info: function(i, a) {
    return Q0 >= r && console.info(i, a), Promise.resolve();
  }, error: function(i, a) {
    return console.error(i, a), Promise.resolve();
  } }), responsesCache: Tr(), requestsCache: Tr({ serializable: !1 }), hostsCache: Gt({ caches: [H0({ key: "".concat("4.8.5", "-").concat(e) }), Tr()] }), userAgent: U0("4.8.5").add({ segment: "Browser", version: "lite" }), authMode: Mn.WithinQueryParameters };
  return W0(Q(Q(Q({}, o), n), {}, { methods: { search: ba, searchForFacetValues: wa, multipleQueries: ba, multipleSearchForFacetValues: wa, initIndex: function(i) {
    return function(a) {
      return ml(i)(a, { methods: { search: J0, searchForFacetValues: vl, findAnswers: K0 } });
    };
  } } }));
}
gl.version = "4.8.5";
var Z0 = ["footer", "searchBox"];
function rn() {
  return rn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, rn.apply(this, arguments);
}
function xa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ar(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xa(Object(n), !0).forEach(function(r) {
      X0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function X0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function e1(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, a, s = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (s.push(i.value), !r || s.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, a = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw a;
        }
      }
      return s;
    }
  }(e, t) || function(n, r) {
    if (!!n) {
      if (typeof n == "string")
        return Oa(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return Oa(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Oa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function t1(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, p = Object.keys(a);
    for (u = 0; u < p.length; u++)
      l = p[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function n1(e) {
  var t = e.appId, n = e.apiKey, r = e.indexName, o = e.placeholder, i = o === void 0 ? "Search docs" : o, a = e.searchParameters, s = e.onClose, l = s === void 0 ? S0 : s, u = e.transformItems, c = u === void 0 ? ha : u, p = e.hitComponent, f = p === void 0 ? i0 : p, d = e.resultsFooterComponent, v = d === void 0 ? function() {
    return null;
  } : d, g = e.navigator, y = e.initialScrollY, b = y === void 0 ? 0 : y, k = e.transformSearchClient, S = k === void 0 ? ha : k, x = e.disableUserPersonalization, P = x !== void 0 && x, M = e.initialQuery, E = M === void 0 ? "" : M, j = e.translations, C = j === void 0 ? {} : j, R = e.getMissingResultsUrl, H = C.footer, Y = C.searchBox, W = t1(C, Z0), ee = e1(m.useState({ query: "", collections: [], completion: null, context: {}, isOpen: !1, activeItemId: null, status: "idle" }), 2), le = ee[0], He = ee[1], Ce = m.useRef(null), Fe = m.useRef(null), tt = m.useRef(null), pt = m.useRef(null), L = m.useRef(null), O = m.useRef(10), I = m.useRef(typeof window < "u" ? window.getSelection().toString().slice(0, 64) : "").current, V = m.useRef(E || I).current, ie = function(z, G, ae) {
    return m.useMemo(function() {
      var ue = gl(z, G);
      return ue.addAlgoliaAgent("docsearch", "3.2.2"), /docsearch.js \(.*\)/.test(ue.transporter.userAgent.value) === !1 && ue.addAlgoliaAgent("docsearch-react", "3.2.2"), ae(ue);
    }, [z, G, ae]);
  }(t, n, S), te = m.useRef(ma({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r), limit: 10 })).current, ne = m.useRef(ma({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r), limit: te.getAll().length === 0 ? 7 : 4 })).current, je = m.useCallback(function(z) {
    if (!P) {
      var G = z.type === "content" ? z.__docsearch_parent : z;
      G && te.getAll().findIndex(function(ae) {
        return ae.objectID === G.objectID;
      }) === -1 && ne.add(G);
    }
  }, [te, ne, P]), Se = m.useMemo(function() {
    return n0({ id: "docsearch", defaultActiveItemId: 0, placeholder: i, openOnFocus: !0, initialState: { query: V, context: { searchSuggestions: [] } }, navigator: g, onStateChange: function(z) {
      He(z.state);
    }, getSources: function(z) {
      var G = z.query, ae = z.state, ue = z.setContext, Pe = z.setStatus;
      return G ? ie.search([{ query: G, indexName: r, params: Ar({ attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(O.current), "hierarchy.lvl2:".concat(O.current), "hierarchy.lvl3:".concat(O.current), "hierarchy.lvl4:".concat(O.current), "hierarchy.lvl5:".concat(O.current), "hierarchy.lvl6:".concat(O.current), "content:".concat(O.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20 }, a) }]).catch(function(re) {
        throw re.name === "RetryError" && Pe("error"), re;
      }).then(function(re) {
        var de = re.results[0], ge = de.hits, Ue = de.nbHits, ht = pa(ge, function(mt) {
          return sl(mt);
        });
        return ae.context.searchSuggestions.length < Object.keys(ht).length && ue({ searchSuggestions: Object.keys(ht) }), ue({ nbHits: Ue }), Object.values(ht).map(function(mt, Ft) {
          return { sourceId: "hits".concat(Ft), onSelect: function(Te) {
            var rt = Te.item, Le = Te.event;
            je(rt), Le.shiftKey || Le.ctrlKey || Le.metaKey || l();
          }, getItemUrl: function(Te) {
            return Te.item.url;
          }, getItems: function() {
            return Object.values(pa(mt, function(Te) {
              return Te.hierarchy.lvl1;
            })).map(c).map(function(Te) {
              return Te.map(function(rt) {
                return Ar(Ar({}, rt), {}, { __docsearch_parent: rt.type !== "lvl1" && Te.find(function(Le) {
                  return Le.type === "lvl1" && Le.hierarchy.lvl1 === rt.hierarchy.lvl1;
                }) });
              });
            }).flat();
          } };
        });
      }) : P ? [] : [{ sourceId: "recentSearches", onSelect: function(re) {
        var de = re.item, ge = re.event;
        je(de), ge.shiftKey || ge.ctrlKey || ge.metaKey || l();
      }, getItemUrl: function(re) {
        return re.item.url;
      }, getItems: function() {
        return ne.getAll();
      } }, { sourceId: "favoriteSearches", onSelect: function(re) {
        var de = re.item, ge = re.event;
        je(de), ge.shiftKey || ge.ctrlKey || ge.metaKey || l();
      }, getItemUrl: function(re) {
        return re.item.url;
      }, getItems: function() {
        return te.getAll();
      } }];
    } });
  }, [r, a, ie, l, ne, te, je, V, i, g, c, P]), ke = Se.getEnvironmentProps, me = Se.getRootProps, nt = Se.refresh;
  return function(z) {
    var G = z.getEnvironmentProps, ae = z.panelElement, ue = z.formElement, Pe = z.inputElement;
    m.useEffect(function() {
      if (ae && ue && Pe) {
        var re = G({ panelElement: ae, formElement: ue, inputElement: Pe }), de = re.onTouchStart, ge = re.onTouchMove;
        return window.addEventListener("touchstart", de), window.addEventListener("touchmove", ge), function() {
          window.removeEventListener("touchstart", de), window.removeEventListener("touchmove", ge);
        };
      }
    }, [G, ae, ue, Pe]);
  }({ getEnvironmentProps: ke, panelElement: pt.current, formElement: tt.current, inputElement: L.current }), function(z) {
    var G = z.container;
    m.useEffect(function() {
      if (G) {
        var ae = G.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), ue = ae[0], Pe = ae[ae.length - 1];
        return G.addEventListener("keydown", re), function() {
          G.removeEventListener("keydown", re);
        };
      }
      function re(de) {
        de.key === "Tab" && (de.shiftKey ? document.activeElement === ue && (de.preventDefault(), Pe.focus()) : document.activeElement === Pe && (de.preventDefault(), ue.focus()));
      }
    }, [G]);
  }({ container: Ce.current }), m.useEffect(function() {
    return document.body.classList.add("DocSearch--active"), function() {
      var z, G;
      document.body.classList.remove("DocSearch--active"), (z = (G = window).scrollTo) === null || z === void 0 || z.call(G, 0, b);
    };
  }, []), m.useEffect(function() {
    window.matchMedia("(max-width: 768px)").matches && (O.current = 5);
  }, []), m.useEffect(function() {
    pt.current && (pt.current.scrollTop = 0);
  }, [le.query]), m.useEffect(function() {
    V.length > 0 && (nt(), L.current && L.current.focus());
  }, [V, nt]), m.useEffect(function() {
    function z() {
      if (Fe.current) {
        var G = 0.01 * window.innerHeight;
        Fe.current.style.setProperty("--docsearch-vh", "".concat(G, "px"));
      }
    }
    return z(), window.addEventListener("resize", z), function() {
      window.removeEventListener("resize", z);
    };
  }, []), m.createElement("div", rn({ ref: Ce }, me({ "aria-expanded": !0 }), { className: ["DocSearch", "DocSearch-Container", le.status === "stalled" && "DocSearch-Container--Stalled", le.status === "error" && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(z) {
    z.target === z.currentTarget && l();
  } }), m.createElement("div", { className: "DocSearch-Modal", ref: Fe }, m.createElement("header", { className: "DocSearch-SearchBar", ref: tt }, m.createElement(N0, rn({}, Se, { state: le, autoFocus: V.length === 0, inputRef: L, isFromSelection: Boolean(V) && V === I, translations: Y, onClose: l }))), m.createElement("div", { className: "DocSearch-Dropdown", ref: pt }, m.createElement(A0, rn({}, Se, { indexName: r, state: le, hitComponent: f, resultsFooterComponent: v, disableUserPersonalization: P, recentSearches: ne, favoriteSearches: te, inputRef: L, translations: W, getMissingResultsUrl: R, onItemClick: function(z) {
    je(z), l();
  } }))), m.createElement("footer", { className: "DocSearch-Footer" }, m.createElement(o0, { translations: H }))));
}
function fo() {
  return fo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, fo.apply(this, arguments);
}
function Sa(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, a, s = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (s.push(i.value), !r || s.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, a = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw a;
        }
      }
      return s;
    }
  }(e, t) || function(n, r) {
    if (!!n) {
      if (typeof n == "string")
        return ka(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return ka(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function ka(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function r1(e) {
  var t, n, r = m.useRef(null), o = Sa(m.useState(!1), 2), i = o[0], a = o[1], s = Sa(m.useState((e == null ? void 0 : e.initialQuery) || void 0), 2), l = s[0], u = s[1], c = m.useCallback(function() {
    a(!0);
  }, [a]), p = m.useCallback(function() {
    a(!1);
  }, [a]);
  return function(f) {
    var d = f.isOpen, v = f.onOpen, g = f.onClose, y = f.onInput, b = f.searchButtonRef;
    m.useEffect(function() {
      function k(S) {
        (S.keyCode === 27 && d || S.key === "k" && (S.metaKey || S.ctrlKey) || !function(x) {
          var P = x.target, M = P.tagName;
          return P.isContentEditable || M === "INPUT" || M === "SELECT" || M === "TEXTAREA";
        }(S) && S.key === "/" && !d) && (S.preventDefault(), d ? g() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || v()), b && b.current === document.activeElement && y && /[a-zA-Z0-9]/.test(String.fromCharCode(S.keyCode)) && y(S);
      }
      return window.addEventListener("keydown", k), function() {
        window.removeEventListener("keydown", k);
      };
    }, [d, v, g, y, b]);
  }({ isOpen: i, onOpen: c, onClose: p, onInput: m.useCallback(function(f) {
    a(!0), u(f.key);
  }, [a, u]), searchButtonRef: r }), m.createElement(m.Fragment, null, m.createElement(yh, { ref: r, translations: e == null || (t = e.translations) === null || t === void 0 ? void 0 : t.button, onClick: c }), i && Zs(m.createElement(n1, fo({}, e, { initialScrollY: window.scrollY, initialQuery: l, translations: e == null || (n = e.translations) === null || n === void 0 ? void 0 : n.modal, onClose: p })), document.body));
}
function o1(e) {
  el(m.createElement(r1, Qr({}, e, { transformSearchClient: function(t) {
    return t.addAlgoliaAgent("docsearch.js", "3.2.2"), e.transformSearchClient ? e.transformSearchClient(t) : t;
  } })), function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
    return typeof t == "string" ? n.document.querySelector(t) : t;
  }(e.container, e.environment));
}
const i1 = {
  class: "algolia-search-box",
  id: "docsearch"
}, a1 = /* @__PURE__ */ D({
  __name: "AlgoliaSearchBox",
  props: {
    options: null
  },
  setup(e) {
    const t = e, n = he("useRouter"), r = he("useRoute"), o = Ia(), i = n(), a = r();
    $e(
      () => t.options,
      (f) => {
        l(f);
      }
    ), se(() => {
      p(t.options);
    });
    function s(f) {
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
      const d = (() => f.includes("api-reference") || f.includes("docs.") && !f.startsWith(window.location.origin) ? f : f.startsWith("http") ? s(f) : f)();
      return window != null && window.__DEBUG && console.log(`getTargetUrl('${f}') -> ${d}`), d;
    }
    function p(f) {
      o1(
        Object.assign({}, f, {
          container: "#docsearch",
          searchParameters: Object.assign({}, f.searchParameters),
          navigator: {
            navigate: ({ suggestionUrl: d }) => {
              const v = c(d);
              if (v.startsWith("http") || a.path === v)
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
    return (f, d) => (_(), w("div", i1));
  }
});
const s1 = /* @__PURE__ */ h("svg", {
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
], -1), l1 = { class: "hidden lg:block" }, c1 = /* @__PURE__ */ h("span", { class: "ml-2" }, "Search", -1), u1 = { class: "sr-only" }, d1 = {
  class: "absolute right-3 text-sm font-semibold",
  "aria-hidden": "true"
}, $a = /* @__PURE__ */ D({
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
    return (a, s) => {
      const l = xe("ClientOnly");
      return _(), w(F, null, [
        B(l, null, {
          default: pe(() => [
            B(a1, {
              options: i,
              class: "sr-only"
            })
          ]),
          _: 1
        }),
        h("div", {
          class: "relative flex cursor-pointer items-center rounded-md p-2 text-white transition-shadow dark:ring-slate-300/10 lg:bg-white/20 lg:px-3 lg:py-1.5 lg:pr-20 lg:hover:shadow-md lg:dark:bg-white/10 lg:dark:ring-1 lg:dark:hover:ring-cyan-400/50",
          onClick: o
        }, [
          s1,
          h("div", l1, [
            c1,
            B(l, null, {
              default: pe(() => [
                h("span", u1, "Press " + U($(r)) + "+K to open quick search", 1),
                h("span", d1, U($(n)) + "K", 1)
              ]),
              _: 1
            })
          ])
        ])
      ], 64);
    };
  }
}), f1 = /* @__PURE__ */ h("a", {
  href: "https://blog.nativescript.org/nativescript-preview-announcement",
  class: "flex flex-col content-center items-center justify-center bg-white px-4 py-2 text-white dark:border-b dark:border-white/10 dark:bg-transparent md:flex-row"
}, [
  /* @__PURE__ */ h("span", { class: "text-sm font-medium text-gray-800 dark:text-white" }, [
    /* @__PURE__ */ h("b", null, "Preview 2.0"),
    /* @__PURE__ */ Ae(" is now in Public Beta!")
  ]),
  /* @__PURE__ */ h("div", { class: "ml-2 text-sm font-bold text-gray-900 underline dark:text-white" }, [
    /* @__PURE__ */ Ae(" Read the Announcement "),
    /* @__PURE__ */ h("span", { "aria-hidden": "true" }, "\u2192")
  ])
], -1), p1 = { class: "nav-bar top-0 z-10 lg:sticky" }, h1 = { class: "bg-ns-blue py-4 backdrop-blur dark:bg-slate-900 dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/80" }, m1 = {
  class: "relative mx-auto flex items-center justify-between px-4 sm:px-6 2xl:container",
  "aria-label": "Global"
}, v1 = { class: "flex flex-1 items-center" }, g1 = { class: "flex w-full items-center justify-between lg:w-auto" }, _1 = ["href"], y1 = /* @__PURE__ */ h("span", { class: "sr-only" }, "NativeScript", -1), b1 = { class: "flex items-center space-x-4 lg:hidden" }, w1 = { class: "-mr-1 flex items-center" }, x1 = ["aria-expanded"], O1 = /* @__PURE__ */ h("span", { class: "sr-only" }, "Open main menu", -1), S1 = /* @__PURE__ */ h("svg", {
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
], -1), k1 = [
  O1,
  S1
], $1 = { class: "ml-10 hidden space-x-8 lg:flex" }, P1 = { class: "flex flex-1 justify-center px-2 lg:justify-end" }, E1 = { class: "w-full max-w-xl xl:max-w-xs" }, C1 = { class: "hidden lg:flex lg:items-center lg:space-x-6" }, j1 = ["href", "target"], T1 = { class: "relative" }, A1 = ["aria-expanded"], I1 = /* @__PURE__ */ h("span", { class: "sr-only" }, "Open additional menu", -1), D1 = /* @__PURE__ */ h("svg", {
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
], -1), N1 = [
  I1,
  D1
], L1 = {
  key: 0,
  class: "absolute left-24 z-10 mt-3 w-screen max-w-xs -translate-x-full transform px-2 sm:px-0"
}, M1 = { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:shadow-none dark:ring-slate-300/10" }, R1 = { class: "relative grid gap-6 bg-white px-5 py-6 dark:bg-slate-800 sm:gap-8 sm:p-8" }, B1 = ["href", "target"], H1 = { class: "text-base font-medium text-gray-900 dark:text-slate-200" }, F1 = { class: "mt-1 text-sm text-gray-500 dark:text-slate-400" }, z1 = /* @__PURE__ */ h("a", {
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
], -1), V1 = {
  key: 0,
  class: "absolute inset-x-0 top-0 z-20 origin-top transform p-2 transition lg:hidden"
}, U1 = { class: "overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5" }, q1 = { class: "flex items-center justify-between px-5 pt-4" }, W1 = { class: "-mr-3" }, K1 = /* @__PURE__ */ h("span", { class: "sr-only" }, "Close menu", -1), J1 = /* @__PURE__ */ h("svg", {
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
], -1), G1 = [
  K1,
  J1
], Q1 = { class: "pt-5 pb-6" }, Y1 = { class: "space-y-1 px-2" }, Z1 = ["href", "target"], X1 = /* @__PURE__ */ h("hr", { class: "-mx-2" }, null, -1), em = ["href", "target"], tm = /* @__PURE__ */ D({
  __name: "Header",
  props: {
    nav: {
      type: Array,
      default() {
        return vi.nav;
      }
    },
    flyoutNav: {
      type: Array,
      default() {
        return vi.flyoutNav;
      }
    },
    mainURL: {
      default: "/",
      type: String
    }
  },
  setup(e) {
    const t = T(!1), n = T(!1);
    return (r, o) => (_(), w(F, null, [
      f1,
      h("header", p1, [
        h("div", h1, [
          h("nav", m1, [
            h("div", v1, [
              h("div", g1, [
                h("a", { href: e.mainURL }, [
                  y1,
                  B(gi, {
                    class: "h-8 w-auto sm:h-10",
                    "aria-hidden": "true"
                  })
                ], 8, _1),
                h("div", b1, [
                  B($a),
                  De(r.$slots, "right"),
                  h("div", w1, [
                    h("button", {
                      onClick: o[0] || (o[0] = (i) => t.value = !0),
                      type: "button",
                      class: "-mx-2 inline-flex items-center justify-center rounded-md p-2 text-white focus:bg-white/20 dark:focus:bg-white/10",
                      "aria-expanded": t.value
                    }, k1, 8, x1)
                  ])
                ])
              ]),
              h("div", $1, [
                h("div", P1, [
                  h("div", E1, [
                    B($a)
                  ])
                ])
              ])
            ]),
            h("div", C1, [
              (_(!0), w(F, null, X(e.nav, (i, a) => (_(), w("a", {
                key: a,
                href: i.link,
                target: i.target,
                class: "border-b-4 border-transparent text-base font-medium text-white hover:border-blue-100"
              }, U(i.text), 9, j1))), 128)),
              h("div", T1, [
                h("button", {
                  onClick: o[1] || (o[1] = wt((i) => n.value = !n.value, ["prevent"])),
                  class: Z(["relative z-20 inline-flex items-center justify-center rounded-md p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent", {
                    "bg-white text-gray-900": n.value,
                    "text-white hover:text-gray-900 dark:hover:text-slate-400": !n.value
                  }]),
                  role: "button",
                  "aria-expanded": n.value
                }, N1, 10, A1),
                B(yr, {
                  "enter-from-class": "opacity-0",
                  "enter-to-class": "opacity-100",
                  "leave-from-class": "opacity-100",
                  "leave-to-class": "opacity-0"
                }, {
                  default: pe(() => [
                    n.value ? (_(), w("button", {
                      key: 0,
                      tabindex: "-1",
                      onClick: o[2] || (o[2] = (i) => n.value = !1),
                      class: "fixed inset-0 z-10 h-screen w-screen cursor-default bg-slate-300/40 transition duration-200 dark:bg-slate-900/70"
                    })) : J("", !0)
                  ]),
                  _: 1
                }),
                B(yr, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "translate-y-1 opacity-0",
                  "enter-to-class": "translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "translate-y-0 opacity-100",
                  "leave-to-class": "translate-y-1 opacity-0"
                }, {
                  default: pe(() => [
                    n.value ? (_(), w("div", L1, [
                      h("div", M1, [
                        h("div", R1, [
                          (_(!0), w(F, null, X(e.flyoutNav, (i, a) => (_(), w("a", {
                            key: a,
                            href: i.link,
                            target: i.target,
                            class: "-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-slate-700/50"
                          }, [
                            h("p", H1, U(i.text), 1),
                            h("p", F1, U(i.description), 1)
                          ], 8, B1))), 128))
                        ])
                      ])
                    ])) : J("", !0)
                  ]),
                  _: 1
                })
              ]),
              De(r.$slots, "right"),
              z1
            ])
          ])
        ]),
        B(yr, {
          "enter-active-class": "duration-150 ease-out",
          "enter-from-class": "scale-95 opacity-0",
          "enter-to-class": "scale-100 opacity-100",
          "leave-active-class": "duration-100 ease-in",
          "leave-from-class": "scale-100 opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: pe(() => [
            t.value ? (_(), w("div", V1, [
              h("div", U1, [
                h("div", q1, [
                  h("div", null, [
                    B(gi, {
                      class: "h-8 w-auto",
                      variant: "blue",
                      "aria-hidden": "true"
                    })
                  ]),
                  h("div", W1, [
                    h("button", {
                      onClick: o[3] || (o[3] = (i) => t.value = !1),
                      type: "button",
                      class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    }, G1)
                  ])
                ]),
                h("div", Q1, [
                  h("div", Y1, [
                    (_(!0), w(F, null, X(e.nav, (i, a) => (_(), w("a", {
                      key: a,
                      onClick: o[4] || (o[4] = (s) => t.value = !1),
                      href: i.link,
                      target: i.target,
                      class: "block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    }, U(i.text), 9, Z1))), 128)),
                    X1,
                    (_(!0), w(F, null, X(e.flyoutNav, (i, a) => (_(), w("a", {
                      key: a,
                      onClick: o[5] || (o[5] = (s) => t.value = !1),
                      href: i.link,
                      target: i.target,
                      class: "block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    }, U(i.text), 9, em))), 128))
                  ])
                ])
              ])
            ])) : J("", !0)
          ]),
          _: 1
        })
      ])
    ], 64));
  }
});
const nm = {}, rm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "h-5 w-5"
}, om = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
  "clip-rule": "evenodd"
}, null, -1), im = [
  om
];
function am(e, t) {
  return _(), w("svg", rm, im);
}
const sm = /* @__PURE__ */ kt(nm, [["render", am]]), lm = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, cm = {
  role: "list",
  class: "flex items-center space-x-3"
}, um = {
  href: "/",
  class: "text-slate-400 hover:text-slate-500 dark:hover:text-cyan-300"
}, dm = /* @__PURE__ */ h("span", { class: "sr-only" }, "Home", -1), fm = { class: "flex items-center" }, pm = /* @__PURE__ */ D({
  __name: "Breadcrumbs",
  setup(e) {
    const t = yn(), { page: n } = Ne(), r = A(() => xo(t.value)), o = A(() => {
      const i = [];
      let a = r.value.find((s) => St(n.value.relativePath, s.link));
      if (!a) {
        const { category: s, categoryLink: l } = n.value.frontmatter;
        return [
          ...s ? [
            {
              name: s,
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
        name: a.text,
        href: a.link,
        current: !0
      }); a = a.parent; ) {
        let s;
        a.hidden ? !a.href && a.parent : s = a.link, i.unshift({
          name: a.text,
          href: s,
          current: !1
        });
      }
      return i;
    });
    return (i, a) => (_(), w("nav", lm, [
      h("ol", cm, [
        h("li", null, [
          h("div", null, [
            h("a", um, [
              B(sm, {
                class: "flex-shrink-0",
                "aria-hidden": "true"
              }),
              dm
            ])
          ])
        ]),
        (_(!0), w(F, null, X($(o), (s) => (_(), w("li", {
          key: s.name
        }, [
          h("div", fm, [
            B(In, {
              class: "flex-shrink-0 text-slate-400 dark:text-slate-500",
              "aria-hidden": "true"
            }),
            (_(), ce(hn(s.href ? "a" : "div"), {
              href: s.href,
              class: Z([
                "ml-3 text-sm font-medium text-slate-500 dark:text-slate-400",
                s.href ? "hover:text-slate-700 dark:hover:text-cyan-300" : ""
              ]),
              "aria-current": s.current ? "page" : void 0
            }, {
              default: pe(() => [
                Ae(U(s.name), 1)
              ]),
              _: 2
            }, 1032, ["href", "class", "aria-current"]))
          ])
        ]))), 128))
      ])
    ]));
  }
}), hm = /* @__PURE__ */ h("h4", { class: "text-sm font-bold text-gray-900 dark:text-white" }, " Contributors ", -1), mm = { class: "mt-2 flex -space-x-1 overflow-hidden" }, vm = ["href"], gm = ["src", "alt"], _m = /* @__PURE__ */ D({
  __name: "ContributorsList",
  setup(e) {
    const { page: t } = Ne();
    A(() => {
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
      const i = ql("tooltip");
      return _(), w("div", null, [
        hm,
        h("div", mm, [
          (_(), w(F, null, X(n, (a) => Lt(h("a", {
            href: a.profileURL,
            target: "_blank"
          }, [
            h("img", {
              class: "inline-block h-6 w-6 cursor-pointer rounded-full ring-2 ring-white dark:ring-slate-800",
              src: a.avatarURL,
              alt: a.username
            }, null, 8, gm)
          ], 8, vm), [
            [i, a.username]
          ])), 64))
        ])
      ]);
    };
  }
}), ym = { class: "text-xs text-slate-500" }, bm = ["datatime"], wm = /* @__PURE__ */ D({
  __name: "LastUpdatedLabel",
  setup(e) {
    const { theme: t, page: n } = Ne(), r = A(() => {
      if (!!n.value.lastUpdated)
        return new Date(n.value.lastUpdated);
    }), o = A(() => {
      var a;
      return (a = r.value) == null ? void 0 : a.toISOString();
    }), i = T();
    return se(() => {
      Oe(() => {
        var a;
        i.value = (a = r.value) == null ? void 0 : a.toLocaleString(window.navigator.language);
      });
    }), (a, s) => {
      var l;
      return Lt((_(), w("p", ym, [
        Ae(U((l = $(t).lastUpdatedText) != null ? l : "Last updated") + ": ", 1),
        h("time", { datatime: $(o) }, U(i.value), 9, bm)
      ], 512)), [
        [Bn, i.value]
      ]);
    };
  }
});
var _l = { exports: {} };
/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(np, function() {
    function n(L) {
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? n = function(O) {
        return typeof O;
      } : n = function(O) {
        return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
      }, n(L);
    }
    function r() {
      return r = Object.assign || function(L) {
        for (var O = 1; O < arguments.length; O++) {
          var I = arguments[O];
          for (var V in I)
            Object.prototype.hasOwnProperty.call(I, V) && (L[V] = I[V]);
        }
        return L;
      }, r.apply(this, arguments);
    }
    var o = 4, i = 1e-3, a = 1e-7, s = 10, l = 11, u = 1 / (l - 1), c = typeof Float32Array == "function";
    function p(L, O) {
      return 1 - 3 * O + 3 * L;
    }
    function f(L, O) {
      return 3 * O - 6 * L;
    }
    function d(L) {
      return 3 * L;
    }
    function v(L, O, I) {
      return ((p(O, I) * L + f(O, I)) * L + d(O)) * L;
    }
    function g(L, O, I) {
      return 3 * p(O, I) * L * L + 2 * f(O, I) * L + d(O);
    }
    function y(L, O, I, V, ie) {
      var te, ne, je = 0;
      do
        ne = O + (I - O) / 2, te = v(ne, V, ie) - L, te > 0 ? I = ne : O = ne;
      while (Math.abs(te) > a && ++je < s);
      return ne;
    }
    function b(L, O, I, V) {
      for (var ie = 0; ie < o; ++ie) {
        var te = g(O, I, V);
        if (te === 0)
          return O;
        var ne = v(O, I, V) - L;
        O -= ne / te;
      }
      return O;
    }
    function k(L) {
      return L;
    }
    var S = function(O, I, V, ie) {
      if (!(0 <= O && O <= 1 && 0 <= V && V <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      if (O === I && V === ie)
        return k;
      for (var te = c ? new Float32Array(l) : new Array(l), ne = 0; ne < l; ++ne)
        te[ne] = v(ne * u, O, V);
      function je(Se) {
        for (var ke = 0, me = 1, nt = l - 1; me !== nt && te[me] <= Se; ++me)
          ke += u;
        --me;
        var z = (Se - te[me]) / (te[me + 1] - te[me]), G = ke + z * u, ae = g(G, O, V);
        return ae >= i ? b(Se, G, O, V) : ae === 0 ? G : y(Se, ke, ke + u, O, V);
      }
      return function(ke) {
        return ke === 0 ? 0 : ke === 1 ? 1 : v(je(ke), I, ie);
      };
    }, x = {
      ease: [0.25, 0.1, 0.25, 1],
      linear: [0, 0, 1, 1],
      "ease-in": [0.42, 0, 1, 1],
      "ease-out": [0, 0, 0.58, 1],
      "ease-in-out": [0.42, 0, 0.58, 1]
    }, P = !1;
    try {
      var M = Object.defineProperty({}, "passive", {
        get: function() {
          P = !0;
        }
      });
      window.addEventListener("test", null, M);
    } catch {
    }
    var E = {
      $: function(O) {
        return typeof O != "string" ? O : document.querySelector(O);
      },
      on: function(O, I, V) {
        var ie = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
          passive: !1
        };
        I instanceof Array || (I = [I]);
        for (var te = 0; te < I.length; te++)
          O.addEventListener(I[te], V, P ? ie : !1);
      },
      off: function(O, I, V) {
        I instanceof Array || (I = [I]);
        for (var ie = 0; ie < I.length; ie++)
          O.removeEventListener(I[ie], V);
      },
      cumulativeOffset: function(O) {
        var I = 0, V = 0;
        do
          I += O.offsetTop || 0, V += O.offsetLeft || 0, O = O.offsetParent;
        while (O);
        return {
          top: I,
          left: V
        };
      }
    }, j = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"], C = {
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
    function R(L) {
      C = r({}, C, L);
    }
    var H = function() {
      var O, I, V, ie, te, ne, je, Se, ke, me, nt, z, G, ae, ue, Pe, re, de, ge, Ue, ht, mt, Ft, Te = function(ve) {
        !Se || (Ft = ve, Ue = !0);
      }, rt, Le, gr, zt;
      function Ol(_e) {
        var ve = _e.scrollTop;
        return _e.tagName.toLowerCase() === "body" && (ve = ve || document.documentElement.scrollTop), ve;
      }
      function Sl(_e) {
        var ve = _e.scrollLeft;
        return _e.tagName.toLowerCase() === "body" && (ve = ve || document.documentElement.scrollLeft), ve;
      }
      function $o() {
        ht = E.cumulativeOffset(I), mt = E.cumulativeOffset(O), z && (ue = mt.left - ht.left + ne, de = ue - ae), G && (re = mt.top - ht.top + ne, ge = re - Pe);
      }
      function Po(_e) {
        if (Ue)
          return Eo();
        Le || (Le = _e), te || $o(), gr = _e - Le, zt = Math.min(gr / V, 1), zt = rt(zt), Co(I, Pe + ge * zt, ae + de * zt), gr < V ? window.requestAnimationFrame(Po) : Eo();
      }
      function Eo() {
        Ue || Co(I, re, ue), Le = !1, E.off(I, j, Te), Ue && nt && nt(Ft, O), !Ue && me && me(O);
      }
      function Co(_e, ve, oe) {
        G && (_e.scrollTop = ve), z && (_e.scrollLeft = oe), _e.tagName.toLowerCase() === "body" && (G && (document.documentElement.scrollTop = ve), z && (document.documentElement.scrollLeft = oe));
      }
      function kl(_e, ve) {
        var oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (n(ve) === "object" ? oe = ve : typeof ve == "number" && (oe.duration = ve), O = E.$(_e), !O)
          return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + _e);
        if (I = E.$(oe.container || C.container), V = oe.hasOwnProperty("duration") ? oe.duration : C.duration, te = oe.hasOwnProperty("lazy") ? oe.lazy : C.lazy, ie = oe.easing || C.easing, ne = oe.hasOwnProperty("offset") ? oe.offset : C.offset, je = oe.hasOwnProperty("force") ? oe.force !== !1 : C.force, Se = oe.hasOwnProperty("cancelable") ? oe.cancelable !== !1 : C.cancelable, ke = oe.onStart || C.onStart, me = oe.onDone || C.onDone, nt = oe.onCancel || C.onCancel, z = oe.x === void 0 ? C.x : oe.x, G = oe.y === void 0 ? C.y : oe.y, typeof ne == "function" && (ne = ne(O, I)), ae = Sl(I), Pe = Ol(I), $o(), Ue = !1, !je) {
          var $l = I.tagName.toLowerCase() === "body" ? document.documentElement.clientHeight || window.innerHeight : I.offsetHeight, jo = Pe, Pl = jo + $l, To = re - ne, El = To + O.offsetHeight;
          if (To >= jo && El <= Pl) {
            me && me(O);
            return;
          }
        }
        if (ke && ke(O), !ge && !de) {
          me && me(O);
          return;
        }
        return typeof ie == "string" && (ie = x[ie] || x.ease), rt = S.apply(S, ie), E.on(I, j, Te, {
          passive: !0
        }), window.requestAnimationFrame(Po), function() {
          Ft = null, Ue = !0;
        };
      }
      return kl;
    }, Y = H(), W = [];
    function ee(L) {
      for (var O = 0; O < W.length; ++O)
        if (W[O].el === L)
          return W.splice(O, 1), !0;
      return !1;
    }
    function le(L) {
      for (var O = 0; O < W.length; ++O)
        if (W[O].el === L)
          return W[O];
    }
    function He(L) {
      var O = le(L);
      return O || (W.push(O = {
        el: L,
        binding: {}
      }), O);
    }
    function Ce(L) {
      var O = He(this).binding;
      if (!!O.value) {
        if (L.preventDefault(), typeof O.value == "string")
          return Y(O.value);
        Y(O.value.el || O.value.element, O.value);
      }
    }
    var Fe = {
      bind: function(O, I) {
        He(O).binding = I, E.on(O, "click", Ce);
      },
      unbind: function(O) {
        ee(O), E.off(O, "click", Ce);
      },
      update: function(O, I) {
        He(O).binding = I;
      }
    }, tt = {
      bind: Fe.bind,
      unbind: Fe.unbind,
      update: Fe.update,
      beforeMount: Fe.bind,
      unmounted: Fe.unbind,
      updated: Fe.update,
      scrollTo: Y,
      bindings: W
    }, pt = function(O, I) {
      I && R(I), O.directive("scroll-to", tt);
      var V = O.config.globalProperties || O.prototype;
      V.$scrollTo = tt.scrollTo;
    };
    return typeof window < "u" && window.Vue && (window.VueScrollTo = tt, window.VueScrollTo.setDefaults = R, window.VueScrollTo.scroller = H, window.Vue.use && window.Vue.use(pt)), tt.install = pt, tt;
  });
})(_l);
const yl = _l.exports, xm = /* @__PURE__ */ h("div", { class: "text-sm font-semibold leading-6 text-gray-900 dark:text-white" }, " On this page ", -1), Om = { class: "mt-4 text-sm leading-6 text-slate-700 dark:text-slate-400" }, Sm = ["onClick"], km = ["href"], $m = { key: 0 }, Pm = { class: "" }, Em = ["href"], Cm = /* @__PURE__ */ h("svg", {
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
], -1), jm = /* @__PURE__ */ D({
  __name: "OnThisPage",
  setup(e) {
    const { page: t } = Ne(), n = A(() => t.value.headers), r = A(() => n.value.flatMap((p) => [
      p.link,
      ...p.children.map((f) => f.link)
    ]).map((p) => {
      if (p.charAt(0) === "#")
        return p.substring(1);
    }).filter(Boolean));
    function o(p) {
      if (!Ir)
        return -1;
      let f = document.getElementById(p);
      if (!f)
        return -1;
      let d = window.getComputedStyle(f), v = parseFloat(d.scrollMarginTop), g = parseFloat(d.marginTop);
      return window.scrollY + f.getBoundingClientRect().top - v - g - 5;
    }
    const i = T(r.value[0]), { y: a } = Jd();
    Oe(() => {
      let p;
      for (const f of r.value)
        a.value >= o(f) && (p = f);
      i.value = p != null ? p : r.value[0];
    });
    function s(p) {
      return Ir ? p.link.substring(1) === i.value ? !0 : p.children ? p.children.findIndex(s) > -1 : !1 : !1;
    }
    function l({ target: p }) {
      const f = "#" + p.href.split("#")[1], d = document.querySelector(
        decodeURIComponent(f)
      );
      d == null || d.focus();
    }
    const u = A(() => (p) => {
      const f = s(p) ? "text-blue-500 dark:text-cyan-400" : "hover:text-slate-900 dark:hover:text-slate-300", d = p.title.includes(" ") ? "break-words" : "break-all";
      return f + " " + d;
    }), c = () => {
      yl.scrollTo("#top", 200, {
        force: !0
      });
    };
    return (p, f) => (_(), w(F, null, [
      xm,
      h("ol", Om, [
        h("li", null, [
          h("button", {
            href: "#top",
            onClick: wt(c, ["prevent"]),
            class: "block py-1 font-medium opacity-50 transition-opacity hover:text-slate-900 hover:opacity-100 dark:hover:text-slate-300"
          }, " \u2191 Top ", 8, Sm)
        ]),
        (_(!0), w(F, null, X($(n), (d) => (_(), w("li", null, [
          h("a", {
            href: d.link,
            onClick: l,
            class: Z([
              "block py-1 font-medium",
              s(d) ? "text-blue-500 dark:text-cyan-400" : "hover:text-slate-900 dark:hover:text-slate-300"
            ])
          }, U(d.title), 11, km),
          d.children ? (_(), w("ol", $m, [
            (_(!0), w(F, null, X(d.children, (v) => (_(), w("li", Pm, [
              h("a", {
                href: v.link,
                onClick: l,
                class: Z(["group flex items-start py-1", $(u)(v)])
              }, [
                Cm,
                Ae(" " + U(v.title), 1)
              ], 10, Em)
            ]))), 256))
          ])) : J("", !0)
        ]))), 256))
      ])
    ], 64));
  }
});
function Tm() {
  const { frontmatter: e, page: t } = Ne();
  return A(() => {
    var s, l;
    const n = yn(), r = xo(n.value).filter(
      (u) => !!u.link
    ), o = r.findIndex((u) => St(t.value.relativePath, u.link)), i = e.value.prev ? r.find((u) => u.link === e.value.prev) : r[o - 1], a = e.value.next ? r.find((u) => u.link === e.value.next) : r[o + 1];
    return {
      prev: e.value.prev !== !1 && i && { ...i, text: (s = e.value.prevText) != null ? s : i.text },
      next: e.value.next !== !1 && a && { ...a, text: (l = e.value.nextText) != null ? l : a.text }
    };
  });
}
const Am = { class: "mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800" }, Im = { key: 0 }, Dm = /* @__PURE__ */ h("dt", { class: "font-display text-sm font-medium text-slate-900 dark:text-white" }, " Previous ", -1), Nm = { class: "mt-1" }, Lm = ["href"], Mm = /* @__PURE__ */ h("span", { "aria-hidden": "true" }, "\u2190", -1), Rm = ["innerHTML"], Bm = {
  key: 1,
  class: "ml-auto text-right"
}, Hm = /* @__PURE__ */ h("dt", { class: "font-display text-sm font-medium text-slate-900 dark:text-white" }, " Next ", -1), Fm = { class: "mt-1" }, zm = ["href"], Vm = ["innerHTML"], Um = /* @__PURE__ */ h("span", { "aria-hidden": "true" }, "\u2192", -1), qm = /* @__PURE__ */ D({
  __name: "PrevNextLinks",
  setup(e) {
    const t = Tm();
    return (n, r) => (_(), w("dl", Am, [
      $(t).prev ? (_(), w("div", Im, [
        Dm,
        h("dd", Nm, [
          h("a", {
            href: $(t).prev.link,
            class: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          }, [
            Mm,
            h("span", {
              innerHTML: $(t).prev.text
            }, null, 8, Rm)
          ], 8, Lm)
        ])
      ])) : J("", !0),
      $(t).next ? (_(), w("div", Bm, [
        Hm,
        h("dd", Fm, [
          h("a", {
            href: $(t).next.link,
            class: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          }, [
            h("span", {
              innerHTML: $(t).next.text
            }, null, 8, Vm),
            Um
          ], 8, zm)
        ])
      ])) : J("", !0)
    ]));
  }
});
function Wm() {
  const { theme: e, page: t } = Ne(), n = pn();
  return A(() => {
    const { text: r = "Edit this page", pattern: o } = e.value.editLink || {}, { relativePath: i } = t.value, a = n.path;
    return { url: o.replace(/:path/g, a).replace(/:filePath/g, i), text: r };
  });
}
const Km = {
  id: "content",
  class: "static max-h-full w-full min-w-0 flex-auto overflow-y-visible"
}, Jm = { class: "flex w-full" }, Gm = { class: "min-w-0 flex-auto" }, Qm = /* @__PURE__ */ h("div", { class: "mx-2 rounded-b-md bg-amber-100/70 px-4 py-2 text-amber-900 dark:mt-px dark:bg-amber-400/10 dark:text-amber-300 dark:ring-1 dark:ring-amber-300/30" }, [
  /* @__PURE__ */ h("strong", null, "Note:"),
  /* @__PURE__ */ Ae(" You are on the beta version of our docs. This is a work in progress and may contain broken links and pages. ")
], -1), Ym = { class: "mt-4 flex h-[42px] items-center" }, Zm = { class: "px-6 pt-10 pb-[70vh] xl:px-10" }, Xm = {
  key: 0,
  id: "header"
}, e2 = {
  key: 0,
  class: "mb-2 text-base font-semibold leading-6 text-blue-500 dark:text-cyan-400"
}, t2 = { class: "text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl" }, n2 = { class: "mt-2 text-lg text-slate-700 dark:text-slate-400" }, r2 = { class: "hidden w-72 flex-none xl:block" }, o2 = { class: "h-sidebar sticky top-[72px] overflow-y-auto overflow-x-hidden" }, i2 = { class: "pt-16 pb-10 pr-3" }, a2 = ["href"], s2 = /* @__PURE__ */ D({
  __name: "default",
  setup(e) {
    const { page: t } = Ne(), n = Wm(), r = yn(), o = A(() => xo(r.value)), i = A(() => o.value.find(
      (l) => St(t.value.relativePath, l.link)
    )), a = A(() => {
      var l, u;
      return t.value.title ? t.value.title : (u = (l = i.value) == null ? void 0 : l.text) != null ? u : !1;
    }), s = A(() => {
      var u;
      if (t.value.frontmatter.category)
        return t.value.frontmatter.category;
      let l = i.value;
      for (; l != null && l.parent; )
        l = l.parent;
      return (u = l == null ? void 0 : l.text) != null ? u : !1;
    });
    return (l, u) => {
      const c = xe("Content");
      return _(), w("div", Km, [
        h("div", Jm, [
          h("div", Gm, [
            Qm,
            h("div", Ym, [
              B(pm, { class: "px-6 xl:px-10" })
            ]),
            h("div", Zm, [
              $(a) ? (_(), w("header", Xm, [
                $(s) ? (_(), w("p", e2, U($(s)), 1)) : J("", !0),
                h("h1", t2, U($(a)), 1),
                h("p", n2, U($(t).description), 1)
              ])) : J("", !0),
              B(c, { class: "prose-headings:font-display prose prose-slate mx-auto max-w-none prose-a:font-semibold prose-lead:text-slate-500 dark:prose-invert dark:prose-a:text-cyan-400 dark:prose-hr:border-slate-800 dark:prose-lead:text-slate-400" }),
              B(qm)
            ])
          ]),
          h("div", r2, [
            h("div", o2, [
              h("div", i2, [
                B(jm),
                $(t).frontmatter.layout !== "api" ? (_(), w(F, { key: 0 }, [
                  B(_m, { class: "mt-4" }),
                  h("a", {
                    href: $(n).url,
                    target: "_blank",
                    class: "mt-4 block rounded-md border border-gray-400 bg-white px-4 py-2 text-center text-sm text-gray-700 hover:border-gray-600 hover:text-gray-900 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-white/40"
                  }, U($(n).text), 9, a2),
                  B(wm, { class: "mt-2" })
                ], 64)) : J("", !0)
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), l2 = {
  id: "content",
  class: "static max-h-full w-full min-w-0 flex-auto overflow-y-visible"
}, c2 = { class: "flex w-full" }, u2 = { class: "min-w-0 flex-auto" }, d2 = { class: "px-6 pt-10 xl:px-10" }, f2 = /* @__PURE__ */ h("header", { id: "header" }, [
  /* @__PURE__ */ h("h1", { class: "text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl" }, " 404 "),
  /* @__PURE__ */ h("h2", { class: "mt-2 text-xl font-semibold text-slate-900 dark:text-slate-400 sm:text-3xl" }, " Page Not Found ")
], -1), p2 = { class: "prose-headings:font-display prose prose-slate mx-auto mt-4 max-w-none prose-a:font-semibold prose-lead:text-slate-500 dark:prose-invert dark:prose-a:text-cyan-400 dark:prose-hr:border-slate-800 dark:prose-lead:text-slate-400" }, h2 = /* @__PURE__ */ h("p", null, " This page doesn't exist or has been removed. Perhaps not included in the docs yet? ", -1), m2 = /* @__PURE__ */ h("a", {
  href: "/",
  class: "rounded-md bg-blue-500 px-4 py-2 text-lg text-white no-underline"
}, "Go Home", -1), v2 = /* @__PURE__ */ h("p", null, "Here are some links that may be what you are looking for:", -1), g2 = ["href"], rr = /* @__PURE__ */ D({
  __name: "NotFound",
  setup(e) {
    const t = pn(), n = T([]);
    return console.log(t.path), se(() => {
      n.value.push(`https://v7.docs.nativescript.org${t.path}`), n.value.push(`https://v6.docs.nativescript.org${t.path}`), n.value.push("https://v7.docs.nativescript.org"), n.value.push("https://v6.docs.nativescript.org");
    }), (r, o) => (_(), w("div", l2, [
      h("div", c2, [
        h("div", u2, [
          h("div", d2, [
            f2,
            h("div", p2, [
              h2,
              m2,
              v2,
              h("ul", null, [
                (_(!0), w(F, null, X(n.value, (i) => (_(), w("li", { key: i }, [
                  h("a", {
                    href: i,
                    target: "_blank"
                  }, U(i), 9, g2)
                ]))), 128))
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), _2 = {
  id: "top",
  class: "min-h-screen font-sans antialiased"
}, y2 = { class: "mx-auto lg:px-6 2xl:container" }, b2 = { class: "flex" }, w2 = { class: "hidden lg:relative lg:block lg:flex-none" }, x2 = /* @__PURE__ */ h("div", { class: "absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" }, null, -1), O2 = /* @__PURE__ */ h("div", { class: "absolute top-12 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" }, null, -1), S2 = /* @__PURE__ */ h("div", { class: "absolute top-24 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" }, null, -1), k2 = { class: "h-sidebar sticky top-[72px] overflow-y-auto overflow-x-hidden overscroll-contain" }, $2 = { class: "w-64 pt-4 pr-4 pb-10 xl:w-72" }, P2 = { class: "flex items-center" }, E2 = /* @__PURE__ */ D({
  __name: "Layout",
  setup(e) {
    const { theme: t } = Ne(), n = pn();
    return (r, o) => (_(), w("div", _2, [
      B($(tm), {
        mainURL: $(t).mainURL
      }, {
        right: pe(() => [
          B(ef)
        ]),
        _: 1
      }, 8, ["mainURL"]),
      B(Sf),
      h("div", y2, [
        h("div", b2, [
          h("div", w2, [
            x2,
            O2,
            S2,
            h("div", k2, [
              h("div", $2, [
                h("div", P2, [
                  B(of, { class: "flex-1" })
                ]),
                B(zp, { class: "mt-6" }),
                B(tp, { class: "mt-8" })
              ])
            ])
          ]),
          $(n).component === rr ? (_(), ce(rr, { key: 0 })) : (_(), ce(s2, { key: 1 }))
        ])
      ])
    ]));
  }
});
const C2 = { class: "mt-10 mb-16" }, j2 = { class: "border-b border-gray-200 dark:border-white/5" }, T2 = { class: "z-10 -mb-px flex" }, A2 = ["onClick"], I2 = /* @__PURE__ */ D({
  __name: "FlavorTabs",
  setup(e) {
    const { value: t, set: n } = As(), r = T([]), o = T(), i = T(), a = () => {
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
    se(() => {
      a();
    }), $e(o, (l, u) => {
      u == null || u.hide(), l == null || l.show();
    }), $e(t, () => {
      var u;
      const l = (u = r.value.find((c) => c.title.toLowerCase() === t.value)) != null ? u : r.value[0];
      o.value = l;
    });
    function s(l, u) {
      const c = l.target, p = Math.round(c.getBoundingClientRect().top);
      o.value = u, n(u.title.toLowerCase()), or(() => {
        yl.scrollTo(c, 0, {
          offset: -p,
          force: !0,
          cancelable: !1
        });
      });
    }
    return (l, u) => (_(), w("div", C2, [
      h("div", j2, [
        h("div", T2, [
          (_(!0), w(F, null, X(r.value, (c) => (_(), w("button", {
            key: c.index,
            class: Z(["whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium uppercase focus:outline-none", {
              "border-ns-blue text-ns-blue focus:border-ns-blue dark:border-cyan-300 dark:text-cyan-300 dark:focus:border-cyan-300": o.value === c,
              "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 dark:text-white/90": o.value !== c
            }]),
            onClick: wt((p) => s(p, c), ["prevent"])
          }, U(c.title), 11, A2))), 128))
        ])
      ]),
      h("div", {
        class: "tab-container relative -mt-px rounded-md rounded-t-none border px-4 shadow-lg dark:border-transparent dark:shadow-cyan-300/5",
        ref_key: "tabContainer",
        ref: i
      }, [
        De(l.$slots, "default")
      ], 512)
    ]));
  }
}), D2 = { class: "mt-10 mb-4" }, N2 = { class: "" }, L2 = { class: "z-10 flex rounded-t-md border border-white/10 bg-gray-900 dark:bg-transparent" }, M2 = ["onClick"], R2 = /* @__PURE__ */ D({
  __name: "CodeTabs",
  setup(e) {
    const t = T(0), n = T(), r = T([]), o = () => {
      n.value && (r.value = [], Array.from(n.value.children).map((i, a) => {
        a !== t.value && i.classList.add("hidden"), r.value.push({
          title: i.dataset.tabTitle,
          index: a
        });
      }));
    };
    return se(() => {
      o();
    }), $e(t, (i, a) => {
      var s, l;
      (s = n.value) == null || s.children[a].classList.add("hidden"), (l = n.value) == null || l.children[i].classList.remove("hidden");
    }), (i, a) => (_(), w("div", D2, [
      h("div", N2, [
        h("div", L2, [
          (_(!0), w(F, null, X(r.value, (s) => (_(), w("button", {
            key: s.index,
            class: Z(["whitespace-nowrap border-b px-6 py-3 text-sm font-medium focus:outline-none", {
              "border-cyan-300 text-cyan-200 focus:border-cyan-300": t.value === s.index,
              "border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-100 focus:border-gray-300": t.value !== s.index
            }]),
            onClick: wt((l) => t.value = s.index, ["prevent"])
          }, U(s.title), 11, M2))), 128))
        ])
      ]),
      h("div", {
        class: "code-tab-container",
        ref_key: "tabContainer",
        ref: n
      }, [
        De(i.$slots, "default")
      ], 512)
    ]));
  }
});
const B2 = { class: "flex flex-col" }, H2 = {
  key: 0,
  class: "flex h-5 items-center justify-center"
}, F2 = /* @__PURE__ */ h("div", { class: "h-5 w-20 rounded-full ring-1 ring-ns-blue dark:ring-cyan-700" }, null, -1), z2 = /* @__PURE__ */ h("div", { class: "ml-4 h-5 w-5 rounded-full ring-1 ring-ns-blue dark:ring-cyan-700" }, null, -1), V2 = [
  F2,
  z2
], U2 = {
  key: 1,
  class: "flex h-5 items-center justify-center"
}, q2 = /* @__PURE__ */ h("span", { class: "flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-ns-blue dark:ring-cyan-700" }, [
  /* @__PURE__ */ h("span", { class: "absolute h-0.5 w-0.5 rounded-full bg-ns-blue dark:bg-white" })
], -1), W2 = [
  q2
], K2 = /* @__PURE__ */ D({
  __name: "DeviceFrame",
  props: {
    type: String
  },
  setup(e) {
    return (t, n) => (_(), w("div", {
      class: Z(["device not-prose mr-6 inline-flex rounded-[36px] p-4 ring-1 ring-ns-blue dark:ring-cyan-700", {
        "rounded-[36px]": e.type === "ios",
        "rounded-[16px]": e.type === "android"
      }])
    }, [
      h("div", B2, [
        e.type === "ios" ? (_(), w("div", H2, V2)) : e.type === "android" ? (_(), w("div", U2, W2)) : J("", !0),
        h("div", {
          class: Z(["relative mt-4 overflow-hidden ring-1 ring-ns-blue dark:ring-cyan-700", {
            "rounded-b-[20px]": e.type === "ios",
            "rounded-b-[4px]": e.type === "android"
          }])
        }, [
          De(t.$slots, "default")
        ], 2)
      ])
    ], 2));
  }
});
const J2 = /* @__PURE__ */ D({
  __name: "Heading",
  props: {
    ignore: { type: Boolean }
  },
  setup(e) {
    return (t, n) => De(t.$slots, "default");
  }
}), G2 = { class: "not-prose" }, Q2 = ["href"], Y2 = /* @__PURE__ */ h("svg", {
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
], -1), Z2 = /* @__PURE__ */ D({
  __name: "ExternalButtonLink",
  props: {
    href: null,
    text: null
  },
  setup(e) {
    return (t, n) => (_(), w("div", G2, [
      h("a", {
        href: e.href,
        target: "_blank",
        class: "inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-400 dark:bg-cyan-500 dark:text-slate-900 dark:hover:bg-cyan-400"
      }, [
        Ae(U(e.text) + " ", 1),
        Y2
      ], 8, Q2)
    ]));
  }
}), X2 = {}, ev = {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "xml:space": "preserve",
  "xmlns:serif": "http://www.serif.com/",
  style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
}, tv = /* @__PURE__ */ h("g", { transform: "matrix(1,0,0,1,-2248,0)" }, [
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
], -1), nv = [
  tv
];
function rv(e, t) {
  return _(), w("svg", ev, nv);
}
const jt = /* @__PURE__ */ kt(X2, [["render", rv]]), ov = { class: "not-prose -mx-4 grid grid-cols-4 gap-4" }, iv = ["href"], av = { class: "ml-4" }, sv = /* @__PURE__ */ h("div", { class: "text-lg font-semibold" }, "NativeScript", -1), lv = { class: "text-sm" }, cv = /* @__PURE__ */ D({
  __name: "StackBlitzLinks",
  setup(e) {
    const t = [
      {
        name: "TypeScript",
        link: "https://nativescript.new/",
        icon: jt
      },
      {
        name: "JavaScript",
        link: "https://nativescript.new/js",
        icon: jt
      },
      {
        name: "Angular",
        link: "https://nativescript.new/angular",
        icon: jt
      },
      {
        name: "Vue",
        link: "https://nativescript.new/vue",
        icon: jt
      },
      {
        name: "React",
        link: "https://nativescript.new/react",
        icon: jt
      },
      {
        name: "Svelte",
        link: "https://nativescript.new/Svelte",
        icon: jt
      }
    ];
    return (n, r) => (_(), w("div", ov, [
      (_(), w(F, null, X(t, (o) => h("a", {
        href: o.link,
        target: "blank",
        class: "flex items-center rounded-md px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5"
      }, [
        h("div", null, [
          (_(), ce(hn(o.icon), { class: "h-10 w-10" }))
        ]),
        h("div", av, [
          sv,
          h("div", lv, U(o.name), 1)
        ])
      ], 8, iv)), 64))
    ]));
  }
});
const uv = {}, dv = { class: "step-list" };
function fv(e, t) {
  return _(), w("div", dv, [
    De(e.$slots, "default")
  ]);
}
const pv = /* @__PURE__ */ kt(uv, [["render", fv]]), hv = /* @__PURE__ */ D({
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
    }, r = A(() => Object.keys(t.flags).map((o) => n[o]).filter(Boolean));
    return (o, i) => (_(!0), w(F, null, X($(r), (a) => (_(), w("span", {
      class: Z(["inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium", a.class])
    }, U(a.text), 3))), 256));
  }
}), mv = { class: "flex items-baseline" }, vv = {
  key: 0,
  class: "ml-2"
}, gv = { class: "space-y-4" }, _v = { class: "pb-2" }, yv = { class: "relative" }, bv = ["id", "href"], wv = ["innerHTML"], xv = {
  key: 2,
  class: "mt-4 mb-0 whitespace-normal [&_a]:text-blue-400 [&_a]:no-underline"
}, Ov = ["href"], Sv = { class: "text-right text-sm text-slate-500" }, kv = { key: 0 }, $v = ["href"], Pv = ["href"], Ev = {
  key: 0,
  class: "prose prose-slate flex min-w-full items-center dark:prose-invert sm:pl-0"
}, Cv = /* @__PURE__ */ h("svg", {
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
], -1), jv = { class: "ml-2" }, Tv = ["innerHTML"], Av = /* @__PURE__ */ D({
  __name: "APIRef",
  props: {
    for: null
  },
  setup(e) {
    const t = e, n = he("API_DATA"), r = A(() => {
      var s;
      return (s = n == null ? void 0 : n.reflections) == null ? void 0 : s[Number(t.for)];
    });
    function o(s) {
      let l = s.fileName;
      return s.line && (l += ":" + s.line, s.character && (l += ":" + s.character)), l;
    }
    function i(s) {
      var l;
      return ((l = s.fileName) == null ? void 0 : l.replace(
        "@nativescript/core",
        "https://unpkg.com/browse/@nativescript/core/"
      )) + `#L${s.line}`;
    }
    function a(s) {
      if (!!s)
        return new URL("https://localhost" + s).hash;
    }
    return (s, l) => {
      var p, f;
      const u = xe("APIRefComment"), c = xe("APIRefParameters");
      return _(), w(F, null, [
        h("div", mv, [
          De(s.$slots, "title"),
          (p = $(r)) != null && p.flags ? (_(), w("div", vv, [
            B(hv, {
              flags: $(r).flags
            }, null, 8, ["flags"])
          ])) : J("", !0)
        ]),
        h("div", gv, [
          (_(!0), w(F, null, X((f = $(r)) == null ? void 0 : f.signatures, (d) => {
            var v, g;
            return _(), w("div", _v, [
              h("div", yv, [
                d.url ? (_(), w("a", {
                  key: 0,
                  id: a(d.url),
                  href: a(d.url),
                  class: "not-prose absolute inset-y-0 -left-6 flex items-center"
                }, null, 8, bv)) : J("", !0),
                d.code ? (_(), w("pre", {
                  key: 1,
                  innerHTML: d.code,
                  class: "mt-4 mb-0 [&_a]:text-blue-400 [&_a]:no-underline"
                }, null, 8, wv)) : J("", !0),
                d.target ? (_(), w("pre", xv, [
                  Ae(`          Alias for
          `),
                  h("a", {
                    href: d.target.url,
                    class: "not-prose text-blue-400 underline"
                  }, [
                    h("code", null, U(d.target.name), 1)
                  ], 8, Ov),
                  Ae(`
        `)
                ])) : J("", !0)
              ]),
              h("div", {
                class: Z(["pt-2", {
                  "rouded-b-md bg-slate-50 px-4 pb-4": ((g = (v = $(r)) == null ? void 0 : v.signatures) == null ? void 0 : g.length) > 1
                }])
              }, [
                h("div", Sv, [
                  d.inheritedFrom ? (_(), w("div", kv, [
                    Ae(" inherited from "),
                    h("a", {
                      href: d.inheritedFrom.url
                    }, U(d.inheritedFrom.name), 9, $v)
                  ])) : J("", !0),
                  (_(!0), w(F, null, X(d.sources, (y) => (_(), w("div", null, [
                    Ae(" defined in "),
                    h("a", {
                      href: i(y),
                      target: "_blank"
                    }, U(o(y)), 9, Pv)
                  ]))), 256))
                ]),
                B(u, {
                  comment: d == null ? void 0 : d.comment
                }, null, 8, ["comment"]),
                B(c, {
                  parameters: d.parameters
                }, null, 8, ["parameters"]),
                d.returns ? (_(), w("div", Ev, [
                  Cv,
                  h("span", jv, [
                    Ae(" Returns "),
                    h("i", {
                      class: "font-semibold italic",
                      innerHTML: d.returns
                    }, null, 8, Tv)
                  ])
                ])) : J("", !0)
              ], 2)
            ]);
          }), 256))
        ])
      ], 64);
    };
  }
}), Iv = {
  key: 0,
  class: "not-prose mt-4"
}, Dv = /* @__PURE__ */ D({
  __name: "APIRefComment",
  props: {
    comment: null,
    commentBase64: null
  },
  setup(e) {
    const t = e, n = A(() => {
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
      var a;
      return $(n) ? (_(), w("div", Iv, [
        (_(!0), w(F, null, X((a = $(n)) == null ? void 0 : a.summary, (s) => (_(), ce(hn(r[s.kind].tag), {
          class: Z(r[s.kind].class),
          innerHTML: s.text
        }, null, 8, ["class", "innerHTML"]))), 256))
      ])) : J("", !0);
    };
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Nv = () => {
}, Lv = Object.assign, Mv = Array.isArray, Rv = (e) => typeof e == "function", Bv = (e) => typeof e == "symbol";
let Hv;
function Fv(e, t = Hv) {
  t && t.active && t.effects.push(e);
}
const Pa = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, bl = (e) => (e.w & ut) > 0, wl = (e) => (e.n & ut) > 0, zv = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ut;
}, Vv = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      bl(o) && !wl(o) ? o.delete(e) : t[n++] = o, o.w &= ~ut, o.n &= ~ut;
    }
    t.length = n;
  }
};
let Qt = 0, ut = 1;
const po = 30;
let Ee;
Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Uv {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Fv(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Ee, n = Rn;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Ee, Ee = this, Rn = !0, ut = 1 << ++Qt, Qt <= po ? zv(this) : Ea(this), this.fn();
    } finally {
      Qt <= po && Vv(this), ut = 1 << --Qt, Ee = this.parent, Rn = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ee === this ? this.deferStop = !0 : this.active && (Ea(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ea(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Rn = !0;
function Ca(e, t) {
  let n = !1;
  Qt <= po ? wl(e) || (e.n |= ut, n = !bl(e)) : n = !e.has(Ee), n && (e.add(Ee), Ee.deps.push(e), process.env.NODE_ENV !== "production" && Ee.onTrack && Ee.onTrack(Object.assign({ effect: Ee }, t)));
}
function ja(e, t) {
  const n = Mv(e) ? e : [...e];
  for (const r of n)
    r.computed && Ta(r, t);
  for (const r of n)
    r.computed || Ta(r, t);
}
function Ta(e, t) {
  (e !== Ee || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Lv({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bv)
);
function vr(e) {
  const t = e && e.__v_raw;
  return t ? vr(t) : e;
}
function qv(e) {
  Rn && Ee && (e = vr(e), process.env.NODE_ENV !== "production" ? Ca(e.dep || (e.dep = Pa()), {
    target: e,
    type: "get",
    key: "value"
  }) : Ca(e.dep || (e.dep = Pa())));
}
function Wv(e, t) {
  e = vr(e), e.dep && (process.env.NODE_ENV !== "production" ? ja(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : ja(e.dep));
}
var xl;
class Kv {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[xl] = !1, this._dirty = !0, this.effect = new Uv(t, () => {
      this._dirty || (this._dirty = !0, Wv(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = vr(this);
    return qv(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
xl = "__v_isReadonly";
function Jv(e, t, n = !1) {
  let r, o;
  const i = Rv(e);
  i ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Nv) : (r = e.get, o = e.set);
  const a = new Kv(r, o, i || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (a.effect.onTrack = t.onTrack, a.effect.onTrigger = t.onTrigger), a;
}
const Gv = { class: "flex items-start" }, Qv = { class: "columns-1 gap-8 sm:columns-2 md:columns-3 lg:columns-4" }, Yv = ["href"], Zv = {
  key: 1,
  class: "block font-bold text-slate-800 dark:text-slate-300"
}, Xv = /* @__PURE__ */ D({
  __name: "APIRefHierarchyItem",
  props: {
    hierarchy: null,
    root: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Jv(() => {
      const r = t.hierarchy.at(0);
      return r ? Array.isArray(r) ? r : [r] : !1;
    });
    return (r, o) => {
      const i = xe("APIRefHierarchyItem", !0);
      return $(n) ? (_(), w("div", {
        key: 0,
        class: Z({ "pl-4": !e.root })
      }, [
        h("div", Gv, [
          e.root ? J("", !0) : (_(), ce($(Ap), {
            key: 0,
            class: "mt-0.5 mr-2 h-5 w-5 rotate-180 transform"
          })),
          h("div", Qv, [
            (_(!0), w(F, null, X($(n), (a) => (_(), w(F, null, [
              a.link ? (_(), w("a", {
                key: 0,
                href: a.link,
                class: "block text-blue-500 no-underline hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-600"
              }, U(a.text), 9, Yv)) : (_(), w("span", Zv, U(a.text), 1))
            ], 64))), 256))
          ])
        ]),
        e.hierarchy.length ? (_(), ce(i, {
          key: 0,
          hierarchy: e.hierarchy.slice(1)
        }, null, 8, ["hierarchy"])) : J("", !0)
      ], 2)) : J("", !0);
    };
  }
}), eg = { class: "mt-6 font-medium" }, tg = /* @__PURE__ */ D({
  __name: "APIRefHierarchy",
  props: {
    hierarchy: { default: () => [
      { text: "ViewBase", link: "//#" },
      { text: "View", link: "//#" },
      { text: "ActionBar" }
    ] }
  },
  setup(e) {
    const t = e, n = he("API_DATA"), r = A(() => {
      var o;
      return (o = n == null ? void 0 : n.hierarchy) != null ? o : t.hierarchy;
    });
    return (o, i) => (_(), w("div", eg, [
      B(Xv, {
        hierarchy: $(r),
        root: !0
      }, null, 8, ["hierarchy"])
    ]));
  }
}), ng = {
  key: 0,
  class: "not-prose mt-4"
}, rg = { class: "not-prose mt-4" }, og = { class: "-mx-4 overflow-x-auto sm:mx-0" }, ig = { class: "inline-block min-w-full" }, ag = { class: "w- w-full min-w-[540px] border-b border-slate-200 text-left dark:border-slate-700 sm:min-w-full" }, sg = { class: "divide-y divide-slate-200 dark:divide-slate-700" }, lg = /* @__PURE__ */ h("tr", { class: "w-1/4 text-slate-900 dark:text-slate-400" }, [
  /* @__PURE__ */ h("td", { class: "w-1/6 whitespace-nowrap py-2 pl-4 text-sm font-medium sm:pl-0" }, " Parameter "),
  /* @__PURE__ */ h("td", { class: "w-1/6 whitespace-nowrap py-2 text-sm font-medium" }, " Default "),
  /* @__PURE__ */ h("td", { class: "w-2/3 whitespace-nowrap py-2 text-sm font-medium" }, " Description ")
], -1), cg = { class: "" }, ug = { class: "prose-sm prose prose-slate py-3 pl-4 align-baseline dark:prose-invert sm:pl-0" }, dg = ["innerHTML"], fg = { class: "prose-sm prose prose-slate py-3 align-baseline dark:prose-invert" }, pg = { class: "" }, hg = { class: "py-3 align-baseline" }, mg = { class: "prose-sm prose prose-slate my-0 space-x-5 whitespace-nowrap dark:prose-invert [&_a]:text-blue-500 dark:[&_a]:text-cyan-400" }, vg = ["innerHTML"], gg = { class: "prose-sm prose prose-slate dark:prose-invert" }, _g = /* @__PURE__ */ D({
  __name: "APIRefParameters",
  props: {
    parameters: null
  },
  setup(e) {
    return (t, n) => {
      var o;
      const r = xe("APIRefComment");
      return (o = e.parameters) != null && o.length ? (_(), w("div", ng, [
        h("div", rg, [
          h("div", og, [
            h("div", ig, [
              h("table", ag, [
                h("tbody", sg, [
                  lg,
                  (_(!0), w(F, null, X(e.parameters, (i) => (_(), w("tr", cg, [
                    h("td", ug, [
                      h("code", {
                        innerHTML: i.name
                      }, null, 8, dg)
                    ]),
                    h("td", fg, [
                      h("span", pg, [
                        h("code", null, U(i.defaultValue), 1)
                      ])
                    ]),
                    h("td", hg, [
                      h("div", mg, [
                        h("span", null, [
                          h("code", {
                            class: "font-bold",
                            innerHTML: i.type
                          }, null, 8, vg)
                        ])
                      ]),
                      h("div", gg, [
                        h("p", null, [
                          B(r, {
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
      ])) : J("", !0);
    };
  }
}), { createElementVNode: yg, openBlock: bg, createElementBlock: wg } = Ye;
var xg = function(t, n) {
  return bg(), wg("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    yg("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: Og, openBlock: Sg, createElementBlock: kg } = Ye;
var $g = function(t, n) {
  return Sg(), kg("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Og("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z",
      "clip-rule": "evenodd"
    })
  ]);
}, Pg = xg, Aa = $g;
const Eg = { key: 0 }, Cg = { key: 0 }, jg = { class: "columns-1 gap-4 sm:columns-2 2xl:columns-3" }, Tg = ["href"], Ag = ["innerHTML"], Ig = { class: "-mx-4 mt-4 rounded-lg border border-slate-200 dark:border-slate-700" }, Dg = ["onClick"], Ng = { class: "ml-2" }, Lg = ["href", "innerHTML"], Mg = ["innerHTML"], Rg = { class: "flex-1 text-right text-xs" }, Bg = { class: "columns-1 p-4 sm:columns-2 2xl:columns-3" }, Hg = ["href"], Fg = ["innerHTML"], zg = /* @__PURE__ */ D({
  __name: "APIRefSummary",
  setup(e) {
    const t = he("API_DATA"), n = A(() => (c) => c.items.map((p) => {
      var f;
      return (f = t == null ? void 0 : t.reflections) == null ? void 0 : f[p];
    }).filter(Boolean)), r = A(() => (c) => n.value(c).filter((p) => p.type === "Constructor" || !p.inheritedFrom)), o = A(() => (c) => Object.values(
      n.value(c).filter((p) => p.type !== "Constructor" && !!p.inheritedFrom).reduce((p, f) => {
        var v;
        let d = f.inheritedFrom.fromName;
        return d || (d = "&laquo;External&raquo;"), (v = p[d]) != null || (p[d] = {
          name: d,
          url: f.inheritedFrom.fromUrl,
          items: []
        }), p[d].items.push(f), p;
      }, {})
    )), i = A(() => (c) => {
      var f, d;
      const p = (f = c.signatures) == null ? void 0 : f.find((v) => {
        var g;
        return !!((g = v.inheritedFrom) != null && g.url);
      });
      return (d = p == null ? void 0 : p.inheritedFrom) == null ? void 0 : d.url;
    }), a = T(/* @__PURE__ */ new Set());
    A(() => (c) => a.value.has(c.title));
    const s = T(/* @__PURE__ */ new Set());
    function l(c) {
      s.value.has(c) ? s.value.delete(c) : s.value.add(c);
    }
    const u = A(() => (c) => s.value.has(c));
    return (c, p) => $(t) ? (_(), w("div", Eg, [
      (_(!0), w(F, null, X($(t).summary, (f) => (_(), w(F, null, [
        $(r)(f).length ? (_(), w("div", Cg, [
          h("h4", null, U(f.title), 1),
          h("dl", jg, [
            (_(!0), w(F, null, X($(r)(f), (d) => (_(), w("dd", null, [
              h("a", {
                href: d.url,
                class: "flex items-center text-blue-500 no-underline hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-600"
              }, [
                B($(Aa), { class: "mr-1.5 h-5 w-5 flex-shrink-0" }),
                h("span", {
                  innerHTML: d.name
                }, null, 8, Ag)
              ], 8, Tg)
            ]))), 256))
          ]),
          Lt(h("div", Ig, [
            (_(!0), w(F, null, X($(o)(f), (d) => (_(), w("div", null, [
              h("div", {
                onClick: wt((v) => l(`${f.title}-${d.name}`), ["prevent"]),
                class: "flex cursor-pointer items-center border-b px-4 py-2 text-slate-700 dark:text-slate-400"
              }, [
                B($(Pg), {
                  class: Z(["h-4 w-4", {
                    "rotate-90": $(u)(`${f.title}-${d.name}`)
                  }])
                }, null, 8, ["class"]),
                h("span", Ng, U(d.items.length) + " " + U(f.title.toLowerCase()) + " inherited from ", 1),
                d.url ? (_(), w("a", {
                  key: 0,
                  class: "ml-1 text-blue-500 no-underline hover:underline",
                  href: d.url,
                  innerHTML: d.name
                }, null, 8, Lg)) : (_(), w("span", {
                  key: 1,
                  class: "ml-1 font-bold",
                  innerHTML: d.name
                }, null, 8, Mg)),
                h("div", Rg, U($(u)(`${f.title}-${d.name}`) ? "Click to collapse" : "Click to expand"), 1)
              ], 8, Dg),
              Lt(h("dl", Bg, [
                (_(!0), w(F, null, X(d.items, (v) => (_(), w("dd", null, [
                  h("a", {
                    href: $(i)(v),
                    class: "flex items-center text-blue-500 no-underline hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-600"
                  }, [
                    B($(Aa), { class: "mr-1.5 h-5 w-5 flex-shrink-0" }),
                    h("span", {
                      innerHTML: v.name
                    }, null, 8, Fg)
                  ], 8, Hg)
                ]))), 256))
              ], 512), [
                [Bn, $(u)(`${f.title}-${d.name}`)]
              ])
            ]))), 256))
          ], 512), [
            [Bn, $(o)(f).length]
          ])
        ])) : J("", !0)
      ], 64))), 256))
    ])) : J("", !0);
  }
}), Kg = (e) => ({
  Layout: E2,
  NotFound: rr,
  enhanceApp(t) {
    const { app: n, router: r, siteData: o } = t;
    n.component("FlavorTabs", I2), n.component("CodeTabs", R2), n.component("NotFound", rr), n.component("DeviceFrame", K2), n.component("Heading", J2), n.component("ExternalButtonLink", Z2), n.component("StackBlitzLinks", cv), n.component("StepList", pv), n.component("APIRef", Av), n.component("APIRefComment", Dv), n.component("APIRefHierarchy", tg), n.component("APIRefParameters", _g), n.component("APIRefSummary", zg), n.provide("useRouter", Cl), n.provide("useRoute", pn), n.provide(Ts, tf()), n.use(du, {
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
  Kg as default
};
